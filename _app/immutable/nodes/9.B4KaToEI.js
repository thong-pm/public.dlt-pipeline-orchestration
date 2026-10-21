import{s as os,d as c,E as us,D as cs,i as x,a as o,z as qn,b as _,J as _s,c as h,h as ds,e as f,f as dn,r as y,g as F,t as rt,j as g,k as p,u as ot,l as Yn,m as fs,o as ps,p as ms,q as Kn,n as Be}from"../chunks/scheduler.CIVpvCNs.js";import{S as vs,i as hs,d as q,t as b,a as v,c as Re,m as I,b as R,e as T,g as Te}from"../chunks/index.Cpoe66YF.js";import{D as gs,G as bs,a as Gn,V as Vt,B as Qn,g as ws,Q as ut}from"../chunks/DemoDisclaimer.DQirVIpY.js";import{e as Jn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CLOegZP7.js";import{w as $s,g as In}from"../chunks/entry.Dn79cVTF.js";import{e as ys,s as xs,Q as lt,p as ks,a as fn,r as Xn,C as Cs}from"../chunks/inferColumnTypes.DVrPSOCJ.js";import{h as Z}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Ds}from"../chunks/stores.Dc3HCiZI.js";import{p as Es}from"../chunks/profile.BW8tN6E9.js";const{document:Oe}=ws;function qs(i){let n,a=D.title+"",t;return{c(){n=p("h1"),t=ot(a),this.h()},l(r){n=f(r,"H1",{class:!0});var u=y(n);t=rt(u,a),u.forEach(c),this.h()},h(){_(n,"class","title")},m(r,u){x(r,n,u),o(n,t)},p:Be,d(r){r&&c(n)}}}function Is(i){return{c(){this.h()},l(n){this.h()},h(){Oe.title="Evidence"},m:Be,p:Be,d:Be}}function Rs(i){let n,a,t,r,u;return Oe.title=n=D.title,{c(){a=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){a=h(m),t=f(m,"META",{property:!0,content:!0}),r=h(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,l;_(t,"property","og:title"),_(t,"content",((m=D.og)==null?void 0:m.title)??D.title),_(u,"name","twitter:title"),_(u,"content",((l=D.og)==null?void 0:l.title)??D.title)},m(m,l){x(m,a,l),x(m,t,l),x(m,r,l),x(m,u,l)},p(m,l){l&0&&n!==(n=D.title)&&(Oe.title=n)},d(m){m&&(c(a),c(t),c(r),c(u))}}}function Ts(i){var u,m;let n,a,t=(D.description||((u=D.og)==null?void 0:u.description))&&Ss(),r=((m=D.og)==null?void 0:m.image)&&Fs();return{c(){t&&t.c(),n=g(),r&&r.c(),a=dn()},l(l){t&&t.l(l),n=h(l),r&&r.l(l),a=dn()},m(l,C){t&&t.m(l,C),x(l,n,C),r&&r.m(l,C),x(l,a,C)},p(l,C){var E,e;(D.description||(E=D.og)!=null&&E.description)&&t.p(l,C),(e=D.og)!=null&&e.image&&r.p(l,C)},d(l){l&&(c(n),c(a)),t&&t.d(l),r&&r.d(l)}}}function Ss(i){let n,a,t,r,u;return{c(){n=p("meta"),a=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){n=f(m,"META",{name:!0,content:!0}),a=h(m),t=f(m,"META",{property:!0,content:!0}),r=h(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,l,C;_(n,"name","description"),_(n,"content",D.description??((m=D.og)==null?void 0:m.description)),_(t,"property","og:description"),_(t,"content",((l=D.og)==null?void 0:l.description)??D.description),_(u,"name","twitter:description"),_(u,"content",((C=D.og)==null?void 0:C.description)??D.description)},m(m,l){x(m,n,l),x(m,a,l),x(m,t,l),x(m,r,l),x(m,u,l)},p:Be,d(m){m&&(c(n),c(a),c(t),c(r),c(u))}}}function Fs(i){let n,a,t;return{c(){n=p("meta"),a=g(),t=p("meta"),this.h()},l(r){n=f(r,"META",{property:!0,content:!0}),a=h(r),t=f(r,"META",{name:!0,content:!0}),this.h()},h(){var r,u;_(n,"property","og:image"),_(n,"content",fn((r=D.og)==null?void 0:r.image)),_(t,"name","twitter:image"),_(t,"content",fn((u=D.og)==null?void 0:u.image))},m(r,u){x(r,n,u),x(r,a,u),x(r,t,u)},p:Be,d(r){r&&(c(n),c(a),c(t))}}}function Zn(i){let n,a;return n=new ut({props:{queryID:"bu_list",queryResult:i[0]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&1&&(u.queryResult=t[0]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function es(i){let n,a;return n=new ut({props:{queryID:"region_list",queryResult:i[1]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&2&&(u.queryResult=t[1]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ts(i){let n,a;return n=new ut({props:{queryID:"kpi_win_rate",queryResult:i[2]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&4&&(u.queryResult=t[2]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ns(i){let n,a;return n=new ut({props:{queryID:"kpi_lost_value",queryResult:i[3]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&8&&(u.queryResult=t[3]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ss(i){let n,a;return n=new ut({props:{queryID:"kpi_open_deals",queryResult:i[4]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&16&&(u.queryResult=t[4]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function as(i){let n,a;return n=new ut({props:{queryID:"kpi_top_client_concentration",queryResult:i[5]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&32&&(u.queryResult=t[5]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function is(i){let n,a;return n=new ut({props:{queryID:"win_loss_reasons",queryResult:i[6]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&64&&(u.queryResult=t[6]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function ls(i){let n,a;return n=new ut({props:{queryID:"client_pipeline_share",queryResult:i[7]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),a=!0},p(t,r){const u={};r[0]&128&&(u.queryResult=t[7]),n.$set(u)},i(t){a||(v(n.$$.fragment,t),a=!0)},o(t){b(n.$$.fragment,t),a=!1},d(t){q(n,t)}}}function Ms(i){let n,a,t="✦",r,u,m,l,C,E;return l=new Vt({props:{data:i[2],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),a=p("span"),a.textContent=t,r=g(),u=p("span"),m=ot("Win rate is healthy ("),T(l.$$.fragment),C=ot(")"),this.h()},l(e){n=f(e,"DIV",{class:!0});var k=y(n);a=f(k,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-i2y69v"&&(a.textContent=t),r=h(k),u=f(k,"SPAN",{});var w=y(u);m=rt(w,"Win rate is healthy ("),R(l.$$.fragment,w),C=rt(w,")"),w.forEach(c),k.forEach(c),this.h()},h(){_(a,"class","text-teal-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,k){x(e,n,k),o(n,a),o(n,r),o(n,u),o(u,m),I(l,u,null),o(u,C),E=!0},p(e,k){const w={};k[0]&4&&(w.data=e[2]),l.$set(w)},i(e){E||(v(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),q(l)}}}function Vs(i){let n,a,t="✦",r,u,m,l,C,E;return l=new Vt({props:{data:i[2],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),a=p("span"),a.textContent=t,r=g(),u=p("span"),m=ot("Win rate is low ("),T(l.$$.fragment),C=ot(" vs 25% target)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var k=y(n);a=f(k,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-16athnc"&&(a.textContent=t),r=h(k),u=f(k,"SPAN",{});var w=y(u);m=rt(w,"Win rate is low ("),R(l.$$.fragment,w),C=rt(w," vs 25% target)"),w.forEach(c),k.forEach(c),this.h()},h(){_(a,"class","text-amber-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,k){x(e,n,k),o(n,a),o(n,r),o(n,u),o(u,m),I(l,u,null),o(u,C),E=!0},p(e,k){const w={};k[0]&4&&(w.data=e[2]),l.$set(w)},i(e){E||(v(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),q(l)}}}function As(i){let n,a='<span class="text-teal-600 font-bold">✦</span> <span>Client concentration is balanced</span>';return{c(){n=p("div"),n.innerHTML=a,this.h()},l(t){n=f(t,"DIV",{class:!0,"data-svelte-h":!0}),F(n)!=="svelte-d6fatc"&&(n.innerHTML=a),this.h()},h(){_(n,"class","flex items-start gap-1")},m(t,r){x(t,n,r)},p:Be,i:Be,o:Be,d(t){t&&c(n)}}}function Hs(i){let n,a,t="✦",r,u,m,l,C,E;return l=new Vt({props:{data:i[5],column:"max_concentration",fmt:"pct0"}}),{c(){n=p("div"),a=p("span"),a.textContent=t,r=g(),u=p("span"),m=ot("High concentration ("),T(l.$$.fragment),C=ot(" of pipeline)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var k=y(n);a=f(k,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-16athnc"&&(a.textContent=t),r=h(k),u=f(k,"SPAN",{});var w=y(u);m=rt(w,"High concentration ("),R(l.$$.fragment,w),C=rt(w," of pipeline)"),w.forEach(c),k.forEach(c),this.h()},h(){_(a,"class","text-amber-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,k){x(e,n,k),o(n,a),o(n,r),o(n,u),o(u,m),I(l,u,null),o(u,C),E=!0},p(e,k){const w={};k[0]&32&&(w.data=e[5]),l.$set(w)},i(e){E||(v(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),q(l)}}}function Ls(i){let n,a,t,r,u,m,l,C,E,e,k,w,ne,U,se,At="Overview Cockpit",ct,fe,De="Sales & Win-Loss",he,ae,Ht="Operations & Vendors",Ue,ue,j,K,ce,Lt="Sales Pipeline Deep-Dive",_t,ge,be,G,ie,we,dt,pe,ee,Ee="📅",Se,je,ft,me,Q,$e,le,pt,ve,Nt="Date snapshotted at June 2026",ye,re,oe,xe,Pt="<span>💡</span> Sales Insights",mt,W,M,z,We,J,X,ze,Y,ke,Fe,Me,Kt='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pipeline Win Rate</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',$,S,_e,vt,Ce,qe="Closed Won vs. Closed Lost count",Ot,Ve,ht,gt,Rn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Lost Opportunity Value</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',pn,Bt,Ye,mn,bt,Tn="Sum of HubSpot deal amounts marked as 'Closed Lost'",vn,Ae,wt,$t,Sn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Open Deals in Funnel</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',hn,Ut,Ke,gn,yt,Fn="Active prospects in pipeline",bn,He,xt,kt,Mn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Max Client Concentration</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',wn,jt,Ge,$n,Ct,Vn="Largest client's share of pipeline",Gt,Le,Qe,Je,Dt,An="CRM Closed Won/Lost Reason Breakdown",yn,Et,xn,Xe,kn,Ze,et,qt,Hn="Open Pipeline Value by Corporate Client",Cn,It,Dn,tt,Wt,En,Ln,Ne=typeof D<"u"&&D.title&&D.hide_title!==!0&&qs();function rs(s,d){return typeof D<"u"&&D.title?Rs:Is}let zt=rs()(i),Pe=typeof D=="object"&&Ts(),V=i[0]&&Zn(i),A=i[1]&&es(i),H=i[2]&&ts(i),L=i[3]&&ns(i),N=i[4]&&ss(i),P=i[5]&&as(i),O=i[6]&&is(i),B=i[7]&&ls(i);ge=new gs({props:{title:"Sales Pipeline Deep-Dive",description:"HubSpot deal velocity, stage progression, pipeline aging, and historical win-loss drivers."}}),we=new bs({props:{name:"time_filter",defaultValue:"ytd"}}),Q=new Gn({props:{name:"business_unit",title:"Business Unit",data:i[0],valueColumn:"business_unit_id",labelColumn:"business_unit"}}),le=new Gn({props:{name:"region",title:"Region",data:i[1],valueColumn:"region_id",labelColumn:"region"}});const Nn=[Vs,Ms],nt=[];function Pn(s,d){var te,de;return(te=s[2][0])!=null&&te.win_rate&&((de=s[2][0])==null?void 0:de.win_rate)<.25?0:1}M=Pn(i),z=nt[M]=Nn[M](i);const On=[Hs,As],st=[];function Bn(s,d){var te,de;return(te=s[5][0])!=null&&te.max_concentration&&((de=s[5][0])==null?void 0:de.max_concentration)>.5?0:1}return J=Bn(i),X=st[J]=On[J](i),_e=new Vt({props:{data:i[2],column:"win_rate",fmt:"pct1"}}),Ye=new Vt({props:{data:i[3],column:"lost_value",fmt:"usd"}}),Ke=new Vt({props:{data:i[4],column:"open_deals_count"}}),Ge=new Vt({props:{data:i[5],column:"max_concentration",fmt:"pct0"}}),Et=new Jn({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Xe=new Qn({props:{data:i[6],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,legend:"true",echartsOptions:{grid:{top:38,bottom:20,left:40,right:40,containLabel:!0},legend:{top:0,itemGap:15},xAxis:{splitNumber:3,axisLabel:{formatter:Os}}}}}),It=new Jn({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),tt=new Qn({props:{data:i[7],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{top:15,bottom:25,left:35,right:45,containLabel:!0},xAxis:{splitNumber:3,axisLabel:{formatter:Bs}},yAxis:{axisLabel:{interval:0,formatter:i[50],rich:{xsmall:{fontSize:7,color:"#4b5563"},small:{fontSize:8.5,color:"#4b5563"},medium:{fontSize:9.5,color:"#4b5563"}}}}}}}),{c(){Ne&&Ne.c(),n=g(),zt.c(),a=p("meta"),t=p("meta"),Pe&&Pe.c(),r=dn(),u=g(),V&&V.c(),m=g(),A&&A.c(),l=g(),H&&H.c(),C=g(),L&&L.c(),E=g(),N&&N.c(),e=g(),P&&P.c(),k=g(),O&&O.c(),w=g(),B&&B.c(),ne=g(),U=p("div"),se=p("button"),se.textContent=At,ct=g(),fe=p("button"),fe.textContent=De,he=g(),ae=p("button"),ae.textContent=Ht,Ue=g(),ue=p("div"),j=p("div"),K=p("div"),ce=p("span"),ce.textContent=Lt,_t=g(),T(ge.$$.fragment),be=g(),G=p("div"),ie=p("div"),T(we.$$.fragment),dt=g(),pe=p("div"),ee=p("span"),ee.textContent=Ee,Se=g(),je=ot(i[8]),ft=g(),me=p("div"),T(Q.$$.fragment),$e=g(),T(le.$$.fragment),pt=g(),ve=p("div"),ve.textContent=Nt,ye=g(),re=p("div"),oe=p("div"),xe=p("div"),xe.innerHTML=Pt,mt=g(),W=p("div"),z.c(),We=g(),X.c(),ze=g(),Y=p("div"),ke=p("a"),Fe=p("div"),Me=p("div"),Me.innerHTML=Kt,$=g(),S=p("h2"),T(_e.$$.fragment),vt=g(),Ce=p("div"),Ce.textContent=qe,Ot=g(),Ve=p("a"),ht=p("div"),gt=p("div"),gt.innerHTML=Rn,pn=g(),Bt=p("h2"),T(Ye.$$.fragment),mn=g(),bt=p("div"),bt.textContent=Tn,vn=g(),Ae=p("a"),wt=p("div"),$t=p("div"),$t.innerHTML=Sn,hn=g(),Ut=p("h2"),T(Ke.$$.fragment),gn=g(),yt=p("div"),yt.textContent=Fn,bn=g(),He=p("a"),xt=p("div"),kt=p("div"),kt.innerHTML=Mn,wn=g(),jt=p("h2"),T(Ge.$$.fragment),$n=g(),Ct=p("div"),Ct.textContent=Vn,Gt=g(),Le=p("div"),Qe=p("div"),Je=p("div"),Dt=p("span"),Dt.textContent=An,yn=g(),T(Et.$$.fragment),xn=g(),T(Xe.$$.fragment),kn=g(),Ze=p("div"),et=p("div"),qt=p("span"),qt.textContent=Hn,Cn=g(),T(It.$$.fragment),Dn=g(),T(tt.$$.fragment),this.h()},l(s){Ne&&Ne.l(s),n=h(s);const d=ds("svelte-2igo1p",Oe.head);zt.l(d),a=f(d,"META",{name:!0,content:!0}),t=f(d,"META",{name:!0,content:!0}),Pe&&Pe.l(d),r=dn(),d.forEach(c),u=h(s),V&&V.l(s),m=h(s),A&&A.l(s),l=h(s),H&&H.l(s),C=h(s),L&&L.l(s),E=h(s),N&&N.l(s),e=h(s),P&&P.l(s),k=h(s),O&&O.l(s),w=h(s),B&&B.l(s),ne=h(s),U=f(s,"DIV",{class:!0});var te=y(U);se=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),F(se)!=="svelte-12o4q6t"&&(se.textContent=At),ct=h(te),fe=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),F(fe)!=="svelte-ob3ztu"&&(fe.textContent=De),he=h(te),ae=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),F(ae)!=="svelte-1kxcs33"&&(ae.textContent=Ht),te.forEach(c),Ue=h(s),ue=f(s,"DIV",{class:!0});var de=y(ue);j=f(de,"DIV",{class:!0});var Ie=y(j);K=f(Ie,"DIV",{class:!0});var at=y(K);ce=f(at,"SPAN",{class:!0,"data-svelte-h":!0}),F(ce)!=="svelte-h6zg1c"&&(ce.textContent=Lt),_t=h(at),R(ge.$$.fragment,at),at.forEach(c),be=h(Ie),G=f(Ie,"DIV",{class:!0});var Rt=y(G);ie=f(Rt,"DIV",{class:!0});var Tt=y(ie);R(we.$$.fragment,Tt),dt=h(Tt),pe=f(Tt,"DIV",{class:!0});var St=y(pe);ee=f(St,"SPAN",{class:!0,"data-svelte-h":!0}),F(ee)!=="svelte-n1bzfj"&&(ee.textContent=Ee),Se=h(St),je=rt(St,i[8]),St.forEach(c),Tt.forEach(c),ft=h(Rt),me=f(Rt,"DIV",{class:!0});var Ft=y(me);R(Q.$$.fragment,Ft),$e=h(Ft),R(le.$$.fragment,Ft),Ft.forEach(c),Rt.forEach(c),pt=h(Ie),ve=f(Ie,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),F(ve)!=="svelte-tonn3n"&&(ve.textContent=Nt),Ie.forEach(c),ye=h(de),re=f(de,"DIV",{class:!0});var Yt=y(re);oe=f(Yt,"DIV",{class:!0});var Mt=y(oe);xe=f(Mt,"DIV",{class:!0,"data-svelte-h":!0}),F(xe)!=="svelte-1pqv4xl"&&(xe.innerHTML=Pt),mt=h(Mt),W=f(Mt,"DIV",{class:!0});var Qt=y(W);z.l(Qt),We=h(Qt),X.l(Qt),Qt.forEach(c),Mt.forEach(c),Yt.forEach(c),de.forEach(c),ze=h(s),Y=f(s,"DIV",{class:!0});var it=y(Y);ke=f(it,"A",{href:!0,class:!0});var Jt=y(ke);Fe=f(Jt,"DIV",{});var Xt=y(Fe);Me=f(Xt,"DIV",{class:!0,"data-svelte-h":!0}),F(Me)!=="svelte-u68fg7"&&(Me.innerHTML=Kt),$=h(Xt),S=f(Xt,"H2",{class:!0});var Un=y(S);R(_e.$$.fragment,Un),Un.forEach(c),Xt.forEach(c),vt=h(Jt),Ce=f(Jt,"DIV",{class:!0,"data-svelte-h":!0}),F(Ce)!=="svelte-1d405ho"&&(Ce.textContent=qe),Jt.forEach(c),Ot=h(it),Ve=f(it,"A",{href:!0,class:!0});var Zt=y(Ve);ht=f(Zt,"DIV",{});var en=y(ht);gt=f(en,"DIV",{class:!0,"data-svelte-h":!0}),F(gt)!=="svelte-10nsonq"&&(gt.innerHTML=Rn),pn=h(en),Bt=f(en,"H2",{class:!0});var jn=y(Bt);R(Ye.$$.fragment,jn),jn.forEach(c),en.forEach(c),mn=h(Zt),bt=f(Zt,"DIV",{class:!0,"data-svelte-h":!0}),F(bt)!=="svelte-le386w"&&(bt.textContent=Tn),Zt.forEach(c),vn=h(it),Ae=f(it,"A",{href:!0,class:!0});var tn=y(Ae);wt=f(tn,"DIV",{});var nn=y(wt);$t=f(nn,"DIV",{class:!0,"data-svelte-h":!0}),F($t)!=="svelte-cb2462"&&($t.innerHTML=Sn),hn=h(nn),Ut=f(nn,"H2",{class:!0});var Wn=y(Ut);R(Ke.$$.fragment,Wn),Wn.forEach(c),nn.forEach(c),gn=h(tn),yt=f(tn,"DIV",{class:!0,"data-svelte-h":!0}),F(yt)!=="svelte-12s1tku"&&(yt.textContent=Fn),tn.forEach(c),bn=h(it),He=f(it,"A",{href:!0,class:!0});var sn=y(He);xt=f(sn,"DIV",{});var an=y(xt);kt=f(an,"DIV",{class:!0,"data-svelte-h":!0}),F(kt)!=="svelte-183evvl"&&(kt.innerHTML=Mn),wn=h(an),jt=f(an,"H2",{class:!0});var zn=y(jt);R(Ge.$$.fragment,zn),zn.forEach(c),an.forEach(c),$n=h(sn),Ct=f(sn,"DIV",{class:!0,"data-svelte-h":!0}),F(Ct)!=="svelte-dm1p4b"&&(Ct.textContent=Vn),sn.forEach(c),it.forEach(c),Gt=h(s),Le=f(s,"DIV",{class:!0});var ln=y(Le);Qe=f(ln,"DIV",{class:!0});var rn=y(Qe);Je=f(rn,"DIV",{class:!0});var on=y(Je);Dt=f(on,"SPAN",{class:!0,"data-svelte-h":!0}),F(Dt)!=="svelte-dgw2oa"&&(Dt.textContent=An),yn=h(on),R(Et.$$.fragment,on),on.forEach(c),xn=h(rn),R(Xe.$$.fragment,rn),rn.forEach(c),kn=h(ln),Ze=f(ln,"DIV",{class:!0});var un=y(Ze);et=f(un,"DIV",{class:!0});var cn=y(et);qt=f(cn,"SPAN",{class:!0,"data-svelte-h":!0}),F(qt)!=="svelte-1br9yke"&&(qt.textContent=Hn),Cn=h(cn),R(It.$$.fragment,cn),cn.forEach(c),Dn=h(un),R(tt.$$.fragment,un),un.forEach(c),ln.forEach(c),this.h()},h(){_(a,"name","twitter:card"),_(a,"content","summary_large_image"),_(t,"name","twitter:site"),_(t,"content","@evidence_dev"),_(se,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(fe,"class","px-3 py-1 rounded bg-[#0d9488] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(ae,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(U,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),_(ce,"class","text-base font-extrabold text-[#0d9488]"),_(K,"class","flex items-center gap-1.5"),_(ee,"class","text-gray-400"),_(pe,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded flex items-center gap-1.5 w-max"),_(ie,"class","flex flex-col gap-1"),_(me,"class","flex items-center gap-2"),_(G,"class","flex flex-wrap items-start gap-3"),_s(ve,"color","#ffffff"),_(ve,"class","text-[8px] font-semibold bg-white/10 border border-white/20 px-2 py-0.5 rounded self-start"),_(j,"class","flex flex-col gap-2"),_(xe,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1"),_(W,"class","flex flex-col gap-0.5 text-gray-500 leading-tight"),_(oe,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]"),_(re,"class","flex flex-col items-end self-stretch md:self-auto"),_(ue,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),_(Me,"class","flex justify-between items-center"),_(S,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(Ce,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(ke,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(ke,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(gt,"class","flex justify-between items-center"),_(Bt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(bt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(Ve,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(Ve,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_($t,"class","flex justify-between items-center"),_(Ut,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(yt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(Ae,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(Ae,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(kt,"class","flex justify-between items-center"),_(jt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(Ct,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(He,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(He,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(Y,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),_(Dt,"class","font-bold text-gray-700 text-xs"),_(Je,"class","flex items-center gap-1.5 mb-1"),_(Qe,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),_(qt,"class","font-bold text-gray-700 text-xs"),_(et,"class","flex items-center gap-1.5 mb-1"),_(Ze,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),_(Le,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(s,d){Ne&&Ne.m(s,d),x(s,n,d),zt.m(Oe.head,null),o(Oe.head,a),o(Oe.head,t),Pe&&Pe.m(Oe.head,null),o(Oe.head,r),x(s,u,d),V&&V.m(s,d),x(s,m,d),A&&A.m(s,d),x(s,l,d),H&&H.m(s,d),x(s,C,d),L&&L.m(s,d),x(s,E,d),N&&N.m(s,d),x(s,e,d),P&&P.m(s,d),x(s,k,d),O&&O.m(s,d),x(s,w,d),B&&B.m(s,d),x(s,ne,d),x(s,U,d),o(U,se),o(U,ct),o(U,fe),o(U,he),o(U,ae),x(s,Ue,d),x(s,ue,d),o(ue,j),o(j,K),o(K,ce),o(K,_t),I(ge,K,null),o(j,be),o(j,G),o(G,ie),I(we,ie,null),o(ie,dt),o(ie,pe),o(pe,ee),o(pe,Se),o(pe,je),o(G,ft),o(G,me),I(Q,me,null),o(me,$e),I(le,me,null),o(j,pt),o(j,ve),o(ue,ye),o(ue,re),o(re,oe),o(oe,xe),o(oe,mt),o(oe,W),nt[M].m(W,null),o(W,We),st[J].m(W,null),x(s,ze,d),x(s,Y,d),o(Y,ke),o(ke,Fe),o(Fe,Me),o(Fe,$),o(Fe,S),I(_e,S,null),o(ke,vt),o(ke,Ce),o(Y,Ot),o(Y,Ve),o(Ve,ht),o(ht,gt),o(ht,pn),o(ht,Bt),I(Ye,Bt,null),o(Ve,mn),o(Ve,bt),o(Y,vn),o(Y,Ae),o(Ae,wt),o(wt,$t),o(wt,hn),o(wt,Ut),I(Ke,Ut,null),o(Ae,gn),o(Ae,yt),o(Y,bn),o(Y,He),o(He,xt),o(xt,kt),o(xt,wn),o(xt,jt),I(Ge,jt,null),o(He,$n),o(He,Ct),x(s,Gt,d),x(s,Le,d),o(Le,Qe),o(Qe,Je),o(Je,Dt),o(Je,yn),I(Et,Je,null),o(Qe,xn),I(Xe,Qe,null),o(Le,kn),o(Le,Ze),o(Ze,et),o(et,qt),o(et,Cn),I(It,et,null),o(Ze,Dn),I(tt,Ze,null),Wt=!0,En||(Ln=[qn(se,"click",i[47]),qn(fe,"click",i[48]),qn(ae,"click",i[49])],En=!0)},p(s,d){typeof D<"u"&&D.title&&D.hide_title!==!0&&Ne.p(s,d),zt.p(s,d),typeof D=="object"&&Pe.p(s,d),s[0]?V?(V.p(s,d),d[0]&1&&v(V,1)):(V=Zn(s),V.c(),v(V,1),V.m(m.parentNode,m)):V&&(Te(),b(V,1,1,()=>{V=null}),Re()),s[1]?A?(A.p(s,d),d[0]&2&&v(A,1)):(A=es(s),A.c(),v(A,1),A.m(l.parentNode,l)):A&&(Te(),b(A,1,1,()=>{A=null}),Re()),s[2]?H?(H.p(s,d),d[0]&4&&v(H,1)):(H=ts(s),H.c(),v(H,1),H.m(C.parentNode,C)):H&&(Te(),b(H,1,1,()=>{H=null}),Re()),s[3]?L?(L.p(s,d),d[0]&8&&v(L,1)):(L=ns(s),L.c(),v(L,1),L.m(E.parentNode,E)):L&&(Te(),b(L,1,1,()=>{L=null}),Re()),s[4]?N?(N.p(s,d),d[0]&16&&v(N,1)):(N=ss(s),N.c(),v(N,1),N.m(e.parentNode,e)):N&&(Te(),b(N,1,1,()=>{N=null}),Re()),s[5]?P?(P.p(s,d),d[0]&32&&v(P,1)):(P=as(s),P.c(),v(P,1),P.m(k.parentNode,k)):P&&(Te(),b(P,1,1,()=>{P=null}),Re()),s[6]?O?(O.p(s,d),d[0]&64&&v(O,1)):(O=is(s),O.c(),v(O,1),O.m(w.parentNode,w)):O&&(Te(),b(O,1,1,()=>{O=null}),Re()),s[7]?B?(B.p(s,d),d[0]&128&&v(B,1)):(B=ls(s),B.c(),v(B,1),B.m(ne.parentNode,ne)):B&&(Te(),b(B,1,1,()=>{B=null}),Re()),(!Wt||d[0]&256)&&cs(je,s[8]);const te={};d[0]&1&&(te.data=s[0]),Q.$set(te);const de={};d[0]&2&&(de.data=s[1]),le.$set(de);let Ie=M;M=Pn(s),M===Ie?nt[M].p(s,d):(Te(),b(nt[Ie],1,1,()=>{nt[Ie]=null}),Re(),z=nt[M],z?z.p(s,d):(z=nt[M]=Nn[M](s),z.c()),v(z,1),z.m(W,We));let at=J;J=Bn(s),J===at?st[J].p(s,d):(Te(),b(st[at],1,1,()=>{st[at]=null}),Re(),X=st[J],X?X.p(s,d):(X=st[J]=On[J](s),X.c()),v(X,1),X.m(W,null));const Rt={};d[0]&4&&(Rt.data=s[2]),_e.$set(Rt);const Tt={};d[0]&8&&(Tt.data=s[3]),Ye.$set(Tt);const St={};d[0]&16&&(St.data=s[4]),Ke.$set(St);const Ft={};d[0]&32&&(Ft.data=s[5]),Ge.$set(Ft);const Yt={};d[0]&64&&(Yt.data=s[6]),Xe.$set(Yt);const Mt={};d[0]&128&&(Mt.data=s[7]),tt.$set(Mt)},i(s){Wt||(v(V),v(A),v(H),v(L),v(N),v(P),v(O),v(B),v(ge.$$.fragment,s),v(we.$$.fragment,s),v(Q.$$.fragment,s),v(le.$$.fragment,s),v(z),v(X),v(_e.$$.fragment,s),v(Ye.$$.fragment,s),v(Ke.$$.fragment,s),v(Ge.$$.fragment,s),v(Et.$$.fragment,s),v(Xe.$$.fragment,s),v(It.$$.fragment,s),v(tt.$$.fragment,s),Wt=!0)},o(s){b(V),b(A),b(H),b(L),b(N),b(P),b(O),b(B),b(ge.$$.fragment,s),b(we.$$.fragment,s),b(Q.$$.fragment,s),b(le.$$.fragment,s),b(z),b(X),b(_e.$$.fragment,s),b(Ye.$$.fragment,s),b(Ke.$$.fragment,s),b(Ge.$$.fragment,s),b(Et.$$.fragment,s),b(Xe.$$.fragment,s),b(It.$$.fragment,s),b(tt.$$.fragment,s),Wt=!1},d(s){s&&(c(n),c(u),c(m),c(l),c(C),c(E),c(e),c(k),c(w),c(ne),c(U),c(Ue),c(ue),c(ze),c(Y),c(Gt),c(Le)),Ne&&Ne.d(s),zt.d(s),c(a),c(t),Pe&&Pe.d(s),c(r),V&&V.d(s),A&&A.d(s),H&&H.d(s),L&&L.d(s),N&&N.d(s),P&&P.d(s),O&&O.d(s),B&&B.d(s),q(ge),q(we),q(Q),q(le),nt[M].d(),st[J].d(),q(_e),q(Ye),q(Ke),q(Ge),q(Et),q(Xe),q(It),q(tt),En=!1,us(Ln)}}}const D={title:"Sales & Win-Loss Analysis"},Ns="2026-06-15";function _n(i){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${i.getDate()} ${n[i.getMonth()]} ${i.getFullYear()}`}function Ps(i,n){const a=new Date(n+"T00:00:00"),t=_n(a);if(i==="mtd"){const r=new Date(a.getFullYear(),a.getMonth(),1);return`${_n(r)} - ${t}`}if(i==="qtd"){const r=Math.floor(a.getMonth()/3)*3,u=new Date(a.getFullYear(),r,1);return`${_n(u)} - ${t}`}if(i==="ytd"){const r=new Date(a.getFullYear(),0,1);return`${_n(r)} - ${t}`}return`All Time - ${t}`}const Os=i=>i>=1e6?"$"+i/1e6+"M":i>=1e3?"$"+i/1e3+"K":"$"+i,Bs=i=>i>=1e6?"$"+i/1e6+"M":i>=1e3?"$"+i/1e3+"K":"$"+i;function Us(i,n,a){let t,r,u;Yn(i,Ds,$=>a(46,r=$)),Yn(i,Xn,$=>a(55,u=$));let{data:m}=n,{data:l={},customFormattingSettings:C,__db:E,inputs:e}=m;fs(Xn,u="b6c1e1557fc0a9a1e3a0b220257fd6d9",u);let k=ys($s(e));ps(k.subscribe($=>a(12,e=$))),ms(Cs,{getCustomFormats:()=>C.customFormats||[]});const w=($,S)=>Es(E.query,$,{query_name:S});xs(w),r.params,Kn(()=>!0);let ne={initialData:void 0,initialError:void 0},U=Z`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`;l.bu_list_data&&(l.bu_list_data instanceof Error?ne.initialError=l.bu_list_data:ne.initialData=l.bu_list_data,l.bu_list_columns&&(ne.knownColumns=l.bu_list_columns));let At,ct=!1;const fe=lt.createReactive({callback:$=>{a(0,At=$)},execFn:w},{id:"bu_list",...ne});fe(se,{noResolve:U,...ne}),globalThis[Symbol.for("bu_list")]={get value(){return At}};let De={initialData:void 0,initialError:void 0},he=Z`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`,ae=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`;l.region_list_data&&(l.region_list_data instanceof Error?De.initialError=l.region_list_data:De.initialData=l.region_list_data,l.region_list_columns&&(De.knownColumns=l.region_list_columns));let Ht,Ue=!1;const ue=lt.createReactive({callback:$=>{a(1,Ht=$)},execFn:w},{id:"region_list",...De});ue(ae,{noResolve:he,...De}),globalThis[Symbol.for("region_list")]={get value(){return Ht}};let j={initialData:void 0,initialError:void 0},K=Z`select
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
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_win_rate_data&&(l.kpi_win_rate_data instanceof Error?j.initialError=l.kpi_win_rate_data:j.initialData=l.kpi_win_rate_data,l.kpi_win_rate_columns&&(j.knownColumns=l.kpi_win_rate_columns));let Lt,_t=!1;const ge=lt.createReactive({callback:$=>{a(2,Lt=$)},execFn:w},{id:"kpi_win_rate",...j});ge(ce,{noResolve:K,...j}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return Lt}};let be={initialData:void 0,initialError:void 0},G=Z`select
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
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_lost_value_data&&(l.kpi_lost_value_data instanceof Error?be.initialError=l.kpi_lost_value_data:be.initialData=l.kpi_lost_value_data,l.kpi_lost_value_columns&&(be.knownColumns=l.kpi_lost_value_columns));let we,dt=!1;const pe=lt.createReactive({callback:$=>{a(3,we=$)},execFn:w},{id:"kpi_lost_value",...be});pe(ie,{noResolve:G,...be}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return we}};let ee={initialData:void 0,initialError:void 0},Ee=Z`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,Se=`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_open_deals_data&&(l.kpi_open_deals_data instanceof Error?ee.initialError=l.kpi_open_deals_data:ee.initialData=l.kpi_open_deals_data,l.kpi_open_deals_columns&&(ee.knownColumns=l.kpi_open_deals_columns));let je,ft=!1;const me=lt.createReactive({callback:$=>{a(4,je=$)},execFn:w},{id:"kpi_open_deals",...ee});me(Se,{noResolve:Ee,...ee}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return je}};let Q={initialData:void 0,initialError:void 0},$e=Z`with client_shares as (
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
from client_shares`;l.kpi_top_client_concentration_data&&(l.kpi_top_client_concentration_data instanceof Error?Q.initialError=l.kpi_top_client_concentration_data:Q.initialData=l.kpi_top_client_concentration_data,l.kpi_top_client_concentration_columns&&(Q.knownColumns=l.kpi_top_client_concentration_columns));let pt,ve=!1;const Nt=lt.createReactive({callback:$=>{a(5,pt=$)},execFn:w},{id:"kpi_top_client_concentration",...Q});Nt(le,{noResolve:$e,...Q}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return pt}};let ye={initialData:void 0,initialError:void 0},re=Z`with reason_ranks as (
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
order by total_value desc`;l.win_loss_reasons_data&&(l.win_loss_reasons_data instanceof Error?ye.initialError=l.win_loss_reasons_data:ye.initialData=l.win_loss_reasons_data,l.win_loss_reasons_columns&&(ye.knownColumns=l.win_loss_reasons_columns));let xe,Pt=!1;const mt=lt.createReactive({callback:$=>{a(6,xe=$)},execFn:w},{id:"win_loss_reasons",...ye});mt(oe,{noResolve:re,...ye}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return xe}};let W={initialData:void 0,initialError:void 0},M=Z`select
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
order by pipeline_value desc`;l.client_pipeline_share_data&&(l.client_pipeline_share_data instanceof Error?W.initialError=l.client_pipeline_share_data:W.initialData=l.client_pipeline_share_data,l.client_pipeline_share_columns&&(W.knownColumns=l.client_pipeline_share_columns));let We,J=!1;const X=lt.createReactive({callback:$=>{a(7,We=$)},execFn:w},{id:"client_pipeline_share",...W});X(z,{noResolve:M,...W}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return We}};let ze="ytd";function Y($){const S=$.endsWith("/")?$:$+"/",vt=new URLSearchParams(window.location.search).toString().replace(/%2C/g,","),Ce=vt?`?${vt}`:"";return(typeof fn=="function"?fn(S):S)+Ce}Kn(()=>{localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),document.addEventListener("click",$=>{const S=$.target.closest("canvas");if(!S)return;const _e=S.closest("div");if(!_e)return;const Ce=(_e.parentElement||_e).querySelectorAll('div[style*="position"][style*="pointer-events"]');for(const qe of Ce){const Ot=(qe.innerText||qe.textContent||"").trim();if(Ot&&qe.offsetWidth>0){navigator.clipboard.writeText(Ot).then(()=>{qe.style.transition="opacity 0.15s",qe.style.opacity="0.4",setTimeout(()=>{qe.style.opacity="1"},350)});break}}})});const ke=()=>In(Y("/overview")),Fe=()=>In(Y("/sales")),Me=()=>In(Y("/operations")),Kt=$=>{const S=String($||"");return S.length>28?"{xsmall|"+S+"}":S.length>20?"{small|"+S+"}":S.length>14?"{medium|"+S+"}":S};return i.$$set=$=>{"data"in $&&a(10,m=$.data)},i.$$.update=()=>{i.$$.dirty[0]&1024&&a(11,{data:l={},customFormattingSettings:C,__db:E}=m,l),i.$$.dirty[0]&2048&&ks.set(Object.keys(l).length>0),i.$$.dirty[1]&32768&&r.params,i.$$.dirty[0]&4096&&a(14,U=Z`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&4096&&a(15,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&122880&&(U||!ct?U||(fe(se,{noResolve:U,...ne}),a(16,ct=!0)):fe(se,{noResolve:U})),i.$$.dirty[0]&4096&&a(18,he=Z`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&4096&&a(19,ae=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&1966080&&(he||!Ue?he||(ue(ae,{noResolve:he,...De}),a(20,Ue=!0)):ue(ae,{noResolve:he})),i.$$.dirty[0]&4096&&a(22,K=Z`select
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
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&4096&&a(23,ce=`select
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
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&31457280&&(K||!_t?K||(ge(ce,{noResolve:K,...j}),a(24,_t=!0)):ge(ce,{noResolve:K})),i.$$.dirty[0]&4096&&a(26,G=Z`select
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
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&4096&&a(27,ie=`select
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
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&503316480&&(G||!dt?G||(pe(ie,{noResolve:G,...be}),a(28,dt=!0)):pe(ie,{noResolve:G})),i.$$.dirty[0]&4096&&a(30,Ee=Z`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&4096&&a(31,Se=`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&1610612736|i.$$.dirty[1]&3&&(Ee||!ft?Ee||(me(Se,{noResolve:Ee,...ee}),a(32,ft=!0)):me(Se,{noResolve:Ee})),i.$$.dirty[0]&4096&&a(34,$e=Z`with client_shares as (
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
from client_shares`),i.$$.dirty[0]&4096&&a(35,le=`with client_shares as (
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
from client_shares`),i.$$.dirty[1]&60&&($e||!ve?$e||(Nt(le,{noResolve:$e,...Q}),a(36,ve=!0)):Nt(le,{noResolve:$e})),i.$$.dirty[0]&4096&&a(38,re=Z`with reason_ranks as (
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
order by total_value desc`),i.$$.dirty[0]&4096&&a(39,oe=`with reason_ranks as (
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
order by total_value desc`),i.$$.dirty[1]&960&&(re||!Pt?re||(mt(oe,{noResolve:re,...ye}),a(40,Pt=!0)):mt(oe,{noResolve:re})),i.$$.dirty[0]&4096&&a(42,M=Z`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),i.$$.dirty[0]&4096&&a(43,z=`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),i.$$.dirty[1]&15360&&(M||!J?M||(X(z,{noResolve:M,...W}),a(44,J=!0)):X(z,{noResolve:M})),i.$$.dirty[0]&4096&&a(45,ze=(e==null?void 0:e.time_filter)||"ytd"),i.$$.dirty[1]&16384&&a(8,t=Ps(ze,Ns))},[At,Ht,Lt,we,je,pt,xe,We,t,Y,m,l,e,ne,U,se,ct,De,he,ae,Ue,j,K,ce,_t,be,G,ie,dt,ee,Ee,Se,ft,Q,$e,le,ve,ye,re,oe,Pt,W,M,z,J,ze,r,ke,Fe,Me,Kt]}class ea extends vs{constructor(n){super(),hs(this,n,Us,Ls,os,{data:10},null,[-1,-1,-1])}}export{ea as component};
