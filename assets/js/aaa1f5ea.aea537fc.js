"use strict";(self.webpackChunk_3dstreet_docs=self.webpackChunk_3dstreet_docs||[]).push([[4474],{3903:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var n=i(5893),s=i(1151);const a={title:"Creating Augmented Reality Street Scenes with Streetmix, 3DStreet and Adobe Aero",description:"End-to-end street design to augmented reality (AR) visualization workflow.",authors:"mschlossberg",tags:["webxr","gltf","adobe aero","streetmix","ar","vps","localization"],image:"./images/2024-01-30/sZPPzIEDdoKCLolneDd8-145.05.png",hide_table_of_contents:!1},r=void 0,o={permalink:"/blog/2024/02/19/staff-pick-burrito-plan-for-valencia-street-san-francisco",source:"@site/blog/2024-02-19-staff-pick-burrito-plan-for-valencia-street-san-francisco.md",title:"Creating Augmented Reality Street Scenes with Streetmix, 3DStreet and Adobe Aero",description:"End-to-end street design to augmented reality (AR) visualization workflow.",date:"2024-02-19T00:00:00.000Z",formattedDate:"February 19, 2024",tags:[{label:"webxr",permalink:"/blog/tags/webxr"},{label:"gltf",permalink:"/blog/tags/gltf"},{label:"adobe aero",permalink:"/blog/tags/adobe-aero"},{label:"streetmix",permalink:"/blog/tags/streetmix"},{label:"ar",permalink:"/blog/tags/ar"},{label:"vps",permalink:"/blog/tags/vps"},{label:"localization",permalink:"/blog/tags/localization"}],readingTime:4.11,hasTruncateMarker:!0,authors:[{name:"Marc Schlossberg",title:"Professor, City & Regional Planning, University of Oregon",url:"https://pppm.uoregon.edu/directory/profiles/all/schlossb",imageURL:"https://pppm.uoregon.edu/sites/pppm1.uoregon.edu/files/uo_profiles/schlossb4d2e43.jpg",key:"mschlossberg"}],frontMatter:{title:"Creating Augmented Reality Street Scenes with Streetmix, 3DStreet and Adobe Aero",description:"End-to-end street design to augmented reality (AR) visualization workflow.",authors:"mschlossberg",tags:["webxr","gltf","adobe aero","streetmix","ar","vps","localization"],image:"./images/2024-01-30/sZPPzIEDdoKCLolneDd8-145.05.png",hide_table_of_contents:!1},unlisted:!1,nextItem:{title:"Creating Augmented Reality Street Scenes with Streetmix, 3DStreet and Adobe Aero",permalink:"/blog/2024/01/30/creating-augmented-reality-ar-scenes-with-streetmix-3dstreet-adobe-aero"}},l={image:i(1350).Z,authorsImageUrls:[void 0]},d=[{value:"Getting Started: Measuring and Designing",id:"getting-started-measuring-and-designing",level:2},{value:"Viewing Your Creation: 3DStreet&#39;s Magic",id:"viewing-your-creation-3dstreets-magic",level:2},{value:"Optional Tweaks: A Blender Bonus",id:"optional-tweaks-a-blender-bonus",level:2},{value:"Bringing It to Life: Augmented Reality Integration",id:"bringing-it-to-life-augmented-reality-integration",level:2},{value:"Sharing Your Vision: Universal Access",id:"sharing-your-vision-universal-access",level:2},{value:"Wrapping It Up",id:"wrapping-it-up",level:2}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",img:"img",p:"p",strong:"strong",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5117).Z+"",width:"640",height:"360"})}),"\n",(0,n.jsx)(t.h2,{id:"getting-started-measuring-and-designing",children:"Getting Started: Measuring and Designing"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(7695).Z+"",width:"640",height:"360"}),(0,n.jsx)(t.strong,{children:"First things first\u2014measure up!"})]}),"\n",(0,n.jsx)(t.p,{children:"To kick things off, you need to know how wide your street is. This is more straightforward than it sounds: just pop over to Google Street View or use an aerial photo, and get an approximate measurement. It's okay if it's not pinpoint accurate \u2014 we just need a ballpark figure."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Crafting Your Street: Easy as Pie with Streetmix"})}),"\n",(0,n.jsx)(t.p,{children:"Once you've got your measurements, it's time to jump onto Streetmix\u2014a free, user-friendly online tool that lets you reimagine that street space to your heart's content. Want to add bike lanes, benches, or green spaces? Simply drag and drop the elements you want to include, adjusting the widths to fit your street\u2019s dimensions. Here\u2019s where your creativity shines!"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(4613).Z+"",width:"640",height:"360"}),"For my project, I took a standard residential street and turned it into a car-free park, a delightful haven for community gatherings. Imagine that \u2014 but on your block! Feel free to start with the street I made - Demo St.: ",(0,n.jsx)(t.a,{href:"https://streetmix.net/schlossb/20/demo-st",children:"https://streetmix.net/schlossb/20/demo-st"})]}),"\n",(0,n.jsx)(t.h2,{id:"viewing-your-creation-3dstreets-magic",children:"Viewing Your Creation: 3DStreet's Magic"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(8957).Z+"",width:"640",height:"360"})}),"\n",(0,n.jsxs)(t.p,{children:["With your design all set in Streetmix, it's time to give it a touch of 3D flair. 3DStreet is a fantastic plugin that lets you visualize your newly designed street in all its three-dimensional glory. Explore your virtual environment, tweak and tune each element until you\u2019re satisfied. It's a mini-adventure in urban planning from the comfort of your screen! You can go straight to my Demo St. in 3DStreet as well: ",(0,n.jsx)(t.a,{href:"https://3dstreet.app/#https://streetmix.net/schlossb/20/demo-st",children:"https://3dstreet.app/#https://streetmix.net/schlossb/20/demo-st"})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Trimming the Excess for AR"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(366).Z+"",width:"640",height:"360"})}),"\n",(0,n.jsx)(t.p,{children:"To prep for AR, you'll want to peel away the layers that aren\u2019t needed\u2014like buildings, to keep things neat. After simplifying, you can then export your model directly into a format that's ready for the world of augmented reality."}),"\n",(0,n.jsxs)(t.p,{children:['To delete a layer, select the layer in the left-hand panel -- such as "Buildings & Blocks Container" in the screenshot above -- then press the ',(0,n.jsx)(t.code,{children:"delete"})," key and click ",(0,n.jsx)(t.code,{children:"ok"}),". This will remove buildings and grounds from lots that are not needed for our AR project."]}),"\n",(0,n.jsx)(t.h2,{id:"optional-tweaks-a-blender-bonus",children:"Optional Tweaks: A Blender Bonus"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(3872).Z+"",width:"640",height:"360"}),"For the enthusiasts out there who relish fine-tuning, the free software Blender is your playground. Here, you can manipulate your 3D model to perfection. However, remember this is purely optional\u2014the process is meant to be quick and streamlined."]}),"\n",(0,n.jsx)(t.h2,{id:"bringing-it-to-life-augmented-reality-integration",children:"Bringing It to Life: Augmented Reality Integration"}),"\n",(0,n.jsxs)(t.p,{children:["Alright, now to the magical part\u2014transferring your 3D model to an augmented reality software. I personally use ",(0,n.jsx)(t.a,{href:"https://www.adobe.com/products/aero.html",children:"Adobe Aero"}),', thanks to the site license at the university, but there are other AR apps you can explore. This step allows you to add animations and make your scene come alive, although again, this step is not necessary for the "quick and dirty" path.']}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(6092).Z+"",width:"640",height:"360"})}),"\n",(0,n.jsx)(t.p,{children:"AR software opens with an empty workspace and, at least in Aero, you can simply drag and drop your 3D file onto the workspace and the whole thing magically appears. In many ways it will look exactly like it did in 3DStreet."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Geolocation: Pinning It to the Real World"})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.img,{src:i(2625).Z+"",width:"640",height:"360"}),"What\u2019s truly remarkable with software like Adobe Aero is the ability to anchor your AR scene to a precise location on Earth. While this grounds your creation to a specific spot, it's not mandatory; you can always opt to apply your scene freely to any street you wish."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(5117).Z+"",width:"640",height:"360"})}),"\n",(0,n.jsx)(t.h2,{id:"sharing-your-vision-universal-access",children:"Sharing Your Vision: Universal Access"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(3975).Z+"",width:"640",height:"360"})}),"\n",(0,n.jsx)(t.p,{children:"Once your AR scene is polished and ready, you create a shareable link through Adobe Aero. Anyone with this link can open it on their mobile device, head to the designated street, and behold\u2014your digital transformation materializes before their eyes."}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"\"Your street is transformed into your scene that you can actually walk through and see what it would look like on your street, and you can go forward, backward, see all the different things that you've done, and really start to reimagine, well, what would this street look like if it wasn't a street as has been, but is actually a park, a place for people in this particular example?\""}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(7812).Z+"",width:"164",height:"360"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(3543).Z+"",width:"167",height:"360"})}),"\n",(0,n.jsx)(t.p,{children:"To illustrate, envision wandering through the park that was once just a plain street\u2014all through the magic of AR. Moving forward or backward, the entire scene is interactive and truly a game-changer for community engagement and urban design."}),"\n",(0,n.jsx)(t.h2,{id:"wrapping-it-up",children:"Wrapping It Up"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:i(6120).Z+"",width:"165",height:"360"})}),"\n",(0,n.jsx)(t.p,{children:"And there you have it\u2014a dynamic overview of transforming streets with AR using some clever tools and a pinch of imagination. Not so intimidating now, right? With mostly free resources and a little bit of time, you can be on your way to designing, exploring, and sharing augmented realities that could pave the way for how we perceive and utilize our shared spaces."}),"\n",(0,n.jsx)(t.p,{children:"Until next time, happy designing and thanks for joining me on this digital adventure. Bye for now!"}),"\n",(0,n.jsx)(t.h1,{id:"video-version-of-this-post",children:"Video version of this post"}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/AP1CwWuD7uA?si=y2_qAYNtR9HpATAl",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1350:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/sZPPzIEDdoKCLolneDd8-145.05-2b18a10c24f8055f5cf44db93afee86e.png"},3543:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/0ek0kL6ZzdbicjxigM67-181.43-22c585226e335ee1b14b58e95f808d17.png"},8957:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/29P0QTWEp8JbvCQ8PeH3-63.32-928dbe2dd89a827b1be96ce08a2405c4.png"},366:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/IkXMBseXhrpqImEJSANN-73.23-6ef8699ad042fd310f99859136492bb0.png"},4613:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/J7eHGPI8MA57Pyzgsd8i-41.61-d8f2c4d7d54a990318659f4ac3f4bdbc.png"},3975:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/KffxVJZ1prku9AeBBemu-158.27-35b296c693dca9c18355a51cd4cec663.png"},2625:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/M5vycvy2ClFbSLnLm6FY-133.23-1df718f2655ad0733ab2392a4b55bf57.png"},6120:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/SjGd11l5Keu216ORRZav-189.75-a07c9c70fba466aa3c58909d4c55a87b.png"},7812:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/XP1Nfq1sugGz8zrILMJb-179.54-ef26283fc536ad6544d4f738185a220f.png"},3872:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/kmXnEg7FMoHUxW0GgLiu-95.91-578b25b18098f554dd052bb2c580bdaa.png"},7695:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/lVthCNUM7YLUyBGXixqk-10.87-80c85fce3c339171a8196f2efa2d7431.png"},5117:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/sZPPzIEDdoKCLolneDd8-145.05-2b18a10c24f8055f5cf44db93afee86e.png"},6092:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/tSVcvVL1kH92J4F4ALF8-112.94-b8f411524c96f6c05320da8bb061eba1.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>r});var n=i(7294);const s={},a=n.createContext(s);function r(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);