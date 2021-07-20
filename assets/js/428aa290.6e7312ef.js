(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{134:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),i=(t(0),t(346)),o={id:"cancelAnimation",title:"cancelAnimation",sidebar_label:"cancelAnimation"},c={unversionedId:"api/cancelAnimation",id:"version-2.2.0/api/cancelAnimation",isDocsHomePage:!1,title:"cancelAnimation",description:"Starts a time-based animation.",source:"@site/versioned_docs/version-2.2.0/api/cancelAnimation.md",slug:"/api/cancelAnimation",permalink:"/react-native-reanimated/docs/2.2.0/api/cancelAnimation",version:"2.2.0",sidebar_label:"cancelAnimation",sidebar:"version-2.2.0/docs",previous:{title:"withDecay",permalink:"/react-native-reanimated/docs/2.2.0/api/withDecay"},next:{title:"withDelay",permalink:"/react-native-reanimated/docs/2.2.0/api/withDelay"}},l=[{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]}],u={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Starts a time-based animation."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"sharedvalue-sharedvalueref"},Object(i.b)("inlineCode",{parentName:"h4"},"sharedValue")," ","[SharedValueRef]"),Object(i.b)("p",null,"The value for which we want the previously started animation to be cancelled.\nIf there was no animation started on that value, or the animation completed, no error will be thrown."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js",metastring:"{5}","{5}":!0},"const someValue = useSharedValue(0);\n\nconst gestureHandler = useAnimatedGestureHandler({\n  onStart: (_, ctx) => {\n    cancelAnimation(someValue);\n  },\n});\n")))}s.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=a.a.createContext({}),s=function(e){var n=a.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},p=function(e){var n=s(e.components);return a.a.createElement(u.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(t),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return t?a.a.createElement(b,c(c({ref:n},u),{},{components:t})):a.a.createElement(b,c({ref:n},u))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<i;u++)o[u]=t[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);