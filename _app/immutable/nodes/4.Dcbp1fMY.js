import{s as $a,d,b as m,i as $,e as _,z as ie,k as v,A as xa,h as p,r as Ir,j as b,x as $e,q as le,n as y,m as h,y as be,t as ia,B as ka,C as qa,D as Ca,E as la,v as kt}from"../chunks/scheduler.Ch8ub0mh.js";import{S as Ea,i as Da,d as x,t as g,a as f,c as Re,m as k,b as q,e as C,g as Ie}from"../chunks/index.Bs0zddgu.js";import{a as Sr,D as ja,b as xt,e as Sa,s as Ra,Q as Me,p as Ia,c as Kr,r as ca,d as Fa}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BOdx7Sm8.js";import{w as Ta}from"../chunks/entry.C3BhIM-K.js";import{h as H,p as Aa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Pa}from"../chunks/stores.lswrBr96.js";import{V as bt,B as Qr,Q as Be,a as Va,b as Rr}from"../chunks/Value.oUiEygC6.js";function Ma(s){let a,n=D.title+"",e;return{c(){a=h("h1"),e=be(n),this.h()},l(i){a=p(i,"H1",{class:!0});var l=b(a);e=$e(l,n),l.forEach(d),this.h()},h(){m(a,"class","title")},m(i,l){$(i,a,l),_(a,e)},p:kt,d(i){i&&d(a)}}}function Ba(s){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:kt,p:kt,d:kt}}function Na(s){let a,n,e,i,l;return document.title=a=D.title,{c(){n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;m(e,"property","og:title"),m(e,"content",((o=D.og)==null?void 0:o.title)??D.title),m(l,"name","twitter:title"),m(l,"content",((u=D.og)==null?void 0:u.title)??D.title)},m(o,u){$(o,n,u),$(o,e,u),$(o,i,u),$(o,l,u)},p(o,u){u&0&&a!==(a=D.title)&&(document.title=a)},d(o){o&&(d(n),d(e),d(i),d(l))}}}function Ha(s){var l,o;let a,n,e=(D.description||((l=D.og)==null?void 0:l.description))&&Oa(),i=((o=D.og)==null?void 0:o.image)&&La();return{c(){e&&e.c(),a=y(),i&&i.c(),n=Ir()},l(u){e&&e.l(u),a=v(u),i&&i.l(u),n=Ir()},m(u,E){e&&e.m(u,E),$(u,a,E),i&&i.m(u,E),$(u,n,E)},p(u,E){var t,j;(D.description||(t=D.og)!=null&&t.description)&&e.p(u,E),(j=D.og)!=null&&j.image&&i.p(u,E)},d(u){u&&(d(a),d(n)),e&&e.d(u),i&&i.d(u)}}}function Oa(s){let a,n,e,i,l;return{c(){a=h("meta"),n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){a=p(o,"META",{name:!0,content:!0}),n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u,E;m(a,"name","description"),m(a,"content",D.description??((o=D.og)==null?void 0:o.description)),m(e,"property","og:description"),m(e,"content",((u=D.og)==null?void 0:u.description)??D.description),m(l,"name","twitter:description"),m(l,"content",((E=D.og)==null?void 0:E.description)??D.description)},m(o,u){$(o,a,u),$(o,n,u),$(o,e,u),$(o,i,u),$(o,l,u)},p:kt,d(o){o&&(d(a),d(n),d(e),d(i),d(l))}}}function La(s){let a,n,e;return{c(){a=h("meta"),n=y(),e=h("meta"),this.h()},l(i){a=p(i,"META",{property:!0,content:!0}),n=v(i),e=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;m(a,"property","og:image"),m(a,"content",xt((i=D.og)==null?void 0:i.image)),m(e,"name","twitter:image"),m(e,"content",xt((l=D.og)==null?void 0:l.image))},m(i,l){$(i,a,l),$(i,n,l),$(i,e,l)},p:kt,d(i){i&&(d(a),d(n),d(e))}}}function _a(s){let a,n;return a=new Be({props:{queryID:"delivery_lag",queryResult:s[1]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&2&&(l.queryResult=e[1]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function da(s){let a,n;return a=new Be({props:{queryID:"pipeline_coverage",queryResult:s[2]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&4&&(l.queryResult=e[2]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ua(s){let a,n;return a=new Be({props:{queryID:"kpi_revenue",queryResult:s[3]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&8&&(l.queryResult=e[3]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ma(s){let a,n;return a=new Be({props:{queryID:"kpi_pipeline",queryResult:s[4]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&16&&(l.queryResult=e[4]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function fa(s){let a,n;return a=new Be({props:{queryID:"kpi_projects",queryResult:s[5]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&32&&(l.queryResult=e[5]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function pa(s){let a,n;return a=new Be({props:{queryID:"kpi_products",queryResult:s[6]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&64&&(l.queryResult=e[6]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ha(s){let a,n;return a=new Be({props:{queryID:"revenue_bookings_billing",queryResult:s[7]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&128&&(l.queryResult=e[7]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ga(s){let a,n;return a=new Be({props:{queryID:"pipeline_funnel",queryResult:s[8]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&256&&(l.queryResult=e[8]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function va(s){let a,n;return a=new Be({props:{queryID:"project_summary",queryResult:s[9]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&512&&(l.queryResult=e[9]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ya(s){let a,n;return a=new Be({props:{queryID:"catalog_summary",queryResult:s[10]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&1024&&(l.queryResult=e[10]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function Ua(s){let a,n,e,i,l,o,u,E;return a=new Rr({props:{valueLabel:"MTD",value:"mtd",default:s[11]==="mtd"}}),e=new Rr({props:{valueLabel:"QTD",value:"qtd",default:s[11]==="qtd"}}),l=new Rr({props:{valueLabel:"YTD",value:"ytd",default:s[11]==="ytd"}}),u=new Rr({props:{valueLabel:"All Time",value:"all",default:s[11]==="all"}}),{c(){C(a.$$.fragment),n=y(),C(e.$$.fragment),i=y(),C(l.$$.fragment),o=y(),C(u.$$.fragment)},l(t){q(a.$$.fragment,t),n=v(t),q(e.$$.fragment,t),i=v(t),q(l.$$.fragment,t),o=v(t),q(u.$$.fragment,t)},m(t,j){k(a,t,j),$(t,n,j),k(e,t,j),$(t,i,j),k(l,t,j),$(t,o,j),k(u,t,j),E=!0},p(t,j){const S={};j[0]&2048&&(S.default=t[11]==="mtd"),a.$set(S);const O={};j[0]&2048&&(O.default=t[11]==="qtd"),e.$set(O);const L={};j[0]&2048&&(L.default=t[11]==="ytd"),l.$set(L);const Z={};j[0]&2048&&(Z.default=t[11]==="all"),u.$set(Z)},i(t){E||(f(a.$$.fragment,t),f(e.$$.fragment,t),f(l.$$.fragment,t),f(u.$$.fragment,t),E=!0)},o(t){g(a.$$.fragment,t),g(e.$$.fragment,t),g(l.$$.fragment,t),g(u.$$.fragment,t),E=!1},d(t){t&&(d(n),d(i),d(o)),x(a,t),x(e,t),x(l,t),x(u,t)}}}function wa(s){let a,n;return a=new Va({props:{name:"time_filter",defaultValue:s[11],$$slots:{default:[Ua]},$$scope:{ctx:s}}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&2048&&(l.defaultValue=e[11]),i[0]&2048|i[2]&4096&&(l.$$scope={dirty:i,ctx:e}),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function Ga(s){let a,n,e,i,l,o;return a=new Kr({props:{id:"vendor",label:"Vendor Brand"}}),e=new Kr({props:{id:"total_variants",label:"Variants Count",align:"center"}}),l=new Kr({props:{id:"average_price",label:"Average Price",align:"right",fmt:"usd"}}),{c(){C(a.$$.fragment),n=y(),C(e.$$.fragment),i=y(),C(l.$$.fragment)},l(u){q(a.$$.fragment,u),n=v(u),q(e.$$.fragment,u),i=v(u),q(l.$$.fragment,u)},m(u,E){k(a,u,E),$(u,n,E),k(e,u,E),$(u,i,E),k(l,u,E),o=!0},p:kt,i(u){o||(f(a.$$.fragment,u),f(e.$$.fragment,u),f(l.$$.fragment,u),o=!0)},o(u){g(a.$$.fragment,u),g(e.$$.fragment,u),g(l.$$.fragment,u),o=!1},d(u){u&&(d(n),d(i)),x(a,u),x(e,u),x(l,u)}}}function Ja(s){let a,n,e,i,l,o,u,E,t,j,S,O,L,Z,Fe,ee,ce,xe,_e,Ne,de,qt,Ye,ke,K,He,ze,Ze,ue,Te='<div class="text-base font-extrabold text-[#264773]">Business Performance Cockpit</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Local Postgres</div>',me,te,zt=s[11],et,U,G,J,se,Zt="💰 Total Billed Revenue",Ct,Ae,Q,qe,re,Et,fe,Dt,Ce,W,pe,er="Actual invoices billed via Xero",jt,he,Ee,Y,Oe,St,ge,oe,z,Pe="📈 Active Pipeline Value",Le,De,ve,Rt,X,je,ae,It,Ft,ye,Ve,cr="Open opportunities in HubSpot CRM",w,ne,Tt,Ue,tr,ar,tt,At,rt,Wr="🏗️ Active Projects",Fr,Pt,at,Tr,nt,Yr="Ongoing jobs managed in Procore",Ar,st,Vt,ot,zr="🛍️ Shopify Products",Pr,Mt,it,Vr,lt,Zr="Unique items in active catalog",_r,Ge,ct,_t,Bt,ea="Monthly Cash Flow Billed vs. Booked Contracts",Mr,Nt,Br,dt,Nr,ut,mt,Ht,ta="Sales Pipeline Opportunity Value",Hr,Ot,Or,ft,dr,Je,pt,ht,Lt,ra="Procore Project Portfolio Status",Lr,Ut,Ur,gt,Gr,vt,yt,Gt,aa="Shopify Product Catalog Summary",Jr,Jt,Xr,wt,Xt,Xe=typeof D<"u"&&D.title&&D.hide_title!==!0&&Ma();function ba(r,c){return typeof D<"u"&&D.title?Na:Ba}let nr=ba()(s),Ke=typeof D=="object"&&Ha(),R=s[1]&&_a(s),I=s[2]&&da(s),F=s[3]&&ua(s),T=s[4]&&ma(s),A=s[5]&&fa(s),P=s[6]&&pa(s),V=s[7]&&ha(s),M=s[8]&&ga(s),B=s[9]&&va(s),N=s[10]&&ya(s),we=wa(s);return Q=new bt({props:{data:s[3],column:"total_revenue",fmt:"usd"}}),fe=new bt({props:{data:s[3],column:"target_progress",fmt:"pct0"}}),Y=new bt({props:{data:s[1],column:"avg_lag_days",fmt:"num0"}}),ve=new bt({props:{data:s[4],column:"pipeline_value",fmt:"usd"}}),ae=new bt({props:{data:s[4],column:"target_progress",fmt:"pct0"}}),Ue=new bt({props:{data:s[2],column:"coverage_ratio",fmt:"0.0"}}),at=new bt({props:{data:s[5],column:"total_projects"}}),it=new bt({props:{data:s[6],column:"total_products"}}),Nt=new Sr({props:{description:"Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed."}}),dt=new Qr({props:{data:s[7],x:"month_date",y:"revenue",series:"source_system",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",stackTotalLabel:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Billed Cash Flow (Xero)","Booked Contracts (HubSpot)"],height:175,echartsOptions:{grid:{top:25,bottom:35,left:40,right:15},xAxis:{type:"time",axisLabel:{formatter:s[55]}},yAxis:{splitNumber:3,axisLabel:{formatter:Xa}}}}}),Ot=new Sr({props:{description:"Displays the total value of all currently open opportunities in HubSpot CRM by stage, excluding closed won and closed lost deals."}}),ft=new Qr({props:{data:s[8],x:"deal_stage",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],sort:"false",height:175,echartsOptions:{grid:{top:25,bottom:10,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Ka},offset:10},series:[{itemStyle:{color:Qa}}]}}}),Ut=new Sr({props:{description:"Tracks the count of active versus completed projects for each client corporate parent group managed in Procore."}}),gt=new Qr({props:{data:s[9],x:"company_name",y:"project_count",series:"project_status",swapXY:"true",fillOpacity:"0.9",labels:!0,labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Active","Completed"],height:175,echartsOptions:{xAxis:{minInterval:1,splitNumber:3},grid:{top:15,bottom:25,left:40,right:30}}}}),Jt=new Sr({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),wt=new ja({props:{data:s[10],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Ga]},$$scope:{ctx:s}}}),{c(){Xe&&Xe.c(),a=y(),nr.c(),n=h("meta"),e=h("meta"),Ke&&Ke.c(),i=Ir(),l=y(),R&&R.c(),o=y(),I&&I.c(),u=y(),F&&F.c(),E=y(),T&&T.c(),t=y(),A&&A.c(),j=y(),P&&P.c(),S=y(),V&&V.c(),O=y(),M&&M.c(),L=y(),B&&B.c(),Z=y(),N&&N.c(),Fe=y(),ee=h("div"),ce=h("a"),xe=be("Overview Cockpit"),Ne=y(),de=h("a"),qt=be("Sales & Win-Loss"),ke=y(),K=h("a"),He=be("Operations & Vendors"),Ze=y(),ue=h("div"),ue.innerHTML=Te,me=y(),te=h("div"),we.c(),et=y(),U=h("div"),G=h("div"),J=h("div"),se=h("span"),se.textContent=Zt,Ct=y(),Ae=h("h2"),C(Q.$$.fragment),qe=y(),re=h("div"),Et=be("🎯 "),C(fe.$$.fragment),Dt=be(" of YTD Target ($1.0M)"),Ce=y(),W=h("div"),pe=h("span"),pe.textContent=er,jt=y(),he=h("span"),Ee=be("⚡ "),C(Y.$$.fragment),Oe=be("d Lag"),St=y(),ge=h("div"),oe=h("div"),z=h("span"),z.textContent=Pe,Le=y(),De=h("h2"),C(ve.$$.fragment),Rt=y(),X=h("div"),je=be("🎯 "),C(ae.$$.fragment),It=be(" of target ($750K)"),Ft=y(),ye=h("div"),Ve=h("span"),Ve.textContent=cr,w=y(),ne=h("span"),Tt=be("📊 "),C(Ue.$$.fragment),tr=be("x Cover"),ar=y(),tt=h("div"),At=h("div"),rt=h("span"),rt.textContent=Wr,Fr=y(),Pt=h("h2"),C(at.$$.fragment),Tr=y(),nt=h("div"),nt.textContent=Yr,Ar=y(),st=h("div"),Vt=h("div"),ot=h("span"),ot.textContent=zr,Pr=y(),Mt=h("h2"),C(it.$$.fragment),Vr=y(),lt=h("div"),lt.textContent=Zr,_r=y(),Ge=h("div"),ct=h("div"),_t=h("div"),Bt=h("span"),Bt.textContent=ea,Mr=y(),C(Nt.$$.fragment),Br=y(),C(dt.$$.fragment),Nr=y(),ut=h("div"),mt=h("div"),Ht=h("span"),Ht.textContent=ta,Hr=y(),C(Ot.$$.fragment),Or=y(),C(ft.$$.fragment),dr=y(),Je=h("div"),pt=h("div"),ht=h("div"),Lt=h("span"),Lt.textContent=ra,Lr=y(),C(Ut.$$.fragment),Ur=y(),C(gt.$$.fragment),Gr=y(),vt=h("div"),yt=h("div"),Gt=h("span"),Gt.textContent=aa,Jr=y(),C(Jt.$$.fragment),Xr=y(),C(wt.$$.fragment),this.h()},l(r){Xe&&Xe.l(r),a=v(r);const c=xa("svelte-2igo1p",document.head);nr.l(c),n=p(c,"META",{name:!0,content:!0}),e=p(c,"META",{name:!0,content:!0}),Ke&&Ke.l(c),i=Ir(),c.forEach(d),l=v(r),R&&R.l(r),o=v(r),I&&I.l(r),u=v(r),F&&F.l(r),E=v(r),T&&T.l(r),t=v(r),A&&A.l(r),j=v(r),P&&P.l(r),S=v(r),V&&V.l(r),O=v(r),M&&M.l(r),L=v(r),B&&B.l(r),Z=v(r),N&&N.l(r),Fe=v(r),ee=p(r,"DIV",{class:!0});var Qe=b(ee);ce=p(Qe,"A",{href:!0,class:!0});var sr=b(ce);xe=$e(sr,"Overview Cockpit"),sr.forEach(d),Ne=v(Qe),de=p(Qe,"A",{href:!0,class:!0});var or=b(de);qt=$e(or,"Sales & Win-Loss"),or.forEach(d),ke=v(Qe),K=p(Qe,"A",{href:!0,class:!0});var ir=b(K);He=$e(ir,"Operations & Vendors"),ir.forEach(d),Qe.forEach(d),Ze=v(r),ue=p(r,"DIV",{class:!0,"data-svelte-h":!0}),le(ue)!=="svelte-6xk8d7"&&(ue.innerHTML=Te),me=v(r),te=p(r,"DIV",{class:!0});var lr=b(te);we.l(lr),lr.forEach(d),et=v(r),U=p(r,"DIV",{class:!0});var Se=b(U);G=p(Se,"DIV",{style:!0,class:!0});var Kt=b(G);J=p(Kt,"DIV",{});var We=b(J);se=p(We,"SPAN",{class:!0,"data-svelte-h":!0}),le(se)!=="svelte-e3ust3"&&(se.textContent=Zt),Ct=v(We),Ae=p(We,"H2",{class:!0});var Qt=b(Ae);q(Q.$$.fragment,Qt),Qt.forEach(d),qe=v(We),re=p(We,"DIV",{class:!0});var Wt=b(re);Et=$e(Wt,"🎯 "),q(fe.$$.fragment,Wt),Dt=$e(Wt," of YTD Target ($1.0M)"),Wt.forEach(d),We.forEach(d),Ce=v(Kt),W=p(Kt,"DIV",{class:!0});var Yt=b(W);pe=p(Yt,"SPAN",{"data-svelte-h":!0}),le(pe)!=="svelte-xdszx8"&&(pe.textContent=er),jt=v(Yt),he=p(Yt,"SPAN",{class:!0});var $t=b(he);Ee=$e($t,"⚡ "),q(Y.$$.fragment,$t),Oe=$e($t,"d Lag"),$t.forEach(d),Yt.forEach(d),Kt.forEach(d),St=v(Se),ge=p(Se,"DIV",{class:!0});var ur=b(ge);oe=p(ur,"DIV",{});var rr=b(oe);z=p(rr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),le(z)!=="svelte-1uurc49"&&(z.textContent=Pe),Le=v(rr),De=p(rr,"H2",{style:!0,class:!0});var na=b(De);q(ve.$$.fragment,na),na.forEach(d),Rt=v(rr),X=p(rr,"DIV",{style:!0,class:!0});var mr=b(X);je=$e(mr,"🎯 "),q(ae.$$.fragment,mr),It=$e(mr," of target ($750K)"),mr.forEach(d),rr.forEach(d),Ft=v(ur),ye=p(ur,"DIV",{class:!0});var fr=b(ye);Ve=p(fr,"SPAN",{style:!0,"data-svelte-h":!0}),le(Ve)!=="svelte-ifvc0m"&&(Ve.textContent=cr),w=v(fr),ne=p(fr,"SPAN",{style:!0,class:!0});var pr=b(ne);Tt=$e(pr,"📊 "),q(Ue.$$.fragment,pr),tr=$e(pr,"x Cover"),pr.forEach(d),fr.forEach(d),ur.forEach(d),ar=v(Se),tt=p(Se,"DIV",{class:!0});var hr=b(tt);At=p(hr,"DIV",{});var gr=b(At);rt=p(gr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),le(rt)!=="svelte-19u2tfr"&&(rt.textContent=Wr),Fr=v(gr),Pt=p(gr,"H2",{style:!0,class:!0});var sa=b(Pt);q(at.$$.fragment,sa),sa.forEach(d),gr.forEach(d),Tr=v(hr),nt=p(hr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),le(nt)!=="svelte-tvomuv"&&(nt.textContent=Yr),hr.forEach(d),Ar=v(Se),st=p(Se,"DIV",{class:!0});var vr=b(st);Vt=p(vr,"DIV",{});var yr=b(Vt);ot=p(yr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),le(ot)!=="svelte-17fuh5a"&&(ot.textContent=zr),Pr=v(yr),Mt=p(yr,"H2",{style:!0,class:!0});var oa=b(Mt);q(it.$$.fragment,oa),oa.forEach(d),yr.forEach(d),Vr=v(vr),lt=p(vr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),le(lt)!=="svelte-9stalx"&&(lt.textContent=Zr),vr.forEach(d),Se.forEach(d),_r=v(r),Ge=p(r,"DIV",{class:!0});var wr=b(Ge);ct=p(wr,"DIV",{class:!0});var $r=b(ct);_t=p($r,"DIV",{class:!0});var br=b(_t);Bt=p(br,"SPAN",{class:!0,"data-svelte-h":!0}),le(Bt)!=="svelte-3eui4q"&&(Bt.textContent=ea),Mr=v(br),q(Nt.$$.fragment,br),br.forEach(d),Br=v($r),q(dt.$$.fragment,$r),$r.forEach(d),Nr=v(wr),ut=p(wr,"DIV",{class:!0});var xr=b(ut);mt=p(xr,"DIV",{class:!0});var kr=b(mt);Ht=p(kr,"SPAN",{class:!0,"data-svelte-h":!0}),le(Ht)!=="svelte-4wul4y"&&(Ht.textContent=ta),Hr=v(kr),q(Ot.$$.fragment,kr),kr.forEach(d),Or=v(xr),q(ft.$$.fragment,xr),xr.forEach(d),wr.forEach(d),dr=v(r),Je=p(r,"DIV",{class:!0});var qr=b(Je);pt=p(qr,"DIV",{class:!0});var Cr=b(pt);ht=p(Cr,"DIV",{class:!0});var Er=b(ht);Lt=p(Er,"SPAN",{class:!0,"data-svelte-h":!0}),le(Lt)!=="svelte-b68vp"&&(Lt.textContent=ra),Lr=v(Er),q(Ut.$$.fragment,Er),Er.forEach(d),Ur=v(Cr),q(gt.$$.fragment,Cr),Cr.forEach(d),Gr=v(qr),vt=p(qr,"DIV",{class:!0});var Dr=b(vt);yt=p(Dr,"DIV",{class:!0});var jr=b(yt);Gt=p(jr,"SPAN",{class:!0,"data-svelte-h":!0}),le(Gt)!=="svelte-kdhzry"&&(Gt.textContent=aa),Jr=v(jr),q(Jt.$$.fragment,jr),jr.forEach(d),Xr=v(Dr),q(wt.$$.fragment,Dr),Dr.forEach(d),qr.forEach(d),this.h()},h(){m(n,"name","twitter:card"),m(n,"content","summary_large_image"),m(e,"name","twitter:site"),m(e,"content","@evidence_dev"),m(ce,"href",_e="/public.dlt-pipeline-orchestration/"+xt(`/?time_filter=${s[11]}`)),m(ce,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),m(de,"href",Ye="/public.dlt-pipeline-orchestration/"+xt(`/sales?time_filter=${s[11]}`)),m(de,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(K,"href",ze="/public.dlt-pipeline-orchestration/"+xt(`/operations?time_filter=${s[11]}`)),m(K,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(ee,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(ue,"class","flex justify-between items-center mb-1.5 mt-0.5"),m(te,"class","mb-2 flex justify-start"),m(se,"class","text-[9px] font-bold text-white/80 uppercase tracking-wider"),m(Ae,"class","text-xl font-extrabold mt-0.5 text-white"),m(re,"class","text-[9px] font-semibold mt-0.5 text-white"),m(he,"class","font-extrabold bg-white/20 px-1.5 py-0.5 rounded"),m(W,"class","flex justify-between items-center text-[9px] text-white/80 mt-0.5 border-t border-white/20 pt-1"),ie(G,"background-color","#1D5F60"),m(G,"class","rounded-xl shadow-sm py-2.5 px-3.5 flex flex-col justify-between text-white h-[105px]"),ie(z,"color","#7B8DA6"),m(z,"class","text-[9px] font-bold uppercase tracking-wider"),ie(De,"color","#000000"),m(De,"class","text-xl font-extrabold mt-0.5"),ie(X,"color","#264773"),m(X,"class","text-[9px] font-semibold mt-0.5"),ie(Ve,"color","#7B8DA6"),ie(ne,"background-color","rgba(38, 71, 115, 0.1)"),ie(ne,"color","#264773"),m(ne,"class","font-extrabold px-1.5 py-0.5 rounded"),m(ye,"class","flex justify-between items-center text-[9px] mt-0.5 border-t border-gray-100 pt-1"),m(ge,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(rt,"color","#7B8DA6"),m(rt,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Pt,"color","#000000"),m(Pt,"class","text-xl font-extrabold mt-0.5"),ie(nt,"color","#7B8DA6"),m(nt,"class","text-[9px] mt-0.5"),m(tt,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(ot,"color","#7B8DA6"),m(ot,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Mt,"color","#000000"),m(Mt,"class","text-xl font-extrabold mt-0.5"),ie(lt,"color","#7B8DA6"),m(lt,"class","text-[9px] mt-0.5"),m(st,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),m(U,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(Bt,"class","font-bold text-gray-700 text-xs"),m(_t,"class","flex items-center gap-1.5 mb-1"),m(ct,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Ht,"class","font-bold text-gray-700 text-xs"),m(mt,"class","flex items-center gap-1.5 mb-1"),m(ut,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Ge,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5"),m(Lt,"class","font-bold text-gray-700 text-xs"),m(ht,"class","flex items-center gap-1.5 mb-1.5"),m(pt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Gt,"class","font-bold text-gray-700 text-xs"),m(yt,"class","flex items-center gap-1.5 mb-1.5"),m(vt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Je,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(r,c){Xe&&Xe.m(r,c),$(r,a,c),nr.m(document.head,null),_(document.head,n),_(document.head,e),Ke&&Ke.m(document.head,null),_(document.head,i),$(r,l,c),R&&R.m(r,c),$(r,o,c),I&&I.m(r,c),$(r,u,c),F&&F.m(r,c),$(r,E,c),T&&T.m(r,c),$(r,t,c),A&&A.m(r,c),$(r,j,c),P&&P.m(r,c),$(r,S,c),V&&V.m(r,c),$(r,O,c),M&&M.m(r,c),$(r,L,c),B&&B.m(r,c),$(r,Z,c),N&&N.m(r,c),$(r,Fe,c),$(r,ee,c),_(ee,ce),_(ce,xe),_(ee,Ne),_(ee,de),_(de,qt),_(ee,ke),_(ee,K),_(K,He),$(r,Ze,c),$(r,ue,c),$(r,me,c),$(r,te,c),we.m(te,null),$(r,et,c),$(r,U,c),_(U,G),_(G,J),_(J,se),_(J,Ct),_(J,Ae),k(Q,Ae,null),_(J,qe),_(J,re),_(re,Et),k(fe,re,null),_(re,Dt),_(G,Ce),_(G,W),_(W,pe),_(W,jt),_(W,he),_(he,Ee),k(Y,he,null),_(he,Oe),_(U,St),_(U,ge),_(ge,oe),_(oe,z),_(oe,Le),_(oe,De),k(ve,De,null),_(oe,Rt),_(oe,X),_(X,je),k(ae,X,null),_(X,It),_(ge,Ft),_(ge,ye),_(ye,Ve),_(ye,w),_(ye,ne),_(ne,Tt),k(Ue,ne,null),_(ne,tr),_(U,ar),_(U,tt),_(tt,At),_(At,rt),_(At,Fr),_(At,Pt),k(at,Pt,null),_(tt,Tr),_(tt,nt),_(U,Ar),_(U,st),_(st,Vt),_(Vt,ot),_(Vt,Pr),_(Vt,Mt),k(it,Mt,null),_(st,Vr),_(st,lt),$(r,_r,c),$(r,Ge,c),_(Ge,ct),_(ct,_t),_(_t,Bt),_(_t,Mr),k(Nt,_t,null),_(ct,Br),k(dt,ct,null),_(Ge,Nr),_(Ge,ut),_(ut,mt),_(mt,Ht),_(mt,Hr),k(Ot,mt,null),_(ut,Or),k(ft,ut,null),$(r,dr,c),$(r,Je,c),_(Je,pt),_(pt,ht),_(ht,Lt),_(ht,Lr),k(Ut,ht,null),_(pt,Ur),k(gt,pt,null),_(Je,Gr),_(Je,vt),_(vt,yt),_(yt,Gt),_(yt,Jr),k(Jt,yt,null),_(vt,Xr),k(wt,vt,null),Xt=!0},p(r,c){typeof D<"u"&&D.title&&D.hide_title!==!0&&Xe.p(r,c),nr.p(r,c),typeof D=="object"&&Ke.p(r,c),r[1]?R?(R.p(r,c),c[0]&2&&f(R,1)):(R=_a(r),R.c(),f(R,1),R.m(o.parentNode,o)):R&&(Ie(),g(R,1,1,()=>{R=null}),Re()),r[2]?I?(I.p(r,c),c[0]&4&&f(I,1)):(I=da(r),I.c(),f(I,1),I.m(u.parentNode,u)):I&&(Ie(),g(I,1,1,()=>{I=null}),Re()),r[3]?F?(F.p(r,c),c[0]&8&&f(F,1)):(F=ua(r),F.c(),f(F,1),F.m(E.parentNode,E)):F&&(Ie(),g(F,1,1,()=>{F=null}),Re()),r[4]?T?(T.p(r,c),c[0]&16&&f(T,1)):(T=ma(r),T.c(),f(T,1),T.m(t.parentNode,t)):T&&(Ie(),g(T,1,1,()=>{T=null}),Re()),r[5]?A?(A.p(r,c),c[0]&32&&f(A,1)):(A=fa(r),A.c(),f(A,1),A.m(j.parentNode,j)):A&&(Ie(),g(A,1,1,()=>{A=null}),Re()),r[6]?P?(P.p(r,c),c[0]&64&&f(P,1)):(P=pa(r),P.c(),f(P,1),P.m(S.parentNode,S)):P&&(Ie(),g(P,1,1,()=>{P=null}),Re()),r[7]?V?(V.p(r,c),c[0]&128&&f(V,1)):(V=ha(r),V.c(),f(V,1),V.m(O.parentNode,O)):V&&(Ie(),g(V,1,1,()=>{V=null}),Re()),r[8]?M?(M.p(r,c),c[0]&256&&f(M,1)):(M=ga(r),M.c(),f(M,1),M.m(L.parentNode,L)):M&&(Ie(),g(M,1,1,()=>{M=null}),Re()),r[9]?B?(B.p(r,c),c[0]&512&&f(B,1)):(B=va(r),B.c(),f(B,1),B.m(Z.parentNode,Z)):B&&(Ie(),g(B,1,1,()=>{B=null}),Re()),r[10]?N?(N.p(r,c),c[0]&1024&&f(N,1)):(N=ya(r),N.c(),f(N,1),N.m(Fe.parentNode,Fe)):N&&(Ie(),g(N,1,1,()=>{N=null}),Re()),(!Xt||c[0]&2048&&_e!==(_e="/public.dlt-pipeline-orchestration/"+xt(`/?time_filter=${r[11]}`)))&&m(ce,"href",_e),(!Xt||c[0]&2048&&Ye!==(Ye="/public.dlt-pipeline-orchestration/"+xt(`/sales?time_filter=${r[11]}`)))&&m(de,"href",Ye),(!Xt||c[0]&2048&&ze!==(ze="/public.dlt-pipeline-orchestration/"+xt(`/operations?time_filter=${r[11]}`)))&&m(K,"href",ze),c[0]&2048&&$a(zt,zt=r[11])?(Ie(),g(we,1,1,kt),Re(),we=wa(r),we.c(),f(we,1),we.m(te,null)):we.p(r,c);const Qe={};c[0]&8&&(Qe.data=r[3]),Q.$set(Qe);const sr={};c[0]&8&&(sr.data=r[3]),fe.$set(sr);const or={};c[0]&2&&(or.data=r[1]),Y.$set(or);const ir={};c[0]&16&&(ir.data=r[4]),ve.$set(ir);const lr={};c[0]&16&&(lr.data=r[4]),ae.$set(lr);const Se={};c[0]&4&&(Se.data=r[2]),Ue.$set(Se);const Kt={};c[0]&32&&(Kt.data=r[5]),at.$set(Kt);const We={};c[0]&64&&(We.data=r[6]),it.$set(We);const Qt={};c[0]&128&&(Qt.data=r[7]),c[0]&1&&(Qt.labels=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),c[0]&1&&(Qt.stackTotalLabel=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),dt.$set(Qt);const Wt={};c[0]&256&&(Wt.data=r[8]),ft.$set(Wt);const Yt={};c[0]&512&&(Yt.data=r[9]),gt.$set(Yt);const $t={};c[0]&1024&&($t.data=r[10]),c[2]&4096&&($t.$$scope={dirty:c,ctx:r}),wt.$set($t)},i(r){Xt||(f(R),f(I),f(F),f(T),f(A),f(P),f(V),f(M),f(B),f(N),f(we),f(Q.$$.fragment,r),f(fe.$$.fragment,r),f(Y.$$.fragment,r),f(ve.$$.fragment,r),f(ae.$$.fragment,r),f(Ue.$$.fragment,r),f(at.$$.fragment,r),f(it.$$.fragment,r),f(Nt.$$.fragment,r),f(dt.$$.fragment,r),f(Ot.$$.fragment,r),f(ft.$$.fragment,r),f(Ut.$$.fragment,r),f(gt.$$.fragment,r),f(Jt.$$.fragment,r),f(wt.$$.fragment,r),Xt=!0)},o(r){g(R),g(I),g(F),g(T),g(A),g(P),g(V),g(M),g(B),g(N),g(we),g(Q.$$.fragment,r),g(fe.$$.fragment,r),g(Y.$$.fragment,r),g(ve.$$.fragment,r),g(ae.$$.fragment,r),g(Ue.$$.fragment,r),g(at.$$.fragment,r),g(it.$$.fragment,r),g(Nt.$$.fragment,r),g(dt.$$.fragment,r),g(Ot.$$.fragment,r),g(ft.$$.fragment,r),g(Ut.$$.fragment,r),g(gt.$$.fragment,r),g(Jt.$$.fragment,r),g(wt.$$.fragment,r),Xt=!1},d(r){r&&(d(a),d(l),d(o),d(u),d(E),d(t),d(j),d(S),d(O),d(L),d(Z),d(Fe),d(ee),d(Ze),d(ue),d(me),d(te),d(et),d(U),d(_r),d(Ge),d(dr),d(Je)),Xe&&Xe.d(r),nr.d(r),d(n),d(e),Ke&&Ke.d(r),d(i),R&&R.d(r),I&&I.d(r),F&&F.d(r),T&&T.d(r),A&&A.d(r),P&&P.d(r),V&&V.d(r),M&&M.d(r),B&&B.d(r),N&&N.d(r),we.d(r),x(Q),x(fe),x(Y),x(ve),x(ae),x(Ue),x(at),x(it),x(Nt),x(dt),x(Ot),x(ft),x(Ut),x(gt),x(Jt),x(wt)}}}const D={title:"Business Performance Dashboard"},Xa=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Ka=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Qa=s=>s.name&&s.name.includes("Closed Won")?"#1D5F60":s.name&&s.name.includes("Closed Lost")?"#7B8DA6":"#264773";function Wa(s,a,n){let e,i;ia(s,Pa,w=>n(54,e=w)),ia(s,ca,w=>n(60,i=w));let{data:l}=a,{data:o={},customFormattingSettings:u,__db:E,inputs:t}=l;ka(ca,i="6666cd76f96956469e7be39d750cc7d9",i);let j=Sa(Ta(t));qa(j.subscribe(w=>n(0,t=w))),Ca(Fa,{getCustomFormats:()=>u.customFormats||[]});const S=(w,ne)=>Aa(E.query,w,{query_name:ne});Ra(S),e.params,la(()=>!0);let O={initialData:void 0,initialError:void 0},L=H`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,Z=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.delivery_lag_data&&(o.delivery_lag_data instanceof Error?O.initialError=o.delivery_lag_data:O.initialData=o.delivery_lag_data,o.delivery_lag_columns&&(O.knownColumns=o.delivery_lag_columns));let Fe,ee=!1;const ce=Me.createReactive({callback:w=>{n(1,Fe=w)},execFn:S},{id:"delivery_lag",...O});ce(Z,{noResolve:L,...O}),globalThis[Symbol.for("delivery_lag")]={get value(){return Fe}};let xe={initialData:void 0,initialError:void 0},_e=H`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
        else '1970-01-01'::date
    end), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,Ne=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
        else '1970-01-01'::date
    end), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.pipeline_coverage_data&&(o.pipeline_coverage_data instanceof Error?xe.initialError=o.pipeline_coverage_data:xe.initialData=o.pipeline_coverage_data,o.pipeline_coverage_columns&&(xe.knownColumns=o.pipeline_coverage_columns));let de,qt=!1;const Ye=Me.createReactive({callback:w=>{n(2,de=w)},execFn:S},{id:"pipeline_coverage",...xe});Ye(Ne,{noResolve:_e,...xe}),globalThis[Symbol.for("pipeline_coverage")]={get value(){return de}};let ke={initialData:void 0,initialError:void 0},K=H`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,He=`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_revenue_data&&(o.kpi_revenue_data instanceof Error?ke.initialError=o.kpi_revenue_data:ke.initialData=o.kpi_revenue_data,o.kpi_revenue_columns&&(ke.knownColumns=o.kpi_revenue_columns));let ze,Ze=!1;const ue=Me.createReactive({callback:w=>{n(3,ze=w)},execFn:S},{id:"kpi_revenue",...ke});ue(He,{noResolve:K,...ke}),globalThis[Symbol.for("kpi_revenue")]={get value(){return ze}};let Te={initialData:void 0,initialError:void 0},me=H`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,te=`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_pipeline_data&&(o.kpi_pipeline_data instanceof Error?Te.initialError=o.kpi_pipeline_data:Te.initialData=o.kpi_pipeline_data,o.kpi_pipeline_columns&&(Te.knownColumns=o.kpi_pipeline_columns));let zt,et=!1;const U=Me.createReactive({callback:w=>{n(4,zt=w)},execFn:S},{id:"kpi_pipeline",...Te});U(te,{noResolve:me,...Te}),globalThis[Symbol.for("kpi_pipeline")]={get value(){return zt}};let G={initialData:void 0,initialError:void 0},J=H`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,se=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_projects_data&&(o.kpi_projects_data instanceof Error?G.initialError=o.kpi_projects_data:G.initialData=o.kpi_projects_data,o.kpi_projects_columns&&(G.knownColumns=o.kpi_projects_columns));let Zt,Ct=!1;const Ae=Me.createReactive({callback:w=>{n(5,Zt=w)},execFn:S},{id:"kpi_projects",...G});Ae(se,{noResolve:J,...G}),globalThis[Symbol.for("kpi_projects")]={get value(){return Zt}};let Q={initialData:void 0,initialError:void 0},qe=H`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,re=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;o.kpi_products_data&&(o.kpi_products_data instanceof Error?Q.initialError=o.kpi_products_data:Q.initialData=o.kpi_products_data,o.kpi_products_columns&&(Q.knownColumns=o.kpi_products_columns));let Et,fe=!1;const Dt=Me.createReactive({callback:w=>{n(6,Et=w)},execFn:S},{id:"kpi_products",...Q});Dt(re,{noResolve:qe,...Q}),globalThis[Symbol.for("kpi_products")]={get value(){return Et}};let Ce={initialData:void 0,initialError:void 0},W=H`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`,pe=`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`;o.revenue_bookings_billing_data&&(o.revenue_bookings_billing_data instanceof Error?Ce.initialError=o.revenue_bookings_billing_data:Ce.initialData=o.revenue_bookings_billing_data,o.revenue_bookings_billing_columns&&(Ce.knownColumns=o.revenue_bookings_billing_columns));let er,jt=!1;const he=Me.createReactive({callback:w=>{n(7,er=w)},execFn:S},{id:"revenue_bookings_billing",...Ce});he(pe,{noResolve:W,...Ce}),globalThis[Symbol.for("revenue_bookings_billing")]={get value(){return er}};let Ee={initialData:void 0,initialError:void 0},Y=H`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by deal_stage asc`,Oe=`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by deal_stage asc`;o.pipeline_funnel_data&&(o.pipeline_funnel_data instanceof Error?Ee.initialError=o.pipeline_funnel_data:Ee.initialData=o.pipeline_funnel_data,o.pipeline_funnel_columns&&(Ee.knownColumns=o.pipeline_funnel_columns));let St,ge=!1;const oe=Me.createReactive({callback:w=>{n(8,St=w)},execFn:S},{id:"pipeline_funnel",...Ee});oe(Oe,{noResolve:Y,...Ee}),globalThis[Symbol.for("pipeline_funnel")]={get value(){return St}};let z={initialData:void 0,initialError:void 0},Pe=H`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by project_count desc`,Le=`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by project_count desc`;o.project_summary_data&&(o.project_summary_data instanceof Error?z.initialError=o.project_summary_data:z.initialData=o.project_summary_data,o.project_summary_columns&&(z.knownColumns=o.project_summary_columns));let De,ve=!1;const Rt=Me.createReactive({callback:w=>{n(9,De=w)},execFn:S},{id:"project_summary",...z});Rt(Le,{noResolve:Pe,...z}),globalThis[Symbol.for("project_summary")]={get value(){return De}};let X={initialData:void 0,initialError:void 0},je=H`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by total_variants desc`,ae=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by total_variants desc`;o.catalog_summary_data&&(o.catalog_summary_data instanceof Error?X.initialError=o.catalog_summary_data:X.initialData=o.catalog_summary_data,o.catalog_summary_columns&&(X.knownColumns=o.catalog_summary_columns));let It,Ft=!1;const ye=Me.createReactive({callback:w=>{n(10,It=w)},execFn:S},{id:"catalog_summary",...X});ye(ae,{noResolve:je,...X}),globalThis[Symbol.for("catalog_summary")]={get value(){return It}};let Ve="ytd";la(()=>{if(t){const w=e.url.searchParams.get("time_filter");n(0,t.time_filter=w||"ytd",t)}});const cr=(w,ne)=>{const Tt=new Date(w),tr=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Tt.getUTCMonth()],ar=Tt.getUTCFullYear();return Tt.getUTCMonth()===0||ne===0?tr+`
`+ar:tr};return s.$$set=w=>{"data"in w&&n(12,l=w.data)},s.$$.update=()=>{if(s.$$.dirty[0]&4096&&n(13,{data:o={},customFormattingSettings:u,__db:E}=l,o),s.$$.dirty[0]&8192&&Ia.set(Object.keys(o).length>0),s.$$.dirty[1]&8388608&&e.params,s.$$.dirty[0]&1&&n(15,L=H`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1&&n(16,Z=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&245760&&(L||!ee?L||(ce(Z,{noResolve:L,...O}),n(17,ee=!0)):ce(Z,{noResolve:L})),s.$$.dirty[0]&1&&n(19,_e=H`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
        else '1970-01-01'::date
    end), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1&&n(20,Ne=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
        when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
        else '1970-01-01'::date
    end), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&3932160&&(_e||!qt?_e||(Ye(Ne,{noResolve:_e,...xe}),n(21,qt=!0)):Ye(Ne,{noResolve:_e})),s.$$.dirty[0]&1&&n(23,K=H`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1&&n(24,He=`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&62914560&&(K||!Ze?K||(ue(He,{noResolve:K,...ke}),n(25,Ze=!0)):ue(He,{noResolve:K})),s.$$.dirty[0]&1&&n(27,me=H`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1&&n(28,te=`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1006632960&&(me||!et?me||(U(te,{noResolve:me,...Te}),n(29,et=!0)):U(te,{noResolve:me})),s.$$.dirty[0]&1&&n(31,J=H`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1&&n(32,se=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(J||!Ct?J||(Ae(se,{noResolve:J,...G}),n(33,Ct=!0)):Ae(se,{noResolve:J})),s.$$.dirty[0]&1&&n(35,qe=H`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),s.$$.dirty[0]&1&&n(36,re=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),s.$$.dirty[1]&120&&(qe||!fe?qe||(Dt(re,{noResolve:qe,...Q}),n(37,fe=!0)):Dt(re,{noResolve:qe})),s.$$.dirty[0]&1&&n(39,W=H`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[0]&1&&n(40,pe=`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[1]&1920&&(W||!jt?W||(he(pe,{noResolve:W,...Ce}),n(41,jt=!0)):he(pe,{noResolve:W})),s.$$.dirty[0]&1&&n(43,Y=H`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by deal_stage asc`),s.$$.dirty[0]&1&&n(44,Oe=`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by deal_stage asc`),s.$$.dirty[1]&30720&&(Y||!ge?Y||(oe(Oe,{noResolve:Y,...Ee}),n(45,ge=!0)):oe(Oe,{noResolve:Y})),s.$$.dirty[0]&1&&n(47,Pe=H`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by project_count desc`),s.$$.dirty[0]&1&&n(48,Le=`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by project_count desc`),s.$$.dirty[1]&491520&&(Pe||!ve?Pe||(Rt(Le,{noResolve:Pe,...z}),n(49,ve=!0)):Rt(Le,{noResolve:Pe})),s.$$.dirty[0]&1&&n(51,je=H`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by total_variants desc`),s.$$.dirty[0]&1&&n(52,ae=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end
group by all
order by total_variants desc`),s.$$.dirty[1]&7864320&&(je||!Ft?je||(ye(ae,{noResolve:je,...X}),n(53,Ft=!0)):ye(ae,{noResolve:je})),s.$$.dirty[0]&1&&n(11,Ve=(t==null?void 0:t.time_filter)||"ytd"),s.$$.dirty[0]&1&&t&&t.time_filter)try{const w=new URL(window.location.href);w.searchParams.get("time_filter")!==t.time_filter&&(w.searchParams.set("time_filter",t.time_filter),window.history.replaceState(null,"",w.pathname+w.search))}catch{}},[t,Fe,de,ze,zt,Zt,Et,er,St,De,It,Ve,l,o,O,L,Z,ee,xe,_e,Ne,qt,ke,K,He,Ze,Te,me,te,et,G,J,se,Ct,Q,qe,re,fe,Ce,W,pe,jt,Ee,Y,Oe,ge,z,Pe,Le,ve,X,je,ae,Ft,e,cr]}class sn extends Ea{constructor(a){super(),Da(this,a,Wa,Ja,$a,{data:12},null,[-1,-1,-1])}}export{sn as component};
