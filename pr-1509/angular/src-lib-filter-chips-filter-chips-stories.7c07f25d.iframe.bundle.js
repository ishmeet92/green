"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[8743],{"./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watch});var _chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js");function watch(propertyName,options){const resolvedOptions=(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_0__.IA)({waitUntilFirstUpdate:!1},options);return(proto,propertyKey,descriptor)=>{const{update}=proto,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){watchedProperties.forEach((property=>{var _a;const key=property;if(changedProps.has(key)){const oldValue=changedProps.get(key),newValue=this[key];oldValue!==newValue&&(resolvedOptions.waitUntilFirstUpdate&&!this.hasUpdated||null==(_a=descriptor.value)||_a.call(this,oldValue,newValue))}})),update.call(this,changedProps)}}}},"./dist/libs/core/src/chunks/chunk.L7I7KHQL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{q:()=>icon_style_css_default});var icon_style_css_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer icon;

  @layer icon {
    :host {
      display: contents;
    }

    :host(:not([width], [height])) {
      & > svg {
        height: 1lh;
        width: auto;
      }
    }
  }
`},"./dist/libs/core/src/chunks/chunk.TPR3GICT.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>GdsIcon});var _chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),_chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),GdsIcon=class extends _chunk_ZQ4D5K7J_js__WEBPACK_IMPORTED_MODULE_1__.j{constructor(){super(...arguments),this.width=24,this.height=24,this.solid=!1,this.box=!1,this.label=""}render(){const isSebIcon="seb"===this.constructor._name,svgContent=`<svg\n      width="${isSebIcon?"55":this.width}"\n      height="${isSebIcon?"24":this.height}"\n      viewBox="${isSebIcon?"0 0 55 24":this.box||"0 0 24 24"}"\n      fill="none"\n      xmlns="http://www.w3.org/2000/svg"\n      ${this.label?`aria-label="${this.label}"`:`aria-label="${this.constructor._name}"`}\n      role="graphics-symbol"\n    >\n      ${this.solid?this.constructor._solidSVG:this.constructor._regularSVG}\n    </svg>`;return lit__WEBPACK_IMPORTED_MODULE_3__.qy`${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_5__._)(svgContent)}`}};GdsIcon.styles=[_chunk_L7I7KHQL_js__WEBPACK_IMPORTED_MODULE_0__.q],(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Number})],GdsIcon.prototype,"width",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Number})],GdsIcon.prototype,"height",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean})],GdsIcon.prototype,"solid",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:String})],GdsIcon.prototype,"box",2),(0,_chunk_5VURDMKE_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:String})],GdsIcon.prototype,"label",2)},"./libs/angular/src/lib/filter-chips/filter-chips.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>filter_chips_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");var _handleChipClick,_collapseThreshold,_collapsedAt,_getChipHeight,getChipHeight_fn,_handleSlotChange,handleSlotChange_fn,chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_2BMJPIND=__webpack_require__("./dist/libs/core/src/chunks/chunk.2BMJPIND.js"),chunk_2WO4NHJ2=__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),chunk_VOYMQ322=__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),chunk_5VURDMKE=__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit=__webpack_require__("./node_modules/lit/index.js"),styles=lit.AH`
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
`,GdsFilterChips=class extends chunk_2BMJPIND.S{constructor(){super(...arguments),(0,chunk_5VURDMKE.VK)(this,_getChipHeight),(0,chunk_5VURDMKE.VK)(this,_handleSlotChange),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,(0,chunk_5VURDMKE.VK)(this,_handleChipClick,(event=>{const clickedChip=this.chips.find((s=>s===event.target||s.contains(event.target)));clickedChip&&(this.multiple&&Array.isArray(this.value)?clickedChip.selected?this.value=this.value.filter((v=>v!==clickedChip.value)):this.value=[...this.value,clickedChip.value]:this.value=clickedChip.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip,value:this.value},bubbles:!0,composed:!0})))})),(0,chunk_5VURDMKE.VK)(this,_collapseThreshold,3),(0,chunk_5VURDMKE.VK)(this,_collapsedAt,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const layoutClasses={collapse:this._collapsed};return chunk_VOYMQ322.qy`<div
      class="chips ${(0,class_map.H)(layoutClasses)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${(0,chunk_5VURDMKE.S7)(this,_handleChipClick)}
        @slotchange=${(0,chunk_5VURDMKE.jq)(this,_handleSlotChange,handleSlotChange_fn)}
        role="none"
      ></slot>
    </div>`}_getValidityAnchor(){return this}_handleResize(){if(!this.rowCollapse)return;const chipHeight=(0,chunk_5VURDMKE.jq)(this,_getChipHeight,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_5VURDMKE.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_5VURDMKE.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_5VURDMKE.S7)(this,_collapsedAt)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((()=>{this.chips.forEach((chip=>{chip.selected=this.multiple?this.value.includes(chip.value):this.value===chip.value}))})))}};_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_getChipHeight=new WeakSet,getChipHeight_fn=function(){var _a;return(null==(_a=this.chips[0])?void 0:_a.offsetHeight)||0},_handleSlotChange=new WeakSet,handleSlotChange_fn=function(){var _a;const selChipValue=null==(_a=this.chips.find((s=>s.selected)))?void 0:_a.value;selChipValue&&(this.value=selChipValue)},GdsFilterChips.styles=[styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.xj})],GdsFilterChips.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_5VURDMKE.Cc)([function resizeObserver(){return(proto,propertyKey,descriptor)=>{const connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){null==connectedCallback||connectedCallback.call(this),this.__resizeObservers=this.__resizeObservers||{},this.__resizeObserver_tids=this.__resizeObserver_tids||{},this.__resizeObservers[propertyKey]=new ResizeObserver((()=>{this.__resizeObserver_tids[propertyKey]&&clearTimeout(this.__resizeObserver_tids[propertyKey]),this.__resizeObserver_tids[propertyKey]=setTimeout((()=>{var _a;null==(_a=descriptor.value)||_a.call(this)}),20)})),this.__resizeObservers[propertyKey].observe(this)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),this.__resizeObservers[propertyKey].disconnect()}}}()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_5VURDMKE.Cc)([(0,chunk_2WO4NHJ2.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chips")],GdsFilterChips);var chunk_UZLOEUQK=__webpack_require__("./dist/libs/core/src/chunks/chunk.UZLOEUQK.js"),chunk_ZQ4D5K7J=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),chunk_LJLIYGQD_styles=lit.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`,GdsFilterChip=class extends chunk_ZQ4D5K7J.j{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),chunk_UZLOEUQK.nD.instance.apply(this,"gds-filter-chip"),this._button.then((btn=>{chunk_UZLOEUQK.nD.instance.apply(btn,"gds-button")}))}render(){const btnClasses={"btn-p":!this.selected};return chunk_VOYMQ322.qy`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${(0,class_map.H)(btnClasses)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};GdsFilterChip.styles=[chunk_LJLIYGQD_styles],(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_5VURDMKE.Cc)([(0,decorators.nJ)((0,chunk_VOYMQ322.Eq)("gds-button"))],GdsFilterChip.prototype,"_button",2),GdsFilterChip=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-filter-chip")],GdsFilterChip);var chunk_TPR3GICT=__webpack_require__("./dist/libs/core/src/chunks/chunk.TPR3GICT.js"),IconCheckmark=class extends chunk_TPR3GICT.M{};IconCheckmark._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCheckmark._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7426 2.99454C22.2979 3.40464 22.4157 4.18729 22.0056 4.74263L10.0056 20.9926C9.80433 21.2652 9.50107 21.4443 9.16524 21.4891C8.82942 21.5339 8.4898 21.4404 8.22417 21.2301L2.22417 16.4801C1.6829 16.0516 1.59149 15.2655 2.01999 14.7242C2.4485 14.1829 3.23466 14.0915 3.77593 14.52L8.76241 18.4677L19.9945 3.25753C20.4046 2.70218 21.1873 2.58444 21.7426 2.99454Z" fill="currentColor"/>',IconCheckmark._name="checkmark",IconCheckmark=(0,chunk_5VURDMKE.Cc)([(0,chunk_VOYMQ322.Y$)("gds-icon-checkmark")],IconCheckmark);__webpack_require__("./dist/libs/core/src/chunks/chunk.L7I7KHQL.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.TYTFCVBJ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.KEVTYUSS.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.PTBHAPXV.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js");var core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts");const filter_chips_stories={title:"Components/Filter Chips",decorators:[(0,dist.moduleMetadata)({imports:[core_element_module.$],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],parameters:{}},Default=(args=>({template:`\n  <gds-filter-chips *nggCoreElement value="top-news" label="${args.label}">\n    <gds-filter-chip *nggCoreElement value="all">All</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="top-news">Top news</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="division">Division</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="global">Global</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="country">Country</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="lcfi">\n      Large Corporate & Financial Institutions\n    </gds-filter-chip>\n  </gds-filter-chips>\n    `,props:args})).bind({});Default.args={label:"Select a category to filter results on"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => ({\n  template: `\n  <gds-filter-chips *nggCoreElement value="top-news" label="${args.label}">\n    <gds-filter-chip *nggCoreElement value="all">All</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="top-news">Top news</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="division">Division</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="global">Global</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="country">Country</gds-filter-chip>\n    <gds-filter-chip *nggCoreElement value="lcfi">\n      Large Corporate & Financial Institutions\n    </gds-filter-chip>\n  </gds-filter-chips>\n    `,\n  props: args\n})',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]}}]);
//# sourceMappingURL=src-lib-filter-chips-filter-chips-stories.7c07f25d.iframe.bundle.js.map