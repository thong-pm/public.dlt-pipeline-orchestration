import{s as or,d as c,z as lr,i as y,e as m,l as Ft,b as f,A as re,k as h,B as cr,h as u,r as kt,j as I,q as Y,n as g,m as p,t as zt,C as _r,D as dr,E as mr,F as Xt,v as Ne,x as fr,y as ur}from"../chunks/scheduler.BWqtgNY2.js";import{S as pr,i as vr,d as q,t as w,a as v,c as We,m as j,b as C,e as D,g as Je}from"../chunks/index.DlzBi47Z.js";import{a as Kt,D as hr,e as gr,s as $r,Q as tt,p as yr,b as wt,c as Wt,r as Jt,d as wr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.0ms6tUjC.js";import{w as xr,g as Pt}from"../chunks/entry.Cb3J1ldK.js";import{h as ae,p as br}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as kr}from"../chunks/stores.Dpj02sKu.js";import{V as xt,B as qr,Q as rt,a as jr,b as bt}from"../chunks/Value.BoBYavHo.js";function Cr(i){let r,n=b.title+"",t;return{c(){r=p("h1"),t=ur(n),this.h()},l(o){r=u(o,"H1",{class:!0});var l=I(r);t=fr(l,n),l.forEach(c),this.h()},h(){f(r,"class","title")},m(o,l){y(o,r,l),m(r,t)},p:Ne,d(o){o&&c(r)}}}function Dr(i){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Ne,p:Ne,d:Ne}}function Er(i){let r,n,t,o,l;return document.title=r=b.title,{c(){n=g(),t=p("meta"),o=g(),l=p("meta"),this.h()},l(s){n=h(s),t=u(s,"META",{property:!0,content:!0}),o=h(s),l=u(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_;f(t,"property","og:title"),f(t,"content",((s=b.og)==null?void 0:s.title)??b.title),f(l,"name","twitter:title"),f(l,"content",((_=b.og)==null?void 0:_.title)??b.title)},m(s,_){y(s,n,_),y(s,t,_),y(s,o,_),y(s,l,_)},p(s,_){_&0&&r!==(r=b.title)&&(document.title=r)},d(s){s&&(c(n),c(t),c(o),c(l))}}}function Ir(i){var l,s;let r,n,t=(b.description||((l=b.og)==null?void 0:l.description))&&Tr(),o=((s=b.og)==null?void 0:s.image)&&Rr();return{c(){t&&t.c(),r=g(),o&&o.c(),n=kt()},l(_){t&&t.l(_),r=h(_),o&&o.l(_),n=kt()},m(_,k){t&&t.m(_,k),y(_,r,k),o&&o.m(_,k),y(_,n,k)},p(_,k){var e,x;(b.description||(e=b.og)!=null&&e.description)&&t.p(_,k),(x=b.og)!=null&&x.image&&o.p(_,k)},d(_){_&&(c(r),c(n)),t&&t.d(_),o&&o.d(_)}}}function Tr(i){let r,n,t,o,l;return{c(){r=p("meta"),n=g(),t=p("meta"),o=g(),l=p("meta"),this.h()},l(s){r=u(s,"META",{name:!0,content:!0}),n=h(s),t=u(s,"META",{property:!0,content:!0}),o=h(s),l=u(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_,k;f(r,"name","description"),f(r,"content",b.description??((s=b.og)==null?void 0:s.description)),f(t,"property","og:description"),f(t,"content",((_=b.og)==null?void 0:_.description)??b.description),f(l,"name","twitter:description"),f(l,"content",((k=b.og)==null?void 0:k.description)??b.description)},m(s,_){y(s,r,_),y(s,n,_),y(s,t,_),y(s,o,_),y(s,l,_)},p:Ne,d(s){s&&(c(r),c(n),c(t),c(o),c(l))}}}function Rr(i){let r,n,t;return{c(){r=p("meta"),n=g(),t=p("meta"),this.h()},l(o){r=u(o,"META",{property:!0,content:!0}),n=h(o),t=u(o,"META",{name:!0,content:!0}),this.h()},h(){var o,l;f(r,"property","og:image"),f(r,"content",Wt((o=b.og)==null?void 0:o.image)),f(t,"name","twitter:image"),f(t,"content",Wt((l=b.og)==null?void 0:l.image))},m(o,l){y(o,r,l),y(o,n,l),y(o,t,l)},p:Ne,d(o){o&&(c(r),c(n),c(t))}}}function Zt(i){let r,n;return r=new rt({props:{queryID:"kpi_active_projects",queryResult:i[0]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&1&&(l.queryResult=t[0]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function er(i){let r,n;return r=new rt({props:{queryID:"kpi_completion_rate",queryResult:i[1]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&2&&(l.queryResult=t[1]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function tr(i){let r,n;return r=new rt({props:{queryID:"kpi_total_catalog_value",queryResult:i[2]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&4&&(l.queryResult=t[2]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function rr(i){let r,n;return r=new rt({props:{queryID:"kpi_total_variants",queryResult:i[3]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&8&&(l.queryResult=t[3]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function ar(i){let r,n;return r=new rt({props:{queryID:"detailed_projects",queryResult:i[4]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&16&&(l.queryResult=t[4]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function nr(i){let r,n;return r=new rt({props:{queryID:"vendor_matrix",queryResult:i[5]}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&32&&(l.queryResult=t[5]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function Ar(i){let r,n,t,o,l,s,_,k;return r=new bt({props:{valueLabel:"MTD",value:"mtd",default:i[6]==="mtd"}}),t=new bt({props:{valueLabel:"QTD",value:"qtd",default:i[6]==="qtd"}}),l=new bt({props:{valueLabel:"YTD",value:"ytd",default:i[6]==="ytd"}}),_=new bt({props:{valueLabel:"All Time",value:"all",default:i[6]==="all"}}),{c(){D(r.$$.fragment),n=g(),D(t.$$.fragment),o=g(),D(l.$$.fragment),s=g(),D(_.$$.fragment)},l(e){C(r.$$.fragment,e),n=h(e),C(t.$$.fragment,e),o=h(e),C(l.$$.fragment,e),s=h(e),C(_.$$.fragment,e)},m(e,x){j(r,e,x),y(e,n,x),j(t,e,x),y(e,o,x),j(l,e,x),y(e,s,x),j(_,e,x),k=!0},p(e,x){const N={};x[0]&64&&(N.default=e[6]==="mtd"),r.$set(N);const E={};x[0]&64&&(E.default=e[6]==="qtd"),t.$set(E);const P={};x[0]&64&&(P.default=e[6]==="ytd"),l.$set(P);const ne={};x[0]&64&&(ne.default=e[6]==="all"),_.$set(ne)},i(e){k||(v(r.$$.fragment,e),v(t.$$.fragment,e),v(l.$$.fragment,e),v(_.$$.fragment,e),k=!0)},o(e){w(r.$$.fragment,e),w(t.$$.fragment,e),w(l.$$.fragment,e),w(_.$$.fragment,e),k=!1},d(e){e&&(c(n),c(o),c(s)),q(r,e),q(t,e),q(l,e),q(_,e)}}}function sr(i){let r,n;return r=new jr({props:{name:"time_filter",defaultValue:i[6],$$slots:{default:[Ar]},$$scope:{ctx:i}}}),{c(){D(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,o){j(r,t,o),n=!0},p(t,o){const l={};o[0]&64&&(l.defaultValue=t[6]),o[0]&64|o[1]&2097152&&(l.$$scope={dirty:o,ctx:t}),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){w(r.$$.fragment,t),n=!1},d(t){q(r,t)}}}function Sr(i){let r,n,t,o,l,s,_,k;return r=new wt({props:{id:"project_number",label:"Number"}}),t=new wt({props:{id:"project_name",label:"Project Name"}}),l=new wt({props:{id:"company_name",label:"Client"}}),_=new wt({props:{id:"status",label:"Status"}}),{c(){D(r.$$.fragment),n=g(),D(t.$$.fragment),o=g(),D(l.$$.fragment),s=g(),D(_.$$.fragment)},l(e){C(r.$$.fragment,e),n=h(e),C(t.$$.fragment,e),o=h(e),C(l.$$.fragment,e),s=h(e),C(_.$$.fragment,e)},m(e,x){j(r,e,x),y(e,n,x),j(t,e,x),y(e,o,x),j(l,e,x),y(e,s,x),j(_,e,x),k=!0},p:Ne,i(e){k||(v(r.$$.fragment,e),v(t.$$.fragment,e),v(l.$$.fragment,e),v(_.$$.fragment,e),k=!0)},o(e){w(r.$$.fragment,e),w(t.$$.fragment,e),w(l.$$.fragment,e),w(_.$$.fragment,e),k=!1},d(e){e&&(c(n),c(o),c(s)),q(r,e),q(t,e),q(l,e),q(_,e)}}}function Vr(i){let r,n,t,o,l,s,_,k,e,x,N,E,P,ne="Overview Cockpit",Be,z,Ze="Sales & Win-Loss",se,H,$e="Operations & Vendors",ye,X,et='<div class="text-base font-extrabold text-[#264773]">Operations &amp; Product Catalog</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Procore &amp; Shopify</div>',K,M,we=i[6],xe,B,W,Q,O,be="🏗️ Ongoing Active Projects",He,oe,J,ie,U,ke="Active builds tracked in Procore",Me,Z,le,L,de="✅ Project Completion Rate",ue,ce,ee,Oe,G,it="Ratio of completed jobs in date range",at,me,$,fe,Nt="🛍️ Avg Variant Pricing",qt,Ue,qe,jt,je,Bt="Mean price of Shopify variants",Ct,Ce,Le,De,Ht="📦 Shopify Variant Count",Dt,Qe,Ee,Et,Ie,Mt="Total unique variants registered",lt,pe,Te,Re,Ge,Ot="Detailed Procore Projects List",It,Ye,Tt,Ae,Rt,Se,Ve,ze,Ut="Shopify Average Variant Price by Vendor",At,Xe,St,Fe,ct,Vt,Lt,ve=typeof b<"u"&&b.title&&b.hide_title!==!0&&Cr();function ir(a,d){return typeof b<"u"&&b.title?Er:Dr}let nt=ir()(i),he=typeof b=="object"&&Ir(),T=i[0]&&Zt(i),R=i[1]&&er(i),A=i[2]&&tr(i),S=i[3]&&rr(i),V=i[4]&&ar(i),F=i[5]&&nr(i),te=sr(i);return J=new xt({props:{data:i[0],column:"active_projects"}}),ee=new xt({props:{data:i[1],column:"completion_rate",fmt:"pct1"}}),qe=new xt({props:{data:i[2],column:"avg_price",fmt:"usd"}}),Ee=new xt({props:{data:i[3],column:"total_variants"}}),Ye=new Kt({props:{description:"Lists individual projects managed in Procore with their numbers, names, client names, and active status."}}),Ae=new hr({props:{data:i[4],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Sr]},$$scope:{ctx:i}}}),Xe=new Kt({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),Fe=new qr({props:{data:i[5],x:"vendor",y:"average_price",swapXY:"true",fillOpacity:"0.9",yFmt:"usd0",labels:!0,labelFmt:"usd0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{xAxis:{splitNumber:3},grid:{top:25,bottom:15,left:40,right:45}}}}),{c(){ve&&ve.c(),r=g(),nt.c(),n=p("meta"),t=p("meta"),he&&he.c(),o=kt(),l=g(),T&&T.c(),s=g(),R&&R.c(),_=g(),A&&A.c(),k=g(),S&&S.c(),e=g(),V&&V.c(),x=g(),F&&F.c(),N=g(),E=p("div"),P=p("button"),P.textContent=ne,Be=g(),z=p("button"),z.textContent=Ze,se=g(),H=p("button"),H.textContent=$e,ye=g(),X=p("div"),X.innerHTML=et,K=g(),M=p("div"),te.c(),xe=g(),B=p("div"),W=p("div"),Q=p("div"),O=p("span"),O.textContent=be,He=g(),oe=p("h2"),D(J.$$.fragment),ie=g(),U=p("div"),U.textContent=ke,Me=g(),Z=p("div"),le=p("div"),L=p("span"),L.textContent=de,ue=g(),ce=p("h2"),D(ee.$$.fragment),Oe=g(),G=p("div"),G.textContent=it,at=g(),me=p("div"),$=p("div"),fe=p("span"),fe.textContent=Nt,qt=g(),Ue=p("h2"),D(qe.$$.fragment),jt=g(),je=p("div"),je.textContent=Bt,Ct=g(),Ce=p("div"),Le=p("div"),De=p("span"),De.textContent=Ht,Dt=g(),Qe=p("h2"),D(Ee.$$.fragment),Et=g(),Ie=p("div"),Ie.textContent=Mt,lt=g(),pe=p("div"),Te=p("div"),Re=p("div"),Ge=p("span"),Ge.textContent=Ot,It=g(),D(Ye.$$.fragment),Tt=g(),D(Ae.$$.fragment),Rt=g(),Se=p("div"),Ve=p("div"),ze=p("span"),ze.textContent=Ut,At=g(),D(Xe.$$.fragment),St=g(),D(Fe.$$.fragment),this.h()},l(a){ve&&ve.l(a),r=h(a);const d=cr("svelte-2igo1p",document.head);nt.l(d),n=u(d,"META",{name:!0,content:!0}),t=u(d,"META",{name:!0,content:!0}),he&&he.l(d),o=kt(),d.forEach(c),l=h(a),T&&T.l(a),s=h(a),R&&R.l(a),_=h(a),A&&A.l(a),k=h(a),S&&S.l(a),e=h(a),V&&V.l(a),x=h(a),F&&F.l(a),N=h(a),E=u(a,"DIV",{class:!0});var ge=I(E);P=u(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(P)!=="svelte-fsunjz"&&(P.textContent=ne),Be=h(ge),z=u(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(z)!=="svelte-1l37hr9"&&(z.textContent=Ze),se=h(ge),H=u(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(H)!=="svelte-4fh2fm"&&(H.textContent=$e),ge.forEach(c),ye=h(a),X=u(a,"DIV",{class:!0,"data-svelte-h":!0}),Y(X)!=="svelte-7wbqns"&&(X.innerHTML=et),K=h(a),M=u(a,"DIV",{class:!0});var st=I(M);te.l(st),st.forEach(c),xe=h(a),B=u(a,"DIV",{class:!0});var _e=I(B);W=u(_e,"DIV",{class:!0});var Ke=I(W);Q=u(Ke,"DIV",{});var Pe=I(Q);O=u(Pe,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(O)!=="svelte-1lkmrf4"&&(O.textContent=be),He=h(Pe),oe=u(Pe,"H2",{style:!0,class:!0});var ot=I(oe);C(J.$$.fragment,ot),ot.forEach(c),Pe.forEach(c),ie=h(Ke),U=u(Ke,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(U)!=="svelte-1l6skdc"&&(U.textContent=ke),Ke.forEach(c),Me=h(_e),Z=u(_e,"DIV",{class:!0});var _t=I(Z);le=u(_t,"DIV",{});var dt=I(le);L=u(dt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(L)!=="svelte-1x51d4n"&&(L.textContent=de),ue=h(dt),ce=u(dt,"H2",{style:!0,class:!0});var Qt=I(ce);C(ee.$$.fragment,Qt),Qt.forEach(c),dt.forEach(c),Oe=h(_t),G=u(_t,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(G)!=="svelte-lmrt1d"&&(G.textContent=it),_t.forEach(c),at=h(_e),me=u(_e,"DIV",{class:!0});var mt=I(me);$=u(mt,"DIV",{});var ft=I($);fe=u(ft,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(fe)!=="svelte-17h8n09"&&(fe.textContent=Nt),qt=h(ft),Ue=u(ft,"H2",{style:!0,class:!0});var Gt=I(Ue);C(qe.$$.fragment,Gt),Gt.forEach(c),ft.forEach(c),jt=h(mt),je=u(mt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(je)!=="svelte-9bk19p"&&(je.textContent=Bt),mt.forEach(c),Ct=h(_e),Ce=u(_e,"DIV",{class:!0});var ut=I(Ce);Le=u(ut,"DIV",{});var pt=I(Le);De=u(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(De)!=="svelte-svysku"&&(De.textContent=Ht),Dt=h(pt),Qe=u(pt,"H2",{style:!0,class:!0});var Yt=I(Qe);C(Ee.$$.fragment,Yt),Yt.forEach(c),pt.forEach(c),Et=h(ut),Ie=u(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Ie)!=="svelte-1mtyb7h"&&(Ie.textContent=Mt),ut.forEach(c),_e.forEach(c),lt=h(a),pe=u(a,"DIV",{class:!0});var vt=I(pe);Te=u(vt,"DIV",{class:!0});var ht=I(Te);Re=u(ht,"DIV",{class:!0});var gt=I(Re);Ge=u(gt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(Ge)!=="svelte-18vfdji"&&(Ge.textContent=Ot),It=h(gt),C(Ye.$$.fragment,gt),gt.forEach(c),Tt=h(ht),C(Ae.$$.fragment,ht),ht.forEach(c),Rt=h(vt),Se=u(vt,"DIV",{class:!0});var $t=I(Se);Ve=u($t,"DIV",{class:!0});var yt=I(Ve);ze=u(yt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(ze)!=="svelte-1e5ypeo"&&(ze.textContent=Ut),At=h(yt),C(Xe.$$.fragment,yt),yt.forEach(c),St=h($t),C(Fe.$$.fragment,$t),$t.forEach(c),vt.forEach(c),this.h()},h(){f(n,"name","twitter:card"),f(n,"content","summary_large_image"),f(t,"name","twitter:site"),f(t,"content","@evidence_dev"),f(P,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(z,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(H,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f(E,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(X,"class","flex justify-between items-center mb-1.5 mt-0.5"),f(M,"class","mb-2 flex justify-start"),re(O,"color","#7B8DA6"),f(O,"class","text-[9px] font-bold uppercase tracking-wider"),re(oe,"color","#000000"),f(oe,"class","text-xl font-extrabold mt-0.5"),re(U,"color","#7B8DA6"),f(U,"class","text-[9px] mt-0.5"),f(W,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),re(L,"color","#7B8DA6"),f(L,"class","text-[9px] font-bold uppercase tracking-wider"),re(ce,"color","#000000"),f(ce,"class","text-xl font-extrabold mt-0.5"),re(G,"color","#7B8DA6"),f(G,"class","text-[9px] mt-0.5"),f(Z,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),re(fe,"color","#7B8DA6"),f(fe,"class","text-[9px] font-bold uppercase tracking-wider"),re(Ue,"color","#000000"),f(Ue,"class","text-xl font-extrabold mt-0.5"),re(je,"color","#7B8DA6"),f(je,"class","text-[9px] mt-0.5"),f(me,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),re(De,"color","#7B8DA6"),f(De,"class","text-[9px] font-bold uppercase tracking-wider"),re(Qe,"color","#000000"),f(Qe,"class","text-xl font-extrabold mt-0.5"),re(Ie,"color","#7B8DA6"),f(Ie,"class","text-[9px] mt-0.5"),f(Ce,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),f(B,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(Ge,"class","font-bold text-gray-700 text-xs"),f(Re,"class","flex items-center gap-1.5 mb-1.5"),f(Te,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(ze,"class","font-bold text-gray-700 text-xs"),f(Ve,"class","flex items-center gap-1.5 mb-1.5"),f(Se,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(pe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(a,d){ve&&ve.m(a,d),y(a,r,d),nt.m(document.head,null),m(document.head,n),m(document.head,t),he&&he.m(document.head,null),m(document.head,o),y(a,l,d),T&&T.m(a,d),y(a,s,d),R&&R.m(a,d),y(a,_,d),A&&A.m(a,d),y(a,k,d),S&&S.m(a,d),y(a,e,d),V&&V.m(a,d),y(a,x,d),F&&F.m(a,d),y(a,N,d),y(a,E,d),m(E,P),m(E,Be),m(E,z),m(E,se),m(E,H),y(a,ye,d),y(a,X,d),y(a,K,d),y(a,M,d),te.m(M,null),y(a,xe,d),y(a,B,d),m(B,W),m(W,Q),m(Q,O),m(Q,He),m(Q,oe),j(J,oe,null),m(W,ie),m(W,U),m(B,Me),m(B,Z),m(Z,le),m(le,L),m(le,ue),m(le,ce),j(ee,ce,null),m(Z,Oe),m(Z,G),m(B,at),m(B,me),m(me,$),m($,fe),m($,qt),m($,Ue),j(qe,Ue,null),m(me,jt),m(me,je),m(B,Ct),m(B,Ce),m(Ce,Le),m(Le,De),m(Le,Dt),m(Le,Qe),j(Ee,Qe,null),m(Ce,Et),m(Ce,Ie),y(a,lt,d),y(a,pe,d),m(pe,Te),m(Te,Re),m(Re,Ge),m(Re,It),j(Ye,Re,null),m(Te,Tt),j(Ae,Te,null),m(pe,Rt),m(pe,Se),m(Se,Ve),m(Ve,ze),m(Ve,At),j(Xe,Ve,null),m(Se,St),j(Fe,Se,null),ct=!0,Vt||(Lt=[Ft(P,"click",i[35]),Ft(z,"click",i[36]),Ft(H,"click",i[37])],Vt=!0)},p(a,d){typeof b<"u"&&b.title&&b.hide_title!==!0&&ve.p(a,d),nt.p(a,d),typeof b=="object"&&he.p(a,d),a[0]?T?(T.p(a,d),d[0]&1&&v(T,1)):(T=Zt(a),T.c(),v(T,1),T.m(s.parentNode,s)):T&&(Je(),w(T,1,1,()=>{T=null}),We()),a[1]?R?(R.p(a,d),d[0]&2&&v(R,1)):(R=er(a),R.c(),v(R,1),R.m(_.parentNode,_)):R&&(Je(),w(R,1,1,()=>{R=null}),We()),a[2]?A?(A.p(a,d),d[0]&4&&v(A,1)):(A=tr(a),A.c(),v(A,1),A.m(k.parentNode,k)):A&&(Je(),w(A,1,1,()=>{A=null}),We()),a[3]?S?(S.p(a,d),d[0]&8&&v(S,1)):(S=rr(a),S.c(),v(S,1),S.m(e.parentNode,e)):S&&(Je(),w(S,1,1,()=>{S=null}),We()),a[4]?V?(V.p(a,d),d[0]&16&&v(V,1)):(V=ar(a),V.c(),v(V,1),V.m(x.parentNode,x)):V&&(Je(),w(V,1,1,()=>{V=null}),We()),a[5]?F?(F.p(a,d),d[0]&32&&v(F,1)):(F=nr(a),F.c(),v(F,1),F.m(N.parentNode,N)):F&&(Je(),w(F,1,1,()=>{F=null}),We()),d[0]&64&&or(we,we=a[6])?(Je(),w(te,1,1,Ne),We(),te=sr(a),te.c(),v(te,1),te.m(M,null)):te.p(a,d);const ge={};d[0]&1&&(ge.data=a[0]),J.$set(ge);const st={};d[0]&2&&(st.data=a[1]),ee.$set(st);const _e={};d[0]&4&&(_e.data=a[2]),qe.$set(_e);const Ke={};d[0]&8&&(Ke.data=a[3]),Ee.$set(Ke);const Pe={};d[0]&16&&(Pe.data=a[4]),d[1]&2097152&&(Pe.$$scope={dirty:d,ctx:a}),Ae.$set(Pe);const ot={};d[0]&32&&(ot.data=a[5]),Fe.$set(ot)},i(a){ct||(v(T),v(R),v(A),v(S),v(V),v(F),v(te),v(J.$$.fragment,a),v(ee.$$.fragment,a),v(qe.$$.fragment,a),v(Ee.$$.fragment,a),v(Ye.$$.fragment,a),v(Ae.$$.fragment,a),v(Xe.$$.fragment,a),v(Fe.$$.fragment,a),ct=!0)},o(a){w(T),w(R),w(A),w(S),w(V),w(F),w(te),w(J.$$.fragment,a),w(ee.$$.fragment,a),w(qe.$$.fragment,a),w(Ee.$$.fragment,a),w(Ye.$$.fragment,a),w(Ae.$$.fragment,a),w(Xe.$$.fragment,a),w(Fe.$$.fragment,a),ct=!1},d(a){a&&(c(r),c(l),c(s),c(_),c(k),c(e),c(x),c(N),c(E),c(ye),c(X),c(K),c(M),c(xe),c(B),c(lt),c(pe)),ve&&ve.d(a),nt.d(a),c(n),c(t),he&&he.d(a),c(o),T&&T.d(a),R&&R.d(a),A&&A.d(a),S&&S.d(a),V&&V.d(a),F&&F.d(a),te.d(a),q(J),q(ee),q(qe),q(Ee),q(Ye),q(Ae),q(Xe),q(Fe),Vt=!1,lr(Lt)}}}const b={title:"Operations & Catalog Analytics"};function Fr(i,r,n){let t,o;zt(i,kr,$=>n(34,t=$)),zt(i,Jt,$=>n(42,o=$));let{data:l}=r,{data:s={},customFormattingSettings:_,__db:k,inputs:e}=l;_r(Jt,o="dcaa3d1cfc44106aedf7c7de69b52d92",o);let x=gr(xr(e));dr(x.subscribe($=>n(9,e=$))),mr(wr,{getCustomFormats:()=>_.customFormats||[]});const N=($,fe)=>br(k.query,$,{query_name:fe});$r(N),t.params,Xt(()=>!0);let E={initialData:void 0,initialError:void 0},P=ae`select count(distinct project_id) as active_projects
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
  end`;s.kpi_active_projects_data&&(s.kpi_active_projects_data instanceof Error?E.initialError=s.kpi_active_projects_data:E.initialData=s.kpi_active_projects_data,s.kpi_active_projects_columns&&(E.knownColumns=s.kpi_active_projects_columns));let Be,z=!1;const Ze=tt.createReactive({callback:$=>{n(0,Be=$)},execFn:N},{id:"kpi_active_projects",...E});Ze(ne,{noResolve:P,...E}),globalThis[Symbol.for("kpi_active_projects")]={get value(){return Be}};let se={initialData:void 0,initialError:void 0},H=ae`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,$e=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_completion_rate_data&&(s.kpi_completion_rate_data instanceof Error?se.initialError=s.kpi_completion_rate_data:se.initialData=s.kpi_completion_rate_data,s.kpi_completion_rate_columns&&(se.knownColumns=s.kpi_completion_rate_columns));let ye,X=!1;const et=tt.createReactive({callback:$=>{n(1,ye=$)},execFn:N},{id:"kpi_completion_rate",...se});et($e,{noResolve:H,...se}),globalThis[Symbol.for("kpi_completion_rate")]={get value(){return ye}};let K={initialData:void 0,initialError:void 0},M=ae`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,we=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_total_catalog_value_data&&(s.kpi_total_catalog_value_data instanceof Error?K.initialError=s.kpi_total_catalog_value_data:K.initialData=s.kpi_total_catalog_value_data,s.kpi_total_catalog_value_columns&&(K.knownColumns=s.kpi_total_catalog_value_columns));let xe,B=!1;const W=tt.createReactive({callback:$=>{n(2,xe=$)},execFn:N},{id:"kpi_total_catalog_value",...K});W(we,{noResolve:M,...K}),globalThis[Symbol.for("kpi_total_catalog_value")]={get value(){return xe}};let Q={initialData:void 0,initialError:void 0},O=ae`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,be=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_total_variants_data&&(s.kpi_total_variants_data instanceof Error?Q.initialError=s.kpi_total_variants_data:Q.initialData=s.kpi_total_variants_data,s.kpi_total_variants_columns&&(Q.knownColumns=s.kpi_total_variants_columns));let He,oe=!1;const J=tt.createReactive({callback:$=>{n(3,He=$)},execFn:N},{id:"kpi_total_variants",...Q});J(be,{noResolve:O,...Q}),globalThis[Symbol.for("kpi_total_variants")]={get value(){return He}};let ie={initialData:void 0,initialError:void 0},U=ae`select
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
order by status asc, project_name asc`,ke=`select
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
order by status asc, project_name asc`;s.detailed_projects_data&&(s.detailed_projects_data instanceof Error?ie.initialError=s.detailed_projects_data:ie.initialData=s.detailed_projects_data,s.detailed_projects_columns&&(ie.knownColumns=s.detailed_projects_columns));let Me,Z=!1;const le=tt.createReactive({callback:$=>{n(4,Me=$)},execFn:N},{id:"detailed_projects",...ie});le(ke,{noResolve:U,...ie}),globalThis[Symbol.for("detailed_projects")]={get value(){return Me}};let L={initialData:void 0,initialError:void 0},de=ae`select
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
order by average_price desc`;s.vendor_matrix_data&&(s.vendor_matrix_data instanceof Error?L.initialError=s.vendor_matrix_data:L.initialData=s.vendor_matrix_data,s.vendor_matrix_columns&&(L.knownColumns=s.vendor_matrix_columns));let ce,ee=!1;const Oe=tt.createReactive({callback:$=>{n(5,ce=$)},execFn:N},{id:"vendor_matrix",...L});Oe(ue,{noResolve:de,...L}),globalThis[Symbol.for("vendor_matrix")]={get value(){return ce}};let G="ytd";Xt(()=>{if(e){const $=t.url.searchParams.get("time_filter");n(9,e.time_filter=$||"ytd",e)}});const it=()=>Pt(`/?time_filter=${G}`),at=()=>Pt(`/sales?time_filter=${G}`),me=()=>Pt(`/operations?time_filter=${G}`);return i.$$set=$=>{"data"in $&&n(7,l=$.data)},i.$$.update=()=>{if(i.$$.dirty[0]&128&&n(8,{data:s={},customFormattingSettings:_,__db:k}=l,s),i.$$.dirty[0]&256&&yr.set(Object.keys(s).length>0),i.$$.dirty[1]&8&&t.params,i.$$.dirty[0]&512&&n(11,P=ae`select count(distinct project_id) as active_projects
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
  end`),i.$$.dirty[0]&15360&&(P||!z?P||(Ze(ne,{noResolve:P,...E}),n(13,z=!0)):Ze(ne,{noResolve:P})),i.$$.dirty[0]&512&&n(15,H=ae`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&512&&n(16,$e=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&245760&&(H||!X?H||(et($e,{noResolve:H,...se}),n(17,X=!0)):et($e,{noResolve:H})),i.$$.dirty[0]&512&&n(19,M=ae`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&512&&n(20,we=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&3932160&&(M||!B?M||(W(we,{noResolve:M,...K}),n(21,B=!0)):W(we,{noResolve:M})),i.$$.dirty[0]&512&&n(23,O=ae`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&512&&n(24,be=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),i.$$.dirty[0]&62914560&&(O||!oe?O||(J(be,{noResolve:O,...Q}),n(25,oe=!0)):J(be,{noResolve:O})),i.$$.dirty[0]&512&&n(27,U=ae`select
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
order by status asc, project_name asc`),i.$$.dirty[0]&512&&n(28,ke=`select
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
order by status asc, project_name asc`),i.$$.dirty[0]&1006632960&&(U||!Z?U||(le(ke,{noResolve:U,...ie}),n(29,Z=!0)):le(ke,{noResolve:U})),i.$$.dirty[0]&512&&n(31,de=ae`select
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
order by average_price desc`),i.$$.dirty[0]&1073741824|i.$$.dirty[1]&7&&(de||!ee?de||(Oe(ue,{noResolve:de,...L}),n(33,ee=!0)):Oe(ue,{noResolve:de})),i.$$.dirty[0]&512&&n(6,G=(e==null?void 0:e.time_filter)||"ytd"),i.$$.dirty[0]&512&&e&&e.time_filter)try{const $=new URL(window.location.href);$.searchParams.get("time_filter")!==e.time_filter&&($.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",$.pathname+$.search))}catch{}},[Be,ye,xe,He,Me,ce,G,l,s,e,E,P,ne,z,se,H,$e,X,K,M,we,B,Q,O,be,oe,ie,U,ke,Z,L,de,ue,ee,t,it,at,me]}class Qr extends pr{constructor(r){super(),vr(this,r,Fr,Vr,or,{data:7},null,[-1,-1])}}export{Qr as component};
