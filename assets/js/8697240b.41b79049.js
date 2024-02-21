"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7133],{15680:(e,t,r)=>{r.d(t,{xA:()=>u,yg:()=>g});var n=r(96540);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,g=p["".concat(s,".").concat(f)]||p[f]||m[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},33197:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>g,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(58168),a=r(98587),i=(r(96540),r(15680)),o=["components"],l={title:"1.28.6"},s=void 0,c={unversionedId:"release-notes/1.28.6",id:"release-notes/1.28.6",title:"1.28.6",description:"General",source:"@site/../docs/release-notes/1.28.6.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.6",permalink:"/documentation/release-notes/1.28.6",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.6.md",tags:[],version:"current",frontMatter:{title:"1.28.6"}},u={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3}],m={toc:p},f="wrapper";function g(e){var t=e.components,r=(0,a.A)(e,o);return(0,i.yg)(f,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"features"},"Features"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Documentation: Fix the trailing-whitespaces and file-ends ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5618"},"#5618"))),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Subscriptions: Heartbeat handler for transmogrifier ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5568"},"#5568"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Rebalancing: Various bugs affecting BB8 ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5571"},"#5571")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Query not properly executed ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5476"},"#5476")),(0,i.yg)("li",{parentName:"ul"},"Replicas: Misleading documentation for replicaclient.update_replicas_states() ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5487"},"#5487")),(0,i.yg)("li",{parentName:"ul"},"Testing: Concurrent file access in add lifetime Tests ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5638"},"#5638"))))}g.isMDXComponent=!0}}]);