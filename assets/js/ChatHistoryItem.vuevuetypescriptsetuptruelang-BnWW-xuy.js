import{d as e,r as a,a4 as t,R as o,S as s,U as r,Q as l,a3 as i,k as n,a6 as c,y as p,v as u,u as d}from"./vue-EUX_yFNd.js";import{aG as m,aD as v,ae as f,aH as x}from"./celerisComponents-DDKyWJ2G.js";import{_ as y}from"./ActionIcon.vuevuetypescriptsetuptruelang-BR7JzgQa.js";const h={class:"overflow-hidden flex flex-col grow gap-1 p-1.5"},b={class:"chat-history-item-actions-group flex gap-x-2"},g={class:"menu-options flex justify-center opacity-80"},_=e({__name:"ChatHistoryItem",props:{chatSummary:{type:Object,required:!0}},setup(e){const _=a(!1),j=[{label:"导出",key:"Export",icon:m("tabler:download")},{label:"重命名",key:"Edit",icon:m("tabler:edit")},{label:"删除",key:"Delete",icon:m("carbon:trash-can")}],w=a(j);return(a,m)=>{const j=v,k=t("CAIcon"),z=f,C=x;return o(),s("div",{class:"w-full rounded-lg transition ease-out flex mx-2 px-2 py-1.5 hover:bg-[var(--hover-color)]",onMouseover:m[0]||(m[0]=e=>_.value=!0),onMouseleave:m[1]||(m[1]=e=>_.value=!1)},[r("div",h,[l(j,{class:"description text-ellipsis"},{default:i((()=>[n(c(e.chatSummary.title),1)])),_:1})]),p(r("div",b,[r("div",g,[l(C,{options:d(w)},{default:i((()=>[l(z,{text:""},{default:i((()=>[l(k,{name:"carbon:overflow-menu-horizontal",size:20})])),_:1})])),_:1},8,["options"])]),l(y,{"tooltip-text":"归档",icon:"tabler:archive",size:20,transparent:""})],512),[[u,d(_)]])],32)}}});export{_};