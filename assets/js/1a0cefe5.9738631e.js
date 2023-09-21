"use strict";(self.webpackChunk_3dstreet_docs=self.webpackChunk_3dstreet_docs||[]).push([[344],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,g=p["".concat(l,".").concat(f)]||p[f]||u[f]||o;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},4844:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:5},i="Saving and Loading 3DStreet Scenes",s={unversionedId:"3dstreet-editor/saving-and-loading-scenes",id:"3dstreet-editor/saving-and-loading-scenes",title:"Saving and Loading 3DStreet Scenes",description:"3DStreet Cloud account",source:"@site/docs/3dstreet-editor/saving-and-loading-scenes.md",sourceDirName:"3dstreet-editor",slug:"/3dstreet-editor/saving-and-loading-scenes",permalink:"/docs/3dstreet-editor/saving-and-loading-scenes",draft:!1,editUrl:"https://github.com/3dstreet/3dstreet-docs/tree/main/docs/3dstreet-editor/saving-and-loading-scenes.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Layers and Properties Panels",permalink:"/docs/3dstreet-editor/layers-properties-panels"},next:{title:"Tutorial: Use Streetmix to create a 3DStreet scene",permalink:"/docs/category/tutorial-use-streetmix-to-create-a-3dstreet-scene"}},l={},c=[{value:"3DStreet Cloud account",id:"3dstreet-cloud-account",level:2},{value:"Beta software",id:"beta-software",level:2},{value:"File export options",id:"file-export-options",level:2},{value:"Feedback on saving and loading scenes",id:"feedback-on-saving-and-loading-scenes",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"saving-and-loading-3dstreet-scenes"},"Saving and Loading 3DStreet Scenes"),(0,r.kt)("h2",{id:"3dstreet-cloud-account"},"3DStreet Cloud account"),(0,r.kt)("p",null,"You can save and load scenes with a 3DStreet Cloud account. So that you don't have to create a new password, and so that we don't have to store it, we use a third-party provider Google Sign-in for account access."),(0,r.kt)("h2",{id:"beta-software"},"Beta software"),(0,r.kt)("p",null,'3DStreet is "',(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Software_release_life_cycle#Beta"},"beta"),' software" in active development and may not behave as expected. As we continue improving the product, we do our best ensure backward compatibility so that your 3DStreet data remains useable, but you may experience data loss. In using these features, you understand that you use this application at your own risk including your acceptance of the liability of potential data loss per the terms of the ',(0,r.kt)("a",{parentName:"p",href:"https://github.com/3DStreet/3dstreet/blob/main/LICENSE"},"License")," that we use to make 3DStreet available to you."),(0,r.kt)("h2",{id:"file-export-options"},"File export options"),(0,r.kt)("p",null,"In addition to saving and sharing files with 3DStreet Cloud, you can instantly export your 3DStreet scene as a downloadable file in your browser."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Editable 3DStreet JSON Files - You can save and load scenes using 3DStreet JSON files ending in ",(0,r.kt)("inlineCode",{parentName:"li"},".3dstreet.json")," extension. These files contain layers, entities and components that make up your street scene in JavaScript notation. This is the same JSON format used in 3DStreet Cloud but made available as a file that you can save and store locally. Usually you can continue editing a 3DStreet JSON file after reloading it in a future session."),(0,r.kt)("li",{parentName:"ul"},"Read-only glTF Scene Files - You can also export scenes in the glTF graphics transmission files ending in ",(0,r.kt)("inlineCode",{parentName:"li"},".glb")," extension. These files can be used by other 3D applications such as Blender, Unreal or Unity. This is a binary file and is not editable again by 3DStreet Editor in future sessions.")),(0,r.kt)("h2",{id:"feedback-on-saving-and-loading-scenes"},"Feedback on saving and loading scenes"),(0,r.kt)("p",null,"We're open to suggestions on alternate account creation and access methods for 3DStreet scenes. ",(0,r.kt)("a",{parentName:"p",href:"https://discord.com/invite/VN242sx9qu"},"Join our Discord server")," or ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/3dstreet/3dstreet/issues/new"},"suggest an issue")," on our GitHub repos accessed via the links in the footer below."))}u.isMDXComponent=!0}}]);