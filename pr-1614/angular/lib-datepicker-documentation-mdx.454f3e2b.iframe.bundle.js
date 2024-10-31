(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4692],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./libs/angular/src/lib/datepicker/documentation.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_datepicker_stories_ts__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/angular/src/lib/datepicker/datepicker.stories.ts");function _createMdxContent(props){const _components={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{of:_datepicker_stories_ts__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"datepicker",children:"Datepicker"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"importing-module",children:"Importing module"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you're only using the datepicker component, you just need to import the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"NggDatepickerModule"}),". The example below uses reactive forms hence it needs the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ReactiveFormsModule"})," too."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-typescript",children:"import { NgModule } from '@angular/core'\nimport { BrowserModule } from '@angular/platform-browser'\nimport { AppComponent } from './app.component'\nimport { ReactiveFormsModule } from '@angular/forms'\nimport { NggDatepickerModule } from '@sebgroup/green-angular/src/lib/datepicker'\n\n@NgModule({\n  declarations: [AppComponent],\n  imports: [BrowserModule, ReactiveFormsModule, NggDatepickerModule],\n  exports: [],\n})\nexport class AppModule {}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"datepicker-1",children:"Datepicker"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"NggDatepickerComponent is a form control for picking dates."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"It supports 2-way binding to the value property without the need for Angular forms,\nand supports all the form directives from the core FormsModule (NgModel) and ReactiveFormsModule (FormControl, FormGroup, etc.)."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.gG,{of:_datepicker_stories_ts__WEBPACK_IMPORTED_MODULE_3__.Simple}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"reactive-forms",children:"Reactive forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["We recommend using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://angular.io/guide/reactive-forms",target:"_blank",children:"Reactive forms"})," in Angular together with the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://angular.io/api/forms/FormBuilder",target:"_blank",children:"From builder"})," especially\nif you're dealing with complex or dynamic forms."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form [formGroup]="reactiveForm">\n  <ngg-datepicker formControlName="date" label="Date"></ngg-datepicker>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"template-driven-forms",children:"Template-driven forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Another approach is to use ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a",{href:"https://angular.io/guide/forms",target:"_blank",children:"Template-driven forms"})," and bind value using ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"ngModel"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form #dropdownForm="templateForm">\n  <ngg-datepicker [(ngModel)]="date" label="Date"></ngg-datepicker>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"2-way-binding-without-forms",children:"2-way binding without forms"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"If you just need a simple select without any form, validation etc. it's possible to bind the dropdown directly to a value."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ngg-datepicker [(value)]="date" label="Date"></ngg-datepicker>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"inputs",children:"Inputs"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oz,{children:"\n| Input (attribute) | Description                                                             | Default     |\n| :---------------- | :---------------------------------------------------------------------- | :---------- |\n| options           | `DatepickerOptions` for datepicker see more info below.                 | n/a         |\n| label             | Text to use as label for datepicker input.                              | n/a         |\n| id                | Id applied to datepicker elements.                                      | `random id` |\n| isValid           | Mark datepicker as invalid/valid.                                       | `null`      |\n| size              | Size of the datepicker input. Possible values are `small` and `medium`. | `medium`    |\n| hideLabel         | Hide the label for the datepicker input.                                | `false`     |\n| disabledDates     | Array of dates to disable                                               | `[]`        |\n| disabledWeekends  | Disable all weekends in the calendar view                               | `false`     |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"datepickeroptions",children:"DatepickerOptions"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.oz,{children:"\n| Option     | Description                                                                                                                                                   | Default                                |\n| :--------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------ | :------------------------------------- |\n| showWeeks  | Show week numbers.                                                                                                                                            | `false`                                |\n| minDate    | Min date for datepicker, dates before this date are disabled.                                                                                                 | `startOfYear(subYears(new Date(), 5))` |\n| maxDate    | Max date for datepicker, dates after this date are disabled.                                                                                                  | `endOfYear(addYears(new Date(), 5))`   |\n| dateFormat | Date format for the input field. Use letters `d`, `m`, `y` to specify the order of day, month, year, separated by a delimiter. For example `y-m-d` or `d/m/y` | `y-m-d`                                |\n"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<ngg-datepicker\n  [(value)]="date"\n  label="Birthday"\n  [disabledWeekends]="true"\n  [disabledDates]="disabledDates"\n  [options]="options"\n></ngg-datepicker>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.em,{children:"Note:"})," ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"disabledDates"})," and ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"options"})," in the example above are properties that you need to add in the component class."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.Hl,{of:_datepicker_stories_ts__WEBPACK_IMPORTED_MODULE_3__.CustomOptions}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"example-usage-in-reactive-form",children:"Example usage in reactive form"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Below is an example of how the component can be used with reactive forms and validations. The example uses a custom date validator provided by Angular Green called ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"validDate"})," which can be used like this:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"validationForm = this._fb.group({\n  date: [\n    null,\n    [\n      Validators.required,\n      dateValidator({\n        min: this.options.minDate,\n        max: this.options.maxDate,\n      }),\n    ],\n  ],\n})\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.gG,{of:_datepicker_stories_ts__WEBPACK_IMPORTED_MODULE_3__.Form}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"markup",children:"Markup"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-html",children:'<form [formGroup]="validationForm" #ngForm="ngForm" (submit)="save()">\n  <ng-container *ngIf="validationForm.get(\'date\') as date">\n    <ngg-datepicker\n      formControlName="date"\n      label="Date"\n      [isValid]="ngForm.submitted ? date.valid : null"\n    >\n      \x3c!-- Hint text when not submitted --\x3e\n      <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n        >Select date</ng-container\n      >\n      <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n        \x3c!-- Text when form control contains one or more errors --\x3e\n        <ng-container *ngIf="date.errors as errors">\n          \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n          <ng-container *ngIf="errors[\'required\']">Select a date</ng-container>\n          <ng-container *ngIf="errors[\'validDate\'] === true"\n            >Enter valid date</ng-container\n          >\n          <ng-container\n            *ngIf="errors[\'validDate\'] && errors[\'validDate\'][\'minDate\']"\n            >Enter date after {{ errors[\'validDate\'][\'minDate\'] | date:\n            \'shortDate\' }}</ng-container\n          >\n          <ng-container\n            *ngIf="errors[\'validDate\'] && errors[\'validDate\'][\'maxDate\']"\n            >Enter date before {{ errors[\'validDate\'][\'maxDate\'] | date:\n            \'shortDate\' }}</ng-container\n          >\n        </ng-container>\n      </ng-container>\n    </ngg-datepicker>\n  </ng-container>\n  <button type="reset" (click)="ngForm.reset()">Reset</button>\n  <button\n    class="ms-3"\n    type="submit"\n    [disabled]="ngForm.submitted && validationForm.invalid"\n  >\n    Save\n  </button>\n</form>\n'})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"localization",children:"Localization"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Localization is handled by Lit Localize in the underlying web component. You can set the locale like this:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"// Import the gdsInitLocalization function from Green Core\nimport { gdsInitLocalization } from '@sebgroup/green-core/localization'\n\n// Then initialize Lit Localize by calling the imported init function. This returns a `setLocale` function which you can use to set the locale.\nconst { setLocale } = gdsInitLocalization()\n\n// Later in your code you can set the locale like this:\nsetLocale('sv')\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Currently, only translations for Swedish and English is built in."})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);