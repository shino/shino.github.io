# Logger doc を読んだメモ

- http://erlang.org/doc/apps/kernel/logger_chapter.html
  - 21.0 リリース版
- メモと言うか、雑な翻訳のほうが近い

<!-- markdown-toc start - Don't edit this section. Run M-x markdown-toc-refresh-toc -->
**Table of Contents**

- [Logger doc を読んだメモ](#logger-doc-を読んだメモ)
    - [はじめに (Top of chapter)](#はじめに-top-of-chapter)
    - [Overview](#overview)
    - [Logger API](#logger-api)
        - [ログレベル](#ログレベル)
        - [ログメッセージ](#ログメッセージ)
        - [メタデータ](#メタデータ)
    - [フィルター](#フィルター)
    - [ハンドラー](#ハンドラー)
    - [フォーマッター](#フォーマッター)
    - [設定](#設定)
        - [プライマリロガー設定 (詳細略)](#プライマリロガー設定-詳細略)
        - [ハンドラー設定 (詳細略)](#ハンドラー設定-詳細略)
        - [Kernel 設定パラメータ](#kernel-設定パラメータ)
        - [設定例: standard_io の代わりにファイルに出力する](#設定例-standardio-の代わりにファイルに出力する)
        - [設定例: 一行ログ形式にする](#設定例-一行ログ形式にする)
        - [設定例: pid を出力する](#設定例-pid-を出力する)
        - [設定例: エラーレベルのファイルとデバッグログファイルに分けて出力する](#設定例-エラーレベルのファイルとデバッグログファイルに分けて出力する)
    - [error_logger との後方互換性](#errorlogger-との後方互換性)
        - [実装](#実装)
        - [lager との関連](#lager-との関連)
    - [エラーハンドリング](#エラーハンドリング)
    - [例: ファイルにログ出力するハンドラーを追加する](#例-ファイルにログ出力するハンドラーを追加する)
    - [例: ハンドラーを実装する](#例-ハンドラーを実装する)
    - [ハンドラーを過負荷から保護する](#ハンドラーを過負荷から保護する)
        - [メッセージキューの長さ](#メッセージキューの長さ)
        - [ログ要求のバースト制御](#ログ要求のバースト制御)
    - [過負荷に陥ったハンドラーの終了](#過負荷に陥ったハンドラーの終了)

<!-- markdown-toc end -->


## はじめに (Top of chapter)

- logger は kernel application に所属する
- system start でデフォルトのハンドラーひとつをインストールする
  - 名前: default
  - ランタイムシステム、標準 behaviours, OTP applications からのログを受ける
  - デフォルトはターミナルに書かれる

シェルを起動してみてみる

```erlang
1> logger:get_config().
#{handlers =>
      [#{config =>
             #{handler_pid => <0.69.0>,
               mode_tab => #Ref<0.624384036.2451177473.63388>,
               type => standard_io},
         filter_default => stop,
         filters =>
             [{remote_gl,{fun logger_filters:remote_gl/2,stop}},
              {domain,{fun logger_filters:domain/2,
                       {log,super,[otp,sasl]}}},
              {no_domain,{fun logger_filters:domain/2,
                          {log,undefined,[]}}}],
         formatter =>
             {logger_formatter,#{legacy_header => true,single_line => false}},
         id => default,level => all,module => logger_std_h}],
  module_levels => [],
  primary =>
      #{filter_default => log,filters => [],level => notice}}
```

- 設定により、ファイルに書く、 `disk_log` に書く、などが選択可能
- default handler の変更や無効化、カスタムハンドラーへの置き換え、
  追加のハンドラーのインストールが出来る

## Overview

- **log event** ログイベント
  - **log level** (ログレベル), **message** (メッセージ),
    **metadata** (メタデータ)から構成される
- Logger backend は API からのログイベントをフォワードする。
  - まず **primary filters** (プライマリフィルター)のセットを通し
  - 次に各ログハンドラーに伴うセカンダリフィルターを通す
    - セカンダリフィルターは、以降 **handler filters** (ハンドラーフィルター)と呼ぶ
- 個々のフィルターセットは
  - **log level check** (ログレベルチェック)と
  - ゼロ個以上の **filter functions** (フィルター関数)から構成される

2つのハンドラーがある場合の構成図
![OTP doc](http://erlang.org/doc/apps/kernel/logger_arch.png)

- プライマリのログレベルはモジュール単位のログレベルで上書きできる。
  - 特定の部分だけログをたくさん出すことが可能
- フィルタ関数はログレベルよりも複雑なフィルタが可能。
  - イベント内容によって stop, pass できる
  - ログイベント自体の変更もできる
- ログイベントがプライマリフィルターとハンドラーフィルターを通過した場合、
  Logger はエベントを **handler callback** (ハンドラーコールバック)にフォワードする。
  - ハンドラーはフォーマットと目的地へのプリントを行う
- ここまでの全てとハンドラーコールバックの呼び出しはクライアントプロセス上で実行される
  - つまり、ログイベントが発行されたプロセス
  - 他のプロセスが関与するか否かはハンドラー実装に依存する

## Logger API

- マクロと関数 `logger:Level/1,2,3` で構成される。
  - `logger:log(Level,Arg1[,Arg2[,Arg3]])` もある。
- マクロはロケーション(呼び出し元)の情報をメタデータに入れ、
  case 分でくるむことで遅延評価にする。

マクロをみてみる。 `lib/kernel/include/logger.hrl` から抜粋。

```erlang
-define(LOG_INFO(A),?DO_LOG(info,[A])).
-define(LOG_INFO(A,B),?DO_LOG(info,[A,B])).
-define(LOG_INFO(A,B,C),?DO_LOG(info,[A,B,C])).

-define(LOCATION,#{mfa=>{?MODULE,?FUNCTION_NAME,?FUNCTION_ARITY},
                   line=>?LINE,
                   file=>?FILE}).

-define(DO_LOG(Level,Args),
        case logger:allow(Level,?MODULE) of
            true ->
                apply(logger,macro_log,[?LOCATION,Level|Args]);
            false ->
                ok
        end).
-endif.
```

- mfa, line, file がメタデータに入っている
- logger:allow してから apply

### ログレベル

`lib/kernel/src/logger_internal.hrl` から抜粋

```erlang
-define(LOG_NONE,-1).
-define(EMERGENCY,0).
-define(ALERT,1).
-define(CRITICAL,2).
-define(ERROR,3).
-define(WARNING,4).
-define(NOTICE,5).
-define(INFO,6).
-define(DEBUG,7).
-define(LOG_ALL,10).
```

### ログメッセージ

- 構成は3種類
  - フォーマット文字列と引数
    - `logger:error("The file does not exist: ~ts",[Filename])`
  - 文字列
    - `logger:notice("Something strange happened!")`
  - レポート
    - マップかキーバリューのリストと、メタデータ内の **report callback**

レポートの例

```erlang
logger:debug(#{got => connection_request, id => Id, state => State},
             #{report_cb => fun(R) -> {"~p",[R]} end})
```

### メタデータ

- ログメッセージに伴う追加データ
- プロセスメタデータ
  - プロセスに適用され、プロセス内からの呼び出しで Logger がメタデータを付加する
  - `logger:set_process_metadata/1`, `logger:update_process metadata/1`
- 単発のメタデータ
  - `?LOG_ERROR("Connection closed",#{context => server})`

## フィルター

- プライマリまたは特定のハンドラーに付随する
  - Logger はまずプライマリフィルターを呼び出す
  - それがすべて通ったら続いて個別のハンドラーフィルターを呼び出す

- フィルター定義
  - `{FilterFun, Extra}`
  - `FilterFun`: arity 2 の関数、`Extra` は任意
  - フィルターを適用する際には Logger は引数1にログイベント、
    引数2に `Extra` を設定する。
- フィルター関数は `stop`, `ignore` またはログイベント(変更したものでも良い)を返す
- `stop` の場合、ログイベントは破棄される。
  - プライマリフィルターの場合、ハンドラーフィルターやコールバックは呼ばれない
  - ハンドラーフィルターの場合、対応するハンドラーコールバックは呼ばれない
    - 次のハンドラーにフォワードされる
- ログイベントが返った場合、次のフィルター関数が実行される
  - 引数1は返ってきたログイベント
- `ignore` の場合、ログイベントを理解できなかったことを示す
  - 他のフィルターに任される

- `filter_default` オプション
  - すべてのフィルタが `ignore` を返した場合、またはフィルタがない場合の挙動を設定する
  - デフォルトは `log`
    - Logger はハンドラーコールバックを呼び出す
  - `stop` に設定すると Logger は対応するイベントを破棄する

関数

- プライマリフィルター
  - `logger:add_primary_filter/2`, `logger:remove_primary_filter/1`
  - フィルターに ID がある
- ハンドラーフィルター
  - `logger:add_handler_filter/3`, `logger:remove_handler_filter/2`
  - ハンドラーに ID がある
  - フィルターにも ID がある
- 設定参照
  - `logger:get_config/0`
  - `logger:get_primary_config/0`
  - `logger:get_handler_config/1`
- ユーティリティ
  - `logger_filters:domain/2`, `logger_filters:level/2`, `logger_filters:progress/2`,
    `logger_filters:remote_gl/2`

`logger_filters:domain/2` の実行例

```erlang
16> logger_filters:domain(#{meta => #{domain => [my_app]}}, {log, equal, [my_app]}).
#{meta => #{domain => [my_app]}}
17> logger_filters:domain(#{meta => #{domain => [my_app]}}, {log, equal, [otp]}).
ignore
```

使用例

```erlang
logger:set_handler_config(default, filter_default, log).
Filter = {fun logger_filters:domain/2, {stop, sub, [otp, sasl]}}.
logger:add_handler_filter(default, no_sasl, Filter).
```


## ハンドラー

- `log/2` をエキスポートしたモジュールとして定義される。

```erlang
log(LogEvent, Config) -> void()
```

- この関数はログイベントがすべてのプライマリフィルターとハンドラーフィルターを
  通過した場合に呼ばれる
  - 関数呼び出しはクライアントプロセス上で実行される
- Logger はハンドラーコールバックを複数追加することを許容する
  - 同じコールバックモジュールを使った複数のハンドラーインスタンスを追加できる。
  - 個々のインスタンスはハンドラー ID で区別される
- オプショナルコールバック関数
  - `adding_handler/1`, `changing_config/2`, `removing_handler/1`
- ビルトインハンドラー
  - `logger_std_h`
    - OTP が用いるデフォルトハンドラー
    - 複数インスタンス可能
    - ターミナルかファイルに出力
  - `logger_disk_log_h`
    - `disk_log` を使う以外は `logger_std_h` と同じ
  - `error_logger`
    - 後方互換性のためだけ
    - デフォルトでは開始されず、 `error_logger` イベントハンドラーが
      `error_logger:add_report_handler/1,2` で追加された時に開始される。
    - 以前の STDLIB, SASL の `error_logger` イベントハンドラーは存在するが、
      OTP 21.0 以降では追加されない。

`error_logger` まわりでソースをいくつか参照しておく。

- `error_logger:add_report_hander` は `logger` と `gen_event` に
  ハンドラーを登録している

```erlang
add_report_handler(Module, Args) when is_atom(Module) ->
    _ = logger:add_handler(?MODULE,?MODULE,#{level=>info,filter_default=>log}),
    gen_event:add_handler(?MODULE, Module, Args).
```

- `error_logger:start` は `logger_sup` に自分を追加して
  `start_link` で `gen_event` プロセスを開始している

```erlang
start() ->
    case whereis(?MODULE) of
        undefined ->
            ErrorLogger =
                #{id => ?MODULE,
                  start => {?MODULE, start_link, []},
                  restart => transient,
                  shutdown => 2000,
                  type => worker,
                  modules => dynamic},
            case supervisor:start_child(logger_sup, ErrorLogger) of
                {ok,_} ->
                    ok;
                Error ->
                    Error
            end;
        _ ->
            ok
    end.

start_link() ->
    gen_event:start_link({local, ?MODULE},
                         [{spawn_opt,[{message_queue_data, off_heap}]}]).
```

## フォーマッター

- フォーマッターはハンドラー実装でのログイベントの最終フォーマット化に使われる
  - ハンドラーコールバックはフォーマッタの情報を
  - `HModule:log/2` の引数2から、ハンドラー設定として受け取る
- フォーマッター情報の構成
  - フォーマッターモジュール `FModule`
    - `format(LogEvent,FConfig) -> FormattedLogEntry`
  - その設定 `FConfig`
- オプショナルコールバック
  - `check_config(FConfig)`
  - フォーマッター情報を設定、または変更する時に正当性チェックができる

## 設定

- システム開始時、Logger は Kernel 設定パラメータで設定される
- 実行時、Logger 設定は API 関数で変更できる

### プライマリロガー設定 (詳細略)

- `get_primary_config/0`
- `set_primary_config/1,2`
- `update_primary_config/1`
- `add_primary_filter/2`
- `remove_primary_filter/1`

### ハンドラー設定 (詳細略)

- `get_handler_config/0,1`
- `set_handler_config/2,3`
- `update_handler_config/2`
- `add_handler_filter/3`
- `remove_handler_filter/2`
- `update_formatter_config/2,3`

### Kernel 設定パラメータ

- `logger = [Config]`
  - Logger の設定
    - ただし以下は除外
      - プライマリログレベルは `logger_level` で設定する
      - SASL エラーロギングは `logger_sasl_compatible` で設定する
  - `Config` は次のうちから任意の数
    - `{handler, default, undefined}`
      - デフォルトハンドラーを無効化する
    - `{handler, HandlerId, Module, HandelrConfig}`
      - デフォルトハンドラーの設定変更
      - または新しいハンドラーの追加
    - `{filters, FilterDefault, [Filter]}`
      - プライマリフィルタの追加
    - `{module_level, Level, [Module]}`
      - モジュールログレベルの設定
- `logger_level = Level`
  - プライマリログレベルの設定
- `logger_sasl_compatible = true | false`
  - SASL エラーロギングとの互換性を指定する

### 設定例: standard_io の代わりにファイルに出力する

```erlang
[{kernel,
  [{logger,
    [{handler, default, logger_std_h,  % {handler, HandlerId, Module,
      #{config => #{type => {file,"log/erlang.log"}}}}  % Config}
    ]}]}].
```

### 設定例: 一行ログ形式にする

```erlang
[{kernel,
  [{logger,
    [{handler, default, logger_std_h,
      #{formatter => {logger_formatter, #{single_line => true}}}}
    ]}]}].
```

### 設定例: pid を出力する

```erlang
[{kernel,
  [{logger,
    [{handler, default, logger_std_h,
      #{formatter => {logger_formatter,
                        #{template => [time," ",pid," ",msg,"\n"]}}}}
    ]}]}].
```

### 設定例: エラーレベルのファイルとデバッグログファイルに分けて出力する

```erlang
[{kernel,
  [{logger,
    [{handler, default, logger_std_h,
      #{level => error,
        config => #{type => {file, "log/erlang.log"}}}},
     {handler, info, logger_std_h,
      #{level => debug,
        config => #{type => {file, "log/debug.log"}}}}
    ]}]}].
```

## error_logger との後方互換性

- ログの API
  - error_logger API は存在すがレガシーコードでしか使うべきでない
    - 後のリリースで削除される
  - `error_logger:error_report/1,2` と `error_logger:error_msg/1,2` 、また
    warning と info についての関連関数は、
    Logger の `logger:log(Level,Report,Metadata)` にフォワードされる
    - `Level` は関数名から決まる
    - `Report` はログメッセージを含む
    - `Metadata` はレガシー `error_logger` との互換性を保つために使うことが出来る
      追加情報を持っている
- 出力フォーマット
  - デフォルトでは互換フォーマットである
  - そのため、 `logger_formatter` の設定 `legacy_header` が `true` になっている
- SASL レポート
  - SASL レポートとはスーパーバイザーレポート、クラッシュレポート、プログレス
    レポートを指す
  - Erlang/OTP 21.0 より前では
    - SASL アプリケーションが実行中のみログ出力されており、
    - SASL の `sasl_report_tty_h`, `sasl_report_file_h` ハンドラーで処理されていた
  - Erlang/OTP 21.0 では SASL レポートの概念が削除され、デフォルトの挙動は次の通り
    - スーパーバイザーレポート、クラッシュレポート、プログレスレポートは
      SASL アプリケーションに関連づかない
    - スーパーバイザーレポートとクラッシュレポートは `error` レベルのログイベントで、
      Kernel で開始されるでふととハンドラーを通じてログ出力される
    - プログレスレポートは `info` レベルログイベントで 発行され、デフォルトの
      プライマリログレベルが `notice` のため出力されない
      - 出力するにはプライマリログレベルを `info` に設定する
    - 出力フォーマットはすべてのログイベントで同じ
  - もし、以前の振る舞いを好む場合、Kernel 設定パラメータの `logger_sasl_compatible` を
    `true` に設定する
  - すべての SASL レポートはメタデータの `domain` フィールドが `[otp, sasl]` である

### 実装

`gen_server.erl` から error_logger 互換の呼び出し部分抜粋:

```erlang
error_info(Reason, Name, From, Msg, Mod, State, Debug) ->
    ?LOG_ERROR(#{label=>{gen_server,terminate},
                 name=>Name,
                 last_message=>Msg,
                 state=>format_status(terminate, Mod, get(), State),
                 reason=>Reason,
                 client_info=>client_stacktrace(From)},
               #{domain=>[otp],
                 report_cb=>fun gen_server:format_log/1,
                 error_logger=>#{tag=>error}}),
```

`error_logger.erl` では `#{error_logger => #{tag => Tag}}` で拾う:

```erlang
do_log(Level,{Format,Args},#{?MODULE:=#{tag:=Tag}}=Meta)
```

error_logger はその他の形式は捨てる

### lager との関連

- Lager は 3.6.3 で部分的な OTP 21 互換性が入っている
  - OTP 21 support · erlang-lager/lager@05bc579
  - https://github.com/erlang-lager/lager/commit/05bc579028d3e87f3e043238e08480354c9fd222
- OTP 21 で lager application が開始された後の状態
  - sup. tree そのものではないことに注意

```erlang
logger_sup
     |
  (child)
     |
     +-- error_logger (gen_event)
              |           - logger のハンドラー
              |           - error_logger:start() で開始される
      (gen_event handler)
              |
              +-- error_logger_lager_h
                          - error_logger (gen_event) のハンドラー
                          - sup. tree としては lager_handler_watcher_sup 配下に居る
```

## エラーハンドリング

- すべてのハンドラーとフォーマッターはログイベントのでデータをフォーマット化する際に
  エラーに注意すべきである
- フィルターやハンドラーがクラッシュすると、Logger はそれを削除し、ターミナルに
  短いエラーメッセージを出力する
  - クラッシュの理由を含むデバッグイベントも発行される

## 例: ファイルにログ出力するハンドラーを追加する

(略)

## 例: ハンドラーを実装する

(略)

## ハンドラーを過負荷から保護する

- デフォルトハンドラー `logger_std_h` と `logger_disk_log_h` は過負荷保護の
  メカニズムを持っている
  - それは、高負荷(多数のログリクエストを捌く必要がある)時に、ハンドラーが存続し、
    応答可能であるようにしてくれる

### メッセージキューの長さ

- ハンドラープロセスはメッセージキューの長さを常に把握している
- しきい値を超えた場合はアクションを取る
- その目的はハンドラーを流入するログイベントのペースに追いついている状態にすること
- メモリー使用は際限なく増えてはいけない
  - それはいつかクラッシュにつながる
- 3つのしきい値と関連するアクションが存在する
  - `sync_mode_qlen`
    - このしきい値よりキュー長が短い場合、ログイベントは非同期で処理される
      - つまり Logger API を呼び出したクライアントプロセスはハンドラーの処理を
        待つこと無く、イベントを送った後すぐに処理を継続できる
    - メッセージ長がしきい値を超えた場合
      - ハンドラーは同期的に処理するようになる
      - つまりクライアントプロセスがハンドラーの処理、応答を待つことになる
      - `sync_mode_qlen` よりもキュー長が短くなったらまた非同期モードで動作する
    - 非同期モードから同期モードへの変更により、ひとつか少数の送信者によるロギング
      のペースを抑えることが出来る
      - しかし多数の並列送信者には十分に対応できない
    - デフォルト: 10 メッセージ
  - `drop_mode_qlen`
    - このしきい値を超えた場合、ハンドラーはすべての新規ログイベントを破棄する
      モードに入る
    - このモードではログイベントを破棄するため、ログは出力されない
    - ハンドラーはすでにキューにあるイベントを処理する
    - キュー長が敷地より少なくなると、同期、または非同期モードに戻る
    - ハンドラーが drop モードを有効にしたときと無効にしたときには、
      その情報がログに出力される
    - デフォルト: 200 メッセージ
  - `flush_qlen`
    - このしきい値を超えた場合、flush (一掃)操作が発生する
    - 一掃のため、ハンドラーはメッセージキューにあるメッセージを、
      レシーブループで、ログすること無く捨てる
    - 同期ログ要求の応答を待っているクライアントプロセスは、ハンドラーから
      要求が破棄されたという応答を受ける
    - ハンドラープロセスは一掃ループの間、自身の優先度を上げる
    - 一掃の操作が終わったとき、ハンドラーは削除されたイベント数を出力する
    - デフォルト: 1000 メッセージ
- これらが正しく動作するため次の条件が必要
  - `sync_mode_qlen =< drop_mode_qlen =< flush_qlen`
  - `drop_mode_qlen > 1`
- いずれかのモードを無効化する方法
  - `sync_mode_qlen` がゼロの場合、すべてのイベントは同期的に処理される
    - つまり非同期モードが無効になる
  - `sync_mode_qlen` が `drop_mode_qlen` と同じ値の場合、同期モードが無効化される
    - つまり、ハンドラーはつねに非同期モードで動くか、破棄または一掃が発動されるかである
  - `drop_mode_qlen` が `flush_qlen` と同じ値の場合、破棄モードは無効化される

設定例

```erlang
logger:add_handler(my_standard_h, logger_std_h,
                   #{config => #{type => {file,"./system_info.log"},
                                 sync_mode_qlen => 100,
                                 drop_mode_qlen => 1000,
                                 flush_qlen => 2000}}).
```

### ログ要求のバースト制御

- ログメッセージの大きなバースト(短期間の多数のイベント受信)は次のような
  問題を引き起こすことがある
  - ログファイルが短期間にとても大きくなる
  - ログ循環が短期間に起こり、データが上書きされる
  - 書き込みバッファが大きくなり、ファイルの同期操作が遅くなる
- これに対処するため、どちらのビルトインのハンドラーとも、ある期間に処理されうる
  イベント最大数を規定することができる
- バースト制御が有効になった場合、ハンドラーは多量の出力によるログ詰まりを
  避けることが出来る
- 設定パラメータ
  - `burst_limit_enabled`
    - `true` でバースト制御有効、`false` で無効
    - デフォルト: `true`
  - `burst_limit_max_count`
    - `burst_limit_window_time` の期間に処理しうる最大のイベント数
    - この制限に達すると、期間中の後続イベントはドロップされる
    - デフォルト: 500
  - `burst_limit_window_time`
    - `burst_limit_max_count` を見よ
    - デフォルト: 1000 ミリ秒

設定例

```erlang
logger:add_handler(my_disk_log_h, logger_disk_log_h,
                   #{config => #{file => "./my_disk_log",
                                 burst_limit_enable => true,
                                 burst_limit_max_count => 20,
                                 burst_limit_window_time => 500}}).
```

## 過負荷に陥ったハンドラーの終了

- ハンドラーが高負荷ピークをクラッシュ無しでやり過ごせたとしても、長大なメッセージキューや
  多量のメモリ消費に陥る可能性は残る
- ハンドラーが法外な状態にならないよう、自動で停止と再起動する機能も過負荷保護に含まれる
- 設定パラメータ
  - `overload_kill_enable`
    - `true` でこの機能を有効化、`false` で無効化
    - デフォルト: `false`
  - `overload_kill_qlen`
    - 許容される最大のキュー長
    - これを超えた場合、ハンドラープロセスは停止させられる
    - デフォルト: 20000
  - `overload_kill_mem_size`
    - 許容される最大のメモリサイズ
    - これを超えた場合、ハンドラープロセスは停止させられる
    - デフォルト: 3000000 バイト (3MB)
  - `overload_kill_restart_after`
    - ハンドラー停止させれた後、再起動までの遅延時間を指定する
    - `infinity` を指定すると再起動されない
    - デフォルト: 5000 ミリ秒

- 過負荷によりハンドラーが停止させられた場合、ログに情報が出力される
- また、再起動が起こったこととハンドラーが復帰したことも出力される

*Note*

- ログイベントのサイズはハンドラーに必要なメモリ量に影響を与える。
- ログイベントのサイズを制限する方法については、 `logger_formatter(3)` を参照のこと
  - http://erlang.org/doc/man/logger_formatter.html

# 以下、ドキュメント以外の話

## simple logger

- kernel application で、 Logger ハンドラーが追加される前にロギングするため
  simple ロガーが存在する
- デフォルトハンドラーが追加された時点で削除される
- しかし `sys.config` で default ハンドラーを無効化すると生き残る

sys.config

```erlang
[
 {kernel, [
           {logger,
            [
             %% デフォルトの Logger ハンドラーを無効化
             {handler, default, undefined}
            ]
].
```

起動直後の Logger 設定

```erlang
#{handlers =>
      [#{filter_default => log,filters => [],
         formatter => {logger_formatter,#{}},
         id => error_logger,level => info,module => error_logger},
       #{filter_default => stop,
         filters =>
             [{remote_gl,{fun logger_filters:remote_gl/2,stop}},
              {domain,{fun logger_filters:domain/2,
                       {log,super,[otp,sasl]}}},
              {no_domain,{fun logger_filters:domain/2,
                          {log,undefined,[]}}}],
         formatter => {logger_formatter,#{}},
         id => simple,                        %% simple ハンドラー
         level => all,
         module => logger_simple_h}],
  module_levels => [],
  primary =>
      #{filter_default => log,filters => [],level => notice}}
```



- 困るのは、クラッシュログがこの simple ハンドラー経由で

