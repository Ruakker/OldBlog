title: Tarjan
author: Chocola4ever
tags:
  - 模板
  - Tarjan
categories:
  - 算法
date: 2021-03-29 18:01:00
---
```cpp
#include<bits/stdc++.h>
using namespace std;
int cnt=0,cnte=0,newcnt=0,n,m,head[5*N],outdgr[N],dfn[N],low[N],inst[N],id[N],sz[N];
inline void tarjan(int u){
    dfn[u]=++cnt;
    low[u]=cnt;
    inst[u]=1;
    st.push(u);
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
            v=st.top();
            st.pop();
            inst[v]=0;
            id[v]=newcnt;
            sz[newcnt]++;
        } while (v!=u);
    }
}
int main(){
}
//求边双点双割边割点不走回父亲 
inline void tarjan(int u,int pre){
    dfn[u]=++cnt;
    low[u]=cnt;
    inst[u]=1;
    st.push(u);
    for (int i=head[u];i;i=e[i].nxt){
        int v=e[i].to;
        if (v!=pre){
            if (!dfn[v]){
                tarjan(v,u);
//              if (low[v]>=dfn[u])
//                  cutpoint[++cnt1]=u; 割点u 
                low[u]=min(low[u],low[v]);
            } else if (inst[v])
                low[u]=min(low[u],dfn[v]);
        }
    }
    int v;
    if (dfn[u]==low[u]){
        newcnt++;
        do{
            v=st.top();
            st.pop();
            inst[v]=0;
            id[v]=newcnt;
            sz[newcnt]++;
        } while (v!=u);
    }
}
```