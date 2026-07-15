import{s as da,d as _,b as d,i as $,e as u,z as ne,k as g,A as ma,h as f,r as Rt,j as q,x as Dt,q as ce,n as v,m as p,y as Et,t as Jt,B as fa,C as pa,D as ha,E as Zt,v as Xe}from"../chunks/scheduler.Ch8ub0mh.js";import{S as ga,i as va,d as V,t as y,a as w,c as Ge,m as M,b as L,e as O,g as Ye}from"../chunks/index.Bs0zddgu.js";import{a as ea,e as wa,s as $a,Q as at,p as ya,c as ta,r as aa,d as ba}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CJdV3b0b.js";import{b as nt,w as xa}from"../chunks/entry.C5XxKVxW.js";import{h as se,p as ka}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as qa}from"../chunks/stores.DDBaBflW.js";import{V as qt,B as na,Q as st,a as Ca,b as Ct}from"../chunks/Value.C01k54es.js";function Da(r){let n,s=b.title+"",t;return{c(){n=p("h1"),t=Et(s),this.h()},l(l){n=f(l,"H1",{class:!0});var i=q(n);t=Dt(i,s),i.forEach(_),this.h()},h(){d(n,"class","title")},m(l,i){$(l,n,i),u(n,t)},p:Xe,d(l){l&&_(n)}}}function Ea(r){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:Xe,p:Xe,d:Xe}}function Ra(r){let n,s,t,l,i;return document.title=n=b.title,{c(){s=v(),t=p("meta"),l=v(),i=p("meta"),this.h()},l(o){s=g(o),t=f(o,"META",{property:!0,content:!0}),l=g(o),i=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,m;d(t,"property","og:title"),d(t,"content",((o=b.og)==null?void 0:o.title)??b.title),d(i,"name","twitter:title"),d(i,"content",((m=b.og)==null?void 0:m.title)??b.title)},m(o,m){$(o,s,m),$(o,t,m),$(o,l,m),$(o,i,m)},p(o,m){m&0&&n!==(n=b.title)&&(document.title=n)},d(o){o&&(_(s),_(t),_(l),_(i))}}}function Ia(r){var i,o;let n,s,t=(b.description||((i=b.og)==null?void 0:i.description))&&Fa(),l=((o=b.og)==null?void 0:o.image)&&Aa();return{c(){t&&t.c(),n=v(),l&&l.c(),s=Rt()},l(m){t&&t.l(m),n=g(m),l&&l.l(m),s=Rt()},m(m,x){t&&t.m(m,x),$(m,n,x),l&&l.m(m,x),$(m,s,x)},p(m,x){var e,k;(b.description||(e=b.og)!=null&&e.description)&&t.p(m,x),(k=b.og)!=null&&k.image&&l.p(m,x)},d(m){m&&(_(n),_(s)),t&&t.d(m),l&&l.d(m)}}}function Fa(r){let n,s,t,l,i;return{c(){n=p("meta"),s=v(),t=p("meta"),l=v(),i=p("meta"),this.h()},l(o){n=f(o,"META",{name:!0,content:!0}),s=g(o),t=f(o,"META",{property:!0,content:!0}),l=g(o),i=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,m,x;d(n,"name","description"),d(n,"content",b.description??((o=b.og)==null?void 0:o.description)),d(t,"property","og:description"),d(t,"content",((m=b.og)==null?void 0:m.description)??b.description),d(i,"name","twitter:description"),d(i,"content",((x=b.og)==null?void 0:x.description)??b.description)},m(o,m){$(o,n,m),$(o,s,m),$(o,t,m),$(o,l,m),$(o,i,m)},p:Xe,d(o){o&&(_(n),_(s),_(t),_(l),_(i))}}}function Aa(r){let n,s,t;return{c(){n=p("meta"),s=v(),t=p("meta"),this.h()},l(l){n=f(l,"META",{property:!0,content:!0}),s=g(l),t=f(l,"META",{name:!0,content:!0}),this.h()},h(){var l,i;d(n,"property","og:image"),d(n,"content",ta((l=b.og)==null?void 0:l.image)),d(t,"name","twitter:image"),d(t,"content",ta((i=b.og)==null?void 0:i.image))},m(l,i){$(l,n,i),$(l,s,i),$(l,t,i)},p:Xe,d(l){l&&(_(n),_(s),_(t))}}}function sa(r){let n,s;return n=new st({props:{queryID:"kpi_win_rate",queryResult:r[0]}}),{c(){O(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,l){M(n,t,l),s=!0},p(t,l){const i={};l[0]&1&&(i.queryResult=t[0]),n.$set(i)},i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){y(n.$$.fragment,t),s=!1},d(t){V(n,t)}}}function ra(r){let n,s;return n=new st({props:{queryID:"kpi_lost_value",queryResult:r[1]}}),{c(){O(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,l){M(n,t,l),s=!0},p(t,l){const i={};l[0]&2&&(i.queryResult=t[1]),n.$set(i)},i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){y(n.$$.fragment,t),s=!1},d(t){V(n,t)}}}function oa(r){let n,s;return n=new st({props:{queryID:"kpi_open_deals",queryResult:r[2]}}),{c(){O(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,l){M(n,t,l),s=!0},p(t,l){const i={};l[0]&4&&(i.queryResult=t[2]),n.$set(i)},i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){y(n.$$.fragment,t),s=!1},d(t){V(n,t)}}}function la(r){let n,s;return n=new st({props:{queryID:"kpi_top_client_concentration",queryResult:r[3]}}),{c(){O(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,l){M(n,t,l),s=!0},p(t,l){const i={};l[0]&8&&(i.queryResult=t[3]),n.$set(i)},i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){y(n.$$.fragment,t),s=!1},d(t){V(n,t)}}}function ia(r){let n,s;return n=new st({props:{queryID:"win_loss_reasons",queryResult:r[4]}}),{c(){O(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,l){M(n,t,l),s=!0},p(t,l){const i={};l[0]&16&&(i.queryResult=t[4]),n.$set(i)},i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){y(n.$$.fragment,t),s=!1},d(t){V(n,t)}}}function _a(r){let n,s;return n=new st({props:{queryID:"client_pipeline_share",queryResult:r[5]}}),{c(){O(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,l){M(n,t,l),s=!0},p(t,l){const i={};l[0]&32&&(i.queryResult=t[5]),n.$set(i)},i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){y(n.$$.fragment,t),s=!1},d(t){V(n,t)}}}function Ta(r){let n,s,t,l,i,o,m,x;return n=new Ct({props:{valueLabel:"MTD",value:"mtd",default:r[6]==="mtd"}}),t=new Ct({props:{valueLabel:"QTD",value:"qtd",default:r[6]==="qtd"}}),i=new Ct({props:{valueLabel:"YTD",value:"ytd",default:r[6]==="ytd"}}),m=new Ct({props:{valueLabel:"All Time",value:"all",default:r[6]==="all"}}),{c(){O(n.$$.fragment),s=v(),O(t.$$.fragment),l=v(),O(i.$$.fragment),o=v(),O(m.$$.fragment)},l(e){L(n.$$.fragment,e),s=g(e),L(t.$$.fragment,e),l=g(e),L(i.$$.fragment,e),o=g(e),L(m.$$.fragment,e)},m(e,k){M(n,e,k),$(e,s,k),M(t,e,k),$(e,l,k),M(i,e,k),$(e,o,k),M(m,e,k),x=!0},p(e,k){const j={};k[0]&64&&(j.default=e[6]==="mtd"),n.$set(j);const C={};k[0]&64&&(C.default=e[6]==="qtd"),t.$set(C);const S={};k[0]&64&&(S.default=e[6]==="ytd"),i.$set(S);const K={};k[0]&64&&(K.default=e[6]==="all"),m.$set(K)},i(e){x||(w(n.$$.fragment,e),w(t.$$.fragment,e),w(i.$$.fragment,e),w(m.$$.fragment,e),x=!0)},o(e){y(n.$$.fragment,e),y(t.$$.fragment,e),y(i.$$.fragment,e),y(m.$$.fragment,e),x=!1},d(e){e&&(_(s),_(l),_(o)),V(n,e),V(t,e),V(i,e),V(m,e)}}}function ca(r){let n,s;return n=new Ca({props:{name:"time_filter",defaultValue:r[6],$$slots:{default:[Ta]},$$scope:{ctx:r}}}),{c(){O(n.$$.fragment)},l(t){L(n.$$.fragment,t)},m(t,l){M(n,t,l),s=!0},p(t,l){const i={};l[0]&64&&(i.defaultValue=t[6]),l[0]&64|l[1]&262144&&(i.$$scope={dirty:l,ctx:t}),n.$set(i)},i(t){s||(w(n.$$.fragment,t),s=!0)},o(t){y(n.$$.fragment,t),s=!1},d(t){V(n,t)}}}function Sa(r){let n,s,t,l,i,o,m,x,e,k,j,C,S,K,ge,Me,Q,re,z,ue,G,Le,ve,Y,B,we='<div class="text-base font-extrabold text-[#264773]">Sales Pipeline Deep-Dive</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: HubSpot CRM</div>',$e,X,Je=r[6],J,D,N,oe,Z,Ze="🎯 Pipeline Win Rate",le,H,U,Oe,ee,et="Closed Won vs. Closed Lost count",ie,P,W,te,tt="💸 Lost Opportunity Value",je,de,h,rt,ye,Pt="Total lost contract values",It,be,Be,xe,Ht="💼 Open Deals in Funnel",Ft,Pe,ke,At,qe,Nt="Active prospects in pipeline",Tt,Ce,He,De,Ut="⚠️ Max Client Concentration",St,Ne,Ee,Vt,Re,Wt="Largest client's share of pipeline",dt,me,Ie,Fe,Ue,Kt="CRM Closed Won/Lost Reason Breakdown",Mt,We,Lt,Ae,Ot,Te,Se,Ke,Qt="Open Pipeline Value by Corporate Client",jt,Qe,Bt,Ve,ze,fe=typeof b<"u"&&b.title&&b.hide_title!==!0&&Da();function ua(a,c){return typeof b<"u"&&b.title?Ra:Ea}let ot=ua()(r),pe=typeof b=="object"&&Ia(),E=r[0]&&sa(r),R=r[1]&&ra(r),I=r[2]&&oa(r),F=r[3]&&la(r),A=r[4]&&ia(r),T=r[5]&&_a(r),ae=ca(r);return U=new qt({props:{data:r[0],column:"win_rate",fmt:"pct1"}}),h=new qt({props:{data:r[1],column:"lost_value",fmt:"usd"}}),ke=new qt({props:{data:r[2],column:"open_deals_count"}}),Ee=new qt({props:{data:r[3],column:"max_concentration",fmt:"pct0"}}),We=new ea({props:{description:"Compares reasons for deals won or lost to understand competitor performance and pricing issues."}}),Ae=new na({props:{data:r[4],x:"reason",y:"total_value",series:"status",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#1D5F60","#7B8DA6"],seriesOrder:["Closed Won","Closed Lost"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:40},xAxis:{splitNumber:3,axisLabel:{formatter:Va}}}}}),Qe=new ea({props:{description:"Breakdown of open pipeline amounts by customer to identify key account values."}}),Ve=new na({props:{data:r[5],x:"client_name",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{grid:{top:15,bottom:25,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Ma}}}}}),{c(){fe&&fe.c(),n=v(),ot.c(),s=p("meta"),t=p("meta"),pe&&pe.c(),l=Rt(),i=v(),E&&E.c(),o=v(),R&&R.c(),m=v(),I&&I.c(),x=v(),F&&F.c(),e=v(),A&&A.c(),k=v(),T&&T.c(),j=v(),C=p("div"),S=p("a"),K=Et("Overview Cockpit"),Me=v(),Q=p("a"),re=Et("Sales & Win-Loss"),ue=v(),G=p("a"),Le=Et("Operations & Vendors"),Y=v(),B=p("div"),B.innerHTML=we,$e=v(),X=p("div"),ae.c(),J=v(),D=p("div"),N=p("div"),oe=p("div"),Z=p("span"),Z.textContent=Ze,le=v(),H=p("h2"),O(U.$$.fragment),Oe=v(),ee=p("div"),ee.textContent=et,ie=v(),P=p("div"),W=p("div"),te=p("span"),te.textContent=tt,je=v(),de=p("h2"),O(h.$$.fragment),rt=v(),ye=p("div"),ye.textContent=Pt,It=v(),be=p("div"),Be=p("div"),xe=p("span"),xe.textContent=Ht,Ft=v(),Pe=p("h2"),O(ke.$$.fragment),At=v(),qe=p("div"),qe.textContent=Nt,Tt=v(),Ce=p("div"),He=p("div"),De=p("span"),De.textContent=Ut,St=v(),Ne=p("h2"),O(Ee.$$.fragment),Vt=v(),Re=p("div"),Re.textContent=Wt,dt=v(),me=p("div"),Ie=p("div"),Fe=p("div"),Ue=p("span"),Ue.textContent=Kt,Mt=v(),O(We.$$.fragment),Lt=v(),O(Ae.$$.fragment),Ot=v(),Te=p("div"),Se=p("div"),Ke=p("span"),Ke.textContent=Qt,jt=v(),O(Qe.$$.fragment),Bt=v(),O(Ve.$$.fragment),this.h()},l(a){fe&&fe.l(a),n=g(a);const c=ma("svelte-2igo1p",document.head);ot.l(c),s=f(c,"META",{name:!0,content:!0}),t=f(c,"META",{name:!0,content:!0}),pe&&pe.l(c),l=Rt(),c.forEach(_),i=g(a),E&&E.l(a),o=g(a),R&&R.l(a),m=g(a),I&&I.l(a),x=g(a),F&&F.l(a),e=g(a),A&&A.l(a),k=g(a),T&&T.l(a),j=g(a),C=f(a,"DIV",{class:!0});var he=q(C);S=f(he,"A",{href:!0,class:!0});var lt=q(S);K=Dt(lt,"Overview Cockpit"),lt.forEach(_),Me=g(he),Q=f(he,"A",{href:!0,class:!0});var it=q(Q);re=Dt(it,"Sales & Win-Loss"),it.forEach(_),ue=g(he),G=f(he,"A",{href:!0,class:!0});var _t=q(G);Le=Dt(_t,"Operations & Vendors"),_t.forEach(_),he.forEach(_),Y=g(a),B=f(a,"DIV",{class:!0,"data-svelte-h":!0}),ce(B)!=="svelte-1ooszag"&&(B.innerHTML=we),$e=g(a),X=f(a,"DIV",{class:!0});var ct=q(X);ae.l(ct),ct.forEach(_),J=g(a),D=f(a,"DIV",{class:!0});var _e=q(D);N=f(_e,"DIV",{class:!0});var ut=q(N);oe=f(ut,"DIV",{});var mt=q(oe);Z=f(mt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),ce(Z)!=="svelte-z454ua"&&(Z.textContent=Ze),le=g(mt),H=f(mt,"H2",{style:!0,class:!0});var zt=q(H);L(U.$$.fragment,zt),zt.forEach(_),mt.forEach(_),Oe=g(ut),ee=f(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),ce(ee)!=="svelte-1t96lla"&&(ee.textContent=et),ut.forEach(_),ie=g(_e),P=f(_e,"DIV",{class:!0});var ft=q(P);W=f(ft,"DIV",{});var pt=q(W);te=f(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),ce(te)!=="svelte-1p71z02"&&(te.textContent=tt),je=g(pt),de=f(pt,"H2",{style:!0,class:!0});var Gt=q(de);L(h.$$.fragment,Gt),Gt.forEach(_),pt.forEach(_),rt=g(ft),ye=f(ft,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),ce(ye)!=="svelte-reitmo"&&(ye.textContent=Pt),ft.forEach(_),It=g(_e),be=f(_e,"DIV",{class:!0});var ht=q(be);Be=f(ht,"DIV",{});var gt=q(Be);xe=f(gt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),ce(xe)!=="svelte-kngp4i"&&(xe.textContent=Ht),Ft=g(gt),Pe=f(gt,"H2",{style:!0,class:!0});var Yt=q(Pe);L(ke.$$.fragment,Yt),Yt.forEach(_),gt.forEach(_),At=g(ht),qe=f(ht,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),ce(qe)!=="svelte-1tpohu4"&&(qe.textContent=Nt),ht.forEach(_),Tt=g(_e),Ce=f(_e,"DIV",{class:!0});var vt=q(Ce);He=f(vt,"DIV",{});var wt=q(He);De=f(wt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),ce(De)!=="svelte-14ra03k"&&(De.textContent=Ut),St=g(wt),Ne=f(wt,"H2",{style:!0,class:!0});var Xt=q(Ne);L(Ee.$$.fragment,Xt),Xt.forEach(_),wt.forEach(_),Vt=g(vt),Re=f(vt,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),ce(Re)!=="svelte-elfod"&&(Re.textContent=Wt),vt.forEach(_),_e.forEach(_),dt=g(a),me=f(a,"DIV",{class:!0});var $t=q(me);Ie=f($t,"DIV",{class:!0});var yt=q(Ie);Fe=f(yt,"DIV",{class:!0});var bt=q(Fe);Ue=f(bt,"SPAN",{class:!0,"data-svelte-h":!0}),ce(Ue)!=="svelte-dgw2oa"&&(Ue.textContent=Kt),Mt=g(bt),L(We.$$.fragment,bt),bt.forEach(_),Lt=g(yt),L(Ae.$$.fragment,yt),yt.forEach(_),Ot=g($t),Te=f($t,"DIV",{class:!0});var xt=q(Te);Se=f(xt,"DIV",{class:!0});var kt=q(Se);Ke=f(kt,"SPAN",{class:!0,"data-svelte-h":!0}),ce(Ke)!=="svelte-1br9yke"&&(Ke.textContent=Qt),jt=g(kt),L(Qe.$$.fragment,kt),kt.forEach(_),Bt=g(xt),L(Ve.$$.fragment,xt),xt.forEach(_),$t.forEach(_),this.h()},h(){d(s,"name","twitter:card"),d(s,"content","summary_large_image"),d(t,"name","twitter:site"),d(t,"content","@evidence_dev"),d(S,"href",ge=`/public.dlt-pipeline-orchestration/${nt}/?time_filter=${r[6]}`),d(S,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),d(Q,"href",z=`/public.dlt-pipeline-orchestration/${nt}/sales?time_filter=${r[6]}`),d(Q,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),d(G,"href",ve=`/public.dlt-pipeline-orchestration/${nt}/operations?time_filter=${r[6]}`),d(G,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),d(C,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),d(B,"class","flex justify-between items-center mb-1.5 mt-0.5"),d(X,"class","mb-2 flex justify-start"),ne(Z,"color","#7B8DA6"),d(Z,"class","text-[9px] font-bold uppercase tracking-wider"),ne(H,"color","#000000"),d(H,"class","text-xl font-extrabold mt-0.5"),ne(ee,"color","#7B8DA6"),d(ee,"class","text-[9px] mt-0.5"),d(N,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ne(te,"color","#7B8DA6"),d(te,"class","text-[9px] font-bold uppercase tracking-wider"),ne(de,"color","#000000"),d(de,"class","text-xl font-extrabold mt-0.5"),ne(ye,"color","#7B8DA6"),d(ye,"class","text-[9px] mt-0.5"),d(P,"class","bg-white rounded-xl shadow-sm border-t-4 border-red-500 py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ne(xe,"color","#7B8DA6"),d(xe,"class","text-[9px] font-bold uppercase tracking-wider"),ne(Pe,"color","#000000"),d(Pe,"class","text-xl font-extrabold mt-0.5"),ne(qe,"color","#7B8DA6"),d(qe,"class","text-[9px] mt-0.5"),d(be,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),ne(De,"color","#7B8DA6"),d(De,"class","text-[9px] font-bold uppercase tracking-wider"),ne(Ne,"color","#000000"),d(Ne,"class","text-xl font-extrabold mt-0.5"),ne(Re,"color","#7B8DA6"),d(Re,"class","text-[9px] mt-0.5"),d(Ce,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-2.5 px-3.5 flex flex-col justify-between h-[105px]"),d(D,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),d(Ue,"class","font-bold text-gray-700 text-xs"),d(Fe,"class","flex items-center gap-1.5 mb-1"),d(Ie,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),d(Ke,"class","font-bold text-gray-700 text-xs"),d(Se,"class","flex items-center gap-1.5 mb-1"),d(Te,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),d(me,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(a,c){fe&&fe.m(a,c),$(a,n,c),ot.m(document.head,null),u(document.head,s),u(document.head,t),pe&&pe.m(document.head,null),u(document.head,l),$(a,i,c),E&&E.m(a,c),$(a,o,c),R&&R.m(a,c),$(a,m,c),I&&I.m(a,c),$(a,x,c),F&&F.m(a,c),$(a,e,c),A&&A.m(a,c),$(a,k,c),T&&T.m(a,c),$(a,j,c),$(a,C,c),u(C,S),u(S,K),u(C,Me),u(C,Q),u(Q,re),u(C,ue),u(C,G),u(G,Le),$(a,Y,c),$(a,B,c),$(a,$e,c),$(a,X,c),ae.m(X,null),$(a,J,c),$(a,D,c),u(D,N),u(N,oe),u(oe,Z),u(oe,le),u(oe,H),M(U,H,null),u(N,Oe),u(N,ee),u(D,ie),u(D,P),u(P,W),u(W,te),u(W,je),u(W,de),M(h,de,null),u(P,rt),u(P,ye),u(D,It),u(D,be),u(be,Be),u(Be,xe),u(Be,Ft),u(Be,Pe),M(ke,Pe,null),u(be,At),u(be,qe),u(D,Tt),u(D,Ce),u(Ce,He),u(He,De),u(He,St),u(He,Ne),M(Ee,Ne,null),u(Ce,Vt),u(Ce,Re),$(a,dt,c),$(a,me,c),u(me,Ie),u(Ie,Fe),u(Fe,Ue),u(Fe,Mt),M(We,Fe,null),u(Ie,Lt),M(Ae,Ie,null),u(me,Ot),u(me,Te),u(Te,Se),u(Se,Ke),u(Se,jt),M(Qe,Se,null),u(Te,Bt),M(Ve,Te,null),ze=!0},p(a,c){typeof b<"u"&&b.title&&b.hide_title!==!0&&fe.p(a,c),ot.p(a,c),typeof b=="object"&&pe.p(a,c),a[0]?E?(E.p(a,c),c[0]&1&&w(E,1)):(E=sa(a),E.c(),w(E,1),E.m(o.parentNode,o)):E&&(Ye(),y(E,1,1,()=>{E=null}),Ge()),a[1]?R?(R.p(a,c),c[0]&2&&w(R,1)):(R=ra(a),R.c(),w(R,1),R.m(m.parentNode,m)):R&&(Ye(),y(R,1,1,()=>{R=null}),Ge()),a[2]?I?(I.p(a,c),c[0]&4&&w(I,1)):(I=oa(a),I.c(),w(I,1),I.m(x.parentNode,x)):I&&(Ye(),y(I,1,1,()=>{I=null}),Ge()),a[3]?F?(F.p(a,c),c[0]&8&&w(F,1)):(F=la(a),F.c(),w(F,1),F.m(e.parentNode,e)):F&&(Ye(),y(F,1,1,()=>{F=null}),Ge()),a[4]?A?(A.p(a,c),c[0]&16&&w(A,1)):(A=ia(a),A.c(),w(A,1),A.m(k.parentNode,k)):A&&(Ye(),y(A,1,1,()=>{A=null}),Ge()),a[5]?T?(T.p(a,c),c[0]&32&&w(T,1)):(T=_a(a),T.c(),w(T,1),T.m(j.parentNode,j)):T&&(Ye(),y(T,1,1,()=>{T=null}),Ge()),(!ze||c[0]&64&&ge!==(ge=`/public.dlt-pipeline-orchestration/${nt}/?time_filter=${a[6]}`))&&d(S,"href",ge),(!ze||c[0]&64&&z!==(z=`/public.dlt-pipeline-orchestration/${nt}/sales?time_filter=${a[6]}`))&&d(Q,"href",z),(!ze||c[0]&64&&ve!==(ve=`/public.dlt-pipeline-orchestration/${nt}/operations?time_filter=${a[6]}`))&&d(G,"href",ve),c[0]&64&&da(Je,Je=a[6])?(Ye(),y(ae,1,1,Xe),Ge(),ae=ca(a),ae.c(),w(ae,1),ae.m(X,null)):ae.p(a,c);const he={};c[0]&1&&(he.data=a[0]),U.$set(he);const lt={};c[0]&2&&(lt.data=a[1]),h.$set(lt);const it={};c[0]&4&&(it.data=a[2]),ke.$set(it);const _t={};c[0]&8&&(_t.data=a[3]),Ee.$set(_t);const ct={};c[0]&16&&(ct.data=a[4]),Ae.$set(ct);const _e={};c[0]&32&&(_e.data=a[5]),Ve.$set(_e)},i(a){ze||(w(E),w(R),w(I),w(F),w(A),w(T),w(ae),w(U.$$.fragment,a),w(h.$$.fragment,a),w(ke.$$.fragment,a),w(Ee.$$.fragment,a),w(We.$$.fragment,a),w(Ae.$$.fragment,a),w(Qe.$$.fragment,a),w(Ve.$$.fragment,a),ze=!0)},o(a){y(E),y(R),y(I),y(F),y(A),y(T),y(ae),y(U.$$.fragment,a),y(h.$$.fragment,a),y(ke.$$.fragment,a),y(Ee.$$.fragment,a),y(We.$$.fragment,a),y(Ae.$$.fragment,a),y(Qe.$$.fragment,a),y(Ve.$$.fragment,a),ze=!1},d(a){a&&(_(n),_(i),_(o),_(m),_(x),_(e),_(k),_(j),_(C),_(Y),_(B),_($e),_(X),_(J),_(D),_(dt),_(me)),fe&&fe.d(a),ot.d(a),_(s),_(t),pe&&pe.d(a),_(l),E&&E.d(a),R&&R.d(a),I&&I.d(a),F&&F.d(a),A&&A.d(a),T&&T.d(a),ae.d(a),V(U),V(h),V(ke),V(Ee),V(We),V(Ae),V(Qe),V(Ve)}}}const b={title:"Sales & Win-Loss Analysis"},Va=r=>r>=1e6?"$"+r/1e6+"M":r>=1e3?"$"+r/1e3+"K":"$"+r,Ma=r=>r>=1e6?"$"+r/1e6+"M":r>=1e3?"$"+r/1e3+"K":"$"+r;function La(r,n,s){let t,l;Jt(r,qa,h=>s(34,t=h)),Jt(r,aa,h=>s(39,l=h));let{data:i}=n,{data:o={},customFormattingSettings:m,__db:x,inputs:e}=i;fa(aa,l="b6c1e1557fc0a9a1e3a0b220257fd6d9",l);let k=wa(xa(e));pa(k.subscribe(h=>s(9,e=h))),ha(ba,{getCustomFormats:()=>m.customFormats||[]});const j=(h,rt)=>ka(x.query,h,{query_name:rt});$a(j),t.params,Zt(()=>!0);let C={initialData:void 0,initialError:void 0},S=se`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`,K=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`;o.kpi_win_rate_data&&(o.kpi_win_rate_data instanceof Error?C.initialError=o.kpi_win_rate_data:C.initialData=o.kpi_win_rate_data,o.kpi_win_rate_columns&&(C.knownColumns=o.kpi_win_rate_columns));let ge,Me=!1;const Q=at.createReactive({callback:h=>{s(0,ge=h)},execFn:j},{id:"kpi_win_rate",...C});Q(K,{noResolve:S,...C}),globalThis[Symbol.for("kpi_win_rate")]={get value(){return ge}};let re={initialData:void 0,initialError:void 0},z=se`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,ue=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_lost_value_data&&(o.kpi_lost_value_data instanceof Error?re.initialError=o.kpi_lost_value_data:re.initialData=o.kpi_lost_value_data,o.kpi_lost_value_columns&&(re.knownColumns=o.kpi_lost_value_columns));let G,Le=!1;const ve=at.createReactive({callback:h=>{s(1,G=h)},execFn:j},{id:"kpi_lost_value",...re});ve(ue,{noResolve:z,...re}),globalThis[Symbol.for("kpi_lost_value")]={get value(){return G}};let Y={initialData:void 0,initialError:void 0},B=se`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`,we=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`;o.kpi_open_deals_data&&(o.kpi_open_deals_data instanceof Error?Y.initialError=o.kpi_open_deals_data:Y.initialData=o.kpi_open_deals_data,o.kpi_open_deals_columns&&(Y.knownColumns=o.kpi_open_deals_columns));let $e,X=!1;const Je=at.createReactive({callback:h=>{s(2,$e=h)},execFn:j},{id:"kpi_open_deals",...Y});Je(we,{noResolve:B,...Y}),globalThis[Symbol.for("kpi_open_deals")]={get value(){return $e}};let J={initialData:void 0,initialError:void 0},D=se`with client_shares as (
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
from client_shares`,N=`with client_shares as (
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
from client_shares`;o.kpi_top_client_concentration_data&&(o.kpi_top_client_concentration_data instanceof Error?J.initialError=o.kpi_top_client_concentration_data:J.initialData=o.kpi_top_client_concentration_data,o.kpi_top_client_concentration_columns&&(J.knownColumns=o.kpi_top_client_concentration_columns));let oe,Z=!1;const Ze=at.createReactive({callback:h=>{s(3,oe=h)},execFn:j},{id:"kpi_top_client_concentration",...J});Ze(N,{noResolve:D,...J}),globalThis[Symbol.for("kpi_top_client_concentration")]={get value(){return oe}};let le={initialData:void 0,initialError:void 0},H=se`with reason_ranks as (
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
order by total_value desc`,U=`with reason_ranks as (
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
order by total_value desc`;o.win_loss_reasons_data&&(o.win_loss_reasons_data instanceof Error?le.initialError=o.win_loss_reasons_data:le.initialData=o.win_loss_reasons_data,o.win_loss_reasons_columns&&(le.knownColumns=o.win_loss_reasons_columns));let Oe,ee=!1;const et=at.createReactive({callback:h=>{s(4,Oe=h)},execFn:j},{id:"win_loss_reasons",...le});et(U,{noResolve:H,...le}),globalThis[Symbol.for("win_loss_reasons")]={get value(){return Oe}};let ie={initialData:void 0,initialError:void 0},P=se`select
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
order by pipeline_value desc`,W=`select
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
order by pipeline_value desc`;o.client_pipeline_share_data&&(o.client_pipeline_share_data instanceof Error?ie.initialError=o.client_pipeline_share_data:ie.initialData=o.client_pipeline_share_data,o.client_pipeline_share_columns&&(ie.knownColumns=o.client_pipeline_share_columns));let te,tt=!1;const je=at.createReactive({callback:h=>{s(5,te=h)},execFn:j},{id:"client_pipeline_share",...ie});je(W,{noResolve:P,...ie}),globalThis[Symbol.for("client_pipeline_share")]={get value(){return te}};let de="ytd";return Zt(()=>{if(e){const h=t.url.searchParams.get("time_filter");s(9,e.time_filter=h||"ytd",e)}}),r.$$set=h=>{"data"in h&&s(7,i=h.data)},r.$$.update=()=>{if(r.$$.dirty[0]&128&&s(8,{data:o={},customFormattingSettings:m,__db:x}=i,o),r.$$.dirty[0]&256&&ya.set(Object.keys(o).length>0),r.$$.dirty[1]&8&&t.params,r.$$.dirty[0]&512&&s(11,S=se`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),r.$$.dirty[0]&512&&s(12,K=`select
    coalesce(sum(case when deal_stage = 'closedwon' then 1 else 0 end) * 1.0 / nullif(count(case when deal_stage in ('closedwon', 'closedlost') then 1 end), 0), 0) as win_rate
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
    when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
    else '1970-01-01'::date
end`),r.$$.dirty[0]&15360&&(S||!Me?S||(Q(K,{noResolve:S,...C}),s(13,Me=!0)):Q(K,{noResolve:S})),r.$$.dirty[0]&512&&s(15,z=se`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&512&&s(16,ue=`select
    coalesce(sum(amount), 0) as lost_value
from postgres.fct_pipeline
where deal_stage = 'closedlost'
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&245760&&(z||!Le?z||(ve(ue,{noResolve:z,...re}),s(17,Le=!0)):ve(ue,{noResolve:z})),r.$$.dirty[0]&512&&s(19,B=se`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&512&&s(20,we=`select
    count(distinct deal_id) as open_deals_count
from postgres.fct_pipeline
where deal_stage not in ('closedwon', 'closedlost')
  and notes_last_updated_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', (select max(transaction_date) from postgres.fct_revenue))
      when '${e.time_filter}' = 'ytd' then date_trunc('year', (select max(transaction_date) from postgres.fct_revenue))
      else '1970-01-01'::date
  end`),r.$$.dirty[0]&3932160&&(B||!X?B||(Je(we,{noResolve:B,...Y}),s(21,X=!0)):Je(we,{noResolve:B})),r.$$.dirty[0]&512&&s(23,D=se`with client_shares as (
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
from client_shares`),r.$$.dirty[0]&512&&s(24,N=`with client_shares as (
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
from client_shares`),r.$$.dirty[0]&62914560&&(D||!Z?D||(Ze(N,{noResolve:D,...J}),s(25,Z=!0)):Ze(N,{noResolve:D})),r.$$.dirty[0]&512&&s(27,H=se`with reason_ranks as (
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
order by total_value desc`),r.$$.dirty[0]&512&&s(28,U=`with reason_ranks as (
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
order by total_value desc`),r.$$.dirty[0]&1006632960&&(H||!ee?H||(et(U,{noResolve:H,...le}),s(29,ee=!0)):et(U,{noResolve:H})),r.$$.dirty[0]&512&&s(31,P=se`select
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
order by pipeline_value desc`),r.$$.dirty[0]&512&&s(32,W=`select
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
order by pipeline_value desc`),r.$$.dirty[0]&1073741824|r.$$.dirty[1]&7&&(P||!tt?P||(je(W,{noResolve:P,...ie}),s(33,tt=!0)):je(W,{noResolve:P})),r.$$.dirty[0]&512&&s(6,de=(e==null?void 0:e.time_filter)||"ytd"),r.$$.dirty[0]&512&&e&&e.time_filter)try{const h=new URL(window.location.href);h.searchParams.get("time_filter")!==e.time_filter&&(h.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",h.pathname+h.search))}catch{}},[ge,G,$e,oe,Oe,te,de,i,o,e,C,S,K,Me,re,z,ue,Le,Y,B,we,X,J,D,N,Z,le,H,U,ee,ie,P,W,tt,t]}class Ka extends ga{constructor(n){super(),va(this,n,La,Sa,da,{data:7},null,[-1,-1])}}export{Ka as component};
