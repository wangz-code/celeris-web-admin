import{R as e,ac as t,ar as s,ae as a,af as i}from"./celerisComponents-DDKyWJ2G.js";import{_ as n}from"./CurrentPermissionMode.vuevuetypescriptsetuptruelang-TnwmTEma.js";import{c as o,b as r,u as l}from"./index-C0b3zp8b.js";import{d,c as u,N as c,a3 as p,u as m,R as f,Q as y,k,a6 as b}from"./vue-EUX_yFNd.js";const g=d({__name:"index",setup(d){const g=o(),{isBackendPermissionMode:h,refreshMenu:v}=r(),{t:_}=l();function M(e){return t=this,s=null,a=function*(){const t=`${e}FakeToken`;g.setToken(t),yield g.getUserInfoAction(),yield v()},new Promise(((e,i)=>{var n=e=>{try{r(a.next(e))}catch(t){i(t)}},o=e=>{try{r(a.throw(e))}catch(t){i(t)}},r=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,o);r((a=a.apply(t,s)).next())}));var t,s,a}const R=u((()=>g.getRoleList.includes(e.ADMIN))),x=u((()=>g.getRoleList.includes(e.USER)));return(o,r)=>{const l=s,d=a,u=i,g=t;return f(),c(g,{title:m(_)("page.permission.pageTitles.backend")},{default:p((()=>[y(n),y(l,{class:"my-4",type:"info",title:m(_)("page.permission.clickToSeeLeftMenuChange"),"show-icon":""},null,8,["title"]),y(g,{class:"mt-4",title:m(_)("page.permission.backendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:p((()=>[y(u,null,{default:p((()=>[y(d,{type:m(R)?"primary":"default",disabled:!m(h),onClick:r[0]||(r[0]=t=>M(m(e).ADMIN))},{default:p((()=>[k(b(m(e).ADMIN),1)])),_:1},8,["type","disabled"]),y(d,{type:m(x)?"primary":"default",disabled:!m(h),onClick:r[1]||(r[1]=t=>M(m(e).USER))},{default:p((()=>[k(b(m(e).USER),1)])),_:1},8,["type","disabled"])])),_:1})])),_:1},8,["title"])])),_:1},8,["title"])}}});export{g as default};