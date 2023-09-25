"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[841],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),g=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=g(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=g(n),d=o,f=c["".concat(s,".").concat(d)]||c[d]||u[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,a[1]=l;for(var g=2;g<i;g++)a[g]=n[g];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},30092:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>g});var r=n(87462),o=(n(67294),n(3905));const i={sidebar_position:2},a="Logging network traffic",l={unversionedId:"Tutorials/Logging",id:"Tutorials/Logging",title:"Logging network traffic",description:"BridgeNet2's most powerful non-performance-related feature is logging. Logging can be enabled with a single line of code, anywhere. You can enable logging by setting the Logging property on any bridge to true, and disable logging by setting the Logging property to false.",source:"@site/docs/Tutorials/Logging.md",sourceDirName:"Tutorials",slug:"/Tutorials/Logging",permalink:"/BridgeNet2/docs/Tutorials/Logging",draft:!1,editUrl:"https://github.com/ffrostflame/bridgenet2/edit/master/docs/Tutorials/Logging.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Getting started with BridgeNet2",permalink:"/BridgeNet2/docs/Tutorials/Getting Started"},next:{title:"Identifiers",permalink:"/BridgeNet2/docs/Tutorials/Using Identifiers"}},s={},g=[{value:"Log dumps",id:"log-dumps",level:3}],p={toc:g},c="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"logging-network-traffic"},"Logging network traffic"),(0,o.kt)("p",null,"BridgeNet2's most powerful non-performance-related feature is logging. Logging can be enabled with a single line of code, anywhere. You can enable logging by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging")," property on any bridge to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", and disable logging by setting the ",(0,o.kt)("inlineCode",{parentName:"p"},"Logging")," property to false. "),(0,o.kt)("p",null,"When you start logging a bridge, it will look like a little bit like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/f/9/a/c/f9acd229d50af22ebc8785c272e70133e7b4bc12.png",alt:"image|690x89"})),(0,o.kt)("p",null,'BridgeNet2 converts any passed argument into a string- including tables, and nested tables. BridgeNet2 will also count the number of bytes and appends it to the end of the log (thats the "(28B)" you see!). This is done using Pyseph\'s ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/PysephWasntAvailable/RemotePacketSizeCounter"},"RemotePacketSizeCounter")," library."),(0,o.kt)("h3",{id:"log-dumps"},"Log dumps"),(0,o.kt)("p",null,"As of right now, log dumps are not a supported feature unfortunately. However, this will be coming in the future."))}u.isMDXComponent=!0}}]);