"use strict";(self.webpackChunk_3dstreet_docs=self.webpackChunk_3dstreet_docs||[]).push([[227],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=i.createContext({}),d=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return i.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(r),m=n,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||a;return r?i.createElement(h,o(o({ref:t},p),{},{components:r})):i.createElement(h,o({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var d=2;d<a;d++)o[d]=r[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"Viewer and Editor",sidebar_position:3},o="Viewer and Editor",l={unversionedId:"viewer-and-editor",id:"viewer-and-editor",title:"Viewer and Editor",description:"3DStreet has two primary interface modes, and it is important to distinguish between them as they serve two distinct purposes.",source:"@site/docs/viewer-and-editor.md",sourceDirName:".",slug:"/viewer-and-editor",permalink:"/docs/viewer-and-editor",draft:!1,editUrl:"https://github.com/3dstreet/3dstreet-docs/tree/main/docs/viewer-and-editor.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Viewer and Editor",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Why 3DStreet?",permalink:"/docs/why-3dstreet"},next:{title:"3DStreet Editor",permalink:"/docs/category/3dstreet-editor"}},s={},d=[{value:"3DStreet Viewer",id:"3dstreet-viewer",level:3},{value:"3DStreet Editor",id:"3dstreet-editor",level:3},{value:"Moving around within the 3DStreet Editor",id:"moving-around-within-the-3dstreet-editor",level:2},{value:"Adjusting current Editor view",id:"adjusting-current-editor-view",level:3},{value:"Switching Editor camera views",id:"switching-editor-camera-views",level:3},{value:"Moving around in the 3DStreet Viewer",id:"moving-around-in-the-3dstreet-viewer",level:2}],p={toc:d};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"viewer-and-editor"},"Viewer and Editor"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"3DStreet has two primary interface modes, and it is important to distinguish between them as they serve two distinct purposes.")," "),(0,n.kt)("h3",{id:"3dstreet-viewer"},"3DStreet Viewer"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"3DStreet Viewer")," is a read-only 3D view of a previously created street environment made with the 3DStreet Editor tool. "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'Enables users to view and navigate through a first-person "Street View" interface'),(0,n.kt)("li",{parentName:"ul"},"Allows users to move throughout the street environment"),(0,n.kt)("li",{parentName:"ul"},"Removes editing tool information to focus on visualization and limits distractions"),(0,n.kt)("li",{parentName:"ul"},"Supports immersive VR mode on WebXR compatible devices such as the Oculus Quest"),(0,n.kt)("li",{parentName:"ul"},"Allows loading of existing scenes and creating screen captures")),(0,n.kt)("h3",{id:"3dstreet-editor"},"3DStreet Editor"),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"3DStreet Editor")," is a tool that allows you to edit and modify components of a 3DStreet scene. With the Editor tool you can import designs from tools like Streetmix or create new original designs."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Allows users to view street scene from multiple perspectives"),(0,n.kt)("li",{parentName:"ul"},"Loads scenes made previously in 3DStreet or import from Streetmix"),(0,n.kt)("li",{parentName:"ul"},"Select and unselect layers to inspect or edit position and other attributes"),(0,n.kt)("li",{parentName:"ul"},"Inspect and alter component properties with precise values using the property panel"),(0,n.kt)("li",{parentName:"ul"},"Export a glTF file for further editing and rendering in professional 3D applications"),(0,n.kt)("li",{parentName:"ul"},"Capture PNG screenshot of a the current viewport")),(0,n.kt)("h2",{id:"moving-around-within-the-3dstreet-editor"},"Moving around within the 3DStreet Editor"),(0,n.kt)("h3",{id:"adjusting-current-editor-view"},"Adjusting current Editor view"),(0,n.kt)("p",null,"There are several ways to modify the current viewer perspective within a scene in ",(0,n.kt)("strong",{parentName:"p"},"Editor"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Pan"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"click and drag to move around the scene"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rotate"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Right click and drag to rotate while staying in place"),(0,n.kt)("li",{parentName:"ul"},"(",(0,n.kt)("inlineCode",{parentName:"li"},"Ctrl")," click and drag for users with trackpads)"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Zoom"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"With scroll wheel on your mouse move the wheel up and down. Or with trackpad use two fingers and move towards each other for a zoom in and move away from each other for zoom out.")))),(0,n.kt)("h3",{id:"switching-editor-camera-views"},"Switching Editor camera views"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Editor")," has three camera perspectives to switch between: 3D View, Plan View, and Cross Section. You can change them by selecting their respective tabs at the top of the Editor screen. The darkened tab is the one that is your current selection. These views are not available in ",(0,n.kt)("strong",{parentName:"p"},"Viewer"),". "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"3D Plan View")," shows a 3D perspective camera with adjustable rotation and position"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Plan View")," shows a downfacing orthographic camera that can be panned, similar to a traditional map view"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Cross Section")," shows a front facing orthographic camera view, similar to Streetmix")),(0,n.kt)("h2",{id:"moving-around-in-the-3dstreet-viewer"},"Moving around in the 3DStreet Viewer"),(0,n.kt)("p",null,"Use the purple cursor to help you move through ",(0,n.kt)("strong",{parentName:"p"},"Viewer")," similar to Google Street View or other first-person click and teleport movement schemes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Traverse down the street"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The purple circle is a cursor that indicates a location to jump to when clicked. Click on it to move down the street to the cursor point. (Only available in ",(0,n.kt)("strong",{parentName:"li"},"Viewer"),")"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Rotate Camera"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Use hand cursor to click desired point, when hand is closed \u201cgrab\u201d and move mouse to rotate camera view")))))}c.isMDXComponent=!0}}]);