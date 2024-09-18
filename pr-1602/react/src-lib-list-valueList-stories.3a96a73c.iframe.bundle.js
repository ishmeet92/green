/*! For license information please see src-lib-list-valueList-stories.3a96a73c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[5550],{"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/react/src/lib/list/valueList.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/jsx-runtime.js"),Label=function Label(_ref){var children=_ref.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dt",{children})},Value=function Value(_ref2){var children=_ref2.children;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dd",{children})},List=function List(_ref3){var children=_ref3.children,classNames="gds-list";return _ref3.inverted&&(classNames+=" gds-list--inverted"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("dl",{className:classNames,children})};const __WEBPACK_DEFAULT_EXPORT__={List,Label,Value};Label.__docgenInfo={description:"@deprecated\nUse `GroupedList` instead.",methods:[],displayName:"Label",props:{children:{required:!0,tsType:{name:"string"},description:""}}},Value.__docgenInfo={description:"@deprecated\nUse `GroupedList` instead.",methods:[],displayName:"Value",props:{children:{required:!0,tsType:{name:"string"},description:""}}},List.__docgenInfo={description:"@deprecated\nUse `GroupedList` instead.",methods:[],displayName:"List",props:{children:{required:!1,tsType:{name:"union",raw:"| ReactElement<ValueListItemProps>\n| ReactElement<ValueListItemProps>[]",elements:[{name:"ReactElement",elements:[{name:"ValueListItemProps"}],raw:"ReactElement<ValueListItemProps>"},{name:"Array",elements:[{name:"ReactElement",elements:[{name:"ValueListItemProps"}],raw:"ReactElement<ValueListItemProps>"}],raw:"ReactElement<ValueListItemProps>[]"}]},description:""},inverted:{required:!1,tsType:{name:"boolean"},description:""}}}},"./libs/react/src/lib/list/valueList.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _valueList__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/list/valueList.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Lists/ValueList",component:_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay};var Primary={render:function render(props){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.List,Object.assign({},props,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Label,{children:"Ni vill sälja"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Value,{children:"Fritidshus"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Label,{children:"Lån på bostaden"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Value,{children:"1 000 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Label,{children:"Ni köpte bostaden för"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Value,{children:"5 000 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Label,{children:"Lägsta försäljningsbelopp"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Value,{children:"2 500 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Label,{children:"Mäklararvode"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Value,{children:"50 000 kr"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Label,{children:"Kontantinsats från överskottet"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_valueList__WEBPACK_IMPORTED_MODULE_0__.Ay.Value,{children:"375 000 kr"})]}))}};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"{\n  render: props => <ValueList.List {...props}>\n      <ValueList.Label>Ni vill sälja</ValueList.Label>\n      <ValueList.Value>Fritidshus</ValueList.Value>\n      <ValueList.Label>Lån på bostaden</ValueList.Label>\n      <ValueList.Value>1 000 000 kr</ValueList.Value>\n      <ValueList.Label>Ni köpte bostaden för</ValueList.Label>\n      <ValueList.Value>5 000 000 kr</ValueList.Value>\n      <ValueList.Label>Lägsta försäljningsbelopp</ValueList.Label>\n      <ValueList.Value>2 500 000 kr</ValueList.Value>\n      <ValueList.Label>Mäklararvode</ValueList.Label>\n      <ValueList.Value>50 000 kr</ValueList.Value>\n      <ValueList.Label>Kontantinsats från överskottet</ValueList.Label>\n      <ValueList.Value>375 000 kr</ValueList.Value>\n    </ValueList.List>\n}",...Primary.parameters?.docs?.source}}}}}]);