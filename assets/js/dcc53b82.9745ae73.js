(window.webpackJsonp=window.webpackJsonp||[]).push([[231],{304:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return s})),t.d(n,"default",(function(){return l}));var i=t(3),r=t(8),o=(t(0),t(346)),a={id:"spring_utils",title:"SpringUtils",sidebar_label:"SpringUtils"},c={unversionedId:"animations/spring_utils",id:"version-1.x.x/animations/spring_utils",isDocsHomePage:!1,title:"SpringUtils",description:"For developers' convenience, it's possible to use a different way of configuring spring animation which follows behavior known from React Native core.",source:"@site/versioned_docs/version-1.x.x/animations/springUtils.md",slug:"/animations/spring_utils",permalink:"/react-native-reanimated/docs/1.x.x/animations/spring_utils",version:"1.x.x",sidebar_label:"SpringUtils",sidebar:"version-1.x.x/docs",previous:{title:"Spring",permalink:"/react-native-reanimated/docs/1.x.x/animations/spring"},next:{title:"abs",permalink:"/react-native-reanimated/docs/1.x.x/nodes/abs"}},s=[{value:"<code>SpringUtils.makeDefaultConfig()</code>",id:"springutilsmakedefaultconfig",children:[]},{value:"<code>SpringUtils.makeConfigFromBouncinessAndSpeed(prevConfig)</code>",id:"springutilsmakeconfigfrombouncinessandspeedprevconfig",children:[]},{value:"<code>SpringUtils.makeConfigFromOrigamiTensionAndFriction(prevConfig)</code>",id:"springutilsmakeconfigfromorigamitensionandfrictionprevconfig",children:[]}],p={toc:s};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"For developers' convenience, it's possible to use a different way of configuring ",Object(o.b)("inlineCode",{parentName:"p"},"spring")," animation which follows behavior known from React Native core."),Object(o.b)("h3",{id:"springutilsmakedefaultconfig"},Object(o.b)("inlineCode",{parentName:"h3"},"SpringUtils.makeDefaultConfig()")),Object(o.b)("p",null,"Returns an object filled with default config of animation:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"}," {\n   stiffness: new Value(100),\n   mass: new Value(1),\n   damping: new Value(10),\n   overshootClamping: false,\n   restSpeedThreshold: 0.001,\n   restDisplacementThreshold: 0.001,\n   toValue: new Value(0),\n }\n")),Object(o.b)("h3",{id:"springutilsmakeconfigfrombouncinessandspeedprevconfig"},Object(o.b)("inlineCode",{parentName:"h3"},"SpringUtils.makeConfigFromBouncinessAndSpeed(prevConfig)")),Object(o.b)("p",null,"Transforms an object with ",Object(o.b)("inlineCode",{parentName:"p"},"bounciness")," and ",Object(o.b)("inlineCode",{parentName:"p"},"speed")," params into config expected by the ",Object(o.b)("inlineCode",{parentName:"p"},"spring")," node. ",Object(o.b)("inlineCode",{parentName:"p"},"bounciness")," and ",Object(o.b)("inlineCode",{parentName:"p"},"speed")," might be nodes or numbers."),Object(o.b)("h3",{id:"springutilsmakeconfigfromorigamitensionandfrictionprevconfig"},Object(o.b)("inlineCode",{parentName:"h3"},"SpringUtils.makeConfigFromOrigamiTensionAndFriction(prevConfig)")),Object(o.b)("p",null,"Transforms an object with ",Object(o.b)("inlineCode",{parentName:"p"},"tension")," and ",Object(o.b)("inlineCode",{parentName:"p"},"friction")," params into config expected by the ",Object(o.b)("inlineCode",{parentName:"p"},"spring")," node. ",Object(o.b)("inlineCode",{parentName:"p"},"tension")," and ",Object(o.b)("inlineCode",{parentName:"p"},"friction")," might be nodes or numbers."),Object(o.b)("p",null,"See an ",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/Example/reanimated1/differentSpringConfigs/index.js"},"Example of different configs"),"."))}l.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var i=t(0),r=t.n(i);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=r.a.createContext({}),l=function(e){var n=r.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=l(e.components);return r.a.createElement(p.Provider,{value:n},e.children)},f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},m=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=i,u=d["".concat(a,".").concat(m)]||d[m]||f[m]||o;return t?r.a.createElement(u,c(c({ref:n},p),{},{components:t})):r.a.createElement(u,c({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=m;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=t[p];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);