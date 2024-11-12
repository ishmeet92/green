"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1797],{"./libs/angular/src/lib/progress-circle/progress-circle.component.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>NggProgressCircleComponent});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),src=__webpack_require__("./libs/extract/src/index.ts");let NggProgressCircleComponent=class NggProgressCircleComponent{constructor(){this._startValue="0deg",this._endValue="0deg",this.id=`${(0,src.zE)()}-progress-circle`,this.theme="warning"}set value(val){const degrees=`${(0,src.Ud)(val)}deg`;this._endValue=degrees,"disabled"===this.theme&&(this._startValue=degrees)}static{this.propDecorators={_startValue:[{type:core.HostBinding,args:["style.--start-value"]}],_endValue:[{type:core.HostBinding,args:["style.--end-value"]}],id:[{type:core.Input}],theme:[{type:core.Input}],value:[{type:core.Input}]}}};NggProgressCircleComponent=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-progress-circle",template:'<div\n  class="gds-progress-circle"\n  role="progressbar"\n  [attr.aria-valuenow]="value"\n  [attr.aria-valuemin]="0"\n  [attr.aria-valuemax]="100"\n  [attr.aria-label]="id"\n>\n  <div class="ring full-ring">\n    <div class="ring-progress" [ngClass]="theme"></div>\n  </div>\n  <div class="ring">\n    <div class="ring-progress" [ngClass]="theme"></div>\n  </div>\n  <div class="inner-circle">\n    <ng-content></ng-content>\n  </div>\n</div>\n'})],NggProgressCircleComponent)},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pS:()=>PaginationI18n,Ud:()=>calculateDegrees,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors});const randomId=()=>"gds-"+Math.random().toString(36).substring(2,9),PaginationI18n={paginationLabel:"Pagination",nextPageLabel:"Next page",previousPageLabel:"Previous page",firstPageLabel:"First page",lastPageLabel:"Last page",jumpToPageLabel:"Go to page",getPageLabel:index=>`Page ${index+1}`},calculateDegrees=percent=>percent>100?180:percent<0?0:1.8*percent,sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=val=>`linear-gradient(\n        to right,\n        ${sliderColors.primary} 0%,\n        ${sliderColors.primary} ${val}%,\n        ${sliderColors.disabled} ${val}%,\n        ${sliderColors.disabled} 100%\n      )`},"./libs/angular/src/lib/progress-circle/progress-circle.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>progress_circle_stories});var dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),progress_circle_component=__webpack_require__("./libs/angular/src/lib/progress-circle/progress-circle.component.ts"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs");let NggProgressCircleModule=class NggProgressCircleModule{};NggProgressCircleModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[progress_circle_component.t],imports:[common.CommonModule],exports:[progress_circle_component.t]})],NggProgressCircleModule);const progress_circle_stories={title:"Components/Progress Circle",component:progress_circle_component.t,decorators:[(0,dist.moduleMetadata)({imports:[NggProgressCircleModule]})],argTypes:{theme:{options:["success","warning","info","danger","light","dark","disabled"],control:"radio",name:"Theme",defaultValue:"warning"},value:{control:{type:"number",min:0,max:100},name:"Value",defaultValue:"70"}},parameters:{}},Default=(args=>({template:'\n      <ngg-progress-circle [theme]="theme" [value]="value">\n        <div>Current progress is</div>\n        <div style="margin:6px 0;font-size:32px;font-weight:700;line-height:32px;">70%</div>\n        <div>out of 100</div>\n      </ngg-progress-circle>',props:args})).bind({});Default.args={theme:"warning",value:70};const __namedExportsOrder=["Default"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'args => ({\n  template: `\n      <ngg-progress-circle [theme]="theme" [value]="value">\n        <div>Current progress is</div>\n        <div style="margin:6px 0;font-size:32px;font-weight:700;line-height:32px;">70%</div>\n        <div>out of 100</div>\n      </ngg-progress-circle>`,\n  props: args\n})',...Default.parameters?.docs?.source}}}}}]);