import{s as ya,d,z as $a,i as $,e as _,l as Ur,b as f,A as ie,k as v,B as ba,h as p,r as jr,j as C,q as Q,x as rt,n as y,m as h,y as at,t as na,C as xa,D as ka,E as qa,F as sa,v as kt}from"../chunks/scheduler.BWqtgNY2.js";import{S as Ca,i as ja,d as b,t as g,a as m,c as Ie,m as x,b as k,e as q,g as Te}from"../chunks/index.DlzBi47Z.js";import{a as qr,D as Da,e as Ea,s as Ra,Q as Le,p as Sa,b as Gr,c as oa,r as ia,d as Fa}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.0ms6tUjC.js";import{w as Ia,g as Jr}from"../chunks/entry.Cb3J1ldK.js";import{h as O,p as Ta}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Aa}from"../chunks/stores.Dpj02sKu.js";import{V as xt,B as Xr,Q as Ue,a as Pa,b as Cr}from"../chunks/Value.BoBYavHo.js";function Va(s){let a,n=D.title+"",e;return{c(){a=h("h1"),e=at(n),this.h()},l(i){a=p(i,"H1",{class:!0});var l=C(a);e=rt(l,n),l.forEach(d),this.h()},h(){f(a,"class","title")},m(i,l){$(i,a,l),_(a,e)},p:kt,d(i){i&&d(a)}}}function Ma(s){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:kt,p:kt,d:kt}}function Ba(s){let a,n,e,i,l;return document.title=a=D.title,{c(){n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;f(e,"property","og:title"),f(e,"content",((o=D.og)==null?void 0:o.title)??D.title),f(l,"name","twitter:title"),f(l,"content",((u=D.og)==null?void 0:u.title)??D.title)},m(o,u){$(o,n,u),$(o,e,u),$(o,i,u),$(o,l,u)},p(o,u){u&0&&a!==(a=D.title)&&(document.title=a)},d(o){o&&(d(n),d(e),d(i),d(l))}}}function Na(s){var l,o;let a,n,e=(D.description||((l=D.og)==null?void 0:l.description))&&Oa(),i=((o=D.og)==null?void 0:o.image)&&Ha();return{c(){e&&e.c(),a=y(),i&&i.c(),n=jr()},l(u){e&&e.l(u),a=v(u),i&&i.l(u),n=jr()},m(u,j){e&&e.m(u,j),$(u,a,j),i&&i.m(u,j),$(u,n,j)},p(u,j){var t,E;(D.description||(t=D.og)!=null&&t.description)&&e.p(u,j),(E=D.og)!=null&&E.image&&i.p(u,j)},d(u){u&&(d(a),d(n)),e&&e.d(u),i&&i.d(u)}}}function Oa(s){let a,n,e,i,l;return{c(){a=h("meta"),n=y(),e=h("meta"),i=y(),l=h("meta"),this.h()},l(o){a=p(o,"META",{name:!0,content:!0}),n=v(o),e=p(o,"META",{property:!0,content:!0}),i=v(o),l=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u,j;f(a,"name","description"),f(a,"content",D.description??((o=D.og)==null?void 0:o.description)),f(e,"property","og:description"),f(e,"content",((u=D.og)==null?void 0:u.description)??D.description),f(l,"name","twitter:description"),f(l,"content",((j=D.og)==null?void 0:j.description)??D.description)},m(o,u){$(o,a,u),$(o,n,u),$(o,e,u),$(o,i,u),$(o,l,u)},p:kt,d(o){o&&(d(a),d(n),d(e),d(i),d(l))}}}function Ha(s){let a,n,e;return{c(){a=h("meta"),n=y(),e=h("meta"),this.h()},l(i){a=p(i,"META",{property:!0,content:!0}),n=v(i),e=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,l;f(a,"property","og:image"),f(a,"content",oa((i=D.og)==null?void 0:i.image)),f(e,"name","twitter:image"),f(e,"content",oa((l=D.og)==null?void 0:l.image))},m(i,l){$(i,a,l),$(i,n,l),$(i,e,l)},p:kt,d(i){i&&(d(a),d(n),d(e))}}}function la(s){let a,n;return a=new Ue({props:{queryID:"delivery_lag",queryResult:s[1]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&2&&(l.queryResult=e[1]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ca(s){let a,n;return a=new Ue({props:{queryID:"pipeline_coverage",queryResult:s[2]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&4&&(l.queryResult=e[2]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function _a(s){let a,n;return a=new Ue({props:{queryID:"kpi_revenue",queryResult:s[3]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&8&&(l.queryResult=e[3]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function da(s){let a,n;return a=new Ue({props:{queryID:"kpi_pipeline",queryResult:s[4]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&16&&(l.queryResult=e[4]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ua(s){let a,n;return a=new Ue({props:{queryID:"kpi_projects",queryResult:s[5]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&32&&(l.queryResult=e[5]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ma(s){let a,n;return a=new Ue({props:{queryID:"kpi_products",queryResult:s[6]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&64&&(l.queryResult=e[6]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function fa(s){let a,n;return a=new Ue({props:{queryID:"revenue_bookings_billing",queryResult:s[7]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&128&&(l.queryResult=e[7]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function pa(s){let a,n;return a=new Ue({props:{queryID:"pipeline_funnel",queryResult:s[8]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&256&&(l.queryResult=e[8]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ha(s){let a,n;return a=new Ue({props:{queryID:"project_summary",queryResult:s[9]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&512&&(l.queryResult=e[9]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function ga(s){let a,n;return a=new Ue({props:{queryID:"catalog_summary",queryResult:s[10]}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&1024&&(l.queryResult=e[10]),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function La(s){let a,n,e,i,l,o,u,j;return a=new Cr({props:{valueLabel:"MTD",value:"mtd",default:s[11]==="mtd"}}),e=new Cr({props:{valueLabel:"QTD",value:"qtd",default:s[11]==="qtd"}}),l=new Cr({props:{valueLabel:"YTD",value:"ytd",default:s[11]==="ytd"}}),u=new Cr({props:{valueLabel:"All Time",value:"all",default:s[11]==="all"}}),{c(){q(a.$$.fragment),n=y(),q(e.$$.fragment),i=y(),q(l.$$.fragment),o=y(),q(u.$$.fragment)},l(t){k(a.$$.fragment,t),n=v(t),k(e.$$.fragment,t),i=v(t),k(l.$$.fragment,t),o=v(t),k(u.$$.fragment,t)},m(t,E){x(a,t,E),$(t,n,E),x(e,t,E),$(t,i,E),x(l,t,E),$(t,o,E),x(u,t,E),j=!0},p(t,E){const R={};E[0]&2048&&(R.default=t[11]==="mtd"),a.$set(R);const L={};E[0]&2048&&(L.default=t[11]==="qtd"),e.$set(L);const U={};E[0]&2048&&(U.default=t[11]==="ytd"),l.$set(U);const Y={};E[0]&2048&&(Y.default=t[11]==="all"),u.$set(Y)},i(t){j||(m(a.$$.fragment,t),m(e.$$.fragment,t),m(l.$$.fragment,t),m(u.$$.fragment,t),j=!0)},o(t){g(a.$$.fragment,t),g(e.$$.fragment,t),g(l.$$.fragment,t),g(u.$$.fragment,t),j=!1},d(t){t&&(d(n),d(i),d(o)),b(a,t),b(e,t),b(l,t),b(u,t)}}}function va(s){let a,n;return a=new Pa({props:{name:"time_filter",defaultValue:s[11],$$slots:{default:[La]},$$scope:{ctx:s}}}),{c(){q(a.$$.fragment)},l(e){k(a.$$.fragment,e)},m(e,i){x(a,e,i),n=!0},p(e,i){const l={};i[0]&2048&&(l.defaultValue=e[11]),i[0]&2048|i[2]&32768&&(l.$$scope={dirty:i,ctx:e}),a.$set(l)},i(e){n||(m(a.$$.fragment,e),n=!0)},o(e){g(a.$$.fragment,e),n=!1},d(e){b(a,e)}}}function Ua(s){let a,n,e,i,l,o;return a=new Gr({props:{id:"vendor",label:"Vendor Brand"}}),e=new Gr({props:{id:"total_variants",label:"Variants Count",align:"center"}}),l=new Gr({props:{id:"average_price",label:"Average Price",align:"right",fmt:"usd"}}),{c(){q(a.$$.fragment),n=y(),q(e.$$.fragment),i=y(),q(l.$$.fragment)},l(u){k(a.$$.fragment,u),n=v(u),k(e.$$.fragment,u),i=v(u),k(l.$$.fragment,u)},m(u,j){x(a,u,j),$(u,n,j),x(e,u,j),$(u,i,j),x(l,u,j),o=!0},p:kt,i(u){o||(m(a.$$.fragment,u),m(e.$$.fragment,u),m(l.$$.fragment,u),o=!0)},o(u){g(a.$$.fragment,u),g(e.$$.fragment,u),g(l.$$.fragment,u),o=!1},d(u){u&&(d(n),d(i)),b(a,u),b(e,u),b(l,u)}}}function Ga(s){let a,n,e,i,l,o,u,j,t,E,R,L,U,Y,Ae,W,le,Pe="Overview Cockpit",be,ee,Xt="Sales & Win-Loss",qt,ce,Ve="Operations & Vendors",_e,te,Kt='<div class="text-base font-extrabold text-[#264773]">Business Performance Cockpit</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Local Postgres</div>',nt,de,Me=s[11],ue,H,ne,se,xe,Be="💰 Total Billed Revenue",ke,me,fe,Ct,pe,qe,G,Ge,jt,he,Ne,Oe="Actual invoices billed via Xero",Ce,re,Dt,ge,Et,je,J,z,ve,Qt="📈 Active Pipeline Value",Rt,Z,X,Je,oe,St,ye,De,Ee,ae,Re,Yt="Open opportunities in HubSpot CRM",Ft,K,Zt,He,er,tr,w,Se,we,Dr="🏗️ Active Projects",Wt,Xe,st,Er,ot,Kr="Ongoing jobs managed in Procore",Rr,it,It,lt,Qr="🛍️ Shopify Products",Sr,Tt,ct,Fr,_t,Yr="Unique items in active catalog",sr,Ke,dt,ut,At,Wr="Monthly Cash Flow Billed vs. Booked Contracts",Ir,Pt,Tr,mt,Ar,ft,pt,Vt,zr="Sales Pipeline Opportunity Value",Pr,Mt,Vr,ht,or,Qe,gt,vt,Bt,Zr="Procore Project Portfolio Status",Mr,Nt,Br,yt,Nr,wt,$t,Ot,ea="Shopify Product Catalog Summary",Or,Ht,Hr,bt,ir,Lr,ta,Ye=typeof D<"u"&&D.title&&D.hide_title!==!0&&Va();function wa(r,c){return typeof D<"u"&&D.title?Ba:Ma}let rr=wa()(s),We=typeof D=="object"&&Na(),S=s[1]&&la(s),F=s[2]&&ca(s),I=s[3]&&_a(s),T=s[4]&&da(s),A=s[5]&&ua(s),P=s[6]&&ma(s),V=s[7]&&fa(s),M=s[8]&&pa(s),B=s[9]&&ha(s),N=s[10]&&ga(s),$e=va(s);return fe=new xt({props:{data:s[3],column:"total_revenue",fmt:"usd"}}),G=new xt({props:{data:s[3],column:"target_progress",fmt:"pct0"}}),ge=new xt({props:{data:s[1],column:"avg_lag_days",fmt:"num0"}}),X=new xt({props:{data:s[4],column:"pipeline_value",fmt:"usd"}}),ye=new xt({props:{data:s[4],column:"target_progress",fmt:"pct0"}}),He=new xt({props:{data:s[2],column:"coverage_ratio",fmt:"0.0"}}),st=new xt({props:{data:s[5],column:"total_projects"}}),ct=new xt({props:{data:s[6],column:"total_products"}}),Pt=new qr({props:{description:"Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed."}}),mt=new Xr({props:{data:s[7],x:"month_date",y:"revenue",series:"source_system",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",stackTotalLabel:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Billed Cash Flow (Xero)","Booked Contracts (HubSpot)"],height:175,echartsOptions:{grid:{top:25,bottom:35,left:40,right:15},xAxis:{type:"time",axisLabel:{formatter:s[58]}},yAxis:{splitNumber:3,axisLabel:{formatter:Ja}}}}}),Mt=new qr({props:{description:"Displays the total value of all currently open opportunities in HubSpot CRM by stage, excluding closed won and closed lost deals."}}),ht=new Xr({props:{data:s[8],x:"deal_stage",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],sort:"false",height:175,echartsOptions:{grid:{top:25,bottom:10,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Xa},offset:10},series:[{itemStyle:{color:Ka}}]}}}),Nt=new qr({props:{description:"Tracks the count of active versus completed projects for each client corporate parent group managed in Procore."}}),yt=new Xr({props:{data:s[9],x:"company_name",y:"project_count",series:"project_status",swapXY:"true",fillOpacity:"0.9",labels:!0,labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Active","Completed"],height:175,echartsOptions:{xAxis:{minInterval:1,splitNumber:3},grid:{top:15,bottom:25,left:40,right:30}}}}),Ht=new qr({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),bt=new Da({props:{data:s[10],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Ua]},$$scope:{ctx:s}}}),{c(){Ye&&Ye.c(),a=y(),rr.c(),n=h("meta"),e=h("meta"),We&&We.c(),i=jr(),l=y(),S&&S.c(),o=y(),F&&F.c(),u=y(),I&&I.c(),j=y(),T&&T.c(),t=y(),A&&A.c(),E=y(),P&&P.c(),R=y(),V&&V.c(),L=y(),M&&M.c(),U=y(),B&&B.c(),Y=y(),N&&N.c(),Ae=y(),W=h("div"),le=h("button"),le.textContent=Pe,be=y(),ee=h("button"),ee.textContent=Xt,qt=y(),ce=h("button"),ce.textContent=Ve,_e=y(),te=h("div"),te.innerHTML=Kt,nt=y(),de=h("div"),$e.c(),ue=y(),H=h("div"),ne=h("div"),se=h("div"),xe=h("span"),xe.textContent=Be,ke=y(),me=h("h2"),q(fe.$$.fragment),Ct=y(),pe=h("div"),qe=at("🎯 "),q(G.$$.fragment),Ge=at(" of YTD Target ($1.0M)"),jt=y(),he=h("div"),Ne=h("span"),Ne.textContent=Oe,Ce=y(),re=h("span"),Dt=at("⚡ "),q(ge.$$.fragment),Et=at("d Lag"),je=y(),J=h("div"),z=h("div"),ve=h("span"),ve.textContent=Qt,Rt=y(),Z=h("h2"),q(X.$$.fragment),Je=y(),oe=h("div"),St=at("🎯 "),q(ye.$$.fragment),De=at(" of target ($750K)"),Ee=y(),ae=h("div"),Re=h("span"),Re.textContent=Yt,Ft=y(),K=h("span"),Zt=at("📊 "),q(He.$$.fragment),er=at("x Cover"),tr=y(),w=h("div"),Se=h("div"),we=h("span"),we.textContent=Dr,Wt=y(),Xe=h("h2"),q(st.$$.fragment),Er=y(),ot=h("div"),ot.textContent=Kr,Rr=y(),it=h("div"),It=h("div"),lt=h("span"),lt.textContent=Qr,Sr=y(),Tt=h("h2"),q(ct.$$.fragment),Fr=y(),_t=h("div"),_t.textContent=Yr,sr=y(),Ke=h("div"),dt=h("div"),ut=h("div"),At=h("span"),At.textContent=Wr,Ir=y(),q(Pt.$$.fragment),Tr=y(),q(mt.$$.fragment),Ar=y(),ft=h("div"),pt=h("div"),Vt=h("span"),Vt.textContent=zr,Pr=y(),q(Mt.$$.fragment),Vr=y(),q(ht.$$.fragment),or=y(),Qe=h("div"),gt=h("div"),vt=h("div"),Bt=h("span"),Bt.textContent=Zr,Mr=y(),q(Nt.$$.fragment),Br=y(),q(yt.$$.fragment),Nr=y(),wt=h("div"),$t=h("div"),Ot=h("span"),Ot.textContent=ea,Or=y(),q(Ht.$$.fragment),Hr=y(),q(bt.$$.fragment),this.h()},l(r){Ye&&Ye.l(r),a=v(r);const c=ba("svelte-2igo1p",document.head);rr.l(c),n=p(c,"META",{name:!0,content:!0}),e=p(c,"META",{name:!0,content:!0}),We&&We.l(c),i=jr(),c.forEach(d),l=v(r),S&&S.l(r),o=v(r),F&&F.l(r),u=v(r),I&&I.l(r),j=v(r),T&&T.l(r),t=v(r),A&&A.l(r),E=v(r),P&&P.l(r),R=v(r),V&&V.l(r),L=v(r),M&&M.l(r),U=v(r),B&&B.l(r),Y=v(r),N&&N.l(r),Ae=v(r),W=p(r,"DIV",{class:!0});var ze=C(W);le=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(le)!=="svelte-vvjnn5"&&(le.textContent=Pe),be=v(ze),ee=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(ee)!=="svelte-1l37hr9"&&(ee.textContent=Xt),qt=v(ze),ce=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(ce)!=="svelte-1lgfas4"&&(ce.textContent=Ve),ze.forEach(d),_e=v(r),te=p(r,"DIV",{class:!0,"data-svelte-h":!0}),Q(te)!=="svelte-6xk8d7"&&(te.innerHTML=Kt),nt=v(r),de=p(r,"DIV",{class:!0});var ar=C(de);$e.l(ar),ar.forEach(d),ue=v(r),H=p(r,"DIV",{class:!0});var Fe=C(H);ne=p(Fe,"DIV",{style:!0,class:!0});var Lt=C(ne);se=p(Lt,"DIV",{});var Ze=C(se);xe=p(Ze,"SPAN",{class:!0,"data-svelte-h":!0}),Q(xe)!=="svelte-e3ust3"&&(xe.textContent=Be),ke=v(Ze),me=p(Ze,"H2",{class:!0});var nr=C(me);k(fe.$$.fragment,nr),nr.forEach(d),Ct=v(Ze),pe=p(Ze,"DIV",{class:!0});var Ut=C(pe);qe=rt(Ut,"🎯 "),k(G.$$.fragment,Ut),Ge=rt(Ut," of YTD Target ($1.0M)"),Ut.forEach(d),Ze.forEach(d),jt=v(Lt),he=p(Lt,"DIV",{class:!0});var Gt=C(he);Ne=p(Gt,"SPAN",{"data-svelte-h":!0}),Q(Ne)!=="svelte-xdszx8"&&(Ne.textContent=Oe),Ce=v(Gt),re=p(Gt,"SPAN",{class:!0});var et=C(re);Dt=rt(et,"⚡ "),k(ge.$$.fragment,et),Et=rt(et,"d Lag"),et.forEach(d),Gt.forEach(d),Lt.forEach(d),je=v(Fe),J=p(Fe,"DIV",{class:!0});var Jt=C(J);z=p(Jt,"DIV",{});var tt=C(z);ve=p(tt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(ve)!=="svelte-1uurc49"&&(ve.textContent=Qt),Rt=v(tt),Z=p(tt,"H2",{style:!0,class:!0});var zt=C(Z);k(X.$$.fragment,zt),zt.forEach(d),Je=v(tt),oe=p(tt,"DIV",{style:!0,class:!0});var lr=C(oe);St=rt(lr,"🎯 "),k(ye.$$.fragment,lr),De=rt(lr," of target ($750K)"),lr.forEach(d),tt.forEach(d),Ee=v(Jt),ae=p(Jt,"DIV",{class:!0});var cr=C(ae);Re=p(cr,"SPAN",{style:!0,"data-svelte-h":!0}),Q(Re)!=="svelte-ifvc0m"&&(Re.textContent=Yt),Ft=v(cr),K=p(cr,"SPAN",{style:!0,class:!0});var _r=C(K);Zt=rt(_r,"📊 "),k(He.$$.fragment,_r),er=rt(_r,"x Cover"),_r.forEach(d),cr.forEach(d),Jt.forEach(d),tr=v(Fe),w=p(Fe,"DIV",{class:!0});var dr=C(w);Se=p(dr,"DIV",{});var ur=C(Se);we=p(ur,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(we)!=="svelte-19u2tfr"&&(we.textContent=Dr),Wt=v(ur),Xe=p(ur,"H2",{style:!0,class:!0});var ra=C(Xe);k(st.$$.fragment,ra),ra.forEach(d),ur.forEach(d),Er=v(dr),ot=p(dr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(ot)!=="svelte-tvomuv"&&(ot.textContent=Kr),dr.forEach(d),Rr=v(Fe),it=p(Fe,"DIV",{class:!0});var mr=C(it);It=p(mr,"DIV",{});var fr=C(It);lt=p(fr,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(lt)!=="svelte-17fuh5a"&&(lt.textContent=Qr),Sr=v(fr),Tt=p(fr,"H2",{style:!0,class:!0});var aa=C(Tt);k(ct.$$.fragment,aa),aa.forEach(d),fr.forEach(d),Fr=v(mr),_t=p(mr,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(_t)!=="svelte-9stalx"&&(_t.textContent=Yr),mr.forEach(d),Fe.forEach(d),sr=v(r),Ke=p(r,"DIV",{class:!0});var pr=C(Ke);dt=p(pr,"DIV",{class:!0});var hr=C(dt);ut=p(hr,"DIV",{class:!0});var gr=C(ut);At=p(gr,"SPAN",{class:!0,"data-svelte-h":!0}),Q(At)!=="svelte-3eui4q"&&(At.textContent=Wr),Ir=v(gr),k(Pt.$$.fragment,gr),gr.forEach(d),Tr=v(hr),k(mt.$$.fragment,hr),hr.forEach(d),Ar=v(pr),ft=p(pr,"DIV",{class:!0});var vr=C(ft);pt=p(vr,"DIV",{class:!0});var yr=C(pt);Vt=p(yr,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Vt)!=="svelte-4wul4y"&&(Vt.textContent=zr),Pr=v(yr),k(Mt.$$.fragment,yr),yr.forEach(d),Vr=v(vr),k(ht.$$.fragment,vr),vr.forEach(d),pr.forEach(d),or=v(r),Qe=p(r,"DIV",{class:!0});var wr=C(Qe);gt=p(wr,"DIV",{class:!0});var $r=C(gt);vt=p($r,"DIV",{class:!0});var br=C(vt);Bt=p(br,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Bt)!=="svelte-b68vp"&&(Bt.textContent=Zr),Mr=v(br),k(Nt.$$.fragment,br),br.forEach(d),Br=v($r),k(yt.$$.fragment,$r),$r.forEach(d),Nr=v(wr),wt=p(wr,"DIV",{class:!0});var xr=C(wt);$t=p(xr,"DIV",{class:!0});var kr=C($t);Ot=p(kr,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Ot)!=="svelte-kdhzry"&&(Ot.textContent=ea),Or=v(kr),k(Ht.$$.fragment,kr),kr.forEach(d),Hr=v(xr),k(bt.$$.fragment,xr),xr.forEach(d),wr.forEach(d),this.h()},h(){f(n,"name","twitter:card"),f(n,"content","summary_large_image"),f(e,"name","twitter:site"),f(e,"content","@evidence_dev"),f(le,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f(ee,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(ce,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(W,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(te,"class","flex justify-between items-center mb-1.5 mt-0.5"),f(de,"class","mb-2 flex justify-start"),f(xe,"class","text-[9px] font-bold text-white/80 uppercase tracking-wider"),f(me,"class","text-xl font-extrabold mt-0.5 text-white"),f(pe,"class","text-[9px] font-semibold mt-0.5 text-white"),f(re,"class","font-extrabold bg-white/20 px-1.5 py-0.5 rounded"),f(he,"class","flex justify-between items-center text-[9px] text-white/80 mt-0.5 border-t border-white/20 pt-1"),ie(ne,"background-color","#1D5F60"),f(ne,"class","rounded-xl shadow-sm py-2.5 px-3.5 flex flex-col justify-between text-white h-[105px]"),ie(ve,"color","#7B8DA6"),f(ve,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Z,"color","#000000"),f(Z,"class","text-xl font-extrabold mt-0.5"),ie(oe,"color","#264773"),f(oe,"class","text-[9px] font-semibold mt-0.5"),ie(Re,"color","#7B8DA6"),ie(K,"background-color","rgba(38, 71, 115, 0.1)"),ie(K,"color","#264773"),f(K,"class","font-extrabold px-1.5 py-0.5 rounded"),f(ae,"class","flex justify-between items-center text-[9px] mt-0.5 border-t border-gray-100 pt-1"),f(J,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(we,"color","#7B8DA6"),f(we,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Xe,"color","#000000"),f(Xe,"class","text-xl font-extrabold mt-0.5"),ie(ot,"color","#7B8DA6"),f(ot,"class","text-[9px] mt-0.5"),f(w,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ie(lt,"color","#7B8DA6"),f(lt,"class","text-[9px] font-bold uppercase tracking-wider"),ie(Tt,"color","#000000"),f(Tt,"class","text-xl font-extrabold mt-0.5"),ie(_t,"color","#7B8DA6"),f(_t,"class","text-[9px] mt-0.5"),f(it,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),f(H,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(At,"class","font-bold text-gray-700 text-xs"),f(ut,"class","flex items-center gap-1.5 mb-1"),f(dt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Vt,"class","font-bold text-gray-700 text-xs"),f(pt,"class","flex items-center gap-1.5 mb-1"),f(ft,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ke,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5"),f(Bt,"class","font-bold text-gray-700 text-xs"),f(vt,"class","flex items-center gap-1.5 mb-1.5"),f(gt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ot,"class","font-bold text-gray-700 text-xs"),f($t,"class","flex items-center gap-1.5 mb-1.5"),f(wt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Qe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(r,c){Ye&&Ye.m(r,c),$(r,a,c),rr.m(document.head,null),_(document.head,n),_(document.head,e),We&&We.m(document.head,null),_(document.head,i),$(r,l,c),S&&S.m(r,c),$(r,o,c),F&&F.m(r,c),$(r,u,c),I&&I.m(r,c),$(r,j,c),T&&T.m(r,c),$(r,t,c),A&&A.m(r,c),$(r,E,c),P&&P.m(r,c),$(r,R,c),V&&V.m(r,c),$(r,L,c),M&&M.m(r,c),$(r,U,c),B&&B.m(r,c),$(r,Y,c),N&&N.m(r,c),$(r,Ae,c),$(r,W,c),_(W,le),_(W,be),_(W,ee),_(W,qt),_(W,ce),$(r,_e,c),$(r,te,c),$(r,nt,c),$(r,de,c),$e.m(de,null),$(r,ue,c),$(r,H,c),_(H,ne),_(ne,se),_(se,xe),_(se,ke),_(se,me),x(fe,me,null),_(se,Ct),_(se,pe),_(pe,qe),x(G,pe,null),_(pe,Ge),_(ne,jt),_(ne,he),_(he,Ne),_(he,Ce),_(he,re),_(re,Dt),x(ge,re,null),_(re,Et),_(H,je),_(H,J),_(J,z),_(z,ve),_(z,Rt),_(z,Z),x(X,Z,null),_(z,Je),_(z,oe),_(oe,St),x(ye,oe,null),_(oe,De),_(J,Ee),_(J,ae),_(ae,Re),_(ae,Ft),_(ae,K),_(K,Zt),x(He,K,null),_(K,er),_(H,tr),_(H,w),_(w,Se),_(Se,we),_(Se,Wt),_(Se,Xe),x(st,Xe,null),_(w,Er),_(w,ot),_(H,Rr),_(H,it),_(it,It),_(It,lt),_(It,Sr),_(It,Tt),x(ct,Tt,null),_(it,Fr),_(it,_t),$(r,sr,c),$(r,Ke,c),_(Ke,dt),_(dt,ut),_(ut,At),_(ut,Ir),x(Pt,ut,null),_(dt,Tr),x(mt,dt,null),_(Ke,Ar),_(Ke,ft),_(ft,pt),_(pt,Vt),_(pt,Pr),x(Mt,pt,null),_(ft,Vr),x(ht,ft,null),$(r,or,c),$(r,Qe,c),_(Qe,gt),_(gt,vt),_(vt,Bt),_(vt,Mr),x(Nt,vt,null),_(gt,Br),x(yt,gt,null),_(Qe,Nr),_(Qe,wt),_(wt,$t),_($t,Ot),_($t,Or),x(Ht,$t,null),_(wt,Hr),x(bt,wt,null),ir=!0,Lr||(ta=[Ur(le,"click",s[55]),Ur(ee,"click",s[56]),Ur(ce,"click",s[57])],Lr=!0)},p(r,c){typeof D<"u"&&D.title&&D.hide_title!==!0&&Ye.p(r,c),rr.p(r,c),typeof D=="object"&&We.p(r,c),r[1]?S?(S.p(r,c),c[0]&2&&m(S,1)):(S=la(r),S.c(),m(S,1),S.m(o.parentNode,o)):S&&(Te(),g(S,1,1,()=>{S=null}),Ie()),r[2]?F?(F.p(r,c),c[0]&4&&m(F,1)):(F=ca(r),F.c(),m(F,1),F.m(u.parentNode,u)):F&&(Te(),g(F,1,1,()=>{F=null}),Ie()),r[3]?I?(I.p(r,c),c[0]&8&&m(I,1)):(I=_a(r),I.c(),m(I,1),I.m(j.parentNode,j)):I&&(Te(),g(I,1,1,()=>{I=null}),Ie()),r[4]?T?(T.p(r,c),c[0]&16&&m(T,1)):(T=da(r),T.c(),m(T,1),T.m(t.parentNode,t)):T&&(Te(),g(T,1,1,()=>{T=null}),Ie()),r[5]?A?(A.p(r,c),c[0]&32&&m(A,1)):(A=ua(r),A.c(),m(A,1),A.m(E.parentNode,E)):A&&(Te(),g(A,1,1,()=>{A=null}),Ie()),r[6]?P?(P.p(r,c),c[0]&64&&m(P,1)):(P=ma(r),P.c(),m(P,1),P.m(R.parentNode,R)):P&&(Te(),g(P,1,1,()=>{P=null}),Ie()),r[7]?V?(V.p(r,c),c[0]&128&&m(V,1)):(V=fa(r),V.c(),m(V,1),V.m(L.parentNode,L)):V&&(Te(),g(V,1,1,()=>{V=null}),Ie()),r[8]?M?(M.p(r,c),c[0]&256&&m(M,1)):(M=pa(r),M.c(),m(M,1),M.m(U.parentNode,U)):M&&(Te(),g(M,1,1,()=>{M=null}),Ie()),r[9]?B?(B.p(r,c),c[0]&512&&m(B,1)):(B=ha(r),B.c(),m(B,1),B.m(Y.parentNode,Y)):B&&(Te(),g(B,1,1,()=>{B=null}),Ie()),r[10]?N?(N.p(r,c),c[0]&1024&&m(N,1)):(N=ga(r),N.c(),m(N,1),N.m(Ae.parentNode,Ae)):N&&(Te(),g(N,1,1,()=>{N=null}),Ie()),c[0]&2048&&ya(Me,Me=r[11])?(Te(),g($e,1,1,kt),Ie(),$e=va(r),$e.c(),m($e,1),$e.m(de,null)):$e.p(r,c);const ze={};c[0]&8&&(ze.data=r[3]),fe.$set(ze);const ar={};c[0]&8&&(ar.data=r[3]),G.$set(ar);const Fe={};c[0]&2&&(Fe.data=r[1]),ge.$set(Fe);const Lt={};c[0]&16&&(Lt.data=r[4]),X.$set(Lt);const Ze={};c[0]&16&&(Ze.data=r[4]),ye.$set(Ze);const nr={};c[0]&4&&(nr.data=r[2]),He.$set(nr);const Ut={};c[0]&32&&(Ut.data=r[5]),st.$set(Ut);const Gt={};c[0]&64&&(Gt.data=r[6]),ct.$set(Gt);const et={};c[0]&128&&(et.data=r[7]),c[0]&1&&(et.labels=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),c[0]&1&&(et.stackTotalLabel=r[0].time_filter!=="all"&&r[0].time_filter!=="ytd"),mt.$set(et);const Jt={};c[0]&256&&(Jt.data=r[8]),ht.$set(Jt);const tt={};c[0]&512&&(tt.data=r[9]),yt.$set(tt);const zt={};c[0]&1024&&(zt.data=r[10]),c[2]&32768&&(zt.$$scope={dirty:c,ctx:r}),bt.$set(zt)},i(r){ir||(m(S),m(F),m(I),m(T),m(A),m(P),m(V),m(M),m(B),m(N),m($e),m(fe.$$.fragment,r),m(G.$$.fragment,r),m(ge.$$.fragment,r),m(X.$$.fragment,r),m(ye.$$.fragment,r),m(He.$$.fragment,r),m(st.$$.fragment,r),m(ct.$$.fragment,r),m(Pt.$$.fragment,r),m(mt.$$.fragment,r),m(Mt.$$.fragment,r),m(ht.$$.fragment,r),m(Nt.$$.fragment,r),m(yt.$$.fragment,r),m(Ht.$$.fragment,r),m(bt.$$.fragment,r),ir=!0)},o(r){g(S),g(F),g(I),g(T),g(A),g(P),g(V),g(M),g(B),g(N),g($e),g(fe.$$.fragment,r),g(G.$$.fragment,r),g(ge.$$.fragment,r),g(X.$$.fragment,r),g(ye.$$.fragment,r),g(He.$$.fragment,r),g(st.$$.fragment,r),g(ct.$$.fragment,r),g(Pt.$$.fragment,r),g(mt.$$.fragment,r),g(Mt.$$.fragment,r),g(ht.$$.fragment,r),g(Nt.$$.fragment,r),g(yt.$$.fragment,r),g(Ht.$$.fragment,r),g(bt.$$.fragment,r),ir=!1},d(r){r&&(d(a),d(l),d(o),d(u),d(j),d(t),d(E),d(R),d(L),d(U),d(Y),d(Ae),d(W),d(_e),d(te),d(nt),d(de),d(ue),d(H),d(sr),d(Ke),d(or),d(Qe)),Ye&&Ye.d(r),rr.d(r),d(n),d(e),We&&We.d(r),d(i),S&&S.d(r),F&&F.d(r),I&&I.d(r),T&&T.d(r),A&&A.d(r),P&&P.d(r),V&&V.d(r),M&&M.d(r),B&&B.d(r),N&&N.d(r),$e.d(r),b(fe),b(G),b(ge),b(X),b(ye),b(He),b(st),b(ct),b(Pt),b(mt),b(Mt),b(ht),b(Nt),b(yt),b(Ht),b(bt),Lr=!1,$a(ta)}}}const D={title:"Business Performance Dashboard"},Ja=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Xa=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Ka=s=>s.name&&s.name.includes("Closed Won")?"#1D5F60":s.name&&s.name.includes("Closed Lost")?"#7B8DA6":"#264773";function Qa(s,a,n){let e,i;na(s,Aa,w=>n(54,e=w)),na(s,ia,w=>n(63,i=w));let{data:l}=a,{data:o={},customFormattingSettings:u,__db:j,inputs:t}=l;xa(ia,i="6666cd76f96956469e7be39d750cc7d9",i);let E=Ea(Ia(t));ka(E.subscribe(w=>n(0,t=w))),qa(Fa,{getCustomFormats:()=>u.customFormats||[]});const R=(w,Se)=>Ta(j.query,w,{query_name:Se});Ra(R),e.params,sa(()=>!0);let L={initialData:void 0,initialError:void 0},U=O`select
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
  end`;o.delivery_lag_data&&(o.delivery_lag_data instanceof Error?L.initialError=o.delivery_lag_data:L.initialData=o.delivery_lag_data,o.delivery_lag_columns&&(L.knownColumns=o.delivery_lag_columns));let Ae,W=!1;const le=Le.createReactive({callback:w=>{n(1,Ae=w)},execFn:R},{id:"delivery_lag",...L});le(Y,{noResolve:U,...L}),globalThis[Symbol.for("delivery_lag")]={get value(){return Ae}};let Pe={initialData:void 0,initialError:void 0},be=O`select
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
  end`;o.pipeline_coverage_data&&(o.pipeline_coverage_data instanceof Error?Pe.initialError=o.pipeline_coverage_data:Pe.initialData=o.pipeline_coverage_data,o.pipeline_coverage_columns&&(Pe.knownColumns=o.pipeline_coverage_columns));let Xt,qt=!1;const ce=Le.createReactive({callback:w=>{n(2,Xt=w)},execFn:R},{id:"pipeline_coverage",...Pe});ce(ee,{noResolve:be,...Pe}),globalThis[Symbol.for("pipeline_coverage")]={get value(){return Xt}};let Ve={initialData:void 0,initialError:void 0},_e=O`select 
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
  end`;o.kpi_revenue_data&&(o.kpi_revenue_data instanceof Error?Ve.initialError=o.kpi_revenue_data:Ve.initialData=o.kpi_revenue_data,o.kpi_revenue_columns&&(Ve.knownColumns=o.kpi_revenue_columns));let Kt,nt=!1;const de=Le.createReactive({callback:w=>{n(3,Kt=w)},execFn:R},{id:"kpi_revenue",...Ve});de(te,{noResolve:_e,...Ve}),globalThis[Symbol.for("kpi_revenue")]={get value(){return Kt}};let Me={initialData:void 0,initialError:void 0},ue=O`select 
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
  end`;o.kpi_pipeline_data&&(o.kpi_pipeline_data instanceof Error?Me.initialError=o.kpi_pipeline_data:Me.initialData=o.kpi_pipeline_data,o.kpi_pipeline_columns&&(Me.knownColumns=o.kpi_pipeline_columns));let ne,se=!1;const xe=Le.createReactive({callback:w=>{n(4,ne=w)},execFn:R},{id:"kpi_pipeline",...Me});xe(H,{noResolve:ue,...Me}),globalThis[Symbol.for("kpi_pipeline")]={get value(){return ne}};let Be={initialData:void 0,initialError:void 0},ke=O`select count(distinct project_id) as total_projects 
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
  end`;o.kpi_projects_data&&(o.kpi_projects_data instanceof Error?Be.initialError=o.kpi_projects_data:Be.initialData=o.kpi_projects_data,o.kpi_projects_columns&&(Be.knownColumns=o.kpi_projects_columns));let fe,Ct=!1;const pe=Le.createReactive({callback:w=>{n(5,fe=w)},execFn:R},{id:"kpi_projects",...Be});pe(me,{noResolve:ke,...Be}),globalThis[Symbol.for("kpi_projects")]={get value(){return fe}};let qe={initialData:void 0,initialError:void 0},G=O`select count(distinct product_id) as total_products 
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
end`;o.kpi_products_data&&(o.kpi_products_data instanceof Error?qe.initialError=o.kpi_products_data:qe.initialData=o.kpi_products_data,o.kpi_products_columns&&(qe.knownColumns=o.kpi_products_columns));let jt,he=!1;const Ne=Le.createReactive({callback:w=>{n(6,jt=w)},execFn:R},{id:"kpi_products",...qe});Ne(Ge,{noResolve:G,...qe}),globalThis[Symbol.for("kpi_products")]={get value(){return jt}};let Oe={initialData:void 0,initialError:void 0},Ce=O`select
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`;o.revenue_bookings_billing_data&&(o.revenue_bookings_billing_data instanceof Error?Oe.initialError=o.revenue_bookings_billing_data:Oe.initialData=o.revenue_bookings_billing_data,o.revenue_bookings_billing_columns&&(Oe.knownColumns=o.revenue_bookings_billing_columns));let Dt,ge=!1;const Et=Le.createReactive({callback:w=>{n(7,Dt=w)},execFn:R},{id:"revenue_bookings_billing",...Oe});Et(re,{noResolve:Ce,...Oe}),globalThis[Symbol.for("revenue_bookings_billing")]={get value(){return Dt}};let je={initialData:void 0,initialError:void 0},J=O`select
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
order by deal_stage asc`;o.pipeline_funnel_data&&(o.pipeline_funnel_data instanceof Error?je.initialError=o.pipeline_funnel_data:je.initialData=o.pipeline_funnel_data,o.pipeline_funnel_columns&&(je.knownColumns=o.pipeline_funnel_columns));let ve,Qt=!1;const Rt=Le.createReactive({callback:w=>{n(8,ve=w)},execFn:R},{id:"pipeline_funnel",...je});Rt(z,{noResolve:J,...je}),globalThis[Symbol.for("pipeline_funnel")]={get value(){return ve}};let Z={initialData:void 0,initialError:void 0},X=O`select
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
order by project_count desc`;o.project_summary_data&&(o.project_summary_data instanceof Error?Z.initialError=o.project_summary_data:Z.initialData=o.project_summary_data,o.project_summary_columns&&(Z.knownColumns=o.project_summary_columns));let oe,St=!1;const ye=Le.createReactive({callback:w=>{n(9,oe=w)},execFn:R},{id:"project_summary",...Z});ye(Je,{noResolve:X,...Z}),globalThis[Symbol.for("project_summary")]={get value(){return oe}};let De={initialData:void 0,initialError:void 0},Ee=O`select
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
order by total_variants desc`;o.catalog_summary_data&&(o.catalog_summary_data instanceof Error?De.initialError=o.catalog_summary_data:De.initialData=o.catalog_summary_data,o.catalog_summary_columns&&(De.knownColumns=o.catalog_summary_columns));let Re,Yt=!1;const Ft=Le.createReactive({callback:w=>{n(10,Re=w)},execFn:R},{id:"catalog_summary",...De});Ft(ae,{noResolve:Ee,...De}),globalThis[Symbol.for("catalog_summary")]={get value(){return Re}};let K="ytd";sa(()=>{if(t){const w=e.url.searchParams.get("time_filter");n(0,t.time_filter=w||"ytd",t)}});const Zt=()=>Jr(`/?time_filter=${K}`),He=()=>Jr(`/sales?time_filter=${K}`),er=()=>Jr(`/operations?time_filter=${K}`),tr=(w,Se)=>{const we=new Date(w),Wt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][we.getUTCMonth()],Xe=we.getUTCFullYear();return we.getUTCMonth()===0||Se===0?Wt+`
`+Xe:Wt};return s.$$set=w=>{"data"in w&&n(12,l=w.data)},s.$$.update=()=>{if(s.$$.dirty[0]&4096&&n(13,{data:o={},customFormattingSettings:u,__db:j}=l,o),s.$$.dirty[0]&8192&&Sa.set(Object.keys(o).length>0),s.$$.dirty[1]&8388608&&e.params,s.$$.dirty[0]&1&&n(15,U=O`select
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
  end`),s.$$.dirty[0]&3932160&&(be||!qt?be||(ce(ee,{noResolve:be,...Pe}),n(21,qt=!0)):ce(ee,{noResolve:be})),s.$$.dirty[0]&1&&n(23,_e=O`select 
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
  end`),s.$$.dirty[0]&62914560&&(_e||!nt?_e||(de(te,{noResolve:_e,...Ve}),n(25,nt=!0)):de(te,{noResolve:_e})),s.$$.dirty[0]&1&&n(27,ue=O`select 
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
  end`),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(ke||!Ct?ke||(pe(me,{noResolve:ke,...Be}),n(33,Ct=!0)):pe(me,{noResolve:ke})),s.$$.dirty[0]&1&&n(35,G=O`select count(distinct product_id) as total_products 
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
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[1]&1920&&(Ce||!ge?Ce||(Et(re,{noResolve:Ce,...Oe}),n(41,ge=!0)):Et(re,{noResolve:Ce})),s.$$.dirty[0]&1&&n(43,J=O`select
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
order by deal_stage asc`),s.$$.dirty[1]&30720&&(J||!Qt?J||(Rt(z,{noResolve:J,...je}),n(45,Qt=!0)):Rt(z,{noResolve:J})),s.$$.dirty[0]&1&&n(47,X=O`select
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
order by project_count desc`),s.$$.dirty[1]&491520&&(X||!St?X||(ye(Je,{noResolve:X,...Z}),n(49,St=!0)):ye(Je,{noResolve:X})),s.$$.dirty[0]&1&&n(51,Ee=O`select
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
order by total_variants desc`),s.$$.dirty[1]&7864320&&(Ee||!Yt?Ee||(Ft(ae,{noResolve:Ee,...De}),n(53,Yt=!0)):Ft(ae,{noResolve:Ee})),s.$$.dirty[0]&1&&n(11,K=(t==null?void 0:t.time_filter)||"ytd"),s.$$.dirty[0]&1&&t&&t.time_filter)try{const w=new URL(window.location.href);w.searchParams.get("time_filter")!==t.time_filter&&(w.searchParams.set("time_filter",t.time_filter),window.history.replaceState(null,"",w.pathname+w.search))}catch{}},[t,Ae,Xt,Kt,ne,fe,jt,Dt,ve,oe,Re,K,l,o,L,U,Y,W,Pe,be,ee,qt,Ve,_e,te,nt,Me,ue,H,se,Be,ke,me,Ct,qe,G,Ge,he,Oe,Ce,re,ge,je,J,z,Qt,Z,X,Je,St,De,Ee,ae,Yt,e,Zt,He,er,tr]}class nn extends Ca{constructor(a){super(),ja(this,a,Qa,Ga,ya,{data:12},null,[-1,-1,-1])}}export{nn as component};
