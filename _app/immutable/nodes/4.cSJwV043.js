import{s as $n,d as c,z as kn,i as $,e as _,l as Ja,b as f,A as le,k as v,B as qn,h as p,r as Ea,j as C,q as Q,x as at,n as y,m as h,y as nt,t as ln,C as xn,D as Cn,E as jn,F as on,v as xt}from"../chunks/scheduler.BWqtgNY2.js";import{S as Dn,i as En,d as b,t as g,a as m,c as Fe,m as k,b as q,e as x,g as Te}from"../chunks/index.DlzBi47Z.js";import{V as qt,B as Xa,g as Sn,Q as Ue,a as In,b as ja}from"../chunks/Value.CqeVMvWw.js";import{a as Da,D as Rn,e as Fn,s as Tn,Q as Le,p as An,b as Ka,c as ia,r as dn,d as Pn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BLzAIuYu.js";import{w as Vn,g as Qa}from"../chunks/entry.DqpcqLQb.js";import{h as O,p as Mn}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Bn}from"../chunks/stores.BDB_QFcx.js";const{document:rt}=Sn;function Nn(s){let n,r=D.title+"",e;return{c(){n=h("h1"),e=nt(r),this.h()},l(l){n=p(l,"H1",{class:!0});var o=C(n);e=at(o,r),o.forEach(c),this.h()},h(){f(n,"class","title")},m(l,o){$(l,n,o),_(n,e)},p:xt,d(l){l&&c(n)}}}function On(s){return{c(){this.h()},l(n){this.h()},h(){rt.title="Evidence"},m:xt,p:xt,d:xt}}function Hn(s){let n,r,e,l,o;return rt.title=n=D.title,{c(){r=y(),e=h("meta"),l=y(),o=h("meta"),this.h()},l(i){r=v(i),e=p(i,"META",{property:!0,content:!0}),l=v(i),o=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,u;f(e,"property","og:title"),f(e,"content",((i=D.og)==null?void 0:i.title)??D.title),f(o,"name","twitter:title"),f(o,"content",((u=D.og)==null?void 0:u.title)??D.title)},m(i,u){$(i,r,u),$(i,e,u),$(i,l,u),$(i,o,u)},p(i,u){u&0&&n!==(n=D.title)&&(rt.title=n)},d(i){i&&(c(r),c(e),c(l),c(o))}}}function Ln(s){var o,i;let n,r,e=(D.description||((o=D.og)==null?void 0:o.description))&&Un(),l=((i=D.og)==null?void 0:i.image)&&Gn();return{c(){e&&e.c(),n=y(),l&&l.c(),r=Ea()},l(u){e&&e.l(u),n=v(u),l&&l.l(u),r=Ea()},m(u,j){e&&e.m(u,j),$(u,n,j),l&&l.m(u,j),$(u,r,j)},p(u,j){var t,E;(D.description||(t=D.og)!=null&&t.description)&&e.p(u,j),(E=D.og)!=null&&E.image&&l.p(u,j)},d(u){u&&(c(n),c(r)),e&&e.d(u),l&&l.d(u)}}}function Un(s){let n,r,e,l,o;return{c(){n=h("meta"),r=y(),e=h("meta"),l=y(),o=h("meta"),this.h()},l(i){n=p(i,"META",{name:!0,content:!0}),r=v(i),e=p(i,"META",{property:!0,content:!0}),l=v(i),o=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,u,j;f(n,"name","description"),f(n,"content",D.description??((i=D.og)==null?void 0:i.description)),f(e,"property","og:description"),f(e,"content",((u=D.og)==null?void 0:u.description)??D.description),f(o,"name","twitter:description"),f(o,"content",((j=D.og)==null?void 0:j.description)??D.description)},m(i,u){$(i,n,u),$(i,r,u),$(i,e,u),$(i,l,u),$(i,o,u)},p:xt,d(i){i&&(c(n),c(r),c(e),c(l),c(o))}}}function Gn(s){let n,r,e;return{c(){n=h("meta"),r=y(),e=h("meta"),this.h()},l(l){n=p(l,"META",{property:!0,content:!0}),r=v(l),e=p(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;f(n,"property","og:image"),f(n,"content",ia((l=D.og)==null?void 0:l.image)),f(e,"name","twitter:image"),f(e,"content",ia((o=D.og)==null?void 0:o.image))},m(l,o){$(l,n,o),$(l,r,o),$(l,e,o)},p:xt,d(l){l&&(c(n),c(r),c(e))}}}function _n(s){let n,r;return n=new Ue({props:{queryID:"delivery_lag",queryResult:s[1]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&2&&(o.queryResult=e[1]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function cn(s){let n,r;return n=new Ue({props:{queryID:"pipeline_coverage",queryResult:s[2]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&4&&(o.queryResult=e[2]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function un(s){let n,r;return n=new Ue({props:{queryID:"kpi_revenue",queryResult:s[3]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&8&&(o.queryResult=e[3]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function mn(s){let n,r;return n=new Ue({props:{queryID:"kpi_pipeline",queryResult:s[4]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&16&&(o.queryResult=e[4]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function fn(s){let n,r;return n=new Ue({props:{queryID:"kpi_projects",queryResult:s[5]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&32&&(o.queryResult=e[5]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function pn(s){let n,r;return n=new Ue({props:{queryID:"kpi_products",queryResult:s[6]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&64&&(o.queryResult=e[6]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function hn(s){let n,r;return n=new Ue({props:{queryID:"revenue_bookings_billing",queryResult:s[7]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&128&&(o.queryResult=e[7]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function gn(s){let n,r;return n=new Ue({props:{queryID:"pipeline_funnel",queryResult:s[8]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&256&&(o.queryResult=e[8]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function vn(s){let n,r;return n=new Ue({props:{queryID:"project_summary",queryResult:s[9]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&512&&(o.queryResult=e[9]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function yn(s){let n,r;return n=new Ue({props:{queryID:"catalog_summary",queryResult:s[10]}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&1024&&(o.queryResult=e[10]),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function Jn(s){let n,r,e,l,o,i,u,j;return n=new ja({props:{valueLabel:"MTD",value:"mtd",default:s[11]==="mtd"}}),e=new ja({props:{valueLabel:"QTD",value:"qtd",default:s[11]==="qtd"}}),o=new ja({props:{valueLabel:"YTD",value:"ytd",default:s[11]==="ytd"}}),u=new ja({props:{valueLabel:"All Time",value:"all",default:s[11]==="all"}}),{c(){x(n.$$.fragment),r=y(),x(e.$$.fragment),l=y(),x(o.$$.fragment),i=y(),x(u.$$.fragment)},l(t){q(n.$$.fragment,t),r=v(t),q(e.$$.fragment,t),l=v(t),q(o.$$.fragment,t),i=v(t),q(u.$$.fragment,t)},m(t,E){k(n,t,E),$(t,r,E),k(e,t,E),$(t,l,E),k(o,t,E),$(t,i,E),k(u,t,E),j=!0},p(t,E){const S={};E[0]&2048&&(S.default=t[11]==="mtd"),n.$set(S);const L={};E[0]&2048&&(L.default=t[11]==="qtd"),e.$set(L);const U={};E[0]&2048&&(U.default=t[11]==="ytd"),o.$set(U);const Y={};E[0]&2048&&(Y.default=t[11]==="all"),u.$set(Y)},i(t){j||(m(n.$$.fragment,t),m(e.$$.fragment,t),m(o.$$.fragment,t),m(u.$$.fragment,t),j=!0)},o(t){g(n.$$.fragment,t),g(e.$$.fragment,t),g(o.$$.fragment,t),g(u.$$.fragment,t),j=!1},d(t){t&&(c(r),c(l),c(i)),b(n,t),b(e,t),b(o,t),b(u,t)}}}function wn(s){let n,r;return n=new In({props:{name:"time_filter",defaultValue:s[11],$$slots:{default:[Jn]},$$scope:{ctx:s}}}),{c(){x(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){k(n,e,l),r=!0},p(e,l){const o={};l[0]&2048&&(o.defaultValue=e[11]),l[0]&2048|l[2]&32768&&(o.$$scope={dirty:l,ctx:e}),n.$set(o)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){g(n.$$.fragment,e),r=!1},d(e){b(n,e)}}}function Xn(s){let n,r,e,l,o,i;return n=new Ka({props:{id:"vendor",label:"Vendor Brand"}}),e=new Ka({props:{id:"total_variants",label:"Variants Count",align:"center"}}),o=new Ka({props:{id:"average_price",label:"Average Price",align:"right",fmt:"usd"}}),{c(){x(n.$$.fragment),r=y(),x(e.$$.fragment),l=y(),x(o.$$.fragment)},l(u){q(n.$$.fragment,u),r=v(u),q(e.$$.fragment,u),l=v(u),q(o.$$.fragment,u)},m(u,j){k(n,u,j),$(u,r,j),k(e,u,j),$(u,l,j),k(o,u,j),i=!0},p:xt,i(u){i||(m(n.$$.fragment,u),m(e.$$.fragment,u),m(o.$$.fragment,u),i=!0)},o(u){g(n.$$.fragment,u),g(e.$$.fragment,u),g(o.$$.fragment,u),i=!1},d(u){u&&(c(r),c(l)),b(n,u),b(e,u),b(o,u)}}}function Kn(s){let n,r,e,l,o,i,u,j,t,E,S,L,U,Y,Ae,W,oe,Pe="Overview Cockpit",be,ee,Kt="Sales & Win-Loss",Ct,de,Ve="Operations & Vendors",_e,te,Qt='<div class="text-base font-extrabold text-[#264773]">Business Performance Cockpit</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Google BigQuery</div>',st,ce,Me=s[11],ue,H,re,se,ke,Be="💰 Total Billed Revenue",qe,me,fe,jt,pe,xe,G,Ge,Dt,he,Ne,Oe="Actual invoices billed via Xero",Ce,ae,Et,ge,St,je,J,z,ve,Yt="📈 Active Pipeline Value",It,Z,X,Je,ie,Rt,ye,De,Ee,ne,Se,Wt="Open opportunities in HubSpot CRM",Ft,K,ea,He,ta,aa,w,Ie,we,Sa="🏗️ Active Projects",zt,Xe,it,Ia,lt,Ya="Ongoing jobs managed in Procore",Ra,ot,Tt,dt,Wa="🛍️ Shopify Products",Fa,At,_t,Ta,ct,za="Unique items in active catalog",la,Ke,ut,mt,Pt,Za="Monthly Cash Flow Billed vs. Booked Contracts",Aa,Vt,Pa,ft,Va,pt,ht,Mt,en="Sales Pipeline Opportunity Value",Ma,Bt,Ba,gt,oa,Qe,vt,yt,Nt,tn="Procore Project Portfolio Status",Na,Ot,Oa,wt,Ha,$t,bt,Ht,an="Shopify Product Catalog Summary",La,Lt,Ua,kt,da,Ga,nn,Ye=typeof D<"u"&&D.title&&D.hide_title!==!0&&Nn();function bn(a,d){return typeof D<"u"&&D.title?Hn:On}let na=bn()(s),We=typeof D=="object"&&Ln(),I=s[1]&&_n(s),R=s[2]&&cn(s),F=s[3]&&un(s),T=s[4]&&mn(s),A=s[5]&&fn(s),P=s[6]&&pn(s),V=s[7]&&hn(s),M=s[8]&&gn(s),B=s[9]&&vn(s),N=s[10]&&yn(s),$e=wn(s);return fe=new qt({props:{data:s[3],column:"total_revenue",fmt:"usd"}}),G=new qt({props:{data:s[3],column:"target_progress",fmt:"pct0"}}),ge=new qt({props:{data:s[1],column:"avg_lag_days",fmt:"num0"}}),X=new qt({props:{data:s[4],column:"pipeline_value",fmt:"usd"}}),ye=new qt({props:{data:s[4],column:"target_progress",fmt:"pct0"}}),He=new qt({props:{data:s[2],column:"coverage_ratio",fmt:"0.0"}}),it=new qt({props:{data:s[5],column:"total_projects"}}),_t=new qt({props:{data:s[6],column:"total_products"}}),Vt=new Da({props:{description:"Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed."}}),ft=new Xa({props:{data:s[7],x:"month_date",y:"revenue",series:"source_system",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",stackTotalLabel:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Billed Cash Flow (Xero)","Booked Contracts (HubSpot)"],height:175,echartsOptions:{grid:{top:25,bottom:35,left:40,right:15},xAxis:{type:"time",axisLabel:{formatter:s[58]}},yAxis:{splitNumber:3,axisLabel:{formatter:Qn}}}}}),Bt=new Da({props:{description:"Displays the total value of all currently open opportunities in HubSpot CRM by stage, excluding closed won and closed lost deals."}}),gt=new Xa({props:{data:s[8],x:"deal_stage",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],sort:"false",height:175,echartsOptions:{grid:{top:25,bottom:10,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Yn},offset:10},series:[{itemStyle:{color:Wn}}]}}}),Ot=new Da({props:{description:"Tracks the count of active versus completed projects for each client corporate parent group managed in Procore."}}),wt=new Xa({props:{data:s[9],x:"company_name",y:"project_count",series:"project_status",swapXY:"true",fillOpacity:"0.9",labels:!0,labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Active","Completed"],height:175,echartsOptions:{xAxis:{minInterval:1,splitNumber:3},grid:{top:15,bottom:25,left:40,right:30}}}}),Lt=new Da({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),kt=new Rn({props:{data:s[10],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Xn]},$$scope:{ctx:s}}}),{c(){Ye&&Ye.c(),n=y(),na.c(),r=h("meta"),e=h("meta"),We&&We.c(),l=Ea(),o=y(),I&&I.c(),i=y(),R&&R.c(),u=y(),F&&F.c(),j=y(),T&&T.c(),t=y(),A&&A.c(),E=y(),P&&P.c(),S=y(),V&&V.c(),L=y(),M&&M.c(),U=y(),B&&B.c(),Y=y(),N&&N.c(),Ae=y(),W=h("div"),oe=h("button"),oe.textContent=Pe,be=y(),ee=h("button"),ee.textContent=Kt,Ct=y(),de=h("button"),de.textContent=Ve,_e=y(),te=h("div"),te.innerHTML=Qt,st=y(),ce=h("div"),$e.c(),ue=y(),H=h("div"),re=h("div"),se=h("div"),ke=h("span"),ke.textContent=Be,qe=y(),me=h("h2"),x(fe.$$.fragment),jt=y(),pe=h("div"),xe=nt("🎯 "),x(G.$$.fragment),Ge=nt(" of YTD Target ($1.0M)"),Dt=y(),he=h("div"),Ne=h("span"),Ne.textContent=Oe,Ce=y(),ae=h("span"),Et=nt("⚡ "),x(ge.$$.fragment),St=nt("d Lag"),je=y(),J=h("div"),z=h("div"),ve=h("span"),ve.textContent=Yt,It=y(),Z=h("h2"),x(X.$$.fragment),Je=y(),ie=h("div"),Rt=nt("🎯 "),x(ye.$$.fragment),De=nt(" of target ($750K)"),Ee=y(),ne=h("div"),Se=h("span"),Se.textContent=Wt,Ft=y(),K=h("span"),ea=nt("📊 "),x(He.$$.fragment),ta=nt("x Cover"),aa=y(),w=h("div"),Ie=h("div"),we=h("span"),we.textContent=Sa,zt=y(),Xe=h("h2"),x(it.$$.fragment),Ia=y(),lt=h("div"),lt.textContent=Ya,Ra=y(),ot=h("div"),Tt=h("div"),dt=h("span"),dt.textContent=Wa,Fa=y(),At=h("h2"),x(_t.$$.fragment),Ta=y(),ct=h("div"),ct.textContent=za,la=y(),Ke=h("div"),ut=h("div"),mt=h("div"),Pt=h("span"),Pt.textContent=Za,Aa=y(),x(Vt.$$.fragment),Pa=y(),x(ft.$$.fragment),Va=y(),pt=h("div"),ht=h("div"),Mt=h("span"),Mt.textContent=en,Ma=y(),x(Bt.$$.fragment),Ba=y(),x(gt.$$.fragment),oa=y(),Qe=h("div"),vt=h("div"),yt=h("div"),Nt=h("span"),Nt.textContent=tn,Na=y(),x(Ot.$$.fragment),Oa=y(),x(wt.$$.fragment),Ha=y(),$t=h("div"),bt=h("div"),Ht=h("span"),Ht.textContent=an,La=y(),x(Lt.$$.fragment),Ua=y(),x(kt.$$.fragment),this.h()},l(a){Ye&&Ye.l(a),n=v(a);const d=qn("svelte-2igo1p",rt.head);na.l(d),r=p(d,"META",{name:!0,content:!0}),e=p(d,"META",{name:!0,content:!0}),We&&We.l(d),l=Ea(),d.forEach(c),o=v(a),I&&I.l(a),i=v(a),R&&R.l(a),u=v(a),F&&F.l(a),j=v(a),T&&T.l(a),t=v(a),A&&A.l(a),E=v(a),P&&P.l(a),S=v(a),V&&V.l(a),L=v(a),M&&M.l(a),U=v(a),B&&B.l(a),Y=v(a),N&&N.l(a),Ae=v(a),W=p(a,"DIV",{class:!0});var ze=C(W);oe=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(oe)!=="svelte-1n5lix1"&&(oe.textContent=Pe),be=v(ze),ee=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(ee)!=="svelte-1l9tmjn"&&(ee.textContent=Kt),Ct=v(ze),de=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(de)!=="svelte-19h1sxa"&&(de.textContent=Ve),ze.forEach(c),_e=v(a),te=p(a,"DIV",{class:!0,"data-svelte-h":!0}),Q(te)!=="svelte-3en9zc"&&(te.innerHTML=Qt),st=v(a),ce=p(a,"DIV",{class:!0});var ra=C(ce);$e.l(ra),ra.forEach(c),ue=v(a),H=p(a,"DIV",{class:!0});var Re=C(H);re=p(Re,"DIV",{style:!0,class:!0});var Ut=C(re);se=p(Ut,"DIV",{});var Ze=C(se);ke=p(Ze,"SPAN",{class:!0,"data-svelte-h":!0}),Q(ke)!=="svelte-e3ust3"&&(ke.textContent=Be),qe=v(Ze),me=p(Ze,"H2",{class:!0});var sa=C(me);q(fe.$$.fragment,sa),sa.forEach(c),jt=v(Ze),pe=p(Ze,"DIV",{class:!0});var Gt=C(pe);xe=at(Gt,"🎯 "),q(G.$$.fragment,Gt),Ge=at(Gt," of YTD Target ($1.0M)"),Gt.forEach(c),Ze.forEach(c),Dt=v(Ut),he=p(Ut,"DIV",{class:!0});var Jt=C(he);Ne=p(Jt,"SPAN",{"data-svelte-h":!0}),Q(Ne)!=="svelte-xdszx8"&&(Ne.textContent=Oe),Ce=v(Jt),ae=p(Jt,"SPAN",{class:!0});var et=C(ae);Et=at(et,"⚡ "),q(ge.$$.fragment,et),St=at(et,"d Lag"),et.forEach(c),Jt.forEach(c),Ut.forEach(c),je=v(Re),J=p(Re,"DIV",{class:!0});var Xt=C(J);z=p(Xt,"DIV",{});var tt=C(z);ve=p(tt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(ve)!=="svelte-1uurc49"&&(ve.textContent=Yt),It=v(tt),Z=p(tt,"H2",{style:!0,class:!0});var Zt=C(Z);q(X.$$.fragment,Zt),Zt.forEach(c),Je=v(tt),ie=p(tt,"DIV",{style:!0,class:!0});var _a=C(ie);Rt=at(_a,"🎯 "),q(ye.$$.fragment,_a),De=at(_a," of target ($750K)"),_a.forEach(c),tt.forEach(c),Ee=v(Xt),ne=p(Xt,"DIV",{class:!0});var ca=C(ne);Se=p(ca,"SPAN",{style:!0,"data-svelte-h":!0}),Q(Se)!=="svelte-ifvc0m"&&(Se.textContent=Wt),Ft=v(ca),K=p(ca,"SPAN",{style:!0,class:!0});var ua=C(K);ea=at(ua,"📊 "),q(He.$$.fragment,ua),ta=at(ua,"x Cover"),ua.forEach(c),ca.forEach(c),Xt.forEach(c),aa=v(Re),w=p(Re,"DIV",{class:!0});var ma=C(w);Ie=p(ma,"DIV",{});var fa=C(Ie);we=p(fa,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(we)!=="svelte-19u2tfr"&&(we.textContent=Sa),zt=v(fa),Xe=p(fa,"H2",{style:!0,class:!0});var rn=C(Xe);q(it.$$.fragment,rn),rn.forEach(c),fa.forEach(c),Ia=v(ma),lt=p(ma,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(lt)!=="svelte-tvomuv"&&(lt.textContent=Ya),ma.forEach(c),Ra=v(Re),ot=p(Re,"DIV",{class:!0});var pa=C(ot);Tt=p(pa,"DIV",{});var ha=C(Tt);dt=p(ha,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(dt)!=="svelte-17fuh5a"&&(dt.textContent=Wa),Fa=v(ha),At=p(ha,"H2",{style:!0,class:!0});var sn=C(At);q(_t.$$.fragment,sn),sn.forEach(c),ha.forEach(c),Ta=v(pa),ct=p(pa,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(ct)!=="svelte-9stalx"&&(ct.textContent=za),pa.forEach(c),Re.forEach(c),la=v(a),Ke=p(a,"DIV",{class:!0});var ga=C(Ke);ut=p(ga,"DIV",{class:!0});var va=C(ut);mt=p(va,"DIV",{class:!0});var ya=C(mt);Pt=p(ya,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Pt)!=="svelte-3eui4q"&&(Pt.textContent=Za),Aa=v(ya),q(Vt.$$.fragment,ya),ya.forEach(c),Pa=v(va),q(ft.$$.fragment,va),va.forEach(c),Va=v(ga),pt=p(ga,"DIV",{class:!0});var wa=C(pt);ht=p(wa,"DIV",{class:!0});var $a=C(ht);Mt=p($a,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Mt)!=="svelte-4wul4y"&&(Mt.textContent=en),Ma=v($a),q(Bt.$$.fragment,$a),$a.forEach(c),Ba=v(wa),q(gt.$$.fragment,wa),wa.forEach(c),ga.forEach(c),oa=v(a),Qe=p(a,"DIV",{class:!0});var ba=C(Qe);vt=p(ba,"DIV",{class:!0});var ka=C(vt);yt=p(ka,"DIV",{class:!0});var qa=C(yt);Nt=p(qa,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Nt)!=="svelte-b68vp"&&(Nt.textContent=tn),Na=v(qa),q(Ot.$$.fragment,qa),qa.forEach(c),Oa=v(ka),q(wt.$$.fragment,ka),ka.forEach(c),Ha=v(ba),$t=p(ba,"DIV",{class:!0});var xa=C($t);bt=p(xa,"DIV",{class:!0});var Ca=C(bt);Ht=p(Ca,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Ht)!=="svelte-kdhzry"&&(Ht.textContent=an),La=v(Ca),q(Lt.$$.fragment,Ca),Ca.forEach(c),Ua=v(xa),q(kt.$$.fragment,xa),xa.forEach(c),ba.forEach(c),this.h()},h(){f(r,"name","twitter:card"),f(r,"content","summary_large_image"),f(e,"name","twitter:site"),f(e,"content","@evidence_dev"),f(oe,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f(ee,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(de,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(W,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(te,"class","flex justify-between items-center mb-1.5 mt-0.5"),f(ce,"class","mb-2 flex justify-start"),f(ke,"class","text-[9px] font-bold text-white/80 uppercase tracking-wider"),f(me,"class","text-xl font-extrabold mt-0.5 text-white"),f(pe,"class","text-[9px] font-semibold mt-0.5 text-white"),f(ae,"class","font-extrabold bg-white/20 px-1.5 py-0.5 rounded"),f(he,"class","flex justify-between items-center text-[9px] text-white/80 mt-0.5 border-t border-white/20 pt-1"),le(re,"background-color","#1D5F60"),f(re,"class","rounded-xl shadow-sm py-3 px-3.5 flex flex-col justify-between text-white h-[120px]"),le(ve,"color","#7B8DA6"),f(ve,"class","text-[9px] font-bold uppercase tracking-wider"),le(Z,"color","#000000"),f(Z,"class","text-xl font-extrabold mt-0.5"),le(ie,"color","#264773"),f(ie,"class","text-[9px] font-semibold mt-0.5"),le(Se,"color","#7B8DA6"),le(K,"background-color","rgba(38, 71, 115, 0.1)"),le(K,"color","#264773"),f(K,"class","font-extrabold px-1.5 py-0.5 rounded"),f(ne,"class","flex justify-between items-center text-[9px] mt-0.5 border-t border-gray-100 pt-1"),f(J,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),le(we,"color","#7B8DA6"),f(we,"class","text-[9px] font-bold uppercase tracking-wider"),le(Xe,"color","#000000"),f(Xe,"class","text-xl font-extrabold mt-0.5"),le(lt,"color","#7B8DA6"),f(lt,"class","text-[9px] mt-0.5"),f(w,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),le(dt,"color","#7B8DA6"),f(dt,"class","text-[9px] font-bold uppercase tracking-wider"),le(At,"color","#000000"),f(At,"class","text-xl font-extrabold mt-0.5"),le(ct,"color","#7B8DA6"),f(ct,"class","text-[9px] mt-0.5"),f(ot,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(H,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(Pt,"class","font-bold text-gray-700 text-xs"),f(mt,"class","flex items-center gap-1.5 mb-1"),f(ut,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Mt,"class","font-bold text-gray-700 text-xs"),f(ht,"class","flex items-center gap-1.5 mb-1"),f(pt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ke,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5"),f(Nt,"class","font-bold text-gray-700 text-xs"),f(yt,"class","flex items-center gap-1.5 mb-1.5"),f(vt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ht,"class","font-bold text-gray-700 text-xs"),f(bt,"class","flex items-center gap-1.5 mb-1.5"),f($t,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Qe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(a,d){Ye&&Ye.m(a,d),$(a,n,d),na.m(rt.head,null),_(rt.head,r),_(rt.head,e),We&&We.m(rt.head,null),_(rt.head,l),$(a,o,d),I&&I.m(a,d),$(a,i,d),R&&R.m(a,d),$(a,u,d),F&&F.m(a,d),$(a,j,d),T&&T.m(a,d),$(a,t,d),A&&A.m(a,d),$(a,E,d),P&&P.m(a,d),$(a,S,d),V&&V.m(a,d),$(a,L,d),M&&M.m(a,d),$(a,U,d),B&&B.m(a,d),$(a,Y,d),N&&N.m(a,d),$(a,Ae,d),$(a,W,d),_(W,oe),_(W,be),_(W,ee),_(W,Ct),_(W,de),$(a,_e,d),$(a,te,d),$(a,st,d),$(a,ce,d),$e.m(ce,null),$(a,ue,d),$(a,H,d),_(H,re),_(re,se),_(se,ke),_(se,qe),_(se,me),k(fe,me,null),_(se,jt),_(se,pe),_(pe,xe),k(G,pe,null),_(pe,Ge),_(re,Dt),_(re,he),_(he,Ne),_(he,Ce),_(he,ae),_(ae,Et),k(ge,ae,null),_(ae,St),_(H,je),_(H,J),_(J,z),_(z,ve),_(z,It),_(z,Z),k(X,Z,null),_(z,Je),_(z,ie),_(ie,Rt),k(ye,ie,null),_(ie,De),_(J,Ee),_(J,ne),_(ne,Se),_(ne,Ft),_(ne,K),_(K,ea),k(He,K,null),_(K,ta),_(H,aa),_(H,w),_(w,Ie),_(Ie,we),_(Ie,zt),_(Ie,Xe),k(it,Xe,null),_(w,Ia),_(w,lt),_(H,Ra),_(H,ot),_(ot,Tt),_(Tt,dt),_(Tt,Fa),_(Tt,At),k(_t,At,null),_(ot,Ta),_(ot,ct),$(a,la,d),$(a,Ke,d),_(Ke,ut),_(ut,mt),_(mt,Pt),_(mt,Aa),k(Vt,mt,null),_(ut,Pa),k(ft,ut,null),_(Ke,Va),_(Ke,pt),_(pt,ht),_(ht,Mt),_(ht,Ma),k(Bt,ht,null),_(pt,Ba),k(gt,pt,null),$(a,oa,d),$(a,Qe,d),_(Qe,vt),_(vt,yt),_(yt,Nt),_(yt,Na),k(Ot,yt,null),_(vt,Oa),k(wt,vt,null),_(Qe,Ha),_(Qe,$t),_($t,bt),_(bt,Ht),_(bt,La),k(Lt,bt,null),_($t,Ua),k(kt,$t,null),da=!0,Ga||(nn=[Ja(oe,"click",s[55]),Ja(ee,"click",s[56]),Ja(de,"click",s[57])],Ga=!0)},p(a,d){typeof D<"u"&&D.title&&D.hide_title!==!0&&Ye.p(a,d),na.p(a,d),typeof D=="object"&&We.p(a,d),a[1]?I?(I.p(a,d),d[0]&2&&m(I,1)):(I=_n(a),I.c(),m(I,1),I.m(i.parentNode,i)):I&&(Te(),g(I,1,1,()=>{I=null}),Fe()),a[2]?R?(R.p(a,d),d[0]&4&&m(R,1)):(R=cn(a),R.c(),m(R,1),R.m(u.parentNode,u)):R&&(Te(),g(R,1,1,()=>{R=null}),Fe()),a[3]?F?(F.p(a,d),d[0]&8&&m(F,1)):(F=un(a),F.c(),m(F,1),F.m(j.parentNode,j)):F&&(Te(),g(F,1,1,()=>{F=null}),Fe()),a[4]?T?(T.p(a,d),d[0]&16&&m(T,1)):(T=mn(a),T.c(),m(T,1),T.m(t.parentNode,t)):T&&(Te(),g(T,1,1,()=>{T=null}),Fe()),a[5]?A?(A.p(a,d),d[0]&32&&m(A,1)):(A=fn(a),A.c(),m(A,1),A.m(E.parentNode,E)):A&&(Te(),g(A,1,1,()=>{A=null}),Fe()),a[6]?P?(P.p(a,d),d[0]&64&&m(P,1)):(P=pn(a),P.c(),m(P,1),P.m(S.parentNode,S)):P&&(Te(),g(P,1,1,()=>{P=null}),Fe()),a[7]?V?(V.p(a,d),d[0]&128&&m(V,1)):(V=hn(a),V.c(),m(V,1),V.m(L.parentNode,L)):V&&(Te(),g(V,1,1,()=>{V=null}),Fe()),a[8]?M?(M.p(a,d),d[0]&256&&m(M,1)):(M=gn(a),M.c(),m(M,1),M.m(U.parentNode,U)):M&&(Te(),g(M,1,1,()=>{M=null}),Fe()),a[9]?B?(B.p(a,d),d[0]&512&&m(B,1)):(B=vn(a),B.c(),m(B,1),B.m(Y.parentNode,Y)):B&&(Te(),g(B,1,1,()=>{B=null}),Fe()),a[10]?N?(N.p(a,d),d[0]&1024&&m(N,1)):(N=yn(a),N.c(),m(N,1),N.m(Ae.parentNode,Ae)):N&&(Te(),g(N,1,1,()=>{N=null}),Fe()),d[0]&2048&&$n(Me,Me=a[11])?(Te(),g($e,1,1,xt),Fe(),$e=wn(a),$e.c(),m($e,1),$e.m(ce,null)):$e.p(a,d);const ze={};d[0]&8&&(ze.data=a[3]),fe.$set(ze);const ra={};d[0]&8&&(ra.data=a[3]),G.$set(ra);const Re={};d[0]&2&&(Re.data=a[1]),ge.$set(Re);const Ut={};d[0]&16&&(Ut.data=a[4]),X.$set(Ut);const Ze={};d[0]&16&&(Ze.data=a[4]),ye.$set(Ze);const sa={};d[0]&4&&(sa.data=a[2]),He.$set(sa);const Gt={};d[0]&32&&(Gt.data=a[5]),it.$set(Gt);const Jt={};d[0]&64&&(Jt.data=a[6]),_t.$set(Jt);const et={};d[0]&128&&(et.data=a[7]),d[0]&1&&(et.labels=a[0].time_filter!=="all"&&a[0].time_filter!=="ytd"),d[0]&1&&(et.stackTotalLabel=a[0].time_filter!=="all"&&a[0].time_filter!=="ytd"),ft.$set(et);const Xt={};d[0]&256&&(Xt.data=a[8]),gt.$set(Xt);const tt={};d[0]&512&&(tt.data=a[9]),wt.$set(tt);const Zt={};d[0]&1024&&(Zt.data=a[10]),d[2]&32768&&(Zt.$$scope={dirty:d,ctx:a}),kt.$set(Zt)},i(a){da||(m(I),m(R),m(F),m(T),m(A),m(P),m(V),m(M),m(B),m(N),m($e),m(fe.$$.fragment,a),m(G.$$.fragment,a),m(ge.$$.fragment,a),m(X.$$.fragment,a),m(ye.$$.fragment,a),m(He.$$.fragment,a),m(it.$$.fragment,a),m(_t.$$.fragment,a),m(Vt.$$.fragment,a),m(ft.$$.fragment,a),m(Bt.$$.fragment,a),m(gt.$$.fragment,a),m(Ot.$$.fragment,a),m(wt.$$.fragment,a),m(Lt.$$.fragment,a),m(kt.$$.fragment,a),da=!0)},o(a){g(I),g(R),g(F),g(T),g(A),g(P),g(V),g(M),g(B),g(N),g($e),g(fe.$$.fragment,a),g(G.$$.fragment,a),g(ge.$$.fragment,a),g(X.$$.fragment,a),g(ye.$$.fragment,a),g(He.$$.fragment,a),g(it.$$.fragment,a),g(_t.$$.fragment,a),g(Vt.$$.fragment,a),g(ft.$$.fragment,a),g(Bt.$$.fragment,a),g(gt.$$.fragment,a),g(Ot.$$.fragment,a),g(wt.$$.fragment,a),g(Lt.$$.fragment,a),g(kt.$$.fragment,a),da=!1},d(a){a&&(c(n),c(o),c(i),c(u),c(j),c(t),c(E),c(S),c(L),c(U),c(Y),c(Ae),c(W),c(_e),c(te),c(st),c(ce),c(ue),c(H),c(la),c(Ke),c(oa),c(Qe)),Ye&&Ye.d(a),na.d(a),c(r),c(e),We&&We.d(a),c(l),I&&I.d(a),R&&R.d(a),F&&F.d(a),T&&T.d(a),A&&A.d(a),P&&P.d(a),V&&V.d(a),M&&M.d(a),B&&B.d(a),N&&N.d(a),$e.d(a),b(fe),b(G),b(ge),b(X),b(ye),b(He),b(it),b(_t),b(Vt),b(ft),b(Bt),b(gt),b(Ot),b(wt),b(Lt),b(kt),Ga=!1,kn(nn)}}}const D={title:"Business Performance Dashboard"},Qn=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Yn=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,Wn=s=>s.name&&s.name.includes("Closed Won")?"#1D5F60":s.name&&s.name.includes("Closed Lost")?"#7B8DA6":"#264773";function zn(s,n,r){let e,l;ln(s,Bn,w=>r(54,e=w)),ln(s,dn,w=>r(63,l=w));let{data:o}=n,{data:i={},customFormattingSettings:u,__db:j,inputs:t}=o;xn(dn,l="6666cd76f96956469e7be39d750cc7d9",l);let E=Fn(Vn(t));Cn(E.subscribe(w=>r(0,t=w))),jn(Pn,{getCustomFormats:()=>u.customFormats||[]});const S=(w,Ie)=>Mn(j.query,w,{query_name:Ie});Tn(S),e.params,on(()=>!0);let L={initialData:void 0,initialError:void 0},U=O`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`,Y=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`;i.delivery_lag_data&&(i.delivery_lag_data instanceof Error?L.initialError=i.delivery_lag_data:L.initialData=i.delivery_lag_data,i.delivery_lag_columns&&(L.knownColumns=i.delivery_lag_columns));let Ae,W=!1;const oe=Le.createReactive({callback:w=>{r(1,Ae=w)},execFn:S},{id:"delivery_lag",...L});oe(Y,{noResolve:U,...L}),globalThis[Symbol.for("delivery_lag")]={get value(){return Ae}};let Pe={initialData:void 0,initialError:void 0},be=O`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
        when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-01'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`,ee=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
        when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-01'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`;i.pipeline_coverage_data&&(i.pipeline_coverage_data instanceof Error?Pe.initialError=i.pipeline_coverage_data:Pe.initialData=i.pipeline_coverage_data,i.pipeline_coverage_columns&&(Pe.knownColumns=i.pipeline_coverage_columns));let Kt,Ct=!1;const de=Le.createReactive({callback:w=>{r(2,Kt=w)},execFn:S},{id:"pipeline_coverage",...Pe});de(ee,{noResolve:be,...Pe}),globalThis[Symbol.for("pipeline_coverage")]={get value(){return Kt}};let Ve={initialData:void 0,initialError:void 0},_e=O`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-01'::date`,te=`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-01'::date`;i.kpi_revenue_data&&(i.kpi_revenue_data instanceof Error?Ve.initialError=i.kpi_revenue_data:Ve.initialData=i.kpi_revenue_data,i.kpi_revenue_columns&&(Ve.knownColumns=i.kpi_revenue_columns));let Qt,st=!1;const ce=Le.createReactive({callback:w=>{r(3,Qt=w)},execFn:S},{id:"kpi_revenue",...Ve});ce(te,{noResolve:_e,...Ve}),globalThis[Symbol.for("kpi_revenue")]={get value(){return Qt}};let Me={initialData:void 0,initialError:void 0},ue=O`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`,H=`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`;i.kpi_pipeline_data&&(i.kpi_pipeline_data instanceof Error?Me.initialError=i.kpi_pipeline_data:Me.initialData=i.kpi_pipeline_data,i.kpi_pipeline_columns&&(Me.knownColumns=i.kpi_pipeline_columns));let re,se=!1;const ke=Le.createReactive({callback:w=>{r(4,re=w)},execFn:S},{id:"kpi_pipeline",...Me});ke(H,{noResolve:ue,...Me}),globalThis[Symbol.for("kpi_pipeline")]={get value(){return re}};let Be={initialData:void 0,initialError:void 0},qe=O`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`,me=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`;i.kpi_projects_data&&(i.kpi_projects_data instanceof Error?Be.initialError=i.kpi_projects_data:Be.initialData=i.kpi_projects_data,i.kpi_projects_columns&&(Be.knownColumns=i.kpi_projects_columns));let fe,jt=!1;const pe=Le.createReactive({callback:w=>{r(5,fe=w)},execFn:S},{id:"kpi_projects",...Be});pe(me,{noResolve:qe,...Be}),globalThis[Symbol.for("kpi_projects")]={get value(){return fe}};let xe={initialData:void 0,initialError:void 0},G=O`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`,Ge=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`;i.kpi_products_data&&(i.kpi_products_data instanceof Error?xe.initialError=i.kpi_products_data:xe.initialData=i.kpi_products_data,i.kpi_products_columns&&(xe.knownColumns=i.kpi_products_columns));let Dt,he=!1;const Ne=Le.createReactive({callback:w=>{r(6,Dt=w)},execFn:S},{id:"kpi_products",...xe});Ne(Ge,{noResolve:G,...xe}),globalThis[Symbol.for("kpi_products")]={get value(){return Dt}};let Oe={initialData:void 0,initialError:void 0},Ce=O`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-01'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`,ae=`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-01'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`;i.revenue_bookings_billing_data&&(i.revenue_bookings_billing_data instanceof Error?Oe.initialError=i.revenue_bookings_billing_data:Oe.initialData=i.revenue_bookings_billing_data,i.revenue_bookings_billing_columns&&(Oe.knownColumns=i.revenue_bookings_billing_columns));let Et,ge=!1;const St=Le.createReactive({callback:w=>{r(7,Et=w)},execFn:S},{id:"revenue_bookings_billing",...Oe});St(ae,{noResolve:Ce,...Oe}),globalThis[Symbol.for("revenue_bookings_billing")]={get value(){return Et}};let je={initialData:void 0,initialError:void 0},J=O`select
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
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date
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
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date
group by all
order by deal_stage asc`;i.pipeline_funnel_data&&(i.pipeline_funnel_data instanceof Error?je.initialError=i.pipeline_funnel_data:je.initialData=i.pipeline_funnel_data,i.pipeline_funnel_columns&&(je.knownColumns=i.pipeline_funnel_columns));let ve,Yt=!1;const It=Le.createReactive({callback:w=>{r(8,ve=w)},execFn:S},{id:"pipeline_funnel",...je});It(z,{noResolve:J,...je}),globalThis[Symbol.for("pipeline_funnel")]={get value(){return ve}};let Z={initialData:void 0,initialError:void 0},X=O`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
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
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by project_count desc`;i.project_summary_data&&(i.project_summary_data instanceof Error?Z.initialError=i.project_summary_data:Z.initialData=i.project_summary_data,i.project_summary_columns&&(Z.knownColumns=i.project_summary_columns));let ie,Rt=!1;const ye=Le.createReactive({callback:w=>{r(9,ie=w)},execFn:S},{id:"project_summary",...Z});ye(Je,{noResolve:X,...Z}),globalThis[Symbol.for("project_summary")]={get value(){return ie}};let De={initialData:void 0,initialError:void 0},Ee=O`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by total_variants desc`,ne=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by total_variants desc`;i.catalog_summary_data&&(i.catalog_summary_data instanceof Error?De.initialError=i.catalog_summary_data:De.initialData=i.catalog_summary_data,i.catalog_summary_columns&&(De.knownColumns=i.catalog_summary_columns));let Se,Wt=!1;const Ft=Le.createReactive({callback:w=>{r(10,Se=w)},execFn:S},{id:"catalog_summary",...De});Ft(ne,{noResolve:Ee,...De}),globalThis[Symbol.for("catalog_summary")]={get value(){return Se}};let K="ytd";on(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),t){const w=e.url.searchParams.get("time_filter");r(0,t.time_filter=w||"ytd",t)}});const ea=()=>Qa(ia(`/?time_filter=${K}`)),He=()=>Qa(ia(`/sales?time_filter=${K}`)),ta=()=>Qa(ia(`/operations?time_filter=${K}`)),aa=(w,Ie)=>{const we=new Date(w),zt=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][we.getUTCMonth()],Xe=we.getUTCFullYear();return we.getUTCMonth()===0||Ie===0?zt+`
`+Xe:zt};return s.$$set=w=>{"data"in w&&r(12,o=w.data)},s.$$.update=()=>{if(s.$$.dirty[0]&4096&&r(13,{data:i={},customFormattingSettings:u,__db:j}=o,i),s.$$.dirty[0]&8192&&An.set(Object.keys(i).length>0),s.$$.dirty[1]&8388608&&e.params,s.$$.dirty[0]&1&&r(15,U=O`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`),s.$$.dirty[0]&1&&r(16,Y=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`),s.$$.dirty[0]&245760&&(U||!W?U||(oe(Y,{noResolve:U,...L}),r(17,W=!0)):oe(Y,{noResolve:U})),s.$$.dirty[0]&1&&r(19,be=O`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
        when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-01'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`),s.$$.dirty[0]&1&&r(20,ee=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
        when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
        when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-01'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date`),s.$$.dirty[0]&3932160&&(be||!Ct?be||(de(ee,{noResolve:be,...Pe}),r(21,Ct=!0)):de(ee,{noResolve:be})),s.$$.dirty[0]&1&&r(23,_e=O`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-01'::date`),s.$$.dirty[0]&1&&r(24,te=`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-01'::date`),s.$$.dirty[0]&62914560&&(_e||!st?_e||(ce(te,{noResolve:_e,...Ve}),r(25,st=!0)):ce(te,{noResolve:_e})),s.$$.dirty[0]&1&&r(27,ue=O`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`),s.$$.dirty[0]&1&&r(28,H=`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`),s.$$.dirty[0]&1006632960&&(ue||!se?ue||(ke(H,{noResolve:ue,...Me}),r(29,se=!0)):ke(H,{noResolve:ue})),s.$$.dirty[0]&1&&r(31,qe=O`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&1&&r(32,me=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(qe||!jt?qe||(pe(me,{noResolve:qe,...Be}),r(33,jt=!0)):pe(me,{noResolve:qe})),s.$$.dirty[0]&1&&r(35,G=O`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&1&&r(36,Ge=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[1]&120&&(G||!he?G||(Ne(Ge,{noResolve:G,...xe}),r(37,he=!0)):Ne(Ge,{noResolve:G})),s.$$.dirty[0]&1&&r(39,Ce=O`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-01'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[0]&1&&r(40,ae=`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-01'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[1]&1920&&(Ce||!ge?Ce||(St(ae,{noResolve:Ce,...Oe}),r(41,ge=!0)):St(ae,{noResolve:Ce})),s.$$.dirty[0]&1&&r(43,J=O`select
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
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date
group by all
order by deal_stage asc`),s.$$.dirty[0]&1&&r(44,z=`select
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
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date
group by all
order by deal_stage asc`),s.$$.dirty[1]&30720&&(J||!Yt?J||(It(z,{noResolve:J,...je}),r(45,Yt=!0)):It(z,{noResolve:J})),s.$$.dirty[0]&1&&r(47,X=O`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by project_count desc`),s.$$.dirty[0]&1&&r(48,Je=`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by project_count desc`),s.$$.dirty[1]&491520&&(X||!Rt?X||(ye(Je,{noResolve:X,...Z}),r(49,Rt=!0)):ye(Je,{noResolve:X})),s.$$.dirty[0]&1&&r(51,Ee=O`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by total_variants desc`),s.$$.dirty[0]&1&&r(52,ne=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${t.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${t.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${t.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by total_variants desc`),s.$$.dirty[1]&7864320&&(Ee||!Wt?Ee||(Ft(ne,{noResolve:Ee,...De}),r(53,Wt=!0)):Ft(ne,{noResolve:Ee})),s.$$.dirty[0]&1&&r(11,K=(t==null?void 0:t.time_filter)||"ytd"),s.$$.dirty[0]&1&&t&&t.time_filter)try{const w=new URL(window.location.href);w.searchParams.get("time_filter")!==t.time_filter&&(w.searchParams.set("time_filter",t.time_filter),window.history.replaceState(null,"",w.pathname+w.search))}catch{}},[t,Ae,Kt,Qt,re,fe,Dt,Et,ve,ie,Se,K,o,i,L,U,Y,W,Pe,be,ee,Ct,Ve,_e,te,st,Me,ue,H,se,Be,qe,me,jt,xe,G,Ge,he,Oe,Ce,ae,ge,je,J,z,Yt,Z,X,Je,Rt,De,Ee,ne,Wt,e,ea,He,ta,aa]}class lr extends Dn{constructor(n){super(),En(this,n,zn,Kn,$n,{data:12},null,[-1,-1,-1])}}export{lr as component};
