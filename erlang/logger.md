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


