"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8240],{15680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>g});var r=n(96540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),m=o,g=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7406:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>g,frontMatter:()=>c,metadata:()=>s,toc:()=>d});var r=n(58168),o=n(98587),i=(n(96540),n(15680)),a=["components"],c={id:"sig_tokens",title:"SIG Tokens"},l=void 0,s={unversionedId:"sig_tokens",id:"sig_tokens",title:"SIG Tokens",description:"Objective",source:"@site/../docs/sig_tokens.md",sourceDirName:".",slug:"/sig_tokens",permalink:"/documentation/sig_tokens",draft:!1,editUrl:"https://github.com/rucio/documentation/tree/main/docs/../docs/sig_tokens.md",tags:[],version:"current",lastUpdatedBy:"rdimaio",lastUpdatedAt:1707927896,formattedLastUpdatedAt:"Feb 14, 2024",frontMatter:{id:"sig_tokens",title:"SIG Tokens"}},u={},d=[{value:"Objective",id:"objective",level:2},{value:"Expected End-Date",id:"expected-end-date",level:2},{value:"Means to achieve the objective",id:"means-to-achieve-the-objective",level:2},{value:"Convener",id:"convener",level:2},{value:"Design document",id:"design-document",level:2}],p={toc:d},m="wrapper";function g(e){var t=e.components,n=(0,o.A)(e,a);return(0,i.yg)(m,(0,r.A)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.yg)("h2",{id:"objective"},"Objective"),(0,i.yg)("p",null,"The objective of this SIG is to collect feedback from the wider Rucio community\nabout the evolution of OIDC/oAuth2 token workflows in Rucio. This feedback should\nfirst be compiled into an, ongoing, design document and then drive the development\nof token functionality in Rucio."),(0,i.yg)("h2",{id:"expected-end-date"},"Expected End-Date"),(0,i.yg)("p",null,"March 2026, in line with the ",(0,i.yg)("a",{parentName:"p",href:"https://zenodo.org/record/7014668"},"WLCG Token Transition"),"\ntimeline. By then token functionality in Rucio will have reached a level of maturity\nand the further development can be coordinated without the SIG."),(0,i.yg)("h2",{id:"means-to-achieve-the-objective"},"Means to achieve the objective"),(0,i.yg)("ul",null,(0,i.yg)("li",{parentName:"ul"},"Mattermost channel: ",(0,i.yg)("a",{parentName:"li",href:"https://mattermost.web.cern.ch/rucio/channels/tokens"},"#tokens")),(0,i.yg)("li",{parentName:"ul"},"eMail list: ",(0,i.yg)("a",{parentName:"li",href:"mailto:rucio-sig-tokens@cern.ch"},"rucio-sig-tokens@cern.ch")),(0,i.yg)("li",{parentName:"ul"},"Ad hoc meetings",(0,i.yg)("ul",{parentName:"li"},(0,i.yg)("li",{parentName:"ul"},(0,i.yg)("a",{parentName:"li",href:"https://indico.cern.ch/event/1316668/"},"SIG Tokens Kickoff"),", Weekly Rucio Meeting, September 2023"))),(0,i.yg)("li",{parentName:"ul"},"A regularly updated design document")),(0,i.yg)("h2",{id:"convener"},"Convener"),(0,i.yg)("p",null,(0,i.yg)("a",{parentName:"p",href:"https://github.com/dchristidis"},"Dimitrios Christidis")),(0,i.yg)("h2",{id:"design-document"},"Design document"),(0,i.yg)("table",null,(0,i.yg)("thead",{parentName:"table"},(0,i.yg)("tr",{parentName:"thead"},(0,i.yg)("th",{parentName:"tr",align:null},"Version"),(0,i.yg)("th",{parentName:"tr",align:null},"Creation"))),(0,i.yg)("tbody",{parentName:"table"},(0,i.yg)("tr",{parentName:"tbody"},(0,i.yg)("td",{parentName:"tr",align:null},(0,i.yg)("a",{parentName:"td",href:"https://rucio.cern.ch/documentation/files/Rucio_Tokens_v0.1.pdf"},"v0.1")),(0,i.yg)("td",{parentName:"tr",align:null},"Sep 25, 2023")))))}g.isMDXComponent=!0}}]);