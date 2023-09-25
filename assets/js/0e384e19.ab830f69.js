"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=i,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59881:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:1},o="Intro",s={unversionedId:"intro",id:"intro",title:"Intro",description:"BridgeNet2 is a networking library for Roblox that focuses on performance. It's meant to have a simplistic API that mirrors RemoteEvents, with the changes of BridgeFireClient, and BridgeConnect. This is because BridgeNet2's optimization process is super complex, and bridges need to have a simplistic API or else I will go insane as the person maintaining this library.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/BridgeNet2/docs/intro",draft:!1,editUrl:"https://github.com/ffrostflame/bridgenet2/edit/master/docs/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",next:{title:"Installation",permalink:"/BridgeNet2/docs/Installation"}},l={},c=[{value:"API Design",id:"api-design",level:2},{value:"Singular parameter for <code>:Fire()</code>",id:"singular-parameter-for-fire",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...r}=e;return(0,i.kt)(d,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"intro"},"Intro"),(0,i.kt)("p",null,"BridgeNet2 is a networking library for Roblox that focuses on performance. It's meant to have a simplistic API that mirrors RemoteEvents, with the changes of ",(0,i.kt)("inlineCode",{parentName:"p"},"Bridge:Fire")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"RemoteEvent:FireClient"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"Bridge:Connect")," instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"RemoteEvent.OnServerEvent:Connect"),". This is because BridgeNet2's optimization process is super complex, and bridges need to have a simplistic API or else I will go insane as the person maintaining this library."),(0,i.kt)("h2",{id:"api-design"},"API Design"),(0,i.kt)("p",null,"When using BridgeNet2, you can't fire a bridge with multiple arguments. This means you need to pass a table into Bridge:Fire if you want to send multiple arguments, instead of separate arguments. This design choice was chosen because it removes a layer of complexity, alongside being better for performance, stability, and typechecking. Doing this also means BridgeNet2 never needs to manipulate the data that's pushed, the library can just directly send that data through the RemoteEvent."),(0,i.kt)("h2",{id:"singular-parameter-for-fire"},"Singular parameter for ",(0,i.kt)("inlineCode",{parentName:"h2"},":Fire()")),(0,i.kt)("p",null,"This library favors performance, and therefore we made choices that resulted in an opinionated library. This is shown with a few decisions: cutting out varargs, opting for thread reusage which clutters the stack trace, and the ",(0,i.kt)("inlineCode",{parentName:"p"},"PlayerContainer"),"s: ",(0,i.kt)("inlineCode",{parentName:"p"},"BridgeNet2.Players()"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"BridgeNet2.ExceptPlayers()"),", etc."))}u.isMDXComponent=!0}}]);