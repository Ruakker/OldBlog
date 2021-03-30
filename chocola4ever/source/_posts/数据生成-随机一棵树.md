title: 数据生成-随机一棵树
author: Chocola4ever
tags:
  - 数据生成
categories:
  - 数据生成
date: 2021-03-29 17:57:00
---
转载

```cpp
#include<bits/stdc++.h>
#include<time.h>
using namespace std;
int a[500001];
pair<int,int> pr[500001];
int cnt = 0;

int rrand(int l, int r) {//生成一个在 [l, r] 内的随机数
    int t = (rand() % (1 << 10)) * (rand() % (1 << 10));
    return t % (r - l + 1) + l; 
}

int main()
{
    freopen("data.in","w",stdout); 
    srand(time(0) * 1000 + time(0));
    int n;
    scanf("%d", &n);//如果需要直接随机的话把这里改成 n = rand() 或 n = rrand(区间左端点，区间右端点) 就好
    printf("%d\n", n);
    int d = rrand(1, n);
    for(int i = 1; i <= n; ++i) {
        a[i] = i;
    }
    random_shuffle(a + 1, a + n + 1);//STL库函数，可以随机打乱数组中的元素
    for(int i = d - 1; i >= 1; --i) {
        int to = rrand(i + 1,d);
        cnt++;
        if(rand() & 1) pr[cnt] = make_pair(a[i],a[to]);
        else pr[cnt] = make_pair(a[to],a[i]);
    }
    for(int i = d + 1; i <= n; ++i) {
        int to = rrand(d,i - 1);
        cnt++;
        if(rand() & 1) pr[cnt] = make_pair(a[i],a[to]);
        else pr[cnt] = make_pair(a[to],a[i]);
    }
    random_shuffle(pr + 1,pr + n);
    for(int i = 1; i <= n - 1; ++i) {
        printf("%d %d\n", pr[i].first, pr[i].second);
    }
    return 0;
}
```
