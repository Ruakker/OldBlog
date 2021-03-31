title: Dijkstra
author: Chocola4ever
tags:
  - 模板
  - Dijkstra
  - 最短路径
categories:
  - 算法
date: 2021-03-29 18:05:00
---
```cpp
#include<bits/stdc++.h>
#define inf 0x3f3f3f3f
using namespace std;
int dis[N],a[N][N];
bool b[N];
inline void dijkstra(int p0){
	for (int i=1;i<=n;i++)
		dis[i]=a[p0][i];
	b[p0]=1;
	dis[p0]=0;
	for (int i=1;i<=n-1;i++){
		minv=inf;
		int v=0;
		for (int j=1;j<=n;j++)
			if (!b[j] && dis[j]<minv){
				minv=dis[j];
				v=j;
			}
		if (v==0)
			break;
		b[k]=true;
		for (int j=1;j<=n;j++)
			dis[j]=min(dis[j],a[v][j]+dis[v]);
	}
}
int main(){
//	...
	for (int i=1;i<=n;i++)
		for (int i=1;i<=n;i++)
			a[i][j]=inf;
//	read
//	...
}
```