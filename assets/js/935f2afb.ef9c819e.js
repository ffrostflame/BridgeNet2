"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"noIndex":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"defaultSidebar":[{"type":"link","label":"Intro","href":"/BridgeNet2/docs/intro","docId":"intro"},{"type":"link","label":"Installation","href":"/BridgeNet2/docs/Installation","docId":"Installation"},{"type":"category","label":"Tutorials","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Getting started with BridgeNet2","href":"/BridgeNet2/docs/Tutorials/Getting Started","docId":"Tutorials/Getting Started"},{"type":"link","label":"Logging network traffic","href":"/BridgeNet2/docs/Tutorials/Logging","docId":"Tutorials/Logging"},{"type":"link","label":"Identifiers","href":"/BridgeNet2/docs/Tutorials/Using Identifiers","docId":"Tutorials/Using Identifiers"},{"type":"link","label":"Best Practices","href":"/BridgeNet2/docs/Tutorials/Best Practices","docId":"Tutorials/Best Practices"}]},{"type":"category","label":"Technical Details","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Identifiers","href":"/BridgeNet2/docs/Technical Details/Identifiers","docId":"Technical Details/Identifiers"}]}]},"docs":{"Installation":{"id":"Installation","title":"Installation","description":"Through Wally [Recommended]","sidebar":"defaultSidebar"},"intro":{"id":"intro","title":"Intro","description":"BridgeNet2 is a networking library for Roblox that focuses on performance. It\'s meant to have a simplistic API that mirrors RemoteEvents, with the changes of BridgeFireClient, and BridgeConnect. This is because BridgeNet2\'s optimization process is super complex, and bridges need to have a simplistic API or else I will go insane as the person maintaining this library.","sidebar":"defaultSidebar"},"Technical Details/Identifiers":{"id":"Technical Details/Identifiers","title":"Identifiers","description":"Identifiers are actually extremely simple: it\'s a shared key-value list. The key is the compressed identifier, the value is the string value. The list is stored as attributes under the BridgeNet2 RemoteEvent. Identifiers are actually just numbers compressed using string.pack- every time you create an identifier, it increments that number by one and creates the attribute.","sidebar":"defaultSidebar"},"Tutorials/Best Practices":{"id":"Tutorials/Best Practices","title":"Best Practices","description":"{","sidebar":"defaultSidebar"},"Tutorials/Getting Started":{"id":"Tutorials/Getting Started","title":"Getting started with BridgeNet2","description":"Your first Bridge","sidebar":"defaultSidebar"},"Tutorials/Logging":{"id":"Tutorials/Logging","title":"Logging network traffic","description":"BridgeNet2\'s most powerful non-performance-related feature is logging. Logging can be enabled with a single line of code, anywhere. You can enable logging by setting the Logging property on any bridge to true, and disable logging by setting the Logging property to false.","sidebar":"defaultSidebar"},"Tutorials/Using Identifiers":{"id":"Tutorials/Using Identifiers","title":"Identifiers","description":"Identifiers are one of the cooler parts about BridgeNet2- they basically take a string you can understand and read, then assign it a three-byte identifier that both the client and server can understand! This is important because it lets you organize your data in a readable and efficient way. For example, take the following code:","sidebar":"defaultSidebar"}}}')}}]);