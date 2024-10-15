import{r as i,j as r,T as z,c as G,C as M,B as C,a as J,R as W,b as X,t as Y}from"./vendor-DIFvP_d3.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const f of c.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&a(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();var Z=Object.defineProperty,ee=Object.defineProperties,te=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,ne=Object.prototype.hasOwnProperty,re=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?Z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))ne.call(t,n)&&R(e,n,t[n]);if(A)for(var n of A(t))re.call(t,n)&&R(e,n,t[n]);return e},w=(e,t)=>ee(e,te(t)),_=(e,t,n)=>R(e,typeof t!="symbol"?t+"":t,n);function L(){return typeof window<"u"&&typeof document<"u"}function D(e){return typeof e=="function"}function q(e,t){const n=p({},e);return t.forEach(a=>delete n[a]),n}function oe(...e){return e.filter(Boolean).join(" ")}function se(e){return q(e,Object.keys(e).filter(t=>e[t]===void 0))}var ae=(e,t)=>!Object.is(e,t);function ie(e,t=ae){const n=i.useRef(),a=i.useRef();return t(a.current,e)&&(n.current=a.current,a.current=e),n.current}var ce=ie,le=()=>{const[,e]=i.useState({});return i.useCallback(()=>e({}),[])},ue=le;function de(e){const{defaultValue:t,value:n,onChange:a,beforeValue:o,postValue:c}=e,f=Object.prototype.hasOwnProperty.call(e,"value")&&typeof n<"u",y=i.useMemo(()=>{if(f)return n;if(t!==void 0)return D(t)?t():t},[]),m=i.useRef(y);f&&(m.current=n);const h=ce(m.current);if(c){const s=c(m.current,h);s&&(m.current=s)}const j=ue(),b=s=>{let l=D(s)?s(m.current):s;if(o){const u=o(l,m.current);u&&(l=u)}a&&a(l,m.current),f||(m.current=l,j())};return[m.current,b,h]}var fe=L()?i.useLayoutEffect:i.useEffect,H=fe;function he(e){const{content:t,className:n,duration:a,onOpenChange:o,onClosed:c,pauseOnHover:f,hover:y,updateFlag:m,transition:h,open:j,onEnter:b,onUpdate:s,onExit:l,offsetHeight:u}=e,k=i.useRef(!1),O=i.useMemo(()=>typeof h=="string"?{transition:h}:{transition:h==null?void 0:h.name,duration:h==null?void 0:h.duration,exitDuration:h==null?void 0:h.exitDuration},[h]),v=i.useRef(),x=i.useRef(null),[P,T]=de({defaultValue:!!j,value:j,onChange:d=>{o(d)}}),S=i.useCallback(()=>{a&&(v.current&&clearTimeout(v.current),v.current=window.setTimeout(()=>{T(!1)},+a))},[a,T]),B=i.useCallback(d=>{!f||!P||(d?v.current&&clearTimeout(v.current):S())},[P,f,S]);H(()=>{B(y)},[y]);const Q=i.useCallback(()=>{if(!x.current)return;const d=x.current.clientHeight;b(d)},[b]),$=i.useCallback(()=>{var d;const E=(d=x.current)==null?void 0:d.clientHeight;s(E||0)},[s]),F=i.useCallback(()=>{var d;const E=(d=x.current)==null?void 0:d.clientHeight;l(E||0)},[l]),N=i.useCallback(()=>{c==null||c()},[c]),V=i.useCallback((d,E)=>[`translate(-50%, calc(-50% - ${E}px))`,d].filter(Boolean).join(" "),[]),K=i.useCallback(d=>[...new Set(["transform",d])].filter(Boolean).join(", "),[]);return H(()=>(k.current?$():k.current=!0,S(),()=>{v.current&&clearTimeout(v.current)}),[m]),H(()=>{t||N()},[t]),r.jsx(z,w(p({mounted:P},O),{onEnter:Q,onExit:F,onExited:N,initial:!0,children:d=>r.jsx("div",{style:w(p({},d),{transitionProperty:K(d.transitionProperty),transform:V(d.transform,u)}),ref:x,className:oe("toast__content",n),children:t})}))}var pe=he;function me(e){const{toasts:t,queue:n}=e,[a,o]=i.useState(!1),[c,f]=i.useState(new Map),y=i.useCallback((s,l)=>{f(u=>(u.set(s,l),new Map(u)))},[]),m=y,h=i.useCallback(s=>{f(l=>(l.delete(s),new Map(l)))},[]),j=i.useCallback((s,l)=>{let u=0,k=t.length-1;t.length>t[l].maxCount&&s.open===!1&&(k=k-1);for(let O=k;O>l;O--){const v=c.get(t[O].key)||0,x=c.get(t[O-1].key)||0;u+=x/2+v/2+t[l].gap}return u},[c,t]),b=i.useCallback((s,l)=>{n.update(s,{open:l})},[n]);return r.jsx("div",{onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},className:"toast__container",children:t.map((s,l)=>s.render(r.jsx(pe,p({onOpenChange:u=>b(s.key,u),onEnter:u=>{y(s.key,u)},onUpdate:u=>{m(s.key,u)},onExit:()=>{h(s.key)},onClosed:()=>{var u;(u=s.onClosed)==null||u.call(s),n.remove(s.key)},hover:a,offsetHeight:j(s,l)},q(s,["key"])),s.key)))})}var ve=me,I="__react_root__";function ge(e,t){const n=t[I]||G(t);n.render(e),t[I]=n}var ye=class{constructor(e){if(_(this,"containerID","react-atom-toast"),_(this,"container",null),_(this,"queue"),this.queue=e,L()){let t=document.getElementById(this.containerID);t||(t=document.createElement("div"),t.id=this.containerID,document.body.appendChild(t)),this.container=t}}render(e){this.container&&ge(r.jsx(ve,{toasts:e,queue:this.queue}),this.container)}},xe=class{constructor(){_(this,"renderer"),_(this,"toasts",[]),this.renderer=new ye(this)}render(){this.renderer.render(this.toasts)}add(e){var t;const{maxCount:n,key:a}=e;if(a&&this.toasts.some(f=>f.key===a)){this.update(a,e);return}const o=this.toasts.filter(f=>f.open===!0);if(n&&o.length>=n)if(n===1){this.update(o[o.length-1].key,w(p({},e),{open:!0}));return}else this.close((t=o[0])==null?void 0:t.key);const c=w(p({},e),{key:e.key||Math.random().toString(36),open:!0});this.toasts.push(c),this.render()}close(e){e&&(this.update(e,{open:!1}),this.render())}closeAll(){this.toasts=this.toasts.map(e=>w(p({},e),{open:!1})),this.render()}remove(e){this.toasts=this.toasts.filter(t=>t.key!==e),this.render()}removeAll(){this.toasts=[],this.render()}update(e,t){const n=this.toasts.findIndex(a=>a.key===e);n!==-1&&(this.toasts[n]=w(p(p({},this.toasts[n]),t),{updateFlag:!this.toasts[n].updateFlag})),this.render()}},_e=class{constructor(){_(this,"defaultOptions",{duration:2e3,pauseOnHover:!0,transition:"fade",maxCount:3,gap:16,render:e=>e}),_(this,"toastQueue"),this.toastQueue=new xe}open(e){this.toastQueue.add(p(p({},this.defaultOptions),e))}close(e){this.toastQueue.close(e)}closeAll(){this.toastQueue.closeAll()}update(e,t){this.toastQueue.update(e,p({},t))}setDefaultOptions(e){this.defaultOptions=p(p({},this.defaultOptions),se(e))}},g=new _e;function Ce(){return r.jsx(M,{title:"修改样式",children:r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,className:"bg-red-400"})},children:"open"})})}function je(){const e="closable";return r.jsx(M,{title:"可关闭",children:r.jsxs("div",{className:"flex gap-2",children:[r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,duration:0,key:e})},children:"open"}),r.jsx(C,{type:"default",onClick:()=>{g.close(e)},children:"close"})]})})}function be(){return r.jsx(M,{title:"默认toast",children:r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`})},children:"open"})})}function ke(){return r.jsx(M,{title:"单个toast",children:r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,maxCount:1,transition:{name:"fade",duration:1e3}})},children:"open"})})}function U(){const e=Math.floor(Math.random()*5)+1;return Array.from({length:e},()=>Math.random()).map(t=>r.jsx("div",{className:"flex flex-col gap-2",children:r.jsx("div",{children:t},t)}))}function Oe(){const[e,t]=i.useState([]);return r.jsxs(M,{title:"更新toast",children:[r.jsx(C,{onClick:()=>{const n=`update-${Math.random()}`;g.open({content:U(),key:n,onClosed:()=>{t(a=>a.filter(o=>o!==n))}}),t(a=>[...a,n])},children:"open"}),r.jsx(C,{type:"default",onClick:()=>{g.update(e[e.length-1],{content:U()})},children:"update"})]})}g.setDefaultOptions({className:"bg-cyan-400 p-2 rounded"});function we(){return r.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[r.jsx("h1",{className:"m-2 text-3xl font-bold",children:r.jsx("a",{href:"https://github.com/hemengke1997/react-atom-toast",target:"_blank",children:"react-atom-toast"})}),r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(be,{}),r.jsx(ke,{}),r.jsx(Ce,{}),r.jsx(je,{}),r.jsx(Oe,{})]})]})}J.createRoot(document.querySelector("#root")).render(r.jsx(W.StrictMode,{children:r.jsx(X,{theme:{cssVar:!0,algorithm:[Y.darkAlgorithm]},children:r.jsx(we,{})})}));
