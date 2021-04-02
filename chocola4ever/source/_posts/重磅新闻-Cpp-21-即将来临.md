title: 「重磅新闻」C++21 即将来临
author: Chocola4ever
tags:
  - 愚人节
categories:
  - 转载
date: 2021-04-01 00:00:00
---
> **转载说明**
>
> 原文作者：Prof Alid Loyas
>
> 本文遵循：AP2-LF 开源协议 0.01 版

在近日举行的 WG22 会议上，草案 ISO/IEC C++2b 获得批准，这次提案是对 C++20 标准的一项修订。由于该提案在 2021 年发布，所以又被称作 C++21。

C++21 主要对以下部分做了修订：

### 双问号 `??` 运算符

双问号运算符又被称为合并运算符，如果此运算符的左操作数不为 false，则此运算符将返回左操作数；否则返回右操作数。

双问号运算符实际上是对 `?:` 运算符的一种简化形式。比如`a = (a % mod) ? (a % mod) : mod` 在 C++21 标准中可简写为 `a = a % mod ?? mod`。

此外，双问号运算符还支持连用。比如以下代码：

```cpp
int a = 0, b = 0, c = 3, d = 9;
int e = a ?? b ?? c ?? d;
```

与以下代码意义相同：

```cpp
int a = 0, b = 0, c = 3, d = 9;
int e;
if (a) e = a;
else if (b) e = b;
else if (c) e = c;
else e = d;
```

### `pipe` 关键字

C++21 将 shell 语言中的 pipe（管道）引入到了 C++，它的意思是「将左操作数作为参数传入右边的函数」。比如 `MyFunc(123);` 在 C++21 标准中可写作 `123 pipe MyFunc;`。

需要注意的是，`pipe` 右边的函数必须有且只有一个参数，才可使用 `pipe` 关键字。

单独使用 `pipe` 可能体现不出它的便捷性，但是，如果你有类似这样的代码：

`Debug(Output(Encrypt(Input()));`

就可以使用 `pipe` 关键字写作：

`Input() pipe Encrypt pipe Output pipe Debug;`

注意「左操作数」是一个值而不是一个函数，所以示例中的 `Input()` 还是需要加括号。

### 对 `auto` 变量定义的加强

`auto` 关键字在 C++11 标准里被改变了含义。我们可以使用 `auto` 关键字来代替类型名定义变量，例如，`auto a = 123;` 会被编译为类似下面的代码

```cpp
int a = 123;
```

但是在之前的 C++ 标准中，不可以使用 `auto` 连续定义多个变量，如 `auto a = 123, b = 45.6, c = 'A';` 这样的代码在之前的标准中会报错。C++21 改进了这一点，编译器会分别确定每个变量的类型。现在上面的代码会被编译为：

```cpp
int a = 123;
double b = 45.6;
char c = 'A';
```

### 使用 `auto` 作为函数的参数类型

C++14 引入了将 `auto` 作为函数返回类型的语法，在 C++21 中，函数的参数类型也可以定义为 `auto` 了。编译器会将每个类型为 `auto` 的参数生成一个匿名模板（unnamed template）。

```cpp
void Foo(auto a, auto b) {
  cout << (a + b) << '\n';
}
```

上面例子中的代码会被编译成类似这样：

```cpp
template <class __T, class __E>
void Foo(__T a, __E b) {
  cout << (a + b) << '\n';
}
```

注意，上面的示例只供理解使用。事实上匿名模板是由编译器自动生成的且没有 `__T`、`__E` 之类的名字。也就是说你不能使用如 `Foo<int, float>(123, 123)` 指定模板类型。

### 弃用 `inline` 关键字

由于现代编译器对代码的优化，C++21 标准将弃用 `inline` 关键字，为了保持对先前 C++ 标准的兼容，该关键字可以使用但**不再具备任何实际含义**。

### #include 预处理指令的加强

当预处理器发现 `#include` 指令时，会查看后面的文件名并把文件的内容包含到当前文件中，即替换源文件中的 `#include` 指令。

在先前的标准中，`#include` 只能本地目录中查找文件。C++21 扩展了该指令，使得其可以使用 HTTP 文件传输协议，例如：

```cpp
#include "http://mivik.gitee.io/mivik.h"
```

使用 HTTP 文件传输协议的 `#include` 会以 「HTTP $\to$ 本地文件 $\to$ C++ 标准头」的顺序递归寻找依赖。比如以下代码：

```cpp
// C:\main.cpp
#include "http://111.222.33.44/file.hpp"
int main(){}
```
```cpp
// 111.222.33.44/file.hpp
#include "another.hpp"
```

在编译 `main.cpp` 时会按照

```cpp
111.222.33.44/another.hpp
C:\another.hpp
{CPLUS_INCLUDE_PATH}/**/another.hpp
```

的顺序进行依赖查找。

> 注意：在当前最新的 g++ 10.3.1 中，该特性被标记为实验性功能（Experimental），需要手动在编译参数中增加 `--allowed-include-protocol=file,http` 来开启此功能。