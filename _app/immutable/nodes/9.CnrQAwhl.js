import{s as os,d as c,E as us,D as _s,b as _,i as x,a as o,z as qn,J as cs,c as v,h as ds,e as f,f as fn,r as k,g as S,t as _t,j as g,k as p,u as ct,l as Yn,m as fs,o as ps,p as ms,q as Kn,n as je}from"../chunks/scheduler.Cpit_XQ7.js";import{S as hs,i as vs,d as q,t as b,a as h,c as Ve,m as I,b as R,e as T,g as Ae}from"../chunks/index.JnElEpLO.js";import{G as gs,a as Gn,V as At,B as Qn,g as bs,Q as dt}from"../chunks/GlobalSingleSelect.BWI2421_.js";import{e as Jn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BjXfxPR9.js";import{w as ws,g as In}from"../chunks/entry.BIYhHwAU.js";import{a as we,e as $s,s as xs,Q as ut,p as ys,r as Xn,C as ks}from"../chunks/inferColumnTypes.BcQgP2nL.js";import{h as J}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Cs}from"../chunks/stores.CofQ_tCf.js";import{p as Ds}from"../chunks/profile.BW8tN6E9.js";const{document:Ue}=bs;function Es(a){let n,i=D.title+"",t;return{c(){n=p("h1"),t=ct(i),this.h()},l(r){n=f(r,"H1",{class:!0});var u=k(n);t=_t(u,i),u.forEach(c),this.h()},h(){_(n,"class","title")},m(r,u){x(r,n,u),o(n,t)},p:je,d(r){r&&c(n)}}}function qs(a){return{c(){this.h()},l(n){this.h()},h(){Ue.title="Evidence"},m:je,p:je,d:je}}function Is(a){let n,i,t,r,u;return Ue.title=n=D.title,{c(){i=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){i=v(m),t=f(m,"META",{property:!0,content:!0}),r=v(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,l;_(t,"property","og:title"),_(t,"content",((m=D.og)==null?void 0:m.title)??D.title),_(u,"name","twitter:title"),_(u,"content",((l=D.og)==null?void 0:l.title)??D.title)},m(m,l){x(m,i,l),x(m,t,l),x(m,r,l),x(m,u,l)},p(m,l){l&0&&n!==(n=D.title)&&(Ue.title=n)},d(m){m&&(c(i),c(t),c(r),c(u))}}}function Rs(a){var u,m;let n,i,t=(D.description||((u=D.og)==null?void 0:u.description))&&Ts(),r=((m=D.og)==null?void 0:m.image)&&Fs();return{c(){t&&t.c(),n=g(),r&&r.c(),i=fn()},l(l){t&&t.l(l),n=v(l),r&&r.l(l),i=fn()},m(l,C){t&&t.m(l,C),x(l,n,C),r&&r.m(l,C),x(l,i,C)},p(l,C){var E,e;(D.description||(E=D.og)!=null&&E.description)&&t.p(l,C),(e=D.og)!=null&&e.image&&r.p(l,C)},d(l){l&&(c(n),c(i)),t&&t.d(l),r&&r.d(l)}}}function Ts(a){let n,i,t,r,u;return{c(){n=p("meta"),i=g(),t=p("meta"),r=g(),u=p("meta"),this.h()},l(m){n=f(m,"META",{name:!0,content:!0}),i=v(m),t=f(m,"META",{property:!0,content:!0}),r=v(m),u=f(m,"META",{name:!0,content:!0}),this.h()},h(){var m,l,C;_(n,"name","description"),_(n,"content",D.description??((m=D.og)==null?void 0:m.description)),_(t,"property","og:description"),_(t,"content",((l=D.og)==null?void 0:l.description)??D.description),_(u,"name","twitter:description"),_(u,"content",((C=D.og)==null?void 0:C.description)??D.description)},m(m,l){x(m,n,l),x(m,i,l),x(m,t,l),x(m,r,l),x(m,u,l)},p:je,d(m){m&&(c(n),c(i),c(t),c(r),c(u))}}}function Fs(a){let n,i,t;return{c(){n=p("meta"),i=g(),t=p("meta"),this.h()},l(r){n=f(r,"META",{property:!0,content:!0}),i=v(r),t=f(r,"META",{name:!0,content:!0}),this.h()},h(){var r,u;_(n,"property","og:image"),_(n,"content",we((r=D.og)==null?void 0:r.image)),_(t,"name","twitter:image"),_(t,"content",we((u=D.og)==null?void 0:u.image))},m(r,u){x(r,n,u),x(r,i,u),x(r,t,u)},p:je,d(r){r&&(c(n),c(i),c(t))}}}function Zn(a){let n,i;return n=new dt({props:{queryID:"bu_list",queryResult:a[1]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&2&&(u.queryResult=t[1]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function es(a){let n,i;return n=new dt({props:{queryID:"region_list",queryResult:a[2]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&4&&(u.queryResult=t[2]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function ts(a){let n,i;return n=new dt({props:{queryID:"kpi_win_rate",queryResult:a[3]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&8&&(u.queryResult=t[3]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function ns(a){let n,i;return n=new dt({props:{queryID:"kpi_lost_value",queryResult:a[4]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&16&&(u.queryResult=t[4]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function ss(a){let n,i;return n=new dt({props:{queryID:"kpi_open_deals",queryResult:a[5]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&32&&(u.queryResult=t[5]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function is(a){let n,i;return n=new dt({props:{queryID:"kpi_top_client_concentration",queryResult:a[6]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&64&&(u.queryResult=t[6]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function as(a){let n,i;return n=new dt({props:{queryID:"win_loss_reasons",queryResult:a[7]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&128&&(u.queryResult=t[7]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function ls(a){let n,i;return n=new dt({props:{queryID:"client_pipeline_share",queryResult:a[8]}}),{c(){T(n.$$.fragment)},l(t){R(n.$$.fragment,t)},m(t,r){I(n,t,r),i=!0},p(t,r){const u={};r[0]&256&&(u.queryResult=t[8]),n.$set(u)},i(t){i||(h(n.$$.fragment,t),i=!0)},o(t){b(n.$$.fragment,t),i=!1},d(t){q(n,t)}}}function Ss(a){let n,i,t="✦",r,u,m,l,C,E;return l=new At({props:{data:a[3],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),i=p("span"),i.textContent=t,r=g(),u=p("span"),m=ct("Win rate is healthy ("),T(l.$$.fragment),C=ct(")"),this.h()},l(e){n=f(e,"DIV",{class:!0});var y=k(n);i=f(y,"SPAN",{class:!0,"data-svelte-h":!0}),S(i)!=="svelte-i2y69v"&&(i.textContent=t),r=v(y),u=f(y,"SPAN",{});var w=k(u);m=_t(w,"Win rate is healthy ("),R(l.$$.fragment,w),C=_t(w,")"),w.forEach(c),y.forEach(c),this.h()},h(){_(i,"class","text-teal-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,y){x(e,n,y),o(n,i),o(n,r),o(n,u),o(u,m),I(l,u,null),o(u,C),E=!0},p(e,y){const w={};y[0]&8&&(w.data=e[3]),l.$set(w)},i(e){E||(h(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),q(l)}}}function Ms(a){let n,i,t="✦",r,u,m,l,C,E;return l=new At({props:{data:a[3],column:"win_rate",fmt:"pct0"}}),{c(){n=p("div"),i=p("span"),i.textContent=t,r=g(),u=p("span"),m=ct("Win rate is low ("),T(l.$$.fragment),C=ct(" vs 25% target)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var y=k(n);i=f(y,"SPAN",{class:!0,"data-svelte-h":!0}),S(i)!=="svelte-16athnc"&&(i.textContent=t),r=v(y),u=f(y,"SPAN",{});var w=k(u);m=_t(w,"Win rate is low ("),R(l.$$.fragment,w),C=_t(w," vs 25% target)"),w.forEach(c),y.forEach(c),this.h()},h(){_(i,"class","text-amber-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,y){x(e,n,y),o(n,i),o(n,r),o(n,u),o(u,m),I(l,u,null),o(u,C),E=!0},p(e,y){const w={};y[0]&8&&(w.data=e[3]),l.$set(w)},i(e){E||(h(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),q(l)}}}function Vs(a){let n,i='<span class="text-teal-600 font-bold">✦</span> <span>Client concentration is balanced</span>';return{c(){n=p("div"),n.innerHTML=i,this.h()},l(t){n=f(t,"DIV",{class:!0,"data-svelte-h":!0}),S(n)!=="svelte-d6fatc"&&(n.innerHTML=i),this.h()},h(){_(n,"class","flex items-start gap-1")},m(t,r){x(t,n,r)},p:je,i:je,o:je,d(t){t&&c(n)}}}function As(a){let n,i,t="✦",r,u,m,l,C,E;return l=new At({props:{data:a[6],column:"max_concentration",fmt:"pct0"}}),{c(){n=p("div"),i=p("span"),i.textContent=t,r=g(),u=p("span"),m=ct("High concentration ("),T(l.$$.fragment),C=ct(" of pipeline)"),this.h()},l(e){n=f(e,"DIV",{class:!0});var y=k(n);i=f(y,"SPAN",{class:!0,"data-svelte-h":!0}),S(i)!=="svelte-16athnc"&&(i.textContent=t),r=v(y),u=f(y,"SPAN",{});var w=k(u);m=_t(w,"High concentration ("),R(l.$$.fragment,w),C=_t(w," of pipeline)"),w.forEach(c),y.forEach(c),this.h()},h(){_(i,"class","text-amber-600 font-bold"),_(n,"class","flex items-start gap-1")},m(e,y){x(e,n,y),o(n,i),o(n,r),o(n,u),o(u,m),I(l,u,null),o(u,C),E=!0},p(e,y){const w={};y[0]&64&&(w.data=e[6]),l.$set(w)},i(e){E||(h(l.$$.fragment,e),E=!0)},o(e){b(l.$$.fragment,e),E=!1},d(e){e&&c(n),q(l)}}}function Hs(a){let n,i,t,r,u,m,l,C,E,e,y,w,ne,U,se,Ht="Overview Cockpit",ft,ce,Ee="Sales & Win-Loss",$e,ie,Lt="Operations & Vendors",We,ue,j,X,ze="Sales Pipeline Deep-Dive",pt,de,fe,Z,xe,ae,ye,Nt="📅",mt,pe,ke,le,me,ht,he,Ce,K,Ye="Date snapshotted at June 2026",vt,qe,ve,ee,Ie="<span>💡</span> Sales Insights",He,re,G,Q,ge,M,W,Ke,z,oe,De,be,Yt='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pipeline Win Rate</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',jt,Ge,Re,$,F,Le="Closed Won vs. Closed Lost count",gt,Ot,Y,Te,bt,Rn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Lost Opportunity Value</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',pn,Pt,Qe,mn,wt,Tn="Sum of HubSpot deal amounts marked as 'Closed Lost'",Kt,hn,Fe,$t,xt,Fn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Open Deals in Funnel</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',vn,Bt,Je,gn,yt,Sn="Active prospects in pipeline",Gt,bn,Se,kt,Ct,Mn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Max Client Concentration</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',wn,Ut,Xe,$n,Dt,Vn="Largest client's share of pipeline",Qt,Jt,Ne,Ze,et,Et,An="CRM Closed Won/Lost Reason Breakdown",xn,qt,yn,tt,kn,nt,st,It,Hn="Open Pipeline Value by Corporate Client",Cn,Rt,Dn,it,Oe,En,Ln,Pe=typeof D<"u"&&D.title&&D.hide_title!==!0&&Es();function rs(s,d){return typeof D<"u"&&D.title?Is:qs}let Wt=rs()(a),Be=typeof D=="object"&&Rs(),V=a[1]&&Zn(a),A=a[2]&&es(a),H=a[3]&&ts(a),L=a[4]&&ns(a),N=a[5]&&ss(a),O=a[6]&&is(a),P=a[7]&&as(a),B=a[8]&&ls(a);Z=new gs({props:{name:"time_filter",defaultValue:"ytd"}}),me=new Gn({props:{name:"business_unit",title:"Business Unit",data:a[1],valueColumn:"business_unit_id",labelColumn:"business_unit"}}),he=new Gn({props:{name:"region",title:"Region",data:a[2],valueColumn:"region_id",labelColumn:"region"}});const Nn=[Ms,Ss],at=[];function On(s,d){var te,_e;return(te=s[3][0])!=null&&te.win_rate&&((_e=s[3][0])==null?void 0:_e.win_rate)<.25?0:1}G=On(a),Q=at[G]=Nn[G](a);const Pn=[As,Vs],lt=[];function Bn(s,d){var te,_e;return(te=s[6][0])!=null&&te.max_concentration&&((_e=s[6][0])==null?void 0:_e.max_concentration)>.5?0:1}return M=Bn(a),W=lt[M]=Pn[M](a),Re=new At({props:{data:a[3],column:"win_rate",fmt:"pct1"}}),Qe=new At({props:{data:a[4],column:"lost_value",fmt:"usd"}}),Je=new At({props:{data:a[5],column:"open_deals_count"}}),Xe=new At({props:{data:a[6],column:"max_concentration",fmt:"pct0"}}),qt=new Jn({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),tt=new Qn({props:{data:a[7],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,legend:"true",echartsOptions:{grid:{top:38,bottom:20,left:40,right:40,containLabel:!0},legend:{top:0,itemGap:15},xAxis:{splitNumber:3,axisLabel:{formatter:Os}}}}}),Rt=new Jn({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),it=new Qn({props:{data:a[8],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{top:15,bottom:25,left:35,right:45,containLabel:!0},xAxis:{splitNumber:3,axisLabel:{formatter:Ps}},yAxis:{axisLabel:{interval:0,formatter:a[50],rich:{xsmall:{fontSize:7,color:"#4b5563"},small:{fontSize:8.5,color:"#4b5563"},medium:{fontSize:9.5,color:"#4b5563"}}}}}}}),{c(){Pe&&Pe.c(),n=g(),Wt.c(),i=p("meta"),t=p("meta"),Be&&Be.c(),r=fn(),u=g(),V&&V.c(),m=g(),A&&A.c(),l=g(),H&&H.c(),C=g(),L&&L.c(),E=g(),N&&N.c(),e=g(),O&&O.c(),y=g(),P&&P.c(),w=g(),B&&B.c(),ne=g(),U=p("div"),se=p("button"),se.textContent=Ht,ft=g(),ce=p("button"),ce.textContent=Ee,$e=g(),ie=p("button"),ie.textContent=Lt,We=g(),ue=p("div"),j=p("div"),X=p("div"),X.textContent=ze,pt=g(),de=p("div"),fe=p("div"),T(Z.$$.fragment),xe=g(),ae=p("div"),ye=p("span"),ye.textContent=Nt,mt=g(),pe=ct(a[9]),ke=g(),le=p("div"),T(me.$$.fragment),ht=g(),T(he.$$.fragment),Ce=g(),K=p("div"),K.textContent=Ye,vt=g(),qe=p("div"),ve=p("div"),ee=p("div"),ee.innerHTML=Ie,He=g(),re=p("div"),Q.c(),ge=g(),W.c(),Ke=g(),z=p("div"),oe=p("a"),De=p("div"),be=p("div"),be.innerHTML=Yt,jt=g(),Ge=p("h2"),T(Re.$$.fragment),$=g(),F=p("div"),F.textContent=Le,Ot=g(),Y=p("a"),Te=p("div"),bt=p("div"),bt.innerHTML=Rn,pn=g(),Pt=p("h2"),T(Qe.$$.fragment),mn=g(),wt=p("div"),wt.textContent=Tn,hn=g(),Fe=p("a"),$t=p("div"),xt=p("div"),xt.innerHTML=Fn,vn=g(),Bt=p("h2"),T(Je.$$.fragment),gn=g(),yt=p("div"),yt.textContent=Sn,bn=g(),Se=p("a"),kt=p("div"),Ct=p("div"),Ct.innerHTML=Mn,wn=g(),Ut=p("h2"),T(Xe.$$.fragment),$n=g(),Dt=p("div"),Dt.textContent=Vn,Jt=g(),Ne=p("div"),Ze=p("div"),et=p("div"),Et=p("span"),Et.textContent=An,xn=g(),T(qt.$$.fragment),yn=g(),T(tt.$$.fragment),kn=g(),nt=p("div"),st=p("div"),It=p("span"),It.textContent=Hn,Cn=g(),T(Rt.$$.fragment),Dn=g(),T(it.$$.fragment),this.h()},l(s){Pe&&Pe.l(s),n=v(s);const d=ds("svelte-2igo1p",Ue.head);Wt.l(d),i=f(d,"META",{name:!0,content:!0}),t=f(d,"META",{name:!0,content:!0}),Be&&Be.l(d),r=fn(),d.forEach(c),u=v(s),V&&V.l(s),m=v(s),A&&A.l(s),l=v(s),H&&H.l(s),C=v(s),L&&L.l(s),E=v(s),N&&N.l(s),e=v(s),O&&O.l(s),y=v(s),P&&P.l(s),w=v(s),B&&B.l(s),ne=v(s),U=f(s,"DIV",{class:!0});var te=k(U);se=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),S(se)!=="svelte-12o4q6t"&&(se.textContent=Ht),ft=v(te),ce=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),S(ce)!=="svelte-1hbbhos"&&(ce.textContent=Ee),$e=v(te),ie=f(te,"BUTTON",{class:!0,"data-svelte-h":!0}),S(ie)!=="svelte-1kxcs33"&&(ie.textContent=Lt),te.forEach(c),We=v(s),ue=f(s,"DIV",{class:!0});var _e=k(ue);j=f(_e,"DIV",{class:!0});var Me=k(j);X=f(Me,"DIV",{class:!0,"data-svelte-h":!0}),S(X)!=="svelte-mtq68w"&&(X.textContent=ze),pt=v(Me),de=f(Me,"DIV",{class:!0});var rt=k(de);fe=f(rt,"DIV",{class:!0});var Tt=k(fe);R(Z.$$.fragment,Tt),xe=v(Tt),ae=f(Tt,"DIV",{class:!0});var Ft=k(ae);ye=f(Ft,"SPAN",{class:!0,"data-svelte-h":!0}),S(ye)!=="svelte-n1bzfj"&&(ye.textContent=Nt),mt=v(Ft),pe=_t(Ft,a[9]),Ft.forEach(c),Tt.forEach(c),ke=v(rt),le=f(rt,"DIV",{class:!0});var St=k(le);R(me.$$.fragment,St),ht=v(St),R(he.$$.fragment,St),St.forEach(c),rt.forEach(c),Ce=v(Me),K=f(Me,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),S(K)!=="svelte-tonn3n"&&(K.textContent=Ye),Me.forEach(c),vt=v(_e),qe=f(_e,"DIV",{class:!0});var zt=k(qe);ve=f(zt,"DIV",{class:!0});var Mt=k(ve);ee=f(Mt,"DIV",{class:!0,"data-svelte-h":!0}),S(ee)!=="svelte-1pqv4xl"&&(ee.innerHTML=Ie),He=v(Mt),re=f(Mt,"DIV",{class:!0});var Vt=k(re);Q.l(Vt),ge=v(Vt),W.l(Vt),Vt.forEach(c),Mt.forEach(c),zt.forEach(c),_e.forEach(c),Ke=v(s),z=f(s,"DIV",{class:!0});var ot=k(z);oe=f(ot,"A",{href:!0,class:!0});var Xt=k(oe);De=f(Xt,"DIV",{});var Zt=k(De);be=f(Zt,"DIV",{class:!0,"data-svelte-h":!0}),S(be)!=="svelte-u68fg7"&&(be.innerHTML=Yt),jt=v(Zt),Ge=f(Zt,"H2",{class:!0});var Un=k(Ge);R(Re.$$.fragment,Un),Un.forEach(c),Zt.forEach(c),$=v(Xt),F=f(Xt,"DIV",{class:!0,"data-svelte-h":!0}),S(F)!=="svelte-1d405ho"&&(F.textContent=Le),Xt.forEach(c),Ot=v(ot),Y=f(ot,"A",{href:!0,class:!0});var en=k(Y);Te=f(en,"DIV",{});var tn=k(Te);bt=f(tn,"DIV",{class:!0,"data-svelte-h":!0}),S(bt)!=="svelte-10nsonq"&&(bt.innerHTML=Rn),pn=v(tn),Pt=f(tn,"H2",{class:!0});var jn=k(Pt);R(Qe.$$.fragment,jn),jn.forEach(c),tn.forEach(c),mn=v(en),wt=f(en,"DIV",{class:!0,"data-svelte-h":!0}),S(wt)!=="svelte-le386w"&&(wt.textContent=Tn),en.forEach(c),hn=v(ot),Fe=f(ot,"A",{href:!0,class:!0});var nn=k(Fe);$t=f(nn,"DIV",{});var sn=k($t);xt=f(sn,"DIV",{class:!0,"data-svelte-h":!0}),S(xt)!=="svelte-cb2462"&&(xt.innerHTML=Fn),vn=v(sn),Bt=f(sn,"H2",{class:!0});var Wn=k(Bt);R(Je.$$.fragment,Wn),Wn.forEach(c),sn.forEach(c),gn=v(nn),yt=f(nn,"DIV",{class:!0,"data-svelte-h":!0}),S(yt)!=="svelte-12s1tku"&&(yt.textContent=Sn),nn.forEach(c),bn=v(ot),Se=f(ot,"A",{href:!0,class:!0});var an=k(Se);kt=f(an,"DIV",{});var ln=k(kt);Ct=f(ln,"DIV",{class:!0,"data-svelte-h":!0}),S(Ct)!=="svelte-183evvl"&&(Ct.innerHTML=Mn),wn=v(ln),Ut=f(ln,"H2",{class:!0});var zn=k(Ut);R(Xe.$$.fragment,zn),zn.forEach(c),ln.forEach(c),$n=v(an),Dt=f(an,"DIV",{class:!0,"data-svelte-h":!0}),S(Dt)!=="svelte-dm1p4b"&&(Dt.textContent=Vn),an.forEach(c),ot.forEach(c),Jt=v(s),Ne=f(s,"DIV",{class:!0});var rn=k(Ne);Ze=f(rn,"DIV",{class:!0});var on=k(Ze);et=f(on,"DIV",{class:!0});var un=k(et);Et=f(un,"SPAN",{class:!0,"data-svelte-h":!0}),S(Et)!=="svelte-dgw2oa"&&(Et.textContent=An),xn=v(un),R(qt.$$.fragment,un),un.forEach(c),yn=v(on),R(tt.$$.fragment,on),on.forEach(c),kn=v(rn),nt=f(rn,"DIV",{class:!0});var _n=k(nt);st=f(_n,"DIV",{class:!0});var cn=k(st);It=f(cn,"SPAN",{class:!0,"data-svelte-h":!0}),S(It)!=="svelte-1br9yke"&&(It.textContent=Hn),Cn=v(cn),R(Rt.$$.fragment,cn),cn.forEach(c),Dn=v(_n),R(it.$$.fragment,_n),_n.forEach(c),rn.forEach(c),this.h()},h(){_(i,"name","twitter:card"),_(i,"content","summary_large_image"),_(t,"name","twitter:site"),_(t,"content","@evidence_dev"),_(se,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(ce,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(ie,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),_(U,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),_(X,"class","text-base font-extrabold text-[#264773]"),_(ye,"class","text-gray-400"),_(ae,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded flex items-center gap-1.5 w-max"),_(fe,"class","flex flex-col gap-1"),_(le,"class","flex items-center gap-2"),_(de,"class","flex flex-wrap items-start gap-3"),cs(K,"color","#ffffff"),_(K,"class","text-[8px] font-semibold bg-white/10 border border-white/20 px-2 py-0.5 rounded self-start"),_(j,"class","flex flex-col gap-2"),_(ee,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1"),_(re,"class","flex flex-col gap-0.5 text-gray-500 leading-tight"),_(ve,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]"),_(qe,"class","flex flex-col items-end self-stretch md:self-auto"),_(ue,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),_(be,"class","flex justify-between items-center"),_(Ge,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(F,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(oe,"href",gt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${a[0]}`)),_(oe,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(bt,"class","flex justify-between items-center"),_(Pt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(wt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(Y,"href",Kt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${a[0]}`)),_(Y,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(xt,"class","flex justify-between items-center"),_(Bt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(yt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(Fe,"href",Gt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${a[0]}`)),_(Fe,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(Ct,"class","flex justify-between items-center"),_(Ut,"class","text-xl font-extrabold mt-0.5 text-gray-800"),_(Dt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),_(Se,"href",Qt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${a[0]}`)),_(Se,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),_(z,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),_(Et,"class","font-bold text-gray-700 text-xs"),_(et,"class","flex items-center gap-1.5 mb-1"),_(Ze,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),_(It,"class","font-bold text-gray-700 text-xs"),_(st,"class","flex items-center gap-1.5 mb-1"),_(nt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),_(Ne,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(s,d){Pe&&Pe.m(s,d),x(s,n,d),Wt.m(Ue.head,null),o(Ue.head,i),o(Ue.head,t),Be&&Be.m(Ue.head,null),o(Ue.head,r),x(s,u,d),V&&V.m(s,d),x(s,m,d),A&&A.m(s,d),x(s,l,d),H&&H.m(s,d),x(s,C,d),L&&L.m(s,d),x(s,E,d),N&&N.m(s,d),x(s,e,d),O&&O.m(s,d),x(s,y,d),P&&P.m(s,d),x(s,w,d),B&&B.m(s,d),x(s,ne,d),x(s,U,d),o(U,se),o(U,ft),o(U,ce),o(U,$e),o(U,ie),x(s,We,d),x(s,ue,d),o(ue,j),o(j,X),o(j,pt),o(j,de),o(de,fe),I(Z,fe,null),o(fe,xe),o(fe,ae),o(ae,ye),o(ae,mt),o(ae,pe),o(de,ke),o(de,le),I(me,le,null),o(le,ht),I(he,le,null),o(j,Ce),o(j,K),o(ue,vt),o(ue,qe),o(qe,ve),o(ve,ee),o(ve,He),o(ve,re),at[G].m(re,null),o(re,ge),lt[M].m(re,null),x(s,Ke,d),x(s,z,d),o(z,oe),o(oe,De),o(De,be),o(De,jt),o(De,Ge),I(Re,Ge,null),o(oe,$),o(oe,F),o(z,Ot),o(z,Y),o(Y,Te),o(Te,bt),o(Te,pn),o(Te,Pt),I(Qe,Pt,null),o(Y,mn),o(Y,wt),o(z,hn),o(z,Fe),o(Fe,$t),o($t,xt),o($t,vn),o($t,Bt),I(Je,Bt,null),o(Fe,gn),o(Fe,yt),o(z,bn),o(z,Se),o(Se,kt),o(kt,Ct),o(kt,wn),o(kt,Ut),I(Xe,Ut,null),o(Se,$n),o(Se,Dt),x(s,Jt,d),x(s,Ne,d),o(Ne,Ze),o(Ze,et),o(et,Et),o(et,xn),I(qt,et,null),o(Ze,yn),I(tt,Ze,null),o(Ne,kn),o(Ne,nt),o(nt,st),o(st,It),o(st,Cn),I(Rt,st,null),o(nt,Dn),I(it,nt,null),Oe=!0,En||(Ln=[qn(se,"click",a[47]),qn(ce,"click",a[48]),qn(ie,"click",a[49])],En=!0)},p(s,d){typeof D<"u"&&D.title&&D.hide_title!==!0&&Pe.p(s,d),Wt.p(s,d),typeof D=="object"&&Be.p(s,d),s[1]?V?(V.p(s,d),d[0]&2&&h(V,1)):(V=Zn(s),V.c(),h(V,1),V.m(m.parentNode,m)):V&&(Ae(),b(V,1,1,()=>{V=null}),Ve()),s[2]?A?(A.p(s,d),d[0]&4&&h(A,1)):(A=es(s),A.c(),h(A,1),A.m(l.parentNode,l)):A&&(Ae(),b(A,1,1,()=>{A=null}),Ve()),s[3]?H?(H.p(s,d),d[0]&8&&h(H,1)):(H=ts(s),H.c(),h(H,1),H.m(C.parentNode,C)):H&&(Ae(),b(H,1,1,()=>{H=null}),Ve()),s[4]?L?(L.p(s,d),d[0]&16&&h(L,1)):(L=ns(s),L.c(),h(L,1),L.m(E.parentNode,E)):L&&(Ae(),b(L,1,1,()=>{L=null}),Ve()),s[5]?N?(N.p(s,d),d[0]&32&&h(N,1)):(N=ss(s),N.c(),h(N,1),N.m(e.parentNode,e)):N&&(Ae(),b(N,1,1,()=>{N=null}),Ve()),s[6]?O?(O.p(s,d),d[0]&64&&h(O,1)):(O=is(s),O.c(),h(O,1),O.m(y.parentNode,y)):O&&(Ae(),b(O,1,1,()=>{O=null}),Ve()),s[7]?P?(P.p(s,d),d[0]&128&&h(P,1)):(P=as(s),P.c(),h(P,1),P.m(w.parentNode,w)):P&&(Ae(),b(P,1,1,()=>{P=null}),Ve()),s[8]?B?(B.p(s,d),d[0]&256&&h(B,1)):(B=ls(s),B.c(),h(B,1),B.m(ne.parentNode,ne)):B&&(Ae(),b(B,1,1,()=>{B=null}),Ve()),(!Oe||d[0]&512)&&_s(pe,s[9]);const te={};d[0]&2&&(te.data=s[1]),me.$set(te);const _e={};d[0]&4&&(_e.data=s[2]),he.$set(_e);let Me=G;G=On(s),G===Me?at[G].p(s,d):(Ae(),b(at[Me],1,1,()=>{at[Me]=null}),Ve(),Q=at[G],Q?Q.p(s,d):(Q=at[G]=Nn[G](s),Q.c()),h(Q,1),Q.m(re,ge));let rt=M;M=Bn(s),M===rt?lt[M].p(s,d):(Ae(),b(lt[rt],1,1,()=>{lt[rt]=null}),Ve(),W=lt[M],W?W.p(s,d):(W=lt[M]=Pn[M](s),W.c()),h(W,1),W.m(re,null));const Tt={};d[0]&8&&(Tt.data=s[3]),Re.$set(Tt),(!Oe||d[0]&1&&gt!==(gt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${s[0]}`)))&&_(oe,"href",gt);const Ft={};d[0]&16&&(Ft.data=s[4]),Qe.$set(Ft),(!Oe||d[0]&1&&Kt!==(Kt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${s[0]}`)))&&_(Y,"href",Kt);const St={};d[0]&32&&(St.data=s[5]),Je.$set(St),(!Oe||d[0]&1&&Gt!==(Gt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${s[0]}`)))&&_(Fe,"href",Gt);const zt={};d[0]&64&&(zt.data=s[6]),Xe.$set(zt),(!Oe||d[0]&1&&Qt!==(Qt="/public.dlt-pipeline-orchestration/"+we(`?time_filter=${s[0]}`)))&&_(Se,"href",Qt);const Mt={};d[0]&128&&(Mt.data=s[7]),tt.$set(Mt);const Vt={};d[0]&256&&(Vt.data=s[8]),it.$set(Vt)},i(s){Oe||(h(V),h(A),h(H),h(L),h(N),h(O),h(P),h(B),h(Z.$$.fragment,s),h(me.$$.fragment,s),h(he.$$.fragment,s),h(Q),h(W),h(Re.$$.fragment,s),h(Qe.$$.fragment,s),h(Je.$$.fragment,s),h(Xe.$$.fragment,s),h(qt.$$.fragment,s),h(tt.$$.fragment,s),h(Rt.$$.fragment,s),h(it.$$.fragment,s),Oe=!0)},o(s){b(V),b(A),b(H),b(L),b(N),b(O),b(P),b(B),b(Z.$$.fragment,s),b(me.$$.fragment,s),b(he.$$.fragment,s),b(Q),b(W),b(Re.$$.fragment,s),b(Qe.$$.fragment,s),b(Je.$$.fragment,s),b(Xe.$$.fragment,s),b(qt.$$.fragment,s),b(tt.$$.fragment,s),b(Rt.$$.fragment,s),b(it.$$.fragment,s),Oe=!1},d(s){s&&(c(n),c(u),c(m),c(l),c(C),c(E),c(e),c(y),c(w),c(ne),c(U),c(We),c(ue),c(Ke),c(z),c(Jt),c(Ne)),Pe&&Pe.d(s),Wt.d(s),c(i),c(t),Be&&Be.d(s),c(r),V&&V.d(s),A&&A.d(s),H&&H.d(s),L&&L.d(s),N&&N.d(s),O&&O.d(s),P&&P.d(s),B&&B.d(s),q(Z),q(me),q(he),at[G].d(),lt[M].d(),q(Re),q(Qe),q(Je),q(Xe),q(qt),q(tt),q(Rt),q(it),En=!1,us(Ln)}}}const D={title:"Sales & Win-Loss Analysis"},Ls="2026-06-15";function dn(a){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${a.getDate()} ${n[a.getMonth()]} ${a.getFullYear()}`}function Ns(a,n){const i=new Date(n+"T00:00:00"),t=dn(i);if(a==="mtd"){const r=new Date(i.getFullYear(),i.getMonth(),1);return`${dn(r)} - ${t}`}if(a==="qtd"){const r=Math.floor(i.getMonth()/3)*3,u=new Date(i.getFullYear(),r,1);return`${dn(u)} - ${t}`}if(a==="ytd"){const r=new Date(i.getFullYear(),0,1);return`${dn(r)} - ${t}`}return`All Time - ${t}`}const Os=a=>a>=1e6?"$"+a/1e6+"M":a>=1e3?"$"+a/1e3+"K":"$"+a,Ps=a=>a>=1e6?"$"+a/1e6+"M":a>=1e3?"$"+a/1e3+"K":"$"+a;function Bs(a,n,i){let t,r,u;Yn(a,Cs,$=>i(46,r=$)),Yn(a,Xn,$=>i(55,u=$));let{data:m}=n,{data:l={},customFormattingSettings:C,__db:E,inputs:e}=m;fs(Xn,u="b6c1e1557fc0a9a1e3a0b220257fd6d9",u);let y=$s(ws(e));ps(y.subscribe($=>i(13,e=$))),ms(ks,{getCustomFormats:()=>C.customFormats||[]});const w=($,F)=>Ds(E.query,$,{query_name:F});xs(w),r.params,Kn(()=>!0);let ne={initialData:void 0,initialError:void 0},U=J`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`;l.bu_list_data&&(l.bu_list_data instanceof Error?ne.initialError=l.bu_list_data:ne.initialData=l.bu_list_data,l.bu_list_columns&&(ne.knownColumns=l.bu_list_columns));let Ht,ft=!1;const ce=ut.createReactive({callback:$=>{i(1,Ht=$)},execFn:w},{id:"bu_list",...ne});ce(se,{noResolve:U,...ne}),globalThis[Symbol.for("bu_list")]={get value(){return Ht}};let Ee={initialData:void 0,initialError:void 0},$e=J`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`,ie=`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`;l.region_list_data&&(l.region_list_data instanceof Error?Ee.initialError=l.region_list_data:Ee.initialData=l.region_list_data,l.region_list_columns&&(Ee.knownColumns=l.region_list_columns));let Lt,We=!1;const ue=ut.createReactive({callback:$=>{i(2,Lt=$)},execFn:w},{id:"region_list",...Ee});ue(ie,{noResolve:$e,...Ee}),globalThis[Symbol.for("region_list")]={get value(){return Lt}};let j={initialData:void 0,initialError:void 0},X=J`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,ze=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_win_rate_data&&(l.kpi_win_rate_data instanceof Error?j.initialError=l.kpi_win_rate_data:j.initialData=l.kpi_win_rate_data,l.kpi_win_rate_columns&&(j.knownColumns=l.kpi_win_rate_columns));let pt,de=!1;const fe=ut.createReactive({callback:$=>{i(3,pt=$)},execFn:w},{id:"kpi_win_rate",...j});fe(ze,{noResolve:X,...j}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return pt}};let Z={initialData:void 0,initialError:void 0},xe=J`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,ae=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_lost_value_data&&(l.kpi_lost_value_data instanceof Error?Z.initialError=l.kpi_lost_value_data:Z.initialData=l.kpi_lost_value_data,l.kpi_lost_value_columns&&(Z.knownColumns=l.kpi_lost_value_columns));let ye,Nt=!1;const mt=ut.createReactive({callback:$=>{i(4,ye=$)},execFn:w},{id:"kpi_lost_value",...Z});mt(ae,{noResolve:xe,...Z}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return ye}};let pe={initialData:void 0,initialError:void 0},ke=J`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,le=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;l.kpi_open_deals_data&&(l.kpi_open_deals_data instanceof Error?pe.initialError=l.kpi_open_deals_data:pe.initialData=l.kpi_open_deals_data,l.kpi_open_deals_columns&&(pe.knownColumns=l.kpi_open_deals_columns));let me,ht=!1;const he=ut.createReactive({callback:$=>{i(5,me=$)},execFn:w},{id:"kpi_open_deals",...pe});he(le,{noResolve:ke,...pe}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return me}};let Ce={initialData:void 0,initialError:void 0},K=J`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`,Ye=`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`;l.kpi_top_client_concentration_data&&(l.kpi_top_client_concentration_data instanceof Error?Ce.initialError=l.kpi_top_client_concentration_data:Ce.initialData=l.kpi_top_client_concentration_data,l.kpi_top_client_concentration_columns&&(Ce.knownColumns=l.kpi_top_client_concentration_columns));let vt,qe=!1;const ve=ut.createReactive({callback:$=>{i(6,vt=$)},execFn:w},{id:"kpi_top_client_concentration",...Ce});ve(Ye,{noResolve:K,...Ce}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return vt}};let ee={initialData:void 0,initialError:void 0},Ie=J`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
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
order by total_value desc`,He=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
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
order by total_value desc`;l.win_loss_reasons_data&&(l.win_loss_reasons_data instanceof Error?ee.initialError=l.win_loss_reasons_data:ee.initialData=l.win_loss_reasons_data,l.win_loss_reasons_columns&&(ee.knownColumns=l.win_loss_reasons_columns));let re,G=!1;const Q=ut.createReactive({callback:$=>{i(7,re=$)},execFn:w},{id:"win_loss_reasons",...ee});Q(He,{noResolve:Ie,...ee}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return re}};let ge={initialData:void 0,initialError:void 0},M=J`select
    client_name,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`,W=`select
    client_name,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`;l.client_pipeline_share_data&&(l.client_pipeline_share_data instanceof Error?ge.initialError=l.client_pipeline_share_data:ge.initialData=l.client_pipeline_share_data,l.client_pipeline_share_columns&&(ge.knownColumns=l.client_pipeline_share_columns));let Ke,z=!1;const oe=ut.createReactive({callback:$=>{i(8,Ke=$)},execFn:w},{id:"client_pipeline_share",...ge});oe(W,{noResolve:M,...ge}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return Ke}};let De="ytd";function be($){const Le=new URLSearchParams(window.location.search).toString().replace(/%2C/g,","),gt=Le?`?${Le}`:"";return(typeof we=="function"?we($):$)+gt}Kn(()=>{localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),document.addEventListener("click",$=>{const F=$.target.closest("canvas");if(!F)return;const Le=F.closest("div");if(!Le)return;const Ot=(Le.parentElement||Le).querySelectorAll('div[style*="position"][style*="pointer-events"]');for(const Y of Ot){const Te=(Y.innerText||Y.textContent||"").trim();if(Te&&Y.offsetWidth>0){navigator.clipboard.writeText(Te).then(()=>{Y.style.transition="opacity 0.15s",Y.style.opacity="0.4",setTimeout(()=>{Y.style.opacity="1"},350)});break}}})});const Yt=()=>In(be("/overview")),jt=()=>In(be("/sales")),Ge=()=>In(be("/operations")),Re=$=>{const F=String($||"");return F.length>28?"{xsmall|"+F+"}":F.length>20?"{small|"+F+"}":F.length>14?"{medium|"+F+"}":F};return a.$$set=$=>{"data"in $&&i(11,m=$.data)},a.$$.update=()=>{a.$$.dirty[0]&2048&&i(12,{data:l={},customFormattingSettings:C,__db:E}=m,l),a.$$.dirty[0]&4096&&ys.set(Object.keys(l).length>0),a.$$.dirty[1]&32768&&r.params,a.$$.dirty[0]&8192&&i(15,U=J`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),a.$$.dirty[0]&8192&&i(16,se=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),a.$$.dirty[0]&245760&&(U||!ft?U||(ce(se,{noResolve:U,...ne}),i(17,ft=!0)):ce(se,{noResolve:U})),a.$$.dirty[0]&8192&&i(19,$e=J`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),a.$$.dirty[0]&8192&&i(20,ie=`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),a.$$.dirty[0]&3932160&&($e||!We?$e||(ue(ie,{noResolve:$e,...Ee}),i(21,We=!0)):ue(ie,{noResolve:$e})),a.$$.dirty[0]&8192&&i(23,X=J`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),a.$$.dirty[0]&8192&&i(24,ze=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),a.$$.dirty[0]&62914560&&(X||!de?X||(fe(ze,{noResolve:X,...j}),i(25,de=!0)):fe(ze,{noResolve:X})),a.$$.dirty[0]&8192&&i(27,xe=J`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),a.$$.dirty[0]&8192&&i(28,ae=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),a.$$.dirty[0]&1006632960&&(xe||!Nt?xe||(mt(ae,{noResolve:xe,...Z}),i(29,Nt=!0)):mt(ae,{noResolve:xe})),a.$$.dirty[0]&8192&&i(31,ke=J`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),a.$$.dirty[0]&8192&&i(32,le=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),a.$$.dirty[0]&1073741824|a.$$.dirty[1]&7&&(ke||!ht?ke||(he(le,{noResolve:ke,...pe}),i(33,ht=!0)):he(le,{noResolve:ke})),a.$$.dirty[0]&8192&&i(35,K=J`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),a.$$.dirty[0]&8192&&i(36,Ye=`with client_shares as (
    select
        client_name,
        sum(amount) as client_amount,
        sum(amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline
    where deal_stage not in ('closedwon', 'closedlost')
      and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
      and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
    group by client_name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),a.$$.dirty[1]&120&&(K||!qe?K||(ve(Ye,{noResolve:K,...Ce}),i(37,qe=!0)):ve(Ye,{noResolve:K})),a.$$.dirty[0]&8192&&i(39,Ie=J`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
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
order by total_value desc`),a.$$.dirty[0]&8192&&i(40,He=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
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
order by total_value desc`),a.$$.dirty[1]&1920&&(Ie||!G?Ie||(Q(He,{noResolve:Ie,...ee}),i(41,G=!0)):Q(He,{noResolve:Ie})),a.$$.dirty[0]&8192&&i(43,M=J`select
    client_name,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),a.$$.dirty[0]&8192&&i(44,W=`select
    client_name,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
  and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 1
order by pipeline_value desc`),a.$$.dirty[1]&30720&&(M||!z?M||(oe(W,{noResolve:M,...ge}),i(45,z=!0)):oe(W,{noResolve:M})),a.$$.dirty[0]&8192&&i(0,De=(e==null?void 0:e.time_filter)||"ytd"),a.$$.dirty[0]&1&&i(9,t=Ns(De,Ls))},[De,Ht,Lt,pt,ye,me,vt,re,Ke,t,be,m,l,e,ne,U,se,ft,Ee,$e,ie,We,j,X,ze,de,Z,xe,ae,Nt,pe,ke,le,ht,Ce,K,Ye,qe,ee,Ie,He,G,ge,M,W,z,r,Yt,jt,Ge,Re]}class Zs extends hs{constructor(n){super(),vs(this,n,Bs,Hs,os,{data:11},null,[-1,-1,-1])}}export{Zs as component};
