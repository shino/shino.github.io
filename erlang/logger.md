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

言葉の定義

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
- 図
  - http://erlang.org/doc/apps/kernel/logger_arch.png
