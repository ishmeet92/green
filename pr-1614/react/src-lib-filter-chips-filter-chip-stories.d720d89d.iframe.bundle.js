/*! For license information please see src-lib-filter-chips-filter-chip-stories.d720d89d.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[360,4173,5931],{"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}__webpack_require__.d(__webpack_exports__,{A:()=>_assertThisInitialized})},"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _getPrototypeOf(t){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_getPrototypeOf(t)}__webpack_require__.d(__webpack_exports__,{A:()=>_getPrototypeOf})},"./node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _setPrototypeOf(t,e){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},_setPrototypeOf(t,e)}__webpack_require__.d(__webpack_exports__,{A:()=>_setPrototypeOf})},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:function fromAttribute(value){return new Date(value)},toAttribute:function toAttribute(value){return value.toISOString()}},dateArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",").map((function(d){return new Date(d.trim())}))},toAttribute:function toAttribute(value){return JSON.stringify(value.map((function(d){return d.toISOString()})))}},stringArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",")},toAttribute:function toAttribute(value){return Array.isArray(value)?value.join(","):value}}},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizeObserver(){return function(proto,propertyKey,descriptor){var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((function(){_this.__resizeObserver_tids[propertyKey]&&clearTimeout(_this.__resizeObserver_tids[propertyKey]),_this.__resizeObserver_tids[propertyKey]=setTimeout((function(){var _a;null==(_a=descriptor.value)||_a.call(_this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})},"./dist/libs/core/src/chunks/chunk.WM7HBMMV.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function observeLightDOM(){var observerConfig=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{attributes:!0,childList:!0,subtree:!1,characterData:!0};return function(proto,_propertyKey,descriptor){var observer,connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this);(observer=new MutationObserver((function callback(_mutationList,_observer){var _a;null==(_a=descriptor.value)||_a.call(_this)}))).observe(this,observerConfig)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),observer.disconnect()}}}function watchMediaQuery(q){return function(proto,_propertyKey,descriptor){var mediaQuery=window.matchMedia(q),connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _a,_this2=this;null==connectedCallback||connectedCallback.call(this);var listener=function listener(e){var _a2;null==(_a2=descriptor.value)||_a2.call(_this2,e.matches)};mediaQuery.addEventListener("change",listener),this.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),mediaQuery.removeEventListener("change",listener)},null==(_a=descriptor.value)||_a.call(this,mediaQuery.matches)}}}__webpack_require__.d(__webpack_exports__,{L:()=>observeLightDOM,M:()=>watchMediaQuery})},"./libs/react/src/lib/filter-chips/filter-chips.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>FilterChip,s:()=>FilterChips});var _t,_t2,react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./node_modules/@lit/react/index.js"),chunk_JMP5YJFE=__webpack_require__("./dist/libs/core/src/chunks/chunk.JMP5YJFE.js"),chunk_MLXMQIEV=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),chunk_SEHSDSX2=(__webpack_require__("./dist/libs/core/src/chunks/chunk.JY3EKAVI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js")),toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_JPBBNSKG=__webpack_require__("./dist/libs/core/src/chunks/chunk.JPBBNSKG.js"),chunk_TYGMNHNO=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _handleChipClick,_collapseThreshold,_collapsedAt,_getChipHeight,getChipHeight_fn,_handleSlotChange,handleSlotChange_fn,styles=(0,lit.AH)(_t||(_t=_`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`)),GdsFilterChips=function(_GdsFormControlElemen){function GdsFilterChips(){var _this;return(0,classCallCheck.A)(this,GdsFilterChips),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFilterChips,arguments),(0,chunk_SEHSDSX2.VK)(_this,_getChipHeight),(0,chunk_SEHSDSX2.VK)(_this,_handleSlotChange),_this.multiple=!1,_this.label="",_this.rowCollapse=!1,_this._collapsed=!1,(0,chunk_SEHSDSX2.VK)(_this,_handleChipClick,(function(event){var clickedChip=_this.chips.find((function(s){return s===event.target||s.contains(event.target)}));clickedChip&&(_this.multiple&&Array.isArray(_this.value)?clickedChip.selected?_this.value=_this.value.filter((function(v){return v!==clickedChip.value})):_this.value=[].concat((0,toConsumableArray.A)(_this.value),[clickedChip.value]):_this.value=clickedChip.value,_this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip,value:_this.value},bubbles:!0,composed:!0})))})),(0,chunk_SEHSDSX2.VK)(_this,_collapseThreshold,3),(0,chunk_SEHSDSX2.VK)(_this,_collapsedAt,0),_this}return(0,inherits.A)(GdsFilterChips,_GdsFormControlElemen),(0,createClass.A)(GdsFilterChips,[{key:"chips",get:function get(){return this._elSlot?this._elSlot.assignedElements():[]}},{key:"render",value:function render(){var layoutClasses={collapse:this._collapsed};return(0,chunk_MLXMQIEV.qy)(_t2||(_t2=_`<div
      class="chips ${0}"
      role="listbox"
      aria-label=${0}
      aria-multiselectable=${0}
    >
      <slot
        @click=${0}
        @slotchange=${0}
        role="none"
      ></slot>
    </div>`),(0,class_map.H)(layoutClasses),this.label,this.multiple,(0,chunk_SEHSDSX2.S7)(this,_handleChipClick),(0,chunk_SEHSDSX2.jq)(this,_handleSlotChange,handleSlotChange_fn))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this}},{key:"_handleResize",value:function _handleResize(){if(this.rowCollapse){var chipHeight=(0,chunk_SEHSDSX2.jq)(this,_getChipHeight,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_SEHSDSX2.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_SEHSDSX2.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_SEHSDSX2.S7)(this,_collapsedAt)&&(this._collapsed=!1)}}},{key:"_updateSelectedFromValue",value:function _updateSelectedFromValue(){var _this2=this;this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((function(){_this2.chips.forEach((function(chip){chip.selected=_this2.multiple?_this2.value.includes(chip.value):_this2.value===chip.value}))})))}}])}(chunk_JPBBNSKG.S);_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_getChipHeight=new WeakSet,getChipHeight_fn=function getChipHeight_fn(){var _a;return(null==(_a=this.chips[0])?void 0:_a.offsetHeight)||0},_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selChipValue=null==(_a=this.chips.find((function(s){return s.selected})))?void 0:_a.value;selChipValue&&(this.value=selChipValue)},GdsFilterChips.styles=[styles],(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.xj})],GdsFilterChips.prototype,"value",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_SEHSDSX2.Cc)([(0,chunk_VHN4JEZC.b)()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_SEHSDSX2.Cc)([(0,chunk_TYGMNHNO.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-filter-chips")],GdsFilterChips);var chunk_SIQPIMPA_t,chunk_SIQPIMPA_t2,get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),chunk_6X2WDWO3=__webpack_require__("./dist/libs/core/src/chunks/chunk.6X2WDWO3.js"),chunk_SIQPIMPA_=function _(t){return t};function chunk_SIQPIMPA_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_SIQPIMPA_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var chunk_SIQPIMPA_styles=(0,lit.AH)(chunk_SIQPIMPA_t||(chunk_SIQPIMPA_t=chunk_SIQPIMPA_`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`)),GdsFilterChip=function(_GdsElement){function GdsFilterChip(){var _this;return(0,classCallCheck.A)(this,GdsFilterChip),(_this=function chunk_SIQPIMPA_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,chunk_SIQPIMPA_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFilterChip,arguments)).selected=!1,_this}return(0,inherits.A)(GdsFilterChip,_GdsElement),(0,createClass.A)(GdsFilterChip,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,e,o,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t)}:p}(GdsFilterChip,"connectedCallback",this,3)([]),this.setAttribute("role","none"),chunk_JMP5YJFE.nD.instance.apply(this,"gds-filter-chip"),this._button.then((function(btn){chunk_JMP5YJFE.nD.instance.apply(btn,"gds-button")}))}},{key:"render",value:function render(){var btnClasses={"btn-p":!this.selected};return(0,chunk_MLXMQIEV.qy)(chunk_SIQPIMPA_t2||(chunk_SIQPIMPA_t2=chunk_SIQPIMPA_`<gds-button
      class="btn"
      size="small"
      .rank=${0}
      variant=${0}
      gds-role="option"
      gds-aria-selected=${0}
    >
      <span class=${0}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${0}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`),this.selected?"primary":"secondary",this._isUsingTransitionalStyles?"ghost":"default",this.selected,(0,class_map.H)(btnClasses),this.selected?"contents":"none")}}])}(chunk_6X2WDWO3.j);GdsFilterChip.styles=[chunk_SIQPIMPA_styles],(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.nJ)((0,chunk_MLXMQIEV.Eq)("gds-button"))],GdsFilterChip.prototype,"_button",2),GdsFilterChip=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-filter-chip")],GdsFilterChip);__webpack_require__("./dist/libs/core/src/chunks/chunk.6ONS3YSQ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.RSYDOUXG.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ODCLKSY5.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.BCPNTQWY.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.FPGWK6EK.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js");(0,chunk_JMP5YJFE.am)();var FilterChips=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chips"),elementClass:GdsFilterChips,react}),FilterChip=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chip"),elementClass:GdsFilterChip,react})},"./libs/react/src/lib/filter-chips/filter-chip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_filter_chips__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react/src/lib/filter-chips/filter-chips.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["children"];const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Filter Chips",component:_filter_chips__WEBPACK_IMPORTED_MODULE_0__.s};var Default={render:function Template(_ref){var children=_ref.children,props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_2__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.s,Object.assign({},props,{children}))}.bind({}),name:"Filter Chips",parameters:{componentIds:["component-filterchips"]},args:{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"all",children:"All"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"top-news",children:"Top news"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"division",children:"Division"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"global",children:"Global"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"country",children:"Country"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_filter_chips__WEBPACK_IMPORTED_MODULE_0__.$,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  render: Template.bind({}),\n  name: \'Filter Chips\',\n  parameters: {\n    componentIds: [\'component-filterchips\']\n  },\n  args: {\n    children: [<FilterChip value="all">All</FilterChip>, <FilterChip value="top-news">Top news</FilterChip>, <FilterChip value="division">Division</FilterChip>, <FilterChip value="global">Global</FilterChip>, <FilterChip value="country">Country</FilterChip>, <FilterChip value="lcfi">\n        Large Corporate & Financial Institutions\n      </FilterChip>]\n  }\n}',...Default.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=src-lib-filter-chips-filter-chip-stories.d720d89d.iframe.bundle.js.map