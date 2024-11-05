"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[9645],{"./libs/angular/src/lib/slider/slider.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{d:()=>NggSliderComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var NggSliderComponent_1,core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),src=__webpack_require__("./libs/extract/src/index.ts");let NggSliderComponent=class NggSliderComponent{constructor(){this.name=`${(0,src.zE)()}-slider`,this.min=0,this.max=100,this.step=1,this.label="",this.instruction="",this.placeholder="",this.errorMessage="",this.hasTextbox=!1,this.unitLabel="kr",this.disabled=!1,this.value=0,this.sliderChange=new core.EventEmitter,this.sliderTouch=new core.EventEmitter,this.style={}}static{NggSliderComponent_1=this}ngOnInit(){this.setTrackBackground()}ngOnChanges(changes){["min","max","value"].some((x=>Object.prototype.hasOwnProperty.call(changes,x)))&&this.setTrackBackground()}onBlur(){this.sliderTouch.emit(!0),this.onTouchedFn&&this.onTouchedFn()}handleChange(){this.value=this.value??0,this.setTrackBackground(),this.sliderChange.emit(this.value),this.onChangeFn&&this.onChangeFn(this.value)}setTrackBackground(){if(this.disabled)return void(this.style.background=src.SE.disabled);const percent=(this.value-this.min)/(this.max-this.min)*100;this.style.background=(0,src.jz)(percent)}writeValue(val){this.value!==val&&(this.value=val??0,this.handleChange())}registerOnChange(fn){this.onChangeFn=fn}registerOnTouched(fn){this.onTouchedFn=fn}static{this.propDecorators={name:[{type:core.Input}],min:[{type:core.Input}],max:[{type:core.Input}],step:[{type:core.Input}],label:[{type:core.Input}],instruction:[{type:core.Input}],placeholder:[{type:core.Input}],errorMessage:[{type:core.Input}],hasTextbox:[{type:core.Input}],unitLabel:[{type:core.Input}],disabled:[{type:core.Input}],value:[{type:core.Input}],enterkeyhint:[{type:core.Input}],sliderChange:[{type:core.Output}],sliderTouch:[{type:core.Output}]}}};NggSliderComponent=NggSliderComponent_1=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-slider",template:'<div *ngIf="!!label" class="gds-slider-label-container">\n  <div>\n    <label [attr.for]="name" [attr.id]="name + \'-label\'">{{ label }}</label>\n    <p *ngIf="!!instruction">{{ instruction }}</p>\n  </div>\n  <ng-container *ngIf="hasTextbox">\n    <ng-container *ngIf="!!unitLabel">\n      <div class="group group-border group-focus">\n        <ng-container *ngTemplateOutlet="inputField"></ng-container>\n        <span class="form-text">{{ unitLabel }}</span>\n      </div>\n    </ng-container>\n    <ng-container *ngIf="!unitLabel">\n      <ng-container *ngTemplateOutlet="inputField"></ng-container>\n    </ng-container>\n  </ng-container>\n</div>\n\n<input\n  type="range"\n  [attr.id]="name"\n  [attr.name]="name"\n  [attr.min]="min"\n  [attr.max]="max"\n  [attr.step]="step"\n  [disabled]="disabled"\n  [(ngModel)]="value"\n  [ngStyle]="style"\n  (blur)="onBlur()"\n  (input)="handleChange()"\n/>\n\n<p *ngIf="!!errorMessage" class="gds-slider-error-info">\n  {{ errorMessage }}\n</p>\n\n<ng-template #inputField>\n  <input\n    type="text"\n    inputmode="numeric"\n    pattern="[0-9]*"\n    [(ngModel)]="value"\n    [class.is-invalid]="!!errorMessage"\n    [attr.name]="name"\n    [attr.id]="name + \'-textbox\'"\n    [attr.placeholder]="placeholder"\n    [attr.aria-labelledby]="name + \'-label\'"\n    [attr.enterkeyhint]="enterkeyhint"\n    [disabled]="disabled"\n    (blur)="onBlur()"\n    (input)="handleChange()"\n  />\n</ng-template>\n',providers:[{provide:fesm2022_forms.kq,useExisting:NggSliderComponent_1,multi:!0}],changeDetection:core.ChangeDetectionStrategy.OnPush})],NggSliderComponent)},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pS:()=>PaginationI18n,Ud:()=>calculateDegrees,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors});const randomId=()=>"gds-"+Math.random().toString(36).substring(2,9),PaginationI18n={paginationLabel:"Pagination",nextPageLabel:"Next page",previousPageLabel:"Previous page",firstPageLabel:"First page",lastPageLabel:"Last page",jumpToPageLabel:"Go to page",getPageLabel:index=>`Page ${index+1}`},calculateDegrees=percent=>percent>100?180:percent<0?0:1.8*percent,sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=val=>`linear-gradient(\n        to right,\n        ${sliderColors.primary} 0%,\n        ${sliderColors.primary} ${val}%,\n        ${sliderColors.disabled} ${val}%,\n        ${sliderColors.disabled} 100%\n      )`},"./libs/angular/src/lib/slider/slider.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Disabled:()=>Disabled,Error:()=>Error,Textbox:()=>Textbox,UnitTextbox:()=>UnitTextbox,__namedExportsOrder:()=>__namedExportsOrder,default:()=>slider_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),slider_component=__webpack_require__("./libs/angular/src/lib/slider/slider.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs");let NggSliderModule=class NggSliderModule{};NggSliderModule=(0,tslib_es6.Cg)([(0,core.NgModule)({imports:[common.CommonModule,fesm2022_forms.YN],exports:[slider_component.d],declarations:[slider_component.d]})],NggSliderModule);const slider_stories={title:"Components/Slider",component:slider_component.d,decorators:[(0,dist.moduleMetadata)({imports:[NggSliderModule]})],parameters:{componentIds:["component-slider"]},argTypes:{name:{name:"name",control:{type:"text"}},defaultValue:{name:"defaultValue",defaultValue:50,control:{type:"number"}},min:{name:"min",defaultValue:0,control:{type:"number"}},max:{name:"max",defaultValue:100,control:{type:"number"}},step:{name:"step",defaultValue:1,control:{type:"number"}},label:{name:"label",defaultValue:"Slider label text in one line",control:{type:"text"}},instruction:{name:"instruction",defaultValue:"Element instruction",control:{type:"text"}},hasTextbox:{name:"hasTextbox",control:{type:"boolean"}},unitLabel:{name:"Unit label",control:{type:"text"}},errorMessage:{name:"errorMessage",control:{type:"text"}},disabled:{name:"disabled",control:{type:"boolean"}}}},Template=args=>({template:'\n      <ngg-slider\n        label="Slider label text in one line"\n        instruction="Element instruction"\n        placeholder="%"\n        [value]="50"\n        [hasTextbox]="hasTextbox"\n        [unitLabel]="unitLabel"\n        [disabled]="disabled"\n        [errorMessage]="errorMessage"\n      >\n      </ngg-slider>\n    ',props:{...args}}),Default=Template.bind({}),Textbox=Template.bind({});Textbox.args={hasTextbox:!0};const UnitTextbox=Template.bind({});UnitTextbox.args={hasTextbox:!0,unitLabel:"kr"};const Error=Template.bind({});Error.args={hasTextbox:!0,errorMessage:"Error text can be quite long"};const Disabled=Template.bind({});Disabled.args={hasTextbox:!0,disabled:!0};const __namedExportsOrder=["Default","Textbox","UnitTextbox","Error","Disabled"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => {\n  return {\n    template: `\n      <ngg-slider\n        label="Slider label text in one line"\n        instruction="Element instruction"\n        placeholder="%"\n        [value]="50"\n        [hasTextbox]="hasTextbox"\n        [unitLabel]="unitLabel"\n        [disabled]="disabled"\n        [errorMessage]="errorMessage"\n      >\n      </ngg-slider>\n    `,\n    props: {\n      ...args\n    }\n  };\n}',...Default.parameters?.docs?.source}}},Textbox.parameters={...Textbox.parameters,docs:{...Textbox.parameters?.docs,source:{originalSource:'args => {\n  return {\n    template: `\n      <ngg-slider\n        label="Slider label text in one line"\n        instruction="Element instruction"\n        placeholder="%"\n        [value]="50"\n        [hasTextbox]="hasTextbox"\n        [unitLabel]="unitLabel"\n        [disabled]="disabled"\n        [errorMessage]="errorMessage"\n      >\n      </ngg-slider>\n    `,\n    props: {\n      ...args\n    }\n  };\n}',...Textbox.parameters?.docs?.source}}},UnitTextbox.parameters={...UnitTextbox.parameters,docs:{...UnitTextbox.parameters?.docs,source:{originalSource:'args => {\n  return {\n    template: `\n      <ngg-slider\n        label="Slider label text in one line"\n        instruction="Element instruction"\n        placeholder="%"\n        [value]="50"\n        [hasTextbox]="hasTextbox"\n        [unitLabel]="unitLabel"\n        [disabled]="disabled"\n        [errorMessage]="errorMessage"\n      >\n      </ngg-slider>\n    `,\n    props: {\n      ...args\n    }\n  };\n}',...UnitTextbox.parameters?.docs?.source}}},Error.parameters={...Error.parameters,docs:{...Error.parameters?.docs,source:{originalSource:'args => {\n  return {\n    template: `\n      <ngg-slider\n        label="Slider label text in one line"\n        instruction="Element instruction"\n        placeholder="%"\n        [value]="50"\n        [hasTextbox]="hasTextbox"\n        [unitLabel]="unitLabel"\n        [disabled]="disabled"\n        [errorMessage]="errorMessage"\n      >\n      </ngg-slider>\n    `,\n    props: {\n      ...args\n    }\n  };\n}',...Error.parameters?.docs?.source}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:'args => {\n  return {\n    template: `\n      <ngg-slider\n        label="Slider label text in one line"\n        instruction="Element instruction"\n        placeholder="%"\n        [value]="50"\n        [hasTextbox]="hasTextbox"\n        [unitLabel]="unitLabel"\n        [disabled]="disabled"\n        [errorMessage]="errorMessage"\n      >\n      </ngg-slider>\n    `,\n    props: {\n      ...args\n    }\n  };\n}',...Disabled.parameters?.docs?.source}}}}}]);