import{s as sa,d,z as da,i as y,e as u,l as Nt,b as m,A as ae,k as v,B as ca,h as f,r as jt,j as I,q as Y,n as g,m as p,t as Kt,C as _a,D as ua,E as ma,F as Wt,v as Be,x as fa,y as pa}from"../chunks/scheduler.BWqtgNY2.js";import{S as ha,i as va,d as q,t as w,a as h,c as Je,m as j,b as C,e as D,g as Ze}from"../chunks/index.DlzBi47Z.js";import{V as kt,B as ga,g as $a,Q as rt,a as ya,b as xt}from"../chunks/Value.CqeVMvWw.js";import{a as Jt,D as wa,e as ba,s as ka,Q as at,p as xa,b as qt,c as ot,r as Zt,d as qa}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BLzAIuYu.js";import{w as ja,g as Bt}from"../chunks/entry.DqpcqLQb.js";import{h as re,p as Ca}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as Da}from"../chunks/stores.BDB_QFcx.js";const{document:$e}=$a;function Ea(s){let a,n=k.title+"",t;return{c(){a=p("h1"),t=pa(n),this.h()},l(l){a=f(l,"H1",{class:!0});var o=I(a);t=fa(o,n),o.forEach(d),this.h()},h(){m(a,"class","title")},m(l,o){y(l,a,o),u(a,t)},p:Be,d(l){l&&d(a)}}}function Ia(s){return{c(){this.h()},l(a){this.h()},h(){$e.title="Evidence"},m:Be,p:Be,d:Be}}function Ta(s){let a,n,t,l,o;return $e.title=a=k.title,{c(){n=g(),t=p("meta"),l=g(),o=p("meta"),this.h()},l(i){n=v(i),t=f(i,"META",{property:!0,content:!0}),l=v(i),o=f(i,"META",{name:!0,content:!0}),this.h()},h(){var i,c;m(t,"property","og:title"),m(t,"content",((i=k.og)==null?void 0:i.title)??k.title),m(o,"name","twitter:title"),m(o,"content",((c=k.og)==null?void 0:c.title)??k.title)},m(i,c){y(i,n,c),y(i,t,c),y(i,l,c),y(i,o,c)},p(i,c){c&0&&a!==(a=k.title)&&($e.title=a)},d(i){i&&(d(n),d(t),d(l),d(o))}}}function Ra(s){var o,i;let a,n,t=(k.description||((o=k.og)==null?void 0:o.description))&&Aa(),l=((i=k.og)==null?void 0:i.image)&&Sa();return{c(){t&&t.c(),a=g(),l&&l.c(),n=jt()},l(c){t&&t.l(c),a=v(c),l&&l.l(c),n=jt()},m(c,x){t&&t.m(c,x),y(c,a,x),l&&l.m(c,x),y(c,n,x)},p(c,x){var e,b;(k.description||(e=k.og)!=null&&e.description)&&t.p(c,x),(b=k.og)!=null&&b.image&&l.p(c,x)},d(c){c&&(d(a),d(n)),t&&t.d(c),l&&l.d(c)}}}function Aa(s){let a,n,t,l,o;return{c(){a=p("meta"),n=g(),t=p("meta"),l=g(),o=p("meta"),this.h()},l(i){a=f(i,"META",{name:!0,content:!0}),n=v(i),t=f(i,"META",{property:!0,content:!0}),l=v(i),o=f(i,"META",{name:!0,content:!0}),this.h()},h(){var i,c,x;m(a,"name","description"),m(a,"content",k.description??((i=k.og)==null?void 0:i.description)),m(t,"property","og:description"),m(t,"content",((c=k.og)==null?void 0:c.description)??k.description),m(o,"name","twitter:description"),m(o,"content",((x=k.og)==null?void 0:x.description)??k.description)},m(i,c){y(i,a,c),y(i,n,c),y(i,t,c),y(i,l,c),y(i,o,c)},p:Be,d(i){i&&(d(a),d(n),d(t),d(l),d(o))}}}function Sa(s){let a,n,t;return{c(){a=p("meta"),n=g(),t=p("meta"),this.h()},l(l){a=f(l,"META",{property:!0,content:!0}),n=v(l),t=f(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;m(a,"property","og:image"),m(a,"content",ot((l=k.og)==null?void 0:l.image)),m(t,"name","twitter:image"),m(t,"content",ot((o=k.og)==null?void 0:o.image))},m(l,o){y(l,a,o),y(l,n,o),y(l,t,o)},p:Be,d(l){l&&(d(a),d(n),d(t))}}}function ea(s){let a,n;return a=new rt({props:{queryID:"kpi_active_projects",queryResult:s[0]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,l){j(a,t,l),n=!0},p(t,l){const o={};l[0]&1&&(o.queryResult=t[0]),a.$set(o)},i(t){n||(h(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){q(a,t)}}}function ta(s){let a,n;return a=new rt({props:{queryID:"kpi_completion_rate",queryResult:s[1]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,l){j(a,t,l),n=!0},p(t,l){const o={};l[0]&2&&(o.queryResult=t[1]),a.$set(o)},i(t){n||(h(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){q(a,t)}}}function aa(s){let a,n;return a=new rt({props:{queryID:"kpi_total_catalog_value",queryResult:s[2]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,l){j(a,t,l),n=!0},p(t,l){const o={};l[0]&4&&(o.queryResult=t[2]),a.$set(o)},i(t){n||(h(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){q(a,t)}}}function ra(s){let a,n;return a=new rt({props:{queryID:"kpi_total_variants",queryResult:s[3]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,l){j(a,t,l),n=!0},p(t,l){const o={};l[0]&8&&(o.queryResult=t[3]),a.$set(o)},i(t){n||(h(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){q(a,t)}}}function na(s){let a,n;return a=new rt({props:{queryID:"detailed_projects",queryResult:s[4]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,l){j(a,t,l),n=!0},p(t,l){const o={};l[0]&16&&(o.queryResult=t[4]),a.$set(o)},i(t){n||(h(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){q(a,t)}}}function ia(s){let a,n;return a=new rt({props:{queryID:"vendor_matrix",queryResult:s[5]}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,l){j(a,t,l),n=!0},p(t,l){const o={};l[0]&32&&(o.queryResult=t[5]),a.$set(o)},i(t){n||(h(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){q(a,t)}}}function Va(s){let a,n,t,l,o,i,c,x;return a=new xt({props:{valueLabel:"MTD",value:"mtd",default:s[6]==="mtd"}}),t=new xt({props:{valueLabel:"QTD",value:"qtd",default:s[6]==="qtd"}}),o=new xt({props:{valueLabel:"YTD",value:"ytd",default:s[6]==="ytd"}}),c=new xt({props:{valueLabel:"All Time",value:"all",default:s[6]==="all"}}),{c(){D(a.$$.fragment),n=g(),D(t.$$.fragment),l=g(),D(o.$$.fragment),i=g(),D(c.$$.fragment)},l(e){C(a.$$.fragment,e),n=v(e),C(t.$$.fragment,e),l=v(e),C(o.$$.fragment,e),i=v(e),C(c.$$.fragment,e)},m(e,b){j(a,e,b),y(e,n,b),j(t,e,b),y(e,l,b),j(o,e,b),y(e,i,b),j(c,e,b),x=!0},p(e,b){const N={};b[0]&64&&(N.default=e[6]==="mtd"),a.$set(N);const E={};b[0]&64&&(E.default=e[6]==="qtd"),t.$set(E);const P={};b[0]&64&&(P.default=e[6]==="ytd"),o.$set(P);const ne={};b[0]&64&&(ne.default=e[6]==="all"),c.$set(ne)},i(e){x||(h(a.$$.fragment,e),h(t.$$.fragment,e),h(o.$$.fragment,e),h(c.$$.fragment,e),x=!0)},o(e){w(a.$$.fragment,e),w(t.$$.fragment,e),w(o.$$.fragment,e),w(c.$$.fragment,e),x=!1},d(e){e&&(d(n),d(l),d(i)),q(a,e),q(t,e),q(o,e),q(c,e)}}}function la(s){let a,n;return a=new ya({props:{name:"time_filter",defaultValue:s[6],$$slots:{default:[Va]},$$scope:{ctx:s}}}),{c(){D(a.$$.fragment)},l(t){C(a.$$.fragment,t)},m(t,l){j(a,t,l),n=!0},p(t,l){const o={};l[0]&64&&(o.defaultValue=t[6]),l[0]&64|l[1]&2097152&&(o.$$scope={dirty:l,ctx:t}),a.$set(o)},i(t){n||(h(a.$$.fragment,t),n=!0)},o(t){w(a.$$.fragment,t),n=!1},d(t){q(a,t)}}}function Fa(s){let a,n,t,l,o,i,c,x;return a=new qt({props:{id:"project_number",label:"Number"}}),t=new qt({props:{id:"project_name",label:"Project Name"}}),o=new qt({props:{id:"company_name",label:"Client"}}),c=new qt({props:{id:"status",label:"Status"}}),{c(){D(a.$$.fragment),n=g(),D(t.$$.fragment),l=g(),D(o.$$.fragment),i=g(),D(c.$$.fragment)},l(e){C(a.$$.fragment,e),n=v(e),C(t.$$.fragment,e),l=v(e),C(o.$$.fragment,e),i=v(e),C(c.$$.fragment,e)},m(e,b){j(a,e,b),y(e,n,b),j(t,e,b),y(e,l,b),j(o,e,b),y(e,i,b),j(c,e,b),x=!0},p:Be,i(e){x||(h(a.$$.fragment,e),h(t.$$.fragment,e),h(o.$$.fragment,e),h(c.$$.fragment,e),x=!0)},o(e){w(a.$$.fragment,e),w(t.$$.fragment,e),w(o.$$.fragment,e),w(c.$$.fragment,e),x=!1},d(e){e&&(d(n),d(l),d(i)),q(a,e),q(t,e),q(o,e),q(c,e)}}}function Pa(s){let a,n,t,l,o,i,c,x,e,b,N,E,P,ne="Overview Cockpit",He,X,et="Sales & Win-Loss",ie,H,ye="Operations & Vendors",we,z,tt='<div class="text-base font-extrabold text-[#264773]">Operations &amp; Product Catalog</div> <div class="text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded">Data Source: Procore &amp; Shopify</div>',K,M,be=s[6],ke,B,W,Q,O,xe="🏗️ Ongoing Active Projects",Me,le,J,se,U,qe="Active builds tracked in Procore",Oe,Z,oe,L,_e="✅ Project Completion Rate",fe,de,ee,Ue,G,dt="Ratio of completed jobs in date range",nt,ue,$,me,Ht="🛍️ Avg Variant Pricing",Ct,Le,je,Dt,Ce,Mt="Mean price of Shopify variants",Et,De,Qe,Ee,Ot="📦 Shopify Variant Count",It,Ge,Ie,Tt,Te,Ut="Total unique variants registered",ct,pe,Re,Ae,Ye,Lt="Detailed Procore Projects List",Rt,Xe,At,Se,St,Ve,Fe,ze,Qt="Shopify Average Variant Price by Vendor",Vt,Ke,Ft,Pe,_t,Pt,Gt,he=typeof k<"u"&&k.title&&k.hide_title!==!0&&Ea();function oa(r,_){return typeof k<"u"&&k.title?Ta:Ia}let it=oa()(s),ve=typeof k=="object"&&Ra(),T=s[0]&&ea(s),R=s[1]&&ta(s),A=s[2]&&aa(s),S=s[3]&&ra(s),V=s[4]&&na(s),F=s[5]&&ia(s),te=la(s);return J=new kt({props:{data:s[0],column:"active_projects"}}),ee=new kt({props:{data:s[1],column:"completion_rate",fmt:"pct1"}}),je=new kt({props:{data:s[2],column:"avg_price",fmt:"usd"}}),Ie=new kt({props:{data:s[3],column:"total_variants"}}),Xe=new Jt({props:{description:"Lists individual projects managed in Procore with their numbers, names, client names, and active status."}}),Se=new wa({props:{data:s[4],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Fa]},$$scope:{ctx:s}}}),Ke=new Jt({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),Pe=new ga({props:{data:s[5],x:"vendor",y:"average_price",swapXY:"true",fillOpacity:"0.9",yFmt:"usd0",labels:!0,labelFmt:"usd0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:175,echartsOptions:{xAxis:{splitNumber:3},grid:{top:25,bottom:15,left:40,right:45}}}}),{c(){he&&he.c(),a=g(),it.c(),n=p("meta"),t=p("meta"),ve&&ve.c(),l=jt(),o=g(),T&&T.c(),i=g(),R&&R.c(),c=g(),A&&A.c(),x=g(),S&&S.c(),e=g(),V&&V.c(),b=g(),F&&F.c(),N=g(),E=p("div"),P=p("button"),P.textContent=ne,He=g(),X=p("button"),X.textContent=et,ie=g(),H=p("button"),H.textContent=ye,we=g(),z=p("div"),z.innerHTML=tt,K=g(),M=p("div"),te.c(),ke=g(),B=p("div"),W=p("div"),Q=p("div"),O=p("span"),O.textContent=xe,Me=g(),le=p("h2"),D(J.$$.fragment),se=g(),U=p("div"),U.textContent=qe,Oe=g(),Z=p("div"),oe=p("div"),L=p("span"),L.textContent=_e,fe=g(),de=p("h2"),D(ee.$$.fragment),Ue=g(),G=p("div"),G.textContent=dt,nt=g(),ue=p("div"),$=p("div"),me=p("span"),me.textContent=Ht,Ct=g(),Le=p("h2"),D(je.$$.fragment),Dt=g(),Ce=p("div"),Ce.textContent=Mt,Et=g(),De=p("div"),Qe=p("div"),Ee=p("span"),Ee.textContent=Ot,It=g(),Ge=p("h2"),D(Ie.$$.fragment),Tt=g(),Te=p("div"),Te.textContent=Ut,ct=g(),pe=p("div"),Re=p("div"),Ae=p("div"),Ye=p("span"),Ye.textContent=Lt,Rt=g(),D(Xe.$$.fragment),At=g(),D(Se.$$.fragment),St=g(),Ve=p("div"),Fe=p("div"),ze=p("span"),ze.textContent=Qt,Vt=g(),D(Ke.$$.fragment),Ft=g(),D(Pe.$$.fragment),this.h()},l(r){he&&he.l(r),a=v(r);const _=ca("svelte-2igo1p",$e.head);it.l(_),n=f(_,"META",{name:!0,content:!0}),t=f(_,"META",{name:!0,content:!0}),ve&&ve.l(_),l=jt(),_.forEach(d),o=v(r),T&&T.l(r),i=v(r),R&&R.l(r),c=v(r),A&&A.l(r),x=v(r),S&&S.l(r),e=v(r),V&&V.l(r),b=v(r),F&&F.l(r),N=v(r),E=f(r,"DIV",{class:!0});var ge=I(E);P=f(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(P)!=="svelte-1nm3ycn"&&(P.textContent=ne),He=v(ge),X=f(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(X)!=="svelte-1l9tmjn"&&(X.textContent=et),ie=v(ge),H=f(ge,"BUTTON",{class:!0,"data-svelte-h":!0}),Y(H)!=="svelte-1yk261k"&&(H.textContent=ye),ge.forEach(d),we=v(r),z=f(r,"DIV",{class:!0,"data-svelte-h":!0}),Y(z)!=="svelte-7wbqns"&&(z.innerHTML=tt),K=v(r),M=f(r,"DIV",{class:!0});var lt=I(M);te.l(lt),lt.forEach(d),ke=v(r),B=f(r,"DIV",{class:!0});var ce=I(B);W=f(ce,"DIV",{class:!0});var We=I(W);Q=f(We,"DIV",{});var Ne=I(Q);O=f(Ne,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(O)!=="svelte-1lkmrf4"&&(O.textContent=xe),Me=v(Ne),le=f(Ne,"H2",{style:!0,class:!0});var st=I(le);C(J.$$.fragment,st),st.forEach(d),Ne.forEach(d),se=v(We),U=f(We,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(U)!=="svelte-1l6skdc"&&(U.textContent=qe),We.forEach(d),Oe=v(ce),Z=f(ce,"DIV",{class:!0});var ut=I(Z);oe=f(ut,"DIV",{});var mt=I(oe);L=f(mt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(L)!=="svelte-1x51d4n"&&(L.textContent=_e),fe=v(mt),de=f(mt,"H2",{style:!0,class:!0});var Yt=I(de);C(ee.$$.fragment,Yt),Yt.forEach(d),mt.forEach(d),Ue=v(ut),G=f(ut,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(G)!=="svelte-lmrt1d"&&(G.textContent=dt),ut.forEach(d),nt=v(ce),ue=f(ce,"DIV",{class:!0});var ft=I(ue);$=f(ft,"DIV",{});var pt=I($);me=f(pt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(me)!=="svelte-17h8n09"&&(me.textContent=Ht),Ct=v(pt),Le=f(pt,"H2",{style:!0,class:!0});var Xt=I(Le);C(je.$$.fragment,Xt),Xt.forEach(d),pt.forEach(d),Dt=v(ft),Ce=f(ft,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Ce)!=="svelte-9bk19p"&&(Ce.textContent=Mt),ft.forEach(d),Et=v(ce),De=f(ce,"DIV",{class:!0});var ht=I(De);Qe=f(ht,"DIV",{});var vt=I(Qe);Ee=f(vt,"SPAN",{style:!0,class:!0,"data-svelte-h":!0}),Y(Ee)!=="svelte-svysku"&&(Ee.textContent=Ot),It=v(vt),Ge=f(vt,"H2",{style:!0,class:!0});var zt=I(Ge);C(Ie.$$.fragment,zt),zt.forEach(d),vt.forEach(d),Tt=v(ht),Te=f(ht,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),Y(Te)!=="svelte-1mtyb7h"&&(Te.textContent=Ut),ht.forEach(d),ce.forEach(d),ct=v(r),pe=f(r,"DIV",{class:!0});var gt=I(pe);Re=f(gt,"DIV",{class:!0});var $t=I(Re);Ae=f($t,"DIV",{class:!0});var yt=I(Ae);Ye=f(yt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(Ye)!=="svelte-18vfdji"&&(Ye.textContent=Lt),Rt=v(yt),C(Xe.$$.fragment,yt),yt.forEach(d),At=v($t),C(Se.$$.fragment,$t),$t.forEach(d),St=v(gt),Ve=f(gt,"DIV",{class:!0});var wt=I(Ve);Fe=f(wt,"DIV",{class:!0});var bt=I(Fe);ze=f(bt,"SPAN",{class:!0,"data-svelte-h":!0}),Y(ze)!=="svelte-1e5ypeo"&&(ze.textContent=Qt),Vt=v(bt),C(Ke.$$.fragment,bt),bt.forEach(d),Ft=v(wt),C(Pe.$$.fragment,wt),wt.forEach(d),gt.forEach(d),this.h()},h(){m(n,"name","twitter:card"),m(n,"content","summary_large_image"),m(t,"name","twitter:site"),m(t,"content","@evidence_dev"),m(P,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(X,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),m(H,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),m(E,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(z,"class","flex justify-between items-center mb-1.5 mt-0.5"),m(M,"class","mb-2 flex justify-start"),ae(O,"color","#7B8DA6"),m(O,"class","text-[9px] font-bold uppercase tracking-wider"),ae(le,"color","#000000"),m(le,"class","text-xl font-extrabold mt-0.5"),ae(U,"color","#7B8DA6"),m(U,"class","text-[9px] mt-0.5"),m(W,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(L,"color","#7B8DA6"),m(L,"class","text-[9px] font-bold uppercase tracking-wider"),ae(de,"color","#000000"),m(de,"class","text-xl font-extrabold mt-0.5"),ae(G,"color","#7B8DA6"),m(G,"class","text-[9px] mt-0.5"),m(Z,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(me,"color","#7B8DA6"),m(me,"class","text-[9px] font-bold uppercase tracking-wider"),ae(Le,"color","#000000"),m(Le,"class","text-xl font-extrabold mt-0.5"),ae(Ce,"color","#7B8DA6"),m(Ce,"class","text-[9px] mt-0.5"),m(ue,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),ae(Ee,"color","#7B8DA6"),m(Ee,"class","text-[9px] font-bold uppercase tracking-wider"),ae(Ge,"color","#000000"),m(Ge,"class","text-xl font-extrabold mt-0.5"),ae(Te,"color","#7B8DA6"),m(Te,"class","text-[9px] mt-0.5"),m(De,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),m(B,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(Ye,"class","font-bold text-gray-700 text-xs"),m(Ae,"class","flex items-center gap-1.5 mb-1.5"),m(Re,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(ze,"class","font-bold text-gray-700 text-xs"),m(Fe,"class","flex items-center gap-1.5 mb-1.5"),m(Ve,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),m(pe,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(r,_){he&&he.m(r,_),y(r,a,_),it.m($e.head,null),u($e.head,n),u($e.head,t),ve&&ve.m($e.head,null),u($e.head,l),y(r,o,_),T&&T.m(r,_),y(r,i,_),R&&R.m(r,_),y(r,c,_),A&&A.m(r,_),y(r,x,_),S&&S.m(r,_),y(r,e,_),V&&V.m(r,_),y(r,b,_),F&&F.m(r,_),y(r,N,_),y(r,E,_),u(E,P),u(E,He),u(E,X),u(E,ie),u(E,H),y(r,we,_),y(r,z,_),y(r,K,_),y(r,M,_),te.m(M,null),y(r,ke,_),y(r,B,_),u(B,W),u(W,Q),u(Q,O),u(Q,Me),u(Q,le),j(J,le,null),u(W,se),u(W,U),u(B,Oe),u(B,Z),u(Z,oe),u(oe,L),u(oe,fe),u(oe,de),j(ee,de,null),u(Z,Ue),u(Z,G),u(B,nt),u(B,ue),u(ue,$),u($,me),u($,Ct),u($,Le),j(je,Le,null),u(ue,Dt),u(ue,Ce),u(B,Et),u(B,De),u(De,Qe),u(Qe,Ee),u(Qe,It),u(Qe,Ge),j(Ie,Ge,null),u(De,Tt),u(De,Te),y(r,ct,_),y(r,pe,_),u(pe,Re),u(Re,Ae),u(Ae,Ye),u(Ae,Rt),j(Xe,Ae,null),u(Re,At),j(Se,Re,null),u(pe,St),u(pe,Ve),u(Ve,Fe),u(Fe,ze),u(Fe,Vt),j(Ke,Fe,null),u(Ve,Ft),j(Pe,Ve,null),_t=!0,Pt||(Gt=[Nt(P,"click",s[35]),Nt(X,"click",s[36]),Nt(H,"click",s[37])],Pt=!0)},p(r,_){typeof k<"u"&&k.title&&k.hide_title!==!0&&he.p(r,_),it.p(r,_),typeof k=="object"&&ve.p(r,_),r[0]?T?(T.p(r,_),_[0]&1&&h(T,1)):(T=ea(r),T.c(),h(T,1),T.m(i.parentNode,i)):T&&(Ze(),w(T,1,1,()=>{T=null}),Je()),r[1]?R?(R.p(r,_),_[0]&2&&h(R,1)):(R=ta(r),R.c(),h(R,1),R.m(c.parentNode,c)):R&&(Ze(),w(R,1,1,()=>{R=null}),Je()),r[2]?A?(A.p(r,_),_[0]&4&&h(A,1)):(A=aa(r),A.c(),h(A,1),A.m(x.parentNode,x)):A&&(Ze(),w(A,1,1,()=>{A=null}),Je()),r[3]?S?(S.p(r,_),_[0]&8&&h(S,1)):(S=ra(r),S.c(),h(S,1),S.m(e.parentNode,e)):S&&(Ze(),w(S,1,1,()=>{S=null}),Je()),r[4]?V?(V.p(r,_),_[0]&16&&h(V,1)):(V=na(r),V.c(),h(V,1),V.m(b.parentNode,b)):V&&(Ze(),w(V,1,1,()=>{V=null}),Je()),r[5]?F?(F.p(r,_),_[0]&32&&h(F,1)):(F=ia(r),F.c(),h(F,1),F.m(N.parentNode,N)):F&&(Ze(),w(F,1,1,()=>{F=null}),Je()),_[0]&64&&sa(be,be=r[6])?(Ze(),w(te,1,1,Be),Je(),te=la(r),te.c(),h(te,1),te.m(M,null)):te.p(r,_);const ge={};_[0]&1&&(ge.data=r[0]),J.$set(ge);const lt={};_[0]&2&&(lt.data=r[1]),ee.$set(lt);const ce={};_[0]&4&&(ce.data=r[2]),je.$set(ce);const We={};_[0]&8&&(We.data=r[3]),Ie.$set(We);const Ne={};_[0]&16&&(Ne.data=r[4]),_[1]&2097152&&(Ne.$$scope={dirty:_,ctx:r}),Se.$set(Ne);const st={};_[0]&32&&(st.data=r[5]),Pe.$set(st)},i(r){_t||(h(T),h(R),h(A),h(S),h(V),h(F),h(te),h(J.$$.fragment,r),h(ee.$$.fragment,r),h(je.$$.fragment,r),h(Ie.$$.fragment,r),h(Xe.$$.fragment,r),h(Se.$$.fragment,r),h(Ke.$$.fragment,r),h(Pe.$$.fragment,r),_t=!0)},o(r){w(T),w(R),w(A),w(S),w(V),w(F),w(te),w(J.$$.fragment,r),w(ee.$$.fragment,r),w(je.$$.fragment,r),w(Ie.$$.fragment,r),w(Xe.$$.fragment,r),w(Se.$$.fragment,r),w(Ke.$$.fragment,r),w(Pe.$$.fragment,r),_t=!1},d(r){r&&(d(a),d(o),d(i),d(c),d(x),d(e),d(b),d(N),d(E),d(we),d(z),d(K),d(M),d(ke),d(B),d(ct),d(pe)),he&&he.d(r),it.d(r),d(n),d(t),ve&&ve.d(r),d(l),T&&T.d(r),R&&R.d(r),A&&A.d(r),S&&S.d(r),V&&V.d(r),F&&F.d(r),te.d(r),q(J),q(ee),q(je),q(Ie),q(Xe),q(Se),q(Ke),q(Pe),Pt=!1,da(Gt)}}}const k={title:"Operations & Catalog Analytics"};function Na(s,a,n){let t,l;Kt(s,Da,$=>n(34,t=$)),Kt(s,Zt,$=>n(42,l=$));let{data:o}=a,{data:i={},customFormattingSettings:c,__db:x,inputs:e}=o;_a(Zt,l="dcaa3d1cfc44106aedf7c7de69b52d92",l);let b=ba(ja(e));ua(b.subscribe($=>n(9,e=$))),ma(qa,{getCustomFormats:()=>c.customFormats||[]});const N=($,me)=>Ca(x.query,$,{query_name:me});ka(N),t.params,Wt(()=>!0);let E={initialData:void 0,initialError:void 0},P=re`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`,ne=`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`;i.kpi_active_projects_data&&(i.kpi_active_projects_data instanceof Error?E.initialError=i.kpi_active_projects_data:E.initialData=i.kpi_active_projects_data,i.kpi_active_projects_columns&&(E.knownColumns=i.kpi_active_projects_columns));let He,X=!1;const et=at.createReactive({callback:$=>{n(0,He=$)},execFn:N},{id:"kpi_active_projects",...E});et(ne,{noResolve:P,...E}),globalThis[Symbol.for("kpi_active_projects")]={get value(){return He}};let ie={initialData:void 0,initialError:void 0},H=re`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`,ye=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`;i.kpi_completion_rate_data&&(i.kpi_completion_rate_data instanceof Error?ie.initialError=i.kpi_completion_rate_data:ie.initialData=i.kpi_completion_rate_data,i.kpi_completion_rate_columns&&(ie.knownColumns=i.kpi_completion_rate_columns));let we,z=!1;const tt=at.createReactive({callback:$=>{n(1,we=$)},execFn:N},{id:"kpi_completion_rate",...ie});tt(ye,{noResolve:H,...ie}),globalThis[Symbol.for("kpi_completion_rate")]={get value(){return we}};let K={initialData:void 0,initialError:void 0},M=re`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`,be=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`;i.kpi_total_catalog_value_data&&(i.kpi_total_catalog_value_data instanceof Error?K.initialError=i.kpi_total_catalog_value_data:K.initialData=i.kpi_total_catalog_value_data,i.kpi_total_catalog_value_columns&&(K.knownColumns=i.kpi_total_catalog_value_columns));let ke,B=!1;const W=at.createReactive({callback:$=>{n(2,ke=$)},execFn:N},{id:"kpi_total_catalog_value",...K});W(be,{noResolve:M,...K}),globalThis[Symbol.for("kpi_total_catalog_value")]={get value(){return ke}};let Q={initialData:void 0,initialError:void 0},O=re`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`,xe=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`;i.kpi_total_variants_data&&(i.kpi_total_variants_data instanceof Error?Q.initialError=i.kpi_total_variants_data:Q.initialData=i.kpi_total_variants_data,i.kpi_total_variants_columns&&(Q.knownColumns=i.kpi_total_variants_columns));let Me,le=!1;const J=at.createReactive({callback:$=>{n(3,Me=$)},execFn:N},{id:"kpi_total_variants",...Q});J(xe,{noResolve:O,...Q}),globalThis[Symbol.for("kpi_total_variants")]={get value(){return Me}};let se={initialData:void 0,initialError:void 0},U=re`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
order by status asc, project_name asc`,qe=`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
order by status asc, project_name asc`;i.detailed_projects_data&&(i.detailed_projects_data instanceof Error?se.initialError=i.detailed_projects_data:se.initialData=i.detailed_projects_data,i.detailed_projects_columns&&(se.knownColumns=i.detailed_projects_columns));let Oe,Z=!1;const oe=at.createReactive({callback:$=>{n(4,Oe=$)},execFn:N},{id:"detailed_projects",...se});oe(qe,{noResolve:U,...se}),globalThis[Symbol.for("detailed_projects")]={get value(){return Oe}};let L={initialData:void 0,initialError:void 0},_e=re`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by average_price desc`,fe=`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by average_price desc`;i.vendor_matrix_data&&(i.vendor_matrix_data instanceof Error?L.initialError=i.vendor_matrix_data:L.initialData=i.vendor_matrix_data,i.vendor_matrix_columns&&(L.knownColumns=i.vendor_matrix_columns));let de,ee=!1;const Ue=at.createReactive({callback:$=>{n(5,de=$)},execFn:N},{id:"vendor_matrix",...L});Ue(fe,{noResolve:_e,...L}),globalThis[Symbol.for("vendor_matrix")]={get value(){return de}};let G="ytd";Wt(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),e){const $=t.url.searchParams.get("time_filter");n(9,e.time_filter=$||"ytd",e)}});const dt=()=>Bt(ot(`/?time_filter=${G}`)),nt=()=>Bt(ot(`/sales?time_filter=${G}`)),ue=()=>Bt(ot(`/operations?time_filter=${G}`));return s.$$set=$=>{"data"in $&&n(7,o=$.data)},s.$$.update=()=>{if(s.$$.dirty[0]&128&&n(8,{data:i={},customFormattingSettings:c,__db:x}=o,i),s.$$.dirty[0]&256&&xa.set(Object.keys(i).length>0),s.$$.dirty[1]&8&&t.params,s.$$.dirty[0]&512&&n(11,P=re`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&512&&n(12,ne=`select count(distinct project_id) as active_projects
from postgres.dim_projects
where is_active = true
  and created_at >= case
      when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
      when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
      when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
      else '1970-01-01'::date
  end
  and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&15360&&(P||!X?P||(et(ne,{noResolve:P,...E}),n(13,X=!0)):et(ne,{noResolve:P})),s.$$.dirty[0]&512&&n(15,H=re`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&512&&n(16,ye=`select
    coalesce(count(case when is_active = false then 1 end) * 1.0 / nullif(count(*), 0), 0) as completion_rate
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&245760&&(H||!z?H||(tt(ye,{noResolve:H,...ie}),n(17,z=!0)):tt(ye,{noResolve:H})),s.$$.dirty[0]&512&&n(19,M=re`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&512&&n(20,be=`select avg(price) as avg_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&3932160&&(M||!B?M||(W(be,{noResolve:M,...K}),n(21,B=!0)):W(be,{noResolve:M})),s.$$.dirty[0]&512&&n(23,O=re`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&512&&n(24,xe=`select count(*) as total_variants
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date`),s.$$.dirty[0]&62914560&&(O||!le?O||(J(xe,{noResolve:O,...Q}),n(25,le=!0)):J(xe,{noResolve:O})),s.$$.dirty[0]&512&&n(27,U=re`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
order by status asc, project_name asc`),s.$$.dirty[0]&512&&n(28,qe=`select
    project_number,
    project_name,
    company_name,
    case when is_active = true then '🟢 Active' else '⚪ Completed' end as status
from postgres.dim_projects
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
order by status asc, project_name asc`),s.$$.dirty[0]&1006632960&&(U||!Z?U||(oe(qe,{noResolve:U,...se}),n(29,Z=!0)):oe(qe,{noResolve:U})),s.$$.dirty[0]&512&&n(31,_e=re`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by average_price desc`),s.$$.dirty[0]&512&&n(32,fe=`select
    vendor,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-01'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-01'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-01'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-01'::date
group by all
order by average_price desc`),s.$$.dirty[0]&1073741824|s.$$.dirty[1]&7&&(_e||!ee?_e||(Ue(fe,{noResolve:_e,...L}),n(33,ee=!0)):Ue(fe,{noResolve:_e})),s.$$.dirty[0]&512&&n(6,G=(e==null?void 0:e.time_filter)||"ytd"),s.$$.dirty[0]&512&&e&&e.time_filter)try{const $=new URL(window.location.href);$.searchParams.get("time_filter")!==e.time_filter&&($.searchParams.set("time_filter",e.time_filter),window.history.replaceState(null,"",$.pathname+$.search))}catch{}},[He,we,ke,Me,Oe,de,G,o,i,e,E,P,ne,X,ie,H,ye,z,K,M,be,B,Q,O,xe,le,se,U,qe,Z,L,_e,fe,ee,t,dt,nt,ue]}class Ya extends ha{constructor(a){super(),va(this,a,Na,Pa,sa,{data:7},null,[-1,-1])}}export{Ya as component};
