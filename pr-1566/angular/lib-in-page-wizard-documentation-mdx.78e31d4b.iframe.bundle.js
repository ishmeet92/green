/*! For license information please see lib-in-page-wizard-documentation-mdx.78e31d4b.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[31,499],{"./libs/angular/src/lib/in-page-wizard/in-page-wizard-step-card.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{j:()=>NggInPageWizardStepCardComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggInPageWizardStepCardComponent=class NggInPageWizardStepCardComponent{constructor(){this.handleNextClick=new core.EventEmitter,this.handleEditClick=new core.EventEmitter,this.stepText="",this.title="",this.editBtnText="",this.nextBtnText="",this.showNextBtnIcon=!0,this.isCompleted=!1,this.disableNext=!1,this.isActive=!1}handleOnEditBtnClick(event){this.isActive=!this.isActive,this.isCompleted=!1,this.handleEditClick.emit(event)}handleOnNextBtnClick(event){this.isActive=!1,this.isCompleted=!0,this.handleNextClick.emit(event)}static#_=this.propDecorators={handleNextClick:[{type:core.Output}],handleEditClick:[{type:core.Output}],stepText:[{type:core.Input}],title:[{type:core.Input}],editBtnText:[{type:core.Input}],nextBtnText:[{type:core.Input}],showNextBtnIcon:[{type:core.Input}],isCompleted:[{type:core.Input}],disableNext:[{type:core.Input}],isActive:[{type:core.Input}]}};NggInPageWizardStepCardComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-in-page-wizard-step-card",template:'<section\n  class="gds-in-page-wizard-step-card card"\n  data-testid="in-page-wizard-step-card-root"\n  [class.active]="!!isActive"\n  [class.completed]="!!isCompleted"\n>\n  <header class="gds-in-page-wizard-step-card__header">\n    <div class="gds-in-page-wizard-step-card__header__icon">\n      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\n        \x3c!-- Font Awesome Pro 5.15.4 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) --\x3e\n        <path\n          d="M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z"\n        />\n      </svg>\n    </div>\n    <div\n      class="gds-in-page-wizard-step-card__header__progress"\n      data-testid="in-page-wizard-step-card-step-text"\n    >\n      {{ stepText }}\n    </div>\n    <div\n      class="gds-in-page-wizard-step-card__header__title"\n      data-testid="in-page-wizard-step-card-title"\n    >\n      <h2 class="h4">{{ title }}</h2>\n    </div>\n\n    <div\n      class="gds-in-page-wizard-step-card__header__edit"\n      *ngIf="isCompleted && !isActive"\n    >\n      <button\n        class="secondary small"\n        (click)="handleOnEditBtnClick($event)"\n        data-testid="in-page-wizard-step-card-edit-btn"\n      >\n        <ng-template *ngTemplateOutlet="editIcon"> </ng-template>\n        {{ editBtnText }}\n      </button>\n    </div>\n  </header>\n\n  <div\n    class="gds-in-page-wizard-step-card__content"\n    *ngIf="!!isActive || !!isCompleted"\n    data-testid="in-page-wizard-step-card-content"\n  >\n    <ng-content></ng-content>\n  </div>\n  <footer\n    class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--edit"\n    *ngIf="isCompleted && !isActive"\n  >\n    <button\n      class="secondary"\n      (click)="handleOnEditBtnClick($event)"\n      data-testid="in-page-wizard-step-card-footer-edit-btn"\n    >\n      <ng-template *ngTemplateOutlet="editIcon"> </ng-template>\n      {{ editBtnText }}\n    </button>\n  </footer>\n\n  <footer\n    class="gds-in-page-wizard-step-card__footer gds-in-page-wizard-step-card__footer--next"\n    *ngIf="isActive"\n  >\n    <button\n      class="primary"\n      [disabled]="disableNext"\n      (click)="handleOnNextBtnClick($event)"\n      data-testid="in-page-wizard-step-card-next-btn"\n    >\n      {{ nextBtnText }}\n      <ng-container *ngIf="showNextBtnIcon">\n        <ng-template *ngTemplateOutlet="nextIcon"> </ng-template>\n      </ng-container>\n    </button>\n  </footer>\n</section>\n\n<ng-template #editIcon>\n  <svg\n    viewBox="0 0 576 512"\n    class="edit-icon"\n    xmlns="http://www.w3.org/2000/svg"\n    focusable="false"\n  >\n    <path\n      fill="var(--color)"\n      d="M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"\n    ></path>\n  </svg>\n</ng-template>\n\n<ng-template #nextIcon>\n  <svg\n    xmlns="http://www.w3.org/2000/svg"\n    viewBox="0 0 24 24"\n    fill="none"\n    stroke="currentColor"\n    stroke-width="1"\n    class="next-icon"\n    data-testid="in-page-wizard-step-card-next-icon"\n  >\n    <path stroke="none" d="M0 0h24v24H0z" fill="none" />\n    <path d="M12 5l0 14" />\n    <path d="M18 13l-6 6" />\n    <path d="M6 13l6 6" />\n  </svg>\n</ng-template>\n'})],NggInPageWizardStepCardComponent)},"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/angular/src/lib/in-page-wizard/in-page-wizard-step-card.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,DisableNext:()=>DisableNext,Multiple:()=>Multiple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>in_page_wizard_step_card_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),in_page_wizard_step_card_component=__webpack_require__("./libs/angular/src/lib/in-page-wizard/in-page-wizard-step-card.component.ts");let NggInPageWizardModule=class NggInPageWizardModule{};NggInPageWizardModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[in_page_wizard_step_card_component.j],imports:[common.CommonModule],exports:[in_page_wizard_step_card_component.j]})],NggInPageWizardModule);const in_page_wizard_step_card_stories={title:"Components/Wizard/In page wizard step card",component:in_page_wizard_step_card_component.j,decorators:[(0,dist.moduleMetadata)({imports:[NggInPageWizardModule]})],argTypes:{},parameters:{controls:{isActive:!0,isCompleted:!0,disableNext:!1},componentIds:["component-inpagewizard"]}},Template=args=>({template:'\n    <ngg-in-page-wizard-step-card\n      stepText="Step 1 of 2"\n      title="Step title"\n      editBtnText="Edit"\n      nextBtnText="Next"\n      [isActive]="!!isActive"\n      [isCompleted]="!!isCompleted"\n      [disableNext]="!!disableNext"\n      (handleEditClick)="noop()"\n      (handleNextClick)="isCompleted = true;"\n    >\n    <div *ngIf="!isCompleted">\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text"/>\n    </div>\n    <div *ngIf="!!isCompleted">\n      <p class="mb-5">Input after completed</p>\n    </div>\n    </ngg-in-page-wizard-step-card>\n  ',props:{...args,noop:()=>{}}}),Default=Template.bind({});Default.args={isActive:!0,isCompleted:!1,disableNext:!1};const DisableNext=Template.bind({});DisableNext.args={isActive:!0,isCompleted:!1,disableNext:!0};const Multiple=(args=>({template:'\n  <ngg-in-page-wizard-step-card\n  stepText="Step 1 of 3"\n  title="Step 1 completed"\n  editBtnText="Edit"\n  nextBtnText="Next"\n  [isActive]="false"\n  [isCompleted]="true"\n  [disableNext]="false"\n  (handleNextClick)="noop()"\n  (handleEditClick)="noop()"\n\n>\n  <div>\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text" />\n    </div>\n  </ngg-in-page-wizard-step-card>\n  <ngg-in-page-wizard-step-card\n  stepText="Step 2 of 3"\n  title="Step 2 active"\n  editBtnText="Edit"\n  nextBtnText="Next"\n  [isActive]="true"\n  [isCompleted]="false"\n  [disableNext]="false"\n  (handleNextClick)="noop()"\n  (handleEditClick)="noop()"\n>\n  <div>\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text" />\n    </div>\n  </ngg-in-page-wizard-step-card>\n   <ngg-in-page-wizard-step-card\n  stepText="Step 3 of 3"\n  title="Step 3 upcoming"\n  editBtnText="Edit"\n  nextBtnText="Next"\n  [isActive]="false"\n  [isCompleted]="false"\n  [disableNext]="false"\n  (handleNextClick)="noop()"\n  (handleEditClick)="noop()"\n>\n  <div>\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text" />\n    </div>\n  </ngg-in-page-wizard-step-card>\n\n  ',props:{...args,noop:()=>{}}})).bind({});Multiple.args={},Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'(args: NggInPageWizardStepCardComponent) => {\n  const noop = () => {\n    return;\n  };\n  return {\n    template: `\n    <ngg-in-page-wizard-step-card\n      stepText="Step 1 of 2"\n      title="Step title"\n      editBtnText="Edit"\n      nextBtnText="Next"\n      [isActive]="!!isActive"\n      [isCompleted]="!!isCompleted"\n      [disableNext]="!!disableNext"\n      (handleEditClick)="noop()"\n      (handleNextClick)="isCompleted = true;"\n    >\n    <div *ngIf="!isCompleted">\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text"/>\n    </div>\n    <div *ngIf="!!isCompleted">\n      <p class="mb-5">Input after completed</p>\n    </div>\n    </ngg-in-page-wizard-step-card>\n  `,\n    props: {\n      ...args,\n      noop\n    }\n  };\n}',...Default.parameters?.docs?.source}}},DisableNext.parameters={...DisableNext.parameters,docs:{...DisableNext.parameters?.docs,source:{originalSource:'(args: NggInPageWizardStepCardComponent) => {\n  const noop = () => {\n    return;\n  };\n  return {\n    template: `\n    <ngg-in-page-wizard-step-card\n      stepText="Step 1 of 2"\n      title="Step title"\n      editBtnText="Edit"\n      nextBtnText="Next"\n      [isActive]="!!isActive"\n      [isCompleted]="!!isCompleted"\n      [disableNext]="!!disableNext"\n      (handleEditClick)="noop()"\n      (handleNextClick)="isCompleted = true;"\n    >\n    <div *ngIf="!isCompleted">\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text"/>\n    </div>\n    <div *ngIf="!!isCompleted">\n      <p class="mb-5">Input after completed</p>\n    </div>\n    </ngg-in-page-wizard-step-card>\n  `,\n    props: {\n      ...args,\n      noop\n    }\n  };\n}',...DisableNext.parameters?.docs?.source}}},Multiple.parameters={...Multiple.parameters,docs:{...Multiple.parameters?.docs,source:{originalSource:'(args: NggInPageWizardStepCardComponent) => {\n  const noop = () => {\n    return;\n  };\n  return {\n    template: `\n  <ngg-in-page-wizard-step-card\n  stepText="Step 1 of 3"\n  title="Step 1 completed"\n  editBtnText="Edit"\n  nextBtnText="Next"\n  [isActive]="false"\n  [isCompleted]="true"\n  [disableNext]="false"\n  (handleNextClick)="noop()"\n  (handleEditClick)="noop()"\n\n>\n  <div>\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text" />\n    </div>\n  </ngg-in-page-wizard-step-card>\n  <ngg-in-page-wizard-step-card\n  stepText="Step 2 of 3"\n  title="Step 2 active"\n  editBtnText="Edit"\n  nextBtnText="Next"\n  [isActive]="true"\n  [isCompleted]="false"\n  [disableNext]="false"\n  (handleNextClick)="noop()"\n  (handleEditClick)="noop()"\n>\n  <div>\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text" />\n    </div>\n  </ngg-in-page-wizard-step-card>\n   <ngg-in-page-wizard-step-card\n  stepText="Step 3 of 3"\n  title="Step 3 upcoming"\n  editBtnText="Edit"\n  nextBtnText="Next"\n  [isActive]="false"\n  [isCompleted]="false"\n  [disableNext]="false"\n  (handleNextClick)="noop()"\n  (handleEditClick)="noop()"\n>\n  <div>\n      <label for="textInput">Input label</label>\n      <span class="form-info">Lorem ipsum very long description of input and what should be entered</span>\n      <input id="textInput" type="text" />\n    </div>\n  </ngg-in-page-wizard-step-card>\n\n  `,\n    props: {\n      ...args,\n      noop\n    }\n  };\n}',...Multiple.parameters?.docs?.source}}};const __namedExportsOrder=["Default","DisableNext","Multiple"]},"./libs/angular/src/lib/in-page-wizard/documentation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./libs/angular/src/lib/in-page-wizard/in-page-wizard-step-card.component.ts"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs")),_in_page_wizard_step_card_stories_ts__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./libs/angular/src/lib/in-page-wizard/in-page-wizard-step-card.stories.ts");function _createMdxContent(props){const _components=Object.assign({h1:"h1",h2:"h2",p:"p",pre:"pre",code:"code",h3:"h3",em:"em"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.W8,{of:_in_page_wizard_step_card_stories_ts__WEBPACK_IMPORTED_MODULE_4__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"in-page-wizard-step-card",children:"In-page wizard step card"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Presents a sequence that leads the user through well-defined steps within a page."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing-module",children:"Importing Module"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"import { NgModule } from '@angular/core'\nimport { BrowserModule } from '@angular/platform-browser'\nimport { NggInPageWizardModule } from '@sebgroup/green-angular/src/lib/in-page-wizard'\n\nimport { AppComponent } from './app.component'\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, NggInPageWizardModule],\n  exports: [],\n})\nexport class AppModule {}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"options",children:"Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.oz,{children:'\n| Input       | Type      | Description                                                                      |\n| :---------- | :-------- | :------------------------------------------------------------------------------- |\n| stepText    | `string`   | The header progress text, typically this would be "Step 1 of 2".                 |\n| title       | `string`   | The header title.                                                                |\n| editBtnText | `string`   | Edit button text, typically this would be "Edit"                                 |\n| nextBtnText | `string`   | Next button text, typically this would be "Next"                                 |\n| showNextBtnIcon | `boolean` | Displays a next icon (arrow down) in footer primary button. Defaults to true. |\n| isActive    | `boolean`  | Indicates that this step is active.                                              |\n| isCompleted | `boolean`  | Determines that this step has been completed.                                    |\n| disableNext | `boolean`  | Set the next button to disabled. E.g. needed if validation fails for step input. |\n'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"outputs",children:"Outputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.oz,{children:"\n| Event           | Description                                |\n| :-------------- | :----------------------------------------- |\n| handleNextClick | Event emitted when next button is clicked. |\n| handleEditClick | Event emitted when edit button is clicked. |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Step card that can be set to active.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Note due to som issue with storybook and angular and input change the edit button change content is not switching as expected"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-wizard-in-page-wizard-step-card--default"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ngg-in-page-wizard-step-card\n  stepText="Step 1 of 2"\n  title="Step title"\n  editBtnText="Edit"\n  nextBtnText="Next"\n  [showNextBtnIcon]="true"\n  [isActive]="!!isActive"\n  [isCompleted]="!!isCompleted"\n  [disableNext]="!!disableNext"\n  (handleEditClick)="noop()"\n  (handleNextClick)="isCompleted = true;"\n>\n  <div *ngIf="!isCompleted">\n    <label for="textInput">Input label</label>\n    <span class="form-info"\n      >Lorem ipsum very long description of input and what should be\n      entered</span\n    >\n    <input id="textInput" type="text" />\n  </div>\n  <div *ngIf="!!isCompleted">\n    <p class="mb-5">Input after completed</p>\n  </div>\n</ngg-in-page-wizard-step-card>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"multiple-step-cards",children:"Multiple step cards"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Demonstrates multiple step cards."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Step one is completed.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"A completed step has a green check mark icon and an Edit-button which allows the user to change previously entered information."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Step two is active.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"The current step is the one the user is currently interacting with."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Step three is upcoming.\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"An upcoming step only shows the title and step number, but hides the details in order to reduce clutter."})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-wizard-in-page-wizard-step-card--multiple"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disable-next-button",children:"Disable next button"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Disable next button. For example if validation failed for content input"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_3__.gG,{id:"components-wizard-in-page-wizard-step-card--disable-next"})})]})}const __WEBPACK_DEFAULT_EXPORT__=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_5__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,Object.assign({},props,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,props)})):_createMdxContent(props)}}}]);