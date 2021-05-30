title: 教程：如何将以Butterfly为主题的tab缩进修改为4个空格
author: Chocola4ever
date: 2021-03-31 09:22:39
tags:
---
> 以Butterfly为主题的Hexo部署的博客中，代码块tab默认缩进是8格 ~~对于C++中用tab缩进的同学来说非常不友好~~

为了改成像编辑器中的4格，我查询了许多办法。但是Butterfly官方文档并没有介绍如何修改代码块缩进，只有自定义颜色的教程。经过摸索，我找到了修改tab缩进的方法：

## 创建tab_4.css文件

打开你的Hexo根目录（注意是根目录而不是Butterfly主题目录！），找到`source`文件夹，在里面创建一个`self`文件夹，打开并创建`tab_4.css`。

> 呃，如果你不会创建的话，具体的方法就是新建一个文本文档，将`新建文本文档.txt`（包括后缀`.txt`!）重命名为`tab_4.css`即可。

## 打开并编辑内容

右键点击，选择打开方式，用记事本打开

> 如果你有其他编辑器如VScode,notepad++,sublime等等也可以用它们打开。

在里面添加内容：

``` css
:root {
	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;
}
```

然后保存，关闭。

## 打开_config.yml添加inject

> 注意：这里的_config.yml指的是Butterfly主题文件夹下的_config.yml！

搜索`inject:`

在`head:`下添加一行

```yml
    - <link rel="stylesheet" href="/self/tab_4.css">
```

缩进要保持一致！

也就是说，添加完后，您的格式应该是这样的：

```yml
inject:
  head:
    - <link rel="stylesheet" href="/self/tab_4.css">
```

## 保存，执行`hexo s`，查看结果

如果正常配置，您的代码块tab缩进宽度应是4个空格。

修改后的效果：

```cpp
#include<bits/stdc++.h>
using namespace std;
int main(){
	puts("Hello world!");
	return 0;
}
```

如果有疑问，可以留言！