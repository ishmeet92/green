/*! For license information please see src-lib-alert-ribbon-alert-ribbon-stories.068868d3.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4421,5931],{"./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayLikeToArray})},"./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _arrayWithHoles(r){if(Array.isArray(r))return r}__webpack_require__.d(__webpack_exports__,{A:()=>_arrayWithHoles})},"./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}__webpack_require__.d(__webpack_exports__,{A:()=>_nonIterableRest})},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_slicedToArray});var arrayWithHoles=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js");var unsupportedIterableToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js"),nonIterableRest=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js");function _slicedToArray(r,e){return(0,arrayWithHoles.A)(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||(0,unsupportedIterableToArray.A)(r,e)||(0,nonIterableRest.A)()}},"./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>_unsupportedIterableToArray});var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?(0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.A)(r,a):void 0}}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/react/src/lib/alert-ribbon/alert-ribbon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_icons__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/react/src/lib/icons/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");function AlertRibbon(_ref){var _ref2,type=_ref.type,header=_ref.header,footer=_ref.footer,children=_ref.children,closeText=_ref.closeText,_ref$isCloseable=_ref.isCloseable,isCloseable=void 0===_ref$isCloseable||_ref$isCloseable,onClose=_ref.onClose,role=_ref.role,ariaLive=_ref["aria-live"],closeAriaLabel=_ref.closeAriaLabel,_useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),_useState2=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_3__.A)(_useState,2),closeButton=_useState2[0],setCloseButton=_useState2[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setCloseButton(isCloseable?closeText?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"close","aria-label":closeText,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{})}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"close","aria-label":"Close",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{})}):null)}),[isCloseable,closeText]);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"alert-ribbon ".concat(type),role,"aria-live":ariaLive,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{"aria-hidden":"true",children:function renderIcon(){switch(type){case"danger":case"warning":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.JZ,{"aria-hidden":!0});case"success":return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.Jl,{"aria-hidden":!0});default:return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_icons__WEBPACK_IMPORTED_MODULE_1__.wk,{"aria-hidden":!0})}}()}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"alert-ribbon__content",children:[function renderHeader(){return header?react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(header)?header:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span",{className:"header",children:header}):null}(),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p",{children})]}),closeButton&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button",{className:"close",type:"button","aria-label":null!=(_ref2=null!=closeAriaLabel?closeAriaLabel:closeText)?_ref2:"Close alert",onClick:function onClick(event){onClose&&onClose(event)},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("i",{})}),footer&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div",{className:"alert-ribbon__footer",children:[" ",footer," "]})]})}const __WEBPACK_DEFAULT_EXPORT__=AlertRibbon;AlertRibbon.__docgenInfo={description:"",methods:[],displayName:"AlertRibbon",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""},type:{required:!1,tsType:{name:"AlertRibbonType"},description:""},header:{required:!1,tsType:{name:"ReactNode"},description:""},footer:{required:!1,tsType:{name:"ReactNode"},description:""},isCloseable:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"true",computed:!1}},closeText:{required:!1,tsType:{name:"string"},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: React.MouseEvent<HTMLButtonElement>) => void",signature:{arguments:[{type:{name:"ReactMouseEvent",raw:"React.MouseEvent<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},name:"event"}],return:{name:"void"}}},description:""},role:{required:!1,tsType:{name:"literal",value:"'alert'"},description:""},"aria-live":{required:!1,tsType:{name:"AriaAttributes['aria-live']",raw:"AriaAttributes['aria-live']"},description:""},closeAriaLabel:{required:!1,tsType:{name:"string"},description:""}}}},"./libs/react/src/lib/alert-ribbon/alert-ribbon.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Danger:()=>Danger,DangerWithCloseButton:()=>DangerWithCloseButton,DangerWithFooterButtons:()=>DangerWithFooterButtons,Default:()=>Default,Info:()=>Info,InfoWithCloseButton:()=>InfoWithCloseButton,InfoWithCustomCloseButton:()=>InfoWithCustomCloseButton,InfoWithFooterButtons:()=>InfoWithFooterButtons,Success:()=>Success,SuccessWithCloseButton:()=>SuccessWithCloseButton,SuccessWithFooterButtons:()=>SuccessWithFooterButtons,Warning:()=>Warning,WarningWithCloseButton:()=>WarningWithCloseButton,WarningWithFooterButtons:()=>WarningWithFooterButtons,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_form_button_button__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/form/button/button.tsx"),_alert_ribbon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/react/src/lib/alert-ribbon/alert-ribbon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"],Template=function Template(_ref){var children=_ref.children,props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_alert_ribbon__WEBPACK_IMPORTED_MODULE_1__.A,Object.assign({},props,{children}))},Footer=function Footer(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form_button_button__WEBPACK_IMPORTED_MODULE_0__.$,{children:"Stäng"})})},FooterInfo=function FooterInfo(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form_button_button__WEBPACK_IMPORTED_MODULE_0__.$,{children:"Info button"})})},FooterSuccess=function FooterSuccess(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form_button_button__WEBPACK_IMPORTED_MODULE_0__.$,{children:"Success button"})})},FooterWarning=function FooterWarning(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form_button_button__WEBPACK_IMPORTED_MODULE_0__.$,{children:"Warning button"})})},FooterDanger=function FooterDanger(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_form_button_button__WEBPACK_IMPORTED_MODULE_0__.$,{children:"Danger button"})})};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/AlertRibbon",component:_alert_ribbon__WEBPACK_IMPORTED_MODULE_1__.A};var Default={render:Template.bind({}),name:"AlertRibbon",parameters:{componentIds:["component-alertribbon"]},args:{type:"",header:"Heading",footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Footer,{}),children:"Eftersom du vill låna med någon annan än din partner vill vi prata med dig. Du är välkommen att kontakta oss på 0771-365 365 eller boka ett rådgivningsmöte",isCloseable:!1,closeText:""}},Info=Template.bind({});Info.args={type:"",header:"Info heading.",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["AlertRibbon content placed inside a paragraph. Inline links,"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"info"}),", will inherit color from alert to make sure contrast is applied."]}),isCloseable:!1,closeText:""};var Success=Template.bind({});Success.args={type:"success",header:"Success heading.",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["AlertRibbon content placed inside a paragraph. Inline links,"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"success"}),", will inherit color from alert to make sure contrast is applied."]}),isCloseable:!1,closeText:""};var Warning=Template.bind({});Warning.args={type:"warning",header:"Warning heading.",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["AlertRibbon content placed inside a paragraph. Inline links,"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"warning"}),", will inherit color from alert to make sure contrast is applied, like this ."]}),isCloseable:!1,closeText:""};var Danger=Template.bind({});Danger.args={type:"danger",header:"Danger heading.",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["AlertRibbon content placed inside a paragraph. Inline links,"," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"danger"}),", will inherit color from alert to make sure contrast is applied, like this ."]}),isCloseable:!1,closeText:""};var InfoWithCloseButton=Template.bind({});InfoWithCloseButton.args={type:"",header:"Info",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"info with a link"}),"."]}),isCloseable:!0,closeText:""};var SuccessWithCloseButton=Template.bind({});SuccessWithCloseButton.args={type:"success",header:"Success",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"success with a link"}),"."]}),isCloseable:!0,closeText:""};var WarningWithCloseButton=Template.bind({});WarningWithCloseButton.args={type:"warning",header:"Warning",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"warning with a link"}),"."]}),isCloseable:!0,closeText:""};var DangerWithCloseButton=Template.bind({});DangerWithCloseButton.args={type:"danger",header:"Danger",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"danger with a link"}),"."]}),isCloseable:!0,closeText:""};var InfoWithCustomCloseButton=Template.bind({});InfoWithCustomCloseButton.args={type:"",header:"Info",footer:null,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:"This is an alert type with a custom close label."}),isCloseable:!0,closeText:"Stäng"};var InfoWithFooterButtons=Template.bind({});InfoWithFooterButtons.args={type:"",header:"Info",footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FooterInfo,{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"info with a link"}),"."]}),isCloseable:!0,closeText:""};var SuccessWithFooterButtons=Template.bind({});SuccessWithFooterButtons.args={type:"success",header:"Success",footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FooterSuccess,{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"success with a link"}),"."]}),isCloseable:!0,closeText:""};var WarningWithFooterButtons=Template.bind({});WarningWithFooterButtons.args={type:"warning",header:"Warning",footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FooterWarning,{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"warning with a link"}),"."]}),isCloseable:!0,closeText:""};var DangerWithFooterButtons=Template.bind({});DangerWithFooterButtons.args={type:"danger",header:"Danger",footer:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(FooterDanger,{}),children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:["This is an alert type ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("a",{href:"#",children:"danger with a link"}),"."]}),isCloseable:!0,closeText:""};const __namedExportsOrder=["Default","Info","Success","Warning","Danger","InfoWithCloseButton","SuccessWithCloseButton","WarningWithCloseButton","DangerWithCloseButton","InfoWithCustomCloseButton","InfoWithFooterButtons","SuccessWithFooterButtons","WarningWithFooterButtons","DangerWithFooterButtons"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'AlertRibbon',\n  parameters: {\n    componentIds: ['component-alertribbon']\n  },\n  args: {\n    type: '',\n    header: 'Heading',\n    footer: <Footer />,\n    children: 'Eftersom du vill låna med någon annan än din partner vill vi prata med dig. Du är välkommen att kontakta oss på 0771-365 365 eller boka ett rådgivningsmöte',\n    isCloseable: false,\n    closeText: ''\n  }\n}",...Default.parameters?.docs?.source}}},Info.parameters={...Info.parameters,docs:{...Info.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...Info.parameters?.docs?.source}}},Success.parameters={...Success.parameters,docs:{...Success.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...Success.parameters?.docs?.source}}},Warning.parameters={...Warning.parameters,docs:{...Warning.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...Warning.parameters?.docs?.source}}},Danger.parameters={...Danger.parameters,docs:{...Danger.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...Danger.parameters?.docs?.source}}},InfoWithCloseButton.parameters={...InfoWithCloseButton.parameters,docs:{...InfoWithCloseButton.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...InfoWithCloseButton.parameters?.docs?.source}}},SuccessWithCloseButton.parameters={...SuccessWithCloseButton.parameters,docs:{...SuccessWithCloseButton.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...SuccessWithCloseButton.parameters?.docs?.source}}},WarningWithCloseButton.parameters={...WarningWithCloseButton.parameters,docs:{...WarningWithCloseButton.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...WarningWithCloseButton.parameters?.docs?.source}}},DangerWithCloseButton.parameters={...DangerWithCloseButton.parameters,docs:{...DangerWithCloseButton.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...DangerWithCloseButton.parameters?.docs?.source}}},InfoWithCustomCloseButton.parameters={...InfoWithCustomCloseButton.parameters,docs:{...InfoWithCustomCloseButton.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...InfoWithCustomCloseButton.parameters?.docs?.source}}},InfoWithFooterButtons.parameters={...InfoWithFooterButtons.parameters,docs:{...InfoWithFooterButtons.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...InfoWithFooterButtons.parameters?.docs?.source}}},SuccessWithFooterButtons.parameters={...SuccessWithFooterButtons.parameters,docs:{...SuccessWithFooterButtons.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...SuccessWithFooterButtons.parameters?.docs?.source}}},WarningWithFooterButtons.parameters={...WarningWithFooterButtons.parameters,docs:{...WarningWithFooterButtons.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...WarningWithFooterButtons.parameters?.docs?.source}}},DangerWithFooterButtons.parameters={...DangerWithFooterButtons.parameters,docs:{...DangerWithFooterButtons.parameters?.docs,source:{originalSource:"({\n  children,\n  ...props\n}) => <AlertRibbon {...props}>{children}</AlertRibbon>",...DangerWithFooterButtons.parameters?.docs?.source}}}}}]);