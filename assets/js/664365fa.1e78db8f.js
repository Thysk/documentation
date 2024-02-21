"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1440],{15680:(e,r,t)=>{t.d(r,{xA:()=>c,yg:()=>h});var n=t(96540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=n.createContext({}),l=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=l(e.components);return n.createElement(u.Provider,{value:r},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(t),g=a,h=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return t?n.createElement(h,o(o({ref:r},c),{},{components:t})):n.createElement(h,o({ref:r},c))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=g;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},37820:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var n=t(58168),a=t(98587),i=(t(96540),t(15680)),o=["components"],s={title:"1.28.1"},u=void 0,l={unversionedId:"release-notes/1.28.1",id:"release-notes/1.28.1",title:"1.28.1",description:"General",source:"@site/../docs/release-notes/1.28.1.md",sourceDirName:"release-notes",slug:"/release-notes/1.28.1",permalink:"/documentation/release-notes/1.28.1",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.28.1.md",tags:[],version:"current",frontMatter:{title:"1.28.1"}},c={},p=[{value:"General",id:"general",level:2},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Bugs",id:"bugs-1",level:3}],m={toc:p},g="wrapper";function h(e){var r=e.components,t=(0,a.A)(e,o);return(0,i.yg)(g,(0,n.A)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"general"},"General"),(0,i.yg)("h3",{id:"enhancements"},"Enhancements"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Consistency checks: Drop references to the AGIS-API endpoint to fix the auditor ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5226"},"#5226")),(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Oracle hints for list",(0,i.yg)("em",{parentName:"li"},"bad"),"* have a plus too much ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5411"},"#5411")),(0,i.yg)("li",{parentName:"ul"},"Deletion: Heartbeat is never refreshed for the Dark Reaper ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5374"},"#5374")),(0,i.yg)("li",{parentName:"ul"},"Recovery: Too many execution of get_bad_replicas_backlog ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5433"},"#5433")),(0,i.yg)("li",{parentName:"ul"},"Release management: Update paramiko dependency due to security advisory ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5412"},"#5412")),(0,i.yg)("li",{parentName:"ul"},"Rules: rucio update-rule --locked is case sensitive ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5356"},"#5356")),(0,i.yg)("li",{parentName:"ul"},"Testing: Disable the add header CI/CD job ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5389"},"#5389")),(0,i.yg)("li",{parentName:"ul"},"Transfers: implement cross-transfertool multihop  ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5403"},"#5403")),(0,i.yg)("li",{parentName:"ul"},"Transfers: allow prioritization between two multihops ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5408"},"#5408")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Flag transfer errors coming from tape sources ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5410"},"#5410")),(0,i.yg)("li",{parentName:"ul"},"Transfers: reduce verbosity of submitter on INFO level ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5413"},"#5413"))),(0,i.yg)("h3",{id:"bugs"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Core & Internals: Bug in delete_dids when bad files are declared ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5387"},"#5387")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Incorrect number of format arguments in one submitter log ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5405"},"#5405")),(0,i.yg)("li",{parentName:"ul"},"Transfers: Preparer bulk size argument not used ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5430"},"#5430"))),(0,i.yg)("h2",{id:"clients"},"Clients"),(0,i.yg)("h3",{id:"bugs-1"},"Bugs"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Clients: Bug in the upload client for cloud resources ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5354"},"#5354")),(0,i.yg)("li",{parentName:"ul"},"Clients: Problem to print the summary when using rucio add-lifetime-exception ",(0,i.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/5427"},"#5427"))))}h.isMDXComponent=!0}}]);