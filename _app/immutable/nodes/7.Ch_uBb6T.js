import{s as ir,d as c,z as cr,i as y,e as m,l as Nt,b as f,A as re,k as h,B as _r,h as u,r as jt,j as I,q as Y,n as g,m as p,t as Kt,C as dr,D as mr,E as fr,F as Wt,v as Be,x as ur,y as pr}from"../chunks/scheduler.BWqtgNY2.js";import{S as vr,i as hr,d as q,t as w,a as v,c as Je,m as j,b as C,e as D,g as Ze}from"../chunks/index.DlzBi47Z.js";import{V as xt,B as gr,g as $r,Q as at,a as yr,b as kt}from"../chunks/Value.CJkYUmDL.js";import{a as Jt,D as wr,e as br,s as xr,Q as rt,p as kr,b as qt,c as lt,r as Zt,d as qr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dl9KYKV0.js";import{w as jr,g as Bt}from"../chunks/entry.d8ESOf3p.js";import{h as ae,p as Cr}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Dr}from"../chunks/stores.jl6PhlUo.js";const{document:$e}=$r;function Er(i){let r,n=x.title+"",t;return{c(){r=p("h1"),t=pr(n),this.h()},l(o){r=u(o,"H1",{class:!0});var l=I(r);t=ur(l,n),l.forEach(c),this.h()},h(){f(r,"class","title")},m(o,l){y(o,r,l),m(r,t)},p:Be,d(o){o&&c(r)}}}function Ir(i){return{c(){this.h()},l(r){this.h()},h(){$e.title="Evidence"},m:Be,p:Be,d:Be}}function Tr(i){let r,n,t,o,l;return $e.title=r=x.title,{c(){n=g(),t=p("meta"),o=g(),l=p("meta"),this.h()},l(s){n=h(s),t=u(s,"META",{property:!0,content:!0}),o=h(s),l=u(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_;f(t,"property","og:title"),f(t,"content",((s=x.og)==null?void 0:s.title)??x.title),f(l,"name","twitter:title"),f(l,"content",((_=x.og)==null?void 0:_.title)??x.title)},m(s,_){y(s,n,_),y(s,t,_),y(s,o,_),y(s,l,_)},p(s,_){_&0&&r!==(r=x.title)&&($e.title=r)},d(s){s&&(c(n),c(t),c(o),c(l))}}}function Rr(i){var l,s;let r,n,t=(x.description||((l=x.og)==null?void 0:l.description))&&Ar(),o=((s=x.og)==null?void 0:s.image)&&Sr();return{c(){t&&t.c(),r=g(),o&&o.c(),n=jt()},l(_){t&&t.l(_),r=h(_),o&&o.l(_),n=jt()},m(_,k){t&&t.m(_,k),y(_,r,k),o&&o.m(_,k),y(_,n,k)},p(_,k){var e,b;(x.description||(e=x.og)!=null&&e.description)&&t.p(_,k),(b=x.og)!=null&&b.image&&o.p(_,k)},d(_){_&&(c(r),c(n)),t&&t.d(_),o&&o.d(_)}}}function Ar(i){let r,n,t,o,l;return{c(){r=p("meta"),n=g(),t=p("meta"),o=g(),l=p("meta"),this.h()},l(s){r=u(s,"META",{name:!0,content:!0}),n=h(s),t=u(s,"META",{property:!0,content:!0}),o=h(s),l=u(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_,k;f(r,"name","description"),f(r,"content",x.description??((s=x.og)==null?void 0:s.description)),f(t,"property","og:description"),f(t,"content",((_=x.og)==null?void 0:_.description)??x.description),f(l,"name","twitter:description"),f(l,"content",((k=x.og)==null?void 0:k.description)??x.description)},m(s,_){y(s,r,_),y(s,n,_),y(s,t,_),y(s,o,_),y(s,l,_)},p:Be,d(s){s&&(c(r),c(n),c(t),c(o),c(l))}}}function Sr(i){let r,n,t;return{c(){r=p("meta"),n=g(),t=p("meta"),this.h()},l(o){r=u(o,"META",{property:!0,content:!0}),n=h(o),t=u(o,"META",{name:!0,content:!0}),this.h()},h(){var o,l;f(r,"property","og:image"),f(r,"content",lt((o=x.og)==null?void 0:o.image)),f(t,"name","twitter:image"),f(t,"content",lt((l=x.og)==null?void 0:l.image))},m(o,l){y(o,r,l),y(o,n,l),y(o,t,l)},p:Be,d(o){o&&(c(r),c(n),c(t))}}}function er(i){let r,n;return r=new at({props:{queryID:"kpi_active_projects",queryResult:i[0]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&1&&(l.queryResult=t[0]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function tr(i){let r,n;return r=new at({props:{queryID:"kpi_completion_rate",queryResult:i[1]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&2&&(l.queryResult=t[1]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function rr(i){let r,n;return r=new at({props:{queryID:"kpi_total_catalog_value",queryResult:i[2]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&4&&(l.queryResult=t[2]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function ar(i){let r,n;return r=new at({props:{queryID:"kpi_total_variants",queryResult:i[3]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&8&&(l.queryResult=t[3]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function nr(i){let r,n;return r=new at({props:{queryID:"detailed_projects",queryResult:i[4]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&16&&(l.queryResult=t[4]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function sr(i){let r,n;return r=new at({props:{queryID:"vendor_matrix",queryResult:i[5]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&32&&(l.queryResult=t[5]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function Vr(i){let r,n,t,o,l,s,_,k;return r=new kt({props:{valueLabel:"MTD",value:"mtd",default:i[6]==="mtd"}}),t=new kt({props:{valueLabel:"QTD",value:"qtd",default:i[6]==="qtd"}}),l=new kt({props:{valueLabel:"YTD",value:"ytd",default:i[6]==="ytd"}}),_=new kt({props:{valueLabel:"All Time",value:"all",default:i[6]==="all"}}),{c(){D(r.$$.fragment),n=g(),D(t.$$.fragment),o=g(),D(l.$$.fragment),s=g(),D(_.$$.fragment)},l(e){C(r.$$.fragment,e),n=h(e),C(t.$$.fragment,e),o=h(e),C(l.$$.fragment,e),s=h(e),C(_.$$.fragment,e)},m(e,b){j(r,e,b),y(e,n,b),j(t,e,b),y(e,o,b),j(l,e,b),y(e,s,b),j(_,e,b),k=!0},p(e,b){const N={};b[0]&64&&(N.default=e[6]==="mtd"),r.$set(N);const E={};b[0]&64&&(E.default=e[6]==="qtd"),t.$set(E);const P={};b[0]&64&&(P.default=e[6]==="ytd"),l.$set(P);const ne={};b[0]&64&&(ne.default=e[6]==="all"),_.$set(ne)},i(e){k||(v(r.$$.fragment,e),v(t.$$.fragment,e),v(l.$$.fragment,e),v(_.$$.fragment,e),k=!0)},o(e){w(r.$$.fragment,e),w(t.$$.fragment,e),w(l.$$.fragment,e),w(_.$$.fragment,e),k=!1},d(e){e&&(c(n),c(o),c(s)),q(r,e),q(t,e),q(l,e),q(_,e)}}}function or(i){let r,n;return r=new yr({props:{name:"time_filter",defaultValue:i[6],$$slots:{default:[Vr]},$$scope:{ctx:i}}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&64&&(l.defaultValue=t[6]),o[0]&64|o[1]&2097152&&(l.$$scope={dirty:o,ctx:t}),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function Fr(i){let r,n,t,o,l,s,_,k;return r=new qt({props:{id:"project_number",label:"Number"}}),t=new qt({props:{id:"project_name",label:"Project Name"}}),l=new qt({props:{id:"company_name",label:"Client"}}),_=new qt({props:{id:"status",label:"Status"}}),{c(){D(r.$$.fragment),n=g(),D(t.$$.fragment),o=g(),D(l.$$.fragment),s=g(),D(_.$$.fragment)},l(e){C(r.$$.fragment,e),n=h(e),C(t.$$.fragment,e),o=h(e),C(l.$$.fragment,e),s=h(e),C(_.$$.fragment,e)},m(e,b){j(r,e,b),y(e,n,b),j(t,e,b),y(e,o,b),j(l,e,b),y(e,s,b),j(_,e,b),k=!0},p:Be,i(e){k||(v(r.$$.fragment,e),v(t.$$.fragment,e),v(l.$$.fragment,e),v(_.$$.fragment,e),k=!0)},o(e){w(r.$$.fragment,e),w(t.$$.fragment,e),w(l.$$.fragment,e),w(_.$$.fragment,e),k=!1},d(e){e&&(c(n),c(o),c(s)),q(r,e),q(t,e),q(l,e),q(_,e)}}}function Pr(i){let r,n,t,o,l,s,_,k,e,b,N,E,P,ne="Overview Cockpit",He,X,et="Sales & Win-Loss",se,H,ye="Operations & Vendors",we,z,tt='<div class="text-base font-extrabold text-[#264773]">Operations &amp; Product Catalog</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Procore &amp; Shopify</div>',K,M,be=i[6],xe,B,W,Q,O,ke="🏗️ Ongoing Active Projects",Me,oe,J,ie,U,qe="Active builds tracked in Procore",Oe,Z,le,L,de="✅ Project Completion Rate",ue,ce,ee,Ue,G,ct="Ratio of completed jobs in date range",nt,me,$,fe,Ht="🛍️ Avg Variant Pricing",Ct,Le,je,Dt,Ce,Mt="Mean price of Shopify variants",Et,De,Qe,Ee,Ot="📦 Shopify Variant Count",It,Ge,Ie,Tt,Te,Ut="Total unique variants registered",_t,pe,Re,Ae,Ye,Lt="Detailed Procore Projects List",Rt,Xe,At,Se,St,Ve,Fe,ze,Qt="Shopify Average Variant Price by Vendor",Vt,Ke,Ft,Pe,dt,Pt,Gt,ve=typeof x<"u"&&x.title&&x.hide_title!==!0&&Er();function lr(a,d){return typeof x<"u"&&x.title?Tr:Ir}let st=lr()(i),he=typeof x=="object"&&Rr(),T=i[0]&&er(i),R=i[1]&&tr(i),A=i[2]&&rr(i),S=i[3]&&ar(i),V=i[4]&&nr(i),F=i[5]&&sr(i),te=or(i);return J=new xt({props:{data:i[0],column:"active_projects"}}),ee=new xt({props:{data:i[1],column:"completion_rate",fmt:"pct1"}}),je=new xt({props:{data:i[2],column:"avg_price",fmt:"usd"}}),Ie=new xt({props:{data:i[3],column:"total_variants"}}),Xe=new Jt({props:{description:"Lists individual projects managed in Procore with their numbers, names, client names, and active status."}}),Se=new wr({props:{data:i[4],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Fr]},$$scope:{ctx:i}}}),Ke=new Jt({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),Pe=new gr({props:{data:i[5],x:"vendor",y:"average_price",swapXY:"true",fillOpacity:"0.9",yFmt:"usd0",labels:!0,labelFmt:"usd0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{xAxis:{splitNumber:3},grid:{top:25,bottom:15,left:40,right:45}}}}),{c(){ve&&ve.c(),r=g(),st.c(),n=p("meta"),t=p("meta"),he&&he.c(),o=jt(),l=g(),T&&T.c(),s=g(),R&&R.c(),_=g(),A&&A.c(),k=g(),S&&S.c(),e=g(),V&&V.c(),b=g(),F&&F.c(),N=g(),E=p("div"),P=p("button"),P.textContent=ne,He=g(),X=p("button"),X.textContent=et,se=g(),H=p("button"),H.textContent=ye,we=g(),z=p("div"),z.innerHTML=tt,K=g(),M=p("div"),te.c(),xe=g(),B=p("div"),W=p("div"),Q=p("div"),O=p("span"),O.textContent=ke,Me=g(),oe=p("h2"),D(J.$$.fragment),ie=g(),U=p("div"),U.textContent=qe,Oe=g(),Z=p("div"),le=p("div"),L=p("span"),L.textContent=de,ue=g(),ce=p("h2"),D(ee.$$.fragment),Ue=g(),G=p("div"),G.textContent=ct,nt=g(),me=p("div"),$=p("div"),fe=p("span"),fe.textContent=Ht,Ct=g(),Le=p("h2"),D(je.$$.fragment),Dt=g(),Ce=p("div"),Ce.textContent=Mt,Et=g(),De=p("div"),Qe=p("div"),Ee=p("span"),Ee.textContent=Ot,It=g(),Ge=p("h2"),D(Ie.$$.fragment),Tt=g(),Te=p("div"),Te.textContent=Ut,_t=g(),pe=p("div"),Re=p("div"),Ae=p("div"),Ye=p("span"),Ye.textContent=Lt,Rt=g(),D(Xe.$$.fragment),At=g(),D(Se.$$.fragment),St=g(),Ve=p("div"),Fe=p("div"),ze=p("span"),ze.textContent=Qt,Vt=g(),D(Ke.$$.fragment),Ft=g(),D(Pe.$$.fragment),this.h()},l(a){ve&&ve.l(a),r=h(a);const d=_r("svelte-2igo1p",$e.head);st.l(d),n=u(d,"META",{name:!0,content:!0}),t=u(d,"META",{name:!0,content:!0}),he&&he.l(d),o=jt(),d.forEach(c),l=h(a),T&&T.l(a),s=h(a),R&&R.l(a),_=h(a),A&&A.l(a),k=h(a),S&&S.l(a),e=h(a),V&&V.l(a),b=h(a),F&&F.l(a),N=h(a),E=u(a,"DIV",{class:!0});var ge=I(E);P=u(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(P)!=="svelte-1nm3ycn"&&(P.textContent=ne),He=h(ge),X=u(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(X)!=="svelte-1l9tmjn"&&(X.textContent=et),se=h(ge),H=u(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(H)!=="svelte-1yk261k"&&(H.textContent=ye),ge.forEach(c),we=h(a),z=u(a,"DIV",{class:!0,"data-svelte-h":!0}),Y(z)!=="svelte-7wbqns"&&(z.innerHTML=tt),K=h(a),M=u(a,"DIV",{class:!0});var ot=I(M);te.l(ot),ot.forEach(c),xe=h(a),B=u(a,"DIV",{class:!0});var _e=I(B);W=u(_e,"DIV",{class:!0});var We=I(W);Q=u(We,"DIV",{});var Ne=I(Q);O=u(Ne,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(O)!=="svelte-1lkmrf4"&&(O.textContent=ke),Me=h(Ne),oe=u(Ne,"H2",{style:!0,class:!0});var it=I(oe);C(J.$$.fragment,it),it.forEach(c),Ne.forEach(c),ie=h(We),U=u(We,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(U)!=="svelte-1l6skdc"&&(U.textContent=qe),We.forEach(c),Oe=h(_e),Z=u(_e,"DIV",{class:!0});var mt=I(Z);le=u(mt,"DIV",{});var ft=I(le);L=u(ft,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(L)!=="svelte-1x51d4n"&&(L.textContent=de),ue=h(ft),ce=u(ft,"H2",{style:!0,class:!0});var Yt=I(ce);C(ee.$$.fragment,Yt),Yt.forEach(c),ft.forEach(c),Ue=h(mt),G=u(mt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(G)!=="svelte-lmrt1d"&&(G.textContent=ct),mt.forEach(c),nt=h(_e),me=u(_e,"DIV",{class:!0});var ut=I(me);$=u(ut,"DIV",{});var pt=I($);fe=u(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(fe)!=="svelte-17h8n09"&&(fe.textContent=Ht),Ct=h(pt),Le=u(pt,"H2",{style:!0,class:!0});var Xt=I(Le);C(je.$$.fragment,Xt),Xt.forEach(c),pt.forEach(c),Dt=h(ut),Ce=u(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Ce)!=="svelte-9bk19p"&&(Ce.textContent=Mt),ut.forEach(c),Et=h(_e),De=u(_e,"DIV",{class:!0});var vt=I(De);Qe=u(vt,"DIV",{});var ht=I(Qe);Ee=u(ht,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(Ee)!=="svelte-svysku"&&(Ee.textContent=Ot),It=h(ht),Ge=u(ht,"H2",{style:!0,class:!0});var zt=I(Ge);C(Ie.$$.fragment,zt),zt.forEach(c),ht.forEach(c),Tt=h(vt),Te=u(vt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Te)!=="svelte-1mtyb7h"&&(Te.textContent=Ut),vt.forEach(c),_e.forEach(c),_t=h(a),pe=u(a,"DIV",{class:!0});var gt=I(pe);Re=u(gt,"DIV",{class:!0});var $t=I(Re);Ae=u($t,"DIV",{class:!0});var yt=I(Ae);Ye=u(yt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(Ye)!=="svelte-18vfdji"&&(Ye.textContent=Lt),Rt=h(yt),C(Xe.$$.fragment,yt),yt.forEach(c),At=h($t),C(Se.$$.fragment,$t),$t.forEach(c),St=h(gt),Ve=u(gt,"DIV",{class:!0});var wt=I(Ve);Fe=u(wt,"DIV",{class:!0});var bt=I(Fe);ze=u(bt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(ze)!=="svelte-1e5ypeo"&&(ze.textContent=Qt),Vt=h(bt),C(Ke.$$.fragment,bt),bt.forEach(c),Ft=h(wt),C(Pe.$$.fragment,wt),wt.forEach(c),gt.forEach(c),this.h()},h(){f(n,"name","twitter:card"),f(n,"content","summary_large_image"),f(t,"name","twitter:site"),f(t,"content","@evidence_dev"),f(P,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(X,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(H,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f(E,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(z,"class","flex justify-between items-center mb-1.5 mt-0.5"),f(M,"class","mb-2 flex justify-start"),re(O,"color","#7B8DA6"),f(O,"class","text-[9px] font-bold uppercase tracking-wider"),re(oe,"color","#000000"),f(oe,"class","text-xl font-extrabold mt-0.5"),re(U,"color","#7B8DA6"),f(U,"class","text-[9px] mt-0.5"),f(W,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),re(L,"color","#7B8DA6"),f(L,"class","text-[9px] font-bold uppercase tracking-wider"),re(ce,"color","#000000"),f(ce,"class","text-xl font-extrabold mt-0.5"),re(G,"color","#7B8DA6"),f(G,"class","text-[9px] mt-0.5"),f(Z,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]"),re(fe,"color","#7B8DA6"),f(fe,"class","text-[9px] font-bold uppercase tracking-wider"),re(Le,"color","#000000"),f(Le,"class","text-xl font-extrabold mt-0.5"),re(Ce,"color","#7B8DA6"),f(Ce,"class","text-[9px] mt-0.5"),f(me,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),re(Ee,"color","#7B8DA6"),f(Ee,"class","text-[9px] font-bold uppercase tracking-wider"),re(Ge,"color","#000000"),f(Ge,"class","text-xl font-extrabold mt-0.5"),re(Te,"color","#7B8DA6"),f(Te,"class","text-[9px] mt-0.5"),f(De,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(B,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(Ye,"class","font-bold text-gray-700 text-xs"),f(Ae,"class","flex items-center gap-1.5 mb-1.5"),f(Re,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(ze,"class","font-bold text-gray-700 text-xs"),f(Fe,"class","flex items-center gap-1.5 mb-1.5"),f(Ve,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(pe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(a,d){ve&&ve.m(a,d),y(a,r,d),st.m($e.head,null),m($e.head,n),m($e.head,t),he&&he.m($e.head,null),m($e.head,o),y(a,l,d),T&&T.m(a,d),y(a,s,d),R&&R.m(a,d),y(a,_,d),A&&A.m(a,d),y(a,k,d),S&&S.m(a,d),y(a,e,d),V&&V.m(a,d),y(a,b,d),F&&F.m(a,d),y(a,N,d),y(a,E,d),m(E,P),m(E,He),m(E,X),m(E,se),m(E,H),y(a,we,d),y(a,z,d),y(a,K,d),y(a,M,d),te.m(M,null),y(a,xe,d),y(a,B,d),m(B,W),m(W,Q),m(Q,O),m(Q,Me),m(Q,oe),j(J,oe,null),m(W,ie),m(W,U),m(B,Oe),m(B,Z),m(Z,le),m(le,L),m(le,ue),m(le,ce),j(ee,ce,null),m(Z,Ue),m(Z,G),m(B,nt),m(B,me),m(me,$),m($,fe),m($,Ct),m($,Le),j(je,Le,null),m(me,Dt),m(me,Ce),m(B,Et),m(B,De),m(De,Qe),m(Qe,Ee),m(Qe,It),m(Qe,Ge),j(Ie,Ge,null),m(De,Tt),m(De,Te),y(a,_t,d),y(a,pe,d),m(pe,Re),m(Re,Ae),m(Ae,Ye),m(Ae,Rt),j(Xe,Ae,null),m(Re,At),j(Se,Re,null),m(pe,St),m(pe,Ve),m(Ve,Fe),m(Fe,ze),m(Fe,Vt),j(Ke,Fe,null),m(Ve,Ft),j(Pe,Ve,null),dt=!0,Pt||(Gt=[Nt(P,"click",i[35]),Nt(X,"click",i[36]),Nt(H,"click",i[37])],Pt=!0)},p(a,d){typeof x<"u"&&x.title&&x.hide_title!==!0&&ve.p(a,d),st.p(a,d),typeof x=="object"&&he.p(a,d),a[0]?T?(T.p(a,d),d[0]&1&&v(T,1)):(T=er(a),T.c(),v(T,1),T.m(s.parentNode,s)):T&&(Ze(),w(T,1,1,()=>{T=null}),Je()),a[1]?R?(R.p(a,d),d[0]&2&&v(R,1)):(R=tr(a),R.c(),v(R,1),R.m(_.parentNode,_)):R&&(Ze(),w(R,1,1,()=>{R=null}),Je()),a[2]?A?(A.p(a,d),d[0]&4&&v(A,1)):(A=rr(a),A.c(),v(A,1),A.m(k.parentNode,k)):A&&(Ze(),w(A,1,1,()=>{A=null}),Je()),a[3]?S?(S.p(a,d),d[0]&8&&v(S,1)):(S=ar(a),S.c(),v(S,1),S.m(e.parentNode,e)):S&&(Ze(),w(S,1,1,()=>{S=null}),Je()),a[4]?V?(V.p(a,d),d[0]&16&&v(V,1)):(V=nr(a),V.c(),v(V,1),V.m(b.parentNode,b)):V&&(Ze(),w(V,1,1,()=>{V=null}),Je()),a[5]?F?(F.p(a,d),d[0]&32&&v(F,1)):(F=sr(a),F.c(),v(F,1),F.m(N.parentNode,N)):F&&(Ze(),w(F,1,1,()=>{F=null}),Je()),d[0]&64&&ir(be,be=a[6])?(Ze(),w(te,1,1,Be),Je(),te=or(a),te.c(),v(te,1),te.m(M,null)):te.p(a,d);const ge={};d[0]&1&&(ge.data=a[0]),J.$set(ge);const ot={};d[0]&2&&(ot.data=a[1]),ee.$set(ot);const _e={};d[0]&4&&(_e.data=a[2]),je.$set(_e);const We={};d[0]&8&&(We.data=a[3]),Ie.$set(We);const Ne={};d[0]&16&&(Ne.data=a[4]),d[1]&2097152&&(Ne.$$scope={dirty:d,ctx:a}),Se.$set(Ne);const it={};d[0]&32&&(it.data=a[5]),Pe.$set(it)},i(a){dt||(v(T),v(R),v(A),v(S),v(V),v(F),v(te),v(J.$$.fragment,a),v(ee.$$.fragment,a),v(je.$$.fragment,a),v(Ie.$$.fragment,a),v(Xe.$$.fragment,a),v(Se.$$.fragment,a),v(Ke.$$.fragment,a),v(Pe.$$.fragment,a),dt=!0)},o(a){w(T),w(R),w(A),w(S),w(V),w(F),w(te),w(J.$$.fragment,a),w(ee.$$.fragment,a),w(je.$$.fragment,a),w(Ie.$$.fragment,a),w(Xe.$$.fragment,a),w(Se.$$.fragment,a),w(Ke.$$.fragment,a),w(Pe.$$.fragment,a),dt=!1},d(a){a&&(c(r),c(l),c(s),c(_),c(k),c(e),c(b),c(N),c(E),c(we),c(z),c(K),c(M),c(xe),c(B),c(_t),c(pe)),ve&&ve.d(a),st.d(a),c(n),c(t),he&&he.d(a),c(o),T&&T.d(a),R&&R.d(a),A&&A.d(a),S&&S.d(a),V&&V.d(a),F&&F.d(a),te.d(a),q(J),q(ee),q(je),q(Ie),q(Xe),q(Se),q(Ke),q(Pe),Pt=!1,cr(Gt)}}}const x={title:"Operations & Catalog Analytics"};function Nr(i,r,n){let t,o;Kt(i,Dr,$=>n(34,t=$)),Kt(i,Zt,$=>n(42,o=$));let{data:l}=r,{data:s={},customFormattingSettings:_,__db:k,inputs:e}=l;dr(Zt,o="dcaa3d1cfc44106aedf7c7de69b52d92",o);let b=br(jr(e));mr(b.subscribe($=>n(9,e=$))),fr(qr,{getCustomFormats:()=>_.customFormats||[]});const N=($,fe)=>Cr(k.query,$,{query_name:fe});xr(N),t.params,Wt(()=>!0);let E={initialData:void 0,initialError:void 0},P=ae`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,ne=`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;s.kpi_active_projects_data&&(s.kpi_active_projects_data instanceof Error?E.initialError=s.kpi_active_projects_data:E.initialData=s.kpi_active_projects_data,s.kpi_active_projects_columns&&(E.knownColumns=s.kpi_active_projects_columns));let He,X=!1;const et=rt.createReactive({callback:$=>{n(0,He=$)},execFn:N},{id:"kpi_active_projects",...E});et(ne,{noResolve:P,...E}),globalThis[Symbol.for("kpi_active_projects")]={get value(){return He}};let se={initialData:void 0,initialError:void 0},H=ae`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,ye=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_completion_rate_data&&(s.kpi_completion_rate_data instanceof Error?se.initialError=s.kpi_completion_rate_data:se.initialData=s.kpi_completion_rate_data,s.kpi_completion_rate_columns&&(se.knownColumns=s.kpi_completion_rate_columns));let we,z=!1;const tt=rt.createReactive({callback:$=>{n(1,we=$)},execFn:N},{id:"kpi_completion_rate",...se});tt(ye,{noResolve:H,...se}),globalThis[Symbol.for("kpi_completion_rate")]={get value(){return we}};let K={initialData:void 0,initialError:void 0},M=ae`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,be=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_total_catalog_value_data&&(s.kpi_total_catalog_value_data instanceof Error?K.initialError=s.kpi_total_catalog_value_data:K.initialData=s.kpi_total_catalog_value_data,s.kpi_total_catalog_value_columns&&(K.knownColumns=s.kpi_total_catalog_value_columns));let xe,B=!1;const W=rt.createReactive({callback:$=>{n(2,xe=$)},execFn:N},{id:"kpi_total_catalog_value",...K});W(be,{noResolve:M,...K}),globalThis[Symbol.for("kpi_total_catalog_value")]={get value(){return xe}};let Q={initialData:void 0,initialError:void 0},O=ae`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,ke=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_total_variants_data&&(s.kpi_total_variants_data instanceof Error?Q.initialError=s.kpi_total_variants_data:Q.initialData=s.kpi_total_variants_data,s.kpi_total_variants_columns&&(Q.knownColumns=s.kpi_total_variants_columns));let Me,oe=!1;const J=rt.createReactive({callback:$=>{n(3,Me=$)},execFn:N},{id:"kpi_total_variants",...Q});J(ke,{noResolve:O,...Q}),globalThis[Symbol.for("kpi_total_variants")]={get value(){return Me}};let ie={initialData:void 0,initialError:void 0},U=ae`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
order by status asc, project_name asc`,qe=`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
order by status asc, project_name asc`;s.detailed_projects_data&&(s.detailed_projects_data instanceof Error?ie.initialError=s.detailed_projects_data:ie.initialData=s.detailed_projects_data,s.detailed_projects_columns&&(ie.knownColumns=s.detailed_projects_columns));let Oe,Z=!1;const le=rt.createReactive({callback:$=>{n(4,Oe=$)},execFn:N},{id:"detailed_projects",...ie});le(qe,{noResolve:U,...ie}),globalThis[Symbol.for("detailed_projects")]={get value(){return Oe}};let L={initialData:void 0,initialError:void 0},de=ae`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by average_price desc`,ue=`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by average_price desc`;s.vendor_matrix_data&&(s.vendor_matrix_data instanceof Error?L.initialError=s.vendor_matrix_data:L.initialData=s.vendor_matrix_data,s.vendor_matrix_columns&&(L.knownColumns=s.vendor_matrix_columns));let ce,ee=!1;const Ue=rt.createReactive({callback:$=>{n(5,ce=$)},execFn:N},{id:"vendor_matrix",...L});Ue(ue,{noResolve:de,...L}),globalThis[Symbol.for("vendor_matrix")]={get value(){return ce}};let G="ytd";Wt(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),e){const $=t.url.searchParams.get("time_filter");n(9,e.time_filter=$||"ytd",e)}});const ct=()=>Bt(lt(`/?time_filter=${G}`)),nt=()=>Bt(lt(`/sales?time_filter=${G}`)),me=()=>Bt(lt(`/operations?time_filter=${G}`));return i.$$set=$=>{"data"in $&&n(7,l=$.data)},i.$$.update=()=>{if(i.$$.dirty[0]&128&&n(8,{data:s={},customFormattingSettings:_,__db:k}=l,s),i.$$.dirty[0]&256&&kr.set(Object.keys(s).length>0),i.$$.dirty[1]&8&&t.params,i.$$.dirty[0]&512&&n(11,P=ae`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),i.$$.dirty[0]&512&&n(12,ne=`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),i.$$.dirty[0]&15360&&(P||!X?P||(et(ne,{noResolve:P,...E}),n(13,X=!0)):et(ne,{noResolve:P})),i.$$.dirty[0]&512&&n(15,H=ae`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&512&&n(16,ye=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&245760&&(H||!z?H||(tt(ye,{noResolve:H,...se}),n(17,z=!0)):tt(ye,{noResolve:H})),i.$$.dirty[0]&512&&n(19,M=ae`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&512&&n(20,be=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&3932160&&(M||!B?M||(W(be,{noResolve:M,...K}),n(21,B=!0)):W(be,{noResolve:M})),i.$$.dirty[0]&512&&n(23,O=ae`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&512&&n(24,ke=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&62914560&&(O||!oe?O||(J(ke,{noResolve:O,...Q}),n(25,oe=!0)):J(ke,{noResolve:O})),i.$$.dirty[0]&512&&n(27,U=ae`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
order by status asc, project_name asc`),i.$$.dirty[0]&512&&n(28,qe=`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
order by status asc, project_name asc`),i.$$.dirty[0]&1006632960&&(U||!Z?U||(le(qe,{noResolve:U,...ie}),n(29,Z=!0)):le(qe,{noResolve:U})),i.$$.dirty[0]&512&&n(31,de=ae`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by average_price desc`),i.$$.dirty[0]&512&&n(32,ue=`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by average_price desc`),i.$$.dirty[0]&1073741824|i.$$.dirty[1]&7&&(de||!ee?de||(Ue(ue,{noResolve:de,...L}),n(33,ee=!0)):Ue(ue,{noResolve:de})),i.$$.dirty[0]&512&&n(6,G=(e==null?void 0:e.time_filter)||"ytd"),i.$$.dirty[0]&512&&e&&e.time_filter)try{const $=new URL(window.location.href);$.searchParams.get("time_filter")!==e.time_filter&&($.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",$.pathname+$.search))}catch{}},[He,we,xe,Me,Oe,ce,G,l,s,e,E,P,ne,X,se,H,ye,z,K,M,be,B,Q,O,ke,oe,ie,U,qe,Z,L,de,ue,ee,t,ct,nt,me]}class Yr extends vr{constructor(r){super(),hr(this,r,Nr,Pr,ir,{data:7},null,[-1,-1])}}export{Yr as component};
