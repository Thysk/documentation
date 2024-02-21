"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6813],{15680:(e,t,r)=>{r.d(t,{xA:()=>s,yg:()=>d});var n=r(96540);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},l="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),l=p(r),f=o,d=l["".concat(u,".").concat(f)]||l[f]||m[f]||i;return r?n.createElement(d,a(a({ref:t},s),{},{components:r})):n.createElement(d,a({ref:t},s))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[l]="string"==typeof e?e:o,a[1]=c;for(var p=2;p<i;p++)a[p]=r[p];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},36199:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>u,default:()=>d,frontMatter:()=>c,metadata:()=>p,toc:()=>l});var n=r(58168),o=r(98587),i=(r(96540),r(15680)),a=["components"],c={title:"rucio-automatix"},u=void 0,p={unversionedId:"bin/rucio-automatix",id:"bin/rucio-automatix",title:"rucio-automatix",description:"",source:"@site/../docs/bin/rucio-automatix.md",sourceDirName:"bin",slug:"/bin/rucio-automatix",permalink:"/documentation/bin/rucio-automatix",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/bin/rucio-automatix.md",tags:[],version:"current",frontMatter:{title:"rucio-automatix"},sidebar:"docs",previous:{title:"rucio-auditor",permalink:"/documentation/bin/rucio-auditor"},next:{title:"rucio-bb8",permalink:"/documentation/bin/rucio-bb8"}},s={},l=[],m={toc:l},f="wrapper";function d(e){var t=e.components,r=(0,o.A)(e,a);return(0,i.yg)(f,(0,n.A)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("pre",null,(0,i.yg)("code",{parentName:"pre"},"usage: rucio-automatix [-h] [--run-once] [--input-file INPUT_FILE]\n                       [--threads-per-process THREADS_PER_PROCESS]\n                       [--sleep-time SLEEP_TIME]\n\nAutomatix is a daemon used to inject random generated files to an RSE. It is\nused to continuosly check that an RSE is reachable and operating as spected.\n\noptional arguments:\n  -h, --help            show this help message and exit\n  --run-once            Runs one loop iteration\n  --input-file INPUT_FILE\n                        Automatix configuration\n  --threads-per-process THREADS_PER_PROCESS\n                        Total number of workers per process\n  --sleep-time SLEEP_TIME\n                        Concurrency control: thread sleep time after each\n                        chunk of work\n")))}d.isMDXComponent=!0}}]);