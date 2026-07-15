import{s as la,d as _,z as _a,i as y,e as u,l as Bt,b as m,A as ae,k as h,B as ca,h as f,r as qt,j as C,q as Q,n as g,m as p,t as Gt,C as da,D as ua,E as ma,F as Yt,v as Ze,x as fa,y as pa}from"../chunks/scheduler.BWqtgNY2.js";import{S as ha,i as ga,d as S,t as $,a as v,c as Xe,m as V,b as M,e as B,g as Je}from"../chunks/index.DlzBi47Z.js";import{V as bt,B as Xt,g as va,Q as nt,a as wa,b as kt}from"../chunks/Value.CJkYUmDL.js";import{a as Jt,e as ya,s as $a,Q as at,p as xa,c as it,r as Zt,d as ba}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Dl9KYKV0.js";import{w as ka,g as Lt}from"../chunks/entry.d8ESOf3p.js";import{h as ne,p as qa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ca}from"../chunks/stores.jl6PhlUo.js";const{document:we}=va;function Da(r){let a,s=x.title+"",t;return{c(){a=p("h1"),t=pa(s),this.h()},l(l){a=f(l,"H1",{class:!0});var i=C(a);t=fa(i,s),i.forEach(_),this.h()},h(){m(a,"class","title")},m(l,i){y(l,a,i),u(a,t)},p:Ze,d(l){l&&_(a)}}}function Ea(r){return{c(){this.h()},l(a){this.h()},h(){we.title="Evidence"},m:Ze,p:Ze,d:Ze}}function Ra(r){let a,s,t,l,i;return we.title=a=x.title,{c(){s=g(),t=p("meta"),l=g(),i=p("meta"),this.h()},l(o){s=h(o),t=f(o,"META",{property:!0,content:!0}),l=h(o),i=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d;m(t,"property","og:title"),m(t,"content",((o=x.og)==null?void 0:o.title)??x.title),m(i,"name","twitter:title"),m(i,"content",((d=x.og)==null?void 0:d.title)??x.title)},m(o,d){y(o,s,d),y(o,t,d),y(o,l,d),y(o,i,d)},p(o,d){d&0&&a!==(a=x.title)&&(we.title=a)},d(o){o&&(_(s),_(t),_(l),_(i))}}}function Ia(r){var i,o;let a,s,t=(x.description||((i=x.og)==null?void 0:i.description))&&Ta(),l=((o=x.og)==null?void 0:o.image)&&Fa();return{c(){t&&t.c(),a=g(),l&&l.c(),s=qt()},l(d){t&&t.l(d),a=h(d),l&&l.l(d),s=qt()},m(d,b){t&&t.m(d,b),y(d,a,b),l&&l.m(d,b),y(d,s,b)},p(d,b){var e,k;(x.description||(e=x.og)!=null&&e.description)&&t.p(d,b),(k=x.og)!=null&&k.image&&l.p(d,b)},d(d){d&&(_(a),_(s)),t&&t.d(d),l&&l.d(d)}}}function Ta(r){let a,s,t,l,i;return{c(){a=p("meta"),s=g(),t=p("meta"),l=g(),i=p("meta"),this.h()},l(o){a=f(o,"META",{name:!0,content:!0}),s=h(o),t=f(o,"META",{property:!0,content:!0}),l=h(o),i=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,d,b;m(a,"name","description"),m(a,"content",x.description??((o=x.og)==null?void 0:o.description)),m(t,"property","og:description"),m(t,"content",((d=x.og)==null?void 0:d.description)??x.description),m(i,"name","twitter:description"),m(i,"content",((b=x.og)==null?void 0:b.description)??x.description)},m(o,d){y(o,a,d),y(o,s,d),y(o,t,d),y(o,l,d),y(o,i,d)},p:Ze,d(o){o&&(_(a),_(s),_(t),_(l),_(i))}}}function Fa(r){let a,s,t;return{c(){a=p("meta"),s=g(),t=p("meta"),this.h()},l(l){a=f(l,"META",{property:!0,content:!0}),s=h(l),t=f(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i;m(a,"property","og:image"),m(a,"content",it((l=x.og)==null?void 0:l.image)),m(t,"name","twitter:image"),m(t,"content",it((i=x.og)==null?void 0:i.image))},m(l,i){y(l,a,i),y(l,s,i),y(l,t,i)},p:Ze,d(l){l&&(_(a),_(s),_(t))}}}function ea(r){let a,s;return a=new nt({props:{queryID:"kpi_win_rate",queryResult:r[0]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&1&&(i.queryResult=t[0]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function ta(r){let a,s;return a=new nt({props:{queryID:"kpi_lost_value",queryResult:r[1]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&2&&(i.queryResult=t[1]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function aa(r){let a,s;return a=new nt({props:{queryID:"kpi_open_deals",queryResult:r[2]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&4&&(i.queryResult=t[2]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function na(r){let a,s;return a=new nt({props:{queryID:"kpi_top_client_concentration",queryResult:r[3]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&8&&(i.queryResult=t[3]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function sa(r){let a,s;return a=new nt({props:{queryID:"win_loss_reasons",queryResult:r[4]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&16&&(i.queryResult=t[4]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function ra(r){let a,s;return a=new nt({props:{queryID:"client_pipeline_share",queryResult:r[5]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&32&&(i.queryResult=t[5]),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Aa(r){let a,s,t,l,i,o,d,b;return a=new kt({props:{valueLabel:"MTD",value:"mtd",default:r[6]==="mtd"}}),t=new kt({props:{valueLabel:"QTD",value:"qtd",default:r[6]==="qtd"}}),i=new kt({props:{valueLabel:"YTD",value:"ytd",default:r[6]==="ytd"}}),d=new kt({props:{valueLabel:"All Time",value:"all",default:r[6]==="all"}}),{c(){B(a.$$.fragment),s=g(),B(t.$$.fragment),l=g(),B(i.$$.fragment),o=g(),B(d.$$.fragment)},l(e){M(a.$$.fragment,e),s=h(e),M(t.$$.fragment,e),l=h(e),M(i.$$.fragment,e),o=h(e),M(d.$$.fragment,e)},m(e,k){V(a,e,k),y(e,s,k),V(t,e,k),y(e,l,k),V(i,e,k),y(e,o,k),V(d,e,k),b=!0},p(e,k){const L={};k[0]&64&&(L.default=e[6]==="mtd"),a.$set(L);const q={};k[0]&64&&(q.default=e[6]==="qtd"),t.$set(q);const A={};k[0]&64&&(A.default=e[6]==="ytd"),i.$set(A);const se={};k[0]&64&&(se.default=e[6]==="all"),d.$set(se)},i(e){b||(v(a.$$.fragment,e),v(t.$$.fragment,e),v(i.$$.fragment,e),v(d.$$.fragment,e),b=!0)},o(e){$(a.$$.fragment,e),$(t.$$.fragment,e),$(i.$$.fragment,e),$(d.$$.fragment,e),b=!1},d(e){e&&(_(s),_(l),_(o)),S(a,e),S(t,e),S(i,e),S(d,e)}}}function oa(r){let a,s;return a=new wa({props:{name:"time_filter",defaultValue:r[6],$$slots:{default:[Aa]},$$scope:{ctx:r}}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,l){V(a,t,l),s=!0},p(t,l){const i={};l[0]&64&&(i.defaultValue=t[6]),l[0]&64|l[1]&2097152&&(i.$$scope={dirty:l,ctx:t}),a.$set(i)},i(t){s||(v(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Sa(r){let a,s,t,l,i,o,d,b,e,k,L,q,A,se="Overview Cockpit",Le,z,et="Sales & Win-Loss",re,N,ye="Operations & Vendors",$e,G,tt='<div class="text-base font-extrabold text-[#264773]">Sales Pipeline Deep-Dive</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: HubSpot CRM</div>',Y,j,xe=r[6],be,O,X,W,H,ke="🎯 Pipeline Win Rate",Oe,oe,J,le,P,qe="Closed Won vs. Closed Lost count",Ne,Z,ie,U,de="💸 Lost Opportunity Value",fe,_e,ee,je,K,_t="Sum of HubSpot deal amounts marked as 'Closed Lost'",st,ue,w,me,Ot="💼 Open Deals in Funnel",Ct,He,Ce,Dt,De,Nt="Active prospects in pipeline",Et,Ee,Pe,Re,jt="⚠️ Max Client Concentration",Rt,Ue,Ie,It,Te,Ht="Largest client's share of pipeline",ct,pe,Fe,Ae,We,Pt="CRM Closed Won/Lost Reason Breakdown",Tt,Ke,Ft,Se,At,Ve,Me,Qe,Ut="Open Pipeline Value by Corporate Client",St,ze,Vt,Be,dt,Mt,Wt,he=typeof x<"u"&&x.title&&x.hide_title!==!0&&Da();function ia(n,c){return typeof x<"u"&&x.title?Ra:Ea}let rt=ia()(r),ge=typeof x=="object"&&Ia(),D=r[0]&&ea(r),E=r[1]&&ta(r),R=r[2]&&aa(r),I=r[3]&&na(r),T=r[4]&&sa(r),F=r[5]&&ra(r),te=oa(r);return J=new bt({props:{data:r[0],column:"win_rate",fmt:"pct1"}}),ee=new bt({props:{data:r[1],column:"lost_value",fmt:"usd"}}),Ce=new bt({props:{data:r[2],column:"open_deals_count"}}),Ie=new bt({props:{data:r[3],column:"max_concentration",fmt:"pct0"}}),Ke=new Jt({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Se=new Xt({props:{data:r[4],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:40},xAxis:{splitNumber:3,axisLabel:{formatter:Va}}}}}),ze=new Jt({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),Be=new Xt({props:{data:r[5],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Ma}}}}}),{c(){he&&he.c(),a=g(),rt.c(),s=p("meta"),t=p("meta"),ge&&ge.c(),l=qt(),i=g(),D&&D.c(),o=g(),E&&E.c(),d=g(),R&&R.c(),b=g(),I&&I.c(),e=g(),T&&T.c(),k=g(),F&&F.c(),L=g(),q=p("div"),A=p("button"),A.textContent=se,Le=g(),z=p("button"),z.textContent=et,re=g(),N=p("button"),N.textContent=ye,$e=g(),G=p("div"),G.innerHTML=tt,Y=g(),j=p("div"),te.c(),be=g(),O=p("div"),X=p("div"),W=p("div"),H=p("span"),H.textContent=ke,Oe=g(),oe=p("h2"),B(J.$$.fragment),le=g(),P=p("div"),P.textContent=qe,Ne=g(),Z=p("div"),ie=p("div"),U=p("span"),U.textContent=de,fe=g(),_e=p("h2"),B(ee.$$.fragment),je=g(),K=p("div"),K.textContent=_t,st=g(),ue=p("div"),w=p("div"),me=p("span"),me.textContent=Ot,Ct=g(),He=p("h2"),B(Ce.$$.fragment),Dt=g(),De=p("div"),De.textContent=Nt,Et=g(),Ee=p("div"),Pe=p("div"),Re=p("span"),Re.textContent=jt,Rt=g(),Ue=p("h2"),B(Ie.$$.fragment),It=g(),Te=p("div"),Te.textContent=Ht,ct=g(),pe=p("div"),Fe=p("div"),Ae=p("div"),We=p("span"),We.textContent=Pt,Tt=g(),B(Ke.$$.fragment),Ft=g(),B(Se.$$.fragment),At=g(),Ve=p("div"),Me=p("div"),Qe=p("span"),Qe.textContent=Ut,St=g(),B(ze.$$.fragment),Vt=g(),B(Be.$$.fragment),this.h()},l(n){he&&he.l(n),a=h(n);const c=ca("svelte-2igo1p",we.head);rt.l(c),s=f(c,"META",{name:!0,content:!0}),t=f(c,"META",{name:!0,content:!0}),ge&&ge.l(c),l=qt(),c.forEach(_),i=h(n),D&&D.l(n),o=h(n),E&&E.l(n),d=h(n),R&&R.l(n),b=h(n),I&&I.l(n),e=h(n),T&&T.l(n),k=h(n),F&&F.l(n),L=h(n),q=f(n,"DIV",{class:!0});var ve=C(q);A=f(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(A)!=="svelte-1nm3ycn"&&(A.textContent=se),Le=h(ve),z=f(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(z)!=="svelte-ti9c0l"&&(z.textContent=et),re=h(ve),N=f(ve,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(N)!=="svelte-19h1sxa"&&(N.textContent=ye),ve.forEach(_),$e=h(n),G=f(n,"DIV",{class:!0,"data-svelte-h":!0}),Q(G)!=="svelte-1ooszag"&&(G.innerHTML=tt),Y=h(n),j=f(n,"DIV",{class:!0});var ot=C(j);te.l(ot),ot.forEach(_),be=h(n),O=f(n,"DIV",{class:!0});var ce=C(O);X=f(ce,"DIV",{class:!0});var Ge=C(X);W=f(Ge,"DIV",{});var Ye=C(W);H=f(Ye,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(H)!=="svelte-z454ua"&&(H.textContent=ke),Oe=h(Ye),oe=f(Ye,"H2",{style:!0,class:!0});var lt=C(oe);M(J.$$.fragment,lt),lt.forEach(_),Ye.forEach(_),le=h(Ge),P=f(Ge,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(P)!=="svelte-1t96lla"&&(P.textContent=qe),Ge.forEach(_),Ne=h(ce),Z=f(ce,"DIV",{class:!0});var ut=C(Z);ie=f(ut,"DIV",{});var mt=C(ie);U=f(mt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(U)!=="svelte-1p71z02"&&(U.textContent=de),fe=h(mt),_e=f(mt,"H2",{style:!0,class:!0});var Kt=C(_e);M(ee.$$.fragment,Kt),Kt.forEach(_),mt.forEach(_),je=h(ut),K=f(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(K)!=="svelte-9bsh6y"&&(K.textContent=_t),ut.forEach(_),st=h(ce),ue=f(ce,"DIV",{class:!0});var ft=C(ue);w=f(ft,"DIV",{});var pt=C(w);me=f(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(me)!=="svelte-kngp4i"&&(me.textContent=Ot),Ct=h(pt),He=f(pt,"H2",{style:!0,class:!0});var Qt=C(He);M(Ce.$$.fragment,Qt),Qt.forEach(_),pt.forEach(_),Dt=h(ft),De=f(ft,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(De)!=="svelte-1tpohu4"&&(De.textContent=Nt),ft.forEach(_),Et=h(ce),Ee=f(ce,"DIV",{class:!0});var ht=C(Ee);Pe=f(ht,"DIV",{});var gt=C(Pe);Re=f(gt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(Re)!=="svelte-14ra03k"&&(Re.textContent=jt),Rt=h(gt),Ue=f(gt,"H2",{style:!0,class:!0});var zt=C(Ue);M(Ie.$$.fragment,zt),zt.forEach(_),gt.forEach(_),It=h(ht),Te=f(ht,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(Te)!=="svelte-elfod"&&(Te.textContent=Ht),ht.forEach(_),ce.forEach(_),ct=h(n),pe=f(n,"DIV",{class:!0});var vt=C(pe);Fe=f(vt,"DIV",{class:!0});var wt=C(Fe);Ae=f(wt,"DIV",{class:!0});var yt=C(Ae);We=f(yt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(We)!=="svelte-dgw2oa"&&(We.textContent=Pt),Tt=h(yt),M(Ke.$$.fragment,yt),yt.forEach(_),Ft=h(wt),M(Se.$$.fragment,wt),wt.forEach(_),At=h(vt),Ve=f(vt,"DIV",{class:!0});var $t=C(Ve);Me=f($t,"DIV",{class:!0});var xt=C(Me);Qe=f(xt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Qe)!=="svelte-1br9yke"&&(Qe.textContent=Ut),St=h(xt),M(ze.$$.fragment,xt),xt.forEach(_),Vt=h($t),M(Be.$$.fragment,$t),$t.forEach(_),vt.forEach(_),this.h()},h(){m(s,"name","twitter:card"),m(s,"content","summary_large_image"),m(t,"name","twitter:site"),m(t,"content","@evidence_dev"),m(A,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(z,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),m(N,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(q,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(G,"class","flex justify-between items-center mb-1.5 mt-0.5"),m(j,"class","mb-2 flex justify-start"),ae(H,"color","#7B8DA6"),m(H,"class","text-[9px] font-bold uppercase tracking-wider"),ae(oe,"color","#000000"),m(oe,"class","text-xl font-extrabold mt-0.5"),ae(P,"color","#7B8DA6"),m(P,"class","text-[9px] mt-0.5"),m(X,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(U,"color","#7B8DA6"),m(U,"class","text-[9px] font-bold uppercase tracking-wider"),ae(_e,"color","#000000"),m(_e,"class","text-xl font-extrabold mt-0.5"),ae(K,"color","#7B8DA6"),m(K,"class","text-[9px] mt-0.5"),m(Z,"class","bg-white rounded-xl shadow-sm border-t-4 border-red-500 py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(me,"color","#7B8DA6"),m(me,"class","text-[9px] font-bold uppercase tracking-wider"),ae(He,"color","#000000"),m(He,"class","text-xl font-extrabold mt-0.5"),ae(De,"color","#7B8DA6"),m(De,"class","text-[9px] mt-0.5"),m(ue,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(Re,"color","#7B8DA6"),m(Re,"class","text-[9px] font-bold uppercase tracking-wider"),ae(Ue,"color","#000000"),m(Ue,"class","text-xl font-extrabold mt-0.5"),ae(Te,"color","#7B8DA6"),m(Te,"class","text-[9px] mt-0.5"),m(Ee,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),m(O,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(We,"class","font-bold text-gray-700 text-xs"),m(Ae,"class","flex items-center gap-1.5 mb-1"),m(Fe,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Qe,"class","font-bold text-gray-700 text-xs"),m(Me,"class","flex items-center gap-1.5 mb-1"),m(Ve,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(pe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(n,c){he&&he.m(n,c),y(n,a,c),rt.m(we.head,null),u(we.head,s),u(we.head,t),ge&&ge.m(we.head,null),u(we.head,l),y(n,i,c),D&&D.m(n,c),y(n,o,c),E&&E.m(n,c),y(n,d,c),R&&R.m(n,c),y(n,b,c),I&&I.m(n,c),y(n,e,c),T&&T.m(n,c),y(n,k,c),F&&F.m(n,c),y(n,L,c),y(n,q,c),u(q,A),u(q,Le),u(q,z),u(q,re),u(q,N),y(n,$e,c),y(n,G,c),y(n,Y,c),y(n,j,c),te.m(j,null),y(n,be,c),y(n,O,c),u(O,X),u(X,W),u(W,H),u(W,Oe),u(W,oe),V(J,oe,null),u(X,le),u(X,P),u(O,Ne),u(O,Z),u(Z,ie),u(ie,U),u(ie,fe),u(ie,_e),V(ee,_e,null),u(Z,je),u(Z,K),u(O,st),u(O,ue),u(ue,w),u(w,me),u(w,Ct),u(w,He),V(Ce,He,null),u(ue,Dt),u(ue,De),u(O,Et),u(O,Ee),u(Ee,Pe),u(Pe,Re),u(Pe,Rt),u(Pe,Ue),V(Ie,Ue,null),u(Ee,It),u(Ee,Te),y(n,ct,c),y(n,pe,c),u(pe,Fe),u(Fe,Ae),u(Ae,We),u(Ae,Tt),V(Ke,Ae,null),u(Fe,Ft),V(Se,Fe,null),u(pe,At),u(pe,Ve),u(Ve,Me),u(Me,Qe),u(Me,St),V(ze,Me,null),u(Ve,Vt),V(Be,Ve,null),dt=!0,Mt||(Wt=[Bt(A,"click",r[35]),Bt(z,"click",r[36]),Bt(N,"click",r[37])],Mt=!0)},p(n,c){typeof x<"u"&&x.title&&x.hide_title!==!0&&he.p(n,c),rt.p(n,c),typeof x=="object"&&ge.p(n,c),n[0]?D?(D.p(n,c),c[0]&1&&v(D,1)):(D=ea(n),D.c(),v(D,1),D.m(o.parentNode,o)):D&&(Je(),$(D,1,1,()=>{D=null}),Xe()),n[1]?E?(E.p(n,c),c[0]&2&&v(E,1)):(E=ta(n),E.c(),v(E,1),E.m(d.parentNode,d)):E&&(Je(),$(E,1,1,()=>{E=null}),Xe()),n[2]?R?(R.p(n,c),c[0]&4&&v(R,1)):(R=aa(n),R.c(),v(R,1),R.m(b.parentNode,b)):R&&(Je(),$(R,1,1,()=>{R=null}),Xe()),n[3]?I?(I.p(n,c),c[0]&8&&v(I,1)):(I=na(n),I.c(),v(I,1),I.m(e.parentNode,e)):I&&(Je(),$(I,1,1,()=>{I=null}),Xe()),n[4]?T?(T.p(n,c),c[0]&16&&v(T,1)):(T=sa(n),T.c(),v(T,1),T.m(k.parentNode,k)):T&&(Je(),$(T,1,1,()=>{T=null}),Xe()),n[5]?F?(F.p(n,c),c[0]&32&&v(F,1)):(F=ra(n),F.c(),v(F,1),F.m(L.parentNode,L)):F&&(Je(),$(F,1,1,()=>{F=null}),Xe()),c[0]&64&&la(xe,xe=n[6])?(Je(),$(te,1,1,Ze),Xe(),te=oa(n),te.c(),v(te,1),te.m(j,null)):te.p(n,c);const ve={};c[0]&1&&(ve.data=n[0]),J.$set(ve);const ot={};c[0]&2&&(ot.data=n[1]),ee.$set(ot);const ce={};c[0]&4&&(ce.data=n[2]),Ce.$set(ce);const Ge={};c[0]&8&&(Ge.data=n[3]),Ie.$set(Ge);const Ye={};c[0]&16&&(Ye.data=n[4]),Se.$set(Ye);const lt={};c[0]&32&&(lt.data=n[5]),Be.$set(lt)},i(n){dt||(v(D),v(E),v(R),v(I),v(T),v(F),v(te),v(J.$$.fragment,n),v(ee.$$.fragment,n),v(Ce.$$.fragment,n),v(Ie.$$.fragment,n),v(Ke.$$.fragment,n),v(Se.$$.fragment,n),v(ze.$$.fragment,n),v(Be.$$.fragment,n),dt=!0)},o(n){$(D),$(E),$(R),$(I),$(T),$(F),$(te),$(J.$$.fragment,n),$(ee.$$.fragment,n),$(Ce.$$.fragment,n),$(Ie.$$.fragment,n),$(Ke.$$.fragment,n),$(Se.$$.fragment,n),$(ze.$$.fragment,n),$(Be.$$.fragment,n),dt=!1},d(n){n&&(_(a),_(i),_(o),_(d),_(b),_(e),_(k),_(L),_(q),_($e),_(G),_(Y),_(j),_(be),_(O),_(ct),_(pe)),he&&he.d(n),rt.d(n),_(s),_(t),ge&&ge.d(n),_(l),D&&D.d(n),E&&E.d(n),R&&R.d(n),I&&I.d(n),T&&T.d(n),F&&F.d(n),te.d(n),S(J),S(ee),S(Ce),S(Ie),S(Ke),S(Se),S(ze),S(Be),Mt=!1,_a(Wt)}}}const x={title:"Sales & Win-Loss Analysis"},Va=r=>r>=1e6?"$"+r/1e6+"M":r>=1e3?"$"+r/1e3+"K":"$"+r,Ma=r=>r>=1e6?"$"+r/1e6+"M":r>=1e3?"$"+r/1e3+"K":"$"+r;function Ba(r,a,s){let t,l;Gt(r,Ca,w=>s(34,t=w)),Gt(r,Zt,w=>s(42,l=w));let{data:i}=a,{data:o={},customFormattingSettings:d,__db:b,inputs:e}=i;da(Zt,l="b6c1e1557fc0a9a1e3a0b220257fd6d9",l);let k=ya(ka(e));ua(k.subscribe(w=>s(9,e=w))),ma(ba,{getCustomFormats:()=>d.customFormats||[]});const L=(w,me)=>qa(b.query,w,{query_name:me});$a(L),t.params,Yt(()=>!0);let q={initialData:void 0,initialError:void 0},A=ne`select
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
end`;o.kpi_win_rate_data&&(o.kpi_win_rate_data instanceof Error?q.initialError=o.kpi_win_rate_data:q.initialData=o.kpi_win_rate_data,o.kpi_win_rate_columns&&(q.knownColumns=o.kpi_win_rate_columns));let Le,z=!1;const et=at.createReactive({callback:w=>{s(0,Le=w)},execFn:L},{id:"kpi_win_rate",...q});et(se,{noResolve:A,...q}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return Le}};let re={initialData:void 0,initialError:void 0},N=ne`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,ye=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_lost_value_data&&(o.kpi_lost_value_data instanceof Error?re.initialError=o.kpi_lost_value_data:re.initialData=o.kpi_lost_value_data,o.kpi_lost_value_columns&&(re.knownColumns=o.kpi_lost_value_columns));let $e,G=!1;const tt=at.createReactive({callback:w=>{s(1,$e=w)},execFn:L},{id:"kpi_lost_value",...re});tt(ye,{noResolve:N,...re}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return $e}};let Y={initialData:void 0,initialError:void 0},j=ne`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,xe=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_open_deals_data&&(o.kpi_open_deals_data instanceof Error?Y.initialError=o.kpi_open_deals_data:Y.initialData=o.kpi_open_deals_data,o.kpi_open_deals_columns&&(Y.knownColumns=o.kpi_open_deals_columns));let be,O=!1;const X=at.createReactive({callback:w=>{s(2,be=w)},execFn:L},{id:"kpi_open_deals",...Y});X(xe,{noResolve:j,...Y}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return be}};let W={initialData:void 0,initialError:void 0},H=ne`with client_shares as (
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
from client_shares`,ke=`with client_shares as (
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
from client_shares`;o.kpi_top_client_concentration_data&&(o.kpi_top_client_concentration_data instanceof Error?W.initialError=o.kpi_top_client_concentration_data:W.initialData=o.kpi_top_client_concentration_data,o.kpi_top_client_concentration_columns&&(W.knownColumns=o.kpi_top_client_concentration_columns));let Oe,oe=!1;const J=at.createReactive({callback:w=>{s(3,Oe=w)},execFn:L},{id:"kpi_top_client_concentration",...W});J(ke,{noResolve:H,...W}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return Oe}};let le={initialData:void 0,initialError:void 0},P=ne`with reason_ranks as (
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
order by total_value desc`,qe=`with reason_ranks as (
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
order by total_value desc`;o.win_loss_reasons_data&&(o.win_loss_reasons_data instanceof Error?le.initialError=o.win_loss_reasons_data:le.initialData=o.win_loss_reasons_data,o.win_loss_reasons_columns&&(le.knownColumns=o.win_loss_reasons_columns));let Ne,Z=!1;const ie=at.createReactive({callback:w=>{s(4,Ne=w)},execFn:L},{id:"win_loss_reasons",...le});ie(qe,{noResolve:P,...le}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return Ne}};let U={initialData:void 0,initialError:void 0},de=ne`select
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
order by pipeline_value desc`;o.client_pipeline_share_data&&(o.client_pipeline_share_data instanceof Error?U.initialError=o.client_pipeline_share_data:U.initialData=o.client_pipeline_share_data,o.client_pipeline_share_columns&&(U.knownColumns=o.client_pipeline_share_columns));let _e,ee=!1;const je=at.createReactive({callback:w=>{s(5,_e=w)},execFn:L},{id:"client_pipeline_share",...U});je(fe,{noResolve:de,...U}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return _e}};let K="ytd";Yt(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),e){const w=t.url.searchParams.get("time_filter");s(9,e.time_filter=w||"ytd",e)}});const _t=()=>Lt(it(`/?time_filter=${K}`)),st=()=>Lt(it(`/sales?time_filter=${K}`)),ue=()=>Lt(it(`/operations?time_filter=${K}`));return r.$$set=w=>{"data"in w&&s(7,i=w.data)},r.$$.update=()=>{if(r.$$.dirty[0]&128&&s(8,{data:o={},customFormattingSettings:d,__db:b}=i,o),r.$$.dirty[0]&256&&xa.set(Object.keys(o).length>0),r.$$.dirty[1]&8&&t.params,r.$$.dirty[0]&512&&s(11,A=ne`select
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
end`),r.$$.dirty[0]&15360&&(A||!z?A||(et(se,{noResolve:A,...q}),s(13,z=!0)):et(se,{noResolve:A})),r.$$.dirty[0]&512&&s(15,N=ne`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&512&&s(16,ye=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&245760&&(N||!G?N||(tt(ye,{noResolve:N,...re}),s(17,G=!0)):tt(ye,{noResolve:N})),r.$$.dirty[0]&512&&s(19,j=ne`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&512&&s(20,xe=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&3932160&&(j||!O?j||(X(xe,{noResolve:j,...Y}),s(21,O=!0)):X(xe,{noResolve:j})),r.$$.dirty[0]&512&&s(23,H=ne`with client_shares as (
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
from client_shares`),r.$$.dirty[0]&512&&s(24,ke=`with client_shares as (
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
from client_shares`),r.$$.dirty[0]&62914560&&(H||!oe?H||(J(ke,{noResolve:H,...W}),s(25,oe=!0)):J(ke,{noResolve:H})),r.$$.dirty[0]&512&&s(27,P=ne`with reason_ranks as (
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
order by total_value desc`),r.$$.dirty[0]&512&&s(28,qe=`with reason_ranks as (
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
order by total_value desc`),r.$$.dirty[0]&1006632960&&(P||!Z?P||(ie(qe,{noResolve:P,...le}),s(29,Z=!0)):ie(qe,{noResolve:P})),r.$$.dirty[0]&512&&s(31,de=ne`select
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
order by pipeline_value desc`),r.$$.dirty[0]&1073741824|r.$$.dirty[1]&7&&(de||!ee?de||(je(fe,{noResolve:de,...U}),s(33,ee=!0)):je(fe,{noResolve:de})),r.$$.dirty[0]&512&&s(6,K=(e==null?void 0:e.time_filter)||"ytd"),r.$$.dirty[0]&512&&e&&e.time_filter)try{const w=new URL(window.location.href);w.searchParams.get("time_filter")!==e.time_filter&&(w.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",w.pathname+w.search))}catch{}},[Le,$e,be,Oe,Ne,_e,K,i,o,e,q,A,se,z,re,N,ye,G,Y,j,xe,O,W,H,ke,oe,le,P,qe,Z,U,de,fe,ee,t,_t,st,ue]}class Ka extends ha{constructor(a){super(),ga(this,a,Ba,Sa,la,{data:7},null,[-1,-1])}}export{Ka as component};
