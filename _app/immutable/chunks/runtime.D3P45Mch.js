var it=Array.isArray,st=Array.from,ct=Object.defineProperty,en=Object.getOwnPropertyDescriptor,bn=Object.getOwnPropertyDescriptors,vt=Object.prototype,pt=Array.prototype,mn=Object.getPrototypeOf;const dt=()=>{};function ht(n){return n()}function ln(n){for(var t=0;t<n.length;t++)n[t]()}const b=2,En=4,F=8,an=16,_=32,G=64,O=128,U=256,d=512,E=1024,S=2048,A=4096,R=8192,yt=16384,un=32768,_t=65536,wt=1<<18,jn=1<<19,on=Symbol("$state"),gt=Symbol("");function qn(n){return n===this.v}function Tn(n,t){return n!=n?t==t:n!==t||n!==null&&typeof n=="object"||typeof n=="function"}function fn(n){return!Tn(n,this.v)}function xt(n){throw new Error("effect_in_teardown")}function bt(){throw new Error("effect_in_unowned_derived")}function mt(n){throw new Error("effect_orphan")}function Et(){throw new Error("effect_update_depth_exceeded")}function jt(){throw new Error("hydration_failed")}function qt(n){throw new Error("props_invalid_value")}function Tt(){throw new Error("state_descriptors_fixed")}function Ot(){throw new Error("state_prototype_fixed")}function At(){throw new Error("state_unsafe_local_read")}function kt(){throw new Error("state_unsafe_mutation")}let $=!1;function Ct(){$=!0}function V(n){return{f:0,v:n,reactions:null,equals:qn,version:0}}function St(n){return An(V(n))}function On(n,t=!1){var e;const r=V(n);return t||(r.equals=fn),$&&s!==null&&s.l!==null&&((e=s.l).s??(e.s=[])).push(r),r}function Pt(n,t=!1){return An(On(n,t))}function An(n){return f!==null&&f.f&b&&(g===null?wr([n]):g.push(n)),n}function kn(n,t){return f!==null&&tn()&&f.f&(b|an)&&(g===null||!g.includes(n))&&kt(),Cn(n,t)}function Cn(n,t){return n.equals(t)||(n.v=t,n.version=rt(),Sn(n,E),tn()&&o!==null&&o.f&d&&!(o.f&_)&&(c!==null&&c.includes(n)?(w(o,E),rn(o)):T===null?gr([n]):T.push(n))),t}function Sn(n,t){var r=n.reactions;if(r!==null)for(var e=tn(),l=r.length,a=0;a<l;a++){var u=r[a],i=u.f;i&E||!e&&u===o||(w(u,t),i&(d|O)&&(i&b?Sn(u,S):rn(u)))}}const It=1,Mt=2,Nt=16,zt=1,Bt=2,Ft=4,Gt=8,Rt=16,$t=1,Ht=2,Pn="[",In="[!",Mn="]",sn={},Jt=Symbol();function cn(n){console.warn("hydration_mismatch")}let j=!1;function Kt(n){j=n}let y;function P(n){if(n===null)throw cn(),sn;return y=n}function Lt(){return P(q(y))}function Qt(n){if(j){if(q(y)!==null)throw cn(),sn;y=n}}function Ut(n=1){if(j){for(var t=n,r=y;t--;)r=q(r);y=r}}function Vt(){for(var n=0,t=y;;){if(t.nodeType===8){var r=t.data;if(r===Mn){if(n===0)return t;n-=1}else(r===Pn||r===In)&&(n+=1)}var e=q(t);t.remove(),t=e}}var Nn,zn,Bn;function Wt(){if(Nn===void 0){Nn=window;var n=Element.prototype,t=Node.prototype;zn=en(t,"firstChild").get,Bn=en(t,"nextSibling").get,n.__click=void 0,n.__className="",n.__attributes=null,n.__styles=null,n.__e=void 0,Text.prototype.__t=void 0}}function W(n=""){return document.createTextNode(n)}function X(n){return zn.call(n)}function q(n){return Bn.call(n)}function Xt(n,t){if(!j)return X(n);var r=X(y);if(r===null)r=y.appendChild(W());else if(t&&r.nodeType!==3){var e=W();return r==null||r.before(e),P(e),e}return P(r),r}function Yt(n,t){if(!j){var r=X(n);return r instanceof Comment&&r.data===""?q(r):r}return y}function Zt(n,t=1,r=!1){let e=j?y:n;for(;t--;)e=q(e);if(!j)return e;var l=e.nodeType;if(r&&l!==3){var a=W();return e==null||e.before(a),P(a),a}return P(e),e}function Dt(n){n.textContent=""}function Fn(n){var t=b|E;o===null?t|=O:o.f|=jn;const r={children:null,ctx:s,deps:null,equals:qn,f:t,fn:n,reactions:null,v:null,version:0,parent:o};if(f!==null&&f.f&b){var e=f;(e.children??(e.children=[])).push(r)}return r}function nr(n){const t=Fn(n);return t.equals=fn,t}function Gn(n){var t=n.children;if(t!==null){n.children=null;for(var r=0;r<t.length;r+=1){var e=t[r];e.f&b?vn(e):k(e)}}}function Rn(n){var t,r=o;K(n.parent);try{Gn(n),t=et(n)}finally{K(r)}return t}function $n(n){var t=Rn(n),r=(z||n.f&O)&&n.deps!==null?S:d;w(n,r),n.equals(t)||(n.v=t,n.version=rt())}function vn(n){Gn(n),L(n,0),w(n,R),n.v=n.children=n.deps=n.ctx=n.reactions=null}function Hn(n){o===null&&f===null&&mt(),f!==null&&f.f&O&&bt(),_n&&xt()}function tr(n,t){var r=t.last;r===null?t.last=t.first=n:(r.next=n,n.prev=r,t.last=n)}function I(n,t,r,e=!0){var l=(n&G)!==0,a=o,u={ctx:s,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:n|E,first:null,fn:t,last:null,next:null,parent:l?null:a,prev:null,teardown:null,transitions:null,version:0};if(r){var i=M;try{Dn(!0),Q(u),u.f|=yt}catch(v){throw k(u),v}finally{Dn(i)}}else t!==null&&rn(u);var x=r&&u.deps===null&&u.first===null&&u.nodes_start===null&&u.teardown===null&&(u.f&jn)===0;if(!x&&!l&&e&&(a!==null&&tr(u,a),f!==null&&f.f&b)){var m=f;(m.children??(m.children=[])).push(u)}return u}function rr(n){const t=I(F,null,!1);return w(t,d),t.teardown=n,t}function er(n){Hn();var t=o!==null&&(o.f&_)!==0&&s!==null&&!s.m;if(t){var r=s;(r.e??(r.e=[])).push({fn:n,effect:o,reaction:f})}else{var e=pn(n);return e}}function lr(n){return Hn(),Y(n)}function ar(n){const t=I(G,n,!0);return()=>{k(t)}}function pn(n){return I(En,n,!1)}function ur(n,t){var r=s,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=Y(()=>{n(),!e.ran&&(e.ran=!0,kn(r.l.r2,!0),ft(t))})}function or(){var n=s;Y(()=>{if(ot(n.l.r2)){for(var t of n.l.r1){var r=t.effect;r.f&d&&w(r,S),B(r)&&Q(r),t.ran=!1}n.l.r2.v=!1}})}function Y(n){return I(F,n,!0)}function fr(n){return Jn(n)}function Jn(n,t=0){return I(F|an|t,n,!0)}function ir(n,t=!0){return I(F|_,n,!0,t)}function Kn(n){var t=n.teardown;if(t!==null){const r=_n,e=f;nt(!0),J(null);try{t.call(null)}finally{nt(r),J(e)}}}function Ln(n){var t=n.deriveds;if(t!==null){n.deriveds=null;for(var r=0;r<t.length;r+=1)vn(t[r])}}function Qn(n,t=!1){var r=n.first;for(n.first=n.last=null;r!==null;){var e=r.next;k(r,t),r=e}}function sr(n){for(var t=n.first;t!==null;){var r=t.next;t.f&_||k(t),t=r}}function k(n,t=!0){var r=!1;if((t||n.f&wt)&&n.nodes_start!==null){for(var e=n.nodes_start,l=n.nodes_end;e!==null;){var a=e===l?null:q(e);e.remove(),e=a}r=!0}Qn(n,t&&!r),Ln(n),L(n,0),w(n,R);var u=n.transitions;if(u!==null)for(const x of u)x.stop();Kn(n);var i=n.parent;i!==null&&i.first!==null&&Un(n),n.next=n.prev=n.teardown=n.ctx=n.deps=n.parent=n.fn=n.nodes_start=n.nodes_end=null}function Un(n){var t=n.parent,r=n.prev,e=n.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),t!==null&&(t.first===n&&(t.first=e),t.last===n&&(t.last=r))}function cr(n,t){var r=[];dn(n,r,!0),Vn(r,()=>{k(n),t&&t()})}function Vn(n,t){var r=n.length;if(r>0){var e=()=>--r||t();for(var l of n)l.out(e)}else t()}function dn(n,t,r){if(!(n.f&A)){if(n.f^=A,n.transitions!==null)for(const u of n.transitions)(u.is_global||r)&&t.push(u);for(var e=n.first;e!==null;){var l=e.next,a=(e.f&un)!==0||(e.f&_)!==0;dn(e,t,a?r:!1),e=l}}}function vr(n){Wn(n,!0)}function Wn(n,t){if(n.f&A){B(n)&&Q(n),n.f^=A;for(var r=n.first;r!==null;){var e=r.next,l=(r.f&un)!==0||(r.f&_)!==0;Wn(r,l?t:!1),r=e}if(n.transitions!==null)for(const a of n.transitions)(a.is_global||t)&&a.in()}}const pr=typeof requestIdleCallback>"u"?n=>setTimeout(n,1):requestIdleCallback;let Z=!1,D=!1,hn=[],yn=[];function Xn(){Z=!1;const n=hn.slice();hn=[],ln(n)}function Yn(){D=!1;const n=yn.slice();yn=[],ln(n)}function dr(n){Z||(Z=!0,queueMicrotask(Xn)),hn.push(n)}function hr(n){D||(D=!0,pr(Yn)),yn.push(n)}function yr(){Z&&Xn(),D&&Yn()}const Zn=0,_r=1;let nn=Zn,H=!1,M=!1,_n=!1;function Dn(n){M=n}function nt(n){_n=n}let C=[],N=0,f=null;function J(n){f=n}let o=null;function K(n){o=n}let g=null;function wr(n){g=n}let c=null,h=0,T=null;function gr(n){T=n}let tt=0,z=!1,s=null;function rt(){return++tt}function tn(){return!$||s!==null&&s.l===null}function B(n){var u,i;var t=n.f;if(t&E)return!0;if(t&S){var r=n.deps,e=(t&O)!==0;if(r!==null){var l;if(t&U){for(l=0;l<r.length;l++)((u=r[l]).reactions??(u.reactions=[])).push(n);n.f^=U}for(l=0;l<r.length;l++){var a=r[l];if(B(a)&&$n(a),e&&o!==null&&!z&&!((i=a==null?void 0:a.reactions)!=null&&i.includes(n))&&(a.reactions??(a.reactions=[])).push(n),a.version>n.version)return!0}}e||w(n,d)}return!1}function xr(n,t,r){throw n}function et(n){var xn;var t=c,r=h,e=T,l=f,a=z,u=g,i=s,x=n.f;c=null,h=0,T=null,f=x&(_|G)?null:n,z=!M&&(x&O)!==0,g=null,s=n.ctx;try{var m=(0,n.fn)(),v=n.deps;if(c!==null){var p;if(L(n,h),v!==null&&h>0)for(v.length=h+c.length,p=0;p<c.length;p++)v[h+p]=c[p];else n.deps=v=c;if(!z)for(p=h;p<v.length;p++)((xn=v[p]).reactions??(xn.reactions=[])).push(n)}else v!==null&&h<v.length&&(L(n,h),v.length=h);return m}finally{c=t,h=r,T=e,f=l,z=a,g=u,s=i}}function br(n,t){let r=t.reactions;if(r!==null){var e=r.indexOf(n);if(e!==-1){var l=r.length-1;l===0?r=t.reactions=null:(r[e]=r[l],r.pop())}}r===null&&t.f&b&&(c===null||!c.includes(t))&&(w(t,S),t.f&(O|U)||(t.f^=U),L(t,0))}function L(n,t){var r=n.deps;if(r!==null)for(var e=t;e<r.length;e++)br(n,r[e])}function Q(n){var t=n.f;if(!(t&R)){w(n,d);var r=o;o=n;try{t&an?sr(n):Qn(n),Ln(n),Kn(n);var e=et(n);n.teardown=typeof e=="function"?e:null,n.version=tt}catch(l){xr(l)}finally{o=r}}}function lt(){N>1e3&&(N=0,Et()),N++}function at(n){var t=n.length;if(t!==0){lt();var r=M;M=!0;try{for(var e=0;e<t;e++){var l=n[e];l.f&d||(l.f^=d);var a=[];ut(l,a),mr(a)}}finally{M=r}}}function mr(n){var t=n.length;if(t!==0)for(var r=0;r<t;r++){var e=n[r];!(e.f&(R|A))&&B(e)&&(Q(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Un(e):e.fn=null))}}function Er(){if(H=!1,N>1001)return;const n=C;C=[],at(n),H||(N=0)}function rn(n){nn===Zn&&(H||(H=!0,queueMicrotask(Er)));for(var t=n;t.parent!==null;){t=t.parent;var r=t.f;if(r&(G|_)){if(!(r&d))return;t.f^=d}}C.push(t)}function ut(n,t){var r=n.first,e=[];n:for(;r!==null;){var l=r.f,a=(l&_)!==0,u=a&&(l&d)!==0;if(!u&&!(l&A))if(l&F){a?r.f^=d:B(r)&&Q(r);var i=r.first;if(i!==null){r=i;continue}}else l&En&&e.push(r);var x=r.next;if(x===null){let p=r.parent;for(;p!==null;){if(n===p)break n;var m=p.next;if(m!==null){r=m;continue n}p=p.parent}}r=x}for(var v=0;v<e.length;v++)i=e[v],t.push(i),ut(i,t)}function wn(n){var t=nn,r=C;try{lt();const l=[];nn=_r,C=l,H=!1,at(r);var e=n==null?void 0:n();return yr(),(C.length>0||l.length>0)&&wn(),N=0,e}finally{nn=t,C=r}}async function jr(){await Promise.resolve(),wn()}function ot(n){var i;var t=n.f,r=(t&b)!==0;if(r&&t&R){var e=Rn(n);return vn(n),e}if(f!==null){g!==null&&g.includes(n)&&At();var l=f.deps;c===null&&l!==null&&l[h]===n?h++:c===null?c=[n]:c.push(n),T!==null&&o!==null&&o.f&d&&!(o.f&_)&&T.includes(n)&&(w(o,E),rn(o))}else if(r&&n.deps===null){var a=n,u=a.parent;u!==null&&!((i=u.deriveds)!=null&&i.includes(a))&&(u.deriveds??(u.deriveds=[])).push(a)}return r&&(a=n,B(a)&&$n(a)),n.v}function ft(n){const t=f;try{return f=null,n()}finally{f=t}}const qr=~(E|S|d);function w(n,t){n.f=n.f&qr|t}function Tr(n,t=!1,r){s={p:s,c:null,e:null,m:!1,s:n,x:null,l:null},$&&!t&&(s.l={s:null,u:null,r1:[],r2:V(!1)})}function Or(n){const t=s;if(t!==null){const u=t.e;if(u!==null){var r=o,e=f;t.e=null;try{for(var l=0;l<u.length;l++){var a=u[l];K(a.effect),J(a.reaction),pn(a.fn)}}finally{K(r),J(e)}}s=t.p,t.m=!0}return{}}function Ar(n){if(!(typeof n!="object"||!n||n instanceof EventTarget)){if(on in n)gn(n);else if(!Array.isArray(n))for(let t in n){const r=n[t];typeof r=="object"&&r&&on in r&&gn(r)}}}function gn(n,t=new Set){if(typeof n=="object"&&n!==null&&!(n instanceof EventTarget)&&!t.has(n)){t.add(n),n instanceof Date&&n.getTime();for(let e in n)try{gn(n[e],t)}catch{}const r=mn(n);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=bn(r);for(let l in e){const a=e[l].get;if(a)try{a.call(n)}catch{}}}}}export{f as $,On as A,Lt as B,vt as C,pt as D,V as E,Tt as F,en as G,o as H,Ot as I,it as J,qt as K,gt as L,_t as M,fn as N,_ as O,Ft as P,K as Q,G as R,on as S,zt as T,Jt as U,$ as V,Bt as W,Gt as X,nr as Y,Rt as Z,J as _,Or as a,dr as a0,ct as a1,Wt as a2,X as a3,Pn as a4,q as a5,sn as a6,Kt as a7,P as a8,y as a9,or as aA,un as aB,pn as aC,wn as aD,jr as aE,St as aF,Tn as aG,Mn as aa,cn as ab,jt as ac,Dt as ad,st as ae,ar as af,W as ag,ir as ah,$t as ai,Ht as aj,Jn as ak,In as al,Vt as am,A as an,vr as ao,cr as ap,Cn as aq,dn as ar,Vn as as,k as at,Mt as au,It as av,Nt as aw,tn as ax,Y as ay,ur as az,bn as b,Xt as c,er as d,s as e,Yt as f,mn as g,j as h,ft as i,ht as j,ln as k,ot as l,Ar as m,Fn as n,Ct as o,Tr as p,hr as q,Qt as r,Zt as s,fr as t,lr as u,Ut as v,kn as w,Pt as x,dt as y,rr as z};
