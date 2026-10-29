import{s as os,d as c,E as us,D as cs,i as x,a as o,z as qn,b as d,J as _s,c as h,h as ds,e as f,f as dn,r as y,g as F,t as rt,j as g,k as p,u as ot,l as Yn,m as fs,o as ps,p as ms,q as Kn,n as Ne}from"../chunks/scheduler.CIVpvCNs.js";import{S as vs,i as hs,d as q,t as b,a as v,c as Re,m as I,b as R,e as T,g as Te}from"../chunks/index.Cpoe66YF.js";import{D as gs,G as bs,a as Gn,V as Mt,B as Qn,g as ws,Q as ut}from"../chunks/DemoDisclaimer.CJHbP1Ib.js";import{e as Jn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CLuJaMh5.js";import{w as $s,g as In}from"../chunks/entry.46Kb3h7t.js";import{e as ys,s as xs,Q as lt,p as ks,a as fn,r as Xn,C as Cs}from"../chunks/inferColumnTypes.g_n13K7l.js";import{h as Z}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Ds}from"../chunks/stores.tXY6gxI1.js";import{p as Es}from"../chunks/profile.BW8tN6E9.js";const{document:Le}=ws;function qs(l){let n,a=D.title+"",t;return{c(){n=p("h1"),t=ot(a),this.h()},l(r){n=f(r,"H1",{class:!0});var u=y(n);t=rt(u,a),u.forEach(c),this.h()},h(){d(n,"class","title")},m(r,u){x(r,n,u),o(n,t)},p:Ne,d(r){r&&c(n)}}}function Is(l){return{c(){this.h()},l(n){this.h()},h(){Le.title="Evidence"},m:Ne,p:Ne,d:Ne}}function Rs(l){let n,a,t,r,u;return Le.title=n=D.title,{c(){a=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){a=h(m),t=f(m,"META",{property:!0,content:!0}),r=h(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,i;d(t,"property","og:title"),d(t,"content",((m=D.og)==null?void 0:m.title)??D.title),d(u,"name","twitter:title"),d(u,"content",((i=D.og)==null?void 0:i.title)??D.title)},m(m,i){x(m,a,i),x(m,t,i),x(m,r,i),x(m,u,i)},p(m,i){i&0&&n!==(n=D.title)&&(Le.title=n)},d(m){m&&(c(a),c(t),c(r),c(u))}}}function Ts(l){var u,m;let n,a,t=(D.description||((u=D.og)==null?void 0:u.description))&&Ss(),r=((m=D.og)==null?void 0:m.image)&&Fs();return{c(){t&&t.c(),n=g(),r&&r.c(),a=dn()},l(i){t&&t.l(i),n=h(i),r&&r.l(i),a=dn()},m(i,C){t&&t.m(i,C),x(i,n,C),r&&r.m(i,C),x(i,a,C)},p(i,C){var E,e;(D.description||(E=D.og)!=null&&E.description)&&t.p(i,C),(e=D.og)!=null&&e.image&&r.p(i,C)},d(i){i&&(c(n),c(a)),t&&t.d(i),r&&r.d(i)}}}function Ss(l){let n,a,t,r,u;return{c(){n=p("meta"),a=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){n=f(m,"META",{name:!0,content:!0}),a=h(m),t=f(m,"META",{property:!0,content:!0}),r=h(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,i,C;d(n,"name","description"),d(n,"content",D.description??((m=D.og)==null?void 0:m.description)),d(t,"property","og:description"),d(t,"content",((i=D.og)==null?void 0:i.description)??D.description),d(u,"name","twitter:description"),d(u,"content",((C=D.og)==null?void 0:C.description)??D.description)},m(m,i){x(m,n,i),x(m,a,i),x(m,t,i),x(m,r,i),x(m,u,i)},p:Ne,d(m){m&&(c(n),c(a),c(t),c(r),c(u))}}}function Fs(l){let n,a,t;return{c(){n=p("meta"),a=g(),t=p("meta"),this.h()},l(r){n=f(r,"META",{property:!0,content:!0}),a=h(r),t=f(r,"META",{name:!0,content:!0}),this.h()},h(){var r,u;d(n,"property","og:image"),d(n,"content",fn((r=D.og)==null?void 0:r.image)),d(t,"name","twitter:image"),d(t,"content",fn((u=D.og)==null?void 0:u.image))},m(r,u){x(r,n,u),x(r,a,u),x(r,t,u)},p:Ne,d(r){r&&(c(n),c(a),c(t))}}}function Zn(l){let n,a;return n=new ut({props:{queryID:"bu_list",queryResult:l[0]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&1&&(u.queryResult=t[0]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function es(l){let n,a;return n=new ut({props:{queryID:"region_list",queryResult:l[1]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&2&&(u.queryResult=t[1]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ts(l){let n,a;return n=new ut({props:{queryID:"kpi_win_rate",queryResult:l[2]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&4&&(u.queryResult=t[2]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ns(l){let n,a;return n=new ut({props:{queryID:"kpi_lost_value",queryResult:l[3]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&8&&(u.queryResult=t[3]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ss(l){let n,a;return n=new ut({props:{queryID:"kpi_open_deals",queryResult:l[4]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&16&&(u.queryResult=t[4]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function as(l){let n,a;return n=new ut({props:{queryID:"kpi_top_client_concentration",queryResult:l[5]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&32&&(u.queryResult=t[5]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function is(l){let n,a;return n=new ut({props:{queryID:"win_loss_reasons",queryResult:l[6]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&64&&(u.queryResult=t[6]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ls(l){let n,a;return n=new ut({props:{queryID:"client_pipeline_share",queryResult:l[7]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&128&&(u.queryResult=t[7]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function Vs(l){let n,a,t="✦",r,u,m,i,C,E;return i=new Mt({props:{data:l[2],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),a=p("span"),a.textContent=t,r=g(),u=p("span"),m=ot("Win rate is healthy ("),T(i.$$.fragment),C=ot(")"),this.h()},l(e){n=f(e,"DIV",{class:!0});var k=y(n);a=f(k,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-i2y69v"&&(a.textContent=t),r=h(k),u=f(k,"SPAN",{});var w=y(u);m=rt(w,"Win rate is healthy ("),R(i.$$.fragment,w),C=rt(w,")"),w.forEach(c),k.forEach(c),this.h()},h(){d(a,"class","text-teal-600 font-bold"),d(n,"class","flex items-start gap-1")},m(e,k){x(e,n,k),o(n,a),o(n,r),o(n,u),o(u,m),I(i,u,null),o(u,C),E=!0},p(e,k){const w={};k[0]&4&&(w.data=e[2]),i.$set(w)},i(e){E||(v(i.$$.fragment,e),E=!0)},o(e){b(i.$$.fragment,e),E=!1},d(e){e&&c(n),q(i)}}}function Ms(l){let n,a,t="✦",r,u,m,i,C,E;return i=new Mt({props:{data:l[2],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),a=p("span"),a.textContent=t,r=g(),u=p("span"),m=ot("Win rate is low ("),T(i.$$.fragment),C=ot(" vs 25% target)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var k=y(n);a=f(k,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-16athnc"&&(a.textContent=t),r=h(k),u=f(k,"SPAN",{});var w=y(u);m=rt(w,"Win rate is low ("),R(i.$$.fragment,w),C=rt(w," vs 25% target)"),w.forEach(c),k.forEach(c),this.h()},h(){d(a,"class","text-amber-600 font-bold"),d(n,"class","flex items-start gap-1")},m(e,k){x(e,n,k),o(n,a),o(n,r),o(n,u),o(u,m),I(i,u,null),o(u,C),E=!0},p(e,k){const w={};k[0]&4&&(w.data=e[2]),i.$set(w)},i(e){E||(v(i.$$.fragment,e),E=!0)},o(e){b(i.$$.fragment,e),E=!1},d(e){e&&c(n),q(i)}}}function As(l){let n,a='<span class="text-teal-600 font-bold">✦</span> <span>Client concentration is balanced</span>';return{c(){n=p("div"),n.innerHTML=a,this.h()},l(t){n=f(t,"DIV",{class:!0,"data-svelte-h":!0}),F(n)!=="svelte-d6fatc"&&(n.innerHTML=a),this.h()},h(){d(n,"class","flex items-start gap-1")},m(t,r){x(t,n,r)},p:Ne,i:Ne,o:Ne,d(t){t&&c(n)}}}function Hs(l){let n,a,t="✦",r,u,m,i,C,E;return i=new Mt({props:{data:l[5],column:"max_concentration",fmt:"pct0"}}),{c(){n=p("div"),a=p("span"),a.textContent=t,r=g(),u=p("span"),m=ot("High concentration ("),T(i.$$.fragment),C=ot(" of pipeline)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var k=y(n);a=f(k,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-16athnc"&&(a.textContent=t),r=h(k),u=f(k,"SPAN",{});var w=y(u);m=rt(w,"High concentration ("),R(i.$$.fragment,w),C=rt(w," of pipeline)"),w.forEach(c),k.forEach(c),this.h()},h(){d(a,"class","text-amber-600 font-bold"),d(n,"class","flex items-start gap-1")},m(e,k){x(e,n,k),o(n,a),o(n,r),o(n,u),o(u,m),I(i,u,null),o(u,C),E=!0},p(e,k){const w={};k[0]&32&&(w.data=e[5]),i.$set(w)},i(e){E||(v(i.$$.fragment,e),E=!0)},o(e){b(i.$$.fragment,e),E=!1},d(e){e&&c(n),q(i)}}}function Ls(l){let n,a,t,r,u,m,i,C,E,e,k,w,ne,U,se,At="Overview Cockpit",ct,fe,Ce="Sales & Win-Loss",he,ae,Ht="Operations & Vendors",Pe,ue,j,K,ce,Lt="Sales Pipeline Deep-Dive",_t,ge,be,G,ie,we,dt,pe,ee,De="📅",Se,Oe,ft,me,Q,$e,le,pt,ve,Nt="Date snapshotted at June 2026",ye,re,oe,xe,Pt="<span>💡</span> Sales Insights",mt,W,V,z,Be,J,X,Ue,Y,Ee,Fe,Ve,Kt='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pipeline Win Rate</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',$,S,_e,vt,ke,qe="Closed Won vs. Closed Lost count",Ot,je,ht,gt,Rn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Lost Opportunity Value</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',pn,Bt,We,mn,bt,Tn="Sum of HubSpot deal amounts marked as 'Closed Lost'",vn,ze,wt,$t,Sn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Open Deals in Funnel</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',hn,Ut,Ye,gn,yt,Fn="Active prospects in pipeline",bn,Ke,xt,kt,Vn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Max Client Concentration</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',wn,jt,Ge,$n,Ct,Mn="Largest client's share of pipeline",Gt,Me,Qe,Je,Dt,An="CRM Closed Won/Lost Reason Breakdown",yn,Et,xn,Xe,kn,Ze,et,qt,Hn="Open Pipeline Value by Corporate Client",Cn,It,Dn,tt,Wt,En,Ln,Ae=typeof D<"u"&&D.title&&D.hide_title!==!0&&qs();function rs(s,_){return typeof D<"u"&&D.title?Rs:Is}let zt=rs()(l),He=typeof D=="object"&&Ts(),M=l[0]&&Zn(l),A=l[1]&&es(l),H=l[2]&&ts(l),L=l[3]&&ns(l),N=l[4]&&ss(l),P=l[5]&&as(l),O=l[6]&&is(l),B=l[7]&&ls(l);ge=new gs({props:{title:"Sales Pipeline Deep-Dive",description:"HubSpot deal velocity, stage progression, pipeline aging, and historical win-loss drivers."}}),we=new bs({props:{name:"time_filter",defaultValue:"ytd"}}),Q=new Gn({props:{name:"business_unit",title:"Business Unit",data:l[0],valueColumn:"business_unit_id",labelColumn:"business_unit"}}),le=new Gn({props:{name:"region",title:"Region",data:l[1],valueColumn:"region_id",labelColumn:"region"}});const Nn=[Ms,Vs],nt=[];function Pn(s,_){var te,de;return(te=s[2][0])!=null&&te.win_rate&&((de=s[2][0])==null?void 0:de.win_rate)<.25?0:1}V=Pn(l),z=nt[V]=Nn[V](l);const On=[Hs,As],st=[];function Bn(s,_){var te,de;return(te=s[5][0])!=null&&te.max_concentration&&((de=s[5][0])==null?void 0:de.max_concentration)>.5?0:1}return J=Bn(l),X=st[J]=On[J](l),_e=new Mt({props:{data:l[2],column:"win_rate",fmt:"pct1"}}),We=new Mt({props:{data:l[3],column:"lost_value",fmt:"usd"}}),Ye=new Mt({props:{data:l[4],column:"open_deals_count"}}),Ge=new Mt({props:{data:l[5],column:"max_concentration",fmt:"pct0"}}),Et=new Jn({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Xe=new Qn({props:{data:l[6],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,legend:"true",echartsOptions:{grid:{top:38,bottom:20,left:40,right:40,containLabel:!0},legend:{top:0,itemGap:15},xAxis:{splitNumber:3,axisLabel:{formatter:Os}}}}}),It=new Jn({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),tt=new Qn({props:{data:l[7],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{top:15,bottom:25,left:35,right:45,containLabel:!0},xAxis:{splitNumber:3,axisLabel:{formatter:Bs}},yAxis:{axisLabel:{interval:0,formatter:l[50],rich:{xsmall:{fontSize:7,color:"#4b5563"},small:{fontSize:8.5,color:"#4b5563"},medium:{fontSize:9.5,color:"#4b5563"}}}}}}}),{c(){Ae&&Ae.c(),n=g(),zt.c(),a=p("meta"),t=p("meta"),He&&He.c(),r=dn(),u=g(),M&&M.c(),m=g(),A&&A.c(),i=g(),H&&H.c(),C=g(),L&&L.c(),E=g(),N&&N.c(),e=g(),P&&P.c(),k=g(),O&&O.c(),w=g(),B&&B.c(),ne=g(),U=p("div"),se=p("button"),se.textContent=At,ct=g(),fe=p("button"),fe.textContent=Ce,he=g(),ae=p("button"),ae.textContent=Ht,Pe=g(),ue=p("div"),j=p("div"),K=p("div"),ce=p("span"),ce.textContent=Lt,_t=g(),T(ge.$$.fragment),be=g(),G=p("div"),ie=p("div"),T(we.$$.fragment),dt=g(),pe=p("div"),ee=p("span"),ee.textContent=De,Se=g(),Oe=ot(l[8]),ft=g(),me=p("div"),T(Q.$$.fragment),$e=g(),T(le.$$.fragment),pt=g(),ve=p("div"),ve.textContent=Nt,ye=g(),re=p("div"),oe=p("div"),xe=p("div"),xe.innerHTML=Pt,mt=g(),W=p("div"),z.c(),Be=g(),X.c(),Ue=g(),Y=p("div"),Ee=p("div"),Fe=p("div"),Ve=p("div"),Ve.innerHTML=Kt,$=g(),S=p("h2"),T(_e.$$.fragment),vt=g(),ke=p("div"),ke.textContent=qe,Ot=g(),je=p("div"),ht=p("div"),gt=p("div"),gt.innerHTML=Rn,pn=g(),Bt=p("h2"),T(We.$$.fragment),mn=g(),bt=p("div"),bt.textContent=Tn,vn=g(),ze=p("div"),wt=p("div"),$t=p("div"),$t.innerHTML=Sn,hn=g(),Ut=p("h2"),T(Ye.$$.fragment),gn=g(),yt=p("div"),yt.textContent=Fn,bn=g(),Ke=p("div"),xt=p("div"),kt=p("div"),kt.innerHTML=Vn,wn=g(),jt=p("h2"),T(Ge.$$.fragment),$n=g(),Ct=p("div"),Ct.textContent=Mn,Gt=g(),Me=p("div"),Qe=p("div"),Je=p("div"),Dt=p("span"),Dt.textContent=An,yn=g(),T(Et.$$.fragment),xn=g(),T(Xe.$$.fragment),kn=g(),Ze=p("div"),et=p("div"),qt=p("span"),qt.textContent=Hn,Cn=g(),T(It.$$.fragment),Dn=g(),T(tt.$$.fragment),this.h()},l(s){Ae&&Ae.l(s),n=h(s);const _=ds("svelte-2igo1p",Le.head);zt.l(_),a=f(_,"META",{name:!0,content:!0}),t=f(_,"META",{name:!0,content:!0}),He&&He.l(_),r=dn(),_.forEach(c),u=h(s),M&&M.l(s),m=h(s),A&&A.l(s),i=h(s),H&&H.l(s),C=h(s),L&&L.l(s),E=h(s),N&&N.l(s),e=h(s),P&&P.l(s),k=h(s),O&&O.l(s),w=h(s),B&&B.l(s),ne=h(s),U=f(s,"DIV",{class:!0});var te=y(U);se=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),F(se)!=="svelte-12o4q6t"&&(se.textContent=At),ct=h(te),fe=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),F(fe)!=="svelte-ob3ztu"&&(fe.textContent=Ce),he=h(te),ae=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),F(ae)!=="svelte-1kxcs33"&&(ae.textContent=Ht),te.forEach(c),Pe=h(s),ue=f(s,"DIV",{class:!0});var de=y(ue);j=f(de,"DIV",{class:!0});var Ie=y(j);K=f(Ie,"DIV",{class:!0});var at=y(K);ce=f(at,"SPAN",{class:!0,"data-svelte-h":!0}),F(ce)!=="svelte-h6zg1c"&&(ce.textContent=Lt),_t=h(at),R(ge.$$.fragment,at),at.forEach(c),be=h(Ie),G=f(Ie,"DIV",{class:!0});var Rt=y(G);ie=f(Rt,"DIV",{class:!0});var Tt=y(ie);R(we.$$.fragment,Tt),dt=h(Tt),pe=f(Tt,"DIV",{class:!0});var St=y(pe);ee=f(St,"SPAN",{class:!0,"data-svelte-h":!0}),F(ee)!=="svelte-n1bzfj"&&(ee.textContent=De),Se=h(St),Oe=rt(St,l[8]),St.forEach(c),Tt.forEach(c),ft=h(Rt),me=f(Rt,"DIV",{class:!0});var Ft=y(me);R(Q.$$.fragment,Ft),$e=h(Ft),R(le.$$.fragment,Ft),Ft.forEach(c),Rt.forEach(c),pt=h(Ie),ve=f(Ie,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),F(ve)!=="svelte-tonn3n"&&(ve.textContent=Nt),Ie.forEach(c),ye=h(de),re=f(de,"DIV",{class:!0});var Yt=y(re);oe=f(Yt,"DIV",{class:!0});var Vt=y(oe);xe=f(Vt,"DIV",{class:!0,"data-svelte-h":!0}),F(xe)!=="svelte-1pqv4xl"&&(xe.innerHTML=Pt),mt=h(Vt),W=f(Vt,"DIV",{class:!0});var Qt=y(W);z.l(Qt),Be=h(Qt),X.l(Qt),Qt.forEach(c),Vt.forEach(c),Yt.forEach(c),de.forEach(c),Ue=h(s),Y=f(s,"DIV",{class:!0});var it=y(Y);Ee=f(it,"DIV",{class:!0});var Jt=y(Ee);Fe=f(Jt,"DIV",{});var Xt=y(Fe);Ve=f(Xt,"DIV",{class:!0,"data-svelte-h":!0}),F(Ve)!=="svelte-u68fg7"&&(Ve.innerHTML=Kt),$=h(Xt),S=f(Xt,"H2",{class:!0});var Un=y(S);R(_e.$$.fragment,Un),Un.forEach(c),Xt.forEach(c),vt=h(Jt),ke=f(Jt,"DIV",{class:!0,"data-svelte-h":!0}),F(ke)!=="svelte-1d405ho"&&(ke.textContent=qe),Jt.forEach(c),Ot=h(it),je=f(it,"DIV",{class:!0});var Zt=y(je);ht=f(Zt,"DIV",{});var en=y(ht);gt=f(en,"DIV",{class:!0,"data-svelte-h":!0}),F(gt)!=="svelte-10nsonq"&&(gt.innerHTML=Rn),pn=h(en),Bt=f(en,"H2",{class:!0});var jn=y(Bt);R(We.$$.fragment,jn),jn.forEach(c),en.forEach(c),mn=h(Zt),bt=f(Zt,"DIV",{class:!0,"data-svelte-h":!0}),F(bt)!=="svelte-le386w"&&(bt.textContent=Tn),Zt.forEach(c),vn=h(it),ze=f(it,"DIV",{class:!0});var tn=y(ze);wt=f(tn,"DIV",{});var nn=y(wt);$t=f(nn,"DIV",{class:!0,"data-svelte-h":!0}),F($t)!=="svelte-cb2462"&&($t.innerHTML=Sn),hn=h(nn),Ut=f(nn,"H2",{class:!0});var Wn=y(Ut);R(Ye.$$.fragment,Wn),Wn.forEach(c),nn.forEach(c),gn=h(tn),yt=f(tn,"DIV",{class:!0,"data-svelte-h":!0}),F(yt)!=="svelte-12s1tku"&&(yt.textContent=Fn),tn.forEach(c),bn=h(it),Ke=f(it,"DIV",{class:!0});var sn=y(Ke);xt=f(sn,"DIV",{});var an=y(xt);kt=f(an,"DIV",{class:!0,"data-svelte-h":!0}),F(kt)!=="svelte-183evvl"&&(kt.innerHTML=Vn),wn=h(an),jt=f(an,"H2",{class:!0});var zn=y(jt);R(Ge.$$.fragment,zn),zn.forEach(c),an.forEach(c),$n=h(sn),Ct=f(sn,"DIV",{class:!0,"data-svelte-h":!0}),F(Ct)!=="svelte-dm1p4b"&&(Ct.textContent=Mn),sn.forEach(c),it.forEach(c),Gt=h(s),Me=f(s,"DIV",{class:!0});var ln=y(Me);Qe=f(ln,"DIV",{class:!0});var rn=y(Qe);Je=f(rn,"DIV",{class:!0});var on=y(Je);Dt=f(on,"SPAN",{class:!0,"data-svelte-h":!0}),F(Dt)!=="svelte-dgw2oa"&&(Dt.textContent=An),yn=h(on),R(Et.$$.fragment,on),on.forEach(c),xn=h(rn),R(Xe.$$.fragment,rn),rn.forEach(c),kn=h(ln),Ze=f(ln,"DIV",{class:!0});var un=y(Ze);et=f(un,"DIV",{class:!0});var cn=y(et);qt=f(cn,"SPAN",{class:!0,"data-svelte-h":!0}),F(qt)!=="svelte-1br9yke"&&(qt.textContent=Hn),Cn=h(cn),R(It.$$.fragment,cn),cn.forEach(c),Dn=h(un),R(tt.$$.fragment,un),un.forEach(c),ln.forEach(c),this.h()},h(){d(a,"name","twitter:card"),d(a,"content","summary_large_image"),d(t,"name","twitter:site"),d(t,"content","@evidence_dev"),d(se,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),d(fe,"class","px-3 py-1 rounded bg-[#0d9488] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer"),d(ae,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),d(U,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),d(ce,"class","text-base font-extrabold text-[#0d9488]"),d(K,"class","flex items-center gap-1.5"),d(ee,"class","text-gray-400"),d(pe,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded flex items-center gap-1.5 w-max"),d(ie,"class","flex flex-col gap-1"),d(me,"class","flex items-center gap-2"),d(G,"class","flex flex-wrap items-start gap-3"),_s(ve,"color","#ffffff"),d(ve,"class","text-[8px] font-semibold bg-white/10 border border-white/20 px-2 py-0.5 rounded self-start"),d(j,"class","flex flex-col gap-2"),d(xe,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1"),d(W,"class","flex flex-col gap-0.5 text-gray-500 leading-tight"),d(oe,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]"),d(re,"class","flex flex-col items-end self-stretch md:self-auto"),d(ue,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),d(Ve,"class","flex justify-between items-center"),d(S,"class","text-xl font-extrabold mt-0.5 text-gray-800"),d(ke,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),d(Ee,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md"),d(gt,"class","flex justify-between items-center"),d(Bt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),d(bt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),d(je,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md"),d($t,"class","flex justify-between items-center"),d(Ut,"class","text-xl font-extrabold mt-0.5 text-gray-800"),d(yt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),d(ze,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md"),d(kt,"class","flex justify-between items-center"),d(jt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),d(Ct,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),d(Ke,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md"),d(Y,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),d(Dt,"class","font-bold text-gray-700 text-xs"),d(Je,"class","flex items-center gap-1.5 mb-1"),d(Qe,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),d(qt,"class","font-bold text-gray-700 text-xs"),d(et,"class","flex items-center gap-1.5 mb-1"),d(Ze,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),d(Me,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(s,_){Ae&&Ae.m(s,_),x(s,n,_),zt.m(Le.head,null),o(Le.head,a),o(Le.head,t),He&&He.m(Le.head,null),o(Le.head,r),x(s,u,_),M&&M.m(s,_),x(s,m,_),A&&A.m(s,_),x(s,i,_),H&&H.m(s,_),x(s,C,_),L&&L.m(s,_),x(s,E,_),N&&N.m(s,_),x(s,e,_),P&&P.m(s,_),x(s,k,_),O&&O.m(s,_),x(s,w,_),B&&B.m(s,_),x(s,ne,_),x(s,U,_),o(U,se),o(U,ct),o(U,fe),o(U,he),o(U,ae),x(s,Pe,_),x(s,ue,_),o(ue,j),o(j,K),o(K,ce),o(K,_t),I(ge,K,null),o(j,be),o(j,G),o(G,ie),I(we,ie,null),o(ie,dt),o(ie,pe),o(pe,ee),o(pe,Se),o(pe,Oe),o(G,ft),o(G,me),I(Q,me,null),o(me,$e),I(le,me,null),o(j,pt),o(j,ve),o(ue,ye),o(ue,re),o(re,oe),o(oe,xe),o(oe,mt),o(oe,W),nt[V].m(W,null),o(W,Be),st[J].m(W,null),x(s,Ue,_),x(s,Y,_),o(Y,Ee),o(Ee,Fe),o(Fe,Ve),o(Fe,$),o(Fe,S),I(_e,S,null),o(Ee,vt),o(Ee,ke),o(Y,Ot),o(Y,je),o(je,ht),o(ht,gt),o(ht,pn),o(ht,Bt),I(We,Bt,null),o(je,mn),o(je,bt),o(Y,vn),o(Y,ze),o(ze,wt),o(wt,$t),o(wt,hn),o(wt,Ut),I(Ye,Ut,null),o(ze,gn),o(ze,yt),o(Y,bn),o(Y,Ke),o(Ke,xt),o(xt,kt),o(xt,wn),o(xt,jt),I(Ge,jt,null),o(Ke,$n),o(Ke,Ct),x(s,Gt,_),x(s,Me,_),o(Me,Qe),o(Qe,Je),o(Je,Dt),o(Je,yn),I(Et,Je,null),o(Qe,xn),I(Xe,Qe,null),o(Me,kn),o(Me,Ze),o(Ze,et),o(et,qt),o(et,Cn),I(It,et,null),o(Ze,Dn),I(tt,Ze,null),Wt=!0,En||(Ln=[qn(se,"click",l[47]),qn(fe,"click",l[48]),qn(ae,"click",l[49])],En=!0)},p(s,_){typeof D<"u"&&D.title&&D.hide_title!==!0&&Ae.p(s,_),zt.p(s,_),typeof D=="object"&&He.p(s,_),s[0]?M?(M.p(s,_),_[0]&1&&v(M,1)):(M=Zn(s),M.c(),v(M,1),M.m(m.parentNode,m)):M&&(Te(),b(M,1,1,()=>{M=null}),Re()),s[1]?A?(A.p(s,_),_[0]&2&&v(A,1)):(A=es(s),A.c(),v(A,1),A.m(i.parentNode,i)):A&&(Te(),b(A,1,1,()=>{A=null}),Re()),s[2]?H?(H.p(s,_),_[0]&4&&v(H,1)):(H=ts(s),H.c(),v(H,1),H.m(C.parentNode,C)):H&&(Te(),b(H,1,1,()=>{H=null}),Re()),s[3]?L?(L.p(s,_),_[0]&8&&v(L,1)):(L=ns(s),L.c(),v(L,1),L.m(E.parentNode,E)):L&&(Te(),b(L,1,1,()=>{L=null}),Re()),s[4]?N?(N.p(s,_),_[0]&16&&v(N,1)):(N=ss(s),N.c(),v(N,1),N.m(e.parentNode,e)):N&&(Te(),b(N,1,1,()=>{N=null}),Re()),s[5]?P?(P.p(s,_),_[0]&32&&v(P,1)):(P=as(s),P.c(),v(P,1),P.m(k.parentNode,k)):P&&(Te(),b(P,1,1,()=>{P=null}),Re()),s[6]?O?(O.p(s,_),_[0]&64&&v(O,1)):(O=is(s),O.c(),v(O,1),O.m(w.parentNode,w)):O&&(Te(),b(O,1,1,()=>{O=null}),Re()),s[7]?B?(B.p(s,_),_[0]&128&&v(B,1)):(B=ls(s),B.c(),v(B,1),B.m(ne.parentNode,ne)):B&&(Te(),b(B,1,1,()=>{B=null}),Re()),(!Wt||_[0]&256)&&cs(Oe,s[8]);const te={};_[0]&1&&(te.data=s[0]),Q.$set(te);const de={};_[0]&2&&(de.data=s[1]),le.$set(de);let Ie=V;V=Pn(s),V===Ie?nt[V].p(s,_):(Te(),b(nt[Ie],1,1,()=>{nt[Ie]=null}),Re(),z=nt[V],z?z.p(s,_):(z=nt[V]=Nn[V](s),z.c()),v(z,1),z.m(W,Be));let at=J;J=Bn(s),J===at?st[J].p(s,_):(Te(),b(st[at],1,1,()=>{st[at]=null}),Re(),X=st[J],X?X.p(s,_):(X=st[J]=On[J](s),X.c()),v(X,1),X.m(W,null));const Rt={};_[0]&4&&(Rt.data=s[2]),_e.$set(Rt);const Tt={};_[0]&8&&(Tt.data=s[3]),We.$set(Tt);const St={};_[0]&16&&(St.data=s[4]),Ye.$set(St);const Ft={};_[0]&32&&(Ft.data=s[5]),Ge.$set(Ft);const Yt={};_[0]&64&&(Yt.data=s[6]),Xe.$set(Yt);const Vt={};_[0]&128&&(Vt.data=s[7]),tt.$set(Vt)},i(s){Wt||(v(M),v(A),v(H),v(L),v(N),v(P),v(O),v(B),v(ge.$$.fragment,s),v(we.$$.fragment,s),v(Q.$$.fragment,s),v(le.$$.fragment,s),v(z),v(X),v(_e.$$.fragment,s),v(We.$$.fragment,s),v(Ye.$$.fragment,s),v(Ge.$$.fragment,s),v(Et.$$.fragment,s),v(Xe.$$.fragment,s),v(It.$$.fragment,s),v(tt.$$.fragment,s),Wt=!0)},o(s){b(M),b(A),b(H),b(L),b(N),b(P),b(O),b(B),b(ge.$$.fragment,s),b(we.$$.fragment,s),b(Q.$$.fragment,s),b(le.$$.fragment,s),b(z),b(X),b(_e.$$.fragment,s),b(We.$$.fragment,s),b(Ye.$$.fragment,s),b(Ge.$$.fragment,s),b(Et.$$.fragment,s),b(Xe.$$.fragment,s),b(It.$$.fragment,s),b(tt.$$.fragment,s),Wt=!1},d(s){s&&(c(n),c(u),c(m),c(i),c(C),c(E),c(e),c(k),c(w),c(ne),c(U),c(Pe),c(ue),c(Ue),c(Y),c(Gt),c(Me)),Ae&&Ae.d(s),zt.d(s),c(a),c(t),He&&He.d(s),c(r),M&&M.d(s),A&&A.d(s),H&&H.d(s),L&&L.d(s),N&&N.d(s),P&&P.d(s),O&&O.d(s),B&&B.d(s),q(ge),q(we),q(Q),q(le),nt[V].d(),st[J].d(),q(_e),q(We),q(Ye),q(Ge),q(Et),q(Xe),q(It),q(tt),En=!1,us(Ln)}}}const D={title:"Sales & Win-Loss Analysis"},Ns="2026-06-15";function _n(l){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${l.getDate()} ${n[l.getMonth()]} ${l.getFullYear()}`}function Ps(l,n){const a=new Date(n+"T00:00:00"),t=_n(a);if(l==="mtd"){const r=new Date(a.getFullYear(),a.getMonth(),1);return`${_n(r)} - ${t}`}if(l==="qtd"){const r=Math.floor(a.getMonth()/3)*3,u=new Date(a.getFullYear(),r,1);return`${_n(u)} - ${t}`}if(l==="ytd"){const r=new Date(a.getFullYear(),0,1);return`${_n(r)} - ${t}`}return`All Time - ${t}`}const Os=l=>l>=1e6?"$"+l/1e6+"M":l>=1e3?"$"+l/1e3+"K":"$"+l,Bs=l=>l>=1e6?"$"+l/1e6+"M":l>=1e3?"$"+l/1e3+"K":"$"+l;function Us(l,n,a){let t,r,u;Yn(l,Ds,$=>a(46,r=$)),Yn(l,Xn,$=>a(55,u=$));let{data:m}=n,{data:i={},customFormattingSettings:C,__db:E,inputs:e}=m;fs(Xn,u="b6c1e1557fc0a9a1e3a0b220257fd6d9",u);let k=ys($s(e));ps(k.subscribe($=>a(12,e=$))),ms(Cs,{getCustomFormats:()=>C.customFormats||[]});const w=($,S)=>Es(E.query,$,{query_name:S});xs(w),r.params,Kn(()=>!0);let ne={initialData:void 0,initialError:void 0},U=Z`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`;i.bu_list_data&&(i.bu_list_data instanceof Error?ne.initialError=i.bu_list_data:ne.initialData=i.bu_list_data,i.bu_list_columns&&(ne.knownColumns=i.bu_list_columns));let At,ct=!1;const fe=lt.createReactive({callback:$=>{a(0,At=$)},execFn:w},{id:"bu_list",...ne});fe(se,{noResolve:U,...ne}),globalThis[Symbol.for("bu_list")]={get value(){return At}};let Ce={initialData:void 0,initialError:void 0},he=Z`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`,ae=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`;i.region_list_data&&(i.region_list_data instanceof Error?Ce.initialError=i.region_list_data:Ce.initialData=i.region_list_data,i.region_list_columns&&(Ce.knownColumns=i.region_list_columns));let Ht,Pe=!1;const ue=lt.createReactive({callback:$=>{a(1,Ht=$)},execFn:w},{id:"region_list",...Ce});ue(ae,{noResolve:he,...Ce}),globalThis[Symbol.for("region_list")]={get value(){return Ht}};let j={initialData:void 0,initialError:void 0},K=Z`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from analytics.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,ce=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from analytics.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;i.kpi_win_rate_data&&(i.kpi_win_rate_data instanceof Error?j.initialError=i.kpi_win_rate_data:j.initialData=i.kpi_win_rate_data,i.kpi_win_rate_columns&&(j.knownColumns=i.kpi_win_rate_columns));let Lt,_t=!1;const ge=lt.createReactive({callback:$=>{a(2,Lt=$)},execFn:w},{id:"kpi_win_rate",...j});ge(ce,{noResolve:K,...j}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return Lt}};let be={initialData:void 0,initialError:void 0},G=Z`select
    coalesce(sum(amount), 0) as lost_value
from analytics.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,ie=`select
    coalesce(sum(amount), 0) as lost_value
from analytics.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;i.kpi_lost_value_data&&(i.kpi_lost_value_data instanceof Error?be.initialError=i.kpi_lost_value_data:be.initialData=i.kpi_lost_value_data,i.kpi_lost_value_columns&&(be.knownColumns=i.kpi_lost_value_columns));let we,dt=!1;const pe=lt.createReactive({callback:$=>{a(3,we=$)},execFn:w},{id:"kpi_lost_value",...be});pe(ie,{noResolve:G,...be}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return we}};let ee={initialData:void 0,initialError:void 0},De=Z`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,Se=`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;i.kpi_open_deals_data&&(i.kpi_open_deals_data instanceof Error?ee.initialError=i.kpi_open_deals_data:ee.initialData=i.kpi_open_deals_data,i.kpi_open_deals_columns&&(ee.knownColumns=i.kpi_open_deals_columns));let Oe,ft=!1;const me=lt.createReactive({callback:$=>{a(4,Oe=$)},execFn:w},{id:"kpi_open_deals",...ee});me(Se,{noResolve:De,...ee}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return Oe}};let Q={initialData:void 0,initialError:void 0},$e=Z`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from analytics.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from analytics.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`,le=`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from analytics.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from analytics.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`;i.kpi_top_client_concentration_data&&(i.kpi_top_client_concentration_data instanceof Error?Q.initialError=i.kpi_top_client_concentration_data:Q.initialData=i.kpi_top_client_concentration_data,i.kpi_top_client_concentration_columns&&(Q.knownColumns=i.kpi_top_client_concentration_columns));let pt,ve=!1;const Nt=lt.createReactive({callback:$=>{a(5,pt=$)},execFn:w},{id:"kpi_top_client_concentration",...Q});Nt(le,{noResolve:$e,...Q}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return pt}};let ye={initialData:void 0,initialError:void 0},re=Z`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from analytics.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`,oe=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from analytics.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`;i.win_loss_reasons_data&&(i.win_loss_reasons_data instanceof Error?ye.initialError=i.win_loss_reasons_data:ye.initialData=i.win_loss_reasons_data,i.win_loss_reasons_columns&&(ye.knownColumns=i.win_loss_reasons_columns));let xe,Pt=!1;const mt=lt.createReactive({callback:$=>{a(6,xe=$)},execFn:w},{id:"win_loss_reasons",...ye});mt(oe,{noResolve:re,...ye}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return xe}};let W={initialData:void 0,initialError:void 0},V=Z`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`,z=`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`;i.client_pipeline_share_data&&(i.client_pipeline_share_data instanceof Error?W.initialError=i.client_pipeline_share_data:W.initialData=i.client_pipeline_share_data,i.client_pipeline_share_columns&&(W.knownColumns=i.client_pipeline_share_columns));let Be,J=!1;const X=lt.createReactive({callback:$=>{a(7,Be=$)},execFn:w},{id:"client_pipeline_share",...W});X(z,{noResolve:V,...W}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return Be}};let Ue="ytd";function Y($){const S=$.endsWith("/")?$:$+"/",vt=new URLSearchParams(window.location.search).toString().replace(/%2C/g,","),ke=vt?`?${vt}`:"";return(typeof fn=="function"?fn(S):S)+ke}Kn(()=>{localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),document.addEventListener("click",$=>{const S=$.target.closest("canvas");if(!S)return;const _e=S.closest("div");if(!_e)return;const ke=(_e.parentElement||_e).querySelectorAll('div[style*="position"][style*="pointer-events"]');for(const qe of ke){const Ot=(qe.innerText||qe.textContent||"").trim();if(Ot&&qe.offsetWidth>0){navigator.clipboard.writeText(Ot).then(()=>{qe.style.transition="opacity 0.15s",qe.style.opacity="0.4",setTimeout(()=>{qe.style.opacity="1"},350)});break}}})});const Ee=()=>In(Y("/overview")),Fe=()=>In(Y("/sales")),Ve=()=>In(Y("/operations")),Kt=$=>{const S=String($||"");return S.length>28?"{xsmall|"+S+"}":S.length>20?"{small|"+S+"}":S.length>14?"{medium|"+S+"}":S};return l.$$set=$=>{"data"in $&&a(10,m=$.data)},l.$$.update=()=>{l.$$.dirty[0]&1024&&a(11,{data:i={},customFormattingSettings:C,__db:E}=m,i),l.$$.dirty[0]&2048&&ks.set(Object.keys(i).length>0),l.$$.dirty[1]&32768&&r.params,l.$$.dirty[0]&4096&&a(14,U=Z`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),l.$$.dirty[0]&4096&&a(15,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),l.$$.dirty[0]&122880&&(U||!ct?U||(fe(se,{noResolve:U,...ne}),a(16,ct=!0)):fe(se,{noResolve:U})),l.$$.dirty[0]&4096&&a(18,he=Z`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),l.$$.dirty[0]&4096&&a(19,ae=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),l.$$.dirty[0]&1966080&&(he||!Pe?he||(ue(ae,{noResolve:he,...Ce}),a(20,Pe=!0)):ue(ae,{noResolve:he})),l.$$.dirty[0]&4096&&a(22,K=Z`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from analytics.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),l.$$.dirty[0]&4096&&a(23,ce=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from analytics.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),l.$$.dirty[0]&31457280&&(K||!_t?K||(ge(ce,{noResolve:K,...j}),a(24,_t=!0)):ge(ce,{noResolve:K})),l.$$.dirty[0]&4096&&a(26,G=Z`select
    coalesce(sum(amount), 0) as lost_value
from analytics.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),l.$$.dirty[0]&4096&&a(27,ie=`select
    coalesce(sum(amount), 0) as lost_value
from analytics.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),l.$$.dirty[0]&503316480&&(G||!dt?G||(pe(ie,{noResolve:G,...be}),a(28,dt=!0)):pe(ie,{noResolve:G})),l.$$.dirty[0]&4096&&a(30,De=Z`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),l.$$.dirty[0]&4096&&a(31,Se=`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),l.$$.dirty[0]&1610612736|l.$$.dirty[1]&3&&(De||!ft?De||(me(Se,{noResolve:De,...ee}),a(32,ft=!0)):me(Se,{noResolve:De})),l.$$.dirty[0]&4096&&a(34,$e=Z`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from analytics.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from analytics.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),l.$$.dirty[0]&4096&&a(35,le=`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from analytics.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from analytics.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),l.$$.dirty[1]&60&&($e||!ve?$e||(Nt(le,{noResolve:$e,...Q}),a(36,ve=!0)):Nt(le,{noResolve:$e})),l.$$.dirty[0]&4096&&a(38,re=Z`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from analytics.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),l.$$.dirty[0]&4096&&a(39,oe=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from analytics.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),l.$$.dirty[1]&960&&(re||!Pt?re||(mt(oe,{noResolve:re,...ye}),a(40,Pt=!0)):mt(oe,{noResolve:re})),l.$$.dirty[0]&4096&&a(42,V=Z`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),l.$$.dirty[0]&4096&&a(43,z=`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),l.$$.dirty[1]&15360&&(V||!J?V||(X(z,{noResolve:V,...W}),a(44,J=!0)):X(z,{noResolve:V})),l.$$.dirty[0]&4096&&a(45,Ue=(e==null?void 0:e.time_filter)||"ytd"),l.$$.dirty[1]&16384&&a(8,t=Ps(Ue,Ns))},[At,Ht,Lt,we,Oe,pt,xe,Be,t,Y,m,i,e,ne,U,se,ct,Ce,he,ae,Pe,j,K,ce,_t,be,G,ie,dt,ee,De,Se,ft,Q,$e,le,ve,ye,re,oe,Pt,W,V,z,J,Ue,r,Ee,Fe,Ve,Kt]}class ea extends vs{constructor(n){super(),hs(this,n,Us,Ls,os,{data:10},null,[-1,-1,-1])}}export{ea as component};
