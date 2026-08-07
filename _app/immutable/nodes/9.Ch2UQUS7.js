import{s as as,d as c,E as is,D as ls,i as y,a as o,z as kn,b as _,J as rs,c as h,h as os,e as f,f as on,r as k,g as S,t as ot,j as g,k as p,u as ut,l as Un,m as us,o as cs,p as _s,q as jn,n as Be}from"../chunks/scheduler.Cpit_XQ7.js";import{S as ds,i as fs,d as I,t as b,a as v,c as Se,m as R,b as T,e as F,g as Me}from"../chunks/index.JnElEpLO.js";import{G as ps,a as Wn,V as Mt,B as zn,g as ms,Q as ct}from"../chunks/GlobalSingleSelect.DrUxq-fe.js";import{e as Yn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.D1gj7mHF.js";import{w as vs,g as Cn}from"../chunks/entry.C2PqD-ft.js";import{e as hs,s as gs,Q as rt,p as bs,a as un,r as Kn,C as ws}from"../chunks/inferColumnTypes.kll71HD1.js";import{h as Q}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as $s}from"../chunks/stores.Cm2uCj6T.js";import{p as ys}from"../chunks/profile.BW8tN6E9.js";const{document:Pe}=ms;function xs(i){let n,s=D.title+"",t;return{c(){n=p("h1"),t=ut(s),this.h()},l(r){n=f(r,"H1",{class:!0});var u=k(n);t=ot(u,s),u.forEach(c),this.h()},h(){_(n,"class","title")},m(r,u){y(r,n,u),o(n,t)},p:Be,d(r){r&&c(n)}}}function ks(i){return{c(){this.h()},l(n){this.h()},h(){Pe.title="Evidence"},m:Be,p:Be,d:Be}}function Cs(i){let n,s,t,r,u;return Pe.title=n=D.title,{c(){s=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){s=h(m),t=f(m,"META",{property:!0,content:!0}),r=h(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,l;_(t,"property","og:title"),_(t,"content",((m=D.og)==null?void 0:m.title)??D.title),_(u,"name","twitter:title"),_(u,"content",((l=D.og)==null?void 0:l.title)??D.title)},m(m,l){y(m,s,l),y(m,t,l),y(m,r,l),y(m,u,l)},p(m,l){l&0&&n!==(n=D.title)&&(Pe.title=n)},d(m){m&&(c(s),c(t),c(r),c(u))}}}function Ds(i){var u,m;let n,s,t=(D.description||((u=D.og)==null?void 0:u.description))&&Es(),r=((m=D.og)==null?void 0:m.image)&&qs();return{c(){t&&t.c(),n=g(),r&&r.c(),s=on()},l(l){t&&t.l(l),n=h(l),r&&r.l(l),s=on()},m(l,C){t&&t.m(l,C),y(l,n,C),r&&r.m(l,C),y(l,s,C)},p(l,C){var E,e;(D.description||(E=D.og)!=null&&E.description)&&t.p(l,C),(e=D.og)!=null&&e.image&&r.p(l,C)},d(l){l&&(c(n),c(s)),t&&t.d(l),r&&r.d(l)}}}function Es(i){let n,s,t,r,u;return{c(){n=p("meta"),s=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){n=f(m,"META",{name:!0,content:!0}),s=h(m),t=f(m,"META",{property:!0,content:!0}),r=h(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,l,C;_(n,"name","description"),_(n,"content",D.description??((m=D.og)==null?void 0:m.description)),_(t,"property","og:description"),_(t,"content",((l=D.og)==null?void 0:l.description)??D.description),_(u,"name","twitter:description"),_(u,"content",((C=D.og)==null?void 0:C.description)??D.description)},m(m,l){y(m,n,l),y(m,s,l),y(m,t,l),y(m,r,l),y(m,u,l)},p:Be,d(m){m&&(c(n),c(s),c(t),c(r),c(u))}}}function qs(i){let n,s,t;return{c(){n=p("meta"),s=g(),t=p("meta"),this.h()},l(r){n=f(r,"META",{property:!0,content:!0}),s=h(r),t=f(r,"META",{name:!0,content:!0}),this.h()},h(){var r,u;_(n,"property","og:image"),_(n,"content",un((r=D.og)==null?void 0:r.image)),_(t,"name","twitter:image"),_(t,"content",un((u=D.og)==null?void 0:u.image))},m(r,u){y(r,n,u),y(r,s,u),y(r,t,u)},p:Be,d(r){r&&(c(n),c(s),c(t))}}}function Gn(i){let n,s;return n=new ct({props:{queryID:"bu_list",queryResult:i[0]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&1&&(u.queryResult=t[0]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function Qn(i){let n,s;return n=new ct({props:{queryID:"region_list",queryResult:i[1]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&2&&(u.queryResult=t[1]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function Jn(i){let n,s;return n=new ct({props:{queryID:"kpi_win_rate",queryResult:i[2]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&4&&(u.queryResult=t[2]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function Xn(i){let n,s;return n=new ct({props:{queryID:"kpi_lost_value",queryResult:i[3]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&8&&(u.queryResult=t[3]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function Zn(i){let n,s;return n=new ct({props:{queryID:"kpi_open_deals",queryResult:i[4]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&16&&(u.queryResult=t[4]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function es(i){let n,s;return n=new ct({props:{queryID:"kpi_top_client_concentration",queryResult:i[5]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&32&&(u.queryResult=t[5]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function ts(i){let n,s;return n=new ct({props:{queryID:"win_loss_reasons",queryResult:i[6]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&64&&(u.queryResult=t[6]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function ns(i){let n,s;return n=new ct({props:{queryID:"client_pipeline_share",queryResult:i[7]}}),{c(){F(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,r){R(n,t,r),s=!0},p(t,r){const u={};r[0]&128&&(u.queryResult=t[7]),n.$set(u)},i(t){s||(v(n.$$.fragment,t),s=!0)},o(t){b(n.$$.fragment,t),s=!1},d(t){I(n,t)}}}function Is(i){let n,s,t="✦",r,u,m,l,C,E;return l=new Mt({props:{data:i[2],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),s=p("span"),s.textContent=t,r=g(),u=p("span"),m=ut("Win rate is healthy ("),F(l.$$.fragment),C=ut(")"),this.h()},l(e){n=f(e,"DIV",{class:!0});var x=k(n);s=f(x,"SPAN",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-i2y69v"&&(s.textContent=t),r=h(x),u=f(x,"SPAN",{});var w=k(u);m=ot(w,"Win rate is healthy ("),T(l.$$.fragment,w),C=ot(w,")"),w.forEach(c),x.forEach(c),this.h()},h(){_(s,"class","text-teal-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,x){y(e,n,x),o(n,s),o(n,r),o(n,u),o(u,m),R(l,u,null),o(u,C),E=!0},p(e,x){const w={};x[0]&4&&(w.data=e[2]),l.$set(w)},i(e){E||(v(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),I(l)}}}function Rs(i){let n,s,t="✦",r,u,m,l,C,E;return l=new Mt({props:{data:i[2],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),s=p("span"),s.textContent=t,r=g(),u=p("span"),m=ut("Win rate is low ("),F(l.$$.fragment),C=ut(" vs 25% target)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var x=k(n);s=f(x,"SPAN",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-16athnc"&&(s.textContent=t),r=h(x),u=f(x,"SPAN",{});var w=k(u);m=ot(w,"Win rate is low ("),T(l.$$.fragment,w),C=ot(w," vs 25% target)"),w.forEach(c),x.forEach(c),this.h()},h(){_(s,"class","text-amber-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,x){y(e,n,x),o(n,s),o(n,r),o(n,u),o(u,m),R(l,u,null),o(u,C),E=!0},p(e,x){const w={};x[0]&4&&(w.data=e[2]),l.$set(w)},i(e){E||(v(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),I(l)}}}function Ts(i){let n,s='<span class="text-teal-600 font-bold">✦</span> <span>Client concentration is balanced</span>';return{c(){n=p("div"),n.innerHTML=s,this.h()},l(t){n=f(t,"DIV",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-d6fatc"&&(n.innerHTML=s),this.h()},h(){_(n,"class","flex items-start gap-1")},m(t,r){y(t,n,r)},p:Be,i:Be,o:Be,d(t){t&&c(n)}}}function Fs(i){let n,s,t="✦",r,u,m,l,C,E;return l=new Mt({props:{data:i[5],column:"max_concentration",fmt:"pct0"}}),{c(){n=p("div"),s=p("span"),s.textContent=t,r=g(),u=p("span"),m=ut("High concentration ("),F(l.$$.fragment),C=ut(" of pipeline)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var x=k(n);s=f(x,"SPAN",{class:!0,"data-svelte-h":!0}),S(s)!=="svelte-16athnc"&&(s.textContent=t),r=h(x),u=f(x,"SPAN",{});var w=k(u);m=ot(w,"High concentration ("),T(l.$$.fragment,w),C=ot(w," of pipeline)"),w.forEach(c),x.forEach(c),this.h()},h(){_(s,"class","text-amber-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,x){y(e,n,x),o(n,s),o(n,r),o(n,u),o(u,m),R(l,u,null),o(u,C),E=!0},p(e,x){const w={};x[0]&32&&(w.data=e[5]),l.$set(w)},i(e){E||(v(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),I(l)}}}function Ss(i){let n,s,t,r,u,m,l,C,E,e,x,w,ne,U,se,Vt="Overview Cockpit",_t,de,Ee="Sales & Win-Loss",$e,ae,At="Operations & Vendors",Ue,oe,j,J,je="Sales Pipeline Deep-Dive",dt,fe,pe,X,ye,ie,xe,Ht="📅",ft,me,ke,le,ve,pt,he,Ce,Y,We="Date snapshotted at June 2026",mt,qe,ge,Z,Ie="<span>💡</span> Sales Insights",Ve,re,K,G,be,M,W,ze,z,ue,De,we,Wt='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pipeline Win Rate</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',Pt,Ye,Re,$,q,vt="Closed Won vs. Closed Lost count",ht,ce,ee,Te,Dn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Lost Opportunity Value</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',cn,Lt,Ke,_n,gt,En="Sum of HubSpot deal amounts marked as 'Closed Lost'",dn,Ae,bt,wt,qn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Open Deals in Funnel</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',fn,Nt,Ge,pn,$t,In="Active prospects in pipeline",mn,He,yt,xt,Rn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Max Client Concentration</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',vn,Ot,Qe,hn,kt,Tn="Largest client's share of pipeline",zt,Le,Je,Xe,Ct,Fn="CRM Closed Won/Lost Reason Breakdown",gn,Dt,bn,Ze,wn,et,tt,Et,Sn="Open Pipeline Value by Corporate Client",$n,qt,yn,nt,Bt,xn,Mn,Ne=typeof D<"u"&&D.title&&D.hide_title!==!0&&xs();function ss(a,d){return typeof D<"u"&&D.title?Cs:ks}let Ut=ss()(i),Oe=typeof D=="object"&&Ds(),V=i[0]&&Gn(i),A=i[1]&&Qn(i),H=i[2]&&Jn(i),L=i[3]&&Xn(i),N=i[4]&&Zn(i),O=i[5]&&es(i),P=i[6]&&ts(i),B=i[7]&&ns(i);X=new ps({props:{name:"time_filter",defaultValue:"ytd"}}),ve=new Wn({props:{name:"business_unit",title:"Business Unit",data:i[0],valueColumn:"business_unit_id",labelColumn:"business_unit"}}),he=new Wn({props:{name:"region",title:"Region",data:i[1],valueColumn:"region_id",labelColumn:"region"}});const Vn=[Rs,Is],st=[];function An(a,d){var te,_e;return(te=a[2][0])!=null&&te.win_rate&&((_e=a[2][0])==null?void 0:_e.win_rate)<.25?0:1}K=An(i),G=st[K]=Vn[K](i);const Hn=[Fs,Ts],at=[];function Ln(a,d){var te,_e;return(te=a[5][0])!=null&&te.max_concentration&&((_e=a[5][0])==null?void 0:_e.max_concentration)>.5?0:1}return M=Ln(i),W=at[M]=Hn[M](i),Re=new Mt({props:{data:i[2],column:"win_rate",fmt:"pct1"}}),Ke=new Mt({props:{data:i[3],column:"lost_value",fmt:"usd"}}),Ge=new Mt({props:{data:i[4],column:"open_deals_count"}}),Qe=new Mt({props:{data:i[5],column:"max_concentration",fmt:"pct0"}}),Dt=new Yn({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Ze=new zn({props:{data:i[6],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,legend:"true",echartsOptions:{grid:{top:38,bottom:20,left:40,right:40,containLabel:!0},legend:{top:0,itemGap:15},xAxis:{splitNumber:3,axisLabel:{formatter:As}}}}}),qt=new Yn({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),nt=new zn({props:{data:i[7],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{top:15,bottom:25,left:35,right:45,containLabel:!0},xAxis:{splitNumber:3,axisLabel:{formatter:Hs}},yAxis:{axisLabel:{interval:0,formatter:i[50],rich:{xsmall:{fontSize:7,color:"#4b5563"},small:{fontSize:8.5,color:"#4b5563"},medium:{fontSize:9.5,color:"#4b5563"}}}}}}}),{c(){Ne&&Ne.c(),n=g(),Ut.c(),s=p("meta"),t=p("meta"),Oe&&Oe.c(),r=on(),u=g(),V&&V.c(),m=g(),A&&A.c(),l=g(),H&&H.c(),C=g(),L&&L.c(),E=g(),N&&N.c(),e=g(),O&&O.c(),x=g(),P&&P.c(),w=g(),B&&B.c(),ne=g(),U=p("div"),se=p("button"),se.textContent=Vt,_t=g(),de=p("button"),de.textContent=Ee,$e=g(),ae=p("button"),ae.textContent=At,Ue=g(),oe=p("div"),j=p("div"),J=p("div"),J.textContent=je,dt=g(),fe=p("div"),pe=p("div"),F(X.$$.fragment),ye=g(),ie=p("div"),xe=p("span"),xe.textContent=Ht,ft=g(),me=ut(i[8]),ke=g(),le=p("div"),F(ve.$$.fragment),pt=g(),F(he.$$.fragment),Ce=g(),Y=p("div"),Y.textContent=We,mt=g(),qe=p("div"),ge=p("div"),Z=p("div"),Z.innerHTML=Ie,Ve=g(),re=p("div"),G.c(),be=g(),W.c(),ze=g(),z=p("div"),ue=p("a"),De=p("div"),we=p("div"),we.innerHTML=Wt,Pt=g(),Ye=p("h2"),F(Re.$$.fragment),$=g(),q=p("div"),q.textContent=vt,ht=g(),ce=p("a"),ee=p("div"),Te=p("div"),Te.innerHTML=Dn,cn=g(),Lt=p("h2"),F(Ke.$$.fragment),_n=g(),gt=p("div"),gt.textContent=En,dn=g(),Ae=p("a"),bt=p("div"),wt=p("div"),wt.innerHTML=qn,fn=g(),Nt=p("h2"),F(Ge.$$.fragment),pn=g(),$t=p("div"),$t.textContent=In,mn=g(),He=p("a"),yt=p("div"),xt=p("div"),xt.innerHTML=Rn,vn=g(),Ot=p("h2"),F(Qe.$$.fragment),hn=g(),kt=p("div"),kt.textContent=Tn,zt=g(),Le=p("div"),Je=p("div"),Xe=p("div"),Ct=p("span"),Ct.textContent=Fn,gn=g(),F(Dt.$$.fragment),bn=g(),F(Ze.$$.fragment),wn=g(),et=p("div"),tt=p("div"),Et=p("span"),Et.textContent=Sn,$n=g(),F(qt.$$.fragment),yn=g(),F(nt.$$.fragment),this.h()},l(a){Ne&&Ne.l(a),n=h(a);const d=os("svelte-2igo1p",Pe.head);Ut.l(d),s=f(d,"META",{name:!0,content:!0}),t=f(d,"META",{name:!0,content:!0}),Oe&&Oe.l(d),r=on(),d.forEach(c),u=h(a),V&&V.l(a),m=h(a),A&&A.l(a),l=h(a),H&&H.l(a),C=h(a),L&&L.l(a),E=h(a),N&&N.l(a),e=h(a),O&&O.l(a),x=h(a),P&&P.l(a),w=h(a),B&&B.l(a),ne=h(a),U=f(a,"DIV",{class:!0});var te=k(U);se=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),S(se)!=="svelte-12o4q6t"&&(se.textContent=Vt),_t=h(te),de=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),S(de)!=="svelte-1hbbhos"&&(de.textContent=Ee),$e=h(te),ae=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),S(ae)!=="svelte-1kxcs33"&&(ae.textContent=At),te.forEach(c),Ue=h(a),oe=f(a,"DIV",{class:!0});var _e=k(oe);j=f(_e,"DIV",{class:!0});var Fe=k(j);J=f(Fe,"DIV",{class:!0,"data-svelte-h":!0}),S(J)!=="svelte-mtq68w"&&(J.textContent=je),dt=h(Fe),fe=f(Fe,"DIV",{class:!0});var it=k(fe);pe=f(it,"DIV",{class:!0});var It=k(pe);T(X.$$.fragment,It),ye=h(It),ie=f(It,"DIV",{class:!0});var Rt=k(ie);xe=f(Rt,"SPAN",{class:!0,"data-svelte-h":!0}),S(xe)!=="svelte-n1bzfj"&&(xe.textContent=Ht),ft=h(Rt),me=ot(Rt,i[8]),Rt.forEach(c),It.forEach(c),ke=h(it),le=f(it,"DIV",{class:!0});var Tt=k(le);T(ve.$$.fragment,Tt),pt=h(Tt),T(he.$$.fragment,Tt),Tt.forEach(c),it.forEach(c),Ce=h(Fe),Y=f(Fe,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),S(Y)!=="svelte-tonn3n"&&(Y.textContent=We),Fe.forEach(c),mt=h(_e),qe=f(_e,"DIV",{class:!0});var jt=k(qe);ge=f(jt,"DIV",{class:!0});var Ft=k(ge);Z=f(Ft,"DIV",{class:!0,"data-svelte-h":!0}),S(Z)!=="svelte-1pqv4xl"&&(Z.innerHTML=Ie),Ve=h(Ft),re=f(Ft,"DIV",{class:!0});var St=k(re);G.l(St),be=h(St),W.l(St),St.forEach(c),Ft.forEach(c),jt.forEach(c),_e.forEach(c),ze=h(a),z=f(a,"DIV",{class:!0});var lt=k(z);ue=f(lt,"A",{href:!0,class:!0});var Yt=k(ue);De=f(Yt,"DIV",{});var Kt=k(De);we=f(Kt,"DIV",{class:!0,"data-svelte-h":!0}),S(we)!=="svelte-u68fg7"&&(we.innerHTML=Wt),Pt=h(Kt),Ye=f(Kt,"H2",{class:!0});var Nn=k(Ye);T(Re.$$.fragment,Nn),Nn.forEach(c),Kt.forEach(c),$=h(Yt),q=f(Yt,"DIV",{class:!0,"data-svelte-h":!0}),S(q)!=="svelte-1d405ho"&&(q.textContent=vt),Yt.forEach(c),ht=h(lt),ce=f(lt,"A",{href:!0,class:!0});var Gt=k(ce);ee=f(Gt,"DIV",{});var Qt=k(ee);Te=f(Qt,"DIV",{class:!0,"data-svelte-h":!0}),S(Te)!=="svelte-10nsonq"&&(Te.innerHTML=Dn),cn=h(Qt),Lt=f(Qt,"H2",{class:!0});var On=k(Lt);T(Ke.$$.fragment,On),On.forEach(c),Qt.forEach(c),_n=h(Gt),gt=f(Gt,"DIV",{class:!0,"data-svelte-h":!0}),S(gt)!=="svelte-le386w"&&(gt.textContent=En),Gt.forEach(c),dn=h(lt),Ae=f(lt,"A",{href:!0,class:!0});var Jt=k(Ae);bt=f(Jt,"DIV",{});var Xt=k(bt);wt=f(Xt,"DIV",{class:!0,"data-svelte-h":!0}),S(wt)!=="svelte-cb2462"&&(wt.innerHTML=qn),fn=h(Xt),Nt=f(Xt,"H2",{class:!0});var Pn=k(Nt);T(Ge.$$.fragment,Pn),Pn.forEach(c),Xt.forEach(c),pn=h(Jt),$t=f(Jt,"DIV",{class:!0,"data-svelte-h":!0}),S($t)!=="svelte-12s1tku"&&($t.textContent=In),Jt.forEach(c),mn=h(lt),He=f(lt,"A",{href:!0,class:!0});var Zt=k(He);yt=f(Zt,"DIV",{});var en=k(yt);xt=f(en,"DIV",{class:!0,"data-svelte-h":!0}),S(xt)!=="svelte-183evvl"&&(xt.innerHTML=Rn),vn=h(en),Ot=f(en,"H2",{class:!0});var Bn=k(Ot);T(Qe.$$.fragment,Bn),Bn.forEach(c),en.forEach(c),hn=h(Zt),kt=f(Zt,"DIV",{class:!0,"data-svelte-h":!0}),S(kt)!=="svelte-dm1p4b"&&(kt.textContent=Tn),Zt.forEach(c),lt.forEach(c),zt=h(a),Le=f(a,"DIV",{class:!0});var tn=k(Le);Je=f(tn,"DIV",{class:!0});var nn=k(Je);Xe=f(nn,"DIV",{class:!0});var sn=k(Xe);Ct=f(sn,"SPAN",{class:!0,"data-svelte-h":!0}),S(Ct)!=="svelte-dgw2oa"&&(Ct.textContent=Fn),gn=h(sn),T(Dt.$$.fragment,sn),sn.forEach(c),bn=h(nn),T(Ze.$$.fragment,nn),nn.forEach(c),wn=h(tn),et=f(tn,"DIV",{class:!0});var an=k(et);tt=f(an,"DIV",{class:!0});var ln=k(tt);Et=f(ln,"SPAN",{class:!0,"data-svelte-h":!0}),S(Et)!=="svelte-1br9yke"&&(Et.textContent=Sn),$n=h(ln),T(qt.$$.fragment,ln),ln.forEach(c),yn=h(an),T(nt.$$.fragment,an),an.forEach(c),tn.forEach(c),this.h()},h(){_(s,"name","twitter:card"),_(s,"content","summary_large_image"),_(t,"name","twitter:site"),_(t,"content","@evidence_dev"),_(se,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(de,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(ae,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(U,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),_(J,"class","text-base font-extrabold text-[#264773]"),_(xe,"class","text-gray-400"),_(ie,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded flex items-center gap-1.5 w-max"),_(pe,"class","flex flex-col gap-1"),_(le,"class","flex items-center gap-2"),_(fe,"class","flex flex-wrap items-start gap-3"),rs(Y,"color","#ffffff"),_(Y,"class","text-[8px] font-semibold bg-white/10 border border-white/20 px-2 py-0.5 rounded self-start"),_(j,"class","flex flex-col gap-2"),_(Z,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1"),_(re,"class","flex flex-col gap-0.5 text-gray-500 leading-tight"),_(ge,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]"),_(qe,"class","flex flex-col items-end self-stretch md:self-auto"),_(oe,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),_(we,"class","flex justify-between items-center"),_(Ye,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(q,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(ue,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(ue,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(Te,"class","flex justify-between items-center"),_(Lt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(gt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(ce,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(ce,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(wt,"class","flex justify-between items-center"),_(Nt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_($t,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(Ae,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(Ae,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(xt,"class","flex justify-between items-center"),_(Ot,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(kt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(He,"href","/public.dlt-pipeline-orchestration/"+i[9]("/overview")),_(He,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(z,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),_(Ct,"class","font-bold text-gray-700 text-xs"),_(Xe,"class","flex items-center gap-1.5 mb-1"),_(Je,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),_(Et,"class","font-bold text-gray-700 text-xs"),_(tt,"class","flex items-center gap-1.5 mb-1"),_(et,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),_(Le,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(a,d){Ne&&Ne.m(a,d),y(a,n,d),Ut.m(Pe.head,null),o(Pe.head,s),o(Pe.head,t),Oe&&Oe.m(Pe.head,null),o(Pe.head,r),y(a,u,d),V&&V.m(a,d),y(a,m,d),A&&A.m(a,d),y(a,l,d),H&&H.m(a,d),y(a,C,d),L&&L.m(a,d),y(a,E,d),N&&N.m(a,d),y(a,e,d),O&&O.m(a,d),y(a,x,d),P&&P.m(a,d),y(a,w,d),B&&B.m(a,d),y(a,ne,d),y(a,U,d),o(U,se),o(U,_t),o(U,de),o(U,$e),o(U,ae),y(a,Ue,d),y(a,oe,d),o(oe,j),o(j,J),o(j,dt),o(j,fe),o(fe,pe),R(X,pe,null),o(pe,ye),o(pe,ie),o(ie,xe),o(ie,ft),o(ie,me),o(fe,ke),o(fe,le),R(ve,le,null),o(le,pt),R(he,le,null),o(j,Ce),o(j,Y),o(oe,mt),o(oe,qe),o(qe,ge),o(ge,Z),o(ge,Ve),o(ge,re),st[K].m(re,null),o(re,be),at[M].m(re,null),y(a,ze,d),y(a,z,d),o(z,ue),o(ue,De),o(De,we),o(De,Pt),o(De,Ye),R(Re,Ye,null),o(ue,$),o(ue,q),o(z,ht),o(z,ce),o(ce,ee),o(ee,Te),o(ee,cn),o(ee,Lt),R(Ke,Lt,null),o(ce,_n),o(ce,gt),o(z,dn),o(z,Ae),o(Ae,bt),o(bt,wt),o(bt,fn),o(bt,Nt),R(Ge,Nt,null),o(Ae,pn),o(Ae,$t),o(z,mn),o(z,He),o(He,yt),o(yt,xt),o(yt,vn),o(yt,Ot),R(Qe,Ot,null),o(He,hn),o(He,kt),y(a,zt,d),y(a,Le,d),o(Le,Je),o(Je,Xe),o(Xe,Ct),o(Xe,gn),R(Dt,Xe,null),o(Je,bn),R(Ze,Je,null),o(Le,wn),o(Le,et),o(et,tt),o(tt,Et),o(tt,$n),R(qt,tt,null),o(et,yn),R(nt,et,null),Bt=!0,xn||(Mn=[kn(se,"click",i[47]),kn(de,"click",i[48]),kn(ae,"click",i[49])],xn=!0)},p(a,d){typeof D<"u"&&D.title&&D.hide_title!==!0&&Ne.p(a,d),Ut.p(a,d),typeof D=="object"&&Oe.p(a,d),a[0]?V?(V.p(a,d),d[0]&1&&v(V,1)):(V=Gn(a),V.c(),v(V,1),V.m(m.parentNode,m)):V&&(Me(),b(V,1,1,()=>{V=null}),Se()),a[1]?A?(A.p(a,d),d[0]&2&&v(A,1)):(A=Qn(a),A.c(),v(A,1),A.m(l.parentNode,l)):A&&(Me(),b(A,1,1,()=>{A=null}),Se()),a[2]?H?(H.p(a,d),d[0]&4&&v(H,1)):(H=Jn(a),H.c(),v(H,1),H.m(C.parentNode,C)):H&&(Me(),b(H,1,1,()=>{H=null}),Se()),a[3]?L?(L.p(a,d),d[0]&8&&v(L,1)):(L=Xn(a),L.c(),v(L,1),L.m(E.parentNode,E)):L&&(Me(),b(L,1,1,()=>{L=null}),Se()),a[4]?N?(N.p(a,d),d[0]&16&&v(N,1)):(N=Zn(a),N.c(),v(N,1),N.m(e.parentNode,e)):N&&(Me(),b(N,1,1,()=>{N=null}),Se()),a[5]?O?(O.p(a,d),d[0]&32&&v(O,1)):(O=es(a),O.c(),v(O,1),O.m(x.parentNode,x)):O&&(Me(),b(O,1,1,()=>{O=null}),Se()),a[6]?P?(P.p(a,d),d[0]&64&&v(P,1)):(P=ts(a),P.c(),v(P,1),P.m(w.parentNode,w)):P&&(Me(),b(P,1,1,()=>{P=null}),Se()),a[7]?B?(B.p(a,d),d[0]&128&&v(B,1)):(B=ns(a),B.c(),v(B,1),B.m(ne.parentNode,ne)):B&&(Me(),b(B,1,1,()=>{B=null}),Se()),(!Bt||d[0]&256)&&ls(me,a[8]);const te={};d[0]&1&&(te.data=a[0]),ve.$set(te);const _e={};d[0]&2&&(_e.data=a[1]),he.$set(_e);let Fe=K;K=An(a),K===Fe?st[K].p(a,d):(Me(),b(st[Fe],1,1,()=>{st[Fe]=null}),Se(),G=st[K],G?G.p(a,d):(G=st[K]=Vn[K](a),G.c()),v(G,1),G.m(re,be));let it=M;M=Ln(a),M===it?at[M].p(a,d):(Me(),b(at[it],1,1,()=>{at[it]=null}),Se(),W=at[M],W?W.p(a,d):(W=at[M]=Hn[M](a),W.c()),v(W,1),W.m(re,null));const It={};d[0]&4&&(It.data=a[2]),Re.$set(It);const Rt={};d[0]&8&&(Rt.data=a[3]),Ke.$set(Rt);const Tt={};d[0]&16&&(Tt.data=a[4]),Ge.$set(Tt);const jt={};d[0]&32&&(jt.data=a[5]),Qe.$set(jt);const Ft={};d[0]&64&&(Ft.data=a[6]),Ze.$set(Ft);const St={};d[0]&128&&(St.data=a[7]),nt.$set(St)},i(a){Bt||(v(V),v(A),v(H),v(L),v(N),v(O),v(P),v(B),v(X.$$.fragment,a),v(ve.$$.fragment,a),v(he.$$.fragment,a),v(G),v(W),v(Re.$$.fragment,a),v(Ke.$$.fragment,a),v(Ge.$$.fragment,a),v(Qe.$$.fragment,a),v(Dt.$$.fragment,a),v(Ze.$$.fragment,a),v(qt.$$.fragment,a),v(nt.$$.fragment,a),Bt=!0)},o(a){b(V),b(A),b(H),b(L),b(N),b(O),b(P),b(B),b(X.$$.fragment,a),b(ve.$$.fragment,a),b(he.$$.fragment,a),b(G),b(W),b(Re.$$.fragment,a),b(Ke.$$.fragment,a),b(Ge.$$.fragment,a),b(Qe.$$.fragment,a),b(Dt.$$.fragment,a),b(Ze.$$.fragment,a),b(qt.$$.fragment,a),b(nt.$$.fragment,a),Bt=!1},d(a){a&&(c(n),c(u),c(m),c(l),c(C),c(E),c(e),c(x),c(w),c(ne),c(U),c(Ue),c(oe),c(ze),c(z),c(zt),c(Le)),Ne&&Ne.d(a),Ut.d(a),c(s),c(t),Oe&&Oe.d(a),c(r),V&&V.d(a),A&&A.d(a),H&&H.d(a),L&&L.d(a),N&&N.d(a),O&&O.d(a),P&&P.d(a),B&&B.d(a),I(X),I(ve),I(he),st[K].d(),at[M].d(),I(Re),I(Ke),I(Ge),I(Qe),I(Dt),I(Ze),I(qt),I(nt),xn=!1,is(Mn)}}}const D={title:"Sales & Win-Loss Analysis"},Ms="2026-06-15";function rn(i){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${i.getDate()} ${n[i.getMonth()]} ${i.getFullYear()}`}function Vs(i,n){const s=new Date(n+"T00:00:00"),t=rn(s);if(i==="mtd"){const r=new Date(s.getFullYear(),s.getMonth(),1);return`${rn(r)} - ${t}`}if(i==="qtd"){const r=Math.floor(s.getMonth()/3)*3,u=new Date(s.getFullYear(),r,1);return`${rn(u)} - ${t}`}if(i==="ytd"){const r=new Date(s.getFullYear(),0,1);return`${rn(r)} - ${t}`}return`All Time - ${t}`}const As=i=>i>=1e6?"$"+i/1e6+"M":i>=1e3?"$"+i/1e3+"K":"$"+i,Hs=i=>i>=1e6?"$"+i/1e6+"M":i>=1e3?"$"+i/1e3+"K":"$"+i;function Ls(i,n,s){let t,r,u;Un(i,$s,$=>s(46,r=$)),Un(i,Kn,$=>s(55,u=$));let{data:m}=n,{data:l={},customFormattingSettings:C,__db:E,inputs:e}=m;us(Kn,u="b6c1e1557fc0a9a1e3a0b220257fd6d9",u);let x=hs(vs(e));cs(x.subscribe($=>s(12,e=$))),_s(ws,{getCustomFormats:()=>C.customFormats||[]});const w=($,q)=>ys(E.query,$,{query_name:q});gs(w),r.params,jn(()=>!0);let ne={initialData:void 0,initialError:void 0},U=Q`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`;l.bu_list_data&&(l.bu_list_data instanceof Error?ne.initialError=l.bu_list_data:ne.initialData=l.bu_list_data,l.bu_list_columns&&(ne.knownColumns=l.bu_list_columns));let Vt,_t=!1;const de=rt.createReactive({callback:$=>{s(0,Vt=$)},execFn:w},{id:"bu_list",...ne});de(se,{noResolve:U,...ne}),globalThis[Symbol.for("bu_list")]={get value(){return Vt}};let Ee={initialData:void 0,initialError:void 0},$e=Q`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`,ae=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`;l.region_list_data&&(l.region_list_data instanceof Error?Ee.initialError=l.region_list_data:Ee.initialData=l.region_list_data,l.region_list_columns&&(Ee.knownColumns=l.region_list_columns));let At,Ue=!1;const oe=rt.createReactive({callback:$=>{s(1,At=$)},execFn:w},{id:"region_list",...Ee});oe(ae,{noResolve:$e,...Ee}),globalThis[Symbol.for("region_list")]={get value(){return At}};let j={initialData:void 0,initialError:void 0},J=Q`select
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
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,je=`select
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
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_win_rate_data&&(l.kpi_win_rate_data instanceof Error?j.initialError=l.kpi_win_rate_data:j.initialData=l.kpi_win_rate_data,l.kpi_win_rate_columns&&(j.knownColumns=l.kpi_win_rate_columns));let dt,fe=!1;const pe=rt.createReactive({callback:$=>{s(2,dt=$)},execFn:w},{id:"kpi_win_rate",...j});pe(je,{noResolve:J,...j}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return dt}};let X={initialData:void 0,initialError:void 0},ye=Q`select
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
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_lost_value_data&&(l.kpi_lost_value_data instanceof Error?X.initialError=l.kpi_lost_value_data:X.initialData=l.kpi_lost_value_data,l.kpi_lost_value_columns&&(X.knownColumns=l.kpi_lost_value_columns));let xe,Ht=!1;const ft=rt.createReactive({callback:$=>{s(3,xe=$)},execFn:w},{id:"kpi_lost_value",...X});ft(ie,{noResolve:ye,...X}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return xe}};let me={initialData:void 0,initialError:void 0},ke=Q`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,le=`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_open_deals_data&&(l.kpi_open_deals_data instanceof Error?me.initialError=l.kpi_open_deals_data:me.initialData=l.kpi_open_deals_data,l.kpi_open_deals_columns&&(me.knownColumns=l.kpi_open_deals_columns));let ve,pt=!1;const he=rt.createReactive({callback:$=>{s(4,ve=$)},execFn:w},{id:"kpi_open_deals",...me});he(le,{noResolve:ke,...me}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return ve}};let Ce={initialData:void 0,initialError:void 0},Y=Q`with client_shares as (
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
from client_shares`,We=`with client_shares as (
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
from client_shares`;l.kpi_top_client_concentration_data&&(l.kpi_top_client_concentration_data instanceof Error?Ce.initialError=l.kpi_top_client_concentration_data:Ce.initialData=l.kpi_top_client_concentration_data,l.kpi_top_client_concentration_columns&&(Ce.knownColumns=l.kpi_top_client_concentration_columns));let mt,qe=!1;const ge=rt.createReactive({callback:$=>{s(5,mt=$)},execFn:w},{id:"kpi_top_client_concentration",...Ce});ge(We,{noResolve:Y,...Ce}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return mt}};let Z={initialData:void 0,initialError:void 0},Ie=Q`with reason_ranks as (
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
order by total_value desc`,Ve=`with reason_ranks as (
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
order by total_value desc`;l.win_loss_reasons_data&&(l.win_loss_reasons_data instanceof Error?Z.initialError=l.win_loss_reasons_data:Z.initialData=l.win_loss_reasons_data,l.win_loss_reasons_columns&&(Z.knownColumns=l.win_loss_reasons_columns));let re,K=!1;const G=rt.createReactive({callback:$=>{s(6,re=$)},execFn:w},{id:"win_loss_reasons",...Z});G(Ve,{noResolve:Ie,...Z}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return re}};let be={initialData:void 0,initialError:void 0},M=Q`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`,W=`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`;l.client_pipeline_share_data&&(l.client_pipeline_share_data instanceof Error?be.initialError=l.client_pipeline_share_data:be.initialData=l.client_pipeline_share_data,l.client_pipeline_share_columns&&(be.knownColumns=l.client_pipeline_share_columns));let ze,z=!1;const ue=rt.createReactive({callback:$=>{s(7,ze=$)},execFn:w},{id:"client_pipeline_share",...be});ue(W,{noResolve:M,...be}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return ze}};let De="ytd";function we($){const q=$.endsWith("/")?$:$+"/",ht=new URLSearchParams(window.location.search).toString().replace(/%2C/g,","),ce=ht?`?${ht}`:"";return(typeof un=="function"?un(q):q)+ce}jn(()=>{localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),document.addEventListener("click",$=>{const q=$.target.closest("canvas");if(!q)return;const vt=q.closest("div");if(!vt)return;const ce=(vt.parentElement||vt).querySelectorAll('div[style*="position"][style*="pointer-events"]');for(const ee of ce){const Te=(ee.innerText||ee.textContent||"").trim();if(Te&&ee.offsetWidth>0){navigator.clipboard.writeText(Te).then(()=>{ee.style.transition="opacity 0.15s",ee.style.opacity="0.4",setTimeout(()=>{ee.style.opacity="1"},350)});break}}})});const Wt=()=>Cn(we("/overview")),Pt=()=>Cn(we("/sales")),Ye=()=>Cn(we("/operations")),Re=$=>{const q=String($||"");return q.length>28?"{xsmall|"+q+"}":q.length>20?"{small|"+q+"}":q.length>14?"{medium|"+q+"}":q};return i.$$set=$=>{"data"in $&&s(10,m=$.data)},i.$$.update=()=>{i.$$.dirty[0]&1024&&s(11,{data:l={},customFormattingSettings:C,__db:E}=m,l),i.$$.dirty[0]&2048&&bs.set(Object.keys(l).length>0),i.$$.dirty[1]&32768&&r.params,i.$$.dirty[0]&4096&&s(14,U=Q`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&4096&&s(15,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&122880&&(U||!_t?U||(de(se,{noResolve:U,...ne}),s(16,_t=!0)):de(se,{noResolve:U})),i.$$.dirty[0]&4096&&s(18,$e=Q`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&4096&&s(19,ae=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&1966080&&($e||!Ue?$e||(oe(ae,{noResolve:$e,...Ee}),s(20,Ue=!0)):oe(ae,{noResolve:$e})),i.$$.dirty[0]&4096&&s(22,J=Q`select
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
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&4096&&s(23,je=`select
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
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&31457280&&(J||!fe?J||(pe(je,{noResolve:J,...j}),s(24,fe=!0)):pe(je,{noResolve:J})),i.$$.dirty[0]&4096&&s(26,ye=Q`select
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
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&4096&&s(27,ie=`select
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
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&503316480&&(ye||!Ht?ye||(ft(ie,{noResolve:ye,...X}),s(28,Ht=!0)):ft(ie,{noResolve:ye})),i.$$.dirty[0]&4096&&s(30,ke=Q`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&4096&&s(31,le=`select
    count(distinct deal_id) as open_deals_count
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&1610612736|i.$$.dirty[1]&3&&(ke||!pt?ke||(he(le,{noResolve:ke,...me}),s(32,pt=!0)):he(le,{noResolve:ke})),i.$$.dirty[0]&4096&&s(34,Y=Q`with client_shares as (
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
from client_shares`),i.$$.dirty[0]&4096&&s(35,We=`with client_shares as (
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
from client_shares`),i.$$.dirty[1]&60&&(Y||!qe?Y||(ge(We,{noResolve:Y,...Ce}),s(36,qe=!0)):ge(We,{noResolve:Y})),i.$$.dirty[0]&4096&&s(38,Ie=Q`with reason_ranks as (
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
order by total_value desc`),i.$$.dirty[0]&4096&&s(39,Ve=`with reason_ranks as (
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
order by total_value desc`),i.$$.dirty[1]&960&&(Ie||!K?Ie||(G(Ve,{noResolve:Ie,...Z}),s(40,K=!0)):G(Ve,{noResolve:Ie})),i.$$.dirty[0]&4096&&s(42,M=Q`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),i.$$.dirty[0]&4096&&s(43,W=`select
    client_name,
    sum(amount) as pipeline_value
from analytics.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),i.$$.dirty[1]&15360&&(M||!z?M||(ue(W,{noResolve:M,...be}),s(44,z=!0)):ue(W,{noResolve:M})),i.$$.dirty[0]&4096&&s(45,De=(e==null?void 0:e.time_filter)||"ytd"),i.$$.dirty[1]&16384&&s(8,t=Vs(De,Ms))},[Vt,At,dt,xe,ve,mt,re,ze,t,we,m,l,e,ne,U,se,_t,Ee,$e,ae,Ue,j,J,je,fe,X,ye,ie,Ht,me,ke,le,pt,Ce,Y,We,qe,Z,Ie,Ve,K,be,M,W,z,De,r,Wt,Pt,Ye,Re]}class Gs extends ds{constructor(n){super(),fs(this,n,Ls,Ss,as,{data:10},null,[-1,-1,-1])}}export{Gs as component};
