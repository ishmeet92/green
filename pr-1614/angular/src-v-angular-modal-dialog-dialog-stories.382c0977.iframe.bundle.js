(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1953],{"./libs/angular/src/v-angular/modal/dialog/dialog.component.scss?ngResource":(module,__unused_webpack_exports,__webpack_require__)=>{var ___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/noSourceMaps.js"),___CSS_LOADER_EXPORT___=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/css-loader/dist/runtime/api.js")(___CSS_LOADER_API_NO_SOURCEMAP_IMPORT___);___CSS_LOADER_EXPORT___.push([module.id,"/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n:host {\n  inset: 0;\n  position: fixed;\n  display: grid;\n  place-content: center;\n  z-index: calc(var(--sg-z-index-modal-backdrop) + 1);\n}\n:host .sdv-modal-dialog__container {\n  background: var(--sg-modal-background);\n  display: flex;\n  flex-direction: column;\n  box-shadow: var(--sg-modal-box-shadow);\n  position: absolute;\n  width: 100%;\n  z-index: var(--sg-z-index-modal);\n  position: initial;\n  width: 375px;\n  max-width: 95vw;\n}\n:host .sdv-modal-dialog__container > .header,\n:host .sdv-modal-dialog__container > header {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  border-bottom: solid var(--sg-border-width) var(--sg-border-color);\n  --border-color: var(--sg-border-color);\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n:host .sdv-modal-dialog__container > .header h3,\n:host .sdv-modal-dialog__container > .header .h3,\n:host .sdv-modal-dialog__container > header h3,\n:host .sdv-modal-dialog__container > header .h3 {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n:host .sdv-modal-dialog__container > .header h3 + .close,\n:host .sdv-modal-dialog__container > .header .h3 + .close,\n:host .sdv-modal-dialog__container > header h3 + .close,\n:host .sdv-modal-dialog__container > header .h3 + .close {\n  margin: -7px;\n}\n:host .sdv-modal-dialog__container > .body {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  overflow: auto;\n  width: 100%;\n}\n:host .sdv-modal-dialog__container > .body p {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n:host .sdv-modal-dialog__container > .footer,\n:host .sdv-modal-dialog__container > footer {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  width: 100%;\n}\n@media (min-width: 36em) {\n  :host .sdv-modal-dialog__container > .footer,\n  :host .sdv-modal-dialog__container > footer {\n    display: flex;\n    justify-content: flex-end;\n  }\n}\n@media (max-width: 35.98em) {\n  :host .sdv-modal-dialog__container > .footer button + button,\n  :host .sdv-modal-dialog__container > .footer button + .button,\n  :host .sdv-modal-dialog__container > .footer .button + button,\n  :host .sdv-modal-dialog__container > .footer .button + .button,\n  :host .sdv-modal-dialog__container > footer button + button,\n  :host .sdv-modal-dialog__container > footer button + .button,\n  :host .sdv-modal-dialog__container > footer .button + button,\n  :host .sdv-modal-dialog__container > footer .button + .button {\n    margin-top: 0.75rem;\n  }\n}\n@media (min-width: 36em) {\n  :host .sdv-modal-dialog__container > .footer button + button,\n  :host .sdv-modal-dialog__container > .footer button + .button,\n  :host .sdv-modal-dialog__container > .footer .button + button,\n  :host .sdv-modal-dialog__container > .footer .button + .button,\n  :host .sdv-modal-dialog__container > footer button + button,\n  :host .sdv-modal-dialog__container > footer button + .button,\n  :host .sdv-modal-dialog__container > footer .button + button,\n  :host .sdv-modal-dialog__container > footer .button + .button {\n    margin-left: 0.75rem;\n  }\n}\n:host .sdv-modal-dialog__container.medium {\n  width: 512px;\n}\n:host .sdv-modal-dialog__container.large {\n  width: 720px;\n}\n:host .sdv-modal-dialog__heading {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  border-bottom: solid var(--sg-border-width) var(--sg-border-color);\n  --border-color: var(--sg-border-color);\n  display: inline-flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n}\n:host .sdv-modal-dialog__heading h3,\n:host .sdv-modal-dialog__heading .h3 {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n:host .sdv-modal-dialog__heading h3 + .close,\n:host .sdv-modal-dialog__heading .h3 + .close {\n  margin: -7px;\n}\n:host .sdv-modal-dialog__heading button {\n  display: grid;\n  place-content: center;\n}\n:host .sdv-modal-dialog__body {\n  padding-left: 1rem;\n  padding-right: 1rem;\n  padding-bottom: 1rem;\n  padding-top: 1rem;\n  overflow: auto;\n  width: 100%;\n}\n:host .sdv-modal-dialog__body p {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n:host .sdv-modal-backdrop {\n  background: rgba(0, 0, 0, 0.35);\n  inset: 0;\n  position: fixed;\n  z-index: 999;\n  /* Override IBP leakage Todo: remove this if not needed in the future */\n  display: block;\n  transition: opacity 500ms cubic-bezier(0.33, 1, 0.68, 1);\n}\n:host .sdv-modal-backdrop--transparent {\n  opacity: 0;\n}\n:host .sdv-modal-backdrop--transparent.entered, :host .sdv-modal-backdrop--transparent.is-entering {\n  opacity: 1;\n}\n:host .sdv-modal-backdrop--transparent.is-exiting {\n  opacity: 0;\n}",""]),module.exports=___CSS_LOADER_EXPORT___.toString()},"./dist/libs/core/src/chunks/chunk.MLXMQIEV.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Eq:()=>getScopedTagName,M:()=>VER_SUFFIX,Y$:()=>gdsCustomElement,qy:()=>html});var _chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lit/decorators.js"),VER_SUFFIX="-gdsvsuffix",ScopedElementRegistry=class{static get instance(){var _a;return(null==(_a=globalThis.__gdsElementLookupTable)?void 0:_a[VER_SUFFIX])||(globalThis.__gdsElementLookupTable=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.ko)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.IA)({},globalThis.__gdsElementLookupTable),{[VER_SUFFIX]:new Map})),globalThis.__gdsElementLookupTable[VER_SUFFIX]}};var gdsCustomElement=tagName=>globalThis.GDS_DISABLE_VERSIONED_ELEMENTS?function unscopedCustomElement(tagName){return ScopedElementRegistry.instance.set(tagName,tagName),function(constructor){return constructor.prototype.gdsElementName=tagName,(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.EM)(tagName)(constructor)}}(tagName):function scopedCustomElement(tagName){const versionedTagName=tagName+VER_SUFFIX;return ScopedElementRegistry.instance.set(tagName,versionedTagName),function(constructor){return constructor.prototype.gdsElementName=tagName,customElements.get(versionedTagName)?_constructor=>!1:(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_2__.EM)(versionedTagName)(constructor)}}(tagName),templateCache=new WeakMap;var replaceTags=inStr=>inStr.map((s=>{for(const[key,value]of ScopedElementRegistry.instance.entries())s=s.replace(new RegExp(`${key}(?![-a-z])`,"mg"),value);return s}));var html=function htmlTemplateTagFactory(extendedTag){return(strings,...values)=>{if(globalThis.GDS_DISABLE_VERSIONED_ELEMENTS)return extendedTag(strings,...values);const[modstrings,...modvalues]=function applyElementScoping(strings,...values){let modstrings=templateCache.get(strings);return modstrings||(modstrings=replaceTags(strings),modstrings.raw=replaceTags(strings.raw),templateCache.set(strings,modstrings)),[modstrings,...values]}(strings,...values);return extendedTag(modstrings,...modvalues)}}(lit__WEBPACK_IMPORTED_MODULE_1__.qy);function getScopedTagName(tagName){var _a;return null!=(_a=ScopedElementRegistry.instance.get(tagName))?_a:tagName}},"./dist/libs/core/src/chunks/chunk.SEHSDSX2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Cc:()=>__decorateClass,IA:()=>__spreadValues,OV:()=>__privateSet,S7:()=>__privateGet,VK:()=>__privateAdd,jq:()=>__privateMethod,ko:()=>__spreadProps});var __defProp=Object.defineProperty,__defProps=Object.defineProperties,__getOwnPropDesc=Object.getOwnPropertyDescriptor,__getOwnPropDescs=Object.getOwnPropertyDescriptors,__getOwnPropSymbols=Object.getOwnPropertySymbols,__hasOwnProp=Object.prototype.hasOwnProperty,__propIsEnum=Object.prototype.propertyIsEnumerable,__defNormalProp=(obj,key,value)=>key in obj?__defProp(obj,key,{enumerable:!0,configurable:!0,writable:!0,value}):obj[key]=value,__spreadValues=(a,b)=>{for(var prop in b||(b={}))__hasOwnProp.call(b,prop)&&__defNormalProp(a,prop,b[prop]);if(__getOwnPropSymbols)for(var prop of __getOwnPropSymbols(b))__propIsEnum.call(b,prop)&&__defNormalProp(a,prop,b[prop]);return a},__spreadProps=(a,b)=>__defProps(a,__getOwnPropDescs(b)),__decorateClass=(decorators,target,key,kind)=>{for(var decorator,result=kind>1?void 0:kind?__getOwnPropDesc(target,key):target,i=decorators.length-1;i>=0;i--)(decorator=decorators[i])&&(result=(kind?decorator(target,key,result):decorator(result))||result);return kind&&result&&__defProp(target,key,result),result},__accessCheck=(obj,member,msg)=>{if(!member.has(obj))throw TypeError("Cannot "+msg)},__privateGet=(obj,member,getter)=>(__accessCheck(obj,member,"read from private field"),getter?getter.call(obj):member.get(obj)),__privateAdd=(obj,member,value)=>{if(member.has(obj))throw TypeError("Cannot add the same private member more than once");member instanceof WeakSet?member.add(obj):member.set(obj,value)},__privateSet=(obj,member,value,setter)=>(__accessCheck(obj,member,"write to private field"),setter?setter.call(obj,value):member.set(obj,value),value),__privateMethod=(obj,member,method)=>(__accessCheck(obj,member,"access private method"),method)},"./libs/angular/src/lib/shared/core-element/core-element.directive.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{L:()=>NggCoreElementDirective});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),chunk_MLXMQIEV=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js");let NggCoreElementDirective=class NggCoreElementDirective{constructor(){this.viewRef=null,this.document=(0,core.inject)(common.DOCUMENT),this.renderer=(0,core.inject)(core.Renderer2),this.vcr=(0,core.inject)(core.ViewContainerRef),this.cdr=(0,core.inject)(core.ChangeDetectorRef),this.template=(0,core.inject)(core.TemplateRef)}ngOnInit(){this.vcr.clear();const originalCreateElement=this.renderer.createElement;this.renderer.createElement=(name,_namespace)=>this.document.createElement((0,chunk_MLXMQIEV.Eq)(name)),this.viewRef=this.vcr.createEmbeddedView(this.template),this.renderer.createElement=originalCreateElement,this.cdr.markForCheck()}};NggCoreElementDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[nggCoreElement]"})],NggCoreElementDirective)},"./libs/angular/src/lib/shared/core-element/core-element.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>NggCoreWrapperModule});var tslib__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_angular_common__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),_angular_core__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),_core_element_directive__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.directive.ts");let NggCoreWrapperModule=class NggCoreWrapperModule{};NggCoreWrapperModule=(0,tslib__WEBPACK_IMPORTED_MODULE_1__.Cg)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({declarations:[_core_element_directive__WEBPACK_IMPORTED_MODULE_0__.L],imports:[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],exports:[_core_element_directive__WEBPACK_IMPORTED_MODULE_0__.L]})],NggCoreWrapperModule)},"./libs/angular/src/lib/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$M:()=>core_element_module.$});var NggOnScrollDirective_1,tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),interval=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/interval.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),throttle=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/throttle.js");const ON_SCROLL_TOKEN=new core.InjectionToken("ON_SCROLL_TOKEN");let NggOnScrollDirective=class NggOnScrollDirective{static{NggOnScrollDirective_1=this}constructor(elementRef){this.elementRef=elementRef,this.onScroll$=new Subject.B,this.destroy$=new Subject.B}ngAfterViewInit(){this.elementRef&&(0,fromEvent.R)(this.elementRef?.nativeElement,"scroll").pipe((0,takeUntil.Q)(this.destroy$),(0,throttle.n)((()=>(0,interval.Y)(30)))).subscribe((()=>{this.onScroll$.next(null)}))}ngOnDestroy(){this.destroy$.next(null),this.destroy$.complete()}static{this.ctorParameters=()=>[{type:core.ElementRef}]}};NggOnScrollDirective=NggOnScrollDirective_1=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[nggOnScroll]",providers:[{provide:ON_SCROLL_TOKEN,useFactory:component=>component?.onScroll$,deps:[NggOnScrollDirective_1]}]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef])],NggOnScrollDirective);let NggSharedModule=class NggSharedModule{};NggSharedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[NggOnScrollDirective],imports:[common.CommonModule],exports:[NggOnScrollDirective]})],NggSharedModule);__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.directive.ts");var core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts")},"./libs/angular/src/v-angular/i18n/i18n.module.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>NgvI18nModule});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),ngneat_transloco=__webpack_require__("./node_modules/@ngneat/transloco/fesm2022/ngneat-transloco.mjs"),lastValueFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js"),of=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/of.js"),delay=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/delay.js");const i18n_namespaceObject=JSON.parse('{"error.fieldinputmask":"Invalid value pattern","error.fieldrequired":"Field must have content","error.fieldmaxlength":"Field content should not be longer than {{requiredLength}} characters","label.defaultlabel":"Label","label.maxlength":"characters left","label.optional":"Optional","button_cancel":"Cancel","button_apply":"Apply","button_save":"Save","text_dialogue":"You can supply the content seen here either through the <code>[content]=\\"string\\"</code> property or</br>by passing children between the opening and closing tags <code>&lt;c-dialog&gt; ...children &lt;/c-dialog&gt;</code>"}');let NgvMissingHandler=class NgvMissingHandler{constructor(transpiler){this.transpiler=transpiler}handle(key,_,params){const keyWithoutLocale="."===key.charAt(2)?key.substring(3):key,withoutScope=keyWithoutLocale.replace(/^((?:\w+)(?<!label|heading|button|alt|link|title|href|fieldhelp|error|text|image|list)(?:\.))/,"");return this.transpiler.transpile(i18n_namespaceObject[keyWithoutLocale],params,{},keyWithoutLocale)||withoutScope}static{this.ctorParameters=()=>[{type:void 0,decorators:[{type:core.Inject,args:[ngneat_transloco.Rv]}]}]}};NgvMissingHandler=(0,tslib_es6.Cg)([(0,core.Injectable)(),(0,tslib_es6.Sn)("design:paramtypes",[Object])],NgvMissingHandler);const en={"error.fieldinputmask":"Invalid value pattern","error.fieldrequired":"Field must have content","error.fieldmaxlength":"Field content should not be longer than {{requiredLength}} characters","label.defaultlabel":"Label","label.maxlength":"characters left","label.optional":"Optional"},sv={"error.fieldinputmask":"Icke giltigt tecken mönster","error.fieldrequired":"Fältet får inte lämnas tomt","error.fieldmaxlength":"Fältinnehållet måste vara längre än {{requiredLength}} tecken","label.maxlength":"tecken kvar"};let NgvI18nModule=class NgvI18nModule{};NgvI18nModule=(0,tslib_es6.Cg)([(0,core.NgModule)({providers:[(0,ngneat_transloco.$o)({config:{availableLangs:["en","sv"],defaultLang:"en",reRenderOnLangChange:!0,prodMode:!(0,core.isDevMode)()},loader:class TranslocoInlineLoader{getTranslation(lang){return"sv"===lang?(0,lastValueFrom.s)((0,of.of)(sv).pipe((0,delay.c)(1500))):(0,lastValueFrom.s)((0,of.of)(en).pipe((0,delay.c)(500)))}}}),(0,ngneat_transloco.Li)(NgvMissingHandler)],exports:[ngneat_transloco.Q8]})],NgvI18nModule)},"./node_modules/rxjs/dist/esm5/internal/lastValueFrom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>lastValueFrom});var _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/EmptyError.js");function lastValueFrom(source,config){var hasConfig="object"==typeof config;return new Promise((function(resolve,reject){var _value,_hasValue=!1;source.subscribe({next:function(value){_value=value,_hasValue=!0},error:reject,complete:function(){_hasValue?resolve(_value):hasConfig?resolve(config.defaultValue):reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_0__.G)}})}))}},"./node_modules/rxjs/dist/esm5/internal/observable/forkJoin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{p:()=>forkJoin});var _Observable__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js"),_innerFrom__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_args__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/args.js"),_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),_util_createObject__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/createObject.js");function forkJoin(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];var resultSelector=(0,_util_args__WEBPACK_IMPORTED_MODULE_0__.ms)(args),_a=(0,_util_argsArgArrayOrObject__WEBPACK_IMPORTED_MODULE_1__.D)(args),sources=_a.args,keys=_a.keys,result=new _Observable__WEBPACK_IMPORTED_MODULE_2__.c((function(subscriber){var length=sources.length;if(length)for(var values=new Array(length),remainingCompletions=length,remainingEmissions=length,_loop_1=function(sourceIndex){var hasValue=!1;(0,_innerFrom__WEBPACK_IMPORTED_MODULE_3__.Tg)(sources[sourceIndex]).subscribe((0,_operators_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_4__._)(subscriber,(function(value){hasValue||(hasValue=!0,remainingEmissions--),values[sourceIndex]=value}),(function(){return remainingCompletions--}),void 0,(function(){remainingCompletions&&hasValue||(remainingEmissions||subscriber.next(keys?(0,_util_createObject__WEBPACK_IMPORTED_MODULE_5__.e)(keys,values):values),subscriber.complete())})))},sourceIndex=0;sourceIndex<length;sourceIndex++)_loop_1(sourceIndex);else subscriber.complete()}));return resultSelector?result.pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_6__.I)(resultSelector)):result}},"./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>fromEvent});var tslib__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_Observable__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Observable.js"),_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isArrayLike.js"),_util_isFunction__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/isFunction.js"),_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js"),nodeEventEmitterMethods=["addListener","removeListener"],eventTargetMethods=["addEventListener","removeEventListener"],jqueryMethods=["on","off"];function fromEvent(target,eventName,options,resultSelector){if((0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(options)&&(resultSelector=options,options=void 0),resultSelector)return fromEvent(target,eventName,options).pipe((0,_util_mapOneOrManyArgs__WEBPACK_IMPORTED_MODULE_1__.I)(resultSelector));var _a=(0,tslib__WEBPACK_IMPORTED_MODULE_2__.zs)(function isEventTarget(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.addEventListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.removeEventListener)}(target)?eventTargetMethods.map((function(methodName){return function(handler){return target[methodName](eventName,handler,options)}})):function isNodeStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.addListener)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.removeListener)}(target)?nodeEventEmitterMethods.map(toCommonHandlerRegistry(target,eventName)):function isJQueryStyleEventEmitter(target){return(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.on)&&(0,_util_isFunction__WEBPACK_IMPORTED_MODULE_0__.T)(target.off)}(target)?jqueryMethods.map(toCommonHandlerRegistry(target,eventName)):[],2),add=_a[0],remove=_a[1];if(!add&&(0,_util_isArrayLike__WEBPACK_IMPORTED_MODULE_3__.X)(target))return(0,_operators_mergeMap__WEBPACK_IMPORTED_MODULE_4__.Z)((function(subTarget){return fromEvent(subTarget,eventName,options)}))((0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.Tg)(target));if(!add)throw new TypeError("Invalid event target");return new _Observable__WEBPACK_IMPORTED_MODULE_6__.c((function(subscriber){var handler=function(){for(var args=[],_i=0;_i<arguments.length;_i++)args[_i]=arguments[_i];return subscriber.next(1<args.length?args:args[0])};return add(handler),function(){return remove(handler)}}))}function toCommonHandlerRegistry(target,eventName){return function(methodName){return function(handler){return target[methodName](eventName,handler)}}}},"./node_modules/rxjs/dist/esm5/internal/observable/interval.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Y:()=>interval});var _scheduler_async__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),_timer__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function interval(period,scheduler){return void 0===period&&(period=0),void 0===scheduler&&(scheduler=_scheduler_async__WEBPACK_IMPORTED_MODULE_0__.E),period<0&&(period=0),(0,_timer__WEBPACK_IMPORTED_MODULE_1__.O)(period,period,scheduler)}},"./node_modules/rxjs/dist/esm5/internal/operators/delay.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>delay});var scheduler_async=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/scheduler/async.js"),concat=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/concat.js"),take=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/take.js"),lift=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),OperatorSubscriber=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),noop=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");var mapTo=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mapTo.js"),mergeMap=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/mergeMap.js"),innerFrom=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function delayWhen(delayDurationSelector,subscriptionDelay){return subscriptionDelay?function(source){return(0,concat.x)(subscriptionDelay.pipe((0,take.s)(1),function ignoreElements(){return(0,lift.N)((function(source,subscriber){source.subscribe((0,OperatorSubscriber._)(subscriber,noop.l))}))}()),source.pipe(delayWhen(delayDurationSelector)))}:(0,mergeMap.Z)((function(value,index){return(0,innerFrom.Tg)(delayDurationSelector(value,index)).pipe((0,take.s)(1),(0,mapTo.u)(value))}))}var timer=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/timer.js");function delay(due,scheduler){void 0===scheduler&&(scheduler=scheduler_async.E);var duration=(0,timer.O)(due,scheduler);return delayWhen((function(){return duration}))}},"./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Q:()=>takeUntil});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js"),_util_noop__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/noop.js");function takeUntil(notifier){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(notifier).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(){return subscriber.complete()}),_util_noop__WEBPACK_IMPORTED_MODULE_3__.l)),!subscriber.closed&&source.subscribe(subscriber)}))}},"./node_modules/rxjs/dist/esm5/internal/operators/throttle.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>throttle});var _util_lift__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/util/lift.js"),_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/OperatorSubscriber.js"),_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/innerFrom.js");function throttle(durationSelector,config){return(0,_util_lift__WEBPACK_IMPORTED_MODULE_0__.N)((function(source,subscriber){var _a=null!=config?config:{},_b=_a.leading,leading=void 0===_b||_b,_c=_a.trailing,trailing=void 0!==_c&&_c,hasValue=!1,sendValue=null,throttled=null,isComplete=!1,endThrottling=function(){null==throttled||throttled.unsubscribe(),throttled=null,trailing&&(send(),isComplete&&subscriber.complete())},cleanupThrottling=function(){throttled=null,isComplete&&subscriber.complete()},startThrottle=function(value){return throttled=(0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_1__.Tg)(durationSelector(value)).subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,endThrottling,cleanupThrottling))},send=function(){if(hasValue){hasValue=!1;var value=sendValue;sendValue=null,subscriber.next(value),!isComplete&&startThrottle(value)}};source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_2__._)(subscriber,(function(value){hasValue=!0,sendValue=value,(!throttled||throttled.closed)&&(leading?send():startThrottle(value))}),(function(){isComplete=!0,(!(trailing&&hasValue&&throttled)||throttled.closed)&&subscriber.complete()})))}))}},"./node_modules/rxjs/dist/esm5/internal/util/argsArgArrayOrObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{D:()=>argsArgArrayOrObject});var isArray=Array.isArray,getPrototypeOf=Object.getPrototypeOf,objectProto=Object.prototype,getKeys=Object.keys;function argsArgArrayOrObject(args){if(1===args.length){var first_1=args[0];if(isArray(first_1))return{args:first_1,keys:null};if(function isPOJO(obj){return obj&&"object"==typeof obj&&getPrototypeOf(obj)===objectProto}(first_1)){var keys=getKeys(first_1);return{args:keys.map((function(key){return first_1[key]})),keys}}}return{args,keys:null}}},"./node_modules/rxjs/dist/esm5/internal/util/createObject.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function createObject(keys,values){return keys.reduce((function(result,key,i){return result[key]=values[i],result}),{})}__webpack_require__.d(__webpack_exports__,{e:()=>createObject})},"./node_modules/rxjs/dist/esm5/internal/util/mapOneOrManyArgs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{I:()=>mapOneOrManyArgs});var tslib__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),_operators_map__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/map.js"),isArray=Array.isArray;function mapOneOrManyArgs(fn){return(0,_operators_map__WEBPACK_IMPORTED_MODULE_1__.T)((function(args){return function callOrApply(fn,args){return isArray(args)?fn.apply(void 0,(0,tslib__WEBPACK_IMPORTED_MODULE_0__.fX)([],(0,tslib__WEBPACK_IMPORTED_MODULE_0__.zs)(args))):fn(args)}(fn,args)}))}},"./libs/angular/src/v-angular/modal/dialog/dialog.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Primary:()=>Primary,__namedExportsOrder:()=>__namedExportsOrder,default:()=>dialog_stories});var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),shared=__webpack_require__("./libs/angular/src/lib/shared/index.ts");"undefined"==typeof window||window.nggv||(window.nggv={ids:{default:-1},nextId(namespace="default"){let id=this.ids[namespace]||0;return"number"==typeof this.ids[namespace]&&id++,this.ids[namespace]=id,"default"===namespace?`nggv-${id}`:`nggv-${namespace}-${id}`}});var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),i18n_module=__webpack_require__("./libs/angular/src/v-angular/i18n/i18n.module.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var dialog_componentngResource=__webpack_require__("./libs/angular/src/v-angular/modal/dialog/dialog.component.scss?ngResource"),dialog_componentngResource_default=__webpack_require__.n(dialog_componentngResource);let NgvDialogComponent=class NgvDialogComponent{constructor(){this.thook="dialog",this.baseClass=!0,this.shown=!1,this.initiallyShown=!1,this.title="Attention",this.autoClose=!0,this.payload={},this.closeModalOnEscape=!0,this.nggvCloseEvent=new core.EventEmitter,this.nggvPositiveEvent=new core.EventEmitter,this.nggvNeutralEvent=new core.EventEmitter,this.nggvNegativeEvent=new core.EventEmitter}get ariaHidden(){return!this.shown}set buttons(buttons){this._buttons=buttons}ngOnInit(){this.dialogTitleId=this.dialogTitleId??"sdv-dialog-title-"+window.nggv?.nextId(),this.dialogBodyId=this.dialogBodyId??"sdv-dialog-body-"+window.nggv?.nextId(),this.shown=this.initiallyShown,this.shown&&this._limitFocusable()}onAction(event,action){event.preventDefault();const emitEvent={original:event,payload:this.payload};switch(action){case"positive":this.nggvPositiveEvent.emit(emitEvent);break;case"neutral":this.nggvNeutralEvent.emit(emitEvent);break;case"negative":this.nggvNegativeEvent.emit(emitEvent)}this.autoClose&&this.close(event,"action")}open(opener){return this.shown=!0,this._previous=opener||document.activeElement,this._limitFocusable(),!0}_limitFocusable(){window.setTimeout((()=>{if(!this.dialogRef)return;const focusable=this.dialogRef.nativeElement.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');this._firstFocusable=focusable[0],this._lastFocusable=focusable[focusable.length-1],this._lastFocusable&&this._lastFocusable.focus()}))}close(event,initiator){if(!("host"===initiator&&event instanceof MouseEvent)&&this.closeModalOnEscape){if(this.shown){const emitEvent={original:event,payload:this.payload};this.nggvCloseEvent.emit(emitEvent)}this.shown=!1,window.setTimeout((()=>{this._previous&&this._previous.focus(),this._previous=void 0}))}}focusTrap(event){"Tab"===event.key&&(event.shiftKey?this._lastFocusable&&document.activeElement===this._firstFocusable&&(this._lastFocusable.focus(),event.preventDefault()):this._firstFocusable&&document.activeElement===this._lastFocusable&&(this._firstFocusable.focus(),event.preventDefault()))}static{this.propDecorators={dialogRef:[{type:core.ViewChild,args:["dialog"]}],thook:[{type:core.HostBinding,args:["attr.data-thook"]},{type:core.Input}],baseClass:[{type:core.HostBinding,args:["class.sdv-modal-dialog"]}],shown:[{type:core.HostBinding,args:["class.-active"]},{type:core.Input}],ariaHidden:[{type:core.HostBinding,args:["attr.aria-hidden"]}],initiallyShown:[{type:core.Input}],heading:[{type:core.Input}],title:[{type:core.Input}],content:[{type:core.Input}],autoClose:[{type:core.Input}],payload:[{type:core.Input}],dialogTitleId:[{type:core.Input}],dialogBodyId:[{type:core.Input}],closeModalOnEscape:[{type:core.Input}],buttons:[{type:core.Input}],nggvCloseEvent:[{type:core.Output}],nggvPositiveEvent:[{type:core.Output}],nggvNeutralEvent:[{type:core.Output}],nggvNegativeEvent:[{type:core.Output}],close:[{type:core.HostListener,args:["click",["$event",'"host"']]},{type:core.HostListener,args:["document:keydown.escape",["$event"]]}],focusTrap:[{type:core.HostListener,args:["keydown",["$event"]]}]}}};NgvDialogComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"nggv-dialog",template:'<div\n  class="sdv-modal-dialog__container"\n  *transloco="let t"\n  #dialog\n  role="dialog"\n  aria-dialog="true"\n  [attr.aria-labelledby]="dialogTitleId"\n  [attr.aria-describedby]="dialogBodyId"\n>\n  <header class="sdv-modal-dialog__heading">\n    <h3 [attr.id]="dialogTitleId">{{ t(heading || title || \'\') }}</h3>\n    <button\n      type="button"\n      data-thook="dialog-close"\n      (click)="onAction($event, \'close\')"\n      (keydown.enter)="onAction($event, \'close\')"\n      class="close"\n    >\n      <gds-icon-cross-small\n        *nggCoreElement\n        width="24"\n        height="24"\n      ></gds-icon-cross-small>\n    </button>\n  </header>\n  <section class="sdv-modal-dialog__body" [attr.id]="dialogBodyId">\n    <div [innerHtml]="content"></div>\n    <ng-content></ng-content>\n  </section>\n  <footer class="sdv-modal-dialog__actions">\n    <button\n      class="sdv-button sdv-button-delete"\n      type="reset"\n      [attr.data-thook]="\'dialog-\' + (_buttons?.negative || \'negative\')"\n      (click)="onAction($event, \'negative\')"\n      (keydown.enter)="onAction($event, \'negative\')"\n      *ngIf="_buttons && _buttons.negative"\n    >\n      {{ t(_buttons.negative) }}\n    </button>\n    <button\n      class="sdv-button sdv-button-secondary"\n      type="button"\n      [attr.data-thook]="\'dialog-\' + (_buttons?.neutral || \'neutral\')"\n      (click)="onAction($event, \'neutral\')"\n      (keydown.enter)="onAction($event, \'neutral\')"\n      *ngIf="_buttons && _buttons.neutral"\n    >\n      {{ t(_buttons.neutral) }}\n    </button>\n    <button\n      class="sdv-button"\n      type="submit"\n      [attr.data-thook]="\'dialog-\' + (_buttons?.positive || \'positive\')"\n      (click)="onAction($event, \'positive\')"\n      (keydown.enter)="onAction($event, \'positive\')"\n      *ngIf="_buttons && _buttons.positive"\n    >\n      {{ t(_buttons.positive) }}\n    </button>\n  </footer>\n</div>\n\n<div class="sdv-modal-backdrop"></div>\n',exportAs:"dialog",styles:[dialog_componentngResource_default()]})],NgvDialogComponent);const dialog_stories={title:"V-Angular/Dialog",component:NgvDialogComponent,decorators:[(0,dist.applicationConfig)({providers:[(0,core.importProvidersFrom)(i18n_module.g)]}),(0,dist.moduleMetadata)({imports:[common.CommonModule,i18n_module.g,shared.$M],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})]},Primary=(args=>({props:args})).bind({});Primary.args={initiallyShown:!0,buttons:{negative:"button_cancel",neutral:"button_apply",positive:"button_save"},content:'You can supply the content seen here either through the <code>[content]="string"</code> property or</br>by passing children between the opening and closing tags <code>&lt;c-dialog&gt; ...children &lt;/c-dialog&gt;</code>'};const __namedExportsOrder=["Primary"];Primary.parameters={...Primary.parameters,docs:{...Primary.parameters?.docs,source:{originalSource:"(args: any) => ({\n  props: args\n})",...Primary.parameters?.docs?.source}}}}}]);