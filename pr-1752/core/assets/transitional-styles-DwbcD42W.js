import{ae as e,af as i}from"./index-DbzaFPdp.js";import{u as o}from"./index-Bn1uV44s.js";import"./chunk-HLWAVYOI-BrMtF6Sp.js";import"./iframe-BjYPOoR2.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Df9so8jS.js";import"./index-Cef7vbu6.js";import"./index-DrFu-skq.js";function s(t){const n={code:"code",em:"em",h1:"h1",li:"li",ol:"ol",p:"p",ul:"ul",...o(),...t.components};return e.jsxs(e.Fragment,{children:[e.jsx(i,{title:"Concepts/Transitional styles"}),`
`,e.jsx(n.h1,{id:"transitional-styles",children:"Transitional styles"}),`
`,e.jsx(n.p,{children:"Transitional Styles is a temporary mechanism that we have in place to facilitate the transition of the old 2016 design version over to the new 2023 design version."}),`
`,e.jsxs(n.p,{children:['The idea is that the Core Components will use the 2023 design by default, but will also have alternative "transitional styles" representing the 2016 version. By calling a function called ',e.jsx(n.code,{children:"register()"})," (or ",e.jsx(n.code,{children:"registerTransitionalStyles()"})," to do it globally), the consuming application can enable these styles, which will then override the 2023 styling by replacing the internal Contructed Stylesheet of the components."]}),`
`,e.jsx(n.p,{children:"The mechanism consist of a few different parts:"}),`
`,e.jsxs(n.ul,{children:[`
`,e.jsxs(n.li,{children:["A singleton called ",e.jsx(n.code,{children:"TransitionalStyles"}),", which keeps track of all registered transistional styles."]}),`
`,e.jsxs(n.li,{children:["The actual stylesheets for each component. To support Transitional Styles, a component should have a separate file named ",e.jsx(n.code,{children:"component-name.styles.trans.ts"}),", which exports a function called ",e.jsx(n.code,{children:"register()"}),". This function registers the transitional styles with the singleton."]}),`
`,e.jsxs(n.li,{children:["A call to apply transitional styles in the ",e.jsx(n.code,{children:"connectedCallback()"})," method in each component. The call can look like this ",e.jsx(n.code,{children:"TransitionalStyles.instance.apply(this, 'gds-dropdown')"}),". This will replace the stylesheet of the component with the on that has been registered with the singleton, if it exists."]}),`
`,e.jsxs(n.li,{children:["A function called ",e.jsx(n.code,{children:"registerTransitionalStyles()"})," that calls ",e.jsx(n.code,{children:"register()"})," on all the components. This will load ",e.jsx(n.em,{children:"all"})," transitional styles, and prevents tree-shaking, so it should only be used if all the styles are really needed."]}),`
`]}),`
`,e.jsxs(n.p,{children:["If ",e.jsx(n.code,{children:"register()"}),", or ",e.jsx(n.code,{children:"registerTransitionalStyles()"}),", has not been called, the components will simple use the default 2023 styling."]}),`
`,e.jsx(n.h1,{id:"how-to-add-transitional-styles-to-a-component",children:"How to add transitional styles to a component"}),`
`,e.jsxs(n.ol,{children:[`
`,e.jsxs(n.li,{children:["Create these files in the component directory: ",e.jsx(n.code,{children:"component-name.trans.styles.ts"})," and ",e.jsx(n.code,{children:"component-name.trans.styles.scss"}),". The ",e.jsx(n.code,{children:"scss"}),"-file can import styles from Chlorophyll, through releative paths (not from node_modules). If necessarary, the styles can be copied from Chlorophyll and modified as needed."]}),`
`,e.jsxs(n.li,{children:["The ",e.jsx(n.code,{children:".ts"})," module should a) import the ",e.jsx(n.code,{children:"scss"})," for this component, b) import the ",e.jsx(n.code,{children:"trans.ts"})," from any sub-components that this components depends on, and c) export a ",e.jsx(n.code,{children:"register()"})," function. The register function should register the imported styles with the ",e.jsx(n.code,{children:"TransistionalStyles"})," singleton and also call ",e.jsx(n.code,{children:"register()"})," on the imported sub-components. Check for example ",e.jsx(n.code,{children:"gds-dropdown"})," for reference."]}),`
`,e.jsxs(n.li,{children:["Import the ",e.jsx(n.code,{children:".ts"})," file in the ",e.jsx(n.code,{children:"transitional-styles.ts"})," module and add a call to the ",e.jsx(n.code,{children:"register()"})," function in the ",e.jsx(n.code,{children:"registerTransitionalStyles()"})," function."]}),`
`,e.jsxs(n.li,{children:["In the ",e.jsx(n.code,{children:"connectedCallback()"})," function of the component, call ",e.jsx(n.code,{children:"TransitionalStyles.instance.apply(this, 'component-name')"})]}),`
`]}),`
`,e.jsxs(n.p,{children:["That should be it! Now, when the ",e.jsx(n.code,{children:"register()"})," function is called, the component should switch to the transitional styles."]}),`
`,e.jsx(n.h1,{id:"tree-shaking",children:"Tree-shaking"}),`
`,e.jsxs(n.p,{children:["In order for transitional styles to be tree-shakable, it's important to make it possible to import the styles separately for individual components. This means that every component also needs to be responsible for forwarding the ",e.jsx(n.code,{children:"register()"}),' call to any sub-components it depends on. This includes both "primitives" and regular components. For example, ',e.jsx(n.code,{children:"gds-datepicker"})," use both ",e.jsx(n.code,{children:"gds-dropdown"})," (component), ",e.jsx(n.code,{children:"gds-popover"})," (primitive) and ",e.jsx(n.code,{children:"gds-calendar"})," (primitive). So in the ",e.jsx(n.code,{children:"register()"})," function of ",e.jsx(n.code,{children:"gds-datepicker"})," we also need to call the ",e.jsx(n.code,{children:"register()"})," function of all these sub-components. Also, if a primitive depends on other primitives or components, the same applies there. The point is that the consumber of Green Core should only need to remember to call ",e.jsx(n.code,{children:"register()"})," on the component they are using, and not have to worry about what other components are used internally."]}),`
`,e.jsxs(n.p,{children:["This may lead to the ",e.jsx(n.code,{children:"register()"})," function being called several times for some components, but that is fine."]})]})}function j(t={}){const{wrapper:n}={...o(),...t.components};return n?e.jsx(n,{...t,children:e.jsx(s,{...t})}):s(t)}export{j as default};
