(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerpolicy&&(o.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?o.credentials="include":r.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();const b={};function Z(e){b.context=e}const ut=(e,t)=>e===t,le=Symbol("solid-proxy"),ft=Symbol("solid-track"),ce={equals:ut};let qe=He;const M=1,ae=2,Ve={owned:null,cleanups:null,context:null,owner:null},ye={};var v=null;let q=null,w=null,C=null,I=null,Ee=0;function ee(e,t){const n=w,s=v,r=e.length===0,o=r?Ve:{owned:null,cleanups:null,context:null,owner:t||s},l=r?e:()=>e(()=>O(()=>me(o)));v=o,w=null;try{return k(l,!0)}finally{w=n,v=s}}function R(e,t){t=t?Object.assign({},ce,t):ce;const n={value:e,observers:null,observerSlots:null,comparator:t.equals||void 0},s=r=>(typeof r=="function"&&(r=r(n.value)),Ke(n,r));return[Ue.bind(n),s]}function $e(e,t,n){const s=ge(e,t,!0,M);W(s)}function j(e,t,n){const s=ge(e,t,!1,M);W(s)}function Bn(e,t,n){qe=bt;const s=ge(e,t,!1,M);s.user=!0,I?I.push(s):W(s)}function A(e,t,n){n=n?Object.assign({},ce,n):ce;const s=ge(e,t,!0,0);return s.observers=null,s.observerSlots=null,s.comparator=n.equals||void 0,W(s),Ue.bind(s)}function dt(e,t,n){let s,r,o;arguments.length===2&&typeof t=="object"||arguments.length===1?(s=!0,r=e,o=t||{}):(s=e,r=t,o=n||{});let l=null,i=ye,u=null,a=!1,c="initialValue"in o,h=typeof s=="function"&&A(s);const g=new Set,[y,p]=(o.storage||R)(o.initialValue),[N,T]=R(void 0),[$,P]=R(void 0,{equals:!1}),[L,S]=R(c?"ready":"unresolved");if(b.context){u=`${b.context.id}${b.context.count++}`;let f;o.ssrLoadFrom==="initial"?i=o.initialValue:b.load&&(f=b.load(u))&&(i=f[0])}function E(f,d,m,_){return l===f&&(l=null,c=!0,(f===i||d===i)&&o.onHydrated&&queueMicrotask(()=>o.onHydrated(_,{value:d})),i=ye,F(d,m)),d}function F(f,d){k(()=>{d||p(()=>f),S(d?"errored":"ready"),T(d);for(const m of g.keys())m.decrement();g.clear()},!1)}function U(){const f=pt,d=y(),m=N();if(m&&!l)throw m;return w&&!w.user&&f&&$e(()=>{$(),l&&(f.resolved||g.has(f)||(f.increment(),g.add(f)))}),d}function z(f=!0){if(f!==!1&&a)return;a=!1;const d=h?h():s;if(d==null||d===!1){E(l,O(y));return}const m=i!==ye?i:O(()=>r(d,{value:y(),refetching:f}));return typeof m!="object"||!(m&&"then"in m)?(E(l,m,void 0,d),m):(l=m,a=!0,queueMicrotask(()=>a=!1),k(()=>{S(c?"refreshing":"pending"),P()},!1),m.then(_=>E(m,_,void 0,d),_=>E(m,void 0,We(_),d)))}return Object.defineProperties(U,{state:{get:()=>L()},error:{get:()=>N()},loading:{get(){const f=L();return f==="pending"||f==="refreshing"}},latest:{get(){if(!c)return U();const f=N();if(f&&!l)throw f;return y()}}}),h?$e(()=>z(!1)):z(!1),[U,{refetch:z,mutate:p}]}function qn(e){return k(e,!1)}function O(e){const t=w;w=null;try{return e()}finally{w=t}}function Fe(e,t,n){const s=Array.isArray(e);let r,o=n&&n.defer;return l=>{let i;if(s){i=Array(e.length);for(let a=0;a<e.length;a++)i[a]=e[a]()}else i=e();if(o){o=!1;return}const u=O(()=>t(i,r,l));return r=i,u}}function he(e){return v===null||(v.cleanups===null?v.cleanups=[e]:v.cleanups.push(e)),e}function ht(){return v}function gt(e,t){const n=v,s=w;v=e,w=null;try{return k(t,!0)}catch(r){Le(r)}finally{v=n,w=s}}function mt(e){const t=w,n=v;return Promise.resolve().then(()=>{w=t,v=n;let s;return k(e,!1),w=v=null,s?s.done:void 0})}function Pe(e,t){const n=Symbol("context");return{id:n,Provider:vt(n),defaultValue:e}}function ne(e){let t;return(t=Xe(v,e.id))!==void 0?t:e.defaultValue}function Ce(e){const t=A(e),n=A(()=>be(t()));return n.toArray=()=>{const s=n();return Array.isArray(s)?s:s!=null?[s]:[]},n}let pt;function Ue(){const e=q;if(this.sources&&(this.state||e))if(this.state===M||e)W(this);else{const t=C;C=null,k(()=>fe(this),!1),C=t}if(w){const t=this.observers?this.observers.length:0;w.sources?(w.sources.push(this),w.sourceSlots.push(t)):(w.sources=[this],w.sourceSlots=[t]),this.observers?(this.observers.push(w),this.observerSlots.push(w.sources.length-1)):(this.observers=[w],this.observerSlots=[w.sources.length-1])}return this.value}function Ke(e,t,n){let s=e.value;return(!e.comparator||!e.comparator(s,t))&&(e.value=t,e.observers&&e.observers.length&&k(()=>{for(let r=0;r<e.observers.length;r+=1){const o=e.observers[r],l=q&&q.running;l&&q.disposed.has(o),(l&&!o.tState||!l&&!o.state)&&(o.pure?C.push(o):I.push(o),o.observers&&Ge(o)),l||(o.state=M)}if(C.length>1e6)throw C=[],new Error},!1)),t}function W(e){if(!e.fn)return;me(e);const t=v,n=w,s=Ee;w=v=e,yt(e,e.value,s),w=n,v=t}function yt(e,t,n){let s;try{s=e.fn(t)}catch(r){e.pure&&(e.state=M,e.owned&&e.owned.forEach(me),e.owned=null),Le(r)}(!e.updatedAt||e.updatedAt<=n)&&(e.updatedAt!=null&&"observers"in e?Ke(e,s):e.value=s,e.updatedAt=n)}function ge(e,t,n,s=M,r){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:v,context:null,pure:n};return v===null||v!==Ve&&(v.owned?v.owned.push(o):v.owned=[o]),o}function ue(e){const t=q;if(e.state===0||t)return;if(e.state===ae||t)return fe(e);if(e.suspense&&O(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<Ee);)(e.state||t)&&n.push(e);for(let s=n.length-1;s>=0;s--)if(e=n[s],e.state===M||t)W(e);else if(e.state===ae||t){const r=C;C=null,k(()=>fe(e,n[0]),!1),C=r}}function k(e,t){if(C)return e();let n=!1;t||(C=[]),I?n=!0:I=[],Ee++;try{const s=e();return wt(n),s}catch(s){C||(I=null),C=null,Le(s)}}function wt(e){if(C&&(He(C),C=null),e)return;const t=I;I=null,t.length&&k(()=>qe(t),!1)}function He(e){for(let t=0;t<e.length;t++)ue(e[t])}function bt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:ue(s)}for(b.context&&Z(),t=0;t<n;t++)ue(e[t])}function fe(e,t){const n=q;e.state=0;for(let s=0;s<e.sources.length;s+=1){const r=e.sources[s];r.sources&&(r.state===M||n?r!==t&&ue(r):(r.state===ae||n)&&fe(r,t))}}function Ge(e){const t=q;for(let n=0;n<e.observers.length;n+=1){const s=e.observers[n];(!s.state||t)&&(s.state=ae,s.pure?C.push(s):I.push(s),s.observers&&Ge(s))}}function me(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),s=e.sourceSlots.pop(),r=n.observers;if(r&&r.length){const o=r.pop(),l=n.observerSlots.pop();s<r.length&&(o.sourceSlots[l]=s,r[s]=o,n.observerSlots[s]=l)}}if(e.owned){for(t=0;t<e.owned.length;t++)me(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function We(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function Le(e){throw e=We(e),e}function Xe(e,t){return e?e.context&&e.context[t]!==void 0?e.context[t]:Xe(e.owner,t):void 0}function be(e){if(typeof e=="function"&&!e.length)return be(e());if(Array.isArray(e)){const t=[];for(let n=0;n<e.length;n++){const s=be(e[n]);Array.isArray(s)?t.push.apply(t,s):t.push(s)}return t}return e}function vt(e,t){return function(s){let r;return j(()=>r=O(()=>(v.context={[e]:s.value},Ce(()=>s.children))),void 0),r}}const At=Symbol("fallback");function Re(e){for(let t=0;t<e.length;t++)e[t]()}function xt(e,t,n={}){let s=[],r=[],o=[],l=0,i=t.length>1?[]:null;return he(()=>Re(o)),()=>{let u=e()||[],a,c;return u[ft],O(()=>{let g=u.length,y,p,N,T,$,P,L,S,E;if(g===0)l!==0&&(Re(o),o=[],s=[],r=[],l=0,i&&(i=[])),n.fallback&&(s=[At],r[0]=ee(F=>(o[0]=F,n.fallback())),l=1);else if(l===0){for(r=new Array(g),c=0;c<g;c++)s[c]=u[c],r[c]=ee(h);l=g}else{for(N=new Array(g),T=new Array(g),i&&($=new Array(g)),P=0,L=Math.min(l,g);P<L&&s[P]===u[P];P++);for(L=l-1,S=g-1;L>=P&&S>=P&&s[L]===u[S];L--,S--)N[S]=r[L],T[S]=o[L],i&&($[S]=i[L]);for(y=new Map,p=new Array(S+1),c=S;c>=P;c--)E=u[c],a=y.get(E),p[c]=a===void 0?-1:a,y.set(E,c);for(a=P;a<=L;a++)E=s[a],c=y.get(E),c!==void 0&&c!==-1?(N[c]=r[a],T[c]=o[a],i&&($[c]=i[a]),c=p[c],y.set(E,c)):o[a]();for(c=P;c<g;c++)c in N?(r[c]=N[c],o[c]=T[c],i&&(i[c]=$[c],i[c](c))):r[c]=ee(h);r=r.slice(0,l=g),s=u.slice(0)}return r});function h(g){if(o[c]=g,i){const[y,p]=R(c);return i[c]=p,t(u[c],y)}return t(u[c])}}}function x(e,t){return O(()=>e(t||{}))}function oe(){return!0}const ve={get(e,t,n){return t===le?n:e.get(t)},has(e,t){return t===le?!0:e.has(t)},set:oe,deleteProperty:oe,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:oe,deleteProperty:oe}},ownKeys(e){return e.keys()}};function we(e){return(e=typeof e=="function"?e():e)?e:{}}function Ae(...e){let t=!1;for(let s=0;s<e.length;s++){const r=e[s];t=t||!!r&&le in r,e[s]=typeof r=="function"?(t=!0,A(r)):r}if(t)return new Proxy({get(s){for(let r=e.length-1;r>=0;r--){const o=we(e[r])[s];if(o!==void 0)return o}},has(s){for(let r=e.length-1;r>=0;r--)if(s in we(e[r]))return!0;return!1},keys(){const s=[];for(let r=0;r<e.length;r++)s.push(...Object.keys(we(e[r])));return[...new Set(s)]}},ve);const n={};for(let s=e.length-1;s>=0;s--)if(e[s]){const r=Object.getOwnPropertyDescriptors(e[s]);for(const o in r)o in n||Object.defineProperty(n,o,{enumerable:!0,get(){for(let l=e.length-1;l>=0;l--){const i=(e[l]||{})[o];if(i!==void 0)return i}}})}return n}function Je(e,...t){const n=new Set(t.flat());if(le in e){const r=t.map(o=>new Proxy({get(l){return o.includes(l)?e[l]:void 0},has(l){return o.includes(l)&&l in e},keys(){return o.filter(l=>l in e)}},ve));return r.push(new Proxy({get(o){return n.has(o)?void 0:e[o]},has(o){return n.has(o)?!1:o in e},keys(){return Object.keys(e).filter(o=>!n.has(o))}},ve)),r}const s=Object.getOwnPropertyDescriptors(e);return t.push(Object.keys(s).filter(r=>!n.has(r))),t.map(r=>{const o={};for(let l=0;l<r.length;l++){const i=r[l];i in e&&Object.defineProperty(o,i,s[i]?s[i]:{get(){return e[i]},set(){return!0},enumerable:!0})}return o})}function X(e){let t,n;const s=r=>{const o=b.context;if(o){const[i,u]=R();(n||(n=e())).then(a=>{Z(o),u(()=>a.default),Z()}),t=i}else if(!t){const[i]=dt(()=>(n||(n=e())).then(u=>u.default));t=i}let l;return A(()=>(l=t())&&O(()=>{if(!o)return l(r);const i=b.context;Z(o);const u=l(r);return Z(i),u}))};return s.preload=()=>n||((n=e()).then(r=>t=()=>r.default),n),s}let St=0;function Et(){const e=b.context;return e?`${e.id}${e.count++}`:`cl-${St++}`}function Vn(e){const t="fallback"in e&&{fallback:()=>e.fallback};return A(xt(()=>e.each,e.children,t||void 0))}function ze(e){let t=!1;const n=e.keyed,s=A(()=>e.when,void 0,{equals:(r,o)=>t?r===o:!r==!o});return A(()=>{const r=s();if(r){const o=e.children,l=typeof o=="function"&&o.length>0;return t=n||l,l?O(()=>o(r)):o}return e.fallback},void 0,void 0)}const Pt=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Ct=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Pt]),Lt=new Set(["innerHTML","textContent","innerText","children"]),Nt=Object.assign(Object.create(null),{className:"class",htmlFor:"for"}),_e=Object.assign(Object.create(null),{class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"}),Ot=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Tt=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),$t={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Rt(e,t,n){let s=n.length,r=t.length,o=s,l=0,i=0,u=t[r-1].nextSibling,a=null;for(;l<r||i<o;){if(t[l]===n[i]){l++,i++;continue}for(;t[r-1]===n[o-1];)r--,o--;if(r===l){const c=o<s?i?n[i-1].nextSibling:n[o-i]:u;for(;i<o;)e.insertBefore(n[i++],c)}else if(o===i)for(;l<r;)(!a||!a.has(t[l]))&&t[l].remove(),l++;else if(t[l]===n[o-1]&&n[i]===t[r-1]){const c=t[--r].nextSibling;e.insertBefore(n[i++],t[l++].nextSibling),e.insertBefore(n[--o],c),t[r]=n[o]}else{if(!a){a=new Map;let h=i;for(;h<o;)a.set(n[h],h++)}const c=a.get(t[l]);if(c!=null)if(i<c&&c<o){let h=l,g=1,y;for(;++h<r&&h<o&&!((y=a.get(t[h]))==null||y!==c+g);)g++;if(g>c-i){const p=t[l];for(;i<c;)e.insertBefore(n[i++],p)}else e.replaceChild(n[i++],t[l++])}else l++;else t[l++].remove()}}}const ke="_$DX_DELEGATE";function _t(e,t,n,s={}){let r;return ee(o=>{r=o,t===document?e():xe(t,e(),t.firstChild?null:void 0,n)},s.owner),()=>{r(),t.textContent=""}}function Ne(e,t,n){const s=document.createElement("template");s.innerHTML=e;let r=s.content.firstChild;return n&&(r=r.firstChild),r}function Qe(e,t=window.document){const n=t[ke]||(t[ke]=new Set);for(let s=0,r=e.length;s<r;s++){const o=e[s];n.has(o)||(n.add(o),t.addEventListener(o,Ft))}}function Ye(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function kt(e,t,n,s){s==null?e.removeAttributeNS(t,n):e.setAttributeNS(t,n,s)}function It(e,t){t==null?e.removeAttribute("class"):e.className=t}function jt(e,t,n,s){if(s)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const r=n[0];e.addEventListener(t,n[0]=o=>r.call(e,n[1],o))}else e.addEventListener(t,n)}function Mt(e,t,n={}){const s=Object.keys(t||{}),r=Object.keys(n);let o,l;for(o=0,l=r.length;o<l;o++){const i=r[o];!i||i==="undefined"||t[i]||(Ie(e,i,!1),delete n[i])}for(o=0,l=s.length;o<l;o++){const i=s[o],u=!!t[i];!i||i==="undefined"||n[i]===u||!u||(Ie(e,i,!0),n[i]=u)}return n}function Dt(e,t,n){if(!t)return n?Ye(e,"style"):t;const s=e.style;if(typeof t=="string")return s.cssText=t;typeof n=="string"&&(s.cssText=n=void 0),n||(n={}),t||(t={});let r,o;for(o in n)t[o]==null&&s.removeProperty(o),delete n[o];for(o in t)r=t[o],r!==n[o]&&(s.setProperty(o,r),n[o]=r);return n}function de(e,t={},n,s){const r={};return s||j(()=>r.children=G(e,t.children,r.children)),j(()=>t.ref&&t.ref(e)),j(()=>Bt(e,t,n,!0,r,!0)),r}function Fn(e,t,n){return O(()=>e(t,n))}function xe(e,t,n,s){if(n!==void 0&&!s&&(s=[]),typeof t!="function")return G(e,t,s,n);j(r=>G(e,t(),r,n),s)}function Bt(e,t,n,s,r={},o=!1){t||(t={});for(const l in r)if(!(l in t)){if(l==="children")continue;r[l]=je(e,l,null,r[l],n,o)}for(const l in t){if(l==="children"){s||G(e,t.children);continue}const i=t[l];r[l]=je(e,l,i,r[l],n,o)}}function qt(e){let t,n;return!b.context||!(t=b.registry.get(n=Ut()))?e.cloneNode(!0):(b.completed&&b.completed.add(t),b.registry.delete(n),t)}function Vt(e){return e.toLowerCase().replace(/-([a-z])/g,(t,n)=>n.toUpperCase())}function Ie(e,t,n){const s=t.trim().split(/\s+/);for(let r=0,o=s.length;r<o;r++)e.classList.toggle(s[r],n)}function je(e,t,n,s,r,o){let l,i,u;if(t==="style")return Dt(e,n,s);if(t==="classList")return Mt(e,n,s);if(n===s)return s;if(t==="ref")o||n(e);else if(t.slice(0,3)==="on:"){const a=t.slice(3);s&&e.removeEventListener(a,s),n&&e.addEventListener(a,n)}else if(t.slice(0,10)==="oncapture:"){const a=t.slice(10);s&&e.removeEventListener(a,s,!0),n&&e.addEventListener(a,n,!0)}else if(t.slice(0,2)==="on"){const a=t.slice(2).toLowerCase(),c=Ot.has(a);if(!c&&s){const h=Array.isArray(s)?s[0]:s;e.removeEventListener(a,h)}(c||n)&&(jt(e,a,n,c),c&&Qe([a]))}else if((u=Lt.has(t))||!r&&(_e[t]||(i=Ct.has(t)))||(l=e.nodeName.includes("-")))t==="class"||t==="className"?It(e,n):l&&!i&&!u?e[Vt(t)]=n:e[_e[t]||t]=n;else{const a=r&&t.indexOf(":")>-1&&$t[t.split(":")[0]];a?kt(e,a,t,n):Ye(e,Nt[t]||t,n)}return n}function Ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),b.registry&&!b.done&&(b.done=!0,document.querySelectorAll("[id^=pl-]").forEach(s=>{for(;s&&s.nodeType!==8&&s.nodeValue!=="pl-"+e;){let r=s.nextSibling;s.remove(),s=r}s&&s.remove()}));n;){const s=n[t];if(s&&!n.disabled){const r=n[`${t}Data`];if(r!==void 0?s.call(n,r,e):s.call(n,e),e.cancelBubble)return}n=n._$host||n.parentNode||n.host}}function G(e,t,n,s,r){for(b.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const o=typeof t,l=s!==void 0;if(e=l&&n[0]&&n[0].parentNode||e,o==="string"||o==="number"){if(b.context)return n;if(o==="number"&&(t=t.toString()),l){let i=n[0];i&&i.nodeType===3?i.data=t:i=document.createTextNode(t),n=K(e,n,s,i)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||o==="boolean"){if(b.context)return n;n=K(e,n,s)}else{if(o==="function")return j(()=>{let i=t();for(;typeof i=="function";)i=i();n=G(e,i,n,s)}),()=>n;if(Array.isArray(t)){const i=[],u=n&&Array.isArray(n);if(Se(i,t,n,r))return j(()=>n=G(e,i,n,s,!0)),()=>n;if(b.context){if(!i.length)return n;for(let a=0;a<i.length;a++)if(i[a].parentNode)return n=i}if(i.length===0){if(n=K(e,n,s),l)return n}else u?n.length===0?Me(e,i,s):Rt(e,n,i):(n&&K(e),Me(e,i));n=i}else if(t instanceof Node){if(b.context&&t.parentNode)return n=l?[t]:t;if(Array.isArray(n)){if(l)return n=K(e,n,s,t);K(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function Se(e,t,n,s){let r=!1;for(let o=0,l=t.length;o<l;o++){let i=t[o],u=n&&n[o];if(i instanceof Node)e.push(i);else if(!(i==null||i===!0||i===!1))if(Array.isArray(i))r=Se(e,i,u)||r;else if(typeof i=="function")if(s){for(;typeof i=="function";)i=i();r=Se(e,Array.isArray(i)?i:[i],Array.isArray(u)?u:[u])||r}else e.push(i),r=!0;else{const a=String(i);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return r}function Me(e,t,n=null){for(let s=0,r=t.length;s<r;s++)e.insertBefore(t[s],n)}function K(e,t,n,s){if(n===void 0)return e.textContent="";const r=s||document.createTextNode("");if(t.length){let o=!1;for(let l=t.length-1;l>=0;l--){const i=t[l];if(r!==i){const u=i.parentNode===e;!o&&!l?u?e.replaceChild(r,i):e.insertBefore(r,n):u&&i.remove()}else o=!0}}else e.insertBefore(r,n);return[r]}function Ut(){const e=b.context;return`${e.id}${e.count++}`}const Kt=!1,Ht="http://www.w3.org/2000/svg";function Gt(e,t=!1){return t?document.createElementNS(Ht,e):document.createElement(e)}function Un(e){const[t,n]=Je(e,["component"]),s=A(()=>t.component);return A(()=>{const r=s();switch(typeof r){case"function":return O(()=>r(n));case"string":const o=Tt.has(r),l=b.context?qt():Gt(r,o);return de(l,n,o),l}})}const Wt="modulepreload",Xt=function(e,t){return new URL(e,t).href},De={},J=function(t,n,s){if(!n||n.length===0)return t();const r=document.getElementsByTagName("link");return Promise.all(n.map(o=>{if(o=Xt(o,s),o in De)return;De[o]=!0;const l=o.endsWith(".css"),i=l?'[rel="stylesheet"]':"";if(!!s)for(let c=r.length-1;c>=0;c--){const h=r[c];if(h.href===o&&(!l||h.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${i}`))return;const a=document.createElement("link");if(a.rel=l?"stylesheet":Wt,l||(a.as="script",a.crossOrigin=""),a.href=o,document.head.appendChild(a),l)return new Promise((c,h)=>{a.addEventListener("load",c),a.addEventListener("error",()=>h(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>t())};function Ze(e,t,n){return e.addEventListener(t,n),()=>e.removeEventListener(t,n)}function Jt([e,t],n,s){return[n?()=>n(e()):e,s?r=>t(s(r)):t]}function zt(e){try{return document.querySelector(e)}catch{return null}}function et(e,t){const n=zt(`#${e}`);n?n.scrollIntoView():t&&window.scrollTo(0,0)}function tt(e,t,n,s){let r=!1;const o=i=>typeof i=="string"?{value:i}:i,l=Jt(R(o(e()),{equals:(i,u)=>i.value===u.value}),void 0,i=>(!r&&t(i),i));return n&&he(n((i=e())=>{r=!0,l[1](o(i)),r=!1})),{signal:l,utils:s}}function Qt(e){if(e){if(Array.isArray(e))return{signal:e}}else return{signal:R({value:""})};return e}function Yt(){return tt(()=>({value:window.location.pathname+window.location.search+window.location.hash,state:history.state}),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"",e):window.history.pushState(s,"",e),et(window.location.hash.slice(1),n)},e=>Ze(window,"popstate",()=>e()),{go:e=>window.history.go(e)})}function Zt(){return tt(()=>window.location.hash.slice(1),({value:e,replace:t,scroll:n,state:s})=>{t?window.history.replaceState(s,"","#"+e):window.location.hash=e;const r=e.indexOf("#"),o=r>=0?e.slice(r+1):"";et(o,n)},e=>Ze(window,"hashchange",()=>e()),{go:e=>window.history.go(e),renderPath:e=>`#${e}`,parsePath:e=>{const t=e.replace(/^.*?#/,"");if(!t.startsWith("/")){const[,n="/"]=window.location.hash.split("#",2);return`${n}#${t}`}return t}})}function en(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return!(n=!1);const l={to:r,options:o,defaultPrevented:!1,preventDefault:()=>l.defaultPrevented=!0};for(const i of e)i.listener({...l,from:i.location,retry:u=>{u&&(n=!0),i.navigate(r,o)}});return!l.defaultPrevented}return{subscribe:t,confirm:s}}const tn=/^(?:[a-z0-9]+:)?\/\//i,nn=/^\/+|\/+$/g;function V(e,t=!1){const n=e.replace(nn,"");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function ie(e,t,n){if(tn.test(t))return;const s=V(e),r=n&&V(n);let o="";return!r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+V(t,!o)}function rn(e,t){if(e==null)throw new Error(t);return e}function nt(e,t){return V(e).replace(/\/*(\*.*)?$/g,"")+V(t)}function sn(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n}),t}function on(e,t){const[n,s]=e.split("/*",2),r=n.split("/").filter(Boolean),o=r.length;return l=>{const i=l.split("/").filter(Boolean),u=i.length-o;if(u<0||u>0&&s===void 0&&!t)return null;const a={path:o?"":"/",params:{}};for(let c=0;c<o;c++){const h=r[c],g=i[c];if(h[0]===":")a.params[h.slice(1)]=g;else if(h.localeCompare(g,void 0,{sensitivity:"base"})!==0)return null;a.path+=`/${g}`}return s&&(a.params[s]=u?i.slice(-u).join("/"):""),a}}function ln(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function rt(e){const t=new Map,n=ht();return new Proxy({},{get(s,r){return t.has(r)||gt(n,()=>t.set(r,A(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return{enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function cn(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([r,o])=>{o==null||o===""?n.delete(r):n.set(r,String(o))});const s=n.toString();return s?`?${s}`:""}function st(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return[e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return st(s).reduce((o,l)=>[...o,...r.map(i=>i+l)],[])}const an=100,ot=Pe(),pe=Pe(),re=()=>rn(ne(ot),"Make sure your app is wrapped in a <Router />");let te;const Oe=()=>te||ne(pe)||re().base,un=e=>{const t=Oe();return A(()=>t.resolvePath(e()))},fn=e=>{const t=re();return A(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},dn=()=>re().navigatorFactory(),it=()=>re().location,Kn=()=>{const e=it(),t=dn(),n=(s,r)=>{const o=O(()=>cn(e.search,s));t(e.pathname+o+e.hash,{scroll:!1,resolve:!1,...r})};return[e.query,n]};function hn(e,t="",n){const{component:s,data:r,children:o}=e,l=!o||Array.isArray(o)&&!o.length,i={key:e,element:s?()=>x(s,{}):()=>{const{element:u}=e;return u===void 0&&n?x(n,{}):u},preload:e.component?s.preload:e.preload,data:r};return lt(e.path).reduce((u,a)=>{for(const c of st(a)){const h=nt(t,c),g=l?h:h.split("/*",1)[0];u.push({...i,originalPath:c,pattern:g,matcher:on(g,!l)})}return u},[])}function gn(e,t=0){return{routes:e,score:ln(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],l=o.matcher(n);if(!l)return null;s.unshift({...l,route:o})}return s}}}function lt(e){return Array.isArray(e)?e:[e]}function ct(e,t="",n,s=[],r=[]){const o=lt(e);for(let l=0,i=o.length;l<i;l++){const u=o[l];if(u&&typeof u=="object"&&u.hasOwnProperty("path")){const a=hn(u,t,n);for(const c of a){s.push(c);const h=Array.isArray(u.children)&&u.children.length===0;if(u.children&&!h)ct(u.children,c.pattern,n,s,r);else{const g=gn([...s],r.length);r.push(g)}s.pop()}}}return s.length?r:r.sort((l,i)=>i.score-l.score)}function mn(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return[]}function pn(e,t){const n=new URL("http://sar"),s=A(u=>{const a=e();try{return new URL(a,n)}catch{return console.error(`Invalid path ${a}`),u}},n,{equals:(u,a)=>u.href===a.href}),r=A(()=>s().pathname),o=A(()=>s().search,!0),l=A(()=>s().hash),i=A(()=>"");return{get pathname(){return r()},get search(){return o()},get hash(){return l()},get state(){return t()},get key(){return i()},query:rt(Fe(o,()=>sn(s())))}}function yn(e,t="",n,s){const{signal:[r,o],utils:l={}}=Qt(e),i=l.parsePath||(f=>f),u=l.renderPath||(f=>f),a=l.beforeLeave||en(),c=ie("",t),h=void 0;if(c===void 0)throw new Error(`${c} is not a valid base path`);c&&!r().value&&o({value:c,replace:!0,scroll:!1});const[g,y]=R(!1),p=async f=>{y(!0);try{await mt(f)}finally{y(!1)}},[N,T]=R(r().value),[$,P]=R(r().state),L=pn(N,$),S=[],E={pattern:c,params:{},path:()=>c,outlet:()=>null,resolvePath(f){return ie(c,f)}};if(n)try{te=E,E.data=n({data:void 0,params:{},location:L,navigate:U(E)})}finally{te=void 0}function F(f,d,m){O(()=>{if(typeof d=="number"){d&&(l.go?a.confirm(d,m)&&l.go(d):console.warn("Router integration does not support relative routing"));return}const{replace:_,resolve:se,scroll:D,state:Q}={replace:!1,resolve:!0,scroll:!0,...m},B=se?f.resolvePath(d):ie("",d);if(B===void 0)throw new Error(`Path '${d}' is not a routable path`);if(S.length>=an)throw new Error("Too many redirects");const Y=N();if((B!==Y||Q!==$())&&!Kt){if(a.confirm(B,m)){const at=S.push({value:Y,replace:_,scroll:D,state:$()});p(()=>{T(B),P(Q)}).then(()=>{S.length===at&&z({value:B,state:Q})})}}})}function U(f){return f=f||ne(pe)||E,(d,m)=>F(f,d,m)}function z(f){const d=S[0];d&&((f.value!==d.value||f.state!==d.state)&&o({...f,replace:d.replace,scroll:d.scroll}),S.length=0)}j(()=>{const{value:f,state:d}=r();O(()=>{f!==N()&&p(()=>{T(f),P(d)})})});{let f=function(d){if(d.defaultPrevented||d.button!==0||d.metaKey||d.altKey||d.ctrlKey||d.shiftKey)return;const m=d.composedPath().find(Y=>Y instanceof Node&&Y.nodeName.toUpperCase()==="A");if(!m||!m.hasAttribute("link"))return;const _=m.href;if(m.target||!_&&!m.hasAttribute("state"))return;const se=(m.getAttribute("rel")||"").split(/\s+/);if(m.hasAttribute("download")||se&&se.includes("external"))return;const D=new URL(_);if(D.origin!==window.location.origin||c&&D.pathname&&!D.pathname.toLowerCase().startsWith(c.toLowerCase()))return;const Q=i(D.pathname+D.search+D.hash),B=m.getAttribute("state");d.preventDefault(),F(E,Q,{resolve:!1,replace:m.hasAttribute("replace"),scroll:!m.hasAttribute("noscroll"),state:B&&JSON.parse(B)})};Qe(["click"]),document.addEventListener("click",f),he(()=>document.removeEventListener("click",f))}return{base:E,out:h,location:L,isRouting:g,renderPath:u,parsePath:i,navigatorFactory:U,beforeLeave:a}}function wn(e,t,n,s){const{base:r,location:o,navigatorFactory:l}=e,{pattern:i,element:u,preload:a,data:c}=s().route,h=A(()=>s().path),g=rt(()=>s().params);a&&a();const y={parent:t,pattern:i,get child(){return n()},path:h,params:g,data:t.data,outlet:u,resolvePath(p){return ie(r.path(),p,h())}};if(c)try{te=y,y.data=c({data:t.data,params:g,location:o,navigate:l(y)})}finally{te=void 0}return y}const bn=Ne("<a link></a>"),vn=e=>{const{source:t,url:n,base:s,data:r,out:o}=e,l=t||Yt(),i=yn(l,s,r);return x(ot.Provider,{value:i,get children(){return e.children}})},An=e=>{const t=re(),n=Oe(),s=Ce(()=>e.children),r=A(()=>ct(s(),nt(n.pattern,e.base||""),xn)),o=A(()=>mn(r(),t.location.pathname));t.out&&t.out.matches.push(o().map(({route:a,path:c,params:h})=>({originalPath:a.originalPath,pattern:a.pattern,path:c,params:h})));const l=[];let i;const u=A(Fe(o,(a,c,h)=>{let g=c&&a.length===c.length;const y=[];for(let p=0,N=a.length;p<N;p++){const T=c&&c[p],$=a[p];h&&T&&$.route.key===T.route.key?y[p]=h[p]:(g=!1,l[p]&&l[p](),ee(P=>{l[p]=P,y[p]=wn(t,y[p-1]||n,()=>u()[p+1],()=>o()[p])}))}return l.splice(a.length).forEach(p=>p()),h&&g?h:(i=y[0],y)}));return x(ze,{get when(){return u()&&i},children:a=>x(pe.Provider,{value:a,get children(){return a.outlet()}})})},H=e=>{const t=Ce(()=>e.children);return Ae(e,{get children(){return t()}})},xn=()=>{const e=Oe();return x(ze,{get when(){return e.child},children:t=>x(pe.Provider,{value:t,get children(){return t.outlet()}})})};function Sn(e){e=Ae({inactiveClass:"inactive",activeClass:"active"},e);const[,t]=Je(e,["href","state","class","activeClass","inactiveClass","end"]),n=un(()=>e.href),s=fn(n),r=it(),o=A(()=>{const l=n();if(l===void 0)return!1;const i=V(l.split(/[?#]/,1)[0]).toLowerCase(),u=V(r.pathname).toLowerCase();return e.end?i===u:u.startsWith(i)});return(()=>{const l=bn.cloneNode(!0);return de(l,Ae(t,{get href(){return s()||e.href},get state(){return JSON.stringify(e.state)},get classList(){return{...e.class&&{[e.class]:!0},[e.inactiveClass]:!o(),[e.activeClass]:o(),...t.classList}},get["aria-current"](){return o()?"page":void 0}}),!1,!1),l})()}const Te=Pe(),En=["title","meta"],Be=e=>e.tag+(e.name?`.${e.name}"`:""),Pn=e=>{if(!b.context){const r=document.head.querySelectorAll("[data-sm]");Array.prototype.forEach.call(r,o=>o.parentNode.removeChild(o))}const t=new Map;function n(r){if(r.ref)return r.ref;let o=document.querySelector(`[data-sm="${r.id}"]`);return o?(o.tagName.toLowerCase()!==r.tag&&(o.parentNode&&o.parentNode.removeChild(o),o=document.createElement(r.tag)),o.removeAttribute("data-sm")):o=document.createElement(r.tag),o}const s={addClientTag:r=>{let o=Be(r);if(En.indexOf(r.tag)!==-1){t.has(o)||t.set(o,[]);let i=t.get(o),u=i.length;i=[...i,r],t.set(o,i);{let a=n(r);r.ref=a,de(a,r.props);let c=null;for(var l=u-1;l>=0;l--)if(i[l]!=null){c=i[l];break}a.parentNode!=document.head&&document.head.appendChild(a),c&&c.ref&&document.head.removeChild(c.ref)}return u}{let i=n(r);r.ref=i,de(i,r.props),i.parentNode!=document.head&&document.head.appendChild(i)}return-1},removeClientTag:(r,o)=>{const l=Be(r);if(r.ref){const i=t.get(l);if(i){if(r.ref.parentNode){r.ref.parentNode.removeChild(r.ref);for(let u=o-1;u>=0;u--)i[u]!=null&&document.head.appendChild(i[u].ref)}i[o]=null,t.set(l,i)}else r.ref.parentNode&&r.ref.parentNode.removeChild(r.ref)}}};return x(Te.Provider,{value:s,get children(){return e.children}})},Cn=(e,t)=>{const n=Et();if(!ne(Te))throw new Error("<MetaProvider /> should be in the tree");return Ln({tag:e,props:t,id:n,get name(){return t.name||t.property}}),null};function Ln(e){const{addClientTag:t,removeClientTag:n,addServerTag:s}=ne(Te);j(()=>{{let r=t(e);he(()=>n(e,r))}})}const Hn=e=>Cn("title",e),Nn=Ne("<span>.com</span>"),On=Ne('<div class="liheadsup"><div class="navbar"><div class="title"></div><div class="dasher"></div></div><div class="main"></div></div>'),Tn=X(()=>J(()=>import("./about-16472f3e.js"),["./about-16472f3e.js","./about-e971f27d.css"],import.meta.url)),$n=X(()=>J(()=>import("./home-1da89cbe.js"),["./home-1da89cbe.js","./challenges-1870aeca.js","./store-179801c4.js","./replay_chess-a5cf569d.js","./chess-ece2668e.js","./home-793b6430.css"],import.meta.url)),Rn=X(()=>J(()=>import("./hardcore-341a3807.js"),["./hardcore-341a3807.js","./ground-f450dd88.js","./util-2d6699b1.js","./util-8bd2862d.css","./chess-ece2668e.js","./ctrl-9fa0dc62.js","./challenges-1870aeca.js","./store-179801c4.js","./replay_chess-a5cf569d.js","./hardcore-7bb793f0.css"],import.meta.url)),_n=X(()=>J(()=>import("./predict-172005e6.js"),["./predict-172005e6.js","./ground-f450dd88.js","./util-2d6699b1.js","./util-8bd2862d.css","./chess-ece2668e.js","./solid-play-6c62466f.js","./replay_chess-a5cf569d.js","./store-179801c4.js","./ctrl-9fa0dc62.js","./predict-69cc4194.css"],import.meta.url)),kn=X(()=>J(()=>import("./opening-622192b2.js"),["./opening-622192b2.js","./solid-play-6c62466f.js","./util-2d6699b1.js","./util-8bd2862d.css","./chess-ece2668e.js","./opening-8f9ac2f3.css"],import.meta.url)),In=X(()=>J(()=>import("./dem-70c6a6fe.js"),["./dem-70c6a6fe.js","./chess-ece2668e.js","./solid-play-6c62466f.js","./ground-f450dd88.js","./util-2d6699b1.js","./util-8bd2862d.css","./replay_chess-a5cf569d.js","./dem-2b62d821.css"],import.meta.url)),jn=()=>x(vn,{get source(){return Zt()},get children(){return x(Pn,{get children(){return x(Mn,{})}})}}),Mn=()=>(()=>{const e=On.cloneNode(!0),t=e.firstChild,n=t.firstChild,s=t.nextSibling;return xe(n,x(Sn,{href:"/",get children(){return[" aidchess",Nn.cloneNode(!0)]}})),xe(s,x(An,{get children(){return[x(H,{path:"/",component:$n}),x(H,{path:"/about",component:Tn}),x(H,{path:"/hardcore",component:Rn}),x(H,{path:"/predict",component:_n}),x(H,{path:"/openings",component:kn}),x(H,{path:"/dem",component:In})]}})),e})();function Dn(e){_t(jn,e)}Dn(document.getElementById("app"));export{Sn as A,Un as D,Vn as F,ze as S,Hn as T,R as a,A as b,x as c,j as d,It as e,Qe as f,Kn as g,Bn as h,xe as i,Fn as j,he as k,dt as l,Ae as m,qn as n,Fe as o,Ye as s,Ne as t,dn as u};