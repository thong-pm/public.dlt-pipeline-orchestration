import{s as oa,d as _,z as ia,i as y,e as u,l as Vt,b as m,A as ae,k as h,B as _a,h as f,r as bt,j as C,q as Q,n as g,m as p,t as Qt,C as ca,D as da,E as ua,F as zt,v as Je,x as ma,y as fa}from"../chunks/scheduler.BWqtgNY2.js";import{S as pa,i as ha,d as S,t as $,a as v,c as Ye,m as V,b as M,e as B,g as Xe}from"../chunks/index.DlzBi47Z.js";import{a as Gt,e as ga,s as va,Q as tt,p as wa,c as Yt,r as Xt,d as ya}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.0ms6tUjC.js";import{w as $a,g as Mt}from"../chunks/entry.Cb3J1ldK.js";import{h as ne,p as xa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as ba}from"../chunks/stores.Dpj02sKu.js";import{V as $t,B as Jt,Q as at,a as ka,b as xt}from"../chunks/Value.BoBYavHo.js";function qa(r){let a,s=x.title+"",t;return{c(){a=p("h1"),t=fa(s),this.h()},l(l){a=f(l,"H1",{class:!0});var i=C(a);t=ma(i,s),i.forEach(_),this.h()},h(){m(a,"class","title")},m(l,i){y(l,a,i),u(a,t)},p:Je,d(l){l&&_(a)}}}function Ca(r){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:Je,p:Je,d:Je}}function Da(r){let a,s,t,l,i;return document.title=a=x.title,{c(){s=g(),t=p("meta"),l=g(),i=p("meta"),this.h()},l(o){s=h(o),t=f(o,"META",{property:!0,content:!0}),l=h(o),i=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d;m(t,"property","og:title"),m(t,"content",((o=x.og)==null?void 0:o.title)??x.title),m(i,"name","twitter:title"),m(i,"content",((d=x.og)==null?void 0:d.title)??x.title)},m(o,d){y(o,s,d),y(o,t,d),y(o,l,d),y(o,i,d)},p(o,d){d&0&&a!==(a=x.title)&&(document.title=a)},d(o){o&&(_(s),_(t),_(l),_(i))}}}function Ea(r){var i,o;let a,s,t=(x.description||((i=x.og)==null?void 0:i.description))&&Ra(),l=((o=x.og)==null?void 0:o.image)&&Ia();return{c(){t&&t.c(),a=g(),l&&l.c(),s=bt()},l(d){t&&t.l(d),a=h(d),l&&l.l(d),s=bt()},m(d,b){t&&t.m(d,b),y(d,a,b),l&&l.m(d,b),y(d,s,b)},p(d,b){var e,k;(x.description||(e=x.og)!=null&&e.description)&&t.p(d,b),(k=x.og)!=null&&k.image&&l.p(d,b)},d(d){d&&(_(a),_(s)),t&&t.d(d),l&&l.d(d)}}}function Ra(r){let a,s,t,l,i;return{c(){a=p("meta"),s=g(),t=p("meta"),l=g(),i=p("meta"),this.h()},l(o){a=f(o,"META",{name:!0,content:!0}),s=h(o),t=f(o,"META",{property:!0,content:!0}),l=h(o),i=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d,b;m(a,"name","description"),m(a,"content",x.description??((o=x.og)==null?void 0:o.description)),m(t,"property","og:description"),m(t,"content",((d=x.og)==null?void 0:d.description)??x.description),m(i,"name","twitter:description"),m(i,"content",((b=x.og)==null?void 0:b.description)??x.description)},m(o,d){y(o,a,d),y(o,s,d),y(o,t,d),y(o,l,d),y(o,i,d)},p:Je,d(o){o&&(_(a),_(s),_(t),_(l),_(i))}}}function Ia(r){let a,s,t;return{c(){a=p("meta"),s=g(),t=p("meta"),this.h()},l(l){a=f(l,"META",{property:!0,content:!0}),s=h(l),t=f(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i;m(a,"property","og:image"),m(a,"content",Yt((l=x.og)==null?void 0:l.image)),m(t,"name","twitter:image"),m(t,"content",Yt((i=x.og)==null?void 0:i.image))},m(l,i){y(l,a,i),y(l,s,i),y(l,t,i)},p:Je,d(l){l&&(_(a),_(s),_(t))}}}function Zt(r){let a,s;return a=new at({props:{queryID:"kpi_win_rate",queryResult:r[0]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&1&&(i.queryResult=t[0]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function ea(r){let a,s;return a=new at({props:{queryID:"kpi_lost_value",queryResult:r[1]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&2&&(i.queryResult=t[1]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function ta(r){let a,s;return a=new at({props:{queryID:"kpi_open_deals",queryResult:r[2]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&4&&(i.queryResult=t[2]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function aa(r){let a,s;return a=new at({props:{queryID:"kpi_top_client_concentration",queryResult:r[3]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&8&&(i.queryResult=t[3]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function na(r){let a,s;return a=new at({props:{queryID:"win_loss_reasons",queryResult:r[4]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&16&&(i.queryResult=t[4]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function sa(r){let a,s;return a=new at({props:{queryID:"client_pipeline_share",queryResult:r[5]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&32&&(i.queryResult=t[5]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Ta(r){let a,s,t,l,i,o,d,b;return a=new xt({props:{valueLabel:"MTD",value:"mtd",default:r[6]==="mtd"}}),t=new xt({props:{valueLabel:"QTD",value:"qtd",default:r[6]==="qtd"}}),i=new xt({props:{valueLabel:"YTD",value:"ytd",default:r[6]==="ytd"}}),d=new xt({props:{valueLabel:"All Time",value:"all",default:r[6]==="all"}}),{c(){B(a.$$.fragment),s=g(),B(t.$$.fragment),l=g(),B(i.$$.fragment),o=g(),B(d.$$.fragment)},l(e){M(a.$$.fragment,e),s=h(e),M(t.$$.fragment,e),l=h(e),M(i.$$.fragment,e),o=h(e),M(d.$$.fragment,e)},m(e,k){V(a,e,k),y(e,s,k),V(t,e,k),y(e,l,k),V(i,e,k),y(e,o,k),V(d,e,k),b=!0},p(e,k){const O={};k[0]&64&&(O.default=e[6]==="mtd"),a.$set(O);const q={};k[0]&64&&(q.default=e[6]==="qtd"),t.$set(q);const A={};k[0]&64&&(A.default=e[6]==="ytd"),i.$set(A);const se={};k[0]&64&&(se.default=e[6]==="all"),d.$set(se)},i(e){b||(v(a.$$.fragment,e),v(t.$$.fragment,e),v(i.$$.fragment,e),v(d.$$.fragment,e),b=!0)},o(e){$(a.$$.fragment,e),$(t.$$.fragment,e),$(i.$$.fragment,e),$(d.$$.fragment,e),b=!1},d(e){e&&(_(s),_(l),_(o)),S(a,e),S(t,e),S(i,e),S(d,e)}}}function ra(r){let a,s;return a=new ka({props:{name:"time_filter",defaultValue:r[6],$$slots:{default:[Ta]},$$scope:{ctx:r}}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&64&&(i.defaultValue=t[6]),l[0]&64|l[1]&2097152&&(i.$$scope={dirty:l,ctx:t}),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Fa(r){let a,s,t,l,i,o,d,b,e,k,O,q,A,se="Overview Cockpit",Be,z,Ze="Sales & Win-Loss",re,N,we="Operations & Vendors",ye,G,et='<div class="text-base font-extrabold text-[#264773]">Sales Pipeline Deep-Dive</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: HubSpot CRM</div>',Y,j,$e=r[6],xe,L,X,W,P,be="🎯 Pipeline Win Rate",Oe,oe,J,le,H,ke="Closed Won vs. Closed Lost count",Le,Z,ie,U,de="💸 Lost Opportunity Value",fe,_e,ee,Ne,K,lt="Total lost contract values",nt,ue,w,me,Bt="💼 Open Deals in Funnel",kt,je,qe,qt,Ce,Ot="Active prospects in pipeline",Ct,De,Pe,Ee,Lt="⚠️ Max Client Concentration",Dt,He,Re,Et,Ie,Nt="Largest client's share of pipeline",it,pe,Te,Fe,Ue,jt="CRM Closed Won/Lost Reason Breakdown",Rt,We,It,Ae,Tt,Se,Ve,Ke,Pt="Open Pipeline Value by Corporate Client",Ft,Qe,At,Me,_t,St,Ht,he=typeof x<"u"&&x.title&&x.hide_title!==!0&&qa();function la(n,c){return typeof x<"u"&&x.title?Da:Ca}let st=la()(r),ge=typeof x=="object"&&Ea(),D=r[0]&&Zt(r),E=r[1]&&ea(r),R=r[2]&&ta(r),I=r[3]&&aa(r),T=r[4]&&na(r),F=r[5]&&sa(r),te=ra(r);return J=new $t({props:{data:r[0],column:"win_rate",fmt:"pct1"}}),ee=new $t({props:{data:r[1],column:"lost_value",fmt:"usd"}}),qe=new $t({props:{data:r[2],column:"open_deals_count"}}),Re=new $t({props:{data:r[3],column:"max_concentration",fmt:"pct0"}}),We=new Gt({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Ae=new Jt({props:{data:r[4],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:40},xAxis:{splitNumber:3,axisLabel:{formatter:Aa}}}}}),Qe=new Gt({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),Me=new Jt({props:{data:r[5],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Sa}}}}}),{c(){he&&he.c(),a=g(),st.c(),s=p("meta"),t=p("meta"),ge&&ge.c(),l=bt(),i=g(),D&&D.c(),o=g(),E&&E.c(),d=g(),R&&R.c(),b=g(),I&&I.c(),e=g(),T&&T.c(),k=g(),F&&F.c(),O=g(),q=p("div"),A=p("button"),A.textContent=se,Be=g(),z=p("button"),z.textContent=Ze,re=g(),N=p("button"),N.textContent=we,ye=g(),G=p("div"),G.innerHTML=et,Y=g(),j=p("div"),te.c(),xe=g(),L=p("div"),X=p("div"),W=p("div"),P=p("span"),P.textContent=be,Oe=g(),oe=p("h2"),B(J.$$.fragment),le=g(),H=p("div"),H.textContent=ke,Le=g(),Z=p("div"),ie=p("div"),U=p("span"),U.textContent=de,fe=g(),_e=p("h2"),B(ee.$$.fragment),Ne=g(),K=p("div"),K.textContent=lt,nt=g(),ue=p("div"),w=p("div"),me=p("span"),me.textContent=Bt,kt=g(),je=p("h2"),B(qe.$$.fragment),qt=g(),Ce=p("div"),Ce.textContent=Ot,Ct=g(),De=p("div"),Pe=p("div"),Ee=p("span"),Ee.textContent=Lt,Dt=g(),He=p("h2"),B(Re.$$.fragment),Et=g(),Ie=p("div"),Ie.textContent=Nt,it=g(),pe=p("div"),Te=p("div"),Fe=p("div"),Ue=p("span"),Ue.textContent=jt,Rt=g(),B(We.$$.fragment),It=g(),B(Ae.$$.fragment),Tt=g(),Se=p("div"),Ve=p("div"),Ke=p("span"),Ke.textContent=Pt,Ft=g(),B(Qe.$$.fragment),At=g(),B(Me.$$.fragment),this.h()},l(n){he&&he.l(n),a=h(n);const c=_a("svelte-2igo1p",document.head);st.l(c),s=f(c,"META",{name:!0,content:!0}),t=f(c,"META",{name:!0,content:!0}),ge&&ge.l(c),l=bt(),c.forEach(_),i=h(n),D&&D.l(n),o=h(n),E&&E.l(n),d=h(n),R&&R.l(n),b=h(n),I&&I.l(n),e=h(n),T&&T.l(n),k=h(n),F&&F.l(n),O=h(n),q=f(n,"DIV",{class:!0});var ve=C(q);A=f(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(A)!=="svelte-fsunjz"&&(A.textContent=se),Be=h(ve),z=f(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(z)!=="svelte-15yxusb"&&(z.textContent=Ze),re=h(ve),N=f(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(N)!=="svelte-1lgfas4"&&(N.textContent=we),ve.forEach(_),ye=h(n),G=f(n,"DIV",{class:!0,"data-svelte-h":!0}),Q(G)!=="svelte-1ooszag"&&(G.innerHTML=et),Y=h(n),j=f(n,"DIV",{class:!0});var rt=C(j);te.l(rt),rt.forEach(_),xe=h(n),L=f(n,"DIV",{class:!0});var ce=C(L);X=f(ce,"DIV",{class:!0});var ze=C(X);W=f(ze,"DIV",{});var Ge=C(W);P=f(Ge,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(P)!=="svelte-z454ua"&&(P.textContent=be),Oe=h(Ge),oe=f(Ge,"H2",{style:!0,class:!0});var ot=C(oe);M(J.$$.fragment,ot),ot.forEach(_),Ge.forEach(_),le=h(ze),H=f(ze,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(H)!=="svelte-1t96lla"&&(H.textContent=ke),ze.forEach(_),Le=h(ce),Z=f(ce,"DIV",{class:!0});var ct=C(Z);ie=f(ct,"DIV",{});var dt=C(ie);U=f(dt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(U)!=="svelte-1p71z02"&&(U.textContent=de),fe=h(dt),_e=f(dt,"H2",{style:!0,class:!0});var Ut=C(_e);M(ee.$$.fragment,Ut),Ut.forEach(_),dt.forEach(_),Ne=h(ct),K=f(ct,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(K)!=="svelte-reitmo"&&(K.textContent=lt),ct.forEach(_),nt=h(ce),ue=f(ce,"DIV",{class:!0});var ut=C(ue);w=f(ut,"DIV",{});var mt=C(w);me=f(mt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(me)!=="svelte-kngp4i"&&(me.textContent=Bt),kt=h(mt),je=f(mt,"H2",{style:!0,class:!0});var Wt=C(je);M(qe.$$.fragment,Wt),Wt.forEach(_),mt.forEach(_),qt=h(ut),Ce=f(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(Ce)!=="svelte-1tpohu4"&&(Ce.textContent=Ot),ut.forEach(_),Ct=h(ce),De=f(ce,"DIV",{class:!0});var ft=C(De);Pe=f(ft,"DIV",{});var pt=C(Pe);Ee=f(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(Ee)!=="svelte-14ra03k"&&(Ee.textContent=Lt),Dt=h(pt),He=f(pt,"H2",{style:!0,class:!0});var Kt=C(He);M(Re.$$.fragment,Kt),Kt.forEach(_),pt.forEach(_),Et=h(ft),Ie=f(ft,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(Ie)!=="svelte-elfod"&&(Ie.textContent=Nt),ft.forEach(_),ce.forEach(_),it=h(n),pe=f(n,"DIV",{class:!0});var ht=C(pe);Te=f(ht,"DIV",{class:!0});var gt=C(Te);Fe=f(gt,"DIV",{class:!0});var vt=C(Fe);Ue=f(vt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Ue)!=="svelte-dgw2oa"&&(Ue.textContent=jt),Rt=h(vt),M(We.$$.fragment,vt),vt.forEach(_),It=h(gt),M(Ae.$$.fragment,gt),gt.forEach(_),Tt=h(ht),Se=f(ht,"DIV",{class:!0});var wt=C(Se);Ve=f(wt,"DIV",{class:!0});var yt=C(Ve);Ke=f(yt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Ke)!=="svelte-1br9yke"&&(Ke.textContent=Pt),Ft=h(yt),M(Qe.$$.fragment,yt),yt.forEach(_),At=h(wt),M(Me.$$.fragment,wt),wt.forEach(_),ht.forEach(_),this.h()},h(){m(s,"name","twitter:card"),m(s,"content","summary_large_image"),m(t,"name","twitter:site"),m(t,"content","@evidence_dev"),m(A,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(z,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),m(N,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(q,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(G,"class","flex justify-between items-center mb-1.5 mt-0.5"),m(j,"class","mb-2 flex justify-start"),ae(P,"color","#7B8DA6"),m(P,"class","text-[9px] font-bold uppercase tracking-wider"),ae(oe,"color","#000000"),m(oe,"class","text-xl font-extrabold mt-0.5"),ae(H,"color","#7B8DA6"),m(H,"class","text-[9px] mt-0.5"),m(X,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ae(U,"color","#7B8DA6"),m(U,"class","text-[9px] font-bold uppercase tracking-wider"),ae(_e,"color","#000000"),m(_e,"class","text-xl font-extrabold mt-0.5"),ae(K,"color","#7B8DA6"),m(K,"class","text-[9px] mt-0.5"),m(Z,"class","bg-white rounded-xl shadow-sm border-t-4 border-red-500 py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ae(me,"color","#7B8DA6"),m(me,"class","text-[9px] font-bold uppercase tracking-wider"),ae(je,"color","#000000"),m(je,"class","text-xl font-extrabold mt-0.5"),ae(Ce,"color","#7B8DA6"),m(Ce,"class","text-[9px] mt-0.5"),m(ue,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ae(Ee,"color","#7B8DA6"),m(Ee,"class","text-[9px] font-bold uppercase tracking-wider"),ae(He,"color","#000000"),m(He,"class","text-xl font-extrabold mt-0.5"),ae(Ie,"color","#7B8DA6"),m(Ie,"class","text-[9px] mt-0.5"),m(De,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),m(L,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(Ue,"class","font-bold text-gray-700 text-xs"),m(Fe,"class","flex items-center gap-1.5 mb-1"),m(Te,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Ke,"class","font-bold text-gray-700 text-xs"),m(Ve,"class","flex items-center gap-1.5 mb-1"),m(Se,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(pe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(n,c){he&&he.m(n,c),y(n,a,c),st.m(document.head,null),u(document.head,s),u(document.head,t),ge&&ge.m(document.head,null),u(document.head,l),y(n,i,c),D&&D.m(n,c),y(n,o,c),E&&E.m(n,c),y(n,d,c),R&&R.m(n,c),y(n,b,c),I&&I.m(n,c),y(n,e,c),T&&T.m(n,c),y(n,k,c),F&&F.m(n,c),y(n,O,c),y(n,q,c),u(q,A),u(q,Be),u(q,z),u(q,re),u(q,N),y(n,ye,c),y(n,G,c),y(n,Y,c),y(n,j,c),te.m(j,null),y(n,xe,c),y(n,L,c),u(L,X),u(X,W),u(W,P),u(W,Oe),u(W,oe),V(J,oe,null),u(X,le),u(X,H),u(L,Le),u(L,Z),u(Z,ie),u(ie,U),u(ie,fe),u(ie,_e),V(ee,_e,null),u(Z,Ne),u(Z,K),u(L,nt),u(L,ue),u(ue,w),u(w,me),u(w,kt),u(w,je),V(qe,je,null),u(ue,qt),u(ue,Ce),u(L,Ct),u(L,De),u(De,Pe),u(Pe,Ee),u(Pe,Dt),u(Pe,He),V(Re,He,null),u(De,Et),u(De,Ie),y(n,it,c),y(n,pe,c),u(pe,Te),u(Te,Fe),u(Fe,Ue),u(Fe,Rt),V(We,Fe,null),u(Te,It),V(Ae,Te,null),u(pe,Tt),u(pe,Se),u(Se,Ve),u(Ve,Ke),u(Ve,Ft),V(Qe,Ve,null),u(Se,At),V(Me,Se,null),_t=!0,St||(Ht=[Vt(A,"click",r[35]),Vt(z,"click",r[36]),Vt(N,"click",r[37])],St=!0)},p(n,c){typeof x<"u"&&x.title&&x.hide_title!==!0&&he.p(n,c),st.p(n,c),typeof x=="object"&&ge.p(n,c),n[0]?D?(D.p(n,c),c[0]&1&&v(D,1)):(D=Zt(n),D.c(),v(D,1),D.m(o.parentNode,o)):D&&(Xe(),$(D,1,1,()=>{D=null}),Ye()),n[1]?E?(E.p(n,c),c[0]&2&&v(E,1)):(E=ea(n),E.c(),v(E,1),E.m(d.parentNode,d)):E&&(Xe(),$(E,1,1,()=>{E=null}),Ye()),n[2]?R?(R.p(n,c),c[0]&4&&v(R,1)):(R=ta(n),R.c(),v(R,1),R.m(b.parentNode,b)):R&&(Xe(),$(R,1,1,()=>{R=null}),Ye()),n[3]?I?(I.p(n,c),c[0]&8&&v(I,1)):(I=aa(n),I.c(),v(I,1),I.m(e.parentNode,e)):I&&(Xe(),$(I,1,1,()=>{I=null}),Ye()),n[4]?T?(T.p(n,c),c[0]&16&&v(T,1)):(T=na(n),T.c(),v(T,1),T.m(k.parentNode,k)):T&&(Xe(),$(T,1,1,()=>{T=null}),Ye()),n[5]?F?(F.p(n,c),c[0]&32&&v(F,1)):(F=sa(n),F.c(),v(F,1),F.m(O.parentNode,O)):F&&(Xe(),$(F,1,1,()=>{F=null}),Ye()),c[0]&64&&oa($e,$e=n[6])?(Xe(),$(te,1,1,Je),Ye(),te=ra(n),te.c(),v(te,1),te.m(j,null)):te.p(n,c);const ve={};c[0]&1&&(ve.data=n[0]),J.$set(ve);const rt={};c[0]&2&&(rt.data=n[1]),ee.$set(rt);const ce={};c[0]&4&&(ce.data=n[2]),qe.$set(ce);const ze={};c[0]&8&&(ze.data=n[3]),Re.$set(ze);const Ge={};c[0]&16&&(Ge.data=n[4]),Ae.$set(Ge);const ot={};c[0]&32&&(ot.data=n[5]),Me.$set(ot)},i(n){_t||(v(D),v(E),v(R),v(I),v(T),v(F),v(te),v(J.$$.fragment,n),v(ee.$$.fragment,n),v(qe.$$.fragment,n),v(Re.$$.fragment,n),v(We.$$.fragment,n),v(Ae.$$.fragment,n),v(Qe.$$.fragment,n),v(Me.$$.fragment,n),_t=!0)},o(n){$(D),$(E),$(R),$(I),$(T),$(F),$(te),$(J.$$.fragment,n),$(ee.$$.fragment,n),$(qe.$$.fragment,n),$(Re.$$.fragment,n),$(We.$$.fragment,n),$(Ae.$$.fragment,n),$(Qe.$$.fragment,n),$(Me.$$.fragment,n),_t=!1},d(n){n&&(_(a),_(i),_(o),_(d),_(b),_(e),_(k),_(O),_(q),_(ye),_(G),_(Y),_(j),_(xe),_(L),_(it),_(pe)),he&&he.d(n),st.d(n),_(s),_(t),ge&&ge.d(n),_(l),D&&D.d(n),E&&E.d(n),R&&R.d(n),I&&I.d(n),T&&T.d(n),F&&F.d(n),te.d(n),S(J),S(ee),S(qe),S(Re),S(We),S(Ae),S(Qe),S(Me),St=!1,ia(Ht)}}}const x={title:"Sales & Win-Loss Analysis"},Aa=r=>r>=1e6?"$"+r/1e6+"M":r>=1e3?"$"+r/1e3+"K":"$"+r,Sa=r=>r>=1e6?"$"+r/1e6+"M":r>=1e3?"$"+r/1e3+"K":"$"+r;function Va(r,a,s){let t,l;Qt(r,ba,w=>s(34,t=w)),Qt(r,Xt,w=>s(42,l=w));let{data:i}=a,{data:o={},customFormattingSettings:d,__db:b,inputs:e}=i;ca(Xt,l="b6c1e1557fc0a9a1e3a0b220257fd6d9",l);let k=ga($a(e));da(k.subscribe(w=>s(9,e=w))),ua(ya,{getCustomFormats:()=>d.customFormats||[]});const O=(w,me)=>xa(b.query,w,{query_name:me});va(O),t.params,zt(()=>!0);let q={initialData:void 0,initialError:void 0},A=ne`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,se=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;o.kpi_win_rate_data&&(o.kpi_win_rate_data instanceof Error?q.initialError=o.kpi_win_rate_data:q.initialData=o.kpi_win_rate_data,o.kpi_win_rate_columns&&(q.knownColumns=o.kpi_win_rate_columns));let Be,z=!1;const Ze=tt.createReactive({callback:w=>{s(0,Be=w)},execFn:O},{id:"kpi_win_rate",...q});Ze(se,{noResolve:A,...q}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return Be}};let re={initialData:void 0,initialError:void 0},N=ne`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,we=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_lost_value_data&&(o.kpi_lost_value_data instanceof Error?re.initialError=o.kpi_lost_value_data:re.initialData=o.kpi_lost_value_data,o.kpi_lost_value_columns&&(re.knownColumns=o.kpi_lost_value_columns));let ye,G=!1;const et=tt.createReactive({callback:w=>{s(1,ye=w)},execFn:O},{id:"kpi_lost_value",...re});et(we,{noResolve:N,...re}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return ye}};let Y={initialData:void 0,initialError:void 0},j=ne`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,$e=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_open_deals_data&&(o.kpi_open_deals_data instanceof Error?Y.initialError=o.kpi_open_deals_data:Y.initialData=o.kpi_open_deals_data,o.kpi_open_deals_columns&&(Y.knownColumns=o.kpi_open_deals_columns));let xe,L=!1;const X=tt.createReactive({callback:w=>{s(2,xe=w)},execFn:O},{id:"kpi_open_deals",...Y});X($e,{noResolve:j,...Y}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return xe}};let W={initialData:void 0,initialError:void 0},P=ne`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
            else '1970-01-01'::date
        end) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`,be=`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
            else '1970-01-01'::date
        end) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`;o.kpi_top_client_concentration_data&&(o.kpi_top_client_concentration_data instanceof Error?W.initialError=o.kpi_top_client_concentration_data:W.initialData=o.kpi_top_client_concentration_data,o.kpi_top_client_concentration_columns&&(W.knownColumns=o.kpi_top_client_concentration_columns));let Oe,oe=!1;const J=tt.createReactive({callback:w=>{s(3,Oe=w)},execFn:O},{id:"kpi_top_client_concentration",...W});J(be,{noResolve:P,...W}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return Oe}};let le={initialData:void 0,initialError:void 0},H=ne`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`,ke=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`;o.win_loss_reasons_data&&(o.win_loss_reasons_data instanceof Error?le.initialError=o.win_loss_reasons_data:le.initialData=o.win_loss_reasons_data,o.win_loss_reasons_columns&&(le.knownColumns=o.win_loss_reasons_columns));let Le,Z=!1;const ie=tt.createReactive({callback:w=>{s(4,Le=w)},execFn:O},{id:"win_loss_reasons",...le});ie(ke,{noResolve:H,...le}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return Le}};let U={initialData:void 0,initialError:void 0},de=ne`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
group by all
order by pipeline_value desc`,fe=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
group by all
order by pipeline_value desc`;o.client_pipeline_share_data&&(o.client_pipeline_share_data instanceof Error?U.initialError=o.client_pipeline_share_data:U.initialData=o.client_pipeline_share_data,o.client_pipeline_share_columns&&(U.knownColumns=o.client_pipeline_share_columns));let _e,ee=!1;const Ne=tt.createReactive({callback:w=>{s(5,_e=w)},execFn:O},{id:"client_pipeline_share",...U});Ne(fe,{noResolve:de,...U}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return _e}};let K="ytd";zt(()=>{if(e){const w=t.url.searchParams.get("time_filter");s(9,e.time_filter=w||"ytd",e)}});const lt=()=>Mt(`/?time_filter=${K}`),nt=()=>Mt(`/sales?time_filter=${K}`),ue=()=>Mt(`/operations?time_filter=${K}`);return r.$$set=w=>{"data"in w&&s(7,i=w.data)},r.$$.update=()=>{if(r.$$.dirty[0]&128&&s(8,{data:o={},customFormattingSettings:d,__db:b}=i,o),r.$$.dirty[0]&256&&wa.set(Object.keys(o).length>0),r.$$.dirty[1]&8&&t.params,r.$$.dirty[0]&512&&s(11,A=ne`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),r.$$.dirty[0]&512&&s(12,se=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),r.$$.dirty[0]&15360&&(A||!z?A||(Ze(se,{noResolve:A,...q}),s(13,z=!0)):Ze(se,{noResolve:A})),r.$$.dirty[0]&512&&s(15,N=ne`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&512&&s(16,we=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&245760&&(N||!G?N||(et(we,{noResolve:N,...re}),s(17,G=!0)):et(we,{noResolve:N})),r.$$.dirty[0]&512&&s(19,j=ne`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&512&&s(20,$e=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&3932160&&(j||!L?j||(X($e,{noResolve:j,...Y}),s(21,L=!0)):X($e,{noResolve:j})),r.$$.dirty[0]&512&&s(23,P=ne`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
            else '1970-01-01'::date
        end) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),r.$$.dirty[0]&512&&s(24,be=`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
            when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
            else '1970-01-01'::date
        end) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),r.$$.dirty[0]&62914560&&(P||!oe?P||(J(be,{noResolve:P,...W}),s(25,oe=!0)):J(be,{noResolve:P})),r.$$.dirty[0]&512&&s(27,H=ne`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),r.$$.dirty[0]&512&&s(28,ke=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
          when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
          else '1970-01-01'::date
      end
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),r.$$.dirty[0]&1006632960&&(H||!Z?H||(ie(ke,{noResolve:H,...le}),s(29,Z=!0)):ie(ke,{noResolve:H})),r.$$.dirty[0]&512&&s(31,de=ne`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
group by all
order by pipeline_value desc`),r.$$.dirty[0]&512&&s(32,fe=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end
group by all
order by pipeline_value desc`),r.$$.dirty[0]&1073741824|r.$$.dirty[1]&7&&(de||!ee?de||(Ne(fe,{noResolve:de,...U}),s(33,ee=!0)):Ne(fe,{noResolve:de})),r.$$.dirty[0]&512&&s(6,K=(e==null?void 0:e.time_filter)||"ytd"),r.$$.dirty[0]&512&&e&&e.time_filter)try{const w=new URL(window.location.href);w.searchParams.get("time_filter")!==e.time_filter&&(w.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",w.pathname+w.search))}catch{}},[Be,ye,xe,Oe,Le,_e,K,i,o,e,q,A,se,z,re,N,we,G,Y,j,$e,L,W,P,be,oe,le,H,ke,Z,U,de,fe,ee,t,lt,nt,ue]}class Ua extends pa{constructor(a){super(),ha(this,a,Va,Fa,oa,{data:7},null,[-1,-1])}}export{Ua as component};
