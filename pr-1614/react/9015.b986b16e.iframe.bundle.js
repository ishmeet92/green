"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[9015],{"./dist/libs/core/src/chunks/chunk.VHN4JEZC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function resizeObserver(){return function(proto,propertyKey,descriptor){var connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((function(){_this.__resizeObserver_tids[propertyKey]&&clearTimeout(_this.__resizeObserver_tids[propertyKey]),_this.__resizeObserver_tids[propertyKey]=setTimeout((function(){var _a;null==(_a=descriptor.value)||_a.call(_this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}__webpack_require__.d(__webpack_exports__,{b:()=>resizeObserver})},"./libs/react/src/lib/segmented-control/segmented-control.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y4:()=>Segment,Iz:()=>SegmentedControl});var _t,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./node_modules/@lit/react/index.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_VHN4JEZC=__webpack_require__("./dist/libs/core/src/chunks/chunk.VHN4JEZC.js"),chunk_JMP5YJFE=__webpack_require__("./dist/libs/core/src/chunks/chunk.JMP5YJFE.js"),chunk_TYGMNHNO=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),chunk_FPGWK6EK=__webpack_require__("./dist/libs/core/src/chunks/chunk.FPGWK6EK.js"),chunk_6X2WDWO3=__webpack_require__("./dist/libs/core/src/chunks/chunk.6X2WDWO3.js"),chunk_MLXMQIEV=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),chunk_SEHSDSX2=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _value,_handleSlotChange,handleSlotChange_fn,_scrollLeft,_scrollRight,_updateScrollBtnState,_updateScrollBtnStateDebounced,_updateIndicator,_handleSegmentClick,_updateSelectedFromValue,GdsSegmentedControl=function(_GdsElement){function GdsSegmentedControl(){var _this;return(0,classCallCheck.A)(this,GdsSegmentedControl),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsSegmentedControl,arguments),(0,chunk_SEHSDSX2.VK)(_this,_handleSlotChange),_this.size="medium",(0,chunk_SEHSDSX2.VK)(_this,_value,void 0),_this._showPrevButton=!1,_this._showNextButton=!1,_this.intersectionObserver=null,(0,chunk_SEHSDSX2.VK)(_this,_scrollLeft,(function(){var nextLeftOutOfView=_this.segments.filter((function(s,i,arr){var _a;return(null==(_a=arr[i+1])?void 0:_a.isVisible)&&!s.isVisible}))[0];_this._elTrack.scrollLeft=nextLeftOutOfView.offsetLeft})),(0,chunk_SEHSDSX2.VK)(_this,_scrollRight,(function(){var nextRightOutOfView=_this.segments.filter((function(s,i,arr){var _a;return(null==(_a=arr[i-1])?void 0:_a.isVisible)&&!s.isVisible})).reverse()[0];_this._elTrack.scrollLeft=nextRightOutOfView.offsetLeft})),(0,chunk_SEHSDSX2.VK)(_this,_updateScrollBtnState,(function(){_this.segments.every((function(s){return!s.isVisible}))||(_this._showPrevButton=!_this.segments[0].isVisible,_this._showNextButton=!_this.segments[_this.segments.length-1].isVisible)})),(0,chunk_SEHSDSX2.VK)(_this,_updateScrollBtnStateDebounced,function debounce(fn,delay){var timeoutId;return function(){clearTimeout(timeoutId),timeoutId=setTimeout(fn,delay)}}((0,chunk_SEHSDSX2.S7)(_this,_updateScrollBtnState),50)),(0,chunk_SEHSDSX2.VK)(_this,_updateIndicator,(function(){var segment=_this.segments.find((function(s){return s.selected}));if(segment){var segmentWidth=segment.offsetWidth,segmentLeft=segment.offsetLeft;_this._elIndicator.style.transform="translateX(".concat(segmentLeft,"px)"),_this._elIndicator.style.width="".concat(segmentWidth,"px")}else _this._elIndicator.style.transform="translateX(-100%)",_this._elIndicator.style.width="0px"})),(0,chunk_SEHSDSX2.VK)(_this,_handleSegmentClick,(function(event){var selectedSegment=_this.segments.find((function(s){return s===event.target||s.contains(event.target)}));selectedSegment&&(_this.segments.forEach((function(s){return s.selected=!1})),selectedSegment.selected=!0,(0,chunk_SEHSDSX2.OV)(_this,_value,selectedSegment.value),(0,chunk_SEHSDSX2.S7)(_this,_updateIndicator).call(_this),_this.dispatchEvent(new CustomEvent("change",{detail:{segment:selectedSegment},bubbles:!0,composed:!0})))})),(0,chunk_SEHSDSX2.VK)(_this,_updateSelectedFromValue,(function(){(0,chunk_SEHSDSX2.S7)(_this,_value)&&_this.updateComplete.then((function(){var selectedSegment=_this.segments.find((function(s){return s.value===(0,chunk_SEHSDSX2.S7)(_this,_value)}));selectedSegment&&(_this.segments.forEach((function(s){return s.selected=!1})),selectedSegment.selected=!0,_this._elTrack.scrollLeft=selectedSegment.offsetLeft)}))})),_this}return(0,inherits.A)(GdsSegmentedControl,_GdsElement),(0,createClass.A)(GdsSegmentedControl,[{key:"value",get:function get(){return(0,chunk_SEHSDSX2.S7)(this,_value)},set:function set(val){(0,chunk_SEHSDSX2.OV)(this,_value,val),(0,chunk_SEHSDSX2.S7)(this,_updateSelectedFromValue).call(this)}},{key:"segments",get:function get(){return this._elSlot?this._elSlot.assignedElements():[]}},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;!function _superPropGet(t,e,o,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t)}:p}(GdsSegmentedControl,"connectedCallback",this,3)([]),chunk_JMP5YJFE.nD.instance.apply(this,"gds-segmented-control"),this.updateComplete.then((function(){_this2._elTrack.addEventListener("scroll",(function(){(0,chunk_SEHSDSX2.S7)(_this2,_updateScrollBtnStateDebounced).call(_this2)}))}))}},{key:"render",value:function render(){return(0,chunk_MLXMQIEV.qy)(_t||(_t=_`<button
        aria-hidden=${0}
        ?inert=${0}
        id="btn-prev"
        @click=${0}
        aria-label=${0}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${0}
          @slotchange=${0}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${0}
        ?inert=${0}
        id="btn-next"
        @click=${0}
        aria-label=${0}
      >
        <gds-icon-chevron-right />
      </button>`),!this._showPrevButton,!this._showPrevButton,(0,chunk_SEHSDSX2.S7)(this,_scrollLeft),(0,lit_localize.ab)("Scroll right"),(0,chunk_SEHSDSX2.S7)(this,_handleSegmentClick),(0,chunk_SEHSDSX2.jq)(this,_handleSlotChange,handleSlotChange_fn),!this._showNextButton,!this._showNextButton,(0,chunk_SEHSDSX2.S7)(this,_scrollRight),(0,lit_localize.ab)("Scroll right"))}},{key:"_recalculateMinWidth",value:function _recalculateMinWidth(){var _this3=this;this.updateComplete.then((function(){(0,chunk_SEHSDSX2.S7)(_this3,_updateScrollBtnStateDebounced).call(_this3),(0,chunk_SEHSDSX2.S7)(_this3,_updateIndicator).call(_this3)}))}}])}(chunk_6X2WDWO3.j);_value=new WeakMap,_handleSlotChange=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _a,_b,_this4=this,selSegmentValue=null==(_a=this.segments.find((function(s){return s.selected})))?void 0:_a.value;selSegmentValue&&(0,chunk_SEHSDSX2.OV)(this,_value,selSegmentValue),null==(_b=this.intersectionObserver)||_b.disconnect(),this.intersectionObserver=new IntersectionObserver((function(entries){entries.forEach((function(entry){entry.target._isVisible=entry.intersectionRatio>.99}))}),{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach((function(s){var _a2;null==(_a2=_this4.intersectionObserver)||_a2.observe(s)}))},_scrollLeft=new WeakMap,_scrollRight=new WeakMap,_updateScrollBtnState=new WeakMap,_updateScrollBtnStateDebounced=new WeakMap,_updateIndicator=new WeakMap,_handleSegmentClick=new WeakMap,_updateSelectedFromValue=new WeakMap,GdsSegmentedControl.styles=[chunk_FPGWK6EK.LU,(0,lit.iz)(":host {\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border: 0.25rem solid var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  box-sizing: border-box;\n  contain: layout;\n  display: inline-flex;\n  height: 3rem;\n  width: 100%;\n  position: relative;\n  overflow: hidden;\n}\n\n:host([size='small']) {\n  height: 2.5rem;\n}\n\n#track {\n  box-sizing: border-box;\n  display: flex;\n  flex-grow: 1;\n  scroll-snap-type: inline mandatory;\n  overscroll-behavior-x: contain;\n  scroll-behavior: smooth;\n  overflow-x: scroll;\n  gap: 0.25rem;\n  position: relative;\n  scrollbar-width: none;\n}\n\n#track::-webkit-scrollbar {\n  display: none;\n}\n\n#btn-prev,\n#btn-next {\n  box-sizing: border-box;\n  align-items: center;\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  aspect-ratio: 1;\n  background-color: var(--gds-sys-color-container-container-dim1);\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  display: flex;\n  font-size: 1rem;\n  height: 100%;\n  justify-content: center;\n  width: 2.5rem;\n  transition: 0.2s;\n  z-index: 2;\n  position: absolute;\n\n  @media (pointer: fine) {\n    &:hover {\n      background-color: color-mix(\n        in srgb,\n        var(--gds-sys-color-state-layers-state-black-dim1),\n        var(--gds-sys-color-container-container-dim1)\n      );\n    }\n  }\n}\n#btn-prev {\n  margin: 0 0.25rem 0 0;\n}\n#btn-next {\n  margin: 0 0 0 0.25rem;\n  right: 0;\n}\n\n#btn-prev[aria-hidden='true'],\n#btn-next[aria-hidden='true'] {\n  opacity: 0;\n  width: 0;\n  margin: 0;\n  padding: 0;\n}\n\n:host([size='small']) #btn-prev,\n:host([size='small']) #btn-next {\n  width: 2rem;\n}\n\n::slotted(*) {\n  flex-grow: 1;\n  flex-shrink: 0;\n  z-index: 1;\n  scroll-margin: 0 2.75rem;\n  scroll-snap-align: start;\n}\n\n#indicator {\n  background-color: var(--gds-sys-color-container-container-bright);\n  border-radius: calc(infinity * 1px);\n  height: 100%;\n  left: 0;\n  position: absolute;\n  z-index: 0;\n  transition:\n    transform 0.2s,\n    width 0.2s;\n  z-index: 0;\n}\n")],(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({reflect:!0})],GdsSegmentedControl.prototype,"size",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsSegmentedControl.prototype,"value",1),(0,chunk_SEHSDSX2.Cc)([(0,decorators.P)("slot")],GdsSegmentedControl.prototype,"_elSlot",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.P)("#indicator")],GdsSegmentedControl.prototype,"_elIndicator",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.P)("#track")],GdsSegmentedControl.prototype,"_elTrack",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showPrevButton",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.wk)()],GdsSegmentedControl.prototype,"_showNextButton",2),(0,chunk_SEHSDSX2.Cc)([(0,chunk_VHN4JEZC.b)(),(0,chunk_TYGMNHNO.w)("segMinWidth")],GdsSegmentedControl.prototype,"_recalculateMinWidth",1),GdsSegmentedControl=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-segmented-control")],GdsSegmentedControl);var toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator);function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var viewportBreakpoints={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},breakpointValueRegex=/^([<|>]=?)?([0-9a-z]+)/,controlTokens=["{","}",";",":",","],whitespace=[" ","/n"];function tokenize(source){for(var lexemes=[],scanned="",i=0;i<source.length;i++){var c=source[i];whitespace.includes(c)||(scanned+=c),controlTokens.includes(c)?(lexemes.push(scanned.slice(0,-1)),lexemes.push(c),scanned=""):(whitespace.includes(c)||i===source.length-1)&&(lexemes.push(scanned),scanned="")}return lexemes.filter((function(l){return""!==l}))}function parse(tokens){var _a,_step,tree=[],bpScope={breakpoint:"-",values:[]},valueBucket={sel:"",values:[]},_iterator=_createForOfIteratorHelper(tokens);try{for(_iterator.s();!(_step=_iterator.n()).done;){var t=_step.value;if(controlTokens.includes(t)){if("{"===t&&(bpScope={breakpoint:valueBucket.values.join(","),values:[]},valueBucket={sel:"",values:[]}),";"===t&&(0===tree.length&&tree.push(bpScope),valueBucket.values.length>0&&(bpScope.values.push(valueBucket),valueBucket={sel:"",values:[]})),":"===t){var sel=null!=(_a=valueBucket.values.pop())?_a:"";valueBucket.sel=sel}bpScope&&"}"===t&&(bpScope.values.push(valueBucket),valueBucket={sel:"",values:[]},tree.push(bpScope))}else valueBucket.values.push(t)}}catch(err){_iterator.e(err)}finally{_iterator.f()}return valueBucket.values.length>0&&bpScope.values.push(valueBucket),0===tree.length&&tree.push(bpScope),tree}function parseBreakpoint(bp){return bp.split(",").map((function(b){var match=b.trim().match(breakpointValueRegex);if(!match)throw new Error("Invalid breakpoint specifier: ".concat(b));return{condition:match[1],value:match[2]}}))}function toCss(selector,property2,tree){var _step2,valueTemplate=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(v){return v},styleTemplate=arguments.length>4&&void 0!==arguments[4]?arguments[4]:function(p,vs){return"".concat(p,": ").concat(vs.join(" "),";")},css="",_iterator2=_createForOfIteratorHelper(tree);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var bp=_step2.value,query=("-"===bp.breakpoint?[{condition:">=",value:"0"}]:parseBreakpoint(bp.breakpoint)).map((function(b){var _a,_b;return"(".concat((null==(_a=b.condition)?void 0:_a.includes("<"))?"max-width":"min-width",": ").concat(null!=(_b=viewportBreakpoints[b.value])?_b:b.value,")")})).join(" and ");css+="@media ".concat(query," {").concat(bp.values.map((function(bpValues){var sel=selector;bpValues.sel.length>0&&(sel=":host"===selector?":host(:".concat(bpValues.sel,")"):"".concat(selector,":").concat(bpValues.sel));var style=styleTemplate(property2,bpValues.values.map(valueTemplate));return"hover"===bpValues.sel?"@media (hover: hover) {".concat(sel,"{").concat(style,"}}"):"".concat(sel,"{").concat(style,"}")})).join(""),"}")}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return css}var styleCache=new Map;function styleExpressionProperty(options){return function(proto,descriptor){var _a,_b,_c,_d,_set,sel=null!=(_a=null==options?void 0:options.selector)?_a:String(":host"),prop=null!=(_b=null==options?void 0:options.property)?_b:String(descriptor),valueTemplate=null!=(_c=null==options?void 0:options.valueTemplate)?_c:function(v){return"var(--gds-space-".concat(v,", 0)")},styleTemplate=null==options?void 0:options.styleTemplate,cacheKey=null!=(_d=null==options?void 0:options.cacheOverrideKey)?_d:"0";(0,decorators.MZ)({attribute:null==options?void 0:options.attribute,noAccessor:!0})(proto,descriptor),Object.defineProperty(proto,descriptor,{get:function get(){return this["__"+String(descriptor)]},set:(_set=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(newValue){var _a2,lvl,styleKey,ast,css,style;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return this["__"+String(descriptor)]=newValue,_context.next=3,this.updateComplete;case 3:if(lvl=null!=(_a2=this.level)?_a2:"0",styleKey=sel+prop+newValue+lvl+cacheKey,!styleCache.has(styleKey)){_context.next=9;break}return this._dynamicStylesController.inject("sep_".concat(String(descriptor)),styleCache.get(styleKey)),_context.abrupt("return");case 9:ast=parse(tokenize(newValue)),css=toCss(sel,prop,ast,valueTemplate.bind(this),null==styleTemplate?void 0:styleTemplate.bind(this)),style=(0,lit.iz)(css),styleCache.set(styleKey,style),this._dynamicStylesController.inject("sep_".concat(String(descriptor)),style);case 14:case"end":return _context.stop()}}),_callee,this)}))),function set(_x){return _set.apply(this,arguments)})})}}var chunk_T4JIS7GY_t,chunk_T4JIS7GY_=function _(t){return t};function chunk_T4JIS7GY_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_T4JIS7GY_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsSegment=function(_GdsElement){function GdsSegment(){var _this;return(0,classCallCheck.A)(this,GdsSegment),(_this=function chunk_T4JIS7GY_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,chunk_T4JIS7GY_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsSegment,arguments)).selected=!1,_this.disabled=!1,_this._isVisible=!0,_this}return(0,inherits.A)(GdsSegment,_GdsElement),(0,createClass.A)(GdsSegment,[{key:"isVisible",get:function get(){return this._isVisible}},{key:"connectedCallback",value:function connectedCallback(){!function chunk_T4JIS7GY_superPropGet(t,e,o,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),e,o);return 2&r&&"function"==typeof p?function(t){return p.apply(o,t)}:p}(GdsSegment,"connectedCallback",this,3)([]),chunk_JMP5YJFE.nD.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}},{key:"render",value:function render(){return(0,chunk_MLXMQIEV.qy)(chunk_T4JIS7GY_t||(chunk_T4JIS7GY_t=chunk_T4JIS7GY_`<button
      aria-current=${0}
      ?disabled="${0}"
    >
      <slot></slot>
    </button>`),String(this.selected),this.disabled)}}])}(chunk_6X2WDWO3.j);GdsSegment.styles=[].concat((0,toConsumableArray.A)(chunk_FPGWK6EK.LU),[(0,lit.iz)(":host {\n  display: flex;\n  z-index: 1;\n}\n\nbutton {\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  background: transparent;\n  border-radius: calc(infinity * 1px);\n  border-width: 0;\n  color: var(--gds-sys-color-content-content);\n  cursor: pointer;\n  flex-grow: 1;\n  flex-shrink: 0;\n  font-family: inherit;\n  font-size: inherit;\n  overflow: hidden;\n  padding: 0 1rem;\n  text-align: center;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  width: 100%;\n  transition: 0.1s;\n\n  &:disabled {\n    cursor: not-allowed;\n    opacity: 0.5;\n  }\n}\n\n@media (pointer: fine) {\n  :host(:not([selected])) button:hover {\n    background-color: color-mix(\n      in srgb,\n      var(--gds-sys-color-state-layers-state-black-dim1),\n      transparent\n    );\n\n    &:disabled {\n      background-color: transparent;\n    }\n  }\n}\n\nbutton:focus-visible {\n  outline: 2px solid #000;\n  outline-offset: -2px;\n}\n")]),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsSegment.prototype,"selected",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsSegment.prototype,"value",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsSegment.prototype,"disabled",2),(0,chunk_SEHSDSX2.Cc)([styleExpressionProperty({valueTemplate:function valueTemplate(v){return v}})],GdsSegment.prototype,"min-width",2),(0,chunk_SEHSDSX2.Cc)([styleExpressionProperty({valueTemplate:function valueTemplate(v){return v}})],GdsSegment.prototype,"max-width",2),(0,chunk_SEHSDSX2.Cc)([styleExpressionProperty()],GdsSegment.prototype,"width",2),GdsSegment=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-segment")],GdsSegment);__webpack_require__("./dist/libs/core/src/chunks/chunk.I5GXE2MK.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.F7PMLHEM.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.RSYDOUXG.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.JY3EKAVI.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/transitional-styles.js"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["onChange","className"],_excluded2=["className"];(0,transitional_styles.Y)();var CoreSegementedControl=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-segmented-control"),elementClass:GdsSegmentedControl,events:{onchange:"change"},react}),CoreSegment=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-segment"),elementClass:GdsSegment,react}),SegmentedControl=function SegmentedControl(_ref){var onChange=_ref.onChange,className=_ref.className,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)(CoreSegementedControl,Object.assign({onchange:onChange,className:classnames_default()(className)},props))},Segment=function Segment(_ref2){var className=_ref2.className,props=(0,objectWithoutProperties.A)(_ref2,_excluded2);return(0,jsx_runtime.jsx)(CoreSegment,Object.assign({className:classnames_default()(className)},props))};SegmentedControl.__docgenInfo={description:"",methods:[],displayName:"SegmentedControl",props:{value:{required:!1,tsType:{name:"string"},description:""},segMinWidth:{required:!1,tsType:{name:"number"},description:""},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:""},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: Event) => void",signature:{arguments:[{type:{name:"Event"},name:"event"}],return:{name:"void"}}},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}},Segment.__docgenInfo={description:"",methods:[],displayName:"Segment",props:{value:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"union",raw:"ReactNode | ReactNode[]",elements:[{name:"ReactNode"},{name:"Array",elements:[{name:"ReactNode"}],raw:"ReactNode[]"}]},description:""}}}}}]);
//# sourceMappingURL=9015.b986b16e.iframe.bundle.js.map