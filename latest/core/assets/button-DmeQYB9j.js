var C=e=>{throw TypeError(e)};var E=(e,t,r)=>t.has(e)||C("Cannot "+r);var p=(e,t,r)=>(E(e,t,"read from private field"),r?r.call(e):t.get(e)),A=(e,t,r)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),_=(e,t,r,o)=>(E(e,t,"write to private field"),o?o.call(e,r):t.set(e,r),r);import{E as P,r as S,a as R,x as F}from"./lit-element-C_s9q329.js";import{G,n as c,g as D,h as j}from"./custom-element-scoping-CpYtbs9r.js";import{a as $}from"./query-p8xgzTDt.js";import{e as I}from"./class-map-Bz98xO8-.js";import{o as m}from"./if-defined-Ct9lF4W9.js";import{n as N}from"./when-BR7zwNJC.js";import{i as M,u as K}from"./static-_ukc2i0J.js";import{t as L}from"./tokens.style-RalixZsd.js";import{T as X}from"./transitional-styles-Cc5JwJ9o.js";import{e as Y,i as H,t as J}from"./directive-CF8sV3Lr.js";import{m as Q}from"./runtime-CMQcyTl6.js";import{w as Z}from"./watch-tFciLXSI.js";function tt(e={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,r,o)=>{let s;const i=t.connectedCallback,a=t.disconnectedCallback;t.connectedCallback=function(){i==null||i.call(this);const U=(ht,ut)=>{var z;(z=o.value)==null||z.call(this)};s=new MutationObserver(U),s.observe(this,e)},t.disconnectedCallback=function(){a==null||a.call(this),s.disconnect()}}}class et extends H{constructor(t){if(super(t),t.type!==J.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return P}update(t,[r]){var i;const o=t.element,s=(i=t.options)==null?void 0:i.host;Array.from(s.attributes).forEach(a=>{r(a)&&o.setAttribute(a.name.replace("gds-",""),a.value)})}}const rt=Y(et),O=new WeakMap;function ot(e){return(t,...r)=>{let o=O.get(t);return o||(o=t.map(s=>s.replace(/\n[\s]+</gm,"<")),o.raw=t.raw,O.set(t,o)),e(o,...r)}}var st=Object.defineProperty,at=Object.getOwnPropertyDescriptor,b=(e,t,r,o)=>{for(var s=o>1?void 0:o?at(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&st(t,r,s),s},n;const V=class V extends G{constructor(){super();A(this,n);this.required=!1,this.name="";try{_(this,n,this.attachInternals())}catch{_(this,n,{form:this.closest("form"),setFormValue:o=>{this.value=o},setValidity:(o,s)=>{this.invalid=o.customError},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(r){const o=this.invalid;p(this,n).setValidity({...p(this,n).validity,customError:r,valid:!r},this.validationMessage||Q("Error message."),this._getValidityAnchor()||void 0),this.requestUpdate("invalid",o),p(this,n).checkValidity()}get invalid(){return!p(this,n).validity.valid}get form(){return p(this,n).form}get validity(){return p(this,n).validity}get validationMessage(){return p(this,n).validationMessage}get willValidate(){return p(this,n).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const o=this.invalid,s=this.validator.validate(this)||[{...this.validity,valid:!0},""];return p(this,n).setValidity(s[0],s[1],this._getValidityAnchor()),this.requestUpdate("invalid",o),p(this,n).checkValidity()}reportValidity(){return p(this,n).reportValidity()}__handleValueChange(){p(this,n).setFormValue(this.value),this.checkValidity()}formResetCallback(){this.value=void 0}formAssociatedCallback(r){r.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(r){this.checkValidity(),this.validity.valid||r.preventDefault()}focus(r){this._getValidityAnchor().focus(r)}};n=new WeakMap,V.formAssociated=!0;let h=V;b([c({attribute:!1})],h.prototype,"validator",2);b([c({type:Boolean})],h.prototype,"required",2);b([c({type:Boolean,reflect:!0,attribute:"aria-invalid",converter:{fromAttribute:Boolean,toAttribute:e=>e==null?void 0:e.toString()}})],h.prototype,"invalid",1);b([c()],h.prototype,"label",2);b([c()],h.prototype,"value",2);b([c({reflect:!0})],h.prototype,"name",2);b([Z("value")],h.prototype,"__handleValueChange",1);const it='@layer tokens,core,a11y,ranks,sizes,variants,disabled;@layer a11y{@media (prefers-reduced-motion: reduce){.button{transition:none}}}@layer core{:host{display:inline-block;max-width:100%}.button{--_block-size: var(--gds-space-3xl);display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;border:none;cursor:pointer;block-size:var(--_block-size);background-color:var(--gds-color-l3-background-primary);color:var(--gds-color-l3-content-primary);border-radius:var(--gds-space-max);font-family:inherit;font-size:var(--gds-text-size-detail-m);line-height:var(--gds-text-line-height-detail-m);font-weight:var(--gds-text-weight-book);gap:var(--gds-space-s);outline-color:transparent;outline-offset:var(--gds-space-3xs);outline-style:solid;outline-width:var(--gds-space-3xs);padding-block:var(--gds-space-s);padding-inline:var(--gds-space-l);position:relative;text-decoration:none;transition-property:color,border-color;transition:all .4s;max-width:100%}.button:focus{outline-color:color-mix(in srgb,currentcolor,#000 100%)}.button:focus:not(:focus-visible){outline-color:transparent}.button:hover{background-color:color-mix(in srgb,var(--gds-color-l3-background-primary),var(--gds-color-l3-states-dark-hover))}.button:active{background-color:color-mix(in srgb,var(--gds-color-l3-background-primary),var(--gds-color-l3-states-dark-pressed))}.button:not(.circle) slot:not([name]){display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}}.button.circle{aspect-ratio:1/1;padding:0}.button:disabled{pointer-events:none;background-color:var(--gds-color-l3-background-disabled);color:var(--gds-color-l3-content-disabled)}@layer ranks{:host([rank*="secondary"]) .button{background-color:var(--gds-color-l3-background-secondary);color:var(--gds-color-l3-content-tertiary)}:host([rank*="secondary"]) .button:hover{background-color:color-mix(in srgb,var(--gds-color-l3-background-secondary),var(--gds-color-l3-states-light-hover))}:host([rank*="secondary"]) .button:active{background-color:color-mix(in srgb,var(--gds-color-l3-background-secondary),var(--gds-color-l3-states-light-pressed))}:host([rank*="tertiary"]) .button{background-color:transparent;color:var(--gds-color-l3-content-tertiary)}:host([rank*="tertiary"]) .button:hover{background-color:color-mix(in srgb,transparent,var(--gds-color-l3-states-light-hover))}:host([rank*="tertiary"]) .button:active{background-color:color-mix(in srgb,transparent,var(--gds-color-l3-states-light-pressed))}}@layer sizes{:host([size="xs"]) .button{--_block-size: var(--gds-space-l);font-size:var(--gds-text-size-detail-s);line-height:var(--gds-text-line-height-detail-s);padding-inline:var(--gds-space-m)}:host([size="small"]) .button{--_block-size: var(--gds-space-xl);font-size:var(--gds-text-size-detail-s);line-height:var(--gds-text-line-height-detail-s);padding-inline:var(--gds-space-m)}:host([size="medium"]) .button{--_block-size: var(--gds-space-2xl);font-size:var(--gds-text-size-detail-m);line-height:var(--gds-text-line-height-detail-m)}}@layer variants{.positive{background-color:var(--gds-color-l3-background-positive)}.positive:hover{background-color:color-mix(in srgb,var(--gds-color-l3-background-positive),var(--gds-color-l3-states-dark-hover))}.positive:active{background-color:color-mix(in srgb,var(--gds-color-l3-background-positive),var(--gds-color-l3-states-dark-pressed))}.positive.secondary{background-color:var(--gds-color-l3-background-positive-secondary);color:var(--gds-color-l3-content-positive)}.positive.secondary:hover{background-color:color-mix(in srgb,var(--gds-color-l3-background-positive-secondary),var(--gds-color-l3-states-positive-hover))}.positive.secondary:active{background-color:color-mix(in srgb,var(--gds-color-l3-background-positive-secondary),var(--gds-color-l3-states-positive-pressed))}.positive.tertiary{background-color:transparent;color:var(--gds-color-l3-content-positive)}.positive.tertiary:hover{background-color:color-mix(in srgb,transparent,var(--gds-color-l3-states-positive-hover))}.positive.tertiary:active{background-color:color-mix(in srgb,transparent,var(--gds-color-l3-states-positive-pressed))}.negative{background-color:var(--gds-color-l3-background-negative)}.negative:hover{background-color:color-mix(in srgb,var(--gds-color-l3-background-negative),var(--gds-color-l3-states-dark-hover))}.negative:active{background-color:color-mix(in srgb,var(--gds-color-l3-background-negative),var(--gds-color-l3-states-dark-pressed))}.negative.secondary{background-color:var(--gds-color-l3-background-negative-secondary);color:var(--gds-color-l3-content-negative)}.negative.secondary:hover{background-color:color-mix(in srgb,var(--gds-color-l3-background-negative-secondary),var(--gds-color-l3-states-negative-hover))}.negative.secondary:active{background-color:color-mix(in srgb,var(--gds-color-l3-background-negative-secondary),var(--gds-color-l3-states-negative-pressed))}.negative.tertiary{background-color:transparent;color:var(--gds-color-l3-content-negative)}.negative.tertiary:hover{background-color:color-mix(in srgb,transparent,var(--gds-color-l3-states-negative-hover))}.negative.tertiary:active{background-color:color-mix(in srgb,transparent,var(--gds-color-l3-states-negative-pressed))}}',nt=":host{--gds-ripple-motion-name: ripple;--gds-ripple-motion: var(--gds-ripple-motion-name) 1.2s cubic-bezier(.46, .03, .52, .96) 0s 1 normal none running;border-radius:var(--gds-space-max);contain:strict;display:flex;height:100%;top:0;right:0;bottom:0;left:0;overflow:hidden;position:absolute;width:100%}div{background-color:currentColor;border-radius:var(--gds-space-max);display:flex;height:20px;left:var(--gds-ripple-left, 50%);margin-left:-10px;margin-top:-10px;opacity:0;pointer-events:none;position:absolute;top:var(--gds-ripple-top, 50%);width:20px;will-change:transform}div.gds-ripple-effect{animation:var(--gds-ripple-motion)}@keyframes ripple{0%{opacity:.5;transform:scale(0)}to{opacity:0;transform:scale(calc(3 * var(--mt-ripple-spread, 4)))}}@media (prefers-reduced-motion: reduce){:host{--gds-ripple-motion-name: none !important}}";var lt=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,W=(e,t,r,o)=>{for(var s=o>1?void 0:o?ct(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&lt(t,r,s),s};let k=class extends R{constructor(){super(...arguments),this.onmousedown=e=>{const r=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-r.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-r.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return F`<div></div>`}};k.styles=[L,S(nt)];W([$("div")],k.prototype,"_rippleEl",2);k=W([D("gds-ripple")],k);var dt=Object.defineProperty,pt=Object.getOwnPropertyDescriptor,B=e=>{throw TypeError(e)},d=(e,t,r,o)=>{for(var s=o>1?void 0:o?pt(t,r):t,i=e.length-1,a;i>=0;i--)(a=e[i])&&(s=(o?a(t,r,s):a(s))||s);return o&&s&&dt(t,r,s),s},q=(e,t,r)=>t.has(e)||B("Cannot "+r),g=(e,t,r)=>(q(e,t,"read from private field"),r?r.call(e):t.get(e)),y=(e,t,r)=>t.has(e)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),gt=(e,t,r,o)=>(q(e,t,"write to private field"),t.set(e,r),r),f,v,u,T,x,w;const vt=ot(j);let l=class extends h{constructor(){super(),y(this,v),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",y(this,f,!1),y(this,x,()=>{var t;const e=((t=this._mainSlot)==null?void 0:t.assignedElements())??[];gt(this,f,e.length===1&&e.some(r=>r.tagName.toLowerCase().startsWith("gds-icon"))),this.requestUpdate()}),y(this,w,e=>{this.dispatchEvent(new CustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e})),this.form&&!g(this,v,u)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),X.instance.apply(this,"gds-button")}render(){const e={button:!0,circle:g(this,f),icon:g(this,f),small:this.size==="small",large:this.size==="large",positive:this.variant==="positive",negative:this.variant==="negative",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=g(this,v,u)?M`a`:M`button`;return K`
      <${t}
        class=${I(e)}
        type="${m(g(this,v,u)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||P}
        href=${m(g(this,v,u)?this.href:void 0)}
        target=${m(g(this,v,u)?this.target:void 0)}
        rel=${m(g(this,v,u)?this.rel||g(this,v,T):void 0)}
        download=${m(g(this,v,u)?this.download:void 0)}
        part="_button"
        @click="${g(this,w)}"
        ${rt(r=>r.name.startsWith("gds-aria")||r.name==="gds-role")}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${g(this,x)}></slot>
        <slot name="trail"></slot>
        ${N(!this._isUsingTransitionalStyles,()=>vt`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};f=new WeakMap;v=new WeakSet;u=function(){return this.href.length>0};T=function(){return this.target==="_blank"?"noreferrer noopener":void 0};x=new WeakMap;w=new WeakMap;l.styles=[L,S(it)];l.shadowRootOptions={mode:"open",delegatesFocus:!0};d([c({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([c({reflect:!0})],l.prototype,"type",2);d([c({reflect:!0})],l.prototype,"rank",2);d([c({reflect:!0})],l.prototype,"variant",2);d([c({reflect:!0})],l.prototype,"size",2);d([c()],l.prototype,"label",2);d([c()],l.prototype,"href",2);d([c()],l.prototype,"target",2);d([c()],l.prototype,"rel",2);d([c()],l.prototype,"download",2);d([$("slot:not([name])")],l.prototype,"_mainSlot",2);d([$(".button")],l.prototype,"_button",2);d([tt({attributes:!0,childList:!1,subtree:!1,characterData:!1})],l.prototype,"_attributeChanged",1);l=d([D("gds-button")],l);export{l as G,h as a,rt as f,tt as o};
