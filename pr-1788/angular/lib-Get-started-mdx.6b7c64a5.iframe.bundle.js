/*! For license information please see lib-Get-started-mdx.6b7c64a5.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3817],{"./node_modules/@storybook/addon-docs/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hl:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.Hl,W8:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.W8,gG:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.gG,ov:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.ov,oz:()=>_storybook_blocks__WEBPACK_IMPORTED_MODULE_2__.oz});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-HLWAVYOI.mjs"),__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-H6MOWX77.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@storybook/blocks/dist/index.mjs")},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")},"./libs/angular/src/lib/Get-started.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>MDXContent});__webpack_require__("./node_modules/react/index.js");var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs");function _createMdxContent(props){const _components={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_2__.W8,{title:"Get started"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h1,{id:"angular-green",children:"Angular Green"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"install",children:"Install"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["If you are using the latest version of Angular, you can simply install ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@sebgroup/green-angular"})," like this:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"npm install @sebgroup/green-angular --save\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["However, because ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@sebgroup/green-angular"})," has a peer dependency to ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@angular/cdk"}),", and Angular is very picky about which versions go together, if you use an older version of Angular you need to explicitly install the matching version of ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"@angular/cdk"})," as well."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"For example, for Angular 17:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"npm install @angular/cdk@~17.0.0 @sebgroup/green-angular --save\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Currently, our aim is to support the oldest LTS version of Angular and up. You can check currently supported versions ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://angular.dev/reference/releases#actively-supported-versions",rel:"nofollow",children:"here"})]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import-module",children:"Import module"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"Each component in Green Angular is exported as a separate module. We recommend importing only the component modules that you need:"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-ts",children:"import { NggDropdownModule } from '@sebgroup/green-angular/src/lib/dropdown'\nimport { NggContextMenuModule } from '@sebgroup/green-angular/src/lib/context-menu'\n\n@NgModule({\n  declarations: [...],\n  imports: [\n    ...\n    NggDropdownModule,\n    NggContextMenuModule\n  ],\n  exports: [\n    NggModule\n  ]\n})\nexport class SharedModule {}\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"import-styling",children:"Import styling"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"We recommend setting up your Angular project to use scss (SASS) for css preprocessing."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Once configured to use scss, it's just a matter of including the scss to your main styles file, typically it would be ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"styles.scss"})," located at the root of the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"src"})," folder unless you've changed it."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"add-scss",children:"Add scss"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"{project}/src/styles.scss"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-css",children:"// import base styles from @sebgroup/chlorophyll\n@use '@sebgroup/chlorophyll/scss';\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.strong,{children:"Note:"})," Depending on you bundler, you may need to configure the font path by setting the ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{children:"$font-path"})," variable:"]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.pre,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.code,{className:"language-scss",children:"@use '@sebgroup/chlorophyll/scss' with (\n  $font-path: '@sebgroup/fonts/fonts'\n);\n"})}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h3,{id:"selective-imports",children:"Selective imports"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.p,{children:"I you are only using a few components, it's better to selectively import the components you need. This will reduce the size of the final css bundle."}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["Check out the example on ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://storybook.seb.io/latest/chlorophyll/?path=/docs/get-started-use--page",rel:"nofollow",children:"this page"}),"."]}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.h2,{id:"have-other-needs",children:"Have other needs?"}),"\n",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(_components.p,{children:["More examples and use cases coming soon! In the meantime create an ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_components.a,{href:"https://github.com/seb-oss/green/issues",rel:"nofollow",children:"issue over at github"})]})]})}function MDXContent(props={}){const{wrapper:MDXLayout}={...(0,_home_runner_work_green_green_node_modules_storybook_addon_docs_dist_shims_mdx_react_shim_mjs__WEBPACK_IMPORTED_MODULE_3__.R)(),...props.components};return MDXLayout?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(MDXLayout,{...props,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_createMdxContent,{...props})}):_createMdxContent(props)}},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext}}]);