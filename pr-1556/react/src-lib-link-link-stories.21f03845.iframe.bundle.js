/*! For license information please see src-lib-link-link-stories.21f03845.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[335,7143],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}__webpack_require__.d(__webpack_exports__,{A:()=>_assertThisInitialized})},"./node_modules/@babel/runtime/helpers/esm/extends.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _extends(){return _extends=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)({}).hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},_extends.apply(null,arguments)}__webpack_require__.d(__webpack_exports__,{A:()=>_extends})},"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}__webpack_require__.d(__webpack_exports__,{A:()=>_getPrototypeOf})},"./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectDestructuringEmpty(t){if(null==t)throw new TypeError("Cannot destructure "+t)}__webpack_require__.d(__webpack_exports__,{A:()=>_objectDestructuringEmpty})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf})},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lit-html/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{OA:()=>t,WL:()=>i,u$:()=>e});const t={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},e=t=>(...e)=>({_$litDirective$:t,values:e});class i{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this.t=t,this._$AM=e,this.i=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}},"./node_modules/lit/directives/unsafe-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{_:()=>ae});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");class le extends directive.WL{constructor(i){if(super(i),this.it=lit_html.s6,i.type!==directive.OA.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===lit_html.s6||null==t)return this._t=void 0,this.it=t;if(t===lit_html.c0)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const i=[t];return i.raw=i,this._t={_$litType$:this.constructor.resultType,strings:i,values:[]}}}le.directiveName="unsafeHTML",le.resultType=1;const ae=(0,directive.u$)(le)},"./dist/libs/core/src/components/icon/icons/arrow-right.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>IconArrowRight});var createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_Q6LYQSGS=__webpack_require__("./dist/libs/core/src/chunks/chunk.Q6LYQSGS.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconArrowRight=function(_GdsIcon){function IconArrowRight(){return(0,classCallCheck.A)(this,IconArrowRight),_callSuper(this,IconArrowRight,arguments)}return(0,inherits.A)(IconArrowRight,_GdsIcon),(0,createClass.A)(IconArrowRight)}(chunk_Q6LYQSGS.M);IconArrowRight._regularSVG='<path d="M14 5.75L20.25 12L14 18.25M19.5 12H3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconArrowRight._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M13.1161 5.36612C13.6043 4.87796 14.3957 4.87796 14.8839 5.36612L20.6339 11.1161C20.8683 11.3505 21 11.6685 21 12C21 12.3315 20.8683 12.6494 20.6339 12.8839L14.8839 18.6339C14.3957 19.122 13.6043 19.122 13.1161 18.6339C12.628 18.1457 12.628 17.3543 13.1161 16.8661L16.7322 13.25H4.25C3.55964 13.25 3 12.6903 3 12C3 11.3096 3.55964 10.75 4.25 10.75H16.7322L13.1161 7.13388C12.628 6.64573 12.628 5.85427 13.1161 5.36612Z" fill="currentColor"/>',IconArrowRight._name="arrow right",IconArrowRight=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-icon-arrow-right")],IconArrowRight);__webpack_require__("./dist/libs/core/src/chunks/chunk.ZUMVMHZJ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js")},"./libs/react/src/lib/link/link.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["button","secondary","children","className","role"],Link=function Link(_ref){var button=_ref.button,secondary=_ref.secondary,children=_ref.children,className=_ref.className,role=_ref.role,otherProps=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded),linkClassName=classnames__WEBPACK_IMPORTED_MODULE_0___default()(className,{button},button,{"link gds-link-arrow":secondary});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",Object.assign({className:linkClassName,role:button?"button":role},otherProps,{children}))};const __WEBPACK_DEFAULT_EXPORT__=Link;Link.__docgenInfo={description:"",methods:[],displayName:"Link",props:{button:{required:!1,tsType:{name:"union",raw:"boolean | ButtonVariant",elements:[{name:"boolean"},{name:"ButtonVariant"}]},description:""},secondary:{required:!1,tsType:{name:"boolean"},description:""}},composes:["HTMLProps"]}},"./libs/react/src/lib/link/link.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),_link__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/link/link.tsx"),_lit_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@lit/react/index.js"),_dist_libs_core_src_components_icon_icons_arrow_right_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/components/icon/icons/arrow-right.js"),_sebgroup_green_core_scoping__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/scoping.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");(0,_lit_react__WEBPACK_IMPORTED_MODULE_1__.a)({tagName:(0,_sebgroup_green_core_scoping__WEBPACK_IMPORTED_MODULE_3__.Eq)("gds-icon-arrow-right"),elementClass:_dist_libs_core_src_components_icon_icons_arrow_right_js__WEBPACK_IMPORTED_MODULE_2__.h,react:React});const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Link",component:_link__WEBPACK_IMPORTED_MODULE_0__.A,argTypes:{button:{options:[void 0,"primary","secondary","ghost"]}}};var Default={render:function Template(_ref){var props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_extends_js__WEBPACK_IMPORTED_MODULE_5__.A)({},((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectDestructuringEmpty_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref),_ref));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_link__WEBPACK_IMPORTED_MODULE_0__.A,Object.assign({},props))}.bind({}),name:"Link",parameters:{componentIds:["component-inlinelinks"]},args:{children:"Go to seb.se",href:"https://seb.se"}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Link',\n  parameters: {\n    componentIds: ['component-inlinelinks']\n  },\n  args: {\n    children: 'Go to seb.se',\n    href: 'https://seb.se'\n  }\n}",...Default.parameters?.docs?.source}}}}}]);