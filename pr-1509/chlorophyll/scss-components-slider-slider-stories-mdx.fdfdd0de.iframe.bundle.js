/*! For license information please see scss-components-slider-slider-stories-mdx.fdfdd0de.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[9478],{"./node_modules/@storybook/addon-docs/dist/blocks.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.gG});var _storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("@storybook/client-logger"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs");(0,_storybook_client_logger__WEBPACK_IMPORTED_MODULE_0__.deprecate)("Import from '@storybook/addon-docs/blocks' is deprecated. Please import from '@storybook/blocks' instead.")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{BN:()=>MDXContext,RP:()=>useMDXComponents,gz:()=>withMDXComponents,xA:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext({});function withMDXComponents(Component){return function boundMDXComponent(props){const allComponents=useMDXComponents(props.components);return react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component,{...props,allComponents})}}function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((()=>"function"==typeof components?components(contextComponents):{...contextComponents,...components}),[contextComponents,components])}const emptyObject={};function MDXProvider({components,children,disableParentContext}){let allComponents;return allComponents=disableParentContext?"function"==typeof components?components({}):components||emptyObject:useMDXComponents(components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},children)}},"./libs/chlorophyll/scss/components/slider/slider.stories.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__,slider:()=>slider,sliderWithUnitLabel:()=>sliderWithUnitLabel});__webpack_require__("./node_modules/react/index.js");var _home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/blocks.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Template=({unitLabel,showMinMax})=>`\n  <div class="form-group">\n    <div class="gds-slider-label-container">\n        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>\n        ${unitLabel?`<div class="group group-border group-focus">\n          <input type="number" aria-labelledby="gds-slider-label" />\n          <span class="form-text">${unitLabel}</span>\n        </div>\n        `:'<input type="number" aria-labelledby="gds-slider-label" />'}\n    </div>\n    <input type="range" id="gds-slider" />\n    ${!0===showMinMax?'\n          <div class="gds-slider-min-max">\n            <div class="gds-slider-min">0</div>\n            <div class="gds-slider-max">100</div>\n          </div>':""}\n  </div>\n  `;function _createMdxContent(props){const _components=Object.assign({h1:"h1",p:"p",h2:"h2"},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.W8,{title:"Components/Slider",parameters:{componentIds:["component-slider"]},argTypes:{unitLabel:{control:"text"},showMinMax:{control:"boolean"}}}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h1,{id:"slider",children:"Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"A slider to experiment and adjust values with."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:"The component allows for easy adjustments of a value and check the updated result immediately."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.p,{children:'On pages where the user can experiment or adjust values in a scale, such as "How much can I borrow?".'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"basic-example",children:"Basic example"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Slider",children:Template.bind({})})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components.h2,{id:"example-with-unit-label",children:"Example with unit label"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.Hl,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_storybook_addon_docs_blocks__WEBPACK_IMPORTED_MODULE_1__.gG,{name:"Slider with unit label",args:{unitLabel:"Kr"},children:Template.bind({})})})]})}const slider=Template.bind({});slider.storyName="Slider",slider.parameters={storySource:{source:'({\n  unitLabel,\n  showMinMax\n}) => {\n  return `\n  <div class="form-group">\n    <div class="gds-slider-label-container">\n        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>\n        ${unitLabel ? `<div class="group group-border group-focus">\n          <input type="number" aria-labelledby="gds-slider-label" />\n          <span class="form-text">${unitLabel}</span>\n        </div>\n        ` : "<input type=\\"number\\" aria-labelledby=\\"gds-slider-label\\" />"}\n    </div>\n    <input type="range" id="gds-slider" />\n    ${showMinMax === true ? `\n          <div class="gds-slider-min-max">\n            <div class="gds-slider-min">0</div>\n            <div class="gds-slider-max">100</div>\n          </div>` : ""}\n  </div>\n  `;\n}'}};const sliderWithUnitLabel=Template.bind({});sliderWithUnitLabel.storyName="Slider with unit label",sliderWithUnitLabel.args={unitLabel:"Kr"},sliderWithUnitLabel.parameters={storySource:{source:'({\n  unitLabel,\n  showMinMax\n}) => {\n  return `\n  <div class="form-group">\n    <div class="gds-slider-label-container">\n        <label for="gds-slider" id="gds-slider-label">Slider label text in one line</label>\n        ${unitLabel ? `<div class="group group-border group-focus">\n          <input type="number" aria-labelledby="gds-slider-label" />\n          <span class="form-text">${unitLabel}</span>\n        </div>\n        ` : "<input type=\\"number\\" aria-labelledby=\\"gds-slider-label\\" />"}\n    </div>\n    <input type="range" id="gds-slider" />\n    ${showMinMax === true ? `\n          <div class="gds-slider-min-max">\n            <div class="gds-slider-min">0</div>\n            <div class="gds-slider-max">100</div>\n          </div>` : ""}\n  </div>\n  `;\n}'}};const componentMeta={title:"Components/Slider",parameters:{componentIds:["component-slider"]},argTypes:{unitLabel:{control:"text"},showMinMax:{control:"boolean"}},tags:["stories-mdx"],includeStories:["slider","sliderWithUnitLabel"]};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim__WEBPACK_IMPORTED_MODULE_3__.RP)(),props.components);return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}};const __WEBPACK_DEFAULT_EXPORT__=componentMeta,__namedExportsOrder=["Template","slider","sliderWithUnitLabel"]},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);