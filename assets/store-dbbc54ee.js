var pt=Object.defineProperty;var gt=(e,i,s)=>i in e?pt(e,i,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[i]=s;var j=(e,i,s)=>(gt(e,typeof i!="symbol"?i+"":i,s),s);const bt=e=>e!==void 0,vt=e=>{const i={get:s=>e.getItem(s),set:(s,o)=>e.setItem(s,o),remove:s=>e.removeItem(s),make:s=>({get:()=>i.get(s),set:o=>i.set(s,o),remove:()=>i.remove(s)}),makeBoolean:s=>({get:()=>i.get(s)=="1",set:o=>i.set(s,o?"1":"0"),toggle:()=>i.set(s,i.get(s)=="1"?"0":"1")})};return i},Ke=vt(window.localStorage),Le=(e,i)=>s=>{if(bt(s))return Ke.set(e,JSON.stringify(s)),s;const o=JSON.parse(Ke.get(e));return o!==null?o:i()};var kt=(e,i)=>{let s=[];for(let o in e)i(o,e[o])&&s.push(o);return s},be=(e,i)=>{for(let s in e)if(i(s,e[s]))return s},y=(e,i)=>{let s={};for(let o in e){let a=e[o]&&i(o,e[o]);s[o]=a}return s},ve=e=>{let i={};return e.forEach(s=>i[s]=s),i},St=(e,i)=>{let s={};return e.forEach(o=>{let a=i(o);a&&(s[o]=a)}),s},z=["a","b","c","d","e","f","g","h"],se=["1","2","3","4","5","6","7","8"],Et=["w","b"],Ct=["r","q","b","n","p","k"],Nt=["q","n","r","b"],Z=z.flatMap(e=>se.map(i=>`${e}${i}`)),At=Et.flatMap(e=>Ct.map(i=>e+i));At.flatMap(e=>Z.map(i=>[e,i].join("@")));var It=se.slice(0).reverse();se.flatMap(e=>z.map(i=>`${i}${e}`));It.flatMap(e=>z.map(i=>`${i}${e}`));Z.flatMap(e=>Z.map(i=>`${e}${i}`));var oe=ve(z),ae=ve(se),le={a:"b",b:"c",c:"d",d:"e",e:"f",f:"g",g:"h",h:void 0},he={h:"g",g:"f",f:"e",e:"d",d:"c",c:"b",b:"a",a:void 0},fe={1:"2",2:"3",3:"4",4:"5",5:"6",6:"7",7:"8",8:void 0},ce={8:"7",7:"6",6:"5",5:"4",4:"3",3:"2",2:"1",1:void 0};function ue(e,i){return y(e,s=>{let o=i[s];if(o&&(o=i[o],o))return o})}var $e=ue(oe,le),De=ue(oe,he),Be=ue(ae,fe),We=ue(ae,ce);function _e(e,i){return y(e,s=>{let o={},a=s,d=[];for(;a=i[a];)o[a]=d.slice(0),d.push(a);return o})}var ke=_e(oe,le),Se=_e(oe,he),Ee=_e(ae,fe),Ce=_e(ae,ce),K=ve(Z),wt=e=>[e.slice(0,2),e.slice(2)],te=e=>e.split("");function Fe(e){return y(K,i=>{let[s,o]=te(i),a={},d=e[s];return y(d,(v,C)=>{let I=C.map(R=>R+o);a[v+o]=I}),a})}var Qe=Fe(ke),Ue=Fe(Se);function He(e){return y(K,i=>{let[s,o]=te(i),a={},d=e[o];return y(d,(v,C)=>{let I=C.map(R=>s+R);a[s+v]=I}),a})}var Ne=He(Ee),Ae=He(Ce);function Tt(e,i){return e.map((s,o)=>s+i[o])}function de(e,i){return y(K,s=>{let[o,a]=te(s),d={},v=e[a],C=i[o];return y(v,(I,R)=>{let M=be(C,(A,L)=>C[A].length===v[I].length);if(M){let A=Tt(C[M],v[I]);d[M+I]=A}}),d})}var je=de(Ee,Se),Ge=de(Ee,ke),ze=de(Ce,Se),Je=de(Ce,ke);function Q(e,i){return y(K,s=>{let[o,a]=te(s);return be(K,d=>{let[v,C]=te(d);return i[o]===v&&e[a]===C})})}var yt=Q(Be,he),Pt=Q(Be,le),Ot=Q(fe,De),Kt=Q(fe,$e),Rt=Q(We,he),qt=Q(We,le),Mt=Q(ce,De),Lt=Q(ce,$e);function Ye(e,i){return y(K,s=>{const o=be(e[s],a=>e[s][a].length===i);if(o)return y(K,a=>{if(a===o)return e[s][o]})})}var Ze=e=>Ye(e,1),U=e=>Ye(e,0),$t=Ze(Ne),Dt=Ze(Ae),Ve=U(Ne),Xe=U(Ae),xe=U(je),et=U(Ge),tt=U(ze),it=U(Je),Bt=U(Qe),Wt=U(Ue);function Ft(e){return y(K,i=>{let s=kt(K,o=>!!e.map(a=>a[i]===o).find(Boolean));if(s.length>0)return s})}Ft([yt,Pt,Rt,qt,Ot,Kt,Mt,Lt]);function q(e){return y(K,i=>y(K,s=>{let o=e.find(a=>{var d;return(d=a[i])==null?void 0:d[s]});if(o){let a=o[i];if(a){let d=a[s];if(d)return d}}}))}var Qt=q([Ve,xe,et]),Ut=q([Xe,tt,it]),Ht=q([Wt,Bt]),jt=q([je,Ge,ze,Je]),Gt=q([Ne,Ae,Ue,Qe]);q([Qt,Ut,Ht]);q([jt,Gt]);var zt=e=>e.split("")[1]==="2",Jt=e=>e.split("")[1]==="7",rt=e=>e.split("")[1]!=="1",nt=e=>e.split("")[1]!=="8";function V(e,i){return y(K,s=>{if(i(s)&&e[s])return e[s]})}var Yt=V($t,zt),Zt=V(Dt,Jt),Vt=V(Ve,rt),Xt=V(Xe,nt);q([Yt,Vt]);q([Zt,Xt]);V(q([et,xe]),rt);V(q([it,tt]),nt);z.slice(0).reverse(),z.slice(0);var st="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",xt=e=>e.split("="),ot=35,at=String.fromCharCode(33),ei=e=>Z.indexOf(e)+1,lt=St(Z,e=>String.fromCharCode(ei(e)+ot)),pe=e=>lt[e]||at,ti=(()=>{let e={};return Nt.map((i,s)=>{z.map((o,a)=>{let d=i+o,v=String.fromCharCode(ot+Object.keys(lt).length+s*8+a-1);e[d]=v})}),e})(),ii=(e,i)=>ti[i+e]||at,ri=e=>{let[i,s]=xt(e),[o,a]=wt(i);return s?pe(o)+ii(a[0],s):pe(o)+pe(a)},Re=e=>e.length/2,qe=e=>e.slice(0,2),Me=e=>e.slice(2),ht=e=>e.slice(0,-2),ni=e=>e.slice(-2),G=class{constructor(e,i,s,o,a){this.id=e,this.fen=i,this.children=s,this.uci=o,this.comment=a,this.child_by_id=d=>this.children.find(v=>v.id===d)}get clone(){let e=this.children.map(i=>i.clone);return new G(this.id,this.fen,e,this.uci,this.comment)}get child_paths(){let e=this.children.flatMap(i=>i.child_paths);return e.length===0?[this.id]:e.map(i=>`${this.id}${i}`)}get lines(){return this.child_paths.map(e=>this.node_list(e))}node_list(e){return G.collect(this,i=>{const s=qe(e);if(s!=="")return e=Me(e),i.child_by_id(s)})}map_comments(e){let i=this.children.map(o=>o.map_comments(e)),s=e(this);return new G(this.id,this.fen,i,this.uci,s)}merge_node(e,i){const s=`${i}${e.id}`,o=this.node_at_path_or_undefined(s);return this.update_at(i,a=>{if(o){let d=o.comment;d?e.comment&&(d+=" "+e.comment):d=e.comment;let v=new G(o.id,o.fen,o.children,o.uci,d);a.children.splice(a.children.indexOf(o),1,v)}else a.children.push(e)})?s:void 0}delete_children(e){this.update_at(e,i=>{i.children.splice(0,i.children.length)})}delete_after(e,i){this.update_at(e,s=>{s.children.splice(s.children.findIndex(o=>o.id===i),1)})}add_node(e,i){const s=`${i}${e.id}`;return this.node_at_path_or_undefined(s)||this.update_at(i,a=>{a.children.push(e)})?s:void 0}update_at(e,i){let s=this.node_at_path_or_undefined(e);if(s)return i(s),s}node_at_path_or_undefined(e){if(e==="")return this;const i=this.child_by_id(qe(e));return i?i.node_at_path_or_undefined(Me(e)):void 0}},D=G;D.collect=(e,i)=>{let s=[e],o=e,a;for(;a=i(o);)s.push(a),o=a;return s};D.breadfirst=(e,i)=>{let s=[["",e]];for(;s.length>0;){let[o,a]=s.shift();if(i(o,a))break;for(let d=0;d<a.children.length;d++)s.push([o+a.children[d].id,a.children[d]])}};D.make_root=(e,i)=>new G("",e,[],void 0,i);D.make_branch=(e,i,s)=>new G(ri(i),e,[],i,s);var ie=class{},$=ie;$.write_root=e=>({fen:e.fen,comment:e.comment});$.read_root=e=>D.make_root(e.fen,e.comment);$.write_node=e=>({fen:e.fen,uci:e.uci,comment:e.comment});$.read_node=e=>D.make_branch(e.fen,e.uci,e.comment);$.read=e=>{let[i,s]=e;s.sort((a,d)=>Re(a[0])-Re(d[0]));let o=ie.read_root(i);return s.forEach(([a,d])=>o.add_node(ie.read_node(d),ht(a))),o};$.apply=e=>{function i(s,o){let a=`${o}${s.id}`;return[...s.children.flatMap(d=>i(d,a)),[a,ie.write_node(s)]]}return[ie.write_root(e),e.children.flatMap(s=>i(s,""))]};var ge={};(function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.Chess=e.validateFen=e.SQUARES=e.DEFAULT_POSITION=e.KING=e.QUEEN=e.ROOK=e.BISHOP=e.KNIGHT=e.PAWN=e.BLACK=e.WHITE=void 0,e.WHITE="w",e.BLACK="b",e.PAWN="p",e.KNIGHT="n",e.BISHOP="b",e.ROOK="r",e.QUEEN="q",e.KING="k",e.DEFAULT_POSITION="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1";const i=-1,s={NORMAL:"n",CAPTURE:"c",BIG_PAWN:"b",EP_CAPTURE:"e",PROMOTION:"p",KSIDE_CASTLE:"k",QSIDE_CASTLE:"q"};e.SQUARES=["a8","b8","c8","d8","e8","f8","g8","h8","a7","b7","c7","d7","e7","f7","g7","h7","a6","b6","c6","d6","e6","f6","g6","h6","a5","b5","c5","d5","e5","f5","g5","h5","a4","b4","c4","d4","e4","f4","g4","h4","a3","b3","c3","d3","e3","f3","g3","h3","a2","b2","c2","d2","e2","f2","g2","h2","a1","b1","c1","d1","e1","f1","g1","h1"];const o={NORMAL:1,CAPTURE:2,BIG_PAWN:4,EP_CAPTURE:8,PROMOTION:16,KSIDE_CASTLE:32,QSIDE_CASTLE:64},a={a8:0,b8:1,c8:2,d8:3,e8:4,f8:5,g8:6,h8:7,a7:16,b7:17,c7:18,d7:19,e7:20,f7:21,g7:22,h7:23,a6:32,b6:33,c6:34,d6:35,e6:36,f6:37,g6:38,h6:39,a5:48,b5:49,c5:50,d5:51,e5:52,f5:53,g5:54,h5:55,a4:64,b4:65,c4:66,d4:67,e4:68,f4:69,g4:70,h4:71,a3:80,b3:81,c3:82,d3:83,e3:84,f3:85,g3:86,h3:87,a2:96,b2:97,c2:98,d2:99,e2:100,f2:101,g2:102,h2:103,a1:112,b1:113,c1:114,d1:115,e1:116,f1:117,g1:118,h1:119},d={b:[16,32,17,15],w:[-16,-32,-17,-15]},v={n:[-18,-33,-31,-14,18,33,31,14],b:[-17,-15,17,15],r:[-16,1,16,-1],q:[-17,-16,-15,1,17,16,15,-1],k:[-17,-16,-15,1,17,16,15,-1]},C=[20,0,0,0,0,0,0,24,0,0,0,0,0,0,20,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,24,24,24,24,24,24,56,0,56,24,24,24,24,24,24,0,0,0,0,0,0,2,53,56,53,2,0,0,0,0,0,0,0,0,0,0,0,20,2,24,2,20,0,0,0,0,0,0,0,0,0,0,20,0,0,24,0,0,20,0,0,0,0,0,0,0,0,20,0,0,0,24,0,0,0,20,0,0,0,0,0,0,20,0,0,0,0,24,0,0,0,0,20,0,0,0,0,20,0,0,0,0,0,24,0,0,0,0,0,20,0,0,20,0,0,0,0,0,0,24,0,0,0,0,0,0,20],I=[17,0,0,0,0,0,0,16,0,0,0,0,0,0,15,0,0,17,0,0,0,0,0,16,0,0,0,0,0,15,0,0,0,0,17,0,0,0,0,16,0,0,0,0,15,0,0,0,0,0,0,17,0,0,0,16,0,0,0,15,0,0,0,0,0,0,0,0,17,0,0,16,0,0,15,0,0,0,0,0,0,0,0,0,0,17,0,16,0,15,0,0,0,0,0,0,0,0,0,0,0,0,17,16,15,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,-1,-1,-1,-1,-1,-1,-1,0,0,0,0,0,0,0,-15,-16,-17,0,0,0,0,0,0,0,0,0,0,0,0,-15,0,-16,0,-17,0,0,0,0,0,0,0,0,0,0,-15,0,0,-16,0,0,-17,0,0,0,0,0,0,0,0,-15,0,0,0,-16,0,0,0,-17,0,0,0,0,0,0,-15,0,0,0,0,-16,0,0,0,0,-17,0,0,0,0,-15,0,0,0,0,0,-16,0,0,0,0,0,-17,0,0,-15,0,0,0,0,0,0,-16,0,0,0,0,0,0,-17],R={p:1,n:2,b:4,r:8,q:16,k:32},M="pnbrqkPNBRQK",A=[e.KNIGHT,e.BISHOP,e.ROOK,e.QUEEN],L=7,X=6,ft=1,ct=0,B={w:[{square:a.a1,flag:o.QSIDE_CASTLE},{square:a.h1,flag:o.KSIDE_CASTLE}],b:[{square:a.a8,flag:o.QSIDE_CASTLE},{square:a.h8,flag:o.KSIDE_CASTLE}]},ut={b:ft,w:X},_t=["1-0","0-1","1/2-1/2","*"];function H(k){return k>>4}function x(k){return k&15}function Ie(k){return"0123456789".indexOf(k)!==-1}function P(k){const t=x(k),r=H(k);return"abcdefgh".substring(t,t+1)+"87654321".substring(r,r+1)}function re(k){return k===e.WHITE?e.BLACK:e.WHITE}function we(k){const t=[];t[0]="No errors.",t[1]="FEN string must contain six space-delimited fields.",t[2]="6th field (move number) must be a positive integer.",t[3]="5th field (half move counter) must be a non-negative integer.",t[4]="4th field (en-passant square) is invalid.",t[5]="3rd field (castling availability) is invalid.",t[6]="2nd field (side to move) is invalid.",t[7]="1st field (piece positions) does not contain 8 '/'-delimited rows.",t[8]="1st field (piece positions) is invalid [consecutive numbers].",t[9]="1st field (piece positions) is invalid [invalid piece].",t[10]="1st field (piece positions) is invalid [row too large].",t[11]="Illegal en-passant square";const r=k.split(/\s+/);if(r.length!==6)return{valid:!1,errorNumber:1,error:t[1]};const n=parseInt(r[5],10);if(isNaN(n)||n<=0)return{valid:!1,errorNumber:2,error:t[2]};const h=parseInt(r[4],10);if(isNaN(h)||h<0)return{valid:!1,errorNumber:3,error:t[3]};if(!/^(-|[abcdefgh][36])$/.test(r[3]))return{valid:!1,errorNumber:4,error:t[4]};if(!/^(KQ?k?q?|Qk?q?|kq?|q|-)$/.test(r[2]))return{valid:!1,errorNumber:5,error:t[5]};if(!/^(w|b)$/.test(r[1]))return{valid:!1,errorNumber:6,error:t[6]};const l=r[0].split("/");if(l.length!==8)return{valid:!1,errorNumber:7,error:t[7]};for(let u=0;u<l.length;u++){let f=0,c=!1;for(let p=0;p<l[u].length;p++)if(Ie(l[u][p])){if(c)return{valid:!1,errorNumber:8,error:t[8]};f+=parseInt(l[u][p],10),c=!0}else{if(!/^[prnbqkPRNBQK]$/.test(l[u][p]))return{valid:!1,errorNumber:9,error:t[9]};f+=1,c=!1}if(f!==8)return{valid:!1,errorNumber:10,error:t[10]}}return r[3][1]=="3"&&r[1]=="w"||r[3][1]=="6"&&r[1]=="b"?{valid:!1,errorNumber:11,error:t[11]}:{valid:!0,errorNumber:0,error:t[0]}}e.validateFen=we;function dt(k,t){const r=k.from,n=k.to,h=k.piece;let l=0,u=0,f=0;for(let c=0,p=t.length;c<p;c++){const E=t[c].from,N=t[c].to,_=t[c].piece;h===_&&r!==E&&n===N&&(l++,H(r)===H(E)&&u++,x(r)===x(E)&&f++)}return l>0?u>0&&f>0?P(r):f>0?P(r).charAt(1):P(r).charAt(0):""}function W(k,t,r,n,h,l=void 0,u=o.NORMAL){const f=H(n);if(h===e.PAWN&&(f===L||f===ct))for(let c=0;c<A.length;c++){const p=A[c];k.push({color:t,from:r,to:n,piece:h,captured:l,promotion:p,flags:u|o.PROMOTION})}else k.push({color:t,from:r,to:n,piece:h,captured:l,promotion:void 0,flags:u})}function Te(k){let t=k.charAt(0);return t>="a"&&t<="h"?k.match(/[a-h]\d.*[a-h]\d/)?void 0:e.PAWN:(t=t.toLowerCase(),t==="o"?e.KING:t)}function ye(k){return k.replace(/=/,"").replace(/[+#]?[?!]*$/,"")}class mt{constructor(t=e.DEFAULT_POSITION){this._board=new Array(128),this._turn=e.WHITE,this._header={},this._kings={w:i,b:i},this._epSquare=-1,this._halfMoves=0,this._moveNumber=0,this._history=[],this._comments={},this._castling={w:0,b:0},this.load(t)}clear(t=!1){this._board=new Array(128),this._kings={w:i,b:i},this._turn=e.WHITE,this._castling={w:0,b:0},this._epSquare=i,this._halfMoves=0,this._moveNumber=1,this._history=[],this._comments={},this._header=t?this._header:{},this._updateSetup(this.fen())}load(t,r=!1){const n=t.split(/\s+/),h=n[0];let l=0;if(!we(t).valid)return!1;this.clear(r);for(let u=0;u<h.length;u++){const f=h.charAt(u);if(f==="/")l+=8;else if(Ie(f))l+=parseInt(f,10);else{const c=f<"a"?e.WHITE:e.BLACK;this.put({type:f.toLowerCase(),color:c},P(l)),l++}}return this._turn=n[1],n[2].indexOf("K")>-1&&(this._castling.w|=o.KSIDE_CASTLE),n[2].indexOf("Q")>-1&&(this._castling.w|=o.QSIDE_CASTLE),n[2].indexOf("k")>-1&&(this._castling.b|=o.KSIDE_CASTLE),n[2].indexOf("q")>-1&&(this._castling.b|=o.QSIDE_CASTLE),this._epSquare=n[3]==="-"?i:a[n[3]],this._halfMoves=parseInt(n[4],10),this._moveNumber=parseInt(n[5],10),this._updateSetup(this.fen()),!0}fen(){let t=0,r="";for(let l=a.a8;l<=a.h1;l++){if(this._board[l]){t>0&&(r+=t,t=0);const{color:u,type:f}=this._board[l];r+=u===e.WHITE?f.toUpperCase():f.toLowerCase()}else t++;l+1&136&&(t>0&&(r+=t),l!==a.h1&&(r+="/"),t=0,l+=8)}let n="";this._castling[e.WHITE]&o.KSIDE_CASTLE&&(n+="K"),this._castling[e.WHITE]&o.QSIDE_CASTLE&&(n+="Q"),this._castling[e.BLACK]&o.KSIDE_CASTLE&&(n+="k"),this._castling[e.BLACK]&o.QSIDE_CASTLE&&(n+="q"),n=n||"-";const h=this._epSquare===i?"-":P(this._epSquare);return[r,this._turn,n,h,this._halfMoves,this._moveNumber].join(" ")}_updateSetup(t){this._history.length>0||(t!==e.DEFAULT_POSITION?(this._header.SetUp="1",this._header.FEN=t):(delete this._header.SetUp,delete this._header.FEN))}reset(){this.load(e.DEFAULT_POSITION)}get(t){return this._board[a[t]]||!1}put({type:t,color:r},n){if(M.indexOf(t.toLowerCase())===-1||!(n in a))return!1;const h=a[n];return t==e.KING&&!(this._kings[r]==i||this._kings[r]==h)?!1:(this._board[h]={type:t,color:r},t===e.KING&&(this._kings[r]=h),this._updateSetup(this.fen()),!0)}remove(t){const r=this.get(t);return delete this._board[a[t]],r&&r.type===e.KING&&(this._kings[r.color]=i),this._updateSetup(this.fen()),r}_attacked(t,r){for(let n=a.a8;n<=a.h1;n++){if(n&136){n+=7;continue}if(this._board[n]===void 0||this._board[n].color!==t)continue;const h=this._board[n],l=n-r,u=l+119;if(C[u]&R[h.type]){if(h.type===e.PAWN){if(l>0){if(h.color===e.WHITE)return!0}else if(h.color===e.BLACK)return!0;continue}if(h.type==="n"||h.type==="k")return!0;const f=I[u];let c=n+f,p=!1;for(;c!==r;){if(this._board[c]!=null){p=!0;break}c+=f}if(!p)return!0}}return!1}_isKingAttacked(t){return this._attacked(re(t),this._kings[t])}isCheck(){return this._isKingAttacked(this._turn)}inCheck(){return this.isCheck()}isCheckmate(){return this.isCheck()&&this._moves().length===0}isStalemate(){return!this.isCheck()&&this._moves().length===0}isInsufficientMaterial(){const t={b:0,n:0,r:0,q:0,k:0,p:0},r=[];let n=0,h=0;for(let l=a.a8;l<=a.h1;l++){if(h=(h+1)%2,l&136){l+=7;continue}const u=this._board[l];u&&(t[u.type]=u.type in t?t[u.type]+1:1,u.type===e.BISHOP&&r.push(h),n++)}if(n===2)return!0;if(n===3&&(t[e.BISHOP]===1||t[e.KNIGHT]===1))return!0;if(n===t[e.BISHOP]+2){let l=0;const u=r.length;for(let f=0;f<u;f++)l+=r[f];if(l===0||l===u)return!0}return!1}isThreefoldRepetition(){const t=[],r={};let n=!1;for(;;){const h=this._undoMove();if(!h)break;t.push(h)}for(;;){const h=this.fen().split(" ").slice(0,4).join(" ");r[h]=h in r?r[h]+1:1,r[h]>=3&&(n=!0);const l=t.pop();if(l)this._makeMove(l);else break}return n}isDraw(){return this._halfMoves>=100||this.isStalemate()||this.isInsufficientMaterial()||this.isThreefoldRepetition()}isGameOver(){return this.isCheckmate()||this.isStalemate()||this.isDraw()}moves({verbose:t=!1,square:r=void 0}={}){const n=this._moves({square:r});return t?n.map(h=>this._makePretty(h)):n.map(h=>this._moveToSan(h,n))}_moves({legal:t=!0,piece:r=void 0,square:n=void 0}={}){var h;const l=n?n.toLowerCase():void 0,u=r==null?void 0:r.toLowerCase(),f=[],c=this._turn,p=re(c);let E=a.a8,N=a.h1,_=!1;if(l)if(l in a)E=N=a[l],_=!0;else return[];for(let m=E;m<=N;m++){if(m&136){m+=7;continue}if(!this._board[m]||this._board[m].color===p)continue;const{type:b}=this._board[m];let S;if(b===e.PAWN){if(u&&u!==b)continue;S=m+d[c][0],this._board[S]||(W(f,c,m,S,e.PAWN),S=m+d[c][1],ut[c]===H(m)&&!this._board[S]&&W(f,c,m,S,e.PAWN,void 0,o.BIG_PAWN));for(let T=2;T<4;T++)S=m+d[c][T],!(S&136)&&(((h=this._board[S])===null||h===void 0?void 0:h.color)===p?W(f,c,m,S,e.PAWN,this._board[S].type,o.CAPTURE):S===this._epSquare&&W(f,c,m,S,e.PAWN,e.PAWN,o.EP_CAPTURE))}else{if(u&&u!==b)continue;for(let T=0,J=v[b].length;T<J;T++){const g=v[b][T];for(S=m;S+=g,!(S&136);){if(!this._board[S])W(f,c,m,S,b);else{if(this._board[S].color===c)break;W(f,c,m,S,b,this._board[S].type,o.CAPTURE);break}if(b===e.KNIGHT||b===e.KING)break}}}}if((u===void 0||u===e.KING)&&(!_||N===this._kings[c])){if(this._castling[c]&o.KSIDE_CASTLE){const m=this._kings[c],b=m+2;!this._board[m+1]&&!this._board[b]&&!this._attacked(p,this._kings[c])&&!this._attacked(p,m+1)&&!this._attacked(p,b)&&W(f,c,this._kings[c],b,e.KING,void 0,o.KSIDE_CASTLE)}if(this._castling[c]&o.QSIDE_CASTLE){const m=this._kings[c],b=m-2;!this._board[m-1]&&!this._board[m-2]&&!this._board[m-3]&&!this._attacked(p,this._kings[c])&&!this._attacked(p,m-1)&&!this._attacked(p,b)&&W(f,c,this._kings[c],b,e.KING,void 0,o.QSIDE_CASTLE)}}if(!t)return f;const w=[];for(let m=0,b=f.length;m<b;m++)this._makeMove(f[m]),this._isKingAttacked(c)||w.push(f[m]),this._undoMove();return w}move(t,{sloppy:r=!1}={}){let n=null;if(typeof t=="string")n=this._moveFromSan(t,r);else if(typeof t=="object"){const l=this._moves();for(let u=0,f=l.length;u<f;u++)if(t.from===P(l[u].from)&&t.to===P(l[u].to)&&(!("promotion"in l[u])||t.promotion===l[u].promotion)){n=l[u];break}}if(!n)return null;const h=this._makePretty(n);return this._makeMove(n),h}_push(t){this._history.push({move:t,kings:{b:this._kings.b,w:this._kings.w},turn:this._turn,castling:{b:this._castling.b,w:this._castling.w},epSquare:this._epSquare,halfMoves:this._halfMoves,moveNumber:this._moveNumber})}_makeMove(t){const r=this._turn,n=re(r);if(this._push(t),this._board[t.to]=this._board[t.from],delete this._board[t.from],t.flags&o.EP_CAPTURE&&(this._turn===e.BLACK?delete this._board[t.to-16]:delete this._board[t.to+16]),t.promotion&&(this._board[t.to]={type:t.promotion,color:r}),this._board[t.to].type===e.KING){if(this._kings[r]=t.to,t.flags&o.KSIDE_CASTLE){const h=t.to-1,l=t.to+1;this._board[h]=this._board[l],delete this._board[l]}else if(t.flags&o.QSIDE_CASTLE){const h=t.to+1,l=t.to-2;this._board[h]=this._board[l],delete this._board[l]}this._castling[r]=0}if(this._castling[r]){for(let h=0,l=B[r].length;h<l;h++)if(t.from===B[r][h].square&&this._castling[r]&B[r][h].flag){this._castling[r]^=B[r][h].flag;break}}if(this._castling[n]){for(let h=0,l=B[n].length;h<l;h++)if(t.to===B[n][h].square&&this._castling[n]&B[n][h].flag){this._castling[n]^=B[n][h].flag;break}}t.flags&o.BIG_PAWN?r===e.BLACK?this._epSquare=t.to-16:this._epSquare=t.to+16:this._epSquare=i,t.piece===e.PAWN?this._halfMoves=0:t.flags&(o.CAPTURE|o.EP_CAPTURE)?this._halfMoves=0:this._halfMoves++,r===e.BLACK&&this._moveNumber++,this._turn=n}undo(){const t=this._undoMove();return t?this._makePretty(t):null}_undoMove(){const t=this._history.pop();if(t===void 0)return null;const r=t.move;this._kings=t.kings,this._turn=t.turn,this._castling=t.castling,this._epSquare=t.epSquare,this._halfMoves=t.halfMoves,this._moveNumber=t.moveNumber;const n=this._turn,h=re(n);if(this._board[r.from]=this._board[r.to],this._board[r.from].type=r.piece,delete this._board[r.to],r.captured)if(r.flags&o.EP_CAPTURE){let l;n===e.BLACK?l=r.to-16:l=r.to+16,this._board[l]={type:e.PAWN,color:h}}else this._board[r.to]={type:r.captured,color:h};if(r.flags&(o.KSIDE_CASTLE|o.QSIDE_CASTLE)){let l,u;r.flags&o.KSIDE_CASTLE?(l=r.to+1,u=r.to-1):(l=r.to-2,u=r.to+1),this._board[l]=this._board[u],delete this._board[u]}return r}pgn({newline:t=`
`,maxWidth:r=0}={}){const n=[];let h=!1;for(const _ in this._header)n.push("["+_+' "'+this._header[_]+'"]'+t),h=!0;h&&this._history.length&&n.push(t);const l=_=>{const w=this._comments[this.fen()];if(typeof w<"u"){const m=_.length>0?" ":"";_=`${_}${m}{${w}}`}return _},u=[];for(;this._history.length>0;)u.push(this._undoMove());const f=[];let c="";for(u.length===0&&f.push(l(""));u.length>0;){c=l(c);const _=u.pop();if(!_)break;if(!this._history.length&&_.color==="b"){const w=`${this._moveNumber}. ...`;c=c?`${c} ${w}`:w}else _.color==="w"&&(c.length&&f.push(c),c=this._moveNumber+".");c=c+" "+this._moveToSan(_,this._moves({legal:!0})),this._makeMove(_)}if(c.length&&f.push(l(c)),typeof this._header.Result<"u"&&f.push(this._header.Result),r===0)return n.join("")+f.join(" ");const p=function(){return n.length>0&&n[n.length-1]===" "?(n.pop(),!0):!1},E=function(_,w){for(const m of w.split(" "))if(m){if(_+m.length>r){for(;p();)_--;n.push(t),_=0}n.push(m),_+=m.length,n.push(" "),_++}return p()&&_--,_};let N=0;for(let _=0;_<f.length;_++){if(N+f[_].length>r&&f[_].includes("{")){N=E(N,f[_]);continue}N+f[_].length>r&&_!==0?(n[n.length-1]===" "&&n.pop(),n.push(t),N=0):_!==0&&(n.push(" "),N++),n.push(f[_]),N+=f[_].length}return n.join("")}header(...t){for(let r=0;r<t.length;r+=2)typeof t[r]=="string"&&typeof t[r+1]=="string"&&(this._header[t[r]]=t[r+1]);return this._header}loadPgn(t,{sloppy:r=!1,newlineChar:n=`\r?
`}={}){function h(g){return g.replace(/\\/g,"\\")}function l(g){const O={},F=g.split(new RegExp(h(n)));let me="",Pe="";for(let ne=0;ne<F.length;ne++){const Oe=/^\s*\[([A-Za-z]+)\s*"(.*)"\s*\]\s*$/;me=F[ne].replace(Oe,"$1"),Pe=F[ne].replace(Oe,"$2"),me.trim().length>0&&(O[me]=Pe)}return O}t=t.trim();const f=new RegExp("^(\\[((?:"+h(n)+")|.)*\\])(?:\\s*"+h(n)+"){2}").exec(t),c=f&&f.length>=2?f[1]:"";this.reset();const p=l(c);let E="";for(const g in p)g.toLowerCase()==="fen"&&(E=p[g]),this.header(g,p[g]);if(r){if(E&&!this.load(E,!0))return!1}else if(p.SetUp==="1"&&!("FEN"in p&&this.load(p.FEN,!0)))return!1;function N(g){return Array.from(g).map(function(O){return O.charCodeAt(0)<128?O.charCodeAt(0).toString(16):encodeURIComponent(O).replace(/%/g,"").toLowerCase()}).join("")}function _(g){return g.length==0?"":decodeURIComponent("%"+(g.match(/.{1,2}/g)||[]).join("%"))}const w=function(g){return g=g.replace(new RegExp(h(n),"g")," "),`{${N(g.slice(1,g.length-1))}}`},m=function(g){if(g.startsWith("{")&&g.endsWith("}"))return _(g.slice(1,g.length-1))};let b=t.replace(c,"").replace(new RegExp(`({[^}]*})+?|;([^${h(n)}]*)`,"g"),function(g,O,F){return O!==void 0?w(O):" "+w(`{${F.slice(1)}}`)}).replace(new RegExp(h(n),"g")," ");const S=/(\([^()]+\))+?/g;for(;S.test(b);)b=b.replace(S,"");b=b.replace(/\d+\.(\.\.)?/g,""),b=b.replace(/\.\.\./g,""),b=b.replace(/\$\d+/g,"");let T=b.trim().split(new RegExp(/\s+/));T=T.join(",").replace(/,,+/g,",").split(",");let J="";for(let g=0;g<T.length;g++){const O=m(T[g]);if(O!==void 0){this._comments[this.fen()]=O;continue}const F=this._moveFromSan(T[g],r);if(F==null)if(_t.indexOf(T[g])>-1)J=T[g];else return!1;else J="",this._makeMove(F)}return J&&Object.keys(this._header).length&&!this._header.Result&&this.header("Result",J),!0}_moveToSan(t,r){let n="";if(t.flags&o.KSIDE_CASTLE)n="O-O";else if(t.flags&o.QSIDE_CASTLE)n="O-O-O";else{if(t.piece!==e.PAWN){const h=dt(t,r);n+=t.piece.toUpperCase()+h}t.flags&(o.CAPTURE|o.EP_CAPTURE)&&(t.piece===e.PAWN&&(n+=P(t.from)[0]),n+="x"),n+=P(t.to),t.promotion&&(n+="="+t.promotion.toUpperCase())}return this._makeMove(t),this.isCheck()&&(this.isCheckmate()?n+="#":n+="+"),this._undoMove(),n}_moveFromSan(t,r=!1){const n=ye(t);let h=Te(n),l=this._moves({legal:!0,piece:h});for(let _=0,w=l.length;_<w;_++)if(n===ye(this._moveToSan(l[_],l)))return l[_];if(!r)return null;let u,f,c,p,E,N=!1;f=n.match(/([pnbrqkPNBRQK])?([a-h][1-8])x?-?([a-h][1-8])([qrbnQRBN])?/),f?(u=f[1],c=f[2],p=f[3],E=f[4],c.length==1&&(N=!0)):(f=n.match(/([pnbrqkPNBRQK])?([a-h]?[1-8]?)x?-?([a-h][1-8])([qrbnQRBN])?/),f&&(u=f[1],c=f[2],p=f[3],E=f[4],c.length==1&&(N=!0))),h=Te(n),l=this._moves({legal:!0,piece:u||h});for(let _=0,w=l.length;_<w;_++)if(c&&p){if((!u||u.toLowerCase()==l[_].piece)&&a[c]==l[_].from&&a[p]==l[_].to&&(!E||E.toLowerCase()==l[_].promotion))return l[_];if(N){const m=P(l[_].from);if((!u||u.toLowerCase()==l[_].piece)&&a[p]==l[_].to&&(c==m[0]||c==m[1])&&(!E||E.toLowerCase()==l[_].promotion))return l[_]}}return null}ascii(){let t=`   +------------------------+
`;for(let r=a.a8;r<=a.h1;r++){if(x(r)===0&&(t+=" "+"87654321"[H(r)]+" |"),this._board[r]){const n=this._board[r].type,l=this._board[r].color===e.WHITE?n.toUpperCase():n.toLowerCase();t+=" "+l+" "}else t+=" . ";r+1&136&&(t+=`|
`,r+=8)}return t+=`   +------------------------+
`,t+="     a  b  c  d  e  f  g  h",t}perft(t){const r=this._moves({legal:!1});let n=0;const h=this._turn;for(let l=0,u=r.length;l<u;l++)this._makeMove(r[l]),this._isKingAttacked(h)||(t-1>0?n+=this.perft(t-1):n++),this._undoMove();return n}_makePretty(t){const{color:r,piece:n,from:h,to:l,flags:u,captured:f,promotion:c}=t;let p="";for(const N in o)o[N]&u&&(p+=s[N]);const E={color:r,piece:n,from:P(h),to:P(l),san:this._moveToSan(t,this._moves({legal:!0})),flags:p};return f&&(E.captured=f),c&&(E.promotion=c),E}turn(){return this._turn}board(){const t=[];let r=[];for(let n=a.a8;n<=a.h1;n++)this._board[n]==null?r.push(null):r.push({square:P(n),type:this._board[n].type,color:this._board[n].color}),n+1&136&&(t.push(r),r=[],n+=8);return t}squareColor(t){if(t in a){const r=a[t];return(H(r)+x(r))%2===0?"light":"dark"}return null}history({verbose:t=!1}={}){const r=[],n=[];for(;this._history.length>0;)r.push(this._undoMove());for(;;){const h=r.pop();if(!h)break;t?n.push(this._makePretty(h)):n.push(this._moveToSan(h,this._moves())),this._makeMove(h)}return n}_pruneComments(){const t=[],r={},n=h=>{h in this._comments&&(r[h]=this._comments[h])};for(;this._history.length>0;)t.push(this._undoMove());for(n(this.fen());;){const h=t.pop();if(!h)break;this._makeMove(h),n(this.fen())}this._comments=r}getComment(){return this._comments[this.fen()]}setComment(t){this._comments[this.fen()]=t.replace("{","[").replace("}","]")}deleteComment(){const t=this._comments[this.fen()];return delete this._comments[this.fen()],t}getComments(){return this._pruneComments(),Object.keys(this._comments).map(t=>({fen:t,comment:this._comments[t]}))}deleteComments(){return this._pruneComments(),Object.keys(this._comments).map(t=>{const r=this._comments[t];return delete this._comments[t],{fen:t,comment:r}})}}e.Chess=mt})(ge);const ee=class{constructor(){j(this,"root")}get flat_export(){return $.apply(this.root)}get clone(){let i=new ee;return i.root=this.root.clone,i}node_at_path(i){return this.root.node_at_path_or_undefined(i)}moves(){let[i,s]=$.apply(this.root);return s.map(([o,a])=>{let[d,...v]=this.root.node_list(o),C=new ge.Chess(d.fen);v.forEach(M=>C.move(M.uci,{sloppy:!0}));let I=C.history(),R=I[I.length-1];return`${o} ${R} {${a.comment??""}}`})}chess(i){let[s,...o]=this.root.node_list(i),a=new ge.Chess(s.fen);return o.forEach(d=>a.move(d.uci,{sloppy:!0})),a}fen(i){return this.chess(i).fen()}add_move(i,s,o){let a=this.chess(i);a.move(s,{sloppy:!0});let d=a.fen(),v=D.make_branch(d,s,o);return this.root.add_node(v,i)}delete_children(i){this.root.delete_children(i)}delete_path(i){let s=ht(i),o=ni(i);this.root.delete_after(s,o)}delete_variation(i){let[s,...o]=this.root.node_list(i);if(o.length===0)return;let a=o[o.length-1].id;for(let C=o.length-2;C>=0;C--){let I=o[C];if(I.children.length>1)break;a=I.id+a}let d=i.slice(0,-a.length),v=a.slice(0,2);return this.root.delete_after(d,v),d}};let Y=ee;j(Y,"diff_trees",(i,s)=>{let[o,a]=i.flat_export,[d,v]=s.flat_export,C=[],I=[];a.forEach(([A,L])=>{v.find(X=>X[0]===A)||C.push(A)}),v.forEach(([A,L])=>{a.find(X=>X[0]===A)||I.push(A)});let R=[],M=[];return C.forEach(A=>{C.find(L=>L.length<A.length&&A.startsWith(L))||R.push(A)}),I.forEach(A=>{I.find(L=>L.length<A.length&&A.startsWith(L))||M.push(A)}),[R,M]}),j(Y,"make",()=>{let i=new ee;return i.root=D.make_root(st),i}),j(Y,"flat_doc",i=>{let s=new ee;return s.root=$.read(i),s});class si{constructor(){j(this,"_completed");this._completed=this._prop("completed",[])}_key(i){return["aidchess","challenges",i].join(".")}_prop(i,s){return Le(this._key(i),()=>s)}clear(){this._completed([])}complete(i){let s=this.completeds;s.push(i),this._completed(s)}get completeds(){return this._completed()}}const li=new si;class oi{constructor(){j(this,"_replay");this._replay=this._prop("replay",$.apply(D.make_root(st)))}_key(i){return["aidchess","replays",i].join(".")}_prop(i,s){return Le(this._key(i),()=>s)}set_replay(i){this._replay(i.flat_export)}get_replay(){return Y.flat_doc(this._replay())}}const hi=new oi;export{li as C,$ as F,D as N,Y as R,hi as a,ge as c,ht as i};
