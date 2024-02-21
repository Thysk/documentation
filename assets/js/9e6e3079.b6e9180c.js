"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1511],{15680:(e,r,n)=>{n.d(r,{xA:()=>u,yg:()=>f});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=t.createContext({}),l=function(e){var r=t.useContext(a),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(a.Provider,{value:r},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=o,f=m["".concat(a,".").concat(d)]||m[d]||p[d]||i;return n?t.createElement(f,c(c({ref:r},u),{},{components:n})):t.createElement(f,c({ref:r},u))}));function f(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=d;var s={};for(var a in r)hasOwnProperty.call(r,a)&&(s[a]=r[a]);s.originalType=e,s[m]="string"==typeof e?e:o,c[1]=s;for(var l=2;l<i;l++)c[l]=n[l];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82389:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>f,frontMatter:()=>s,metadata:()=>l,toc:()=>m});var t=n(58168),o=n(98587),i=(n(96540),n(15680)),c=["components"],s={title:"rucio-rse-decommissioner"},a=void 0,l={unversionedId:"bin/rucio-rse-decommissioner",id:"bin/rucio-rse-decommissioner",title:"rucio-rse-decommissioner",description:"",source:"@site/../docs/bin/rucio-rse-decommissioner.md",sourceDirName:"bin",slug:"/bin/rucio-rse-decommissioner",permalink:"/documentation/bin/rucio-rse-decommissioner",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-rse-decommissioner.md",tags:[],version:"current",frontMatter:{title:"rucio-rse-decommissioner"},sidebar:"docs",previous:{title:"rucio-replica-recoverer",permalink:"/documentation/bin/rucio-replica-recoverer"},next:{title:"rucio-storage-consistency-actions",permalink:"/documentation/bin/rucio-storage-consistency-actions"}},u={},m=[],p={toc:m},d="wrapper";function f(e){var r=e.components,n=(0,o.A)(e,c);return(0,i.yg)(d,(0,t.A)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},'usage: rucio-rse-decommissioner [-h] [--run-once] [--sleep-time SLEEP_TIME]\n\nRSE-Decommissioner is a daemon that clears RSEs scheduled for decommissioning.\nThe actual operations (e.g. just delete all replicas, move the replicas to\nspecific RSEs, etc.) that are performed on the RSEs depend on the\n"decommissioning profile", which must be specified for each RSE through RSE\nattributes.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only.\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n\nTo mark an RSE for decommissioning\n----------------------------------\n\nClearing with the generic "delete all" profile:\n\n$ rucio-admin rse set-attribute --rse MOCK_RSE --key decommission               --value profile=generic_delete\n\nClearing with the generic "move all" profile:\n\n$ rucio-admin rse set-attribute --rse MOCK_RSE --key decommission               --value profile=generic_move,destination=ANOTHER_RSE\n')))}f.isMDXComponent=!0}}]);