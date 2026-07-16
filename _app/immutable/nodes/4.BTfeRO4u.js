import{s as Sn,d as c,z as An,w as Pn,i as $,e as d,l as an,b as f,A as _e,k as g,B as Mn,h as p,r as Va,j as b,q as G,x as He,n as v,m as h,y as Ue,t as yn,C as Vn,D as Bn,E as Nn,F as wn,v as Dt}from"../chunks/scheduler.BWqtgNY2.js";import{S as On,i as Hn,d as k,t as y,a as m,c as Ie,m as x,b as q,e as C,g as Re}from"../chunks/index.DlzBi47Z.js";import{V as Ct,B as nn,g as Un,Q as Le,a as Ln,b as Aa}from"../chunks/Value.B3LdyhsB.js";import{a as Pa,D as Jn,e as Gn,s as Yn,Q as Oe,p as Xn,b as rn,c as ma,r as $n,d as Kn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DamxpeUC.js";import{w as Qn,g as sn}from"../chunks/entry.DgDqja2i.js";import{h as O,p as Wn}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as zn}from"../chunks/stores.CR9qUyZ6.js";const{document:et}=Un;function Zn(s){let n,r=E.title+"",e;return{c(){n=h("h1"),e=Ue(r),this.h()},l(l){n=p(l,"H1",{class:!0});var i=b(n);e=He(i,r),i.forEach(c),this.h()},h(){f(n,"class","title")},m(l,i){$(l,n,i),d(n,e)},p:Dt,d(l){l&&c(n)}}}function er(s){return{c(){this.h()},l(n){this.h()},h(){et.title="Evidence"},m:Dt,p:Dt,d:Dt}}function tr(s){let n,r,e,l,i;return et.title=n=E.title,{c(){r=v(),e=h("meta"),l=v(),i=h("meta"),this.h()},l(o){r=g(o),e=p(o,"META",{property:!0,content:!0}),l=g(o),i=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;f(e,"property","og:title"),f(e,"content",((o=E.og)==null?void 0:o.title)??E.title),f(i,"name","twitter:title"),f(i,"content",((u=E.og)==null?void 0:u.title)??E.title)},m(o,u){$(o,r,u),$(o,e,u),$(o,l,u),$(o,i,u)},p(o,u){u&0&&n!==(n=E.title)&&(et.title=n)},d(o){o&&(c(r),c(e),c(l),c(i))}}}function ar(s){var i,o;let n,r,e=(E.description||((i=E.og)==null?void 0:i.description))&&nr(),l=((o=E.og)==null?void 0:o.image)&&rr();return{c(){e&&e.c(),n=v(),l&&l.c(),r=Va()},l(u){e&&e.l(u),n=g(u),l&&l.l(u),r=Va()},m(u,D){e&&e.m(u,D),$(u,n,D),l&&l.m(u,D),$(u,r,D)},p(u,D){var a,j;(E.description||(a=E.og)!=null&&a.description)&&e.p(u,D),(j=E.og)!=null&&j.image&&l.p(u,D)},d(u){u&&(c(n),c(r)),e&&e.d(u),l&&l.d(u)}}}function nr(s){let n,r,e,l,i;return{c(){n=h("meta"),r=v(),e=h("meta"),l=v(),i=h("meta"),this.h()},l(o){n=p(o,"META",{name:!0,content:!0}),r=g(o),e=p(o,"META",{property:!0,content:!0}),l=g(o),i=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u,D;f(n,"name","description"),f(n,"content",E.description??((o=E.og)==null?void 0:o.description)),f(e,"property","og:description"),f(e,"content",((u=E.og)==null?void 0:u.description)??E.description),f(i,"name","twitter:description"),f(i,"content",((D=E.og)==null?void 0:D.description)??E.description)},m(o,u){$(o,n,u),$(o,r,u),$(o,e,u),$(o,l,u),$(o,i,u)},p:Dt,d(o){o&&(c(n),c(r),c(e),c(l),c(i))}}}function rr(s){let n,r,e;return{c(){n=h("meta"),r=v(),e=h("meta"),this.h()},l(l){n=p(l,"META",{property:!0,content:!0}),r=g(l),e=p(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i;f(n,"property","og:image"),f(n,"content",ma((l=E.og)==null?void 0:l.image)),f(e,"name","twitter:image"),f(e,"content",ma((i=E.og)==null?void 0:i.image))},m(l,i){$(l,n,i),$(l,r,i),$(l,e,i)},p:Dt,d(l){l&&(c(n),c(r),c(e))}}}function bn(s){let n,r;return n=new Le({props:{queryID:"delivery_lag",queryResult:s[2]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&4&&(i.queryResult=e[2]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function kn(s){let n,r;return n=new Le({props:{queryID:"pipeline_coverage",queryResult:s[3]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&8&&(i.queryResult=e[3]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function xn(s){let n,r;return n=new Le({props:{queryID:"kpi_revenue",queryResult:s[4]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&16&&(i.queryResult=e[4]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function qn(s){let n,r;return n=new Le({props:{queryID:"kpi_pipeline",queryResult:s[5]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&32&&(i.queryResult=e[5]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function Cn(s){let n,r;return n=new Le({props:{queryID:"kpi_projects",queryResult:s[6]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&64&&(i.queryResult=e[6]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function Dn(s){let n,r;return n=new Le({props:{queryID:"kpi_products",queryResult:s[7]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&128&&(i.queryResult=e[7]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function En(s){let n,r;return n=new Le({props:{queryID:"revenue_bookings_billing",queryResult:s[8]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&256&&(i.queryResult=e[8]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function jn(s){let n,r;return n=new Le({props:{queryID:"pipeline_funnel",queryResult:s[9]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&512&&(i.queryResult=e[9]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function Fn(s){let n,r;return n=new Le({props:{queryID:"project_summary",queryResult:s[10]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&1024&&(i.queryResult=e[10]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function In(s){let n,r;return n=new Le({props:{queryID:"catalog_summary",queryResult:s[11]}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&2048&&(i.queryResult=e[11]),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function sr(s){let n,r,e,l,i,o,u,D;return n=new Aa({props:{valueLabel:"MTD",value:"mtd",default:s[1]==="mtd"}}),e=new Aa({props:{valueLabel:"QTD",value:"qtd",default:s[1]==="qtd"}}),i=new Aa({props:{valueLabel:"YTD",value:"ytd",default:s[1]==="ytd"}}),u=new Aa({props:{valueLabel:"All Time",value:"all",default:s[1]==="all"}}),{c(){C(n.$$.fragment),r=v(),C(e.$$.fragment),l=v(),C(i.$$.fragment),o=v(),C(u.$$.fragment)},l(a){q(n.$$.fragment,a),r=g(a),q(e.$$.fragment,a),l=g(a),q(i.$$.fragment,a),o=g(a),q(u.$$.fragment,a)},m(a,j){x(n,a,j),$(a,r,j),x(e,a,j),$(a,l,j),x(i,a,j),$(a,o,j),x(u,a,j),D=!0},p(a,j){const F={};j[0]&2&&(F.default=a[1]==="mtd"),n.$set(F);const H={};j[0]&2&&(H.default=a[1]==="qtd"),e.$set(H);const U={};j[0]&2&&(U.default=a[1]==="ytd"),i.$set(U);const z={};j[0]&2&&(z.default=a[1]==="all"),u.$set(z)},i(a){D||(m(n.$$.fragment,a),m(e.$$.fragment,a),m(i.$$.fragment,a),m(u.$$.fragment,a),D=!0)},o(a){y(n.$$.fragment,a),y(e.$$.fragment,a),y(i.$$.fragment,a),y(u.$$.fragment,a),D=!1},d(a){a&&(c(r),c(l),c(o)),k(n,a),k(e,a),k(i,a),k(u,a)}}}function Rn(s){let n,r;return n=new Ln({props:{name:"time_filter",defaultValue:s[1],$$slots:{default:[sr]},$$scope:{ctx:s}}}),{c(){C(n.$$.fragment)},l(e){q(n.$$.fragment,e)},m(e,l){x(n,e,l),r=!0},p(e,l){const i={};l[0]&2&&(i.defaultValue=e[1]),l[0]&2|l[2]&65536&&(i.$$scope={dirty:l,ctx:e}),n.$set(i)},i(e){r||(m(n.$$.fragment,e),r=!0)},o(e){y(n.$$.fragment,e),r=!1},d(e){k(n,e)}}}function or(s){let n,r,e,l,i,o;return n=new rn({props:{id:"vendor",label:"Vendor Brand"}}),e=new rn({props:{id:"total_variants",label:"Variants Count",align:"center"}}),i=new rn({props:{id:"average_price",label:"Average Price",align:"right",fmt:"usd"}}),{c(){C(n.$$.fragment),r=v(),C(e.$$.fragment),l=v(),C(i.$$.fragment)},l(u){q(n.$$.fragment,u),r=g(u),q(e.$$.fragment,u),l=g(u),q(i.$$.fragment,u)},m(u,D){x(n,u,D),$(u,r,D),x(e,u,D),$(u,l,D),x(i,u,D),o=!0},p:Dt,i(u){o||(m(n.$$.fragment,u),m(e.$$.fragment,u),m(i.$$.fragment,u),o=!0)},o(u){y(n.$$.fragment,u),y(e.$$.fragment,u),y(i.$$.fragment,u),o=!1},d(u){u&&(c(r),c(l)),k(n,u),k(e,u),k(i,u)}}}function lr(s){let n,r,e,l,i,o,u,D,a,j,F,H,U,z,Se,Z,ce,Te="Overview Cockpit",be,ae,aa="Sales & Win-Loss",Et,ue,Ae="Operations & Vendors",me,ee,ke,na="Business Performance Cockpit",jt,Y,ne,Pe,Ft,xe,ra="Date snapshotted at June 2026",fe,X,tt=s[1],at,L,oe,J,te,nt="💰 Total Billed Revenue",It,Me,pe,qe,K,Je,he,Rt,St,Q,re,rt="Actual invoices billed via Xero",Tt,ge,At,W,Ce,Ge,ve,le,ye,Ve="📈 Active Pipeline Value",De,ie,we,Pt,de,Be,Ee,oa,la,Ne,Ye,w="Open opportunities in HubSpot CRM",Mt,se,fa,je,ia,Ba,st,Vt,ot,on="🏗️ Active Projects",Na,Bt,lt,Oa,it,ln="Ongoing jobs managed in Procore",Ha,dt,Nt,_t,dn="🛍️ Shopify Products",Ua,Ot,ct,La,ut,_n="Unique items in active catalog",pa,Xe,mt,ft,Ht,cn="Monthly Cash Flow Billed vs. Booked Contracts",Ja,Ut,Ga,pt,Ya,ht,gt,Lt,un="Sales Pipeline Opportunity Value",Xa,Jt,Ka,vt,ha,Ke,yt,wt,Gt,mn="Procore Project Portfolio Status",Qa,Yt,Wa,$t,za,bt,kt,Xt,fn="Shopify Product Catalog Summary",Za,Kt,en,xt,da,tn,pn,Qe=typeof E<"u"&&E.title&&E.hide_title!==!0&&Zn();function Tn(t,_){return typeof E<"u"&&E.title?tr:er}let _a=Tn()(s),We=typeof E=="object"&&ar(),I=s[2]&&bn(s),R=s[3]&&kn(s),S=s[4]&&xn(s),T=s[5]&&qn(s),A=s[6]&&Cn(s),P=s[7]&&Dn(s),M=s[8]&&En(s),V=s[9]&&jn(s),B=s[10]&&Fn(s),N=s[11]&&In(s),$e=Rn(s);return pe=new Ct({props:{data:s[4],column:"total_revenue",fmt:"usd"}}),he=new Ct({props:{data:s[4],column:"target_progress",fmt:"pct0"}}),W=new Ct({props:{data:s[2],column:"avg_lag_days",fmt:"num0"}}),we=new Ct({props:{data:s[5],column:"pipeline_value",fmt:"usd"}}),Ee=new Ct({props:{data:s[5],column:"target_progress",fmt:"pct0"}}),je=new Ct({props:{data:s[3],column:"coverage_ratio",fmt:"0.0"}}),lt=new Ct({props:{data:s[6],column:"total_projects"}}),ct=new Ct({props:{data:s[7],column:"total_products"}}),Ut=new Pa({props:{description:"Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed."}}),pt=new nn({props:{data:s[8],x:"month_date",y:"revenue",series:"source_system",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",stackTotalLabel:s[0].time_filter!=="all"&&s[0].time_filter!=="ytd",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Billed Cash Flow (Xero)","Booked Contracts (HubSpot)"],height:175,echartsOptions:{grid:{top:25,bottom:35,left:40,right:15},xAxis:{type:"time",axisLabel:{formatter:s[59]}},yAxis:{splitNumber:3,axisLabel:{formatter:_r}}}}}),Jt=new Pa({props:{description:"Displays the total value of all currently open opportunities in HubSpot CRM by stage, excluding closed won and closed lost deals."}}),vt=new nn({props:{data:s[9],x:"deal_stage",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],sort:"false",height:175,echartsOptions:{grid:{top:25,bottom:10,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:cr},offset:10},series:[{itemStyle:{color:ur}}]}}}),Yt=new Pa({props:{description:"Tracks the count of active versus completed projects for each client corporate parent group managed in Procore."}}),$t=new nn({props:{data:s[10],x:"company_name",y:"project_count",series:"project_status",swapXY:"true",fillOpacity:"0.9",labels:!0,labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Active","Completed"],height:175,echartsOptions:{xAxis:{minInterval:1,splitNumber:3},grid:{top:15,bottom:25,left:40,right:30}}}}),Kt=new Pa({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),xt=new Jn({props:{data:s[11],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[or]},$$scope:{ctx:s}}}),{c(){Qe&&Qe.c(),n=v(),_a.c(),r=h("meta"),e=h("meta"),We&&We.c(),l=Va(),i=v(),I&&I.c(),o=v(),R&&R.c(),u=v(),S&&S.c(),D=v(),T&&T.c(),a=v(),A&&A.c(),j=v(),P&&P.c(),F=v(),M&&M.c(),H=v(),V&&V.c(),U=v(),B&&B.c(),z=v(),N&&N.c(),Se=v(),Z=h("div"),ce=h("button"),ce.textContent=Te,be=v(),ae=h("button"),ae.textContent=aa,Et=v(),ue=h("button"),ue.textContent=Ae,me=v(),ee=h("div"),ke=h("div"),ke.textContent=na,jt=v(),Y=h("div"),ne=h("div"),Pe=Ue(s[12]),Ft=v(),xe=h("div"),xe.textContent=ra,fe=v(),X=h("div"),$e.c(),at=v(),L=h("div"),oe=h("div"),J=h("div"),te=h("span"),te.textContent=nt,It=v(),Me=h("h2"),C(pe.$$.fragment),qe=v(),K=h("div"),Je=Ue("🎯 "),C(he.$$.fragment),Rt=Ue(" of YTD Target ($1.0M)"),St=v(),Q=h("div"),re=h("span"),re.textContent=rt,Tt=v(),ge=h("span"),At=Ue("⚡ "),C(W.$$.fragment),Ce=Ue("d Lag"),Ge=v(),ve=h("div"),le=h("div"),ye=h("span"),ye.textContent=Ve,De=v(),ie=h("h2"),C(we.$$.fragment),Pt=v(),de=h("div"),Be=Ue("🎯 "),C(Ee.$$.fragment),oa=Ue(" of target ($750K)"),la=v(),Ne=h("div"),Ye=h("span"),Ye.textContent=w,Mt=v(),se=h("span"),fa=Ue("📊 "),C(je.$$.fragment),ia=Ue("x Cover"),Ba=v(),st=h("div"),Vt=h("div"),ot=h("span"),ot.textContent=on,Na=v(),Bt=h("h2"),C(lt.$$.fragment),Oa=v(),it=h("div"),it.textContent=ln,Ha=v(),dt=h("div"),Nt=h("div"),_t=h("span"),_t.textContent=dn,Ua=v(),Ot=h("h2"),C(ct.$$.fragment),La=v(),ut=h("div"),ut.textContent=_n,pa=v(),Xe=h("div"),mt=h("div"),ft=h("div"),Ht=h("span"),Ht.textContent=cn,Ja=v(),C(Ut.$$.fragment),Ga=v(),C(pt.$$.fragment),Ya=v(),ht=h("div"),gt=h("div"),Lt=h("span"),Lt.textContent=un,Xa=v(),C(Jt.$$.fragment),Ka=v(),C(vt.$$.fragment),ha=v(),Ke=h("div"),yt=h("div"),wt=h("div"),Gt=h("span"),Gt.textContent=mn,Qa=v(),C(Yt.$$.fragment),Wa=v(),C($t.$$.fragment),za=v(),bt=h("div"),kt=h("div"),Xt=h("span"),Xt.textContent=fn,Za=v(),C(Kt.$$.fragment),en=v(),C(xt.$$.fragment),this.h()},l(t){Qe&&Qe.l(t),n=g(t);const _=Mn("svelte-2igo1p",et.head);_a.l(_),r=p(_,"META",{name:!0,content:!0}),e=p(_,"META",{name:!0,content:!0}),We&&We.l(_),l=Va(),_.forEach(c),i=g(t),I&&I.l(t),o=g(t),R&&R.l(t),u=g(t),S&&S.l(t),D=g(t),T&&T.l(t),a=g(t),A&&A.l(t),j=g(t),P&&P.l(t),F=g(t),M&&M.l(t),H=g(t),V&&V.l(t),U=g(t),B&&B.l(t),z=g(t),N&&N.l(t),Se=g(t),Z=p(t,"DIV",{class:!0});var ze=b(Z);ce=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),G(ce)!=="svelte-1n5lix1"&&(ce.textContent=Te),be=g(ze),ae=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),G(ae)!=="svelte-1l9tmjn"&&(ae.textContent=aa),Et=g(ze),ue=p(ze,"BUTTON",{class:!0,"data-svelte-h":!0}),G(ue)!=="svelte-19h1sxa"&&(ue.textContent=Ae),ze.forEach(c),me=g(t),ee=p(t,"DIV",{class:!0});var Qt=b(ee);ke=p(Qt,"DIV",{class:!0,"data-svelte-h":!0}),G(ke)!=="svelte-16u20cg"&&(ke.textContent=na),jt=g(Qt),Y=p(Qt,"DIV",{class:!0});var Wt=b(Y);ne=p(Wt,"DIV",{class:!0});var ca=b(ne);Pe=He(ca,s[12]),ca.forEach(c),Ft=g(Wt),xe=p(Wt,"DIV",{class:!0,"data-svelte-h":!0}),G(xe)!=="svelte-14ez07j"&&(xe.textContent=ra),Wt.forEach(c),Qt.forEach(c),fe=g(t),X=p(t,"DIV",{class:!0});var ua=b(X);$e.l(ua),ua.forEach(c),at=g(t),L=p(t,"DIV",{class:!0});var Fe=b(L);oe=p(Fe,"DIV",{style:!0,class:!0});var zt=b(oe);J=p(zt,"DIV",{});var Ze=b(J);te=p(Ze,"SPAN",{class:!0,"data-svelte-h":!0}),G(te)!=="svelte-e3ust3"&&(te.textContent=nt),It=g(Ze),Me=p(Ze,"H2",{class:!0});var Zt=b(Me);q(pe.$$.fragment,Zt),Zt.forEach(c),qe=g(Ze),K=p(Ze,"DIV",{class:!0});var ea=b(K);Je=He(ea,"🎯 "),q(he.$$.fragment,ea),Rt=He(ea," of YTD Target ($1.0M)"),ea.forEach(c),Ze.forEach(c),St=g(zt),Q=p(zt,"DIV",{class:!0});var ta=b(Q);re=p(ta,"SPAN",{"data-svelte-h":!0}),G(re)!=="svelte-xdszx8"&&(re.textContent=rt),Tt=g(ta),ge=p(ta,"SPAN",{class:!0});var qt=b(ge);At=He(qt,"⚡ "),q(W.$$.fragment,qt),Ce=He(qt,"d Lag"),qt.forEach(c),ta.forEach(c),zt.forEach(c),Ge=g(Fe),ve=p(Fe,"DIV",{class:!0});var ga=b(ve);le=p(ga,"DIV",{});var sa=b(le);ye=p(sa,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),G(ye)!=="svelte-1uurc49"&&(ye.textContent=Ve),De=g(sa),ie=p(sa,"H2",{style:!0,class:!0});var hn=b(ie);q(we.$$.fragment,hn),hn.forEach(c),Pt=g(sa),de=p(sa,"DIV",{style:!0,class:!0});var va=b(de);Be=He(va,"🎯 "),q(Ee.$$.fragment,va),oa=He(va," of target ($750K)"),va.forEach(c),sa.forEach(c),la=g(ga),Ne=p(ga,"DIV",{class:!0});var ya=b(Ne);Ye=p(ya,"SPAN",{style:!0,"data-svelte-h":!0}),G(Ye)!=="svelte-ifvc0m"&&(Ye.textContent=w),Mt=g(ya),se=p(ya,"SPAN",{style:!0,class:!0});var wa=b(se);fa=He(wa,"📊 "),q(je.$$.fragment,wa),ia=He(wa,"x Cover"),wa.forEach(c),ya.forEach(c),ga.forEach(c),Ba=g(Fe),st=p(Fe,"DIV",{class:!0});var $a=b(st);Vt=p($a,"DIV",{});var ba=b(Vt);ot=p(ba,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),G(ot)!=="svelte-19u2tfr"&&(ot.textContent=on),Na=g(ba),Bt=p(ba,"H2",{style:!0,class:!0});var gn=b(Bt);q(lt.$$.fragment,gn),gn.forEach(c),ba.forEach(c),Oa=g($a),it=p($a,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),G(it)!=="svelte-tvomuv"&&(it.textContent=ln),$a.forEach(c),Ha=g(Fe),dt=p(Fe,"DIV",{class:!0});var ka=b(dt);Nt=p(ka,"DIV",{});var xa=b(Nt);_t=p(xa,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),G(_t)!=="svelte-17fuh5a"&&(_t.textContent=dn),Ua=g(xa),Ot=p(xa,"H2",{style:!0,class:!0});var vn=b(Ot);q(ct.$$.fragment,vn),vn.forEach(c),xa.forEach(c),La=g(ka),ut=p(ka,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),G(ut)!=="svelte-9stalx"&&(ut.textContent=_n),ka.forEach(c),Fe.forEach(c),pa=g(t),Xe=p(t,"DIV",{class:!0});var qa=b(Xe);mt=p(qa,"DIV",{class:!0});var Ca=b(mt);ft=p(Ca,"DIV",{class:!0});var Da=b(ft);Ht=p(Da,"SPAN",{class:!0,"data-svelte-h":!0}),G(Ht)!=="svelte-3eui4q"&&(Ht.textContent=cn),Ja=g(Da),q(Ut.$$.fragment,Da),Da.forEach(c),Ga=g(Ca),q(pt.$$.fragment,Ca),Ca.forEach(c),Ya=g(qa),ht=p(qa,"DIV",{class:!0});var Ea=b(ht);gt=p(Ea,"DIV",{class:!0});var ja=b(gt);Lt=p(ja,"SPAN",{class:!0,"data-svelte-h":!0}),G(Lt)!=="svelte-4wul4y"&&(Lt.textContent=un),Xa=g(ja),q(Jt.$$.fragment,ja),ja.forEach(c),Ka=g(Ea),q(vt.$$.fragment,Ea),Ea.forEach(c),qa.forEach(c),ha=g(t),Ke=p(t,"DIV",{class:!0});var Fa=b(Ke);yt=p(Fa,"DIV",{class:!0});var Ia=b(yt);wt=p(Ia,"DIV",{class:!0});var Ra=b(wt);Gt=p(Ra,"SPAN",{class:!0,"data-svelte-h":!0}),G(Gt)!=="svelte-b68vp"&&(Gt.textContent=mn),Qa=g(Ra),q(Yt.$$.fragment,Ra),Ra.forEach(c),Wa=g(Ia),q($t.$$.fragment,Ia),Ia.forEach(c),za=g(Fa),bt=p(Fa,"DIV",{class:!0});var Sa=b(bt);kt=p(Sa,"DIV",{class:!0});var Ta=b(kt);Xt=p(Ta,"SPAN",{class:!0,"data-svelte-h":!0}),G(Xt)!=="svelte-kdhzry"&&(Xt.textContent=fn),Za=g(Ta),q(Kt.$$.fragment,Ta),Ta.forEach(c),en=g(Sa),q(xt.$$.fragment,Sa),Sa.forEach(c),Fa.forEach(c),this.h()},h(){f(r,"name","twitter:card"),f(r,"content","summary_large_image"),f(e,"name","twitter:site"),f(e,"content","@evidence_dev"),f(ce,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f(ae,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(ue,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(Z,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(ke,"class","text-base font-extrabold text-[#264773]"),f(ne,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded"),f(xe,"class","text-[8px] text-gray-400 font-medium mt-0.5"),f(Y,"class","flex flex-col items-end"),f(ee,"class","flex justify-between items-center mb-1.5 mt-0.5"),f(X,"class","mb-2 flex justify-start"),f(te,"class","text-[9px] font-bold text-white/80 uppercase tracking-wider"),f(Me,"class","text-xl font-extrabold mt-0.5 text-white"),f(K,"class","text-[9px] font-semibold mt-0.5 text-white"),f(ge,"class","font-extrabold bg-white/20 px-1.5 py-0.5 rounded"),f(Q,"class","flex justify-between items-center text-[9px] text-white/80 mt-0.5 border-t border-white/20 pt-1"),_e(oe,"background-color","#1D5F60"),f(oe,"class","rounded-xl shadow-sm py-3 px-3.5 flex flex-col justify-between text-white h-[120px]"),_e(ye,"color","#7B8DA6"),f(ye,"class","text-[9px] font-bold uppercase tracking-wider"),_e(ie,"color","#000000"),f(ie,"class","text-xl font-extrabold mt-0.5"),_e(de,"color","#264773"),f(de,"class","text-[9px] font-semibold mt-0.5"),_e(Ye,"color","#7B8DA6"),_e(se,"background-color","rgba(38, 71, 115, 0.1)"),_e(se,"color","#264773"),f(se,"class","font-extrabold px-1.5 py-0.5 rounded"),f(Ne,"class","flex justify-between items-center text-[9px] mt-0.5 border-t border-gray-100 pt-1"),f(ve,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),_e(ot,"color","#7B8DA6"),f(ot,"class","text-[9px] font-bold uppercase tracking-wider"),_e(Bt,"color","#000000"),f(Bt,"class","text-xl font-extrabold mt-0.5"),_e(it,"color","#7B8DA6"),f(it,"class","text-[9px] mt-0.5"),f(st,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),_e(_t,"color","#7B8DA6"),f(_t,"class","text-[9px] font-bold uppercase tracking-wider"),_e(Ot,"color","#000000"),f(Ot,"class","text-xl font-extrabold mt-0.5"),_e(ut,"color","#7B8DA6"),f(ut,"class","text-[9px] mt-0.5"),f(dt,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(L,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(Ht,"class","font-bold text-gray-700 text-xs"),f(ft,"class","flex items-center gap-1.5 mb-1"),f(mt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Lt,"class","font-bold text-gray-700 text-xs"),f(gt,"class","flex items-center gap-1.5 mb-1"),f(ht,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Xe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5"),f(Gt,"class","font-bold text-gray-700 text-xs"),f(wt,"class","flex items-center gap-1.5 mb-1.5"),f(yt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Xt,"class","font-bold text-gray-700 text-xs"),f(kt,"class","flex items-center gap-1.5 mb-1.5"),f(bt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ke,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(t,_){Qe&&Qe.m(t,_),$(t,n,_),_a.m(et.head,null),d(et.head,r),d(et.head,e),We&&We.m(et.head,null),d(et.head,l),$(t,i,_),I&&I.m(t,_),$(t,o,_),R&&R.m(t,_),$(t,u,_),S&&S.m(t,_),$(t,D,_),T&&T.m(t,_),$(t,a,_),A&&A.m(t,_),$(t,j,_),P&&P.m(t,_),$(t,F,_),M&&M.m(t,_),$(t,H,_),V&&V.m(t,_),$(t,U,_),B&&B.m(t,_),$(t,z,_),N&&N.m(t,_),$(t,Se,_),$(t,Z,_),d(Z,ce),d(Z,be),d(Z,ae),d(Z,Et),d(Z,ue),$(t,me,_),$(t,ee,_),d(ee,ke),d(ee,jt),d(ee,Y),d(Y,ne),d(ne,Pe),d(Y,Ft),d(Y,xe),$(t,fe,_),$(t,X,_),$e.m(X,null),$(t,at,_),$(t,L,_),d(L,oe),d(oe,J),d(J,te),d(J,It),d(J,Me),x(pe,Me,null),d(J,qe),d(J,K),d(K,Je),x(he,K,null),d(K,Rt),d(oe,St),d(oe,Q),d(Q,re),d(Q,Tt),d(Q,ge),d(ge,At),x(W,ge,null),d(ge,Ce),d(L,Ge),d(L,ve),d(ve,le),d(le,ye),d(le,De),d(le,ie),x(we,ie,null),d(le,Pt),d(le,de),d(de,Be),x(Ee,de,null),d(de,oa),d(ve,la),d(ve,Ne),d(Ne,Ye),d(Ne,Mt),d(Ne,se),d(se,fa),x(je,se,null),d(se,ia),d(L,Ba),d(L,st),d(st,Vt),d(Vt,ot),d(Vt,Na),d(Vt,Bt),x(lt,Bt,null),d(st,Oa),d(st,it),d(L,Ha),d(L,dt),d(dt,Nt),d(Nt,_t),d(Nt,Ua),d(Nt,Ot),x(ct,Ot,null),d(dt,La),d(dt,ut),$(t,pa,_),$(t,Xe,_),d(Xe,mt),d(mt,ft),d(ft,Ht),d(ft,Ja),x(Ut,ft,null),d(mt,Ga),x(pt,mt,null),d(Xe,Ya),d(Xe,ht),d(ht,gt),d(gt,Lt),d(gt,Xa),x(Jt,gt,null),d(ht,Ka),x(vt,ht,null),$(t,ha,_),$(t,Ke,_),d(Ke,yt),d(yt,wt),d(wt,Gt),d(wt,Qa),x(Yt,wt,null),d(yt,Wa),x($t,yt,null),d(Ke,za),d(Ke,bt),d(bt,kt),d(kt,Xt),d(kt,Za),x(Kt,kt,null),d(bt,en),x(xt,bt,null),da=!0,tn||(pn=[an(ce,"click",s[56]),an(ae,"click",s[57]),an(ue,"click",s[58])],tn=!0)},p(t,_){typeof E<"u"&&E.title&&E.hide_title!==!0&&Qe.p(t,_),_a.p(t,_),typeof E=="object"&&We.p(t,_),t[2]?I?(I.p(t,_),_[0]&4&&m(I,1)):(I=bn(t),I.c(),m(I,1),I.m(o.parentNode,o)):I&&(Re(),y(I,1,1,()=>{I=null}),Ie()),t[3]?R?(R.p(t,_),_[0]&8&&m(R,1)):(R=kn(t),R.c(),m(R,1),R.m(u.parentNode,u)):R&&(Re(),y(R,1,1,()=>{R=null}),Ie()),t[4]?S?(S.p(t,_),_[0]&16&&m(S,1)):(S=xn(t),S.c(),m(S,1),S.m(D.parentNode,D)):S&&(Re(),y(S,1,1,()=>{S=null}),Ie()),t[5]?T?(T.p(t,_),_[0]&32&&m(T,1)):(T=qn(t),T.c(),m(T,1),T.m(a.parentNode,a)):T&&(Re(),y(T,1,1,()=>{T=null}),Ie()),t[6]?A?(A.p(t,_),_[0]&64&&m(A,1)):(A=Cn(t),A.c(),m(A,1),A.m(j.parentNode,j)):A&&(Re(),y(A,1,1,()=>{A=null}),Ie()),t[7]?P?(P.p(t,_),_[0]&128&&m(P,1)):(P=Dn(t),P.c(),m(P,1),P.m(F.parentNode,F)):P&&(Re(),y(P,1,1,()=>{P=null}),Ie()),t[8]?M?(M.p(t,_),_[0]&256&&m(M,1)):(M=En(t),M.c(),m(M,1),M.m(H.parentNode,H)):M&&(Re(),y(M,1,1,()=>{M=null}),Ie()),t[9]?V?(V.p(t,_),_[0]&512&&m(V,1)):(V=jn(t),V.c(),m(V,1),V.m(U.parentNode,U)):V&&(Re(),y(V,1,1,()=>{V=null}),Ie()),t[10]?B?(B.p(t,_),_[0]&1024&&m(B,1)):(B=Fn(t),B.c(),m(B,1),B.m(z.parentNode,z)):B&&(Re(),y(B,1,1,()=>{B=null}),Ie()),t[11]?N?(N.p(t,_),_[0]&2048&&m(N,1)):(N=In(t),N.c(),m(N,1),N.m(Se.parentNode,Se)):N&&(Re(),y(N,1,1,()=>{N=null}),Ie()),(!da||_[0]&4096)&&Pn(Pe,t[12]),_[0]&2&&Sn(tt,tt=t[1])?(Re(),y($e,1,1,Dt),Ie(),$e=Rn(t),$e.c(),m($e,1),$e.m(X,null)):$e.p(t,_);const ze={};_[0]&16&&(ze.data=t[4]),pe.$set(ze);const Qt={};_[0]&16&&(Qt.data=t[4]),he.$set(Qt);const Wt={};_[0]&4&&(Wt.data=t[2]),W.$set(Wt);const ca={};_[0]&32&&(ca.data=t[5]),we.$set(ca);const ua={};_[0]&32&&(ua.data=t[5]),Ee.$set(ua);const Fe={};_[0]&8&&(Fe.data=t[3]),je.$set(Fe);const zt={};_[0]&64&&(zt.data=t[6]),lt.$set(zt);const Ze={};_[0]&128&&(Ze.data=t[7]),ct.$set(Ze);const Zt={};_[0]&256&&(Zt.data=t[8]),_[0]&1&&(Zt.labels=t[0].time_filter!=="all"&&t[0].time_filter!=="ytd"),_[0]&1&&(Zt.stackTotalLabel=t[0].time_filter!=="all"&&t[0].time_filter!=="ytd"),pt.$set(Zt);const ea={};_[0]&512&&(ea.data=t[9]),vt.$set(ea);const ta={};_[0]&1024&&(ta.data=t[10]),$t.$set(ta);const qt={};_[0]&2048&&(qt.data=t[11]),_[2]&65536&&(qt.$$scope={dirty:_,ctx:t}),xt.$set(qt)},i(t){da||(m(I),m(R),m(S),m(T),m(A),m(P),m(M),m(V),m(B),m(N),m($e),m(pe.$$.fragment,t),m(he.$$.fragment,t),m(W.$$.fragment,t),m(we.$$.fragment,t),m(Ee.$$.fragment,t),m(je.$$.fragment,t),m(lt.$$.fragment,t),m(ct.$$.fragment,t),m(Ut.$$.fragment,t),m(pt.$$.fragment,t),m(Jt.$$.fragment,t),m(vt.$$.fragment,t),m(Yt.$$.fragment,t),m($t.$$.fragment,t),m(Kt.$$.fragment,t),m(xt.$$.fragment,t),da=!0)},o(t){y(I),y(R),y(S),y(T),y(A),y(P),y(M),y(V),y(B),y(N),y($e),y(pe.$$.fragment,t),y(he.$$.fragment,t),y(W.$$.fragment,t),y(we.$$.fragment,t),y(Ee.$$.fragment,t),y(je.$$.fragment,t),y(lt.$$.fragment,t),y(ct.$$.fragment,t),y(Ut.$$.fragment,t),y(pt.$$.fragment,t),y(Jt.$$.fragment,t),y(vt.$$.fragment,t),y(Yt.$$.fragment,t),y($t.$$.fragment,t),y(Kt.$$.fragment,t),y(xt.$$.fragment,t),da=!1},d(t){t&&(c(n),c(i),c(o),c(u),c(D),c(a),c(j),c(F),c(H),c(U),c(z),c(Se),c(Z),c(me),c(ee),c(fe),c(X),c(at),c(L),c(pa),c(Xe),c(ha),c(Ke)),Qe&&Qe.d(t),_a.d(t),c(r),c(e),We&&We.d(t),c(l),I&&I.d(t),R&&R.d(t),S&&S.d(t),T&&T.d(t),A&&A.d(t),P&&P.d(t),M&&M.d(t),V&&V.d(t),B&&B.d(t),N&&N.d(t),$e.d(t),k(pe),k(he),k(W),k(we),k(Ee),k(je),k(lt),k(ct),k(Ut),k(pt),k(Jt),k(vt),k(Yt),k($t),k(Kt),k(xt),tn=!1,An(pn)}}}const E={title:"Business Performance Dashboard"},ir="2026-06-15";function Ma(s){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${s.getDate()} ${n[s.getMonth()]} ${s.getFullYear()}`}function dr(s,n){const r=new Date(n+"T00:00:00"),e=Ma(r);if(s==="mtd"){const l=new Date(r.getFullYear(),r.getMonth(),1);return`${Ma(l)} - ${e}`}if(s==="qtd"){const l=Math.floor(r.getMonth()/3)*3,i=new Date(r.getFullYear(),l,1);return`${Ma(i)} - ${e}`}if(s==="ytd"){const l=new Date(r.getFullYear(),0,1);return`${Ma(l)} - ${e}`}return`All Time - ${e}`}const _r=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,cr=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,ur=s=>s.name&&s.name.includes("Closed Won")?"#1D5F60":s.name&&s.name.includes("Closed Lost")?"#7B8DA6":"#264773";function mr(s,n,r){let e,l;yn(s,zn,w=>r(55,e=w)),yn(s,$n,w=>r(64,l=w));let{data:i}=n,{data:o={},customFormattingSettings:u,__db:D,inputs:a}=i;Vn($n,l="6666cd76f96956469e7be39d750cc7d9",l);let j=Gn(Qn(a));Bn(j.subscribe(w=>r(0,a=w))),Nn(Kn,{getCustomFormats:()=>u.customFormats||[]});const F=(w,Mt)=>Wn(D.query,w,{query_name:Mt});Yn(F),e.params,wn(()=>!0);let H={initialData:void 0,initialError:void 0},U=O`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`,z=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`;o.delivery_lag_data&&(o.delivery_lag_data instanceof Error?H.initialError=o.delivery_lag_data:H.initialData=o.delivery_lag_data,o.delivery_lag_columns&&(H.knownColumns=o.delivery_lag_columns));let Se,Z=!1;const ce=Oe.createReactive({callback:w=>{r(2,Se=w)},execFn:F},{id:"delivery_lag",...H});ce(z,{noResolve:U,...H}),globalThis[Symbol.for("delivery_lag")]={get value(){return Se}};let Te={initialData:void 0,initialError:void 0},be=O`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`,ae=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`;o.pipeline_coverage_data&&(o.pipeline_coverage_data instanceof Error?Te.initialError=o.pipeline_coverage_data:Te.initialData=o.pipeline_coverage_data,o.pipeline_coverage_columns&&(Te.knownColumns=o.pipeline_coverage_columns));let aa,Et=!1;const ue=Oe.createReactive({callback:w=>{r(3,aa=w)},execFn:F},{id:"pipeline_coverage",...Te});ue(ae,{noResolve:be,...Te}),globalThis[Symbol.for("pipeline_coverage")]={get value(){return aa}};let Ae={initialData:void 0,initialError:void 0},me=O`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-15'::date`,ee=`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-15'::date`;o.kpi_revenue_data&&(o.kpi_revenue_data instanceof Error?Ae.initialError=o.kpi_revenue_data:Ae.initialData=o.kpi_revenue_data,o.kpi_revenue_columns&&(Ae.knownColumns=o.kpi_revenue_columns));let ke,na=!1;const jt=Oe.createReactive({callback:w=>{r(4,ke=w)},execFn:F},{id:"kpi_revenue",...Ae});jt(ee,{noResolve:me,...Ae}),globalThis[Symbol.for("kpi_revenue")]={get value(){return ke}};let Y={initialData:void 0,initialError:void 0},ne=O`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`,Pe=`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`;o.kpi_pipeline_data&&(o.kpi_pipeline_data instanceof Error?Y.initialError=o.kpi_pipeline_data:Y.initialData=o.kpi_pipeline_data,o.kpi_pipeline_columns&&(Y.knownColumns=o.kpi_pipeline_columns));let Ft,xe=!1;const ra=Oe.createReactive({callback:w=>{r(5,Ft=w)},execFn:F},{id:"kpi_pipeline",...Y});ra(Pe,{noResolve:ne,...Y}),globalThis[Symbol.for("kpi_pipeline")]={get value(){return Ft}};let fe={initialData:void 0,initialError:void 0},X=O`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-15'::date`,tt=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-15'::date`;o.kpi_projects_data&&(o.kpi_projects_data instanceof Error?fe.initialError=o.kpi_projects_data:fe.initialData=o.kpi_projects_data,o.kpi_projects_columns&&(fe.knownColumns=o.kpi_projects_columns));let at,L=!1;const oe=Oe.createReactive({callback:w=>{r(6,at=w)},execFn:F},{id:"kpi_projects",...fe});oe(tt,{noResolve:X,...fe}),globalThis[Symbol.for("kpi_projects")]={get value(){return at}};let J={initialData:void 0,initialError:void 0},te=O`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`,nt=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`;o.kpi_products_data&&(o.kpi_products_data instanceof Error?J.initialError=o.kpi_products_data:J.initialData=o.kpi_products_data,o.kpi_products_columns&&(J.knownColumns=o.kpi_products_columns));let It,Me=!1;const pe=Oe.createReactive({callback:w=>{r(7,It=w)},execFn:F},{id:"kpi_products",...J});pe(nt,{noResolve:te,...J}),globalThis[Symbol.for("kpi_products")]={get value(){return It}};let qe={initialData:void 0,initialError:void 0},K=O`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`,Je=`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`;o.revenue_bookings_billing_data&&(o.revenue_bookings_billing_data instanceof Error?qe.initialError=o.revenue_bookings_billing_data:qe.initialData=o.revenue_bookings_billing_data,o.revenue_bookings_billing_columns&&(qe.knownColumns=o.revenue_bookings_billing_columns));let he,Rt=!1;const St=Oe.createReactive({callback:w=>{r(8,he=w)},execFn:F},{id:"revenue_bookings_billing",...qe});St(Je,{noResolve:K,...qe}),globalThis[Symbol.for("revenue_bookings_billing")]={get value(){return he}};let Q={initialData:void 0,initialError:void 0},re=O`select
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
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`,rt=`select
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
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`;o.pipeline_funnel_data&&(o.pipeline_funnel_data instanceof Error?Q.initialError=o.pipeline_funnel_data:Q.initialData=o.pipeline_funnel_data,o.pipeline_funnel_columns&&(Q.knownColumns=o.pipeline_funnel_columns));let Tt,ge=!1;const At=Oe.createReactive({callback:w=>{r(9,Tt=w)},execFn:F},{id:"pipeline_funnel",...Q});At(rt,{noResolve:re,...Q}),globalThis[Symbol.for("pipeline_funnel")]={get value(){return Tt}};let W={initialData:void 0,initialError:void 0},Ce=O`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`,Ge=`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`;o.project_summary_data&&(o.project_summary_data instanceof Error?W.initialError=o.project_summary_data:W.initialData=o.project_summary_data,o.project_summary_columns&&(W.knownColumns=o.project_summary_columns));let ve,le=!1;const ye=Oe.createReactive({callback:w=>{r(10,ve=w)},execFn:F},{id:"project_summary",...W});ye(Ge,{noResolve:Ce,...W}),globalThis[Symbol.for("project_summary")]={get value(){return ve}};let Ve={initialData:void 0,initialError:void 0},De=O`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`,ie=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`;o.catalog_summary_data&&(o.catalog_summary_data instanceof Error?Ve.initialError=o.catalog_summary_data:Ve.initialData=o.catalog_summary_data,o.catalog_summary_columns&&(Ve.knownColumns=o.catalog_summary_columns));let we,Pt=!1;const de=Oe.createReactive({callback:w=>{r(11,we=w)},execFn:F},{id:"catalog_summary",...Ve});de(ie,{noResolve:De,...Ve}),globalThis[Symbol.for("catalog_summary")]={get value(){return we}};let Be="ytd",Ee="";wn(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),a){const w=e.url.searchParams.get("time_filter");r(0,a.time_filter=w||"ytd",a)}});const oa=()=>sn(ma(`/?time_filter=${Be}`)),la=()=>sn(ma(`/sales?time_filter=${Be}`)),Ne=()=>sn(ma(`/operations?time_filter=${Be}`)),Ye=(w,Mt)=>{const se=new Date(w),je=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][se.getUTCMonth()],ia=se.getUTCFullYear();return se.getUTCMonth()===0||Mt===0?je+`
`+ia:je};return s.$$set=w=>{"data"in w&&r(13,i=w.data)},s.$$.update=()=>{if(s.$$.dirty[0]&8192&&r(14,{data:o={},customFormattingSettings:u,__db:D}=i,o),s.$$.dirty[0]&16384&&Xn.set(Object.keys(o).length>0),s.$$.dirty[1]&16777216&&e.params,s.$$.dirty[0]&1&&r(16,U=O`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`),s.$$.dirty[0]&1&&r(17,z=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`),s.$$.dirty[0]&491520&&(U||!Z?U||(ce(z,{noResolve:U,...H}),r(18,Z=!0)):ce(z,{noResolve:U})),s.$$.dirty[0]&1&&r(20,be=O`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`),s.$$.dirty[0]&1&&r(21,ae=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`),s.$$.dirty[0]&7864320&&(be||!Et?be||(ue(ae,{noResolve:be,...Te}),r(22,Et=!0)):ue(ae,{noResolve:be})),s.$$.dirty[0]&1&&r(24,me=O`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-15'::date`),s.$$.dirty[0]&1&&r(25,ee=`select 
    sum(revenue_amount) as total_revenue,
    1000000.0 as target_revenue,
    sum(revenue_amount) / 1000000.0 as target_progress
from postgres.fct_revenue 
where source_system = 'xero'
  and transaction_date >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and transaction_date <= '2026-06-15'::date`),s.$$.dirty[0]&125829120&&(me||!na?me||(jt(ee,{noResolve:me,...Ae}),r(26,na=!0)):jt(ee,{noResolve:me})),s.$$.dirty[0]&2013265920&&(ne||!xe?ne||(ra(Pe,{noResolve:ne,...Y}),r(30,xe=!0)):ra(Pe,{noResolve:ne})),s.$$.dirty[0]&1&&r(32,X=O`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-15'::date`),s.$$.dirty[0]&1&&r(33,tt=`select count(distinct project_id) as total_projects 
from postgres.dim_projects 
where is_active = true
  and created_at >= case
      when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-15'::date`),s.$$.dirty[1]&15&&(X||!L?X||(oe(tt,{noResolve:X,...fe}),r(34,L=!0)):oe(tt,{noResolve:X})),s.$$.dirty[0]&1&&r(36,te=O`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`),s.$$.dirty[0]&1&&r(37,nt=`select count(distinct product_id) as total_products 
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`),s.$$.dirty[1]&240&&(te||!Me?te||(pe(nt,{noResolve:te,...J}),r(38,Me=!0)):pe(nt,{noResolve:te})),s.$$.dirty[0]&1&&r(40,K=O`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[0]&1&&r(41,Je=`select
    date_trunc('month', transaction_date) as month_date,
    case 
        when source_system = 'xero' then 'Billed Cash Flow (Xero)'
        when source_system = 'hubspot' then 'Booked Contracts (HubSpot)'
        else source_system
    end as source_system,
    sum(revenue_amount) as revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date), source_system
order by month_date, case when source_system = 'xero' then 1 else 2 end`),s.$$.dirty[1]&3840&&(K||!Rt?K||(St(Je,{noResolve:K,...qe}),r(42,Rt=!0)):St(Je,{noResolve:K})),s.$$.dirty[0]&1&&r(44,re=O`select
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
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`),s.$$.dirty[0]&1&&r(45,rt=`select
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
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`),s.$$.dirty[1]&61440&&(re||!ge?re||(At(rt,{noResolve:re,...Q}),r(46,ge=!0)):At(rt,{noResolve:re})),s.$$.dirty[0]&1&&r(48,Ce=O`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`),s.$$.dirty[0]&1&&r(49,Ge=`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`),s.$$.dirty[1]&983040&&(Ce||!le?Ce||(ye(Ge,{noResolve:Ce,...W}),r(50,le=!0)):ye(Ge,{noResolve:Ce})),s.$$.dirty[0]&1&&r(52,De=O`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`),s.$$.dirty[0]&1&&r(53,ie=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${a.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${a.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${a.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`),s.$$.dirty[1]&15728640&&(De||!Pt?De||(de(ie,{noResolve:De,...Ve}),r(54,Pt=!0)):de(ie,{noResolve:De})),s.$$.dirty[0]&1&&r(1,Be=(a==null?void 0:a.time_filter)||"ytd"),s.$$.dirty[0]&2&&r(12,Ee=dr(Be,ir)),s.$$.dirty[0]&1&&a&&a.time_filter)try{const w=new URL(window.location.href);w.searchParams.get("time_filter")!==a.time_filter&&(w.searchParams.set("time_filter",a.time_filter),window.history.replaceState(null,"",w.pathname+w.search))}catch{}},r(28,ne=O`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`),r(29,Pe=`select 
    sum(amount) as pipeline_value,
    750000.0 as target_value,
    sum(amount) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`),[a,Be,Se,aa,ke,Ft,at,It,he,Tt,ve,we,Ee,i,o,H,U,z,Z,Te,be,ae,Et,Ae,me,ee,na,Y,ne,Pe,xe,fe,X,tt,L,J,te,nt,Me,qe,K,Je,Rt,Q,re,rt,ge,W,Ce,Ge,le,Ve,De,ie,Pt,e,oa,la,Ne,Ye]}class br extends On{constructor(n){super(),Hn(this,n,mr,lr,Sn,{data:13},null,[-1,-1,-1])}}export{br as component};
