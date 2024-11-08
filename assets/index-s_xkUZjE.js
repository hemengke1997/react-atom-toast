import{r as a,j as r,T as G,c as J,C as M,B as C,S as W,a as X,R as Y,b as Z,t as ee}from"./vendor-DBt41v04.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const f of l.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&i(f)}).observe(document,{childList:!0,subtree:!0});function n(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(o){if(o.ep)return;o.ep=!0;const l=n(o);fetch(o.href,l)}})();var te=Object.defineProperty,ne=Object.defineProperties,re=Object.getOwnPropertyDescriptors,A=Object.getOwnPropertySymbols,oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable,R=(e,t,n)=>t in e?te(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))oe.call(t,n)&&R(e,n,t[n]);if(A)for(var n of A(t))se.call(t,n)&&R(e,n,t[n]);return e},k=(e,t)=>ne(e,re(t)),_=(e,t,n)=>R(e,typeof t!="symbol"?t+"":t,n);function q(){return typeof window<"u"&&typeof document<"u"}function I(e){return typeof e=="function"}function B(e,t){const n=h({},e);return t.forEach(i=>delete n[i]),n}function ae(...e){return e.filter(Boolean).join(" ")}function ie(e){return B(e,Object.keys(e).filter(t=>e[t]===void 0))}var le=(e,t)=>!Object.is(e,t);function ce(e,t=le){const n=a.useRef(),i=a.useRef();return t(i.current,e)&&(n.current=i.current,i.current=e),n.current}var ue=ce,de=()=>{const[,e]=a.useState({});return a.useCallback(()=>e({}),[])},fe=de;function he(e){const{defaultValue:t,value:n,onChange:i,beforeValue:o,postValue:l}=e,f=Object.prototype.hasOwnProperty.call(e,"value")&&typeof n<"u",y=a.useMemo(()=>{if(f)return n;if(t!==void 0)return I(t)?t():t},[]),p=a.useRef(y);f&&(p.current=n);const j=ue(p.current);if(l){const s=l(p.current,j);s&&(p.current=s)}const m=fe(),b=s=>{let c=I(s)?s(p.current):s;if(o){const u=o(c,p.current);u&&(c=u)}i&&i(c,p.current),f||(p.current=c,m())};return[p.current,b,j]}var pe=q()?a.useLayoutEffect:a.useEffect,H=pe;function me(e){const{content:t,className:n,style:i,duration:o,onOpenChange:l,onClosed:f,pauseOnHover:y,hover:p,updateFlag:j,transition:m,open:b,onEnter:s,onUpdate:c,onExit:u,offsetHeight:O}=e,x=a.useRef(!1),P=a.useMemo(()=>typeof m=="string"?{transition:m}:{transition:m==null?void 0:m.name,duration:m==null?void 0:m.duration,exitDuration:m==null?void 0:m.exitDuration},[m]),v=a.useRef(),w=a.useRef(null),[S,N]=he({defaultValue:!!b,value:b,onChange:d=>{l(d)}}),T=a.useCallback(()=>{o&&(v.current&&clearTimeout(v.current),v.current=window.setTimeout(()=>{N(!1)},+o))},[o,N]),Q=a.useCallback(d=>{!y||!S||(d?v.current&&clearTimeout(v.current):T())},[S,y,T]);H(()=>{Q(p)},[p]);const $=a.useCallback(()=>{if(!w.current)return;const d=w.current.clientHeight;s(d)},[s]),F=a.useCallback(()=>{var d;const E=(d=w.current)==null?void 0:d.clientHeight;c(E||0)},[c]),V=a.useCallback(()=>{var d;const E=(d=w.current)==null?void 0:d.clientHeight;u(E||0)},[u]),D=a.useCallback(()=>{f==null||f()},[f]),K=a.useCallback((d,E)=>[`translate(-50%, calc(-50% - ${E}px))`,d].filter(Boolean).join(" "),[]),z=a.useCallback(d=>[...new Set(["transform",d])].filter(Boolean).join(", "),[]);return H(()=>(x.current?F():x.current=!0,T(),()=>{v.current&&clearTimeout(v.current)}),[j]),H(()=>{t||D()},[t]),r.jsx(G,k(h({mounted:S},P),{onEnter:$,onExit:V,onExited:D,initial:!0,children:d=>r.jsx("div",{style:k(h(h({position:"fixed",zIndex:9999,top:"50%",left:"50%"},i),d),{transitionProperty:z(d.transitionProperty),transform:K(d.transform,O)}),ref:w,className:ae("toast__content",n),children:t})}))}var ve=me;function ge(e){const{toasts:t,queue:n}=e,[i,o]=a.useState(!1),[l,f]=a.useState(new Map),y=a.useCallback((s,c)=>{f(u=>(u.set(s,c),new Map(u)))},[]),p=y,j=a.useCallback(s=>{f(c=>(c.delete(s),new Map(c)))},[]),m=a.useCallback((s,c)=>{let u=0,O=t.length-1;t.length>t[c].maxCount&&s.open===!1&&(O=O-1);for(let x=O;x>c;x--){const P=l.get(t[x].key)||0,v=l.get(t[x-1].key)||0;u+=v/2+P/2+t[c].gap}return u},[l,t]),b=a.useCallback((s,c)=>{n.update(s,{open:c})},[n]);return r.jsx("div",{onMouseEnter:()=>{o(!0)},onMouseLeave:()=>{o(!1)},className:"toast__container",children:t.map((s,c)=>s.render(r.jsx(ve,h({onOpenChange:u=>b(s.key,u),onEnter:u=>{y(s.key,u)},onUpdate:u=>{p(s.key,u)},onExit:()=>{j(s.key)},onClosed:()=>{var u;(u=s.onClosed)==null||u.call(s),n.remove(s.key)},hover:i,offsetHeight:m(s,c)},B(s,["key"])),s.key)))})}var ye=ge,U="__react_root__";function xe(e,t){const n=t[U]||J(t);n.render(e),t[U]=n}var _e=class{constructor(e){if(_(this,"containerID","react-atom-toast"),_(this,"container",null),_(this,"queue"),this.queue=e,q()){let t=document.getElementById(this.containerID);t||(t=document.createElement("div"),t.id=this.containerID,document.body.appendChild(t)),this.container=t}}render(e){this.container&&xe(r.jsx(ye,{toasts:e,queue:this.queue}),this.container)}},Ce=class{constructor(){_(this,"renderer"),_(this,"toasts",[]),this.renderer=new _e(this)}render(){this.renderer.render(this.toasts)}add(e){var t;const{maxCount:n,key:i}=e;if(i&&this.toasts.some(f=>f.key===i)){this.update(i,e);return}const o=this.toasts.filter(f=>f.open===!0);if(n&&o.length>=n)if(n===1){this.update(o[o.length-1].key,k(h({},e),{open:!0}));return}else this.close((t=o[0])==null?void 0:t.key);const l=k(h({},e),{key:e.key||Math.random().toString(36),open:!0});this.toasts.push(l),this.render()}close(e){e&&(this.update(e,{open:!1}),this.render())}closeAll(){this.toasts=this.toasts.map(e=>k(h({},e),{open:!1})),this.render()}remove(e){this.toasts=this.toasts.filter(t=>t.key!==e),this.render()}removeAll(){this.toasts=[],this.render()}update(e,t){const n=this.toasts.findIndex(i=>i.key===e);n!==-1&&(this.toasts[n]=k(h(h({},this.toasts[n]),t),{updateFlag:!this.toasts[n].updateFlag})),this.render()}},je=class{constructor(){_(this,"defaultOptions",{duration:2e3,pauseOnHover:!0,transition:"fade",maxCount:3,gap:16,render:e=>e}),_(this,"toastQueue"),this.toastQueue=new Ce}open(e){this.toastQueue.add(h(h({},this.defaultOptions),e))}close(e){this.toastQueue.close(e)}closeAll(){this.toastQueue.closeAll()}update(e,t){this.toastQueue.update(e,h({},t))}setDefaultOptions(e){this.defaultOptions=h(h({},this.defaultOptions),ie(e))}},g=new je;function be(){return r.jsx(M,{title:"Dynamic Style",children:r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,className:"bg-red-400"})},children:"open"})})}function ke(){const e="closable";return r.jsx(M,{title:"Closable",children:r.jsxs("div",{className:"flex gap-2",children:[r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,duration:0,key:e})},children:"open"}),r.jsx(C,{type:"default",onClick:()=>{g.close(e)},children:"close"})]})})}function Oe(){return r.jsx(M,{title:"Default Toast",children:r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`})},children:"open"})})}function we(){return r.jsx(M,{title:"Single Toast",children:r.jsx(C,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,maxCount:1,transition:{name:"fade",duration:1e3}})},children:"open"})})}function L(){const e=Math.floor(Math.random()*5)+1;return Array.from({length:e},()=>Math.random()).map(t=>r.jsx("div",{className:"flex flex-col gap-2",children:r.jsx("div",{children:t},t)}))}function Ee(){const[e,t]=a.useState([]);return r.jsx(M,{title:"Dynamic Update",children:r.jsxs(W,{children:[r.jsx(C,{onClick:()=>{const n=`update-${Math.random()}`;g.open({content:L(),key:n,onClosed:()=>{t(i=>i.filter(o=>o!==n))}}),t(i=>[...i,n])},children:"open"}),r.jsx(C,{type:"default",onClick:()=>{g.update(e[e.length-1],{content:L()})},children:"update"})]})})}g.setDefaultOptions({className:"bg-white bg-opacity-95 p-2 rounded text-black"});function Me(){return r.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[r.jsx("h1",{className:"mb-8 text-3xl font-bold",children:r.jsx("a",{href:"https://github.com/hemengke1997/react-atom-toast",target:"_blank",children:"react-atom-toast"})}),r.jsxs("div",{className:"flex flex-wrap gap-4",children:[r.jsx(Oe,{}),r.jsx(we,{}),r.jsx(be,{}),r.jsx(ke,{}),r.jsx(Ee,{})]})]})}X.createRoot(document.querySelector("#root")).render(r.jsx(Y.StrictMode,{children:r.jsx(Z,{theme:{cssVar:!0,algorithm:[ee.darkAlgorithm]},children:r.jsx(Me,{})})}));
