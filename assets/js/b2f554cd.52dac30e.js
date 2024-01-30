"use strict";(self.webpackChunk_3dstreet_docs=self.webpackChunk_3dstreet_docs||[]).push([[1477],{10:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"/2024/01/30/creating-augmented-reality-ar-scenes-with-streetmix-3dstreet-adobe-aero","metadata":{"permalink":"/blog/2024/01/30/creating-augmented-reality-ar-scenes-with-streetmix-3dstreet-adobe-aero","source":"@site/blog/2024-01-30-creating-augmented-reality-ar-scenes-with-streetmix-3dstreet-adobe-aero.md","title":"Creating Augmented Reality Street Scenes with Streetmix, 3DStreet and Adobe Aero","description":"End-to-end street design to augmented reality (AR) visualization workflow.","date":"2024-01-30T00:00:00.000Z","formattedDate":"January 30, 2024","tags":[{"label":"webxr","permalink":"/blog/tags/webxr"},{"label":"gltf","permalink":"/blog/tags/gltf"},{"label":"adobe aero","permalink":"/blog/tags/adobe-aero"},{"label":"streetmix","permalink":"/blog/tags/streetmix"},{"label":"ar","permalink":"/blog/tags/ar"},{"label":"vps","permalink":"/blog/tags/vps"},{"label":"localization","permalink":"/blog/tags/localization"}],"readingTime":4.455,"hasTruncateMarker":true,"authors":[{"name":"Marc Schlossberg","title":"Professor, City & Regional Planning, University of Oregon","url":"https://pppm.uoregon.edu/directory/profiles/all/schlossb","imageURL":"https://pppm.uoregon.edu/sites/pppm1.uoregon.edu/files/uo_profiles/schlossb4d2e43.jpg","key":"mschlossberg"}],"frontMatter":{"title":"Creating Augmented Reality Street Scenes with Streetmix, 3DStreet and Adobe Aero","description":"End-to-end street design to augmented reality (AR) visualization workflow.","authors":"mschlossberg","tags":["webxr","gltf","adobe aero","streetmix","ar","vps","localization"],"image":"./images/2024-01-30/sZPPzIEDdoKCLolneDd8-145.05.png","hide_table_of_contents":false},"unlisted":false,"nextItem":{"title":"Partner Spotlight: Zade\'s Contributions to 3DStreet in 2023","permalink":"/blog/2024/01/29/partner-spotlight-zade"}},"content":"![](./images/2024-01-30/sZPPzIEDdoKCLolneDd8-145.05.png)\\n\\nGreetings! I\'m Marc Schlossberg, and I\'ve been working alongside [Danny Pimentel](https://journalism.uoregon.edu/directory/faculty-and-staff/all/pimend) and graduate student [Luke Walker](https://www.linkedin.com/in/luke-walker-439b78119/) at the University of Oregon on an exciting project: crafting augmented reality (AR) landscapes for our streets. What I have here is a practical, step-by-step guide designed to walk you through how to bring this innovative vision to your own neighborhood. So, let\'s roll up our sleeves and get our hands digitally dirty!\\n\\n\x3c!-- truncate --\x3e\\n## Getting Started: Measuring and Designing\\n\\n![](./images/2024-01-30/lVthCNUM7YLUyBGXixqk-10.87.png)**First things first\u2014measure up!**\\n\\nTo kick things off, you need to know how wide your street is. This is more straightforward than it sounds: just pop over to Google Street View or use an aerial photo, and get an approximate measurement. It\'s okay if it\'s not pinpoint accurate \u2014 we just need a ballpark figure.\\n\\n**Crafting Your Street: Easy as Pie with Streetmix**\\n\\nOnce you\'ve got your measurements, it\'s time to jump onto Streetmix\u2014a free, user-friendly online tool that lets you reimagine that street space to your heart\'s content. Want to add bike lanes, benches, or green spaces? Simply drag and drop the elements you want to include, adjusting the widths to fit your street\u2019s dimensions. Here\u2019s where your creativity shines!\\n\\n![](./images/2024-01-30/J7eHGPI8MA57Pyzgsd8i-41.61.png)For my project, I took a standard residential street and turned it into a car-free park, a delightful haven for community gatherings. Imagine that \u2014 but on your block! Feel free to start with the street I made - Demo St.: https://streetmix.net/schlossb/20/demo-st \\n\\n## Viewing Your Creation: 3DStreet\'s Magic\\n\\n![](./images/2024-01-30/29P0QTWEp8JbvCQ8PeH3-63.32.png)\\n\\nWith your design all set in Streetmix, it\'s time to give it a touch of 3D flair. 3DStreet is a fantastic plugin that lets you visualize your newly designed street in all its three-dimensional glory. Explore your virtual environment, tweak and tune each element until you\u2019re satisfied. It\'s a mini-adventure in urban planning from the comfort of your screen! You can go straight to my Demo St. in 3DStreet as well: https://3dstreet.app/#https://streetmix.net/schlossb/20/demo-st \\n\\n**Trimming the Excess for AR**\\n\\n![](./images/2024-01-30/IkXMBseXhrpqImEJSANN-73.23.png)\\n\\nTo prep for AR, you\'ll want to peel away the layers that aren\u2019t needed\u2014like buildings, to keep things neat. After simplifying, you can then export your model directly into a format that\'s ready for the world of augmented reality.\\n\\nTo delete a layer, select the layer in the left-hand panel -- such as \\"Buildings & Blocks Container\\" in the screenshot above -- then press the `delete` key and click `ok`. This will remove buildings and grounds from lots that are not needed for our AR project.\\n\\n## Optional Tweaks: A Blender Bonus\\n\\n![](./images/2024-01-30/kmXnEg7FMoHUxW0GgLiu-95.91.png)For the enthusiasts out there who relish fine-tuning, the free software Blender is your playground. Here, you can manipulate your 3D model to perfection. However, remember this is purely optional\u2014the process is meant to be quick and streamlined.\\n\\n## Bringing It to Life: Augmented Reality Integration\\n\\nAlright, now to the magical part\u2014transferring your 3D model to an augmented reality software. I personally use [Adobe Aero](https://www.adobe.com/products/aero.html), thanks to the site license at the university, but there are other AR apps you can explore. This step allows you to add animations and make your scene come alive, although again, this step is not necessary for the \\"quick and dirty\\" path.\\n\\n![](./images/2024-01-30/tSVcvVL1kH92J4F4ALF8-112.94.png)\\n\\nAR software opens with an empty workspace and, at least in Aero, you can simply drag and drop your 3D file onto the workspace and the whole thing magically appears. In many ways it will look exactly like it did in 3DStreet.\\n\\n**Geolocation: Pinning It to the Real World**\\n\\n![](./images/2024-01-30/M5vycvy2ClFbSLnLm6FY-133.23.png)What\u2019s truly remarkable with software like Adobe Aero is the ability to anchor your AR scene to a precise location on Earth. While this grounds your creation to a specific spot, it\'s not mandatory; you can always opt to apply your scene freely to any street you wish.\\n\\n![](./images/2024-01-30/sZPPzIEDdoKCLolneDd8-145.05.png)\\n\\n## Sharing Your Vision: Universal Access\\n\\n![](./images/2024-01-30/KffxVJZ1prku9AeBBemu-158.27.png)\\n\\nOnce your AR scene is polished and ready, you create a shareable link through Adobe Aero. Anyone with this link can open it on their mobile device, head to the designated street, and behold\u2014your digital transformation materializes before their eyes.\\n\\n> \\"Your street is transformed into your scene that you can actually walk through and see what it would look like on your street, and you can go forward, backward, see all the different things that you\'ve done, and really start to reimagine, well, what would this street look like if it wasn\'t a street as has been, but is actually a park, a place for people in this particular example?\\"\\n\\n![](./images/2024-01-30/XP1Nfq1sugGz8zrILMJb-179.54.png)\\n\\n![](./images/2024-01-30/0ek0kL6ZzdbicjxigM67-181.43.png)\\n\\nTo illustrate, envision wandering through the park that was once just a plain street\u2014all through the magic of AR. Moving forward or backward, the entire scene is interactive and truly a game-changer for community engagement and urban design.\\n\\n## Wrapping It Up\\n\\n![](./images/2024-01-30/SjGd11l5Keu216ORRZav-189.75.png)\\n\\nAnd there you have it\u2014a dynamic overview of transforming streets with AR using some clever tools and a pinch of imagination. Not so intimidating now, right? With mostly free resources and a little bit of time, you can be on your way to designing, exploring, and sharing augmented realities that could pave the way for how we perceive and utilize our shared spaces.\\n\\nUntil next time, happy designing and thanks for joining me on this digital adventure. Bye for now!\\n\\n# Video version of this post\\n<iframe width=\\"560\\" height=\\"315\\" src=\\"https://www.youtube.com/embed/AP1CwWuD7uA?si=y2_qAYNtR9HpATAl\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>"},{"id":"/2024/01/29/partner-spotlight-zade","metadata":{"permalink":"/blog/2024/01/29/partner-spotlight-zade","source":"@site/blog/2024-01-29-partner-spotlight-zade.md","title":"Partner Spotlight: Zade\'s Contributions to 3DStreet in 2023","description":"A spotlight on the contributions to 3DStreet from the software development team at Zade.","date":"2024-01-29T00:00:00.000Z","formattedDate":"January 29, 2024","tags":[{"label":"react","permalink":"/blog/tags/react"},{"label":"development","permalink":"/blog/tags/development"},{"label":"partner","permalink":"/blog/tags/partner"},{"label":"devshop","permalink":"/blog/tags/devshop"},{"label":"web","permalink":"/blog/tags/web"},{"label":"developer","permalink":"/blog/tags/developer"}],"readingTime":2.74,"hasTruncateMarker":true,"authors":[{"name":"Kieran Farr","title":"Creator of 3DStreet","url":"https://github.com/kfarr","imageURL":"https://github.com/kfarr.png","key":"kfarr"},{"name":"Ivan Denysyuk","title":"CEO at Zade","url":"https://www.linkedin.com/in/ivan-denysyuk-171585148/","imageURL":"https://media.licdn.com/dms/image/C4E03AQFalzhqOpaXYw/profile-displayphoto-shrink_800_800/0/1650363550337?e=1712188800&v=beta&t=z1C-cetFrHoP5ao_i9cLsJmCi3quhrcZ0kmhd9OGz3s","key":"idenysyuk"}],"frontMatter":{"title":"Partner Spotlight: Zade\'s Contributions to 3DStreet in 2023","description":"A spotlight on the contributions to 3DStreet from the software development team at Zade.","authors":["kfarr","idenysyuk"],"tags":["react","development","partner","devshop","web","developer"],"image":"https://i.imgur.com/YyKGZA7.jpeg","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Creating Augmented Reality Street Scenes with Streetmix, 3DStreet and Adobe Aero","permalink":"/blog/2024/01/30/creating-augmented-reality-ar-scenes-with-streetmix-3dstreet-adobe-aero"},"nextItem":{"title":"Impact on WebXR Application Design from New Mixed Reality Headsets","permalink":"/blog/2023/12/29/new-mixed-reality-devices-impact-on-webxr"}},"content":"2023 marks a significant year for 3DStreet, made possible through our [talented community of contributors](https://github.com/3DStreet/3dstreet/graphs/contributors) both volunteer and paid. [Zade Agency](https://zade.agency/) fits in the latter category as a software development team for-hire based in Ukraine. Over the past year Zade emerged as a major boost to our development productivity and I wanted to share how their contributions have helped 3DStreet in a critical time for the organization.\\n\\n\x3c!-- truncate --\x3e\\n\\n### The Challenge for 3DStreet\\nTo meet our timeline for a [public beta launch of 3DStreet Editor in 2023](https://www.youtube.com/watch?v=WnjtUW4J8uc), we faced several challenges. A primary concern was the gap in React expertise among our existing development team. While we are skilled in various aspects, existing React knowledge was crucial for implementing deep and rapid modifications to [3DStreet Editor](https://github.com/3DStreet/3dstreet-editor) which is a heavily modified version of the [A-Frame inspector](https://github.com/aframevr/aframe-inspector). \\n\\nAdditionally, as a [self-funded project](https://www.3dstreet.org/docs/about-3dstreet/3dstreet-llc-entity) we have very real budgetary constraints making it imperative to optimize every resource. \\n\\n### Zade\'s Solution to Boost React Development\\n\\nWe found Zade through a direct personal referral via our designer [Daria Dombrovska](https://www.linkedin.com/in/daria-dombrovska-933902207/). Zade immediately brought a wealth of React knowledge through their team of both senior and junior engineers, filling the crucial skill gap in our team.\\n\\nAs a self-trained software developer myself, I worked directly with a senior engineer at the beginning to confirm our architectural approaches and details of our tech stack. I also worked with our account manager to agree on the use of [GitHub Projects, issues, and PRs](https://github.com/orgs/3DStreet/projects/5) to manage our working relationship.\\n\\nFor day-to-day tasks I create [GitHub issues](https://github.com/3DStreet/3dstreet-editor/issues/) that are prioritized in [Projects](https://github.com/orgs/3DStreet/projects/5) and tackled via a junior engineer who is mentored by the experienced staff. Even as a junior engineer, they have way more experience in React fundamentals than I do given my [rather myopic focus on A-Frame and three.js development](https://twitter.com/search?q=%22aframevr%22%20(from%3Akfarr)&f=live) over the past decade.\\n\\n### 2023 Highlight: Launching 3DStreet Cloud\\n\\nOne of the most notable achievements in 2023 was the [launch of 3DStreet Cloud](https://www.youtube.com/watch?v=WnjtUW4J8uc), a React application using [Firebase Firestore](https://firebase.google.com/docs/firestore) on [Google Cloud Platform](https://cloud.google.com/).\\n\\n3DStreet Cloud is the foundation of the growth engine of the [3DStreet Editor product](https://3dstreet.app/) -- it is the system that allows our users to collaborate on safe street designs and fulfill our core mission.\\n\\n### Zade: Empowering Startups with React Expertise\\n\\nNow it\'s time for the pitch, because the Zade team deserves it!\\n\\nAre you an early-stage startup founder needing flexible React development solutions? Zade specializes in helping launch new startups and accelerating growth for existing ones. Their unique ecosystem is tailor-made for product development in the startup world.\\n\\n**Zade\'s Offerings:**\\n- [**LaunchKit:**](https://zade.agency/launchkit/) A program designed to bring your vision to life within a month.\\n- **Integrated Team:** Seamlessly scale your startup with Zade\'s integrated design and development team.\\n\\n**Special Offer for 3DStreet Community:**\\nWhile there\'s no such thing as a free lunch in contract development, Zade extends a special offer to the 3DStreet community. Mention 3DStreet to receive a 15% discount on your first month with Zade \u2013 a deal that might just be more valuable than a few gourmet lunches, depending on your project\'s scale.\\n\\n### Connect with Zade\\nInterested in learning more? Reach out to Zade at ivan@zade.agency, or contact me directly for an introduction. Let\'s embark on a journey of innovation and growth together with Zade\'s expert team!"},{"id":"/2023/12/29/new-mixed-reality-devices-impact-on-webxr","metadata":{"permalink":"/blog/2023/12/29/new-mixed-reality-devices-impact-on-webxr","source":"@site/blog/2023-12-29-new-mixed-reality-devices-impact-on-webxr.md","title":"Impact on WebXR Application Design from New Mixed Reality Headsets","description":"What changes should WebXR developers consider to their application given new devices coming to market?","date":"2023-12-29T00:00:00.000Z","formattedDate":"December 29, 2023","tags":[{"label":"webxr","permalink":"/blog/tags/webxr"},{"label":"headset","permalink":"/blog/tags/headset"},{"label":"mixed-reality","permalink":"/blog/tags/mixed-reality"},{"label":"ar","permalink":"/blog/tags/ar"},{"label":"vr","permalink":"/blog/tags/vr"}],"readingTime":4.385,"hasTruncateMarker":true,"authors":[{"name":"Kieran Farr","title":"Creator of 3DStreet","url":"https://github.com/kfarr","imageURL":"https://github.com/kfarr.png","key":"kfarr"}],"frontMatter":{"title":"Impact on WebXR Application Design from New Mixed Reality Headsets","description":"What changes should WebXR developers consider to their application given new devices coming to market?","authors":"kfarr","tags":["webxr","headset","mixed-reality","ar","vr"],"image":"./images/visionOS-platform-compressed.jpg","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Partner Spotlight: Zade\'s Contributions to 3DStreet in 2023","permalink":"/blog/2024/01/29/partner-spotlight-zade"},"nextItem":{"title":"Creating novel 3D scenes by compositing Gaussian splats with A-Frame and three.js","permalink":"/blog/2023/12/21/gaussian-splat-compositing-for-constructed-street-scenes"}},"content":"A few weeks ago I attended a \\"developer day\\" at a local electronics company down the road featuring their new mixed reality VR headset. I spent the entire day testing many different WebXR applications with a heavy focus on evaluating which user interaction elements will be relevant for developers.\\n\\nBelow are some notes intended for other 3DStreet code contributors to reference as we work on supporting new WebXR compatible devices.\\n\\n\x3c!-- truncate --\x3e\\n\\n## Gaze works very well as a primary user input mechanism\\nGaze interaction *\\"just works\\"* for native applications in this headset, however it\'s a privacy nightmare as gaze movement can be use to fingerprint (identify) individuals for tracking purposes, so that information isn\'t even given to native application. \\n\\nTo enable gaze user interface while not exposing gaze to the application, apps need to provide \\"hot spots\\" or hints as to areas that can be hovered. [There is a great video guide on how to adapt 2D DOM CSS website for gaze highlight interaction](https://developer.apple.com/videos/play/wwdc2023/10279/), but there\'s no clear equivalent to this CSS hinting that can be done in the WebXR \\"3D DOM\\" or 3D space. The need has been recognized however, [there is a new ticket opened in the WebXR `immersive-web` GitHub repository that I recently added to.](https://github.com/immersive-web/proposals/issues/86)\\n\\n## Hand tracking is the most accessible input, not controllers\\nImagine a world where WebXR experiences are 100% hands-free, where a simple ray from the wrist and a pitch of the hand can activate functions. This is not just a possibility but now a necessity -- going forward, all WebXR experiences must be accessible via hands first.\\n\\nWe should now regard hand tracking as the \\"lowest common denominator\\" of user input for headset experiences. Controllers will still offer higher precision, off-camera movement tracking, more button trigger inputs, etc. but they are no longer the most accessible \\"default\\" option.\\n\\n## Launching WebXR applications\\nGetting WebXR working on this device is cumbersome. WebXR must be activated by searching through multiple Safari flags (System Settings > Apps > Safari > Blah blah blah). Then, on the web page itself a user must accept 2 separate approval popups when entering WebXR mode -- one for enabling immersive mode, the other for enabling hand tracking.\\n\\nIt may be possible to \\"pull\\" some advanced users into using WebXR on these devices with instruction on feature flag setting, but it will be impossible to use WebXR on this platform to \\"push\\" more people to your WebXR experience in its present form.\\n\\n## Space, Immersion and Passthrough with WebXR\\nIn WebXR mode on the device, a scene is rendered in _Full Space_ meaning no other application windows are present, unlike native apps that can choose to run in _Shared Space_ amongst other applications. An additional limitation is that the device does not currently support WebXR with _Passthrough_ mode, therefore you cannot run WebAR apps that make use of external cameras.\\n\\n*Therefore only your WebXR scene will appear in _Full Space_ immersion mode with no _Passthrough_.* This may be desirable for traditional VR applications but not as useful for next generation mixed reality applications.\\n\\nAn additional limitation is that WebXR Immersive mode is limited to a 1.5m radius from the user-specified origin, usually where the user was located when entering XR mode. Beyond this radius the immersive scene _Full Space_ begins fading into _Passthrough_ without the scene persisting. If a user continues moving away from the origin the will see a round Safari icon at the origin point, presumably indicating that the user has an open WebXR Safari session with an origin at that point.\\n\\n## Diorama vs. Full Room Scale\\nThe [visionOS developer documentation](https://developer.apple.com/documentation/visionos/) is excellent and signals clear directions for the market.\\n\\nThe Diorama appears to be major application interface concept, [featured as a sample application](https://developer.apple.com/documentation/visionos/diorama) and a prime example of output from the new Reality Composer Pro authoring tool.\\n\\nThis is a useful concept to adopt with 3DStreet. With 3DStreet there are cases for both Diorama and Full Scale modes: some users may wish to view a scene in Full Scale life-size to get an accurate viewpoint of dimension, while other users may wish to shrink a scene down to a Diorama view to easily manipulate a large scene from a smaller workspace.\\n\\n## Combining WebXR with native applications\\n* Native applications can ask for rights such as _Passthrough_ or _Shared Space_ that are not currently accessible via Safari WebXR. It is definitely worth exploring the use of an embedded webkit-based webview in a visionOS application which may expand the ability for WebXR application to offer augmented reality experiences with a native-like experience.\\n* Reality Composer Pro looks like a powerful tool for non-developers. It is worth exploring a pipeline of 3DStreet > Reality Composer Pro > App Publishing. Therefore it is likely worth exploring tools to convert glTF exporting to USDZ format, or directly exporting the three.js / A-Frame scene into USDZ format.\\n\\n## Summary\\n* WebXR appears to be purposefully limited on this device with a degraded user experience. Consider webview or another mechanism to adapt WebXR application into a native app.\\n* Hand tracking is now a minimum requirement for WebXR apps, controllers are optional.\\n* Gaze interface is very effective but needs standardization work to enable in WebXR mode."},{"id":"/2023/12/21/gaussian-splat-compositing-for-constructed-street-scenes","metadata":{"permalink":"/blog/2023/12/21/gaussian-splat-compositing-for-constructed-street-scenes","source":"@site/blog/2023-12-21-gaussian-splat-compositing-for-constructed-street-scenes.md","title":"Creating novel 3D scenes by compositing Gaussian splats with A-Frame and three.js","description":"We share research and progress on improving the visual appearance of compositing new scenes from multiple splats using depth buffer and selective splat discarding.","date":"2023-12-21T00:00:00.000Z","formattedDate":"December 21, 2023","tags":[{"label":"gaussian splats","permalink":"/blog/tags/gaussian-splats"},{"label":"splats","permalink":"/blog/tags/splats"},{"label":"photogrammetry","permalink":"/blog/tags/photogrammetry"}],"readingTime":6.345,"hasTruncateMarker":true,"authors":[{"name":"Kieran Farr","title":"Creator of 3DStreet","url":"https://github.com/kfarr","imageURL":"https://github.com/kfarr.png","key":"kfarr"},{"name":"Arthur Mougin","title":"3DStreet Contributor, WebXR Developer","url":"https://github.com/arthurmougin","imageURL":"https://github.com/arthurmougin.png","key":"amougin"}],"frontMatter":{"title":"Creating novel 3D scenes by compositing Gaussian splats with A-Frame and three.js","description":"We share research and progress on improving the visual appearance of compositing new scenes from multiple splats using depth buffer and selective splat discarding.","authors":["kfarr","amougin"],"tags":["gaussian splats","splats","photogrammetry"],"image":"./splat-blog/3dstreet-splat-compositing-demo.jpg","hide_table_of_contents":false},"unlisted":false,"prevItem":{"title":"Impact on WebXR Application Design from New Mixed Reality Headsets","permalink":"/blog/2023/12/29/new-mixed-reality-devices-impact-on-webxr"}},"content":"3DStreet\'s mission is to empower anyone to visualize safer streets. A common request to support this mission is to bring in local real-life elements from your actual streets by scanning them into 3D objects. Until now, the best technology for doing this (photogrammetry to textured 3D polygons) resulted in huge file sizes, difficult to edit output files, and gooey visuals like melting trees or cars that you may see on Google Maps in 3D mode.\\n\\nEnter Gaussian Splatting -- earlier this year a groundbreaking photogrammetry and visualization technique called gaussian splatting was released as part of a [research paper published at SIGGRAPH 2023](https://repo-sam.inria.fr/fungraph/3d-gaussian-splatting/). I believe splatting to be *[the best modern method](https://www.youtube.com/watch?v=HVv_IQKlafQ)* to allow everyday users like you and me to scan 3D objects with our phones and retain the fine detail of organic material especially [plants](https://www.youtube.com/watch?v=lowscL9YIjM), [trees](https://www.youtube.com/watch?v=hr7P8_z0PSk), flowers and other natural elements -- all things we\'d like to see more of in our streets! \\n\\n![Side by side picture of the same apple tree showing 3d mesh vs. gaussian splat photogrammetry techniques](./splat-blog/3d-mesh-vs-splat.jpg)\\n\\nThis is still an R&D project, not yet a supported built-in feature of 3DStreet. In this post we share research and progress on how we are improving the visual appearance of compositing new scenes from multiple splats using depth buffer and selective splat discarding in three.js and A-Frame, underlying 3D frameworks supporting 3DStreet.\\n\\n\x3c!-- truncate --\x3e\\n\\n# A splatting explosion!\\nA slew of gaussian splat tools have come to market -- creation apps for 3D scanning with your phone ([Polycam](https://poly.cam/) and [Luma](https://lumalabs.ai/)) and viewers for every platform and device imaginable ([too many to list](https://github.com/tomiwaAdey/awesome-gaussian-splatting?tab=readme-ov-file#rendering-and-visualisation-tools)) and even [browser-based cropping and editing tools](https://playcanvas.com/super-splat).\\n\\nHowever, much of the existing gaussian splat research and development focuses on scenes with just one single large splat.\\n\\nWith 3DStreet we\'re exploring something new -- constructing brand new street scenes from bits and pieces of existing 3D splats.\\n\\n# The problem: multiple splats in three.js are Hard\\nIf we can draw one gaussian splat in our scene, why not more? Well it turns out it\'s Hard. Compositing wasn\u2019t supported yet by the existing three.js / A-Frame splat viewing libraries so it resulted in things just not good enough for people to use as a product, like this fire hydrant and tree being occluded by a flower box further away.\\n\\n![Picture of error in splat ordering resulting in distant objects incorrectly occluding closer objects](./splat-blog/splat-render-order-error.jpg)\\n\\nTo solve this problem, we collaborated with [Arthur Mougin, a WebXR and full stack developer](https://arthurmoug.in/) who was excited to tackle a new challenge. Here is his writeup on how we enabled proper splat sorting, concluded by some discussion on what is coming next.\\n\\n# Use depth buffer with `depthWrite:true`\\nAfter analyzing the shader and rendering pipeline of threejs, we identified first that we needed to have proper scene-level occlusion.\\n\\nAt the scene level, Splats are just classic opaque objects with a unique drawing method. That\u2019s great because we can take advantage of the depth buffer. It\u2019s a grayscale image that shaders use to know if their pixel below or above something that was already painted. By default, splats did not write into it, causing strange artifacts when the draw order does not match the depth order. Same thing for recursive occlusion. \\n\\nSo, we [added the ability to write the rendered splats to the depth buffer](https://github.com/3DStreet/aframe-gaussian-splatting/pull/1/commits/dfa56ea471749e4864bfdedfcdd9c7c4aac9a656) with `depthWrite:true`. Turning it on improved our occlusion issues drastically. \\n\\n![partial-splat-compositing-progress-occlusion-with-artifacts](./splat-blog/partial-splat-compositing-progress-occlusion-with-artifacts.jpg)\\n\\n# Fixing border and edge blending issues\\nSometimes the border is not completely clean, we also wanted a way to improve it. \\n\\nIt was done this time in the fragment shader, where discarding cause the pixel not to be drawn. [We compare there for each blob\u2019s pixel their opacity, and if it\u2019s lower than our limit, it\u2019s not rendered.](https://github.com/3DStreet/aframe-gaussian-splatting/pull/1/commits/00d11e42f41a2adea824008ad81283001192176a)\\n\\nThis limit, the discard filter, has no effect when set to 0, but help cleanup unnecessary blobs that could ruin a proper transition between two splats. As it applies to all splat\u2019s blobs, turning it on will impact the splats quality.\\n\\n![gaussian-splat-depth-write-true-false-comparison](./splat-blog/gaussian-splat-depth-write-true-false-comparison.jpg)\\n\\nUnfortunately there is a trade off between different methods. As you can see in this next example below. On the right is the test scene with the original A-Frame splatting component that does not respect occlusion. On the left uses depthWrite which properly sorts the occlusion of the tree, fire hydrant, and flower box, but also results in artifacts especially visible on the bottom of the flower box where it meets the sidewalk.\\n\\n![splat-compare-discard-filter-0-and-0.2](./splat-blog/splat-compare-discard-filter-0-and-0.2.jpg)\\n\\nAdjusting `discardFilter` gives you control to find the right value, however as you continue to increase the `discardFilter` value approaching 1 the splats start to develop holes in the substrate and appear to be further apart.  \\n\\n![splat-compare-discard-filter-0.1-and-0.3](./splat-blog/splat-compare-discard-filter-0.1-and-0.3.jpg)\\n\\nA partially effective mitigation for the artifacts is to tightly crop your splats using a tool like [SuperSplat from PlayCanvas](https://playcanvas.com/super-splat).\\n\\n# Updating the `aframe-gaussian-splatting` repository\\nIn the past we have been contributing changes directly to the [original A-Frame Gaussian Splat library by quadjr](https://github.com/quadjr/aframe-gaussian-splatting), and [Arthur has suggested a PR with these changes](https://github.com/quadjr/aframe-gaussian-splatting/pull/25), but we wanted to publish this piece before those are able to merged so we have forked this repo in the 3DStreet GitHub organization for now.\\n\\n#### GitHub: https://github.com/3dstreet/aframe-gaussian-splatting\\n\\n#### Demo scene (move around with `WASD` keys): https://3dstreet.github.io/splat-playground/basic/compositing-demo.html\\n\\n#### Demo scene source (also uses cutout entity): https://github.com/3DStreet/splat-playground/blob/main/basic/compositing-demo.html \\n\\n# Combining rasterization methods to add splats to 3DStreet scenes\\nNow that we have support in the library for splat compositing, it\'s time to test what these look like in 3DStreet scenes.\\n\\nWe created a sample scene that loads a 3DStreet street scene with manually placed splat entities placed around the scene in appropriate locations. This was a first attempt to see how well the splats might fit in to a scene and what changes we need to make to 3DStreet Editor to support managing these with a user interface.\\n\\nThis picture shows a side-by-side view of the splat and low-poly mesh counterparts for the hybrid sedan and bus stop.\\n![3dstreet-splat-compositing-demo](./splat-blog/3dstreet-splat-compositing-demo.jpg)\\n\\nSince each of these splats are A-Frame entities, the 3DStreet Editor can provide a quick way to move them around and arrange a custom scene.\\n![3dstreet-editor-changing-scene-compositing-gaussian-splat](./splat-blog/3dstreet-editor-changing-scene-compositing-gaussian-splat.jpg)\\n\\n# Try it for yourself\\n\\nWe\'ve created a proof of concept demo showing splats that I have scanned around San Francisco, combined with polygon mesh models automatically created from 3DStreet.\\n\\n__Example scene (move around with `WASD` keys): https://github.com/3DStreet/splat-playground/__\\n\\n:::warning\\n\\nGaussian Splats in 3DStreet is a research project. Sometimes you need to reload once or twice for the splats to look better. If you\'re really adventurous press ctl + alt + i to access Editor but saving these scenes won\'t work and it will probably break. Be careful using this for real projects.\\n\\n:::\\n\\nDoes it work in WebXR? Yes, barely -- it requires a powerful device to maintain frame rate. Quest headsets and older phones have a hard time rendering this at full framerate.\\n\\n# What\'s next\\nThis is still a research technology. Even just in the past week there was a [whole new WegGL splat viewing library released by Luma AI](https://lumalabs.ai/luma-web-library) and more research on this topic seems to drop every week. Likely the method that we\'ve come up with will be replaced with a fancy new algorithm soon.\\n\\nWe\'ll keep iterating on the applications of this technology for street safety and more general urban design use cases. If this resonates with users we can explore how to make this accessible so that all users can create custom splat scenes with models they scan from their own streets.\\n\\n[Join our community to continue the conversation!](https://discord.gg/VN242sx9qu)\\n\\n# Video version of this post\\n<iframe width=\\"580\\" height=\\"420\\" src=\\"https://www.youtube.com/embed/Fy8PefDy5VY?si=pJ7F6j_mmmA2yo31\\" title=\\"YouTube video player\\" frameborder=\\"0\\" allow=\\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\\" allowfullscreen></iframe>"}]}')}}]);