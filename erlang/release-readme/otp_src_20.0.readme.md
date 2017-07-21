# Erlang/OTP 20.0 Release README

```
Patch Package:           OTP 20.0
Git Tag:                 OTP-20.0
Date:                    2017-06-21
Trouble Report Id:       OTP-10289, OTP-11695, OTP-12148, OTP-12872,
                         OTP-13006, OTP-13529, OTP-13684, OTP-13690,
                         OTP-13692, OTP-13779, OTP-13794, OTP-13801,
                         OTP-13805, OTP-13806, OTP-13810, OTP-13820,
                         OTP-13827, OTP-13830, OTP-13831, OTP-13842,
                         OTP-13844, OTP-13856, OTP-13860, OTP-13862,
                         OTP-13873, OTP-13879, OTP-13900, OTP-13903,
                         OTP-13908, OTP-13909, OTP-13921, OTP-13924,
                         OTP-13961, OTP-13968, OTP-13976, OTP-13983,
                         OTP-14000, OTP-14001, OTP-14002, OTP-14006,
                         OTP-14029, OTP-14035, OTP-14037, OTP-14038,
                         OTP-14039, OTP-14042, OTP-14057, OTP-14058,
                         OTP-14059, OTP-14066, OTP-14068, OTP-14069,
                         OTP-14070, OTP-14071, OTP-14072, OTP-14076,
                         OTP-14077, OTP-14087, OTP-14089, OTP-14092,
                         OTP-14094, OTP-14102, OTP-14110, OTP-14111,
                         OTP-14117, OTP-14123, OTP-14125, OTP-14127,
                         OTP-14137, OTP-14140, OTP-14146, OTP-14149,
                         OTP-14152, OTP-14168, OTP-14171, OTP-14178,
                         OTP-14179, OTP-14183, OTP-14186, OTP-14190,
                         OTP-14193, OTP-14197, OTP-14201, OTP-14205,
                         OTP-14216, OTP-14218, OTP-14219, OTP-14221,
                         OTP-14226, OTP-14238, OTP-14243, OTP-14245,
                         OTP-14247, OTP-14253, OTP-14255, OTP-14258,
                         OTP-14259, OTP-14261, OTP-14263, OTP-14264,
                         OTP-14267, OTP-14270, OTP-14272, OTP-14274,
                         OTP-14276, OTP-14277, OTP-14278, OTP-14284,
                         OTP-14285, OTP-14287, OTP-14289, OTP-14291,
                         OTP-14293, OTP-14294, OTP-14295, OTP-14296,
                         OTP-14302, OTP-14303, OTP-14304, OTP-14305,
                         OTP-14306, OTP-14307, OTP-14310, OTP-14312,
                         OTP-14314, OTP-14316, OTP-14317, OTP-14318,
                         OTP-14319, OTP-14323, OTP-14324, OTP-14328,
                         OTP-14330, OTP-14331, OTP-14332, OTP-14333,
                         OTP-14335, OTP-14336, OTP-14337, OTP-14338,
                         OTP-14339, OTP-14343, OTP-14345, OTP-14347,
                         OTP-14348, OTP-14352, OTP-14356, OTP-14357,
                         OTP-14360, OTP-14361, OTP-14362, OTP-14369,
                         OTP-14371, OTP-14377, OTP-14380, OTP-14381,
                         OTP-14382, OTP-14384, OTP-14385, OTP-14387,
                         OTP-14388, OTP-14390, OTP-14393, OTP-14394,
                         OTP-14399, OTP-14400, OTP-14401, OTP-14404,
                         OTP-14405, OTP-14407, OTP-14408, OTP-14409,
                         OTP-14410, OTP-14411, OTP-14415, OTP-14417,
                         OTP-14419, OTP-14421, OTP-14422, OTP-14423,
                         OTP-14424, OTP-14425, OTP-14426, OTP-14429,
                         OTP-14431, OTP-14433, OTP-14434, OTP-14435,
                         OTP-14436, OTP-14437, OTP-14438, OTP-14441,
                         OTP-14442, OTP-14443, OTP-14447, OTP-14453,
                         OTP-14454, OTP-14455, OTP-14531
Seq num:                 ERIERL-20, ERIERL-22, ERIERL-29, ERL-165,
                         ERL-208, ERL-278, ERL-308, ERL-332, ERL-360,
                         ERL-369, ERL-376, ERL-393, ERL-395, ERL-399,
                         ERL-401, ERL-417, ERL-429, ERL-430, ERL-82,
                         seq13299, seq13315
System:                  OTP
Release:                 20
Application:             asn1-5.0, common_test-1.15, compiler-7.1,
                         cosProperty-1.2.2, crypto-4.0,
                         debugger-4.2.2, dialyzer-3.2, diameter-2.0,
                         edoc-0.9, erl_docgen-0.7, erl_interface-3.10,
                         erts-9.0, eunit-2.3.3, hipe-3.16, inets-6.4,
                         jinterface-1.8, kernel-5.3, megaco-3.18.2,
                         mnesia-4.15, observer-2.4, orber-3.8.3,
                         parsetools-2.1.5, public_key-1.4.1,
                         reltool-0.7.4, runtime_tools-1.12,
                         sasl-3.0.4, snmp-5.2.6, ssh-4.5, ssl-8.2,
                         stdlib-3.4, syntax_tools-2.1.2, tools-2.10,
                         wx-1.8.1, xmerl-1.3.15
Predecessor:             OTP

 Check out the git tag OTP-20.0, and build a full OTP system including
 documentation.
```

# HIGHLIGHTS

## OTP-10289    Application(s): stdlib

- **POTENTIAL INCOMPATIBILITY**
- 文字列のユニコードサポート。
  - unicode モジュールに正規化関数を追加。
  - string モジュール API を拡張: 改善されたユニコード処理と書要素クラスタに対
    して機能する関数を追加。新しい関数は unicode:chardata() 型に作用するため、
    UTF-8 バイナリを入力として受け取る。
- 古い string API は obsolete とマークされた。
- 返り値が幾つかのエラーケースで変更された。

```
             Related Id(s): OTP-10309

             *** POTENTIAL INCOMPATIBILITY ***

             Improved unicode support for strings. Added
             normalization functions in the unicode module. Extended
             the string module API with new functions with improved
             unicode handling and that works on grapheme clusters.
             The new functions operates on the unicode:chardata()
             type, thus they also accept UTF-8 binaries as input.

             The old string API have been marked as obsolete. The
             return values have been changed for some error cases.
```


## OTP-13820    Application(s): ssl

- **POTENTIAL INCOMPATIBILITY**
- TLS-1.2 クライアントが常に hello メッセージをそれ自体の形式で送
  信するようになった。以前のバージョンでは最も低いサポートバージョ
  ンで送っていた。これは最新の RFC で支持される変更である。
- これは新しいサーバとの相互運用性を円滑にする。潜在的に、可能性
  は低いが、古い RFC に固執し知らない拡張を無視する古いサーバとの
  間で問題になるかもしれない。

```
             *** POTENTIAL INCOMPATIBILITY ***

             TLS-1.2 clients will now always send hello messages on
             its own format, as opposed to earlier versions that
             will send the hello on the lowest supported version,
             this is a change supported by the latest RFC.

             This will make interoperability with some newer servers
             smoother. Potentially, but unlikely, this could cause a
             problem with older servers if they do not adhere to the
             RFC and ignore unknown extensions.
```

## OTP-13900    Application(s): crypto

- crypto アプリケーションが OpenSSL 1.1 をサポート

```
             The crypto application now supports OpenSSL 1.1.
```

## OTP-13921    Application(s): crypto, ssl

- Related Id(s): PR-1180
- Erlang/OTP が OpenSSL を FIPS-140 モードで利用できるようになった。
  - 特定のセキュリティ要請(主に US 連邦政府の幾つかの部門)を満たすため
- cf. FIPS mode Erlang -- FIPS mode
  http://erlang.org/doc/apps/crypto/fips.html

```
             Allow Erlang/OTP to use OpenSSL in FIPS-140 mode, in
             order to satisfy specific security requirements (mostly
             by different parts of the US federal government).

             See the new crypto users guide "FIPS mode" chapter
             about building and using the FIPS support which is
             disabled by default.

             (Thanks to dszoboszlay and legoscia)
```

## OTP-14059    Application(s): kernel, stdlib

- 変更されたコードを検知する関数が追加された
- code:modified_modules/0 はロードされているモジュールの中で
  ディスク上変更されているものを、すべて返す
- code:module_status/1 はモジュールの状態を返す
- シェルと c モジュールでは mm/0 が code:modified_modules/0 の
  短縮形であり、 lm/0 は変更されたすべてのモジュールをリロードする。

```
             Functions for detecting changed code has been added.
             code:modified_modules/0 returns all currently loaded
             modules that have changed on disk. code:module_status/1
             returns the status for a module. In the shell and in c
             module, mm/0 is short for code:modified_modules/0, and
             lm/0 reloads all currently loaded modules that have
             changed on disk.
```

## OTP-14094    Application(s): stdlib

- **POTENTIAL INTEROPERABILITY**
- ETS の操作を、テーブル識別子の型を integer から reference に
  変更することで最適化した。
  - reference はより少ない潜在的なロックコンテンションで、より直接の
    テーブルへのマッピングを可能にする。
  - 特にテーブルの生成と削除がよりスケールする。
- 不透明型である ETS テーブル識別子の変更は、その不透明型に誤った
  仮定を置いているコードでうまく動かないかもしれない。
- 単一の Eralng ノードで保存できるテーブル数は、 **以前は** 限定されていたが、
  もはや当てはまらない(メモリー使用を除いて)。
  - 以前のデフォルト制限は 1400 テーブルで、 `ERL_MAX_ETS_TABLES` 環境
    変数によって増加可能であった。このハードリミットは除外されたが、
    `ERL_MAX_ETS_TABLES` を設定するのは現在も有用である。
  - `ERL_MAX_ETS_TABLES` は、使用されるテーブルのおおよその最大数に設定される
    べきである。これは、この値を使って内部的に名前付きテーブルがつくられるから
    である。もし、多くの名前付きテーブルが作成され、 `ERL_MAX_ETS_TABLES` が
    増やされていない場合、名前付きテーブルのルックアップ性能が落ちる。

```
             *** POTENTIAL INCOMPATIBILITY ***

             Optimized ETS operations by changing table identifier
             type from integer to reference. The reference enables a
             more direct mapping to the table with less potential
             lock contention and makes especially creation and
             deletion of tables scale much better.

             The change of the opaque type for the ETS table
             identifiers may cause failure in code that make faulty
             assumptions about this opaque type.

             The number of tables stored at one Erlang node *used*
             to be limited. This is no longer the case (except by
             memory usage). The previous default limit was about
             1400 tables and could be increased by setting the
             environment variable ERL_MAX_ETS_TABLES before starting
             the Erlang runtime system. This hard limit has been
             removed, but it is currently useful to set the
             ERL_MAX_ETS_TABLES anyway. It should be set to an
             approximate of the maximum amount of tables used. This
             since an internal table for named tables is sized using
             this value. If large amounts of named tables are used
             and ERL_MAX_ETS_TABLES hasn't been increased, the
             performance of named table lookup will degrade.
```

## OTP-14110    Application(s): ssh

- **POTENTIAL INCOMPATIBILITY**
- キー交換アルゴリズムの最新化。 `draft-ietf-curdle-ssh-kex-sha2` の議論を
  参照。
- 旧式の脆弱なアルゴリズムを削除し、より強固な後任を追加。
  - 最新の ssh クライアント、サーバとの相互運用性を保つため。
  - アルゴリズムのデフォルト順序も調整されている。
- 撤去: 近年では安全ではない `diffie-hellman-group1-sha1` キー交換がデフォルトで
  は有効にならなくなった。これはオプション `preferred-algorithms` で有効化出来る。
- 追加: 以下の、新しくより強固なキー交換アルゴリズムが追加され、デフォルトで
  有効化された。
  - `diffie-hellman-group16-sha512`
  - `diffie-hellman-group18-sha512`
  - `diffie-hellman-group14-sha256`
- 疑問の余地が残る [RFC 6197] SHA1 ベースのアルゴリズム
  `diffie-hellman-group-exchange-sha1` と
  `diffie-hellman-group14-sha1` は、依然としてデフォルト有効のままである。
  - 最新のキー交換アルゴリズムを備えていない、昔からのクライアント、サーバーとの
    互換性を保つためである。
  - `draft-ietf-curdle-ssh-kex-sha2` が RFC になった場合、これらの SHA1 ベースの
    アルゴリズムは IETF により廃止予定となる。それらは Erlang/OTP のデフォルト
    から外れるかもしれない。

```
               *** POTENTIAL INCOMPATIBILITY ***

               Modernization of key exchange algorithms. See
               draft-ietf-curdle-ssh-kex-sha2 for a discussion.

               Removed an outdated weak algorithm and added stronger
               replacements to keep interoperability with other modern
               ssh clients and servers. The default ordering of the
               algorithms is also adjusted.

               Retired: The nowadays unsecure key-exchange
               diffie-hellman-group1-sha1 is not enabled by default,
               but can be enabled with the option
               preferred-algorithms.

               Added: The new stronger key-exchange
               diffie-hellman-group16-sha512,
               diffie-hellman-group18-sha512 and
               diffie-hellman-group14-sha256 are added and enabled by
               default.

               The questionable [RFC 6194] sha1-based algorithms
               diffie-hellman-group-exchange-sha1 and
               diffie-hellman-group14-sha1 are however still kept
               enabled by default for compatibility with ancient
               clients and servers that lack modern key-exchange
               alternatives. When the draft-ietf-curdle-ssh-kex-sha2
               becomes an rfc, those sha1-based algorithms and
               diffie-hellman-group1-sha1 will be deprecated by IETF.
               They might then be removed from the default list in
               Erlang/OTP.

```

## OTP-14152    Application(s): erts

- **POTENTIAL INCOMPATIBILITY**
- ダーティースケジューラー有効になり、SMP の Erlang ランタイムシステムでサポート
  される
- ダーティー NIF サポートに加えて、ダーティー BIF とダーティーガベージコレクション
  も導入された。
  - 完了までに長時間かかる可能性のあるすべてのガベージコレクションは、
    有効であればダーティースケジューラー上で実行される。
- スケジューラーとランキュー状態を調査する `erlang:statistics/1` は、
  ダーティースケジューラー対応で変更された。
  - この関数を使っているコードは、非互換性を考慮した書き換えを必要とする
    かもしれない。
  - 影響を受ける呼び出し例
    - `erlang:statistics(scheduler_wall_time)`
    - `statistics(total_run_queue_lengths)`
    - `statistics(total_active_tasks)` など

```
               *** POTENTIAL INCOMPATIBILITY ***

               Dirty schedulers are now enabled and supported on
               Erlang runtime systems with SMP support.

               Besides support for dirty NIFs also support for dirty
               BIFs and dirty garbage collection have been introduced.
               All garbage collections that potentially will take a
               long time to complete are now performed on dirty
               schedulers if enabled.

               erlang:statistics/1 with arguments inspecting scheduler
               and run queue states have been changed due to the dirty
               scheduler support. Code using this functionality may
               have to be rewritten taking these incompatibilities
               into consideration. Examples of such uses are calls to
               erlang:statistics(scheduler_wall_time),
               statistics(total_run_queue_lengths),
               statistics(total_active_tasks), etc.
```

# OTP-14178    Application(s): compiler, erts

- アトムは任意のユニコード文字を含むことが出来る。

```
               Atoms may now contain arbitrary Unicode characters.
```

# OTP-14183    Application(s): stdlib

- `gen_fsm` は廃止予定となり、 `gen_statem` に置き換えられた。
  - しかし、後方互換製のため、 `gen_fsm` はかなり長期間に渡り、
    隠し機能として存在し続けるだろう。

```
               gen_fsm is deprecated and is replaced by gen_statem,
               however for backwards compatibility reasons gen_fsm may
               continue to exist as an undocumented feature for quite
               some time.
```

# OTP-14193    Application(s): ssh

- 拡張ネゴシエーション機構と、 `draft-ietf-curdle-ssh-ext-info-05` の
  `server-sig-algs` 拡張が実装された。
- 関係する `draft-ietf-curdle-ssh-ext-info-05` が実装され、シグネチャ
  アルゴリズム `rsa-sha2-256` と `rsa-sha2-512` が導入された。

```
               The Extension Negotiation Mechanism and the extension
               server-sig-algs in draft-ietf-curdle-ssh-ext-info-05
               are implemented.

               The related draft-ietf-curdle-rsa-sha2-05 is
               implemented and introduces the signature algorithms
               rsa-sha2-256 and rsa-sha2-512.
```

# OTP-14197    Application(s): ssl

- TLS クライアントプロセスがデフォルトで `public_key:pkix_verify_hostname/2` を
  呼ぶようになった。
  - 証明書パス検証確認において、接続のホスト名をサーバ証明書のホスト名
    を検証するため。
  - ユーザーは明示的にこれを無効化出来る。
  - またホスト名が `connect` の第一引数から得られない場合や、
    サーバー名を指示するオプションが与えられない場合にはこの検査は行われない。

```
               TLS client processes will by default call
               public_key:pkix_verify_hostname/2 to verify the
               hostname of the connection with the server certificates
               specified hostname during certificate path validation.
               The user may explicitly disables it. Also if the
               hostname can not be derived from the first argument to
               connect or is not supplied by the server name
               indication option, the check will not be performed.
```

# OTP-14205    Application(s): erts

- その場しのぎのマジックバイナリはすべて erlang reference の使用に置き換えられた。
- マジックバイナリは空のバイナリとして使われていたが、実際には Erlang VM 内部の
  他のデータを参照していた。
  - それらが空バイナリであったため、異なるマジックバイナリは等価で、また
    erlang ノードからカイブに渡される際には内部データが失われていた。
- 新しい reference の利用はこれらのセマンティック上の奇妙な問題を持たず、
  また性能とメモリ使用の利点がマジックバイナリと同じになるよう最適化されている。
- マジックバイナリを使用していた例として、マッチ仕様と NIF リソースが挙げられる。

```
               All uses of the magic binary kludge has been replaced
               by uses of erlang references.

               A magic binary was presented as an empty binary, but
               actually referred other data internally in the Erlang
               VM. Since they were presented as empty binaries,
               different magic binaries compared as equal, and also
               lost their internal data when passed out of an erlang
               node.

               The new usage of references has not got any of these
               strange semantic issues, and the usage of these
               references has been optimized to give the same
               performance benefits as well as memory usage benefits
               as magic binaries had.

               A couple of examples of previous uses of magic binaries
               are match specifications and NIF resources.
```

# OTP-14219    Application(s): asn1

- 新しい `maps` オプションは、 `SEQUENCE` と `SET` の型の表現を(レコードではな
  く)マップに変更する。

```
               The new 'maps' option changes the representation of the
               types SEQUENCE and SET to be maps (instead of records).
```

# OTP-14226    Application(s): stdlib

- 以前の OTP バージョンにあった `erl_tar` は `USTAR` フォーマットのみを
  サポートしていた。 これはパス名をたかだか 255 バイトまでに制限しており、
  かつユニコード文字を含む名前をポータブルな方法でサポートしてなかった。
- 本バージョンで `erl_tar` のサポート形式が拡張された。
  - tar アーカイブを読み取る際には、現在よく使われる形式、例えば`v7`、`STAR`、
    `USTAR`、`PAX`、そして GNU tar の `STAR/USTAR` への拡張形式をサポートする。
  - tar アーカイブを書き込む際には、`erl_tar` は必要な場合(例えば長いファイル名
    やユニコード文字をファイル名に用いる場合)には `PAX` フォーマットで書き込む。
  - 可能であれば、`erl_tar` は今後も tar アーカイブを `USTAR` 形式で書き込む。
    これは最大限のポータビリティーのためである。

```
               erl_tar in previous versions of OTP only supports the
               USTAR format. That limited path names to at most 255
               bytes, and did not support Unicode characters in names
               in a portable way.

               erl_tar now has support for reading tar archives in the
               formats currently in common use, such as v7, STAR,
               USTAR, PAX, and GNU tar's extensions to the STAR/USTAR
               format. When writing tar archives, erl_tar can now
               write them in the PAX format if necessary (for example,
               to support very long filenames or filenames with
               Unicode characters). If possible, erl_tar will still
               write tar archives in the USTAR for maximum
               portability.
```

# OTP-14291    Application(s): ssl

- `connection_information/[1,2]` を拡張。
  - `session_id` と `master_secret`、 `client_random`、`server_random` は
    `connection_information/2` からアクセスできない。
  - 注意: `session_id` は `connection_information/1` にのみ追加されている。
  - この根拠は、接続のセキュリティに関する値は明示的に要求されるべきだからである。


```
               Extend connection_information/[1,2] . The values
               session_id, master_secret, client_random and
               server_random can no be accessed by
               connection_information/2. Note only session_id will be
               added to connection_information/1. The rational is that
               values concerning the connection security should have
               to be explicitly requested.
```

# OTP-14319    Application(s): stdlib

- Related Id(s): PR-1076
- 新しい関数 `ets:select_replace/2` を追加
  - これはアトミックな "compare-and-swap" 操作を ETS オブジェクトに対して
- [訳注] アトミック性
  - オブジェクト個々にはアトミックだが、イテレーション全体にはその保証はない
  - cf. http://erlang.org/doc/man/ets.html#select_replace-2

```
               Add new function ets:select_replace/2 which performs
               atomic "compare-and-swap" operations for ETS objects
               using match specifications.
```
# OTP-14331    Application(s): erts, stdlib
- Related Id(s): ERL-208
- **POTENTIAL INCOMPATIBILITY**
- OTP 内部の PCRE ライブラリバージョンを 8.33 から 8.44 にアップグレード。
  - このライブラリは正規表現モジュールの実装に使われている。
- 様々なバグ修正とともに、新バージョンはより良いスタック保護を可能にする。
  - この機能を利用するため、すべてのプラットフォームにおいて、標準のスケジューラ
    スレッドのスタックサイズがデフォルトで 128 kilo words に設定される。
  - このスタックサイズはシステム開始時に `+sss` コマンドライン引数を `erl`
    コマンドに渡すことで設定できる。
- PCRE の 8.33 から 8.40 の間の変更に関しては
  http://pcre.org/original/changelog.txt を参照のこと。

```
             *** POTENTIAL INCOMPATIBILITY ***

               Upgraded the OTP internal PCRE library from version
               8.33 to version 8.40. This library is used for
               implementation of the re regular expressions module.

               Besides various bug fixes, the new version allows for
               better stack protection. In order to utilize this
               feature, the stack size of normal scheduler threads is
               now by default set to 128 kilo words on all platforms.
               The stack size of normal scheduler threads can be set
               upon system start by passing the +sss command line
               argument to the erl command.

               See http://pcre.org/original/changelog.txt for
               information about changes made to PCRE between the
               versions 8.33 and 8.40.
```

# OTP-14356    Application(s): erts

- 様々な VM 内部のタイマー管理の改善。
  - これらの改善は timer wheel のメモリ消費を削減し、またタイマー処理に
    必要な作業量を減少させる。

```
               Various improvements of timer management internally in
               the VM. These improvements both reduced memory
               consumption of timer wheels as well as reduce the
               amount of work that has to be performed in order to
               handle timers.
```

# OTP-14388    Application(s): ssl

- DTLS の基本的なサポート。
  - OpenSSL と共にテストされている。
- `{protocol, dtls}` のオプションを `ssl` API 関数に渡すことで
  接続と listen をテスト。

```
               Basic support for DTLS that been tested together with
               OpenSSL.

               Test by providing the option {protocol, dtls} to the
               ssl API functions connect and listen.
```

# OTP-14407    Application(s): erts, otp

- `./configure --enable-lock-counter` はロックカウントをサポートする
  特別なエミュレーターのビルドを有効にする。
  - (このオプションは以前にも存在したが、デフォルトエミュレータの
    ビルドをロックカウント付きにするスイッチだった)
  - ロックカウントエミュレーターを開始するには `erl -emu_type lcnt` を
    用いる。
- Windows 上の `erl` は、コンパイルされたエミュレーターを開始するために、
  隠しオプション `-debug` があった。
  - そのオプションは削除され、 `erl -emu_type debug` を代わりに使用すること。

```
               './configure --enable-lock-counter' will enabling
               building of an additional emulator that has support for
               lock counting. (The option previously existed, but
               would turn on lock counting in the default emulator
               being built.) To start the lock-counting emulator, use
               'erl -emu_type lcnt'.

               On Windows, erl recognized the undocumented option
               -debug for starting a debug-compiled emulator. That
               option has been removed. Use 'erl -emu_type debug'
               instead.
```




*TODO: after here not processed*

```

 ---------------------------------------------------------------------
 --- POTENTIAL INCOMPATIBILITIES -------------------------------------
 ---------------------------------------------------------------------

  OTP-10289    Application(s): stdlib
               Related Id(s): OTP-10309

               *** HIGHLIGHT ***

               Improved unicode support for strings. Added
               normalization functions in the unicode module. Extended
               the string module API with new functions with improved
               unicode handling and that works on grapheme clusters.
               The new functions operates on the unicode:chardata()
               type, thus they also accept UTF-8 binaries as input.

               The old string API have been marked as obsolete. The
               return values have been changed for some error cases.


  OTP-12872    Application(s): ssh

               The internal handling of SSH options is re-written.

               Previously there were no checks if a client option was
               given to a daemon or vice versa. This is corrected now.
               If your code has e.g. a client-only option in a call to
               start a daemon, the call will fail.


  OTP-13006    Application(s): kernel
               Related Id(s): ERIERL-20, ERL-429

               Function inet:ntoa/1 has been fixed to return lowercase
               letters according to RFC 5935 that has been approved
               after this function was written. Previously uppercase
               letters were returned so this may be a backwards
               incompatible change depending on how the returned
               address string is used.

               Function inet:parse_address/1 has been fixed to accept
               %-suffixes on scoped addresses. The addresses does not
               work yet, but gives no parse errors.


  OTP-13820    Application(s): ssl

               *** HIGHLIGHT ***

               TLS-1.2 clients will now always send hello messages on
               its own format, as opposed to earlier versions that
               will send the hello on the lowest supported version,
               this is a change supported by the latest RFC.

               This will make interoperability with some newer servers
               smoother. Potentially, but unlikely, this could cause a
               problem with older servers if they do not adhere to the
               RFC and ignore unknown extensions.


  OTP-13827    Application(s): erts

               Remove deprecated erlang:hash/2.


  OTP-13844    Application(s): erts
               Related Id(s): OTP-13833

               The previously used purge strategy has been removed.
               The optional purge strategy introduced in ERTS version
               8.1 is now the only strategy available.

               The new purge strategy is slightly incompatible with
               the old strategy. Previously processes holding funs
               that referred to the module being purged either failed
               a soft purge, or was killed during a hard purge. The
               new strategy completely ignores funs. If funs referring
               to the code being purged exist, and are used after a
               purge, an exception will be raised upon usage. That is,
               the behavior will be exactly the same as the case when
               a fun is received by a process after the purge.

               For more information see the documentation of
               erlang:check_process_code/3.


  OTP-13873    Application(s): crypto

               Removed functions deprecated in crypto-3.0 first
               released in OTP-R16B01


  OTP-13908    Application(s): erts

               The NIF library reload feature is not supported
               anymore. It has been marked as deprecated since OTP
               R15B. This means that you are only allowed to do one
               successful call to erlang:load_nif/2 for each module
               instance. A second call to erlang:load_nif/2 will
               return {error, {reload, _}} even if the NIF library
               implements the reload callback.

               Runtime upgrade of a NIF library is still supported by
               using the Erlang module upgrade mechanics with a
               current and an old module instance existing at the same
               time with their corresponding NIF libraries.


  OTP-14039    Application(s): mnesia

               Removed the wrapping of select continuations in
               extension plugin handling. This might require the user
               to rewrite user backend plugin if used.


  OTP-14094    Application(s): stdlib

               *** HIGHLIGHT ***

               Optimized ETS operations by changing table identifier
               type from integer to reference. The reference enables a
               more direct mapping to the table with less potential
               lock contention and makes especially creation and
               deletion of tables scale much better.

               The change of the opaque type for the ETS table
               identifiers may cause failure in code that make faulty
               assumptions about this opaque type.

               The number of tables stored at one Erlang node *used*
               to be limited. This is no longer the case (except by
               memory usage). The previous default limit was about
               1400 tables and could be increased by setting the
               environment variable ERL_MAX_ETS_TABLES before starting
               the Erlang runtime system. This hard limit has been
               removed, but it is currently useful to set the
               ERL_MAX_ETS_TABLES anyway. It should be set to an
               approximate of the maximum amount of tables used. This
               since an internal table for named tables is sized using
               this value. If large amounts of named tables are used
               and ERL_MAX_ETS_TABLES hasn't been increased, the
               performance of named table lookup will degrade.


  OTP-14110    Application(s): ssh

               *** HIGHLIGHT ***

               Modernization of key exchange algorithms. See
               draft-ietf-curdle-ssh-kex-sha2 for a discussion.

               Removed an outdated weak algorithm and added stronger
               replacements to keep interoperability with other modern
               ssh clients and servers. The default ordering of the
               algorithms is also adjusted.

               Retired: The nowadays unsecure key-exchange
               diffie-hellman-group1-sha1 is not enabled by default,
               but can be enabled with the option
               preferred-algorithms.

               Added: The new stronger key-exchange
               diffie-hellman-group16-sha512,
               diffie-hellman-group18-sha512 and
               diffie-hellman-group14-sha256 are added and enabled by
               default.

               The questionable [RFC 6194] sha1-based algorithms
               diffie-hellman-group-exchange-sha1 and
               diffie-hellman-group14-sha1 are however still kept
               enabled by default for compatibility with ancient
               clients and servers that lack modern key-exchange
               alternatives. When the draft-ietf-curdle-ssh-kex-sha2
               becomes an rfc, those sha1-based algorithms and
               diffie-hellman-group1-sha1 will be deprecated by IETF.
               They might then be removed from the default list in
               Erlang/OTP.


  OTP-14146    Application(s): asn1

               The deprecated module asn1rt has been removed. The
               deprecated functions asn1ct:encode/3 and
               asn1ct:decode/3 have been removed. The undocumented
               function asn1ct:encode/2 has been removed.


  OTP-14152    Application(s): erts

               *** HIGHLIGHT ***

               Dirty schedulers are now enabled and supported on
               Erlang runtime systems with SMP support.

               Besides support for dirty NIFs also support for dirty
               BIFs and dirty garbage collection have been introduced.
               All garbage collections that potentially will take a
               long time to complete are now performed on dirty
               schedulers if enabled.

               erlang:statistics/1 with arguments inspecting scheduler
               and run queue states have been changed due to the dirty
               scheduler support. Code using this functionality may
               have to be rewritten taking these incompatibilities
               into consideration. Examples of such uses are calls to
               erlang:statistics(scheduler_wall_time),
               statistics(total_run_queue_lengths),
               statistics(total_active_tasks), etc.


  OTP-14171    Application(s): crypto

               Raised minimum requirement for OpenSSL version to
               OpenSSL-0.9.8.c although we recommend a much higher
               version, that is a version that is still maintained
               officially by the OpenSSL project. Note that using such
               an old version may restrict the crypto algorithms
               supported.


  OTP-14263    Application(s): ssh

               Removed the option public_key_alg which was deprecated
               in 18.2. Use pref_public_key_algs instead.


  OTP-14264    Application(s): ssh

               The SSH application is refactored regarding daemon
               starting. The resolution of contradicting Host argument
               and ip option were not described. There were also
               strange corner cases when the 'any' value was used in
               Host argument or ip option. This is (hopefully)
               resolved now, but it may cause incompatibilities for
               code using both Host and the ip option. The value
               'loopback' has been added for a correct way of naming
               those addresses.


  OTP-14272    Application(s): erts, otp

               The non-smp emulators have been deprecated and are
               scheduled for removal in OTP-21.

               In preparation for this, the threaded non-smp emulator
               is no longer built by default and has to be enabled
               using the --enable-plain-emulator to configure.


  OTP-14331    Application(s): erts, stdlib
               Related Id(s): ERL-208

               *** HIGHLIGHT ***

               Upgraded the OTP internal PCRE library from version
               8.33 to version 8.40. This library is used for
               implementation of the re regular expressions module.

               Besides various bug fixes, the new version allows for
               better stack protection. In order to utilize this
               feature, the stack size of normal scheduler threads is
               now by default set to 128 kilo words on all platforms.
               The stack size of normal scheduler threads can be set
               upon system start by passing the +sss command line
               argument to the erl command.

               See http://pcre.org/original/changelog.txt for
               information about changes made to PCRE between the
               versions 8.33 and 8.40.


  OTP-14343    Application(s): diameter

               Improve performance of message encode/decode and
               related handling.

               Dictionaries using @custom_types or @codecs will need
               to adapt the corresponding functions to accept an
               additional argument that is now passed through
               encode/decode, which was required to remove various
               process dictionary-based workarounds that have been
               used to solve problems in the past.


  OTP-14531    Application(s): stdlib

               The state machine engine gen_statem can now handle
               generic time-outs (multiple named) as well as absolute
               time-out time. See the documentation.

               The gen_statem callback Module:init/1 has become
               mandatory to harmonize with other gen_* modules. This
               may be an incompatibility for gen_statem callback
               modules that use gen_statem:enter_loop/4-6.


 ---------------------------------------------------------------------
 --- asn1-5.0 --------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14316    Application(s): asn1, crypto, runtime_tools
               Related Id(s): PR-1390

               Add compile option -compile(no_native) in modules with
               on_load directive which is not yet supported by HiPE.


 --- Improvements and New Features ---

  OTP-13961    Application(s): asn1

               The error tuple returned from the encode and decode
               functions will now include the stack backtrace to make
               it easier to understand what went wrong.


  OTP-14146    Application(s): asn1

               *** POTENTIAL INCOMPATIBILITY ***

               The deprecated module asn1rt has been removed. The
               deprecated functions asn1ct:encode/3 and
               asn1ct:decode/3 have been removed. The undocumented
               function asn1ct:encode/2 has been removed.


  OTP-14219    Application(s): asn1

               *** HIGHLIGHT ***

               The new 'maps' option changes the representation of the
               types SEQUENCE and SET to be maps (instead of records).


 Full runtime dependencies of asn1-5.0: erts-7.0, kernel-3.0,
 stdlib-2.0


 ---------------------------------------------------------------------
 --- common_test-1.15 ------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14332    Application(s): common_test
               Related Id(s): seq13299

               Errors in the documentation for user HTML stylesheets
               have been corrected.


  OTP-14400    Application(s): common_test, snmp, stdlib

               Internal code change: Calls to catch followed by a call
               to erlang:get_stacktrace/0 has been rewritten to use
               try instead of catch to make the code future-proof.


 --- Improvements and New Features ---

  OTP-13806    Application(s): common_test

               The ct_slave modules now handle nodenames in the same
               way as nodenames passed to -sname. That means
               ct_slave:start('b@127.0.0.1'). will now work.


  OTP-14179    Application(s): common_test

               Added the new option, keep_logs. If setting the value
               for this option to an integer, N, common_test will
               remove all ct_run.* directories in the current log
               directory, except the N newest.


  OTP-14284    Application(s): common_test

               The existing ct_netconfc:open/1,2 opens an SSH
               connection with one SSH channel realizing one Netconf
               session. To allow testing of multiple sessions over the
               same SSH connection, the following functions are added
               to ct_netconfc:

               * connect/1,2 - establish an SSH connection *
               disconnect/1 - close the given SSH connection *
               session/1,2,3 - open an ssh channel on the given
               connection and send 'hello' to start a Netconf session


  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


  OTP-14415    Application(s): common_test
               Related Id(s): seq13315

               The function ct_ssh:shell/2,3 is added.


 Full runtime dependencies of common_test-1.15: compiler-6.0,
 crypto-3.6, debugger-4.1, erts-7.0, inets-6.0, kernel-4.0,
 observer-2.1, runtime_tools-1.8.16, sasl-2.4.2, snmp-5.1.2, ssh-4.0,
 stdlib-2.5, syntax_tools-1.7, tools-2.8, xmerl-1.3.8


 ---------------------------------------------------------------------
 --- compiler-7.1 ----------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-13690    Application(s): compiler, stdlib

               For many releases, it has been legal to override a BIF
               with a local function having the same name. However,
               calling a local function with the same name as guard
               BIF as filter in a list comprehension was not allowed.


  OTP-14408    Application(s): compiler
               Related Id(s): ERL-417

               compile:forms/2 would not return the module name as
               documented when one of the options 'from_core',
               'from_asm', or 'from_beam' was given. Also, the
               compiler would crash if one of those options was
               combined with 'native'.


 --- Improvements and New Features ---

  OTP-12148    Application(s): compiler, erts

               Optimized test for tuples with an atom as first
               element.


  OTP-13794    Application(s): compiler

               Compilation of modules with huge literal binary strings
               is now much faster.


  OTP-13831    Application(s): compiler, erts, hipe, kernel, percept,
               stdlib
               Related Id(s): OTP-13735

               Replaced usage of deprecated symbolic time unit
               representations.


  OTP-13856    Application(s): compiler

               The undocumented and unsupported module sys_pre_expand
               has been removed. As a partial replacement for the
               functionality, there is a new function
               erl_internal:add_predefined_functions/1 and
               erl_expand_records will now add a module prefix to
               calls to BIFs and imported functions.


  OTP-13924    Application(s): compiler

               The internal compiler passes now start all generated
               variables with "@" to avoid any conflicts with
               variables in languages such as Elixir or LFE.


  OTP-14000    Application(s): compiler, erts, stdlib

               The function fmod/2 has been added to the math module.


  OTP-14042    Application(s): compiler

               Code generation for complicated guards have been
               improved.


  OTP-14058    Application(s): compiler

               The compiler has new warnings for repeated identical
               map keys.

               A map expression such as,

               #{'a' => 1, 'b' => 2, 'a' => 3}.

               will produce a warning for the repeated key 'a'.


  OTP-14071    Application(s): compiler, stdlib

               By default, there will now be a warning when export_all
               is used. The warning can be disabled using
               nowarn_export_all.


  OTP-14072    Application(s): compiler

               Optimize maps pattern matching by only examining the
               common keys in each clause first instead of all keys.
               This will reduce the number of lookups of each key in
               maps pattern matching.


  OTP-14087    Application(s): compiler

               There is a new 'deterministic' option to omit 'source'
               and 'options' tuples in the BEAM file.


  OTP-14125    Application(s): compiler, dialyzer
               Related Id(s): ERL-308

               Analyzing modules with binary construction with huge
               strings is now much faster. The compiler also compiles
               such modules slightly faster.


  OTP-14178    Application(s): compiler, erts

               *** HIGHLIGHT ***

               Atoms may now contain arbitrary Unicode characters.


  OTP-14221    Application(s): compiler

               compile:file/2 now accepts the option extra_chunks to
               include extra chunks in the BEAM file.


  OTP-14369    Application(s): compiler, dialyzer, stdlib
               Related Id(s): PR-1367

               The format of debug information that is stored in BEAM
               files (when debug_info is used) has been changed. The
               purpose of the change is to better support other
               BEAM-based languages such as Elixir or LFE.

               All tools included in OTP (dialyzer, debugger, cover,
               and so on) will handle both the new format and the
               previous format. Tools that retrieve the debug
               information using beam_lib:chunk(Beam, [abstract_code])
               will continue to work with both the new and old format.
               Tools that call beam_lib:chunk(Beam, ["Abst"]) will not
               work with the new format.

               For more information, see the description of debug_info
               in the documentation for beam_lib and the description
               of the {debug_info,{Backend,Data}} option in the
               documentation for compile.


  OTP-14401    Application(s): compiler

               In a future release, erlang:get_stacktrace/0 will
               probably only work when called from within a 'try'
               expression (otherwise it will return [].

               To help prepare for that change, the compiler will now
               by default warn if 'get_stacktrace/0' is used in a way
               that will not work in the future. Note that the warning
               will not be issued if 'get_stacktrace/0' is used in a
               function that uses neither 'catch' nor 'try' (because
               that could be a legal use if the function is called
               from within a 'try'.


 Full runtime dependencies of compiler-7.1: crypto-3.6, erts-9.0,
 hipe-3.12, kernel-4.0, stdlib-2.5


 ---------------------------------------------------------------------
 --- cosProperty-1.2.2 -----------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14006    Application(s): cosProperty, orber

               Fix dialyzer warnings in Orber and CosProperty.


 Full runtime dependencies of cosProperty-1.2.2: erts-7.0, kernel-3.0,
 mnesia-4.12, orber-3.6.27, stdlib-2.0


 ---------------------------------------------------------------------
 --- crypto-4.0 ------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14247    Application(s): crypto

               LibreSSL can now be used by the modernized crypto app.


  OTP-14316    Application(s): asn1, crypto, runtime_tools
               Related Id(s): PR-1390

               Add compile option -compile(no_native) in modules with
               on_load directive which is not yet supported by HiPE.


  OTP-14435    Application(s): crypto
               Related Id(s): OTP-14313, PR-1393, PR-1462

               Fix a bug in aes cfb128 function introduced by the bug
               fix in GitHub pull request #1393.


 --- Improvements and New Features ---

  OTP-13779    Application(s): crypto
               Related Id(s): ERL-82, PR-1138

               Add basic support for CMAC


  OTP-13873    Application(s): crypto

               *** POTENTIAL INCOMPATIBILITY ***

               Removed functions deprecated in crypto-3.0 first
               released in OTP-R16B01


  OTP-13900    Application(s): crypto

               *** HIGHLIGHT ***

               The crypto application now supports OpenSSL 1.1.


  OTP-13921    Application(s): crypto, ssl
               Related Id(s): PR-1180

               *** HIGHLIGHT ***

               Allow Erlang/OTP to use OpenSSL in FIPS-140 mode, in
               order to satisfy specific security requirements (mostly
               by different parts of the US federal government).

               See the new crypto users guide "FIPS mode" chapter
               about building and using the FIPS support which is
               disabled by default.

               (Thanks to dszoboszlay and legoscia)


  OTP-14092    Application(s): crypto
               Related Id(s): PR-1291

               Crypto chacha20-poly1305 as in RFC 7539 enabled for
               OpenSSL >= 1.1.

               Thanks to mururu.


  OTP-14140    Application(s): crypto
               Related Id(s): ERL-165, PR-1299

               RSA key generation added to crypto:generate_key/2.
               Thanks to wiml.

               An interface is also added to
               public_key:generate_key/1.


  OTP-14171    Application(s): crypto

               *** POTENTIAL INCOMPATIBILITY ***

               Raised minimum requirement for OpenSSL version to
               OpenSSL-0.9.8.c although we recommend a much higher
               version, that is a version that is still maintained
               officially by the OpenSSL project. Note that using such
               an old version may restrict the crypto algorithms
               supported.


  OTP-14274    Application(s): crypto

               Deprecate crypto:rand_uniform/2 as it is not
               cryptographically strong


  OTP-14317    Application(s): crypto, stdlib
               Related Id(s): PR-1372

               The Crypto application now supports generation of
               cryptographically strong random numbers (floats < 1.0
               and integer arbitrary ranges) as a plugin to the 'rand'
               module.


  OTP-14436    Application(s): crypto
               Related Id(s): PR-1396

               This replaces the hard coded test values for AES, CMAC
               and GCM ciphers with the full validation set from
               NIST's CAVP program.


 Full runtime dependencies of crypto-4.0: erts-9.0, kernel-5.3,
 stdlib-3.4


 ---------------------------------------------------------------------
 --- debugger-4.2.2 --------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14296    Application(s): debugger, stdlib

               The Erlang shell, qlc:string_to_handle(), and the
               Debugger (the Evaluator area and Edit variable window
               of the Bindings area) can parse pids, ports,
               references, and external funs, as long as they can be
               created in the running system.


  OTP-14318    Application(s): debugger

               Fix editing of simple binary values in the Bindings
               area of the Debugger's Attach Process Window.


 --- Improvements and New Features ---

  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


 Full runtime dependencies of debugger-4.2.2: compiler-5.0, erts-6.0,
 kernel-3.0, stdlib-2.5, wx-1.2


 ---------------------------------------------------------------------
 --- dialyzer-3.2 ----------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14423    Application(s): dialyzer
               Related Id(s): OTP-14323

               The check of bad type variables in type declarations
               was mistakingly removed in Erlang/OTP 18, and is now
               re-introduced.


 --- Improvements and New Features ---

  OTP-14125    Application(s): compiler, dialyzer
               Related Id(s): ERL-308

               Analyzing modules with binary construction with huge
               strings is now much faster. The compiler also compiles
               such modules slightly faster.


  OTP-14127    Application(s): dialyzer

               The peak memory consumption is reduced.


  OTP-14218    Application(s): dialyzer
               Related Id(s): OTP-14127

               Warnings about unknown types are now also generated for
               types not used by any function specification.


  OTP-14336    Application(s): dialyzer, otp

               TypEr has been removed as separate application and is
               now a part of the Dialyzer application. Documentation
               for TypEr has been added in the Dialyzer application.


  OTP-14369    Application(s): compiler, dialyzer, stdlib
               Related Id(s): PR-1367

               The format of debug information that is stored in BEAM
               files (when debug_info is used) has been changed. The
               purpose of the change is to better support other
               BEAM-based languages such as Elixir or LFE.

               All tools included in OTP (dialyzer, debugger, cover,
               and so on) will handle both the new format and the
               previous format. Tools that retrieve the debug
               information using beam_lib:chunk(Beam, [abstract_code])
               will continue to work with both the new and old format.
               Tools that call beam_lib:chunk(Beam, ["Abst"]) will not
               work with the new format.

               For more information, see the description of debug_info
               in the documentation for beam_lib and the description
               of the {debug_info,{Backend,Data}} option in the
               documentation for compile.


 Full runtime dependencies of dialyzer-3.2: compiler-7.0, erts-8.0,
 hipe-3.15.4, kernel-5.0, stdlib-3.0, syntax_tools-2.0, wx-1.2


 ---------------------------------------------------------------------
 --- diameter-2.0 ----------------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-14338    Application(s): diameter

               Let candidate peers be passed to diameter:call/4

               With call option peer, to allow a request to be sent to
               a peer that hasn't advertised support for the
               application in question.

               RFC 6733 2.4 requires a node to send the application
               identifiers of all locally supported applications at
               capabilities exchange, but not all nodes respect this
               for the common application, and diameter itself will
               send D[WP][RA] without the common application having
               been explicitly advertised. Regarding the common
               application as implicit renders Result-Code 5010
               (DIAMETER_NO_COMMON_APPLICATION) meaningless however,
               so allow any request to be sent as long as there is a
               configured dictionary to support it.


  OTP-14343    Application(s): diameter

               *** POTENTIAL INCOMPATIBILITY ***

               Improve performance of message encode/decode and
               related handling.

               Dictionaries using @custom_types or @codecs will need
               to adapt the corresponding functions to accept an
               additional argument that is now passed through
               encode/decode, which was required to remove various
               process dictionary-based workarounds that have been
               used to solve problems in the past.


  OTP-14455    Application(s): diameter
               Related Id(s): ERL-332

               Add transport options to avoid deadlock and allow for
               load regulation.

               Both diameter_tcp and diameter_sctp now accept two new
               configuration options: sender and message_cb. The
               former causes outgoing sends to take place in a
               dedicated process, to avoid the possibility of deadlock
               when both the transport process and its peer block in
               send. The latter allows a callback to control the
               reading of messages on the socket, to allow for
               backpressure towards peers when the rate of incoming
               traffic is greater than can otherwise be handled.

               Neither of these options are yet documented, but are
               unlikely to change unless problems are discovered. The
               sender option is not the default since it should
               probably always be used in combination with message_cb,
               to prevent incoming requests from being read at a
               higher rate than a peer allows outgoing answers to be
               sent.


 Full runtime dependencies of diameter-2.0: erts-6.4, kernel-3.2,
 ssl-6.0, stdlib-2.4


 ---------------------------------------------------------------------
 --- edoc-0.9 --------------------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-14277    Application(s): edoc

               To support stable builds, edoc no longer includes time
               stamps in the footer for generated files.


  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


 Full runtime dependencies of edoc-0.9: erts-6.0, inets-5.10,
 kernel-3.0, stdlib-2.5, syntax_tools-1.6.14, xmerl-1.3.7


 ---------------------------------------------------------------------
 --- erl_docgen-0.7 --------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14333    Application(s): erl_docgen
               Related Id(s): ERL-393

               Sort index of C functions alphabetically in the
               sidebar.


  OTP-14431    Application(s): erl_docgen

               The right side index of functions now handle functions
               with same name but different arity.


 --- Improvements and New Features ---

  OTP-14371    Application(s): erl_docgen
               Related Id(s): PR-1215

               Improvements in the OTP documentation style.

               (Thanks to Mariano Guerra)


 Full runtime dependencies of erl_docgen-0.7: edoc-0.7.13, erts-6.0,
 stdlib-2.5, xmerl-1.3.7


 ---------------------------------------------------------------------
 --- erl_interface-3.10 ----------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14310    Application(s): erl_interface, kernel

               Fix bug where gethostname would incorrectly fail with
               enametoolong on Linux.


 --- Improvements and New Features ---

  OTP-14337    Application(s): erl_interface, erts, jinterface

               Remove generation of atoms in old latin1 external
               format in the distribution between erlang nodes,
               erl_interface, and jinterface. The new utf8 format for
               atoms was introduced in OTP R16. An OTP 20 node can
               therefore not connect to nodes older than R16.

               Atoms that can be encoded using latin1 are still
               encoded by term_to_binary() using latin1 encoding. Note
               that all atoms will by default be encoded using utf8 in
               a future Erlang/OTP release. For more information see
               the documentation of erlang:term_to_binary/2.


 ---------------------------------------------------------------------
 --- erts-9.0 --------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-13968    Application(s): erts

               Fix various bugs regarding loading, upgrade and purge
               of HiPE compiled code:

               -- The native code memory for a purged module was never
               deallocated.

               -- Wrong functions could in some cases be called after
               a module upgrade.

               -- erlang:check_process_code did not check for
               recursive calls made from native code.


  OTP-14238    Application(s): erts, hipe

               Hipe optional LLVM backend does require LLVM version
               3.9 or later as older versions forced strong
               dependencies on erts internals structures.


  OTP-14255    Application(s): erts
               Related Id(s): OTP-14400, OTP-14401

               When an exception such as 'throw(HugeTerm)' was caught,
               HugeTerm term would be kept in the process until the
               next exception occurred, potentially increasing the
               heap size for the process. That has been corrected.


  OTP-14303    Application(s): erts

               Slogans in crash dumps have been extended to print more
               complex terms.


  OTP-14304    Application(s): erts

               Fixed bug when using enif_inspect_binary in combination
               with enif_copy. In some circumstances the inspected
               binary could be reallocated by the enif_copy call when
               it shouldn't have been.


  OTP-14305    Application(s): erts

               The address family local (AF_UNIX / AF_LOCAL) now does
               not ensure zero termination of Linux Abstract Addresses
               so they can use all bytes.


  OTP-14307    Application(s): erts
               Related Id(s): PR-1379

               Use -fno-PIE for Gentoo Hardened and others that don't
               accept linker flag -no-pie.


  OTP-14314    Application(s): erts
               Related Id(s): ERL-369, PR-1394

               Disable hipe for ppc64le architecture (little endian)
               as it is not, and has never been, supported. It was
               earlier equated with ppc64 (big endian) which lead to
               broken build without --disable-hipe.


  OTP-14324    Application(s): erts

               Fix 'epmd -kill' to return a failure exit status code
               if epmd was not killed because of some error.


  OTP-14335    Application(s): erts

               Fixed the following dirty scheduler related bugs:

               -- the +SDPcpu command line argument could cause the
               amount of dirty CPU schedulers to be set to zero

               -- erlang:system_flag(multi_scheduling, _) failed when
               only one normal scheduler was used together with dirty
               scheduler support


  OTP-14352    Application(s): erts

               Fix erlexec to handle mismatch in sysconf and proc fs
               when figuring out the cpu topology. This behaviour has
               been seen when using docker together with
               --cpuset-cpus.


  OTP-14360    Application(s): erts
               Related Id(s): ERL-401, PR-1417

               Fixed memory segment cache used for multiblock
               carriers. Huge (> 2GB) memory segments could cause a VM
               crash. Creation of such huge memory segments used for
               multiblock carriers is however very uncommon.


  OTP-14390    Application(s): erts, kernel

               Fix bug causing code:is_module_native to falsely return
               true when local call trace is enabled for the module.


  OTP-14411    Application(s): erts

               Fix emulator crash when receive tracing on a
               trace_delivered message.


  OTP-14424    Application(s): erts

               Fix file:sendfile error handling on SunOS when a
               connection is closed during transmission.


  OTP-14433    Application(s): erts

               escript did not handle paths with spaces correct.


  OTP-14437    Application(s): erts
               Related Id(s): ERL-360

               Fix erroneous lock check assertion when wx is run on
               MacOS X.


  OTP-14441    Application(s): erts
               Related Id(s): ERL-430

               Active-mode TCP sockets are now cleaned up properly on
               send/shutdown errors.


  OTP-14447    Application(s): erts

               Fix compilation of hipe_mkliterals when the LIBS
               configure variable had to be set.


 --- Improvements and New Features ---

  OTP-11695    Application(s): erts

               Added erlang:garbage_collect/2 that takes an option
               list as the last argument that can be used to control
               whether a minor or a major garbage collection is to be
               done. Doing a minor collection only collects terms that
               have recently died, but is cheaper than a major
               collection.


  OTP-12148    Application(s): compiler, erts

               Optimized test for tuples with an atom as first
               element.


  OTP-13529    Application(s): erts

               Erlang literals are no longer copied during process to
               process messaging.


  OTP-13684    Application(s): erts

               Add support in the erl_nif API for asynchronous message
               notifications when sockets or other file descriptors
               are ready to accept read or write operations. The
               following functions have been added:

               -- enif_select

               -- enif_monitor_process

               -- enif_demonitor_process

               -- enif_compare_monitors

               -- enif_open_resource_type_x


  OTP-13692    Application(s): erts, stdlib

               There are two new guard BIFs 'floor/1' and 'ceil/1'.
               They both return integers. In the 'math' module, there
               are two new BIFs with the same names that return
               floating point values.


  OTP-13827    Application(s): erts

               *** POTENTIAL INCOMPATIBILITY ***

               Remove deprecated erlang:hash/2.


  OTP-13831    Application(s): compiler, erts, hipe, kernel, percept,
               stdlib
               Related Id(s): OTP-13735

               Replaced usage of deprecated symbolic time unit
               representations.


  OTP-13842    Application(s): erts

               Added support in zlib for extraction of the inflation
               dictionary.


  OTP-13844    Application(s): erts
               Related Id(s): OTP-13833

               *** POTENTIAL INCOMPATIBILITY ***

               The previously used purge strategy has been removed.
               The optional purge strategy introduced in ERTS version
               8.1 is now the only strategy available.

               The new purge strategy is slightly incompatible with
               the old strategy. Previously processes holding funs
               that referred to the module being purged either failed
               a soft purge, or was killed during a hard purge. The
               new strategy completely ignores funs. If funs referring
               to the code being purged exist, and are used after a
               purge, an exception will be raised upon usage. That is,
               the behavior will be exactly the same as the case when
               a fun is received by a process after the purge.

               For more information see the documentation of
               erlang:check_process_code/3.


  OTP-13860    Application(s): erts

               Dirty schedulers are now enabled by default when the
               runtime system is built with SMP support.


  OTP-13903    Application(s): erts

               Improved ETS lookup/insert/delete speed for large set,
               bag and duplicate_bag by a significant reduction of the
               hash load factor. This speed improvement comes at the
               expense of less than one word per table entry. Tables
               with less than 256 entries are not affected at all.


  OTP-13908    Application(s): erts

               *** POTENTIAL INCOMPATIBILITY ***

               The NIF library reload feature is not supported
               anymore. It has been marked as deprecated since OTP
               R15B. This means that you are only allowed to do one
               successful call to erlang:load_nif/2 for each module
               instance. A second call to erlang:load_nif/2 will
               return {error, {reload, _}} even if the NIF library
               implements the reload callback.

               Runtime upgrade of a NIF library is still supported by
               using the Erlang module upgrade mechanics with a
               current and an old module instance existing at the same
               time with their corresponding NIF libraries.


  OTP-13976    Application(s): erts

               Add erlang:system_info(atom_count) and
               erlang:system_info(atom_limit) to provide a way to
               retrieve the current and maximum number of atoms.


  OTP-14000    Application(s): compiler, erts, stdlib

               The function fmod/2 has been added to the math module.


  OTP-14002    Application(s): erts

               erlang:load_nif/2 returns new error type notsup when
               called for a HiPE compiled module, which is not
               supported.


  OTP-14069    Application(s): erts

               Add driver and nif lock instrumentation to lcnt


  OTP-14149    Application(s): erts

               Reduce memory pressure by converting sub-binaries to
               heap-binaries when possible. This is done during
               garbage collection.


  OTP-14152    Application(s): erts

               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               Dirty schedulers are now enabled and supported on
               Erlang runtime systems with SMP support.

               Besides support for dirty NIFs also support for dirty
               BIFs and dirty garbage collection have been introduced.
               All garbage collections that potentially will take a
               long time to complete are now performed on dirty
               schedulers if enabled.

               erlang:statistics/1 with arguments inspecting scheduler
               and run queue states have been changed due to the dirty
               scheduler support. Code using this functionality may
               have to be rewritten taking these incompatibilities
               into consideration. Examples of such uses are calls to
               erlang:statistics(scheduler_wall_time),
               statistics(total_run_queue_lengths),
               statistics(total_active_tasks), etc.


  OTP-14178    Application(s): compiler, erts

               *** HIGHLIGHT ***

               Atoms may now contain arbitrary Unicode characters.


  OTP-14186    Application(s): erts, kernel

               Introduce an event manager in Erlang to handle OS
               signals. A subset of OS signals may be subscribed to
               and those are described in the Kernel application.


  OTP-14201    Application(s): erts
               Related Id(s): PR-1293

               The escript program now handles symbolic links to
               escripts.

               This is useful for standalone systems with escripts
               residing on a bin directory not included in the
               execution path (as it may cause their erl program(s) to
               override the desired one). Instead the escripts can be
               referred to via symbolic links from a bin directory in
               the path.


  OTP-14205    Application(s): erts

               *** HIGHLIGHT ***

               All uses of the magic binary kludge has been replaced
               by uses of erlang references.

               A magic binary was presented as an empty binary, but
               actually referred other data internally in the Erlang
               VM. Since they were presented as empty binaries,
               different magic binaries compared as equal, and also
               lost their internal data when passed out of an erlang
               node.

               The new usage of references has not got any of these
               strange semantic issues, and the usage of these
               references has been optimized to give the same
               performance benefits as well as memory usage benefits
               as magic binaries had.

               A couple of examples of previous uses of magic binaries
               are match specifications and NIF resources.


  OTP-14272    Application(s): erts, otp

               *** POTENTIAL INCOMPATIBILITY ***

               The non-smp emulators have been deprecated and are
               scheduled for removal in OTP-21.

               In preparation for this, the threaded non-smp emulator
               is no longer built by default and has to be enabled
               using the --enable-plain-emulator to configure.


  OTP-14330    Application(s): erts, hipe
               Related Id(s): PR-1397

               Allow HiPE to run on VM built with --enable-m32-build.


  OTP-14331    Application(s): erts, stdlib
               Related Id(s): ERL-208

               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               Upgraded the OTP internal PCRE library from version
               8.33 to version 8.40. This library is used for
               implementation of the re regular expressions module.

               Besides various bug fixes, the new version allows for
               better stack protection. In order to utilize this
               feature, the stack size of normal scheduler threads is
               now by default set to 128 kilo words on all platforms.
               The stack size of normal scheduler threads can be set
               upon system start by passing the +sss command line
               argument to the erl command.

               See http://pcre.org/original/changelog.txt for
               information about changes made to PCRE between the
               versions 8.33 and 8.40.


  OTP-14337    Application(s): erl_interface, erts, jinterface

               Remove generation of atoms in old latin1 external
               format in the distribution between erlang nodes,
               erl_interface, and jinterface. The new utf8 format for
               atoms was introduced in OTP R16. An OTP 20 node can
               therefore not connect to nodes older than R16.

               Atoms that can be encoded using latin1 are still
               encoded by term_to_binary() using latin1 encoding. Note
               that all atoms will by default be encoded using utf8 in
               a future Erlang/OTP release. For more information see
               the documentation of erlang:term_to_binary/2.


  OTP-14347    Application(s): erts, stdlib
               Related Id(s): PR-1412

               Added function re:version/0 which returns information
               about the OTP internal PCRE version used for
               implementation of the re module.


  OTP-14348    Application(s): erts

               Added new debug bif erlang:list_to_port/1.


  OTP-14356    Application(s): erts

               *** HIGHLIGHT ***

               Various improvements of timer management internally in
               the VM. These improvements both reduced memory
               consumption of timer wheels as well as reduce the
               amount of work that has to be performed in order to
               handle timers.


  OTP-14357    Application(s): erts, kernel, runtime_tools
               Related Id(s): PR-1326

               Sockets can now be bound to device (SO_BINDTODEVICE) on
               platforms where it is supported.

               This has been implemented e.g to support VRF-Lite under
               Linux; see

               VRF , and GitHub pull request #1326.


  OTP-14380    Application(s): erts

               Added the following erl command line arguments with
               which you can set suggested stack for dirty schedulers:

               -- +sssdcpu -- for dirty CPU schedulers

               -- +sssdio -- for dirty IO schedulers

               The default suggested stack size for dirty schedulers
               is 40 kilo words.


  OTP-14381    Application(s): erts

               Changed erts startup program name, argv 0, to use the
               environment variable ESCRIPT_NAME so that erlc,
               dialyzer, typer, ct_run, or the escript name can be
               seen with external programs, such as ps and htop
               (depending on options), on unix.


  OTP-14384    Application(s): erts
               Related Id(s): OTP-14201

               Improvements of escript documentation.


  OTP-14385    Application(s): erts
               Related Id(s): PR-1413

               Add function enif_hash for NIFs to calculate hash
               values of arbitrary terms.


  OTP-14407    Application(s): erts, otp

               *** HIGHLIGHT ***

               './configure --enable-lock-counter' will enabling
               building of an additional emulator that has support for
               lock counting. (The option previously existed, but
               would turn on lock counting in the default emulator
               being built.) To start the lock-counting emulator, use
               'erl -emu_type lcnt'.

               On Windows, erl recognized the undocumented option
               -debug for starting a debug-compiled emulator. That
               option has been removed. Use 'erl -emu_type debug'
               instead.


  OTP-14425    Application(s): erts, kernel

               Warnings have been added to the relevant documentation
               about not using un-secure distributed nodes in exposed
               environments.


  OTP-14434    Application(s): erts

               Improvement of the documentation of the environment
               variable ERL_CRASH_DUMP_SECONDS as well as the default
               behavior when it is not set.


  OTP-14438    Application(s): erts

               Enabled off-heap message queue for some system
               processes that might receive large amounts of messages.


  OTP-14442    Application(s): erts
               Related Id(s): ERIERL-22

               ETS lock indexes have been replaced with the table name
               in LCNT results.


  OTP-14453    Application(s): erts
               Related Id(s): PR-1400

               Introduced the new functions enif_whereis_pid() and
               enif_whereis_port().


 Full runtime dependencies of erts-9.0: kernel-5.0, sasl-3.0.1,
 stdlib-3.0


 ---------------------------------------------------------------------
 --- eunit-2.3.3 -----------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14287    Application(s): eunit

               The surefire reports from eunit will no longer have
               names with embedded double quotes.


 Full runtime dependencies of eunit-2.3.3: erts-6.0, kernel-3.0,
 stdlib-2.5


 ---------------------------------------------------------------------
 --- hipe-3.16 -------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-13862    Application(s): hipe
               Related Id(s): PR-1154

               Fix hipe compiler flags o0 and o1 that have previously
               been ignored by mistake.


  OTP-13983    Application(s): hipe

               Fix LLVM backend to not convert all remote calls to own
               module, like ?MODULE:foo(), into local calls.


  OTP-14238    Application(s): erts, hipe

               Hipe optional LLVM backend does require LLVM version
               3.9 or later as older versions forced strong
               dependencies on erts internals structures.


  OTP-14302    Application(s): hipe
               Related Id(s): ERL-376, PR-1386

               Fix a bug that has been seen causing failed loading of
               hipe compiled modules on NetBSD due to unaligned data
               pointers.


  OTP-14306    Application(s): hipe
               Related Id(s): ERL-278, PR-1392

               Fix miscompilation bug in hipe that could cause wrong
               function clause to be called from non-tail calls, where
               the return value is unused, if the right function
               clause is only reachable from those non-tail calls.


 --- Improvements and New Features ---

  OTP-13810    Application(s): hipe
               Related Id(s): PR-1124

               Improve hipe compilation time for large functions.


  OTP-13831    Application(s): compiler, erts, hipe, kernel, percept,
               stdlib
               Related Id(s): OTP-13735

               Replaced usage of deprecated symbolic time unit
               representations.


  OTP-13879    Application(s): hipe

               Speed up hipe compile time register allocation for
               larger function.


  OTP-14261    Application(s): hipe
               Related Id(s): PR-1360

               Various code generation improvements.


  OTP-14293    Application(s): hipe
               Related Id(s): PR-1380

               Improve hipe compiler to generate code with better CPU
               register utilization at runtime by the use of 'Live
               Range Splitting' techniques.


  OTP-14330    Application(s): erts, hipe
               Related Id(s): PR-1397

               Allow HiPE to run on VM built with --enable-m32-build.


 Full runtime dependencies of hipe-3.16: compiler-5.0, erts-9.0,
 kernel-3.0, stdlib-2.5, syntax_tools-1.6.14


 ---------------------------------------------------------------------
 --- inets-6.4 -------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14394    Application(s): inets

               httpd_util:rfc1123_date/1 gracefully handle invalid DST
               dates by returning the original time in the expected
               rfc1123 format.


 --- Improvements and New Features ---

  OTP-14404    Application(s): inets

               Add unicode binary support to http_uri functions


  OTP-14429    Application(s): inets

               httpc - Change timeout handling so the redirects cause
               a new timer to be set. This means that a simple
               redirected request could return after 2*timeout
               milliseconds.


 Full runtime dependencies of inets-6.4: erts-6.0, kernel-3.0,
 mnesia-4.12, runtime_tools-1.8.14, ssl-5.3.4, stdlib-2.0


 ---------------------------------------------------------------------
 --- jinterface-1.8 --------------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-14337    Application(s): erl_interface, erts, jinterface

               Remove generation of atoms in old latin1 external
               format in the distribution between erlang nodes,
               erl_interface, and jinterface. The new utf8 format for
               atoms was introduced in OTP R16. An OTP 20 node can
               therefore not connect to nodes older than R16.

               Atoms that can be encoded using latin1 are still
               encoded by term_to_binary() using latin1 encoding. Note
               that all atoms will by default be encoded using utf8 in
               a future Erlang/OTP release. For more information see
               the documentation of erlang:term_to_binary/2.


 ---------------------------------------------------------------------
 --- kernel-5.3 ------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-13006    Application(s): kernel
               Related Id(s): ERIERL-20, ERL-429

               *** POTENTIAL INCOMPATIBILITY ***

               Function inet:ntoa/1 has been fixed to return lowercase
               letters according to RFC 5935 that has been approved
               after this function was written. Previously uppercase
               letters were returned so this may be a backwards
               incompatible change depending on how the returned
               address string is used.

               Function inet:parse_address/1 has been fixed to accept
               %-suffixes on scoped addresses. The addresses does not
               work yet, but gives no parse errors.


  OTP-14310    Application(s): erl_interface, kernel

               Fix bug where gethostname would incorrectly fail with
               enametoolong on Linux.


  OTP-14390    Application(s): erts, kernel

               Fix bug causing code:is_module_native to falsely return
               true when local call trace is enabled for the module.


  OTP-14426    Application(s): kernel

               Add early reject of invalid node names from distributed
               nodes.


 --- Improvements and New Features ---

  OTP-13805    Application(s): kernel

               Since Unicode is now allowed in atoms an extra check is
               needed for node names, which are restricted to Latin-1.


  OTP-13831    Application(s): compiler, erts, hipe, kernel, percept,
               stdlib
               Related Id(s): OTP-13735

               Replaced usage of deprecated symbolic time unit
               representations.


  OTP-13909    Application(s): kernel

               file:write_file(Name, Data, [raw]) would turn Data into
               a single binary before writing. This meant it could not
               take advantage of the writev() system call if it was
               given a list of binaries and told to write with raw
               mode.


  OTP-14057    Application(s): kernel
               Related Id(s): PR-1245

               The performance of the disk_log has been somewhat
               improved in some corner cases (big items), and the
               documentation has been clarified.


  OTP-14059    Application(s): kernel, stdlib

               *** HIGHLIGHT ***

               Functions for detecting changed code has been added.
               code:modified_modules/0 returns all currently loaded
               modules that have changed on disk. code:module_status/1
               returns the status for a module. In the shell and in c
               module, mm/0 is short for code:modified_modules/0, and
               lm/0 reloads all currently loaded modules that have
               changed on disk.


  OTP-14186    Application(s): erts, kernel

               Introduce an event manager in Erlang to handle OS
               signals. A subset of OS signals may be subscribed to
               and those are described in the Kernel application.


  OTP-14357    Application(s): erts, kernel, runtime_tools
               Related Id(s): PR-1326

               Sockets can now be bound to device (SO_BINDTODEVICE) on
               platforms where it is supported.

               This has been implemented e.g to support VRF-Lite under
               Linux; see

               VRF , and GitHub pull request #1326.


  OTP-14409    Application(s): kernel
               Related Id(s): PR-1420

               Added option to store shell_history on disk so that the
               history can be reused between sessions.


  OTP-14417    Application(s): kernel, stdlib

               The size of crash reports created by gen_server,
               gen_statem and proc_lib is limited with aid of the
               Kernel application variable error_logger_format_depth.
               The purpose is to limit the size of the messages sent
               to the error_logger process when processes with huge
               message queues or states crash.

               The crash report generated by proc_lib includes the new
               tag message_queue_len. The neighbour report also
               includes the new tag current_stacktrace. Finally, the
               neighbour report no longer includes the tags messages
               and dictionary.

               The new function error_logger:get_format_depth/0 can be
               used to retrieve the value of the Kernel application
               variable error_logger_format_depth.


  OTP-14419    Application(s): kernel

               One of the ETS tables used by the global module is
               created with {read_concurrency, true} in order to
               reduce contention.


  OTP-14425    Application(s): erts, kernel

               Warnings have been added to the relevant documentation
               about not using un-secure distributed nodes in exposed
               environments.


 Full runtime dependencies of kernel-5.3: erts-9.0, sasl-3.0,
 stdlib-3.0


 ---------------------------------------------------------------------
 --- megaco-3.18.2 ---------------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-14387    Application(s): megaco

               Typos have been fixed.


 Full runtime dependencies of megaco-3.18.2: asn1-3.0, debugger-4.0,
 erts-7.0, et-1.5, kernel-3.0, runtime_tools-1.8.14, stdlib-2.5


 ---------------------------------------------------------------------
 --- mnesia-4.15 -----------------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-14039    Application(s): mnesia

               *** POTENTIAL INCOMPATIBILITY ***

               Removed the wrapping of select continuations in
               extension plugin handling. This might require the user
               to rewrite user backend plugin if used.


 Full runtime dependencies of mnesia-4.15: erts-7.0, kernel-3.0,
 stdlib-2.0


 ---------------------------------------------------------------------
 --- observer-2.4 ----------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14393    Application(s): observer

               etop had a hardcoded timeout value of 1 second when
               waiting for data from a remote node. When this expired,
               which could happen for instance if there were very many
               processes on the remote node, etop would exit with
               reason connection_lost. To overcome this problem, the
               timeout is now changed to be the same as the update
               interval, which is configurable.


 --- Improvements and New Features ---

  OTP-14137    Application(s): observer

               Show dirty-scheduler threads in performance monitor
               graph and add a column with maximum allocated memory in
               the Memory Allocators table.


  OTP-14270    Application(s): observer

               Keep table and port selection after refresh of tables.
               Store settings before shutdown and restore when
               starting application.


  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


  OTP-14345    Application(s): observer
               Related Id(s): ERL-399

               When observing a node older than OTP-19.0, a pop-up
               will be displayed when trying to access port
               information. Earlier, observer would crash in this
               situation.


 Full runtime dependencies of observer-2.4: erts-7.0, et-1.5,
 inets-5.10, kernel-3.0, runtime_tools-1.8.14, stdlib-2.0, wx-1.2


 ---------------------------------------------------------------------
 --- orber-3.8.3 -----------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14006    Application(s): cosProperty, orber

               Fix dialyzer warnings in Orber and CosProperty.


 Full runtime dependencies of orber-3.8.3: erts-7.0, inets-5.10,
 kernel-3.0, mnesia-4.12, ssl-5.3.4, stdlib-2.5


 ---------------------------------------------------------------------
 --- parsetools-2.1.5 ------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14276    Application(s): parsetools
               Related Id(s): PR-1357

               Minor documentation fixes


 --- Improvements and New Features ---

  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


 Full runtime dependencies of parsetools-2.1.5: erts-6.0, kernel-3.0,
 stdlib-2.5


 ---------------------------------------------------------------------
 --- public_key-1.4.1 ------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14258    Application(s): public_key

               Bug for public_key:generate_key({namedCurve,OID})
               fixed.


 --- Improvements and New Features ---

  OTP-14111    Application(s): public_key

               Modernized internal representation used for crl
               validation by use of maps.


  OTP-14294    Application(s): public_key

               Support EC key in pkix_sign/2


 Full runtime dependencies of public_key-1.4.1: asn1-3.0, crypto-3.8,
 erts-6.0, kernel-3.0, stdlib-2.0


 ---------------------------------------------------------------------
 --- reltool-0.7.4 ---------------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-14422    Application(s): reltool
               Related Id(s): OTP-13830

               The User's Guide examples are updated after removal of
               support for Dets files created with Erlang/OTP R7 and
               earlier.


 Full runtime dependencies of reltool-0.7.4: erts-7.0, kernel-3.0,
 sasl-2.4, stdlib-2.0, tools-2.6.14, wx-1.2


 ---------------------------------------------------------------------
 --- runtime_tools-1.12 ----------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14316    Application(s): asn1, crypto, runtime_tools
               Related Id(s): PR-1390

               Add compile option -compile(no_native) in modules with
               on_load directive which is not yet supported by HiPE.


 --- Improvements and New Features ---

  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


  OTP-14357    Application(s): erts, kernel, runtime_tools
               Related Id(s): PR-1326

               Sockets can now be bound to device (SO_BINDTODEVICE) on
               platforms where it is supported.

               This has been implemented e.g to support VRF-Lite under
               Linux; see

               VRF , and GitHub pull request #1326.


 Full runtime dependencies of runtime_tools-1.12: erts-8.0,
 kernel-5.0, mnesia-4.12, stdlib-3.0


 ---------------------------------------------------------------------
 --- sasl-3.0.4 ------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14029    Application(s): sasl

               Documented default values for the 'mod' and
               'start_phases' fields in .app files were not allowed as
               actual values in a .app file. This is now corrected.


 --- Improvements and New Features ---

  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


 Full runtime dependencies of sasl-3.0.4: erts-8.1, kernel-5.0,
 stdlib-3.0, tools-2.6.14


 ---------------------------------------------------------------------
 --- snmp-5.2.6 ------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14400    Application(s): common_test, snmp, stdlib

               Internal code change: Calls to catch followed by a call
               to erlang:get_stacktrace/0 has been rewritten to use
               try instead of catch to make the code future-proof.


 Full runtime dependencies of snmp-5.2.6: crypto-3.3, erts-6.0,
 kernel-3.0, mnesia-4.12, runtime_tools-1.8.14, stdlib-2.5


 ---------------------------------------------------------------------
 --- ssh-4.5 ---------------------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-12872    Application(s): ssh

               *** POTENTIAL INCOMPATIBILITY ***

               The internal handling of SSH options is re-written.

               Previously there were no checks if a client option was
               given to a daemon or vice versa. This is corrected now.
               If your code has e.g. a client-only option in a call to
               start a daemon, the call will fail.


  OTP-14110    Application(s): ssh

               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               Modernization of key exchange algorithms. See
               draft-ietf-curdle-ssh-kex-sha2 for a discussion.

               Removed an outdated weak algorithm and added stronger
               replacements to keep interoperability with other modern
               ssh clients and servers. The default ordering of the
               algorithms is also adjusted.

               Retired: The nowadays unsecure key-exchange
               diffie-hellman-group1-sha1 is not enabled by default,
               but can be enabled with the option
               preferred-algorithms.

               Added: The new stronger key-exchange
               diffie-hellman-group16-sha512,
               diffie-hellman-group18-sha512 and
               diffie-hellman-group14-sha256 are added and enabled by
               default.

               The questionable [RFC 6194] sha1-based algorithms
               diffie-hellman-group-exchange-sha1 and
               diffie-hellman-group14-sha1 are however still kept
               enabled by default for compatibility with ancient
               clients and servers that lack modern key-exchange
               alternatives. When the draft-ietf-curdle-ssh-kex-sha2
               becomes an rfc, those sha1-based algorithms and
               diffie-hellman-group1-sha1 will be deprecated by IETF.
               They might then be removed from the default list in
               Erlang/OTP.


  OTP-14117    Application(s): ssh

               Modernized internal representation of sftp by use of
               maps.


  OTP-14193    Application(s): ssh

               *** HIGHLIGHT ***

               The Extension Negotiation Mechanism and the extension
               server-sig-algs in draft-ietf-curdle-ssh-ext-info-05
               are implemented.

               The related draft-ietf-curdle-rsa-sha2-05 is
               implemented and introduces the signature algorithms
               rsa-sha2-256 and rsa-sha2-512.


  OTP-14216    Application(s): ssh

               The 'timeout' and 'connect_timeout' handling in
               ssh_sftp:start_channel documentation is clarified.


  OTP-14243    Application(s): ssh

               The functions ssh:connect, ssh:shell and
               ssh:start_channel now accept an IP-tuple as Host
               destination argument.


  OTP-14259    Application(s): ssh

               The function ssh:daemon_info/1 now returns Host and
               Profile as well as the Port info in the property list.


  OTP-14263    Application(s): ssh

               *** POTENTIAL INCOMPATIBILITY ***

               Removed the option public_key_alg which was deprecated
               in 18.2. Use pref_public_key_algs instead.


  OTP-14264    Application(s): ssh

               *** POTENTIAL INCOMPATIBILITY ***

               The SSH application is refactored regarding daemon
               starting. The resolution of contradicting Host argument
               and ip option were not described. There were also
               strange corner cases when the 'any' value was used in
               Host argument or ip option. This is (hopefully)
               resolved now, but it may cause incompatibilities for
               code using both Host and the ip option. The value
               'loopback' has been added for a correct way of naming
               those addresses.


  OTP-14267    Application(s): ssh
               Related Id(s): OTP-14266

               The supervisor code is refactored. The naming of
               listening IP-Port-Profile triples are slightly changed
               to improve consistency in strange corner cases as
               resolved by OTP-14264


  OTP-14312    Application(s): ssh

               The idle_time option can now be used in daemons.


  OTP-14361    Application(s): ssh

               Added test cases for IETF-CURDLE Extension Negotiation
               (ext-info)


  OTP-14362    Application(s): ssh
               Related Id(s): OTP-14361

               Testcases for IETF-CURDLE extension server-sig-algs
               including rsa-sha2-*


  OTP-14399    Application(s): ssh

               The option auth_methods can now also be used in clients
               to select which authentication options that are used
               and in which order.


  OTP-14410    Application(s): ssh

               Checks that a ECDSA public key (ecdsa-sha2-nistp*)
               stored in a file has the correct size.


 Full runtime dependencies of ssh-4.5: crypto-3.7.3, erts-6.0,
 kernel-3.0, public_key-1.4, stdlib-3.3


 ---------------------------------------------------------------------
 --- ssl-8.2 ---------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14421    Application(s): ssl

               ECDH-ECDSA key exchange supported, was accidently
               dismissed in earlier versions.


  OTP-14443    Application(s): ssl

               Correct close semantics for active once connections.
               This was a timing dependent bug the resulted in the
               close message not always reaching the ssl user process.


 --- Improvements and New Features ---

  OTP-13820    Application(s): ssl

               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               TLS-1.2 clients will now always send hello messages on
               its own format, as opposed to earlier versions that
               will send the hello on the lowest supported version,
               this is a change supported by the latest RFC.

               This will make interoperability with some newer servers
               smoother. Potentially, but unlikely, this could cause a
               problem with older servers if they do not adhere to the
               RFC and ignore unknown extensions.


  OTP-13921    Application(s): crypto, ssl
               Related Id(s): PR-1180

               *** HIGHLIGHT ***

               Allow Erlang/OTP to use OpenSSL in FIPS-140 mode, in
               order to satisfy specific security requirements (mostly
               by different parts of the US federal government).

               See the new crypto users guide "FIPS mode" chapter
               about building and using the FIPS support which is
               disabled by default.

               (Thanks to dszoboszlay and legoscia)


  OTP-14076    Application(s): ssl

               Implemented DTLS cookie generation, required by spec,
               instead of using a hardcoded value.


  OTP-14077    Application(s): ssl

               Implement sliding window replay protection of DTLS
               records.


  OTP-14197    Application(s): ssl

               *** HIGHLIGHT ***

               TLS client processes will by default call
               public_key:pkix_verify_hostname/2 to verify the
               hostname of the connection with the server certificates
               specified hostname during certificate path validation.
               The user may explicitly disables it. Also if the
               hostname can not be derived from the first argument to
               connect or is not supplied by the server name
               indication option, the check will not be performed.


  OTP-14291    Application(s): ssl

               *** HIGHLIGHT ***

               Extend connection_information/[1,2] . The values
               session_id, master_secret, client_random and
               server_random can no be accessed by
               connection_information/2. Note only session_id will be
               added to connection_information/1. The rational is that
               values concerning the connection security should have
               to be explicitly requested.


  OTP-14382    Application(s): ssl

               Chacha cipher suites are currently not tested enough to
               be most preferred ones


  OTP-14388    Application(s): ssl

               *** HIGHLIGHT ***

               Basic support for DTLS that been tested together with
               OpenSSL.

               Test by providing the option {protocol, dtls} to the
               ssl API functions connect and listen.


 Full runtime dependencies of ssl-8.2: crypto-3.3, erts-7.0,
 inets-5.10.7, kernel-3.0, public_key-1.2, stdlib-3.2


 ---------------------------------------------------------------------
 --- stdlib-3.4 ------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-13690    Application(s): compiler, stdlib

               For many releases, it has been legal to override a BIF
               with a local function having the same name. However,
               calling a local function with the same name as guard
               BIF as filter in a list comprehension was not allowed.


  OTP-14295    Application(s): stdlib
               Related Id(s): PR-1372

               A new (default) pseudo-random number generator
               algorithm Xoroshiro116+ has been implemented in the
               rand module.

               The old algorithm implementations had a number of flaws
               so they are all deprecated, but corrected versions of
               two of them have been added. See the documentation.


  OTP-14296    Application(s): debugger, stdlib

               The Erlang shell, qlc:string_to_handle(), and the
               Debugger (the Evaluator area and Edit variable window
               of the Bindings area) can parse pids, ports,
               references, and external funs, as long as they can be
               created in the running system.


  OTP-14400    Application(s): common_test, snmp, stdlib

               Internal code change: Calls to catch followed by a call
               to erlang:get_stacktrace/0 has been rewritten to use
               try instead of catch to make the code future-proof.


  OTP-14454    Application(s): stdlib
               Related Id(s): ERIERL-29

               The ms_transform module, used by ets:fun2ms/1 and
               dbg:fun2ms/1, evaluates constant arithmetic
               expressions. This is necessary since the Erlang
               compiler, which normally evaluates constant
               expressions, does not recognize the format generated by
               ms_transform.


  OTP-14531    Application(s): stdlib

               *** POTENTIAL INCOMPATIBILITY ***

               The state machine engine gen_statem can now handle
               generic time-outs (multiple named) as well as absolute
               time-out time. See the documentation.

               The gen_statem callback Module:init/1 has become
               mandatory to harmonize with other gen_* modules. This
               may be an incompatibility for gen_statem callback
               modules that use gen_statem:enter_loop/4-6.


 --- Improvements and New Features ---

  OTP-10289    Application(s): stdlib
               Related Id(s): OTP-10309

               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               Improved unicode support for strings. Added
               normalization functions in the unicode module. Extended
               the string module API with new functions with improved
               unicode handling and that works on grapheme clusters.
               The new functions operates on the unicode:chardata()
               type, thus they also accept UTF-8 binaries as input.

               The old string API have been marked as obsolete. The
               return values have been changed for some error cases.


  OTP-13692    Application(s): erts, stdlib

               There are two new guard BIFs 'floor/1' and 'ceil/1'.
               They both return integers. In the 'math' module, there
               are two new BIFs with the same names that return
               floating point values.


  OTP-13801    Application(s): stdlib

               Making code_change, terminate and handle_info callbacks
               optional in the OTP behaviours.


  OTP-13830    Application(s): stdlib

               The support for Dets files created with Erlang/OTP R7
               and earlier is removed.


  OTP-13831    Application(s): compiler, erts, hipe, kernel, percept,
               stdlib
               Related Id(s): OTP-13735

               Replaced usage of deprecated symbolic time unit
               representations.


  OTP-14000    Application(s): compiler, erts, stdlib

               The function fmod/2 has been added to the math module.


  OTP-14001    Application(s): stdlib

               The EXIT signals received from processes using proc_lib
               now looks like EXIT signals from processes that were
               spawned using spawn_link. In particular, that means
               that the stack trace is now included in the EXIT signal
               so that it can see where the process crashed.


  OTP-14035    Application(s): stdlib

               sets:add_element/2 is faster when adding an element
               that is already present, and sets:del_element/2 is
               faster when the element to be deleted is not present.
               This optimization can make certain operations, such as
               sets:union/2 with many overlapping elements, up to two
               orders of magnitude faster.


  OTP-14037    Application(s): stdlib
               Related Id(s): PR-1233

               Add information in doc about supervisor shutdown reason
               when maximum restart frequency is reached.


  OTP-14038    Application(s): stdlib
               Related Id(s): PR-1235

               Added rand:jump/[0|1] functions.


  OTP-14059    Application(s): kernel, stdlib

               *** HIGHLIGHT ***

               Functions for detecting changed code has been added.
               code:modified_modules/0 returns all currently loaded
               modules that have changed on disk. code:module_status/1
               returns the status for a module. In the shell and in c
               module, mm/0 is short for code:modified_modules/0, and
               lm/0 reloads all currently loaded modules that have
               changed on disk.


  OTP-14066    Application(s): stdlib

               Each assert macro in assert.hrl now has a corresponding
               version with an extra argument, for adding comments to
               assertions. These can for example be printed as part of
               error reports, to clarify the meaning of the check that
               failed.


  OTP-14068    Application(s): stdlib

               error_logger_tty_h and error_logger_file_h now inserts
               the node information for nonlocal messages before the
               message itself instead of after, both for readability
               and so as not to change the line termination property
               at the end of the message.


  OTP-14070    Application(s): stdlib
               Related Id(s): PR-1214

               The Erlang code linter checks for badly formed type
               constraints.


  OTP-14071    Application(s): compiler, stdlib

               By default, there will now be a warning when export_all
               is used. The warning can be disabled using
               nowarn_export_all.


  OTP-14089    Application(s): stdlib

               When a gen_server process crashes, the stacktrace for
               the client will be printed to facilitate debugging.


  OTP-14094    Application(s): stdlib

               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               Optimized ETS operations by changing table identifier
               type from integer to reference. The reference enables a
               more direct mapping to the table with less potential
               lock contention and makes especially creation and
               deletion of tables scale much better.

               The change of the opaque type for the ETS table
               identifiers may cause failure in code that make faulty
               assumptions about this opaque type.

               The number of tables stored at one Erlang node *used*
               to be limited. This is no longer the case (except by
               memory usage). The previous default limit was about
               1400 tables and could be increased by setting the
               environment variable ERL_MAX_ETS_TABLES before starting
               the Erlang runtime system. This hard limit has been
               removed, but it is currently useful to set the
               ERL_MAX_ETS_TABLES anyway. It should be set to an
               approximate of the maximum amount of tables used. This
               since an internal table for named tables is sized using
               this value. If large amounts of named tables are used
               and ERL_MAX_ETS_TABLES hasn't been increased, the
               performance of named table lookup will degrade.


  OTP-14102    Application(s): stdlib

               take/2 has been added to dict, orddict, and gb_trees.
               take_any/2 has been added to gb_trees.


  OTP-14123    Application(s): stdlib

               Extend gen_event API to handle options as well.


  OTP-14168    Application(s): stdlib
               Related Id(s): PR-1289

               Advice on how to tune the supervisor restart frequency
               (intensity and period) is added to System Documentation
               - Design Principles - Supervisor Behaviour.


  OTP-14183    Application(s): stdlib

               *** HIGHLIGHT ***

               gen_fsm is deprecated and is replaced by gen_statem,
               however for backwards compatibility reasons gen_fsm may
               continue to exist as an undocumented feature for quite
               some time.


  OTP-14190    Application(s): stdlib

               The shell functions c/1 and c/2 have been extended so
               that if the argument is a module name instead of a file
               name, it automatically locates the .beam file and the
               corresponding source file, and then recompiles the
               module using the same compiler options (plus any
               options passed to c/2). If compilation fails, the old
               beam file is preserved. Also adds c(Mod, Opts, Filter),
               where the Filter argument allows you to remove old
               compiler options before the new options are added.

               New utility functions file_find/2/3 and
               find_source/1/2/3 have been added to filelib.


  OTP-14226    Application(s): stdlib

               *** HIGHLIGHT ***

               erl_tar in previous versions of OTP only supports the
               USTAR format. That limited path names to at most 255
               bytes, and did not support Unicode characters in names
               in a portable way.

               erl_tar now has support for reading tar archives in the
               formats currently in common use, such as v7, STAR,
               USTAR, PAX, and GNU tar's extensions to the STAR/USTAR
               format. When writing tar archives, erl_tar can now
               write them in the PAX format if necessary (for example,
               to support very long filenames or filenames with
               Unicode characters). If possible, erl_tar will still
               write tar archives in the USTAR for maximum
               portability.


  OTP-14245    Application(s): stdlib

               base64:mime_decode/1 has been optimized so that it is
               now almost as fast asbase64:decode/1; it used be
               noticeably slower.


  OTP-14278    Application(s): stdlib

               erl_tar will now strip any leading '/' from pathnames
               when extracting files from a tar archive and write a
               message to the error logger. There is also new check
               for directory traversal attacks; if a relative path
               points above the current working directory the
               extraction will be aborted.


  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


  OTP-14317    Application(s): crypto, stdlib
               Related Id(s): PR-1372

               The Crypto application now supports generation of
               cryptographically strong random numbers (floats < 1.0
               and integer arbitrary ranges) as a plugin to the 'rand'
               module.


  OTP-14319    Application(s): stdlib
               Related Id(s): PR-1076

               *** HIGHLIGHT ***

               Add new function ets:select_replace/2 which performs
               atomic "compare-and-swap" operations for ETS objects
               using match specifications.


  OTP-14323    Application(s): stdlib

               The Erlang code linter checks for bad dialyzer
               attributes. It also checks for bad type variables in
               type declarations.


  OTP-14328    Application(s): stdlib
               Related Id(s): PR-1382

               Two new functions has been implemented in the rand
               module; normal/2 and normal_s/3, that both produce
               normal distribution (pseudo) random numbers with mean
               value and variance according to arguments.


  OTP-14331    Application(s): erts, stdlib
               Related Id(s): ERL-208

               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               Upgraded the OTP internal PCRE library from version
               8.33 to version 8.40. This library is used for
               implementation of the re regular expressions module.

               Besides various bug fixes, the new version allows for
               better stack protection. In order to utilize this
               feature, the stack size of normal scheduler threads is
               now by default set to 128 kilo words on all platforms.
               The stack size of normal scheduler threads can be set
               upon system start by passing the +sss command line
               argument to the erl command.

               See http://pcre.org/original/changelog.txt for
               information about changes made to PCRE between the
               versions 8.33 and 8.40.


  OTP-14347    Application(s): erts, stdlib
               Related Id(s): PR-1412

               Added function re:version/0 which returns information
               about the OTP internal PCRE version used for
               implementation of the re module.


  OTP-14369    Application(s): compiler, dialyzer, stdlib
               Related Id(s): PR-1367

               The format of debug information that is stored in BEAM
               files (when debug_info is used) has been changed. The
               purpose of the change is to better support other
               BEAM-based languages such as Elixir or LFE.

               All tools included in OTP (dialyzer, debugger, cover,
               and so on) will handle both the new format and the
               previous format. Tools that retrieve the debug
               information using beam_lib:chunk(Beam, [abstract_code])
               will continue to work with both the new and old format.
               Tools that call beam_lib:chunk(Beam, ["Abst"]) will not
               work with the new format.

               For more information, see the description of debug_info
               in the documentation for beam_lib and the description
               of the {debug_info,{Backend,Data}} option in the
               documentation for compile.


  OTP-14405    Application(s): stdlib

               Add option hibernate_after to gen_server, gen_statem
               and gen_event. Also added to the deprecated gen_fsm
               behaviour.


  OTP-14417    Application(s): kernel, stdlib

               The size of crash reports created by gen_server,
               gen_statem and proc_lib is limited with aid of the
               Kernel application variable error_logger_format_depth.
               The purpose is to limit the size of the messages sent
               to the error_logger process when processes with huge
               message queues or states crash.

               The crash report generated by proc_lib includes the new
               tag message_queue_len. The neighbour report also
               includes the new tag current_stacktrace. Finally, the
               neighbour report no longer includes the tags messages
               and dictionary.

               The new function error_logger:get_format_depth/0 can be
               used to retrieve the value of the Kernel application
               variable error_logger_format_depth.


 Full runtime dependencies of stdlib-3.4: compiler-5.0, crypto-3.3,
 erts-9.0, kernel-5.0, sasl-3.0


 ---------------------------------------------------------------------
 --- syntax_tools-2.1.2 ----------------------------------------------
 ---------------------------------------------------------------------

 --- Improvements and New Features ---

  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


 Full runtime dependencies of syntax_tools-2.1.2: compiler-7.0,
 erts-8.0, kernel-5.0, stdlib-3.0


 ---------------------------------------------------------------------
 --- tools-2.10 ------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14339    Application(s): tools
               Related Id(s): ERL-395

               In some situations, make:all() and friends did not
               detect changes in include files located in the current
               directory. This is now corrected.


 --- Improvements and New Features ---

  OTP-14253    Application(s): tools

               The make module now accepts the {emake,Emake} option.


  OTP-14285    Application(s): common_test, debugger, edoc, observer,
               parsetools, runtime_tools, sasl, stdlib, syntax_tools,
               tools

               Miscellaneous updates due to atoms containing arbitrary
               Unicode characters.


 Full runtime dependencies of tools-2.10: compiler-5.0, erts-7.0,
 kernel-3.0, runtime_tools-1.8.14, stdlib-3.1


 ---------------------------------------------------------------------
 --- wx-1.8.1 --------------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14289    Application(s): wx

               Fix a livelock that could be caused by wx:batch/1.


 Full runtime dependencies of wx-1.8.1: erts-6.0, kernel-3.0,
 stdlib-2.0


 ---------------------------------------------------------------------
 --- xmerl-1.3.15 ----------------------------------------------------
 ---------------------------------------------------------------------

 --- Fixed Bugs and Malfunctions ---

  OTP-14377    Application(s): xmerl
               Related Id(s): PR-1369

               Improves accumulator fun in xmerl_scan so that only one
               #xmlText record is returned for strings which have
               character references.

               (Thanks to Jimmy Zöger)


 Full runtime dependencies of xmerl-1.3.15: erts-6.0, kernel-3.0,
 stdlib-2.5


 ---------------------------------------------------------------------
 ---------------------------------------------------------------------
 ---------------------------------------------------------------------

```
