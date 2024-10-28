import{m as $}from"./runtime-CMQcyTl6.js";import{r as C}from"./lit-element-C_s9q329.js";import{n as m,g as z,G as W,h as B,r as P}from"./custom-element-scoping-CpYtbs9r.js";import{a as S}from"./query-p8xgzTDt.js";import{t as E}from"./tokens.style-RalixZsd.js";import{T as M}from"./transitional-styles-Cc5JwJ9o.js";import{r as G}from"./resize-observer-B9k8v2TZ.js";import{w as L}from"./watch-tFciLXSI.js";import{s as O}from"./style-expression-property-C6V8xdlu.js";import"./chevron-right-DOKMgDMh.js";const D=':host{background-color:var(--gds-sys-color-container-container-dim1);border:.25rem solid var(--gds-sys-color-container-container-dim1);border-radius:calc(infinity * 1px);box-sizing:border-box;contain:layout;display:inline-flex;height:3rem;width:100%;position:relative;overflow:hidden}:host([size="small"]){height:2.5rem}#track{box-sizing:border-box;display:flex;flex-grow:1;scroll-snap-type:inline mandatory;overscroll-behavior-x:contain;scroll-behavior:smooth;overflow-x:scroll;gap:.25rem;position:relative;scrollbar-width:none}#track::-webkit-scrollbar{display:none}#btn-prev,#btn-next{box-sizing:border-box;align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;aspect-ratio:1;background-color:var(--gds-sys-color-container-container-dim1);border-radius:calc(infinity * 1px);border-width:0;color:var(--gds-sys-color-content-content);cursor:pointer;display:flex;font-size:1rem;height:100%;justify-content:center;width:2.5rem;transition:.2s;z-index:2;position:absolute}@media (pointer: fine){#btn-prev:hover,#btn-next:hover{background-color:color-mix(in srgb,var(--gds-sys-color-state-layers-state-black-dim1),var(--gds-sys-color-container-container-dim1))}}#btn-prev{margin:0 .25rem 0 0}#btn-next{margin:0 0 0 .25rem;right:0}#btn-prev[aria-hidden=true],#btn-next[aria-hidden=true]{opacity:0;width:0;margin:0;padding:0}:host([size="small"]) #btn-prev,:host([size="small"]) #btn-next{width:2rem}::slotted(*){flex-grow:1;flex-shrink:0;z-index:1;scroll-margin:0 2.75rem;scroll-snap-align:start}#indicator{background-color:var(--gds-sys-color-container-container-bright);border-radius:calc(infinity * 1px);height:100%;left:0;position:absolute;transition:transform .2s,width .2s;z-index:0}',N=":host{display:flex;z-index:1}button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:transparent;border-radius:calc(infinity * 1px);border-width:0;color:var(--gds-sys-color-content-content);cursor:pointer;flex-grow:1;flex-shrink:0;font-family:inherit;font-size:inherit;overflow:hidden;padding:0 1rem;text-align:center;text-overflow:ellipsis;white-space:nowrap;width:100%;transition:.1s}button:disabled{cursor:not-allowed;opacity:.5}@media (pointer: fine){:host(:not([selected])) button:hover{background-color:color-mix(in srgb,var(--gds-sys-color-state-layers-state-black-dim1),transparent)}:host(:not([selected])) button:hover:disabled{background-color:transparent}}button:focus-visible{outline:2px solid #000;outline-offset:-2px}";var R=Object.defineProperty,A=Object.getOwnPropertyDescriptor,u=(e,t,s,r)=>{for(var i=r>1?void 0:r?A(t,s):t,a=e.length-1,p;a>=0;a--)(p=e[a])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&R(t,s,i),i};let c=class extends W{constructor(){super(...arguments),this.selected=!1,this.disabled=!1,this._isVisible=!0}get isVisible(){return this._isVisible}connectedCallback(){super.connectedCallback(),M.instance.apply(this,"gds-segmented"),this.setAttribute("role","listitem")}render(){return B`<button
      aria-current=${String(this.selected)}
      ?disabled="${this.disabled}"
    >
      <slot></slot>
    </button>`}};c.styles=[...E,C(N)];u([m({type:Boolean,reflect:!0})],c.prototype,"selected",2);u([m()],c.prototype,"value",2);u([m({type:Boolean,reflect:!0})],c.prototype,"disabled",2);u([O({valueTemplate:e=>e})],c.prototype,"min-width",2);u([O({valueTemplate:e=>e})],c.prototype,"max-width",2);u([O()],c.prototype,"width",2);c=u([z("gds-segment")],c);var X=Object.defineProperty,F=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},d=(e,t,s,r)=>{for(var i=r>1?void 0:r?F(t,s):t,a=e.length-1,p;a>=0;a--)(p=e[a])&&(i=(r?p(t,s,i):p(i))||i);return r&&i&&X(t,s,i),i},V=(e,t,s)=>t.has(e)||I("Cannot "+s),o=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),l=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s,r)=>(V(e,t,"write to private field"),t.set(e,s),s),j=(e,t,s)=>(V(e,t,"access private method"),s),h,v,T,w,_,y,g,f,x,k;const q=(e,t)=>{let s;return()=>{clearTimeout(s),s=setTimeout(e,t)}};let n=class extends W{constructor(){super(...arguments),l(this,v),this.size="medium",l(this,h),this._showPrevButton=!1,this._showNextButton=!1,this.intersectionObserver=null,l(this,w,()=>{this.segments.filter((t,s,r)=>{var i;return((i=r[s+2])==null?void 0:i.isVisible)&&!t.isVisible})[0].scrollIntoView()}),l(this,_,()=>{this.segments.filter((t,s,r)=>{var i;return((i=r[s-2])==null?void 0:i.isVisible)&&!t.isVisible}).reverse()[0].scrollIntoView()}),l(this,y,()=>{this.segments.every(e=>!e.isVisible)||(this._showPrevButton=!this.segments[0].isVisible,this._showNextButton=!this.segments[this.segments.length-1].isVisible)}),l(this,g,q(o(this,y),50)),l(this,f,()=>{const e=this.segments.find(t=>t.selected);if(e){const t=e.offsetWidth,s=e.offsetLeft;this._elIndicator.style.transform=`translateX(${s}px)`,this._elIndicator.style.width=`${t}px`}else this._elIndicator.style.transform="translateX(-100%)",this._elIndicator.style.width="0px"}),l(this,x,e=>{const t=this.segments.find(s=>s===e.target||s.contains(e.target));t&&(this.segments.forEach(s=>s.selected=!1),t.selected=!0,b(this,h,t.value),o(this,f).call(this),this.dispatchEvent(new CustomEvent("change",{detail:{segment:t},bubbles:!0,composed:!0})))}),l(this,k,()=>{o(this,h)&&this.updateComplete.then(()=>{const e=this.segments.find(t=>t.value===o(this,h));e&&(this.segments.forEach(t=>t.selected=!1),e.selected=!0,e.scrollIntoView())})})}get value(){return o(this,h)}set value(e){b(this,h,e),o(this,k).call(this)}get segments(){return this._elSlot?this._elSlot.assignedElements():[]}connectedCallback(){super.connectedCallback(),M.instance.apply(this,"gds-segmented-control"),this.updateComplete.then(()=>{this._elTrack.addEventListener("scroll",()=>{o(this,g).call(this)})})}render(){return B`<button
        aria-hidden=${!this._showPrevButton}
        ?inert=${!this._showPrevButton}
        id="btn-prev"
        @click=${o(this,w)}
        aria-label=${$("Scroll right")}
      >
        <gds-icon-chevron-left />
      </button>
      <div id="track" role="list">
        <slot
          @click=${o(this,x)}
          @slotchange=${j(this,v,T)}
          role="none"
        ></slot>
        <div id="indicator" role="none"></div>
      </div>
      <button
        aria-hidden=${!this._showNextButton}
        ?inert=${!this._showNextButton}
        id="btn-next"
        @click=${o(this,_)}
        aria-label=${$("Scroll right")}
      >
        <gds-icon-chevron-right />
      </button>`}_recalculateMinWidth(){this.updateComplete.then(()=>{o(this,g).call(this),o(this,f).call(this)})}};h=new WeakMap;v=new WeakSet;T=function(){var t,s;const e=(t=this.segments.find(r=>r.selected))==null?void 0:t.value;e&&b(this,h,e),(s=this.intersectionObserver)==null||s.disconnect(),this.intersectionObserver=new IntersectionObserver(r=>{r.forEach(i=>{const a=i.target;a._isVisible=i.intersectionRatio>.99})},{root:this._elTrack,threshold:[0,.01,.5,.99,1]}),this.segments.forEach(r=>{var i;(i=this.intersectionObserver)==null||i.observe(r)})};w=new WeakMap;_=new WeakMap;y=new WeakMap;g=new WeakMap;f=new WeakMap;x=new WeakMap;k=new WeakMap;n.styles=[E,C(D)];d([m({reflect:!0})],n.prototype,"size",2);d([m()],n.prototype,"value",1);d([S("slot")],n.prototype,"_elSlot",2);d([S("#indicator")],n.prototype,"_elIndicator",2);d([S("#track")],n.prototype,"_elTrack",2);d([P()],n.prototype,"_showPrevButton",2);d([P()],n.prototype,"_showNextButton",2);d([G(),L("segMinWidth")],n.prototype,"_recalculateMinWidth",1);n=d([z("gds-segmented-control")],n);
