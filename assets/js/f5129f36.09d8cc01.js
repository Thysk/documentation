"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8171],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>d});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=u(r),m=o,d=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(d,l(l({ref:t},c),{},{components:r})):n.createElement(d,l({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},75065:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>p});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),l=["components"],i={title:"1.28.2"},s=void 0,u={unversionedId:"release-notes/1.28.2",id:"release-notes/1.28.2",title:"1.28.2",description:"General",source:"@site/../docs/release-notes/1.28.2.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.2",permalink:"/documentation/release-notes/1.28.2",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.2.md",tags:[],version:"current",frontMatter:{title:"1.28.2"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],g={toc:p},m="wrapper";function d(e){var t=e.components,r=(0,o.A)(e,l);return(0,a.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Release management: Rewrite the ",(0,a.yg)("inlineCode",{parentName:"li"},"add_header")," script ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5455"},"#5455"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Monitoring & Logging: Globus transfers not being handled properly by MONIT ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5432"},"#5432"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: Bus error (core dumped) with rucio download on lxplus/EOS ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5462"},"#5462"))))}d.isMDXComponent=!0}}]);