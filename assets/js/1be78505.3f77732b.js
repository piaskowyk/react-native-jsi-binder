(window.webpackJsonp=window.webpackJsonp||[]).push([[26,137],{370:function(e,t,a){"use strict";var n=a(3),l=a(8),c=a(0),r=a.n(c),o=a(351),i=a(355),s=a(347),m=a(356),u=a(57),b=a.n(u),d=a(367);function f(e){var t=e.to,a=e.href,c=e.label,o=e.prependBaseUrlToHref,s=Object(l.a)(e,["to","href","label","prependBaseUrlToHref"]),u=Object(m.a)(t),b=Object(m.a)(a,{forcePrependBaseUrl:!0});return r.a.createElement(i.a,Object(n.a)({className:"footer__link-item"},a?{href:o?b:a}:{to:u},s),c)}var p=function(e){var t=e.sources,a=e.alt;return r.a.createElement(d.a,{className:"footer__logo",alt:a,sources:t})};t.a=function(){var e=Object(s.useThemeConfig)().footer,t=e||{},a=t.copyright,n=t.links,l=void 0===n?[]:n,c=t.logo,u=void 0===c?{}:c,d={light:Object(m.a)(u.src),dark:Object(m.a)(u.srcDark||u.src)};return e?r.a.createElement("footer",{className:Object(o.a)("footer",{"footer--dark":"dark"===e.style})},r.a.createElement("div",{className:"container"},l&&l.length>0&&r.a.createElement("div",{className:"row footer__links"},l.map((function(e,t){return r.a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?r.a.createElement("h4",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?r.a.createElement("ul",{className:"footer__items"},e.items.map((function(e,t){return e.html?r.a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):r.a.createElement("li",{key:e.href||e.to,className:"footer__item"},r.a.createElement(f,e))}))):null)}))),(u||a)&&r.a.createElement("div",{className:"footer__bottom text--center"},u&&(u.src||u.srcDark)&&r.a.createElement("div",{className:"margin-bottom--sm"},u.href?r.a.createElement(i.a,{href:u.href,className:b.a.footerLogoLink},r.a.createElement(p,{alt:u.alt,sources:d})):r.a.createElement(p,{alt:u.alt,sources:d})),a?r.a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:a}}):null))):null}},421:function(e,t,a){"use strict";var n=a(3),l=a(8),c=a(0),r=a.n(c),o=a(351),i=a(347),s=a(383),m=a(390),u=a(391),b=a(389),d=a(355),f=a(374),p=a(392),h=a(395),_=a(393),v=a(354),O=a(93),j=a.n(O);var k=function e(t,a){return"link"===t.type?Object(i.isSamePath)(t.href,a):"category"===t.type&&t.items.some((function(t){return e(t,a)}))};function E(e){var t,a,i,s=e.item,m=e.onItemClick,u=e.collapsible,b=e.activePath,d=Object(l.a)(e,["item","onItemClick","collapsible","activePath"]),f=s.items,p=s.label,h=k(s,b),_=(a=h,i=Object(c.useRef)(a),Object(c.useEffect)((function(){i.current=a}),[a]),i.current),v=Object(c.useState)((function(){return!!u&&(!h&&s.collapsed)})),O=v[0],E=v[1],N=Object(c.useRef)(null),y=Object(c.useState)(void 0),C=y[0],I=y[1],T=function(e){var t;void 0===e&&(e=!0),I(e?(null===(t=N.current)||void 0===t?void 0:t.scrollHeight)+"px":void 0)};Object(c.useEffect)((function(){h&&!_&&O&&E(!1)}),[h,_,O]);var w=Object(c.useCallback)((function(e){e.preventDefault(),C||T(),setTimeout((function(){return E((function(e){return!e}))}),100)}),[C]);return 0===f.length?null:r.a.createElement("li",{className:Object(o.a)("menu__list-item",{"menu__list-item--collapsed":O}),key:p},r.a.createElement("a",Object(n.a)({className:Object(o.a)("menu__link",(t={"menu__link--sublist":u,"menu__link--active":u&&h},t[j.a.menuLinkText]=!u,t)),onClick:u?w:void 0,href:u?"#!":void 0},d),p),r.a.createElement("ul",{className:"menu__list",ref:N,style:{height:C},onTransitionEnd:function(){O||T(!1)}},f.map((function(e){return r.a.createElement(g,{tabIndex:O?"-1":"0",key:e.label,item:e,onItemClick:m,collapsible:u,activePath:b})}))))}function N(e){var t,a=e.item,c=e.onItemClick,i=e.activePath,s=(e.collapsible,Object(l.a)(e,["item","onItemClick","activePath","collapsible"])),m=a.href,u=a.label,b=k(a,i);return r.a.createElement("li",{className:"menu__list-item",key:u},r.a.createElement(d.a,Object(n.a)({className:Object(o.a)("menu__link",(t={"menu__link--active":b},t[j.a.menuLinkExternal]=!Object(f.a)(m),t)),to:m},Object(f.a)(m)&&{isNavLink:!0,exact:!0,onClick:c},s),u))}function g(e){switch(e.item.type){case"category":return r.a.createElement(E,e);case"link":default:return r.a.createElement(N,e)}}t.a=function(e){var t,a,n=e.path,l=e.sidebar,d=e.sidebarCollapsible,f=void 0===d||d,O=e.onCollapse,k=e.isHidden,E=Object(c.useState)(!1),N=E[0],y=E[1],C=Object(i.useThemeConfig)(),I=C.navbar.hideOnScroll,T=C.hideableSidebar,w=Object(s.a)().isAnnouncementBarClosed,B=Object(b.a)().scrollY;Object(m.a)(N);var L=Object(u.a)();return Object(c.useEffect)((function(){L===u.b.desktop&&y(!1)}),[L]),r.a.createElement("div",{className:Object(o.a)(j.a.sidebar,(t={},t[j.a.sidebarWithHideableNavbar]=I,t[j.a.sidebarHidden]=k,t))},I&&r.a.createElement(p.a,{tabIndex:-1,className:j.a.sidebarLogo}),r.a.createElement("div",{className:Object(o.a)("menu","menu--responsive","thin-scrollbar",j.a.menu,(a={"menu--show":N},a[j.a.menuWithAnnouncementBar]=!w&&0===B,a))},r.a.createElement("button",{"aria-label":N?Object(v.b)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):Object(v.b)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:Object(o.a)("button button--secondary button--md menu__button",j.a.swm_btn_shadow),type:"button",onClick:function(){y(!N)}},N?r.a.createElement("span",{className:Object(o.a)(j.a.sidebarMenuIcon,j.a.sidebarMenuCloseIcon)},"\xd7"):r.a.createElement(_.a,{className:j.a.sidebarMenuIcon,height:24,width:24})),r.a.createElement("ul",{className:"menu__list"},l.map((function(e){return r.a.createElement(g,{key:e.label,item:e,onItemClick:function(e){e.target.blur(),y(!1)},collapsible:f,activePath:n})})))),T&&r.a.createElement("button",{type:"button",title:Object(v.b)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":Object(v.b)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:Object(o.a)("button button--secondary button--outline",j.a.collapseSidebarButton),onClick:O},r.a.createElement(h.a,{className:j.a.collapseSidebarButtonIcon})))}}}]);