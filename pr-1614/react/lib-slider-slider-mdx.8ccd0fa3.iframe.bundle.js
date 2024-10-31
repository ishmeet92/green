(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[9258],{"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./libs/react/src/lib/slider/slider.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Template:()=>Template,default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs"),_slider__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./libs/react/src/lib/slider/slider.tsx"),_slider_stories__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./libs/react/src/lib/slider/slider.stories.tsx");const Template=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_slider__WEBPACK_IMPORTED_MODULE_2__.A,{...props});function _createMdxContent(props){const _components={h1:"h1",h2:"h2",h3:"h3",p:"p",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"slider",children:"Slider"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"A slider to experiment and adjust values with."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"description",children:"Description"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"The component allows for easy adjustments of a value and check the updated result immediately."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"usage",children:"Usage"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:'On pages where the user can experiment or adjust values in a scale, such as "How much can I borrow?".'}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"slider-options",children:"Slider Options"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"props",children:"Props"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.oz,{children:"\n  | Prop          | Type                                       | Description                                                                                                                        |\n  | :------------ | :----------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------- |\n  | name?         | `string`                                   | Name of the input element                                                                                                          |\n  | value?        | `number`                                   | Value of the input element                                                                                                         |\n  | min           | `number`                                   | The greatest value in the range of permitted values. Default is 0                                                                  |\n  | max           | `number`                                   | The lowest value in the range of permitted values. Default is 100                                                                  |\n  | showMinMax?   | `boolean`                                  | Whether or not to show min and max values. Default is false                                                                        |\n  | minMaxFormat? | `(value: string, unit?: string) => string` | Formatting function for min and max labels.                                                                                        |\n  | step          | `number`                                   | The number that specifies the granularity that the value must adhere to. Default is 1                                              |\n  | label?        | `string`                                   | Label for the input element                                                                                                        |\n  | instruction?  | `string`                                   | Input element instruction                                                                                                          |\n  | disabled      | `boolean`                                  | Whether or not the input is disabled. Default is false                                                                             |\n  | hasTextbox    | `boolean`                                  | Whether or not should have input textbox along with the slider. Default is false                                                   |\n  | unitLabel     | `string`                                   | Set this to a string, for example `kr`, to show a unit label next to the input field                                               |\n  | errorMessage? | `string`                                   | Error message for invalid inputs                                                                                                   |\n  | onChange?     | `(value: number) => void`                  | Callback function that is fired when the value changes. The new value is provided as a paramter to the callback function           |\n  | onClamp?      | `(unclamped: number) => void`              | Callback function that is fired when the value is clamped. The unclamped value is provided as a parameter to the callback function |\n  "}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.W8,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"examples",children:"Examples"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"default",children:"Default"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Default}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-textbox",children:"With textbox"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Textbox}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-textbox-with-unit-label-and-min-max-labels",children:"With textbox with unit label and min max labels"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.UnitTextbox}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"with-error-message",children:"With error message"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Error}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"disabled",children:"Disabled"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.Disabled}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"showing-high-numbers",children:"Showing high numbers"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_blocks__WEBPACK_IMPORTED_MODULE_5__.Hl,{of:_slider_stories__WEBPACK_IMPORTED_MODULE_3__.HighNumber})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_4__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext}}]);