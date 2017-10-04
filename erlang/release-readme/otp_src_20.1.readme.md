
Erlang/OTP 2X.Y Release README (Japanese, unofficial)
=====================================================

```
Patch Package:           OTP 20.1
Git Tag:                 OTP-20.1
Date:                    2017-09-26
Trouble Report Id:       OTP-10889, OTP-10927, OTP-13014, OTP-13170,
                         OTP-13704, OTP-14011, OTP-14078, OTP-14181,
                         OTP-14185, OTP-14236, OTP-14344, OTP-14378,
                         OTP-14386, OTP-14412, OTP-14462, OTP-14463,
                         OTP-14464, OTP-14471, OTP-14486, OTP-14488,
                         OTP-14490, OTP-14495, OTP-14499, OTP-14500,
                         OTP-14504, OTP-14506, OTP-14510, OTP-14511,
                         OTP-14512, OTP-14520, OTP-14521, OTP-14522,
                         OTP-14523, OTP-14526, OTP-14527, OTP-14530,
                         OTP-14534, OTP-14535, OTP-14536, OTP-14538,
                         OTP-14539, OTP-14542, OTP-14544, OTP-14546,
                         OTP-14549, OTP-14550, OTP-14552, OTP-14553,
                         OTP-14555, OTP-14556, OTP-14560, OTP-14568,
                         OTP-14571, OTP-14572, OTP-14574, OTP-14588,
                         OTP-14591, OTP-14596, OTP-14597, OTP-14598,
                         OTP-14600, OTP-14606, OTP-14607, OTP-14608,
                         OTP-14609, OTP-14612, OTP-14614, OTP-14618,
                         OTP-14621, OTP-9869
Seq num:                 ERIERL-48, ERL-251, ERL-375, ERL-413,
                         ERL-432, ERL-437, ERL-439, ERL-453, ERL-461,
                         ERL-465, ERL-472, ERL-478, ERL-480, ERL-481,
                         seq13319
System:                  OTP
Release:                 20
Application:             asn1-5.0.3, common_test-1.15.2,
                         compiler-7.1.2, crypto-4.1, debugger-4.2.3,
                         dialyzer-3.2.2, diameter-2.1, edoc-0.9.1,
                         erl_docgen-0.7.1, erts-9.1, et-1.6.1,
                         eunit-2.3.4, hipe-3.16.1, inets-6.4.2,
                         kernel-5.4, mnesia-4.15.1, observer-2.5,
                         os_mon-2.4.3, public_key-1.5, reltool-0.7.5,
                         runtime_tools-1.12.2, sasl-3.1, snmp-5.2.7,
                         ssh-4.6, ssl-8.2.1, stdlib-3.4.2,
                         syntax_tools-2.1.3, tools-2.11, wx-1.8.2
Predecessor:             OTP 20.0.5
 Check out the git tag OTP-20.1, and build a full OTP system including
 documentation. Apply one or more applications from this build as
 patches to your installation using the 'otp_patch_apply' tool. For
 information on install requirements, see descriptions for each
 application version below.
```

POTENTIAL INCOMPATIBILITIES
===========================


### OTP-14621    Application(s): public_key

- Related Id(s): ERL-480, ERL-481

```
               Related Id(s): ERL-480, ERL-481

               public_key now handles elliptic curve parameters in a
               consistent way so that decoded ECDSA keys can be
               correctly re-encoded.
```

asn1-5.0.3
==========

```
 The asn1-5.0.3 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14495    Application(s): asn1

- Related Id(s): ERL-437

```
               Related Id(s): ERL-437

               Compiling an ASN.1 module using the option {n2n,
               EnumTypeName} when EnumTypeName contains a hypen like
               for example Cause-Misc caused syntax errors when
               compiling the generated Erlang code. This is now
               corrected.
```

common_test-1.15.2
==================

```
 The common_test-1.15.2 application can be applied independently of
 other applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

compiler-7.1.2
==============

```
 The compiler-7.1.2 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14522    Application(s): compiler

- Related Id(s): ERIERL-48

```
               Related Id(s): ERIERL-48

               Fail labels on guard BIFs weren't taken into account
               during an optimization pass, and a bug in the
               validation pass sometimes prevented this from being
               noticed when a fault occurred.
```

### OTP-14526    Application(s): compiler


```
               When compiling from Core Erlang, an 'apply' with a
               nested apply in the function position would be treated
               as an invalid call. Corrected. (Thanks to Mikael
               Pettersson for reporting this bug.)
```

### OTP-14591    Application(s): compiler


```
               Fixed checking of binary matching in the beam_validator
               module to ensure that potential compiler bugs are found
               at compile-time instead as emulator crash at run-time.
```

### OTP-14600    Application(s): compiler, stdlib

- Related Id(s): ERL-478

```
               Related Id(s): ERL-478

               There could be false warnings for
               erlang:get_stacktrace/0 being used outside of a try
               block when using multiple catch clauses.
```

## Improvements and New Features


### OTP-14378    Application(s): compiler, stdlib


```
               The Erlang code linter no longer checks that the
               functions mentioned in nowarn_deprecated_function
               options are declared in the module.
```

crypto-4.1
==========

```
 The crypto-4.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14499    Application(s): crypto, erts

- Related Id(s): ERL-251, ERL-439

```
               Related Id(s): ERL-251, ERL-439

               On macOS, crypto would crash if observer had been
               started before crypto. On the beta for macOS 10.13
               (High Sierra), crypto would crash. Both of those bugs
               have been fixed.
```

## Improvements and New Features


### OTP-13704    Application(s): crypto, public_key

- Related Id(s): PR838

```
               Related Id(s): PR838

               Extend crypto:sign, crypto:verify, public_key:sign and
               public_key:verify with:

               * support for RSASSA-PS padding for signatures and for
               saltlength setting
               * X9.31 RSA padding.
               * sha, sha224, sha256, sha384, and sha512 for dss
               signatures as mentioned in NIST SP 800-57 Part 1.
               * ripemd160 to be used for rsa signatures.

               This is a manual merge of half of the pull request 838
               by potatosalad from Sept 2015.
```

### OTP-14504    Application(s): crypto


```
               A new tuple in crypto:supports/0 reports supported MAC
               algorithms.
```

debugger-4.2.3
==============

```
 The debugger-4.2.3 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14464    Application(s): debugger, edoc, et, eunit, observer,


```
               tools

               Tools are updated to show Unicode atoms correctly.
```

dialyzer-3.2.2
==============

```
 Note! The dialyzer-3.2.2 application can *not* be applied
       independently of other applications on an arbitrary OTP 20
       installation.
       On a full OTP 20 installation, also the following runtime
       dependency has to be satisfied:
       -- hipe-3.16.1 (first satisfied in OTP 20.1)
```

## Fixed Bugs and Malfunctions


### OTP-14572    Application(s): dialyzer, hipe

- Related Id(s): seq13319

```
               Related Id(s): seq13319

               Fix a bug regarding map types that caused Dialyzer to
               go into an infinite loop. A consequence of the fix is
               that compound map keys such as maps and tuples
               sometimes are handled with less precision than before.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

### OTP-14606    Application(s): dialyzer

- Related Id(s): OTP-14218

```
               Related Id(s): OTP-14218

               The check for unknown remote types is improved.
```

diameter-2.1
============

```
 The diameter-2.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14011    Application(s): diameter


```
               React to nodeup/nodedown when sharing peer connections.

               Service configuration share_peers and use_shared_peers
               did not respond to the coming and going of remote
               nodes.
```

### OTP-14486    Application(s): diameter


```
               Fix inappropriate message callbacks.

               An incoming CER or DPR was regarded as discarded,
               resulting in a corresponding message callback (if
               configured) in diameter_tcp/sctp.
```

### OTP-14512    Application(s): diameter


```
               Fix handling of 5009 errors
               (DIAMETER_AVP_OCCURS_TOO_MANY TIMES).

               RFC 6733 says that the first AVP that exceeds the bound
               should be reported, but the suggestions in the errors
               field of a diameter_packet record counted AVPs from the
               rear of the message, not the front. Additionally,
               diameter 2.0 in OTP 20.0 broke the counting by
               accepting one more AVP than the message grammar in
               question allowed.
```

### OTP-14535    Application(s): diameter

- Related Id(s): OTP-13006

```
               Related Id(s): OTP-13006

               Match case insensitively in diameter_tcp/sctp accept
               tuple.

               Matching of remote addresses when accepting connections
               in a listening transport was case-sensitive, causing
               the semantics to change as a consequence of (kernel)
               OTP-13006.
```

### OTP-14552    Application(s): diameter


```
               Fix backwards incompatibility of remote send when
               sharing transports.

               The sending of requests over a transport connection on
               a remote node running an older version of diameter was
               broken by diameter 2.0 in OTP 20.0.
```

### OTP-14607    Application(s): diameter


```
               Fix diameter_packet.avps decode of Grouped AVP errors
               in Failed-AVP.

               Decode didn't produce a list of diameter_avp records,
               so information about faulty component AVPs was lost.
```

### OTP-9869     Application(s): diameter


```
               Fix handling of Proxy-Info in answer messages setting
               the E-bit.

               RFC 6733 requires that Proxy-Info AVPs in an incoming
               request be echoed in an outgoing answer. This was not
               done in answers formulated by diameter; for example, as
               a result of a handle_request callback having returned
               an 'answer-message' or protocol_error tuple.
```

## Improvements and New Features


### OTP-10889    Application(s): diameter


```
               Let unordered delivery be configured in diameter_sctp.

               With option {unordered, boolean() | pos_integer()},
               with false the default, and N equivalent to OS =< N,
               where OS is the number of outbound streams negotiated
               on the association in question. If configured,
               unordered sending commences upon reception of a second
               message, outgoing messages being sent on stream 0
               before this.

               The default false is for backwards compatibility, but
               false or 1 should be set to follow RFC 6733's
               recommendation on the use of unordered sending to avoid
               head-of-line blocking. There is typically no meaningful
               order to preserve, since the order in which outgoing
               messages are received by a transport process isn't
               known to the sender.
```

### OTP-10927    Application(s): diameter


```
               Complete/simplify Standards Compliance in User's Guide.
```

### OTP-14511    Application(s): diameter

- Related Id(s): OTP-14343

```
               Related Id(s): OTP-14343

               Add service option decode_format.

               To allow incoming messages to be decoded into maps or
               lists instead of records. Messages can be presented in
               any of the formats for encode.

               Decode performance has also been improved.
```

### OTP-14521    Application(s): diameter


```
               Add service option traffic_counters.

               To let message-related counters be disabled, which can
               be a performance improvement in some usecases.
```

### OTP-14544    Application(s): diameter


```
               Allow loopback/any as local addresses in
               diameter_tcp/sctp.

               The atoms were implied by documentation, but not
               handled in code.
```

### OTP-14546    Application(s): diameter


```
               Add transport option strict_capx.

               To allow the RFC 6733 requirement that a transport
               connection be closed if a message is received before
               capabilities exchange to be relaxed.
```

### OTP-14555    Application(s): diameter


```
               Be consistent with service/transport configuration.

               For options for which it's meaningful, defaults values
               for transport options can now be configured on a
               service. This was previously the case only for an
               arbitrary subset of options.
```

### OTP-14588    Application(s): diameter


```
               Add service/transport option avp_dictionaries.

               To provide better support for AVPs that are not defined
               in the application dictionary: configuring additional
               dictionaries in an avp_dictionaries tuple allows their
               AVPs to be encoded/decoded in much the same fashion as
               application AVPs.

               The motivation is RFC 7683 Diameter Overload, Indicator
               Conveyance (DOIC), that defines AVPs intended to be
               piggybacked onto arbitrary messages. A DOIC dictionary
               has been included in the installation, in module
               diameter_gen_doic_rfc7683.
```

### OTP-14596    Application(s): diameter


```
               Decode application AVPs in answers setting the E-bit.

               AVPs defined in the application of the message being
               sent were previously not decoded, only those in the
               common application that defines the answer-message
               grammar.
```

edoc-0.9.1
==========

```
 The edoc-0.9.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14464    Application(s): debugger, edoc, et, eunit, observer,


```
               tools

               Tools are updated to show Unicode atoms correctly.
```

erl_docgen-0.7.1
================

```
 The erl_docgen-0.7.1 application can be applied independently of
 other applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

erts-9.1
========

```
 The erts-9.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14490    Application(s): erts

- Related Id(s): ERL-432

```
               Related Id(s): ERL-432

               Changed erlang:apply/2 to raise a badarg exception if
               the second argument is not a proper list. Previous
               behavior was a misleading undef exception.
```

### OTP-14499    Application(s): crypto, erts

- Related Id(s): ERL-251, ERL-439

```
               Related Id(s): ERL-251, ERL-439

               On macOS, crypto would crash if observer had been
               started before crypto. On the beta for macOS 10.13
               (High Sierra), crypto would crash. Both of those bugs
               have been fixed.
```

### OTP-14523    Application(s): erts


```
               Fixed bug in enif_whereis_pid/port that could cause
               heap corruption in rare cases.
```

### OTP-14538    Application(s): erts


```
               Fix so that trace messages generated when in a dirty
               nif are flushed correctly when the dirty nif is done
               executing.
```

### OTP-14549    Application(s): erts

- Related Id(s): PR1536

```
               Related Id(s): PR1536

               Fix escape code handling when using ANSI color codes in
               the shell.
```

### OTP-14574    Application(s): erts


```
               Upgraded the ERTS internal PCRE library from version
               8.40 to version 8.41. See
               http://pcre.org/original/changelog.txt for information
               about changes made to PCRE. This library implements
               major parts of the re regular expressions module.
```

### OTP-14597    Application(s): erts

- Related Id(s): ERL-465

```
               Related Id(s): ERL-465

               Fixed a bug causing statistics(runtime) to produce
               negative values and a bug in statistics(wall_clock)
               causing it to produce values one second too long.

               statistics(runtime) now also use getrusage() as source
               when available preventing the returned value from
               wrapping as frequent as before.
```

### OTP-14609    Application(s): erts


```
               Fixed small memory leak that could occur when sending
               to a terminating port.
```

### OTP-14612    Application(s): erts


```
               Fix bug causing VM crash when a module with -on_load
               directive is loaded while erlang:trace(on_load, ...) is
               enabled.
```

### OTP-14614    Application(s): erts

- Related Id(s): ERL-453

```
               Related Id(s): ERL-453

               A warning that the compiler may optimize away atoms
               have been added to the documentation of
               list_to_existing_atom/1 and binary_to_existing_atom/2.
```

## Improvements and New Features


### OTP-13170    Application(s): erts, kernel, tools


```
               Lock counting can now be fully toggled at runtime in
               the lock counting emulator (-emu_type lcnt). Everything
               is enabled by default to match the old behavior, but
               specific categories can be toggled at will with minimal
               runtime overhead when disabled. Refer to the
               documentation on lcnt:rt_mask/1 for details.
```

### OTP-14185    Application(s): erts


```
               The zlib module has been refactored and all its
               operations will now yield appropriately, allowing them
               to be used freely in concurrent applications.

               The following functions have been deprecated, but will
               not produce compiler warnings until OTP 21:
               zlib:adler32, zlib:crc32, zlib:inflateChunk,
               zlib:getBufSize, zlib:setBufSize.

               The behavior of throwing an error when a dictionary is
               required for decompression has also been deprecated.
               Refer to the documentation on inflateSetDictionary/2
               for details.
```

### OTP-14412    Application(s): erts, kernel, tools


```
               lcnt:collect and lcnt:clear will no longer block all
               other threads in the runtime system.
```

### OTP-14520    Application(s): erts, tools


```
               Add erlang:iolist_to_iovec/1, which converts an
               iolist() to an erlang:iovec(), which suitable for use
               with enif_inspect_iovec.
```

### OTP-14527    Application(s): erts


```
               When provided with bad arguments, the zlib module will
               now raise named exceptions instead of just badarg. For
               example, not_initialized when using zlib:inflate/2 with
               an uninitialized stream.
```

### OTP-14553    Application(s): erts


```
               erlang:halt/2 allows any Unicode string as slogan for
               the crash dump.
```

### OTP-14598    Application(s): erts


```
               Add new nif API functions for managing an I/O Queue.
               The added functions are:

               -- enif_ioq_create()

               -- enif_ioq_destroy()

               -- enif_ioq_enq_binary()

               -- enif_ioq_enqv()

               -- enif_ioq_deq()

               -- enif_ioq_peek()

               -- enif_inspect_iovec()

               -- enif_free_iovec()
```

et-1.6.1
========

```
 The et-1.6.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14464    Application(s): debugger, edoc, et, eunit, observer,


```
               tools

               Tools are updated to show Unicode atoms correctly.
```

eunit-2.3.4
===========

```
 The eunit-2.3.4 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14464    Application(s): debugger, edoc, et, eunit, observer,


```
               tools

               Tools are updated to show Unicode atoms correctly.
```

hipe-3.16.1
===========

```
 The hipe-3.16.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14572    Application(s): dialyzer, hipe

- Related Id(s): seq13319

```
               Related Id(s): seq13319

               Fix a bug regarding map types that caused Dialyzer to
               go into an infinite loop. A consequence of the fix is
               that compound map keys such as maps and tuples
               sometimes are handled with less precision than before.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

inets-6.4.2
===========

```
 The inets-6.4.2 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14510    Application(s): inets


```
               Make sure mod_log uses the correct status code
```

### OTP-14530    Application(s): inets


```
               Correct behaviour of mod_disk_log to proparly handle
               repair options
```

kernel-5.4
==========

```
 Note! The kernel-5.4 application can *not* be applied independently
       of other applications on an arbitrary OTP 20 installation.
       On a full OTP 20 installation, also the following runtime
       dependency has to be satisfied:
       -- erts-9.1 (first satisfied in OTP 20.1)
```

## Fixed Bugs and Malfunctions


### OTP-14571    Application(s): kernel

- Related Id(s): ERL-472

```
               Related Id(s): ERL-472

               Processes which did output after switching jobs
               (Ctrl+G) could be left forever stuck in the io request.
```

## Improvements and New Features


### OTP-13170    Application(s): erts, kernel, tools


```
               Lock counting can now be fully toggled at runtime in
               the lock counting emulator (-emu_type lcnt). Everything
               is enabled by default to match the old behavior, but
               specific categories can be toggled at will with minimal
               runtime overhead when disabled. Refer to the
               documentation on lcnt:rt_mask/1 for details.
```

### OTP-14412    Application(s): erts, kernel, tools


```
               lcnt:collect and lcnt:clear will no longer block all
               other threads in the runtime system.
```

### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

mnesia-4.15.1
=============

```
 The mnesia-4.15.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

observer-2.5
============

```
 The observer-2.5 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14386    Application(s): observer


```
               The following improvements are done to Crashdump
               Viewer:

               -- Reading of crash dumps with many binaries is
               optimized.

               -- A progress bar is shown when the detail view for a
               process is opened.

               -- The cdv script now sets ERL_CRASH_DUMP_SECONDS=0 to
               avoid generating a new crash dump from the node running
               the Crashdump Viewer.

               -- A warning dialog is shown if the node running the
               Crashdump Viewer could potentially overwrite the crash
               dump under inspection.

               -- Bugfix: In some situations, Crashdump Viewer could
               not find the end of the 'Last calls' section in a crash
               dump, and would erroneously mark the crash dump as
               truncated. This is now corrected.

               -- Bugfix: In some situations, process info for a
               specific process would be marked as truncated by
               Crashdump Viewer, even if the crash dump was truncated
               in the binary section - and not related to the process
               in question. This is now corrected.
```

### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

### OTP-14464    Application(s): debugger, edoc, et, eunit, observer,


```
               tools

               Tools are updated to show Unicode atoms correctly.
```

### OTP-14536    Application(s): observer


```
               Add system statistics and limits to frontpage in
               observer.
```

os_mon-2.4.3
============

```
 The os_mon-2.4.3 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14560    Application(s): os_mon

- Related Id(s): ERL-461

```
               Related Id(s): ERL-461

               On macOS 10.13 (High Sierra), disksup could not grab
               information for any disks that used the new APFS file
               system. That has been corrected.
```

public_key-1.5
==============

```
 The public_key-1.5 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14621    Application(s): public_key

- Related Id(s): ERL-480, ERL-481
- **POTENTIAL INCOMPATIBILITY**

```
               Related Id(s): ERL-480, ERL-481

               *** POTENTIAL INCOMPATIBILITY ***

               public_key now handles elliptic curve parameters in a
               consistent way so that decoded ECDSA keys can be
               correctly re-encoded.
```

## Improvements and New Features


### OTP-13704    Application(s): crypto, public_key

- Related Id(s): PR838

```
               Related Id(s): PR838

               Extend crypto:sign, crypto:verify, public_key:sign and
               public_key:verify with:

               * support for RSASSA-PS padding for signatures and for
               saltlength setting
               * X9.31 RSA padding.
               * sha, sha224, sha256, sha384, and sha512 for dss
               signatures as mentioned in NIST SP 800-57 Part 1.
               * ripemd160 to be used for rsa signatures.

               This is a manual merge of half of the pull request 838
               by potatosalad from Sept 2015.
```

### OTP-14181    Application(s): public_key


```
               Add API function pkix_test_data/1 for facilitating
               automated testing. This is useful for applications that
               preform X509-certifcate path validation of so called
               certificate chains, such as TLS.
```

### OTP-14236    Application(s): public_key, ssl


```
               Improved error propagation and reports
```

### OTP-14534    Application(s): public_key


```
               RSAPrivateKey version is set to 'two-prime' instead of
               using the underlying enumeration value directly.
```

### OTP-14608    Application(s): public_key


```
               Deprecated function crypto:rand_uniform/2 is replaced
               by rand:uniform/1.
```

reltool-0.7.5
=============

```
 The reltool-0.7.5 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14463    Application(s): reltool, sasl


```
               Files generated by release_handler and reltool, which
               might contain Unicode characters, are now encoded as
               UTF-8 and written with format "~tp" or "~ts". If the
               file is to be read by file:consult/1, an encoding
               comment is added.
```

runtime_tools-1.12.2
====================

```
 The runtime_tools-1.12.2 application can be applied independently of
 other applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

sasl-3.1
========

```
 The sasl-3.1 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

### OTP-14463    Application(s): reltool, sasl


```
               Files generated by release_handler and reltool, which
               might contain Unicode characters, are now encoded as
               UTF-8 and written with format "~tp" or "~ts". If the
               file is to be read by file:consult/1, an encoding
               comment is added.
```

### OTP-14618    Application(s): sasl


```
               The SASL error logger event handler,
               sasl_report_file_h, will now by default open its log
               file with encoding UTF-8. This can be overridden when
               configuring SASL, see configuration parameter
               sasl_error_logger in the SASL reference manual.
```

snmp-5.2.7
==========

```
 The snmp-5.2.7 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-13014    Application(s): snmp

- Related Id(s): ERL-375

```
               Related Id(s): ERL-375

               A bug in the SNMP MIB compiler has been fixed. An
               AUGMENTS referring to a table defined later in the MIB
               did not work.
```

ssh-4.6
=======

```
 The ssh-4.6 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14506    Application(s): ssh

- Related Id(s): PR1503

```
               Related Id(s): PR1503

               Enables the ssh_io module to also accept binary values
               when reading standard_io instead of getting stuck in
               the receive clause.
```

### OTP-14550    Application(s): ssh

- Related Id(s): PR1533

```
               Related Id(s): PR1533

               Previously, the file owner access permission in
               response to ssh_sftp:read_file_info/2 function was
               always read_write. With this fix, the actual value of
               file owner access permission is added to the returning
               record. That value is calculated from file mode value.
```

## Improvements and New Features


### OTP-14568    Application(s): ssh


```
               A new option modify_algorithms is implemented. It
               enables specifying changes on the default algorithms
               list. See the reference manual and the SSH User's Guide
               chapter "Configuring algorithms in SSH".
```

ssl-8.2.1
=========

```
 Note! The ssl-8.2.1 application can *not* be applied independently of
       other applications on an arbitrary OTP 20 installation.
       On a full OTP 20 installation, also the following runtime
       dependency has to be satisfied:
       -- public_key-1.5 (first satisfied in OTP 20.1)
```

## Fixed Bugs and Malfunctions


### OTP-14556    Application(s): ssl


```
               Max session table works correctly again
```

## Improvements and New Features


### OTP-14078    Application(s): ssl


```
               Customize alert handling for DTLS over UDP to mitigate
               DoS attacks
```

### OTP-14236    Application(s): public_key, ssl


```
               Improved error propagation and reports
```

stdlib-3.4.2
============

```
 The stdlib-3.4.2 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14488    Application(s): stdlib

- Related Id(s): PR-1489

```
               Related Id(s): PR-1489

               Fix a bug in the Erlang shell where recursively defined
               records with typed fields could cause a loop.
```

### OTP-14542    Application(s): stdlib


```
               Make edlin handle grapheme clusters instead of
               codepoints to improve the handling multi-codepoints
               characters.
```

### OTP-14600    Application(s): compiler, stdlib

- Related Id(s): ERL-478

```
               Related Id(s): ERL-478

               There could be false warnings for
               erlang:get_stacktrace/0 being used outside of a try
               block when using multiple catch clauses.
```

## Improvements and New Features


### OTP-14378    Application(s): compiler, stdlib


```
               The Erlang code linter no longer checks that the
               functions mentioned in nowarn_deprecated_function
               options are declared in the module.
```

### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

syntax_tools-2.1.3
==================

```
 The syntax_tools-2.1.3 application can be applied independently of
 other applications on a full OTP 20 installation.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

### OTP-14471    Application(s): syntax_tools

- Related Id(s): ERL-413

```
               Related Id(s): ERL-413

               A process trapping exits and calling erl_tidy no longer
               hangs if an error occurs.
```

tools-2.11
==========

```
 Note! The tools-2.11 application can *not* be applied independently
       of other applications on an arbitrary OTP 20 installation.
       On a full OTP 20 installation, also the following runtime
       dependencies have to be satisfied:
       -- erts-9.1 (first satisfied in OTP 20.1)
       -- kernel-5.4 (first satisfied in OTP 20.1)
```

## Fixed Bugs and Malfunctions


### OTP-14344    Application(s): tools


```
               The predefined Xref analysis locals_not_used no longer
               reports unused functions with the -on_load() attribute.

               The new predefined Xref variable OL holds all functions
               with the -on_load() attribute.
```

### OTP-14500    Application(s): tools


```
               In fprof when sampling multiple processes and analyzing
               with totals set to true, the output now sums together
               all caller and callee entries which concerns the same
               function. Previous behaviour was to report each
               contributing entry separately.
```

## Improvements and New Features


### OTP-13170    Application(s): erts, kernel, tools


```
               Lock counting can now be fully toggled at runtime in
               the lock counting emulator (-emu_type lcnt). Everything
               is enabled by default to match the old behavior, but
               specific categories can be toggled at will with minimal
               runtime overhead when disabled. Refer to the
               documentation on lcnt:rt_mask/1 for details.
```

### OTP-14412    Application(s): erts, kernel, tools


```
               lcnt:collect and lcnt:clear will no longer block all
               other threads in the runtime system.
```

### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```

### OTP-14464    Application(s): debugger, edoc, et, eunit, observer,


```
               tools

               Tools are updated to show Unicode atoms correctly.
```

### OTP-14520    Application(s): erts, tools


```
               Add erlang:iolist_to_iovec/1, which converts an
               iolist() to an erlang:iovec(), which suitable for use
               with enif_inspect_iovec.
```

wx-1.8.2
========

```
 The wx-1.8.2 application can be applied independently of other
 applications on a full OTP 20 installation.
```

## Fixed Bugs and Malfunctions


### OTP-14539    Application(s): wx


```
               Do not deprecate
               wxGraphicsContext:createLinearGradientBrush/7 and
               wxGraphicsContext:createRadialGradientBrush/8 which are
               still available in wxWidgets-3.0.
```

## Improvements and New Features


### OTP-14462    Application(s): common_test, dialyzer, erl_docgen,


```
               hipe, kernel, mnesia, observer, runtime_tools, sasl,
               stdlib, syntax_tools, tools, wx

               General Unicode improvements.
```