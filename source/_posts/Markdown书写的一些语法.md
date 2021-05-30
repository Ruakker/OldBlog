title: 关于Markdown书写的一些语法
author: Chocola4ever
tags:
  - 学习
categories:
  - 教程
date: 2021-04-11 10:30:00
---
> 本文随缘持续更新

先引用一下关于[Markdown的书写格式要求](https://oi-wiki.org/intro/format/)

## 基本语法

### 粗体

**test**

`**test**` | `__test__`

### 斜体

_test_

`*test*` | `_test_`

### 下划线

~~test~~

`~~text~~`

### ~~下划线~~

暂时只能引用HTML

`<u>text</u>`

### 标题

`# H1`

`## H2`

`### H3`

`#### H4`

`##### H5`

`###### H6`

### 无序列表

- test1
- test2
    - test2.1
    - test2.2
- test3

```markdown
- test1
- test2
    - test2.1
    - test2.2
- test3
```

> '-'也可以换成'+'

### 有序列表

1. test1
2. test2
    1. test2.1
    2. test2.2
3. test3

```markdown
1. test1
2. test2
    1. test2.1
    2. test2.2
3. test3
```

### 引用块

> test1
> > test1.1
> > 
> > test1.2

```markdown
> test1
> > test1.1
> > 
> > test1.2
```

> 可以套好多层！

### 任务列表（部分编辑器可能不支持 ~~比如我的Blog~~）

- [ ] test1
- [x] test2
- [ ] test3

```markdown
- [ ] test1
- [x] test2
- [ ] test3
```

### 表格

可以设置左对齐、右对齐或者居中：

|左对齐表格头|居中表格头|右对齐表格头|
|:-|:-:|-:|
|左对齐|居中|右对齐|

```markdown
|左对齐表格头|居中表格头|右对齐表格头|
|:-|:-:|-:|
|左对齐|居中|右对齐|
```

### 分割线

---

`---` | `***`

### 链接

1. `[text](https://)`
2. `<https://>`

### 图片

`![](https://)`

### 代码块

引用不了，暂略

## $\LaTeX$

咕

先引用几个页面

- [KaTeX文档](https://katex.org/docs/supported.html)
- [$\LaTeX$手写符号识别](http://detexify.kirelabs.org/classify.html)

$\LaTeX$公式有两种引用：

1.  $\sum_{i=114514}^{1919810}i$

2.  $$
    \sum_{i=114514}^{1919810}i
    $$


```markdown
$\sum_{i=114514}^{1919810}i$

$$		
\sum_{i=114514}^{1919810}i
$$
```

区别很明显。第一种是文本内联使用，适合较少的书写如$E=mc^2$，第二种就适合大块的公式。

另外，除了用来书写数学公式，还可以改变字体。如$\color{red}设\color{blue}置\color{purple}字\color{green}体\color{orange}颜\color{brown}色$&ensp;or&ensp;$\textit{Set the font}$

你甚至可以用它来写一些奇怪的东西 ~~比如洛谷的观猴小贴士~~

> 貌似我的Blog放不出来$\dots$，具体请前往[这里](https://www.luogu.com.cn/paste/1a45jc4d)
>
> > 我也不知道这是哪位$\LaTeX$神仙写出来的$\dots$



## 一些小技巧

### 行首缩进

由于Markdown自动忽略空格，写文章排版的时候不能分段。这时候可以使用`&emsp;`代表全角空格，`&ensp;`代表半角空格，`&nbsp;`代表不换行空格。

使用示例：

>   不使用空格缩进：
>
>   >   一只敏捷的棕色狐狸跳过一只懒惰的狗
>   >   The quick brown fox jumps a lazy dog.
>
>   使用`&emsp;`$\times 2$
>
>   >   &emsp;&emsp;一只敏捷的棕色狐狸跳过一只懒惰的狗
>   >   `&emsp; &emsp;一只敏捷的棕色狐狸跳过一只懒惰的狗`
>
>   使用`&ensp;`$\times 2$
>
>   >   &ensp;&ensp;The quick brown fox jumps a lazy dog.
>   >   `&ensp;&ensp;The quick brown fox jumps a lazy dog.`
>
>   `&nbsp;`一般使用在不能换行的空格中如
>
>   >   100&nbsp;km
>   >   `100&nbsp;km`