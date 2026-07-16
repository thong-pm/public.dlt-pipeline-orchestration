import{s as va,d as _,z as ka,w as xa,i as b,e as d,l as Kt,b as f,A as te,k as h,B as Ca,h as m,r as At,j as C,q as Y,x as ba,n as w,m as p,y as ya,t as ra,C as Da,D as qa,E as Ea,F as ia,v as at}from"../chunks/scheduler.BWqtgNY2.js";import{S as Ra,i as Ia,d as S,t as y,a as g,c as et,m as M,b as O,e as B,g as tt}from"../chunks/index.DlzBi47Z.js";import{V as It,B as _a,g as Fa,Q as it,a as Ta,b as Ft}from"../chunks/Value.B3LdyhsB.js";import{a as da,e as Aa,s as Va,Q as rt,p as Sa,c as mt,r as ca,d as Ma}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DamxpeUC.js";import{w as Oa,g as Qt}from"../chunks/entry.DgDqja2i.js";import{h as ae,p as Ba}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Na}from"../chunks/stores.CR9qUyZ6.js";const{document:be}=Fa;function ja(n){let t,s=$.title+"",e;return{c(){t=p("h1"),e=ya(s),this.h()},l(o){t=m(o,"H1",{class:!0});var i=C(t);e=ba(i,s),i.forEach(_),this.h()},h(){f(t,"class","title")},m(o,i){b(o,t,i),d(t,e)},p:at,d(o){o&&_(t)}}}function La(n){return{c(){this.h()},l(t){this.h()},h(){be.title="Evidence"},m:at,p:at,d:at}}function Pa(n){let t,s,e,o,i;return be.title=t=$.title,{c(){s=w(),e=p("meta"),o=w(),i=p("meta"),this.h()},l(r){s=h(r),e=m(r,"META",{property:!0,content:!0}),o=h(r),i=m(r,"META",{name:!0,content:!0}),this.h()},h(){var r,u;f(e,"property","og:title"),f(e,"content",((r=$.og)==null?void 0:r.title)??$.title),f(i,"name","twitter:title"),f(i,"content",((u=$.og)==null?void 0:u.title)??$.title)},m(r,u){b(r,s,u),b(r,e,u),b(r,o,u),b(r,i,u)},p(r,u){u&0&&t!==(t=$.title)&&(be.title=t)},d(r){r&&(_(s),_(e),_(o),_(i))}}}function Ha(n){var i,r;let t,s,e=($.description||((i=$.og)==null?void 0:i.description))&&Ua(),o=((r=$.og)==null?void 0:r.image)&&Wa();return{c(){e&&e.c(),t=w(),o&&o.c(),s=At()},l(u){e&&e.l(u),t=h(u),o&&o.l(u),s=At()},m(u,k){e&&e.m(u,k),b(u,t,k),o&&o.m(u,k),b(u,s,k)},p(u,k){var l,x;($.description||(l=$.og)!=null&&l.description)&&e.p(u,k),(x=$.og)!=null&&x.image&&o.p(u,k)},d(u){u&&(_(t),_(s)),e&&e.d(u),o&&o.d(u)}}}function Ua(n){let t,s,e,o,i;return{c(){t=p("meta"),s=w(),e=p("meta"),o=w(),i=p("meta"),this.h()},l(r){t=m(r,"META",{name:!0,content:!0}),s=h(r),e=m(r,"META",{property:!0,content:!0}),o=h(r),i=m(r,"META",{name:!0,content:!0}),this.h()},h(){var r,u,k;f(t,"name","description"),f(t,"content",$.description??((r=$.og)==null?void 0:r.description)),f(e,"property","og:description"),f(e,"content",((u=$.og)==null?void 0:u.description)??$.description),f(i,"name","twitter:description"),f(i,"content",((k=$.og)==null?void 0:k.description)??$.description)},m(r,u){b(r,t,u),b(r,s,u),b(r,e,u),b(r,o,u),b(r,i,u)},p:at,d(r){r&&(_(t),_(s),_(e),_(o),_(i))}}}function Wa(n){let t,s,e;return{c(){t=p("meta"),s=w(),e=p("meta"),this.h()},l(o){t=m(o,"META",{property:!0,content:!0}),s=h(o),e=m(o,"META",{name:!0,content:!0}),this.h()},h(){var o,i;f(t,"property","og:image"),f(t,"content",mt((o=$.og)==null?void 0:o.image)),f(e,"name","twitter:image"),f(e,"content",mt((i=$.og)==null?void 0:i.image))},m(o,i){b(o,t,i),b(o,s,i),b(o,e,i)},p:at,d(o){o&&(_(t),_(s),_(e))}}}function ua(n){let t,s;return t=new it({props:{queryID:"kpi_win_rate",queryResult:n[1]}}),{c(){B(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const i={};o[0]&2&&(i.queryResult=e[1]),t.$set(i)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function fa(n){let t,s;return t=new it({props:{queryID:"kpi_lost_value",queryResult:n[2]}}),{c(){B(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const i={};o[0]&4&&(i.queryResult=e[2]),t.$set(i)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ma(n){let t,s;return t=new it({props:{queryID:"kpi_open_deals",queryResult:n[3]}}),{c(){B(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const i={};o[0]&8&&(i.queryResult=e[3]),t.$set(i)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function pa(n){let t,s;return t=new it({props:{queryID:"kpi_top_client_concentration",queryResult:n[4]}}),{c(){B(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const i={};o[0]&16&&(i.queryResult=e[4]),t.$set(i)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function ha(n){let t,s;return t=new it({props:{queryID:"win_loss_reasons",queryResult:n[5]}}),{c(){B(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const i={};o[0]&32&&(i.queryResult=e[5]),t.$set(i)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function wa(n){let t,s;return t=new it({props:{queryID:"client_pipeline_share",queryResult:n[6]}}),{c(){B(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const i={};o[0]&64&&(i.queryResult=e[6]),t.$set(i)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Ya(n){let t,s,e,o,i,r,u,k;return t=new Ft({props:{valueLabel:"MTD",value:"mtd",default:n[0]==="mtd"}}),e=new Ft({props:{valueLabel:"QTD",value:"qtd",default:n[0]==="qtd"}}),i=new Ft({props:{valueLabel:"YTD",value:"ytd",default:n[0]==="ytd"}}),u=new Ft({props:{valueLabel:"All Time",value:"all",default:n[0]==="all"}}),{c(){B(t.$$.fragment),s=w(),B(e.$$.fragment),o=w(),B(i.$$.fragment),r=w(),B(u.$$.fragment)},l(l){O(t.$$.fragment,l),s=h(l),O(e.$$.fragment,l),o=h(l),O(i.$$.fragment,l),r=h(l),O(u.$$.fragment,l)},m(l,x){M(t,l,x),b(l,s,x),M(e,l,x),b(l,o,x),M(i,l,x),b(l,r,x),M(u,l,x),k=!0},p(l,x){const N={};x[0]&1&&(N.default=l[0]==="mtd"),t.$set(N);const D={};x[0]&1&&(D.default=l[0]==="qtd"),e.$set(D);const V={};x[0]&1&&(V.default=l[0]==="ytd"),i.$set(V);const se={};x[0]&1&&(se.default=l[0]==="all"),u.$set(se)},i(l){k||(g(t.$$.fragment,l),g(e.$$.fragment,l),g(i.$$.fragment,l),g(u.$$.fragment,l),k=!0)},o(l){y(t.$$.fragment,l),y(e.$$.fragment,l),y(i.$$.fragment,l),y(u.$$.fragment,l),k=!1},d(l){l&&(_(s),_(o),_(r)),S(t,l),S(e,l),S(i,l),S(u,l)}}}function ga(n){let t,s;return t=new Ta({props:{name:"time_filter",defaultValue:n[0],$$slots:{default:[Ya]},$$scope:{ctx:n}}}),{c(){B(t.$$.fragment)},l(e){O(t.$$.fragment,e)},m(e,o){M(t,e,o),s=!0},p(e,o){const i={};o[0]&1&&(i.defaultValue=e[0]),o[0]&1|o[1]&4194304&&(i.$$scope={dirty:o,ctx:e}),t.$set(i)},i(e){s||(g(t.$$.fragment,e),s=!0)},o(e){y(t.$$.fragment,e),s=!1},d(e){S(t,e)}}}function Ka(n){let t,s,e,o,i,r,u,k,l,x,N,D,V,se="Overview Cockpit",je,G,st="Sales & Win-Loss",ne,j,ye="Operations & Vendors",$e,Q,le,ie="Sales Pipeline Deep-Dive",oe,K,_e,ke,Le,H,de="Date snapshotted at June 2026",ce,J,nt=n[0],xe,q,L,z,X,lt="🎯 Pipeline Win Rate",Pe,U,P,pe,Z,ot="Closed Won vs. Closed Lost count",He,W,ue,fe,pt="💸 Lost Opportunity Value",_t,v,me,Vt,Ce,zt="Sum of HubSpot deal amounts marked as 'Closed Lost'",St,De,Ue,qe,Gt="💼 Open Deals in Funnel",Mt,We,Ee,Ot,Re,Jt="Active prospects in pipeline",Bt,Ie,Ye,Fe,Xt="⚠️ Max Client Concentration",Nt,Ke,Te,jt,Ae,Zt="Largest client's share of pipeline",ht,he,Ve,Se,Qe,ea="CRM Closed Won/Lost Reason Breakdown",Lt,ze,Pt,Me,Ht,Oe,Be,Ge,ta="Open Pipeline Value by Corporate Client",Ut,Je,Wt,Ne,dt,Yt,aa,we=typeof $<"u"&&$.title&&$.hide_title!==!0&&ja();function $a(a,c){return typeof $<"u"&&$.title?Pa:La}let ct=$a()(n),ge=typeof $=="object"&&Ha(),E=n[1]&&ua(n),R=n[2]&&fa(n),I=n[3]&&ma(n),F=n[4]&&pa(n),T=n[5]&&ha(n),A=n[6]&&wa(n),ee=ga(n);return P=new It({props:{data:n[1],column:"win_rate",fmt:"pct1"}}),me=new It({props:{data:n[2],column:"lost_value",fmt:"usd"}}),Ee=new It({props:{data:n[3],column:"open_deals_count"}}),Te=new It({props:{data:n[4],column:"max_concentration",fmt:"pct0"}}),ze=new da({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Me=new _a({props:{data:n[5],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:40},xAxis:{splitNumber:3,axisLabel:{formatter:Ga}}}}}),Je=new da({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),Ne=new _a({props:{data:n[6],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Ja}}}}}),{c(){we&&we.c(),t=w(),ct.c(),s=p("meta"),e=p("meta"),ge&&ge.c(),o=At(),i=w(),E&&E.c(),r=w(),R&&R.c(),u=w(),I&&I.c(),k=w(),F&&F.c(),l=w(),T&&T.c(),x=w(),A&&A.c(),N=w(),D=p("div"),V=p("button"),V.textContent=se,je=w(),G=p("button"),G.textContent=st,ne=w(),j=p("button"),j.textContent=ye,$e=w(),Q=p("div"),le=p("div"),le.textContent=ie,oe=w(),K=p("div"),_e=p("div"),ke=ya(n[7]),Le=w(),H=p("div"),H.textContent=de,ce=w(),J=p("div"),ee.c(),xe=w(),q=p("div"),L=p("div"),z=p("div"),X=p("span"),X.textContent=lt,Pe=w(),U=p("h2"),B(P.$$.fragment),pe=w(),Z=p("div"),Z.textContent=ot,He=w(),W=p("div"),ue=p("div"),fe=p("span"),fe.textContent=pt,_t=w(),v=p("h2"),B(me.$$.fragment),Vt=w(),Ce=p("div"),Ce.textContent=zt,St=w(),De=p("div"),Ue=p("div"),qe=p("span"),qe.textContent=Gt,Mt=w(),We=p("h2"),B(Ee.$$.fragment),Ot=w(),Re=p("div"),Re.textContent=Jt,Bt=w(),Ie=p("div"),Ye=p("div"),Fe=p("span"),Fe.textContent=Xt,Nt=w(),Ke=p("h2"),B(Te.$$.fragment),jt=w(),Ae=p("div"),Ae.textContent=Zt,ht=w(),he=p("div"),Ve=p("div"),Se=p("div"),Qe=p("span"),Qe.textContent=ea,Lt=w(),B(ze.$$.fragment),Pt=w(),B(Me.$$.fragment),Ht=w(),Oe=p("div"),Be=p("div"),Ge=p("span"),Ge.textContent=ta,Ut=w(),B(Je.$$.fragment),Wt=w(),B(Ne.$$.fragment),this.h()},l(a){we&&we.l(a),t=h(a);const c=Ca("svelte-2igo1p",be.head);ct.l(c),s=m(c,"META",{name:!0,content:!0}),e=m(c,"META",{name:!0,content:!0}),ge&&ge.l(c),o=At(),c.forEach(_),i=h(a),E&&E.l(a),r=h(a),R&&R.l(a),u=h(a),I&&I.l(a),k=h(a),F&&F.l(a),l=h(a),T&&T.l(a),x=h(a),A&&A.l(a),N=h(a),D=m(a,"DIV",{class:!0});var ve=C(D);V=m(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(V)!=="svelte-1nm3ycn"&&(V.textContent=se),je=h(ve),G=m(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(G)!=="svelte-ti9c0l"&&(G.textContent=st),ne=h(ve),j=m(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(j)!=="svelte-19h1sxa"&&(j.textContent=ye),ve.forEach(_),$e=h(a),Q=m(a,"DIV",{class:!0});var Xe=C(Q);le=m(Xe,"DIV",{class:!0,"data-svelte-h":!0}),Y(le)!=="svelte-mtq68w"&&(le.textContent=ie),oe=h(Xe),K=m(Xe,"DIV",{class:!0});var Ze=C(K);_e=m(Ze,"DIV",{class:!0});var ut=C(_e);ke=ba(ut,n[7]),ut.forEach(_),Le=h(Ze),H=m(Ze,"DIV",{class:!0,"data-svelte-h":!0}),Y(H)!=="svelte-14ez07j"&&(H.textContent=de),Ze.forEach(_),Xe.forEach(_),ce=h(a),J=m(a,"DIV",{class:!0});var ft=C(J);ee.l(ft),ft.forEach(_),xe=h(a),q=m(a,"DIV",{class:!0});var re=C(q);L=m(re,"DIV",{class:!0});var wt=C(L);z=m(wt,"DIV",{});var gt=C(z);X=m(gt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(X)!=="svelte-z454ua"&&(X.textContent=lt),Pe=h(gt),U=m(gt,"H2",{style:!0,class:!0});var sa=C(U);O(P.$$.fragment,sa),sa.forEach(_),gt.forEach(_),pe=h(wt),Z=m(wt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Z)!=="svelte-1t96lla"&&(Z.textContent=ot),wt.forEach(_),He=h(re),W=m(re,"DIV",{class:!0});var vt=C(W);ue=m(vt,"DIV",{});var bt=C(ue);fe=m(bt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(fe)!=="svelte-1p71z02"&&(fe.textContent=pt),_t=h(bt),v=m(bt,"H2",{style:!0,class:!0});var na=C(v);O(me.$$.fragment,na),na.forEach(_),bt.forEach(_),Vt=h(vt),Ce=m(vt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Ce)!=="svelte-9bsh6y"&&(Ce.textContent=zt),vt.forEach(_),St=h(re),De=m(re,"DIV",{class:!0});var yt=C(De);Ue=m(yt,"DIV",{});var $t=C(Ue);qe=m($t,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(qe)!=="svelte-kngp4i"&&(qe.textContent=Gt),Mt=h($t),We=m($t,"H2",{style:!0,class:!0});var la=C(We);O(Ee.$$.fragment,la),la.forEach(_),$t.forEach(_),Ot=h(yt),Re=m(yt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Re)!=="svelte-1tpohu4"&&(Re.textContent=Jt),yt.forEach(_),Bt=h(re),Ie=m(re,"DIV",{class:!0});var kt=C(Ie);Ye=m(kt,"DIV",{});var xt=C(Ye);Fe=m(xt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(Fe)!=="svelte-14ra03k"&&(Fe.textContent=Xt),Nt=h(xt),Ke=m(xt,"H2",{style:!0,class:!0});var oa=C(Ke);O(Te.$$.fragment,oa),oa.forEach(_),xt.forEach(_),jt=h(kt),Ae=m(kt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Ae)!=="svelte-elfod"&&(Ae.textContent=Zt),kt.forEach(_),re.forEach(_),ht=h(a),he=m(a,"DIV",{class:!0});var Ct=C(he);Ve=m(Ct,"DIV",{class:!0});var Dt=C(Ve);Se=m(Dt,"DIV",{class:!0});var qt=C(Se);Qe=m(qt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(Qe)!=="svelte-dgw2oa"&&(Qe.textContent=ea),Lt=h(qt),O(ze.$$.fragment,qt),qt.forEach(_),Pt=h(Dt),O(Me.$$.fragment,Dt),Dt.forEach(_),Ht=h(Ct),Oe=m(Ct,"DIV",{class:!0});var Et=C(Oe);Be=m(Et,"DIV",{class:!0});var Rt=C(Be);Ge=m(Rt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(Ge)!=="svelte-1br9yke"&&(Ge.textContent=ta),Ut=h(Rt),O(Je.$$.fragment,Rt),Rt.forEach(_),Wt=h(Et),O(Ne.$$.fragment,Et),Et.forEach(_),Ct.forEach(_),this.h()},h(){f(s,"name","twitter:card"),f(s,"content","summary_large_image"),f(e,"name","twitter:site"),f(e,"content","@evidence_dev"),f(V,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(G,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f(j,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(D,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(le,"class","text-base font-extrabold text-[#264773]"),f(_e,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded"),f(H,"class","text-[8px] text-gray-400 font-medium mt-0.5"),f(K,"class","flex flex-col items-end"),f(Q,"class","flex justify-between items-center mb-1.5 mt-0.5"),f(J,"class","mb-2 flex justify-start"),te(X,"color","#7B8DA6"),f(X,"class","text-[9px] font-bold uppercase tracking-wider"),te(U,"color","#000000"),f(U,"class","text-xl font-extrabold mt-0.5"),te(Z,"color","#7B8DA6"),f(Z,"class","text-[9px] mt-0.5"),f(L,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]"),te(fe,"color","#7B8DA6"),f(fe,"class","text-[9px] font-bold uppercase tracking-wider"),te(v,"color","#000000"),f(v,"class","text-xl font-extrabold mt-0.5"),te(Ce,"color","#7B8DA6"),f(Ce,"class","text-[9px] mt-0.5"),f(W,"class","bg-white rounded-xl shadow-sm border-t-4 border-red-500 py-3 px-3.5 flex flex-col justify-between h-[120px]"),te(qe,"color","#7B8DA6"),f(qe,"class","text-[9px] font-bold uppercase tracking-wider"),te(We,"color","#000000"),f(We,"class","text-xl font-extrabold mt-0.5"),te(Re,"color","#7B8DA6"),f(Re,"class","text-[9px] mt-0.5"),f(De,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),te(Fe,"color","#7B8DA6"),f(Fe,"class","text-[9px] font-bold uppercase tracking-wider"),te(Ke,"color","#000000"),f(Ke,"class","text-xl font-extrabold mt-0.5"),te(Ae,"color","#7B8DA6"),f(Ae,"class","text-[9px] mt-0.5"),f(Ie,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(q,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(Qe,"class","font-bold text-gray-700 text-xs"),f(Se,"class","flex items-center gap-1.5 mb-1"),f(Ve,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(Ge,"class","font-bold text-gray-700 text-xs"),f(Be,"class","flex items-center gap-1.5 mb-1"),f(Oe,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(he,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(a,c){we&&we.m(a,c),b(a,t,c),ct.m(be.head,null),d(be.head,s),d(be.head,e),ge&&ge.m(be.head,null),d(be.head,o),b(a,i,c),E&&E.m(a,c),b(a,r,c),R&&R.m(a,c),b(a,u,c),I&&I.m(a,c),b(a,k,c),F&&F.m(a,c),b(a,l,c),T&&T.m(a,c),b(a,x,c),A&&A.m(a,c),b(a,N,c),b(a,D,c),d(D,V),d(D,je),d(D,G),d(D,ne),d(D,j),b(a,$e,c),b(a,Q,c),d(Q,le),d(Q,oe),d(Q,K),d(K,_e),d(_e,ke),d(K,Le),d(K,H),b(a,ce,c),b(a,J,c),ee.m(J,null),b(a,xe,c),b(a,q,c),d(q,L),d(L,z),d(z,X),d(z,Pe),d(z,U),M(P,U,null),d(L,pe),d(L,Z),d(q,He),d(q,W),d(W,ue),d(ue,fe),d(ue,_t),d(ue,v),M(me,v,null),d(W,Vt),d(W,Ce),d(q,St),d(q,De),d(De,Ue),d(Ue,qe),d(Ue,Mt),d(Ue,We),M(Ee,We,null),d(De,Ot),d(De,Re),d(q,Bt),d(q,Ie),d(Ie,Ye),d(Ye,Fe),d(Ye,Nt),d(Ye,Ke),M(Te,Ke,null),d(Ie,jt),d(Ie,Ae),b(a,ht,c),b(a,he,c),d(he,Ve),d(Ve,Se),d(Se,Qe),d(Se,Lt),M(ze,Se,null),d(Ve,Pt),M(Me,Ve,null),d(he,Ht),d(he,Oe),d(Oe,Be),d(Be,Ge),d(Be,Ut),M(Je,Be,null),d(Oe,Wt),M(Ne,Oe,null),dt=!0,Yt||(aa=[Kt(V,"click",n[36]),Kt(G,"click",n[37]),Kt(j,"click",n[38])],Yt=!0)},p(a,c){typeof $<"u"&&$.title&&$.hide_title!==!0&&we.p(a,c),ct.p(a,c),typeof $=="object"&&ge.p(a,c),a[1]?E?(E.p(a,c),c[0]&2&&g(E,1)):(E=ua(a),E.c(),g(E,1),E.m(r.parentNode,r)):E&&(tt(),y(E,1,1,()=>{E=null}),et()),a[2]?R?(R.p(a,c),c[0]&4&&g(R,1)):(R=fa(a),R.c(),g(R,1),R.m(u.parentNode,u)):R&&(tt(),y(R,1,1,()=>{R=null}),et()),a[3]?I?(I.p(a,c),c[0]&8&&g(I,1)):(I=ma(a),I.c(),g(I,1),I.m(k.parentNode,k)):I&&(tt(),y(I,1,1,()=>{I=null}),et()),a[4]?F?(F.p(a,c),c[0]&16&&g(F,1)):(F=pa(a),F.c(),g(F,1),F.m(l.parentNode,l)):F&&(tt(),y(F,1,1,()=>{F=null}),et()),a[5]?T?(T.p(a,c),c[0]&32&&g(T,1)):(T=ha(a),T.c(),g(T,1),T.m(x.parentNode,x)):T&&(tt(),y(T,1,1,()=>{T=null}),et()),a[6]?A?(A.p(a,c),c[0]&64&&g(A,1)):(A=wa(a),A.c(),g(A,1),A.m(N.parentNode,N)):A&&(tt(),y(A,1,1,()=>{A=null}),et()),(!dt||c[0]&128)&&xa(ke,a[7]),c[0]&1&&va(nt,nt=a[0])?(tt(),y(ee,1,1,at),et(),ee=ga(a),ee.c(),g(ee,1),ee.m(J,null)):ee.p(a,c);const ve={};c[0]&2&&(ve.data=a[1]),P.$set(ve);const Xe={};c[0]&4&&(Xe.data=a[2]),me.$set(Xe);const Ze={};c[0]&8&&(Ze.data=a[3]),Ee.$set(Ze);const ut={};c[0]&16&&(ut.data=a[4]),Te.$set(ut);const ft={};c[0]&32&&(ft.data=a[5]),Me.$set(ft);const re={};c[0]&64&&(re.data=a[6]),Ne.$set(re)},i(a){dt||(g(E),g(R),g(I),g(F),g(T),g(A),g(ee),g(P.$$.fragment,a),g(me.$$.fragment,a),g(Ee.$$.fragment,a),g(Te.$$.fragment,a),g(ze.$$.fragment,a),g(Me.$$.fragment,a),g(Je.$$.fragment,a),g(Ne.$$.fragment,a),dt=!0)},o(a){y(E),y(R),y(I),y(F),y(T),y(A),y(ee),y(P.$$.fragment,a),y(me.$$.fragment,a),y(Ee.$$.fragment,a),y(Te.$$.fragment,a),y(ze.$$.fragment,a),y(Me.$$.fragment,a),y(Je.$$.fragment,a),y(Ne.$$.fragment,a),dt=!1},d(a){a&&(_(t),_(i),_(r),_(u),_(k),_(l),_(x),_(N),_(D),_($e),_(Q),_(ce),_(J),_(xe),_(q),_(ht),_(he)),we&&we.d(a),ct.d(a),_(s),_(e),ge&&ge.d(a),_(o),E&&E.d(a),R&&R.d(a),I&&I.d(a),F&&F.d(a),T&&T.d(a),A&&A.d(a),ee.d(a),S(P),S(me),S(Ee),S(Te),S(ze),S(Me),S(Je),S(Ne),Yt=!1,ka(aa)}}}const $={title:"Sales & Win-Loss Analysis"},Qa="2026-06-15";function Tt(n){const t=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${n.getDate()} ${t[n.getMonth()]} ${n.getFullYear()}`}function za(n,t){const s=new Date(t+"T00:00:00"),e=Tt(s);if(n==="mtd"){const o=new Date(s.getFullYear(),s.getMonth(),1);return`${Tt(o)} - ${e}`}if(n==="qtd"){const o=Math.floor(s.getMonth()/3)*3,i=new Date(s.getFullYear(),o,1);return`${Tt(i)} - ${e}`}if(n==="ytd"){const o=new Date(s.getFullYear(),0,1);return`${Tt(o)} - ${e}`}return`All Time - ${e}`}const Ga=n=>n>=1e6?"$"+n/1e6+"M":n>=1e3?"$"+n/1e3+"K":"$"+n,Ja=n=>n>=1e6?"$"+n/1e6+"M":n>=1e3?"$"+n/1e3+"K":"$"+n;function Xa(n,t,s){let e,o;ra(n,Na,v=>s(35,e=v)),ra(n,ca,v=>s(43,o=v));let{data:i}=t,{data:r={},customFormattingSettings:u,__db:k,inputs:l}=i;Da(ca,o="b6c1e1557fc0a9a1e3a0b220257fd6d9",o);let x=Aa(Oa(l));qa(x.subscribe(v=>s(10,l=v))),Ea(Ma,{getCustomFormats:()=>u.customFormats||[]});const N=(v,me)=>Ba(k.query,v,{query_name:me});Va(N),e.params,ia(()=>!0);let D={initialData:void 0,initialError:void 0},V=ae`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`,se=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`;r.kpi_win_rate_data&&(r.kpi_win_rate_data instanceof Error?D.initialError=r.kpi_win_rate_data:D.initialData=r.kpi_win_rate_data,r.kpi_win_rate_columns&&(D.knownColumns=r.kpi_win_rate_columns));let je,G=!1;const st=rt.createReactive({callback:v=>{s(1,je=v)},execFn:N},{id:"kpi_win_rate",...D});st(se,{noResolve:V,...D}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return je}};let ne={initialData:void 0,initialError:void 0},j=ae`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`,ye=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`;r.kpi_lost_value_data&&(r.kpi_lost_value_data instanceof Error?ne.initialError=r.kpi_lost_value_data:ne.initialData=r.kpi_lost_value_data,r.kpi_lost_value_columns&&(ne.knownColumns=r.kpi_lost_value_columns));let $e,Q=!1;const le=rt.createReactive({callback:v=>{s(2,$e=v)},execFn:N},{id:"kpi_lost_value",...ne});le(ye,{noResolve:j,...ne}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return $e}};let ie={initialData:void 0,initialError:void 0},oe=ae`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`,K=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`;r.kpi_open_deals_data&&(r.kpi_open_deals_data instanceof Error?ie.initialError=r.kpi_open_deals_data:ie.initialData=r.kpi_open_deals_data,r.kpi_open_deals_columns&&(ie.knownColumns=r.kpi_open_deals_columns));let _e,ke=!1;const Le=rt.createReactive({callback:v=>{s(3,_e=v)},execFn:N},{id:"kpi_open_deals",...ie});Le(K,{noResolve:oe,...ie}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return _e}};let H={initialData:void 0,initialError:void 0},de=ae`with client_shares as (
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
from client_shares`,ce=`with client_shares as (
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
from client_shares`;r.kpi_top_client_concentration_data&&(r.kpi_top_client_concentration_data instanceof Error?H.initialError=r.kpi_top_client_concentration_data:H.initialData=r.kpi_top_client_concentration_data,r.kpi_top_client_concentration_columns&&(H.knownColumns=r.kpi_top_client_concentration_columns));let J,nt=!1;const xe=rt.createReactive({callback:v=>{s(4,J=v)},execFn:N},{id:"kpi_top_client_concentration",...H});xe(ce,{noResolve:de,...H}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return J}};let q={initialData:void 0,initialError:void 0},L=ae`with reason_ranks as (
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
order by total_value desc`,z=`with reason_ranks as (
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
order by total_value desc`;r.win_loss_reasons_data&&(r.win_loss_reasons_data instanceof Error?q.initialError=r.win_loss_reasons_data:q.initialData=r.win_loss_reasons_data,r.win_loss_reasons_columns&&(q.knownColumns=r.win_loss_reasons_columns));let X,lt=!1;const Pe=rt.createReactive({callback:v=>{s(5,X=v)},execFn:N},{id:"win_loss_reasons",...q});Pe(z,{noResolve:L,...q}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return X}};let U={initialData:void 0,initialError:void 0},P=ae`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`,pe=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`;r.client_pipeline_share_data&&(r.client_pipeline_share_data instanceof Error?U.initialError=r.client_pipeline_share_data:U.initialData=r.client_pipeline_share_data,r.client_pipeline_share_columns&&(U.knownColumns=r.client_pipeline_share_columns));let Z,ot=!1;const He=rt.createReactive({callback:v=>{s(6,Z=v)},execFn:N},{id:"client_pipeline_share",...U});He(pe,{noResolve:P,...U}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return Z}};let W="ytd",ue="";ia(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),l){const v=e.url.searchParams.get("time_filter");s(10,l.time_filter=v||"ytd",l)}});const fe=()=>Qt(mt(`/?time_filter=${W}`)),pt=()=>Qt(mt(`/sales?time_filter=${W}`)),_t=()=>Qt(mt(`/operations?time_filter=${W}`));return n.$$set=v=>{"data"in v&&s(8,i=v.data)},n.$$.update=()=>{if(n.$$.dirty[0]&256&&s(9,{data:r={},customFormattingSettings:u,__db:k}=i,r),n.$$.dirty[0]&512&&Sa.set(Object.keys(r).length>0),n.$$.dirty[1]&16&&e.params,n.$$.dirty[0]&1024&&s(12,V=ae`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`),n.$$.dirty[0]&1024&&s(13,se=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date`),n.$$.dirty[0]&30720&&(V||!G?V||(st(se,{noResolve:V,...D}),s(14,G=!0)):st(se,{noResolve:V})),n.$$.dirty[0]&1024&&s(16,j=ae`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`),n.$$.dirty[0]&1024&&s(17,ye=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${l.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${l.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${l.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-15'::date`),n.$$.dirty[0]&491520&&(j||!Q?j||(le(ye,{noResolve:j,...ne}),s(18,Q=!0)):le(ye,{noResolve:j})),n.$$.dirty[0]&7864320&&(oe||!ke?oe||(Le(K,{noResolve:oe,...ie}),s(22,ke=!0)):Le(K,{noResolve:oe})),n.$$.dirty[0]&125829120&&(de||!nt?de||(xe(ce,{noResolve:de,...H}),s(26,nt=!0)):xe(ce,{noResolve:de})),n.$$.dirty[0]&1024&&s(28,L=ae`with reason_ranks as (
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
order by total_value desc`),n.$$.dirty[0]&1024&&s(29,z=`with reason_ranks as (
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
order by total_value desc`),n.$$.dirty[0]&2013265920&&(L||!lt?L||(Pe(z,{noResolve:L,...q}),s(30,lt=!0)):Pe(z,{noResolve:L})),n.$$.dirty[1]&15&&(P||!ot?P||(He(pe,{noResolve:P,...U}),s(34,ot=!0)):He(pe,{noResolve:P})),n.$$.dirty[0]&1024&&s(0,W=(l==null?void 0:l.time_filter)||"ytd"),n.$$.dirty[0]&1&&s(7,ue=za(W,Qa)),n.$$.dirty[0]&1024&&l&&l.time_filter)try{const v=new URL(window.location.href);v.searchParams.get("time_filter")!==l.time_filter&&(v.searchParams.set("time_filter",l.time_filter),window.history.replaceState(null,"",v.pathname+v.search))}catch{}},s(20,oe=ae`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`),s(21,K=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')`),s(24,de=ae`with client_shares as (
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
from client_shares`),s(25,ce=`with client_shares as (
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
from client_shares`),s(32,P=ae`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`),s(33,pe=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
group by all
order by pipeline_value desc`),[W,je,$e,_e,J,X,Z,ue,i,r,l,D,V,se,G,ne,j,ye,Q,ie,oe,K,ke,H,de,ce,nt,q,L,z,lt,U,P,pe,ot,e,fe,pt,_t]}class rs extends Ra{constructor(t){super(),Ia(this,t,Xa,Ka,va,{data:8},null,[-1,-1])}}export{rs as component};
