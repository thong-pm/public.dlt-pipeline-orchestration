import{s as wa,d,z as ba,i as $,e as _,l as Jr,b as f,A as ie,k as v,B as xa,h as p,r as Er,j as C,q as Q,x as rt,n as y,m as h,y as at,t as oa,C as ka,D as qa,E as Ca,F as ia,v as qt}from"../chunks/scheduler.BWqtgNY2.js";import{S as ja,i as Da,d as b,t as g,a as m,c as Fe,m as x,b as k,e as q,g as Te}from"../chunks/index.DlzBi47Z.js";import{V as kt,B as Xr,g as Ea,Q as Ue,a as Sa,b as jr}from"../chunks/Value.BW4hPJf9.js";import{a as Dr,D as Ia,e as Ra,s as Fa,Q as Le,p as Ta,b as Kr,c as or,r as la,d as Aa}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.a5Q2lZ4x.js";import{w as Pa,g as Qr}from"../chunks/entry.DB8BnRxl.js";import{h as O,p as Va}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ma}from"../chunks/stores.4FAlzY10.js";const{document:nt}=Ea;function Ba(s){let a,n=D.title+"",e;return{c(){a=h("h1"),e=at(n),this.h()},l(i){a=p(i,"H1",{class:!0});var l=C(a);e=rt(l,n),l.forEach(d),this.h()},h(){f(a,"class","title")},m(i,l){$(i,a,l),_(a,e)},p:qt,d(i){i&&d(a)}}}function Na(s){return{c(){this.h()},l(a){this.h()},h(){nt.title="Evidence"},m:qt,p:qt,d:qt}}function Oa(s){let a,n,e,i,l;return nt.title=a=D.title,{c(){n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;f(e,"property","og:title"),f(e,"content",((o=D.og)==null?void 0:o.title)??D.title),f(l,"name","twitter:title"),f(l,"content",((u=D.og)==null?void 0:u.title)??D.title)},m(o,u){$(o,n,u),$(o,e,u),$(o,i,u),$(o,l,u)},p(o,u){u&0&&a!==(a=D.title)&&(nt.title=a)},d(o){o&&(d(n),d(e),d(i),d(l))}}}function Ha(s){var l,o;let a,n,e=(D.description||((l=D.og)==null?void 0:l.description))&&La(),i=((o=D.og)==null?void 0:o.image)&&Ua();return{c(){e&&e.c(),a=y(),i&&i.c(),n=Er()},l(u){e&&e.l(u),a=v(u),i&&i.l(u),n=Er()},m(u,j){e&&e.m(u,j),$(u,a,j),i&&i.m(u,j),$(u,n,j)},p(u,j){var t,E;(D.description||(t=D.og)!=null&&t.description)&&e.p(u,j),(E=D.og)!=null&&E.image&&i.p(u,j)},d(u){u&&(d(a),d(n)),e&&e.d(u),i&&i.d(u)}}}function La(s){let a,n,e,i,l;return{c(){a=h("meta"),n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){a=p(o,"META",{name:!0,content:!0}),n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u,j;f(a,"name","description"),f(a,"content",D.description??((o=D.og)==null?void 0:o.description)),f(e,"property","og:description"),f(e,"content",((u=D.og)==null?void 0:u.description)??D.description),f(l,"name","twitter:description"),f(l,"content",((j=D.og)==null?void 0:j.description)??D.description)},m(o,u){$(o,a,u),$(o,n,u),$(o,e,u),$(o,i,u),$(o,l,u)},p:qt,d(o){o&&(d(a),d(n),d(e),d(i),d(l))}}}function Ua(s){let a,n,e;return{c(){a=h("meta"),n=y(),e=h("meta"),this.h()},l(i){a=p(i,"META",{property:!0,content:!0}),n=v(i),e=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;f(a,"property","og:image"),f(a,"content",or((i=D.og)==null?void 0:i.image)),f(e,"name","twitter:image"),f(e,"content",or((l=D.og)==null?void 0:l.image))},m(i,l){$(i,a,l),$(i,n,l),$(i,e,l)},p:qt,d(i){i&&(d(a),d(n),d(e))}}}function ca(s){let a,n;return a=new Ue({props:{queryID:"delivery_lag",queryResult:s[1]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&2&&(l.queryResult=e[1]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function _a(s){let a,n;return a=new Ue({props:{queryID:"pipeline_coverage",queryResult:s[2]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&4&&(l.queryResult=e[2]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function da(s){let a,n;return a=new Ue({props:{queryID:"kpi_revenue",queryResult:s[3]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&8&&(l.queryResult=e[3]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ua(s){let a,n;return a=new Ue({props:{queryID:"kpi_pipeline",queryResult:s[4]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&16&&(l.queryResult=e[4]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ma(s){let a,n;return a=new Ue({props:{queryID:"kpi_projects",queryResult:s[5]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&32&&(l.queryResult=e[5]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function fa(s){let a,n;return a=new Ue({props:{queryID:"kpi_products",queryResult:s[6]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&64&&(l.queryResult=e[6]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function pa(s){let a,n;return a=new Ue({props:{queryID:"revenue_bookings_billing",queryResult:s[7]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&128&&(l.queryResult=e[7]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ha(s){let a,n;return a=new Ue({props:{queryID:"pipeline_funnel",queryResult:s[8]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&256&&(l.queryResult=e[8]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ga(s){let a,n;return a=new Ue({props:{queryID:"project_summary",queryResult:s[9]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&512&&(l.queryResult=e[9]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function va(s){let a,n;return a=new Ue({props:{queryID:"catalog_summary",queryResult:s[10]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&1024&&(l.queryResult=e[10]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function Ga(s){let a,n,e,i,l,o,u,j;return a=new jr({props:{valueLabel:"MTD",value:"mtd",default:s[11]==="mtd"}}),e=new jr({props:{valueLabel:"QTD",value:"qtd",default:s[11]==="qtd"}}),l=new jr({props:{valueLabel:"YTD",value:"ytd",default:s[11]==="ytd"}}),u=new jr({props:{valueLabel:"All Time",value:"all",default:s[11]==="all"}}),{c(){q(a.$$.fragment),n=y(),q(e.$$.fragment),i=y(),q(l.$$.fragment),o=y(),q(u.$$.fragment)},l(t){k(a.$$.fragment,t),n=v(t),k(e.$$.fragment,t),i=v(t),k(l.$$.fragment,t),o=v(t),k(u.$$.fragment,t)},m(t,E){x(a,t,E),$(t,n,E),x(e,t,E),$(t,i,E),x(l,t,E),$(t,o,E),x(u,t,E),j=!0},p(t,E){const S={};E[0]&2048&&(S.default=t[11]==="mtd"),a.$set(S);const L={};E[0]&2048&&(L.default=t[11]==="qtd"),e.$set(L);const U={};E[0]&2048&&(U.default=t[11]==="ytd"),l.$set(U);const Y={};E[0]&2048&&(Y.default=t[11]==="all"),u.$set(Y)},i(t){j||(m(a.$$.fragment,t),m(e.$$.fragment,t),m(l.$$.fragment,t),m(u.$$.fragment,t),j=!0)},o(t){g(a.$$.fragment,t),g(e.$$.fragment,t),g(l.$$.fragment,t),g(u.$$.fragment,t),j=!1},d(t){t&&(d(n),d(i),d(o)),b(a,t),b(e,t),b(l,t),b(u,t)}}}function ya(s){let a,n;return a=new Sa({props:{name:"time_filter",defaultValue:s[11],$$slots:{default:[Ga]},$$scope:{ctx:s}}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&2048&&(l.defaultValue=e[11]),i[0]&2048|i[2]&32768&&(l.$$scope={dirty:i,ctx:e}),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function Ja(s){let a,n,e,i,l,o;return a=new Kr({props:{id:"vendor",label:"Vendor Brand"}}),e=new Kr({props:{id:"total_variants",label:"Variants Count",align:"center"}}),l=new Kr({props:{id:"average_price",label:"Average Price",align:"right",fmt:"usd"}}),{c(){q(a.$$.fragment),n=y(),q(e.$$.fragment),i=y(),q(l.$$.fragment)},l(u){k(a.$$.fragment,u),n=v(u),k(e.$$.fragment,u),i=v(u),k(l.$$.fragment,u)},m(u,j){x(a,u,j),$(u,n,j),x(e,u,j),$(u,i,j),x(l,u,j),o=!0},p:qt,i(u){o||(m(a.$$.fragment,u),m(e.$$.fragment,u),m(l.$$.fragment,u),o=!0)},o(u){g(a.$$.fragment,u),g(e.$$.fragment,u),g(l.$$.fragment,u),o=!1},d(u){u&&(d(n),d(i)),b(a,u),b(e,u),b(l,u)}}}function Xa(s){let a,n,e,i,l,o,u,j,t,E,S,L,U,Y,Ae,W,le,Pe="Overview Cockpit",be,ee,Kt="Sales & Win-Loss",Ct,ce,Ve="Operations & Vendors",_e,te,Qt='<div class="text-base font-extrabold text-[#264773]">Business Performance Cockpit</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Local Postgres</div>',st,de,Me=s[11],ue,H,ne,se,xe,Be="💰 Total Billed Revenue",ke,me,fe,jt,pe,qe,G,Ge,Dt,he,Ne,Oe="Actual invoices billed via Xero",Ce,re,Et,ge,St,je,J,z,ve,Yt="📈 Active Pipeline Value",It,Z,X,Je,oe,Rt,ye,De,Ee,ae,Se,Wt="Open opportunities in HubSpot CRM",Ft,K,er,He,tr,rr,w,Ie,we,Sr="🏗️ Active Projects",zt,Xe,ot,Ir,it,Yr="Ongoing jobs managed in Procore",Rr,lt,Tt,ct,Wr="🛍️ Shopify Products",Fr,At,_t,Tr,dt,zr="Unique items in active catalog",ir,Ke,ut,mt,Pt,Zr="Monthly Cash Flow Billed vs. Booked Contracts",Ar,Vt,Pr,ft,Vr,pt,ht,Mt,ea="Sales Pipeline Opportunity Value",Mr,Bt,Br,gt,lr,Qe,vt,yt,Nt,ta="Procore Project Portfolio Status",Nr,Ot,Or,wt,Hr,$t,bt,Ht,ra="Shopify Product Catalog Summary",Lr,Lt,Ur,xt,cr,Gr,aa,Ye=typeof D<"u"&&D.title&&D.hide_title!==!0&&Ba();function $a(r,c){return typeof D<"u"&&D.title?Oa:Na}let ar=$a()(s),We=typeof D=="object"&&Ha(),I=s[1]&&ca(s),R=s[2]&&_a(s),F=s[3]&&da(s),T=s[4]&&ua(s),A=s[5]&&ma(s),P=s[6]&&fa(s),V=s[7]&&pa(s),M=s[8]&&ha(s),B=s[9]&&ga(s),N=s[10]&&va(s),$e=ya(s);return fe=new kt({props:{data:s[3],column:"total_revenue",fmt:"usd"}}),G=new kt({props:{data:s[3],column:"target_progress",fmt:"pct0"}}),ge=new kt({props:{data:s[1],column:"avg_lag_days",fmt:"num0"}}),X=new kt({props:{data:s[4],column:"pipeline_value",fmt:"usd"}}),ye=new kt({props:{data:s[4],column:"target_progress",fmt:"pct0"}}),He=new kt({props:{data:s[2],column:"coverage_ratio",fmt:"0.0"}}),ot=new kt({props:{data:s[5],column:"total_projects"}}),_t=new kt({props:{data:s[6],column:"total_products"}}),Vt=new Dr({props:{description:"Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed."}}),ft=new Xr({props:{data:s[7],x:"month_date",y:"revenue",series:"source_system",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",stackTotalLabel:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Billed Cash Flow (Xero)","Booked Contracts (HubSpot)"],height:175,echartsOptions:{grid:{top:25,bottom:35,left:40,right:15},xAxis:{type:"time",axisLabel:{formatter:s[58]}},yAxis:{splitNumber:3,axisLabel:{formatter:Ka}}}}}),Bt=new Dr({props:{description:"Displays the total value of all currently open opportunities in HubSpot CRM by stage, excluding closed won and closed lost deals."}}),gt=new Xr({props:{data:s[8],x:"deal_stage",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],sort:"false",height:175,echartsOptions:{grid:{top:25,bottom:10,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Qa},offset:10},series:[{itemStyle:{color:Ya}}]}}}),Ot=new Dr({props:{description:"Tracks the count of active versus completed projects for each client corporate parent group managed in Procore."}}),wt=new Xr({props:{data:s[9],x:"company_name",y:"project_count",series:"project_status",swapXY:"true",fillOpacity:"0.9",labels:!0,labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Active","Completed"],height:175,echartsOptions:{xAxis:{minInterval:1,splitNumber:3},grid:{top:15,bottom:25,left:40,right:30}}}}),Lt=new Dr({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),xt=new Ia({props:{data:s[10],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Ja]},$$scope:{ctx:s}}}),{c(){Ye&&Ye.c(),a=y(),ar.c(),n=h("meta"),e=h("meta"),We&&We.c(),i=Er(),l=y(),I&&I.c(),o=y(),R&&R.c(),u=y(),F&&F.c(),j=y(),T&&T.c(),t=y(),A&&A.c(),E=y(),P&&P.c(),S=y(),V&&V.c(),L=y(),M&&M.c(),U=y(),B&&B.c(),Y=y(),N&&N.c(),Ae=y(),W=h("div"),le=h("button"),le.textContent=Pe,be=y(),ee=h("button"),ee.textContent=Kt,Ct=y(),ce=h("button"),ce.textContent=Ve,_e=y(),te=h("div"),te.innerHTML=Qt,st=y(),de=h("div"),$e.c(),ue=y(),H=h("div"),ne=h("div"),se=h("div"),xe=h("span"),xe.textContent=Be,ke=y(),me=h("h2"),q(fe.$$.fragment),jt=y(),pe=h("div"),qe=at("🎯 "),q(G.$$.fragment),Ge=at(" of YTD Target ($1.0M)"),Dt=y(),he=h("div"),Ne=h("span"),Ne.textContent=Oe,Ce=y(),re=h("span"),Et=at("⚡ "),q(ge.$$.fragment),St=at("d Lag"),je=y(),J=h("div"),z=h("div"),ve=h("span"),ve.textContent=Yt,It=y(),Z=h("h2"),q(X.$$.fragment),Je=y(),oe=h("div"),Rt=at("🎯 "),q(ye.$$.fragment),De=at(" of target ($750K)"),Ee=y(),ae=h("div"),Se=h("span"),Se.textContent=Wt,Ft=y(),K=h("span"),er=at("📊 "),q(He.$$.fragment),tr=at("x Cover"),rr=y(),w=h("div"),Ie=h("div"),we=h("span"),we.textContent=Sr,zt=y(),Xe=h("h2"),q(ot.$$.fragment),Ir=y(),it=h("div"),it.textContent=Yr,Rr=y(),lt=h("div"),Tt=h("div"),ct=h("span"),ct.textContent=Wr,Fr=y(),At=h("h2"),q(_t.$$.fragment),Tr=y(),dt=h("div"),dt.textContent=zr,ir=y(),Ke=h("div"),ut=h("div"),mt=h("div"),Pt=h("span"),Pt.textContent=Zr,Ar=y(),q(Vt.$$.fragment),Pr=y(),q(ft.$$.fragment),Vr=y(),pt=h("div"),ht=h("div"),Mt=h("span"),Mt.textContent=ea,Mr=y(),q(Bt.$$.fragment),Br=y(),q(gt.$$.fragment),lr=y(),Qe=h("div"),vt=h("div"),yt=h("div"),Nt=h("span"),Nt.textContent=ta,Nr=y(),q(Ot.$$.fragment),Or=y(),q(wt.$$.fragment),Hr=y(),$t=h("div"),bt=h("div"),Ht=h("span"),Ht.textContent=ra,Lr=y(),q(Lt.$$.fragment),Ur=y(),q(xt.$$.fragment),this.h()},l(r){Ye&&Ye.l(r),a=v(r);const c=xa("svelte-2igo1p",nt.head);ar.l(c),n=p(c,"META",{name:!0,content:!0}),e=p(c,"META",{name:!0,content:!0}),We&&We.l(c),i=Er(),c.forEach(d),l=v(r),I&&I.l(r),o=v(r),R&&R.l(r),u=v(r),F&&F.l(r),j=v(r),T&&T.l(r),t=v(r),A&&A.l(r),E=v(r),P&&P.l(r),S=v(r),V&&V.l(r),L=v(r),M&&M.l(r),U=v(r),B&&B.l(r),Y=v(r),N&&N.l(r),Ae=v(r),W=p(r,"DIV",{class:!0});var ze=C(W);le=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(le)!=="svelte-1n5lix1"&&(le.textContent=Pe),be=v(ze),ee=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(ee)!=="svelte-1l9tmjn"&&(ee.textContent=Kt),Ct=v(ze),ce=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(ce)!=="svelte-19h1sxa"&&(ce.textContent=Ve),ze.forEach(d),_e=v(r),te=p(r,"DIV",{class:!0,"data-svelte-h":!0}),Q(te)!=="svelte-6xk8d7"&&(te.innerHTML=Qt),st=v(r),de=p(r,"DIV",{class:!0});var nr=C(de);$e.l(nr),nr.forEach(d),ue=v(r),H=p(r,"DIV",{class:!0});var Re=C(H);ne=p(Re,"DIV",{style:!0,class:!0});var Ut=C(ne);se=p(Ut,"DIV",{});var Ze=C(se);xe=p(Ze,"SPAN",{class:!0,"data-svelte-h":!0}),Q(xe)!=="svelte-e3ust3"&&(xe.textContent=Be),ke=v(Ze),me=p(Ze,"H2",{class:!0});var sr=C(me);k(fe.$$.fragment,sr),sr.forEach(d),jt=v(Ze),pe=p(Ze,"DIV",{class:!0});var Gt=C(pe);qe=rt(Gt,"🎯 "),k(G.$$.fragment,Gt),Ge=rt(Gt," of YTD Target ($1.0M)"),Gt.forEach(d),Ze.forEach(d),Dt=v(Ut),he=p(Ut,"DIV",{class:!0});var Jt=C(he);Ne=p(Jt,"SPAN",{"data-svelte-h":!0}),Q(Ne)!=="svelte-xdszx8"&&(Ne.textContent=Oe),Ce=v(Jt),re=p(Jt,"SPAN",{class:!0});var et=C(re);Et=rt(et,"⚡ "),k(ge.$$.fragment,et),St=rt(et,"d Lag"),et.forEach(d),Jt.forEach(d),Ut.forEach(d),je=v(Re),J=p(Re,"DIV",{class:!0});var Xt=C(J);z=p(Xt,"DIV",{});var tt=C(z);ve=p(tt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(ve)!=="svelte-1uurc49"&&(ve.textContent=Yt),It=v(tt),Z=p(tt,"H2",{style:!0,class:!0});var Zt=C(Z);k(X.$$.fragment,Zt),Zt.forEach(d),Je=v(tt),oe=p(tt,"DIV",{style:!0,class:!0});var _r=C(oe);Rt=rt(_r,"🎯 "),k(ye.$$.fragment,_r),De=rt(_r," of target ($750K)"),_r.forEach(d),tt.forEach(d),Ee=v(Xt),ae=p(Xt,"DIV",{class:!0});var dr=C(ae);Se=p(dr,"SPAN",{style:!0,"data-svelte-h":!0}),Q(Se)!=="svelte-ifvc0m"&&(Se.textContent=Wt),Ft=v(dr),K=p(dr,"SPAN",{style:!0,class:!0});var ur=C(K);er=rt(ur,"📊 "),k(He.$$.fragment,ur),tr=rt(ur,"x Cover"),ur.forEach(d),dr.forEach(d),Xt.forEach(d),rr=v(Re),w=p(Re,"DIV",{class:!0});var mr=C(w);Ie=p(mr,"DIV",{});var fr=C(Ie);we=p(fr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(we)!=="svelte-19u2tfr"&&(we.textContent=Sr),zt=v(fr),Xe=p(fr,"H2",{style:!0,class:!0});var na=C(Xe);k(ot.$$.fragment,na),na.forEach(d),fr.forEach(d),Ir=v(mr),it=p(mr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(it)!=="svelte-tvomuv"&&(it.textContent=Yr),mr.forEach(d),Rr=v(Re),lt=p(Re,"DIV",{class:!0});var pr=C(lt);Tt=p(pr,"DIV",{});var hr=C(Tt);ct=p(hr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(ct)!=="svelte-17fuh5a"&&(ct.textContent=Wr),Fr=v(hr),At=p(hr,"H2",{style:!0,class:!0});var sa=C(At);k(_t.$$.fragment,sa),sa.forEach(d),hr.forEach(d),Tr=v(pr),dt=p(pr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(dt)!=="svelte-9stalx"&&(dt.textContent=zr),pr.forEach(d),Re.forEach(d),ir=v(r),Ke=p(r,"DIV",{class:!0});var gr=C(Ke);ut=p(gr,"DIV",{class:!0});var vr=C(ut);mt=p(vr,"DIV",{class:!0});var yr=C(mt);Pt=p(yr,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Pt)!=="svelte-3eui4q"&&(Pt.textContent=Zr),Ar=v(yr),k(Vt.$$.fragment,yr),yr.forEach(d),Pr=v(vr),k(ft.$$.fragment,vr),vr.forEach(d),Vr=v(gr),pt=p(gr,"DIV",{class:!0});var wr=C(pt);ht=p(wr,"DIV",{class:!0});var $r=C(ht);Mt=p($r,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Mt)!=="svelte-4wul4y"&&(Mt.textContent=ea),Mr=v($r),k(Bt.$$.fragment,$r),$r.forEach(d),Br=v(wr),k(gt.$$.fragment,wr),wr.forEach(d),gr.forEach(d),lr=v(r),Qe=p(r,"DIV",{class:!0});var br=C(Qe);vt=p(br,"DIV",{class:!0});var xr=C(vt);yt=p(xr,"DIV",{class:!0});var kr=C(yt);Nt=p(kr,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Nt)!=="svelte-b68vp"&&(Nt.textContent=ta),Nr=v(kr),k(Ot.$$.fragment,kr),kr.forEach(d),Or=v(xr),k(wt.$$.fragment,xr),xr.forEach(d),Hr=v(br),$t=p(br,"DIV",{class:!0});var qr=C($t);bt=p(qr,"DIV",{class:!0});var Cr=C(bt);Ht=p(Cr,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Ht)!=="svelte-kdhzry"&&(Ht.textContent=ra),Lr=v(Cr),k(Lt.$$.fragment,Cr),Cr.forEach(d),Ur=v(qr),k(xt.$$.fragment,qr),qr.forEach(d),br.forEach(d),this.h()},h(){f(n,"name","twitter:card"),f(n,"content","summary_large_image"),f(e,"name","twitter:site"),f(e,"content","@evidence_dev"),f(le,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f(ee,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(ce,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(W,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(te,"class","flex justify-between items-center mb-1.5 mt-0.5"),f(de,"class","mb-2 flex justify-start"),f(xe,"class","text-[9px] font-bold text-white/80 uppercase tracking-wider"),f(me,"class","text-xl font-extrabold mt-0.5 text-white"),f(pe,"class","text-[9px] font-semibold mt-0.5 text-white"),f(re,"class","font-extrabold bg-white/20 px-1.5 py-0.5 rounded"),f(he,"class","flex justify-between items-center text-[9px] text-white/80 mt-0.5 border-t border-white/20 pt-1"),ie(ne,"background-color","#1D5F60"),f(ne,"class","rounded-xl shadow-sm py-2.5 px-3.5 flex flex-col justify-between text-white h-[105px]"),ie(ve,"color","#7B8DA6"),f(ve,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Z,"color","#000000"),f(Z,"class","text-xl font-extrabold mt-0.5"),ie(oe,"color","#264773"),f(oe,"class","text-[9px] font-semibold mt-0.5"),ie(Se,"color","#7B8DA6"),ie(K,"background-color","rgba(38, 71, 115, 0.1)"),ie(K,"color","#264773"),f(K,"class","font-extrabold px-1.5 py-0.5 rounded"),f(ae,"class","flex justify-between items-center text-[9px] mt-0.5 border-t border-gray-100 pt-1"),f(J,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(we,"color","#7B8DA6"),f(we,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Xe,"color","#000000"),f(Xe,"class","text-xl font-extrabold mt-0.5"),ie(it,"color","#7B8DA6"),f(it,"class","text-[9px] mt-0.5"),f(w,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(ct,"color","#7B8DA6"),f(ct,"class","text-[9px] font-bold uppercase tracking-wider"),ie(At,"color","#000000"),f(At,"class","text-xl font-extrabold mt-0.5"),ie(dt,"color","#7B8DA6"),f(dt,"class","text-[9px] mt-0.5"),f(lt,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),f(H,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(Pt,"class","font-bold text-gray-700 text-xs"),f(mt,"class","flex items-center gap-1.5 mb-1"),f(ut,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Mt,"class","font-bold text-gray-700 text-xs"),f(ht,"class","flex items-center gap-1.5 mb-1"),f(pt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ke,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5"),f(Nt,"class","font-bold text-gray-700 text-xs"),f(yt,"class","flex items-center gap-1.5 mb-1.5"),f(vt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ht,"class","font-bold text-gray-700 text-xs"),f(bt,"class","flex items-center gap-1.5 mb-1.5"),f($t,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Qe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(r,c){Ye&&Ye.m(r,c),$(r,a,c),ar.m(nt.head,null),_(nt.head,n),_(nt.head,e),We&&We.m(nt.head,null),_(nt.head,i),$(r,l,c),I&&I.m(r,c),$(r,o,c),R&&R.m(r,c),$(r,u,c),F&&F.m(r,c),$(r,j,c),T&&T.m(r,c),$(r,t,c),A&&A.m(r,c),$(r,E,c),P&&P.m(r,c),$(r,S,c),V&&V.m(r,c),$(r,L,c),M&&M.m(r,c),$(r,U,c),B&&B.m(r,c),$(r,Y,c),N&&N.m(r,c),$(r,Ae,c),$(r,W,c),_(W,le),_(W,be),_(W,ee),_(W,Ct),_(W,ce),$(r,_e,c),$(r,te,c),$(r,st,c),$(r,de,c),$e.m(de,null),$(r,ue,c),$(r,H,c),_(H,ne),_(ne,se),_(se,xe),_(se,ke),_(se,me),x(fe,me,null),_(se,jt),_(se,pe),_(pe,qe),x(G,pe,null),_(pe,Ge),_(ne,Dt),_(ne,he),_(he,Ne),_(he,Ce),_(he,re),_(re,Et),x(ge,re,null),_(re,St),_(H,je),_(H,J),_(J,z),_(z,ve),_(z,It),_(z,Z),x(X,Z,null),_(z,Je),_(z,oe),_(oe,Rt),x(ye,oe,null),_(oe,De),_(J,Ee),_(J,ae),_(ae,Se),_(ae,Ft),_(ae,K),_(K,er),x(He,K,null),_(K,tr),_(H,rr),_(H,w),_(w,Ie),_(Ie,we),_(Ie,zt),_(Ie,Xe),x(ot,Xe,null),_(w,Ir),_(w,it),_(H,Rr),_(H,lt),_(lt,Tt),_(Tt,ct),_(Tt,Fr),_(Tt,At),x(_t,At,null),_(lt,Tr),_(lt,dt),$(r,ir,c),$(r,Ke,c),_(Ke,ut),_(ut,mt),_(mt,Pt),_(mt,Ar),x(Vt,mt,null),_(ut,Pr),x(ft,ut,null),_(Ke,Vr),_(Ke,pt),_(pt,ht),_(ht,Mt),_(ht,Mr),x(Bt,ht,null),_(pt,Br),x(gt,pt,null),$(r,lr,c),$(r,Qe,c),_(Qe,vt),_(vt,yt),_(yt,Nt),_(yt,Nr),x(Ot,yt,null),_(vt,Or),x(wt,vt,null),_(Qe,Hr),_(Qe,$t),_($t,bt),_(bt,Ht),_(bt,Lr),x(Lt,bt,null),_($t,Ur),x(xt,$t,null),cr=!0,Gr||(aa=[Jr(le,"click",s[55]),Jr(ee,"click",s[56]),Jr(ce,"click",s[57])],Gr=!0)},p(r,c){typeof D<"u"&&D.title&&D.hide_title!==!0&&Ye.p(r,c),ar.p(r,c),typeof D=="object"&&We.p(r,c),r[1]?I?(I.p(r,c),c[0]&2&&m(I,1)):(I=ca(r),I.c(),m(I,1),I.m(o.parentNode,o)):I&&(Te(),g(I,1,1,()=>{I=null}),Fe()),r[2]?R?(R.p(r,c),c[0]&4&&m(R,1)):(R=_a(r),R.c(),m(R,1),R.m(u.parentNode,u)):R&&(Te(),g(R,1,1,()=>{R=null}),Fe()),r[3]?F?(F.p(r,c),c[0]&8&&m(F,1)):(F=da(r),F.c(),m(F,1),F.m(j.parentNode,j)):F&&(Te(),g(F,1,1,()=>{F=null}),Fe()),r[4]?T?(T.p(r,c),c[0]&16&&m(T,1)):(T=ua(r),T.c(),m(T,1),T.m(t.parentNode,t)):T&&(Te(),g(T,1,1,()=>{T=null}),Fe()),r[5]?A?(A.p(r,c),c[0]&32&&m(A,1)):(A=ma(r),A.c(),m(A,1),A.m(E.parentNode,E)):A&&(Te(),g(A,1,1,()=>{A=null}),Fe()),r[6]?P?(P.p(r,c),c[0]&64&&m(P,1)):(P=fa(r),P.c(),m(P,1),P.m(S.parentNode,S)):P&&(Te(),g(P,1,1,()=>{P=null}),Fe()),r[7]?V?(V.p(r,c),c[0]&128&&m(V,1)):(V=pa(r),V.c(),m(V,1),V.m(L.parentNode,L)):V&&(Te(),g(V,1,1,()=>{V=null}),Fe()),r[8]?M?(M.p(r,c),c[0]&256&&m(M,1)):(M=ha(r),M.c(),m(M,1),M.m(U.parentNode,U)):M&&(Te(),g(M,1,1,()=>{M=null}),Fe()),r[9]?B?(B.p(r,c),c[0]&512&&m(B,1)):(B=ga(r),B.c(),m(B,1),B.m(Y.parentNode,Y)):B&&(Te(),g(B,1,1,()=>{B=null}),Fe()),r[10]?N?(N.p(r,c),c[0]&1024&&m(N,1)):(N=va(r),N.c(),m(N,1),N.m(Ae.parentNode,Ae)):N&&(Te(),g(N,1,1,()=>{N=null}),Fe()),c[0]&2048&&wa(Me,Me=r[11])?(Te(),g($e,1,1,qt),Fe(),$e=ya(r),$e.c(),m($e,1),$e.m(de,null)):$e.p(r,c);const ze={};c[0]&8&&(ze.data=r[3]),fe.$set(ze);const nr={};c[0]&8&&(nr.data=r[3]),G.$set(nr);const Re={};c[0]&2&&(Re.data=r[1]),ge.$set(Re);const Ut={};c[0]&16&&(Ut.data=r[4]),X.$set(Ut);const Ze={};c[0]&16&&(Ze.data=r[4]),ye.$set(Ze);const sr={};c[0]&4&&(sr.data=r[2]),He.$set(sr);const Gt={};c[0]&32&&(Gt.data=r[5]),ot.$set(Gt);const Jt={};c[0]&64&&(Jt.data=r[6]),_t.$set(Jt);const et={};c[0]&128&&(et.data=r[7]),c[0]&1&&(et.labels=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),c[0]&1&&(et.stackTotalLabel=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),ft.$set(et);const Xt={};c[0]&256&&(Xt.data=r[8]),gt.$set(Xt);const tt={};c[0]&512&&(tt.data=r[9]),wt.$set(tt);const Zt={};c[0]&1024&&(Zt.data=r[10]),c[2]&32768&&(Zt.$$scope={dirty:c,ctx:r}),xt.$set(Zt)},i(r){cr||(m(I),m(R),m(F),m(T),m(A),m(P),m(V),m(M),m(B),m(N),m($e),m(fe.$$.fragment,r),m(G.$$.fragment,r),m(ge.$$.fragment,r),m(X.$$.fragment,r),m(ye.$$.fragment,r),m(He.$$.fragment,r),m(ot.$$.fragment,r),m(_t.$$.fragment,r),m(Vt.$$.fragment,r),m(ft.$$.fragment,r),m(Bt.$$.fragment,r),m(gt.$$.fragment,r),m(Ot.$$.fragment,r),m(wt.$$.fragment,r),m(Lt.$$.fragment,r),m(xt.$$.fragment,r),cr=!0)},o(r){g(I),g(R),g(F),g(T),g(A),g(P),g(V),g(M),g(B),g(N),g($e),g(fe.$$.fragment,r),g(G.$$.fragment,r),g(ge.$$.fragment,r),g(X.$$.fragment,r),g(ye.$$.fragment,r),g(He.$$.fragment,r),g(ot.$$.fragment,r),g(_t.$$.fragment,r),g(Vt.$$.fragment,r),g(ft.$$.fragment,r),g(Bt.$$.fragment,r),g(gt.$$.fragment,r),g(Ot.$$.fragment,r),g(wt.$$.fragment,r),g(Lt.$$.fragment,r),g(xt.$$.fragment,r),cr=!1},d(r){r&&(d(a),d(l),d(o),d(u),d(j),d(t),d(E),d(S),d(L),d(U),d(Y),d(Ae),d(W),d(_e),d(te),d(st),d(de),d(ue),d(H),d(ir),d(Ke),d(lr),d(Qe)),Ye&&Ye.d(r),ar.d(r),d(n),d(e),We&&We.d(r),d(i),I&&I.d(r),R&&R.d(r),F&&F.d(r),T&&T.d(r),A&&A.d(r),P&&P.d(r),V&&V.d(r),M&&M.d(r),B&&B.d(r),N&&N.d(r),$e.d(r),b(fe),b(G),b(ge),b(X),b(ye),b(He),b(ot),b(_t),b(Vt),b(ft),b(Bt),b(gt),b(Ot),b(wt),b(Lt),b(xt),Gr=!1,ba(aa)}}}const D={title:"Business Performance Dashboard"},Ka=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Qa=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Ya=s=>s.name&&s.name.includes("Closed Won")?"#1D5F60":s.name&&s.name.includes("Closed Lost")?"#7B8DA6":"#264773";function Wa(s,a,n){let e,i;oa(s,Ma,w=>n(54,e=w)),oa(s,la,w=>n(63,i=w));let{data:l}=a,{data:o={},customFormattingSettings:u,__db:j,inputs:t}=l;ka(la,i="6666cd76f96956469e7be39d750cc7d9",i);let E=Ra(Pa(t));qa(E.subscribe(w=>n(0,t=w))),Ca(Aa,{getCustomFormats:()=>u.customFormats||[]});const S=(w,Ie)=>Va(j.query,w,{query_name:Ie});Fa(S),e.params,ia(()=>!0);let L={initialData:void 0,initialError:void 0},U=O`select
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
  end`,Y=`select
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
  end`;o.delivery_lag_data&&(o.delivery_lag_data instanceof Error?L.initialError=o.delivery_lag_data:L.initialData=o.delivery_lag_data,o.delivery_lag_columns&&(L.knownColumns=o.delivery_lag_columns));let Ae,W=!1;const le=Le.createReactive({callback:w=>{n(1,Ae=w)},execFn:S},{id:"delivery_lag",...L});le(Y,{noResolve:U,...L}),globalThis[Symbol.for("delivery_lag")]={get value(){return Ae}};let Pe={initialData:void 0,initialError:void 0},be=O`select
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
  end`,ee=`select
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
  end`;o.pipeline_coverage_data&&(o.pipeline_coverage_data instanceof Error?Pe.initialError=o.pipeline_coverage_data:Pe.initialData=o.pipeline_coverage_data,o.pipeline_coverage_columns&&(Pe.knownColumns=o.pipeline_coverage_columns));let Kt,Ct=!1;const ce=Le.createReactive({callback:w=>{n(2,Kt=w)},execFn:S},{id:"pipeline_coverage",...Pe});ce(ee,{noResolve:be,...Pe}),globalThis[Symbol.for("pipeline_coverage")]={get value(){return Kt}};let Ve={initialData:void 0,initialError:void 0},_e=O`select 
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
  end`,te=`select 
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
  end`;o.kpi_revenue_data&&(o.kpi_revenue_data instanceof Error?Ve.initialError=o.kpi_revenue_data:Ve.initialData=o.kpi_revenue_data,o.kpi_revenue_columns&&(Ve.knownColumns=o.kpi_revenue_columns));let Qt,st=!1;const de=Le.createReactive({callback:w=>{n(3,Qt=w)},execFn:S},{id:"kpi_revenue",...Ve});de(te,{noResolve:_e,...Ve}),globalThis[Symbol.for("kpi_revenue")]={get value(){return Qt}};let Me={initialData:void 0,initialError:void 0},ue=O`select 
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
  end`,H=`select 
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
  end`;o.kpi_pipeline_data&&(o.kpi_pipeline_data instanceof Error?Me.initialError=o.kpi_pipeline_data:Me.initialData=o.kpi_pipeline_data,o.kpi_pipeline_columns&&(Me.knownColumns=o.kpi_pipeline_columns));let ne,se=!1;const xe=Le.createReactive({callback:w=>{n(4,ne=w)},execFn:S},{id:"kpi_pipeline",...Me});xe(H,{noResolve:ue,...Me}),globalThis[Symbol.for("kpi_pipeline")]={get value(){return ne}};let Be={initialData:void 0,initialError:void 0},ke=O`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,me=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_projects_data&&(o.kpi_projects_data instanceof Error?Be.initialError=o.kpi_projects_data:Be.initialData=o.kpi_projects_data,o.kpi_projects_columns&&(Be.knownColumns=o.kpi_projects_columns));let fe,jt=!1;const pe=Le.createReactive({callback:w=>{n(5,fe=w)},execFn:S},{id:"kpi_projects",...Be});pe(me,{noResolve:ke,...Be}),globalThis[Symbol.for("kpi_projects")]={get value(){return fe}};let qe={initialData:void 0,initialError:void 0},G=O`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,Ge=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;o.kpi_products_data&&(o.kpi_products_data instanceof Error?qe.initialError=o.kpi_products_data:qe.initialData=o.kpi_products_data,o.kpi_products_columns&&(qe.knownColumns=o.kpi_products_columns));let Dt,he=!1;const Ne=Le.createReactive({callback:w=>{n(6,Dt=w)},execFn:S},{id:"kpi_products",...qe});Ne(Ge,{noResolve:G,...qe}),globalThis[Symbol.for("kpi_products")]={get value(){return Dt}};let Oe={initialData:void 0,initialError:void 0},Ce=O`select
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`,re=`select
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`;o.revenue_bookings_billing_data&&(o.revenue_bookings_billing_data instanceof Error?Oe.initialError=o.revenue_bookings_billing_data:Oe.initialData=o.revenue_bookings_billing_data,o.revenue_bookings_billing_columns&&(Oe.knownColumns=o.revenue_bookings_billing_columns));let Et,ge=!1;const St=Le.createReactive({callback:w=>{n(7,Et=w)},execFn:S},{id:"revenue_bookings_billing",...Oe});St(re,{noResolve:Ce,...Oe}),globalThis[Symbol.for("revenue_bookings_billing")]={get value(){return Et}};let je={initialData:void 0,initialError:void 0},J=O`select
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
order by deal_stage asc`,z=`select
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
order by deal_stage asc`;o.pipeline_funnel_data&&(o.pipeline_funnel_data instanceof Error?je.initialError=o.pipeline_funnel_data:je.initialData=o.pipeline_funnel_data,o.pipeline_funnel_columns&&(je.knownColumns=o.pipeline_funnel_columns));let ve,Yt=!1;const It=Le.createReactive({callback:w=>{n(8,ve=w)},execFn:S},{id:"pipeline_funnel",...je});It(z,{noResolve:J,...je}),globalThis[Symbol.for("pipeline_funnel")]={get value(){return ve}};let Z={initialData:void 0,initialError:void 0},X=O`select
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
order by project_count desc`,Je=`select
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
order by project_count desc`;o.project_summary_data&&(o.project_summary_data instanceof Error?Z.initialError=o.project_summary_data:Z.initialData=o.project_summary_data,o.project_summary_columns&&(Z.knownColumns=o.project_summary_columns));let oe,Rt=!1;const ye=Le.createReactive({callback:w=>{n(9,oe=w)},execFn:S},{id:"project_summary",...Z});ye(Je,{noResolve:X,...Z}),globalThis[Symbol.for("project_summary")]={get value(){return oe}};let De={initialData:void 0,initialError:void 0},Ee=O`select
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
order by total_variants desc`;o.catalog_summary_data&&(o.catalog_summary_data instanceof Error?De.initialError=o.catalog_summary_data:De.initialData=o.catalog_summary_data,o.catalog_summary_columns&&(De.knownColumns=o.catalog_summary_columns));let Se,Wt=!1;const Ft=Le.createReactive({callback:w=>{n(10,Se=w)},execFn:S},{id:"catalog_summary",...De});Ft(ae,{noResolve:Ee,...De}),globalThis[Symbol.for("catalog_summary")]={get value(){return Se}};let K="ytd";ia(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),t){const w=e.url.searchParams.get("time_filter");n(0,t.time_filter=w||"ytd",t)}});const er=()=>Qr(or(`/?time_filter=${K}`)),He=()=>Qr(or(`/sales?time_filter=${K}`)),tr=()=>Qr(or(`/operations?time_filter=${K}`)),rr=(w,Ie)=>{const we=new Date(w),zt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][we.getUTCMonth()],Xe=we.getUTCFullYear();return we.getUTCMonth()===0||Ie===0?zt+`
`+Xe:zt};return s.$$set=w=>{"data"in w&&n(12,l=w.data)},s.$$.update=()=>{if(s.$$.dirty[0]&4096&&n(13,{data:o={},customFormattingSettings:u,__db:j}=l,o),s.$$.dirty[0]&8192&&Ta.set(Object.keys(o).length>0),s.$$.dirty[1]&8388608&&e.params,s.$$.dirty[0]&1&&n(15,U=O`select
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
  end`),s.$$.dirty[0]&1&&n(16,Y=`select
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
  end`),s.$$.dirty[0]&245760&&(U||!W?U||(le(Y,{noResolve:U,...L}),n(17,W=!0)):le(Y,{noResolve:U})),s.$$.dirty[0]&1&&n(19,be=O`select
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
  end`),s.$$.dirty[0]&1&&n(20,ee=`select
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
  end`),s.$$.dirty[0]&3932160&&(be||!Ct?be||(ce(ee,{noResolve:be,...Pe}),n(21,Ct=!0)):ce(ee,{noResolve:be})),s.$$.dirty[0]&1&&n(23,_e=O`select 
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
  end`),s.$$.dirty[0]&1&&n(24,te=`select 
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
  end`),s.$$.dirty[0]&62914560&&(_e||!st?_e||(de(te,{noResolve:_e,...Ve}),n(25,st=!0)):de(te,{noResolve:_e})),s.$$.dirty[0]&1&&n(27,ue=O`select 
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
  end`),s.$$.dirty[0]&1&&n(28,H=`select 
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
  end`),s.$$.dirty[0]&1006632960&&(ue||!se?ue||(xe(H,{noResolve:ue,...Me}),n(29,se=!0)):xe(H,{noResolve:ue})),s.$$.dirty[0]&1&&n(31,ke=O`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1&&n(32,me=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(ke||!jt?ke||(pe(me,{noResolve:ke,...Be}),n(33,jt=!0)):pe(me,{noResolve:ke})),s.$$.dirty[0]&1&&n(35,G=O`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),s.$$.dirty[0]&1&&n(36,Ge=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${t.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),s.$$.dirty[1]&120&&(G||!he?G||(Ne(Ge,{noResolve:G,...qe}),n(37,he=!0)):Ne(Ge,{noResolve:G})),s.$$.dirty[0]&1&&n(39,Ce=O`select
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[0]&1&&n(40,re=`select
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[1]&1920&&(Ce||!ge?Ce||(St(re,{noResolve:Ce,...Oe}),n(41,ge=!0)):St(re,{noResolve:Ce})),s.$$.dirty[0]&1&&n(43,J=O`select
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
order by deal_stage asc`),s.$$.dirty[0]&1&&n(44,z=`select
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
order by deal_stage asc`),s.$$.dirty[1]&30720&&(J||!Yt?J||(It(z,{noResolve:J,...je}),n(45,Yt=!0)):It(z,{noResolve:J})),s.$$.dirty[0]&1&&n(47,X=O`select
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
order by project_count desc`),s.$$.dirty[0]&1&&n(48,Je=`select
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
order by project_count desc`),s.$$.dirty[1]&491520&&(X||!Rt?X||(ye(Je,{noResolve:X,...Z}),n(49,Rt=!0)):ye(Je,{noResolve:X})),s.$$.dirty[0]&1&&n(51,Ee=O`select
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
order by total_variants desc`),s.$$.dirty[1]&7864320&&(Ee||!Wt?Ee||(Ft(ae,{noResolve:Ee,...De}),n(53,Wt=!0)):Ft(ae,{noResolve:Ee})),s.$$.dirty[0]&1&&n(11,K=(t==null?void 0:t.time_filter)||"ytd"),s.$$.dirty[0]&1&&t&&t.time_filter)try{const w=new URL(window.location.href);w.searchParams.get("time_filter")!==t.time_filter&&(w.searchParams.set("time_filter",t.time_filter),window.history.replaceState(null,"",w.pathname+w.search))}catch{}},[t,Ae,Kt,Qt,ne,fe,Dt,Et,ve,oe,Se,K,l,o,L,U,Y,W,Pe,be,ee,Ct,Ve,_e,te,st,Me,ue,H,se,Be,ke,me,jt,qe,G,Ge,he,Oe,Ce,re,ge,je,J,z,Yt,Z,X,Je,Rt,De,Ee,ae,Wt,e,er,He,tr,rr]}class on extends ja{constructor(a){super(),Da(this,a,Wa,Xa,wa,{data:12},null,[-1,-1,-1])}}export{on as component};
