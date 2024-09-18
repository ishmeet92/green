/*! For license information please see 2201.305e3e6c.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2201],{"./node_modules/lit-html/async-directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Kq:()=>$t});var _directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/directive-helpers.js"),_directive_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit-html/directive.js");const mt=(i,t)=>{const e=i._$AN;if(void 0===e)return!1;for(const i of e)i._$AO?.(t,!1),mt(i,t);return!0},_t=i=>{let t,e;do{if(void 0===(t=i._$AM))break;e=t._$AN,e.delete(i),i=t}while(0===e?.size)},wt=i=>{for(let t;t=i._$AM;i=t){let e=t._$AN;if(void 0===e)t._$AN=e=new Set;else if(e.has(i))break;e.add(i),gt(t)}};function bt(i){void 0!==this._$AN?(_t(this),this._$AM=i,wt(this)):this._$AM=i}function yt(i,t=!1,e=0){const s=this._$AH,o=this._$AN;if(void 0!==o&&0!==o.size)if(t)if(Array.isArray(s))for(let i=e;i<s.length;i++)mt(s[i],!1),_t(s[i]);else null!=s&&(mt(s,!1),_t(s));else mt(this,i)}const gt=i=>{i.type==_directive_js__WEBPACK_IMPORTED_MODULE_1__.OA.CHILD&&(i._$AP??=yt,i._$AQ??=bt)};class $t extends _directive_js__WEBPACK_IMPORTED_MODULE_1__.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(i,t,e){super._$AT(i,t,e),wt(this),this.isConnected=i._$AU}_$AO(i,t=!0){i!==this.isConnected&&(this.isConnected=i,i?this.reconnected?.():this.disconnected?.()),t&&(mt(this,i),_t(this))}setValue(i){if((0,_directive_helpers_js__WEBPACK_IMPORTED_MODULE_0__.Rt)(this.t))this.t._$AI(i,this);else{const t=[...this.t._$AH];t[this.i]=i,this.t._$AI(t,this,0)}}disconnected(){}reconnected(){}}},"./node_modules/lit-html/directive-helpers.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Dx:()=>at,KO:()=>pt,Rt:()=>rt,cN:()=>ut,lx:()=>ct,mY:()=>dt,sO:()=>st});var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js");const{I:et}=_lit_html_js__WEBPACK_IMPORTED_MODULE_0__.ge,st=o=>null===o||"object"!=typeof o&&"function"!=typeof o,rt=o=>void 0===o.strings,lt=()=>document.createComment(""),at=(o,t,i)=>{const n=o._$AA.parentNode,e=void 0===t?o._$AB:t._$AA;if(void 0===i){const t=n.insertBefore(lt(),e),l=n.insertBefore(lt(),e);i=new et(t,l,o,o.options)}else{const t=i._$AB.nextSibling,l=i._$AM,c=l!==o;if(c){let t;i._$AQ?.(o),i._$AM=o,void 0!==i._$AP&&(t=o._$AU)!==l._$AU&&i._$AP(t)}if(t!==e||c){let o=i._$AA;for(;o!==t;){const t=o.nextSibling;n.insertBefore(o,e),o=t}}}return i},ct=(o,t,i=o)=>(o._$AI(t,i),o),ht={},dt=(o,t=ht)=>o._$AH=t,ut=o=>o._$AH,pt=o=>{o._$AP?.(!1,!0);let t=o._$AA;const i=o._$AB.nextSibling;for(;t!==i;){const o=t.nextSibling;t.remove(),t=o}}},"./node_modules/lit-html/directives/when.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function nn(n,r,t){return n?r(n):t?.(n)}__webpack_require__.d(__webpack_exports__,{z:()=>nn})},"./node_modules/lit/directive.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{OA:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.OA,WL:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.WL,u$:()=>lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__.u$});var lit_html_directive_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/directive.js")},"./node_modules/lit/directives/if-defined.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{J:()=>to});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const to=t=>t??lit_html.s6},"./node_modules/lit/directives/ref.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>ii,K:()=>Kt});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js"),async_directive=__webpack_require__("./node_modules/lit-html/async-directive.js"),directive=__webpack_require__("./node_modules/lit-html/directive.js");const ii=()=>new Zt;class Zt{}const qt=new WeakMap,Kt=(0,directive.u$)(class extends async_directive.Kq{render(t){return lit_html.s6}update(t,[i]){const s=i!==this.Y;return s&&void 0!==this.Y&&this.rt(void 0),(s||this.lt!==this.ct)&&(this.Y=i,this.ht=t.options?.host,this.rt(this.ct=t.element)),lit_html.s6}rt(t){if(this.isConnected||(t=void 0),"function"==typeof this.Y){const i=this.ht??globalThis;let s=qt.get(i);void 0===s&&(s=new WeakMap,qt.set(i,s)),void 0!==s.get(this.Y)&&this.Y.call(this.ht,void 0),s.set(this.Y,t),void 0!==t&&this.Y.call(this.ht,t)}else this.Y.value=t}get lt(){return"function"==typeof this.Y?qt.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})},"./node_modules/lit/html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{s6:()=>lit_html__WEBPACK_IMPORTED_MODULE_0__.s6});var lit_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit-html/lit-html.js")},"./node_modules/lit/static-html.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{qy:()=>ke,eu:()=>er});var lit_html=__webpack_require__("./node_modules/lit-html/lit-html.js");const $e=Symbol.for(""),xe=t=>{if(t?.r===$e)return t?._$litStatic$},er=(t,...r)=>({_$litStatic$:r.reduce(((r,e,a)=>r+(t=>{if(void 0!==t._$litStatic$)return t._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(e)+t[a+1]),t[0]),r:$e}),Te=new Map,Ee=t=>(r,...e)=>{const a=e.length;let o,s;const i=[],l=[];let n,u=0,c=!1;for(;u<a;){for(n=r[u];u<a&&void 0!==(s=e[u],o=xe(s));)n+=o+r[++u],c=!0;u!==a&&l.push(s),i.push(n),u++}if(u===a&&i.push(r[a]),c){const t=i.join("$$lit$$");void 0===(r=Te.get(t))&&(i.raw=i,Te.set(t,r=i)),e=l}return t(r,...e)},ke=Ee(lit_html.qy);Ee(lit_html.JW),Ee(lit_html.ej)},"./libs/react/src/lib/dropdown/dropdown.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{ms:()=>Dropdown});var objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/@lit/react/index.js"),chunk_HJDLTKJA=__webpack_require__("./dist/libs/core/src/chunks/chunk.HJDLTKJA.js"),chunk_ZBQGNJQP=(__webpack_require__("./dist/libs/core/src/chunks/chunk.Q54LZGGX.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZBQGNJQP.js")),scoping=(__webpack_require__("./dist/libs/core/src/chunks/chunk.O27XCCY5.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.NPTXYRT4.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IA5PLMWU.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2X23R32H.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.LFJRIUDW.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.RPYPYJW6.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IZ4S7TBG.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.FQDJDWFN.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IGJXZGV4.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.XMPMKMXE.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.4PT5HEGB.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.YBOK7MI7.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2BMJPIND.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.3XCSDEVC.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.OUBUF64M.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.2WO4NHJ2.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.ZQ4D5K7J.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.W7CV3QYI.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.VOYMQ322.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.5VURDMKE.js"),__webpack_require__("./dist/libs/core/src/scoping.js")),transitional_styles=__webpack_require__("./dist/libs/core/src/transitional-styles.js"),node_modules_react=__webpack_require__("./node_modules/react/index.js"),context_menu=__webpack_require__("./libs/react/src/lib/context-menu/context-menu.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["compareWith","display","id","informationLabel","label","multiSelect","onChange","options","searchFilter","searchable","texts","useValue","validator","value","syncPopoverWidth","disableMobileStyles"];(0,transitional_styles.Y)();var CoreDropdown=(0,react.a)({tagName:(0,scoping.Eq)("gds-dropdown"),elementClass:chunk_HJDLTKJA.E,events:{onchange:"change"},react:node_modules_react}),CoreOption=(0,react.a)({tagName:(0,scoping.Eq)("gds-option"),elementClass:chunk_ZBQGNJQP.Y,react:node_modules_react}),Dropdown=function Dropdown(_ref){var compareWith=_ref.compareWith,_ref$display=_ref.display,display=void 0===_ref$display?"label":_ref$display,id=_ref.id,informationLabel=_ref.informationLabel,label=_ref.label,multiSelect=_ref.multiSelect,onChange=_ref.onChange,options=_ref.options,searchFilter=_ref.searchFilter,searchable=_ref.searchable,texts=_ref.texts,_ref$useValue=_ref.useValue,useValue=void 0===_ref$useValue?"value":_ref$useValue,validator=_ref.validator,value=_ref.value,syncPopoverWidth=_ref.syncPopoverWidth,disableMobileStyles=_ref.disableMobileStyles,props=(0,objectWithoutProperties.A)(_ref,_excluded);return(0,jsx_runtime.jsx)("div",{className:"form-group",children:(0,jsx_runtime.jsxs)(CoreDropdown,{id,label,searchable,multiple:multiSelect,onchange:function handleOnChange(e){"value"in e.detail&&(null==onChange||onChange(e.detail.value))},invalid:"error"===(null==validator?void 0:validator.indicator),compareWith:function compareWithAdapter(o1,o2){return(compareWith||function(a,b){return a===b})(o1,o2)},value,searchFilter:function searchFilterAdapter(q,o){return searchFilter?searchFilter(q,o.value[useValue]):function(q,o){return o.innerHTML.toLowerCase().includes(q.toLowerCase())}(q,o)},syncPopoverWidth,size:props.size,hideLabel:props.hideLabel,maxHeight:props.maxHeight,disableMobileStyles,children:[informationLabel&&(0,jsx_runtime.jsx)("span",{slot:"sub-label",children:informationLabel}),validator&&(0,jsx_runtime.jsx)("span",{slot:"message",children:validator.message}),(0,jsx_runtime.jsx)(CoreOption,{isPlaceholder:!0,"aria-hidden":!0,children:(null==texts?void 0:texts.placeholder)||"Select"}),options.map((function(option){return option.heading?(0,jsx_runtime.jsx)(context_menu.hM,{children:option[display]},option.label):(0,jsx_runtime.jsx)(CoreOption,{value:option[useValue],children:option[display]},option[useValue])}))]})})};Dropdown.__docgenInfo={description:"",methods:[],displayName:"Dropdown",props:{compareWith:{required:!1,tsType:{name:"signature",type:"function",raw:"(o1: T, o2: T) => boolean",signature:{arguments:[{type:{name:"T"},name:"o1"},{type:{name:"T"},name:"o2"}],return:{name:"boolean"}}},description:""},display:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'label'",computed:!1}},id:{required:!1,tsType:{name:"string"},description:""},informationLabel:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},multiSelect:{required:!1,tsType:{name:"boolean"},description:""},options:{required:!0,tsType:{name:"Array",elements:[{name:"DropdownOption"}],raw:"DropdownOption[]"},description:""},searchFilter:{required:!1,tsType:{name:"signature",type:"function",raw:"(search: string, value: T) => boolean",signature:{arguments:[{type:{name:"string"},name:"search"},{type:{name:"T"},name:"value"}],return:{name:"boolean"}}},description:""},searchable:{required:!1,tsType:{name:"boolean"},description:""},texts:{required:!1,tsType:{name:"DropdownTexts"},description:""},useValue:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"'value'",computed:!1}},validator:{required:!1,tsType:{name:"IValidator"},description:""},value:{required:!1,tsType:{name:"any"},description:""},syncPopoverWidth:{required:!1,tsType:{name:"boolean"},description:"Force width of the popover to match trigger"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Size of the dropdown trigger"},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Hide the label"},maxHeight:{required:!1,tsType:{name:"number"},description:"Max height of the dropdown"},disableMobileStyles:{required:!1,tsType:{name:"boolean"},description:"Whether to disable the mobile styles"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: T) => void",signature:{arguments:[{type:{name:"T"},name:"value"}],return:{name:"void"}}},description:""}}}},"./libs/react/src/lib/dropdown/dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MultiSelect:()=>MultiSelect,OptionHeadings:()=>OptionHeadings,Small:()=>Small,TextAndPlaceholder:()=>TextAndPlaceholder,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),_dropdown__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/react/index.js"),__webpack_require__("./libs/react/src/lib/dropdown/dropdown.tsx")),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["align"],Template=function Template(_ref){_ref.align;var props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_3__.A)(_ref,_excluded);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_dropdown__WEBPACK_IMPORTED_MODULE_1__.ms,Object.assign({},props))};const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Dropdown",component:_dropdown__WEBPACK_IMPORTED_MODULE_1__.ms};var Default={render:Template.bind({}),name:"Dropdown",parameters:{componentIds:["component-dropdown"]},args:(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_defineProperty_js__WEBPACK_IMPORTED_MODULE_4__.A)({options:[{label:"Select",value:null},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}],label:"Dropdown label",multiSelect:!1,searchable:!1,texts:{selected:"selected",placeholder:"Select",close:"Close",optionsDescription:"Options"},onChange:function onChange(value){console.log("OnChange",value)}},"label","Dropdown label"),"syncPopoverWidth",!1)},TextAndPlaceholder={name:"TextAndPlaceholder",render:Template.bind({}),args:{texts:{placeholder:"Select me please!"},label:"Awesome label!!",informationLabel:"Awesome informationLabel!!",options:[{label:"Tacos",value:{id:"tacos",kitchen:"mexican"}},{label:"Pizza",value:{id:"pizza",kitchen:"italian"}},{label:"Sushi",value:{id:"sushi",kitchen:"japanese"}}],compareWith:function compareWith(meal1,meal2){return meal1.id===meal2.id},onChange:function onChange(value){return console.log("OnChange",value)}}},OptionHeadings={name:"OptionHeadings",render:Template.bind({}),args:{label:"Option headings",options:[{label:"Lunch",heading:!0},{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"},{label:"Dinner",heading:!0},{label:"Burger",value:"burger"},{label:"Pasta",value:"pasta"},{label:"Ramen",value:"ramen"}]}},MultiSelect={name:"MultiSelect",render:Template.bind({}),args:{label:"Multi Select",multiSelect:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}},Small={name:"Small",render:Template.bind({}),args:{label:"Small dropdown",size:"small",hideLabel:!0,options:[{label:"Tacos",value:"tacos"},{label:"Pizza",value:"pizza"},{label:"Sushi",value:"sushi"}]}};const __namedExportsOrder=["Default","TextAndPlaceholder","OptionHeadings","MultiSelect","Small"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Dropdown',\n  parameters: {\n    componentIds: ['component-dropdown']\n  },\n  args: {\n    options: [{\n      label: 'Select',\n      value: null\n    }, {\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }],\n    label: 'Dropdown label',\n    multiSelect: false,\n    searchable: false,\n    texts: {\n      selected: 'selected',\n      placeholder: 'Select',\n      close: 'Close',\n      optionsDescription: 'Options'\n    },\n    onChange: value => {\n      console.log('OnChange', value);\n    },\n    label: 'Dropdown label',\n    syncPopoverWidth: false\n  }\n}",...Default.parameters?.docs?.source}}},TextAndPlaceholder.parameters={...TextAndPlaceholder.parameters,docs:{...TextAndPlaceholder.parameters?.docs,source:{originalSource:"{\n  name: 'TextAndPlaceholder',\n  render: Template.bind({}),\n  args: {\n    texts: {\n      placeholder: 'Select me please!'\n    },\n    label: 'Awesome label!!',\n    informationLabel: 'Awesome informationLabel!!',\n    options: [{\n      label: 'Tacos',\n      value: {\n        id: 'tacos',\n        kitchen: 'mexican'\n      }\n    }, {\n      label: 'Pizza',\n      value: {\n        id: 'pizza',\n        kitchen: 'italian'\n      }\n    }, {\n      label: 'Sushi',\n      value: {\n        id: 'sushi',\n        kitchen: 'japanese'\n      }\n    }],\n    compareWith: (meal1, meal2) => meal1.id === meal2.id,\n    onChange: value => console.log('OnChange', value)\n  }\n}",...TextAndPlaceholder.parameters?.docs?.source}}},OptionHeadings.parameters={...OptionHeadings.parameters,docs:{...OptionHeadings.parameters?.docs,source:{originalSource:"{\n  name: 'OptionHeadings',\n  render: Template.bind({}),\n  args: {\n    label: 'Option headings',\n    options: [{\n      label: 'Lunch',\n      heading: true\n    }, {\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }, {\n      label: 'Dinner',\n      heading: true\n    }, {\n      label: 'Burger',\n      value: 'burger'\n    }, {\n      label: 'Pasta',\n      value: 'pasta'\n    }, {\n      label: 'Ramen',\n      value: 'ramen'\n    }]\n  }\n}",...OptionHeadings.parameters?.docs?.source}}},MultiSelect.parameters={...MultiSelect.parameters,docs:{...MultiSelect.parameters?.docs,source:{originalSource:"{\n  name: 'MultiSelect',\n  render: Template.bind({}),\n  args: {\n    label: 'Multi Select',\n    multiSelect: true,\n    options: [{\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }]\n  }\n}",...MultiSelect.parameters?.docs?.source}}},Small.parameters={...Small.parameters,docs:{...Small.parameters?.docs,source:{originalSource:"{\n  name: 'Small',\n  render: Template.bind({}),\n  args: {\n    label: 'Small dropdown',\n    size: 'small',\n    hideLabel: true,\n    options: [{\n      label: 'Tacos',\n      value: 'tacos'\n    }, {\n      label: 'Pizza',\n      value: 'pizza'\n    }, {\n      label: 'Sushi',\n      value: 'sushi'\n    }]\n  }\n}",...Small.parameters?.docs?.source}}}}}]);