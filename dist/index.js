module.exports=function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(e,t){e.exports=require("react")},function(e,t,r){var n;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var o=a.apply(null,n);o&&e.push(o)}else if("object"===l)for(var u in n)r.call(n,u)&&n[u]&&e.push(u)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()},function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),l=r(1),o=r.n(l);function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function c(e,t,r,n,a,l,o){try{var u=e[l](o),c=u.value}catch(e){return void r(e)}u.done?t(c):Promise.resolve(c).then(n,a)}function i(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,a=!1,l=void 0;try{for(var o,u=e[Symbol.iterator]();!(n=(o=u.next()).done)&&(r.push(o.value),!t||r.length!==t);n=!0);}catch(e){a=!0,l=e}finally{try{n||null==u.return||u.return()}finally{if(a)throw l}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),n.forEach(function(t){f(e,t,r[t])})}return e}function f(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){return Object.keys(e).reduce(function(t,r){var n=function(e,t){var r=void 0;if(e.validators.find(function(n){return!!(r=n({value:e.value,field:e,data:t}))}))return r}(e[r],e);return n?s({},t,f({},r,n)):t},{})},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.values(e).filter(function(e){return!!e}).length>0};t.default=function(e){return function(t){return function(r){var n,l,d=i(a.a.useState(!1),2),v=d[0],b=d[1],h=i(a.a.useState(!1),2),y=h[0],g=h[1],N=i(a.a.useState(r.fields),2),E=N[0],x=N[1],O=i(a.a.useState({}),2),j=O[0],w=O[1],P=function(e){return function(t){return x(s({},E,f({},e,s({},E[e],{value:t.target.value}))))}},k=(n=regeneratorRuntime.mark(function e(t){var n,a,l;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(g(!1),n=m(t),w(s({},n)),!p(n)){e.next=5;break}return e.abrupt("return",Promise.reject(n));case 5:return b(!0),a=Object.keys(t).reduce(function(e,r){return s({},e,f({},r,t[r].value))},{}),e.next=9,r.postFormData({data:a});case 9:return l=e.sent,w(s({},l)),b(!1),p(l)||g(!0),e.abrupt("return",Promise.resolve({}));case 14:case"end":return e.stop()}},e)}),l=function(){var e=this,t=arguments;return new Promise(function(r,a){var l=n.apply(e,t);function o(e){c(l,r,a,o,u,"next",e)}function u(e){c(l,r,a,o,u,"throw",e)}o(void 0)})},function(e){return l.apply(this,arguments)}),S=e.labelClassName,C=void 0===S?"label-hoc-form":S,F=e.fieldWrapperClassName,_=void 0===F?"field-hoc-form":F,D=function(e){var t=e.fieldName,r=e.type,n=void 0===r?"text":r;return a.a.createElement("label",{htmlFor:t,className:o()(E[t].className,C,"text-input")},a.a.createElement("span",null,E[t].label),a.a.createElement("input",{type:n,name:t,placeholder:E[t].placeholder||E[t].label,value:E[t].value,onChange:P(t)}))},A=function(e){switch(E[e].type){case"select":return function(e){var t=e.fieldName;return a.a.createElement("label",{htmlFor:t,className:o()(E[t].className,C,"select-input")},a.a.createElement("span",null,E[t].label),a.a.createElement("select",{className:"select-css",name:t,value:E[t].value,onChange:P(t)},a.a.createElement("option",{disabled:!0,value:""},E[t].placeholder),E[t].options.map(function(e,t){return a.a.createElement("option",{key:t,value:e},e)})))}({fieldName:e});case"textarea":return function(e){var t=e.fieldName;return a.a.createElement("label",{htmlFor:t,className:o()(E[t].className,C,"text-area-input")},a.a.createElement("span",null,E[t].label),a.a.createElement("textarea",{className:"textarea",name:t,placeholder:E[t].placeholder||E[t].label,value:E[t].value,onChange:P(t)}))}({fieldName:e});case"checkbox":return function(e){var t=e.fieldName;return a.a.createElement("label",{htmlFor:t,className:o()(E[t].className,C,"checkbox-input")},a.a.createElement("input",{type:"checkbox",className:"checkbox",name:t,placeholder:E[t].placeholder||E[t].label,checked:!!E[t].value,onChange:P(t)}),a.a.createElement("span",null,E[t].label))}({fieldName:e});case"text":case"password":case"email":return D({fieldName:e,type:E[e].type});default:return D({fieldName:e})}};return a.a.createElement(t,u({},r,{loading:v,posted:y,data:E,errors:j,setData:x,setErrors:w,postFormData:k,renderField:function(e){var t=j[e];return a.a.createElement("div",{className:o()(_,"field-".concat(e))},a.a.createElement("div",{className:"control"},A(e)),!!t&&a.a.createElement("span",{className:"help-block error-message"},a.a.createElement("strong",{className:"error-message"},t)))},getFormError:function(){var e=j.formError;return a.a.createElement("div",{className:o()(_,"form-error")},!!e&&a.a.createElement("span",{className:"help-block error-message"},a.a.createElement("strong",{className:"error-message"},e)))},preventKeyEnter:function(e){13===(e.charCode||e.keyCode||0)&&e.preventDefault()}}))}}}}]);