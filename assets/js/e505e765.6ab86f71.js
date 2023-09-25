"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[355],{3905:(e,t,i)=>{i.d(t,{Zo:()=>d,kt:()=>m});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(i),p=n,m=u["".concat(o,".").concat(p)]||u[p]||f[p]||a;return i?r.createElement(m,s(s({ref:t},d),{},{components:i})):r.createElement(m,s({ref:t},d))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,s=new Array(a);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[u]="string"==typeof e?e:n,s[1]=l;for(var c=2;c<a;c++)s[c]=i[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}p.displayName="MDXCreateElement"},1913:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>f,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const a={sidebar_position:1},s="Identifiers",l={unversionedId:"Technical Details/Identifiers",id:"Technical Details/Identifiers",title:"Identifiers",description:"Identifiers are actually extremely simple: it's a shared key-value list. The key is the compressed identifier, the value is the string value. The list is stored as attributes under the BridgeNet2 RemoteEvent. Identifiers are actually just numbers compressed using string.pack- every time you create an identifier, it increments that number by one and creates the attribute.",source:"@site/docs/Technical Details/Identifiers.md",sourceDirName:"Technical Details",slug:"/Technical Details/Identifiers",permalink:"/BridgeNet2/docs/Technical Details/Identifiers",draft:!1,editUrl:"https://github.com/ffrostflame/bridgenet2/edit/master/docs/Technical Details/Identifiers.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"defaultSidebar",previous:{title:"Best Practices",permalink:"/BridgeNet2/docs/Tutorials/Best Practices"}},o={},c=[],d={toc:c},u="wrapper";function f(e){let{components:t,...i}=e;return(0,n.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"identifiers"},"Identifiers"),(0,n.kt)("p",null,"Identifiers are actually extremely simple: it's a shared key-value list. The key is the compressed identifier, the value is the string value. The list is stored as attributes under the BridgeNet2 RemoteEvent. Identifiers are actually just numbers compressed using ",(0,n.kt)("inlineCode",{parentName:"p"},"string.pack"),"- every time you create an identifier, it increments that number by one and creates the attribute."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="/src/Server/ServerIdentifiers.luau" showLineNumbers',title:'"/src/Server/ServerIdentifiers.luau"',showLineNumbers:!0},'-- optimization for under 255 identifiers\nlocal packed = if identifierCount <= 255\n    then string.pack("B", identifierCount)\n    else string.pack("H", identifierCount)\n\nidentifierCount += 1\nidentifierStorage:SetAttribute(identifierName, packed)\n\nfullIdentifierMap[identifierName] = packed\ncompressedIdentifierMap[packed] = identifierName\n')),(0,n.kt)("p",null,"On the client, the client listens for new attributes added and attribute changes. It then stores these identifiers locally- the ",(0,n.kt)("inlineCode",{parentName:"p"},"Serialize")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Deserialize")," functions just directly interface with that table. This is why the ",(0,n.kt)("inlineCode",{parentName:"p"},"ReferenceIdentifier")," function yields- it basically just waits a bit to see if the attribute loads in. If it already exists, it just accesses that in the local table."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-lua",metastring:'title="/src/Client/ClientIdentifiers.luau" {2-3} showLineNumbers',title:'"/src/Client/ClientIdentifiers.luau"',"{2-3}":!0,showLineNumbers:!0},"for id, value in identifierStorage:GetAttributes() do\n    fullIdentifierMap[id] = value\n    compressedIdentifierMap[value] = id\nend\n")))}f.isMDXComponent=!0}}]);