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

`**test**`|`__test__`

### 斜体

_test_

`*test*`|`_test_`

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

| 左对齐表格头  | 居中表格头 | 右对齐表格头 |
| :- | :-: | -: |
| 左对齐 | 居中 | 右对齐 |

```markdown
| 左对齐表格头  | 居中表格头 | 右对齐表格头 |
| :- | :-: | -: |
| 左对齐 | 居中 | 右对齐 |
```

### 分割线

---

`---`|`***`

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