(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[636],{265:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(4186);function o(e){var t=function(e,t){if("object"!==(0,n.A)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var o=r.call(e,t||"default");if("object"!==(0,n.A)(o))return o;throw TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.A)(t)?t:String(t)}},1799:()=>{},2969:(e,t,r)=>{"use strict";r.d(t,{A:()=>o});var n=r(265);function o(e,t,r){return(t=(0,n.A)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},4186:(e,t,r)=>{"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}r.d(t,{A:()=>n})},5601:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(2969);r(4232),r(1799),r(6642),r(8397),r(9226);let o=r(8970).WX;var u=r(7876);function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}let c=function(e){var t=e.Component,r=e.pageProps;return(0,u.jsx)(o,{children:(0,u.jsx)(t,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach(function(t){(0,n.A)(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({},r))})}},6556:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(5601)}])},6642:()=>{},8397:()=>{},8970:(e,t,r)=>{"use strict";r.d(t,{Cc:()=>d,WX:()=>l});var n=r(4232);let o={prefix:String(Math.round(1e10*Math.random())),current:0},u=n.createContext(o),i=n.createContext(!1);function c(e){let t=(0,n.useContext)(u),r=p(t===o),[c,a]=(0,n.useState)(!0),l=(0,n.useMemo)(()=>({prefix:t===o?"":`${t.prefix}-${r}`,current:0}),[t,r]);return"undefined"!=typeof document&&(0,n.useLayoutEffect)(()=>{a(!1)},[]),n.createElement(u.Provider,{value:l},n.createElement(i.Provider,{value:c},e.children))}let a=!1;function l(e){return"function"==typeof n.useId?(a||(console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app."),a=!0),n.createElement(n.Fragment,null,e.children)):n.createElement(c,e)}let s=!!("undefined"!=typeof window&&window.document&&window.document.createElement),f=new WeakMap;function p(e=!1){let t=(0,n.useContext)(u),r=(0,n.useRef)(null);if(null===r.current&&!e){var o,i;let e=null===(i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)||void 0===i?void 0:null===(o=i.ReactCurrentOwner)||void 0===o?void 0:o.current;if(e){let r=f.get(e);null==r?f.set(e,{id:t.current,state:e.memoizedState}):e.memoizedState!==r.state&&(t.current=r.id,f.delete(e))}r.current=++t.current}return r.current}let d="function"==typeof n.useId?function(e){let t=n.useId(),[r]=(0,n.useState)("function"==typeof n.useSyncExternalStore?n.useSyncExternalStore(v,y,m):(0,n.useContext)(i)),u=r?"react-aria":`react-aria${o.prefix}`;return e||`${u}-${t}`}:function(e){let t=(0,n.useContext)(u);t!==o||s||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");let r=p(!!e),i=`react-aria${t.prefix}`;return e||`${i}-${r}`};function y(){return!1}function m(){return!0}function v(e){return()=>{}}},9226:()=>{}},e=>{var t=t=>e(e.s=t);e.O(0,[6593,8792],()=>(t(6556),t(4600))),_N_E=e.O()}]);