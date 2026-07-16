import{s as oa,d,z as da,i as y,e as u,l as Bt,b as m,A as ae,k as h,B as _a,h as f,r as qt,j as C,q as Q,n as w,m as p,t as Gt,C as ca,D as ua,E as ma,F as Yt,v as Ze,x as fa,y as pa}from"../chunks/scheduler.BWqtgNY2.js";import{S as ha,i as wa,d as S,t as $,a as g,c as Xe,m as V,b as M,e as B,g as Je}from"../chunks/index.DlzBi47Z.js";import{V as kt,B as Xt,g as ga,Q as nt,a as va,b as xt}from"../chunks/Value.CqeVMvWw.js";import{a as Jt,e as ya,s as $a,Q as at,p as ba,c as it,r as Zt,d as ka}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BLzAIuYu.js";import{w as xa,g as Lt}from"../chunks/entry.DqpcqLQb.js";import{h as ne,p as qa}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Ca}from"../chunks/stores.BDB_QFcx.js";const{document:ve}=ga;function Da(l){let a,s=b.title+"",t;return{c(){a=p("h1"),t=pa(s),this.h()},l(o){a=f(o,"H1",{class:!0});var i=C(a);t=fa(i,s),i.forEach(d),this.h()},h(){m(a,"class","title")},m(o,i){y(o,a,i),u(a,t)},p:Ze,d(o){o&&d(a)}}}function Ea(l){return{c(){this.h()},l(a){this.h()},h(){ve.title="Evidence"},m:Ze,p:Ze,d:Ze}}function Ra(l){let a,s,t,o,i;return ve.title=a=b.title,{c(){s=w(),t=p("meta"),o=w(),i=p("meta"),this.h()},l(r){s=h(r),t=f(r,"META",{property:!0,content:!0}),o=h(r),i=f(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c;m(t,"property","og:title"),m(t,"content",((r=b.og)==null?void 0:r.title)??b.title),m(i,"name","twitter:title"),m(i,"content",((c=b.og)==null?void 0:c.title)??b.title)},m(r,c){y(r,s,c),y(r,t,c),y(r,o,c),y(r,i,c)},p(r,c){c&0&&a!==(a=b.title)&&(ve.title=a)},d(r){r&&(d(s),d(t),d(o),d(i))}}}function Ia(l){var i,r;let a,s,t=(b.description||((i=b.og)==null?void 0:i.description))&&Ta(),o=((r=b.og)==null?void 0:r.image)&&Fa();return{c(){t&&t.c(),a=w(),o&&o.c(),s=qt()},l(c){t&&t.l(c),a=h(c),o&&o.l(c),s=qt()},m(c,k){t&&t.m(c,k),y(c,a,k),o&&o.m(c,k),y(c,s,k)},p(c,k){var e,x;(b.description||(e=b.og)!=null&&e.description)&&t.p(c,k),(x=b.og)!=null&&x.image&&o.p(c,k)},d(c){c&&(d(a),d(s)),t&&t.d(c),o&&o.d(c)}}}function Ta(l){let a,s,t,o,i;return{c(){a=p("meta"),s=w(),t=p("meta"),o=w(),i=p("meta"),this.h()},l(r){a=f(r,"META",{name:!0,content:!0}),s=h(r),t=f(r,"META",{property:!0,content:!0}),o=h(r),i=f(r,"META",{name:!0,content:!0}),this.h()},h(){var r,c,k;m(a,"name","description"),m(a,"content",b.description??((r=b.og)==null?void 0:r.description)),m(t,"property","og:description"),m(t,"content",((c=b.og)==null?void 0:c.description)??b.description),m(i,"name","twitter:description"),m(i,"content",((k=b.og)==null?void 0:k.description)??b.description)},m(r,c){y(r,a,c),y(r,s,c),y(r,t,c),y(r,o,c),y(r,i,c)},p:Ze,d(r){r&&(d(a),d(s),d(t),d(o),d(i))}}}function Fa(l){let a,s,t;return{c(){a=p("meta"),s=w(),t=p("meta"),this.h()},l(o){a=f(o,"META",{property:!0,content:!0}),s=h(o),t=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,i;m(a,"property","og:image"),m(a,"content",it((o=b.og)==null?void 0:o.image)),m(t,"name","twitter:image"),m(t,"content",it((i=b.og)==null?void 0:i.image))},m(o,i){y(o,a,i),y(o,s,i),y(o,t,i)},p:Ze,d(o){o&&(d(a),d(s),d(t))}}}function ea(l){let a,s;return a=new nt({props:{queryID:"kpi_win_rate",queryResult:l[0]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,o){V(a,t,o),s=!0},p(t,o){const i={};o[0]&1&&(i.queryResult=t[0]),a.$set(i)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function ta(l){let a,s;return a=new nt({props:{queryID:"kpi_lost_value",queryResult:l[1]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,o){V(a,t,o),s=!0},p(t,o){const i={};o[0]&2&&(i.queryResult=t[1]),a.$set(i)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function aa(l){let a,s;return a=new nt({props:{queryID:"kpi_open_deals",queryResult:l[2]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,o){V(a,t,o),s=!0},p(t,o){const i={};o[0]&4&&(i.queryResult=t[2]),a.$set(i)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function na(l){let a,s;return a=new nt({props:{queryID:"kpi_top_client_concentration",queryResult:l[3]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,o){V(a,t,o),s=!0},p(t,o){const i={};o[0]&8&&(i.queryResult=t[3]),a.$set(i)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function sa(l){let a,s;return a=new nt({props:{queryID:"win_loss_reasons",queryResult:l[4]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,o){V(a,t,o),s=!0},p(t,o){const i={};o[0]&16&&(i.queryResult=t[4]),a.$set(i)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function la(l){let a,s;return a=new nt({props:{queryID:"client_pipeline_share",queryResult:l[5]}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,o){V(a,t,o),s=!0},p(t,o){const i={};o[0]&32&&(i.queryResult=t[5]),a.$set(i)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Aa(l){let a,s,t,o,i,r,c,k;return a=new xt({props:{valueLabel:"MTD",value:"mtd",default:l[6]==="mtd"}}),t=new xt({props:{valueLabel:"QTD",value:"qtd",default:l[6]==="qtd"}}),i=new xt({props:{valueLabel:"YTD",value:"ytd",default:l[6]==="ytd"}}),c=new xt({props:{valueLabel:"All Time",value:"all",default:l[6]==="all"}}),{c(){B(a.$$.fragment),s=w(),B(t.$$.fragment),o=w(),B(i.$$.fragment),r=w(),B(c.$$.fragment)},l(e){M(a.$$.fragment,e),s=h(e),M(t.$$.fragment,e),o=h(e),M(i.$$.fragment,e),r=h(e),M(c.$$.fragment,e)},m(e,x){V(a,e,x),y(e,s,x),V(t,e,x),y(e,o,x),V(i,e,x),y(e,r,x),V(c,e,x),k=!0},p(e,x){const L={};x[0]&64&&(L.default=e[6]==="mtd"),a.$set(L);const q={};x[0]&64&&(q.default=e[6]==="qtd"),t.$set(q);const A={};x[0]&64&&(A.default=e[6]==="ytd"),i.$set(A);const se={};x[0]&64&&(se.default=e[6]==="all"),c.$set(se)},i(e){k||(g(a.$$.fragment,e),g(t.$$.fragment,e),g(i.$$.fragment,e),g(c.$$.fragment,e),k=!0)},o(e){$(a.$$.fragment,e),$(t.$$.fragment,e),$(i.$$.fragment,e),$(c.$$.fragment,e),k=!1},d(e){e&&(d(s),d(o),d(r)),S(a,e),S(t,e),S(i,e),S(c,e)}}}function ra(l){let a,s;return a=new va({props:{name:"time_filter",defaultValue:l[6],$$slots:{default:[Aa]},$$scope:{ctx:l}}}),{c(){B(a.$$.fragment)},l(t){M(a.$$.fragment,t)},m(t,o){V(a,t,o),s=!0},p(t,o){const i={};o[0]&64&&(i.defaultValue=t[6]),o[0]&64|o[1]&2097152&&(i.$$scope={dirty:o,ctx:t}),a.$set(i)},i(t){s||(g(a.$$.fragment,t),s=!0)},o(t){$(a.$$.fragment,t),s=!1},d(t){S(a,t)}}}function Sa(l){let a,s,t,o,i,r,c,k,e,x,L,q,A,se="Overview Cockpit",Le,z,et="Sales & Win-Loss",le,N,ye="Operations & Vendors",$e,G,tt='<div class="text-base font-extrabold text-[#264773]">Sales Pipeline Deep-Dive</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: HubSpot CRM</div>',Y,j,be=l[6],ke,O,X,W,H,xe="🎯 Pipeline Win Rate",Oe,re,J,oe,P,qe="Closed Won vs. Closed Lost count",Ne,Z,ie,U,ce="💸 Lost Opportunity Value",fe,de,ee,je,K,dt="Sum of HubSpot deal amounts marked as 'Closed Lost'",st,ue,v,me,Ot="💼 Open Deals in Funnel",Ct,He,Ce,Dt,De,Nt="Active prospects in pipeline",Et,Ee,Pe,Re,jt="⚠️ Max Client Concentration",Rt,Ue,Ie,It,Te,Ht="Largest client's share of pipeline",_t,pe,Fe,Ae,We,Pt="CRM Closed Won/Lost Reason Breakdown",Tt,Ke,Ft,Se,At,Ve,Me,Qe,Ut="Open Pipeline Value by Corporate Client",St,ze,Vt,Be,ct,Mt,Wt,he=typeof b<"u"&&b.title&&b.hide_title!==!0&&Da();function ia(n,_){return typeof b<"u"&&b.title?Ra:Ea}let lt=ia()(l),we=typeof b=="object"&&Ia(),D=l[0]&&ea(l),E=l[1]&&ta(l),R=l[2]&&aa(l),I=l[3]&&na(l),T=l[4]&&sa(l),F=l[5]&&la(l),te=ra(l);return J=new kt({props:{data:l[0],column:"win_rate",fmt:"pct1"}}),ee=new kt({props:{data:l[1],column:"lost_value",fmt:"usd"}}),Ce=new kt({props:{data:l[2],column:"open_deals_count"}}),Ie=new kt({props:{data:l[3],column:"max_concentration",fmt:"pct0"}}),Ke=new Jt({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Se=new Xt({props:{data:l[4],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:40},xAxis:{splitNumber:3,axisLabel:{formatter:Va}}}}}),ze=new Jt({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),Be=new Xt({props:{data:l[5],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Ma}}}}}),{c(){he&&he.c(),a=w(),lt.c(),s=p("meta"),t=p("meta"),we&&we.c(),o=qt(),i=w(),D&&D.c(),r=w(),E&&E.c(),c=w(),R&&R.c(),k=w(),I&&I.c(),e=w(),T&&T.c(),x=w(),F&&F.c(),L=w(),q=p("div"),A=p("button"),A.textContent=se,Le=w(),z=p("button"),z.textContent=et,le=w(),N=p("button"),N.textContent=ye,$e=w(),G=p("div"),G.innerHTML=tt,Y=w(),j=p("div"),te.c(),ke=w(),O=p("div"),X=p("div"),W=p("div"),H=p("span"),H.textContent=xe,Oe=w(),re=p("h2"),B(J.$$.fragment),oe=w(),P=p("div"),P.textContent=qe,Ne=w(),Z=p("div"),ie=p("div"),U=p("span"),U.textContent=ce,fe=w(),de=p("h2"),B(ee.$$.fragment),je=w(),K=p("div"),K.textContent=dt,st=w(),ue=p("div"),v=p("div"),me=p("span"),me.textContent=Ot,Ct=w(),He=p("h2"),B(Ce.$$.fragment),Dt=w(),De=p("div"),De.textContent=Nt,Et=w(),Ee=p("div"),Pe=p("div"),Re=p("span"),Re.textContent=jt,Rt=w(),Ue=p("h2"),B(Ie.$$.fragment),It=w(),Te=p("div"),Te.textContent=Ht,_t=w(),pe=p("div"),Fe=p("div"),Ae=p("div"),We=p("span"),We.textContent=Pt,Tt=w(),B(Ke.$$.fragment),Ft=w(),B(Se.$$.fragment),At=w(),Ve=p("div"),Me=p("div"),Qe=p("span"),Qe.textContent=Ut,St=w(),B(ze.$$.fragment),Vt=w(),B(Be.$$.fragment),this.h()},l(n){he&&he.l(n),a=h(n);const _=_a("svelte-2igo1p",ve.head);lt.l(_),s=f(_,"META",{name:!0,content:!0}),t=f(_,"META",{name:!0,content:!0}),we&&we.l(_),o=qt(),_.forEach(d),i=h(n),D&&D.l(n),r=h(n),E&&E.l(n),c=h(n),R&&R.l(n),k=h(n),I&&I.l(n),e=h(n),T&&T.l(n),x=h(n),F&&F.l(n),L=h(n),q=f(n,"DIV",{class:!0});var ge=C(q);A=f(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(A)!=="svelte-1nm3ycn"&&(A.textContent=se),Le=h(ge),z=f(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(z)!=="svelte-ti9c0l"&&(z.textContent=et),le=h(ge),N=f(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Q(N)!=="svelte-19h1sxa"&&(N.textContent=ye),ge.forEach(d),$e=h(n),G=f(n,"DIV",{class:!0,"data-svelte-h":!0}),Q(G)!=="svelte-1ooszag"&&(G.innerHTML=tt),Y=h(n),j=f(n,"DIV",{class:!0});var rt=C(j);te.l(rt),rt.forEach(d),ke=h(n),O=f(n,"DIV",{class:!0});var _e=C(O);X=f(_e,"DIV",{class:!0});var Ge=C(X);W=f(Ge,"DIV",{});var Ye=C(W);H=f(Ye,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(H)!=="svelte-z454ua"&&(H.textContent=xe),Oe=h(Ye),re=f(Ye,"H2",{style:!0,class:!0});var ot=C(re);M(J.$$.fragment,ot),ot.forEach(d),Ye.forEach(d),oe=h(Ge),P=f(Ge,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(P)!=="svelte-1t96lla"&&(P.textContent=qe),Ge.forEach(d),Ne=h(_e),Z=f(_e,"DIV",{class:!0});var ut=C(Z);ie=f(ut,"DIV",{});var mt=C(ie);U=f(mt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(U)!=="svelte-1p71z02"&&(U.textContent=ce),fe=h(mt),de=f(mt,"H2",{style:!0,class:!0});var Kt=C(de);M(ee.$$.fragment,Kt),Kt.forEach(d),mt.forEach(d),je=h(ut),K=f(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(K)!=="svelte-9bsh6y"&&(K.textContent=dt),ut.forEach(d),st=h(_e),ue=f(_e,"DIV",{class:!0});var ft=C(ue);v=f(ft,"DIV",{});var pt=C(v);me=f(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(me)!=="svelte-kngp4i"&&(me.textContent=Ot),Ct=h(pt),He=f(pt,"H2",{style:!0,class:!0});var Qt=C(He);M(Ce.$$.fragment,Qt),Qt.forEach(d),pt.forEach(d),Dt=h(ft),De=f(ft,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(De)!=="svelte-1tpohu4"&&(De.textContent=Nt),ft.forEach(d),Et=h(_e),Ee=f(_e,"DIV",{class:!0});var ht=C(Ee);Pe=f(ht,"DIV",{});var wt=C(Pe);Re=f(wt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Q(Re)!=="svelte-14ra03k"&&(Re.textContent=jt),Rt=h(wt),Ue=f(wt,"H2",{style:!0,class:!0});var zt=C(Ue);M(Ie.$$.fragment,zt),zt.forEach(d),wt.forEach(d),It=h(ht),Te=f(ht,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Q(Te)!=="svelte-elfod"&&(Te.textContent=Ht),ht.forEach(d),_e.forEach(d),_t=h(n),pe=f(n,"DIV",{class:!0});var gt=C(pe);Fe=f(gt,"DIV",{class:!0});var vt=C(Fe);Ae=f(vt,"DIV",{class:!0});var yt=C(Ae);We=f(yt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(We)!=="svelte-dgw2oa"&&(We.textContent=Pt),Tt=h(yt),M(Ke.$$.fragment,yt),yt.forEach(d),Ft=h(vt),M(Se.$$.fragment,vt),vt.forEach(d),At=h(gt),Ve=f(gt,"DIV",{class:!0});var $t=C(Ve);Me=f($t,"DIV",{class:!0});var bt=C(Me);Qe=f(bt,"SPAN",{class:!0,"data-svelte-h":!0}),Q(Qe)!=="svelte-1br9yke"&&(Qe.textContent=Ut),St=h(bt),M(ze.$$.fragment,bt),bt.forEach(d),Vt=h($t),M(Be.$$.fragment,$t),$t.forEach(d),gt.forEach(d),this.h()},h(){m(s,"name","twitter:card"),m(s,"content","summary_large_image"),m(t,"name","twitter:site"),m(t,"content","@evidence_dev"),m(A,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(z,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),m(N,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(q,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(G,"class","flex justify-between items-center mb-1.5 mt-0.5"),m(j,"class","mb-2 flex justify-start"),ae(H,"color","#7B8DA6"),m(H,"class","text-[9px] font-bold uppercase tracking-wider"),ae(re,"color","#000000"),m(re,"class","text-xl font-extrabold mt-0.5"),ae(P,"color","#7B8DA6"),m(P,"class","text-[9px] mt-0.5"),m(X,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(U,"color","#7B8DA6"),m(U,"class","text-[9px] font-bold uppercase tracking-wider"),ae(de,"color","#000000"),m(de,"class","text-xl font-extrabold mt-0.5"),ae(K,"color","#7B8DA6"),m(K,"class","text-[9px] mt-0.5"),m(Z,"class","bg-white rounded-xl shadow-sm border-t-4 border-red-500 py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(me,"color","#7B8DA6"),m(me,"class","text-[9px] font-bold uppercase tracking-wider"),ae(He,"color","#000000"),m(He,"class","text-xl font-extrabold mt-0.5"),ae(De,"color","#7B8DA6"),m(De,"class","text-[9px] mt-0.5"),m(ue,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(Re,"color","#7B8DA6"),m(Re,"class","text-[9px] font-bold uppercase tracking-wider"),ae(Ue,"color","#000000"),m(Ue,"class","text-xl font-extrabold mt-0.5"),ae(Te,"color","#7B8DA6"),m(Te,"class","text-[9px] mt-0.5"),m(Ee,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),m(O,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(We,"class","font-bold text-gray-700 text-xs"),m(Ae,"class","flex items-center gap-1.5 mb-1"),m(Fe,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(Qe,"class","font-bold text-gray-700 text-xs"),m(Me,"class","flex items-center gap-1.5 mb-1"),m(Ve,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(pe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(n,_){he&&he.m(n,_),y(n,a,_),lt.m(ve.head,null),u(ve.head,s),u(ve.head,t),we&&we.m(ve.head,null),u(ve.head,o),y(n,i,_),D&&D.m(n,_),y(n,r,_),E&&E.m(n,_),y(n,c,_),R&&R.m(n,_),y(n,k,_),I&&I.m(n,_),y(n,e,_),T&&T.m(n,_),y(n,x,_),F&&F.m(n,_),y(n,L,_),y(n,q,_),u(q,A),u(q,Le),u(q,z),u(q,le),u(q,N),y(n,$e,_),y(n,G,_),y(n,Y,_),y(n,j,_),te.m(j,null),y(n,ke,_),y(n,O,_),u(O,X),u(X,W),u(W,H),u(W,Oe),u(W,re),V(J,re,null),u(X,oe),u(X,P),u(O,Ne),u(O,Z),u(Z,ie),u(ie,U),u(ie,fe),u(ie,de),V(ee,de,null),u(Z,je),u(Z,K),u(O,st),u(O,ue),u(ue,v),u(v,me),u(v,Ct),u(v,He),V(Ce,He,null),u(ue,Dt),u(ue,De),u(O,Et),u(O,Ee),u(Ee,Pe),u(Pe,Re),u(Pe,Rt),u(Pe,Ue),V(Ie,Ue,null),u(Ee,It),u(Ee,Te),y(n,_t,_),y(n,pe,_),u(pe,Fe),u(Fe,Ae),u(Ae,We),u(Ae,Tt),V(Ke,Ae,null),u(Fe,Ft),V(Se,Fe,null),u(pe,At),u(pe,Ve),u(Ve,Me),u(Me,Qe),u(Me,St),V(ze,Me,null),u(Ve,Vt),V(Be,Ve,null),ct=!0,Mt||(Wt=[Bt(A,"click",l[35]),Bt(z,"click",l[36]),Bt(N,"click",l[37])],Mt=!0)},p(n,_){typeof b<"u"&&b.title&&b.hide_title!==!0&&he.p(n,_),lt.p(n,_),typeof b=="object"&&we.p(n,_),n[0]?D?(D.p(n,_),_[0]&1&&g(D,1)):(D=ea(n),D.c(),g(D,1),D.m(r.parentNode,r)):D&&(Je(),$(D,1,1,()=>{D=null}),Xe()),n[1]?E?(E.p(n,_),_[0]&2&&g(E,1)):(E=ta(n),E.c(),g(E,1),E.m(c.parentNode,c)):E&&(Je(),$(E,1,1,()=>{E=null}),Xe()),n[2]?R?(R.p(n,_),_[0]&4&&g(R,1)):(R=aa(n),R.c(),g(R,1),R.m(k.parentNode,k)):R&&(Je(),$(R,1,1,()=>{R=null}),Xe()),n[3]?I?(I.p(n,_),_[0]&8&&g(I,1)):(I=na(n),I.c(),g(I,1),I.m(e.parentNode,e)):I&&(Je(),$(I,1,1,()=>{I=null}),Xe()),n[4]?T?(T.p(n,_),_[0]&16&&g(T,1)):(T=sa(n),T.c(),g(T,1),T.m(x.parentNode,x)):T&&(Je(),$(T,1,1,()=>{T=null}),Xe()),n[5]?F?(F.p(n,_),_[0]&32&&g(F,1)):(F=la(n),F.c(),g(F,1),F.m(L.parentNode,L)):F&&(Je(),$(F,1,1,()=>{F=null}),Xe()),_[0]&64&&oa(be,be=n[6])?(Je(),$(te,1,1,Ze),Xe(),te=ra(n),te.c(),g(te,1),te.m(j,null)):te.p(n,_);const ge={};_[0]&1&&(ge.data=n[0]),J.$set(ge);const rt={};_[0]&2&&(rt.data=n[1]),ee.$set(rt);const _e={};_[0]&4&&(_e.data=n[2]),Ce.$set(_e);const Ge={};_[0]&8&&(Ge.data=n[3]),Ie.$set(Ge);const Ye={};_[0]&16&&(Ye.data=n[4]),Se.$set(Ye);const ot={};_[0]&32&&(ot.data=n[5]),Be.$set(ot)},i(n){ct||(g(D),g(E),g(R),g(I),g(T),g(F),g(te),g(J.$$.fragment,n),g(ee.$$.fragment,n),g(Ce.$$.fragment,n),g(Ie.$$.fragment,n),g(Ke.$$.fragment,n),g(Se.$$.fragment,n),g(ze.$$.fragment,n),g(Be.$$.fragment,n),ct=!0)},o(n){$(D),$(E),$(R),$(I),$(T),$(F),$(te),$(J.$$.fragment,n),$(ee.$$.fragment,n),$(Ce.$$.fragment,n),$(Ie.$$.fragment,n),$(Ke.$$.fragment,n),$(Se.$$.fragment,n),$(ze.$$.fragment,n),$(Be.$$.fragment,n),ct=!1},d(n){n&&(d(a),d(i),d(r),d(c),d(k),d(e),d(x),d(L),d(q),d($e),d(G),d(Y),d(j),d(ke),d(O),d(_t),d(pe)),he&&he.d(n),lt.d(n),d(s),d(t),we&&we.d(n),d(o),D&&D.d(n),E&&E.d(n),R&&R.d(n),I&&I.d(n),T&&T.d(n),F&&F.d(n),te.d(n),S(J),S(ee),S(Ce),S(Ie),S(Ke),S(Se),S(ze),S(Be),Mt=!1,da(Wt)}}}const b={title:"Sales & Win-Loss Analysis"},Va=l=>l>=1e6?"$"+l/1e6+"M":l>=1e3?"$"+l/1e3+"K":"$"+l,Ma=l=>l>=1e6?"$"+l/1e6+"M":l>=1e3?"$"+l/1e3+"K":"$"+l;function Ba(l,a,s){let t,o;Gt(l,Ca,v=>s(34,t=v)),Gt(l,Zt,v=>s(42,o=v));let{data:i}=a,{data:r={},customFormattingSettings:c,__db:k,inputs:e}=i;ca(Zt,o="b6c1e1557fc0a9a1e3a0b220257fd6d9",o);let x=ya(xa(e));ua(x.subscribe(v=>s(9,e=v))),ma(ka,{getCustomFormats:()=>c.customFormats||[]});const L=(v,me)=>qa(k.query,v,{query_name:me});$a(L),t.params,Yt(()=>!0);let q={initialData:void 0,initialError:void 0},A=ne`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date`,se=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date`;r.kpi_win_rate_data&&(r.kpi_win_rate_data instanceof Error?q.initialError=r.kpi_win_rate_data:q.initialData=r.kpi_win_rate_data,r.kpi_win_rate_columns&&(q.knownColumns=r.kpi_win_rate_columns));let Le,z=!1;const et=at.createReactive({callback:v=>{s(0,Le=v)},execFn:L},{id:"kpi_win_rate",...q});et(se,{noResolve:A,...q}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return Le}};let le={initialData:void 0,initialError:void 0},N=ne`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`,ye=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`;r.kpi_lost_value_data&&(r.kpi_lost_value_data instanceof Error?le.initialError=r.kpi_lost_value_data:le.initialData=r.kpi_lost_value_data,r.kpi_lost_value_columns&&(le.knownColumns=r.kpi_lost_value_columns));let $e,G=!1;const tt=at.createReactive({callback:v=>{s(1,$e=v)},execFn:L},{id:"kpi_lost_value",...le});tt(ye,{noResolve:N,...le}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return $e}};let Y={initialData:void 0,initialError:void 0},j=ne`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`,be=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`;r.kpi_open_deals_data&&(r.kpi_open_deals_data instanceof Error?Y.initialError=r.kpi_open_deals_data:Y.initialData=r.kpi_open_deals_data,r.kpi_open_deals_columns&&(Y.knownColumns=r.kpi_open_deals_columns));let ke,O=!1;const X=at.createReactive({callback:v=>{s(2,ke=v)},execFn:L},{id:"kpi_open_deals",...Y});X(be,{noResolve:j,...Y}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return ke}};let W={initialData:void 0,initialError:void 0},H=ne`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
            when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
            else '1970-01-01'::date
        end and notes_last_updated_at <= '2026-06-01'::date) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and d.notes_last_updated_at <= '2026-06-01'::date
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`,xe=`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
            when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
            else '1970-01-01'::date
        end and notes_last_updated_at <= '2026-06-01'::date) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and d.notes_last_updated_at <= '2026-06-01'::date
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`;r.kpi_top_client_concentration_data&&(r.kpi_top_client_concentration_data instanceof Error?W.initialError=r.kpi_top_client_concentration_data:W.initialData=r.kpi_top_client_concentration_data,r.kpi_top_client_concentration_columns&&(W.knownColumns=r.kpi_top_client_concentration_columns));let Oe,re=!1;const J=at.createReactive({callback:v=>{s(3,Oe=v)},execFn:L},{id:"kpi_top_client_concentration",...W});J(xe,{noResolve:H,...W}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return Oe}};let oe={initialData:void 0,initialError:void 0},P=ne`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-01'::date
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
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-01'::date
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`;r.win_loss_reasons_data&&(r.win_loss_reasons_data instanceof Error?oe.initialError=r.win_loss_reasons_data:oe.initialData=r.win_loss_reasons_data,r.win_loss_reasons_columns&&(oe.knownColumns=r.win_loss_reasons_columns));let Ne,Z=!1;const ie=at.createReactive({callback:v=>{s(4,Ne=v)},execFn:L},{id:"win_loss_reasons",...oe});ie(qe,{noResolve:P,...oe}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return Ne}};let U={initialData:void 0,initialError:void 0},ce=ne`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date
group by all
order by pipeline_value desc`,fe=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date
group by all
order by pipeline_value desc`;r.client_pipeline_share_data&&(r.client_pipeline_share_data instanceof Error?U.initialError=r.client_pipeline_share_data:U.initialData=r.client_pipeline_share_data,r.client_pipeline_share_columns&&(U.knownColumns=r.client_pipeline_share_columns));let de,ee=!1;const je=at.createReactive({callback:v=>{s(5,de=v)},execFn:L},{id:"client_pipeline_share",...U});je(fe,{noResolve:ce,...U}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return de}};let K="ytd";Yt(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),e){const v=t.url.searchParams.get("time_filter");s(9,e.time_filter=v||"ytd",e)}});const dt=()=>Lt(it(`/?time_filter=${K}`)),st=()=>Lt(it(`/sales?time_filter=${K}`)),ue=()=>Lt(it(`/operations?time_filter=${K}`));return l.$$set=v=>{"data"in v&&s(7,i=v.data)},l.$$.update=()=>{if(l.$$.dirty[0]&128&&s(8,{data:r={},customFormattingSettings:c,__db:k}=i,r),l.$$.dirty[0]&256&&ba.set(Object.keys(r).length>0),l.$$.dirty[1]&8&&t.params,l.$$.dirty[0]&512&&s(11,A=ne`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date`),l.$$.dirty[0]&512&&s(12,se=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-01'::date`),l.$$.dirty[0]&15360&&(A||!z?A||(et(se,{noResolve:A,...q}),s(13,z=!0)):et(se,{noResolve:A})),l.$$.dirty[0]&512&&s(15,N=ne`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`),l.$$.dirty[0]&512&&s(16,ye=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`),l.$$.dirty[0]&245760&&(N||!G?N||(tt(ye,{noResolve:N,...le}),s(17,G=!0)):tt(ye,{noResolve:N})),l.$$.dirty[0]&512&&s(19,j=ne`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`),l.$$.dirty[0]&512&&s(20,be=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and notes_last_updated_at <= '2026-06-01'::date`),l.$$.dirty[0]&3932160&&(j||!O?j||(X(be,{noResolve:j,...Y}),s(21,O=!0)):X(be,{noResolve:j})),l.$$.dirty[0]&512&&s(23,H=ne`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
            when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
            else '1970-01-01'::date
        end and notes_last_updated_at <= '2026-06-01'::date) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and d.notes_last_updated_at <= '2026-06-01'::date
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),l.$$.dirty[0]&512&&s(24,xe=`with client_shares as (
    select
        c.name as client_name,
        sum(d.amount) as client_amount,
        sum(d.amount) * 1.0 / (select nullif(sum(amount), 0) from postgres.fct_pipeline where deal_stage not in ('closedwon', 'closedlost') and notes_last_updated_at >= case
            when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
            when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
            when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
            else '1970-01-01'::date
        end and notes_last_updated_at <= '2026-06-01'::date) as share
    from postgres.fct_pipeline d
    join postgres.seed_xero_contacts c on d.customer_email = c.email_address
    where d.deal_stage not in ('closedwon', 'closedlost')
      and d.notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and d.notes_last_updated_at <= '2026-06-01'::date
    group by c.name
)
select coalesce(max(share), 0) as max_concentration
from client_shares`),l.$$.dirty[0]&62914560&&(H||!re?H||(J(xe,{noResolve:H,...W}),s(25,re=!0)):J(xe,{noResolve:H})),l.$$.dirty[0]&512&&s(27,P=ne`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-01'::date
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),l.$$.dirty[0]&512&&s(28,qe=`with reason_ranks as (
    select
        coalesce(closed_won_reason, 'Reason Undefined') as reason,
        case when deal_stage = 'closedwon' then 'Closed Won' else 'Closed Lost' end as status,
        sum(amount) as total_value,
        row_number() over (order by sum(amount) desc) as rn
    from postgres.fct_pipeline
    where deal_stage in ('closedwon', 'closedlost')
      and closed_won_reason is not null
      and notes_last_updated_at >= case
          when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
          when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
          when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
          else '1970-01-01'::date
      end
      and notes_last_updated_at <= '2026-06-01'::date
    group by all
)
select
    case when rn <= 5 then reason else 'Other Reasons' end as reason,
    status,
    sum(total_value) as total_value
from reason_ranks
group by 1, 2
order by total_value desc`),l.$$.dirty[0]&1006632960&&(P||!Z?P||(ie(qe,{noResolve:P,...oe}),s(29,Z=!0)):ie(qe,{noResolve:P})),l.$$.dirty[0]&512&&s(31,ce=ne`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date
group by all
order by pipeline_value desc`),l.$$.dirty[0]&512&&s(32,fe=`select
    c.name as client_name,
    sum(d.amount) as pipeline_value
from postgres.fct_pipeline d
join postgres.seed_xero_contacts c on d.customer_email = c.email_address
where d.deal_stage not in ('closedwon', 'closedlost')
  and d.notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-01'::date
group by all
order by pipeline_value desc`),l.$$.dirty[0]&1073741824|l.$$.dirty[1]&7&&(ce||!ee?ce||(je(fe,{noResolve:ce,...U}),s(33,ee=!0)):je(fe,{noResolve:ce})),l.$$.dirty[0]&512&&s(6,K=(e==null?void 0:e.time_filter)||"ytd"),l.$$.dirty[0]&512&&e&&e.time_filter)try{const v=new URL(window.location.href);v.searchParams.get("time_filter")!==e.time_filter&&(v.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",v.pathname+v.search))}catch{}},[Le,$e,ke,Oe,Ne,de,K,i,r,e,q,A,se,z,le,N,ye,G,Y,j,be,O,W,H,xe,re,oe,P,qe,Z,U,ce,fe,ee,t,dt,st,ue]}class Ka extends ha{constructor(a){super(),wa(this,a,Ba,Sa,oa,{data:7},null,[-1,-1])}}export{Ka as component};
