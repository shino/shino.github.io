# Lager の multiple sinks と フィルター付き tracing

## 動機と結論

コードを書いていて、たまーに見たくなる煩雑なログをコメントアウト、コピペ以外の方法で管理したい。
自分の関心では、通信まわりの細かいログや、初期化/終了などライフサイクルに関わる情報がの具体的な例である。

言語/環境は Erlang/OTP、ログライブラリは Lager を使っているとする。
ログはコンソールに出すことしか(ひとまず)興味はない。

結論: フィルター付きの tracing を使おう。

## トライ1: Multiple sinks

説明はここ https://github.com/erlang-lager/lager#sinks

デフォルトで定義されているログの行き先(sink)を、複数定義できるようにする機能である。

準備その1: rebar.config の erl_opts に欲しい sink を定義する。

```
{lager_extra_sinks, [transport_log, lifecycle_log]}
```

準備その2: sys.config の lager section で追加した sink の動作を設定する。

```
          {extra_sinks,
           [
            {transport_log_lager_event,
             [{handlers,
               [{lager_console_backend, [{level, debug}]}]}]},
            {lifecycle_log_lager_event,
             [{handlers,
               [{lager_console_backend, [{level, debug}]}]}]}
          ]}
```

コードは次のように書く。

```
_ = transport_log:debug("Data recieved: ~w", [Data])
```

通常なら `lager:*` と書くところを `transport_log:*` や `lifecycle_lot:*` とすればよい。

ここまでやったところでかなりスタティックな感じが満載でいまひとつしっくりこない。

multiple sinks は、アクセスログなどの、通常のイベントログと異なる種類のログに向いている
と感じる。sink ごとにフォーマットとかローテーションを異なる定義にできることはもちろん、
sync/async の挙動も変えられるとのこと。


## フィルター付きの Tracing

説明はここ https://github.com/erlang-lager/lager#tracing

ログの属性(attribute)に応じてログメッセージのリダイレクトをしてくれる機能である。
Lager は pid, module, function, line を自動で属性として集めてくれている。ありがたい。

もっともカジュアルに使うには、shell から trace を有効化するだけで良い。

```
> {ok, Trace} = lager:trace_console([{module, my_transport_mod}, {function, do_receive}]).
```

簡単。止めることも出来る。

```
> lager:stop_trace(Trace)
```

開発時に、毎度毎度これを手で打つのはめんどいが、sys.config ではこう書く。

```
          {traces,
           [
            {lager_console_backend, [{module, my_transport_mod}, {function, do_receive}], debug}
           ]}

```

ライフサイクルで初期化時のログとなると、モジュールや関数でピンポイントというわけには行かないだろうから、
コード側でひと手間必要になる。

```
_ = lager:debug([{verbose, lifecycle}], "~w:~w Initialization starting...", [?MODULE, ?FUNCTION_NAME])
```

こんな感じで、自前の属性を lager に渡すことができる。
こうなるとあとは sys.config の lager/traces の設定で拾うだけでよい。

```
            {lager_console_backend, [{verbose, lifecycle}], debug}
```

こちらのほうが気軽に使えて自分の目的にはあってそうだ。

ここではとても簡単なフィルターで Lager tracer の使い方しか触れていないけど、
本家 README によるとフィルターに OR 条件や比較演算も使えるようなのでいろいろと使いみちがあるかもしれない。
