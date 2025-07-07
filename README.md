# kuzu-pkg-error

This is a repo to help diagnose an import issue with [kuzu](https://github.com/kuzudb/kuzu) when packaged as a Windows NodeJS application using [PKG](https://github.com/yao-pkg/pkg)

When importing


# Getting Started 
To install:
```
npm install
```

# Case 1: Running normally (success)
On your machine, perform the following to run normally. We should see the a successful import logs returned:

```
npm run start
```

```
Kuzu importing...
Kuzu imported successfully!
```

# Case 2: Packaging and Running on Linux (success)
On a Linux machine, perform the following:

1. To package into an executable, install PKG as a global NPM dependency

``` sh
npm install -g @yao-pkg/pkg 
```

2. Run the following to package on the machine. It will output the executable into the `dist` folder
``` sh
pkg package.json --targets node20-linux-x64 --no-native-build
```

> NOTE: you may see warning messages such as the example below while packaging, but this is expected
`Failed to make bytecode for....node_modules/axios....`


3. On your Linux machine, perform the following to run normally. We should see the a successful import logs returned:
```
./dist/kuzu-pkg-error
```

```
Kuzu importing...
Kuzu imported successfully!
```

# Case 3: Packaging and Running on Windows (fail)
On a Windows machine, perform the following:

1. To package into an executable, install PKG as a global NPM dependency

```
npm install -g @yao-pkg/pkg 
```

2. Run the following to package on the machine. It will output the executable into the `dist` folder
```
pkg package.json --targets node20-win-x64 --no-native-build
```

> NOTE: you may see warning messages such as the example below while packaging, but this is expected

`Failed to make bytecode for....node_modules/axios....`

3. On your Windows machine, perform the following to run normally. We should see the a failure to import and seg fault logs returned:

```
.\dist\kuzu-pkg-error.exe
```

```
Kuzu importing...
PID 6008 received SIGSEGV for address: 0x4152b38
SymInit: Symbol-SearchPath: '.;C:\kuzu-pkg-error\dist;C:\kuzu-pkg-error\dist;C:\WINDOWS;C:\WINDOWS\system32;SRV*C:\websymbols*http://msdl.microsoft.com/download/symbols;', symOptions: 530, UserName: 'REDACTED'
OS-Version: 10.0.26100 () 0x100-0x1
C:\kuzu-pkg-error\node_modules\segfault-handler\src\StackWalker.cpp (941): StackWalker::ShowCallstack
C:\kuzu-pkg-error\node_modules\segfault-handler\src\segfault-handler.cpp (242): segfault_handler
00007FFFD0649546 (ntdll): (filename not available): RtlWow64GetCurrentCpuArea
00007FFFD0649AA6 (ntdll): (filename not available): RtlWow64GetCurrentCpuArea
00007FFFD0725FEE (ntdll): (filename not available): KiUserExceptionDispatcher
0000000004152B38 ((module-name not available)): (filename not available): (function-name not available)
00007FF7251630B4 (node): (filename not available): inflateValidate
00007FF725133017 (node): (filename not available): inflateValidate
00007FF723F32294 (node): (filename not available): napi_open_handle_scope
00007FFF207F8068 (kuzujs): (filename not available): kuzu::common::Deserializer::validateDebuggingInfo
00007FFF207F3490 (kuzujs): (filename not available): (function-name not available)
00007FFF207F24C7 (kuzujs): (filename not available): (function-name not available)
00007FFF207F3D1B (kuzujs): (filename not available): napi_register_module_v1
00007FF75F3241E3 (kuzu-pkg-error): (filename not available): node_module_register
00007FF75F376B35 (kuzu-pkg-error): (filename not available): node::SetCppgcReference
00007FF75F320B27 (kuzu-pkg-error): (filename not available): node::Buffer::New
00007FF75FD0AEE1 (kuzu-pkg-error): (filename not available): v8::SharedValueConveyor::SharedValueConveyor
00007FF75FD0AAD1 (kuzu-pkg-error): (filename not available): v8::SharedValueConveyor::SharedValueConveyor
00007FF75FD0AD98 (kuzu-pkg-error): (filename not available): v8::SharedValueConveyor::SharedValueConveyor
00007FF75FD0AC10 (kuzu-pkg-error): (filename not available): v8::SharedValueConveyor::SharedValueConveyor
00007FF75FDFF92E (kuzu-pkg-error): (filename not available): v8::PropertyDescriptor::writable
```



