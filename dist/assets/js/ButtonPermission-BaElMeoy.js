import{R as e,ac as t,ar as s,ae as a,af as o,as as l}from"./celerisComponents-DDKyWJ2G.js";import{_ as r}from"./CurrentPermissionMode.vue_vue_type_script_setup_true_lang-BTsGIAP0.js";import{_ as i}from"./Authority.vue_vue_type_script_setup_true_lang-DwlbVvQb.js";import{b as n,u,c as p}from"./index-CBxHPOqU.js";import{d as m,c as d,N as c,a3 as y,u as _,aa as f,R as g,Q as R,k as x,a6 as S,a9 as A,y as M}from"./vue-EUX_yFNd.js";const N=m({__name:"ButtonPermission",setup(m){const{changeRole:N,hasPermission:D}=n(),{t:E}=u(),I=p(),T=d((()=>I.getRoleList.includes(e.ADMIN))),U=d((()=>I.getRoleList.includes(e.USER)));return(n,u)=>{const p=t,m=s,d=a,v=o,B=l,h=f("auth");return g(),c(p,{title:_(E)("page.permission.pageTitles.button")},{default:y((()=>[R(r),R(p,{class:"my-4",title:_(E)("page.permission.currentRole"),embedded:"",bordered:!1},{default:y((()=>[x(S(_(I).getRoleList),1)])),_:1},8,["title"]),R(m,{class:"my-4",type:"info",title:_(E)("page.permission.clickToSeeButtonChange"),"show-icon":""},null,8,["title"]),R(p,{class:"mt-4",title:_(E)("page.permission.frontendPermissionSwitchTitle"),embedded:"",bordered:!1},{default:y((()=>[R(v,null,{default:y((()=>[R(d,{type:_(T)?"primary":"default",onClick:u[0]||(u[0]=t=>_(N)(_(e).ADMIN))},{default:y((()=>[x(S(_(e).ADMIN),1)])),_:1},8,["type"]),R(d,{type:_(U)?"primary":"default",onClick:u[1]||(u[1]=t=>_(N)(_(e).USER))},{default:y((()=>[x(S(_(e).USER),1)])),_:1},8,["type"])])),_:1})])),_:1},8,["title"]),R(B,null,{default:y((()=>[x(S(_(E)("page.permission.componentWayTitle")),1)])),_:1}),R(i,{value:_(e).ADMIN},{default:y((()=>[R(d,{type:"primary",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:_(e).ADMIN})),1)])),_:1})])),_:1},8,["value"]),R(i,{value:_(e).USER},{default:y((()=>[R(d,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:_(e).USER})),1)])),_:1})])),_:1},8,["value"]),R(i,{value:[_(e).USER,_(e).ADMIN]},{default:y((()=>[R(d,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:[_(e).USER,_(e).ADMIN]})),1)])),_:1})])),_:1},8,["value"]),R(B,null,{default:y((()=>[x(S(_(E)("page.permission.functionWayTitle")),1)])),_:1}),_(D)(_(e).ADMIN)?(g(),c(d,{key:0,type:"primary",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:_(e).ADMIN})),1)])),_:1})):A("",!0),_(D)(_(e).USER)?(g(),c(d,{key:1,strong:"",secondary:"",type:"info",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:_(e).USER})),1)])),_:1})):A("",!0),_(D)([_(e).USER,_(e).ADMIN])?(g(),c(d,{key:2,strong:"",secondary:"",type:"success",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:[_(e).USER,_(e).ADMIN]})),1)])),_:1})):A("",!0),R(B,null,{default:y((()=>[x(S(_(E)("page.permission.directiveWayTitle")),1)])),_:1}),M((g(),c(d,{type:"primary",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:_(e).ADMIN})),1)])),_:1})),[[h,_(e).ADMIN]]),M((g(),c(d,{strong:"",secondary:"",type:"info",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:_(e).USER})),1)])),_:1})),[[h,_(e).USER]]),M((g(),c(d,{strong:"",secondary:"",type:"success",class:"mx-4"},{default:y((()=>[x(S(_(E)("page.permission.roleButtonText",{role:[_(e).USER,_(e).ADMIN]})),1)])),_:1})),[[h,[_(e).USER,_(e).ADMIN]]])])),_:1},8,["title"])}}});export{N as default};