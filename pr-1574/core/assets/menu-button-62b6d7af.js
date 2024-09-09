import{r as _}from"./lit-element-2a5e401f.js";import{n as a,g as m,G as y}from"./gds-element-24e794df.js";import{e as w}from"./class-map-43969d56.js";import{o as p}from"./if-defined-39fa3d49.js";import{s as b,n as x}from"./static-50b4adfb.js";import{c as k}from"./constrain-slots-08d8606c.js";import{t as $}from"./tokens.style-681e2422.js";const z=`@layer tokens,a11y,core,variants,sizes,sets,disabled;@layer tokens{:host{--_gap: 4px;--_padding-inline: var(--gds-space-m);--_padding-block: var(--gds-space-xs);--_color-bg: transparent;--_color-text: var(--gds-sys-color-primary-text);--_color-border: transparent;--_color-outline-alpha: 60%;--_color-outline: var(--gds-sys-color-stroke-stroke);--_font-size: 1rem;--_font-weight: 400;--_line-height: 1.25;display:inline-block;isolation:isolate;max-width:100%;height:100%}}@layer core{.button{align-items:center;background-color:var(--_color-bg);border-color:var(--_color-border);border-style:none;border-bottom-style:solid;border-bottom-width:2px;box-sizing:border-box;color:var(--_color-text);color-scheme:dark light;cursor:pointer;display:inline-flex;gap:var(--_gap);height:100%;inline-size:100%;justify-content:space-between;justify-items:center;outline-color:transparent;outline-offset:2px;outline-style:solid;outline-width:2px;padding-block:var(--_padding-block);padding-inline:var(--_padding-inline);position:relative;font-family:inherit;font-size:var(--_font-size);font-weight:var(--_font-weight);line-height:var(--_line-height);slot:not([name]) {display: inline-block; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;}}.button:focus-visible{outline-color:color-mix(in srgb,var(--_color-outline),transparent var(--_color-outline-alpha));border-radius:2px;overflow:visible}.button:hover,.button.selected:hover,.button:active{--_color-bg: var(--gds-sys-color-base200);--_color-border: var(--gds-sys-color-base600)}.button.selected{--_color-bg: var(--gds-sys-color-base100);--_color-border: var(--gds-sys-color-base700)}.compact{display:flex;flex-direction:column;--_padding-inline: var(--gds-space-s);--_gap: 1px;font-size:.875rem;height:56px;justify-content:center}.compact>slot[name]{order:0}.compact>slot:not([name]){order:1}a{text-decoration:none}}@layer disabled{:disabled{--_color-bg: var(--gds-sys-color-container-container-disabled);border-color:var(--_color-bg);color:var(--gds-sys-color-content-content-disabled);pointer-events:none}}
`;var C=Object.defineProperty,O=Object.getOwnPropertyDescriptor,s=(o,e,r,d)=>{for(var i=d>1?void 0:d?O(e,r):e,h=o.length-1,f;h>=0;h--)(f=o[h])&&(i=(d?f(e,r,i):f(i))||i);return d&&i&&C(e,r,i),i},B=(o,e,r)=>{if(!e.has(o))throw TypeError("Cannot "+r)},n=(o,e,r)=>(B(o,e,"read from private field"),r?r.call(o):e.get(o)),v=(o,e,r)=>{if(e.has(o))throw TypeError("Cannot add the same private member more than once");e instanceof WeakSet?e.add(o):e.set(o,r)},l,c,g,u;let t=class extends y{constructor(){super(),v(this,l),v(this,g),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1,k(this)}render(){const o={button:!0,selected:this.selected,compact:this.compact},e=n(this,l,c)?b`a`:b`button`;return x`
      <${e}
        class="${w(o)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${p(n(this,l,c)?this.href:void 0)}
        target=${p(n(this,l,c)?this.target:void 0)}
        rel=${p(n(this,l,c)?this.rel||n(this,g,u):void 0)}
        download=${p(n(this,l,c)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};l=new WeakSet;c=function(){return this.href.length>0};g=new WeakSet;u=function(){return this.target==="_blank"?"noreferrer noopener":void 0};t.styles=[$,_(z)];t.shadowRootOptions={mode:"open",delegatesFocus:!0};s([a({type:Boolean,reflect:!0})],t.prototype,"disabled",2);s([a()],t.prototype,"label",2);s([a()],t.prototype,"href",2);s([a()],t.prototype,"target",2);s([a()],t.prototype,"rel",2);s([a()],t.prototype,"download",2);s([a({type:Boolean,reflect:!0})],t.prototype,"compact",2);s([a({type:Boolean,reflect:!0})],t.prototype,"selected",2);t=s([m("gds-menu-button")],t);
