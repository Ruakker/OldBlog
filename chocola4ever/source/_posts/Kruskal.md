title: Kruskal
author: Chocola4ever
tags:
  - 最小生成树
  - Kruskal
  - 模板
categories:
  - 算法
date: 2021-03-29 18:04:00
---
```cpp
#include<bits/stdc++.h>
#define ll long long
using namespace std;
struct point{
	ll x,y,v;
}e[1005];
int fa[1005];
int n,i,j,x,y,z,m,tot,k;
inline int father(int x){
	if (fa[x]!=x) fa[x]=father(fa[x]);
	return fa[x];
}
void unionn(int x,int y){
	int faa=father(x);
	int fab=father(y);
	if (faa!=fab) fa[faa]=fab;
}
bool cmp(point x,point y){return x.v<y.v;}
void kruskal(){
	for (i=1;i<=m;i++){
		if (father(e[i].x)!=father(e[i].y)){
			unionn(e[i].x,e[i].y);
			tot+=e[i].v;
			k++;
		}
		if (k==n-1) break;
	}
}
int main(){
	scanf("%d%d",&n,&m);
	for (int i=1;i<=m;i++){
		scanf("%d%d%d",&x,&y,&z);
		e[i].x=x,e[i].y=y,e[i].v=z;
	}
	for (i=1;i<=n;i++)
		fa[i]=i;
	sort(e+1,e+m+1,cmp);
	kruskal();
	cout<<tot<<endl;
	return 0;
}
```