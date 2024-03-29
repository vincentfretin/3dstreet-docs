"use strict";(self.webpackChunk_3dstreet_docs=self.webpackChunk_3dstreet_docs||[]).push([[3632],{5600:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var r=n(5893),a=n(1151);const o={sidebar_position:3},i="3DStreet Alpha Labs",l={id:"development/alpha-labs",title:"3DStreet Alpha Labs",description:"Check out some of our Alpha Labs features below -- these are features that are ready for testing and user feedback, but not ready for prime time. Try them out (with caution) and tell us how well they work and what we can do to make them better.",source:"@site/docs/development/alpha-labs.md",sourceDirName:"development",slug:"/development/alpha-labs",permalink:"/docs/development/alpha-labs",draft:!1,unlisted:!1,editUrl:"https://github.com/3dstreet/3dstreet-docs/tree/main/docs/development/alpha-labs.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Git Repositories",permalink:"/docs/development/overview-developer-documentation"},next:{title:"About 3DStreet",permalink:"/docs/category/about-3dstreet"}},s={},d=[{value:"SVG Extruder Component",id:"svg-extruder-component",level:2},{value:"Mapbox Aerial Imagery",id:"mapbox-aerial-imagery",level:2},{value:"Custom glTF Model",id:"custom-gltf-model",level:2},{value:"Add Streetmix Street Non-Destructively",id:"add-streetmix-street-non-destructively",level:2},{value:"Add a Primitive Geometry from A-Frame",id:"add-a-primitive-geometry-from-a-frame",level:2},{value:"Google 3D Map Tiles",id:"google-3d-map-tiles",level:2}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"3dstreet-alpha-labs",children:"3DStreet Alpha Labs"}),"\n",(0,r.jsx)(t.p,{children:"Check out some of our Alpha Labs features below -- these are features that are ready for testing and user feedback, but not ready for prime time. Try them out (with caution) and tell us how well they work and what we can do to make them better."}),"\n",(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.p,{children:['Save a backup of your scene before trying these "Alpha Labs" experiments. 3DStreet is a ',(0,r.jsx)(t.a,{href:"https://www.3dstreet.org/docs/3dstreet-editor/saving-and-loading-scenes#beta-software",children:"Beta product"})," that may have bugs, and these Alpha Labs components are more likely to have bugs that could break your 3DStreet scene or prevent it from saving or loading."]})}),"\n",(0,r.jsx)(t.h2,{id:"svg-extruder-component",children:"SVG Extruder Component"}),"\n",(0,r.jsxs)(t.p,{children:["This component accepts a ",(0,r.jsx)(t.code,{children:"svgString"})," and creates a new entity with geometry extruded from the svg and applies the default mixin material grass."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:'newEl = document.createElement(\'a-entity\')\nnewEl.setAttribute(\'svg-extruder\', `svgString: <svg id="traffic-circle-svg" width="1562" height="1722" viewBox="0 0 1562 1722" fill="none" xmlns="http://www.w3.org/2000/svg">\n            <circle cx="747" cy="884" r="376" fill="white"/>\n            <path d="M170 921C110.447 960.339 73.1658 978.46 0 1004L24 1070.5C87.6715 1053.2 126.721 1054.53 200.5 1070.5C180.691 1013.73 173.793 981.04 170 921Z" fill="white"/>\n            <path d="M920.5 16.5L873 0C826.761 111.5 798.791 179.933 747 307.5C818.049 307.14 904.5 334 904.5 334C896.322 273.342 871.658 119.714 920.5 16.5Z" fill="white"/>\n            <path d="M1562 797C1475.23 805.17 1419.94 800.652 1310 777C1322.14 822.934 1324.73 853.264 1326 911C1426.16 863.684 1479.82 844.12 1562 847V797Z" fill="white"/>\n            <path d="M832 1467C782.879 1472.52 753.742 1472.69 697 1467C729.414 1550.35 751.819 1619.31 761 1722H803.5C806.545 1646.07 790.668 1543.99 832 1467Z" fill="white"/>\n        </svg>`)\nnewEl.setAttribute(\'data-layer-name\', \'SVG Path \u2022 My Custom Path\')\nparentEl = document.querySelector(\'#street-container\')\nparentEl.appendChild(newEl)\n'})}),"\n",(0,r.jsx)(t.h2,{id:"mapbox-aerial-imagery",children:"Mapbox Aerial Imagery"}),"\n",(0,r.jsx)(t.p,{children:"This component accepts a long / lat and renders a plane with dimensions that (should be) at a correct scale."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"newEl = document.createElement('a-entity')\nnewEl.setAttribute('geometry', 'primitive: plane; width: 512; height: 512;')\nnewEl.setAttribute('rotation', '-90 0 0')\nnewEl.setAttribute('mapbox', 'center: -122.417490, 37.765190; zoom: 18; accessToken: pk.eyJ1Ijoia2llcmFuZmFyciIsImEiOiJjazB0NWh2YncwOW9rM25sd2p0YTlxemk2In0.mLl4sNGDFbz_QXk0GIK02Q; style: mapbox://styles/mapbox/satellite-streets-v11; pxToWorldRatio: 4;')\nnewEl.setAttribute('data-layer-name', 'Aerial Imagery \u2022 Mapbox Satellite')\nparentEl = document.querySelector('#reference-layers')\nparentEl.appendChild(newEl)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"custom-gltf-model",children:"Custom glTF Model"}),"\n",(0,r.jsx)(t.p,{children:"This component accepts a path for a glTF (or glb) file hosted on any publicly accessible HTTP server."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"newEl = document.createElement('a-entity')\nnewEl.setAttribute('gltf-model', 'url(https://cdn.glitch.global/690c7ea3-3f1c-434b-8b8d-3907b16de83c/Mission_Bay_school_low_poly_model_v03_draco.glb?v=1709051557725)')\nnewEl.setAttribute('data-layer-name', 'glTF Model \u2022 My Custom Object')\nparentEl = document.querySelector('#street-container')\nparentEl.appendChild(newEl)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"add-streetmix-street-non-destructively",children:"Add Streetmix Street Non-Destructively"}),"\n",(0,r.jsx)(t.p,{children:"This code snippet allows the creation of an additional Streetmix street in your 3DStreet scene without replacing any existing streets."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"newEl = document.createElement('a-entity')\nnewEl.setAttribute('streetmix-loader', 'streetmixStreetURL: https://streetmix.net/kfarr/128/owens-st')\nparentEl = document.querySelector('#street-container')\nparentEl.appendChild(newEl)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"add-a-primitive-geometry-from-a-frame",children:"Add a Primitive Geometry from A-Frame"}),"\n",(0,r.jsxs)(t.p,{children:["This code snippet allows the creation of an ",(0,r.jsx)(t.a,{href:"https://aframe.io/docs/1.5.0/components/geometry.html",children:"arbitrary geometry shape from this list"}),"."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"newEl = document.createElement('a-entity')\nnewEl.setAttribute('geometry', 'primitive: circle; radius: 50;')\nnewEl.setAttribute('rotation', '-90 0 0')\nnewEl.setAttribute('data-layer-name', 'Plane Geometry \u2022 Traffic Circle Asphalt')\nnewEl.setAttribute('material', 'src: #asphalt-texture; repeat: 5 5;')\nparentEl = document.querySelector('#street-container')\nparentEl.appendChild(newEl)\n"})}),"\n",(0,r.jsx)(t.h2,{id:"google-3d-map-tiles",children:"Google 3D Map Tiles"}),"\n",(0,r.jsx)(t.p,{children:"This code snippet adds an entity to load and display 3d tiles from Google Maps Tiles API 3D Tiles endpoint. This will break your scene and you cannot save it yet, so beware before testing."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"document.body.appendChild(document.createElement('script')).src = 'https://cdn.jsdelivr.net/npm/3dstreet@0.4.12/src/lib/aframe-loader-3dtiles-component.min.js';\ndocument.querySelector('#reference-layers').innerHTML = `\n<a-entity id=\"tileset\" data-no-pause \n    data-layer-name=\"Aerial Imagery \u2022 Google 3D Tiles\"\n    loader-3dtiles=\"\n        lat: 37.77522354250163;\n        long: -122.41931773049723;\n        height: -16.5;\n        url: https://tile.googleapis.com/v1/3dtiles/root.json; googleApiKey: AIzaSyAQshwLVKTpwTfPJxFEkEzOdP_cgmixTCQ; geoTransform: WGS84Cartesian; maximumSSE: 48; maximumMem: 400; cameraEl: #camera\">\n      </a-entity>`\ndocument.querySelector('#tileset').play()\n"})})]})}function m(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>i});var r=n(7294);const a={},o=r.createContext(a);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);