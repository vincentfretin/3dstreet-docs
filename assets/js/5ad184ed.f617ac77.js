"use strict";(self.webpackChunk_3dstreet_docs=self.webpackChunk_3dstreet_docs||[]).push([[951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=o,v=u["".concat(l,".").concat(m)]||u[m]||c[m]||a;return r?n.createElement(v,i(i({ref:t},d),{},{components:r})):n.createElement(v,i({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2332:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={sidebar_position:1},i="Overview",s={unversionedId:"for-developers/overview-developer-documentation",id:"for-developers/overview-developer-documentation",title:"Overview",description:"For Developers",source:"@site/docs/for-developers/overview-developer-documentation.md",sourceDirName:"for-developers",slug:"/for-developers/overview-developer-documentation",permalink:"/docs/for-developers/overview-developer-documentation",draft:!1,editUrl:"https://github.com/3dstreet/3dstreet-docs/tree/main/docs/for-developers/overview-developer-documentation.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"For Developers",permalink:"/docs/category/for-developers"},next:{title:"Pricing and Services",permalink:"/docs/pricing"}},l={},p=[{value:"For Developers",id:"for-developers",level:2},{value:"3DStreet Repositories",id:"3dstreet-repositories",level:3},{value:"Future docs topics",id:"future-docs-topics",level:3}],d={toc:p};function c(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"for-developers"},"For Developers"),(0,o.kt)("p",null,"This is documentation for developers and contributors to 3DStreet. It includes links to all of the source code of 3DStreet as well as instructions on how to leverage 3DStreet components in your own applications."),(0,o.kt)("h3",{id:"3dstreet-repositories"},"3DStreet Repositories"),(0,o.kt)("p",null,"3DStreet is made up of 4 key repositories:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Repository & Endpoint"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Core Parser & Viewer"),(0,o.kt)("td",{parentName:"tr",align:null},"GitHub: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/3DStreet/3dstreet"},"3DStreet/3dstreet")," ",(0,o.kt)("br",null)," Endpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://github.3dstreet.org"},"https://github.3dstreet.org")),(0,o.kt)("td",{parentName:"tr",align:null},"A-Frame app to create 3D entities from 3DStreet scene file or Streetmix API response. Also creates basic environment and viewer controls.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Editor"),(0,o.kt)("td",{parentName:"tr",align:null},"GitHub: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/3DStreet/3dstreet-editor"},"3DStreet/3dstreet-editor")," ",(0,o.kt)("br",null)," Endpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://3dstreet.app"},"https://3dstreet.app")),(0,o.kt)("td",{parentName:"tr",align:null},"React-based interactive scene graph browser, interactive editor, and entity component property editor.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Assets"),(0,o.kt)("td",{parentName:"tr",align:null},"GitHub: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/3DStreet/3dstreet-assets-source"},"3DStreet/3dstreet-assets-source")," ",(0,o.kt)("br",null)," GitHub: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/3DStreet/3dstreet-assets-dist"},"3DStreet/3dstreet-assets-dist")," ",(0,o.kt)("br",null)," Endpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://assets.3dstreet.app"},"https://assets.3dstreet.app")),(0,o.kt)("td",{parentName:"tr",align:null},"All original source files for 3DStreet 3D models including Blender source code as well as converted output for distribution.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Docs & Website"),(0,o.kt)("td",{parentName:"tr",align:null},"GitHub: ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/3DStreet/3dstreet-docs"},"3DStreet/3dstreet-docs")," ",(0,o.kt)("br",null)," Endpoint: ",(0,o.kt)("a",{parentName:"td",href:"https://3dstreet.org"},"https://3dstreet.org")),(0,o.kt)("td",{parentName:"tr",align:null},"This documentation site as well as 3dstreet.org index page.")))),(0,o.kt)("h3",{id:"future-docs-topics"},"Future docs topics"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Contributing for Developers (for Kieran)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Architecture"),(0,o.kt)("li",{parentName:"ul"},"Repositories"),(0,o.kt)("li",{parentName:"ul"},"Contributing Instructions (issue, PR, testing, etc.)")))))}c.isMDXComponent=!0}}]);