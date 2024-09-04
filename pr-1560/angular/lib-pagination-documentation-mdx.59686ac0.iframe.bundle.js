/*! For license information please see lib-pagination-documentation-mdx.59686ac0.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3134,7223],{"./libs/angular/src/lib/pagination/pagination.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{M:()=>NggPaginationComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/extract/src/index.ts");let NggPaginationComponent=class NggPaginationComponent{constructor(){this.i18n=src.pS,this.size="small",this.displayPages=5,this.length=0,this.pageSize=10,this._pageIndex=0,this._pageIndicies=[],this.page=new core.EventEmitter}get pageIndex(){return this._pageIndex}set pageIndex(value){this._pageIndex=Math.max(value,0)}get pageIndicies(){return this._pageIndicies}get totalPages(){return this.pageSize?Math.ceil(this.length/this.pageSize):0}ngOnChanges(changes){(changes.displayPages||changes.pageIndex||changes.pageSize||changes.length)&&(this._pageIndicies=this.getDisplayedPageIndicies())}hasPrevious(){return this.pageIndex>=1}hasNext(){return this.pageIndex<this.totalPages-1}gotoFirst(){if(!this.hasPrevious())return;const previous=this.pageIndex;this.pageIndex=0,this.emit(previous)}gotoLast(){if(!this.hasNext())return;const previous=this.pageIndex;this.pageIndex=this.totalPages-1,this.emit(previous)}gotoPrevious(){if(!this.hasPrevious())return;const previous=this.pageIndex;this.pageIndex=previous-1,this.emit(previous)}gotoNext(){if(!this.hasNext())return;const previous=this.pageIndex;this.pageIndex=previous+1,this.emit(previous)}goto(index){if(index===this.pageIndex||index<0||index>=this.totalPages)return;const previous=this.pageIndex;this.pageIndex=index,this.emit(previous)}emit(previous){this._pageIndicies=this.getDisplayedPageIndicies(),this.page.emit({pageIndex:this.pageIndex,previousPageIndex:previous})}getDisplayedPageIndicies(){return this.totalPages<=1?[]:this.totalPages<=this.displayPages?[...Array(this.totalPages-2).keys()].map((index=>index+1)):2===this.totalPages?[]:this.getCenteredPageIndicies()}getCenteredPageIndicies(){const pages=[];0===this.pageIndex?pages.push(this.pageIndex+1):this.pageIndex===this.totalPages-1?pages.push(this.pageIndex-1):pages.push(this.pageIndex);const addAfter=()=>{const next=pages[pages.length-1]+1;return next<this.totalPages-1&&counter>0&&(pages.push(next),!0)},addBefore=()=>{const previous=pages[0]-1;return previous>0&&counter>0&&(pages.unshift(previous),!0)};let counter=this.displayPages-1;for(;counter>0;){const addedAfter=addAfter();addedAfter&&counter--;const addedBefore=addBefore();if(addedBefore&&counter--,!addedAfter&&!addedBefore)break}return pages}static#_=this.propDecorators={i18n:[{type:core.Input}],size:[{type:core.Input}],displayPages:[{type:core.Input}],length:[{type:core.Input}],pageSize:[{type:core.Input}],pageIndex:[{type:core.Input}],page:[{type:core.Output}]}};NggPaginationComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-pagination",template:'<nav\n  [class]="\'pagination \' + size"\n  role="navigation"\n  [attr.aria-label]="i18n.paginationLabel"\n  *ngIf="totalPages > 1"\n>\n  <ul class="gds-reset">\n    <li *ngIf="hasPrevious()">\n      <a\n        class="gds-reset"\n        tabindex="0"\n        (click)="gotoPrevious()"\n        (keydown.enter)="gotoPrevious()"\n        [attr.aria-label]="i18n.previousPageLabel"\n        role="button"\n      >\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\n          <path\n            d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"\n          />\n        </svg>\n      </a>\n    </li>\n\n    <li>\n      <a\n        class="gds-reset"\n        tabindex="0"\n        (click)="gotoFirst()"\n        (keydown.enter)="gotoFirst()"\n        [attr.aria-current]="pageIndex === 0 ? \'page\' : null"\n        [attr.aria-label]="i18n.firstPageLabel"\n        role="button"\n      >\n        1\n      </a>\n    </li>\n    <li *ngIf="pageIndicies[0] > 1" aria-hidden="true">...</li>\n\n    <li *ngFor="let index of pageIndicies">\n      <a\n        class="gds-reset"\n        tabindex="0"\n        (click)="goto(index)"\n        (keydown.enter)="goto(index)"\n        [attr.aria-current]="pageIndex === index ? \'page\' : null"\n        [attr.aria-label]="i18n.getPageLabel(index)"\n        role="button"\n      >\n        {{ index + 1 }}\n      </a>\n    </li>\n\n    <li\n      *ngIf="pageIndicies[pageIndicies.length - 1] < totalPages - 2"\n      aria-hidden="true"\n    >\n      ...\n    </li>\n\n    <li>\n      <a\n        class="gds-reset"\n        tabindex="0"\n        (click)="gotoLast()"\n        (keydown.enter)="gotoLast()"\n        [attr.aria-current]="pageIndex === totalPages - 1 ? \'page\' : null"\n        [attr.aria-label]="i18n.lastPageLabel"\n        role="button"\n      >\n        {{ totalPages }}\n      </a>\n    </li>\n    <li *ngIf="hasNext()">\n      <a\n        class="gds-reset"\n        tabindex="0"\n        (click)="gotoNext()"\n        (keydown.enter)="gotoNext()"\n        [attr.aria-label]="i18n.nextPageLabel"\n        role="button"\n      >\n        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">\n          <path\n            d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"\n          />\n        </svg>\n      </a>\n    </li>\n  </ul>\n</nav>\n',changeDetection:core.ChangeDetectionStrategy.OnPush})],NggPaginationComponent)},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pS:()=>PaginationI18n,Ud:()=>calculateDegrees,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors});const randomId=()=>"gds-"+Math.random().toString(36).substring(2,9),PaginationI18n={paginationLabel:"Pagination",nextPageLabel:"Next page",previousPageLabel:"Previous page",firstPageLabel:"First page",lastPageLabel:"Last page",jumpToPageLabel:"Go to page",getPageLabel:index=>`Page ${index+1}`},calculateDegrees=percent=>percent>100?180:percent<0?0:1.8*percent,sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=val=>`linear-gradient(\n        to right,\n        ${sliderColors.primary} 0%,\n        ${sliderColors.primary} ${val}%,\n        ${sliderColors.disabled} ${val}%,\n        ${sliderColors.disabled} 100%\n      )`},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/angular/src/lib/pagination/pagination.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>pagination_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),pagination_component=__webpack_require__("./libs/angular/src/lib/pagination/pagination.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs");let NggPaginationModule=class NggPaginationModule{};NggPaginationModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[pagination_component.M],imports:[common.CommonModule],exports:[pagination_component.M]})],NggPaginationModule);const pagination_stories={title:"Components/Navigation/Pagination",component:pagination_component.M,decorators:[(0,dist.moduleMetadata)({imports:[NggPaginationModule]})],parameters:{componentIds:["component-pagination"]},argTypes:{size:{options:["small","large"],control:{type:"radio"}}}},Default=(args=>({template:'\n    <ngg-pagination [size]="size" [length]="length" [pageSize]="pageSize" [pageIndex]="pageIndex" [displayPages]="displayPages"></ngg-pagination>\n    ',props:args})).bind({});Default.args={length:100,pageSize:10,pageIndex:4,displayPages:5,size:"small"},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: NggPaginationComponent) => {\n  return {\n    template: `\n    <ngg-pagination [size]="size" [length]="length" [pageSize]="pageSize" [pageIndex]="pageIndex" [displayPages]="displayPages"></ngg-pagination>\n    `,\n    props: args\n  };\n}',...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./libs/angular/src/lib/pagination/documentation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./libs/angular/src/lib/pagination/pagination.component.ts"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs")),_pagination_stories_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/angular/src/lib/pagination/pagination.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",code:"code",pre:"pre",h3:"h3"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_pagination_stories_ts__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("style",{children:"\n    div[id^=story--] > div{\n        height: auto !important;\n    }\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"pagination",children:"Pagination"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you're only using the Pagination component, you just need to import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"NggPaginationModule"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"import { NggAccordionModule } from '@sebgroup/green-angular/src/lib/pagination'\n\n@NgModule({\n  imports: [NggAccordionModule]\n})\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ngg-pagination\n  [size]="size"\n  [length]="length"\n  [pageSize]="pageSize"\n  [pageIndex]="pageIndex"\n  [displayPages]="displayPages"\n></ngg-pagination>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"options",children:"Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"inputs",children:"Inputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.oz,{children:"\n| Input        | Type              | Description                                                                         |\n| :----------- | :---------------- | :---------------------------------------------------------------------------------- |\n| size         | `PaginationSize`  | Rendered size - small or large                                                      |\n| displayPages | `number`          | Amount of pages to be displayed between the `go to first` and `go to last` buttons. |\n| length       | `number`          | Total amount of items to be paginated                                               |\n| pageSize     | `number`          | Displayed items per page                                                            |\n| pageIndex    | `number`          | The current page index. Defaulted to 0.                                             |\n| i18n         | `IPaginationI18n` | Internationalization labels                                                         |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"outputs",children:"Outputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.oz,{children:"\n| Event | Description      |\n| :---- | :--------------- | ----------------------------------------------- |\n| page  | IPaginationEvent | Event emitted when a new page index is selected |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-navigation-pagination--default"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);