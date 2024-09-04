import{j as e}from"./jsx-runtime-c21eb741.js";import"./chunk-HLWAVYOI-6ab1fd57.js";import{M as o}from"./index-df88b87d.js";import{u as i}from"./index-d3d65ee2.js";import"./iframe-9b56968a.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-725317a4.js";import"./index-d38538b0.js";import"./index-356e4a49.js";function a(t){const n=Object.assign({p:"p",h2:"h2",code:"code",pre:"pre",a:"a"},i(),t.components);return e.jsxs(e.Fragment,{children:[e.jsx(o,{title:"Docs/Form validation/Documentation"}),`
`,e.jsx("h1",{children:"Form validation"}),`
`,e.jsx(n.p,{children:`Green Core components have built-in support for form validation. The validation feature is built on top of the
browsers native validation features, using ElementInternals and Constraint Validation API.`}),`
`,e.jsx(n.h2,{id:"usage",children:"Usage"}),`
`,e.jsxs(n.p,{children:[`Validation is configured by adding a validator to a form element. A validator is an object that implements the
`,e.jsx(n.code,{children:"GdsValidator"})," interface:"]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-typescript",children:`export interface GdsValidator {
  /**
   * Validate the form control element. Should return the validity state and an optional validation message.
   */
  validate(element: GdsFormControlElement): [ValidityState, string] | undefined
}
`})}),`
`,e.jsx(n.p,{children:"Here is how you can use it in a component in a Lit element:"}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-dropdown
  label="Pick a pet"
  .validator=\${{
    validate: (el: GdsDropdown) => {
      if (el.value !== 'cat')
        return [
          { ...el.validity, valid: false, customError: true },
          'Only cats are allowed!',
        ]
    },
  }}
>
  <gds-option>Pick favorite</gds-option>
  <gds-option value="dog">Dog</gds-option>
  <gds-option value="cat">Cat</gds-option>
  <gds-option value="fish">Fish</gds-option>
</gds-dropdown>
`})}),`
`,e.jsxs(n.p,{children:["The return value of the ",e.jsx(n.code,{children:"validate"}),` method should be a tuple of the validity state (as a
`,e.jsx(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/ValidityState",target:"_blank",rel:"nofollow noopener noreferrer",children:e.jsx(n.code,{children:"ValidityState"})}),` object) and a validation message.
The `,e.jsx(n.code,{children:"ValidityState"}),` object communicates the cause of the validation failure to the user agent. If the control was
initially in a valid state, setting it to invalid will also cause it to emit a `,e.jsx(n.code,{children:"invalid"})," event."]}),`
`,e.jsx(n.p,{children:"The validator is executed when the value of the form control changes, and when the form emits a submit event."}),`
`,e.jsx(n.h2,{id:"using-other-validation-methods",children:"Using other validation methods"}),`
`,e.jsxs(n.p,{children:["The validity state can also be explicitly set by setting the property ",e.jsx(n.code,{children:"invalid"})," to ",e.jsx(n.code,{children:"true"}),", or setting the ",e.jsx(n.code,{children:"aria-invalid"}),`
attribute to `,e.jsx(n.code,{children:"true"}),". This is useful when working with other validation libraries, such as Angular reactive forms."]}),`
`,e.jsxs(n.p,{children:["In this case the validation message can be supplied via the ",e.jsx(n.code,{children:"message"}),` slot (usually, but depends on the component),
for example:`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<gds-dropdown *nggCoreElement label="Pick a pet" [invalid]="isInvalid">
  <span slot="message">{{ invalidMessage }}</span>
  ...options...
</gds-dropdown>
`})}),`
`,e.jsx(n.h2,{id:"displaying-a-validation-summary",children:"Displaying a validation summary"}),`
`,e.jsxs(n.p,{children:["To display a validation summary, you can use the ",e.jsx(n.code,{children:"gds-form-summary"}),` component. This component automatically subscribes to
changes in its parent form and displays a list of validation issues. This only needs the `,e.jsx(n.code,{children:"invalid"}),` state to be true, so it
should work with any validation framework, as long as both the summary component and form components are children of a form
element.`]}),`
`,e.jsx(n.pre,{children:e.jsx(n.code,{className:"language-html",children:`<form>
  <!-- Form controls here -->
  <gds-form-summary></gds-form-summary>
</form>
`})})]})}function g(t={}){const{wrapper:n}=Object.assign({},i(),t.components);return n?e.jsx(n,Object.assign({},t,{children:e.jsx(a,t)})):a(t)}export{g as default};
