"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7152],{15680:(e,t,r)=>{r.d(t,{xA:()=>c,yg:()=>h});var n=r(96540);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),m=i,h=p["".concat(s,".").concat(m)]||p[m]||g[m]||a;return r?n.createElement(h,o(o({ref:t},c),{},{components:r})):n.createElement(h,o({ref:t},c))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},30016:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>l,metadata:()=>u,toc:()=>p});var n=r(58168),i=r(98587),a=(r(96540),r(15680)),o=["components"],l={title:"1.25.4"},s=void 0,u={unversionedId:"release-notes/1.25.4",id:"release-notes/1.25.4",title:"1.25.4",description:"General",source:"@site/../docs/release-notes/1.25.4.md",sourceDirName:"release-notes",slug:"/release-notes/1.25.4",permalink:"/documentation/release-notes/1.25.4",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.25.4.md",tags:[],version:"current",frontMatter:{title:"1.25.4"}},c={},p=[{value:"General",id:"general",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-1",level:3}],g={toc:p},m="wrapper";function h(e){var t=e.components,r=(0,i.A)(e,o);return(0,a.yg)(m,(0,n.A)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"general"},"General"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Archive information on dataset level ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4385"},"#4385"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Change prerequisites for move_rule ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4222"},"#4222")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Replace usages of Thread.isAlive ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4585"},"#4585")),(0,a.yg)("li",{parentName:"ul"},"Deletion: Removing last replica which is a constituent ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/2213"},"#2213"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Deletion: Handling of Archives in the Reaper ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1431"},"#1431")),(0,a.yg)("li",{parentName:"ul"},"Deletion: When multiple Reaper instances are running on the same node, the RSE configuration somehow gets mixed ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4069"},"#4069")),(0,a.yg)("li",{parentName:"ul"},"Replicas: Core list_replicas() does not make use of ignore_availability ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4353"},"#4353")),(0,a.yg)("li",{parentName:"ul"},"Replicas: The replica sorting ignores the protocol priority ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4546"},"#4546")),(0,a.yg)("li",{parentName:"ul"},"Replicas: Python 3 bug in core list_replicas ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4583"},"#4583")),(0,a.yg)("li",{parentName:"ul"},"Transfers: Conveyor : Fix bug affecting http+srm protocol ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/4540"},"#4540"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: ",(0,a.yg)("inlineCode",{parentName:"li"},"rucio --help")," fails on misconfigured sites ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/1911"},"#1911"))),(0,a.yg)("h2",{id:"webui"},"WebUI"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: R2D2 wrongly creates a container if the list of dids is containing only files ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/583"},"#583"))))}h.isMDXComponent=!0}}]);