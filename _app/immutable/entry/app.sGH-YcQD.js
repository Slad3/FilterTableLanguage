const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.D_rqUqHT.js","../chunks/disclose-version.BkO4L0aM.js","../chunks/runtime.D3P45Mch.js","../chunks/legacy.Bv90DCE8.js","../chunks/attributes.DWrBTU4p.js","../chunks/store.BhHgpgqk.js","../chunks/lifecycle.D3darLAV.js","../chunks/stores.BaTQxOXb.js","../chunks/entry.C7g52vGC.js","../chunks/paths.BiJ8uB0q.js","../assets/0.CoLj2480.css","../assets/app.BvVSg3RZ.css","../nodes/1.BeLT5_ro.js","../chunks/render.Bod2uUyv.js","../nodes/2.GxO_eUSJ.js","../chunks/FoodExample.D1OUIUIi.js","../chunks/DataTable.CM4L9uCr.js","../chunks/index-client.CWj2EJN3.js","../assets/DataTable.liNzSQjp.css","../assets/FoodExample.DFezeqDs.css","../nodes/3.CD0q1sr1.js","../nodes/4.DijURnuh.js","../assets/4.BykKWNw8.css","../assets/Help.CJGysf7S.css","../nodes/5.B-E8rRXd.js"])))=>i.map(i=>d[i]);
var J=l=>{throw TypeError(l)};var K=(l,u,h)=>u.has(l)||J("Cannot "+h);var d=(l,u,h)=>(K(l,u,"read from private field"),h?h.call(l):u.get(l)),T=(l,u,h)=>u.has(l)?J("Cannot add the same private member more than once"):u instanceof WeakSet?u.add(l):u.set(l,h),V=(l,u,h,P)=>(K(l,u,"write to private field"),P?P.call(l,h):u.set(l,h),h);import{h as O,B as Q,ak as W,al as mt,am as ft,a8 as _t,a7 as X,ao as Y,ah as q,ap as B,a9 as Z,aB as z,aC as vt,ay as gt,i as Et,a0 as yt,S as $t,l as y,w as D,aD as wt,a1 as Pt,A as bt,p as Rt,u as At,d as Lt,aE as Ot,f as k,a as xt,aF as j,s as Dt,c as kt,t as It,r as St,n as C}from"../chunks/runtime.D3P45Mch.js";import{h as Tt,m as Vt,u as qt,s as Bt}from"../chunks/render.Bod2uUyv.js";import{a as R,t as G,c as N,d as jt}from"../chunks/disclose-version.BkO4L0aM.js";import{p as U,o as Ct,a as Nt}from"../chunks/index-client.CWj2EJN3.js";let tt,et,rt,st,at,nt,Ut=(async()=>{var E,f;function l(a,t,n,c=null,o=!1){O&&Q();var r=a,e=null,s=null,i=null,g=o?z:0;W(()=>{if(i===(i=!!t()))return;let w=!1;if(O){const _=r.data===mt;i===_&&(r=ft(),_t(r),X(!1),w=!0)}i?(e?Y(e):e=q(()=>n(r)),s&&B(s,()=>{s=null})):(s?Y(s):c&&(s=q(()=>c(r))),e&&B(e,()=>{e=null})),w&&X(!0)},g),O&&(r=Z)}function u(a,t,n){O&&Q();var c=a,o,r;W(()=>{o!==(o=t())&&(r&&(B(r),r=null),o&&(r=q(()=>n(c,o))))},z),O&&(c=Z)}function h(a,t){return a===t||(a==null?void 0:a[$t])===t}function P(a={},t,n,c){return vt(()=>{var o,r;return gt(()=>{o=r,r=[],Et(()=>{a!==n(...r)&&(t(a,...r),o&&h(n(...o),a)&&t(null,...o))})}),()=>{yt(()=>{r&&h(n(...r),a)&&t(null,...r)})}}),a}function ot(a){return class extends it{constructor(t){super({component:a,...t})}}}class it{constructor(t){T(this,E);T(this,f);var r;var n=new Map,c=(e,s)=>{var i=bt(s);return n.set(e,i),i};const o=new Proxy({...t.props||{},$$events:{}},{get(e,s){return y(n.get(s)??c(s,Reflect.get(e,s)))},has(e,s){return y(n.get(s)??c(s,Reflect.get(e,s))),Reflect.has(e,s)},set(e,s,i){return D(n.get(s)??c(s,i),i),Reflect.set(e,s,i)}});V(this,f,(t.hydrate?Tt:Vt)(t.component,{target:t.target,anchor:t.anchor,props:o,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((r=t==null?void 0:t.props)!=null&&r.$$host)||t.sync===!1)&&wt(),V(this,E,o.$$events);for(const e of Object.keys(d(this,f)))e==="$set"||e==="$destroy"||e==="$on"||Pt(this,e,{get(){return d(this,f)[e]},set(s){d(this,f)[e]=s},enumerable:!0});d(this,f).$set=e=>{Object.assign(o,e)},d(this,f).$destroy=()=>{qt(d(this,f))}}$set(t){d(this,f).$set(t)}$on(t,n){d(this,E)[t]=d(this,E)[t]||[];const c=(...o)=>n.call(this,...o);return d(this,E)[t].push(c),()=>{d(this,E)[t]=d(this,E)[t].filter(o=>o!==c)}}$destroy(){d(this,f).$destroy()}}E=new WeakMap,f=new WeakMap;let F,M,I,$;F="modulepreload",M=function(a,t){return new URL(a,t).href},I={},$=function(a,t,n){let c=Promise.resolve();if(t&&t.length>0){const r=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),s=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));c=Promise.allSettled(t.map(i=>{if(i=M(i,n),i in I)return;I[i]=!0;const g=i.endsWith(".css"),w=g?'[rel="stylesheet"]':"";if(n)for(let m=r.length-1;m>=0;m--){const p=r[m];if(p.href===i&&(!g||p.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${i}"]${w}`))return;const _=document.createElement("link");if(_.rel=g?"stylesheet":F,g||(_.as="script"),_.crossOrigin="",_.href=i,s&&_.setAttribute("nonce",s),document.head.appendChild(_),g)return new Promise((m,p)=>{_.addEventListener("load",m),_.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${i}`)))})}))}function o(r){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=r,window.dispatchEvent(e),!e.defaultPrevented)throw r}return c.then(r=>{for(const e of r||[])e.status==="rejected"&&o(e.reason);return a().catch(o)})},rt={};var ct=G('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),lt=G("<!> <!>",1);function ut(a,t){Rt(t,!0);let n=U(t,"components",23,()=>[]),c=U(t,"data_0",3,null),o=U(t,"data_1",3,null);At(()=>t.stores.page.set(t.page)),Lt(()=>{t.stores,t.page,t.constructors,n(),t.form,c(),o(),t.stores.page.notify()});let r=j(!1),e=j(!1),s=j(null);Ct(()=>{const m=t.stores.page.subscribe(()=>{y(r)&&(D(e,!0),Ot().then(()=>{D(s,Nt(document.title||"untitled page"))}))});return D(r,!0),m});const i=C(()=>t.constructors[1]);var g=lt(),w=k(g);l(w,()=>t.constructors[1],m=>{var p=N();const A=C(()=>t.constructors[0]);var L=k(p);u(L,()=>y(A),(b,S)=>{P(S(b,{get data(){return c()},get form(){return t.form},children:(v,Ft)=>{var H=N(),pt=k(H);u(pt,()=>y(i),(dt,ht)=>{P(ht(dt,{get data(){return o()},get form(){return t.form}}),x=>n()[1]=x,()=>{var x;return(x=n())==null?void 0:x[1]})}),R(v,H)},$$slots:{default:!0}}),v=>n()[0]=v,()=>{var v;return(v=n())==null?void 0:v[0]})}),R(m,p)},m=>{var p=N();const A=C(()=>t.constructors[0]);var L=k(p);u(L,()=>y(A),(b,S)=>{P(S(b,{get data(){return c()},get form(){return t.form}}),v=>n()[0]=v,()=>{var v;return(v=n())==null?void 0:v[0]})}),R(m,p)});var _=Dt(w,2);l(_,()=>y(r),m=>{var p=ct(),A=kt(p);l(A,()=>y(e),L=>{var b=jt();It(()=>Bt(b,y(s))),R(L,b)}),St(p),R(m,p)}),R(a,g),xt()}at=ot(ut),st=[()=>$(()=>import("../nodes/0.D_rqUqHT.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11]),import.meta.url),()=>$(()=>import("../nodes/1.BeLT5_ro.js"),__vite__mapDeps([12,1,2,3,13,5,6,7,8,9]),import.meta.url),()=>$(()=>import("../nodes/2.GxO_eUSJ.js"),__vite__mapDeps([14,1,2,3,4,5,9,15,13,16,6,17,18,19]),import.meta.url),()=>$(()=>import("../nodes/3.CD0q1sr1.js"),__vite__mapDeps([20,1,2,3,15,13,5,4,16,6,17,18,19]),import.meta.url),()=>$(()=>import("../nodes/4.DijURnuh.js"),__vite__mapDeps([21,1,2,3,13,5,4,16,6,17,18,22,11,23]),import.meta.url),()=>$(()=>import("../nodes/5.B-E8rRXd.js"),__vite__mapDeps([24,1,2,3,23]),import.meta.url)],nt=[],tt={"/":[2],"/food":[3],"/playlist":[4],"/queries":[5]},et={handleError:({error:a})=>{console.error(a)},reroute:()=>{}}})();export{Ut as __tla,tt as dictionary,et as hooks,rt as matchers,st as nodes,at as root,nt as server_loads};
