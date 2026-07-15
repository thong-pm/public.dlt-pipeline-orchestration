import{s as ba,d,b as m,i as w,e as _,z as ie,k as v,A as ka,h as p,r as Ir,j as b,x as we,q as le,n as y,m as h,y as be,t as ia,B as qa,C as Ca,D as Ea,E as la,v as xt}from"../chunks/scheduler.Ch8ub0mh.js";import{S as Da,i as ja,d as x,t as g,a as f,c as Re,m as k,b as q,e as C,g as Ie}from"../chunks/index.Bs0zddgu.js";import{a as Sr,D as Sa,e as Ra,s as Ia,Q as Me,p as Fa,b as Kr,c as ca,r as _a,d as Ta}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.xsgxVxPN.js";import{b as rr,w as Aa}from"../chunks/entry.Dr-nKPZE.js";import{h as H,p as Pa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Va}from"../chunks/stores.CNQLrojQ.js";import{V as bt,B as Qr,Q as Be,a as Ma,b as Rr}from"../chunks/Value.DxVo6KCs.js";function Ba(s){let a,n=D.title+"",e;return{c(){a=h("h1"),e=be(n),this.h()},l(i){a=p(i,"H1",{class:!0});var l=b(a);e=we(l,n),l.forEach(d),this.h()},h(){m(a,"class","title")},m(i,l){w(i,a,l),_(a,e)},p:xt,d(i){i&&d(a)}}}function Na(s){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:xt,p:xt,d:xt}}function Ha(s){let a,n,e,i,l;return document.title=a=D.title,{c(){n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;m(e,"property","og:title"),m(e,"content",((o=D.og)==null?void 0:o.title)??D.title),m(l,"name","twitter:title"),m(l,"content",((u=D.og)==null?void 0:u.title)??D.title)},m(o,u){w(o,n,u),w(o,e,u),w(o,i,u),w(o,l,u)},p(o,u){u&0&&a!==(a=D.title)&&(document.title=a)},d(o){o&&(d(n),d(e),d(i),d(l))}}}function Oa(s){var l,o;let a,n,e=(D.description||((l=D.og)==null?void 0:l.description))&&La(),i=((o=D.og)==null?void 0:o.image)&&Ua();return{c(){e&&e.c(),a=y(),i&&i.c(),n=Ir()},l(u){e&&e.l(u),a=v(u),i&&i.l(u),n=Ir()},m(u,E){e&&e.m(u,E),w(u,a,E),i&&i.m(u,E),w(u,n,E)},p(u,E){var t,j;(D.description||(t=D.og)!=null&&t.description)&&e.p(u,E),(j=D.og)!=null&&j.image&&i.p(u,E)},d(u){u&&(d(a),d(n)),e&&e.d(u),i&&i.d(u)}}}function La(s){let a,n,e,i,l;return{c(){a=h("meta"),n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){a=p(o,"META",{name:!0,content:!0}),n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u,E;m(a,"name","description"),m(a,"content",D.description??((o=D.og)==null?void 0:o.description)),m(e,"property","og:description"),m(e,"content",((u=D.og)==null?void 0:u.description)??D.description),m(l,"name","twitter:description"),m(l,"content",((E=D.og)==null?void 0:E.description)??D.description)},m(o,u){w(o,a,u),w(o,n,u),w(o,e,u),w(o,i,u),w(o,l,u)},p:xt,d(o){o&&(d(a),d(n),d(e),d(i),d(l))}}}function Ua(s){let a,n,e;return{c(){a=h("meta"),n=y(),e=h("meta"),this.h()},l(i){a=p(i,"META",{property:!0,content:!0}),n=v(i),e=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;m(a,"property","og:image"),m(a,"content",ca((i=D.og)==null?void 0:i.image)),m(e,"name","twitter:image"),m(e,"content",ca((l=D.og)==null?void 0:l.image))},m(i,l){w(i,a,l),w(i,n,l),w(i,e,l)},p:xt,d(i){i&&(d(a),d(n),d(e))}}}function da(s){let a,n;return a=new Be({props:{queryID:"delivery_lag",queryResult:s[1]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&2&&(l.queryResult=e[1]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ua(s){let a,n;return a=new Be({props:{queryID:"pipeline_coverage",queryResult:s[2]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&4&&(l.queryResult=e[2]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ma(s){let a,n;return a=new Be({props:{queryID:"kpi_revenue",queryResult:s[3]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&8&&(l.queryResult=e[3]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function fa(s){let a,n;return a=new Be({props:{queryID:"kpi_pipeline",queryResult:s[4]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&16&&(l.queryResult=e[4]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function pa(s){let a,n;return a=new Be({props:{queryID:"kpi_projects",queryResult:s[5]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&32&&(l.queryResult=e[5]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ha(s){let a,n;return a=new Be({props:{queryID:"kpi_products",queryResult:s[6]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&64&&(l.queryResult=e[6]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ga(s){let a,n;return a=new Be({props:{queryID:"revenue_bookings_billing",queryResult:s[7]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&128&&(l.queryResult=e[7]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function va(s){let a,n;return a=new Be({props:{queryID:"pipeline_funnel",queryResult:s[8]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&256&&(l.queryResult=e[8]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function ya(s){let a,n;return a=new Be({props:{queryID:"project_summary",queryResult:s[9]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&512&&(l.queryResult=e[9]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function $a(s){let a,n;return a=new Be({props:{queryID:"catalog_summary",queryResult:s[10]}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&1024&&(l.queryResult=e[10]),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function Ga(s){let a,n,e,i,l,o,u,E;return a=new Rr({props:{valueLabel:"MTD",value:"mtd",default:s[11]==="mtd"}}),e=new Rr({props:{valueLabel:"QTD",value:"qtd",default:s[11]==="qtd"}}),l=new Rr({props:{valueLabel:"YTD",value:"ytd",default:s[11]==="ytd"}}),u=new Rr({props:{valueLabel:"All Time",value:"all",default:s[11]==="all"}}),{c(){C(a.$$.fragment),n=y(),C(e.$$.fragment),i=y(),C(l.$$.fragment),o=y(),C(u.$$.fragment)},l(t){q(a.$$.fragment,t),n=v(t),q(e.$$.fragment,t),i=v(t),q(l.$$.fragment,t),o=v(t),q(u.$$.fragment,t)},m(t,j){k(a,t,j),w(t,n,j),k(e,t,j),w(t,i,j),k(l,t,j),w(t,o,j),k(u,t,j),E=!0},p(t,j){const S={};j[0]&2048&&(S.default=t[11]==="mtd"),a.$set(S);const O={};j[0]&2048&&(O.default=t[11]==="qtd"),e.$set(O);const L={};j[0]&2048&&(L.default=t[11]==="ytd"),l.$set(L);const Z={};j[0]&2048&&(Z.default=t[11]==="all"),u.$set(Z)},i(t){E||(f(a.$$.fragment,t),f(e.$$.fragment,t),f(l.$$.fragment,t),f(u.$$.fragment,t),E=!0)},o(t){g(a.$$.fragment,t),g(e.$$.fragment,t),g(l.$$.fragment,t),g(u.$$.fragment,t),E=!1},d(t){t&&(d(n),d(i),d(o)),x(a,t),x(e,t),x(l,t),x(u,t)}}}function wa(s){let a,n;return a=new Ma({props:{name:"time_filter",defaultValue:s[11],$$slots:{default:[Ga]},$$scope:{ctx:s}}}),{c(){C(a.$$.fragment)},l(e){q(a.$$.fragment,e)},m(e,i){k(a,e,i),n=!0},p(e,i){const l={};i[0]&2048&&(l.defaultValue=e[11]),i[0]&2048|i[2]&4096&&(l.$$scope={dirty:i,ctx:e}),a.$set(l)},i(e){n||(f(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){x(a,e)}}}function Ja(s){let a,n,e,i,l,o;return a=new Kr({props:{id:"vendor",label:"Vendor Brand"}}),e=new Kr({props:{id:"total_variants",label:"Variants Count",align:"center"}}),l=new Kr({props:{id:"average_price",label:"Average Price",align:"right",fmt:"usd"}}),{c(){C(a.$$.fragment),n=y(),C(e.$$.fragment),i=y(),C(l.$$.fragment)},l(u){q(a.$$.fragment,u),n=v(u),q(e.$$.fragment,u),i=v(u),q(l.$$.fragment,u)},m(u,E){k(a,u,E),w(u,n,E),k(e,u,E),w(u,i,E),k(l,u,E),o=!0},p:xt,i(u){o||(f(a.$$.fragment,u),f(e.$$.fragment,u),f(l.$$.fragment,u),o=!0)},o(u){g(a.$$.fragment,u),g(e.$$.fragment,u),g(l.$$.fragment,u),o=!1},d(u){u&&(d(n),d(i)),x(a,u),x(e,u),x(l,u)}}}function Xa(s){let a,n,e,i,l,o,u,E,t,j,S,O,L,Z,Fe,ee,ce,xe,_e,Ne,de,kt,Ye,ke,K,He,ze,Ze,ue,Te='<div class="text-base font-extrabold text-[#264773]">Business Performance Cockpit</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Local Postgres</div>',me,te,Yt=s[11],et,U,G,J,se,zt="💰 Total Billed Revenue",qt,Ae,Q,qe,re,Ct,fe,Et,Ce,W,pe,Zt="Actual invoices billed via Xero",Dt,he,Ee,Y,Oe,jt,ge,oe,z,Pe="📈 Active Pipeline Value",Le,De,ve,St,X,je,ae,Rt,It,ye,Ve,cr="Open opportunities in HubSpot CRM",$,ne,Ft,Ue,er,ar,tt,Tt,rt,Wr="🏗️ Active Projects",Fr,At,at,Tr,nt,Yr="Ongoing jobs managed in Procore",Ar,st,Pt,ot,zr="🛍️ Shopify Products",Pr,Vt,it,Vr,lt,Zr="Unique items in active catalog",_r,Ge,ct,_t,Mt,ea="Monthly Cash Flow Billed vs. Booked Contracts",Mr,Bt,Br,dt,Nr,ut,mt,Nt,ta="Sales Pipeline Opportunity Value",Hr,Ht,Or,ft,dr,Je,pt,ht,Ot,ra="Procore Project Portfolio Status",Lr,Lt,Ur,gt,Gr,vt,yt,Ut,aa="Shopify Product Catalog Summary",Jr,Gt,Xr,$t,Jt,Xe=typeof D<"u"&&D.title&&D.hide_title!==!0&&Ba();function xa(r,c){return typeof D<"u"&&D.title?Ha:Na}let nr=xa()(s),Ke=typeof D=="object"&&Oa(),R=s[1]&&da(s),I=s[2]&&ua(s),F=s[3]&&ma(s),T=s[4]&&fa(s),A=s[5]&&pa(s),P=s[6]&&ha(s),V=s[7]&&ga(s),M=s[8]&&va(s),B=s[9]&&ya(s),N=s[10]&&$a(s),$e=wa(s);return Q=new bt({props:{data:s[3],column:"total_revenue",fmt:"usd"}}),fe=new bt({props:{data:s[3],column:"target_progress",fmt:"pct0"}}),Y=new bt({props:{data:s[1],column:"avg_lag_days",fmt:"num0"}}),ve=new bt({props:{data:s[4],column:"pipeline_value",fmt:"usd"}}),ae=new bt({props:{data:s[4],column:"target_progress",fmt:"pct0"}}),Ue=new bt({props:{data:s[2],column:"coverage_ratio",fmt:"0.0"}}),at=new bt({props:{data:s[5],column:"total_projects"}}),it=new bt({props:{data:s[6],column:"total_products"}}),Bt=new Sr({props:{description:"Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed."}}),dt=new Qr({props:{data:s[7],x:"month_date",y:"revenue",series:"source_system",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",stackTotalLabel:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Billed Cash Flow (Xero)","Booked Contracts (HubSpot)"],height:175,echartsOptions:{grid:{top:25,bottom:35,left:40,right:15},xAxis:{type:"time",axisLabel:{formatter:s[55]}},yAxis:{splitNumber:3,axisLabel:{formatter:Ka}}}}}),Ht=new Sr({props:{description:"Displays the total value of all currently open opportunities in HubSpot CRM by stage, excluding closed won and closed lost deals."}}),ft=new Qr({props:{data:s[8],x:"deal_stage",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],sort:"false",height:175,echartsOptions:{grid:{top:25,bottom:10,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Qa},offset:10},series:[{itemStyle:{color:Wa}}]}}}),Lt=new Sr({props:{description:"Tracks the count of active versus completed projects for each client corporate parent group managed in Procore."}}),gt=new Qr({props:{data:s[9],x:"company_name",y:"project_count",series:"project_status",swapXY:"true",fillOpacity:"0.9",labels:!0,labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Active","Completed"],height:175,echartsOptions:{xAxis:{minInterval:1,splitNumber:3},grid:{top:15,bottom:25,left:40,right:30}}}}),Gt=new Sr({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),$t=new Sa({props:{data:s[10],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Ja]},$$scope:{ctx:s}}}),{c(){Xe&&Xe.c(),a=y(),nr.c(),n=h("meta"),e=h("meta"),Ke&&Ke.c(),i=Ir(),l=y(),R&&R.c(),o=y(),I&&I.c(),u=y(),F&&F.c(),E=y(),T&&T.c(),t=y(),A&&A.c(),j=y(),P&&P.c(),S=y(),V&&V.c(),O=y(),M&&M.c(),L=y(),B&&B.c(),Z=y(),N&&N.c(),Fe=y(),ee=h("div"),ce=h("a"),xe=be("Overview Cockpit"),Ne=y(),de=h("a"),kt=be("Sales & Win-Loss"),ke=y(),K=h("a"),He=be("Operations & Vendors"),Ze=y(),ue=h("div"),ue.innerHTML=Te,me=y(),te=h("div"),$e.c(),et=y(),U=h("div"),G=h("div"),J=h("div"),se=h("span"),se.textContent=zt,qt=y(),Ae=h("h2"),C(Q.$$.fragment),qe=y(),re=h("div"),Ct=be("🎯 "),C(fe.$$.fragment),Et=be(" of YTD Target ($1.0M)"),Ce=y(),W=h("div"),pe=h("span"),pe.textContent=Zt,Dt=y(),he=h("span"),Ee=be("⚡ "),C(Y.$$.fragment),Oe=be("d Lag"),jt=y(),ge=h("div"),oe=h("div"),z=h("span"),z.textContent=Pe,Le=y(),De=h("h2"),C(ve.$$.fragment),St=y(),X=h("div"),je=be("🎯 "),C(ae.$$.fragment),Rt=be(" of target ($750K)"),It=y(),ye=h("div"),Ve=h("span"),Ve.textContent=cr,$=y(),ne=h("span"),Ft=be("📊 "),C(Ue.$$.fragment),er=be("x Cover"),ar=y(),tt=h("div"),Tt=h("div"),rt=h("span"),rt.textContent=Wr,Fr=y(),At=h("h2"),C(at.$$.fragment),Tr=y(),nt=h("div"),nt.textContent=Yr,Ar=y(),st=h("div"),Pt=h("div"),ot=h("span"),ot.textContent=zr,Pr=y(),Vt=h("h2"),C(it.$$.fragment),Vr=y(),lt=h("div"),lt.textContent=Zr,_r=y(),Ge=h("div"),ct=h("div"),_t=h("div"),Mt=h("span"),Mt.textContent=ea,Mr=y(),C(Bt.$$.fragment),Br=y(),C(dt.$$.fragment),Nr=y(),ut=h("div"),mt=h("div"),Nt=h("span"),Nt.textContent=ta,Hr=y(),C(Ht.$$.fragment),Or=y(),C(ft.$$.fragment),dr=y(),Je=h("div"),pt=h("div"),ht=h("div"),Ot=h("span"),Ot.textContent=ra,Lr=y(),C(Lt.$$.fragment),Ur=y(),C(gt.$$.fragment),Gr=y(),vt=h("div"),yt=h("div"),Ut=h("span"),Ut.textContent=aa,Jr=y(),C(Gt.$$.fragment),Xr=y(),C($t.$$.fragment),this.h()},l(r){Xe&&Xe.l(r),a=v(r);const c=ka("svelte-2igo1p",document.head);nr.l(c),n=p(c,"META",{name:!0,content:!0}),e=p(c,"META",{name:!0,content:!0}),Ke&&Ke.l(c),i=Ir(),c.forEach(d),l=v(r),R&&R.l(r),o=v(r),I&&I.l(r),u=v(r),F&&F.l(r),E=v(r),T&&T.l(r),t=v(r),A&&A.l(r),j=v(r),P&&P.l(r),S=v(r),V&&V.l(r),O=v(r),M&&M.l(r),L=v(r),B&&B.l(r),Z=v(r),N&&N.l(r),Fe=v(r),ee=p(r,"DIV",{class:!0});var Qe=b(ee);ce=p(Qe,"A",{href:!0,class:!0});var sr=b(ce);xe=we(sr,"Overview Cockpit"),sr.forEach(d),Ne=v(Qe),de=p(Qe,"A",{href:!0,class:!0});var or=b(de);kt=we(or,"Sales & Win-Loss"),or.forEach(d),ke=v(Qe),K=p(Qe,"A",{href:!0,class:!0});var ir=b(K);He=we(ir,"Operations & Vendors"),ir.forEach(d),Qe.forEach(d),Ze=v(r),ue=p(r,"DIV",{class:!0,"data-svelte-h":!0}),le(ue)!=="svelte-6xk8d7"&&(ue.innerHTML=Te),me=v(r),te=p(r,"DIV",{class:!0});var lr=b(te);$e.l(lr),lr.forEach(d),et=v(r),U=p(r,"DIV",{class:!0});var Se=b(U);G=p(Se,"DIV",{style:!0,class:!0});var Xt=b(G);J=p(Xt,"DIV",{});var We=b(J);se=p(We,"SPAN",{class:!0,"data-svelte-h":!0}),le(se)!=="svelte-e3ust3"&&(se.textContent=zt),qt=v(We),Ae=p(We,"H2",{class:!0});var Kt=b(Ae);q(Q.$$.fragment,Kt),Kt.forEach(d),qe=v(We),re=p(We,"DIV",{class:!0});var Qt=b(re);Ct=we(Qt,"🎯 "),q(fe.$$.fragment,Qt),Et=we(Qt," of YTD Target ($1.0M)"),Qt.forEach(d),We.forEach(d),Ce=v(Xt),W=p(Xt,"DIV",{class:!0});var Wt=b(W);pe=p(Wt,"SPAN",{"data-svelte-h":!0}),le(pe)!=="svelte-xdszx8"&&(pe.textContent=Zt),Dt=v(Wt),he=p(Wt,"SPAN",{class:!0});var wt=b(he);Ee=we(wt,"⚡ "),q(Y.$$.fragment,wt),Oe=we(wt,"d Lag"),wt.forEach(d),Wt.forEach(d),Xt.forEach(d),jt=v(Se),ge=p(Se,"DIV",{class:!0});var ur=b(ge);oe=p(ur,"DIV",{});var tr=b(oe);z=p(tr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),le(z)!=="svelte-1uurc49"&&(z.textContent=Pe),Le=v(tr),De=p(tr,"H2",{style:!0,class:!0});var na=b(De);q(ve.$$.fragment,na),na.forEach(d),St=v(tr),X=p(tr,"DIV",{style:!0,class:!0});var mr=b(X);je=we(mr,"🎯 "),q(ae.$$.fragment,mr),Rt=we(mr," of target ($750K)"),mr.forEach(d),tr.forEach(d),It=v(ur),ye=p(ur,"DIV",{class:!0});var fr=b(ye);Ve=p(fr,"SPAN",{style:!0,"data-svelte-h":!0}),le(Ve)!=="svelte-ifvc0m"&&(Ve.textContent=cr),$=v(fr),ne=p(fr,"SPAN",{style:!0,class:!0});var pr=b(ne);Ft=we(pr,"📊 "),q(Ue.$$.fragment,pr),er=we(pr,"x Cover"),pr.forEach(d),fr.forEach(d),ur.forEach(d),ar=v(Se),tt=p(Se,"DIV",{class:!0});var hr=b(tt);Tt=p(hr,"DIV",{});var gr=b(Tt);rt=p(gr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),le(rt)!=="svelte-19u2tfr"&&(rt.textContent=Wr),Fr=v(gr),At=p(gr,"H2",{style:!0,class:!0});var sa=b(At);q(at.$$.fragment,sa),sa.forEach(d),gr.forEach(d),Tr=v(hr),nt=p(hr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),le(nt)!=="svelte-tvomuv"&&(nt.textContent=Yr),hr.forEach(d),Ar=v(Se),st=p(Se,"DIV",{class:!0});var vr=b(st);Pt=p(vr,"DIV",{});var yr=b(Pt);ot=p(yr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),le(ot)!=="svelte-17fuh5a"&&(ot.textContent=zr),Pr=v(yr),Vt=p(yr,"H2",{style:!0,class:!0});var oa=b(Vt);q(it.$$.fragment,oa),oa.forEach(d),yr.forEach(d),Vr=v(vr),lt=p(vr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),le(lt)!=="svelte-9stalx"&&(lt.textContent=Zr),vr.forEach(d),Se.forEach(d),_r=v(r),Ge=p(r,"DIV",{class:!0});var $r=b(Ge);ct=p($r,"DIV",{class:!0});var wr=b(ct);_t=p(wr,"DIV",{class:!0});var br=b(_t);Mt=p(br,"SPAN",{class:!0,"data-svelte-h":!0}),le(Mt)!=="svelte-3eui4q"&&(Mt.textContent=ea),Mr=v(br),q(Bt.$$.fragment,br),br.forEach(d),Br=v(wr),q(dt.$$.fragment,wr),wr.forEach(d),Nr=v($r),ut=p($r,"DIV",{class:!0});var xr=b(ut);mt=p(xr,"DIV",{class:!0});var kr=b(mt);Nt=p(kr,"SPAN",{class:!0,"data-svelte-h":!0}),le(Nt)!=="svelte-4wul4y"&&(Nt.textContent=ta),Hr=v(kr),q(Ht.$$.fragment,kr),kr.forEach(d),Or=v(xr),q(ft.$$.fragment,xr),xr.forEach(d),$r.forEach(d),dr=v(r),Je=p(r,"DIV",{class:!0});var qr=b(Je);pt=p(qr,"DIV",{class:!0});var Cr=b(pt);ht=p(Cr,"DIV",{class:!0});var Er=b(ht);Ot=p(Er,"SPAN",{class:!0,"data-svelte-h":!0}),le(Ot)!=="svelte-b68vp"&&(Ot.textContent=ra),Lr=v(Er),q(Lt.$$.fragment,Er),Er.forEach(d),Ur=v(Cr),q(gt.$$.fragment,Cr),Cr.forEach(d),Gr=v(qr),vt=p(qr,"DIV",{class:!0});var Dr=b(vt);yt=p(Dr,"DIV",{class:!0});var jr=b(yt);Ut=p(jr,"SPAN",{class:!0,"data-svelte-h":!0}),le(Ut)!=="svelte-kdhzry"&&(Ut.textContent=aa),Jr=v(jr),q(Gt.$$.fragment,jr),jr.forEach(d),Xr=v(Dr),q($t.$$.fragment,Dr),Dr.forEach(d),qr.forEach(d),this.h()},h(){m(n,"name","twitter:card"),m(n,"content","summary_large_image"),m(e,"name","twitter:site"),m(e,"content","@evidence_dev"),m(ce,"href",_e=`/public.dlt-pipeline-orchestration/${rr}/?time_filter=${s[11]}`),m(ce,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),m(de,"href",Ye=`/public.dlt-pipeline-orchestration/${rr}/sales?time_filter=${s[11]}`),m(de,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(K,"href",ze=`/public.dlt-pipeline-orchestration/${rr}/operations?time_filter=${s[11]}`),m(K,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(ee,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(ue,"class","flex justify-between items-center mb-1.5 mt-0.5"),m(te,"class","mb-2 flex justify-start"),m(se,"class","text-[9px] font-bold text-white/80 uppercase tracking-wider"),m(Ae,"class","text-xl font-extrabold mt-0.5 text-white"),m(re,"class","text-[9px] font-semibold mt-0.5 text-white"),m(he,"class","font-extrabold bg-white/20 px-1.5 py-0.5 rounded"),m(W,"class","flex justify-between items-center text-[9px] text-white/80 mt-0.5 border-t border-white/20 pt-1"),ie(G,"background-color","#1D5F60"),m(G,"class","rounded-xl shadow-sm py-2.5 px-3.5 flex flex-col justify-between text-white h-[105px]"),ie(z,"color","#7B8DA6"),m(z,"class","text-[9px] font-bold uppercase tracking-wider"),ie(De,"color","#000000"),m(De,"class","text-xl font-extrabold mt-0.5"),ie(X,"color","#264773"),m(X,"class","text-[9px] font-semibold mt-0.5"),ie(Ve,"color","#7B8DA6"),ie(ne,"background-color","rgba(38, 71, 115, 0.1)"),ie(ne,"color","#264773"),m(ne,"class","font-extrabold px-1.5 py-0.5 rounded"),m(ye,"class","flex justify-between items-center text-[9px] mt-0.5 border-t border-gray-100 pt-1"),m(ge,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(rt,"color","#7B8DA6"),m(rt,"class","text-[9px] font-bold uppercase tracking-wider"),ie(At,"color","#000000"),m(At,"class","text-xl font-extrabold mt-0.5"),ie(nt,"color","#7B8DA6"),m(nt,"class","text-[9px] mt-0.5"),m(tt,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(ot,"color","#7B8DA6"),m(ot,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Vt,"color","#000000"),m(Vt,"class","text-xl font-extrabold mt-0.5"),ie(lt,"color","#7B8DA6"),m(lt,"class","text-[9px] mt-0.5"),m(st,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),m(U,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(Mt,"class","font-bold text-gray-700 text-xs"),m(_t,"class","flex items-center gap-1.5 mb-1"),m(ct,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Nt,"class","font-bold text-gray-700 text-xs"),m(mt,"class","flex items-center gap-1.5 mb-1"),m(ut,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Ge,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5"),m(Ot,"class","font-bold text-gray-700 text-xs"),m(ht,"class","flex items-center gap-1.5 mb-1.5"),m(pt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Ut,"class","font-bold text-gray-700 text-xs"),m(yt,"class","flex items-center gap-1.5 mb-1.5"),m(vt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Je,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(r,c){Xe&&Xe.m(r,c),w(r,a,c),nr.m(document.head,null),_(document.head,n),_(document.head,e),Ke&&Ke.m(document.head,null),_(document.head,i),w(r,l,c),R&&R.m(r,c),w(r,o,c),I&&I.m(r,c),w(r,u,c),F&&F.m(r,c),w(r,E,c),T&&T.m(r,c),w(r,t,c),A&&A.m(r,c),w(r,j,c),P&&P.m(r,c),w(r,S,c),V&&V.m(r,c),w(r,O,c),M&&M.m(r,c),w(r,L,c),B&&B.m(r,c),w(r,Z,c),N&&N.m(r,c),w(r,Fe,c),w(r,ee,c),_(ee,ce),_(ce,xe),_(ee,Ne),_(ee,de),_(de,kt),_(ee,ke),_(ee,K),_(K,He),w(r,Ze,c),w(r,ue,c),w(r,me,c),w(r,te,c),$e.m(te,null),w(r,et,c),w(r,U,c),_(U,G),_(G,J),_(J,se),_(J,qt),_(J,Ae),k(Q,Ae,null),_(J,qe),_(J,re),_(re,Ct),k(fe,re,null),_(re,Et),_(G,Ce),_(G,W),_(W,pe),_(W,Dt),_(W,he),_(he,Ee),k(Y,he,null),_(he,Oe),_(U,jt),_(U,ge),_(ge,oe),_(oe,z),_(oe,Le),_(oe,De),k(ve,De,null),_(oe,St),_(oe,X),_(X,je),k(ae,X,null),_(X,Rt),_(ge,It),_(ge,ye),_(ye,Ve),_(ye,$),_(ye,ne),_(ne,Ft),k(Ue,ne,null),_(ne,er),_(U,ar),_(U,tt),_(tt,Tt),_(Tt,rt),_(Tt,Fr),_(Tt,At),k(at,At,null),_(tt,Tr),_(tt,nt),_(U,Ar),_(U,st),_(st,Pt),_(Pt,ot),_(Pt,Pr),_(Pt,Vt),k(it,Vt,null),_(st,Vr),_(st,lt),w(r,_r,c),w(r,Ge,c),_(Ge,ct),_(ct,_t),_(_t,Mt),_(_t,Mr),k(Bt,_t,null),_(ct,Br),k(dt,ct,null),_(Ge,Nr),_(Ge,ut),_(ut,mt),_(mt,Nt),_(mt,Hr),k(Ht,mt,null),_(ut,Or),k(ft,ut,null),w(r,dr,c),w(r,Je,c),_(Je,pt),_(pt,ht),_(ht,Ot),_(ht,Lr),k(Lt,ht,null),_(pt,Ur),k(gt,pt,null),_(Je,Gr),_(Je,vt),_(vt,yt),_(yt,Ut),_(yt,Jr),k(Gt,yt,null),_(vt,Xr),k($t,vt,null),Jt=!0},p(r,c){typeof D<"u"&&D.title&&D.hide_title!==!0&&Xe.p(r,c),nr.p(r,c),typeof D=="object"&&Ke.p(r,c),r[1]?R?(R.p(r,c),c[0]&2&&f(R,1)):(R=da(r),R.c(),f(R,1),R.m(o.parentNode,o)):R&&(Ie(),g(R,1,1,()=>{R=null}),Re()),r[2]?I?(I.p(r,c),c[0]&4&&f(I,1)):(I=ua(r),I.c(),f(I,1),I.m(u.parentNode,u)):I&&(Ie(),g(I,1,1,()=>{I=null}),Re()),r[3]?F?(F.p(r,c),c[0]&8&&f(F,1)):(F=ma(r),F.c(),f(F,1),F.m(E.parentNode,E)):F&&(Ie(),g(F,1,1,()=>{F=null}),Re()),r[4]?T?(T.p(r,c),c[0]&16&&f(T,1)):(T=fa(r),T.c(),f(T,1),T.m(t.parentNode,t)):T&&(Ie(),g(T,1,1,()=>{T=null}),Re()),r[5]?A?(A.p(r,c),c[0]&32&&f(A,1)):(A=pa(r),A.c(),f(A,1),A.m(j.parentNode,j)):A&&(Ie(),g(A,1,1,()=>{A=null}),Re()),r[6]?P?(P.p(r,c),c[0]&64&&f(P,1)):(P=ha(r),P.c(),f(P,1),P.m(S.parentNode,S)):P&&(Ie(),g(P,1,1,()=>{P=null}),Re()),r[7]?V?(V.p(r,c),c[0]&128&&f(V,1)):(V=ga(r),V.c(),f(V,1),V.m(O.parentNode,O)):V&&(Ie(),g(V,1,1,()=>{V=null}),Re()),r[8]?M?(M.p(r,c),c[0]&256&&f(M,1)):(M=va(r),M.c(),f(M,1),M.m(L.parentNode,L)):M&&(Ie(),g(M,1,1,()=>{M=null}),Re()),r[9]?B?(B.p(r,c),c[0]&512&&f(B,1)):(B=ya(r),B.c(),f(B,1),B.m(Z.parentNode,Z)):B&&(Ie(),g(B,1,1,()=>{B=null}),Re()),r[10]?N?(N.p(r,c),c[0]&1024&&f(N,1)):(N=$a(r),N.c(),f(N,1),N.m(Fe.parentNode,Fe)):N&&(Ie(),g(N,1,1,()=>{N=null}),Re()),(!Jt||c[0]&2048&&_e!==(_e=`/public.dlt-pipeline-orchestration/${rr}/?time_filter=${r[11]}`))&&m(ce,"href",_e),(!Jt||c[0]&2048&&Ye!==(Ye=`/public.dlt-pipeline-orchestration/${rr}/sales?time_filter=${r[11]}`))&&m(de,"href",Ye),(!Jt||c[0]&2048&&ze!==(ze=`/public.dlt-pipeline-orchestration/${rr}/operations?time_filter=${r[11]}`))&&m(K,"href",ze),c[0]&2048&&ba(Yt,Yt=r[11])?(Ie(),g($e,1,1,xt),Re(),$e=wa(r),$e.c(),f($e,1),$e.m(te,null)):$e.p(r,c);const Qe={};c[0]&8&&(Qe.data=r[3]),Q.$set(Qe);const sr={};c[0]&8&&(sr.data=r[3]),fe.$set(sr);const or={};c[0]&2&&(or.data=r[1]),Y.$set(or);const ir={};c[0]&16&&(ir.data=r[4]),ve.$set(ir);const lr={};c[0]&16&&(lr.data=r[4]),ae.$set(lr);const Se={};c[0]&4&&(Se.data=r[2]),Ue.$set(Se);const Xt={};c[0]&32&&(Xt.data=r[5]),at.$set(Xt);const We={};c[0]&64&&(We.data=r[6]),it.$set(We);const Kt={};c[0]&128&&(Kt.data=r[7]),c[0]&1&&(Kt.labels=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),c[0]&1&&(Kt.stackTotalLabel=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),dt.$set(Kt);const Qt={};c[0]&256&&(Qt.data=r[8]),ft.$set(Qt);const Wt={};c[0]&512&&(Wt.data=r[9]),gt.$set(Wt);const wt={};c[0]&1024&&(wt.data=r[10]),c[2]&4096&&(wt.$$scope={dirty:c,ctx:r}),$t.$set(wt)},i(r){Jt||(f(R),f(I),f(F),f(T),f(A),f(P),f(V),f(M),f(B),f(N),f($e),f(Q.$$.fragment,r),f(fe.$$.fragment,r),f(Y.$$.fragment,r),f(ve.$$.fragment,r),f(ae.$$.fragment,r),f(Ue.$$.fragment,r),f(at.$$.fragment,r),f(it.$$.fragment,r),f(Bt.$$.fragment,r),f(dt.$$.fragment,r),f(Ht.$$.fragment,r),f(ft.$$.fragment,r),f(Lt.$$.fragment,r),f(gt.$$.fragment,r),f(Gt.$$.fragment,r),f($t.$$.fragment,r),Jt=!0)},o(r){g(R),g(I),g(F),g(T),g(A),g(P),g(V),g(M),g(B),g(N),g($e),g(Q.$$.fragment,r),g(fe.$$.fragment,r),g(Y.$$.fragment,r),g(ve.$$.fragment,r),g(ae.$$.fragment,r),g(Ue.$$.fragment,r),g(at.$$.fragment,r),g(it.$$.fragment,r),g(Bt.$$.fragment,r),g(dt.$$.fragment,r),g(Ht.$$.fragment,r),g(ft.$$.fragment,r),g(Lt.$$.fragment,r),g(gt.$$.fragment,r),g(Gt.$$.fragment,r),g($t.$$.fragment,r),Jt=!1},d(r){r&&(d(a),d(l),d(o),d(u),d(E),d(t),d(j),d(S),d(O),d(L),d(Z),d(Fe),d(ee),d(Ze),d(ue),d(me),d(te),d(et),d(U),d(_r),d(Ge),d(dr),d(Je)),Xe&&Xe.d(r),nr.d(r),d(n),d(e),Ke&&Ke.d(r),d(i),R&&R.d(r),I&&I.d(r),F&&F.d(r),T&&T.d(r),A&&A.d(r),P&&P.d(r),V&&V.d(r),M&&M.d(r),B&&B.d(r),N&&N.d(r),$e.d(r),x(Q),x(fe),x(Y),x(ve),x(ae),x(Ue),x(at),x(it),x(Bt),x(dt),x(Ht),x(ft),x(Lt),x(gt),x(Gt),x($t)}}}const D={title:"Business Performance Dashboard"},Ka=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Qa=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Wa=s=>s.name&&s.name.includes("Closed Won")?"#1D5F60":s.name&&s.name.includes("Closed Lost")?"#7B8DA6":"#264773";function Ya(s,a,n){let e,i;ia(s,Va,$=>n(54,e=$)),ia(s,_a,$=>n(60,i=$));let{data:l}=a,{data:o={},customFormattingSettings:u,__db:E,inputs:t}=l;qa(_a,i="6666cd76f96956469e7be39d750cc7d9",i);let j=Ra(Aa(t));Ca(j.subscribe($=>n(0,t=$))),Ea(Ta,{getCustomFormats:()=>u.customFormats||[]});const S=($,ne)=>Pa(E.query,$,{query_name:ne});Ia(S),e.params,la(()=>!0);let O={initialData:void 0,initialError:void 0},L=H`select
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
  end`;o.delivery_lag_data&&(o.delivery_lag_data instanceof Error?O.initialError=o.delivery_lag_data:O.initialData=o.delivery_lag_data,o.delivery_lag_columns&&(O.knownColumns=o.delivery_lag_columns));let Fe,ee=!1;const ce=Me.createReactive({callback:$=>{n(1,Fe=$)},execFn:S},{id:"delivery_lag",...O});ce(Z,{noResolve:L,...O}),globalThis[Symbol.for("delivery_lag")]={get value(){return Fe}};let xe={initialData:void 0,initialError:void 0},_e=H`select
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
  end`;o.pipeline_coverage_data&&(o.pipeline_coverage_data instanceof Error?xe.initialError=o.pipeline_coverage_data:xe.initialData=o.pipeline_coverage_data,o.pipeline_coverage_columns&&(xe.knownColumns=o.pipeline_coverage_columns));let de,kt=!1;const Ye=Me.createReactive({callback:$=>{n(2,de=$)},execFn:S},{id:"pipeline_coverage",...xe});Ye(Ne,{noResolve:_e,...xe}),globalThis[Symbol.for("pipeline_coverage")]={get value(){return de}};let ke={initialData:void 0,initialError:void 0},K=H`select 
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
  end`;o.kpi_revenue_data&&(o.kpi_revenue_data instanceof Error?ke.initialError=o.kpi_revenue_data:ke.initialData=o.kpi_revenue_data,o.kpi_revenue_columns&&(ke.knownColumns=o.kpi_revenue_columns));let ze,Ze=!1;const ue=Me.createReactive({callback:$=>{n(3,ze=$)},execFn:S},{id:"kpi_revenue",...ke});ue(He,{noResolve:K,...ke}),globalThis[Symbol.for("kpi_revenue")]={get value(){return ze}};let Te={initialData:void 0,initialError:void 0},me=H`select 
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
  end`;o.kpi_pipeline_data&&(o.kpi_pipeline_data instanceof Error?Te.initialError=o.kpi_pipeline_data:Te.initialData=o.kpi_pipeline_data,o.kpi_pipeline_columns&&(Te.knownColumns=o.kpi_pipeline_columns));let Yt,et=!1;const U=Me.createReactive({callback:$=>{n(4,Yt=$)},execFn:S},{id:"kpi_pipeline",...Te});U(te,{noResolve:me,...Te}),globalThis[Symbol.for("kpi_pipeline")]={get value(){return Yt}};let G={initialData:void 0,initialError:void 0},J=H`select count(distinct project_id) as total_projects 
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
  end`;o.kpi_projects_data&&(o.kpi_projects_data instanceof Error?G.initialError=o.kpi_projects_data:G.initialData=o.kpi_projects_data,o.kpi_projects_columns&&(G.knownColumns=o.kpi_projects_columns));let zt,qt=!1;const Ae=Me.createReactive({callback:$=>{n(5,zt=$)},execFn:S},{id:"kpi_projects",...G});Ae(se,{noResolve:J,...G}),globalThis[Symbol.for("kpi_projects")]={get value(){return zt}};let Q={initialData:void 0,initialError:void 0},qe=H`select count(distinct product_id) as total_products 
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
end`;o.kpi_products_data&&(o.kpi_products_data instanceof Error?Q.initialError=o.kpi_products_data:Q.initialData=o.kpi_products_data,o.kpi_products_columns&&(Q.knownColumns=o.kpi_products_columns));let Ct,fe=!1;const Et=Me.createReactive({callback:$=>{n(6,Ct=$)},execFn:S},{id:"kpi_products",...Q});Et(re,{noResolve:qe,...Q}),globalThis[Symbol.for("kpi_products")]={get value(){return Ct}};let Ce={initialData:void 0,initialError:void 0},W=H`select
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`;o.revenue_bookings_billing_data&&(o.revenue_bookings_billing_data instanceof Error?Ce.initialError=o.revenue_bookings_billing_data:Ce.initialData=o.revenue_bookings_billing_data,o.revenue_bookings_billing_columns&&(Ce.knownColumns=o.revenue_bookings_billing_columns));let Zt,Dt=!1;const he=Me.createReactive({callback:$=>{n(7,Zt=$)},execFn:S},{id:"revenue_bookings_billing",...Ce});he(pe,{noResolve:W,...Ce}),globalThis[Symbol.for("revenue_bookings_billing")]={get value(){return Zt}};let Ee={initialData:void 0,initialError:void 0},Y=H`select
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
order by deal_stage asc`;o.pipeline_funnel_data&&(o.pipeline_funnel_data instanceof Error?Ee.initialError=o.pipeline_funnel_data:Ee.initialData=o.pipeline_funnel_data,o.pipeline_funnel_columns&&(Ee.knownColumns=o.pipeline_funnel_columns));let jt,ge=!1;const oe=Me.createReactive({callback:$=>{n(8,jt=$)},execFn:S},{id:"pipeline_funnel",...Ee});oe(Oe,{noResolve:Y,...Ee}),globalThis[Symbol.for("pipeline_funnel")]={get value(){return jt}};let z={initialData:void 0,initialError:void 0},Pe=H`select
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
order by project_count desc`;o.project_summary_data&&(o.project_summary_data instanceof Error?z.initialError=o.project_summary_data:z.initialData=o.project_summary_data,o.project_summary_columns&&(z.knownColumns=o.project_summary_columns));let De,ve=!1;const St=Me.createReactive({callback:$=>{n(9,De=$)},execFn:S},{id:"project_summary",...z});St(Le,{noResolve:Pe,...z}),globalThis[Symbol.for("project_summary")]={get value(){return De}};let X={initialData:void 0,initialError:void 0},je=H`select
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
order by total_variants desc`;o.catalog_summary_data&&(o.catalog_summary_data instanceof Error?X.initialError=o.catalog_summary_data:X.initialData=o.catalog_summary_data,o.catalog_summary_columns&&(X.knownColumns=o.catalog_summary_columns));let Rt,It=!1;const ye=Me.createReactive({callback:$=>{n(10,Rt=$)},execFn:S},{id:"catalog_summary",...X});ye(ae,{noResolve:je,...X}),globalThis[Symbol.for("catalog_summary")]={get value(){return Rt}};let Ve="ytd";la(()=>{if(t){const $=e.url.searchParams.get("time_filter");n(0,t.time_filter=$||"ytd",t)}});const cr=($,ne)=>{const Ft=new Date($),er=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][Ft.getUTCMonth()],ar=Ft.getUTCFullYear();return Ft.getUTCMonth()===0||ne===0?er+`
`+ar:er};return s.$$set=$=>{"data"in $&&n(12,l=$.data)},s.$$.update=()=>{if(s.$$.dirty[0]&4096&&n(13,{data:o={},customFormattingSettings:u,__db:E}=l,o),s.$$.dirty[0]&8192&&Fa.set(Object.keys(o).length>0),s.$$.dirty[1]&8388608&&e.params,s.$$.dirty[0]&1&&n(15,L=H`select
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
  end`),s.$$.dirty[0]&3932160&&(_e||!kt?_e||(Ye(Ne,{noResolve:_e,...xe}),n(21,kt=!0)):Ye(Ne,{noResolve:_e})),s.$$.dirty[0]&1&&n(23,K=H`select 
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
  end`),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(J||!qt?J||(Ae(se,{noResolve:J,...G}),n(33,qt=!0)):Ae(se,{noResolve:J})),s.$$.dirty[0]&1&&n(35,qe=H`select count(distinct product_id) as total_products 
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
end`),s.$$.dirty[1]&120&&(qe||!fe?qe||(Et(re,{noResolve:qe,...Q}),n(37,fe=!0)):Et(re,{noResolve:qe})),s.$$.dirty[0]&1&&n(39,W=H`select
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[1]&1920&&(W||!Dt?W||(he(pe,{noResolve:W,...Ce}),n(41,Dt=!0)):he(pe,{noResolve:W})),s.$$.dirty[0]&1&&n(43,Y=H`select
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
order by project_count desc`),s.$$.dirty[1]&491520&&(Pe||!ve?Pe||(St(Le,{noResolve:Pe,...z}),n(49,ve=!0)):St(Le,{noResolve:Pe})),s.$$.dirty[0]&1&&n(51,je=H`select
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
order by total_variants desc`),s.$$.dirty[1]&7864320&&(je||!It?je||(ye(ae,{noResolve:je,...X}),n(53,It=!0)):ye(ae,{noResolve:je})),s.$$.dirty[0]&1&&n(11,Ve=(t==null?void 0:t.time_filter)||"ytd"),s.$$.dirty[0]&1&&t&&t.time_filter)try{const $=new URL(window.location.href);$.searchParams.get("time_filter")!==t.time_filter&&($.searchParams.set("time_filter",t.time_filter),window.history.replaceState(null,"",$.pathname+$.search))}catch{}},[t,Fe,de,ze,Yt,zt,Ct,Zt,jt,De,Rt,Ve,l,o,O,L,Z,ee,xe,_e,Ne,kt,ke,K,He,Ze,Te,me,te,et,G,J,se,qt,Q,qe,re,fe,Ce,W,pe,Dt,Ee,Y,Oe,ge,z,Pe,Le,ve,X,je,ae,It,e,cr]}class on extends Da{constructor(a){super(),ja(this,a,Ya,Xa,ba,{data:12},null,[-1,-1,-1])}}export{on as component};
