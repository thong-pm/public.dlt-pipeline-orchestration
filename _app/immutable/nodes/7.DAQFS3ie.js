import{s as dr,d as c,b as m,i as w,e as f,z as ae,k as h,A as fr,h as u,r as It,j as q,x as Ct,q as _e,n as g,m as p,y as Et,t as Zt,B as ur,C as pr,D as vr,E as er,v as Fe}from"../chunks/scheduler.Ch8ub0mh.js";import{S as hr,i as gr,d as j,t as y,a as v,c as ze,m as D,b as C,e as E,g as Ke}from"../chunks/index.Bs0zddgu.js";import{a as tr,D as $r,e as wr,s as yr,Q as at,p as br,b as qt,c as rr,r as ar,d as xr}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.xsgxVxPN.js";import{b as nt,w as kr}from"../chunks/entry.Dr-nKPZE.js";import{h as ne,p as qr}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as jr}from"../chunks/stores.CNQLrojQ.js";import{V as jt,B as Dr,Q as st,a as Cr,b as Dt}from"../chunks/Value.DxVo6KCs.js";function Er(o){let r,n=x.title+"",t;return{c(){r=p("h1"),t=Et(n),this.h()},l(i){r=u(i,"H1",{class:!0});var l=q(r);t=Ct(l,n),l.forEach(c),this.h()},h(){m(r,"class","title")},m(i,l){w(i,r,l),f(r,t)},p:Fe,d(i){i&&c(r)}}}function Ir(o){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:Fe,p:Fe,d:Fe}}function Ar(o){let r,n,t,i,l;return document.title=r=x.title,{c(){n=g(),t=p("meta"),i=g(),l=p("meta"),this.h()},l(s){n=h(s),t=u(s,"META",{property:!0,content:!0}),i=h(s),l=u(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_;m(t,"property","og:title"),m(t,"content",((s=x.og)==null?void 0:s.title)??x.title),m(l,"name","twitter:title"),m(l,"content",((_=x.og)==null?void 0:_.title)??x.title)},m(s,_){w(s,n,_),w(s,t,_),w(s,i,_),w(s,l,_)},p(s,_){_&0&&r!==(r=x.title)&&(document.title=r)},d(s){s&&(c(n),c(t),c(i),c(l))}}}function Rr(o){var l,s;let r,n,t=(x.description||((l=x.og)==null?void 0:l.description))&&Tr(),i=((s=x.og)==null?void 0:s.image)&&Sr();return{c(){t&&t.c(),r=g(),i&&i.c(),n=It()},l(_){t&&t.l(_),r=h(_),i&&i.l(_),n=It()},m(_,k){t&&t.m(_,k),w(_,r,k),i&&i.m(_,k),w(_,n,k)},p(_,k){var e,b;(x.description||(e=x.og)!=null&&e.description)&&t.p(_,k),(b=x.og)!=null&&b.image&&i.p(_,k)},d(_){_&&(c(r),c(n)),t&&t.d(_),i&&i.d(_)}}}function Tr(o){let r,n,t,i,l;return{c(){r=p("meta"),n=g(),t=p("meta"),i=g(),l=p("meta"),this.h()},l(s){r=u(s,"META",{name:!0,content:!0}),n=h(s),t=u(s,"META",{property:!0,content:!0}),i=h(s),l=u(s,"META",{name:!0,content:!0}),this.h()},h(){var s,_,k;m(r,"name","description"),m(r,"content",x.description??((s=x.og)==null?void 0:s.description)),m(t,"property","og:description"),m(t,"content",((_=x.og)==null?void 0:_.description)??x.description),m(l,"name","twitter:description"),m(l,"content",((k=x.og)==null?void 0:k.description)??x.description)},m(s,_){w(s,r,_),w(s,n,_),w(s,t,_),w(s,i,_),w(s,l,_)},p:Fe,d(s){s&&(c(r),c(n),c(t),c(i),c(l))}}}function Sr(o){let r,n,t;return{c(){r=p("meta"),n=g(),t=p("meta"),this.h()},l(i){r=u(i,"META",{property:!0,content:!0}),n=h(i),t=u(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;m(r,"property","og:image"),m(r,"content",rr((i=x.og)==null?void 0:i.image)),m(t,"name","twitter:image"),m(t,"content",rr((l=x.og)==null?void 0:l.image))},m(i,l){w(i,r,l),w(i,n,l),w(i,t,l)},p:Fe,d(i){i&&(c(r),c(n),c(t))}}}function nr(o){let r,n;return r=new st({props:{queryID:"kpi_active_projects",queryResult:o[0]}}),{c(){E(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,i){D(r,t,i),n=!0},p(t,i){const l={};i[0]&1&&(l.queryResult=t[0]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){j(r,t)}}}function sr(o){let r,n;return r=new st({props:{queryID:"kpi_completion_rate",queryResult:o[1]}}),{c(){E(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,i){D(r,t,i),n=!0},p(t,i){const l={};i[0]&2&&(l.queryResult=t[1]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){j(r,t)}}}function ir(o){let r,n;return r=new st({props:{queryID:"kpi_total_catalog_value",queryResult:o[2]}}),{c(){E(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,i){D(r,t,i),n=!0},p(t,i){const l={};i[0]&4&&(l.queryResult=t[2]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){j(r,t)}}}function or(o){let r,n;return r=new st({props:{queryID:"kpi_total_variants",queryResult:o[3]}}),{c(){E(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,i){D(r,t,i),n=!0},p(t,i){const l={};i[0]&8&&(l.queryResult=t[3]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){j(r,t)}}}function lr(o){let r,n;return r=new st({props:{queryID:"detailed_projects",queryResult:o[4]}}),{c(){E(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,i){D(r,t,i),n=!0},p(t,i){const l={};i[0]&16&&(l.queryResult=t[4]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){j(r,t)}}}function cr(o){let r,n;return r=new st({props:{queryID:"vendor_matrix",queryResult:o[5]}}),{c(){E(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,i){D(r,t,i),n=!0},p(t,i){const l={};i[0]&32&&(l.queryResult=t[5]),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){j(r,t)}}}function Vr(o){let r,n,t,i,l,s,_,k;return r=new Dt({props:{valueLabel:"MTD",value:"mtd",default:o[6]==="mtd"}}),t=new Dt({props:{valueLabel:"QTD",value:"qtd",default:o[6]==="qtd"}}),l=new Dt({props:{valueLabel:"YTD",value:"ytd",default:o[6]==="ytd"}}),_=new Dt({props:{valueLabel:"All Time",value:"all",default:o[6]==="all"}}),{c(){E(r.$$.fragment),n=g(),E(t.$$.fragment),i=g(),E(l.$$.fragment),s=g(),E(_.$$.fragment)},l(e){C(r.$$.fragment,e),n=h(e),C(t.$$.fragment,e),i=h(e),C(l.$$.fragment,e),s=h(e),C(_.$$.fragment,e)},m(e,b){D(r,e,b),w(e,n,b),D(t,e,b),w(e,i,b),D(l,e,b),w(e,s,b),D(_,e,b),k=!0},p(e,b){const B={};b[0]&64&&(B.default=e[6]==="mtd"),r.$set(B);const I={};b[0]&64&&(I.default=e[6]==="qtd"),t.$set(I);const N={};b[0]&64&&(N.default=e[6]==="ytd"),l.$set(N);const G={};b[0]&64&&(G.default=e[6]==="all"),_.$set(G)},i(e){k||(v(r.$$.fragment,e),v(t.$$.fragment,e),v(l.$$.fragment,e),v(_.$$.fragment,e),k=!0)},o(e){y(r.$$.fragment,e),y(t.$$.fragment,e),y(l.$$.fragment,e),y(_.$$.fragment,e),k=!1},d(e){e&&(c(n),c(i),c(s)),j(r,e),j(t,e),j(l,e),j(_,e)}}}function _r(o){let r,n;return r=new Cr({props:{name:"time_filter",defaultValue:o[6],$$slots:{default:[Vr]},$$scope:{ctx:o}}}),{c(){E(r.$$.fragment)},l(t){C(r.$$.fragment,t)},m(t,i){D(r,t,i),n=!0},p(t,i){const l={};i[0]&64&&(l.defaultValue=t[6]),i[0]&64|i[1]&262144&&(l.$$scope={dirty:i,ctx:t}),r.$set(l)},i(t){n||(v(r.$$.fragment,t),n=!0)},o(t){y(r.$$.fragment,t),n=!1},d(t){j(r,t)}}}function Fr(o){let r,n,t,i,l,s,_,k;return r=new qt({props:{id:"project_number",label:"Number"}}),t=new qt({props:{id:"project_name",label:"Project Name"}}),l=new qt({props:{id:"company_name",label:"Client"}}),_=new qt({props:{id:"status",label:"Status"}}),{c(){E(r.$$.fragment),n=g(),E(t.$$.fragment),i=g(),E(l.$$.fragment),s=g(),E(_.$$.fragment)},l(e){C(r.$$.fragment,e),n=h(e),C(t.$$.fragment,e),i=h(e),C(l.$$.fragment,e),s=h(e),C(_.$$.fragment,e)},m(e,b){D(r,e,b),w(e,n,b),D(t,e,b),w(e,i,b),D(l,e,b),w(e,s,b),D(_,e,b),k=!0},p:Fe,i(e){k||(v(r.$$.fragment,e),v(t.$$.fragment,e),v(l.$$.fragment,e),v(_.$$.fragment,e),k=!0)},o(e){y(r.$$.fragment,e),y(t.$$.fragment,e),y(l.$$.fragment,e),y(_.$$.fragment,e),k=!1},d(e){e&&(c(n),c(i),c(s)),j(r,e),j(t,e),j(l,e),j(_,e)}}}function Pr(o){let r,n,t,i,l,s,_,k,e,b,B,I,N,G,he,Pe,Y,se,W,me,X,Ne,ge,z,H,$e='<div class="text-base font-extrabold text-[#264773]">Operations &amp; Product Catalog</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Procore &amp; Shopify</div>',we,K,Je=o[6],J,A,L,ie,Z,Ze="🏗️ Ongoing Active Projects",oe,O,U,Be,ee,et="Active builds tracked in Procore",le,M,Q,te,tt="✅ Project Completion Rate",He,de,$,it,ye,Ot="Ratio of completed jobs in date range",At,be,Me,xe,Lt="🛍️ Avg Variant Pricing",Rt,Oe,ke,Tt,qe,Ut="Mean price of Shopify variants",St,je,Le,De,Qt="📦 Shopify Variant Count",Vt,Ue,Ce,Ft,Ee,Gt="Total unique variants registered",dt,fe,Ie,Ae,Qe,Yt="Detailed Procore Projects List",Pt,Ge,Nt,Re,Bt,Te,Se,Ye,Wt="Shopify Average Variant Price by Vendor",Ht,We,Mt,Ve,Xe,ue=typeof x<"u"&&x.title&&x.hide_title!==!0&&Er();function mr(a,d){return typeof x<"u"&&x.title?Ar:Ir}let ot=mr()(o),pe=typeof x=="object"&&Rr(),R=o[0]&&nr(o),T=o[1]&&sr(o),S=o[2]&&ir(o),V=o[3]&&or(o),F=o[4]&&lr(o),P=o[5]&&cr(o),re=_r(o);return U=new jt({props:{data:o[0],column:"active_projects"}}),$=new jt({props:{data:o[1],column:"completion_rate",fmt:"pct1"}}),ke=new jt({props:{data:o[2],column:"avg_price",fmt:"usd"}}),Ce=new jt({props:{data:o[3],column:"total_variants"}}),Ge=new tr({props:{description:"Lists individual projects managed in Procore with their numbers, names, client names, and active status."}}),Re=new $r({props:{data:o[4],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Fr]},$$scope:{ctx:o}}}),We=new tr({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),Ve=new Dr({props:{data:o[5],x:"vendor",y:"average_price",swapXY:"true",fillOpacity:"0.9",yFmt:"usd0",labels:!0,labelFmt:"usd0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{xAxis:{splitNumber:3},grid:{top:25,bottom:15,left:40,right:45}}}}),{c(){ue&&ue.c(),r=g(),ot.c(),n=p("meta"),t=p("meta"),pe&&pe.c(),i=It(),l=g(),R&&R.c(),s=g(),T&&T.c(),_=g(),S&&S.c(),k=g(),V&&V.c(),e=g(),F&&F.c(),b=g(),P&&P.c(),B=g(),I=p("div"),N=p("a"),G=Et("Overview Cockpit"),Pe=g(),Y=p("a"),se=Et("Sales & Win-Loss"),me=g(),X=p("a"),Ne=Et("Operations & Vendors"),z=g(),H=p("div"),H.innerHTML=$e,we=g(),K=p("div"),re.c(),J=g(),A=p("div"),L=p("div"),ie=p("div"),Z=p("span"),Z.textContent=Ze,oe=g(),O=p("h2"),E(U.$$.fragment),Be=g(),ee=p("div"),ee.textContent=et,le=g(),M=p("div"),Q=p("div"),te=p("span"),te.textContent=tt,He=g(),de=p("h2"),E($.$$.fragment),it=g(),ye=p("div"),ye.textContent=Ot,At=g(),be=p("div"),Me=p("div"),xe=p("span"),xe.textContent=Lt,Rt=g(),Oe=p("h2"),E(ke.$$.fragment),Tt=g(),qe=p("div"),qe.textContent=Ut,St=g(),je=p("div"),Le=p("div"),De=p("span"),De.textContent=Qt,Vt=g(),Ue=p("h2"),E(Ce.$$.fragment),Ft=g(),Ee=p("div"),Ee.textContent=Gt,dt=g(),fe=p("div"),Ie=p("div"),Ae=p("div"),Qe=p("span"),Qe.textContent=Yt,Pt=g(),E(Ge.$$.fragment),Nt=g(),E(Re.$$.fragment),Bt=g(),Te=p("div"),Se=p("div"),Ye=p("span"),Ye.textContent=Wt,Ht=g(),E(We.$$.fragment),Mt=g(),E(Ve.$$.fragment),this.h()},l(a){ue&&ue.l(a),r=h(a);const d=fr("svelte-2igo1p",document.head);ot.l(d),n=u(d,"META",{name:!0,content:!0}),t=u(d,"META",{name:!0,content:!0}),pe&&pe.l(d),i=It(),d.forEach(c),l=h(a),R&&R.l(a),s=h(a),T&&T.l(a),_=h(a),S&&S.l(a),k=h(a),V&&V.l(a),e=h(a),F&&F.l(a),b=h(a),P&&P.l(a),B=h(a),I=u(a,"DIV",{class:!0});var ve=q(I);N=u(ve,"A",{href:!0,class:!0});var lt=q(N);G=Ct(lt,"Overview Cockpit"),lt.forEach(c),Pe=h(ve),Y=u(ve,"A",{href:!0,class:!0});var ct=q(Y);se=Ct(ct,"Sales & Win-Loss"),ct.forEach(c),me=h(ve),X=u(ve,"A",{href:!0,class:!0});var _t=q(X);Ne=Ct(_t,"Operations & Vendors"),_t.forEach(c),ve.forEach(c),z=h(a),H=u(a,"DIV",{class:!0,"data-svelte-h":!0}),_e(H)!=="svelte-7wbqns"&&(H.innerHTML=$e),we=h(a),K=u(a,"DIV",{class:!0});var rt=q(K);re.l(rt),rt.forEach(c),J=h(a),A=u(a,"DIV",{class:!0});var ce=q(A);L=u(ce,"DIV",{class:!0});var mt=q(L);ie=u(mt,"DIV",{});var ft=q(ie);Z=u(ft,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),_e(Z)!=="svelte-1lkmrf4"&&(Z.textContent=Ze),oe=h(ft),O=u(ft,"H2",{style:!0,class:!0});var Xt=q(O);C(U.$$.fragment,Xt),Xt.forEach(c),ft.forEach(c),Be=h(mt),ee=u(mt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),_e(ee)!=="svelte-1l6skdc"&&(ee.textContent=et),mt.forEach(c),le=h(ce),M=u(ce,"DIV",{class:!0});var ut=q(M);Q=u(ut,"DIV",{});var pt=q(Q);te=u(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),_e(te)!=="svelte-1x51d4n"&&(te.textContent=tt),He=h(pt),de=u(pt,"H2",{style:!0,class:!0});var zt=q(de);C($.$$.fragment,zt),zt.forEach(c),pt.forEach(c),it=h(ut),ye=u(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),_e(ye)!=="svelte-lmrt1d"&&(ye.textContent=Ot),ut.forEach(c),At=h(ce),be=u(ce,"DIV",{class:!0});var vt=q(be);Me=u(vt,"DIV",{});var ht=q(Me);xe=u(ht,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),_e(xe)!=="svelte-17h8n09"&&(xe.textContent=Lt),Rt=h(ht),Oe=u(ht,"H2",{style:!0,class:!0});var Kt=q(Oe);C(ke.$$.fragment,Kt),Kt.forEach(c),ht.forEach(c),Tt=h(vt),qe=u(vt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),_e(qe)!=="svelte-9bk19p"&&(qe.textContent=Ut),vt.forEach(c),St=h(ce),je=u(ce,"DIV",{class:!0});var gt=q(je);Le=u(gt,"DIV",{});var $t=q(Le);De=u($t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),_e(De)!=="svelte-svysku"&&(De.textContent=Qt),Vt=h($t),Ue=u($t,"H2",{style:!0,class:!0});var Jt=q(Ue);C(Ce.$$.fragment,Jt),Jt.forEach(c),$t.forEach(c),Ft=h(gt),Ee=u(gt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),_e(Ee)!=="svelte-1mtyb7h"&&(Ee.textContent=Gt),gt.forEach(c),ce.forEach(c),dt=h(a),fe=u(a,"DIV",{class:!0});var wt=q(fe);Ie=u(wt,"DIV",{class:!0});var yt=q(Ie);Ae=u(yt,"DIV",{class:!0});var bt=q(Ae);Qe=u(bt,"SPAN",{class:!0,"data-svelte-h":!0}),_e(Qe)!=="svelte-18vfdji"&&(Qe.textContent=Yt),Pt=h(bt),C(Ge.$$.fragment,bt),bt.forEach(c),Nt=h(yt),C(Re.$$.fragment,yt),yt.forEach(c),Bt=h(wt),Te=u(wt,"DIV",{class:!0});var xt=q(Te);Se=u(xt,"DIV",{class:!0});var kt=q(Se);Ye=u(kt,"SPAN",{class:!0,"data-svelte-h":!0}),_e(Ye)!=="svelte-1e5ypeo"&&(Ye.textContent=Wt),Ht=h(kt),C(We.$$.fragment,kt),kt.forEach(c),Mt=h(xt),C(Ve.$$.fragment,xt),xt.forEach(c),wt.forEach(c),this.h()},h(){m(n,"name","twitter:card"),m(n,"content","summary_large_image"),m(t,"name","twitter:site"),m(t,"content","@evidence_dev"),m(N,"href",he=`/public.dlt-pipeline-orchestration/${nt}/?time_filter=${o[6]}`),m(N,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(Y,"href",W=`/public.dlt-pipeline-orchestration/${nt}/sales?time_filter=${o[6]}`),m(Y,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(X,"href",ge=`/public.dlt-pipeline-orchestration/${nt}/operations?time_filter=${o[6]}`),m(X,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),m(I,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(H,"class","flex justify-between items-center mb-1.5 mt-0.5"),m(K,"class","mb-2 flex justify-start"),ae(Z,"color","#7B8DA6"),m(Z,"class","text-[9px] font-bold uppercase tracking-wider"),ae(O,"color","#000000"),m(O,"class","text-xl font-extrabold mt-0.5"),ae(ee,"color","#7B8DA6"),m(ee,"class","text-[9px] mt-0.5"),m(L,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ae(te,"color","#7B8DA6"),m(te,"class","text-[9px] font-bold uppercase tracking-wider"),ae(de,"color","#000000"),m(de,"class","text-xl font-extrabold mt-0.5"),ae(ye,"color","#7B8DA6"),m(ye,"class","text-[9px] mt-0.5"),m(M,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ae(xe,"color","#7B8DA6"),m(xe,"class","text-[9px] font-bold uppercase tracking-wider"),ae(Oe,"color","#000000"),m(Oe,"class","text-xl font-extrabold mt-0.5"),ae(qe,"color","#7B8DA6"),m(qe,"class","text-[9px] mt-0.5"),m(be,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ae(De,"color","#7B8DA6"),m(De,"class","text-[9px] font-bold uppercase tracking-wider"),ae(Ue,"color","#000000"),m(Ue,"class","text-xl font-extrabold mt-0.5"),ae(Ee,"color","#7B8DA6"),m(Ee,"class","text-[9px] mt-0.5"),m(je,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),m(A,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(Qe,"class","font-bold text-gray-700 text-xs"),m(Ae,"class","flex items-center gap-1.5 mb-1.5"),m(Ie,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Ye,"class","font-bold text-gray-700 text-xs"),m(Se,"class","flex items-center gap-1.5 mb-1.5"),m(Te,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(fe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(a,d){ue&&ue.m(a,d),w(a,r,d),ot.m(document.head,null),f(document.head,n),f(document.head,t),pe&&pe.m(document.head,null),f(document.head,i),w(a,l,d),R&&R.m(a,d),w(a,s,d),T&&T.m(a,d),w(a,_,d),S&&S.m(a,d),w(a,k,d),V&&V.m(a,d),w(a,e,d),F&&F.m(a,d),w(a,b,d),P&&P.m(a,d),w(a,B,d),w(a,I,d),f(I,N),f(N,G),f(I,Pe),f(I,Y),f(Y,se),f(I,me),f(I,X),f(X,Ne),w(a,z,d),w(a,H,d),w(a,we,d),w(a,K,d),re.m(K,null),w(a,J,d),w(a,A,d),f(A,L),f(L,ie),f(ie,Z),f(ie,oe),f(ie,O),D(U,O,null),f(L,Be),f(L,ee),f(A,le),f(A,M),f(M,Q),f(Q,te),f(Q,He),f(Q,de),D($,de,null),f(M,it),f(M,ye),f(A,At),f(A,be),f(be,Me),f(Me,xe),f(Me,Rt),f(Me,Oe),D(ke,Oe,null),f(be,Tt),f(be,qe),f(A,St),f(A,je),f(je,Le),f(Le,De),f(Le,Vt),f(Le,Ue),D(Ce,Ue,null),f(je,Ft),f(je,Ee),w(a,dt,d),w(a,fe,d),f(fe,Ie),f(Ie,Ae),f(Ae,Qe),f(Ae,Pt),D(Ge,Ae,null),f(Ie,Nt),D(Re,Ie,null),f(fe,Bt),f(fe,Te),f(Te,Se),f(Se,Ye),f(Se,Ht),D(We,Se,null),f(Te,Mt),D(Ve,Te,null),Xe=!0},p(a,d){typeof x<"u"&&x.title&&x.hide_title!==!0&&ue.p(a,d),ot.p(a,d),typeof x=="object"&&pe.p(a,d),a[0]?R?(R.p(a,d),d[0]&1&&v(R,1)):(R=nr(a),R.c(),v(R,1),R.m(s.parentNode,s)):R&&(Ke(),y(R,1,1,()=>{R=null}),ze()),a[1]?T?(T.p(a,d),d[0]&2&&v(T,1)):(T=sr(a),T.c(),v(T,1),T.m(_.parentNode,_)):T&&(Ke(),y(T,1,1,()=>{T=null}),ze()),a[2]?S?(S.p(a,d),d[0]&4&&v(S,1)):(S=ir(a),S.c(),v(S,1),S.m(k.parentNode,k)):S&&(Ke(),y(S,1,1,()=>{S=null}),ze()),a[3]?V?(V.p(a,d),d[0]&8&&v(V,1)):(V=or(a),V.c(),v(V,1),V.m(e.parentNode,e)):V&&(Ke(),y(V,1,1,()=>{V=null}),ze()),a[4]?F?(F.p(a,d),d[0]&16&&v(F,1)):(F=lr(a),F.c(),v(F,1),F.m(b.parentNode,b)):F&&(Ke(),y(F,1,1,()=>{F=null}),ze()),a[5]?P?(P.p(a,d),d[0]&32&&v(P,1)):(P=cr(a),P.c(),v(P,1),P.m(B.parentNode,B)):P&&(Ke(),y(P,1,1,()=>{P=null}),ze()),(!Xe||d[0]&64&&he!==(he=`/public.dlt-pipeline-orchestration/${nt}/?time_filter=${a[6]}`))&&m(N,"href",he),(!Xe||d[0]&64&&W!==(W=`/public.dlt-pipeline-orchestration/${nt}/sales?time_filter=${a[6]}`))&&m(Y,"href",W),(!Xe||d[0]&64&&ge!==(ge=`/public.dlt-pipeline-orchestration/${nt}/operations?time_filter=${a[6]}`))&&m(X,"href",ge),d[0]&64&&dr(Je,Je=a[6])?(Ke(),y(re,1,1,Fe),ze(),re=_r(a),re.c(),v(re,1),re.m(K,null)):re.p(a,d);const ve={};d[0]&1&&(ve.data=a[0]),U.$set(ve);const lt={};d[0]&2&&(lt.data=a[1]),$.$set(lt);const ct={};d[0]&4&&(ct.data=a[2]),ke.$set(ct);const _t={};d[0]&8&&(_t.data=a[3]),Ce.$set(_t);const rt={};d[0]&16&&(rt.data=a[4]),d[1]&262144&&(rt.$$scope={dirty:d,ctx:a}),Re.$set(rt);const ce={};d[0]&32&&(ce.data=a[5]),Ve.$set(ce)},i(a){Xe||(v(R),v(T),v(S),v(V),v(F),v(P),v(re),v(U.$$.fragment,a),v($.$$.fragment,a),v(ke.$$.fragment,a),v(Ce.$$.fragment,a),v(Ge.$$.fragment,a),v(Re.$$.fragment,a),v(We.$$.fragment,a),v(Ve.$$.fragment,a),Xe=!0)},o(a){y(R),y(T),y(S),y(V),y(F),y(P),y(re),y(U.$$.fragment,a),y($.$$.fragment,a),y(ke.$$.fragment,a),y(Ce.$$.fragment,a),y(Ge.$$.fragment,a),y(Re.$$.fragment,a),y(We.$$.fragment,a),y(Ve.$$.fragment,a),Xe=!1},d(a){a&&(c(r),c(l),c(s),c(_),c(k),c(e),c(b),c(B),c(I),c(z),c(H),c(we),c(K),c(J),c(A),c(dt),c(fe)),ue&&ue.d(a),ot.d(a),c(n),c(t),pe&&pe.d(a),c(i),R&&R.d(a),T&&T.d(a),S&&S.d(a),V&&V.d(a),F&&F.d(a),P&&P.d(a),re.d(a),j(U),j($),j(ke),j(Ce),j(Ge),j(Re),j(We),j(Ve)}}}const x={title:"Operations & Catalog Analytics"};function Nr(o,r,n){let t,i;Zt(o,jr,$=>n(34,t=$)),Zt(o,ar,$=>n(39,i=$));let{data:l}=r,{data:s={},customFormattingSettings:_,__db:k,inputs:e}=l;ur(ar,i="dcaa3d1cfc44106aedf7c7de69b52d92",i);let b=wr(kr(e));pr(b.subscribe($=>n(9,e=$))),vr(xr,{getCustomFormats:()=>_.customFormats||[]});const B=($,it)=>qr(k.query,$,{query_name:it});yr(B),t.params,er(()=>!0);let I={initialData:void 0,initialError:void 0},N=ne`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,G=`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;s.kpi_active_projects_data&&(s.kpi_active_projects_data instanceof Error?I.initialError=s.kpi_active_projects_data:I.initialData=s.kpi_active_projects_data,s.kpi_active_projects_columns&&(I.knownColumns=s.kpi_active_projects_columns));let he,Pe=!1;const Y=at.createReactive({callback:$=>{n(0,he=$)},execFn:B},{id:"kpi_active_projects",...I});Y(G,{noResolve:N,...I}),globalThis[Symbol.for("kpi_active_projects")]={get value(){return he}};let se={initialData:void 0,initialError:void 0},W=ne`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,me=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_completion_rate_data&&(s.kpi_completion_rate_data instanceof Error?se.initialError=s.kpi_completion_rate_data:se.initialData=s.kpi_completion_rate_data,s.kpi_completion_rate_columns&&(se.knownColumns=s.kpi_completion_rate_columns));let X,Ne=!1;const ge=at.createReactive({callback:$=>{n(1,X=$)},execFn:B},{id:"kpi_completion_rate",...se});ge(me,{noResolve:W,...se}),globalThis[Symbol.for("kpi_completion_rate")]={get value(){return X}};let z={initialData:void 0,initialError:void 0},H=ne`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,$e=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_total_catalog_value_data&&(s.kpi_total_catalog_value_data instanceof Error?z.initialError=s.kpi_total_catalog_value_data:z.initialData=s.kpi_total_catalog_value_data,s.kpi_total_catalog_value_columns&&(z.knownColumns=s.kpi_total_catalog_value_columns));let we,K=!1;const Je=at.createReactive({callback:$=>{n(2,we=$)},execFn:B},{id:"kpi_total_catalog_value",...z});Je($e,{noResolve:H,...z}),globalThis[Symbol.for("kpi_total_catalog_value")]={get value(){return we}};let J={initialData:void 0,initialError:void 0},A=ne`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,L=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;s.kpi_total_variants_data&&(s.kpi_total_variants_data instanceof Error?J.initialError=s.kpi_total_variants_data:J.initialData=s.kpi_total_variants_data,s.kpi_total_variants_columns&&(J.knownColumns=s.kpi_total_variants_columns));let ie,Z=!1;const Ze=at.createReactive({callback:$=>{n(3,ie=$)},execFn:B},{id:"kpi_total_variants",...J});Ze(L,{noResolve:A,...J}),globalThis[Symbol.for("kpi_total_variants")]={get value(){return ie}};let oe={initialData:void 0,initialError:void 0},O=ne`select
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
order by status asc, project_name asc`,U=`select
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
order by status asc, project_name asc`;s.detailed_projects_data&&(s.detailed_projects_data instanceof Error?oe.initialError=s.detailed_projects_data:oe.initialData=s.detailed_projects_data,s.detailed_projects_columns&&(oe.knownColumns=s.detailed_projects_columns));let Be,ee=!1;const et=at.createReactive({callback:$=>{n(4,Be=$)},execFn:B},{id:"detailed_projects",...oe});et(U,{noResolve:O,...oe}),globalThis[Symbol.for("detailed_projects")]={get value(){return Be}};let le={initialData:void 0,initialError:void 0},M=ne`select
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
order by average_price desc`,Q=`select
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
order by average_price desc`;s.vendor_matrix_data&&(s.vendor_matrix_data instanceof Error?le.initialError=s.vendor_matrix_data:le.initialData=s.vendor_matrix_data,s.vendor_matrix_columns&&(le.knownColumns=s.vendor_matrix_columns));let te,tt=!1;const He=at.createReactive({callback:$=>{n(5,te=$)},execFn:B},{id:"vendor_matrix",...le});He(Q,{noResolve:M,...le}),globalThis[Symbol.for("vendor_matrix")]={get value(){return te}};let de="ytd";return er(()=>{if(e){const $=t.url.searchParams.get("time_filter");n(9,e.time_filter=$||"ytd",e)}}),o.$$set=$=>{"data"in $&&n(7,l=$.data)},o.$$.update=()=>{if(o.$$.dirty[0]&128&&n(8,{data:s={},customFormattingSettings:_,__db:k}=l,s),o.$$.dirty[0]&256&&br.set(Object.keys(s).length>0),o.$$.dirty[1]&8&&t.params,o.$$.dirty[0]&512&&n(11,N=ne`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),o.$$.dirty[0]&512&&n(12,G=`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),o.$$.dirty[0]&15360&&(N||!Pe?N||(Y(G,{noResolve:N,...I}),n(13,Pe=!0)):Y(G,{noResolve:N})),o.$$.dirty[0]&512&&n(15,W=ne`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),o.$$.dirty[0]&512&&n(16,me=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),o.$$.dirty[0]&245760&&(W||!Ne?W||(ge(me,{noResolve:W,...se}),n(17,Ne=!0)):ge(me,{noResolve:W})),o.$$.dirty[0]&512&&n(19,H=ne`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),o.$$.dirty[0]&512&&n(20,$e=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),o.$$.dirty[0]&3932160&&(H||!K?H||(Je($e,{noResolve:H,...z}),n(21,K=!0)):Je($e,{noResolve:H})),o.$$.dirty[0]&512&&n(23,A=ne`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),o.$$.dirty[0]&512&&n(24,L=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),o.$$.dirty[0]&62914560&&(A||!Z?A||(Ze(L,{noResolve:A,...J}),n(25,Z=!0)):Ze(L,{noResolve:A})),o.$$.dirty[0]&512&&n(27,O=ne`select
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
order by status asc, project_name asc`),o.$$.dirty[0]&512&&n(28,U=`select
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
order by status asc, project_name asc`),o.$$.dirty[0]&1006632960&&(O||!ee?O||(et(U,{noResolve:O,...oe}),n(29,ee=!0)):et(U,{noResolve:O})),o.$$.dirty[0]&512&&n(31,M=ne`select
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
order by average_price desc`),o.$$.dirty[0]&512&&n(32,Q=`select
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
order by average_price desc`),o.$$.dirty[0]&1073741824|o.$$.dirty[1]&7&&(M||!tt?M||(He(Q,{noResolve:M,...le}),n(33,tt=!0)):He(Q,{noResolve:M})),o.$$.dirty[0]&512&&n(6,de=(e==null?void 0:e.time_filter)||"ytd"),o.$$.dirty[0]&512&&e&&e.time_filter)try{const $=new URL(window.location.href);$.searchParams.get("time_filter")!==e.time_filter&&($.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",$.pathname+$.search))}catch{}},[he,X,we,ie,Be,te,de,l,s,e,I,N,G,Pe,se,W,me,Ne,z,H,$e,K,J,A,L,Z,oe,O,U,ee,le,M,Q,tt,t]}class Yr extends hr{constructor(r){super(),gr(this,r,Nr,Pr,dr,{data:7},null,[-1,-1])}}export{Yr as component};
