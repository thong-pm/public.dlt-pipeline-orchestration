import{s as pn,J as Mn,t as mn,K as as,v as Ne,C as Pn,d as _,z as rs,w as fn,b as f,i as q,e as o,l as dn,k as y,F as ns,h as p,r as br,j as x,q as H,x as P,n as w,m as h,y as R,G as ss,H as ls,I as is,B as Rn}from"../chunks/scheduler.D2R_dV_V.js";import{S as Zn,i as es,d as j,t as b,a as g,c as Le,m as D,b as S,e as E,g as Ve}from"../chunks/index.CK0M6mEu.js";import{c as Ln,d as os,e as ds,V as be,C as cs,B as Vn,g as _s,Q as _t,a as us,f as ms,b as gr}from"../chunks/Value.BcMjlENc.js";import{o as fs,q as ps,g as hs,t as cn,u as vr,v as gs,w as vs,h as yr,D as ys,j as Ue,k as ws,l as bs,Q as ct,p as $s,m as _n,r as Nn,n as xs}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.-2r7t7de.js";import{w as ks,g as un}from"../chunks/entry.C-s9vE4I.js";import{h as le,p as Cs}from"../chunks/setTrackProxy.DjIbdjlZ.js";import{p as qs}from"../chunks/stores.2cn5uVrg.js";function js(n,e,t){let a,d,l,i,c,k,r,v,$,C,U,J,Te,Y,_e,Fe,je=Ne,$e=()=>(je(),je=Pn(a,m=>t(44,Fe=m)),a),tt,Ke=Ne,Ie=()=>(Ke(),Ke=Pn(d,m=>t(45,tt=m)),d),F;n.$$.on_destroy.push(()=>je()),n.$$.on_destroy.push(()=>Ke());let De=Mn(fs);mn(n,De,m=>t(46,F=m));let ie=Mn(ps);const{resolveColor:ge}=hs();let{y:L=void 0}=e;const Ct=!!L;let{y2:oe=void 0}=e;const de=!!oe;let{series:ue=void 0}=e;const at=!!ue;let{options:ve=void 0}=e,{name:ye=void 0}=e,{lineColor:Me=void 0}=e,{lineWidth:Se=2}=e,{lineType:Pe="solid"}=e,{lineOpacity:ze=void 0}=e,{markers:me=!1}=e,{markerShape:rt="circle"}=e,{markerSize:Ee=8}=e,{labels:V=!1}=e,{labelSize:fe=11}=e,{labelPosition:pe="top"}=e,{labelColor:nt=void 0}=e,{labelFmt:Je=void 0}=e,N;Je&&(N=cn(Je));let{yLabelFmt:M=void 0}=e,O;M&&(O=cn(M));let{y2LabelFmt:He=void 0}=e,G;He&&(G=cn(He));let{y2SeriesType:z=void 0}=e,{showAllLabels:he=!1}=e,{handleMissing:I="gap"}=e,{step:B=!1}=e,{stepPosition:we="end"}=e,{seriesOrder:Ae=void 0}=e,{seriesLabelFmt:st=void 0}=e;const Oe={above:"top",below:"bottom",middle:"inside"},xe={above:"right",below:"left",middle:"inside"};let ke=c?"right":"top";return as(()=>{ie.update(m=>{if(c)m.yAxis={...m.yAxis,..._e.xAxis},m.xAxis={...m.xAxis,..._e.yAxis};else if(m.yAxis[0]={...m.yAxis[0],..._e.yAxis},m.xAxis={...m.xAxis,..._e.xAxis},oe&&(m.yAxis[1]={...m.yAxis[1],show:!0},["line","bar","scatter"].includes(z)))for(let ce=0;ce<$;ce++)m.series[v+ce].type=z;return V&&(m.axisPointer={triggerEmphasis:!1}),m})}),n.$$set=m=>{"y"in m&&t(3,L=m.y),"y2"in m&&t(4,oe=m.y2),"series"in m&&t(5,ue=m.series),"options"in m&&t(12,ve=m.options),"name"in m&&t(6,ye=m.name),"lineColor"in m&&t(13,Me=m.lineColor),"lineWidth"in m&&t(14,Se=m.lineWidth),"lineType"in m&&t(15,Pe=m.lineType),"lineOpacity"in m&&t(16,ze=m.lineOpacity),"markers"in m&&t(7,me=m.markers),"markerShape"in m&&t(17,rt=m.markerShape),"markerSize"in m&&t(18,Ee=m.markerSize),"labels"in m&&t(8,V=m.labels),"labelSize"in m&&t(19,fe=m.labelSize),"labelPosition"in m&&t(9,pe=m.labelPosition),"labelColor"in m&&t(20,nt=m.labelColor),"labelFmt"in m&&t(21,Je=m.labelFmt),"yLabelFmt"in m&&t(22,M=m.yLabelFmt),"y2LabelFmt"in m&&t(23,He=m.y2LabelFmt),"y2SeriesType"in m&&t(24,z=m.y2SeriesType),"showAllLabels"in m&&t(10,he=m.showAllLabels),"handleMissing"in m&&t(25,I=m.handleMissing),"step"in m&&t(11,B=m.step),"stepPosition"in m&&t(26,we=m.stepPosition),"seriesOrder"in m&&t(27,Ae=m.seriesOrder),"seriesLabelFmt"in m&&t(28,st=m.seriesLabelFmt)},n.$$.update=()=>{if(n.$$.dirty[0]&8192&&$e(t(1,a=ge(Me))),n.$$.dirty[0]&128&&t(7,me=vr(me)),n.$$.dirty[0]&256&&t(8,V=vr(V)),n.$$.dirty[0]&1048576&&Ie(t(0,d=ge(nt))),n.$$.dirty[0]&1024&&t(10,he=vr(he)),n.$$.dirty[0]&2048&&t(11,B=vr(B)),n.$$.dirty[1]&32768&&t(41,l=F.data),n.$$.dirty[1]&32768&&t(40,i=F.x),n.$$.dirty[0]&8|n.$$.dirty[1]&32768&&t(3,L=Ct?L:F.y),n.$$.dirty[0]&16|n.$$.dirty[1]&32768&&t(4,oe=de?oe:F.y2),n.$$.dirty[1]&32768&&t(34,c=F.swapXY),n.$$.dirty[1]&32768&&t(43,k=F.yFormat),n.$$.dirty[1]&32768&&t(42,r=F.y2Format),n.$$.dirty[1]&32768&&t(32,v=F.yCount),n.$$.dirty[1]&32768&&t(33,$=F.y2Count),n.$$.dirty[1]&32768&&t(35,C=F.xType),n.$$.dirty[1]&32768&&t(38,U=F.xMismatch),n.$$.dirty[1]&32768&&t(37,J=F.columnSummary),n.$$.dirty[0]&32|n.$$.dirty[1]&32768&&t(5,ue=at?ue:F.series),n.$$.dirty[0]&104|n.$$.dirty[1]&1600)if(!ue&&typeof L!="object")t(6,ye=ye??gs(L,J[L].title));else try{t(41,l=Ln(l,i,L,ue))}catch(m){console.warn("Failed to complete data",{e:m}),t(41,l=[])}if(n.$$.dirty[0]&33554472|n.$$.dirty[1]&1536&&I==="zero")try{t(41,l=Ln(l,i,L,ue,!0))}catch(m){console.warn("Failed to complete data",{e:m}),t(41,l=[])}n.$$.dirty[0]&512|n.$$.dirty[1]&8&&t(9,pe=(c?xe[pe]:Oe[pe])??ke),n.$$.dirty[0]&1712312192|n.$$.dirty[1]&30735&&t(39,Te={type:"line",label:{show:V,formatter(m){return m.value[c?0:1]===0?"":vs(m.value[c?0:1],[O??N??k,G??N??r][os(m.componentIndex,v,$)])},fontSize:fe,color:tt,position:pe,padding:3},labelLayout:{hideOverlap:!he},connectNulls:I==="connect",emphasis:{focus:"series",endLabel:{show:!1},lineStyle:{opacity:1,width:3}},lineStyle:{width:parseInt(Se),type:Pe,opacity:ze},itemStyle:{color:Fe,opacity:ze},showSymbol:V||me,symbol:rt,symbolSize:V&&!me?0:Ee,step:B?we:!1}),n.$$.dirty[0]&402653304|n.$$.dirty[1]&1992&&t(36,Y=ds(l,i,L,ue,c,Te,ye,U,J,Ae,void 0,void 0,oe,st)),n.$$.dirty[1]&32&&ie.update(m=>(m.series.push(...Y),m.legend.data.push(...Y.map(ce=>ce.name.toString())),m)),n.$$.dirty[0]&4096&&ve&&ie.update(m=>({...m,...ve})),n.$$.dirty[1]&16&&(_e={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:[C==="time"?"2%":"0%","2%"]}})},[d,a,De,L,oe,ue,ye,me,V,pe,he,B,ve,Me,Se,Pe,ze,rt,Ee,fe,nt,Je,M,He,z,I,we,Ae,st,N,O,G,v,$,c,C,Y,J,U,Te,i,l,r,k,Fe,tt,F]}class Ds extends Zn{constructor(e){super(),es(this,e,js,null,pn,{y:3,y2:4,series:5,options:12,name:6,lineColor:13,lineWidth:14,lineType:15,lineOpacity:16,markers:7,markerShape:17,markerSize:18,labels:8,labelSize:19,labelPosition:9,labelColor:20,labelFmt:21,yLabelFmt:22,y2LabelFmt:23,y2SeriesType:24,showAllLabels:10,handleMissing:25,step:11,stepPosition:26,seriesOrder:27,seriesLabelFmt:28},null,[-1,-1])}}const{document:kt}=_s;function Ss(n){let e,t=T.title+"",a;return{c(){e=h("h1"),a=R(t),this.h()},l(d){e=p(d,"H1",{class:!0});var l=x(e);a=P(l,t),l.forEach(_),this.h()},h(){f(e,"class","title")},m(d,l){q(d,e,l),o(e,a)},p:Ne,d(d){d&&_(e)}}}function Es(n){return{c(){this.h()},l(e){this.h()},h(){kt.title="Evidence"},m:Ne,p:Ne,d:Ne}}function As(n){let e,t,a,d,l;return kt.title=e=T.title,{c(){t=w(),a=h("meta"),d=w(),l=h("meta"),this.h()},l(i){t=y(i),a=p(i,"META",{property:!0,content:!0}),d=y(i),l=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,c;f(a,"property","og:title"),f(a,"content",((i=T.og)==null?void 0:i.title)??T.title),f(l,"name","twitter:title"),f(l,"content",((c=T.og)==null?void 0:c.title)??T.title)},m(i,c){q(i,t,c),q(i,a,c),q(i,d,c),q(i,l,c)},p(i,c){c&0&&e!==(e=T.title)&&(kt.title=e)},d(i){i&&(_(t),_(a),_(d),_(l))}}}function Ts(n){var l,i;let e,t,a=(T.description||((l=T.og)==null?void 0:l.description))&&Fs(),d=((i=T.og)==null?void 0:i.image)&&Is();return{c(){a&&a.c(),e=w(),d&&d.c(),t=br()},l(c){a&&a.l(c),e=y(c),d&&d.l(c),t=br()},m(c,k){a&&a.m(c,k),q(c,e,k),d&&d.m(c,k),q(c,t,k)},p(c,k){var r,v;(T.description||(r=T.og)!=null&&r.description)&&a.p(c,k),(v=T.og)!=null&&v.image&&d.p(c,k)},d(c){c&&(_(e),_(t)),a&&a.d(c),d&&d.d(c)}}}function Fs(n){let e,t,a,d,l;return{c(){e=h("meta"),t=w(),a=h("meta"),d=w(),l=h("meta"),this.h()},l(i){e=p(i,"META",{name:!0,content:!0}),t=y(i),a=p(i,"META",{property:!0,content:!0}),d=y(i),l=p(i,"META",{name:!0,content:!0}),this.h()},h(){var i,c,k;f(e,"name","description"),f(e,"content",T.description??((i=T.og)==null?void 0:i.description)),f(a,"property","og:description"),f(a,"content",((c=T.og)==null?void 0:c.description)??T.description),f(l,"name","twitter:description"),f(l,"content",((k=T.og)==null?void 0:k.description)??T.description)},m(i,c){q(i,e,c),q(i,t,c),q(i,a,c),q(i,d,c),q(i,l,c)},p:Ne,d(i){i&&(_(e),_(t),_(a),_(d),_(l))}}}function Is(n){let e,t,a;return{c(){e=h("meta"),t=w(),a=h("meta"),this.h()},l(d){e=p(d,"META",{property:!0,content:!0}),t=y(d),a=p(d,"META",{name:!0,content:!0}),this.h()},h(){var d,l;f(e,"property","og:image"),f(e,"content",Ue((d=T.og)==null?void 0:d.image)),f(a,"name","twitter:image"),f(a,"content",Ue((l=T.og)==null?void 0:l.image))},m(d,l){q(d,e,l),q(d,t,l),q(d,a,l)},p:Ne,d(d){d&&(_(e),_(t),_(a))}}}function Hn(n){let e,t;return e=new _t({props:{queryID:"delivery_lag",queryResult:n[1]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&2&&(l.queryResult=a[1]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function On(n){let e,t;return e=new _t({props:{queryID:"pipeline_coverage",queryResult:n[2]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&4&&(l.queryResult=a[2]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Bn(n){let e,t;return e=new _t({props:{queryID:"kpi_revenue",queryResult:n[3]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&8&&(l.queryResult=a[3]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Un(n){let e,t;return e=new _t({props:{queryID:"kpi_pipeline",queryResult:n[4]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&16&&(l.queryResult=a[4]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function zn(n){let e,t;return e=new _t({props:{queryID:"kpi_projects_metrics",queryResult:n[5]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&32&&(l.queryResult=a[5]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Jn(n){let e,t;return e=new _t({props:{queryID:"kpi_products_metrics",queryResult:n[6]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&64&&(l.queryResult=a[6]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Yn(n){let e,t;return e=new _t({props:{queryID:"revenue_bookings_billing",queryResult:n[7]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&128&&(l.queryResult=a[7]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Gn(n){let e,t;return e=new _t({props:{queryID:"pipeline_funnel",queryResult:n[8]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&256&&(l.queryResult=a[8]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Wn(n){let e,t;return e=new _t({props:{queryID:"project_summary",queryResult:n[9]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&512&&(l.queryResult=a[9]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Kn(n){let e,t;return e=new _t({props:{queryID:"catalog_summary",queryResult:n[10]}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&1024&&(l.queryResult=a[10]),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Ms(n){let e,t,a,d,l,i,c,k;return e=new gr({props:{valueLabel:"MTD",value:"mtd",default:n[0]==="mtd"}}),a=new gr({props:{valueLabel:"QTD",value:"qtd",default:n[0]==="qtd"}}),l=new gr({props:{valueLabel:"YTD",value:"ytd",default:n[0]==="ytd"}}),c=new gr({props:{valueLabel:"All Time",value:"all",default:n[0]==="all"}}),{c(){E(e.$$.fragment),t=w(),E(a.$$.fragment),d=w(),E(l.$$.fragment),i=w(),E(c.$$.fragment)},l(r){S(e.$$.fragment,r),t=y(r),S(a.$$.fragment,r),d=y(r),S(l.$$.fragment,r),i=y(r),S(c.$$.fragment,r)},m(r,v){D(e,r,v),q(r,t,v),D(a,r,v),q(r,d,v),D(l,r,v),q(r,i,v),D(c,r,v),k=!0},p(r,v){const $={};v[0]&1&&($.default=r[0]==="mtd"),e.$set($);const C={};v[0]&1&&(C.default=r[0]==="qtd"),a.$set(C);const U={};v[0]&1&&(U.default=r[0]==="ytd"),l.$set(U);const J={};v[0]&1&&(J.default=r[0]==="all"),c.$set(J)},i(r){k||(g(e.$$.fragment,r),g(a.$$.fragment,r),g(l.$$.fragment,r),g(c.$$.fragment,r),k=!0)},o(r){b(e.$$.fragment,r),b(a.$$.fragment,r),b(l.$$.fragment,r),b(c.$$.fragment,r),k=!1},d(r){r&&(_(t),_(d),_(i)),j(e,r),j(a,r),j(l,r),j(c,r)}}}function Xn(n){let e,t;return e=new us({props:{name:"time_filter",defaultValue:n[0],$$slots:{default:[Ms]},$$scope:{ctx:n}}}),{c(){E(e.$$.fragment)},l(a){S(e.$$.fragment,a)},m(a,d){D(e,a,d),t=!0},p(a,d){const l={};d[0]&1&&(l.defaultValue=a[0]),d[0]&1|d[2]&65536&&(l.$$scope={dirty:d,ctx:a}),e.$set(l)},i(a){t||(g(e.$$.fragment,a),t=!0)},o(a){b(e.$$.fragment,a),t=!1},d(a){j(e,a)}}}function Ps(n){let e,t,a="✦",d,l,i,c,k,r;return c=new be({props:{data:n[2],column:"coverage_ratio",fmt:"0.0"}}),{c(){e=h("div"),t=h("span"),t.textContent=a,d=w(),l=h("span"),i=R("Pipeline Coverage is healthy ("),E(c.$$.fragment),k=R("x)"),this.h()},l(v){e=p(v,"DIV",{class:!0});var $=x(e);t=p($,"SPAN",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-i2y69v"&&(t.textContent=a),d=y($),l=p($,"SPAN",{});var C=x(l);i=P(C,"Pipeline Coverage is healthy ("),S(c.$$.fragment,C),k=P(C,"x)"),C.forEach(_),$.forEach(_),this.h()},h(){f(t,"class","text-teal-600 font-bold"),f(e,"class","flex items-start gap-1")},m(v,$){q(v,e,$),o(e,t),o(e,d),o(e,l),o(l,i),D(c,l,null),o(l,k),r=!0},p(v,$){const C={};$[0]&4&&(C.data=v[2]),c.$set(C)},i(v){r||(g(c.$$.fragment,v),r=!0)},o(v){b(c.$$.fragment,v),r=!1},d(v){v&&_(e),j(c)}}}function Rs(n){let e,t,a="✦",d,l,i,c,k,r;return c=new be({props:{data:n[2],column:"coverage_ratio",fmt:"0.0"}}),{c(){e=h("div"),t=h("span"),t.textContent=a,d=w(),l=h("span"),i=R("Pipeline Coverage is low ("),E(c.$$.fragment),k=R("x vs 3.0x target)"),this.h()},l(v){e=p(v,"DIV",{class:!0});var $=x(e);t=p($,"SPAN",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-16athnc"&&(t.textContent=a),d=y($),l=p($,"SPAN",{});var C=x(l);i=P(C,"Pipeline Coverage is low ("),S(c.$$.fragment,C),k=P(C,"x vs 3.0x target)"),C.forEach(_),$.forEach(_),this.h()},h(){f(t,"class","text-amber-600 font-bold"),f(e,"class","flex items-start gap-1")},m(v,$){q(v,e,$),o(e,t),o(e,d),o(e,l),o(l,i),D(c,l,null),o(l,k),r=!0},p(v,$){const C={};$[0]&4&&(C.data=v[2]),c.$set(C)},i(v){r||(g(c.$$.fragment,v),r=!0)},o(v){b(c.$$.fragment,v),r=!1},d(v){v&&_(e),j(c)}}}function Ls(n){let e,t='<span class="text-teal-600 font-bold">✦</span> <span>Billing delivery lag is on track</span>';return{c(){e=h("div"),e.innerHTML=t,this.h()},l(a){e=p(a,"DIV",{class:!0,"data-svelte-h":!0}),H(e)!=="svelte-r4bc2h"&&(e.innerHTML=t),this.h()},h(){f(e,"class","flex items-start gap-1")},m(a,d){q(a,e,d)},p:Ne,i:Ne,o:Ne,d(a){a&&_(e)}}}function Vs(n){let e,t,a="✦",d,l,i,c,k,r;return c=new be({props:{data:n[1],column:"avg_lag_days",fmt:"num0"}}),{c(){e=h("div"),t=h("span"),t.textContent=a,d=w(),l=h("span"),i=R("Billing delivery lag is "),E(c.$$.fragment),k=R(" days"),this.h()},l(v){e=p(v,"DIV",{class:!0});var $=x(e);t=p($,"SPAN",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-16athnc"&&(t.textContent=a),d=y($),l=p($,"SPAN",{});var C=x(l);i=P(C,"Billing delivery lag is "),S(c.$$.fragment,C),k=P(C," days"),C.forEach(_),$.forEach(_),this.h()},h(){f(t,"class","text-amber-600 font-bold"),f(e,"class","flex items-start gap-1")},m(v,$){q(v,e,$),o(e,t),o(e,d),o(e,l),o(l,i),D(c,l,null),o(l,k),r=!0},p(v,$){const C={};$[0]&2&&(C.data=v[1]),c.$set(C)},i(v){r||(g(c.$$.fragment,v),r=!0)},o(v){b(c.$$.fragment,v),r=!1},d(v){v&&_(e),j(c)}}}function Qn(n){let e,t=n[3][0].pct_change>=0?"↑":"↓",a,d,l,i,c=n[3][0].trend_label+"",k,r;return l=new be({props:{data:n[3],column:"pct_change",fmt:"pct0"}}),{c(){e=h("span"),a=R(t),d=w(),E(l.$$.fragment),i=w(),k=R(c),this.h()},l(v){e=p(v,"SPAN",{class:!0});var $=x(e);a=P($,t),d=y($),S(l.$$.fragment,$),i=y($),k=P($,c),$.forEach(_),this.h()},h(){f(e,"class","text-[8px] font-bold px-1.5 py-0.2 rounded bg-teal-50 text-[#1D5F60] border border-teal-100")},m(v,$){q(v,e,$),o(e,a),o(e,d),D(l,e,null),o(e,i),o(e,k),r=!0},p(v,$){(!r||$[0]&8)&&t!==(t=v[3][0].pct_change>=0?"↑":"↓")&&fn(a,t);const C={};$[0]&8&&(C.data=v[3]),l.$set(C),(!r||$[0]&8)&&c!==(c=v[3][0].trend_label+"")&&fn(k,c)},i(v){r||(g(l.$$.fragment,v),r=!0)},o(v){b(l.$$.fragment,v),r=!1},d(v){v&&_(e),j(l)}}}function Ns(n){let e,t,a,d;return e=new ms({props:{y:"billed_revenue",name:"Billed Cash Flow (Xero)"}}),a=new Ds({props:{y:"booked_revenue",name:"Booked Contracts (HubSpot)"}}),{c(){E(e.$$.fragment),t=w(),E(a.$$.fragment)},l(l){S(e.$$.fragment,l),t=y(l),S(a.$$.fragment,l)},m(l,i){D(e,l,i),q(l,t,i),D(a,l,i),d=!0},p:Ne,i(l){d||(g(e.$$.fragment,l),g(a.$$.fragment,l),d=!0)},o(l){b(e.$$.fragment,l),b(a.$$.fragment,l),d=!1},d(l){l&&_(t),j(e,l),j(a,l)}}}function Hs(n){let e,t,a,d,l,i;return e=new _n({props:{id:"vendor",label:"Vendor Brand"}}),a=new _n({props:{id:"total_variants",label:"Variants Count",align:"right",contentType:"bar",barColor:"#7B8DA6"}}),l=new _n({props:{id:"average_price",label:"Average Price",align:"right",fmt:"usd",contentType:"bar",barColor:"#7B8DA6"}}),{c(){E(e.$$.fragment),t=w(),E(a.$$.fragment),d=w(),E(l.$$.fragment)},l(c){S(e.$$.fragment,c),t=y(c),S(a.$$.fragment,c),d=y(c),S(l.$$.fragment,c)},m(c,k){D(e,c,k),q(c,t,k),D(a,c,k),q(c,d,k),D(l,c,k),i=!0},p:Ne,i(c){i||(g(e.$$.fragment,c),g(a.$$.fragment,c),g(l.$$.fragment,c),i=!0)},o(c){b(e.$$.fragment,c),b(a.$$.fragment,c),b(l.$$.fragment,c),i=!1},d(c){c&&(_(t),_(d)),j(e,c),j(a,c),j(l,c)}}}function Os(n){var An,Tn;let e,t,a,d,l,i,c,k,r,v,$,C,U,J,Te,Y,_e,Fe="Overview Cockpit",je,$e,tt="Sales & Win-Loss",Ke,Ie,F="Operations & Vendors",De,ie,ge,L,Ct="Business Performance Cockpit",oe,de,ue=n[0],at,ve,ye,Me="📅",Se,Pe,ze,me,rt="Date snapshotted at June 2026",Ee,V,fe,pe,nt="<span>💡</span> Operational Insights",Je,N,M,O,He,G,z,he,I,B,we,Ae,st='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total Billed Revenue</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',Oe,xe,ke,m,ce,Xe,Qe,Ce,ut,ra,na,Ye,Be,Oa="Actual invoices billed via Xero",Ba,lt,Ua,it,A,qt,sa,Ze,Ge,mt,hn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Active Pipeline Value</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>',$r,Ma,jt,xr,Dt,la,kr,St,Cr,qr,ia,jr,Et,Dr,At,Pa,gn="Open opportunities in HubSpot CRM",Sr,Tt,Er,Ft,Ar,Ga,Tr,ot,ft,oa,vn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Active Projects</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',Fr,Ra,It,Ir,Mt,da,Mr,Pt,Pr,Rr,ca,Lr,Rt,Vr,_a,yn="<span>Ongoing jobs managed in Procore</span>",Wa,Nr,dt,pt,ua,wn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Shopify Products</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>',Hr,La,Lt,Or,Vt,ma,Br,Nt,Ur,zr,fa,Jr,Ht,Yr,pa,bn="<span>Unique items in active catalog</span>",Ka,Xa,ht,Ot,Bt,ha,$n="Monthly Cash Flow Billed vs. Booked Contracts",Gr,ga,Wr,Ut,Kr,zt,Jt,va,xn="Sales Outcomes (Won vs. Lost)",Xr,ya,Qr,Yt,Qa,gt,Gt,Wt,wa,kn="Procore Project Portfolio Status",Zr,ba,en,Kt,tn,Xt,Qt,$a,Cn="Shopify Product Catalog Summary",an,xa,rn,Zt,vt,nn,qn,yt=typeof T<"u"&&T.title&&T.hide_title!==!0&&Ss();function ts(s,u){return typeof T<"u"&&T.title?As:Es}let za=ts()(n),wt=typeof T=="object"&&Ts(),W=n[1]&&Hn(n),K=n[2]&&On(n),X=n[3]&&Bn(n),Q=n[4]&&Un(n),Z=n[5]&&zn(n),ee=n[6]&&Jn(n),te=n[7]&&Yn(n),ae=n[8]&&Gn(n),re=n[9]&&Wn(n),ne=n[10]&&Kn(n),We=Xn(n);const jn=[Rs,Ps],ea=[];function Dn(s,u){var qe,Re;return(qe=s[2][0])!=null&&qe.coverage_ratio&&((Re=s[2][0])==null?void 0:Re.coverage_ratio)<3?0:1}M=Dn(n),O=ea[M]=jn[M](n);const Sn=[Vs,Ls],ta=[];function En(s,u){var qe,Re;return(qe=s[1][0])!=null&&qe.avg_lag_days&&((Re=s[1][0])==null?void 0:Re.avg_lag_days)>2?0:1}G=En(n),z=ta[G]=Sn[G](n),ke=new be({props:{data:n[3],column:"total_revenue",fmt:"usd"}}),Ce=new be({props:{data:n[3],column:"target_progress",fmt:"pct0"}});let se=((An=n[3][0])==null?void 0:An.pct_change)!==null&&((Tn=n[3][0])==null?void 0:Tn.pct_change)!==void 0&&Qn(n);return it=new be({props:{data:n[1],column:"avg_lag_days",fmt:"num0"}}),jt=new be({props:{data:n[4],column:"pipeline_value",fmt:"usd"}}),St=new be({props:{data:n[4],column:"target_progress",fmt:"pct0"}}),Et=new be({props:{data:n[4],column:"weighted_value",fmt:"usd0"}}),Ft=new be({props:{data:n[2],column:"coverage_ratio",fmt:"0.0"}}),It=new be({props:{data:n[5],column:"total_projects"}}),Pt=new be({props:{data:n[5],column:"completed_projects"}}),Rt=new be({props:{data:n[5],column:"completion_rate",fmt:"pct0"}}),Lt=new be({props:{data:n[6],column:"total_products"}}),Nt=new be({props:{data:n[6],column:"total_variants"}}),Ht=new be({props:{data:n[6],column:"average_price",fmt:"usd"}}),ga=new yr({props:{description:"Compares actual invoices sent in Xero (realized cash flow) against contracts signed in HubSpot (committed bookings) to track operational delivery speed."}}),Ut=new cs({props:{data:n[7],x:"month_date",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",colorPalette:["#1D5F60","#7B8DA6"],height:175,legend:"true",echartsOptions:{grid:{top:35,bottom:35,left:40,right:15},xAxis:{type:"time",axisLabel:{formatter:n[59]}},yAxis:{splitNumber:3,axisLabel:{formatter:zs}}},$$slots:{default:[Ns]},$$scope:{ctx:n}}}),ya=new yr({props:{description:"Displays the total value of closed won and closed lost opportunities in HubSpot CRM for the selected time filter."}}),Yt=new Vn({props:{data:n[8],x:"deal_stage",y:"pipeline_value",swapXY:"true",fillOpacity:"0.9",yFmt:"[>=1000000]$#,##0.00,,\\M;[>=1000]$#,##0.00,\\K;$#,##0",labels:!0,labelFmt:"[>=1000000]$#,##0,,\\M;[>=1000]$#,##0,\\K;$#,##0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],sort:"false",height:175,echartsOptions:{grid:{top:25,bottom:10,left:40,right:45},xAxis:{splitNumber:3,axisLabel:{formatter:Js},offset:10},series:[{itemStyle:{color:Ys}}]}}}),ba=new yr({props:{description:"Tracks the count of active versus completed projects for each client corporate parent group managed in Procore."}}),Kt=new Vn({props:{data:n[9],x:"company_name",y:"project_count",series:"project_status",swapXY:"true",fillOpacity:"0.9",labels:!0,labelColor:"#FFFFFF",labelPosition:"inside",colorPalette:["#264773","#7B8DA6"],seriesOrder:["Active","Completed"],height:175,legend:"true",echartsOptions:{xAxis:{minInterval:1,splitNumber:3},grid:{top:35,bottom:25,left:40,right:30}}}}),xa=new yr({props:{description:"Computes the average catalog price of all product variants registered under each Shopify vendor brand."}}),Zt=new ys({props:{data:n[10],search:!1,rows:5,rowNumbers:!1,$$slots:{default:[Hs]},$$scope:{ctx:n}}}),{c(){yt&&yt.c(),e=w(),za.c(),t=h("meta"),a=h("meta"),wt&&wt.c(),d=br(),l=w(),W&&W.c(),i=w(),K&&K.c(),c=w(),X&&X.c(),k=w(),Q&&Q.c(),r=w(),Z&&Z.c(),v=w(),ee&&ee.c(),$=w(),te&&te.c(),C=w(),ae&&ae.c(),U=w(),re&&re.c(),J=w(),ne&&ne.c(),Te=w(),Y=h("div"),_e=h("button"),_e.textContent=Fe,je=w(),$e=h("button"),$e.textContent=tt,Ke=w(),Ie=h("button"),Ie.textContent=F,De=w(),ie=h("div"),ge=h("div"),L=h("div"),L.textContent=Ct,oe=w(),de=h("div"),We.c(),at=w(),ve=h("div"),ye=h("span"),ye.textContent=Me,Se=w(),Pe=R(n[11]),ze=w(),me=h("div"),me.textContent=rt,Ee=w(),V=h("div"),fe=h("div"),pe=h("div"),pe.innerHTML=nt,Je=w(),N=h("div"),O.c(),He=w(),z.c(),he=w(),I=h("div"),B=h("a"),we=h("div"),Ae=h("div"),Ae.innerHTML=st,Oe=w(),xe=h("h2"),E(ke.$$.fragment),m=w(),ce=h("div"),Xe=h("span"),Qe=R("🎯 "),E(Ce.$$.fragment),ut=R(" of Target ($1.0M)"),ra=w(),se&&se.c(),na=w(),Ye=h("div"),Be=h("span"),Be.textContent=Oa,Ba=w(),lt=h("span"),Ua=R("⚡ "),E(it.$$.fragment),A=R("d Lag"),sa=w(),Ze=h("a"),Ge=h("div"),mt=h("div"),mt.innerHTML=hn,$r=w(),Ma=h("h2"),E(jt.$$.fragment),xr=w(),Dt=h("div"),la=h("span"),kr=R("🎯 "),E(St.$$.fragment),Cr=R(" of Target ($750K)"),qr=w(),ia=h("span"),jr=R("💼 Weighted: "),E(Et.$$.fragment),Dr=w(),At=h("div"),Pa=h("span"),Pa.textContent=gn,Sr=w(),Tt=h("span"),Er=R("📊 "),E(Ft.$$.fragment),Ar=R("x Cover"),Tr=w(),ot=h("a"),ft=h("div"),oa=h("div"),oa.innerHTML=vn,Fr=w(),Ra=h("h2"),E(It.$$.fragment),Ir=w(),Mt=h("div"),da=h("span"),Mr=R("✅ "),E(Pt.$$.fragment),Pr=R(" Completed (YTD)"),Rr=w(),ca=h("span"),Lr=R("Ratio: "),E(Rt.$$.fragment),Vr=w(),_a=h("div"),_a.innerHTML=yn,Nr=w(),dt=h("a"),pt=h("div"),ua=h("div"),ua.innerHTML=wn,Hr=w(),La=h("h2"),E(Lt.$$.fragment),Or=w(),Vt=h("div"),ma=h("span"),Br=R("📦 "),E(Nt.$$.fragment),Ur=R(" Variants"),zr=w(),fa=h("span"),Jr=R("Avg Price: "),E(Ht.$$.fragment),Yr=w(),pa=h("div"),pa.innerHTML=bn,Xa=w(),ht=h("div"),Ot=h("div"),Bt=h("div"),ha=h("span"),ha.textContent=$n,Gr=w(),E(ga.$$.fragment),Wr=w(),E(Ut.$$.fragment),Kr=w(),zt=h("div"),Jt=h("div"),va=h("span"),va.textContent=xn,Xr=w(),E(ya.$$.fragment),Qr=w(),E(Yt.$$.fragment),Qa=w(),gt=h("div"),Gt=h("div"),Wt=h("div"),wa=h("span"),wa.textContent=kn,Zr=w(),E(ba.$$.fragment),en=w(),E(Kt.$$.fragment),tn=w(),Xt=h("div"),Qt=h("div"),$a=h("span"),$a.textContent=Cn,an=w(),E(xa.$$.fragment),rn=w(),E(Zt.$$.fragment),this.h()},l(s){yt&&yt.l(s),e=y(s);const u=ns("svelte-2igo1p",kt.head);za.l(u),t=p(u,"META",{name:!0,content:!0}),a=p(u,"META",{name:!0,content:!0}),wt&&wt.l(u),d=br(),u.forEach(_),l=y(s),W&&W.l(s),i=y(s),K&&K.l(s),c=y(s),X&&X.l(s),k=y(s),Q&&Q.l(s),r=y(s),Z&&Z.l(s),v=y(s),ee&&ee.l(s),$=y(s),te&&te.l(s),C=y(s),ae&&ae.l(s),U=y(s),re&&re.l(s),J=y(s),ne&&ne.l(s),Te=y(s),Y=p(s,"DIV",{class:!0});var qe=x(Y);_e=p(qe,"BUTTON",{class:!0,"data-svelte-h":!0}),H(_e)!=="svelte-1n5lix1"&&(_e.textContent=Fe),je=y(qe),$e=p(qe,"BUTTON",{class:!0,"data-svelte-h":!0}),H($e)!=="svelte-1l9tmjn"&&($e.textContent=tt),Ke=y(qe),Ie=p(qe,"BUTTON",{class:!0,"data-svelte-h":!0}),H(Ie)!=="svelte-19h1sxa"&&(Ie.textContent=F),qe.forEach(_),De=y(s),ie=p(s,"DIV",{class:!0});var Re=x(ie);ge=p(Re,"DIV",{class:!0});var bt=x(ge);L=p(bt,"DIV",{class:!0,"data-svelte-h":!0}),H(L)!=="svelte-16u20cg"&&(L.textContent=Ct),oe=y(bt),de=p(bt,"DIV",{class:!0});var ka=x(de);We.l(ka),at=y(ka),ve=p(ka,"DIV",{class:!0});var Ca=x(ve);ye=p(Ca,"SPAN",{class:!0,"data-svelte-h":!0}),H(ye)!=="svelte-n1bzfj"&&(ye.textContent=Me),Se=y(Ca),Pe=P(Ca,n[11]),Ca.forEach(_),ka.forEach(_),ze=y(bt),me=p(bt,"DIV",{class:!0,"data-svelte-h":!0}),H(me)!=="svelte-1vz1e2m"&&(me.textContent=rt),bt.forEach(_),Ee=y(Re),V=p(Re,"DIV",{class:!0});var Ja=x(V);fe=p(Ja,"DIV",{class:!0});var qa=x(fe);pe=p(qa,"DIV",{class:!0,"data-svelte-h":!0}),H(pe)!=="svelte-18drqt"&&(pe.innerHTML=nt),Je=y(qa),N=p(qa,"DIV",{class:!0});var ja=x(N);O.l(ja),He=y(ja),z.l(ja),ja.forEach(_),qa.forEach(_),Ja.forEach(_),Re.forEach(_),he=y(s),I=p(s,"DIV",{class:!0});var et=x(I);B=p(et,"A",{href:!0,class:!0});var Da=x(B);we=p(Da,"DIV",{});var $t=x(we);Ae=p($t,"DIV",{class:!0,"data-svelte-h":!0}),H(Ae)!=="svelte-unlelm"&&(Ae.innerHTML=st),Oe=y($t),xe=p($t,"H2",{class:!0});var Ya=x(xe);S(ke.$$.fragment,Ya),Ya.forEach(_),m=y($t),ce=p($t,"DIV",{class:!0});var Sa=x(ce);Xe=p(Sa,"SPAN",{});var Ea=x(Xe);Qe=P(Ea,"🎯 "),S(Ce.$$.fragment,Ea),ut=P(Ea," of Target ($1.0M)"),Ea.forEach(_),ra=y(Sa),se&&se.l(Sa),Sa.forEach(_),$t.forEach(_),na=y(Da),Ye=p(Da,"DIV",{class:!0});var Aa=x(Ye);Be=p(Aa,"SPAN",{"data-svelte-h":!0}),H(Be)!=="svelte-xdszx8"&&(Be.textContent=Oa),Ba=y(Aa),lt=p(Aa,"SPAN",{class:!0});var aa=x(lt);Ua=P(aa,"⚡ "),S(it.$$.fragment,aa),A=P(aa,"d Lag"),aa.forEach(_),Aa.forEach(_),Da.forEach(_),sa=y(et),Ze=p(et,"A",{href:!0,class:!0});var Ta=x(Ze);Ge=p(Ta,"DIV",{});var xt=x(Ge);mt=p(xt,"DIV",{class:!0,"data-svelte-h":!0}),H(mt)!=="svelte-1g7o0q6"&&(mt.innerHTML=hn),$r=y(xt),Ma=p(xt,"H2",{class:!0});var Va=x(Ma);S(jt.$$.fragment,Va),Va.forEach(_),xr=y(xt),Dt=p(xt,"DIV",{class:!0});var Fa=x(Dt);la=p(Fa,"SPAN",{});var Ia=x(la);kr=P(Ia,"🎯 "),S(St.$$.fragment,Ia),Cr=P(Ia," of Target ($750K)"),Ia.forEach(_),qr=y(Fa),ia=p(Fa,"SPAN",{class:!0});var sn=x(ia);jr=P(sn,"💼 Weighted: "),S(Et.$$.fragment,sn),sn.forEach(_),Fa.forEach(_),xt.forEach(_),Dr=y(Ta),At=p(Ta,"DIV",{class:!0});var Za=x(At);Pa=p(Za,"SPAN",{"data-svelte-h":!0}),H(Pa)!=="svelte-124mo8b"&&(Pa.textContent=gn),Sr=y(Za),Tt=p(Za,"SPAN",{class:!0});var er=x(Tt);Er=P(er,"📊 "),S(Ft.$$.fragment,er),Ar=P(er,"x Cover"),er.forEach(_),Za.forEach(_),Ta.forEach(_),Tr=y(et),ot=p(et,"A",{href:!0,class:!0});var tr=x(ot);ft=p(tr,"DIV",{});var Na=x(ft);oa=p(Na,"DIV",{class:!0,"data-svelte-h":!0}),H(oa)!=="svelte-16761e0"&&(oa.innerHTML=vn),Fr=y(Na),Ra=p(Na,"H2",{class:!0});var Fn=x(Ra);S(It.$$.fragment,Fn),Fn.forEach(_),Ir=y(Na),Mt=p(Na,"DIV",{class:!0});var ar=x(Mt);da=p(ar,"SPAN",{});var rr=x(da);Mr=P(rr,"✅ "),S(Pt.$$.fragment,rr),Pr=P(rr," Completed (YTD)"),rr.forEach(_),Rr=y(ar),ca=p(ar,"SPAN",{class:!0});var ln=x(ca);Lr=P(ln,"Ratio: "),S(Rt.$$.fragment,ln),ln.forEach(_),ar.forEach(_),Na.forEach(_),Vr=y(tr),_a=p(tr,"DIV",{class:!0,"data-svelte-h":!0}),H(_a)!=="svelte-1dpabce"&&(_a.innerHTML=yn),tr.forEach(_),Nr=y(et),dt=p(et,"A",{href:!0,class:!0});var nr=x(dt);pt=p(nr,"DIV",{});var Ha=x(pt);ua=p(Ha,"DIV",{class:!0,"data-svelte-h":!0}),H(ua)!=="svelte-1xghv9o"&&(ua.innerHTML=wn),Hr=y(Ha),La=p(Ha,"H2",{class:!0});var In=x(La);S(Lt.$$.fragment,In),In.forEach(_),Or=y(Ha),Vt=p(Ha,"DIV",{class:!0});var sr=x(Vt);ma=p(sr,"SPAN",{});var lr=x(ma);Br=P(lr,"📦 "),S(Nt.$$.fragment,lr),Ur=P(lr," Variants"),lr.forEach(_),zr=y(sr),fa=p(sr,"SPAN",{class:!0});var on=x(fa);Jr=P(on,"Avg Price: "),S(Ht.$$.fragment,on),on.forEach(_),sr.forEach(_),Ha.forEach(_),Yr=y(nr),pa=p(nr,"DIV",{class:!0,"data-svelte-h":!0}),H(pa)!=="svelte-183hhy2"&&(pa.innerHTML=bn),nr.forEach(_),et.forEach(_),Xa=y(s),ht=p(s,"DIV",{class:!0});var ir=x(ht);Ot=p(ir,"DIV",{class:!0});var or=x(Ot);Bt=p(or,"DIV",{class:!0});var dr=x(Bt);ha=p(dr,"SPAN",{class:!0,"data-svelte-h":!0}),H(ha)!=="svelte-3eui4q"&&(ha.textContent=$n),Gr=y(dr),S(ga.$$.fragment,dr),dr.forEach(_),Wr=y(or),S(Ut.$$.fragment,or),or.forEach(_),Kr=y(ir),zt=p(ir,"DIV",{class:!0});var cr=x(zt);Jt=p(cr,"DIV",{class:!0});var _r=x(Jt);va=p(_r,"SPAN",{class:!0,"data-svelte-h":!0}),H(va)!=="svelte-1a4lt8b"&&(va.textContent=xn),Xr=y(_r),S(ya.$$.fragment,_r),_r.forEach(_),Qr=y(cr),S(Yt.$$.fragment,cr),cr.forEach(_),ir.forEach(_),Qa=y(s),gt=p(s,"DIV",{class:!0});var ur=x(gt);Gt=p(ur,"DIV",{class:!0});var mr=x(Gt);Wt=p(mr,"DIV",{class:!0});var fr=x(Wt);wa=p(fr,"SPAN",{class:!0,"data-svelte-h":!0}),H(wa)!=="svelte-b68vp"&&(wa.textContent=kn),Zr=y(fr),S(ba.$$.fragment,fr),fr.forEach(_),en=y(mr),S(Kt.$$.fragment,mr),mr.forEach(_),tn=y(ur),Xt=p(ur,"DIV",{class:!0});var pr=x(Xt);Qt=p(pr,"DIV",{class:!0});var hr=x(Qt);$a=p(hr,"SPAN",{class:!0,"data-svelte-h":!0}),H($a)!=="svelte-kdhzry"&&($a.textContent=Cn),an=y(hr),S(xa.$$.fragment,hr),hr.forEach(_),rn=y(pr),S(Zt.$$.fragment,pr),pr.forEach(_),ur.forEach(_),this.h()},h(){f(t,"name","twitter:card"),f(t,"content","summary_large_image"),f(a,"name","twitter:site"),f(a,"content","@evidence_dev"),f(_e,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all"),f($e,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(Ie,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all"),f(Y,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(L,"class","text-base font-extrabold text-[#264773]"),f(ye,"class","text-gray-400"),f(ve,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2.5 py-1 rounded h-[26px] flex items-center gap-1.5"),f(de,"class","flex items-center gap-3"),f(me,"class","text-[8px] text-gray-400 font-semibold bg-white/50 border border-gray-200 px-2 py-0.5 rounded self-start"),f(ge,"class","flex flex-col gap-2"),f(pe,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1"),f(N,"class","flex flex-col gap-0.5 text-gray-500 leading-tight"),f(fe,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[320px] h-[75px] flex flex-col justify-between overflow-hidden text-[9px]"),f(V,"class","flex flex-col items-end self-stretch md:self-auto"),f(ie,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),f(Ae,"class","flex justify-between items-center"),f(xe,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(ce,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500"),f(lt,"class","font-extrabold text-[#1D5F60] bg-[#1D5F60]/10 px-1.5 py-0.5 rounded"),f(Ye,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f(B,"href",qt="/public.dlt-pipeline-orchestration/dev/"+Ue(`/sales?time_filter=${n[0]}`)),f(B,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),f(mt,"class","flex justify-between items-center"),f(Ma,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(ia,"class","text-[8px] font-bold px-1.5 py-0.2 rounded bg-blue-50 text-[#264773] border border-blue-100"),f(Dt,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-[#264773]"),f(Tt,"class","font-extrabold text-[#264773] bg-[#264773]/10 px-1.5 py-0.5 rounded"),f(At,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f(Ze,"href",Ga="/public.dlt-pipeline-orchestration/dev/"+Ue(`/sales?time_filter=${n[0]}`)),f(Ze,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),f(oa,"class","flex justify-between items-center"),f(Ra,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(ca,"class","text-[8px] font-bold px-1.5 py-0.2 rounded bg-gray-50 text-gray-600 border border-gray-200"),f(Mt,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500"),f(_a,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f(ot,"href",Wa="/public.dlt-pipeline-orchestration/dev/"+Ue(`/operations?time_filter=${n[0]}`)),f(ot,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),f(ua,"class","flex justify-between items-center"),f(La,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(fa,"class","text-[8px] font-bold px-1.5 py-0.2 rounded bg-gray-50 text-gray-600 border border-gray-200"),f(Vt,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500"),f(pa,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f(dt,"href",Ka="/public.dlt-pipeline-orchestration/dev/"+Ue(`/operations?time_filter=${n[0]}`)),f(dt,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px] transition-all hover:scale-[1.01] hover:shadow-md cursor-pointer no-underline text-inherit"),f(I,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(ha,"class","font-bold text-gray-700 text-xs"),f(Bt,"class","flex items-center gap-1.5 mb-1"),f(Ot,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(va,"class","font-bold text-gray-700 text-xs"),f(Jt,"class","flex items-center gap-1.5 mb-1"),f(zt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(ht,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5"),f(wa,"class","font-bold text-gray-700 text-xs"),f(Wt,"class","flex items-center gap-1.5 mb-1.5"),f(Gt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f($a,"class","font-bold text-gray-700 text-xs"),f(Qt,"class","flex items-center gap-1.5 mb-1.5"),f(Xt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[250px] overflow-hidden"),f(gt,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(s,u){yt&&yt.m(s,u),q(s,e,u),za.m(kt.head,null),o(kt.head,t),o(kt.head,a),wt&&wt.m(kt.head,null),o(kt.head,d),q(s,l,u),W&&W.m(s,u),q(s,i,u),K&&K.m(s,u),q(s,c,u),X&&X.m(s,u),q(s,k,u),Q&&Q.m(s,u),q(s,r,u),Z&&Z.m(s,u),q(s,v,u),ee&&ee.m(s,u),q(s,$,u),te&&te.m(s,u),q(s,C,u),ae&&ae.m(s,u),q(s,U,u),re&&re.m(s,u),q(s,J,u),ne&&ne.m(s,u),q(s,Te,u),q(s,Y,u),o(Y,_e),o(Y,je),o(Y,$e),o(Y,Ke),o(Y,Ie),q(s,De,u),q(s,ie,u),o(ie,ge),o(ge,L),o(ge,oe),o(ge,de),We.m(de,null),o(de,at),o(de,ve),o(ve,ye),o(ve,Se),o(ve,Pe),o(ge,ze),o(ge,me),o(ie,Ee),o(ie,V),o(V,fe),o(fe,pe),o(fe,Je),o(fe,N),ea[M].m(N,null),o(N,He),ta[G].m(N,null),q(s,he,u),q(s,I,u),o(I,B),o(B,we),o(we,Ae),o(we,Oe),o(we,xe),D(ke,xe,null),o(we,m),o(we,ce),o(ce,Xe),o(Xe,Qe),D(Ce,Xe,null),o(Xe,ut),o(ce,ra),se&&se.m(ce,null),o(B,na),o(B,Ye),o(Ye,Be),o(Ye,Ba),o(Ye,lt),o(lt,Ua),D(it,lt,null),o(lt,A),o(I,sa),o(I,Ze),o(Ze,Ge),o(Ge,mt),o(Ge,$r),o(Ge,Ma),D(jt,Ma,null),o(Ge,xr),o(Ge,Dt),o(Dt,la),o(la,kr),D(St,la,null),o(la,Cr),o(Dt,qr),o(Dt,ia),o(ia,jr),D(Et,ia,null),o(Ze,Dr),o(Ze,At),o(At,Pa),o(At,Sr),o(At,Tt),o(Tt,Er),D(Ft,Tt,null),o(Tt,Ar),o(I,Tr),o(I,ot),o(ot,ft),o(ft,oa),o(ft,Fr),o(ft,Ra),D(It,Ra,null),o(ft,Ir),o(ft,Mt),o(Mt,da),o(da,Mr),D(Pt,da,null),o(da,Pr),o(Mt,Rr),o(Mt,ca),o(ca,Lr),D(Rt,ca,null),o(ot,Vr),o(ot,_a),o(I,Nr),o(I,dt),o(dt,pt),o(pt,ua),o(pt,Hr),o(pt,La),D(Lt,La,null),o(pt,Or),o(pt,Vt),o(Vt,ma),o(ma,Br),D(Nt,ma,null),o(ma,Ur),o(Vt,zr),o(Vt,fa),o(fa,Jr),D(Ht,fa,null),o(dt,Yr),o(dt,pa),q(s,Xa,u),q(s,ht,u),o(ht,Ot),o(Ot,Bt),o(Bt,ha),o(Bt,Gr),D(ga,Bt,null),o(Ot,Wr),D(Ut,Ot,null),o(ht,Kr),o(ht,zt),o(zt,Jt),o(Jt,va),o(Jt,Xr),D(ya,Jt,null),o(zt,Qr),D(Yt,zt,null),q(s,Qa,u),q(s,gt,u),o(gt,Gt),o(Gt,Wt),o(Wt,wa),o(Wt,Zr),D(ba,Wt,null),o(Gt,en),D(Kt,Gt,null),o(gt,tn),o(gt,Xt),o(Xt,Qt),o(Qt,$a),o(Qt,an),D(xa,Qt,null),o(Xt,rn),D(Zt,Xt,null),vt=!0,nn||(qn=[dn(_e,"click",n[56]),dn($e,"click",n[57]),dn(Ie,"click",n[58])],nn=!0)},p(s,u){var Fa,Ia;typeof T<"u"&&T.title&&T.hide_title!==!0&&yt.p(s,u),za.p(s,u),typeof T=="object"&&wt.p(s,u),s[1]?W?(W.p(s,u),u[0]&2&&g(W,1)):(W=Hn(s),W.c(),g(W,1),W.m(i.parentNode,i)):W&&(Ve(),b(W,1,1,()=>{W=null}),Le()),s[2]?K?(K.p(s,u),u[0]&4&&g(K,1)):(K=On(s),K.c(),g(K,1),K.m(c.parentNode,c)):K&&(Ve(),b(K,1,1,()=>{K=null}),Le()),s[3]?X?(X.p(s,u),u[0]&8&&g(X,1)):(X=Bn(s),X.c(),g(X,1),X.m(k.parentNode,k)):X&&(Ve(),b(X,1,1,()=>{X=null}),Le()),s[4]?Q?(Q.p(s,u),u[0]&16&&g(Q,1)):(Q=Un(s),Q.c(),g(Q,1),Q.m(r.parentNode,r)):Q&&(Ve(),b(Q,1,1,()=>{Q=null}),Le()),s[5]?Z?(Z.p(s,u),u[0]&32&&g(Z,1)):(Z=zn(s),Z.c(),g(Z,1),Z.m(v.parentNode,v)):Z&&(Ve(),b(Z,1,1,()=>{Z=null}),Le()),s[6]?ee?(ee.p(s,u),u[0]&64&&g(ee,1)):(ee=Jn(s),ee.c(),g(ee,1),ee.m($.parentNode,$)):ee&&(Ve(),b(ee,1,1,()=>{ee=null}),Le()),s[7]?te?(te.p(s,u),u[0]&128&&g(te,1)):(te=Yn(s),te.c(),g(te,1),te.m(C.parentNode,C)):te&&(Ve(),b(te,1,1,()=>{te=null}),Le()),s[8]?ae?(ae.p(s,u),u[0]&256&&g(ae,1)):(ae=Gn(s),ae.c(),g(ae,1),ae.m(U.parentNode,U)):ae&&(Ve(),b(ae,1,1,()=>{ae=null}),Le()),s[9]?re?(re.p(s,u),u[0]&512&&g(re,1)):(re=Wn(s),re.c(),g(re,1),re.m(J.parentNode,J)):re&&(Ve(),b(re,1,1,()=>{re=null}),Le()),s[10]?ne?(ne.p(s,u),u[0]&1024&&g(ne,1)):(ne=Kn(s),ne.c(),g(ne,1),ne.m(Te.parentNode,Te)):ne&&(Ve(),b(ne,1,1,()=>{ne=null}),Le()),u[0]&1&&pn(ue,ue=s[0])?(Ve(),b(We,1,1,Ne),Le(),We=Xn(s),We.c(),g(We,1),We.m(de,at)):We.p(s,u),(!vt||u[0]&2048)&&fn(Pe,s[11]);let qe=M;M=Dn(s),M===qe?ea[M].p(s,u):(Ve(),b(ea[qe],1,1,()=>{ea[qe]=null}),Le(),O=ea[M],O?O.p(s,u):(O=ea[M]=jn[M](s),O.c()),g(O,1),O.m(N,He));let Re=G;G=En(s),G===Re?ta[G].p(s,u):(Ve(),b(ta[Re],1,1,()=>{ta[Re]=null}),Le(),z=ta[G],z?z.p(s,u):(z=ta[G]=Sn[G](s),z.c()),g(z,1),z.m(N,null));const bt={};u[0]&8&&(bt.data=s[3]),ke.$set(bt);const ka={};u[0]&8&&(ka.data=s[3]),Ce.$set(ka),((Fa=s[3][0])==null?void 0:Fa.pct_change)!==null&&((Ia=s[3][0])==null?void 0:Ia.pct_change)!==void 0?se?(se.p(s,u),u[0]&8&&g(se,1)):(se=Qn(s),se.c(),g(se,1),se.m(ce,null)):se&&(Ve(),b(se,1,1,()=>{se=null}),Le());const Ca={};u[0]&2&&(Ca.data=s[1]),it.$set(Ca),(!vt||u[0]&1&&qt!==(qt="/public.dlt-pipeline-orchestration/dev/"+Ue(`/sales?time_filter=${s[0]}`)))&&f(B,"href",qt);const Ja={};u[0]&16&&(Ja.data=s[4]),jt.$set(Ja);const qa={};u[0]&16&&(qa.data=s[4]),St.$set(qa);const ja={};u[0]&16&&(ja.data=s[4]),Et.$set(ja);const et={};u[0]&4&&(et.data=s[2]),Ft.$set(et),(!vt||u[0]&1&&Ga!==(Ga="/public.dlt-pipeline-orchestration/dev/"+Ue(`/sales?time_filter=${s[0]}`)))&&f(Ze,"href",Ga);const Da={};u[0]&32&&(Da.data=s[5]),It.$set(Da);const $t={};u[0]&32&&($t.data=s[5]),Pt.$set($t);const Ya={};u[0]&32&&(Ya.data=s[5]),Rt.$set(Ya),(!vt||u[0]&1&&Wa!==(Wa="/public.dlt-pipeline-orchestration/dev/"+Ue(`/operations?time_filter=${s[0]}`)))&&f(ot,"href",Wa);const Sa={};u[0]&64&&(Sa.data=s[6]),Lt.$set(Sa);const Ea={};u[0]&64&&(Ea.data=s[6]),Nt.$set(Ea);const Aa={};u[0]&64&&(Aa.data=s[6]),Ht.$set(Aa),(!vt||u[0]&1&&Ka!==(Ka="/public.dlt-pipeline-orchestration/dev/"+Ue(`/operations?time_filter=${s[0]}`)))&&f(dt,"href",Ka);const aa={};u[0]&128&&(aa.data=s[7]),u[2]&65536&&(aa.$$scope={dirty:u,ctx:s}),Ut.$set(aa);const Ta={};u[0]&256&&(Ta.data=s[8]),Yt.$set(Ta);const xt={};u[0]&512&&(xt.data=s[9]),Kt.$set(xt);const Va={};u[0]&1024&&(Va.data=s[10]),u[2]&65536&&(Va.$$scope={dirty:u,ctx:s}),Zt.$set(Va)},i(s){vt||(g(W),g(K),g(X),g(Q),g(Z),g(ee),g(te),g(ae),g(re),g(ne),g(We),g(O),g(z),g(ke.$$.fragment,s),g(Ce.$$.fragment,s),g(se),g(it.$$.fragment,s),g(jt.$$.fragment,s),g(St.$$.fragment,s),g(Et.$$.fragment,s),g(Ft.$$.fragment,s),g(It.$$.fragment,s),g(Pt.$$.fragment,s),g(Rt.$$.fragment,s),g(Lt.$$.fragment,s),g(Nt.$$.fragment,s),g(Ht.$$.fragment,s),g(ga.$$.fragment,s),g(Ut.$$.fragment,s),g(ya.$$.fragment,s),g(Yt.$$.fragment,s),g(ba.$$.fragment,s),g(Kt.$$.fragment,s),g(xa.$$.fragment,s),g(Zt.$$.fragment,s),vt=!0)},o(s){b(W),b(K),b(X),b(Q),b(Z),b(ee),b(te),b(ae),b(re),b(ne),b(We),b(O),b(z),b(ke.$$.fragment,s),b(Ce.$$.fragment,s),b(se),b(it.$$.fragment,s),b(jt.$$.fragment,s),b(St.$$.fragment,s),b(Et.$$.fragment,s),b(Ft.$$.fragment,s),b(It.$$.fragment,s),b(Pt.$$.fragment,s),b(Rt.$$.fragment,s),b(Lt.$$.fragment,s),b(Nt.$$.fragment,s),b(Ht.$$.fragment,s),b(ga.$$.fragment,s),b(Ut.$$.fragment,s),b(ya.$$.fragment,s),b(Yt.$$.fragment,s),b(ba.$$.fragment,s),b(Kt.$$.fragment,s),b(xa.$$.fragment,s),b(Zt.$$.fragment,s),vt=!1},d(s){s&&(_(e),_(l),_(i),_(c),_(k),_(r),_(v),_($),_(C),_(U),_(J),_(Te),_(Y),_(De),_(ie),_(he),_(I),_(Xa),_(ht),_(Qa),_(gt)),yt&&yt.d(s),za.d(s),_(t),_(a),wt&&wt.d(s),_(d),W&&W.d(s),K&&K.d(s),X&&X.d(s),Q&&Q.d(s),Z&&Z.d(s),ee&&ee.d(s),te&&te.d(s),ae&&ae.d(s),re&&re.d(s),ne&&ne.d(s),We.d(s),ea[M].d(),ta[G].d(),j(ke),j(Ce),se&&se.d(),j(it),j(jt),j(St),j(Et),j(Ft),j(It),j(Pt),j(Rt),j(Lt),j(Nt),j(Ht),j(ga),j(Ut),j(ya),j(Yt),j(ba),j(Kt),j(xa),j(Zt),nn=!1,rs(qn)}}}const T={title:"Business Performance Dashboard"},Bs="2026-06-15";function wr(n){const e=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${n.getDate()} ${e[n.getMonth()]} ${n.getFullYear()}`}function Us(n,e){const t=new Date(e+"T00:00:00"),a=wr(t);if(n==="mtd"){const d=new Date(t.getFullYear(),t.getMonth(),1);return`${wr(d)} - ${a}`}if(n==="qtd"){const d=Math.floor(t.getMonth()/3)*3,l=new Date(t.getFullYear(),d,1);return`${wr(l)} - ${a}`}if(n==="ytd"){const d=new Date(t.getFullYear(),0,1);return`${wr(d)} - ${a}`}return`All Time - ${a}`}const zs=n=>n>=1e6?"$"+n/1e6+"M":n>=1e3?"$"+n/1e3+"K":"$"+n,Js=n=>n>=1e6?"$"+n/1e6+"M":n>=1e3?"$"+n/1e3+"K":"$"+n,Ys=n=>n.name&&n.name.includes("Closed Won")?"#1D5F60":n.name&&n.name.includes("Closed Lost")?"#7B8DA6":"#264773";function Gs(n,e,t){let a,d;mn(n,qs,A=>t(55,a=A)),mn(n,Nn,A=>t(64,d=A));let{data:l}=e,{data:i={},customFormattingSettings:c,__db:k,inputs:r}=l;ss(Nn,d="6666cd76f96956469e7be39d750cc7d9",d);let v=ws(ks(r));ls(v.subscribe(A=>t(14,r=A))),is(xs,{getCustomFormats:()=>c.customFormats||[]});const $=(A,qt)=>Cs(k.query,A,{query_name:qt});bs($),a.params,Rn(()=>!0);let C={initialData:void 0,initialError:void 0},U=le`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`,J=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`;i.delivery_lag_data&&(i.delivery_lag_data instanceof Error?C.initialError=i.delivery_lag_data:C.initialData=i.delivery_lag_data,i.delivery_lag_columns&&(C.knownColumns=i.delivery_lag_columns));let Te,Y=!1;const _e=ct.createReactive({callback:A=>{t(1,Te=A)},execFn:$},{id:"delivery_lag",...C});_e(J,{noResolve:U,...C}),globalThis[Symbol.for("delivery_lag")]={get value(){return Te}};let Fe={initialData:void 0,initialError:void 0},je=le`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`,$e=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`;i.pipeline_coverage_data&&(i.pipeline_coverage_data instanceof Error?Fe.initialError=i.pipeline_coverage_data:Fe.initialData=i.pipeline_coverage_data,i.pipeline_coverage_columns&&(Fe.knownColumns=i.pipeline_coverage_columns));let tt,Ke=!1;const Ie=ct.createReactive({callback:A=>{t(2,tt=A)},execFn:$},{id:"pipeline_coverage",...Fe});Ie($e,{noResolve:je,...Fe}),globalThis[Symbol.for("pipeline_coverage")]={get value(){return tt}};let F={initialData:void 0,initialError:void 0},De=le`with current_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and transaction_date <= '2026-06-15'::date
),
prior_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date) - interval '1 month'
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date) - interval '3 months'
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date) - interval '1 year'
          else '1970-01-01'::date
      end
      and transaction_date <= case
          when '${r.time_filter}' = 'mtd' then '2026-06-15'::date - interval '1 month'
          when '${r.time_filter}' = 'qtd' then '2026-06-15'::date - interval '3 months'
          when '${r.time_filter}' = 'ytd' then '2026-06-15'::date - interval '1 year'
          else '1970-01-01'::date
      end
)
select 
    c.rev as total_revenue,
    p.rev as prior_revenue,
    c.rev / 1000000.0 as target_progress,
    case 
        when '${r.time_filter}' = 'all' then null
        else (c.rev - p.rev) / nullif(p.rev, 0)
    end as pct_change,
    case 
        when '${r.time_filter}' = 'mtd' then 'vs last month'
        when '${r.time_filter}' = 'qtd' then 'vs last quarter'
        when '${r.time_filter}' = 'ytd' then 'vs last year'
        else ''
    end as trend_label
from current_revenue c, prior_revenue p`,ie=`with current_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and transaction_date <= '2026-06-15'::date
),
prior_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date) - interval '1 month'
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date) - interval '3 months'
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date) - interval '1 year'
          else '1970-01-01'::date
      end
      and transaction_date <= case
          when '${r.time_filter}' = 'mtd' then '2026-06-15'::date - interval '1 month'
          when '${r.time_filter}' = 'qtd' then '2026-06-15'::date - interval '3 months'
          when '${r.time_filter}' = 'ytd' then '2026-06-15'::date - interval '1 year'
          else '1970-01-01'::date
      end
)
select 
    c.rev as total_revenue,
    p.rev as prior_revenue,
    c.rev / 1000000.0 as target_progress,
    case 
        when '${r.time_filter}' = 'all' then null
        else (c.rev - p.rev) / nullif(p.rev, 0)
    end as pct_change,
    case 
        when '${r.time_filter}' = 'mtd' then 'vs last month'
        when '${r.time_filter}' = 'qtd' then 'vs last quarter'
        when '${r.time_filter}' = 'ytd' then 'vs last year'
        else ''
    end as trend_label
from current_revenue c, prior_revenue p`;i.kpi_revenue_data&&(i.kpi_revenue_data instanceof Error?F.initialError=i.kpi_revenue_data:F.initialData=i.kpi_revenue_data,i.kpi_revenue_columns&&(F.knownColumns=i.kpi_revenue_columns));let ge,L=!1;const Ct=ct.createReactive({callback:A=>{t(3,ge=A)},execFn:$},{id:"kpi_revenue",...F});Ct(ie,{noResolve:De,...F}),globalThis[Symbol.for("kpi_revenue")]={get value(){return ge}};let oe={initialData:void 0,initialError:void 0},de=le`select 
    coalesce(sum(amount), 0) as pipeline_value,
    coalesce(sum(forecast_amount), 0) as weighted_value,
    750000.0 as target_value,
    coalesce(sum(amount), 0) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`,ue=`select 
    coalesce(sum(amount), 0) as pipeline_value,
    coalesce(sum(forecast_amount), 0) as weighted_value,
    750000.0 as target_value,
    coalesce(sum(amount), 0) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`;i.kpi_pipeline_data&&(i.kpi_pipeline_data instanceof Error?oe.initialError=i.kpi_pipeline_data:oe.initialData=i.kpi_pipeline_data,i.kpi_pipeline_columns&&(oe.knownColumns=i.kpi_pipeline_columns));let at,ve=!1;const ye=ct.createReactive({callback:A=>{t(4,at=A)},execFn:$},{id:"kpi_pipeline",...oe});ye(ue,{noResolve:de,...oe}),globalThis[Symbol.for("kpi_pipeline")]={get value(){return at}};let Me={initialData:void 0,initialError:void 0},Se=le`with project_stats as (
    select
        count(distinct case when is_active = true then project_id end) as active_projects,
        count(distinct case when is_active = false then project_id end) as completed_projects
    from postgres.dim_projects
    where created_at >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end
    and created_at <= '2026-06-15'::date
)
select
    active_projects as total_projects,
    completed_projects,
    coalesce(completed_projects * 1.0 / nullif(active_projects + completed_projects, 0), 0) as completion_rate
from project_stats`,Pe=`with project_stats as (
    select
        count(distinct case when is_active = true then project_id end) as active_projects,
        count(distinct case when is_active = false then project_id end) as completed_projects
    from postgres.dim_projects
    where created_at >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end
    and created_at <= '2026-06-15'::date
)
select
    active_projects as total_projects,
    completed_projects,
    coalesce(completed_projects * 1.0 / nullif(active_projects + completed_projects, 0), 0) as completion_rate
from project_stats`;i.kpi_projects_metrics_data&&(i.kpi_projects_metrics_data instanceof Error?Me.initialError=i.kpi_projects_metrics_data:Me.initialData=i.kpi_projects_metrics_data,i.kpi_projects_metrics_columns&&(Me.knownColumns=i.kpi_projects_metrics_columns));let ze,me=!1;const rt=ct.createReactive({callback:A=>{t(5,ze=A)},execFn:$},{id:"kpi_projects_metrics",...Me});rt(Pe,{noResolve:Se,...Me}),globalThis[Symbol.for("kpi_projects_metrics")]={get value(){return ze}};let Ee={initialData:void 0,initialError:void 0},V=le`select 
    count(distinct product_id) as total_products,
    count(*) as total_variants,
    coalesce(avg(price), 0) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`,fe=`select 
    count(distinct product_id) as total_products,
    count(*) as total_variants,
    coalesce(avg(price), 0) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`;i.kpi_products_metrics_data&&(i.kpi_products_metrics_data instanceof Error?Ee.initialError=i.kpi_products_metrics_data:Ee.initialData=i.kpi_products_metrics_data,i.kpi_products_metrics_columns&&(Ee.knownColumns=i.kpi_products_metrics_columns));let pe,nt=!1;const Je=ct.createReactive({callback:A=>{t(6,pe=A)},execFn:$},{id:"kpi_products_metrics",...Ee});Je(fe,{noResolve:V,...Ee}),globalThis[Symbol.for("kpi_products_metrics")]={get value(){return pe}};let N={initialData:void 0,initialError:void 0},M=le`select
    date_trunc('month', transaction_date) as month_date,
    sum(case when source_system = 'xero' then revenue_amount else 0 end) as billed_revenue,
    sum(case when source_system = 'hubspot' then revenue_amount else 0 end) as booked_revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date)
order by month_date`,O=`select
    date_trunc('month', transaction_date) as month_date,
    sum(case when source_system = 'xero' then revenue_amount else 0 end) as billed_revenue,
    sum(case when source_system = 'hubspot' then revenue_amount else 0 end) as booked_revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date)
order by month_date`;i.revenue_bookings_billing_data&&(i.revenue_bookings_billing_data instanceof Error?N.initialError=i.revenue_bookings_billing_data:N.initialData=i.revenue_bookings_billing_data,i.revenue_bookings_billing_columns&&(N.knownColumns=i.revenue_bookings_billing_columns));let He,G=!1;const z=ct.createReactive({callback:A=>{t(7,He=A)},execFn:$},{id:"revenue_bookings_billing",...N});z(O,{noResolve:M,...N}),globalThis[Symbol.for("revenue_bookings_billing")]={get value(){return He}};let he={initialData:void 0,initialError:void 0},I=le`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`,B=`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`;i.pipeline_funnel_data&&(i.pipeline_funnel_data instanceof Error?he.initialError=i.pipeline_funnel_data:he.initialData=i.pipeline_funnel_data,i.pipeline_funnel_columns&&(he.knownColumns=i.pipeline_funnel_columns));let we,Ae=!1;const st=ct.createReactive({callback:A=>{t(8,we=A)},execFn:$},{id:"pipeline_funnel",...he});st(B,{noResolve:I,...he}),globalThis[Symbol.for("pipeline_funnel")]={get value(){return we}};let Oe={initialData:void 0,initialError:void 0},xe=le`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`,ke=`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`;i.project_summary_data&&(i.project_summary_data instanceof Error?Oe.initialError=i.project_summary_data:Oe.initialData=i.project_summary_data,i.project_summary_columns&&(Oe.knownColumns=i.project_summary_columns));let m,ce=!1;const Xe=ct.createReactive({callback:A=>{t(9,m=A)},execFn:$},{id:"project_summary",...Oe});Xe(ke,{noResolve:xe,...Oe}),globalThis[Symbol.for("project_summary")]={get value(){return m}};let Qe={initialData:void 0,initialError:void 0},Ce=le`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`,ut=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`;i.catalog_summary_data&&(i.catalog_summary_data instanceof Error?Qe.initialError=i.catalog_summary_data:Qe.initialData=i.catalog_summary_data,i.catalog_summary_columns&&(Qe.knownColumns=i.catalog_summary_columns));let ra,na=!1;const Ye=ct.createReactive({callback:A=>{t(10,ra=A)},execFn:$},{id:"catalog_summary",...Qe});Ye(ut,{noResolve:Ce,...Qe}),globalThis[Symbol.for("catalog_summary")]={get value(){return ra}};let Be="ytd",Oa="";Rn(()=>{if(localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),r){const A=a.url.searchParams.get("time_filter");t(14,r.time_filter=A||"ytd",r)}});const Ba=()=>un(Ue(`/?time_filter=${Be}`)),lt=()=>un(Ue(`/sales?time_filter=${Be}`)),Ua=()=>un(Ue(`/operations?time_filter=${Be}`)),it=(A,qt)=>{const sa=new Date(A),Ge=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][sa.getUTCMonth()],mt=sa.getUTCFullYear();return sa.getUTCMonth()===0||qt===0?Ge+`
`+mt:Ge};return n.$$set=A=>{"data"in A&&t(12,l=A.data)},n.$$.update=()=>{if(n.$$.dirty[0]&4096&&t(13,{data:i={},customFormattingSettings:c,__db:k}=l,i),n.$$.dirty[0]&8192&&$s.set(Object.keys(i).length>0),n.$$.dirty[1]&16777216&&a.params,n.$$.dirty[0]&16384&&t(16,U=le`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`),n.$$.dirty[0]&16384&&t(17,J=`select
    coalesce(avg(date_diff('day', d.notes_last_updated_at::timestamp, i.transaction_date::timestamp)), 0) as avg_lag_days
from postgres.fct_pipeline d
join postgres.fct_revenue i on d.customer_key = i.customer_key
where d.deal_stage = 'closedwon'
  and i.source_system = 'xero'
  and date_trunc('month', d.notes_last_updated_at::timestamp) = date_trunc('month', i.transaction_date::timestamp)
  and d.notes_last_updated_at >= case
      when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
      when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
      when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
      else '1970-01-01'::date
  end
  and d.notes_last_updated_at <= '2026-06-15'::date`),n.$$.dirty[0]&491520&&(U||!Y?U||(_e(J,{noResolve:U,...C}),t(18,Y=!0)):_e(J,{noResolve:U})),n.$$.dirty[0]&16384&&t(20,je=le`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`),n.$$.dirty[0]&16384&&t(21,$e=`select
    coalesce(sum(d.amount) / nullif(1000000.0 - (select sum(revenue_amount) from postgres.fct_revenue where source_system = 'xero' and transaction_date >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end and transaction_date <= '2026-06-15'::date), 0), 0) as coverage_ratio
from postgres.fct_pipeline d
where d.deal_stage not in ('closedwon', 'closedlost')`),n.$$.dirty[0]&7864320&&(je||!Ke?je||(Ie($e,{noResolve:je,...Fe}),t(22,Ke=!0)):Ie($e,{noResolve:je})),n.$$.dirty[0]&16384&&t(24,De=le`with current_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and transaction_date <= '2026-06-15'::date
),
prior_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date) - interval '1 month'
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date) - interval '3 months'
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date) - interval '1 year'
          else '1970-01-01'::date
      end
      and transaction_date <= case
          when '${r.time_filter}' = 'mtd' then '2026-06-15'::date - interval '1 month'
          when '${r.time_filter}' = 'qtd' then '2026-06-15'::date - interval '3 months'
          when '${r.time_filter}' = 'ytd' then '2026-06-15'::date - interval '1 year'
          else '1970-01-01'::date
      end
)
select 
    c.rev as total_revenue,
    p.rev as prior_revenue,
    c.rev / 1000000.0 as target_progress,
    case 
        when '${r.time_filter}' = 'all' then null
        else (c.rev - p.rev) / nullif(p.rev, 0)
    end as pct_change,
    case 
        when '${r.time_filter}' = 'mtd' then 'vs last month'
        when '${r.time_filter}' = 'qtd' then 'vs last quarter'
        when '${r.time_filter}' = 'ytd' then 'vs last year'
        else ''
    end as trend_label
from current_revenue c, prior_revenue p`),n.$$.dirty[0]&16384&&t(25,ie=`with current_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
          else '1970-01-01'::date
      end
      and transaction_date <= '2026-06-15'::date
),
prior_revenue as (
    select coalesce(sum(revenue_amount), 0) as rev
    from postgres.fct_revenue
    where source_system = 'xero'
      and transaction_date >= case
          when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date) - interval '1 month'
          when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date) - interval '3 months'
          when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date) - interval '1 year'
          else '1970-01-01'::date
      end
      and transaction_date <= case
          when '${r.time_filter}' = 'mtd' then '2026-06-15'::date - interval '1 month'
          when '${r.time_filter}' = 'qtd' then '2026-06-15'::date - interval '3 months'
          when '${r.time_filter}' = 'ytd' then '2026-06-15'::date - interval '1 year'
          else '1970-01-01'::date
      end
)
select 
    c.rev as total_revenue,
    p.rev as prior_revenue,
    c.rev / 1000000.0 as target_progress,
    case 
        when '${r.time_filter}' = 'all' then null
        else (c.rev - p.rev) / nullif(p.rev, 0)
    end as pct_change,
    case 
        when '${r.time_filter}' = 'mtd' then 'vs last month'
        when '${r.time_filter}' = 'qtd' then 'vs last quarter'
        when '${r.time_filter}' = 'ytd' then 'vs last year'
        else ''
    end as trend_label
from current_revenue c, prior_revenue p`),n.$$.dirty[0]&125829120&&(De||!L?De||(Ct(ie,{noResolve:De,...F}),t(26,L=!0)):Ct(ie,{noResolve:De})),n.$$.dirty[0]&2013265920&&(de||!ve?de||(ye(ue,{noResolve:de,...oe}),t(30,ve=!0)):ye(ue,{noResolve:de})),n.$$.dirty[0]&16384&&t(32,Se=le`with project_stats as (
    select
        count(distinct case when is_active = true then project_id end) as active_projects,
        count(distinct case when is_active = false then project_id end) as completed_projects
    from postgres.dim_projects
    where created_at >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end
    and created_at <= '2026-06-15'::date
)
select
    active_projects as total_projects,
    completed_projects,
    coalesce(completed_projects * 1.0 / nullif(active_projects + completed_projects, 0), 0) as completion_rate
from project_stats`),n.$$.dirty[0]&16384&&t(33,Pe=`with project_stats as (
    select
        count(distinct case when is_active = true then project_id end) as active_projects,
        count(distinct case when is_active = false then project_id end) as completed_projects
    from postgres.dim_projects
    where created_at >= case
        when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
        when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
        when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
        else '1970-01-01'::date
    end
    and created_at <= '2026-06-15'::date
)
select
    active_projects as total_projects,
    completed_projects,
    coalesce(completed_projects * 1.0 / nullif(active_projects + completed_projects, 0), 0) as completion_rate
from project_stats`),n.$$.dirty[1]&15&&(Se||!me?Se||(rt(Pe,{noResolve:Se,...Me}),t(34,me=!0)):rt(Pe,{noResolve:Se})),n.$$.dirty[0]&16384&&t(36,V=le`select 
    count(distinct product_id) as total_products,
    count(*) as total_variants,
    coalesce(avg(price), 0) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`),n.$$.dirty[0]&16384&&t(37,fe=`select 
    count(distinct product_id) as total_products,
    count(*) as total_variants,
    coalesce(avg(price), 0) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date`),n.$$.dirty[1]&240&&(V||!nt?V||(Je(fe,{noResolve:V,...Ee}),t(38,nt=!0)):Je(fe,{noResolve:V})),n.$$.dirty[0]&16384&&t(40,M=le`select
    date_trunc('month', transaction_date) as month_date,
    sum(case when source_system = 'xero' then revenue_amount else 0 end) as billed_revenue,
    sum(case when source_system = 'hubspot' then revenue_amount else 0 end) as booked_revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date)
order by month_date`),n.$$.dirty[0]&16384&&t(41,O=`select
    date_trunc('month', transaction_date) as month_date,
    sum(case when source_system = 'xero' then revenue_amount else 0 end) as billed_revenue,
    sum(case when source_system = 'hubspot' then revenue_amount else 0 end) as booked_revenue
from postgres.fct_revenue
where transaction_date >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and transaction_date <= '2026-06-15'::date
group by date_trunc('month', transaction_date)
order by month_date`),n.$$.dirty[1]&3840&&(M||!G?M||(z(O,{noResolve:M,...N}),t(42,G=!0)):z(O,{noResolve:M})),n.$$.dirty[0]&16384&&t(44,I=le`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`),n.$$.dirty[0]&16384&&t(45,B=`select
    case 
        when deal_stage = 'appointmentscheduled' then '1. Scheduled'
        when deal_stage = 'presentationsubmitted' then '2. Presentation'
        when deal_stage = 'presentationscheduled' then '2. Presentation'
        when deal_stage = 'contractsent' then '3. Contract Sent'
        when deal_stage = 'closedwon' then '4. Closed Won'
        when deal_stage = 'closedlost' then '5. Closed Lost'
        else deal_stage
    end as deal_stage,
    sum(amount) as pipeline_value
from postgres.fct_pipeline
where notes_last_updated_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and notes_last_updated_at <= '2026-06-15'::date
group by all
order by deal_stage asc`),n.$$.dirty[1]&61440&&(I||!Ae?I||(st(B,{noResolve:I,...he}),t(46,Ae=!0)):st(B,{noResolve:I})),n.$$.dirty[0]&16384&&t(48,xe=le`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`),n.$$.dirty[0]&16384&&t(49,ke=`select
    case 
        when company_name = 'Modern Office Group' then 'Modern Office Group'
        when company_name = 'Eco Joinery Co' then 'Eco Joinery Co'
        else company_name
    end as company_name,
    case when is_active = true then 'Active' else 'Completed' end as project_status,
    count(distinct project_id) as project_count
from postgres.dim_projects
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by project_count desc`),n.$$.dirty[1]&983040&&(xe||!ce?xe||(Xe(ke,{noResolve:xe,...Oe}),t(50,ce=!0)):Xe(ke,{noResolve:xe})),n.$$.dirty[0]&16384&&t(52,Ce=le`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`),n.$$.dirty[0]&16384&&t(53,ut=`select
    vendor,
    count(*) as total_variants,
    avg(price) as average_price
from postgres.dim_products
where created_at >= case
    when '${r.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${r.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${r.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and created_at <= '2026-06-15'::date
group by all
order by total_variants desc`),n.$$.dirty[1]&15728640&&(Ce||!na?Ce||(Ye(ut,{noResolve:Ce,...Qe}),t(54,na=!0)):Ye(ut,{noResolve:Ce})),n.$$.dirty[0]&16384&&t(0,Be=(r==null?void 0:r.time_filter)||"ytd"),n.$$.dirty[0]&1&&t(11,Oa=Us(Be,Bs)),n.$$.dirty[0]&16384&&r&&r.time_filter)try{const A=new URL(window.location.href);A.searchParams.get("time_filter")!==r.time_filter&&(A.searchParams.set("time_filter",r.time_filter),window.history.replaceState(null,"",A.pathname+A.search))}catch{}},t(28,de=le`select 
    coalesce(sum(amount), 0) as pipeline_value,
    coalesce(sum(forecast_amount), 0) as weighted_value,
    750000.0 as target_value,
    coalesce(sum(amount), 0) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`),t(29,ue=`select 
    coalesce(sum(amount), 0) as pipeline_value,
    coalesce(sum(forecast_amount), 0) as weighted_value,
    750000.0 as target_value,
    coalesce(sum(amount), 0) / 750000.0 as target_progress
from postgres.fct_pipeline 
where deal_stage not in ('closedwon', 'closedlost')`),[Be,Te,tt,ge,at,ze,pe,He,we,m,ra,Oa,l,i,r,C,U,J,Y,Fe,je,$e,Ke,F,De,ie,L,oe,de,ue,ve,Me,Se,Pe,me,Ee,V,fe,nt,N,M,O,G,he,I,B,Ae,Oe,xe,ke,ce,Qe,Ce,ut,na,a,Ba,lt,Ua,it]}class rl extends Zn{constructor(e){super(),es(this,e,Gs,Os,pn,{data:12},null,[-1,-1,-1])}}export{rl as component};
