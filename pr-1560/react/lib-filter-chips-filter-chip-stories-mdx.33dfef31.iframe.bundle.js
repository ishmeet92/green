(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7745],{"./libs/react/src/lib/filter-chips/filter-chip.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,__page:()=>__page,default:()=>filter_chip_stories});var _templateObject,_templateObject2,_t,_t2,react=__webpack_require__("./node_modules/react/index.js"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_lit_react=__webpack_require__("./libs/react/node_modules/@lit/react/index.js"),taggedTemplateLiteralLoose=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),taggedTemplateLiteralLoose_default=__webpack_require__.n(taggedTemplateLiteralLoose),toConsumableArray=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),classCallCheck=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),assertThisInitialized=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js"),inherits=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_2BMJPIND=__webpack_require__("./dist/libs/core/src/chunks/chunk.2BMJPIND.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _handleChipClick,_collapseThreshold,_collapsedAt,_getChipHeight,getChipHeight_fn,_handleSlotChange,handleSlotChange_fn,styles=(0,lit.AH)(_t||(_t=_templateObject||(_templateObject=taggedTemplateLiteralLoose_default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    :host {\n      display: inline-block;\n      max-width: 100%;\n    }\n\n    .chips {\n      display: flex;\n      flex-wrap: wrap;\n      gap: 0.5rem;\n    }\n\n    .collapse {\n      overflow: auto;\n      scroll-snap-type: both mandatory;\n      overscroll-behavior-x: contain;\n      flex-wrap: nowrap;\n      padding-bottom: 0.5rem;\n      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;\n      scrollbar-width: thin;\n    }\n\n    ::slotted(*) {\n      scroll-snap-align: start;\n      scroll-snap-stop: always;\n    }\n  }\n"])))),GdsFilterChips=function(_GdsFormControlElemen){(0,inherits.A)(GdsFilterChips,_GdsFormControlElemen);var _super=_createSuper(GdsFilterChips);function GdsFilterChips(){var _this;return(0,classCallCheck.A)(this,GdsFilterChips),_this=_super.apply(this,arguments),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_getChipHeight),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleSlotChange),_this.multiple=!1,_this.label="",_this.rowCollapse=!1,_this._collapsed=!1,(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_handleChipClick,(function(event){var clickedChip=_this.chips.find((function(s){return s===event.target||s.contains(event.target)}));clickedChip&&(_this.multiple&&Array.isArray(_this.value)?clickedChip.selected?_this.value=_this.value.filter((function(v){return v!==clickedChip.value})):_this.value=[].concat((0,toConsumableArray.A)(_this.value),[clickedChip.value]):_this.value=clickedChip.value,_this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip,value:_this.value},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_collapseThreshold,3),(0,chunk_5VURDMKE.VK)((0,assertThisInitialized.A)(_this),_collapsedAt,0),_this}return(0,createClass.A)(GdsFilterChips,[{key:"chips",get:function get(){return this._elSlot?this._elSlot.assignedElements():[]}},{key:"render",value:function render(){var layoutClasses={collapse:this._collapsed};return(0,chunk_VOYMQ322.qy)(_t2||(_t2=_templateObject2||(_templateObject2=taggedTemplateLiteralLoose_default()(['<div\n      class="chips ','"\n      role="listbox"\n      aria-label=',"\n      aria-multiselectable=",'\n    >\n      <slot\n        gds-allow="gds-filter-chip"\n        @click=',"\n        @slotchange=",'\n        role="none"\n      ></slot>\n    </div>']))),(0,class_map.H)(layoutClasses),this.label,this.multiple,(0,chunk_5VURDMKE.S7)(this,_handleChipClick),(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this}},{key:"_handleResize",value:function _handleResize(){if(this.rowCollapse){var chipHeight=(0,chunk_5VURDMKE.jq)(this,_getChipHeight,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_5VURDMKE.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_5VURDMKE.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_5VURDMKE.S7)(this,_collapsedAt)&&(this._collapsed=!1)}}},{key:"_updateSelectedFromValue",value:function _updateSelectedFromValue(){var _this2=this;this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((function(){_this2.chips.forEach((function(chip){chip.selected=_this2.multiple?_this2.value.includes(chip.value):_this2.value===chip.value}))})))}}]),GdsFilterChips}(chunk_2BMJPIND.S);_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_getChipHeight=new WeakSet,getChipHeight_fn=function getChipHeight_fn(){var _a;return(null==(_a=this.chips[0])?void 0:_a.offsetHeight)||0},_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,selChipValue=null==(_a=this.chips.find((function(s){return s.selected})))?void 0:_a.value;selChipValue&&(this.value=selChipValue)},GdsFilterChips.styles=[styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.xj})],GdsFilterChips.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([(0,chunk_VHN4JEZC.b)()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chips")],GdsFilterChips);var chunk_IYFOMPYU_templateObject,chunk_IYFOMPYU_templateObject2,chunk_IYFOMPYU_t,chunk_IYFOMPYU_t2,get=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/get.js"),chunk_S7DYDS4E=__webpack_require__("./dist/libs/core/src/chunks/chunk.S7DYDS4E.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js");function chunk_IYFOMPYU_createSuper(Derived){var hasNativeReflectConstruct=chunk_IYFOMPYU_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,getPrototypeOf.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,getPrototypeOf.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,possibleConstructorReturn.A)(this,result)}}function chunk_IYFOMPYU_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_IYFOMPYU_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var chunk_IYFOMPYU_styles=(0,lit.AH)(chunk_IYFOMPYU_t||(chunk_IYFOMPYU_t=chunk_IYFOMPYU_templateObject||(chunk_IYFOMPYU_templateObject=taggedTemplateLiteralLoose_default()(["\n  @layer base, reset, transitional-styles;\n  @layer base {\n    .btn-p {\n      padding: 0 0.75rem;\n    }\n    .icon {\n      width: 1rem;\n    }\n  }\n"])))),GdsFilterChip=function(_GdsElement){(0,inherits.A)(GdsFilterChip,_GdsElement);var _super=chunk_IYFOMPYU_createSuper(GdsFilterChip);function GdsFilterChip(){var _this;return(0,classCallCheck.A)(this,GdsFilterChip),(_this=_super.apply(this,arguments)).selected=!1,_this}return(0,createClass.A)(GdsFilterChip,[{key:"connectedCallback",value:function connectedCallback(){(0,get.A)((0,getPrototypeOf.A)(GdsFilterChip.prototype),"connectedCallback",this).call(this),this.setAttribute("role","none"),chunk_S7DYDS4E.nD.instance.apply(this,"gds-filter-chip"),this._button.then((function(btn){chunk_S7DYDS4E.nD.instance.apply(btn,"gds-button")}))}},{key:"render",value:function render(){var btnClasses={"btn-p":!this.selected};return(0,chunk_VOYMQ322.qy)(chunk_IYFOMPYU_t2||(chunk_IYFOMPYU_t2=chunk_IYFOMPYU_templateObject2||(chunk_IYFOMPYU_templateObject2=taggedTemplateLiteralLoose_default()(['<gds-button\n      class="btn"\n      size="small"\n      .rank=',"\n      variant=",'\n      gds-role="option"\n      gds-aria-selected=',"\n    >\n      <span class=",'><slot></slot></span>\n      <gds-icon-checkmark\n        slot="trail"\n        style="display: ','"\n        width="16"\n        height="16"\n        class="icon"\n      ></gds-icon-checkmark>\n    </gds-button>']))),this.selected?"primary":"secondary",this._isUsingTransitionalStyles?"ghost":"default",this.selected,(0,class_map.H)(btnClasses),this.selected?"contents":"none")}}]),GdsFilterChip}(chunk_ZQ4D5K7J.j);GdsFilterChip.styles=[chunk_IYFOMPYU_styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)((0,chunk_VOYMQ322.Eq)("gds-button"))],GdsFilterChip.prototype,"_button",2),GdsFilterChip=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chip")],GdsFilterChip);__webpack_require__("./dist/libs/core/src/chunks/chunk.IJPS3IHQ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.Q6LYQSGS.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZUMVMHZJ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.EW7FWNQ4.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.7WQXNT34.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.GXHIMWQK.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js"),FilterChips=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chips"),elementClass:GdsFilterChips,react}),FilterChip=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-filter-chip"),elementClass:GdsFilterChip,react}),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",a:"a",h2:"h2",code:"code",pre:"pre",strong:"strong"},(0,lib.RP)(),props.components);return(0,jsx_runtime.jsxs)(jsx_runtime.Fragment,{children:[(0,jsx_runtime.jsx)(dist.W8,{title:"Components/Filter Chips",component:FilterChips}),"\n",(0,jsx_runtime.jsx)(_components.h1,{id:"filter-chips",children:"Filter Chips"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.a,{href:"https://github.com/sebgroup/green/tree/main/libs/react/src/lib/filter-chips",target:"_blank",rel:"nofollow noopener noreferrer",children:"Source code"}),"\n | \n",(0,jsx_runtime.jsx)(_components.a,{href:"https://designlibrary.sebgroup.com/components/filter-chip",target:"_blank",rel:"nofollow noopener noreferrer",children:"Usage guidelines"})]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"importing-the-component",children:"Importing the component"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["To use the component, import ",(0,jsx_runtime.jsx)(_components.code,{children:"FilterChips"})," and ",(0,jsx_runtime.jsx)(_components.code,{children:"FilterChip"})," like this:"]}),"\n",(0,jsx_runtime.jsx)(_components.pre,{children:(0,jsx_runtime.jsx)(_components.code,{className:"language-jsx",children:'import { FilterChips, FilterChip } from \'@sebgroup/green-react\'\n\n// Use as JSX element in your app\nreturn (\n  <FilterChips value="division" label="Select a filter category">\n    <FilterChip value="all">All</FilterChip>\n    <FilterChip value="top-news">Top news</FilterChip>\n    <FilterChip value="division">Division</FilterChip>\n    <FilterChip value="global">Global</FilterChip>\n    <FilterChip value="country">Country</FilterChip>\n    <FilterChip value="lcfi">\n      Large Corporate & Financial Institutions\n    </FilterChip>\n  </FilterChips>\n)\n'})}),"\n",(0,jsx_runtime.jsx)(dist.Hl,{mdxSource:'<FilterChips value="division" label="Select a filter category"><FilterChip value="all">{"All"}</FilterChip><FilterChip value="top-news">{"Top news"}</FilterChip><FilterChip value="division">{"Division"}</FilterChip><FilterChip value="global">{"Global"}</FilterChip><FilterChip value="country">{"Country"}</FilterChip><FilterChip value="lcfi"><p>{"Large Corporate & Financial Institutions"}</p></FilterChip></FilterChips>',children:(0,jsx_runtime.jsxs)(FilterChips,{value:"division",label:"Select a filter category",children:[(0,jsx_runtime.jsx)(FilterChip,{value:"all",children:"All"}),(0,jsx_runtime.jsx)(FilterChip,{value:"top-news",children:"Top news"}),(0,jsx_runtime.jsx)(FilterChip,{value:"division",children:"Division"}),(0,jsx_runtime.jsx)(FilterChip,{value:"global",children:"Global"}),(0,jsx_runtime.jsx)(FilterChip,{value:"country",children:"Country"}),(0,jsx_runtime.jsx)(FilterChip,{value:"lcfi",children:(0,jsx_runtime.jsx)(_components.p,{children:"Large Corporate & Financial Institutions"})})]})}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:[(0,jsx_runtime.jsx)(_components.strong,{children:"Note:"})," It is important to remember to set the label attribute. Omitting it will cause poor accessibility for screen reader useSharedState. Internally in the component, the label attribute will be used to set ",(0,jsx_runtime.jsx)(_components.code,{children:"aria-label"})," for the appropriate element."]}),"\n",(0,jsx_runtime.jsx)(_components.h2,{id:"more-examples",children:"More examples"}),"\n",(0,jsx_runtime.jsxs)(_components.p,{children:["For various examples of how to use the component, head over to the ",(0,jsx_runtime.jsx)(_components.a,{href:"https://storybook.seb.io/latest/core/?path=/story/components-filter-chips--page",target:"_blank",rel:"nofollow noopener noreferrer",children:"Green Core storybook"})]})]})}const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Components/Filter Chips",component:FilterChips,tags:["stories-mdx"],includeStories:["__page"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.RP)(),props.components);return MDXLayout?(0,jsx_runtime.jsx)(MDXLayout,{...props,children:(0,jsx_runtime.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const filter_chip_stories=componentMeta,__namedExportsOrder=["__page"]},"./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{w:()=>watch});var _chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function watch(propertyName,options){var resolvedOptions=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.IA)({waitUntilFirstUpdate:!1},options);return function(proto,propertyKey,descriptor){var update=proto.update,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){var _this=this;watchedProperties.forEach((function(property){var _a,key=property;if(changedProps.has(key)){var oldValue=changedProps.get(key),newValue=_this[key];oldValue!==newValue&&(resolvedOptions.waitUntilFirstUpdate&&!_this.hasUpdated||null==(_a=descriptor.value)||_a.call(_this,oldValue,newValue))}})),update.call(this,changedProps)}}}},"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:function fromAttribute(value){return new Date(value)},toAttribute:function toAttribute(value){return value.toISOString()}},dateArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",").map((function(d){return new Date(d.trim())}))},toAttribute:function toAttribute(value){return JSON.stringify(value.map((function(d){return d.toISOString()})))}},stringArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",")},toAttribute:function toAttribute(value){return Array.isArray(value)?value.join(","):value}}},"./dist/libs/core/src/chunks/chunk.Q6LYQSGS.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{M:()=>GdsIcon});var _templateObject,_t,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/inherits.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_chunk_ZUMVMHZJ_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZUMVMHZJ.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js");function _createSuper(Derived){var hasNativeReflectConstruct=_isNativeReflectConstruct();return function _createSuperInternal(){var result,Super=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__.A)(Derived);if(hasNativeReflectConstruct){var NewTarget=(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_1__.A)(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_2__.A)(this,result)}}function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsIcon=function(_GdsElement){(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__.A)(GdsIcon,_GdsElement);var _super=_createSuper(GdsIcon);function GdsIcon(){var _this;return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_10__.A)(this,GdsIcon),(_this=_super.apply(this,arguments)).solid=!1,_this.box=!1,_this.label="",_this}return(0,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_11__.A)(GdsIcon,[{key:"render",value:function render(){var isSebIcon="seb"===this.constructor._name,width=isSebIcon?"55":void 0!==this.width?this.width.toString():void 0,height=isSebIcon?"24":void 0!==this.height?this.height.toString():"1lh",viewBox=isSebIcon?"0 0 55 24":this.box||"0 0 24 24",svgContent="<svg\n      ".concat(width?'width="'.concat(width,'"'):"",'\n      height="').concat(height,'"\n      viewBox="').concat(viewBox,'"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      ').concat(this.label?'aria-label="'.concat(this.label,'"'):'aria-label="'.concat(this.constructor._name,'"'),'\n      role="graphics-symbol"\n      part="icon" \n    >\n      ').concat(this.solid?this.constructor._solidSVG:this.constructor._regularSVG,"\n    </svg>");return this.stroke&&(svgContent=svgContent.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,'<$1 stroke-width="'.concat(this.stroke,'"'))),(0,lit__WEBPACK_IMPORTED_MODULE_6__.qy)(_t||(_t=_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(["",""]))),(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__._)(svgContent))}}]),GdsIcon}(_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_4__.j);GdsIcon.styles=[_chunk_ZUMVMHZJ_js__WEBPACK_IMPORTED_MODULE_3__.q],(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Number})],GdsIcon.prototype,"width",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Number})],GdsIcon.prototype,"height",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean})],GdsIcon.prototype,"solid",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Number})],GdsIcon.prototype,"stroke",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:String})],GdsIcon.prototype,"box",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:String})],GdsIcon.prototype,"label",2)},"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function resizeObserver(){return function(proto,propertyKey,descriptor){var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((function(){_this.__resizeObserver_tids[propertyKey]&&clearTimeout(_this.__resizeObserver_tids[propertyKey]),_this.__resizeObserver_tids[propertyKey]=setTimeout((function(){var _a;null==(_a=descriptor.value)||_a.call(_this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})},"./dist/libs/core/src/chunks/chunk.ZUMVMHZJ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{q:()=>icon_style_css_default});var _templateObject,_t,_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@nx/js/node_modules/@babel/runtime/helpers/taggedTemplateLiteralLoose.js"),_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0__),icon_style_css_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=_templateObject||(_templateObject=_home_runner_work_green_green_node_modules_nx_js_node_modules_babel_runtime_helpers_taggedTemplateLiteralLoose_js__WEBPACK_IMPORTED_MODULE_0___default()(["\n  @layer icon;\n\n  @layer icon {\n    :host {\n      display: contents;\n    }\n  }\n"]))))},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);