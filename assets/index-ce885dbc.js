(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const v={};function G(e){v.context=e}const at=(e,t)=>e===t,oe=Symbol("solid-proxy"),ut=Symbol("solid-track"),ie={equals:at};let De=He;const M=1,le=2,Ue={owned:null,cleanups:null,context:null,owner:null},ye={};var b=null;let D=null,w=null,E=null,_=null,Se=0;function Q(e,t){const n=w,s=b,r=e.length===0,o=r?Ue:{owned:null,cleanups:null,context:null,owner:t||s},l=r?e:()=>e(()=>O(()=>de(o)));b=o,w=null;try{return I(l,!0)}finally{w=n,b=s}}function R(e,t){t=t?Object.assign({},ie,t):ie;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Fe(n,r));return[Ke.bind(n),s]}function $e(e,t,n){const s=fe(e,t,!0,M);W(s)}function j(e,t,n){const s=fe(e,t,!1,M);W(s)}function Rn(e,t,n){De=wt;const s=fe(e,t,!1,M);s.user=!0,_?_.push(s):W(s)}function A(e,t,n){n=n?Object.assign({},ie,n):ie;const s=fe(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,W(s),Ke.bind(s)}function ft(e,t,n){let s,r,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,o=t||{}):(s=e,r=t,o=n||{});let l=null,i=ye,u=null,a=!1,c="initialValue"in o,h=typeof s=="function"&&A(s);const g=new Set,[p,y]=(o.storage||R)(o.initialValue),[N,T]=R(void 0),[$,S]=R(void 0,{equals:!1}),[L,x]=R(c?"ready":"unresolved");if(v.context){u=`${v.context.id}${v.context.count++}`;let f;o.ssrLoadFrom==="initial"?i=o.initialValue:v.load&&(f=v.load(u))&&(i=f[0])}function P(f,d,m,k){return l===f&&(l=null,c=!0,(f===i||d===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(k,{value:d})),i=ye,V(d,m)),d}function V(f,d){I(()=>{d||y(()=>f),x(d?"errored":"ready"),T(d);for(const m of g.keys())m.decrement();g.clear()},!1)}function K(){const f=mt,d=p(),m=N();if(m&&!l)throw m;return w&&!w.user&&f&&$e(()=>{$(),l&&(f.resolved||g.has(f)||(f.increment(),g.add(f)))}),d}function X(f=!0){if(f!==!1&&a)return;a=!1;const d=h?h():s;if(d==null||d===!1){P(l,O(p));return}const m=i!==ye?i:O(()=>r(d,{value:p(),refetching:f}));return typeof m!="object"||!(m&&"then"in m)?(P(l,m,void 0,d),m):(l=m,a=!0,queueMicrotask(()=>a=!1),I(()=>{x(c?"refreshing":"pending"),S()},!1),m.then(k=>P(m,k,void 0,d),k=>P(m,void 0,Xe(k),d)))}return Object.defineProperties(K,{state:{get:()=>L()},error:{get:()=>N()},loading:{get(){const f=L();return f==="pending"||f==="refreshing"}},latest:{get(){if(!c)return K();const f=N();if(f&&!l)throw f;return p()}}}),h?$e(()=>X(!1)):X(!1),[K,{refetch:X,mutate:y}]}function O(e){const t=w;w=null;try{return e()}finally{w=t}}function Ve(e,t,n){const s=Array.isArray(e);let r,o=n&&n.defer;return l=>{let i;if(s){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(o){o=!1;return}const u=O(()=>t(i,r,l));return r=i,u}}function ue(e){return b===null||(b.cleanups===null?b.cleanups=[e]:b.cleanups.push(e)),e}function dt(){return b}function ht(e,t){const n=b,s=w;b=e,w=null;try{return I(t,!0)}catch(r){Le(r)}finally{b=n,w=s}}function gt(e){const t=w,n=b;return Promise.resolve().then(()=>{w=t,b=n;let s;return I(e,!1),w=b=null,s?s.done:void 0})}function Ce(e,t){const n=Symbol("context");return{id:n,Provider:bt(n),defaultValue:e}}function Z(e){let t;return(t=Je(b,e.id))!==void 0?t:e.defaultValue}function Ee(e){const t=A(e),n=A(()=>we(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let mt;function Ke(){const e=D;if(this.sources&&(this.state||e))if(this.state===M||e)W(this);else{const t=E;E=null,I(()=>ae(this),!1),E=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Fe(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&I(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=D&&D.running;l&&D.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?E.push(o):_.push(o),o.observers&&We(o)),l||(o.state=M)}if(E.length>1e6)throw E=[],new Error},!1)),t}function W(e){if(!e.fn)return;de(e);const t=b,n=w,s=Se;w=b=e,yt(e,e.value,s),w=n,b=t}function yt(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(e.state=M,e.owned&&e.owned.forEach(de),e.owned=null),Le(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Fe(e,s):e.value=s,e.updatedAt=n)}function fe(e,t,n,s=M,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:b,context:null,pure:n};return b===null||b!==Ue&&(b.owned?b.owned.push(o):b.owned=[o]),o}function ce(e){const t=D;if(e.state===0||t)return;if(e.state===le||t)return ae(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Se);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===M||t)W(e);else if(e.state===le||t){const r=E;E=null,I(()=>ae(e,n[0]),!1),E=r}}function I(e,t){if(E)return e();let n=!1;t||(E=[]),_?n=!0:_=[],Se++;try{const s=e();return pt(n),s}catch(s){E||(_=null),E=null,Le(s)}}function pt(e){if(E&&(He(E),E=null),e)return;const t=_;_=null,t.length&&I(()=>De(t),!1)}function He(e){for(let t=0;t<e.length;t++)ce(e[t])}function wt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ce(s)}for(v.context&&G(),t=0;t<n;t++)ce(e[t])}function ae(e,t){const n=D;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===M||n?r!==t&&ce(r):(r.state===le||n)&&ae(r,t))}}function We(e){const t=D;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=le,s.pure?E.push(s):_.push(s),s.observers&&We(s))}}function de(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();s<r.length&&(o.sourceSlots[l]=s,r[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)de(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function Xe(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Le(e){throw e=Xe(e),e}function Je(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Je(e.owner,t):void 0}function we(e){if(typeof e=="function"&&!e.length)return we(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=we(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function bt(e,t){return function(s){let r;return j(()=>r=O(()=>(b.context={[e]:s.value},Ee(()=>s.children))),void 0),r}}const At=Symbol("fallback");function Re(e){for(let t=0;t<e.length;t++)e[t]()}function vt(e,t,n={}){let s=[],r=[],o=[],l=0,i=t.length>1?[]:null;return ue(()=>Re(o)),()=>{let u=e()||[],a,c;return u[ut],O(()=>{let g=u.length,p,y,N,T,$,S,L,x,P;if(g===0)l!==0&&(Re(o),o=[],s=[],r=[],l=0,i&&(i=[])),n.fallback&&(s=[At],r[0]=Q(V=>(o[0]=V,n.fallback())),l=1);else if(l===0){for(r=new Array(g),c=0;c<g;c++)s[c]=u[c],r[c]=Q(h);l=g}else{for(N=new Array(g),T=new Array(g),i&&($=new Array(g)),S=0,L=Math.min(l,g);S<L&&s[S]===u[S];S++);for(L=l-1,x=g-1;L>=S&&x>=S&&s[L]===u[x];L--,x--)N[x]=r[L],T[x]=o[L],i&&($[x]=i[L]);for(p=new Map,y=new Array(x+1),c=x;c>=S;c--)P=u[c],a=p.get(P),y[c]=a===void 0?-1:a,p.set(P,c);for(a=S;a<=L;a++)P=s[a],c=p.get(P),c!==void 0&&c!==-1?(N[c]=r[a],T[c]=o[a],i&&($[c]=i[a]),c=y[c],p.set(P,c)):o[a]();for(c=S;c<g;c++)c in N?(r[c]=N[c],o[c]=T[c],i&&(i[c]=$[c],i[c](c))):r[c]=Q(h);r=r.slice(0,l=g),s=u.slice(0)}return r});function h(g){if(o[c]=g,i){const[p,y]=R(c);return i[c]=y,t(u[c],p)}return t(u[c])}}}function C(e,t){return O(()=>e(t||{}))}function ne(){return!0}const be={get(e,t,n){return t===oe?n:e.get(t)},has(e,t){return t===oe?!0:e.has(t)},set:ne,deleteProperty:ne,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ne,deleteProperty:ne}},ownKeys(e){return e.keys()}};function pe(e){return(e=typeof e=="function"?e():e)?e:{}}function Ae(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&oe in r,e[s]=typeof r=="function"?(t=!0,A(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const o=pe(e[r])[s];if(o!==void 0)return o}},has(s){for(let r=e.length-1;r>=0;r--)if(s in pe(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(pe(e[r])));return[...new Set(s)]}},be);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const o in r)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const i=(e[l]||{})[o];if(i!==void 0)return i}}})}return n}function xt(e,...t){const n=new Set(t.flat());if(oe in e){const r=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},be));return r.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},be)),r}const s=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(s).filter(r=>!n.has(r))),t.map(r=>{const o={};for(let l=0;l<r.length;l++){const i=r[l];i in e&&Object.defineProperty(o,i,s[i]?s[i]:{get(){return e[i]},set(){return!0},enumerable:!0})}return o})}function he(e){let t,n;const s=r=>{const o=v.context;if(o){const[i,u]=R();(n||(n=e())).then(a=>{G(o),u(()=>a.default),G()}),t=i}else if(!t){const[i]=ft(()=>(n||(n=e())).then(u=>u.default));t=i}let l;return A(()=>(l=t())&&O(()=>{if(!o)return l(r);const i=v.context;G(o);const u=l(r);return G(i),u}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let Pt=0;function St(){const e=v.context;return e?`${e.id}${e.count++}`:`cl-${Pt++}`}function kn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(vt(()=>e.each,e.children,t||void 0))}function ze(e){let t=!1;const n=e.keyed,s=A(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return A(()=>{const r=s();if(r){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?O(()=>o(r)):o}return e.fallback},void 0,void 0)}const Ct=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Et=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Ct]),Lt=new Set(["innerHTML","textContent","innerText","children"]),Nt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),ke=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tt={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function $t(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,u=t[r-1].nextSibling,a=null;for(;l<r||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const c=o<s?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],c)}else if(o===i)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],c),t[r]=n[o]}else{if(!a){a=new Map;let h=i;for(;h<o;)a.set(n[h],h++)}const c=a.get(t[l]);if(c!=null)if(i<c&&c<o){let h=l,g=1,p;for(;++h<r&&h<o&&!((p=a.get(t[h]))==null||p!==c+g);)g++;if(g>c-i){const y=t[l];for(;i<c;)e.insertBefore(n[i++],y)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const _e="_$DX_DELEGATE";function Rt(e,t,n,s={}){let r;return Q(o=>{r=o,t===document?e():xe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function Ne(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Ge(e,t=window.document){const n=t[_e]||(t[_e]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Dt))}}function Qe(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function kt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function _t(e,t){t==null?e.removeAttribute("class"):e.className=t}function jt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=o=>r.call(e,n[1],o))}else e.addEventListener(t,n)}function It(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let o,l;for(o=0,l=r.length;o<l;o++){const i=r[o];!i||i==="undefined"||t[i]||(je(e,i,!1),delete n[i])}for(o=0,l=s.length;o<l;o++){const i=s[o],u=!!t[i];!i||i==="undefined"||n[i]===u||!u||(je(e,i,!0),n[i]=u)}return n}function Mt(e,t,n){if(!t)return n?Qe(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(s.setProperty(o,r),n[o]=r);return n}function ve(e,t={},n,s){const r={};return s||j(()=>r.children=H(e,t.children,r.children)),j(()=>t.ref&&t.ref(e)),j(()=>qt(e,t,n,!0,r,!0)),r}function _n(e,t,n){return O(()=>e(t,n))}function xe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return H(e,t,s,n);j(r=>H(e,t(),r,n),s)}function qt(e,t,n,s,r={},o=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=Ie(e,l,null,r[l],n,o)}for(const l in t){if(l==="children"){s||H(e,t.children);continue}const i=t[l];r[l]=Ie(e,l,i,r[l],n,o)}}function Bt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function je(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,o=s.length;r<o;r++)e.classList.toggle(s[r],n)}function Ie(e,t,n,s,r,o){let l,i,u;if(t==="style")return Mt(e,n,s);if(t==="classList")return It(e,n,s);if(n===s)return s;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);s&&e.removeEventListener(a,s),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);s&&e.removeEventListener(a,s,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),c=Ot.has(a);if(!c&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(a,h)}(c||n)&&(jt(e,a,n,c),c&&Ge([a]))}else if((u=Lt.has(t))||!r&&(ke[t]||(i=Et.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?_t(e,n):l&&!i&&!u?e[Bt(t)]=n:e[ke[t]||t]=n;else{const a=r&&t.indexOf(":")>-1&&Tt[t.split(":")[0]];a?kt(e,a,t,n):Qe(e,Nt[t]||t,n)}return n}function Dt(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),v.registry&&!v.done&&(v.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let r=s.nextSibling;s.remove(),s=r}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function H(e,t,n,s,r){for(v.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(v.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=F(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(v.context)return n;n=F(e,n,s)}else{if(o==="function")return j(()=>{let i=t();for(;typeof i=="function";)i=i();n=H(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(Pe(i,t,n,r))return j(()=>n=H(e,i,n,s,!0)),()=>n;if(v.context){if(!i.length)return n;for(let a=0;a<i.length;a++)if(i[a].parentNode)return n=i}if(i.length===0){if(n=F(e,n,s),l)return n}else u?n.length===0?Me(e,i,s):$t(e,n,i):(n&&F(e),Me(e,i));n=i}else if(t instanceof Node){if(v.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=F(e,n,s,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Pe(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],u=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=Pe(e,i,u)||r;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();r=Pe(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||r}else e.push(i),r=!0;else{const a=String(i);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return r}function Me(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function F(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(r!==i){const u=i.parentNode===e;!o&&!l?u?e.replaceChild(r,i):e.insertBefore(r,n):u&&i.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}const Ut=!1,Vt="modulepreload",Kt=function(e,t){return new URL(e,t).href},qe={},ge=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Kt(o,s),o in qe)return;qe[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!s)for(let c=r.length-1;c>=0;c--){const h=r[c];if(h.href===o&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":Vt,l||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),l)return new Promise((c,h)=>{a.addEventListener("load",c),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function Ye(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Ft([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function Ht(e){try{return document.querySelector(e)}catch{return null}}function Ze(e,t){const n=Ht(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function et(e,t,n,s){let r=!1;const o=i=>typeof i=="string"?{value:i}:i,l=Ft(R(o(e()),{equals:(i,u)=>i.value===u.value}),void 0,i=>(!r&&t(i),i));return n&&ue(n((i=e())=>{r=!0,l[1](o(i)),r=!1})),{signal:l,utils:s}}function Wt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:R({value:""})};return e}function Xt(){return et(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),Ze(window.location.hash.slice(1),n)},e=>Ye(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Jt(){return et(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"","#"+e):window.location.hash=e;const r=e.indexOf("#"),o=r>=0?e.slice(r+1):"";Ze(o,n)},e=>Ye(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}function zt(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const l={to:r,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:u=>{u&&(n=!0),i.navigate(r,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const Gt=/^(?:[a-z0-9]+:)?\/\//i,Qt=/^\/+|\/+$/g;function U(e,t=!1){const n=e.replace(Qt,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function se(e,t,n){if(Gt.test(t))return;const s=U(e),r=n&&U(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+U(t,!o)}function Yt(e,t){if(e==null)throw new Error(t);return e}function tt(e,t){return U(e).replace(/\/*(\*.*)?$/g,"")+U(t)}function Zt(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function en(e,t){const[n,s]=e.split("/*",2),r=n.split("/").filter(Boolean),o=r.length;return l=>{const i=l.split("/").filter(Boolean),u=i.length-o;if(u<0||u>0&&s===void 0&&!t)return null;const a={path:o?"":"/",params:{}};for(let c=0;c<o;c++){const h=r[c],g=i[c];if(h[0]===":")a.params[h.slice(1)]=g;else if(h.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;a.path+=`/${g}`}return s&&(a.params[s]=u?i.slice(-u).join("/"):""),a}}function tn(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function nt(e){const t=new Map,n=dt();return new Proxy({},{get(s,r){return t.has(r)||ht(n,()=>t.set(r,A(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function nn(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([r,o])=>{o==null||o===""?n.delete(r):n.set(r,String(o))});const s=n.toString();return s?`?${s}`:""}function rt(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return rt(s).reduce((o,l)=>[...o,...r.map(i=>i+l)],[])}const rn=100,st=Ce(),me=Ce(),ee=()=>Yt(Z(st),"Make sure your app is wrapped in a <Router />");let Y;const Oe=()=>Y||Z(me)||ee().base,sn=e=>{const t=Oe();return A(()=>t.resolvePath(e()))},on=e=>{const t=ee();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},ln=()=>ee().navigatorFactory(),ot=()=>ee().location,jn=()=>{const e=ot(),t=ln(),n=(s,r)=>{const o=O(()=>nn(e.search,s));t(e.pathname+o+e.hash,{scroll:!1,resolve:!1,...r})};return[e.query,n]};function cn(e,t="",n){const{component:s,data:r,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:s?()=>C(s,{}):()=>{const{element:u}=e;return u===void 0&&n?C(n,{}):u},preload:e.component?s.preload:e.preload,data:r};return it(e.path).reduce((u,a)=>{for(const c of rt(a)){const h=tt(t,c),g=l?h:h.split("/*",1)[0];u.push({...i,originalPath:c,pattern:g,matcher:en(g,!l)})}return u},[])}function an(e,t=0){return{routes:e,score:tn(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],l=o.matcher(n);if(!l)return null;s.unshift({...l,route:o})}return s}}}function it(e){return Array.isArray(e)?e:[e]}function lt(e,t="",n,s=[],r=[]){const o=it(e);for(let l=0,i=o.length;l<i;l++){const u=o[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=cn(u,t,n);for(const c of a){s.push(c);const h=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!h)lt(u.children,c.pattern,n,s,r);else{const g=an([...s],r.length);r.push(g)}s.pop()}}}return s.length?r:r.sort((l,i)=>i.score-l.score)}function un(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function fn(e,t){const n=new URL("http://sar"),s=A(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),r=A(()=>s().pathname),o=A(()=>s().search,!0),l=A(()=>s().hash),i=A(()=>"");return{get pathname(){return r()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:nt(Ve(o,()=>Zt(s())))}}function dn(e,t="",n,s){const{signal:[r,o],utils:l={}}=Wt(e),i=l.parsePath||(f=>f),u=l.renderPath||(f=>f),a=l.beforeLeave||zt(),c=se("",t),h=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&o({value:c,replace:!0,scroll:!1});const[g,p]=R(!1),y=async f=>{p(!0);try{await gt(f)}finally{p(!1)}},[N,T]=R(r().value),[$,S]=R(r().state),L=fn(N,$),x=[],P={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(f){return se(c,f)}};if(n)try{Y=P,P.data=n({data:void 0,params:{},location:L,navigate:K(P)})}finally{Y=void 0}function V(f,d,m){O(()=>{if(typeof d=="number"){d&&(l.go?a.confirm(d,m)&&l.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:k,resolve:te,scroll:q,state:J}={replace:!1,resolve:!0,scroll:!0,...m},B=te?f.resolvePath(d):se("",d);if(B===void 0)throw new Error(`Path '${d}' is not a routable path`);if(x.length>=rn)throw new Error("Too many redirects");const z=N();if((B!==z||J!==$())&&!Ut){if(a.confirm(B,m)){const ct=x.push({value:z,replace:k,scroll:q,state:$()});y(()=>{T(B),S(J)}).then(()=>{x.length===ct&&X({value:B,state:J})})}}})}function K(f){return f=f||Z(me)||P,(d,m)=>V(f,d,m)}function X(f){const d=x[0];d&&((f.value!==d.value||f.state!==d.state)&&o({...f,replace:d.replace,scroll:d.scroll}),x.length=0)}j(()=>{const{value:f,state:d}=r();O(()=>{f!==N()&&y(()=>{T(f),S(d)})})});{let f=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const m=d.composedPath().find(z=>z instanceof Node&&z.nodeName.toUpperCase()==="A");if(!m||!m.hasAttribute("link"))return;const k=m.href;if(m.target||!k&&!m.hasAttribute("state"))return;const te=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||te&&te.includes("external"))return;const q=new URL(k);if(q.origin!==window.location.origin||c&&q.pathname&&!q.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const J=i(q.pathname+q.search+q.hash),B=m.getAttribute("state");d.preventDefault(),V(P,J,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:B&&JSON.parse(B)})};Ge(["click"]),document.addEventListener("click",f),ue(()=>document.removeEventListener("click",f))}return{base:P,out:h,location:L,isRouting:g,renderPath:u,parsePath:i,navigatorFactory:K,beforeLeave:a}}function hn(e,t,n,s){const{base:r,location:o,navigatorFactory:l}=e,{pattern:i,element:u,preload:a,data:c}=s().route,h=A(()=>s().path),g=nt(()=>s().params);a&&a();const p={parent:t,pattern:i,get child(){return n()},path:h,params:g,data:t.data,outlet:u,resolvePath(y){return se(r.path(),y,h())}};if(c)try{Y=p,p.data=c({data:t.data,params:g,location:o,navigate:l(p)})}finally{Y=void 0}return p}const gn=Ne("<a link></a>"),mn=e=>{const{source:t,url:n,base:s,data:r,out:o}=e,l=t||Xt(),i=dn(l,s,r);return C(st.Provider,{value:i,get children(){return e.children}})},yn=e=>{const t=ee(),n=Oe(),s=Ee(()=>e.children),r=A(()=>lt(s(),tt(n.pattern,e.base||""),pn)),o=A(()=>un(r(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:a,path:c,params:h})=>({originalPath:a.originalPath,pattern:a.pattern,path:c,params:h})));const l=[];let i;const u=A(Ve(o,(a,c,h)=>{let g=c&&a.length===c.length;const p=[];for(let y=0,N=a.length;y<N;y++){const T=c&&c[y],$=a[y];h&&T&&$.route.key===T.route.key?p[y]=h[y]:(g=!1,l[y]&&l[y](),Q(S=>{l[y]=S,p[y]=hn(t,p[y-1]||n,()=>u()[y+1],()=>o()[y])}))}return l.splice(a.length).forEach(y=>y()),h&&g?h:(i=p[0],p)}));return C(ze,{get when(){return u()&&i},children:a=>C(me.Provider,{value:a,get children(){return a.outlet()}})})},re=e=>{const t=Ee(()=>e.children);return Ae(e,{get children(){return t()}})},pn=()=>{const e=Oe();return C(ze,{get when(){return e.child},children:t=>C(me.Provider,{value:t,get children(){return t.outlet()}})})};function wn(e){e=Ae({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=xt(e,["href","state","class","activeClass","inactiveClass","end"]),n=sn(()=>e.href),s=on(n),r=ot(),o=A(()=>{const l=n();if(l===void 0)return!1;const i=U(l.split(/[?#]/,1)[0]).toLowerCase(),u=U(r.pathname).toLowerCase();return e.end?i===u:u.startsWith(i)});return(()=>{const l=gn.cloneNode(!0);return ve(l,Ae(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o(),[e.activeClass]:o(),...t.classList}},get["aria-current"](){return o()?"page":void 0}}),!1,!1),l})()}const Te=Ce(),bn=["title","meta"],Be=e=>e.tag+(e.name?`.${e.name}"`:""),An=e=>{if(!v.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,o=>o.parentNode.removeChild(o))}const t=new Map;function n(r){if(r.ref)return r.ref;let o=document.querySelector(`[data-sm="${r.id}"]`);return o?(o.tagName.toLowerCase()!==r.tag&&(o.parentNode&&o.parentNode.removeChild(o),o=document.createElement(r.tag)),o.removeAttribute("data-sm")):o=document.createElement(r.tag),o}const s={addClientTag:r=>{let o=Be(r);if(bn.indexOf(r.tag)!==-1){t.has(o)||t.set(o,[]);let i=t.get(o),u=i.length;i=[...i,r],t.set(o,i);{let a=n(r);r.ref=a,ve(a,r.props);let c=null;for(var l=u-1;l>=0;l--)if(i[l]!=null){c=i[l];break}a.parentNode!=document.head&&document.head.appendChild(a),c&&c.ref&&document.head.removeChild(c.ref)}return u}{let i=n(r);r.ref=i,ve(i,r.props),i.parentNode!=document.head&&document.head.appendChild(i)}return-1},removeClientTag:(r,o)=>{const l=Be(r);if(r.ref){const i=t.get(l);if(i){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let u=o-1;u>=0;u--)i[u]!=null&&document.head.appendChild(i[u].ref)}i[o]=null,t.set(l,i)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return C(Te.Provider,{value:s,get children(){return e.children}})},vn=(e,t)=>{const n=St();if(!Z(Te))throw new Error("<MetaProvider /> should be in the tree");return xn({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function xn(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=Z(Te);j(()=>{{let r=t(e);ue(()=>n(e,r))}})}const In=e=>vn("title",e),Pn=Ne("<span>.com</span>"),Sn=Ne('<div class="liheadsup"><div class="navbar"><div class="title"></div><div class="dasher"></div></div><div class="main"></div></div>'),Cn=he(()=>ge(()=>import("./about-e235d03b.js"),["./about-e235d03b.js","./about-e971f27d.css"],import.meta.url)),En=he(()=>ge(()=>import("./home-427a2559.js"),["./home-427a2559.js","./challenges-d3bc7636.js","./store-dbbc54ee.js","./home-793b6430.css"],import.meta.url)),Ln=he(()=>ge(()=>import("./hardcore-9e99af78.js"),["./hardcore-9e99af78.js","./ctrl-7eba919a.js","./store-dbbc54ee.js","./ctrl-8bd2862d.css","./challenges-d3bc7636.js","./hardcore-7bb793f0.css"],import.meta.url)),Nn=he(()=>ge(()=>import("./predict-b0dbe80a.js"),["./predict-b0dbe80a.js","./ctrl-7eba919a.js","./store-dbbc54ee.js","./ctrl-8bd2862d.css","./predict-dbc0d133.css"],import.meta.url)),On=()=>C(mn,{get source(){return Jt()},get children(){return C(An,{get children(){return C(Tn,{})}})}}),Tn=()=>(()=>{const e=Sn.cloneNode(!0),t=e.firstChild,n=t.firstChild,s=t.nextSibling;return xe(n,C(wn,{href:"/",get children(){return[" aidchess",Pn.cloneNode(!0)]}})),xe(s,C(yn,{get children(){return[C(re,{path:"/",component:En}),C(re,{path:"/about",component:Cn}),C(re,{path:"/hardcore",component:Ln}),C(re,{path:"/predict",component:Nn})]}})),e})();function $n(e){Rt(On,e)}$n(document.getElementById("app"));export{wn as A,kn as F,ze as S,In as T,R as a,A as b,C as c,j as d,_t as e,Ge as f,jn as g,Rn as h,xe as i,_n as j,ue as k,vt as l,Ae as m,Ve as o,v as s,Ne as t,ln as u};
