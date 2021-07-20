(window.webpackJsonp=window.webpackJsonp||[]).push([[116],{187:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return m})),n.d(t,"default",(function(){return d}));var a=n(3),r=n(8),i=(n(0),n(346)),o={id:"migration",title:"Migrating from Reanimated 1.x",sidebar_label:"Migration from v1"},l={unversionedId:"migration",id:"version-2.2.0/migration",isDocsHomePage:!1,title:"Migrating from Reanimated 1.x",description:"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.",source:"@site/versioned_docs/version-2.2.0/migration.md",slug:"/migration",permalink:"/react-native-reanimated/docs/2.2.0/migration",version:"2.2.0",sidebar_label:"Migration from v1",sidebar:"version-2.2.0/docs",previous:{title:"Reanimated 2.x architecture",permalink:"/react-native-reanimated/docs/2.2.0/architecture"},next:{title:"Web Support",permalink:"/react-native-reanimated/docs/2.2.0/web-support"}},m=[{value:"Renamed methods:",id:"renamed-methods",children:[]}],c={toc:m};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"We wanted to make it possible to migrate from Reanimated 1 to Reanimated 2 incrementally.\nWhen installing Reanimated 2, you will be able to use the old API as well as the new one.\nWe made the latest stable Reanimated 1 available from the same package with a few exceptions, as we needed to address some naming collisions.\nWhenever there was a naming collision with Reanimated 1, we'd rename the Reanimated 1 version of such method in order to keep the naming in Reanimated 2 cleaner.\nThis strategy made the most sense to us, as we are planning to slowly phase out the old API (we will keep making fixes to Reanimated 1 core but most likely stop new feature development).\nUnfortunately, it means that Reanimated 2 introduces some breaking changes to the API, where some methods pulled from Reanimated 1 changed there name.\nThankfully the list of the renamed methods is relatively short, and the renamed methods weren't too frequently used anyways."),Object(i.b)("h3",{id:"renamed-methods"},"Renamed methods:"),Object(i.b)("h4",{id:"1-interpolate-renamed-to-interpolatenode"},"1. ",Object(i.b)("inlineCode",{parentName:"h4"},"interpolate")," renamed to ",Object(i.b)("inlineCode",{parentName:"h4"},"interpolateNode")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"interpolate")," imported directly from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",Object(i.b)("inlineCode",{parentName:"p"},"interpolateNode")," instead.\nIf you were using a class member method ",Object(i.b)("inlineCode",{parentName:"p"},"AnimatedValue.interpolate"),", no change is necessary."),Object(i.b)("h4",{id:"2-easing-renamed-to-easingnode"},"2. ",Object(i.b)("inlineCode",{parentName:"h4"},"Easing")," renamed to ",Object(i.b)("inlineCode",{parentName:"h4"},"EasingNode")),Object(i.b)("p",null,"When using ",Object(i.b)("inlineCode",{parentName:"p"},"Easing")," imported from ",Object(i.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," v1, in v2 you should use ",Object(i.b)("inlineCode",{parentName:"p"},"EasingNode")," instead."))}d.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),d=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),s=d(n),u=a,b=s["".concat(o,".").concat(u)]||s[u]||p[u]||i;return n?r.a.createElement(b,l(l({ref:t},c),{},{components:n})):r.a.createElement(b,l({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);