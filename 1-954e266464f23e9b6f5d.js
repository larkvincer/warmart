(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{141:function(e,t,n){"use strict";var r=n(8);t.__esModule=!0,t.withPrefix=T,t.navigateTo=t.replace=t.push=t.navigate=t.default=void 0;var o=r(n(151)),i=r(n(152)),a=r(n(7)),u=r(n(52)),c=r(n(53)),s=r(n(4)),f=r(n(0)),l=n(22),p=n(142);function T(e){return function(e){return e.replace(/\/+/g,"/")}("/"+e)}var d={activeClassName:s.default.string,activeStyle:s.default.object},E=function(e){function t(t){var n;n=e.call(this)||this,(0,c.default)((0,u.default)((0,u.default)(n)),"defaultGetProps",function(e){return e.isCurrent?{className:[n.props.className,n.props.activeClassName].filter(Boolean).join(" "),style:(0,i.default)({},n.props.style,n.props.activeStyle)}:null});var r=!1;return"undefined"!=typeof window&&window.IntersectionObserver&&(r=!0),n.state={IOSupported:r},n.handleRef=n.handleRef.bind((0,u.default)((0,u.default)(n))),n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidUpdate=function(e,t){this.props.to===e.to||this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.componentDidMount=function(){this.state.IOSupported||___loader.enqueue((0,p.parsePath)(this.props.to).pathname)},n.handleRef=function(e){var t,n,r,o=this;this.props.innerRef&&this.props.innerRef(e),this.state.IOSupported&&e&&(t=e,n=function(){___loader.enqueue((0,p.parsePath)(o.props.to).pathname)},(r=new window.IntersectionObserver(function(e){e.forEach(function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t),r.disconnect(),n())})})).observe(t))},n.render=function(){var e=this,t=this.props,n=t.to,r=t.getProps,a=void 0===r?this.defaultGetProps:r,u=t.onClick,c=t.onMouseEnter,s=(t.activeClassName,t.activeStyle,t.ref,t.innerRef,t.state),d=t.replace,E=(0,o.default)(t,["to","getProps","onClick","onMouseEnter","activeClassName","activeStyle","ref","innerRef","state","replace"]),A=T(n);return f.default.createElement(l.Link,(0,i.default)({to:A,state:s,getProps:a,innerRef:this.handleRef,onMouseEnter:function(e){c&&c(e),___loader.hovering((0,p.parsePath)(n).pathname)},onClick:function(t){return u&&u(t),0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey||(t.preventDefault(),h(n,{state:s,replace:d})),!0}},E))},t}(f.default.Component);E.propTypes=(0,i.default)({},d,{innerRef:s.default.func,onClick:s.default.func,to:s.default.string.isRequired,replace:s.default.bool});var A=E;t.default=A;var h=function(e,t){window.___navigate(T(e),t)};t.navigate=h;var y=function(e){console.warn('The "push" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___push(T(e))};t.push=y;t.replace=function(e){console.warn('The "replace" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),window.___replace(T(e))};t.navigateTo=function(e){return console.warn('The "navigateTo" method is now deprecated and will be removed in Gatsby v3. Please use "navigate" instead.'),y(e)}},145:function(e,t){var n="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof window.msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto);if(n){var r=new Uint8Array(16);e.exports=function(){return n(r),r}}else{var o=new Array(16);e.exports=function(){for(var e,t=0;t<16;t++)0==(3&t)&&(e=4294967296*Math.random()),o[t]=e>>>((3&t)<<3)&255;return o}}},146:function(e,t){for(var n=[],r=0;r<256;++r)n[r]=(r+256).toString(16).substr(1);e.exports=function(e,t){var r=t||0,o=n;return[o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],"-",o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]],o[e[r++]]].join("")}},148:function(e,t){t.__esModule=!0;t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"};var n=t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},151:function(e,t){e.exports=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}},152:function(e,t){function n(){return e.exports=n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},n.apply(this,arguments)}e.exports=n},154:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e}},155:function(e,t,n){var r=n(156),o=n(157),i=o;i.v1=r,i.v4=o,e.exports=i},156:function(e,t,n){var r,o,i=n(145),a=n(146),u=0,c=0;e.exports=function(e,t,n){var s=t&&n||0,f=t||[],l=(e=e||{}).node||r,p=void 0!==e.clockseq?e.clockseq:o;if(null==l||null==p){var T=i();null==l&&(l=r=[1|T[0],T[1],T[2],T[3],T[4],T[5]]),null==p&&(p=o=16383&(T[6]<<8|T[7]))}var d=void 0!==e.msecs?e.msecs:(new Date).getTime(),E=void 0!==e.nsecs?e.nsecs:c+1,A=d-u+(E-c)/1e4;if(A<0&&void 0===e.clockseq&&(p=p+1&16383),(A<0||d>u)&&void 0===e.nsecs&&(E=0),E>=1e4)throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");u=d,c=E,o=p;var h=(1e4*(268435455&(d+=122192928e5))+E)%4294967296;f[s++]=h>>>24&255,f[s++]=h>>>16&255,f[s++]=h>>>8&255,f[s++]=255&h;var y=d/4294967296*1e4&268435455;f[s++]=y>>>8&255,f[s++]=255&y,f[s++]=y>>>24&15|16,f[s++]=y>>>16&255,f[s++]=p>>>8|128,f[s++]=255&p;for(var v=0;v<6;++v)f[s+v]=l[v];return t||a(f)}},157:function(e,t,n){var r=n(145),o=n(146);e.exports=function(e,t,n){var i=t&&n||0;"string"==typeof e&&(t="binary"===e?new Array(16):null,e=null);var a=(e=e||{}).random||(e.rng||r)();if(a[6]=15&a[6]|64,a[8]=63&a[8]|128,t)for(var u=0;u<16;++u)t[i+u]=a[u];return t||o(a)}},161:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var u in r)n.call(r,u)&&r[u]&&e.push(u)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},175:function(e,t,n){t.__esModule=!0,t.Helmet=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=l(n(0)),a=l(n(4)),u=l(n(176)),c=l(n(179)),s=n(182),f=n(148);function l(e){return e&&e.__esModule?e:{default:e}}function p(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}var T,d,E,A=(0,u.default)(s.reducePropsToState,s.handleClientStateChange,s.mapStateOnServer)(function(){return null}),h=(T=A,E=d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!(0,c.default)(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case f.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,o=e.arrayTypeChildren,i=e.newChildProps,a=e.nestedChildren;return r({},o,((t={})[n.type]=[].concat(o[n.type]||[],[r({},i,this.mapNestedChildrenToProps(n,a))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,o=e.child,i=e.newProps,a=e.newChildProps,u=e.nestedChildren;switch(o.type){case f.TAG_NAMES.TITLE:return r({},i,((t={})[o.type]=u,t.titleAttributes=r({},a),t));case f.TAG_NAMES.BODY:return r({},i,{bodyAttributes:r({},a)});case f.TAG_NAMES.HTML:return r({},i,{htmlAttributes:r({},a)})}return r({},i,((n={})[o.type]=r({},a),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=r({},t);return Object.keys(e).forEach(function(t){var o;n=r({},n,((o={})[t]=e[t],o))}),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return i.default.Children.forEach(e,function(e){if(e&&e.props){var o=e.props,i=o.children,a=p(o,["children"]),u=(0,s.convertReactPropstoHtmlAttributes)(a);switch(n.warnOnInvalidChildren(e,i),e.type){case f.TAG_NAMES.LINK:case f.TAG_NAMES.META:case f.TAG_NAMES.NOSCRIPT:case f.TAG_NAMES.SCRIPT:case f.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:u,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:u,nestedChildren:i})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=p(e,["children"]),o=r({},n);return t&&(o=this.mapChildrenToProps(t,o)),i.default.createElement(T,o)},o(t,null,[{key:"canUseDOM",set:function(e){T.canUseDOM=e}}]),t}(i.default.Component),d.propTypes={base:a.default.object,bodyAttributes:a.default.object,children:a.default.oneOfType([a.default.arrayOf(a.default.node),a.default.node]),defaultTitle:a.default.string,defer:a.default.bool,encodeSpecialCharacters:a.default.bool,htmlAttributes:a.default.object,link:a.default.arrayOf(a.default.object),meta:a.default.arrayOf(a.default.object),noscript:a.default.arrayOf(a.default.object),onChangeClientState:a.default.func,script:a.default.arrayOf(a.default.object),style:a.default.arrayOf(a.default.object),title:a.default.string,titleAttributes:a.default.object,titleTemplate:a.default.string},d.defaultProps={defer:!0,encodeSpecialCharacters:!0},d.peek=T.peek,d.rewind=function(){var e=T.rewind();return e||(e=(0,s.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},E);h.renderStatic=h.rewind,t.Helmet=h,t.default=h},176:function(e,t,n){"use strict";function r(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var o=n(0),i=r(o),a=r(n(177)),u=r(n(178));e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var c=[],s=void 0;function f(){s=e(c.map(function(e){return e.props})),l.canUseDOM?t(s):n&&(s=n(s))}var l=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.peek=function(){return s},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,c=[],e},t.prototype.shouldComponentUpdate=function(e){return!u(e,this.props)},t.prototype.componentWillMount=function(){c.push(this),f()},t.prototype.componentDidUpdate=function(){f()},t.prototype.componentWillUnmount=function(){var e=c.indexOf(this);c.splice(e,1),f()},t.prototype.render=function(){return i.createElement(r,this.props)},t}(o.Component);return l.displayName="SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")",l.canUseDOM=a.canUseDOM,l}}},177:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};void 0===(r=function(){return i}.call(t,n,t,e))||(e.exports=r)}()},178:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),c=0;c<i.length;c++){var s=i[c];if(!u(s))return!1;var f=e[s],l=t[s];if(!1===(o=n?n.call(r,f,l,s):void 0)||void 0===o&&f!==l)return!1}return!0}},179:function(e,t,n){var r=Array.prototype.slice,o=n(180),i=n(181),a=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:function(e,t,n){var s,f;if(u(e)||u(t))return!1;if(e.prototype!==t.prototype)return!1;if(i(e))return!!i(t)&&(e=r.call(e),t=r.call(t),a(e,t,n));if(c(e)){if(!c(t))return!1;if(e.length!==t.length)return!1;for(s=0;s<e.length;s++)if(e[s]!==t[s])return!1;return!0}try{var l=o(e),p=o(t)}catch(T){return!1}if(l.length!=p.length)return!1;for(l.sort(),p.sort(),s=l.length-1;s>=0;s--)if(l[s]!=p[s])return!1;for(s=l.length-1;s>=0;s--)if(f=l[s],!a(e[f],t[f],n))return!1;return typeof e==typeof t}(e,t,n))};function u(e){return null==e}function c(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}},180:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}(e.exports="function"==typeof Object.keys?Object.keys:n).shim=n},181:function(e,t){var n="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();function r(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function o(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}(t=e.exports=n?r:o).supported=r,t.unsupported=o},182:function(e,t,n){(function(e){t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=c(n(0)),a=c(n(51)),u=n(148);function c(e){return e&&e.__esModule?e:{default:e}}var s,f=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},l=function(e){var t=A(e,u.TAG_NAMES.TITLE),n=A(e,u.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=A(e,u.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return A(e,u.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return void 0!==t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return o({},e,t)},{})},d=function(e,t){return t.filter(function(e){return void 0!==e[u.TAG_NAMES.BASE]}).map(function(e){return e[u.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t},[])},E=function(e,t,n){var o={};return n.filter(function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&b("Helmet: "+e+' should be of type "Array". Instead found type "'+r(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var r={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||n===u.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||s===u.TAG_PROPERTIES.REL&&"stylesheet"===e[s].toLowerCase()||(n=s),-1===t.indexOf(c)||c!==u.TAG_PROPERTIES.INNER_HTML&&c!==u.TAG_PROPERTIES.CSS_TEXT&&c!==u.TAG_PROPERTIES.ITEM_PROP||(n=c)}if(!n||!e[n])return!1;var f=e[n].toLowerCase();return o[n]||(o[n]={}),r[n]||(r[n]={}),!o[n][f]&&(r[n][f]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(r),c=0;c<i.length;c++){var s=i[c],f=(0,a.default)({},o[s],r[s]);o[s]=f}return e},[]).reverse()},A=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=(s=Date.now(),function(e){var t=Date.now();t-s>16?(s=t,e(t)):setTimeout(function(){h(e)},0)}),y=function(e){return clearTimeout(e)},v="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||h:e.requestAnimationFrame||h,S="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||y:e.cancelAnimationFrame||y,b=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},_=null,m=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,f=e.scriptTags,l=e.styleTags,p=e.title,T=e.titleAttributes;R(u.TAG_NAMES.BODY,r),R(u.TAG_NAMES.HTML,o),O(p,T);var d={baseTag:w(u.TAG_NAMES.BASE,n),linkTags:w(u.TAG_NAMES.LINK,i),metaTags:w(u.TAG_NAMES.META,a),noscriptTags:w(u.TAG_NAMES.NOSCRIPT,c),scriptTags:w(u.TAG_NAMES.SCRIPT,f),styleTags:w(u.TAG_NAMES.STYLE,l)},E={},A={};Object.keys(d).forEach(function(e){var t=d[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(A[e]=d[e].oldTags)}),t&&t(),s(e,E,A)},P=function(e){return Array.isArray(e)?e.join(""):e},O=function(e,t){void 0!==e&&document.title!==e&&(document.title=P(e)),R(u.TAG_NAMES.TITLE,t)},R=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(u.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],f=t[s]||"";n.getAttribute(s)!==f&&n.setAttribute(s,f),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var p=i.length-1;p>=0;p--)n.removeAttribute(i[p]);o.length===i.length?n.removeAttribute(u.HELMET_ATTRIBUTE):n.getAttribute(u.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(u.HELMET_ATTRIBUTE,a.join(","))}},w=function(e,t){var n=document.head||document.querySelector(u.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+u.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===u.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===u.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(u.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},M=function(e){return Object.keys(e).reduce(function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.REACT_TAG_MAP[n]||n]=e[n],t},t)},C=function(e,t,n){switch(e){case u.TAG_NAMES.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[u.HELMET_ATTRIBUTE]=!0,o=g(n,r),[i.default.createElement(u.TAG_NAMES.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=M(n),i=P(t);return o?"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+">"+f(i,r)+"</"+e+">":"<"+e+" "+u.HELMET_ATTRIBUTE+'="true">'+f(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case u.ATTRIBUTE_NAMES.BODY:case u.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return g(t)},toString:function(){return M(t)}};default:return{toComponent:function(){return function(e,t){return t.map(function(t,n){var r,o=((r={key:n})[u.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=u.REACT_TAG_MAP[e]||e;if(n===u.TAG_PROPERTIES.INNER_HTML||n===u.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),i.default.createElement(e,o)})}(e,t)},toString:function(){return function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===u.TAG_PROPERTIES.INNER_HTML||e===u.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o=void 0===r[t]?t:t+'="'+f(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=-1===u.SELF_CLOSING_TAGS.indexOf(e);return t+"<"+e+" "+u.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")}(e,t,n)}}}};t.convertReactPropstoHtmlAttributes=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[u.HTML_TAG_MAP[n]||n]=e[n],t},t)},t.handleClientStateChange=function(e){_&&S(_),e.defer?_=v(function(){m(e,function(){_=null})}):(m(e),_=null)},t.mapStateOnServer=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,f=e.styleTags,l=e.title,p=void 0===l?"":l,T=e.titleAttributes;return{base:C(u.TAG_NAMES.BASE,t,r),bodyAttributes:C(u.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:C(u.ATTRIBUTE_NAMES.HTML,o,r),link:C(u.TAG_NAMES.LINK,i,r),meta:C(u.TAG_NAMES.META,a,r),noscript:C(u.TAG_NAMES.NOSCRIPT,c,r),script:C(u.TAG_NAMES.SCRIPT,s,r),style:C(u.TAG_NAMES.STYLE,f,r),title:C(u.TAG_NAMES.TITLE,{title:p,titleAttributes:T},r)}},t.reducePropsToState=function(e){return{baseTag:d([u.TAG_PROPERTIES.HREF],e),bodyAttributes:T(u.ATTRIBUTE_NAMES.BODY,e),defer:A(e,u.HELMET_PROPS.DEFER),encode:A(e,u.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(u.ATTRIBUTE_NAMES.HTML,e),linkTags:E(u.TAG_NAMES.LINK,[u.TAG_PROPERTIES.REL,u.TAG_PROPERTIES.HREF],e),metaTags:E(u.TAG_NAMES.META,[u.TAG_PROPERTIES.NAME,u.TAG_PROPERTIES.CHARSET,u.TAG_PROPERTIES.HTTPEQUIV,u.TAG_PROPERTIES.PROPERTY,u.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:E(u.TAG_NAMES.NOSCRIPT,[u.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:E(u.TAG_NAMES.SCRIPT,[u.TAG_PROPERTIES.SRC,u.TAG_PROPERTIES.INNER_HTML],e),styleTags:E(u.TAG_NAMES.STYLE,[u.TAG_PROPERTIES.CSS_TEXT],e),title:l(e),titleAttributes:T(u.ATTRIBUTE_NAMES.TITLE,e)}},t.requestAnimationFrame=v,t.warn=b}).call(this,n(73))}}]);
//# sourceMappingURL=1-954e266464f23e9b6f5d.js.map