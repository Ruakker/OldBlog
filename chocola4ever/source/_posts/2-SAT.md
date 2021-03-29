title: 2-SAT
author: Chocola4ever
tags:
  - 模板
  - 2-SAT
categories:
  - 算法
date: 2021-03-29 18:06:00
---
```cpp
#include<bits/stdc++.h>
#define N 2000005
using namespace std;
struct{
    int nxt,to;
}e[N];
stack<int> st;
stack<int> st1;
int head[N],dfn[N],low[N],id[N],u1[N],v1[N],sz[N],ans[N];
bool inst[N],b[N];
int newcnt,cnt,totedge,n,m,totm;
inline void addedge(int x,int y){
    e[++totedge].to=y;
    e[totedge].nxt=head[x];
    head[x]=totedge;
}
inline void tarjan(int u){
    dfn[u]=++cnt;
    low[u]=cnt;
    inst[u]=1;
    st1.push(u);
    for (int i=head[u];i;i=e[i].nxt){
        int v=e[i].to;
        if (!dfn[v]){
            tarjan(v);
            low[u]=min(low[u],low[v]);
        } else if (inst[v])
            low[u]=min(low[u],dfn[v]);
    }
    int v;
    if (dfn[u]==low[u]){
        newcnt++;
        do{
            v=st1.top();
            st1.pop();
            inst[v]=0;
            id[v]=newcnt;
            sz[newcnt]++;
        } while (v!=u);
    }
}
int main(){
    scanf("%d%d",&n,&m);
    for (int i=1;i<=m;i++){
        int a,b,c,d;
        scanf("%d%d%d%d",&a,&b,&c,&d);
        if (b && d){
            addedge(a+n,c);
            addedge(c+n,a);
        }
        if (b && !d){
            addedge(a+n,c+n);
            addedge(c,a);
        }
        if (!b && d){
            addedge(a,c);
            addedge(c+n,a+n);
        }
        if (!b && !d){
            addedge(a,c+n);
            addedge(c,a+n);
        }
    }
    for (int i=1;i<=n*2;i++)
        if (!dfn[i])
            tarjan(i);
    for (int i=1;i<=n;i++)
        if (id[i]==id[i+n]){
            puts("IMPOSSIBLE");
            return 0;
        }
    puts("POSSIBLE");
    for (int i=1;i<=n;++i)
        if(id[i]<id[i+n])
            printf("1 "); 
        else
            printf("0 ");
    return 0;
}
```