const Mt=["top","right","bottom","left"],j=Math.min,V=Math.max,ot=Math.round,nt=Math.floor,L=t=>({x:t,y:t}),Nt={left:"right",right:"left",bottom:"top",top:"bottom"},Wt={start:"end",end:"start"};function at(t,e,n){return V(t,j(e,n))}function q(t,e){return typeof t=="function"?t(e):t}function $(t){return t.split("-")[0]}function tt(t){return t.split("-")[1]}function Ct(t){return t==="x"?"y":"x"}function mt(t){return t==="y"?"height":"width"}function Y(t){return["top","bottom"].includes($(t))?"y":"x"}function ht(t){return Ct(Y(t))}function Ht(t,e,n){n===void 0&&(n=!1);const o=tt(t),i=ht(t),r=mt(i);let s=i==="x"?o===(n?"end":"start")?"right":"left":o==="start"?"bottom":"top";return e.reference[r]>e.floating[r]&&(s=it(s)),[s,it(s)]}function Vt(t){const e=it(t);return[ut(t),e,ut(e)]}function ut(t){return t.replace(/start|end/g,e=>Wt[e])}function $t(t,e,n){const o=["left","right"],i=["right","left"],r=["top","bottom"],s=["bottom","top"];switch(t){case"top":case"bottom":return n?e?i:o:e?o:i;case"left":case"right":return e?r:s;default:return[]}}function zt(t,e,n,o){const i=tt(t);let r=$t($(t),n==="start",o);return i&&(r=r.map(s=>s+"-"+i),e&&(r=r.concat(r.map(ut)))),r}function it(t){return t.replace(/left|right|bottom|top/g,e=>Nt[e])}function _t(t){return{top:0,right:0,bottom:0,left:0,...t}}function Et(t){return typeof t!="number"?_t(t):{top:t,right:t,bottom:t,left:t}}function st(t){const{x:e,y:n,width:o,height:i}=t;return{width:o,height:i,top:n,left:e,right:e+o,bottom:n+i,x:e,y:n}}function yt(t,e,n){let{reference:o,floating:i}=t;const r=Y(e),s=ht(e),c=mt(s),l=$(e),f=r==="y",d=o.x+o.width/2-i.width/2,u=o.y+o.height/2-i.height/2,m=o[c]/2-i[c]/2;let a;switch(l){case"top":a={x:d,y:o.y-i.height};break;case"bottom":a={x:d,y:o.y+o.height};break;case"right":a={x:o.x+o.width,y:u};break;case"left":a={x:o.x-i.width,y:u};break;default:a={x:o.x,y:o.y}}switch(tt(e)){case"start":a[s]-=m*(n&&f?-1:1);break;case"end":a[s]+=m*(n&&f?-1:1);break}return a}const It=async(t,e,n)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:s}=n,c=r.filter(Boolean),l=await(s.isRTL==null?void 0:s.isRTL(e));let f=await s.getElementRects({reference:t,floating:e,strategy:i}),{x:d,y:u}=yt(f,o,l),m=o,a={},h=0;for(let g=0;g<c.length;g++){const{name:w,fn:p}=c[g],{x,y,data:b,reset:v}=await p({x:d,y:u,initialPlacement:o,placement:m,strategy:i,middlewareData:a,rects:f,platform:s,elements:{reference:t,floating:e}});d=x??d,u=y??u,a={...a,[w]:{...a[w],...b}},v&&h<=50&&(h++,typeof v=="object"&&(v.placement&&(m=v.placement),v.rects&&(f=v.rects===!0?await s.getElementRects({reference:t,floating:e,strategy:i}):v.rects),{x:d,y:u}=yt(f,m,l)),g=-1)}return{x:d,y:u,placement:m,strategy:i,middlewareData:a}};async function Q(t,e){var n;e===void 0&&(e={});const{x:o,y:i,platform:r,rects:s,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:d="viewport",elementContext:u="floating",altBoundary:m=!1,padding:a=0}=q(e,t),h=Et(a),w=c[m?u==="floating"?"reference":"floating":u],p=st(await r.getClippingRect({element:(n=await(r.isElement==null?void 0:r.isElement(w)))==null||n?w:w.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(c.floating)),boundary:f,rootBoundary:d,strategy:l})),x=u==="floating"?{x:o,y:i,width:s.floating.width,height:s.floating.height}:s.reference,y=await(r.getOffsetParent==null?void 0:r.getOffsetParent(c.floating)),b=await(r.isElement==null?void 0:r.isElement(y))?await(r.getScale==null?void 0:r.getScale(y))||{x:1,y:1}:{x:1,y:1},v=st(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:c,rect:x,offsetParent:y,strategy:l}):x);return{top:(p.top-v.top+h.top)/b.y,bottom:(v.bottom-p.bottom+h.bottom)/b.y,left:(p.left-v.left+h.left)/b.x,right:(v.right-p.right+h.right)/b.x}}const jt=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:o,placement:i,rects:r,platform:s,elements:c,middlewareData:l}=e,{element:f,padding:d=0}=q(t,e)||{};if(f==null)return{};const u=Et(d),m={x:n,y:o},a=ht(i),h=mt(a),g=await s.getDimensions(f),w=a==="y",p=w?"top":"left",x=w?"bottom":"right",y=w?"clientHeight":"clientWidth",b=r.reference[h]+r.reference[a]-m[a]-r.floating[h],v=m[a]-r.reference[a],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(f));let N=E?E[y]:0;(!N||!await(s.isElement==null?void 0:s.isElement(E)))&&(N=c.floating[y]||r.floating[h]);const K=b/2-v/2,W=N/2-g[h]/2-1,F=j(u[p],W),G=j(u[x],W),H=F,J=N-g[h]-G,A=N/2-g[h]/2+K,_=at(H,A,J),D=!l.arrow&&tt(i)!=null&&A!==_&&r.reference[h]/2-(A<H?F:G)-g[h]/2<0,T=D?A<H?A-H:A-J:0;return{[a]:m[a]+T,data:{[a]:_,centerOffset:A-_-T,...D&&{alignmentOffset:T}},reset:D}}}),Yt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var n,o;const{placement:i,middlewareData:r,rects:s,initialPlacement:c,platform:l,elements:f}=e,{mainAxis:d=!0,crossAxis:u=!0,fallbackPlacements:m,fallbackStrategy:a="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:g=!0,...w}=q(t,e);if((n=r.arrow)!=null&&n.alignmentOffset)return{};const p=$(i),x=Y(c),y=$(c)===c,b=await(l.isRTL==null?void 0:l.isRTL(f.floating)),v=m||(y||!g?[it(c)]:Vt(c)),E=h!=="none";!m&&E&&v.push(...zt(c,g,h,b));const N=[c,...v],K=await Q(e,w),W=[];let F=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&W.push(K[p]),u){const A=Ht(i,s,b);W.push(K[A[0]],K[A[1]])}if(F=[...F,{placement:i,overflows:W}],!W.every(A=>A<=0)){var G,H;const A=(((G=r.flip)==null?void 0:G.index)||0)+1,_=N[A];if(_)return{data:{index:A,overflows:F},reset:{placement:_}};let D=(H=F.filter(T=>T.overflows[0]<=0).sort((T,k)=>T.overflows[1]-k.overflows[1])[0])==null?void 0:H.placement;if(!D)switch(a){case"bestFit":{var J;const T=(J=F.filter(k=>{if(E){const B=Y(k.placement);return B===x||B==="y"}return!0}).map(k=>[k.placement,k.overflows.filter(B=>B>0).reduce((B,Bt)=>B+Bt,0)]).sort((k,B)=>k[1]-B[1])[0])==null?void 0:J[0];T&&(D=T);break}case"initialPlacement":D=c;break}if(i!==D)return{reset:{placement:D}}}return{}}}};function vt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function bt(t){return Mt.some(e=>t[e]>=0)}const Xt=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:o="referenceHidden",...i}=q(t,e);switch(o){case"referenceHidden":{const r=await Q(e,{...i,elementContext:"reference"}),s=vt(r,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:bt(s)}}}case"escaped":{const r=await Q(e,{...i,altBoundary:!0}),s=vt(r,n.floating);return{data:{escapedOffsets:s,escaped:bt(s)}}}default:return{}}}}};async function qt(t,e){const{placement:n,platform:o,elements:i}=t,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),s=$(n),c=tt(n),l=Y(n)==="y",f=["left","top"].includes(s)?-1:1,d=r&&l?-1:1,u=q(e,t);let{mainAxis:m,crossAxis:a,alignmentAxis:h}=typeof u=="number"?{mainAxis:u,crossAxis:0,alignmentAxis:null}:{mainAxis:u.mainAxis||0,crossAxis:u.crossAxis||0,alignmentAxis:u.alignmentAxis};return c&&typeof h=="number"&&(a=c==="end"?h*-1:h),l?{x:a*d,y:m*f}:{x:m*f,y:a*d}}const Ut=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){var n,o;const{x:i,y:r,placement:s,middlewareData:c}=e,l=await qt(e,t);return s===((n=c.offset)==null?void 0:n.placement)&&(o=c.arrow)!=null&&o.alignmentOffset?{}:{x:i+l.x,y:r+l.y,data:{...l,placement:s}}}}},Kt=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:o,placement:i}=e,{mainAxis:r=!0,crossAxis:s=!1,limiter:c={fn:w=>{let{x:p,y:x}=w;return{x:p,y:x}}},...l}=q(t,e),f={x:n,y:o},d=await Q(e,l),u=Y($(i)),m=Ct(u);let a=f[m],h=f[u];if(r){const w=m==="y"?"top":"left",p=m==="y"?"bottom":"right",x=a+d[w],y=a-d[p];a=at(x,a,y)}if(s){const w=u==="y"?"top":"left",p=u==="y"?"bottom":"right",x=h+d[w],y=h-d[p];h=at(x,h,y)}const g=c.fn({...e,[m]:a,[u]:h});return{...g,data:{x:g.x-n,y:g.y-o,enabled:{[m]:r,[u]:s}}}}}};function rt(){return typeof window<"u"}function U(t){return Tt(t)?(t.nodeName||"").toLowerCase():"#document"}function O(t){var e;return(t==null||(e=t.ownerDocument)==null?void 0:e.defaultView)||window}function P(t){var e;return(e=(Tt(t)?t.ownerDocument:t.document)||window.document)==null?void 0:e.documentElement}function Tt(t){return rt()?t instanceof Node||t instanceof O(t).Node:!1}function R(t){return rt()?t instanceof Element||t instanceof O(t).Element:!1}function S(t){return rt()?t instanceof HTMLElement||t instanceof O(t).HTMLElement:!1}function At(t){return!rt()||typeof ShadowRoot>"u"?!1:t instanceof ShadowRoot||t instanceof O(t).ShadowRoot}function et(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=C(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function Gt(t){return["table","td","th"].includes(U(t))}function ct(t){return[":popover-open",":modal"].some(e=>{try{return t.matches(e)}catch{return!1}})}function gt(t){const e=pt(),n=R(t)?C(t):t;return n.transform!=="none"||n.perspective!=="none"||(n.containerType?n.containerType!=="normal":!1)||!e&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!e&&(n.filter?n.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(n.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(n.contain||"").includes(o))}function Jt(t){let e=M(t);for(;S(e)&&!X(e);){if(gt(e))return e;if(ct(e))return null;e=M(e)}return null}function pt(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function X(t){return["html","body","#document"].includes(U(t))}function C(t){return O(t).getComputedStyle(t)}function lt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.scrollX,scrollTop:t.scrollY}}function M(t){if(U(t)==="html")return t;const e=t.assignedSlot||t.parentNode||At(t)&&t.host||P(t);return At(e)?e.host:e}function Lt(t){const e=M(t);return X(e)?t.ownerDocument?t.ownerDocument.body:t.body:S(e)&&et(e)?e:Lt(e)}function Z(t,e,n){var o;e===void 0&&(e=[]),n===void 0&&(n=!0);const i=Lt(t),r=i===((o=t.ownerDocument)==null?void 0:o.body),s=O(i);if(r){const c=dt(s);return e.concat(s,s.visualViewport||[],et(i)?i:[],c&&n?Z(c):[])}return e.concat(i,Z(i,[],n))}function dt(t){return t.parent&&Object.getPrototypeOf(t.parent)?t.frameElement:null}function St(t){const e=C(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const i=S(t),r=i?t.offsetWidth:n,s=i?t.offsetHeight:o,c=ot(n)!==r||ot(o)!==s;return c&&(n=r,o=s),{width:n,height:o,$:c}}function wt(t){return R(t)?t:t.contextElement}function I(t){const e=wt(t);if(!S(e))return L(1);const n=e.getBoundingClientRect(),{width:o,height:i,$:r}=St(e);let s=(r?ot(n.width):n.width)/o,c=(r?ot(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!c||!Number.isFinite(c))&&(c=1),{x:s,y:c}}const Qt=L(0);function Pt(t){const e=O(t);return!pt()||!e.visualViewport?Qt:{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}}function Zt(t,e,n){return e===void 0&&(e=!1),!n||e&&n!==O(t)?!1:e}function z(t,e,n,o){e===void 0&&(e=!1),n===void 0&&(n=!1);const i=t.getBoundingClientRect(),r=wt(t);let s=L(1);e&&(o?R(o)&&(s=I(o)):s=I(t));const c=Zt(r,n,o)?Pt(r):L(0);let l=(i.left+c.x)/s.x,f=(i.top+c.y)/s.y,d=i.width/s.x,u=i.height/s.y;if(r){const m=O(r),a=o&&R(o)?O(o):o;let h=m,g=dt(h);for(;g&&o&&a!==h;){const w=I(g),p=g.getBoundingClientRect(),x=C(g),y=p.left+(g.clientLeft+parseFloat(x.paddingLeft))*w.x,b=p.top+(g.clientTop+parseFloat(x.paddingTop))*w.y;l*=w.x,f*=w.y,d*=w.x,u*=w.y,l+=y,f+=b,h=O(g),g=dt(h)}}return st({width:d,height:u,x:l,y:f})}function xt(t,e){const n=lt(t).scrollLeft;return e?e.left+n:z(P(t)).left+n}function Dt(t,e,n){n===void 0&&(n=!1);const o=t.getBoundingClientRect(),i=o.left+e.scrollLeft-(n?0:xt(t,o)),r=o.top+e.scrollTop;return{x:i,y:r}}function te(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r=i==="fixed",s=P(o),c=e?ct(e.floating):!1;if(o===s||c&&r)return n;let l={scrollLeft:0,scrollTop:0},f=L(1);const d=L(0),u=S(o);if((u||!u&&!r)&&((U(o)!=="body"||et(s))&&(l=lt(o)),S(o))){const a=z(o);f=I(o),d.x=a.x+o.clientLeft,d.y=a.y+o.clientTop}const m=s&&!u&&!r?Dt(s,l,!0):L(0);return{width:n.width*f.x,height:n.height*f.y,x:n.x*f.x-l.scrollLeft*f.x+d.x+m.x,y:n.y*f.y-l.scrollTop*f.y+d.y+m.y}}function ee(t){return Array.from(t.getClientRects())}function ne(t){const e=P(t),n=lt(t),o=t.ownerDocument.body,i=V(e.scrollWidth,e.clientWidth,o.scrollWidth,o.clientWidth),r=V(e.scrollHeight,e.clientHeight,o.scrollHeight,o.clientHeight);let s=-n.scrollLeft+xt(t);const c=-n.scrollTop;return C(o).direction==="rtl"&&(s+=V(e.clientWidth,o.clientWidth)-i),{width:i,height:r,x:s,y:c}}function oe(t,e){const n=O(t),o=P(t),i=n.visualViewport;let r=o.clientWidth,s=o.clientHeight,c=0,l=0;if(i){r=i.width,s=i.height;const f=pt();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:r,height:s,x:c,y:l}}function ie(t,e){const n=z(t,!0,e==="fixed"),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=S(t)?I(t):L(1),s=t.clientWidth*r.x,c=t.clientHeight*r.y,l=i*r.x,f=o*r.y;return{width:s,height:c,x:l,y:f}}function Ot(t,e,n){let o;if(e==="viewport")o=oe(t,n);else if(e==="document")o=ne(P(t));else if(R(e))o=ie(e,n);else{const i=Pt(t);o={x:e.x-i.x,y:e.y-i.y,width:e.width,height:e.height}}return st(o)}function Ft(t,e){const n=M(t);return n===e||!R(n)||X(n)?!1:C(n).position==="fixed"||Ft(n,e)}function se(t,e){const n=e.get(t);if(n)return n;let o=Z(t,[],!1).filter(c=>R(c)&&U(c)!=="body"),i=null;const r=C(t).position==="fixed";let s=r?M(t):t;for(;R(s)&&!X(s);){const c=C(s),l=gt(s);!l&&c.position==="fixed"&&(i=null),(r?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||et(s)&&!l&&Ft(t,s))?o=o.filter(d=>d!==s):i=c,s=M(s)}return e.set(t,o),o}function re(t){let{element:e,boundary:n,rootBoundary:o,strategy:i}=t;const s=[...n==="clippingAncestors"?ct(e)?[]:se(e,this._c):[].concat(n),o],c=s[0],l=s.reduce((f,d)=>{const u=Ot(e,d,i);return f.top=V(u.top,f.top),f.right=j(u.right,f.right),f.bottom=j(u.bottom,f.bottom),f.left=V(u.left,f.left),f},Ot(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function ce(t){const{width:e,height:n}=St(t);return{width:e,height:n}}function le(t,e,n){const o=S(e),i=P(e),r=n==="fixed",s=z(t,!0,r,e);let c={scrollLeft:0,scrollTop:0};const l=L(0);if(o||!o&&!r)if((U(e)!=="body"||et(i))&&(c=lt(e)),o){const m=z(e,!0,r,e);l.x=m.x+e.clientLeft,l.y=m.y+e.clientTop}else i&&(l.x=xt(i));const f=i&&!o&&!r?Dt(i,c):L(0),d=s.left+c.scrollLeft-l.x-f.x,u=s.top+c.scrollTop-l.y-f.y;return{x:d,y:u,width:s.width,height:s.height}}function ft(t){return C(t).position==="static"}function Rt(t,e){if(!S(t)||C(t).position==="fixed")return null;if(e)return e(t);let n=t.offsetParent;return P(t)===n&&(n=n.ownerDocument.body),n}function kt(t,e){const n=O(t);if(ct(t))return n;if(!S(t)){let i=M(t);for(;i&&!X(i);){if(R(i)&&!ft(i))return i;i=M(i)}return n}let o=Rt(t,e);for(;o&&Gt(o)&&ft(o);)o=Rt(o,e);return o&&X(o)&&ft(o)&&!gt(o)?n:o||Jt(t)||n}const fe=async function(t){const e=this.getOffsetParent||kt,n=this.getDimensions,o=await n(t.floating);return{reference:le(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function ae(t){return C(t).direction==="rtl"}const ue={convertOffsetParentRelativeRectToViewportRelativeRect:te,getDocumentElement:P,getClippingRect:re,getOffsetParent:kt,getElementRects:fe,getClientRects:ee,getDimensions:ce,getScale:I,isElement:R,isRTL:ae};function de(t,e){let n=null,o;const i=P(t);function r(){var c;clearTimeout(o),(c=n)==null||c.disconnect(),n=null}function s(c,l){c===void 0&&(c=!1),l===void 0&&(l=1),r();const{left:f,top:d,width:u,height:m}=t.getBoundingClientRect();if(c||e(),!u||!m)return;const a=nt(d),h=nt(i.clientWidth-(f+u)),g=nt(i.clientHeight-(d+m)),w=nt(f),x={rootMargin:-a+"px "+-h+"px "+-g+"px "+-w+"px",threshold:V(0,j(1,l))||1};let y=!0;function b(v){const E=v[0].intersectionRatio;if(E!==l){if(!y)return s();E?s(!1,E):o=setTimeout(()=>{s(!1,1e-7)},1e3)}y=!1}try{n=new IntersectionObserver(b,{...x,root:i.ownerDocument})}catch{n=new IntersectionObserver(b,x)}n.observe(t)}return s(!0),r}function me(t,e,n,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:c=typeof IntersectionObserver=="function",animationFrame:l=!1}=o,f=wt(t),d=i||r?[...f?Z(f):[],...Z(e)]:[];d.forEach(p=>{i&&p.addEventListener("scroll",n,{passive:!0}),r&&p.addEventListener("resize",n)});const u=f&&c?de(f,n):null;let m=-1,a=null;s&&(a=new ResizeObserver(p=>{let[x]=p;x&&x.target===f&&a&&(a.unobserve(e),cancelAnimationFrame(m),m=requestAnimationFrame(()=>{var y;(y=a)==null||y.observe(e)})),n()}),f&&!l&&a.observe(f),a.observe(e));let h,g=l?z(t):null;l&&w();function w(){const p=z(t);g&&(p.x!==g.x||p.y!==g.y||p.width!==g.width||p.height!==g.height)&&n(),g=p,h=requestAnimationFrame(w)}return n(),()=>{var p;d.forEach(x=>{i&&x.removeEventListener("scroll",n),r&&x.removeEventListener("resize",n)}),u==null||u(),(p=a)==null||p.disconnect(),a=null,l&&cancelAnimationFrame(h)}}const he=Q,ge=Ut,pe=Kt,we=Yt,xe=Xt,ye=jt,ve=(t,e,n)=>{const o=new Map,i={platform:ue,...n},r={...i.platform,_c:o};return It(t,e,{...i,platform:r})};export{me as a,ye as b,ve as c,he as d,we as f,xe as h,ge as o,pe as s};
