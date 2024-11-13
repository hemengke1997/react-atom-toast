import{r as h,j as o,T as z,c as G,C as E,B as j,S as J,a as W,R as X,b as Y,t as Z}from"./vendor-DBt41v04.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const c of r)if(c.type==="childList")for(const l of c.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const c={};return r.integrity&&(c.integrity=r.integrity),r.referrerPolicy&&(c.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?c.credentials="include":r.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(r){if(r.ep)return;r.ep=!0;const c=n(r);fetch(r.href,c)}})();var ee=Object.defineProperty,te=Object.defineProperties,ne=Object.getOwnPropertyDescriptors,D=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,oe=Object.prototype.propertyIsEnumerable,T=(e,t,n)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))re.call(t,n)&&T(e,n,t[n]);if(D)for(var n of D(t))oe.call(t,n)&&T(e,n,t[n]);return e},x=(e,t)=>te(e,ne(t)),_=(e,t,n)=>T(e,typeof t!="symbol"?t+"":t,n);function L(){return typeof window<"u"&&typeof document<"u"}function I(e){return typeof e=="function"}function B(e,t){const n=f({},e);return t.forEach(i=>delete n[i]),n}function se(...e){return e.filter(Boolean).join(" ")}function ie(e){return B(e,Object.keys(e).filter(t=>e[t]===void 0))}var ae=(e,t)=>!Object.is(e,t);function ce(e,t=ae){const n=h.useRef(),i=h.useRef();return t(i.current,e)&&(n.current=i.current,i.current=e),n.current}var le=ce,ue=()=>{const[,e]=h.useState({});return h.useCallback(()=>e({}),[])},de=ue;function fe(e){const{defaultValue:t,value:n,onChange:i,beforeValue:r,postValue:c}=e,l=Object.prototype.hasOwnProperty.call(e,"value")&&typeof n<"u",C=h.useMemo(()=>{if(l)return n;if(t!==void 0)return I(t)?t():t},[]),d=h.useRef(C);l&&(d.current=n);const O=le(d.current);if(c){const s=c(d.current,O);s&&(d.current=s)}const p=de(),k=s=>{let a=I(s)?s(d.current):s;if(r){const v=r(a,d.current);v&&(a=v)}i&&i(a,d.current),l||(d.current=a,p())};return[d.current,k,O]}var he=L()?h.useLayoutEffect:h.useEffect,S=he;function pe(e){const{content:t,className:n,style:i,duration:r,onOpenChange:c,onClosed:l,pauseOnHover:C,hover:d,updateFlag:O,transition:p,open:k,onEnter:s,onUpdate:a,onExited:v,offsetHeight:M}=e,y=h.useRef(!1),P=()=>typeof p=="string"?{transition:p}:{transition:p==null?void 0:p.name,duration:p==null?void 0:p.duration,exitDuration:p==null?void 0:p.exitDuration},m=h.useRef(),b=h.useRef(null),[H,Q]=fe({defaultValue:!!k,value:k,onChange:u=>{c(u)}}),R=()=>{r&&(m.current&&clearTimeout(m.current),m.current=window.setTimeout(()=>{Q(!1),m.current&&clearTimeout(m.current)},+r))},$=u=>{!C||!H||(u?m.current&&clearTimeout(m.current):R())};S(()=>{$(d)},[d]);const q=()=>{if(!b.current)return;const u=b.current.clientHeight;s(u)},F=()=>{var u;const w=(u=b.current)==null?void 0:u.clientHeight;a(w||0)},N=()=>{var u;const w=(u=b.current)==null?void 0:u.clientHeight;v(w||0),l==null||l()},V=(u,w)=>[`translate(-50%, calc(-50% - ${w}px))`,u].filter(Boolean).join(" "),K=u=>[...new Set(["transform",u])].filter(Boolean).join(", ");return S(()=>(y.current?F():y.current=!0,R(),()=>{m.current&&clearTimeout(m.current)}),[O]),S(()=>{t||N()},[t]),o.jsx(z,x(f({mounted:H},P()),{onEnter:q,onExited:N,initial:!0,children:u=>o.jsx("div",{style:x(f(f({position:"fixed",zIndex:9999,top:"50%",left:"50%"},i),u),{transitionProperty:K(u.transitionProperty),transform:V(u.transform,M)}),ref:b,className:se("toast__content",n),children:t})}))}var me=pe;function ve(e){const{toasts:t,onClosed:n,onOpenChange:i}=e,[r,c]=h.useState(!1),[l,C]=h.useState(new Map),d=(s,a)=>{C(v=>(v.set(s,a),new Map(v)))},O=d,p=s=>{C(a=>(a.delete(s),new Map(a)))},k=s=>{const a=t.findIndex(y=>y.key===s.key);let v=0;const M=t.length-1;for(let y=M;y>a;y--){const P=l.get(t[y].key)||0,m=l.get(t[y-1].key)||0;v+=m/2+P/2+t[a].gap}return v};return o.jsx("div",{onMouseEnter:()=>{c(!0)},onMouseLeave:()=>{c(!1)},className:"toast__container",children:t.map(s=>s.render(h.createElement(me,x(f({},B(s,["key"])),{key:s.key,onOpenChange:a=>i(s.key,a),onEnter:a=>{d(s.key,a)},onUpdate:a=>{O(s.key,a)},onExited:()=>{p(s.key)},onClosed:()=>{var a;(a=s.onClosed)==null||a.call(s),n(s.key)},hover:r,offsetHeight:k(s)}))))})}var ye=ve,A="__react_root__";function ge(e,t){const n=t[A]||G(t);n.render(e),t[A]=n}var xe=class{constructor(e){_(this,"containerID","react-atom-toast"),_(this,"container",null),_(this,"queue"),this.queue=e}createContainer(){if(L()){let e=document.getElementById(this.containerID);e||(e=document.createElement("div"),e.id=this.containerID,document.body.appendChild(e)),this.container=e}}render(e){if(!e.length&&this.container){this.container.remove(),this.container=null;return}this.createContainer(),this.container&&ge(o.jsx(ye,{toasts:e,onClosed:t=>this.queue.remove(t),onOpenChange:(t,n)=>{this.queue.update(t,{open:n})}}),this.container)}},_e=class{constructor(){_(this,"renderer"),_(this,"toasts",[]),this.renderer=new xe(this)}render(){this.renderer.render(this.toasts)}add(e){var t;const{maxCount:n,key:i}=e;if(i&&this.toasts.some(l=>l.key===i)){this.update(i,e);return}const r=this.toasts.filter(l=>l.open===!0);if(n&&r.length>=n)if(n===1){for(let l=0;l<r.length-1;l++)this.remove(r[l].key);this.update(r[r.length-1].key,x(f({},e),{open:!0}));return}else this.close((t=r[0])==null?void 0:t.key);const c=x(f({},e),{key:e.key||Math.random().toString(36),open:!0});this.toasts.push(c),this.render()}close(e){e&&this.update(e,{open:!1})}closeAll(){this.toasts=this.toasts.map(e=>x(f({},e),{open:!1})),this.render()}remove(e){this.toasts=this.toasts.filter(t=>t.key!==e),this.render()}removeAll(){this.toasts=[],this.render()}update(e,t){const n=this.toasts.findIndex(i=>i.key===e);n!==-1&&(this.toasts[n]=x(f(f({},this.toasts[n]),t),{updateFlag:!this.toasts[n].updateFlag}),this.render())}},je=class{constructor(){_(this,"defaultOptions",{duration:2e3,pauseOnHover:!0,transition:"fade",maxCount:3,gap:16,render:e=>e}),_(this,"toastQueue"),this.toastQueue=new _e}open(e){this.toastQueue.add(f(f({},this.defaultOptions),e))}close(e){this.toastQueue.close(e)}closeAll(){this.toastQueue.closeAll()}update(e,t){this.toastQueue.update(e,f({},t))}setDefaultOptions(e){this.defaultOptions=f(f({},this.defaultOptions),ie(e))}},g=new je;function Ce(){return o.jsx(E,{title:"Dynamic Style",children:o.jsx(j,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,className:"bg-red-400"})},children:"open"})})}function Oe(){const e="closable";return o.jsx(E,{title:"Closable",children:o.jsxs("div",{className:"flex gap-2",children:[o.jsx(j,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,duration:0,key:e})},children:"open"}),o.jsx(j,{type:"default",onClick:()=>{g.close(e)},children:"close"})]})})}function ke(){return o.jsx(E,{title:"Default Toast",children:o.jsx(j,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`})},children:"open"})})}function be(){return o.jsx(E,{title:"Single Toast",children:o.jsx(j,{onClick:()=>{g.open({content:`Hello, world! ${Math.random()}`,maxCount:1,transition:{name:"fade",duration:1e3}})},children:"open"})})}function U(){const e=Math.floor(Math.random()*5)+1;return Array.from({length:e},()=>Math.random()).map(t=>o.jsx("div",{className:"flex flex-col gap-2",children:o.jsx("div",{children:t},t)},t))}function we(){const[e,t]=h.useState([]);return o.jsx(E,{title:"Dynamic Update",children:o.jsxs(J,{children:[o.jsx(j,{onClick:()=>{const n=`update-${Math.random()}`;g.open({content:U(),key:n,onClosed:()=>{t(i=>i.filter(r=>r!==n))}}),t(i=>[...i,n])},children:"open"}),o.jsx(j,{type:"default",onClick:()=>{g.update(e[e.length-1],{content:U()})},children:"update"})]})})}g.setDefaultOptions({className:"bg-white bg-opacity-95 p-2 rounded text-black"});function Ee(){return o.jsxs("div",{className:"flex min-h-screen flex-col items-center justify-center",children:[o.jsx("h1",{className:"mb-8 text-3xl font-bold",children:o.jsx("a",{href:"https://github.com/hemengke1997/react-atom-toast",target:"_blank",children:"react-atom-toast"})}),o.jsxs("div",{className:"flex flex-wrap gap-4",children:[o.jsx(ke,{}),o.jsx(be,{}),o.jsx(Ce,{}),o.jsx(Oe,{}),o.jsx(we,{})]})]})}W.createRoot(document.querySelector("#root")).render(o.jsx(X.StrictMode,{children:o.jsx(Y,{theme:{cssVar:!0,algorithm:[Z.darkAlgorithm]},children:o.jsx(Ee,{})})}));