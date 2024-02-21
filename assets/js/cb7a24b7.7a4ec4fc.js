"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1175],{15680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>h});var r=n(96540);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=s(n),g=i,h=m["".concat(l,".").concat(g)]||m[g]||p[g]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=g;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[m]="string"==typeof e?e:i,o[1]=u;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},80179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>u,metadata:()=>s,toc:()=>m});var r=n(58168),i=n(98587),a=(n(96540),n(15680)),o=["components"],u={title:"1.14.9"},l=void 0,s={unversionedId:"release-notes/1.14.9",id:"release-notes/1.14.9",title:"1.14.9",description:"Rucio",source:"@site/../docs/release-notes/1.14.9.md",sourceDirName:"release-notes",slug:"/release-notes/1.14.9",permalink:"/documentation/release-notes/1.14.9",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/release-notes/1.14.9.md",tags:[],version:"current",frontMatter:{title:"1.14.9"}},c={},m=[{value:"Rucio",id:"rucio",level:2},{value:"Features",id:"features",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Bugs",id:"bugs",level:3},{value:"Clients",id:"clients",level:2},{value:"Enhancements",id:"enhancements-1",level:3},{value:"WebUI",id:"webui",level:2},{value:"Enhancements",id:"enhancements-2",level:3},{value:"Bugs",id:"bugs-1",level:3}],p={toc:m},g="wrapper";function h(e){var t=e.components,n=(0,i.A)(e,o);return(0,a.yg)(g,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.yg)("h2",{id:"rucio"},"Rucio"),(0,a.yg)("h3",{id:"features"},"Features"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Extensions: Functionality to include TTC for a rule in rucio rule-info ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/530"},"#530"))),(0,a.yg)("h3",{id:"enhancements"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: CMS Site name rules need to be in RSE attributes as well. ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/554"},"#554")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Do not require space tokens for SRM ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/574"},"#574")),(0,a.yg)("li",{parentName:"ul"},"Documentation: add Client API description to the documentation ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/557"},"#557")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Contributor guide should only be one line in the main documentation TOC  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/560"},"#560")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Broken autogeneration of the API documentation ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/596"},"#596")),(0,a.yg)("li",{parentName:"ul"},"Documentation: add requirements.readthedocs.txt ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/597"},"#597")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Update and move AUTHORS file to AUTHORS.rst and 2018 ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/619"},"#619")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Modify sphinx template to get the default in on rtd ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/622"},"#622")),(0,a.yg)("li",{parentName:"ul"},"Documentation: Add autogenerated documentation for bin/rucio command line tool ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/626"},"#626")),(0,a.yg)("li",{parentName:"ul"},"Probes & Alarms: Flag to enable/disable the check of busy links in FTS probe ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/587"},"#587")),(0,a.yg)("li",{parentName:"ul"},"Transfers: S3 third party copy scheme mismatchs ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/634"},"#634"))),(0,a.yg)("h3",{id:"bugs"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Fix naming convention validation ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/612"},"#612")),(0,a.yg)("li",{parentName:"ul"},"Probes & Alarms: Handling of non-expected value in json in check_rses_distance ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/604"},"#604"))),(0,a.yg)("h2",{id:"clients"},"Clients"),(0,a.yg)("h3",{id:"enhancements-1"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"Clients: client: Allow rucio-admin to manage protocols ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/327"},"#327")),(0,a.yg)("li",{parentName:"ul"},"Clients: clients: automatically select lan/wan replica based on location ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/450"},"#450")),(0,a.yg)("li",{parentName:"ul"},"Clients: clients: Add CLI for manipulating distance information ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/469"},"#469")),(0,a.yg)("li",{parentName:"ul"},"Clients: Add creation date as output to rucio list-rules --account ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/548"},"#548")),(0,a.yg)("li",{parentName:"ul"},"Core & Internals: Handle Apache failures gracefully ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/576"},"#576"))),(0,a.yg)("h2",{id:"webui"},"WebUI"),(0,a.yg)("h3",{id:"enhancements-2"},"Enhancements"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: WebUI: Metalink download for datasets ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/343"},"#343")," ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/343"},"#343"))),(0,a.yg)("h3",{id:"bugs-1"},"Bugs"),(0,a.yg)("ul",null,(0,a.yg)("li",{parentName:"ul"},"WebUI: Fix footer in account_usage table  ",(0,a.yg)("a",{parentName:"li",href:"https://github.com/rucio/rucio/issues/563"},"#563"))))}h.isMDXComponent=!0}}]);