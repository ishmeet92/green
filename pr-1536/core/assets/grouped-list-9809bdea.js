import{g as c,G as p,h as o,n as m}from"./gds-element-54cd6e2a.js";import{n as u}from"./when-cf7256a5.js";import{T as v}from"./transitional-styles-dbd95809.js";import{c as f}from"./constrain-slots-08d8606c.js";var g=Object.defineProperty,h=Object.getOwnPropertyDescriptor,_=(i,s,l,t)=>{for(var e=t>1?void 0:t?h(s,l):s,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&g(s,l,e),e};let d=class extends p{connectedCallback(){super.connectedCallback(),this.setAttribute("role","listitem")}render(){return o`<slot></slot>`}};d=_([c("gds-list-item")],d);var O=Object.defineProperty,P=Object.getOwnPropertyDescriptor,b=(i,s,l,t)=>{for(var e=t>1?void 0:t?P(s,l):s,r=i.length-1,a;r>=0;r--)(a=i[r])&&(e=(t?a(s,l,e):a(e))||e);return t&&e&&O(s,l,e),e};let n=class extends p{constructor(){super(...arguments),this.label=""}connectedCallback(){super.connectedCallback(),f(this),v.instance.apply(this,"gds-grouped-list")}render(){return o`${u(this.label,()=>o`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${this.label}
          </div>`)}
      <div role="list" aria-labelledby="label">
        <slot gds-allow="gds-list-item"></slot>
      </div>`}};b([m()],n.prototype,"label",2);n=b([c("gds-grouped-list")],n);
