(window.webpackJsonp=window.webpackJsonp||[]).push([[268],{341:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(8),i=(n(0),n(346)),o={id:"withDelay",title:"withDelay",sidebar_label:"withDelay"},c={unversionedId:"api/withDelay",id:"api/withDelay",isDocsHomePage:!1,title:"withDelay",description:"Allows for the provided animation to start with a specified delay.",source:"@site/docs/api/withDelay.md",slug:"/api/withDelay",permalink:"/react-native-reanimated/docs/next/api/withDelay",version:"current",sidebar_label:"withDelay",sidebar:"docs",previous:{title:"cancelAnimation",permalink:"/react-native-reanimated/docs/next/api/cancelAnimation"},next:{title:"withSequence",permalink:"/react-native-reanimated/docs/next/api/withSequence"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Allows for the provided animation to start with a specified delay."),Object(i.b)("p",null,"In case the value for which we are starting the delayed animation is running a previous animation, that animation won't be cancelled until the new animation starts after the delay.\nIf you want the animation to cancel immediately, use ",Object(i.b)("a",{parentName:"p",href:"cancelAnimation"},Object(i.b)("inlineCode",{parentName:"a"},"cancelAnimation"))," method."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"delayms-number"},Object(i.b)("inlineCode",{parentName:"h4"},"delayMS")," ","[number]"),Object(i.b)("p",null,"Delay in milliseconds after which we want the provided animation to start."),Object(i.b)("h4",{id:"delayedanimation-animation"},Object(i.b)("inlineCode",{parentName:"h4"},"delayedAnimation")," ","[animation]"),Object(i.b)("p",null,"The animation that will be started after the delay."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(i.b)("a",{parentName:"p",href:"useAnimatedStyle"},Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Timing animation will start on the ",Object(i.b)("inlineCode",{parentName:"p"},"sharedValue")," after one second."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withDelay(1000, withTiming(70));\n")))}p.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return b}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=r.a.createContext({}),p=function(e){var t=r.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,b=d["".concat(o,".").concat(m)]||d[m]||s[m]||i;return n?r.a.createElement(b,c(c({ref:t},u),{},{components:n})):r.a.createElement(b,c({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);