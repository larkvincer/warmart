(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return p}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return g});var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(141),s=a.n(l);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var o=a(144),u=a.n(o);a.d(t,"PageRenderer",function(){return u.a});var m=a(48);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),g=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function p(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:c.a.object,query:c.a.string.isRequired,render:c.a.func,children:c.a.func}},143:function(e,t,a){},144:function(e,t,a){var n;e.exports=(n=a(153))&&n.default||n},147:function(e,t,a){"use strict";var n=a(175),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(176),o=a.n(s),u=a(142);function m(e){var t=e.description,a=e.lang,r=e.meta,c=e.keywords,l=e.title;return i.a.createElement(u.StaticQuery,{query:d,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(o.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(c.length>0?{name:"keywords",content:c.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="1025518380"},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),c=a(4),l=a.n(c),s=a(142),o=a(154),u=a.n(o),m=a(7),d=a.n(m),g=a(155),p=a.n(g);a(158);function f(e,t,a){return function(){var n=document.querySelector(e);n&&(a?n.scrollIntoView():t(n.offsetTop))}}var N=function(e){var t=e.items,a=void 0===t?[]:t,n=e.setCurrentScrollOffset,r=e.isWider500;return i.a.createElement("nav",{className:"navbar"},i.a.createElement("ul",{className:"list"},a.map(function(e){return i.a.createElement("li",{key:p()(),className:"list__item",onClick:f(e.classSelector,n,r)},"Контакти"===e.title?i.a.createElement("strong",null,e.title):e.title)})),i.a.createElement("div",{className:"description align_center"},"Встановлення ",i.a.createElement("strong",null,"газових")," та ",i.a.createElement("strong",null,"твердопаливних")," котлів.",i.a.createElement("br",null),"Монтаж ",i.a.createElement("strong",null,"кондиціонерів. "),"Будь-які види ",i.a.createElement("strong",null,"сантехнічних")," робіт.",i.a.createElement("br",null)))};N.propTypes={items:l.a.arrayOf(l.a.shape({tilte:l.a.string,classSelector:l.a.string})),setCurrentScrollOffset:l.a.func,isWider500:l.a.bool};var y=N,E=a(159),h=a.n(E),L=(a(160),function(){return i.a.createElement("div",{className:"logo"},i.a.createElement("img",{alt:"warmart logo",src:h.a}),i.a.createElement("h1",{className:"logo__company-name"},"Вомарт"),i.a.createElement("h3",{className:"logo__company-desc"},"Опалення Сантехніка Гарантія Сервіс"))}),v=a(161),S=a.n(v),M=(a(162),function(e){var t=e.isOpen,a=e.onClick;return i.a.createElement("div",{onClick:a,className:S()("hamburger",{hamburger_open:t})},i.a.createElement("div",{className:S()("hamburger-line",{"hamburger-line_crossline1":t})}),i.a.createElement("div",{className:"hamburger-line",style:{opacity:t?0:1}}),i.a.createElement("div",{className:S()("hamburger-line",{"hamburger-line_crossline2":t})}))});M.propTypes={isOpen:l.a.bool,onClick:l.a.func},M.defaultProps={isOpen:!1,onClick:function(){return alert("Clicked")}};var b=M,I=(a(163),function(e){function t(){for(var t,a=arguments.length,n=new Array(a),r=0;r<a;r++)n[r]=arguments[r];return(t=e.call.apply(e,[this].concat(n))||this).currentScrollOffset=0,t.items=[{title:"Головна",classSelector:".header"},{title:"Про нас",classSelector:".about"},{title:"Контакти",classSelector:".contacts"},{title:"Наш офіс",classSelector:".office"}],t.state={isNavBarOpen:!1},t.handleHambClick=function(){t.state.isNavBarOpen||(t.currentScrollOffset=window.scrollY),t.setState(function(e){return{isNavBarOpen:!e.isNavBarOpen}})},t.updateState=function(){t.setState({isNavBarOpen:t.isWider500})},t.setCurrentScrollOffset=function(e){t.currentScrollOffset=e,t.handleHambClick()},t}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("resize",this.updateState),window.addEventListener("orientationchange",this.updateState)},a.componentDidUpdate=function(){this.isMobileNavbarOpen||window.scroll(0,this.currentScrollOffset)},a.componentWillUnmount=function(){window.removeEventListener("resize"),window.removeEventListener("orientationchange")},a.render=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{isOpen:this.isMobileNavbarOpen,onClick:this.handleHambClick}),i.a.createElement("header",{className:"header"},i.a.createElement(L,null),this.shouldRenderNavbar&&i.a.createElement(y,{setCurrentScrollOffset:this.setCurrentScrollOffset,isWider500:this.isWider500,items:this.items})))},u()(t,[{key:"isMobileNavbarOpen",get:function(){return!this.isWider500&&this.state.isNavBarOpen}},{key:"isWider500",get:function(){return"undefined"!=typeof window&&window.innerWidth>=500}},{key:"shouldRenderNavbar",get:function(){return this.isWider500||this.isMobileNavbarOpen}}]),t}(i.a.PureComponent));I.propTypes={siteTitle:l.a.string},I.defaultProps={siteTitle:""};var w=I,j=(a(164),function(){return i.a.createElement("footer",{className:"footer"},"© ",(new Date).getFullYear(),", Built with passion")}),T=a(165),D=a.n(T),_=a(166),x=a.n(_),C=(a(167),a(143),function(){return i.a.createElement("section",{className:"section contacts"},i.a.createElement("h3",{className:"align_center"},"Контакти"),i.a.createElement("div",{className:"contacts-container"},i.a.createElement("article",{className:"contacts__item background_orange"},i.a.createElement("img",{alt:"mail",className:"contacts__icon",src:D.a}),i.a.createElement("h4",{className:"uppercase inline"},"Пошта:"),i.a.createElement("div",{className:"contacts__mail"},"info@warmart.com.ua")),i.a.createElement("article",{className:"contacts__item background_black"},i.a.createElement("img",{alt:"phone",className:"contacts__icon",src:x.a}),i.a.createElement("h4",{className:"uppercase inline"},"Телефони:"),i.a.createElement("div",{className:"contacts__phone-number"},"+38 093 224 8686"),i.a.createElement("div",{className:"contacts__phone-number"},"+38 095 273 8686"),i.a.createElement("div",{className:"contacts__phone-number"},"+38 096 226 8686"))))}),k=a(168),A=a.n(k),O=a(169),z=a.n(O),P=a(170),W=a.n(P),Z=(a(171),function(){return i.a.createElement("section",{className:"about align_center section"},i.a.createElement("h3",null,"Про нас"),i.a.createElement("div",{className:"about-item gas-heating"},i.a.createElement("p",{className:"about-item__desc"},"Встановлюємо індивідуальне опалення. Надаємо гарантію та сервіс."),i.a.createElement("div",{className:"about-item__image-container"},i.a.createElement("img",{alt:"gas boiler",className:"about-item__image float_right",width:"500",src:A.a}))),i.a.createElement("div",{className:"about-item"},i.a.createElement("div",{className:"about-item__image-container"},i.a.createElement("img",{alt:"solid heating",className:"about-item__image float_left",width:"500",src:z.a})),i.a.createElement("p",{className:"about-item__desc text_black"},"Надаємо консультації щодо встановлення твердопаливних котлів.",i.a.createElement("br",null),"Проводимо монтаж та сервіс.")),i.a.createElement("div",{className:"about-item about-item_conditioner direction_column"},i.a.createElement("div",null,i.a.createElement("img",{alt:"conditioner",className:"about-item__image",width:"500",src:W.a})),i.a.createElement("p",{className:"text_black flex-justify_center about-item__desc"},"Встановлюємо кондиціонери.")))}),B=a(172),U=a.n(B),Y=(a(173),function(){return i.a.createElement("section",{className:"office align_center section"},i.a.createElement("h3",null,"Наш офіс на карті"),i.a.createElement("div",{className:"office-container"},i.a.createElement("article",{className:"address"},i.a.createElement("img",{className:"address-icon",src:U.a,alt:"location icon"}),i.a.createElement("h4",{className:"address-title"},"Адреса:"),i.a.createElement("div",null,"м. Івано-Франківськ, вулиця ",i.a.createElement("strong",null,"Європейська Площа 3"))),i.a.createElement("article",{className:"map"},i.a.createElement("iframe",{title:"Office location",width:"100%",height:"450",frameBorder:"0",src:"https://www.google.com/maps/embed/v1/place?key=AIzaSyDG4wijlW19SBYL9zmKCqOQSwDYmVD6pZw\n          &q=Yevropeiska+Square,+3,+Ivano-Frankivs'k,+Ivano-Frankivs'ka+oblast",allowFullScreen:!0}))))}),H=(a(174),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,t,i.a.createElement(w,{siteTitle:e.site.siteMetadata.title}),i.a.createElement(Z,null),i.a.createElement(C,null),i.a.createElement(Y,null),i.a.createElement(j,null))},data:n})});H.propTypes={children:l.a.node.isRequired};t.a=H},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Вомарт. Опалення. Сантехніка. Кодиціонування."}}}}},153:function(e,t,a){"use strict";a.r(t);a(32);var n=a(0),r=a.n(n),i=a(4),c=a.n(i),l=a(68),s=a(2),o=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(l.a,Object.assign({location:t,pageResources:a},a.json))};o.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=o},158:function(e,t,a){},159:function(e,t,a){e.exports=a.p+"static/warmart-icon-9198539c2e5af70065043ee963f10dd3.svg"},160:function(e,t,a){},162:function(e,t,a){},163:function(e,t,a){},164:function(e,t,a){},165:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDB6Ii8+PHBhdGggZD0iTTIwIDRINGMtMS4xIDAtMS45OS45LTEuOTkgMkwyIDE4YzAgMS4xLjkgMiAyIDJoMTZjMS4xIDAgMi0uOSAyLTJWNmMwLTEuMS0uOS0yLTItMnptMCAxNEg0VjhsOCA1IDgtNXYxMHptLTgtN0w0IDZoMTZsLTggNXoiLz48L3N2Zz4="},166:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgZmlsbD0iI2ZmZiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDI0djI0SDBWMHoiLz48cGF0aCBkPSJNNi41NCA1Yy4wNi44OS4yMSAxLjc2LjQ1IDIuNTlsLTEuMiAxLjJjLS40MS0xLjItLjY3LTIuNDctLjc2LTMuNzloMS41MW05Ljg2IDEyLjAyYy44NS4yNCAxLjcyLjM5IDIuNi40NXYxLjQ5Yy0xLjMyLS4wOS0yLjU5LS4zNS0zLjgtLjc1bDEuMi0xLjE5TTcuNSAzSDRjLS41NSAwLTEgLjQ1LTEgMSAwIDkuMzkgNy42MSAxNyAxNyAxNyAuNTUgMCAxLS40NSAxLTF2LTMuNDljMC0uNTUtLjQ1LTEtMS0xLTEuMjQgMC0yLjQ1LS4yLTMuNTctLjU3LS4xLS4wNC0uMjEtLjA1LS4zMS0uMDUtLjI2IDAtLjUxLjEtLjcxLjI5bC0yLjIgMi4yYy0yLjgzLTEuNDUtNS4xNS0zLjc2LTYuNTktNi41OWwyLjItMi4yYy4yOC0uMjguMzYtLjY3LjI1LTEuMDJDOC43IDYuNDUgOC41IDUuMjUgOC41IDRjMC0uNTUtLjQ1LTEtMS0xeiIvPjwvc3ZnPg=="},167:function(e,t,a){},168:function(e,t,a){e.exports=a.p+"static/gas-boiler-e6562ad96b7dc1f61081ad3846e7a705.jpg"},169:function(e,t,a){e.exports=a.p+"static/solid_heating-c5ba4a12bc1a4a61c0348d9544c2a3a5.png"},170:function(e,t,a){e.exports=a.p+"static/conditioner-a71842e153c6ce3e4a46dcb83a2abf4e.jpg"},171:function(e,t,a){},172:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBkPSJNMTIgMkM4LjEzIDIgNSA1LjEzIDUgOWMwIDUuMjUgNyAxMyA3IDEzczctNy43NSA3LTEzYzAtMy44Ny0zLjEzLTctNy03em0wIDkuNWMtMS4zOCAwLTIuNS0xLjEyLTIuNS0yLjVzMS4xMi0yLjUgMi41LTIuNSAyLjUgMS4xMiAyLjUgMi41LTEuMTIgMi41LTIuNSAyLjV6Ii8+PHBhdGggZD0iTTAgMGgyNHYyNEgweiIgZmlsbD0ibm9uZSIvPjwvc3ZnPg=="},173:function(e,t,a){},174:function(e,t,a){},175:function(e){e.exports={data:{site:{siteMetadata:{title:"Вомарт. Опалення. Сантехніка. Кодиціонування.",description:"Вомарт - компанія, що займається монтажем, проектування та підтримкою індивідуального опалення, сантехнічних мереж, систем кондиціонування. Встановлюємо газові та твердопаливні котли. Займаємося ремонтом газових та твердопаливних котлів. Продаємо необхідне обладнання.",author:"@gatsbyjs"}}}}}}]);
//# sourceMappingURL=0-bf01851e92457179daea.js.map