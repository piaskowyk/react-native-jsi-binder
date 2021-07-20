(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{133:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(8),i=(n(0),n(346)),o={id:"withSequence",title:"withSequence",sidebar_label:"withSequence"},c={unversionedId:"api/withSequence",id:"version-2.0.0-rc.2/api/withSequence",isDocsHomePage:!1,title:"withSequence",description:"Runs the provided animations in a sequence.",source:"@site/versioned_docs/version-2.0.0-rc.2/api/withSequence.md",slug:"/api/withSequence",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/withSequence",version:"2.0.0-rc.2",sidebar_label:"withSequence",sidebar:"version-2.0.0-rc.2/docs",previous:{title:"withDelay",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/withDelay"},next:{title:"withRepeat",permalink:"/react-native-reanimated/docs/2.0.0-rc.2/api/withRepeat"}},u=[{value:"Arguments",id:"arguments",children:[]},{value:"Returns",id:"returns",children:[]},{value:"Example",id:"example",children:[]}],s={toc:u};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Runs the provided animations in a sequence.\nThis modifier takes one or more animation objects as arguments (however fewer than two does not make too much sense).\nThen the execution starts by running the first animation, and the next one is started immediately after the first one is over."),Object(i.b)("h3",{id:"arguments"},"Arguments"),Object(i.b)("h4",{id:"animations-variable-number-of-animation-objects"},Object(i.b)("inlineCode",{parentName:"h4"},"...animations")," ","[Variable number of animation objects]"),Object(i.b)("p",null,"The animations to be run in sequence."),Object(i.b)("h3",{id:"returns"},"Returns"),Object(i.b)("p",null,"This method returns an animation object. It can be either assigned directly to a Shared Value or can be used as a value for a style object returned from ",Object(i.b)("a",{parentName:"p",href:"useAnimatedStyle"},Object(i.b)("inlineCode",{parentName:"a"},"useAnimatedStyle")),"."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"In the below example the Shared Values is initialized with 0.\nWe start a sequence of timing animations: first from 0 to 70 and then back to 0.\nThe sequence will will result in the value returning to the original position."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"sharedValue.value = withSequence(withTiming(70), withTiming(0))\n")))}l.isMDXComponent=!0},346:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(n),d=r,b=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return n?a.a.createElement(b,c(c({ref:t},s),{},{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);