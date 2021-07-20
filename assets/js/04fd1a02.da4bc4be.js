(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{346:function(e,n,t){"use strict";t.d(n,"a",(function(){return m})),t.d(n,"b",(function(){return b}));var a=t(0),i=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),l=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m=function(e){var n=l(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},p=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(t),p=a,b=m["".concat(r,".").concat(p)]||m[p]||d[p]||o;return t?i.a.createElement(b,s(s({ref:n},u),{},{components:t})):i.a.createElement(b,s({ref:n},u))}));function b(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,r=new Array(o);r[0]=p;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var u=2;u<o;u++)r[u]=t[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}p.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return c})),t.d(n,"default",(function(){return l}));var a=t(3),i=t(8),o=(t(0),t(346)),r={id:"animatedLayout",title:"<AnimatedLayout>",sidebar_label:"<AnimatedLayout>"},s={unversionedId:"api/LayoutAnimations/animatedLayout",id:"version-2.3.0-alpha.1/api/LayoutAnimations/animatedLayout",isDocsHomePage:!1,title:"<AnimatedLayout>",description:"The AnimatedLayout component is responsible for observing changes in its subtree AnimatedLayout. You can treat it as a View component because it takes the same set of properties. The component is essential for entering and exiting animations as well as layout transitions and each animated component that wants to make use of any layout animation has to be placed under an AnimatedLayout component. There are two important notes about this component that you should keep in mind:",source:"@site/versioned_docs/version-2.3.0-alpha.1/api/LayoutAnimations/AnimatedLayout.md",slug:"/api/LayoutAnimations/animatedLayout",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/animatedLayout",version:"2.3.0-alpha.1",sidebar_label:"<AnimatedLayout>",sidebar:"version-2.3.0-alpha.1/docs",previous:{title:"scrollTo",permalink:"/react-native-reanimated/docs/api/nativeMethods/scrollTo"},next:{title:"Custom Animations",permalink:"/react-native-reanimated/docs/api/LayoutAnimations/customAnimations"}},c=[{value:"Example",id:"example",children:[]}],u={toc:c};function l(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedLayout")," component is responsible for observing changes in its subtree ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedLayout"),". You can treat it as a ",Object(o.b)("inlineCode",{parentName:"p"},"View")," component because it takes the same set of properties. The component is essential for entering and exiting animations as well as layout transitions and each animated component that wants to make use of any layout animation has to be placed under an ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedLayout")," component. There are two important notes about this component that you should keep in mind: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"It will manage all its descendants' animations even if it's mounting and unmounting by itself."),Object(o.b)("li",{parentName:"ul"},"There is no need to nest one ",Object(o.b)("inlineCode",{parentName:"li"},"AnimatedLayout")," in another one because the higher one would already watch the subtree of the lower one. ")),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"You can use ",Object(o.b)("inlineCode",{parentName:"p"},"AnimatedLayout")," as regural React component and his children can use by transitions and mounting/unmpunting animations."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"    import { AnimatedLayout } from 'react-native-reanimated';\n    \n    function CustomFunctionComponent() {\n\n        return (\n            <AnimatedLayout>\n                // watched subtree\n            </AnimatedLayout>\n        );\n    }\n")),Object(o.b)("p",null,"More advanced example with SWM's logo"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"    import { \n        AnimatedLayout,\n        SlideInRight,\n        SlideOutLeft,\n        SlideInDown,\n        SlideOutUp,\n        SlideInLeft,\n        SlideOutRight,\n        OpacityIn,\n        OpacityOut,\n    } from 'react-native-reanimated';\n    \n    const AnimatedText = Animated.createAnimatedComponent(Text);\n    \u200b\n    function SWMLogo() {\n    \u200b\n        return (\n            <AnimatedLayout>\n                <Animated.View \n                    entering={SlideInRight.delay(300)} \n                    exiting={SlideOutLeft.delay(300)} \n                    style={styles.left} \n                />\n                <Animated.View \n                    entering={SlideInDown} \n                    exiting={SlideOutUp} \n                    style={styles.top} \n                />\n                <Animated.View \n                    entering={SlideInLeft} \n                    exiting={SlideOutRight} \n                    style={styles.animatedView} \n                >\n                    <AnimatedText \n                        entering={OpacityIn.delay(600).duration(3000)} \n                        exiting={OpacityOut.duration(3000)}\n                    > \n                        SWM \n                    </AnimatedText>\n                </Animated.View>\n            </AnimatedLayout>\n        );\n    }\n")),Object(o.b)("p",null,"See results:"),Object(o.b)("video",{src:"https://user-images.githubusercontent.com/36106620/120326638-39ee0200-c2e9-11eb-8dca-3f3b999c5017.mov",controls:"controls",muted:"muted"}))}l.isMDXComponent=!0}}]);