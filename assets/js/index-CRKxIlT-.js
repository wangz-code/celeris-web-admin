import{R as e,ac as t,ar as s,ae as a,af as i}from"./celerisComponents-DDKyWJ2G.js";import{_ as l}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-TnwmTEma.js";import{b as r,u as o,c as n}from"./index-C0b3zp8b.js";import{d,c as u,N as p,a3 as m,u as c,R as f,Q as g,k as y,a6 as R}from"./vue-EUX_yFNd.js";const _=d({__name:"index",setup(d){const{changeRole:_}=r(),{t:b}=o(),C=n(),M=u((()=>C.getRoleList.includes(e.ADMIN))),S=u((()=>C.getRoleList.includes(e.USER)));return(r,o)=>{const n=t,d=s,u=a,h=i;return f(),p(n,{title:c(b)("page.permission.pageTitles.frontend")},{default:m((()=>[g(l),g(n,{class:"my-4",title:c(b)("page.permission.currentRole"),embedded:"",bordered:!1},{default:m((()=>[y(R(c(C).getRoleList),1)])),_:1},8,["title"]),g(d,{class:"my-4",type:"info",title:c(b)("page.permission.clickToSeeLeftMenuChange"),"show-icon":""},null,8,["title"]),g(n,{class:"mt-4",title:c(b)("page.permission.frontendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:m((()=>[g(h,null,{default:m((()=>[g(u,{type:c(M)?"primary":"default",onClick:o[0]||(o[0]=t=>c(_)(c(e).ADMIN))},{default:m((()=>[y(R(c(e).ADMIN),1)])),_:1},8,["type"]),g(u,{type:c(S)?"primary":"default",onClick:o[1]||(o[1]=t=>c(_)(c(e).USER))},{default:m((()=>[y(R(c(e).USER),1)])),_:1},8,["type"])])),_:1})])),_:1},8,["title"])])),_:1},8,["title"])}}});export{_ as default};
