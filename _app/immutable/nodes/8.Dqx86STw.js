import{s as Ka,d as _,z as Ga,w as Ja,b as u,i as C,e as c,l as ma,k as g,F as Xa,h as p,r as Jt,j as D,q as F,x as Ge,n as v,m,y as Je,t as Sa,G as Za,H as en,I as tn,B as Ha,v as we}from"../chunks/scheduler.D2R_dV_V.js";import{S as an,i as nn,d as E,t as y,a as b,c as Ee,m as I,b as T,e as R,g as Ie}from"../chunks/index.CK0M6mEu.js";import{V as wt,B as La,g as sn,Q as Et,a as ln,b as Qt}from"../chunks/Value.DbIAh8-U.js";import{h as ja,j as ae,k as rn,l as on,Q as qt,p as cn,r as Na,n as dn}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BfHOGUKa.js";import{w as _n,g as ha}from"../chunks/entry.IuOwx_JG.js";import{h as oe,p as un}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as fn}from"../chunks/stores.DOuzR48Z.js";const{document:Te}=sn;function pn(s){let t,a=q.title+"",e;return{c(){t=m("h1"),e=Je(a),this.h()},l(r){t=p(r,"H1",{class:!0});var i=D(t);e=Ge(i,a),i.forEach(_),this.h()},h(){u(t,"class","title")},m(r,i){C(r,t,i),c(t,e)},p:we,d(r){r&&_(t)}}}function mn(s){return{c(){this.h()},l(t){this.h()},h(){Te.title="Evidence"},m:we,p:we,d:we}}function hn(s){let t,a,e,r,i;return Te.title=t=q.title,{c(){a=v(),e=m("meta"),r=v(),i=m("meta"),this.h()},l(o){a=g(o),e=p(o,"META",{property:!0,content:!0}),r=g(o),i=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d;u(e,"property","og:title"),u(e,"content",((o=q.og)==null?void 0:o.title)??q.title),u(i,"name","twitter:title"),u(i,"content",((d=q.og)==null?void 0:d.title)??q.title)},m(o,d){C(o,a,d),C(o,e,d),C(o,r,d),C(o,i,d)},p(o,d){d&0&&t!==(t=q.title)&&(Te.title=t)},d(o){o&&(_(a),_(e),_(r),_(i))}}}function gn(s){var i,o;let t,a,e=(q.description||((i=q.og)==null?void 0:i.description))&&vn(),r=((o=q.og)==null?void 0:o.image)&&wn();return{c(){e&&e.c(),t=v(),r&&r.c(),a=Jt()},l(d){e&&e.l(d),t=g(d),r&&r.l(d),a=Jt()},m(d,k){e&&e.m(d,k),C(d,t,k),r&&r.m(d,k),C(d,a,k)},p(d,k){var l,h;(q.description||(l=q.og)!=null&&l.description)&&e.p(d,k),(h=q.og)!=null&&h.image&&r.p(d,k)},d(d){d&&(_(t),_(a)),e&&e.d(d),r&&r.d(d)}}}function vn(s){let t,a,e,r,i;return{c(){t=m("meta"),a=v(),e=m("meta"),r=v(),i=m("meta"),this.h()},l(o){t=p(o,"META",{name:!0,content:!0}),a=g(o),e=p(o,"META",{property:!0,content:!0}),r=g(o),i=p(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d,k;u(t,"name","description"),u(t,"content",q.description??((o=q.og)==null?void 0:o.description)),u(e,"property","og:description"),u(e,"content",((d=q.og)==null?void 0:d.description)??q.description),u(i,"name","twitter:description"),u(i,"content",((k=q.og)==null?void 0:k.description)??q.description)},m(o,d){C(o,t,d),C(o,a,d),C(o,e,d),C(o,r,d),C(o,i,d)},p:we,d(o){o&&(_(t),_(a),_(e),_(r),_(i))}}}function wn(s){let t,a,e;return{c(){t=m("meta"),a=v(),e=m("meta"),this.h()},l(r){t=p(r,"META",{property:!0,content:!0}),a=g(r),e=p(r,"META",{name:!0,content:!0}),this.h()},h(){var r,i;u(t,"property","og:image"),u(t,"content",ae((r=q.og)==null?void 0:r.image)),u(e,"name","twitter:image"),u(e,"content",ae((i=q.og)==null?void 0:i.image))},m(r,i){C(r,t,i),C(r,a,i),C(r,e,i)},p:we,d(r){r&&(_(t),_(a),_(e))}}}function Oa(s){let t,a;return t=new Et({props:{queryID:"kpi_win_rate",queryResult:s[1]}}),{c(){R(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,r){I(t,e,r),a=!0},p(e,r){const i={};r[0]&2&&(i.queryResult=e[1]),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function Ba(s){let t,a;return t=new Et({props:{queryID:"kpi_lost_value",queryResult:s[2]}}),{c(){R(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,r){I(t,e,r),a=!0},p(e,r){const i={};r[0]&4&&(i.queryResult=e[2]),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function Pa(s){let t,a;return t=new Et({props:{queryID:"kpi_open_deals",queryResult:s[3]}}),{c(){R(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,r){I(t,e,r),a=!0},p(e,r){const i={};r[0]&8&&(i.queryResult=e[3]),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function Ua(s){let t,a;return t=new Et({props:{queryID:"kpi_top_client_concentration",queryResult:s[4]}}),{c(){R(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,r){I(t,e,r),a=!0},p(e,r){const i={};r[0]&16&&(i.queryResult=e[4]),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function Wa(s){let t,a;return t=new Et({props:{queryID:"win_loss_reasons",queryResult:s[5]}}),{c(){R(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,r){I(t,e,r),a=!0},p(e,r){const i={};r[0]&32&&(i.queryResult=e[5]),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function Ya(s){let t,a;return t=new Et({props:{queryID:"client_pipeline_share",queryResult:s[6]}}),{c(){R(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,r){I(t,e,r),a=!0},p(e,r){const i={};r[0]&64&&(i.queryResult=e[6]),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function bn(s){let t,a,e,r,i,o,d,k;return t=new Qt({props:{valueLabel:"MTD",value:"mtd",default:s[0]==="mtd"}}),e=new Qt({props:{valueLabel:"QTD",value:"qtd",default:s[0]==="qtd"}}),i=new Qt({props:{valueLabel:"YTD",value:"ytd",default:s[0]==="ytd"}}),d=new Qt({props:{valueLabel:"All Time",value:"all",default:s[0]==="all"}}),{c(){R(t.$$.fragment),a=v(),R(e.$$.fragment),r=v(),R(i.$$.fragment),o=v(),R(d.$$.fragment)},l(l){T(t.$$.fragment,l),a=g(l),T(e.$$.fragment,l),r=g(l),T(i.$$.fragment,l),o=g(l),T(d.$$.fragment,l)},m(l,h){I(t,l,h),C(l,a,h),I(e,l,h),C(l,r,h),I(i,l,h),C(l,o,h),I(d,l,h),k=!0},p(l,h){const $={};h[0]&1&&($.default=l[0]==="mtd"),t.$set($);const w={};h[0]&1&&(w.default=l[0]==="qtd"),e.$set(w);const j={};h[0]&1&&(j.default=l[0]==="ytd"),i.$set(j);const ie={};h[0]&1&&(ie.default=l[0]==="all"),d.$set(ie)},i(l){k||(b(t.$$.fragment,l),b(e.$$.fragment,l),b(i.$$.fragment,l),b(d.$$.fragment,l),k=!0)},o(l){y(t.$$.fragment,l),y(e.$$.fragment,l),y(i.$$.fragment,l),y(d.$$.fragment,l),k=!1},d(l){l&&(_(a),_(r),_(o)),E(t,l),E(e,l),E(i,l),E(d,l)}}}function za(s){let t,a;return t=new ln({props:{name:"time_filter",defaultValue:s[0],$$slots:{default:[bn]},$$scope:{ctx:s}}}),{c(){R(t.$$.fragment)},l(e){T(t.$$.fragment,e)},m(e,r){I(t,e,r),a=!0},p(e,r){const i={};r[0]&1&&(i.defaultValue=e[0]),r[0]&1|r[1]&4194304&&(i.$$scope={dirty:r,ctx:e}),t.$set(i)},i(e){a||(b(t.$$.fragment,e),a=!0)},o(e){y(t.$$.fragment,e),a=!1},d(e){E(t,e)}}}function $n(s){let t,a,e="✦",r,i,o,d,k,l;return d=new wt({props:{data:s[1],column:"win_rate",fmt:"pct0"}}),{c(){t=m("div"),a=m("span"),a.textContent=e,r=v(),i=m("span"),o=Je("Win rate is healthy ("),R(d.$$.fragment),k=Je(")"),this.h()},l(h){t=p(h,"DIV",{class:!0});var $=D(t);a=p($,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-i2y69v"&&(a.textContent=e),r=g($),i=p($,"SPAN",{});var w=D(i);o=Ge(w,"Win rate is healthy ("),T(d.$$.fragment,w),k=Ge(w,")"),w.forEach(_),$.forEach(_),this.h()},h(){u(a,"class","text-teal-600 font-bold"),u(t,"class","flex items-start gap-1")},m(h,$){C(h,t,$),c(t,a),c(t,r),c(t,i),c(i,o),I(d,i,null),c(i,k),l=!0},p(h,$){const w={};$[0]&2&&(w.data=h[1]),d.$set(w)},i(h){l||(b(d.$$.fragment,h),l=!0)},o(h){y(d.$$.fragment,h),l=!1},d(h){h&&_(t),E(d)}}}function yn(s){let t,a,e="✦",r,i,o,d,k,l;return d=new wt({props:{data:s[1],column:"win_rate",fmt:"pct0"}}),{c(){t=m("div"),a=m("span"),a.textContent=e,r=v(),i=m("span"),o=Je("Win rate is low ("),R(d.$$.fragment),k=Je(" vs 25% target)"),this.h()},l(h){t=p(h,"DIV",{class:!0});var $=D(t);a=p($,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-16athnc"&&(a.textContent=e),r=g($),i=p($,"SPAN",{});var w=D(i);o=Ge(w,"Win rate is low ("),T(d.$$.fragment,w),k=Ge(w," vs 25% target)"),w.forEach(_),$.forEach(_),this.h()},h(){u(a,"class","text-amber-600 font-bold"),u(t,"class","flex items-start gap-1")},m(h,$){C(h,t,$),c(t,a),c(t,r),c(t,i),c(i,o),I(d,i,null),c(i,k),l=!0},p(h,$){const w={};$[0]&2&&(w.data=h[1]),d.$set(w)},i(h){l||(b(d.$$.fragment,h),l=!0)},o(h){y(d.$$.fragment,h),l=!1},d(h){h&&_(t),E(d)}}}function xn(s){let t,a='<span class="text-teal-600 font-bold">✦</span> <span>Client concentration is balanced</span>';return{c(){t=m("div"),t.innerHTML=a,this.h()},l(e){t=p(e,"DIV",{class:!0,"data-svelte-h":!0}),F(t)!=="svelte-d6fatc"&&(t.innerHTML=a),this.h()},h(){u(t,"class","flex items-start gap-1")},m(e,r){C(e,t,r)},p:we,i:we,o:we,d(e){e&&_(t)}}}function kn(s){let t,a,e="✦",r,i,o,d,k,l;return d=new wt({props:{data:s[4],column:"max_concentration",fmt:"pct0"}}),{c(){t=m("div"),a=m("span"),a.textContent=e,r=v(),i=m("span"),o=Je("High concentration ("),R(d.$$.fragment),k=Je(" of pipeline)"),this.h()},l(h){t=p(h,"DIV",{class:!0});var $=D(t);a=p($,"SPAN",{class:!0,"data-svelte-h":!0}),F(a)!=="svelte-16athnc"&&(a.textContent=e),r=g($),i=p($,"SPAN",{});var w=D(i);o=Ge(w,"High concentration ("),T(d.$$.fragment,w),k=Ge(w," of pipeline)"),w.forEach(_),$.forEach(_),this.h()},h(){u(a,"class","text-amber-600 font-bold"),u(t,"class","flex items-start gap-1")},m(h,$){C(h,t,$),c(t,a),c(t,r),c(t,i),c(i,o),I(d,i,null),c(i,k),l=!0},p(h,$){const w={};$[0]&16&&(w.data=h[4]),d.$set(w)},i(h){l||(b(d.$$.fragment,h),l=!0)},o(h){y(d.$$.fragment,h),l=!1},d(h){h&&_(t),E(d)}}}function Cn(s){let t,a,e,r,i,o,d,k,l,h,$,w,j,ie="Overview Cockpit",Xe,ne,bt="Sales & Win-Loss",ce,O,Re="Operations & Vendors",Fe,ee,X,z,ue="Sales Pipeline Deep-Dive",be,te,$t=s[0],Me,B,K,Ve="📅",Ze,Ae,et,Q,fe="Date snapshotted at June 2026",$e,pe,se,de,me="<span>💡</span> Sales Insights",_e,P,U,W,Se,N,G,yt,J,le,x,ye,ga='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Pipeline Win Rate</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',Xt,xt,He,Zt,tt,va="Closed Won vs. Closed Lost count",Rt,ea,he,at,nt,wa='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Lost Opportunity Value</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',ta,kt,Le,aa,st,ba="Sum of HubSpot deal amounts marked as 'Closed Lost'",Ft,na,ge,lt,rt,$a='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Open Deals in Funnel</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>',sa,Ct,je,la,ot,ya="Active prospects in pipeline",Mt,ra,ve,it,ct,xa='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Max Client Concentration</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>',oa,Dt,Ne,ia,dt,ka="Largest client's share of pipeline",Vt,At,xe,Oe,Be,_t,Ca="CRM Closed Won/Lost Reason Breakdown",ca,ut,da,Pe,_a,Ue,We,ft,Da="Open Pipeline Value by Corporate Client",ua,pt,fa,Ye,ke,pa,qa,Ce=typeof q<"u"&&q.title&&q.hide_title!==!0&&pn();function Qa(n,f){return typeof q<"u"&&q.title?hn:mn}let It=Qa()(s),De=typeof q=="object"&&gn(),M=s[1]&&Oa(s),V=s[2]&&Ba(s),A=s[3]&&Pa(s),S=s[4]&&Ua(s),H=s[5]&&Wa(s),L=s[6]&&Ya(s),re=za(s);const Ea=[yn,$n],ze=[];function Ia(n,f){var Y,Z;return(Y=n[1][0])!=null&&Y.win_rate&&((Z=n[1][0])==null?void 0:Z.win_rate)<.25?0:1}U=Ia(s),W=ze[U]=Ea[U](s);const Ta=[kn,xn],Ke=[];function Ra(n,f){var Y,Z;return(Y=n[4][0])!=null&&Y.max_concentration&&((Z=n[4][0])==null?void 0:Z.max_concentration)>.5?0:1}return N=Ra(s),G=Ke[N]=Ta[N](s),He=new wt({props:{data:s[1],column:"win_rate",fmt:"pct1"}}),Le=new wt({props:{data:s[2],column:"lost_value",fmt:"usd"}}),je=new wt({props:{data:s[3],column:"open_deals_count"}}),Ne=new wt({props:{data:s[4],column:"max_concentration",fmt:"pct0"}}),ut=new ja({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Pe=new La({props:{data:s[5],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:40},xAxis:{splitNumber:3,axisLabel:{formatter:En}}}}}),pt=new ja({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),Ye=new La({props:{data:s[6],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:In}}}}}),{c(){Ce&&Ce.c(),t=v(),It.c(),a=m("meta"),e=m("meta"),De&&De.c(),r=Jt(),i=v(),M&&M.c(),o=v(),V&&V.c(),d=v(),A&&A.c(),k=v(),S&&S.c(),l=v(),H&&H.c(),h=v(),L&&L.c(),$=v(),w=m("div"),j=m("button"),j.textContent=ie,Xe=v(),ne=m("button"),ne.textContent=bt,ce=v(),O=m("button"),O.textContent=Re,Fe=v(),ee=m("div"),X=m("div"),z=m("div"),z.textContent=ue,be=v(),te=m("div"),re.c(),Me=v(),B=m("div"),K=m("span"),K.textContent=Ve,Ze=v(),Ae=Je(s[7]),et=v(),Q=m("div"),Q.textContent=fe,$e=v(),pe=m("div"),se=m("div"),de=m("div"),de.innerHTML=me,_e=v(),P=m("div"),W.c(),Se=v(),G.c(),yt=v(),J=m("div"),le=m("a"),x=m("div"),ye=m("div"),ye.innerHTML=ga,Xt=v(),xt=m("h2"),R(He.$$.fragment),Zt=v(),tt=m("div"),tt.textContent=va,ea=v(),he=m("a"),at=m("div"),nt=m("div"),nt.innerHTML=wa,ta=v(),kt=m("h2"),R(Le.$$.fragment),aa=v(),st=m("div"),st.textContent=ba,na=v(),ge=m("a"),lt=m("div"),rt=m("div"),rt.innerHTML=$a,sa=v(),Ct=m("h2"),R(je.$$.fragment),la=v(),ot=m("div"),ot.textContent=ya,ra=v(),ve=m("a"),it=m("div"),ct=m("div"),ct.innerHTML=xa,oa=v(),Dt=m("h2"),R(Ne.$$.fragment),ia=v(),dt=m("div"),dt.textContent=ka,At=v(),xe=m("div"),Oe=m("div"),Be=m("div"),_t=m("span"),_t.textContent=Ca,ca=v(),R(ut.$$.fragment),da=v(),R(Pe.$$.fragment),_a=v(),Ue=m("div"),We=m("div"),ft=m("span"),ft.textContent=Da,ua=v(),R(pt.$$.fragment),fa=v(),R(Ye.$$.fragment),this.h()},l(n){Ce&&Ce.l(n),t=g(n);const f=Xa("svelte-2igo1p",Te.head);It.l(f),a=p(f,"META",{name:!0,content:!0}),e=p(f,"META",{name:!0,content:!0}),De&&De.l(f),r=Jt(),f.forEach(_),i=g(n),M&&M.l(n),o=g(n),V&&V.l(n),d=g(n),A&&A.l(n),k=g(n),S&&S.l(n),l=g(n),H&&H.l(n),h=g(n),L&&L.l(n),$=g(n),w=p(n,"DIV",{class:!0});var Y=D(w);j=p(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),F(j)!=="svelte-1nm3ycn"&&(j.textContent=ie),Xe=g(Y),ne=p(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),F(ne)!=="svelte-ti9c0l"&&(ne.textContent=bt),ce=g(Y),O=p(Y,"BUTTON",{class:!0,"data-svelte-h":!0}),F(O)!=="svelte-19h1sxa"&&(O.textContent=Re),Y.forEach(_),Fe=g(n),ee=p(n,"DIV",{class:!0});var Z=D(ee);X=p(Z,"DIV",{class:!0});var qe=D(X);z=p(qe,"DIV",{class:!0,"data-svelte-h":!0}),F(z)!=="svelte-mtq68w"&&(z.textContent=ue),be=g(qe),te=p(qe,"DIV",{class:!0});var mt=D(te);re.l(mt),Me=g(mt),B=p(mt,"DIV",{class:!0});var ht=D(B);K=p(ht,"SPAN",{class:!0,"data-svelte-h":!0}),F(K)!=="svelte-n1bzfj"&&(K.textContent=Ve),Ze=g(ht),Ae=Ge(ht,s[7]),ht.forEach(_),mt.forEach(_),et=g(qe),Q=p(qe,"DIV",{class:!0,"data-svelte-h":!0}),F(Q)!=="svelte-1vz1e2m"&&(Q.textContent=fe),qe.forEach(_),$e=g(Z),pe=p(Z,"DIV",{class:!0});var Tt=D(pe);se=p(Tt,"DIV",{class:!0});var gt=D(se);de=p(gt,"DIV",{class:!0,"data-svelte-h":!0}),F(de)!=="svelte-1pqv4xl"&&(de.innerHTML=me),_e=g(gt),P=p(gt,"DIV",{class:!0});var vt=D(P);W.l(vt),Se=g(vt),G.l(vt),vt.forEach(_),gt.forEach(_),Tt.forEach(_),Z.forEach(_),yt=g(n),J=p(n,"DIV",{class:!0});var Qe=D(J);le=p(Qe,"A",{href:!0,class:!0});var St=D(le);x=p(St,"DIV",{});var Ht=D(x);ye=p(Ht,"DIV",{class:!0,"data-svelte-h":!0}),F(ye)!=="svelte-u68fg7"&&(ye.innerHTML=ga),Xt=g(Ht),xt=p(Ht,"H2",{class:!0});var Fa=D(xt);T(He.$$.fragment,Fa),Fa.forEach(_),Ht.forEach(_),Zt=g(St),tt=p(St,"DIV",{class:!0,"data-svelte-h":!0}),F(tt)!=="svelte-1d405ho"&&(tt.textContent=va),St.forEach(_),ea=g(Qe),he=p(Qe,"A",{href:!0,class:!0});var Lt=D(he);at=p(Lt,"DIV",{});var jt=D(at);nt=p(jt,"DIV",{class:!0,"data-svelte-h":!0}),F(nt)!=="svelte-10nsonq"&&(nt.innerHTML=wa),ta=g(jt),kt=p(jt,"H2",{class:!0});var Ma=D(kt);T(Le.$$.fragment,Ma),Ma.forEach(_),jt.forEach(_),aa=g(Lt),st=p(Lt,"DIV",{class:!0,"data-svelte-h":!0}),F(st)!=="svelte-le386w"&&(st.textContent=ba),Lt.forEach(_),na=g(Qe),ge=p(Qe,"A",{href:!0,class:!0});var Nt=D(ge);lt=p(Nt,"DIV",{});var Ot=D(lt);rt=p(Ot,"DIV",{class:!0,"data-svelte-h":!0}),F(rt)!=="svelte-cb2462"&&(rt.innerHTML=$a),sa=g(Ot),Ct=p(Ot,"H2",{class:!0});var Va=D(Ct);T(je.$$.fragment,Va),Va.forEach(_),Ot.forEach(_),la=g(Nt),ot=p(Nt,"DIV",{class:!0,"data-svelte-h":!0}),F(ot)!=="svelte-12s1tku"&&(ot.textContent=ya),Nt.forEach(_),ra=g(Qe),ve=p(Qe,"A",{href:!0,class:!0});var Bt=D(ve);it=p(Bt,"DIV",{});var Pt=D(it);ct=p(Pt,"DIV",{class:!0,"data-svelte-h":!0}),F(ct)!=="svelte-183evvl"&&(ct.innerHTML=xa),oa=g(Pt),Dt=p(Pt,"H2",{class:!0});var Aa=D(Dt);T(Ne.$$.fragment,Aa),Aa.forEach(_),Pt.forEach(_),ia=g(Bt),dt=p(Bt,"DIV",{class:!0,"data-svelte-h":!0}),F(dt)!=="svelte-dm1p4b"&&(dt.textContent=ka),Bt.forEach(_),Qe.forEach(_),At=g(n),xe=p(n,"DIV",{class:!0});var Ut=D(xe);Oe=p(Ut,"DIV",{class:!0});var Wt=D(Oe);Be=p(Wt,"DIV",{class:!0});var Yt=D(Be);_t=p(Yt,"SPAN",{class:!0,"data-svelte-h":!0}),F(_t)!=="svelte-dgw2oa"&&(_t.textContent=Ca),ca=g(Yt),T(ut.$$.fragment,Yt),Yt.forEach(_),da=g(Wt),T(Pe.$$.fragment,Wt),Wt.forEach(_),_a=g(Ut),Ue=p(Ut,"DIV",{class:!0});var zt=D(Ue);We=p(zt,"DIV",{class:!0});var Kt=D(We);ft=p(Kt,"SPAN",{class:!0,"data-svelte-h":!0}),F(ft)!=="svelte-1br9yke"&&(ft.textContent=Da),ua=g(Kt),T(pt.$$.fragment,Kt),Kt.forEach(_),fa=g(zt),T(Ye.$$.fragment,zt),zt.forEach(_),Ut.forEach(_),this.h()},h(){u(a,"name","twitter:card"),u(a,"content","summary_large_image"),u(e,"name","twitter:site"),u(e,"content","@evidence_dev"),u(j,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),u(ne,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),u(O,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),u(w,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),u(z,"class","text-base font-extrabold text-[#264773]"),u(K,"class","text-gray-400"),u(B,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2.5 py-1 rounded h-[26px] flex items-center gap-1.5"),u(te,"class","flex items-center gap-3"),u(Q,"class","text-[8px] text-gray-400 font-semibold bg-white/50 border border-gray-200 px-2 py-0.5 rounded self-start"),u(X,"class","flex flex-col gap-2"),u(de,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1"),u(P,"class","flex flex-col gap-0.5 text-gray-500 leading-tight"),u(se,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]"),u(pe,"class","flex flex-col items-end self-stretch md:self-auto"),u(ee,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),u(ye,"class","flex justify-between items-center"),u(xt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),u(tt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),u(le,"href",Rt="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${s[0]}`)),u(le,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),u(nt,"class","flex justify-between items-center"),u(kt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),u(st,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),u(he,"href",Ft="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${s[0]}`)),u(he,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),u(rt,"class","flex justify-between items-center"),u(Ct,"class","text-xl font-extrabold mt-0.5 text-gray-800"),u(ot,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),u(ge,"href",Mt="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${s[0]}`)),u(ge,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),u(ct,"class","flex justify-between items-center"),u(Dt,"class","text-xl font-extrabold mt-0.5 text-gray-800"),u(dt,"class","text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),u(ve,"href",Vt="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${s[0]}`)),u(ve,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),u(J,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),u(_t,"class","font-bold text-gray-700 text-xs"),u(Be,"class","flex items-center gap-1.5 mb-1"),u(Oe,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),u(ft,"class","font-bold text-gray-700 text-xs"),u(We,"class","flex items-center gap-1.5 mb-1"),u(Ue,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),u(xe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(n,f){Ce&&Ce.m(n,f),C(n,t,f),It.m(Te.head,null),c(Te.head,a),c(Te.head,e),De&&De.m(Te.head,null),c(Te.head,r),C(n,i,f),M&&M.m(n,f),C(n,o,f),V&&V.m(n,f),C(n,d,f),A&&A.m(n,f),C(n,k,f),S&&S.m(n,f),C(n,l,f),H&&H.m(n,f),C(n,h,f),L&&L.m(n,f),C(n,$,f),C(n,w,f),c(w,j),c(w,Xe),c(w,ne),c(w,ce),c(w,O),C(n,Fe,f),C(n,ee,f),c(ee,X),c(X,z),c(X,be),c(X,te),re.m(te,null),c(te,Me),c(te,B),c(B,K),c(B,Ze),c(B,Ae),c(X,et),c(X,Q),c(ee,$e),c(ee,pe),c(pe,se),c(se,de),c(se,_e),c(se,P),ze[U].m(P,null),c(P,Se),Ke[N].m(P,null),C(n,yt,f),C(n,J,f),c(J,le),c(le,x),c(x,ye),c(x,Xt),c(x,xt),I(He,xt,null),c(le,Zt),c(le,tt),c(J,ea),c(J,he),c(he,at),c(at,nt),c(at,ta),c(at,kt),I(Le,kt,null),c(he,aa),c(he,st),c(J,na),c(J,ge),c(ge,lt),c(lt,rt),c(lt,sa),c(lt,Ct),I(je,Ct,null),c(ge,la),c(ge,ot),c(J,ra),c(J,ve),c(ve,it),c(it,ct),c(it,oa),c(it,Dt),I(Ne,Dt,null),c(ve,ia),c(ve,dt),C(n,At,f),C(n,xe,f),c(xe,Oe),c(Oe,Be),c(Be,_t),c(Be,ca),I(ut,Be,null),c(Oe,da),I(Pe,Oe,null),c(xe,_a),c(xe,Ue),c(Ue,We),c(We,ft),c(We,ua),I(pt,We,null),c(Ue,fa),I(Ye,Ue,null),ke=!0,pa||(qa=[ma(j,"click",s[36]),ma(ne,"click",s[37]),ma(O,"click",s[38])],pa=!0)},p(n,f){typeof q<"u"&&q.title&&q.hide_title!==!0&&Ce.p(n,f),It.p(n,f),typeof q=="object"&&De.p(n,f),n[1]?M?(M.p(n,f),f[0]&2&&b(M,1)):(M=Oa(n),M.c(),b(M,1),M.m(o.parentNode,o)):M&&(Ie(),y(M,1,1,()=>{M=null}),Ee()),n[2]?V?(V.p(n,f),f[0]&4&&b(V,1)):(V=Ba(n),V.c(),b(V,1),V.m(d.parentNode,d)):V&&(Ie(),y(V,1,1,()=>{V=null}),Ee()),n[3]?A?(A.p(n,f),f[0]&8&&b(A,1)):(A=Pa(n),A.c(),b(A,1),A.m(k.parentNode,k)):A&&(Ie(),y(A,1,1,()=>{A=null}),Ee()),n[4]?S?(S.p(n,f),f[0]&16&&b(S,1)):(S=Ua(n),S.c(),b(S,1),S.m(l.parentNode,l)):S&&(Ie(),y(S,1,1,()=>{S=null}),Ee()),n[5]?H?(H.p(n,f),f[0]&32&&b(H,1)):(H=Wa(n),H.c(),b(H,1),H.m(h.parentNode,h)):H&&(Ie(),y(H,1,1,()=>{H=null}),Ee()),n[6]?L?(L.p(n,f),f[0]&64&&b(L,1)):(L=Ya(n),L.c(),b(L,1),L.m($.parentNode,$)):L&&(Ie(),y(L,1,1,()=>{L=null}),Ee()),f[0]&1&&Ka($t,$t=n[0])?(Ie(),y(re,1,1,we),Ee(),re=za(n),re.c(),b(re,1),re.m(te,Me)):re.p(n,f),(!ke||f[0]&128)&&Ja(Ae,n[7]);let Y=U;U=Ia(n),U===Y?ze[U].p(n,f):(Ie(),y(ze[Y],1,1,()=>{ze[Y]=null}),Ee(),W=ze[U],W?W.p(n,f):(W=ze[U]=Ea[U](n),W.c()),b(W,1),W.m(P,Se));let Z=N;N=Ra(n),N===Z?Ke[N].p(n,f):(Ie(),y(Ke[Z],1,1,()=>{Ke[Z]=null}),Ee(),G=Ke[N],G?G.p(n,f):(G=Ke[N]=Ta[N](n),G.c()),b(G,1),G.m(P,null));const qe={};f[0]&2&&(qe.data=n[1]),He.$set(qe),(!ke||f[0]&1&&Rt!==(Rt="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${n[0]}`)))&&u(le,"href",Rt);const mt={};f[0]&4&&(mt.data=n[2]),Le.$set(mt),(!ke||f[0]&1&&Ft!==(Ft="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${n[0]}`)))&&u(he,"href",Ft);const ht={};f[0]&8&&(ht.data=n[3]),je.$set(ht),(!ke||f[0]&1&&Mt!==(Mt="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${n[0]}`)))&&u(ge,"href",Mt);const Tt={};f[0]&16&&(Tt.data=n[4]),Ne.$set(Tt),(!ke||f[0]&1&&Vt!==(Vt="/public.dlt-pipeline-orchestration/"+ae(`/?time_filter=${n[0]}`)))&&u(ve,"href",Vt);const gt={};f[0]&32&&(gt.data=n[5]),Pe.$set(gt);const vt={};f[0]&64&&(vt.data=n[6]),Ye.$set(vt)},i(n){ke||(b(M),b(V),b(A),b(S),b(H),b(L),b(re),b(W),b(G),b(He.$$.fragment,n),b(Le.$$.fragment,n),b(je.$$.fragment,n),b(Ne.$$.fragment,n),b(ut.$$.fragment,n),b(Pe.$$.fragment,n),b(pt.$$.fragment,n),b(Ye.$$.fragment,n),ke=!0)},o(n){y(M),y(V),y(A),y(S),y(H),y(L),y(re),y(W),y(G),y(He.$$.fragment,n),y(Le.$$.fragment,n),y(je.$$.fragment,n),y(Ne.$$.fragment,n),y(ut.$$.fragment,n),y(Pe.$$.fragment,n),y(pt.$$.fragment,n),y(Ye.$$.fragment,n),ke=!1},d(n){n&&(_(t),_(i),_(o),_(d),_(k),_(l),_(h),_($),_(w),_(Fe),_(ee),_(yt),_(J),_(At),_(xe)),Ce&&Ce.d(n),It.d(n),_(a),_(e),De&&De.d(n),_(r),M&&M.d(n),V&&V.d(n),A&&A.d(n),S&&S.d(n),H&&H.d(n),L&&L.d(n),re.d(n),ze[U].d(),Ke[N].d(),E(He),E(Le),E(je),E(Ne),E(ut),E(Pe),E(pt),E(Ye),pa=!1,Ga(qa)}}}const q={title:"Sales & Win-Loss Analysis"},Dn="2026-06-15";function Gt(s){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${s.getDate()} ${t[s.getMonth()]} ${s.getFullYear()}`}function qn(s,t){const a=new Date(t+"T00:00:00"),e=Gt(a);if(s==="mtd"){const r=new Date(a.getFullYear(),a.getMonth(),1);return`${Gt(r)} - ${e}`}if(s==="qtd"){const r=Math.floor(a.getMonth()/3)*3,i=new Date(a.getFullYear(),r,1);return`${Gt(i)} - ${e}`}if(s==="ytd"){const r=new Date(a.getFullYear(),0,1);return`${Gt(r)} - ${e}`}return`All Time - ${e}`}const En=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s,In=s=>s>=1e6?"$"+s/1e6+"M":s>=1e3?"$"+s/1e3+"K":"$"+s;function Tn(s,t,a){let e,r;Sa(s,fn,x=>a(35,e=x)),Sa(s,Na,x=>a(43,r=x));let{data:i}=t,{data:o={},customFormattingSettings:d,__db:k,inputs:l}=i;Za(Na,r="b6c1e1557fc0a9a1e3a0b220257fd6d9",r);let h=rn(_n(l));en(h.subscribe(x=>a(10,l=x))),tn(dn,{getCustomFormats:()=>d.customFormats||[]});const $=(x,ye)=>un(k.query,x,{query_name:ye});on($),e.params,Ha(()=>!0);let w={initialData:void 0,initialError:void 0},j=oe`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`,ie=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`;o.kpi_win_rate_data&&(o.kpi_win_rate_data instanceof Error?w.initialError=o.kpi_win_rate_data:w.initialData=o.kpi_win_rate_data,o.kpi_win_rate_columns&&(w.knownColumns=o.kpi_win_rate_columns));let Xe,ne=!1;const bt=qt.createReactive({callback:x=>{a(1,Xe=x)},execFn:$},{id:"kpi_win_rate",...w});bt(ie,{noResolve:j,...w}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return Xe}};let ce={initialData:void 0,initialError:void 0},O=oe`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`,Re=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`;o.kpi_lost_value_data&&(o.kpi_lost_value_data instanceof Error?ce.initialError=o.kpi_lost_value_data:ce.initialData=o.kpi_lost_value_data,o.kpi_lost_value_columns&&(ce.knownColumns=o.kpi_lost_value_columns));let Fe,ee=!1;const X=qt.createReactive({callback:x=>{a(2,Fe=x)},execFn:$},{id:"kpi_lost_value",...ce});X(Re,{noResolve:O,...ce}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return Fe}};let z={initialData:void 0,initialError:void 0},ue=oe`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`,be=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`;o.kpi_open_deals_data&&(o.kpi_open_deals_data instanceof Error?z.initialError=o.kpi_open_deals_data:z.initialData=o.kpi_open_deals_data,o.kpi_open_deals_columns&&(z.knownColumns=o.kpi_open_deals_columns));let te,$t=!1;const Me=qt.createReactive({callback:x=>{a(3,te=x)},execFn:$},{id:"kpi_open_deals",...z});Me(be,{noResolve:ue,...z}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return te}};let B={initialData:void 0,initialError:void 0},K=oe`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`,Ve=`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`;o.kpi_top_client_concentration_data&&(o.kpi_top_client_concentration_data instanceof Error?B.initialError=o.kpi_top_client_concentration_data:B.initialData=o.kpi_top_client_concentration_data,o.kpi_top_client_concentration_columns&&(B.knownColumns=o.kpi_top_client_concentration_columns));let Ze,Ae=!1;const et=qt.createReactive({callback:x=>{a(4,Ze=x)},execFn:$},{id:"kpi_top_client_concentration",...B});et(Ve,{noResolve:K,...B}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return Ze}};let Q={initialData:void 0,initialError:void 0},fe=oe`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`,$e=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`;o.win_loss_reasons_data&&(o.win_loss_reasons_data instanceof Error?Q.initialError=o.win_loss_reasons_data:Q.initialData=o.win_loss_reasons_data,o.win_loss_reasons_columns&&(Q.knownColumns=o.win_loss_reasons_columns));let pe,se=!1;const de=qt.createReactive({callback:x=>{a(5,pe=x)},execFn:$},{id:"win_loss_reasons",...Q});de($e,{noResolve:fe,...Q}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return pe}};let me={initialData:void 0,initialError:void 0},_e=oe`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`,P=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`;o.client_pipeline_share_data&&(o.client_pipeline_share_data instanceof Error?me.initialError=o.client_pipeline_share_data:me.initialData=o.client_pipeline_share_data,o.client_pipeline_share_columns&&(me.knownColumns=o.client_pipeline_share_columns));let U,W=!1;const Se=qt.createReactive({callback:x=>{a(6,U=x)},execFn:$},{id:"client_pipeline_share",...me});Se(P,{noResolve:_e,...me}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return U}};let N="ytd",G="";Ha(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),l){const x=e.url.searchParams.get("time_filter");a(10,l.time_filter=x||"ytd",l)}});const yt=()=>ha(ae(`/?time_filter=${N}`)),J=()=>ha(ae(`/sales?time_filter=${N}`)),le=()=>ha(ae(`/operations?time_filter=${N}`));return s.$$set=x=>{"data"in x&&a(8,i=x.data)},s.$$.update=()=>{if(s.$$.dirty[0]&256&&a(9,{data:o={},customFormattingSettings:d,__db:k}=i,o),s.$$.dirty[0]&512&&cn.set(Object.keys(o).length>0),s.$$.dirty[1]&16&&e.params,s.$$.dirty[0]&1024&&a(12,j=oe`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`),s.$$.dirty[0]&1024&&a(13,ie=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`),s.$$.dirty[0]&30720&&(j||!ne?j||(bt(ie,{noResolve:j,...w}),a(14,ne=!0)):bt(ie,{noResolve:j})),s.$$.dirty[0]&1024&&a(16,O=oe`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`),s.$$.dirty[0]&1024&&a(17,Re=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`),s.$$.dirty[0]&491520&&(O||!ee?O||(X(Re,{noResolve:O,...ce}),a(18,ee=!0)):X(Re,{noResolve:O})),s.$$.dirty[0]&7864320&&(ue||!$t?ue||(Me(be,{noResolve:ue,...z}),a(22,$t=!0)):Me(be,{noResolve:ue})),s.$$.dirty[0]&125829120&&(K||!Ae?K||(et(Ve,{noResolve:K,...B}),a(26,Ae=!0)):et(Ve,{noResolve:K})),s.$$.dirty[0]&1024&&a(28,fe=oe`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),s.$$.dirty[0]&1024&&a(29,$e=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-15'::date
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),s.$$.dirty[0]&2013265920&&(fe||!se?fe||(de($e,{noResolve:fe,...Q}),a(30,se=!0)):de($e,{noResolve:fe})),s.$$.dirty[1]&15&&(_e||!W?_e||(Se(P,{noResolve:_e,...me}),a(34,W=!0)):Se(P,{noResolve:_e})),s.$$.dirty[0]&1024&&a(0,N=(l==null?void 0:l.time_filter)||"ytd"),s.$$.dirty[0]&1&&a(7,G=qn(N,Dn)),s.$$.dirty[0]&1024&&l&&l.time_filter)try{const x=new URL(window.location.href);x.searchParams.get("time_filter")!==l.time_filter&&(x.searchParams.set("time_filter",l.time_filter),window.history.replaceState(null,"",x.pathname+x.search))}catch{}},a(20,ue=oe`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`),a(21,be=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`),a(24,K=oe`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),a(25,Ve=`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost')) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),a(32,_e=oe`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`),a(33,P=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`),[N,Xe,Fe,te,Ze,pe,U,G,i,o,l,w,j,ie,ne,ce,O,Re,ee,z,ue,be,$t,B,K,Ve,Ae,Q,fe,$e,se,me,_e,P,W,e,yt,J,le]}class jn extends an{constructor(t){super(),nn(this,t,Tn,Cn,Ka,{data:8},null,[-1,-1])}}export{jn as component};
