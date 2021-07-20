(window.webpackJsonp=window.webpackJsonp||[]).push([[195],{267:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return c})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return s}));var r=t(3),a=t(8),o=(t(0),t(346)),i={id:"examples",title:"Examples",sidebar_label:"Examples"},c={unversionedId:"examples",id:"version-1.x.x/examples",isDocsHomePage:!1,title:"Examples",description:"The source code for the example (showcase) app is under the Example/ directory.",source:"@site/versioned_docs/version-1.x.x/examples.md",slug:"/examples",permalink:"/react-native-reanimated/docs/1.x.x/examples",version:"1.x.x",sidebar_label:"Examples",sidebar:"version-1.x.x/docs",previous:{title:"Declarative Animation API",permalink:"/react-native-reanimated/docs/1.x.x/declarative"},next:{title:"Transitions",permalink:"/react-native-reanimated/docs/1.x.x/transitions"}},l=[],p={toc:l};function s(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The source code for the example (showcase) app is under the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-reanimated/blob/master/Example/"},Object(o.b)("inlineCode",{parentName:"a"},"Example/"))," directory."),Object(o.b)("p",null,"In order to run it you need to run those commands (starting at main directory):"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-bash"},"  yarn\n  cd Example\n  yarn\n  cd ios && pod install && cd .. # if using IOS devices\n  yarn start\n")),Object(o.b)("p",null,"Then run ",Object(o.b)("inlineCode",{parentName:"p"},"react-native run-android")," or ",Object(o.b)("inlineCode",{parentName:"p"},"react-native run-ios")," (depending on which platform you want to run the Example app on)."),Object(o.b)("p",null,"You will need to have an Android or iOS device or emulator connected as well as ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-cli")," package installed globally."))}s.isMDXComponent=!0},346:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return b}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=a.a.createContext({}),s=function(e){var n=a.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},u=function(e){var n=s(e.components);return a.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},m=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return t?a.a.createElement(b,c(c({ref:n},p),{},{components:t})):a.a.createElement(b,c({ref:n},p))}));function b(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var p=2;p<o;p++)i[p]=t[p];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);