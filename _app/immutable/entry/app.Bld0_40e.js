const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.DfSuqflB.js","../chunks/disclose-version.CT4FqHsS.js","../chunks/runtime.BF4ddQLO.js","../chunks/attributes.Dk3bRcNo.js","../chunks/lifecycle.Dyy_xoQq.js","../chunks/store.cjCFYoH7.js","../chunks/stores.Dse4tfnz.js","../chunks/entry.Dqtqzwby.js","../chunks/paths.lKtwmFXJ.js","../assets/0.CoLj2480.css","../assets/app.BvVSg3RZ.css","../nodes/1.RT5Bwtg6.js","../chunks/render.BbYtC1MA.js","../nodes/2.ABghamLK.js","../chunks/FoodExample.DCbU8dDU.js","../chunks/DataTable.BcTSWsPR.js","../chunks/index-client.DUaNXJfH.js","../assets/DataTable.liNzSQjp.css","../assets/FoodExample.DFezeqDs.css","../nodes/3.BAppdUZP.js","../nodes/4.DImINDfY.js","../assets/4.BykKWNw8.css","../assets/Help.CJGysf7S.css","../nodes/5.7gFT783C.js"])))=>i.map(i=>d[i]);
var F=l=>{throw TypeError(l)};var G=(l,u,d)=>u.has(l)||F("Cannot "+d);var p=(l,u,d)=>(G(l,u,"read from private field"),d?d.call(l):u.get(l)),V=(l,u,d)=>u.has(l)?F("Cannot add the same private member more than once"):u instanceof WeakSet?u.add(l):u.set(l,d),S=(l,u,d,P)=>(G(l,u,"write to private field"),P?P.call(l,d):u.set(l,d),d);import{m as L,P as H,aj as J,ak as ft,al as ht,O as _t,N as K,am as Q,Y as j,an as q,Q as W,aA as X,aB as vt,ax as gt,e as Et,A as yt,Z as $t,i as y,x as k,aC as wt,D as Pt,w as Rt,p as bt,u as xt,b as At,aD as Lt,f as D,a as Ot,aE as C,s as kt,c as Dt,t as Tt,r as It,k as B}from"../chunks/runtime.BF4ddQLO.js";import{h as Vt,m as St,u as jt,s as qt}from"../chunks/render.BbYtC1MA.js";import{a as b,t as Z,c as N,d as Ct}from"../chunks/disclose-version.CT4FqHsS.js";import{p as U,o as Bt,a as Nt}from"../chunks/index-client.DUaNXJfH.js";let tt,et,rt,st,nt,at,Ut=(async()=>{var E,h;function l(n,t,a,c=null,o=!1){L&&H();var r=n,e=null,s=null,i=null,g=o?X:0;J(()=>{if(i===(i=!!t()))return;let w=!1;if(L){const _=r.data===ft;i===_&&(r=ht(),_t(r),K(!1),w=!0)}i?(e?Q(e):e=j(()=>a(r)),s&&q(s,()=>{s=null})):(s?Q(s):c&&(s=j(()=>c(r))),e&&q(e,()=>{e=null})),w&&K(!0)},g),L&&(r=W)}function u(n,t,a){L&&H();var c=n,o,r;J(()=>{o!==(o=t())&&(r&&(q(r),r=null),o&&(r=j(()=>a(c,o))))},X),L&&(c=W)}function d(n,t){return n===t||(n==null?void 0:n[$t])===t}function P(n={},t,a,c){return vt(()=>{var o,r;return gt(()=>{o=r,r=[],Et(()=>{n!==a(...r)&&(t(n,...r),o&&d(a(...o),n)&&t(null,...o))})}),()=>{yt(()=>{r&&d(a(...r),n)&&t(null,...r)})}}),n}function ot(n){return class extends it{constructor(t){super({component:n,...t})}}}class it{constructor(t){V(this,E);V(this,h);var r;var a=new Map,c=(e,s)=>{var i=Rt(s);return a.set(e,i),i};const o=new Proxy({...t.props||{},$$events:{}},{get(e,s){return y(a.get(s)??c(s,Reflect.get(e,s)))},has(e,s){return y(a.get(s)??c(s,Reflect.get(e,s))),Reflect.has(e,s)},set(e,s,i){return k(a.get(s)??c(s,i),i),Reflect.set(e,s,i)}});S(this,h,(t.hydrate?Vt:St)(t.component,{target:t.target,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((r=t==null?void 0:t.props)!=null&&r.$$host)||t.sync===!1)&&wt(),S(this,E,o.$$events);for(const e of Object.keys(p(this,h)))e==="$set"||e==="$destroy"||e==="$on"||Pt(this,e,{get(){return p(this,h)[e]},set(s){p(this,h)[e]=s},enumerable:!0});p(this,h).$set=e=>{Object.assign(o,e)},p(this,h).$destroy=()=>{jt(p(this,h))}}$set(t){p(this,h).$set(t)}$on(t,a){p(this,E)[t]=p(this,E)[t]||[];const c=(...o)=>a.call(this,...o);return p(this,E)[t].push(c),()=>{p(this,E)[t]=p(this,E)[t].filter(o=>o!==c)}}$destroy(){p(this,h).$destroy()}}E=new WeakMap,h=new WeakMap;let M,Y,T,$;M="modulepreload",Y=function(n,t){return new URL(n,t).href},T={},$=function(n,t,a){let c=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),s=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.allSettled(t.map(i=>{if(i=Y(i,a),i in T)return;T[i]=!0;const g=i.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(a)for(let f=r.length-1;f>=0;f--){const m=r[f];if(m.href===i&&(!g||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${w}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":M,g||(_.as="script"),_.crossOrigin="",_.href=i,s&&_.setAttribute("nonce",s),document.head.appendChild(_),g)return new Promise((f,m)=>{_.addEventListener("load",f),_.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${i}`)))})}))}function o(r){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r}return c.then(r=>{for(const e of r||[])e.status==="rejected"&&o(e.reason);return n().catch(o)})},rt={};var ct=Z('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),lt=Z("<!> <!>",1);function ut(n,t){bt(t,!0);let a=U(t,"components",23,()=>[]),c=U(t,"data_0",3,null),o=U(t,"data_1",3,null);xt(()=>t.stores.page.set(t.page)),At(()=>{t.stores,t.page,t.constructors,a(),t.form,c(),o(),t.stores.page.notify()});let r=C(!1),e=C(!1),s=C(null);Bt(()=>{const f=t.stores.page.subscribe(()=>{y(r)&&(k(e,!0),Lt().then(()=>{k(s,Nt(document.title||"untitled page"))}))});return k(r,!0),f});const i=B(()=>t.constructors[1]);var g=lt(),w=D(g);l(w,()=>t.constructors[1],f=>{var m=N();const x=B(()=>t.constructors[0]);var A=D(m);u(A,()=>y(x),(R,I)=>{P(I(R,{get data(){return c()},get form(){return t.form},children:(v,Mt)=>{var z=N(),mt=D(z);u(mt,()=>y(i),(pt,dt)=>{P(dt(pt,{get data(){return o()},get form(){return t.form}}),O=>a()[1]=O,()=>{var O;return(O=a())==null?void 0:O[1]})}),b(v,z)},$$slots:{default:!0}}),v=>a()[0]=v,()=>{var v;return(v=a())==null?void 0:v[0]})}),b(f,m)},f=>{var m=N();const x=B(()=>t.constructors[0]);var A=D(m);u(A,()=>y(x),(R,I)=>{P(I(R,{get data(){return c()},get form(){return t.form}}),v=>a()[0]=v,()=>{var v;return(v=a())==null?void 0:v[0]})}),b(f,m)});var _=kt(w,2);l(_,()=>y(r),f=>{var m=ct(),x=Dt(m);l(x,()=>y(e),A=>{var R=Ct();Tt(()=>qt(R,y(s))),b(A,R)}),It(m),b(f,m)}),b(n,g),Ot()}nt=ot(ut),st=[()=>$(()=>import("../nodes/0.DfSuqflB.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url),()=>$(()=>import("../nodes/1.RT5Bwtg6.js"),__vite__mapDeps([11,1,2,12,4,5,6,7,8]),import.meta.url),()=>$(()=>import("../nodes/2.ABghamLK.js"),__vite__mapDeps([13,1,2,3,8,14,12,15,4,16,5,17,18]),import.meta.url),()=>$(()=>import("../nodes/3.BAppdUZP.js"),__vite__mapDeps([19,1,2,14,12,3,15,4,16,5,17,18]),import.meta.url),()=>$(()=>import("../nodes/4.DImINDfY.js"),__vite__mapDeps([20,1,2,12,3,15,4,16,5,17,21,10,22]),import.meta.url),()=>$(()=>import("../nodes/5.7gFT783C.js"),__vite__mapDeps([23,1,2,22]),import.meta.url)],at=[],tt={"/":[2],"/food":[3],"/playlist":[4],"/queries":[5]},et={handleError:({error:n})=>{console.error(n)},reroute:()=>{}}})();export{Ut as __tla,tt as dictionary,et as hooks,rt as matchers,st as nodes,nt as root,at as server_loads};
