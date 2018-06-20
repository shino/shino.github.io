# Logger doc を読んだメモ

- http://erlang.org/doc/apps/kernel/logger_chapter.html
  - 21.0 リリース版

## はじめに (Top of chapter)

- logger は kernel application に所属する
- system start でデフォルトのハンドラーひとつをインストールする
  - 名前: default
  - ランタイムシステム、標準 behaviours, OTP applications からのログを受ける
  - デフォルトはターミナルに書かれる

シェルを起動してみてみる

```
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

```
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

```
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

```
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

```
16> logger_filters:domain(#{meta => #{domain => [my_app]}}, {log, equal, [my_app]}).
#{meta => #{domain => [my_app]}}
17> logger_filters:domain(#{meta => #{domain => [my_app]}}, {log, equal, [otp]}).
ignore
```

使用例

```
logger:set_handler_config(default, filter_default, log).
Filter = {fun logger_filters:domain/2, {stop, sub, [otp, sasl]}}.
logger:add_handler_filter(default, no_sasl, Filter).
```


## ハンドラー

- `log/2` をエキスポートしたモジュールとして定義される。

```
log(LogEvent, Config) -> void()
```

- この関数はログイベントがすべてのプライマリフィルターとハンドラーフィルターを
  通過した場合に呼ばれる
  - 関数呼び出しはクライアントプロセス上で実行される
- Logger はハンドラーコールバックを複数追加することを許容する
  - 同じコールバックモジュールを使った複数のハンドラーインスタンスを追加できる。
  - 個々のインスタンスはハンドラー ID で区別される
- オプショナルコールバック関数
  - `adding_handler/1`, `changng_config/2`, `removing_handler/1`
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

```
add_report_handler(Module, Args) when is_atom(Module) ->
    _ = logger:add_handler(?MODULE,?MODULE,#{level=>info,filter_default=>log}),
    gen_event:add_handler(?MODULE, Module, Args).
```

- `error_logger:start` は `logger_sup` に自分を追加して
  `start_link` で `gen_event` プロセスを開始している

```
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

### 設定例: `standard_io` の代わりにファイルに出力する

```
[{kernel,
  [{logger,
    [{handler, default, logger_std_h,  % {handler, HandlerId, Module,
      #{config => #{type => {file,"log/erlang.log"}}}}  % Config}
    ]}]}].
```

### 設定例: 一行ログ形式にする

```
[{kernel,
  [{logger,
    [{handler, default, logger_std_h,
      #{formatter => {logger_formatter, #{single_line => true}}}}
    ]}]}].
```

### 設定例: pid を出力する

```
[{kernel,
  [{logger,
    [{handler, default, logger_std_h,
      #{formatter => {logger_formatter,
                        #{template => [time," ",pid," ",msg,"\n"]}}}}
    ]}]}].
```

### 設定例: エラーレベルのファイルとデバッグログファイルに分けて出力する

```
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

