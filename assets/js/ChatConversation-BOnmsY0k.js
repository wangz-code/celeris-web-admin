import{c as s}from"./index-C0b3zp8b.js";import{c as e}from"./chatContext-CXzZIwY5.js";import{at as a,b0 as t,b1 as o}from"./celerisComponents-DDKyWJ2G.js";import{d as n,r,i,o as l,n as m,R as u,N as c,a3 as d,S as f,ae as v,U as p,Q as g,F as x,a8 as h,a6 as y,a5 as H,u as M}from"./vue-EUX_yFNd.js";import{_}from"./plugin-vueexport-helper-BCo6x5W8.js";const b={class:"avatar"},j={class:"messages flex flex-col"},z={class:"date"},C=_(n({__name:"ChatConversation",props:{maxHeight:{type:Number}},setup(n){const{userInfo:_}=s(),C=r(),{selectedAssistantRef:k}=i(e);function w(){const s=["Hello","How","Are","You","Doing","Today","Good","Morning","Afternoon","Evening"],e=[];for(let a=0;a<5;a++){const a=Math.floor(Math.random()*s.length);e.push(s[a])}return e.join(" ")}const A=function(){const s=[];for(let e=0;e<=50;e++){const a=e%2==0,t={id:e,user:e%2==0?_:{id:k.value.id,username:k.value.name,avatarUrl:k.value.avatar},isMine:a,messages:[],date:new Date},o={text:w(),date:new Date};t.messages.push(o),s.push(t)}return s}();return l((()=>{m((()=>{var s;null==(s=C.value)||s.scrollTo({position:"bottom"})}))})),(s,e)=>{const r=a,i=t,l=o;return u(),c(l,{ref_key:"conversationsVirtualListInst",ref:C,style:H({maxHeight:`${n.maxHeight}px`}),"item-size":M(A).length,items:M(A),class:"chat-virtual-list","item-resizable":""},{default:d((({item:s,index:e})=>[(u(),f("div",{key:e,class:v(["conversation flex",{mine:s.isMine}])},[p("div",b,[g(r,{round:"",size:"large",src:s.user.avatarUrl},null,8,["src"])]),p("div",j,[(u(!0),f(x,null,h(s.messages,(s=>(u(),f("div",{key:s.text,class:"message"},y(s.text),1)))),128)),p("div",z,[g(i,{time:s.date,format:"MM-dd HH:mm:ss"},null,8,["time"])])])],2))])),_:1},8,["style","item-size","items"])}}}),[["__scopeId","data-v-f9b6dc1e"]]);export{C as default};
