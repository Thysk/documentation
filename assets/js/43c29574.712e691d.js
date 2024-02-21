"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1012],{15680:(e,r,n)=>{n.d(r,{xA:()=>l,yg:()=>m});var t=n(96540);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function a(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},l=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},y=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=u(n),y=o,m=p["".concat(s,".").concat(y)]||p[y]||f[y]||i;return n?t.createElement(m,c(c({ref:r},l),{},{components:n})):t.createElement(m,c({ref:r},l))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=y;var a={};for(var s in r)hasOwnProperty.call(r,s)&&(a[s]=r[s]);a.originalType=e,a[p]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<i;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}y.displayName="MDXCreateElement"},53981:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>u,toc:()=>p});var t=n(58168),o=n(98587),i=(n(96540),n(15680)),c=["components"],a={title:"rucio-conveyor-finisher"},s=void 0,u={unversionedId:"bin/rucio-conveyor-finisher",id:"bin/rucio-conveyor-finisher",title:"rucio-conveyor-finisher",description:"",source:"@site/../docs/bin/rucio-conveyor-finisher.md",sourceDirName:"bin",slug:"/bin/rucio-conveyor-finisher",permalink:"/documentation/bin/rucio-conveyor-finisher",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-conveyor-finisher.md",tags:[],version:"current",frontMatter:{title:"rucio-conveyor-finisher"},sidebar:"docs",previous:{title:"rucio-cache-consumer",permalink:"/documentation/bin/rucio-cache-consumer"},next:{title:"rucio-conveyor-poller",permalink:"/documentation/bin/rucio-conveyor-poller"}},l={},p=[],f={toc:p},y="wrapper";function m(e){var r=e.components,n=(0,o.A)(e,c);return(0,i.yg)(y,(0,t.A)({},f,n,{components:r,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-conveyor-finisher [-h] [--run-once]\n                               [--total-threads TOTAL_THREADS]\n                               [--db-bulk DB_BULK] [--bulk BULK]\n                               [--sleep-time SLEEP_TIME]\n                               [--activities ACTIVITIES [ACTIVITIES ...]]\n\nConveyor is a group of daemons to manage file transfers. The conveyor-finisher\nis the resposible to update Rucio internal state after the transfer has\nfinished.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            One iteration only\n  --total-threads TOTAL_THREADS\n                        Concurrency control: total number of threads per\n                        process\n  --db-bulk DB_BULK     Bulk control: number of transfers per db query\n  --bulk BULK           Bulk control: number of requests\n  --sleep-time SLEEP_TIME\n                        Seconds to sleep if few requests\n  --activities ACTIVITIES [ACTIVITIES ...]\n                        Explicit list of activities to include\n")))}m.isMDXComponent=!0}}]);