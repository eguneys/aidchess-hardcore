var n=Object.defineProperty;var p=(o,e,t)=>e in o?n(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>(p(o,typeof e!="symbol"?e+"":e,t),t);const m=o=>o!==void 0,a=o=>{const e={get:t=>o.getItem(t),set:(t,s)=>o.setItem(t,s),remove:t=>o.removeItem(t),make:t=>({get:()=>e.get(t),set:s=>e.set(t,s),remove:()=>e.remove(t)}),makeBoolean:t=>({get:()=>e.get(t)=="1",set:s=>e.set(t,s?"1":"0"),toggle:()=>e.set(t,e.get(t)=="1"?"0":"1")})};return e},r=a(window.localStorage),d=(o,e)=>t=>{if(m(t))return r.set(o,JSON.stringify(t)),t;const s=JSON.parse(r.get(o));return s!==null?s:e()};class g{constructor(){l(this,"_completed");this._completed=this._prop("completed",[])}_key(e){return["aidchess","challenges",e].join(".")}_prop(e,t){return d(this._key(e),()=>t)}clear(){this._completed([])}complete(e){let t=this.completeds;t.includes(e)||t.push(e),this._completed(t)}get completeds(){return this._completed()}}const i=new g,w=[{key:"white20",description:"Get to 20 moves with White"},{key:"black20",description:"Get to 20 moves with Black"},{key:"white30",description:"Get to 30 moves with White"},{key:"black30",description:"Get to 30 moves with Black"},{key:"white40",description:"Get to 40 moves with White"},{key:"black40",description:"Get to 40 moves with Black"}],k=o=>JSON.parse(JSON.stringify(o)),h=class{constructor(){l(this,"challenges");l(this,"check_challenge_game",e=>{e.moves.length>=80?e.color==="white"?this.complete("white40"):this.complete("black40"):e.moves.length>=60?e.color==="white"?this.complete("white30"):this.complete("black30"):e.moves.length>=40&&(e.color==="white"?this.complete("white20"):this.complete("black20"))})}boot(){this.challenges=k(w);let{completeds:e}=i;this.challenges.forEach(t=>{e.includes(t.key)?t.completed=!0:t.completed=void 0})}complete(e){i.complete(e),this.boot()}clear(){i.clear(),this.boot()}};let c=h;l(c,"make",()=>{let e=new h;return e.boot(),e});const f=c.make();export{f as C};