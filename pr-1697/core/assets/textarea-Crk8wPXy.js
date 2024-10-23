import{m as P}from"./runtime-CMQcyTl6.js";import{n as l,r as T,g as R,h}from"./gds-element-DjAhZX8m.js";import{a as G}from"./query-p8xgzTDt.js";import{r as z}from"./query-async-MEroNOeJ.js";import{r as H}from"./form-control-footer-BmoT9s9s.js";import{n as B}from"./when-BR7zwNJC.js";import{i as F,E as m}from"./lit-element-C_s9q329.js";import{t as I}from"./tokens.style-B_4vLAFn.js";import{w as X}from"./watch-tFciLXSI.js";import{s as q}from"./style-expression-property-aSqd3nq4.js";import{a as V,f as J}from"./button-BKEHoiqg.js";import"./cross-small-WNT3EiwY.js";import"./flex-Az1wr94v.js";const K=F`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1), height 0s;
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
    }

    :host([disabled]) {
      color: var(--gds-color-l3-content-disabled);
      pointer-events: none;
    }

    :host([size='small']) textarea {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline: 2px solid transparent;
      outline-offset: 2px;

      &:has(textarea:focus-visible) {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }

      &.invalid:has(textarea:focus-visible) {
        border-color: var(--gds-color-l3-border-negative);
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
      }
    }

    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      font-size: var(--gds-text-size-detail-m);
      height: calc(1lh * var(--_lines));
      line-height: var(--gds-text-line-height-detail-m);
      margin: unset;
      min-height: calc(1lh * 4);
      outline: none;
      overflow: hidden;
      padding: unset;
      resize: none;
      transition:
        var(--_transition),
        resize 0s;

      width: 100%;
    }

    :host([size='small']) slot[name='lead']::slotted(*) {
      width: var(--gds-space-m);
    }

    slot[name='lead']::slotted(*) {
      min-width: var(--gds-space-l);
      display: flex;
    }

    .resize-handle {
      &:hover,
      &:active {
        &::before {
          width: 22px;
          opacity: 1;
          height: 1px;
        }
      }
      &::before {
        content: '';
        position: absolute;
        background: currentColor;
        inset: 0;
        margin-inline: auto;
        height: 0px;
        width: 12px;
        opacity: 0;
        border-radius: 100px;
        transition: var(--_transition);
      }
    }
  }

  @layer simplified {
  }
`;var Q=Object.defineProperty,U=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},a=(e,t,s,d)=>{for(var o=d>1?void 0:d?U(t,s):t,u=e.length-1,g;u>=0;u--)(g=e[u])&&(o=(d?g(t,s,o):g(o))||o);return d&&o&&Q(t,s,o),o},C=(e,t,s)=>t.has(e)||k("Cannot "+s),p=(e,t,s)=>(C(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n=(e,t,s)=>(C(e,t,"access private method"),s),i,S,M,x,b,y,_,w,A,O,f,$,E,v,D,N,L,W,Y;let r=class extends V{constructor(){super(),c(this,i),this.value="",this.label="",this.rows=4,this.lines=4,this.isDragging=!1,this.lastMouseY=0,this.supportingText="",this.showExtendedSupportingText=!1,this.disabled=!1,this.clearable=!1,this.resize="",this.maxlength=Number.MAX_SAFE_INTEGER,this.variant="default",this.trailSlotOccupied=!1,c(this,x,e=>["type","placeholder","required"].includes(e.name)),c(this,b,e=>{const t=e.target;this.value=t.value}),c(this,y,e=>{const t=e.target;this.value=t.value,this.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}),c(this,_,()=>{this.elTextareaAsync.then(e=>e.focus())}),c(this,w,()=>{this.value=""}),this.lines=0,this.resize="auto"}connectedCallback(){super.connectedCallback(),this._setAutoHeight(),n(this,i,f).call(this)}disconnectedCallback(){super.disconnectedCallback(),n(this,i,f).call(this)}render(){return h`${H(this.variant,[["default",()=>n(this,i,S).call(this)],["floating-label",()=>n(this,i,M).call(this)]])}`}_getValidityAnchor(){return this.elTextarea}_setAutoHeight(){this.elTextareaAsync.then(e=>{const t=(e.value.split(`
`).length||1).toString();e==null||e.style.setProperty("--_lines",t.toString())})}};i=new WeakSet;S=function(){return h`
      <gds-form-control-header>
        <label for="input" slot="label">${this.label}</label>
        <span slot="supporting-text">${this.supportingText}</span>
        <slot
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>

      <gds-flex
        position="relative"
        align-items="flex-start"
        justify-content="center"
        gap="xs"
        level="3"
        padding=${this.trailSlotOccupied?"s m s m":"s s s m"}
        border-radius="xs"
        .background=${this.disabled?"disabled":this.invalid?"negative-secondary":"secondary"}
        .border=${this.disabled?"":this.invalid?"4xs/negative":"4xs/secondary"}
        class="field ${this.invalid?"invalid":""}"
        @click=${p(this,_)}
        cursor="text"
      >
        ${n(this,i,A).call(this)} ${n(this,i,L).call(this)}

        <gds-flex gap="xs" align-items="center" block-size="l">
          ${n(this,i,W).call(this)} ${n(this,i,O).call(this)}
        </gds-flex>
        ${B(this.resize==="auto",()=>n(this,i,D).call(this),()=>m)}
      </gds-flex>

      <gds-form-control-footer
        .charCounter=${p(this,i,Y)&&this.maxlength-this.value.length}
        .validationMessage=${this.invalid&&this.validationMessage}
      ></gds-form-control-footer>
    `};M=function(){return m};x=new WeakMap;b=new WeakMap;y=new WeakMap;_=new WeakMap;w=new WeakMap;A=function(){return h` <slot name="lead"></slot> `};O=function(){return h`
      <slot name="trail" @slotchange=${n(this,i,N)}></slot>
    `};f=function(){const e=this.querySelector(".resize-handle");e&&e.addEventListener("mousedown",n(this,i,$).bind(this))};$=function(e){e.preventDefault(),this.isDragging=!0,this.lastMouseY=e.clientY,document.addEventListener("mousemove",n(this,i,E).bind(this)),document.addEventListener("mouseup",n(this,i,v).bind(this))};E=function(e){if(!this.isDragging)return;const t=e.clientY-this.lastMouseY;Math.abs(t)>=20&&(t>0?this.lines+=1:this.lines=Math.max(1,this.lines-1),this.elTextareaAsync.then(s=>{s==null||s.style.setProperty("--_lines",this.lines.toString())}),this.lastMouseY=e.clientY)};v=function(){this.isDragging=!1,document.removeEventListener("mousemove",n(this,i,E).bind(this)),document.removeEventListener("mouseup",n(this,i,v).bind(this))};D=function(){return h`
      <gds-container
        class="resize-handle"
        position="absolute"
        inset="auto auto -10px 0"
        width="100%"
        height="20px"
        cursor="row-resize"
        z-index="2"
        @mousedown=${n(this,i,$)}
      ></gds-container>
    `};N=function(e){const s=e.target.assignedNodes({flatten:!0});this.trailSlotOccupied=s.length>0&&s.some(d=>{var o;return d.nodeType===Node.ELEMENT_NODE||d.nodeType===Node.TEXT_NODE&&((o=d.textContent)==null?void 0:o.trim())!==""})};L=function(){return h`
      <textarea
        @input=${p(this,b)}
        @change=${p(this,y)}
        .value=${this.value}
        id="input"
        style="${this.invalid?"color: var(--gds-color-l3-content-negative);":this.disabled?"color: currentColor;pointer-events:none;":null}"
        aria-describedby="supporting-text"
        placeholder=" "
        ${J(p(this,x))}
      ></textarea>
    `};W=function(){return this.clearable&&this.value.length>0?h`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${this.invalid?"negative":""}"
          ?disabled="${this.disabled}"
          label="${P("Clear input")}"
          @click=${p(this,w)}
        >
          <gds-icon-cross-small />
        </gds-button>
      `:m};Y=function(){return this.maxlength<Number.MAX_SAFE_INTEGER};r.styles=[I,K];a([l()],r.prototype,"value",2);a([l()],r.prototype,"label",2);a([q({valueTemplate:e=>e,selector:"textarea",styleTemplate:(e,t)=>`min-height: calc(1lh * ${t[0]});`})],r.prototype,"rows",2);a([T()],r.prototype,"lines",2);a([l({attribute:"supporting-text"})],r.prototype,"supportingText",2);a([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);a([l({attribute:"disabled",type:Boolean,reflect:!0})],r.prototype,"disabled",2);a([l({type:Boolean})],r.prototype,"clearable",2);a([l()],r.prototype,"resize",2);a([l({type:Number})],r.prototype,"maxlength",2);a([l({type:String})],r.prototype,"variant",2);a([z("textarea")],r.prototype,"elTextareaAsync",2);a([G("textarea")],r.prototype,"elTextarea",2);a([z('slot[name="extended-supporting-text"]')],r.prototype,"elExtendedSupportingTextSlot",2);a([T()],r.prototype,"trailSlotOccupied",2);a([X("value")],r.prototype,"_setAutoHeight",1);r=a([R("gds-textarea")],r);
