import{u,c as s,T as $,i as b,A as v,d as f,t as k}from"./index-cfc07838.js";const g=k('<div class="lobby"><div class="side"><div class="footer"></div></div><div class="app"><h2>Beat stockfish 8 the hard way.</h2><span>Play hardcore chess, where you can restart at your first mistake, and build an opening repertoire.</span><div class="pack"><button class="primary">White Stockfish 7</button></div><div class="pack"><button class="primary">Black Stockfish 7</button></div></div></div>'),m=()=>{const l=u(),t=(i,e)=>{l(`/hardcore?level=${i}`+(e?`&color=${e}`:""),{replace:!0})};return[s($,{children:" aidchess.com - Build an opening repertoire against Stockfish "}),(()=>{const i=g.cloneNode(!0),e=i.firstChild,r=e.firstChild,c=e.nextSibling,n=c.firstChild,o=n.nextSibling,a=o.nextSibling,d=a.firstChild,h=a.nextSibling,p=h.firstChild;return b(r,s(v,{href:"/about",children:"About"})),d.$$click=()=>{t(7)},p.$$click=()=>{t(7,"black")},i})()]};f(["click"]);export{m as default};