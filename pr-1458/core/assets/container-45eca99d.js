import{g as c,G as y,h as u}from"./gds-element-90c5f05b.js";import{t as g}from"./tokens.style-681e2422.js";import{s as p}from"./style-expression-property-5a4dd319.js";import{i as d}from"./lit-element-2a5e401f.js";const v=d`
  :host {
    box-sizing: border-box;
  }
`;var T=Object.defineProperty,f=Object.getOwnPropertyDescriptor,r=(t,e,a,l)=>{for(var s=l>1?void 0:l?f(e,a):e,n=t.length-1,m;n>=0;n--)(m=t[n])&&(s=(l?m(e,a,s):m(s))||s);return l&&s&&T(e,a,s),s};let o=class extends y{constructor(){super(...arguments),this.display="block"}render(){return u`<slot></slot>`}};o.styles=[g,v];r([p({valueTemplate:t=>t})],o.prototype,"display",2);r([p({valueTemplate:t=>{const[e,a]=t.split("/");return a?`color-mix(in srgb, var(--gds-sys-color-${e}) ${parseFloat(a)*100}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],o.prototype,"color",2);r([p({valueTemplate:t=>{const[e,a]=t.split("/");return a?`color-mix(in srgb, var(--gds-sys-color-${e}) ${parseFloat(a)*100}%, transparent 0%)`:`var(--gds-color-${e})`}})],o.prototype,"background",2);r([p({valueTemplate:t=>t})],o.prototype,"opacity",2);r([p()],o.prototype,"padding",2);r([p({valueTemplate:t=>t==="auto"?"auto":`var(--gds-space-${t})`,styleTemplate:(t,e)=>{const a=i=>i==="auto"?"auto":`${i}`,l=a(e[0]),s=e.length>1?a(e[1]):l,n=e.length>2?a(e[2]):l,m=e.length>3?a(e[3]):s;return`margin: ${l} ${s} ${n} ${m};`}})],o.prototype,"margin",2);r([p({valueTemplate:t=>t})],o.prototype,"position",2);r([p({valueTemplate:t=>t})],o.prototype,"inset",2);r([p({valueTemplate:t=>t})],o.prototype,"overflow",2);r([p({property:"grid-column",valueTemplate:t=>`${t}`})],o.prototype,"column",2);r([p({property:"grid-row",valueTemplate:t=>`${t}`})],o.prototype,"row",2);r([p({valueTemplate:t=>t})],o.prototype,"height",2);r([p({valueTemplate:t=>t})],o.prototype,"width",2);r([p({property:"z-index",valueTemplate:t=>t})],o.prototype,"stack",2);r([p({property:"box-sizing",valueTemplate:t=>t})],o.prototype,"box",2);o=r([c("gds-container")],o);export{o as G};
