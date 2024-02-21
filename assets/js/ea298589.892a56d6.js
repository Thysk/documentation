"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3246],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>f});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),g=o,f=p["".concat(u,".").concat(g)]||p[g]||m[g]||a;return r?n.createElement(f,i(i({ref:t},c),{},{components:r})):n.createElement(f,i({ref:t},c))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},82050:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var n=r(58168),o=r(98587),a=(r(96540),r(15680)),i=["components"],l={title:"1.17.5"},u=void 0,s={unversionedId:"release-notes/1.17.5",id:"release-notes/1.17.5",title:"1.17.5",description:"General",source:"@site/../docs/release-notes/1.17.5.md",sourceDirName:"release-notes",slug:"/release-notes/1.17.5",permalink:"/documentation/release-notes/1.17.5",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.17.5.md",tags:[],version:"current",frontMatter:{title:"1.17.5"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},g="wrapper";function f(e){var t=e.components,r=(0,o.A)(e,i);return(0,a.yg)(g,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Documentation: rucio documentation fixes ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1310"},"#1310")),(0,a.yg)("li",{parentName:"ul"},"Infrastructure: cx_oracle version in containers should be fixed to 6.3.1 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1318"},"#1318")),(0,a.yg)("li",{parentName:"ul"},"Infrastructure: Docker image build of rucio demo fails ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1329"},"#1329")),(0,a.yg)("li",{parentName:"ul"},"Infrastructure: Incorrect configuration of rucio demo? ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1334"},"#1334"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Rebalancing: Fix activity in BB8 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1361"},"#1361")),(0,a.yg)("li",{parentName:"ul"},"Testing: Reset db tables script fails silently ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1317"},"#1317"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"RSE Manager: Deleting left-overs of first attempt of upload by correct protocol ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1346"},"#1346")),(0,a.yg)("li",{parentName:"ul"},"Release management: Downgrade to older setuptools version as 39.0.1 is not py2.6 compatible ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1355"},"#1355"))))}f.isMDXComponent=!0}}]);