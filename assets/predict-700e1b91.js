var P=Object.defineProperty;var Q=(n,e,s)=>e in n?P(n,e,{enumerable:!0,configurable:!0,writable:!0,value:s}):n[e]=s;var m=(n,e,s)=>(Q(n,typeof e!="symbol"?e+"":e,s),s);import{c as v,T as V,i as w,t as N,a as S,h as W,b as k,j as F,S as X,f as Y}from"./index-099accc5.js";import{G as Z}from"./ground-6008c6c3.js";import{S as q,c as A,K as ee,l as U}from"./solid-play-4a5fadff.js";import{N as te,F as ne,a as M}from"./chess-ece2668e.js";import{R as B}from"./replay_chess-a5cf569d.js";import{R as I}from"./store-179801c4.js";import{C as oe}from"./ctrl-9fa0dc62.js";import"./util-2d6699b1.js";let K=new oe({emit(n){g.ai.local_eval(n),n.depth>=x&&g.ai.crunch_one()}}),L=10,x=16;const re=(n,e)=>{let[s,h]=ne.apply(n);return s.fen===e?[""]:h.filter(([t,a])=>a.fen===e).map(t=>t[0])},y=class{constructor(){m(this,"path_depths");m(this,"root");m(this,"nb_crunch");m(this,"on_root_changed");m(this,"on_crunch_done")}local_eval(e){re(this.root.root,e.fen).forEach(h=>{this.path_depths.set(h,e.depth),e.pvs.forEach(t=>{let a=h;t.cp/100,t.depth;let i=t.moves.slice(0,4);for(let d of i){if(this.root.node_at_path(a).children.find(C=>C.uci===d))break;a=this.root.add_move(a,d,void 0)}})}),this.on_root_changed()}crunch_one(){if(this.nb_crunch++,this.nb_crunch===L&&(K.stop(),this.on_crunch_done()),this.nb_crunch>L)return;let e=!1;te.breadfirst(this.root.root,(s,h)=>{let t=this.path_depths.get(s);if(!t||t<x){let i=this.root.root.node_list(s).map((d,b)=>({ply:b,uci:d.uci,fen:d.fen,san:""}));return e=!0,K.start("",i),!0}return!1}),e||(console.log("here"),setTimeout(()=>this.on_crunch_done()))}};let g=y;m(g,"ai",new y),m(g,"make",(e,s,h)=>{let{ai:t}=y;t.root=e,t.nb_crunch=0,t.path_depths=new Map;let a=e.flat_export[1].map(i=>i[0]);return a.forEach(i=>t.path_depths.set(i,x)),e.root.child_paths.filter(i=>i.length%4===2).forEach(i=>t.path_depths.delete(i)),a.length>0&&t.path_depths.set("",x),t.on_root_changed=s,t.on_crunch_done=h,t.crunch_one(),t});const se=N('<div class="guess-app"> <!> </div>'),le=N('<div class="opening-prep-scene"><div class="board"></div><div class="table"><div class="info"></div><div class="replay"></div><div class="controls"><button>Delete move</button><button>Delete Siblings</button></div><div class="action"></div></div></div>'),ae=N('<button class="primary">Compare AI</button>'),be=()=>[v(V,{children:" aidchess.com - Guess Lines "}),(()=>{const n=se.cloneNode(!0),e=n.firstChild,s=e.nextSibling;return s.nextSibling,w(n,v(ie,{}),s),n})()],ie=()=>{const[n,e]=S(""),[s,h]=S(B.make(),{equals:!1}),[t,a]=S(I.get_replay(),{equals:!1});W(()=>{I.set_replay(t())});const[i,d]=S(!1),b=()=>{d(!0);const l=g.make(s(),()=>{},()=>{let[r,c]=B.diff_trees(t(),l.root),p=r.filter(o=>o.length%4===2),_=r.filter(o=>o.length%4===0),f=c.filter(o=>o.length%4===0);a(o=>(_.forEach(u=>o.delete_path(u)),o)),a(o=>(f.forEach(u=>{let E=l.root.node_at_path(u);o.add_move(M(u),E.uci)}),o)),h(t().clone),h(o=>(p.forEach(u=>o.delete_children(u)),o)),d(!1)})},T=k(()=>t().node_at_path(n())),C=k(()=>{let l=t().root.child_paths,r=s().moves().map(p=>{let[_,f,o]=p.split(" ");return l.includes(_)?o="{__base child__}":o="{__base__}",[_,f,o].join(" ")}),c=t().moves().filter(p=>!r.find(_=>_.split(" ")[0]===p.split(" ")[0])).map(p=>{let[_,f,o]=p.split(" ");return o="{__ghost__}",[_,f,o].join(" ")});return[...r,...c]});k(()=>t().chess(n()));const O=k(()=>t().fen(n())),R=l=>{let r;a(c=>(r=c.add_move(n(),l),c)),r&&e(r)},z=()=>{let l=n();h(r=>(r.delete_path(n()),r)),a(r=>(r.delete_path(n()),r)),e(M(l))},H=()=>{n(),h(l=>(l.delete_siblings(n()),l)),a(l=>(l.delete_siblings(n()),l))};let D=q.make,J=q.make;return A({on_wheel:l=>{var r;if(l<0)e(c=>M(c));else{const c=(r=T())==null?void 0:r.children[0];c&&e(p=>p+c.id)}}},D),(()=>{const l=le.cloneNode(!0),r=l.firstChild,c=r.nextSibling,p=c.firstChild,_=p.nextSibling,f=_.nextSibling,o=f.firstChild,u=o.nextSibling,E=f.nextSibling,G=U(D);typeof G=="function"&&F(G,r),w(r,v(Z,{glyphs:[],get fen(){return O()},isBlack:!1,onUserMove:R}));const j=U(J);return typeof j=="function"&&F(j,_),w(_,v(ee,{get moves(){return C()},get on_path(){return n()},on_click:$=>e($)})),o.$$click=z,u.$$click=H,w(E,v(X,{get when(){return i()},get fallback(){return(()=>{const $=ae.cloneNode(!0);return $.$$click=b,$})()},children:"Comparing..."})),l})()};Y(["click"]);export{be as default};
