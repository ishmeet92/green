import{_ as h}from"./iframe-9b3f9bc1.js";import{f as p,R as o,r as a,C as E,A as R,H as x,D}from"./index-a07c96e9.js";var c={},u=p;c.createRoot=u.createRoot,c.hydrateRoot=u.hydrateRoot;var n=new Map,y=({callback:e,children:t})=>{let r=a.useRef();return a.useLayoutEffect(()=>{r.current!==e&&(r.current=e,e())},[e]),t},_=async(e,t)=>{let r=await v(t);return new Promise(s=>{r.render(o.createElement(y,{callback:()=>s(null)},e))})},f=(e,t)=>{let r=n.get(e);r&&(r.unmount(),n.delete(e))},v=async e=>{let t=n.get(e);return t||(t=c.createRoot(e),n.set(e,t)),t},w={code:E,a:R,...x},g=class extends a.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(e){let{showException:t}=this.props;t(e)}render(){let{hasError:e}=this.state,{children:t}=this.props;return e?null:o.createElement(o.Fragment,null,t)}},A=class{constructor(){this.render=async(e,t,r)=>{let s={...w,...t==null?void 0:t.components},m=D;return new Promise((i,l)=>{h(()=>import("./index-d8f1532d.js"),["./index-d8f1532d.js","./index-0173d5c2.js","./index-a07c96e9.js","./iframe-9b3f9bc1.js","./_commonjsHelpers-725317a4.js","./index-d38538b0.js","./index-356e4a49.js"],import.meta.url).then(({MDXProvider:d})=>_(o.createElement(g,{showException:l,key:Math.random()},o.createElement(d,{components:s},o.createElement(m,{context:e,docsParameter:t}))),r)).then(()=>i())})},this.unmount=e=>{f(e)}}};export{A as D,w as d};
