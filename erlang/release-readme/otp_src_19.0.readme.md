Erlang/OTP 19.0 Release README (Japanese, unofficial)
=====================================================

```
Patch Package:           OTP 19.0
Git Tag:                 OTP-19.0
Date:                    2016-06-21
Trouble Report Id:       OTP-10267, OTP-10282, OTP-10292, OTP-10349,
                         OTP-11384, OTP-11879, OTP-12217, OTP-12345,
                         OTP-12441, OTP-12502, OTP-12573, OTP-12590,
                         OTP-12593, OTP-12719, OTP-12837, OTP-12860,
                         OTP-12861, OTP-12863, OTP-12883, OTP-12908,
                         OTP-12951, OTP-12979, OTP-13033, OTP-13034,
                         OTP-13047, OTP-13058, OTP-13059, OTP-13065,
                         OTP-13082, OTP-13086, OTP-13087, OTP-13088,
                         OTP-13089, OTP-13096, OTP-13097, OTP-13111,
                         OTP-13112, OTP-13122, OTP-13123, OTP-13131,
                         OTP-13148, OTP-13152, OTP-13153, OTP-13167,
                         OTP-13174, OTP-13175, OTP-13184, OTP-13191,
                         OTP-13195, OTP-13206, OTP-13207, OTP-13214,
                         OTP-13227, OTP-13229, OTP-13244, OTP-13255,
                         OTP-13256, OTP-13260, OTP-13265, OTP-13267,
                         OTP-13280, OTP-13288, OTP-13289, OTP-13293,
                         OTP-13294, OTP-13325, OTP-13341, OTP-13347,
                         OTP-13359, OTP-13366, OTP-13374, OTP-13375,
                         OTP-13383, OTP-13392, OTP-13401, OTP-13407,
                         OTP-13408, OTP-13409, OTP-13410, OTP-13411,
                         OTP-13415, OTP-13419, OTP-13422, OTP-13425,
                         OTP-13429, OTP-13430, OTP-13431, OTP-13440,
                         OTP-13442, OTP-13444, OTP-13445, OTP-13449,
                         OTP-13452, OTP-13458, OTP-13459, OTP-13461,
                         OTP-13463, OTP-13464, OTP-13465, OTP-13470,
                         OTP-13474, OTP-13475, OTP-13476, OTP-13479,
                         OTP-13481, OTP-13482, OTP-13483, OTP-13485,
                         OTP-13487, OTP-13488, OTP-13489, OTP-13491,
                         OTP-13493, OTP-13494, OTP-13495, OTP-13496,
                         OTP-13497, OTP-13499, OTP-13500, OTP-13501,
                         OTP-13502, OTP-13503, OTP-13504, OTP-13507,
                         OTP-13508, OTP-13512, OTP-13516, OTP-13517,
                         OTP-13520, OTP-13522, OTP-13523, OTP-13524,
                         OTP-13526, OTP-13527, OTP-13530, OTP-13531,
                         OTP-13532, OTP-13534, OTP-13540, OTP-13541,
                         OTP-13542, OTP-13544, OTP-13545, OTP-13547,
                         OTP-13548, OTP-13551, OTP-13552, OTP-13553,
                         OTP-13554, OTP-13555, OTP-13556, OTP-13558,
                         OTP-13559, OTP-13560, OTP-13561, OTP-13562,
                         OTP-13566, OTP-13572, OTP-13576, OTP-13580,
                         OTP-13590, OTP-13593, OTP-13597, OTP-13598,
                         OTP-13599, OTP-13600, OTP-13601, OTP-13602,
                         OTP-13606, OTP-13610, OTP-13611, OTP-13612,
                         OTP-13615, OTP-13618, OTP-13619, OTP-13622,
                         OTP-13623, OTP-13625, OTP-13626, OTP-13627,
                         OTP-13628, OTP-13629, OTP-13630, OTP-13631,
                         OTP-13632, OTP-13634, OTP-13636, OTP-13638,
                         OTP-13639, OTP-13644, OTP-13647, OTP-13650,
                         OTP-13651, OTP-13653, OTP-13654, OTP-13655,
                         OTP-13656, OTP-13657, OTP-13658, OTP-13662,
                         OTP-13666, OTP-13668, OTP-13673, OTP-13678
Seq num:                 seq13002, seq13124, seq13136
System:                  OTP
Release:                 19
Application:             asn1-4.0.3, common_test-1.12.2, compiler-7.0,
                         cosEvent-2.2.1, cosEventDomain-1.2.1,
                         cosFileTransfer-1.2.1, cosNotification-1.2.2,
                         cosProperty-1.2.1, cosTime-1.2.2,
                         cosTransactions-1.3.2, crypto-3.7,
                         debugger-4.2, dialyzer-3.0, diameter-1.12,
                         edoc-0.7.19, eldap-1.2.2, erl_docgen-0.5,
                         erl_interface-3.9, erts-8.0, et-1.6,
                         eunit-2.3, gs-1.6.1, hipe-3.15.1, ic-4.4.1,
                         inets-6.3, jinterface-1.7, kernel-5.0,
                         megaco-3.18.1, mnesia-4.14, observer-2.2,
                         odbc-2.11.2, orber-3.8.2, os_mon-2.4.1,
                         otp_mibs-1.1.1, parsetools-2.1.2,
                         percept-0.9, public_key-1.2, reltool-0.7.1,
                         runtime_tools-1.10, sasl-3.0, snmp-5.2.3,
                         ssh-4.3, ssl-8.0, stdlib-3.0,
                         syntax_tools-2.0, tools-2.8.4, typer-0.9.11,
                         wx-1.7, xmerl-1.3.11
Predecessor:             OTP

 Check out the git tag OTP-19.0, and build a full OTP system including
 documentation. Apply one or more applications from this build as
 patches to your installation using the 'otp_patch_apply' tool. For
 information on install requirements, see descriptions for each
 application version below.
```

HIGHLIGHTS
==========


### OTP-10267    Application(s): erts

- **POTENTIAL INCOMPATIBILITY**
- トレーシングサポートが拡張され、`tracer` モジュールがプロセスかポートの代わり
  に、トレースイベントハンドラーを取れるようにた。
  - `tracer` モジュールはトレースツールは、トレースされるプロセスまたはポートか
    らのトレースイベントデータをコピーせずにフィルターまたは操作できるようになっ
    た。
- この機能の導入により、 `erlang:trace(all|existing, _, _)` はトレースが有効化さ
  れたプロセスの数の場所に、トレーサープロセスを返す。これは以前のリリースと
  非互換である。

```
               *** POTENTIAL INCOMPATIBILITY ***

               The tracing support has been extended to allow a tracer
               module to be the trace event handler instead of a
               process or port. The tracer module makes it possible
               for trace tools to filter or manipulate trace event
               data without the trace event first having to be copied
               from the traced process or port.

               With the introduction of this feature,
               erlang:trace(all|existing, _, _) now also returns the
               tracer process as part of the number of processes on
               which tracing is enabled. The is incompatible with the
               previous releases.
```

### OTP-12345    Application(s): erts, runtime_tools


```
               Add microstate accounting

               Microstate accounting is a way to track which state the
               different threads within ERTS are in. The main usage
               area is to pin point performance bottlenecks by
               checking which states the threads are in and then from
               there figuring out why and where to optimize.

               Since checking whether microstate accounting is on or
               off is relatively expensive only a few of the states
               are enabled by default and more states can be enabled
               through configure.

               There is a convenience module called msacc that has
               been added to runtime_tools that can assist in
               gathering and interpreting the data from Microstate
               accounting.

               For more information see
               erlang:statistics(microstate_accounting, _) and the
               msacc module in runtime_tools.
```

### OTP-12590    Application(s): erts

- Related Id(s): OTP-10251

```
               Related Id(s): OTP-10251

               Sharing preserved copy for messages and exit signals

               Enable sharing preserved copy with configure option
               --enable-sharing-preserving. This will preserve
               sharing, within the process, when communication with
               other processes in the Erlang node. There is a
               trade-off, the copy is more costly but this cost can be
               reclaimed if there is a lot of sharing in the message.
               In addition literals will not be copied in a send
               except during a purge phase of the module where the
               literals are located. This feature is considered
               experimental in 19.0.
```

### OTP-13058    Application(s): mnesia


```
               Added experimental external backend plugin api. This
               adds the possibility for the user to write other
               storage backends for data, for example by using shared
               memory or ram-cached disk storage.

               The plugin api may change in future versions after
               being battle tested.
```

### OTP-13059    Application(s): compiler, stdlib


```
               The pre-processor can now expand the ?FUNCTION_NAME and
               ?FUNCTION_ARITY macros.
```

### OTP-13065    Application(s): stdlib

- Related Id(s): PR-960

```
               Related Id(s): PR-960

               A new behaviour gen_statem has been implemented. It has
               been thoroughly reviewed, is stable enough to be used
               by at least two heavy OTP applications, and is here to
               stay. But depending on user feedback, we do not expect
               but might find it necessary to make minor not backwards
               compatible changes into OTP-20.0, so its state can be
               designated as "not quite experimental"...

               The gen_statem behaviour is intended to replace gen_fsm
               for new code. It has the same features and add some
               really useful:

               -- State code is gathered

               -- The state can be any term

               -- Events can be postponed

               -- Events can be self generated

               -- A reply can be sent from a later state

               -- There can be multiple sys traceable replies

               The callback model(s) for gen_statem differs from the
               one for gen_fsm, but it is still fairly easy to rewrite
               from gen_fsm to gen_statem.
```

### OTP-13255    Application(s): ssl


```
               Better error handling of user error during TLS upgrade.
               ERL-69 is solved by gen_statem rewrite of ssl
               application.
```

### OTP-13366    Application(s): erts

- Related Id(s): OTP-13047

```
               Related Id(s): OTP-13047

               Introduction of configurable management of data
               referred to by the message queue of a process. Each
               process can be configured individually.

               It is now possible to configure the message queue of a
               process, so that all data referred by it will be kept
               outside of the heap, and by this prevent this data from
               being part of garbage collections.

               For more information see the documentation of
               process_flag(message_queue_data, MQD).
```

### OTP-13408    Application(s): public_key


```
               Handle PEM encoded EC public keys
```

### OTP-13496    Application(s): erts

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               The tracing support has been extended to allow tracing
               on ports. Ports can be traced on using the 'ports',
               'send' and 'receive' trace flags.

               The first argument of erlang:trace/3 has been extended
               so that 'all', 'existing' and 'new' now include both
               processes and ports. New Tracee variants,
               'all_processes', 'all_ports', 'existing_processes' etc
               have been added to specify only processes or ports.
```

### OTP-13503    Application(s): erts


```
               The erts internal tracing support has been changed to
               have much less overhead and be more scalable.

               This rewrite does not break any backwards
               incompatibilities, but it does change the ordering of
               some trace messages when compared to previous releases.
               It should be noted that this only applies to trace
               messages sent to processes or ports, it does not apply
               to the new tracer module. However in future releases
               they may also be effected by this.

               Trace messages are only guaranteed to be ordered from
               one traced process or port. In previous releases this
               was not visible as a 'send' trace message would always
               arrive before the corresponding 'receive' trace message
               that is no longer always the case. This also means that
               timestamped trace messages may seem to arrive out of
               order as the timestamp is taken when the event is
               triggered and not when it is put in the queue of the
               tracer.
```

### OTP-13572    Application(s): erts, kernel

- Related Id(s): PR-612

```
               Related Id(s): PR-612

               Experimental support for Unix Domain Sockets has been
               implemented. Read the sources if you want to try it
               out. Example: gen_udp:open(0,
               [{ifaddr,{local,"/tmp/socket"}}]). Documentation will
               be written after user feedback on the experimental API.
```

### OTP-13632    Application(s): ssl


```
               Enhance error log messages to facilitate for users to
               understand the error
```

POTENTIAL INCOMPATIBILITIES
===========================


### OTP-10267    Application(s): erts

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               The tracing support has been extended to allow a tracer
               module to be the trace event handler instead of a
               process or port. The tracer module makes it possible
               for trace tools to filter or manipulate trace event
               data without the trace event first having to be copied
               from the traced process or port.

               With the introduction of this feature,
               erlang:trace(all|existing, _, _) now also returns the
               tracer process as part of the number of processes on
               which tracing is enabled. The is incompatible with the
               previous releases.
```

### OTP-11879    Application(s): stdlib


```
               Undocumented syntax for function specifications, -spec
               F/A :: Domain -> Range, has been removed (without
               deprecation).

               Using the is_subtype(V, T) syntax for constraints (in
               function specifications) is no longer documented, and
               the newer syntax V :: T should be used instead. The
               Erlang Parser still recognizes the is_subtype syntax,
               and will continue to do so for some time.
```

### OTP-12719    Application(s): stdlib


```
               Background: In record fields with a type declaration
               but without an initializer, the Erlang parser inserted
               automatically the singleton type 'undefined' to the
               list of declared types, if that value was not present
               there. That is, the record declaration:

               -record(rec, {f1 :: float(), f2 = 42 :: integer(), f3
               :: some_mod:some_typ()}).

               was translated by the parser to:

               -record(rec, {f1 :: float() | 'undefined', f2 = 42 ::
               integer(), f3 :: some_mod:some_typ() | 'undefined'}).

               The rationale for this was that creation of a "dummy"
               #rec{} record should not result in a warning from
               dialyzer that, for example, the implicit initialization
               of the #rec.f1 field violates its type declaration.

               Problems: This seemingly innocent action has some
               unforeseen consequences.

               For starters, there is no way for programmers to
               declare that e.g. only floats make sense for the f1
               field of #rec{} records when there is no "obvious"
               default initializer for this field. (This also affects
               tools like PropEr that use these declarations produced
               by the Erlang parser to generate random instances of
               records for testing purposes.)

               It also means that dialyzer does not warn if e.g. an
               is_atom/1 test or something more exotic like an
               atom_to_list/1 call is performed on the value of the f1
               field.

               Similarly, there is no way to extend dialyzer to warn
               if it finds record constructions where f1 is not
               initialized to some float.

               Last but not least, it is semantically problematic when
               the type of the field is an opaque type: creating a
               union of an opaque and a structured type is very
               problematic for analysis because it fundamentally
               breaks the opacity of the term at that point.

               Change: To solve these problems the parser will not
               automatically insert the 'undefined' value anymore;
               instead the user has the option to choose the places
               where this value makes sense (for the field) and where
               it does not and insert the | 'undefined' there
               manually.

               Consequences of this change: This change means that
               dialyzer will issue a warning for all places where
               records with uninitialized fields are created and those
               fields have a declared type that is incompatible with
               'undefined' (e.g. float()). This warning can be
               suppressed easily by adding | 'undefined' to the type
               of this field. This also adds documentation that the
               user really intends to create records where this field
               is uninitialized.
```

### OTP-12863    Application(s): syntax_tools


```
               The abstract data type in erl_syntax is augmented with
               types and function specifications.

               The module erl_prettypr pretty prints types and
               function specification, and the output can be parsed.

               The types of record fields are no longer ignored. As a
               consequence erl_syntax_lib:analyze_record_field/1
               returns {Default, Type} instead of Default. The
               functions analyze_record_attribute, analyze_attribute,
               analyze_form, and analyze_forms in the erl_syntax_lib
               module are also affected by this incompatible change.
```

### OTP-13088    Application(s): erts


```
               The functionality behind erlang:open_port/2 when called
               with spawn or spawn_executable has been redone so that
               the forking of the new program is done in a separate
               process called erl_child_setup. This allows for a much
               more robust implementation that uses less memory and
               does not block the entire emulator if the program to be
               started is on an un-accessible NFS. Benchmarks have
               shown this approach to be about 3-5 times as fast as
               the old approach where the fork/vfork was done by erts.
               This is a pure stability and performance fix, however
               some error messages may have changed, which is why it
               is marked as a backwards incompatible change.
```

### OTP-13148    Application(s): stdlib


```
               Background: The types of record fields have since R12B
               been put in a separate form by epp:parse_file(),
               leaving the record declaration form untyped. The
               separate form, however, does not follow the syntax of
               type declarations, and parse transforms inspecting
               -type() attributes need to know about the special
               syntax. Since the compiler stores the return value of
               epp:parse_file() as debug information in the abstract
               code chunk ("Abst" or abstract_code), tools too need to
               know about the special syntax, if they inspect -type()
               attributes in abstract code.

               Change: No separate type form is created by
               epp:parse_file(), but the type information is kept in
               the record fields. This means that all parse transforms
               and all tools inspecting -record() declarations need to
               recognize {typed_record_field, Field, Type}.
```

### OTP-13184    Application(s): sasl


```
               The module 'overload' is removed.
```

### OTP-13195    Application(s): ssl


```
               Remove default support for DES cipher suites
```

### OTP-13449    Application(s): kernel


```
               The functions rpc:safe_multi_server_call/2,3 that were
               deprecated in R12B have been removed.
```

### OTP-13465    Application(s): ssl


```
               Phase out interoperability with clients that offer
               SSLv2. By default they are no longer supported, but an
               option to provide interoperability is offered.
```

### OTP-13496    Application(s): erts

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               The tracing support has been extended to allow tracing
               on ports. Ports can be traced on using the 'ports',
               'send' and 'receive' trace flags.

               The first argument of erlang:trace/3 has been extended
               so that 'all', 'existing' and 'new' now include both
               processes and ports. New Tracee variants,
               'all_processes', 'all_ports', 'existing_processes' etc
               have been added to specify only processes or ports.
```

### OTP-13497    Application(s): erts


```
               When the 'procs' trace flag is enabled, a 'spawned'
               trace event is now also generated by a newly created
               process. The previous event 'spawn' remains, but as it
               is generated by the process that did the spawn, it is
               not guaranteed that it is ordered with other trace
               events from the newly spawned process. So when tracking
               the lifetime of a process this new event should be used
               as the creation event.

               This new trace event is marked as an incompatibility
               because tools that expect certain trace events when
               enabling 'procs' will have to updated.
```

### OTP-13504    Application(s): compiler


```
               The compiler will no longer put the compilation date
               and time into BEAM files. That means that two BEAM
               files compiled on the same computer from the same
               source code and compilation options will be identical.

               Note: If you want to find out whether a BEAM file on
               disk is different from the loaded code, compared the
               MD5 value obtained from Mod:module_info(md5) with the
               MD5 value obtained from beam_lib:md5(BeamFileForMod)

               .
```

### OTP-13532    Application(s): erts, runtime_tools


```
               Introduce LTTng tracing via Erlang tracing.

               For LTTng to be enabled OTP needs to be built with
               configure option --with-dynamic-trace=lttng.

               The dynamic trace module dyntrace is now capable to be
               used as a LTTng sink for Erlang tracing. For a list of
               all tracepoints, see Runtime Tools User's Guide .

               This feature also introduces an incompatible change in
               trace tags. The trace tags gc_start and gc_end has been
               split into gc_minor_start, gc_minor_end and
               gc_major_start, gc_major_end.
```

### OTP-13542    Application(s): dialyzer

- Related Id(s): PR-1014

```
               Related Id(s): PR-1014

               The type specification syntax for Maps is improved:

               --

               The association type KeyType := ValueType denotes an
               association that must be present.

               --

               The shorthand ... stands for the association type any()
               => any().

               An incompatible change is that #{} stands for the empty
               map. The type map() (a map of any size) can be written
               as #{...}.
```

### OTP-13553    Application(s): wx


```
               Changed atom 'boolean' fields in #wxMouseState{} to
               'boolean()'.

               Moved out arguments in wxListCtrl:hitTest to result.

               Removed no-op functions in wxGauge that have been
               removed from wxWidgets-3.1.
```

### OTP-13561    Application(s): inets


```
               Remove module inets_regexp. Module re should be used
               instead.
```

### OTP-13619    Application(s): stdlib

- Related Id(s): PR-1000

```
               Related Id(s): PR-1000

               Supervisors now explicitly add their callback module in
               the return from sys:get_status/1,2. This is to simplify
               custom supervisor implementations. The Misc part of the
               return value from sys:get_status/1,2 for a supervisor
               is now:

               [{data, [{"State",
               State}]},{supervisor,[{"Callback",Module}]}]
```

### OTP-13622    Application(s): kernel

- Related Id(s): PR-1065

```
               Related Id(s): PR-1065

               The function inet:gethostbyname/1 now honors the
               resolver option inet6 instead of always looking up IPv4
               addresses.
```

asn1-4.0.3
==========

```
 The asn1-4.0.3 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13551    Application(s): asn1, cosEvent, cosEventDomain,


```
               cosFileTransfer, cosNotification, cosProperty, cosTime,
               cosTransactions, gs, ic, megaco, orber, otp_mibs,
               parsetools, snmp, typer, xmerl

               Internal changes
```

common_test-1.12.2
==================

```
 The common_test-1.12.2 application can be applied independently of
 other applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13475    Application(s): common_test


```
               The following modules were missing in
               common_test.app.src: ct_groups, ct_property_test,
               ct_release_test, ct_webtool, ct_webtool_sup,
               test_server_gl. They have now been added.
```

### OTP-13615    Application(s): common_test

- Related Id(s): seq13124

```
               Related Id(s): seq13124

               Common Test printed incorrect timestamps for received
               error reports.
```

compiler-7.0
============

```
 The compiler-7.0 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13430    Application(s): compiler

- Related Id(s): ERL-113

```
               Related Id(s): ERL-113

               compile:forms/1,2 would crash when used in a working
               directory that had been deleted by another process.
```

### OTP-13552    Application(s): compiler, dialyzer

- Related Id(s): ERL-138

```
               Related Id(s): ERL-138

               Dialyzer no longer crashes when there is an invalid
               function call such as 42(7) in a module being analyzed.
               The compiler will now warn for invalid function calls
               such as X = 42, x(7).
```

## Improvements and New Features


### OTP-12951    Application(s): compiler


```
               Optimization of tuple matching has been slightly
               improved.
```

### OTP-12979    Application(s): compiler


```
               Five deprecated and undocumented functions in the
               module core_lib have been removed. The functions are:
               get_anno/{1,2}, is_literal/1, is_literal_list/1, and
               literal_value. Use the appropriate functions in the
               cerl module instead.
```

### OTP-13059    Application(s): compiler, stdlib

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               The pre-processor can now expand the ?FUNCTION_NAME and
               ?FUNCTION_ARITY macros.
```

### OTP-13280    Application(s): compiler


```
               The function mapfold/4 has been added to the cerl_trees
               module.
```

### OTP-13289    Application(s): compiler


```
               Bitstring comprehensions have been generalized to allow
               arbitrary expressions in the construction part.
```

### OTP-13374    Application(s): compiler

- Related Id(s): ERL-44

```
               Related Id(s): ERL-44

               The compiler will now produce warnings for binary
               patterns that will never match (example: > = Bin).
```

### OTP-13504    Application(s): compiler

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               The compiler will no longer put the compilation date
               and time into BEAM files. That means that two BEAM
               files compiled on the same computer from the same
               source code and compilation options will be identical.

               Note: If you want to find out whether a BEAM file on
               disk is different from the loaded code, compared the
               MD5 value obtained from Mod:module_info(md5) with the
               MD5 value obtained from beam_lib:md5(BeamFileForMod)

               .
```

### OTP-13654    Application(s): compiler


```
               The function compile:env_compiler_options/0 has been
               added to allow tools to pick up the same default
               compiler options as the compiler itself.
```

crypto-3.7
==========

```
 The crypto-3.7 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-12217    Application(s): crypto


```
               Refactor crypto to use the EVP interface of OpenSSL,
               which is the recommended interface that also enables
               access to hardware acceleration for some operations.
```

### OTP-13206    Application(s): crypto

- Related Id(s): PR-832

```
               Related Id(s): PR-832

               Add support for 192-bit keys for the aes_cbc cipher.
```

### OTP-13207    Application(s): crypto

- Related Id(s): PR-829

```
               Related Id(s): PR-829

               Add support for 192-bit keys for aes_ecb.
```

### OTP-13214    Application(s): crypto, ssl


```
               Deprecate the function crypto:rand_bytes and make sure
               that crypto:strong_rand_bytes is used in all places
               that are cryptographically significant.
```

### OTP-13483    Application(s): crypto

- Related Id(s): PR-998

```
               Related Id(s): PR-998

               Enable AES-GCM encryption/decryption to change the tag
               length between 1 to 16 bytes.
```

debugger-4.2
============

```
 The debugger-4.2 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13375    Application(s): debugger


```
               When the debugger searches for source files, it will
               also use the location of the source in the compilation
               information part of the BEAM file.
```

dialyzer-3.0
============

```
 The dialyzer-3.0 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13520    Application(s): dialyzer


```
               Fix a bug in the translation of forms to types.
```

### OTP-13544    Application(s): dialyzer

- Related Id(s): PR-1007

```
               Related Id(s): PR-1007

               Correct misspelling in Dialyzer's acronym definition.
```

### OTP-13552    Application(s): compiler, dialyzer

- Related Id(s): ERL-138

```
               Related Id(s): ERL-138

               Dialyzer no longer crashes when there is an invalid
               function call such as 42(7) in a module being analyzed.
               The compiler will now warn for invalid function calls
               such as X = 42, x(7).
```

### OTP-13653    Application(s): dialyzer

- Related Id(s): ERL-157

```
               Related Id(s): ERL-157

               Fix a bug that caused Dialyzer to go into an infinite
               loop.
```

### OTP-13655    Application(s): dialyzer

- Related Id(s): PR-1092

```
               Related Id(s): PR-1092

               Fix a bug in Dialyzer related to call-site analysis.
```

## Improvements and New Features


### OTP-10349    Application(s): dialyzer


```
               The evaluation of SCCs in dialyzer_typesig is
               optimized.

               Maps are used instead of Dicts to further optimize the
               evaluation.
```

### OTP-13244    Application(s): dialyzer


```
               Since Erlang/OTP R14A, when support for parameterized
               modules was added, module() has included tuple(), but
               that part is removed; the type module() is now the same
               as atom(), as documented in the Reference Manual.
```

### OTP-13542    Application(s): dialyzer

- Related Id(s): PR-1014
- **POTENTIAL INCOMPATIBILITY**

```
               Related Id(s): PR-1014

               *** POTENTIAL INCOMPATIBILITY ***

               The type specification syntax for Maps is improved:

               --

               The association type KeyType := ValueType denotes an
               association that must be present.

               --

               The shorthand ... stands for the association type any()
               => any().

               An incompatible change is that #{} stands for the empty
               map. The type map() (a map of any size) can be written
               as #{...}.
```

### OTP-13547    Application(s): dialyzer


```
               The translation of forms to types is improved.
```

diameter-1.12
=============

```
 The diameter-1.12 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13611    Application(s): diameter


```
               Ensure listening socket is closed at transport removal.

               Transport removal did not immediately close a
               diameter_tcp/sctp listening socket, and a subsequent
               peer connection caused it to remain open.
```

## Improvements and New Features


### OTP-13508    Application(s): diameter


```
               Add diameter:peer_info/1.

               That retrieves information in the style of
               diameter:service_info/2, but for a single peer
               connection.
```

edoc-0.7.19
===========

```
 The edoc-0.7.19 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13558    Application(s): edoc


```
               Handle typed record fields.
```

eldap-1.2.2
===========

```
 The eldap-1.2.2 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13590    Application(s): eldap

- Related Id(s): PR-1048

```
               Related Id(s): PR-1048

               If the underlying tcp connection is closed and an LDAP
               operation returned tcp_error, the client applications
               tend to close the ldap handle with eldap:close. This
               will cause a {nocatch, {gen_tcp_error, ...}} exception.

               Such errors are now ignored during close, because the
               socket will be closed anyway.
```

## Improvements and New Features


### OTP-13566    Application(s): eldap


```
               Modernize test suites
```

erl_docgen-0.5
==============

```
 The erl_docgen-0.5 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13600    Application(s): erl_docgen

- Related Id(s): ERL-141, Jira:

```
               Related Id(s): ERL-141, Jira:

               Generate HTML anchors for data types without name
               attribute.
```

### OTP-13638    Application(s): erl_docgen, otp


```
               Updated make rules so it's possible to use the xmllint
               target for checking the system documentation.
               Removed usage of non defined DTD tag (output) from the
               system documentation and corrected a number of xml
               faults.

               Added support for quote tag and a new level of header
               formatting in erl_docgen.

               A fault when generating html for manual set markers for
               section headings is corrected so now is the title
               visible after hyperlink jump.
```

### OTP-13639    Application(s): erl_docgen


```
               Corrected the space handling for the seealso tag.
```

## Improvements and New Features


### OTP-13668    Application(s): erl_docgen

- Related Id(s): PR-543

```
               Related Id(s): PR-543

               Sort the modules function index alphabetically.
```

erl_interface-3.9
=================

```
 The erl_interface-3.9 application can be applied independently of
 other applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13666    Application(s): erl_interface

- Related Id(s): ERL-158

```
               Related Id(s): ERL-158

               Fix decoding of LLONG_MIN in erl_decode
```

### OTP-13673    Application(s): erl_interface


```
               On windows ei_decode_ulong and ei_decode_long now
               correctly returns an error when trying to decode a
               number that does not fit in a long. Fixed a bug on
               windows where enabling ei tracing would cause a
               segmentation fault.
```

## Improvements and New Features


### OTP-13488    Application(s): erl_interface, erts, jinterface


```
               Handle terms (pids,ports and refs) from nodes with a
               'creation' value larger than 3. This is a preparation
               of the distribution protocol to allow OTP 19 nodes to
               correctly communicate with future nodes (20 or higher).
               The 'creation' value differentiates different
               incarnations of the same node (name).
```

erts-8.0
========

```
 The erts-8.0 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-12593    Application(s): erts, kernel


```
               The handling of on_load functions has been improved.
               The major improvement is that if a code upgrade fails
               because the on_load function fails, the previous
               version of the module will now be retained.
```

### OTP-13034    Application(s): erts


```
               is_builtin(erlang, apply, 3) will now return true.
```

### OTP-13288    Application(s): erts

- Related Id(s): PR913

```
               Related Id(s): PR913

               Fix enif_get_list_length to return false if list is
               improper or have length larger than UINT_MAX (did
               return true and an incorrect length value).
```

### OTP-13341    Application(s): erts

- Related Id(s): PR951

```
               Related Id(s): PR951

               Cleanup hipe signal handling code for x86 and make it
               more portable.
```

### OTP-13411    Application(s): erts, kernel


```
               Make file:datasync use fsync instead of fdatasync on
               Mac OSX.
```

### OTP-13419    Application(s): erts


```
               Make sure to create a crash dump when running out of
               memory. This was accidentally removed in the erts-7.3
               release.
```

### OTP-13425    Application(s): erts


```
               A bug has been fixed where if erlang was started +B on
               a unix platform it would be killed by a SIGUSR2 signal
               when creating a crash dump.
```

### OTP-13452    Application(s): erts


```
               Fix race between process_flag(trap_exit,true) and a
               received exit signal.

               A process could terminate due to exit signal even
               though process_flag(trap_exit,true) had returned. A
               very specific timing between call to process_flag/2 and
               exit signal from another scheduler was required for
               this to happen.
```

### OTP-13459    Application(s): erts, stdlib


```
               Don't search for non-existing Map keys twice

               For maps:get/2,3 and maps:find/2, searching for an
               immediate key, e.g. an atom, in a small map, the search
               was performed twice if the key did not exist.
```

### OTP-13474    Application(s): erts


```
               When an abnormally large distribution message is about
               to be sent, the VM has been changed to create a crash
               dump instead of a core dump.
```

### OTP-13485    Application(s): erts

- Related Id(s): ERL-123

```
               Related Id(s): ERL-123

               Fix erlang:process_info/2 type specification
```

### OTP-13489    Application(s): erts

- Related Id(s): ERL-127

```
               Related Id(s): ERL-127

               Fix bug in open_port/2 with option {args, List}. A vm
               crash could be caused by an improper List.
```

### OTP-13494    Application(s): erts

- Related Id(s): ERL-126

```
               Related Id(s): ERL-126

               Fixed a race-condition bug where the emulator could
               crash when erlang:system_profile/1,2 was enabled and a
               process had to be re-scheduled during termination.
```

### OTP-13512    Application(s): erts


```
               Fixed bugs where the reduction counter was not handled
               correct.
```

### OTP-13517    Application(s): erts


```
               Fixed typo in description of the EPMD_DUMP_REQ
               response.
```

### OTP-13540    Application(s): erts


```
               Fixed a bug where a process flagged as sensitive would
               sometimes record its save_calls when it shouldn't.
```

### OTP-13562    Application(s): erts


```
               Update configure scripts to not use hard-coded path for
               /bin/pwd and /bin/rm.
```

### OTP-13628    Application(s): erts


```
               When passing a larger binary than the outputv callback
               of a linked-in driver can handle in one io vector slot,
               the binary is now split into multiple slots in the io
               vector. This change only effects system where the max
               size of an io vector slot is smaller then the word size
               of the system (e.g. Windows).

               This change means that it is now possible on Windows to
               send binaries that are larger than 4GB to port_command,
               which is what is used for file:write, gen_tcp:send etc.
```

### OTP-13657    Application(s): erts


```
               Workaround of Maps output in crashdumps. Currently the
               atom 'undefined' is generated instead of Map data if a
               Map type is encountered during crash.
```

## Improvements and New Features


### OTP-10267    Application(s): erts

- **HIGHLIGHT**
- **POTENTIAL INCOMPATIBILITY**

```
               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               The tracing support has been extended to allow a tracer
               module to be the trace event handler instead of a
               process or port. The tracer module makes it possible
               for trace tools to filter or manipulate trace event
               data without the trace event first having to be copied
               from the traced process or port.

               With the introduction of this feature,
               erlang:trace(all|existing, _, _) now also returns the
               tracer process as part of the number of processes on
               which tracing is enabled. The is incompatible with the
               previous releases.
```

### OTP-10282    Application(s): erts


```
               Introduce LTTng tracing of Erlang Runtime System

               For LTTng to be enabled OTP needs to be built with
               configure option --with-dynamic-trace=lttng.

               This feature introduces tracepoints for schedulers,
               drivers, memory carriers, memory and async thread pool.

               For a list of all tracepoints, see Runtime Tools User's
               Guide .
```

### OTP-11384    Application(s): erts


```
               Make it possible to monitor/demonitor ports using the
               erlang:monitor/2 API. The process and port information
               functions have also been updated to include information
               about monitors from processes to ports.
```

### OTP-12345    Application(s): erts, runtime_tools

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               Add microstate accounting

               Microstate accounting is a way to track which state the
               different threads within ERTS are in. The main usage
               area is to pin point performance bottlenecks by
               checking which states the threads are in and then from
               there figuring out why and where to optimize.

               Since checking whether microstate accounting is on or
               off is relatively expensive only a few of the states
               are enabled by default and more states can be enabled
               through configure.

               There is a convenience module called msacc that has
               been added to runtime_tools that can assist in
               gathering and interpreting the data from Microstate
               accounting.

               For more information see
               erlang:statistics(microstate_accounting, _) and the
               msacc module in runtime_tools.
```

### OTP-12573    Application(s): erts


```
               The port of Erlang/OTP to the real-time operating
               system OSE has been removed.
```

### OTP-12590    Application(s): erts

- Related Id(s): OTP-10251
- **HIGHLIGHT**

```
               Related Id(s): OTP-10251

               *** HIGHLIGHT ***

               Sharing preserved copy for messages and exit signals

               Enable sharing preserved copy with configure option
               --enable-sharing-preserving. This will preserve
               sharing, within the process, when communication with
               other processes in the Erlang node. There is a
               trade-off, the copy is more costly but this cost can be
               reclaimed if there is a lot of sharing in the message.
               In addition literals will not be copied in a send
               except during a purge phase of the module where the
               literals are located. This feature is considered
               experimental in 19.0.
```

### OTP-12883    Application(s): erts


```
               Halfword BEAM has been removed.
```

### OTP-12908    Application(s): erts, kernel


```
               Added os:perf_counter/1.

               The perf_counter is a very very cheap and high
               resolution timer that can be used to timestamp system
               events. It does not have monoticity guarantees, but
               should on most OS's expose a monotonous time.
```

### OTP-13047    Application(s): erts


```
               Support for a fragmented young heap generation. That
               is, the young heap generation can consist of multiple
               non continuous memory areas. The main reason for this
               change is to avoid extra copying of messages that could
               not be allocated directly on the receivers heap.
```

### OTP-13086    Application(s): erts


```
               Erlang linked-in driver can now force the call to
               open_port to block until a call to erl_drv_init_ack is
               made inside the driver. This is useful when you want to
               do some asynchronous initialization, for example
               getting configuration from a pipe, and you want the
               initial open_port call to fail if the configuration is
               incomplete or wrong. See the erl_driver documentation
               for more details on the API.
```

### OTP-13087    Application(s): erts


```
               Erlang linked-in drivers can now set their own pids as
               seen in erlang:port_info/1 by using the erl_drv_set_pid
               function. For more details see the erl_driver
               documentation.
```

### OTP-13088    Application(s): erts

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               The functionality behind erlang:open_port/2 when called
               with spawn or spawn_executable has been redone so that
               the forking of the new program is done in a separate
               process called erl_child_setup. This allows for a much
               more robust implementation that uses less memory and
               does not block the entire emulator if the program to be
               started is on an un-accessible NFS. Benchmarks have
               shown this approach to be about 3-5 times as fast as
               the old approach where the fork/vfork was done by erts.
               This is a pure stability and performance fix, however
               some error messages may have changed, which is why it
               is marked as a backwards incompatible change.
```

### OTP-13096    Application(s): erts


```
               Improved yielding strategy in the implementation of the
               following native functions:

               -- erlang:binary_to_list/1

               -- erlang:binary_to_list/3

               -- erlang:bitstring_to_list/1

               -- erlang:list_to_binary/1

               -- erlang:iolist_to_binary/1

               -- erlang:list_to_bitstring/1

               -- binary:list_to_bin/1

               This in order to improve performance of these
               functions.
```

### OTP-13097    Application(s): erts


```
               All garbage collections of processes now bump
               reductions. Also the amount of reductions bumped when
               garbage collecting has been adjusted. It now better
               corresponds to the amount of work performed. This in
               order to improve the real time characteristics of the
               system.
```

### OTP-13111    Application(s): erts, kernel


```
               New functions that can load multiple modules at once
               have been added to the 'code' module. The functions are
               code:atomic_load/1, code:prepare_loading/1,
               code:finish_loading/1, and
               code:ensure_modules_loaded/1.
```

### OTP-13112    Application(s): erts


```
               The -boot_var option for erl now only supports a single
               key and single value (as documented). The option used
               to allow multiple key/value pairs, but that behavior
               was undocumented.

               The function erl_prim_loader:start/3 has been removed.
               Its documentation has also been removed.

               The undocumented and unsupported function
               erl_prim_loader:get_files/2 has been removed.
```

### OTP-13122    Application(s): erts


```
               Low level BIF erlang:purge_module/1 is made more robust
               against incorrect use. Lingering processes that still
               refer the old code are now killed before the module is
               purged to prevent fatal VM behavior.
```

### OTP-13123    Application(s): erts


```
               Improved dirty scheduler implementation. For more
               information see the NIF documentation.

               -- The dirty scheduler support is still *experimental*.

               -- The support for determining whether dirty NIF
               support exist or not at compile time using the C
               preprocessor macro ERL_NIF_DIRTY_SCHEDULER_SUPPORT has
               been removed.

               -- The enif_is_on_dirty_scheduler() function has been
               removed. Use enif_thread_type() instead.
```

### OTP-13167    Application(s): erts


```
               Various optimizations done to process dictionary
               access.
```

### OTP-13174    Application(s): erts


```
               Added max_heap_size process flag. max_heap_size allows
               the user to limit the maximum heap used by a process.
               See erlang:process_flag for more details.
```

### OTP-13227    Application(s): erts


```
               Allow dynamic drivers and NIF libraries to be built
               with gcc option -fvisibility=hidden for faster loading
               and more optimized code.
```

### OTP-13265    Application(s): erts


```
               Add erlang:process_info(Pid, garbage_collection_info)
               which returns extended garbage_collection information.
               For more details see the documentation.
```

### OTP-13293    Application(s): erts


```
               The functions erlang:list_to_integer/1 and
               string:to_integer/1 have been optimized for large
               inputs.
```

### OTP-13359    Application(s): erts


```
               Improved memory allocation strategy for hipe native
               code on x86_64 (amd64) architectures by reserving
               enough low virtual address space needed for the
               HiPE/AMD64 small code model. The default virtual
               address area for hipe code is set to 512Mb, but can be
               changed with emulator flag +MXscs.
```

### OTP-13366    Application(s): erts

- Related Id(s): OTP-13047
- **HIGHLIGHT**

```
               Related Id(s): OTP-13047

               *** HIGHLIGHT ***

               Introduction of configurable management of data
               referred to by the message queue of a process. Each
               process can be configured individually.

               It is now possible to configure the message queue of a
               process, so that all data referred by it will be kept
               outside of the heap, and by this prevent this data from
               being part of garbage collections.

               For more information see the documentation of
               process_flag(message_queue_data, MQD).
```

### OTP-13401    Application(s): erts


```
               Processes now yield when scanning large message queues
               and not finding a matching message. This in order to
               improve real time characteristics.
```

### OTP-13440    Application(s): erts


```
               Optimized an erts internal function that is used to
               traverse erlang terms. The internal function was mainly
               used by term_to_binary and comparison of terms.
               Benchmarks have shown up to a 10% performance increase
               in those functions after the optimization.
```

### OTP-13442    Application(s): erts


```
               Add the following NIF API functions:

               -- enif_cpu_time

               -- enif_now_time

               -- enif_make_unique_integer

               -- enif_is_process_alive

               -- enif_is_port_alive

               -- enif_term_to_binary

               -- enif_binary_to_term

               -- enif_port_command

               for details of what each function does, see the erl_nif
               documentation.
```

### OTP-13487    Application(s): erts, stdlib


```
               Optimize '++' operator and lists:append/2 by using a
               single pass to build a new list while checking for
               properness.
```

### OTP-13488    Application(s): erl_interface, erts, jinterface


```
               Handle terms (pids,ports and refs) from nodes with a
               'creation' value larger than 3. This is a preparation
               of the distribution protocol to allow OTP 19 nodes to
               correctly communicate with future nodes (20 or higher).
               The 'creation' value differentiates different
               incarnations of the same node (name).
```

### OTP-13493    Application(s): erts

- Related Id(s): PR-999

```
               Related Id(s): PR-999

               Don't send unasked for systemd notifications in epmd
```

### OTP-13495    Application(s): erts


```
               The enif_send API has been extended to allow NULL to be
               used as the message environment. When used this way, a
               message environment is implicitly created and the given
               term is copied into that environment before sending.
               This can be an optimization if many small messages are
               being sent by the nif.
```

### OTP-13496    Application(s): erts

- **HIGHLIGHT**
- **POTENTIAL INCOMPATIBILITY**

```
               *** HIGHLIGHT ***

               *** POTENTIAL INCOMPATIBILITY ***

               The tracing support has been extended to allow tracing
               on ports. Ports can be traced on using the 'ports',
               'send' and 'receive' trace flags.

               The first argument of erlang:trace/3 has been extended
               so that 'all', 'existing' and 'new' now include both
               processes and ports. New Tracee variants,
               'all_processes', 'all_ports', 'existing_processes' etc
               have been added to specify only processes or ports.
```

### OTP-13497    Application(s): erts

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               When the 'procs' trace flag is enabled, a 'spawned'
               trace event is now also generated by a newly created
               process. The previous event 'spawn' remains, but as it
               is generated by the process that did the spawn, it is
               not guaranteed that it is ordered with other trace
               events from the newly spawned process. So when tracking
               the lifetime of a process this new event should be used
               as the creation event.

               This new trace event is marked as an incompatibility
               because tools that expect certain trace events when
               enabling 'procs' will have to updated.
```

### OTP-13501    Application(s): erts


```
               Add the erlang:match_spec_test/3 function. The
               functions allows the testing of match specifications
               for both tracing and ets tables. It can be used to test
               that a match specification does the expected filtering
               on specific data. It also returns more verbose error
               reasons for incorrectly constructed match
               specifications.
```

### OTP-13503    Application(s): erts

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               The erts internal tracing support has been changed to
               have much less overhead and be more scalable.

               This rewrite does not break any backwards
               incompatibilities, but it does change the ordering of
               some trace messages when compared to previous releases.
               It should be noted that this only applies to trace
               messages sent to processes or ports, it does not apply
               to the new tracer module. However in future releases
               they may also be effected by this.

               Trace messages are only guaranteed to be ordered from
               one traced process or port. In previous releases this
               was not visible as a 'send' trace message would always
               arrive before the corresponding 'receive' trace message
               that is no longer always the case. This also means that
               timestamped trace messages may seem to arrive out of
               order as the timestamp is taken when the event is
               triggered and not when it is put in the queue of the
               tracer.
```

### OTP-13507    Application(s): erts


```
               Add possibility to filter send and receive trace with
               match specifications.
```

### OTP-13522    Application(s): erts, stdlib

- Related Id(s): PR-1025

```
               Related Id(s): PR-1025

               Add maps:update_with/3,4 and maps:take/2
```

### OTP-13532    Application(s): erts, runtime_tools

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Introduce LTTng tracing via Erlang tracing.

               For LTTng to be enabled OTP needs to be built with
               configure option --with-dynamic-trace=lttng.

               The dynamic trace module dyntrace is now capable to be
               used as a LTTng sink for Erlang tracing. For a list of
               all tracepoints, see Runtime Tools User's Guide .

               This feature also introduces an incompatible change in
               trace tags. The trace tags gc_start and gc_end has been
               split into gc_minor_start, gc_minor_end and
               gc_major_start, gc_major_end.
```

### OTP-13541    Application(s): erts

- Related Id(s): PR-1026

```
               Related Id(s): PR-1026

               Print heap pointers for garbing processes during
               crashdump
```

### OTP-13560    Application(s): erts


```
               Changed and improved low level memory statistics
               returned by erlang:system_info/1. The info for
               erts_mmap has been moved from mseg_alloc to its own
               section returned by {allocator, erts_mmap}.
```

### OTP-13580    Application(s): erts


```
               Add enif_snprintf to the NIF API

               The function enif_snprintf is similar to snprintf call
               but can handle formatting of Erlang terms via %T format
               specifier.
```

### OTP-13599    Application(s): erts


```
               The warning in the documentation for erlang:raise/3 has
               been removed. It is now officially perfectly fine to
               use raise/3 in production code.
```

### OTP-13606    Application(s): erts


```
               Fix bugs caused by the VM sometimes truncating object
               sizes or offsets to 32 bits on 64-bit hosts. These bugs
               were mainly found when working with large unicode
               strings and nifs environments.
```

### OTP-13627    Application(s): erts


```
               Add -start_epmd command line option, this lets you
               disable automatic starting of epmd when starting a
               distributed node.

               Add -epmd_module command line option, this lets you
               specify a module to register and look-up node names in.
               The default module is erl_epmd.
```

### OTP-13630    Application(s): erts


```
               erlang:halt now truncates strings longer than 200
               characters instead of failing with badarg.
```

### OTP-13634    Application(s): erts


```
               Fix possible race in poller wake up on windows
```

et-1.6
======

```
 The et-1.6 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13545    Application(s): et


```
               Update selector to utilize new garbage collection trace
               tags.
```

eunit-2.3
=========

```
 The eunit-2.3 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13612    Application(s): eunit


```
               There is a new debugVal/2 that gives control over the
               truncation depth.
```

hipe-3.15.1
===========

```
 The hipe-3.15.1 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13407    Application(s): hipe

- Related Id(s): PR-984

```
               Related Id(s): PR-984

               HiPE compiler crashed, during compilation, in some
               cases that involved inlining of float operations on
               complicated control flow graphs.
```

### OTP-13626    Application(s): hipe


```
               Various fixes and improvements to the HiPE LLVM
               backend.

               -- Add support for LLVM 3.7 and 3.8 in the HiPE/LLVM
               x86_64 backend

               -- Reinstate support for the LLVM backend on x86 (works
               OK for LLVM 3.5 to 3.7 -- LLVM 3.8 has a bug that
               prevents it from generating correct native code on x86)
```

## Improvements and New Features


### OTP-13625    Application(s): hipe

- Related Id(s): PR-1069

```
               Related Id(s): PR-1069

               Elimination of maps:is_key/2 calls to HiPE
```

inets-6.3
=========

```
 The inets-6.3 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13644    Application(s): inets


```
               Ftp client fixes: 1) Corrected a bug that the ftp
               client gen_server crashed if the listening data socket
               was closed.

               2) Corrections of ftp client error codes so they are as
               defined in the reference manual
```

## Improvements and New Features


### OTP-12441    Application(s): inets


```
               Remove usage of erlang:now().
```

### OTP-13383    Application(s): inets

- Related Id(s): PR-972

```
               Related Id(s): PR-972

               Add handling of DELETE Body to http client.
```

### OTP-13445    Application(s): inets

- Related Id(s): PR-988

```
               Related Id(s): PR-988

               Removed references to mod_include and webtool from
               examples and tests.
```

### OTP-13561    Application(s): inets

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Remove module inets_regexp. Module re should be used
               instead.
```

jinterface-1.7
==============

```
 The jinterface-1.7 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13482    Application(s): jinterface


```
               Fix Jinterface build on Maven
```

## Improvements and New Features


### OTP-13488    Application(s): erl_interface, erts, jinterface


```
               Handle terms (pids,ports and refs) from nodes with a
               'creation' value larger than 3. This is a preparation
               of the distribution protocol to allow OTP 19 nodes to
               correctly communicate with future nodes (20 or higher).
               The 'creation' value differentiates different
               incarnations of the same node (name).
```

kernel-5.0
==========

```
 The kernel-5.0 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-12593    Application(s): erts, kernel


```
               The handling of on_load functions has been improved.
               The major improvement is that if a code upgrade fails
               because the on_load function fails, the previous
               version of the module will now be retained.
```

### OTP-13409    Application(s): kernel


```
               rpc:call() and rpc:block_call() would sometimes cause
               an exception (which was not mentioned in the
               documentation). This has been corrected so that
               {badrpc,Reason} will be returned instead.
```

### OTP-13410    Application(s): kernel


```
               On Windows, for modules that were loaded early (such as
               the lists module), code:which/1 would return the path
               with mixed slashes and backslashes, for example:
               "C:\\Program
               Files\\erl8.0/lib/stdlib-2.7/ebin/lists.beam". This has
               been corrected.
```

### OTP-13411    Application(s): erts, kernel


```
               Make file:datasync use fsync instead of fdatasync on
               Mac OSX.
```

### OTP-13444    Application(s): kernel


```
               The default chunk size for the fallback sendfile
               implementation, used on platforms that do not have a
               native sendfile, has been decreased in order to reduce
               connectivity issues.
```

### OTP-13461    Application(s): kernel


```
               Large file writes (2Gb or more) could fail on some Unix
               platforms (for example, OS X and FreeBSD).
```

### OTP-13470    Application(s): kernel

- Related Id(s): #969, Pull

```
               Related Id(s): #969, Pull

               A bug has been fixed where the DNS resolver inet_res
               did not refresh its view of the contents of for example
               resolv.conf immediately after start and hence then
               failed name resolution. Reported and fix suggested by
               Michal Ptaszek in GitHUB pull req #949.
```

### OTP-13516    Application(s): kernel

- Related Id(s): PR-1008

```
               Related Id(s): PR-1008

               Fix process leak from global_group.
```

### OTP-13622    Application(s): kernel

- Related Id(s): PR-1065
- **POTENTIAL INCOMPATIBILITY**

```
               Related Id(s): PR-1065

               *** POTENTIAL INCOMPATIBILITY ***

               The function inet:gethostbyname/1 now honors the
               resolver option inet6 instead of always looking up IPv4
               addresses.
```

### OTP-13631    Application(s): kernel

- Related Id(s): PR-911

```
               Related Id(s): PR-911

               The Status argument to init:stop/1 is now sanity
               checked to make sure erlang:halt does not fail.
```

## Improvements and New Features


### OTP-12837    Application(s): kernel


```
               Add {line_delim, byte()} option to inet:setopts/2 and
               decode_packet/3
```

### OTP-12908    Application(s): erts, kernel


```
               Added os:perf_counter/1.

               The perf_counter is a very very cheap and high
               resolution timer that can be used to timestamp system
               events. It does not have monoticity guarantees, but
               should on most OS's expose a monotonous time.
```

### OTP-13089    Application(s): kernel


```
               The os:cmd call has been optimized on unix platforms to
               be scale better with the number of schedulers.
```

### OTP-13111    Application(s): erts, kernel


```
               New functions that can load multiple modules at once
               have been added to the 'code' module. The functions are
               code:atomic_load/1, code:prepare_loading/1,
               code:finish_loading/1, and
               code:ensure_modules_loaded/1.
```

### OTP-13191    Application(s): kernel


```
               The code path cache feature turned out not to be very
               useful in practice and has been removed. If an attempt
               is made to enable the code path cache, there will be a
               warning report informing the user that the feature has
               been removed.
```

### OTP-13294    Application(s): kernel


```
               When an attempt is made to start a distributed Erlang
               node with the same name as an existing node, the error
               message will be much shorter and easier to read than
               before. Example:

               Protocol 'inet_tcp': the name somename@somehost seems
               to be in use by another Erlang node
```

### OTP-13325    Application(s): kernel


```
               The output of the default error logger is somewhat
               prettier and easier to read. The default error logger
               is used during start-up of the OTP system. If the
               start-up fails, the output will be easier to read.
```

### OTP-13449    Application(s): kernel

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               The functions rpc:safe_multi_server_call/2,3 that were
               deprecated in R12B have been removed.
```

### OTP-13458    Application(s): kernel


```
               Update the error reasons in dist_util, and show them in
               the logs if net_kernel:verbose(1) has been called.
```

### OTP-13572    Application(s): erts, kernel

- Related Id(s): PR-612
- **HIGHLIGHT**

```
               Related Id(s): PR-612

               *** HIGHLIGHT ***

               Experimental support for Unix Domain Sockets has been
               implemented. Read the sources if you want to try it
               out. Example: gen_udp:open(0,
               [{ifaddr,{local,"/tmp/socket"}}]). Documentation will
               be written after user feedback on the experimental API.
```

### OTP-13650    Application(s): kernel


```
               Allow heart to be configured to not kill the previous
               emulator before calling the HEART_COMMAND. This is done
               by setting the environment variable HEART_NO_KILL to
               TRUE.
```

mnesia-4.14
===========

```
 The mnesia-4.14 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13058    Application(s): mnesia

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               Added experimental external backend plugin api. This
               adds the possibility for the user to write other
               storage backends for data, for example by using shared
               memory or ram-cached disk storage.

               The plugin api may change in future versions after
               being battle tested.
```

observer-2.2
============

```
 The observer-2.2 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13481    Application(s): observer, runtime_tools


```
               Update observer GUI to support tracing on ports, and to
               set matchspecs for send/receive. This required some
               minor bugfixes in runtime_tools/dbg.
```

### OTP-13500    Application(s): observer, runtime_tools


```
               Update dbg and ttb to work with a tracer module as
               tracer and tracing on ports.
```

### OTP-13555    Application(s): observer


```
               Added possibility to change update frequency and length
               of the graph windows.
```

### OTP-13556    Application(s): observer


```
               Improved background coloring to work with dark themes
               and other visual improvements.
```

### OTP-13647    Application(s): observer


```
               Crashdump viewer now allows port info "Port controls
               forker process..."
```

odbc-2.11.2
===========

```
 The odbc-2.11.2 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13559    Application(s): odbc


```
               Configure enhancement for better handling program paths
               used in the build process
```

os_mon-2.4.1
============

```
 The os_mon-2.4.1 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13526    Application(s): os_mon

- Related Id(s): PR-1029

```
               Related Id(s): PR-1029

               Fix type specification for cpu_sup:util/1
```

### OTP-13548    Application(s): os_mon

- Related Id(s): PR-1046

```
               Related Id(s): PR-1046

               Fix strict compilation on SUN/SPARC
```

### OTP-13597    Application(s): os_mon

- Related Id(s): PR-1049

```
               Related Id(s): PR-1049

               Implement cpu_sup:util/0,1 on Mac OSX
```

### OTP-13601    Application(s): os_mon

- Related Id(s): PR-1039

```
               Related Id(s): PR-1039

               Fix memsup:get_os_wordsize() on 64-bit FreeBSD and
               64-bit Linux PPC
```

parsetools-2.1.2
================

```
 The parsetools-2.1.2 application can be applied independently of
 other applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13551    Application(s): asn1, cosEvent, cosEventDomain,


```
               cosFileTransfer, cosNotification, cosProperty, cosTime,
               cosTransactions, gs, ic, megaco, orber, otp_mibs,
               parsetools, snmp, typer, xmerl

               Internal changes
```

percept-0.9
===========

```
 The percept-0.9 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13422    Application(s): percept


```
               Remove deprecated erlang:now/0 calls
```

## Improvements and New Features


### OTP-13598    Application(s): percept


```
               Improve line implementation

               Add capabilities for line thickness and anti-aliasing.
```

public_key-1.2
==============

```
 The public_key-1.2 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13554    Application(s): public_key


```
               The ASN-1 type GeneralName can have more values, then
               the most common directory name, the code now handles
               this.
```

## Improvements and New Features


### OTP-13408    Application(s): public_key

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               Handle PEM encoded EC public keys
```

reltool-0.7.1
=============

```
 The reltool-0.7.1 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13033    Application(s): reltool

- Related Id(s): OTP-12719

```
               Related Id(s): OTP-12719

               Modify the code as motivated by a change of the Erlang
               Parser (undefined is no longer automatically inserted
               to the type of record fields without an initializer).
```

runtime_tools-1.10
==================

```
 The runtime_tools-1.10 application can be applied independently of
 other applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13576    Application(s): runtime_tools

- Related Id(s): ERL-119

```
               Related Id(s): ERL-119

               Fix bug in dbg:trace_port/2 that could cause the trace
               ip driver to produce faulty error reports
               "...(re)selected before stop_select was called for
               driver trace_ip_drv".
```

## Improvements and New Features


### OTP-12345    Application(s): erts, runtime_tools

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               Add microstate accounting

               Microstate accounting is a way to track which state the
               different threads within ERTS are in. The main usage
               area is to pin point performance bottlenecks by
               checking which states the threads are in and then from
               there figuring out why and where to optimize.

               Since checking whether microstate accounting is on or
               off is relatively expensive only a few of the states
               are enabled by default and more states can be enabled
               through configure.

               There is a convenience module called msacc that has
               been added to runtime_tools that can assist in
               gathering and interpreting the data from Microstate
               accounting.

               For more information see
               erlang:statistics(microstate_accounting, _) and the
               msacc module in runtime_tools.
```

### OTP-13481    Application(s): observer, runtime_tools


```
               Update observer GUI to support tracing on ports, and to
               set matchspecs for send/receive. This required some
               minor bugfixes in runtime_tools/dbg.
```

### OTP-13500    Application(s): observer, runtime_tools


```
               Update dbg and ttb to work with a tracer module as
               tracer and tracing on ports.
```

### OTP-13502    Application(s): runtime_tools


```
               Updated dbg to accept the new trace options
               monotonic_timestamp and strict_monotonic_timestamp.
```

### OTP-13532    Application(s): erts, runtime_tools

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Introduce LTTng tracing via Erlang tracing.

               For LTTng to be enabled OTP needs to be built with
               configure option --with-dynamic-trace=lttng.

               The dynamic trace module dyntrace is now capable to be
               used as a LTTng sink for Erlang tracing. For a list of
               all tracepoints, see Runtime Tools User's Guide .

               This feature also introduces an incompatible change in
               trace tags. The trace tags gc_start and gc_end has been
               split into gc_minor_start, gc_minor_end and
               gc_major_start, gc_major_end.
```

sasl-3.0
========

```
 The sasl-3.0 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13184    Application(s): sasl

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               The module 'overload' is removed.
```

ssh-4.3
=======

```
 The ssh-4.3 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-12860    Application(s): ssh


```
               A socket created and connected by gen_tcp could now be
               used as input to ssh:connect, ssh:shell,
               ssh_sftp:start_channel and ssh:daemon.
```

### OTP-13131    Application(s): ssh


```
               Some time optimization mainly in message encoding.
```

### OTP-13175    Application(s): ssh


```
               Optimized the sftp client time by setting new packet
               and window sizes.
```

### OTP-13267    Application(s): ssh


```
               The ssh_connection_handler module in SSH is changed and
               now uses the new behaviour gen_statem.

               The module can be used as an example of a gen_statem
               callback module but with a warning: This commit of ssh
               is just a straightforward port from gen_fsm to
               gen_statem with some code cleaning. Since the state
               machine and the state callbacks are almost unchanged
               the ssh module does not demonstrate the full potential
               of the new behaviour.

               The "new" state machine uses compound states. The ssh
               server and client state machines are quite similar but
               differences exist. With gen_fsm there were flags in the
               user data which in fact implemented "substates". Now
               with gen_statem those are made explicit in the state
               names, eg. the state userauth and the binary role-flag
               becomes the two state names {userauth, server} and
               {userauth, client}.
```

### OTP-13347    Application(s): ssh

- Related Id(s): ERL-86

```
               Related Id(s): ERL-86

               The {error, Reason} tuples returned from ssh_sftp api
               functions are described.
```

### OTP-13479    Application(s): ssh


```
               Added -spec in ssh
```

### OTP-13527    Application(s): ssh


```
               It is now possible to call ssh:daemon/{1,2,3} with
               Port=0. This makes the daemon select a free listening
               tcp port before opening it. To find this port number
               after the call, use the new function ssh:daemon_info/1.
               See the reference manual for details.
```

ssl-8.0
=======

```
 The ssl-8.0 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13651    Application(s): ssl


```
               Server now rejects, a not requested client cert, as an
               incorrect handshake message and ends the connection.
```

## Improvements and New Features


### OTP-13195    Application(s): ssl

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Remove default support for DES cipher suites
```

### OTP-13214    Application(s): crypto, ssl


```
               Deprecate the function crypto:rand_bytes and make sure
               that crypto:strong_rand_bytes is used in all places
               that are cryptographically significant.
```

### OTP-13255    Application(s): ssl

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               Better error handling of user error during TLS upgrade.
               ERL-69 is solved by gen_statem rewrite of ssl
               application.
```

### OTP-13256    Application(s): ssl


```
               Provide user friendly error message when crypto rejects
               a key
```

### OTP-13415    Application(s): ssl


```
               Add ssl:getstat/1 and ssl:getstat/2
```

### OTP-13429    Application(s): ssl

- Related Id(s): Pull#956

```
               Related Id(s): Pull#956

               TLS distribution connections now allow specifying the
               options verify_fun, crl_check and crl_cache. See the
               documentation. GitHub pull req #956 contributed by
               Magnus Henoch.
```

### OTP-13431    Application(s): ssl


```
               Remove confusing error message when closing a
               distributed erlang node running over TLS
```

### OTP-13463    Application(s): ssl


```
               Remove default support for use of md5 in TLS 1.2
               signature algorithms
```

### OTP-13464    Application(s): ssl


```
               ssl now uses gen_statem instead of gen_fsm to implement
               the ssl connection process, this solves some timing
               issues in addition to making the code more intuitive as
               the behaviour can be used cleanly instead of having a
               lot of workaround for shortcomings of the behaviour.
```

### OTP-13465    Application(s): ssl

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Phase out interoperability with clients that offer
               SSLv2. By default they are no longer supported, but an
               option to provide interoperability is offered.
```

### OTP-13530    Application(s): ssl


```
               OpenSSL has functions to generate short (eight hex
               digits) hashes of issuers of certificates and CRLs.
               These hashes are used by the "c_rehash" script to
               populate directories of CA certificates and CRLs, e.g.
               in the Apache web server. Add functionality to let an
               Erlang program find the right CRL for a given
               certificate in such a directory.
```

### OTP-13629    Application(s): ssl


```
               Some legacy TLS 1.0 software does not tolerate the
               1/n-1 content split BEAST mitigation technique. Add a
               beast_mitigation SSL option (defaulting to
               one_n_minus_one) to select or disable the BEAST
               mitigation technique.
```

### OTP-13632    Application(s): ssl

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               Enhance error log messages to facilitate for users to
               understand the error
```

### OTP-13636    Application(s): ssl


```
               Increased default DH params to 2048-bit
```

### OTP-13656    Application(s): ssl


```
               Propagate CRL unknown CA error so that public_key
               validation process continues correctly and determines
               what should happen.
```

### OTP-13678    Application(s): ssl


```
               Introduce a flight concept for handshake packages. This
               is a preparation for enabling DTLS, however it can also
               have a positive effects for TLS on slow and unreliable
               networks.
```

stdlib-3.0
==========

```
 The stdlib-3.0 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13260    Application(s): stdlib

- Related Id(s): seq13002

```
               Related Id(s): seq13002

               Fix a race bug affecting dets:open_file/2.
```

### OTP-13459    Application(s): erts, stdlib


```
               Don't search for non-existing Map keys twice

               For maps:get/2,3 and maps:find/2, searching for an
               immediate key, e.g. an atom, in a small map, the search
               was performed twice if the key did not exist.
```

### OTP-13531    Application(s): stdlib


```
               Avoid stray corner-case math errors on Solaris, e.g. an
               error is thrown on underflows in exp() and pow() when
               it shouldn't be.
```

### OTP-13534    Application(s): stdlib

- Related Id(s): ERL-135

```
               Related Id(s): ERL-135

               Fix linting of map key variables

               Map keys cannot be unbound and then used in parallel
               matching.

               Example: #{ K := V } = #{ k := K } = M. This is illegal
               if 'K' is not bound.
```

### OTP-13602    Application(s): stdlib


```
               Fixed a bug in re on openbsd where sometimes re:run
               would return an incorrect result.
```

### OTP-13618    Application(s): stdlib

- Related Id(s): PR-1001

```
               Related Id(s): PR-1001

               To avoid potential timer bottleneck on supervisor
               restart, timer server is no longer used when the
               supervisor is unable to restart a child.
```

### OTP-13662    Application(s): stdlib

- Related Id(s): seq13136

```
               Related Id(s): seq13136

               The Erlang code preprocessor (epp) can handle file
               names spanning over many tokens. Example: -include("a"
               "file" "name")..
```

## Improvements and New Features


### OTP-10292    Application(s): stdlib


```
               The types of The Abstract Format in the erl_parse
               module have been refined.
```

### OTP-11879    Application(s): stdlib

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Undocumented syntax for function specifications, -spec
               F/A :: Domain -> Range, has been removed (without
               deprecation).

               Using the is_subtype(V, T) syntax for constraints (in
               function specifications) is no longer documented, and
               the newer syntax V :: T should be used instead. The
               Erlang Parser still recognizes the is_subtype syntax,
               and will continue to do so for some time.
```

### OTP-12502    Application(s): stdlib

- Related Id(s): OTP-12501

```
               Related Id(s): OTP-12501

               The 'random' module has been deprecated. Use the 'rand'
               module instead.
```

### OTP-12719    Application(s): stdlib

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Background: In record fields with a type declaration
               but without an initializer, the Erlang parser inserted
               automatically the singleton type 'undefined' to the
               list of declared types, if that value was not present
               there. That is, the record declaration:

               -record(rec, {f1 :: float(), f2 = 42 :: integer(), f3
               :: some_mod:some_typ()}).

               was translated by the parser to:

               -record(rec, {f1 :: float() | 'undefined', f2 = 42 ::
               integer(), f3 :: some_mod:some_typ() | 'undefined'}).

               The rationale for this was that creation of a "dummy"
               #rec{} record should not result in a warning from
               dialyzer that, for example, the implicit initialization
               of the #rec.f1 field violates its type declaration.

               Problems: This seemingly innocent action has some
               unforeseen consequences.

               For starters, there is no way for programmers to
               declare that e.g. only floats make sense for the f1
               field of #rec{} records when there is no "obvious"
               default initializer for this field. (This also affects
               tools like PropEr that use these declarations produced
               by the Erlang parser to generate random instances of
               records for testing purposes.)

               It also means that dialyzer does not warn if e.g. an
               is_atom/1 test or something more exotic like an
               atom_to_list/1 call is performed on the value of the f1
               field.

               Similarly, there is no way to extend dialyzer to warn
               if it finds record constructions where f1 is not
               initialized to some float.

               Last but not least, it is semantically problematic when
               the type of the field is an opaque type: creating a
               union of an opaque and a structured type is very
               problematic for analysis because it fundamentally
               breaks the opacity of the term at that point.

               Change: To solve these problems the parser will not
               automatically insert the 'undefined' value anymore;
               instead the user has the option to choose the places
               where this value makes sense (for the field) and where
               it does not and insert the | 'undefined' there
               manually.

               Consequences of this change: This change means that
               dialyzer will issue a warning for all places where
               records with uninitialized fields are created and those
               fields have a declared type that is incompatible with
               'undefined' (e.g. float()). This warning can be
               suppressed easily by adding | 'undefined' to the type
               of this field. This also adds documentation that the
               user really intends to create records where this field
               is uninitialized.
```

### OTP-12861    Application(s): stdlib


```
               Remove deprecated functions in the modules erl_scan and
               erl_parse.
```

### OTP-13059    Application(s): compiler, stdlib

- **HIGHLIGHT**

```
               *** HIGHLIGHT ***

               The pre-processor can now expand the ?FUNCTION_NAME and
               ?FUNCTION_ARITY macros.
```

### OTP-13065    Application(s): stdlib

- Related Id(s): PR-960
- **HIGHLIGHT**

```
               Related Id(s): PR-960

               *** HIGHLIGHT ***

               A new behaviour gen_statem has been implemented. It has
               been thoroughly reviewed, is stable enough to be used
               by at least two heavy OTP applications, and is here to
               stay. But depending on user feedback, we do not expect
               but might find it necessary to make minor not backwards
               compatible changes into OTP-20.0, so its state can be
               designated as "not quite experimental"...

               The gen_statem behaviour is intended to replace gen_fsm
               for new code. It has the same features and add some
               really useful:

               -- State code is gathered

               -- The state can be any term

               -- Events can be postponed

               -- Events can be self generated

               -- A reply can be sent from a later state

               -- There can be multiple sys traceable replies

               The callback model(s) for gen_statem differs from the
               one for gen_fsm, but it is still fairly easy to rewrite
               from gen_fsm to gen_statem.
```

### OTP-13082    Application(s): stdlib


```
               Optimize binary:split/2 and binary:split/3 with native
               BIF implementation.
```

### OTP-13148    Application(s): stdlib

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Background: The types of record fields have since R12B
               been put in a separate form by epp:parse_file(),
               leaving the record declaration form untyped. The
               separate form, however, does not follow the syntax of
               type declarations, and parse transforms inspecting
               -type() attributes need to know about the special
               syntax. Since the compiler stores the return value of
               epp:parse_file() as debug information in the abstract
               code chunk ("Abst" or abstract_code), tools too need to
               know about the special syntax, if they inspect -type()
               attributes in abstract code.

               Change: No separate type form is created by
               epp:parse_file(), but the type information is kept in
               the record fields. This means that all parse transforms
               and all tools inspecting -record() declarations need to
               recognize {typed_record_field, Field, Type}.
```

### OTP-13152    Application(s): stdlib


```
               Unsized fields of the type bytes in binary generators
               are now forbidden. (The other ways of writing unsized
               fields, such as binary, are already forbidden.)
```

### OTP-13153    Application(s): stdlib


```
               The type map() is built-in, and cannot be redefined.
```

### OTP-13229    Application(s): stdlib

- Related Id(s): ERL-55

```
               Related Id(s): ERL-55

               Let dets:open_file() exit with a badarg message if
               given a raw file name (a binary).
```

### OTP-13392    Application(s): stdlib


```
               Add filename:basedir/2,3

               basedir returns suitable path(s) for 'user_cache',
               'user_config', 'user_data', 'user_log', 'site_config'
               and 'site_data'. On linux and linux like systems the
               paths will respect the XDG environment variables.
```

### OTP-13476    Application(s): stdlib


```
               There are new preprocessor directives -error(Term) and
               -warning(Term) to cause a compilation error or a
               compilation warning, respectively.
```

### OTP-13487    Application(s): erts, stdlib


```
               Optimize '++' operator and lists:append/2 by using a
               single pass to build a new list while checking for
               properness.
```

### OTP-13522    Application(s): erts, stdlib

- Related Id(s): PR-1025

```
               Related Id(s): PR-1025

               Add maps:update_with/3,4 and maps:take/2
```

### OTP-13523    Application(s): stdlib


```
               lists:join/2 has been added. Similar to string:join/2
               but works with arbitrary lists.
```

### OTP-13524    Application(s): stdlib

- Related Id(s): PR-1002

```
               Related Id(s): PR-1002

               Obfuscate asserts to make Dialyzer shut up.
```

### OTP-13619    Application(s): stdlib

- Related Id(s): PR-1000
- **POTENTIAL INCOMPATIBILITY**

```
               Related Id(s): PR-1000

               *** POTENTIAL INCOMPATIBILITY ***

               Supervisors now explicitly add their callback module in
               the return from sys:get_status/1,2. This is to simplify
               custom supervisor implementations. The Misc part of the
               return value from sys:get_status/1,2 for a supervisor
               is now:

               [{data, [{"State",
               State}]},{supervisor,[{"Callback",Module}]}]
```

### OTP-13623    Application(s): stdlib


```
               Relax translation of initial calls in proc_lib, i.e.
               remove the restriction to only do the translation for
               gen_server and gen_fsm. This enables user defined gen
               based generic callback modules to be displayed nicely
               in c:i() and observer.
```

### OTP-13658    Application(s): stdlib


```
               The function queue:lait/1 (misspelling of liat/1) is
               now deprecated.
```

syntax_tools-2.0
================

```
 The syntax_tools-2.0 application can be applied independently of
 other applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-12863    Application(s): syntax_tools

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               The abstract data type in erl_syntax is augmented with
               types and function specifications.

               The module erl_prettypr pretty prints types and
               function specification, and the output can be parsed.

               The types of record fields are no longer ignored. As a
               consequence erl_syntax_lib:analyze_record_field/1
               returns {Default, Type} instead of Default. The
               functions analyze_record_attribute, analyze_attribute,
               analyze_form, and analyze_forms in the erl_syntax_lib
               module are also affected by this incompatible change.
```

tools-2.8.4
===========

```
 The tools-2.8.4 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13499    Application(s): tools


```
               Update fprof to use the new 'spawned' trace event to
               determine when a process has been created.
```

## Improvements and New Features


### OTP-13593    Application(s): tools


```
               Optimize adding multiple modules to an Xref server.
```

### OTP-13610    Application(s): tools


```
               Various emacs mode improvements, such as better tags
               support.
```

typer-0.9.11
============

```
 The typer-0.9.11 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13551    Application(s): asn1, cosEvent, cosEventDomain,


```
               cosFileTransfer, cosNotification, cosProperty, cosTime,
               cosTransactions, gs, ic, megaco, orber, otp_mibs,
               parsetools, snmp, typer, xmerl

               Internal changes
```

wx-1.7
======

```
 The wx-1.7 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13491    Application(s): wx


```
               Fixed bugs which could cause called functions to be
               invoked twice or not at all when callbacks where
               invoked at the same time.
```

## Improvements and New Features


### OTP-13553    Application(s): wx

- **POTENTIAL INCOMPATIBILITY**

```
               *** POTENTIAL INCOMPATIBILITY ***

               Changed atom 'boolean' fields in #wxMouseState{} to
               'boolean()'.

               Moved out arguments in wxListCtrl:hitTest to result.

               Removed no-op functions in wxGauge that have been
               removed from wxWidgets-3.1.
```

xmerl-1.3.11
============

```
 The xmerl-1.3.11 application can be applied independently of other
 applications on a full OTP 19 installation.
```

## Improvements and New Features


### OTP-13551    Application(s): asn1, cosEvent, cosEventDomain,


```
               cosFileTransfer, cosNotification, cosProperty, cosTime,
               cosTransactions, gs, ic, megaco, orber, otp_mibs,
               parsetools, snmp, typer, xmerl

               Internal changes
```

Thanks to
=========

```
 Aleksei Magusev, Alexey Lebedeff, Andreas Schultz, Andrew Bennett,
 Byaruhanga Franklin, Constantin Rack, Daniel Sommermann, Daniil
 Fedotov, Derek Brown, Diana Corbacho, Dmytro Lytovchenko, Dániel
 Szoboszlay, Erik Norgren, FabioBatSilva, Jesper Louis Andersen, Joe
 DeVivo, Johan Claesson, John, John Eckersberg, José Valim, Kenji
 Rikitake, Kenneth Lakin, Kostis Sagonas, Loïc Hoguin, Luca Favatella,
 Lukas Larsson, Magnus Henoch, Magnus Lång, Michael Klishin, Michael
 Santos, Michal Ptaszek, Mikael Pettersson, Milton Inostroza,
 Nathaniel Waisbrot, Nikolaos S. Papaspyrou, Péter Gömöri, Richard
 Carlsson, Rico Antonio Felix, Sasan Hezarkhani, Sean Charles, Serge
 Aleynikov, Simon Cornish, Stavros Aronis, Stefan Strigler, Steve
 Vinoski, Stuart Thackray, Ulf Wiger, Vlad Dumitrescu, Yiannis
 Tsiouris, Yuki Ito, alisdair sullivan, def_null, eksperimental,
 jrobhoward, xsipewe, xuming
```