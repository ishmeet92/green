(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[168,651],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./libs/react-charts/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>_lib_chart__WEBPACK_IMPORTED_MODULE_0__.t});var _lib_chart__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./libs/react-charts/src/lib/chart.tsx")},"./libs/react-charts/src/lib/chart.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>Chart});var react=__webpack_require__("./node_modules/react/index.js"),billboard=(__webpack_require__("./node_modules/core-js/modules/es.array.iterator.js"),__webpack_require__("./node_modules/core-js/modules/web.dom-collections.iterator.js"),__webpack_require__("./node_modules/core-js/modules/es.array.reduce.js"),__webpack_require__("./node_modules/core-js/modules/es.number.to-fixed.js"),__webpack_require__("./node_modules/core-js/modules/es.object.assign.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.exec.js"),__webpack_require__("./node_modules/core-js/modules/es.regexp.to-string.js"),__webpack_require__("./node_modules/core-js/modules/es.string.replace.js"),__webpack_require__("./node_modules/billboard.js/dist-esm/billboard.js"));const createOptions=({settings,chartElement})=>{var _settings$style,_settings$style3,_settings$style4;const columns=settings.data.map((d=>[d.name,...d.values])),defaultType=settings.type||"bar",types=settings.data.reduce(((res,d)=>Object.assign({},res,{[d.name]:d.type||defaultType})),{}),axes=settings.data.reduce(((res,d)=>Object.assign({},res,{[d.name]:d.axis||"y"})),{}),color=Object.assign({},null==(_settings$style=settings.style)?void 0:_settings$style.color),options={bindto:chartElement,data:{columns,types,axes},legend:{show:!1},tooltip:{format:{value:(value,ratio,id,index)=>{var _settings$style2;const formatOverride=null==settings||null==(_settings$style2=settings.style)?void 0:_settings$style2.tooltipNumberFormat;return"function"==typeof formatOverride?formatOverride(value,ratio,id,index):"number"==typeof ratio?(ratio=>`${Number((100*ratio).toFixed(2))}%`)(ratio):value.toString().replace(/\B(?=(\d{3})+(?!\d))/g," ")}},contents:{template:'\n  <dl class="bb-tooltip-list">\n    <dt>{=TITLE}</dt>\n    {{\n    <dd class="{=CLASS_TOOLTIP_NAME}" style="--color: {=COLOR}">\n      <span>{=NAME} {=VALUE}</span>\n    </dd>\n    }}\n  </dl>\n'}},color};let hasY2Axis=!1;if(hasY2Axis=-1!==Object.values(axes).indexOf("y2"),hasY2Axis&&(options.axis=Object.assign({},options.axis||{},{y2:{show:!0}})),null!=(null==settings||null==(_settings$style3=settings.style)?void 0:_settings$style3.point)){let pointSetting;pointSetting="focus"===(null==settings?void 0:settings.style.point.show)?{focus:{only:!0}}:{show:null==settings?void 0:settings.style.point.show},options.point=Object.assign({},pointSetting)}if(null!=(null==settings||null==(_settings$style4=settings.style)?void 0:_settings$style4.axis)){let axesSetting;axesSetting=!1===(null==settings?void 0:settings.style.axis)?{y:{show:!1},y2:{show:!1},x:{show:!1}}:Object.entries(null==settings?void 0:settings.style.axis).reduce(((axes,[axis,settings])=>Object.assign({},axes,{[axis]:Object.assign({},axes[axis]||{},((null==settings?void 0:settings.ticksCount)||(null==settings?void 0:settings.stepSize)||(null==settings?void 0:settings.values)||(null==settings?void 0:settings.format))&&{tick:Object.assign({},(null==settings?void 0:settings.ticksCount)&&{count:null==settings?void 0:settings.ticksCount},(null==settings?void 0:settings.stepSize)&&{stepSize:null==settings?void 0:settings.stepSize},(null==settings?void 0:settings.values)&&{values:settings.values},(null==settings?void 0:settings.format)&&{format:settings.format})},{show:!1!==(null==settings?void 0:settings.show),label:null==settings?void 0:settings.label,min:null==settings?void 0:settings.min,max:null==settings?void 0:settings.max,padding:null==settings?void 0:settings.padding,height:null==settings?void 0:settings.height},"y"===axis||"x"===axis?{clipPath:!1}:{})})),Object.assign({},options.axis||{})),options.axis=Object.assign({},options.axis,axesSetting)}let hasNegativeValue=!1;for(const dt of columns){for(const val of dt)if("number"==typeof val&&val<0){hasNegativeValue=!0;break}if(hasNegativeValue)break}var _options$axis;(hasNegativeValue&&(options.grid={y:{lines:[{value:0,class:"base-line"}]}}),settings.categories)&&(options.axis=Object.assign({},options.axis||{},{x:Object.assign({},(null==options||null==(_options$axis=options.axis)?void 0:_options$axis.x)||{},{type:"category",categories:settings.categories})}));return options},createInfo=(settings,chart)=>{var _settings$style5,_settings$style6,_settings$style7;const info={legend:{items:settings.data.map((d=>({title:d.name,color:chart.color(d.name)}))),placement:settings.legend||"none"}};var _chart$categories;(!0===(null==(_settings$style5=settings.style)?void 0:_settings$style5.axis)||!1!==(null==(_settings$style6=settings.style)?void 0:_settings$style6.axis)&&!1!==(null==(_settings$style7=settings.style)||null==(_settings$style7=_settings$style7.axis)||null==(_settings$style7=_settings$style7.x)?void 0:_settings$style7.show))&&(info.xAxis={ticks:null==(_chart$categories=chart.categories())?void 0:_chart$categories.map((text=>({text})))});return info},create=({settings,chartElement})=>{const options=createOptions({settings,chartElement}),chart=billboard.Ay.generate(options),wrapper={settings,info:createInfo(settings,chart),focus:targetIds=>chart.focus(targetIds),revert:targetIds=>chart.revert(targetIds),toggle:targetIds=>chart.toggle(targetIds),update:()=>null};return wrapper.update=({settings,chartElement})=>{const newOptions=(({settings,chartElement})=>{const data=createOptions({settings,chartElement}).data||{},update={columns:data.columns||[],types:data.types||{}};return settings.categories&&(update.categories=settings.categories),update})({settings,chartElement,oldSettings:wrapper.settings});chart.load(newOptions);const info=createInfo(settings,chart);return wrapper.info=info,wrapper.settings=settings,wrapper},wrapper};billboard.n8&&((0,billboard.n8)(),(0,billboard.M0)(),(0,billboard.nq)(),(0,billboard.Wc)(),(0,billboard.Y7)(),(0,billboard.rL)());const useChart=({chartRef,settings})=>{const[chart,setChart]=(0,react.useState)(),[info,setInfo]=(0,react.useState)();return(0,react.useEffect)((()=>{if(!chart&&chartRef.current){const args={settings,chartElement:chartRef.current};setChart(create(args))}}),[chartRef,chart]),(0,react.useEffect)((()=>{chartRef&&chartRef.current&&settings&&chart&&chart.settings!==settings&&setChart(chart.update({settings,chartElement:chartRef.current}))}),[settings]),(0,react.useEffect)((()=>{chart&&chart.info&&setInfo(chart.info)}),[chart,null==chart?void 0:chart.info,settings]),{chart,info}};var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Chart({settings,theme}){var _settings$style,_info$legend,_info$legend2,_info$legend3;const chartRef=(0,react.useRef)(null),{chart,info}=useChart({chartRef,settings});return(0,jsx_runtime.jsxs)("div",{className:"chart"+(null!=settings&&null!=(_settings$style=settings.style)&&_settings$style.fitHeightToParent?" fit-height":""),style:null==info?void 0:info.properties,children:[(0,jsx_runtime.jsx)("div",{className:theme,ref:chartRef}),"none"!==(null==info||null==(_info$legend=info.legend)?void 0:_info$legend.placement)&&(0,jsx_runtime.jsx)("div",{className:"legend-container "+(null==info||null==(_info$legend2=info.legend)?void 0:_info$legend2.placement),children:(0,jsx_runtime.jsx)("ul",{className:"legend",children:null==info||null==(_info$legend3=info.legend)?void 0:_info$legend3.items.map(((i,ix)=>(0,jsx_runtime.jsx)("li",{style:{"--color":i.color},onMouseOver:()=>null==chart?void 0:chart.focus(i.title),onMouseOut:()=>null==chart?void 0:chart.revert(),onMouseUp:()=>null==chart?void 0:chart.toggle(i.title),children:(0,jsx_runtime.jsx)("span",{children:i.title})},`legend--${ix}`)))})})]})}Chart.__docgenInfo={description:"",methods:[],displayName:"Chart",props:{settings:{required:!0,tsType:{name:"ChartSettings"},description:""},theme:{required:!1,tsType:{name:"string"},description:""}}}},"./libs/react-charts/src/usecases/lighthouse-1.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),___WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react-charts/src/index.ts"),_lighthouse_1_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/react-charts/src/usecases/lighthouse-1.stories.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(___WEBPACK_IMPORTED_MODULE_2__.t,{...args});function _createMdxContent(props){const _components={h1:"h1",h2:"h2",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_lighthouse_1_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"lighthouse-use-case-1",children:"Lighthouse: Use case 1"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"bar-chart",children:"Bar chart"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_lighthouse_1_stories__WEBPACK_IMPORTED_MODULE_3__.BarChart}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_lighthouse_1_stories__WEBPACK_IMPORTED_MODULE_3__.BarChartWithNegative})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"pie-chart",children:"Pie chart"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_lighthouse_1_stories__WEBPACK_IMPORTED_MODULE_3__.PieChart})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"splines-chart",children:"Splines chart"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.gG,{of:_lighthouse_1_stories__WEBPACK_IMPORTED_MODULE_3__.SplinesChart})})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./libs/react-charts/src/usecases/lighthouse-1.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BarChart:()=>BarChart,BarChartWithNegative:()=>BarChartWithNegative,PieChart:()=>PieChart,SplinesChart:()=>SplinesChart,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});__webpack_require__("./node_modules/core-js/modules/es.object.assign.js");var ___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/react-charts/src/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(___WEBPACK_IMPORTED_MODULE_1__.t,Object.assign({},args)),__WEBPACK_DEFAULT_EXPORT__={title:"Use cases/Lighthouse 1",component:___WEBPACK_IMPORTED_MODULE_1__.t},BarChart={render:Template.bind({}),name:"Bar chart",args:{settings:{data:[{name:"Score card",values:[12,9,3,1]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"],style:{axis:{x:{height:60}}}}}},BarChartWithNegative={render:Template.bind({}),name:"Bar chart with negative",args:{settings:{data:[{name:"Score card",values:[12,9,-3,1]}],categories:["Signerade avtal (SEB)","Påbörjade trials (Oxceed)","Aktiverade prenumerationer","Avslutade prenumerationer (endast efter avslutad ordinarie pren.)"],style:{axis:{x:{height:60}}}}}},PieChart={render:Template.bind({}),name:"Pie chart",args:{settings:{type:"pie",data:[{name:"Ej tilldelade",values:[900]},{name:"Tilldelade",values:[50]},{name:"Utnyttjade",values:[50]}],legend:"right"}}},SplinesChart={render:Template.bind({}),name:"Splines chart",args:{settings:{type:"spline",data:[{name:"Signerade avtal SEB",values:[0,0,0,0,2,0,2,0,0,3,0,0]},{name:"Påbörjade trials",values:[0,0,1,0,0,0,0,0,2,6,0,0]},{name:"Aktiverade prenumerationer",values:[0,0,0,0,0,1,0,0,2,0,0,0]}],categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Okt","Nov","Dec"]}}},__namedExportsOrder=["BarChart","BarChartWithNegative","PieChart","SplinesChart"];BarChart.parameters={...BarChart.parameters,docs:{...BarChart.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Bar chart',\n  args: {\n    settings: {\n      data: [{\n        name: 'Score card',\n        values: [12, 9, 3, 1]\n      }],\n      categories: ['Signerade avtal (SEB)', 'Påbörjade trials (Oxceed)', 'Aktiverade prenumerationer', 'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)'],\n      style: {\n        axis: {\n          x: {\n            height: 60\n          }\n        }\n      }\n    }\n  }\n}",...BarChart.parameters?.docs?.source}}},BarChartWithNegative.parameters={...BarChartWithNegative.parameters,docs:{...BarChartWithNegative.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Bar chart with negative',\n  args: {\n    settings: {\n      data: [{\n        name: 'Score card',\n        values: [12, 9, -3, 1]\n      }],\n      categories: ['Signerade avtal (SEB)', 'Påbörjade trials (Oxceed)', 'Aktiverade prenumerationer', 'Avslutade prenumerationer (endast efter avslutad ordinarie pren.)'],\n      style: {\n        axis: {\n          x: {\n            height: 60\n          }\n        }\n      }\n    }\n  }\n}",...BarChartWithNegative.parameters?.docs?.source}}},PieChart.parameters={...PieChart.parameters,docs:{...PieChart.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Pie chart',\n  args: {\n    settings: {\n      type: 'pie',\n      data: [{\n        name: 'Ej tilldelade',\n        values: [900]\n      }, {\n        name: 'Tilldelade',\n        values: [50]\n      }, {\n        name: 'Utnyttjade',\n        values: [50]\n      }],\n      legend: 'right'\n    }\n  }\n}",...PieChart.parameters?.docs?.source}}},SplinesChart.parameters={...SplinesChart.parameters,docs:{...SplinesChart.parameters?.docs,source:{originalSource:"{\n  render: Template.bind({}),\n  name: 'Splines chart',\n  args: {\n    settings: {\n      type: 'spline',\n      data: [{\n        name: 'Signerade avtal SEB',\n        values: [0, 0, 0, 0, 2, 0, 2, 0, 0, 3, 0, 0]\n      }, {\n        name: 'Påbörjade trials',\n        values: [0, 0, 1, 0, 0, 0, 0, 0, 2, 6, 0, 0]\n      }, {\n        name: 'Aktiverade prenumerationer',\n        values: [0, 0, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0]\n      }],\n      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Okt', 'Nov', 'Dec']\n    }\n  }\n}",...SplinesChart.parameters?.docs?.source}}}},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);