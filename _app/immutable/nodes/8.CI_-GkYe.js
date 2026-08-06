import{s as Wn,P as Vn,l as cn,Q as Zn,n as ce,G as jn,d as c,E as es,D as ts,i as $,a as u,z as ln,b as m,J as as,c as b,h as ns,e as f,f as Ea,r as x,g as H,t as Et,j as v,k as h,u as qt,m as ss,o as is,p as rs,q as Rn}from"../chunks/scheduler.Cpit_XQ7.js";import{S as Gn,i as Qn,d as S,t as w,a as p,c as at,m as D,b as T,e as E,g as nt}from"../chunks/index.JnElEpLO.js";import{b as Hn,c as ls,d as os,G as us,a as Pn,V as Tt,C as on,B as _s,g as cs,Q as ea,e as qa}from"../chunks/GlobalSingleSelect.BWI2421_.js";import{p as ds,m as ms,g as fs,n as un,t as Sa,q as hs,r as gs,e as Da}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BjXfxPR9.js";import{w as bs,g as _n}from"../chunks/entry.BIYhHwAU.js";import{e as vs,s as ps,Q as Zt,p as ys,a as Fa,r as On,C as ws}from"../chunks/inferColumnTypes.BcQgP2nL.js";import{h as qe}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as xs}from"../chunks/stores.CofQ_tCf.js";import{p as $s}from"../chunks/profile.BW8tN6E9.js";function ks(i,a,t){let n,o,l,g,r,k,M,e,q,C,O,N,je,Re,re,Je,he=ce,le=()=>(he(),he=jn(n,_=>t(44,Je=_)),n),He,Pe=ce,ge=()=>(Pe(),Pe=jn(o,_=>t(45,He=_)),o),I;i.$$.on_destroy.push(()=>he()),i.$$.on_destroy.push(()=>Pe());let oe=Vn(ds);cn(i,oe,_=>t(46,I=_));let Ce=Vn(ms);const{resolveColor:Oe}=fs();let{y:P=void 0}=a;const Se=!!P;let{y2:ae=void 0}=a;const Fe=!!ae;let{series:L=void 0}=a;const be=!!L;let{options:ze=void 0}=a,{name:Ie=void 0}=a,{lineColor:Ne=void 0}=a,{lineWidth:ve=2}=a,{lineType:J="solid"}=a,{lineOpacity:ne=void 0}=a,{markers:pe=!1}=a,{markerShape:de="circle"}=a,{markerSize:Be=8}=a,{labels:j=!1}=a,{labelSize:De=11}=a,{labelPosition:me="top"}=a,{labelColor:ye=void 0}=a,{labelFmt:_e=void 0}=a,fe;_e&&(fe=un(_e));let{yLabelFmt:we=void 0}=a,xe;we&&(xe=un(we));let{y2LabelFmt:B=void 0}=a,X;B&&(X=un(B));let{y2SeriesType:Y=void 0}=a,{showAllLabels:Te=!1}=a,{handleMissing:U="gap"}=a,{step:z=!1}=a,{stepPosition:Xe="end"}=a,{seriesOrder:se=void 0}=a,{seriesLabelFmt:Ee=void 0}=a;const Ae={above:"top",below:"bottom",middle:"inside"},Ye={above:"right",below:"left",middle:"inside"};let ta=r?"right":"top";return Zn(()=>{Ce.update(_=>{if(r)_.yAxis={..._.yAxis,...re.xAxis},_.xAxis={..._.xAxis,...re.yAxis};else if(_.yAxis[0]={..._.yAxis[0],...re.yAxis},_.xAxis={..._.xAxis,...re.xAxis},ae&&(_.yAxis[1]={..._.yAxis[1],show:!0},["line","bar","scatter"].includes(Y)))for(let y=0;y<q;y++)_.series[e+y].type=Y;return j&&(_.axisPointer={triggerEmphasis:!1}),_})}),i.$$set=_=>{"y"in _&&t(3,P=_.y),"y2"in _&&t(4,ae=_.y2),"series"in _&&t(5,L=_.series),"options"in _&&t(12,ze=_.options),"name"in _&&t(6,Ie=_.name),"lineColor"in _&&t(13,Ne=_.lineColor),"lineWidth"in _&&t(14,ve=_.lineWidth),"lineType"in _&&t(15,J=_.lineType),"lineOpacity"in _&&t(16,ne=_.lineOpacity),"markers"in _&&t(7,pe=_.markers),"markerShape"in _&&t(17,de=_.markerShape),"markerSize"in _&&t(18,Be=_.markerSize),"labels"in _&&t(8,j=_.labels),"labelSize"in _&&t(19,De=_.labelSize),"labelPosition"in _&&t(9,me=_.labelPosition),"labelColor"in _&&t(20,ye=_.labelColor),"labelFmt"in _&&t(21,_e=_.labelFmt),"yLabelFmt"in _&&t(22,we=_.yLabelFmt),"y2LabelFmt"in _&&t(23,B=_.y2LabelFmt),"y2SeriesType"in _&&t(24,Y=_.y2SeriesType),"showAllLabels"in _&&t(10,Te=_.showAllLabels),"handleMissing"in _&&t(25,U=_.handleMissing),"step"in _&&t(11,z=_.step),"stepPosition"in _&&t(26,Xe=_.stepPosition),"seriesOrder"in _&&t(27,se=_.seriesOrder),"seriesLabelFmt"in _&&t(28,Ee=_.seriesLabelFmt)},i.$$.update=()=>{if(i.$$.dirty[0]&8192&&le(t(1,n=Oe(Ne))),i.$$.dirty[0]&128&&t(7,pe=Sa(pe)),i.$$.dirty[0]&256&&t(8,j=Sa(j)),i.$$.dirty[0]&1048576&&ge(t(0,o=Oe(ye))),i.$$.dirty[0]&1024&&t(10,Te=Sa(Te)),i.$$.dirty[0]&2048&&t(11,z=Sa(z)),i.$$.dirty[1]&32768&&t(41,l=I.data),i.$$.dirty[1]&32768&&t(40,g=I.x),i.$$.dirty[0]&8|i.$$.dirty[1]&32768&&t(3,P=Se?P:I.y),i.$$.dirty[0]&16|i.$$.dirty[1]&32768&&t(4,ae=Fe?ae:I.y2),i.$$.dirty[1]&32768&&t(34,r=I.swapXY),i.$$.dirty[1]&32768&&t(43,k=I.yFormat),i.$$.dirty[1]&32768&&t(42,M=I.y2Format),i.$$.dirty[1]&32768&&t(32,e=I.yCount),i.$$.dirty[1]&32768&&t(33,q=I.y2Count),i.$$.dirty[1]&32768&&t(35,C=I.xType),i.$$.dirty[1]&32768&&t(38,O=I.xMismatch),i.$$.dirty[1]&32768&&t(37,N=I.columnSummary),i.$$.dirty[0]&32|i.$$.dirty[1]&32768&&t(5,L=be?L:I.series),i.$$.dirty[0]&104|i.$$.dirty[1]&1600)if(!L&&typeof P!="object")t(6,Ie=Ie??hs(P,N[P].title));else try{t(41,l=Hn(l,g,P,L))}catch(_){console.warn("Failed to complete data",{e:_}),t(41,l=[])}if(i.$$.dirty[0]&33554472|i.$$.dirty[1]&1536&&U==="zero")try{t(41,l=Hn(l,g,P,L,!0))}catch(_){console.warn("Failed to complete data",{e:_}),t(41,l=[])}i.$$.dirty[0]&512|i.$$.dirty[1]&8&&t(9,me=(r?Ye[me]:Ae[me])??ta),i.$$.dirty[0]&1712312192|i.$$.dirty[1]&30735&&t(39,je={type:"line",label:{show:j,formatter(_){return _.value[r?0:1]===0?"":gs(_.value[r?0:1],[xe??fe??k,X??fe??M][ls(_.componentIndex,e,q)])},fontSize:De,color:He,position:me,padding:3},labelLayout:{hideOverlap:!Te},connectNulls:U==="connect",emphasis:{focus:"series",endLabel:{show:!1},lineStyle:{opacity:1,width:3}},lineStyle:{width:parseInt(ve),type:J,opacity:ne},itemStyle:{color:Je,opacity:ne},showSymbol:j||pe,symbol:de,symbolSize:j&&!pe?0:Be,step:z?Xe:!1}),i.$$.dirty[0]&402653304|i.$$.dirty[1]&1992&&t(36,Re=os(l,g,P,L,r,je,Ie,O,N,se,void 0,void 0,ae,Ee)),i.$$.dirty[1]&32&&Ce.update(_=>(_.series.push(...Re),_.legend.data.push(...Re.map(y=>y.name.toString())),_)),i.$$.dirty[0]&4096&&ze&&Ce.update(_=>({..._,...ze})),i.$$.dirty[1]&16&&(re={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:[C==="time"?"2%":"0%","2%"]}})},[o,n,oe,P,ae,L,Ie,pe,j,me,Te,z,ze,Ne,ve,J,ne,de,Be,De,ye,_e,we,B,Y,U,Xe,se,Ee,fe,xe,X,e,q,r,C,Re,N,O,je,g,l,M,k,Je,He,I]}class dn extends Gn{constructor(a){super(),Qn(this,a,ks,null,Wn,{y:3,y2:4,series:5,options:12,name:6,lineColor:13,lineWidth:14,lineType:15,lineOpacity:16,markers:7,markerShape:17,markerSize:18,labels:8,labelSize:19,labelPosition:9,labelColor:20,labelFmt:21,yLabelFmt:22,y2LabelFmt:23,y2SeriesType:24,showAllLabels:10,handleMissing:25,step:11,stepPosition:26,seriesOrder:27,seriesLabelFmt:28},null,[-1,-1])}}const{document:st}=cs;function Cs(i){let a,t=F.title+"",n;return{c(){a=h("h1"),n=qt(t),this.h()},l(o){a=f(o,"H1",{class:!0});var l=x(a);n=Et(l,t),l.forEach(c),this.h()},h(){m(a,"class","title")},m(o,l){$(o,a,l),u(a,n)},p:ce,d(o){o&&c(a)}}}function Ss(i){return{c(){this.h()},l(a){this.h()},h(){st.title="Evidence"},m:ce,p:ce,d:ce}}function Ds(i){let a,t,n,o,l;return st.title=a=F.title,{c(){t=v(),n=h("meta"),o=v(),l=h("meta"),this.h()},l(g){t=b(g),n=f(g,"META",{property:!0,content:!0}),o=b(g),l=f(g,"META",{name:!0,content:!0}),this.h()},h(){var g,r;m(n,"property","og:title"),m(n,"content",((g=F.og)==null?void 0:g.title)??F.title),m(l,"name","twitter:title"),m(l,"content",((r=F.og)==null?void 0:r.title)??F.title)},m(g,r){$(g,t,r),$(g,n,r),$(g,o,r),$(g,l,r)},p(g,r){r&0&&a!==(a=F.title)&&(st.title=a)},d(g){g&&(c(t),c(n),c(o),c(l))}}}function Ts(i){var l,g;let a,t,n=(F.description||((l=F.og)==null?void 0:l.description))&&Es(),o=((g=F.og)==null?void 0:g.image)&&qs();return{c(){n&&n.c(),a=v(),o&&o.c(),t=Ea()},l(r){n&&n.l(r),a=b(r),o&&o.l(r),t=Ea()},m(r,k){n&&n.m(r,k),$(r,a,k),o&&o.m(r,k),$(r,t,k)},p(r,k){var M,e;(F.description||(M=F.og)!=null&&M.description)&&n.p(r,k),(e=F.og)!=null&&e.image&&o.p(r,k)},d(r){r&&(c(a),c(t)),n&&n.d(r),o&&o.d(r)}}}function Es(i){let a,t,n,o,l;return{c(){a=h("meta"),t=v(),n=h("meta"),o=v(),l=h("meta"),this.h()},l(g){a=f(g,"META",{name:!0,content:!0}),t=b(g),n=f(g,"META",{property:!0,content:!0}),o=b(g),l=f(g,"META",{name:!0,content:!0}),this.h()},h(){var g,r,k;m(a,"name","description"),m(a,"content",F.description??((g=F.og)==null?void 0:g.description)),m(n,"property","og:description"),m(n,"content",((r=F.og)==null?void 0:r.description)??F.description),m(l,"name","twitter:description"),m(l,"content",((k=F.og)==null?void 0:k.description)??F.description)},m(g,r){$(g,a,r),$(g,t,r),$(g,n,r),$(g,o,r),$(g,l,r)},p:ce,d(g){g&&(c(a),c(t),c(n),c(o),c(l))}}}function qs(i){let a,t,n;return{c(){a=h("meta"),t=v(),n=h("meta"),this.h()},l(o){a=f(o,"META",{property:!0,content:!0}),t=b(o),n=f(o,"META",{name:!0,content:!0}),this.h()},h(){var o,l;m(a,"property","og:image"),m(a,"content",Fa((o=F.og)==null?void 0:o.image)),m(n,"name","twitter:image"),m(n,"content",Fa((l=F.og)==null?void 0:l.image))},m(o,l){$(o,a,l),$(o,t,l),$(o,n,l)},p:ce,d(o){o&&(c(a),c(t),c(n))}}}function zn(i){let a,t;return a=new ea({props:{queryID:"bu_list",queryResult:i[0]}}),{c(){E(a.$$.fragment)},l(n){T(a.$$.fragment,n)},m(n,o){D(a,n,o),t=!0},p(n,o){const l={};o[0]&1&&(l.queryResult=n[0]),a.$set(l)},i(n){t||(p(a.$$.fragment,n),t=!0)},o(n){w(a.$$.fragment,n),t=!1},d(n){S(a,n)}}}function Nn(i){let a,t;return a=new ea({props:{queryID:"region_list",queryResult:i[1]}}),{c(){E(a.$$.fragment)},l(n){T(a.$$.fragment,n)},m(n,o){D(a,n,o),t=!0},p(n,o){const l={};o[0]&2&&(l.queryResult=n[1]),a.$set(l)},i(n){t||(p(a.$$.fragment,n),t=!0)},o(n){w(a.$$.fragment,n),t=!1},d(n){S(a,n)}}}function Bn(i){let a,t;return a=new ea({props:{queryID:"cockpit_summary",queryResult:i[2]}}),{c(){E(a.$$.fragment)},l(n){T(a.$$.fragment,n)},m(n,o){D(a,n,o),t=!0},p(n,o){const l={};o[0]&4&&(l.queryResult=n[2]),a.$set(l)},i(n){t||(p(a.$$.fragment,n),t=!0)},o(n){w(a.$$.fragment,n),t=!1},d(n){S(a,n)}}}function Yn(i){let a,t;return a=new ea({props:{queryID:"monthly_cash_flow",queryResult:i[3]}}),{c(){E(a.$$.fragment)},l(n){T(a.$$.fragment,n)},m(n,o){D(a,n,o),t=!0},p(n,o){const l={};o[0]&8&&(l.queryResult=n[3]),a.$set(l)},i(n){t||(p(a.$$.fragment,n),t=!0)},o(n){w(a.$$.fragment,n),t=!1},d(n){S(a,n)}}}function Un(i){let a,t;return a=new ea({props:{queryID:"margin_fade_trend",queryResult:i[4]}}),{c(){E(a.$$.fragment)},l(n){T(a.$$.fragment,n)},m(n,o){D(a,n,o),t=!0},p(n,o){const l={};o[0]&16&&(l.queryResult=n[4]),a.$set(l)},i(n){t||(p(a.$$.fragment,n),t=!0)},o(n){w(a.$$.fragment,n),t=!1},d(n){S(a,n)}}}function Jn(i){let a,t;return a=new ea({props:{queryID:"revenue_forecast_chart",queryResult:i[5]}}),{c(){E(a.$$.fragment)},l(n){T(a.$$.fragment,n)},m(n,o){D(a,n,o),t=!0},p(n,o){const l={};o[0]&32&&(l.queryResult=n[5]),a.$set(l)},i(n){t||(p(a.$$.fragment,n),t=!0)},o(n){w(a.$$.fragment,n),t=!1},d(n){S(a,n)}}}function Xn(i){let a,t;return a=new ea({props:{queryID:"lead_to_cash_chart",queryResult:i[6]}}),{c(){E(a.$$.fragment)},l(n){T(a.$$.fragment,n)},m(n,o){D(a,n,o),t=!0},p(n,o){const l={};o[0]&64&&(l.queryResult=n[6]),a.$set(l)},i(n){t||(p(a.$$.fragment,n),t=!0)},o(n){w(a.$$.fragment,n),t=!1},d(n){S(a,n)}}}function Fs(i){let a,t='<span class="text-teal-600 font-bold">✓</span> <span>Accounts Receivable collection is healthy with zero overdue balances.</span>';return{c(){a=h("div"),a.innerHTML=t,this.h()},l(n){a=f(n,"DIV",{class:!0,"data-svelte-h":!0}),H(a)!=="svelte-1x3y3nl"&&(a.innerHTML=t),this.h()},h(){m(a,"class","flex items-start gap-1")},m(n,o){$(n,a,o)},p:ce,i:ce,o:ce,d(n){n&&c(a)}}}function Is(i){let a,t,n="⚠️",o,l,g,r,k,M;return r=new Tt({props:{data:i[2],column:"total_ar_overdue",fmt:"usd"}}),{c(){a=h("div"),t=h("span"),t.textContent=n,o=v(),l=h("span"),g=qt("Overdue Accounts Receivable: "),E(r.$$.fragment),k=qt(" in Xero pending collection."),this.h()},l(e){a=f(e,"DIV",{class:!0});var q=x(a);t=f(q,"SPAN",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-vnqsfp"&&(t.textContent=n),o=b(q),l=f(q,"SPAN",{});var C=x(l);g=Et(C,"Overdue Accounts Receivable: "),T(r.$$.fragment,C),k=Et(C," in Xero pending collection."),C.forEach(c),q.forEach(c),this.h()},h(){m(t,"class","text-amber-600 font-bold"),m(a,"class","flex items-start gap-1")},m(e,q){$(e,a,q),u(a,t),u(a,o),u(a,l),u(l,g),D(r,l,null),u(l,k),M=!0},p(e,q){const C={};q[0]&4&&(C.data=e[2]),r.$set(C)},i(e){M||(p(r.$$.fragment,e),M=!0)},o(e){w(r.$$.fragment,e),M=!1},d(e){e&&c(a),S(r)}}}function As(i){let a,t='<span class="text-teal-600 font-bold">✓</span> <span>Gross Profit Margin is performing on target vs sold estimates.</span>';return{c(){a=h("div"),a.innerHTML=t,this.h()},l(n){a=f(n,"DIV",{class:!0,"data-svelte-h":!0}),H(a)!=="svelte-su8jo"&&(a.innerHTML=t),this.h()},h(){m(a,"class","flex items-start gap-1")},m(n,o){$(n,a,o)},p:ce,i:ce,o:ce,d(n){n&&c(a)}}}function Ms(i){let a,t,n="⚠️",o,l,g,r,k,M;return r=new Tt({props:{data:i[2],column:"margin_fade_pct",fmt:"pct1"}}),{c(){a=h("div"),t=h("span"),t.textContent=n,o=v(),l=h("span"),g=qt("Margin Fade Warning: Net margin is "),E(r.$$.fragment),k=qt(" below sold contract estimate."),this.h()},l(e){a=f(e,"DIV",{class:!0});var q=x(a);t=f(q,"SPAN",{class:!0,"data-svelte-h":!0}),H(t)!=="svelte-vnqsfp"&&(t.textContent=n),o=b(q),l=f(q,"SPAN",{});var C=x(l);g=Et(C,"Margin Fade Warning: Net margin is "),T(r.$$.fragment,C),k=Et(C," below sold contract estimate."),C.forEach(c),q.forEach(c),this.h()},h(){m(t,"class","text-amber-600 font-bold"),m(a,"class","flex items-start gap-1")},m(e,q){$(e,a,q),u(a,t),u(a,o),u(a,l),u(l,g),D(r,l,null),u(l,k),M=!0},p(e,q){const C={};q[0]&4&&(C.data=e[2]),r.$set(C)},i(e){M||(p(r.$$.fragment,e),M=!0)},o(e){w(r.$$.fragment,e),M=!1},d(e){e&&c(a),S(r)}}}function Ls(i){let a,t,n,o,l,g;return a=new qa({props:{y:"billed_revenue",name:"Billed Revenue (Xero)"}}),n=new qa({props:{y:"job_costs",name:"Job Costs (Procore)"}}),l=new dn({props:{y:"booked_contracts",name:"Booked Contracts (HubSpot)"}}),{c(){E(a.$$.fragment),t=v(),E(n.$$.fragment),o=v(),E(l.$$.fragment)},l(r){T(a.$$.fragment,r),t=b(r),T(n.$$.fragment,r),o=b(r),T(l.$$.fragment,r)},m(r,k){D(a,r,k),$(r,t,k),D(n,r,k),$(r,o,k),D(l,r,k),g=!0},p:ce,i(r){g||(p(a.$$.fragment,r),p(n.$$.fragment,r),p(l.$$.fragment,r),g=!0)},o(r){w(a.$$.fragment,r),w(n.$$.fragment,r),w(l.$$.fragment,r),g=!1},d(r){r&&(c(t),c(o)),S(a,r),S(n,r),S(l,r)}}}function Vs(i){let a,t,n,o;return a=new dn({props:{y:"sold_margin_pct",name:"Sold Margin Target"}}),n=new dn({props:{y:"actual_margin_pct",name:"Actual Gross Margin %"}}),{c(){E(a.$$.fragment),t=v(),E(n.$$.fragment)},l(l){T(a.$$.fragment,l),t=b(l),T(n.$$.fragment,l)},m(l,g){D(a,l,g),$(l,t,g),D(n,l,g),o=!0},p:ce,i(l){o||(p(a.$$.fragment,l),p(n.$$.fragment,l),o=!0)},o(l){w(a.$$.fragment,l),w(n.$$.fragment,l),o=!1},d(l){l&&c(t),S(a,l),S(n,l)}}}function js(i){let a,t,n,o;return a=new qa({props:{y:"weighted_pipeline",name:"Weighted Pipeline (HubSpot)",stack:"forecast"}}),n=new qa({props:{y:"wip_billing_schedule",name:"WIP Billing Schedule (Procore)",stack:"forecast"}}),{c(){E(a.$$.fragment),t=v(),E(n.$$.fragment)},l(l){T(a.$$.fragment,l),t=b(l),T(n.$$.fragment,l)},m(l,g){D(a,l,g),$(l,t,g),D(n,l,g),o=!0},p:ce,i(l){o||(p(a.$$.fragment,l),p(n.$$.fragment,l),o=!0)},o(l){w(a.$$.fragment,l),w(n.$$.fragment,l),o=!1},d(l){l&&c(t),S(a,l),S(n,l)}}}function Rs(i){let a,t,n,o,l,g,r,k,M,e,q,C,O,N,je="Overview Cockpit",Re,re,Je="Sales & Win-Loss",he,le,He="Operations & Vendors",Pe,ge,I,oe,Ce="Executive Cockpit Dashboard",Oe,P,Se,ae,Fe,L,be,ze="📅",Ie,Ne,ve,J,ne,pe,de,Be,j,De="Date snapshotted at June 2026",me,ye,_e,fe,we="<span>💡</span> Executive Cross-System Insights",xe,B,X,Y,Te,U,z,Xe,se,Ee,Ae,Ye,ta='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total Billed Revenue</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',_,y,A,R,ue,$e,ie,V,Ia,Ft,mn='<span>Actual invoices billed (Xero)</span> <span class="font-extrabold text-[#1D5F60] bg-[#1D5F60]/10 px-1.5 py-0.5 rounded">Xero Finance</span>',Aa,it,Ge,It,fn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Gross Profit Margin</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',Ma,aa,rt,La,na,sa,Va,lt,ja,At,hn='<span>Billed (Xero) minus Job Costs (Procore)</span> <span class="font-extrabold text-[#264773] bg-[#264773]/10 px-1.5 py-0.5 rounded">Cross-SaaS</span>',Ra,ot,Qe,Mt,gn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">WIP Value (Unbilled)</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',Ha,ia,ut,Pa,Lt,bn="<span>Work completed pending billing</span>",Oa,Vt,vn='<span>Completion % (Procore) &amp; Contract (HubSpot)</span> <span class="font-extrabold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">Procore/HubSpot</span>',za,_t,Ke,jt,pn='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total AR Aging</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#B45309]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',Na,ra,ct,Ba,Rt,yn="<span>Overdue Accounts Receivable</span>",Ya,Ht,wn='<span>Overdue invoice balance in Xero</span> <span class="font-extrabold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">Xero AR</span>',fa,Me,dt,mt,Pt,xn="1. Monthly Cash Flow (Billed vs. Costs vs. Contracts)",Ua,Ot,Ja,ft,Xa,ht,gt,zt,$n="2. Margin Fade (Sold vs. Actual Margin)",Wa,Nt,Ga,bt,Qa,vt,pt,Bt,kn="3. Revenue Forecast (Pipeline + WIP Schedule)",Ka,Yt,Za,yt,en,wt,xt,Ut,Cn="4. Lead to Cash Cycle Time (Days)",tn,Jt,an,$t,_a,nn,Sn,Ze=typeof F<"u"&&F.title&&F.hide_title!==!0&&Cs();function Kn(s,d){return typeof F<"u"&&F.title?Ds:Ss}let ca=Kn()(i),et=typeof F=="object"&&Ts(),W=i[0]&&zn(i),G=i[1]&&Nn(i),Q=i[2]&&Bn(i),K=i[3]&&Yn(i),Z=i[4]&&Un(i),ee=i[5]&&Jn(i),te=i[6]&&Xn(i);ae=new us({props:{name:"time_filter",defaultValue:"ytd"}}),ne=new Pn({props:{name:"business_unit",title:"Business Unit",data:i[0],valueColumn:"business_unit_id",labelColumn:"business_unit"}}),de=new Pn({props:{name:"region",title:"Region",data:i[1],valueColumn:"region_id",labelColumn:"region"}});const Dn=[Is,Fs],kt=[];function Tn(s,d){var ke,Le;return(ke=s[2][0])!=null&&ke.total_ar_overdue&&((Le=s[2][0])==null?void 0:Le.total_ar_overdue)>0?0:1}X=Tn(i),Y=kt[X]=Dn[X](i);const En=[Ms,As],Ct=[];function qn(s,d){var ke,Le;return(ke=s[2][0])!=null&&ke.margin_fade_pct&&((Le=s[2][0])==null?void 0:Le.margin_fade_pct)>.03?0:1}return U=qn(i),z=Ct[U]=En[U](i),A=new Tt({props:{data:i[2],column:"total_billed_revenue",fmt:"usd"}}),V=new Tt({props:{data:i[2],column:"billed_revenue_target",fmt:"usd0"}}),rt=new Tt({props:{data:i[2],column:"gross_profit_margin_pct",fmt:"pct1"}}),lt=new Tt({props:{data:i[2],column:"gross_profit_amount",fmt:"usd0"}}),ut=new Tt({props:{data:i[2],column:"wip_value",fmt:"usd"}}),ct=new Tt({props:{data:i[2],column:"total_ar_overdue",fmt:"usd"}}),Ot=new Da({props:{description:"Compares actual invoices billed (Xero), job costs (Procore), and booked contracts (HubSpot)."}}),ft=new on({props:{data:i[3],x:"month_date",sort:"false",xType:"category",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",colorPalette:["#1D5F60","#B45309","#7B8DA6"],height:185,legend:"true",echartsOptions:{grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},series:[{stack:"group_billed"},{stack:"group_costs"}],xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:i[45]}}]},$$slots:{default:[Ls]},$$scope:{ctx:i}}}),Nt=new Da({props:{description:"Measures sold contract margin % (HubSpot) vs actual realized margin % (Procore & Xero)."}}),bt=new on({props:{data:i[4],x:"month_date",sort:"false",xType:"category",yMin:.25,yMax:.6,yFmt:"pct1",colorPalette:["#7B8DA6","#1D5F60"],height:185,legend:"true",echartsOptions:{grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:i[46]}}]},$$slots:{default:[Vs]},$$scope:{ctx:i}}}),Yt=new Da({props:{description:"Combines HubSpot weighted open pipeline with Procore active WIP billing schedules."}}),yt=new on({props:{data:i[5],x:"month_date",sort:"false",xType:"category",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",colorPalette:["#1D5F60","#7B8DA6"],height:185,legend:"true",echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:i[47]}}]},$$slots:{default:[js]},$$scope:{ctx:i}}}),Jt=new Da({props:{description:"Average days elapsed from HubSpot lead creation to final Xero invoice payment."}}),$t=new _s({props:{data:i[6],x:"business_unit",y:"avg_days",swapXY:"true",fillOpacity:"0.9",labels:!0,labelFmt:"num0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:185,echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{left:40,right:35,top:15,bottom:25,containLabel:!0},yAxis:{axisLabel:{interval:0,formatter:i[48],rich:{xsmall:{fontSize:7,color:"#4b5563"},small:{fontSize:9,color:"#4b5563"},medium:{fontSize:9.5,color:"#4b5563"}}}}}}}),{c(){Ze&&Ze.c(),a=v(),ca.c(),t=h("meta"),n=h("meta"),et&&et.c(),o=Ea(),l=v(),W&&W.c(),g=v(),G&&G.c(),r=v(),Q&&Q.c(),k=v(),K&&K.c(),M=v(),Z&&Z.c(),e=v(),ee&&ee.c(),q=v(),te&&te.c(),C=v(),O=h("div"),N=h("button"),N.textContent=je,Re=v(),re=h("button"),re.textContent=Je,he=v(),le=h("button"),le.textContent=He,Pe=v(),ge=h("div"),I=h("div"),oe=h("div"),oe.textContent=Ce,Oe=v(),P=h("div"),Se=h("div"),E(ae.$$.fragment),Fe=v(),L=h("div"),be=h("span"),be.textContent=ze,Ie=v(),Ne=qt(i[7]),ve=v(),J=h("div"),E(ne.$$.fragment),pe=v(),E(de.$$.fragment),Be=v(),j=h("div"),j.textContent=De,me=v(),ye=h("div"),_e=h("div"),fe=h("div"),fe.innerHTML=we,xe=v(),B=h("div"),Y.c(),Te=v(),z.c(),Xe=v(),se=h("div"),Ee=h("div"),Ae=h("div"),Ye=h("div"),Ye.innerHTML=ta,_=v(),y=h("h2"),E(A.$$.fragment),R=v(),ue=h("div"),$e=h("span"),ie=qt("🎯 Target: "),E(V.$$.fragment),Ia=v(),Ft=h("div"),Ft.innerHTML=mn,Aa=v(),it=h("div"),Ge=h("div"),It=h("div"),It.innerHTML=fn,Ma=v(),aa=h("h2"),E(rt.$$.fragment),La=v(),na=h("div"),sa=h("span"),Va=qt("Profit: "),E(lt.$$.fragment),ja=v(),At=h("div"),At.innerHTML=hn,Ra=v(),ot=h("div"),Qe=h("div"),Mt=h("div"),Mt.innerHTML=gn,Ha=v(),ia=h("h2"),E(ut.$$.fragment),Pa=v(),Lt=h("div"),Lt.innerHTML=bn,Oa=v(),Vt=h("div"),Vt.innerHTML=vn,za=v(),_t=h("div"),Ke=h("div"),jt=h("div"),jt.innerHTML=pn,Na=v(),ra=h("h2"),E(ct.$$.fragment),Ba=v(),Rt=h("div"),Rt.innerHTML=yn,Ya=v(),Ht=h("div"),Ht.innerHTML=wn,fa=v(),Me=h("div"),dt=h("div"),mt=h("div"),Pt=h("span"),Pt.textContent=xn,Ua=v(),E(Ot.$$.fragment),Ja=v(),E(ft.$$.fragment),Xa=v(),ht=h("div"),gt=h("div"),zt=h("span"),zt.textContent=$n,Wa=v(),E(Nt.$$.fragment),Ga=v(),E(bt.$$.fragment),Qa=v(),vt=h("div"),pt=h("div"),Bt=h("span"),Bt.textContent=kn,Ka=v(),E(Yt.$$.fragment),Za=v(),E(yt.$$.fragment),en=v(),wt=h("div"),xt=h("div"),Ut=h("span"),Ut.textContent=Cn,tn=v(),E(Jt.$$.fragment),an=v(),E($t.$$.fragment),this.h()},l(s){Ze&&Ze.l(s),a=b(s);const d=ns("svelte-2igo1p",st.head);ca.l(d),t=f(d,"META",{name:!0,content:!0}),n=f(d,"META",{name:!0,content:!0}),et&&et.l(d),o=Ea(),d.forEach(c),l=b(s),W&&W.l(s),g=b(s),G&&G.l(s),r=b(s),Q&&Q.l(s),k=b(s),K&&K.l(s),M=b(s),Z&&Z.l(s),e=b(s),ee&&ee.l(s),q=b(s),te&&te.l(s),C=b(s),O=f(s,"DIV",{class:!0});var ke=x(O);N=f(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),H(N)!=="svelte-vgd2bf"&&(N.textContent=je),Re=b(ke),re=f(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),H(re)!=="svelte-1cvqxla"&&(re.textContent=Je),he=b(ke),le=f(ke,"BUTTON",{class:!0,"data-svelte-h":!0}),H(le)!=="svelte-1kxcs33"&&(le.textContent=He),ke.forEach(c),Pe=b(s),ge=f(s,"DIV",{class:!0});var Le=x(ge);I=f(Le,"DIV",{class:!0});var We=x(I);oe=f(We,"DIV",{class:!0,"data-svelte-h":!0}),H(oe)!=="svelte-1t1wfq6"&&(oe.textContent=Ce),Oe=b(We),P=f(We,"DIV",{class:!0});var St=x(P);Se=f(St,"DIV",{class:!0});var Xt=x(Se);T(ae.$$.fragment,Xt),Fe=b(Xt),L=f(Xt,"DIV",{class:!0});var Wt=x(L);be=f(Wt,"SPAN",{class:!0,"data-svelte-h":!0}),H(be)!=="svelte-n1bzfj"&&(be.textContent=ze),Ie=b(Wt),Ne=Et(Wt,i[7]),Wt.forEach(c),Xt.forEach(c),ve=b(St),J=f(St,"DIV",{class:!0});var Gt=x(J);T(ne.$$.fragment,Gt),pe=b(Gt),T(de.$$.fragment,Gt),Gt.forEach(c),St.forEach(c),Be=b(We),j=f(We,"DIV",{style:!0,class:!0,"data-svelte-h":!0}),H(j)!=="svelte-tonn3n"&&(j.textContent=De),We.forEach(c),me=b(Le),ye=f(Le,"DIV",{class:!0});var da=x(ye);_e=f(da,"DIV",{class:!0});var Qt=x(_e);fe=f(Qt,"DIV",{class:!0,"data-svelte-h":!0}),H(fe)!=="svelte-d6otup"&&(fe.innerHTML=we),xe=b(Qt),B=f(Qt,"DIV",{class:!0});var Kt=x(B);Y.l(Kt),Te=b(Kt),z.l(Kt),Kt.forEach(c),Qt.forEach(c),da.forEach(c),Le.forEach(c),Xe=b(s),se=f(s,"DIV",{class:!0});var Ve=x(se);Ee=f(Ve,"DIV",{class:!0});var tt=x(Ee);Ae=f(tt,"DIV",{});var Ue=x(Ae);Ye=f(Ue,"DIV",{class:!0,"data-svelte-h":!0}),H(Ye)!=="svelte-unlelm"&&(Ye.innerHTML=ta),_=b(Ue),y=f(Ue,"H2",{class:!0});var ma=x(y);T(A.$$.fragment,ma),ma.forEach(c),R=b(Ue),ue=f(Ue,"DIV",{class:!0});var Fn=x(ue);$e=f(Fn,"SPAN",{});var sn=x($e);ie=Et(sn,"🎯 Target: "),T(V.$$.fragment,sn),sn.forEach(c),Fn.forEach(c),Ue.forEach(c),Ia=b(tt),Ft=f(tt,"DIV",{class:!0,"data-svelte-h":!0}),H(Ft)!=="svelte-1wfro46"&&(Ft.innerHTML=mn),tt.forEach(c),Aa=b(Ve),it=f(Ve,"DIV",{class:!0});var ha=x(it);Ge=f(ha,"DIV",{});var la=x(Ge);It=f(la,"DIV",{class:!0,"data-svelte-h":!0}),H(It)!=="svelte-aioxhf"&&(It.innerHTML=fn),Ma=b(la),aa=f(la,"H2",{class:!0});var In=x(aa);T(rt.$$.fragment,In),In.forEach(c),La=b(la),na=f(la,"DIV",{class:!0});var An=x(na);sa=f(An,"SPAN",{});var rn=x(sa);Va=Et(rn,"Profit: "),T(lt.$$.fragment,rn),rn.forEach(c),An.forEach(c),la.forEach(c),ja=b(ha),At=f(ha,"DIV",{class:!0,"data-svelte-h":!0}),H(At)!=="svelte-1nwzd3z"&&(At.innerHTML=hn),ha.forEach(c),Ra=b(Ve),ot=f(Ve,"DIV",{class:!0});var ga=x(ot);Qe=f(ga,"DIV",{});var oa=x(Qe);Mt=f(oa,"DIV",{class:!0,"data-svelte-h":!0}),H(Mt)!=="svelte-13kcd51"&&(Mt.innerHTML=gn),Ha=b(oa),ia=f(oa,"H2",{class:!0});var Mn=x(ia);T(ut.$$.fragment,Mn),Mn.forEach(c),Pa=b(oa),Lt=f(oa,"DIV",{class:!0,"data-svelte-h":!0}),H(Lt)!=="svelte-qygvh8"&&(Lt.innerHTML=bn),oa.forEach(c),Oa=b(ga),Vt=f(ga,"DIV",{class:!0,"data-svelte-h":!0}),H(Vt)!=="svelte-5z2ugu"&&(Vt.innerHTML=vn),ga.forEach(c),za=b(Ve),_t=f(Ve,"DIV",{class:!0});var ba=x(_t);Ke=f(ba,"DIV",{});var ua=x(Ke);jt=f(ua,"DIV",{class:!0,"data-svelte-h":!0}),H(jt)!=="svelte-l89xv3"&&(jt.innerHTML=pn),Na=b(ua),ra=f(ua,"H2",{class:!0});var Ln=x(ra);T(ct.$$.fragment,Ln),Ln.forEach(c),Ba=b(ua),Rt=f(ua,"DIV",{class:!0,"data-svelte-h":!0}),H(Rt)!=="svelte-1uqgglq"&&(Rt.innerHTML=yn),ua.forEach(c),Ya=b(ba),Ht=f(ba,"DIV",{class:!0,"data-svelte-h":!0}),H(Ht)!=="svelte-1xmssyr"&&(Ht.innerHTML=wn),ba.forEach(c),Ve.forEach(c),fa=b(s),Me=f(s,"DIV",{class:!0});var Dt=x(Me);dt=f(Dt,"DIV",{class:!0});var va=x(dt);mt=f(va,"DIV",{class:!0});var pa=x(mt);Pt=f(pa,"SPAN",{class:!0,"data-svelte-h":!0}),H(Pt)!=="svelte-1l22hzz"&&(Pt.textContent=xn),Ua=b(pa),T(Ot.$$.fragment,pa),pa.forEach(c),Ja=b(va),T(ft.$$.fragment,va),va.forEach(c),Xa=b(Dt),ht=f(Dt,"DIV",{class:!0});var ya=x(ht);gt=f(ya,"DIV",{class:!0});var wa=x(gt);zt=f(wa,"SPAN",{class:!0,"data-svelte-h":!0}),H(zt)!=="svelte-1ejsgwo"&&(zt.textContent=$n),Wa=b(wa),T(Nt.$$.fragment,wa),wa.forEach(c),Ga=b(ya),T(bt.$$.fragment,ya),ya.forEach(c),Qa=b(Dt),vt=f(Dt,"DIV",{class:!0});var xa=x(vt);pt=f(xa,"DIV",{class:!0});var $a=x(pt);Bt=f($a,"SPAN",{class:!0,"data-svelte-h":!0}),H(Bt)!=="svelte-l4wgbn"&&(Bt.textContent=kn),Ka=b($a),T(Yt.$$.fragment,$a),$a.forEach(c),Za=b(xa),T(yt.$$.fragment,xa),xa.forEach(c),en=b(Dt),wt=f(Dt,"DIV",{class:!0});var ka=x(wt);xt=f(ka,"DIV",{class:!0});var Ca=x(xt);Ut=f(Ca,"SPAN",{class:!0,"data-svelte-h":!0}),H(Ut)!=="svelte-1ct2cah"&&(Ut.textContent=Cn),tn=b(Ca),T(Jt.$$.fragment,Ca),Ca.forEach(c),an=b(ka),T($t.$$.fragment,ka),ka.forEach(c),Dt.forEach(c),this.h()},h(){m(t,"name","twitter:card"),m(t,"content","summary_large_image"),m(n,"name","twitter:site"),m(n,"content","@evidence_dev"),m(N,"class","px-3 py-1 rounded bg-[#264773] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer"),m(re,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),m(le,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),m(O,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),m(oe,"class","text-base font-extrabold text-[#264773]"),m(be,"class","text-gray-400"),m(L,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded flex items-center gap-1.5 w-max"),m(Se,"class","flex flex-col gap-1"),m(J,"class","flex items-center gap-2"),m(P,"class","flex flex-wrap items-start gap-3"),as(j,"color","#ffffff"),m(j,"class","text-[8px] font-semibold bg-white/10 border border-white/20 px-2 py-0.5 rounded self-start"),m(I,"class","flex flex-col gap-2"),m(fe,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center gap-1"),m(B,"class","flex flex-col gap-1 text-gray-600 leading-tight"),m(_e,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[340px] min-h-[75px] flex flex-col justify-between text-[9px]"),m(ye,"class","flex flex-col items-end self-stretch md:self-auto"),m(ge,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),m(Ye,"class","flex justify-between items-center"),m(y,"class","text-xl font-extrabold mt-0.5 text-gray-800"),m(ue,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500"),m(Ft,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),m(Ee,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]"),m(It,"class","flex justify-between items-center"),m(aa,"class","text-xl font-extrabold mt-0.5 text-gray-800"),m(na,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-[#264773]"),m(At,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),m(it,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),m(Mt,"class","flex justify-between items-center"),m(ia,"class","text-xl font-extrabold mt-0.5 text-gray-800"),m(Lt,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500"),m(Vt,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),m(ot,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),m(jt,"class","flex justify-between items-center"),m(ra,"class","text-xl font-extrabold mt-0.5 text-gray-800"),m(Rt,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-amber-700"),m(Ht,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),m(_t,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] py-3 px-3.5 flex flex-col justify-between h-[120px]"),m(se,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),m(Pt,"class","font-bold text-gray-700 text-xs"),m(mt,"class","flex items-center gap-1.5 mb-1"),m(dt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),m(zt,"class","font-bold text-gray-700 text-xs"),m(gt,"class","flex items-center gap-1.5 mb-1"),m(ht,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),m(Bt,"class","font-bold text-gray-700 text-xs"),m(pt,"class","flex items-center gap-1.5 mb-1"),m(vt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),m(Ut,"class","font-bold text-gray-700 text-xs"),m(xt,"class","flex items-center gap-1.5 mb-1"),m(wt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),m(Me,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(s,d){Ze&&Ze.m(s,d),$(s,a,d),ca.m(st.head,null),u(st.head,t),u(st.head,n),et&&et.m(st.head,null),u(st.head,o),$(s,l,d),W&&W.m(s,d),$(s,g,d),G&&G.m(s,d),$(s,r,d),Q&&Q.m(s,d),$(s,k,d),K&&K.m(s,d),$(s,M,d),Z&&Z.m(s,d),$(s,e,d),ee&&ee.m(s,d),$(s,q,d),te&&te.m(s,d),$(s,C,d),$(s,O,d),u(O,N),u(O,Re),u(O,re),u(O,he),u(O,le),$(s,Pe,d),$(s,ge,d),u(ge,I),u(I,oe),u(I,Oe),u(I,P),u(P,Se),D(ae,Se,null),u(Se,Fe),u(Se,L),u(L,be),u(L,Ie),u(L,Ne),u(P,ve),u(P,J),D(ne,J,null),u(J,pe),D(de,J,null),u(I,Be),u(I,j),u(ge,me),u(ge,ye),u(ye,_e),u(_e,fe),u(_e,xe),u(_e,B),kt[X].m(B,null),u(B,Te),Ct[U].m(B,null),$(s,Xe,d),$(s,se,d),u(se,Ee),u(Ee,Ae),u(Ae,Ye),u(Ae,_),u(Ae,y),D(A,y,null),u(Ae,R),u(Ae,ue),u(ue,$e),u($e,ie),D(V,$e,null),u(Ee,Ia),u(Ee,Ft),u(se,Aa),u(se,it),u(it,Ge),u(Ge,It),u(Ge,Ma),u(Ge,aa),D(rt,aa,null),u(Ge,La),u(Ge,na),u(na,sa),u(sa,Va),D(lt,sa,null),u(it,ja),u(it,At),u(se,Ra),u(se,ot),u(ot,Qe),u(Qe,Mt),u(Qe,Ha),u(Qe,ia),D(ut,ia,null),u(Qe,Pa),u(Qe,Lt),u(ot,Oa),u(ot,Vt),u(se,za),u(se,_t),u(_t,Ke),u(Ke,jt),u(Ke,Na),u(Ke,ra),D(ct,ra,null),u(Ke,Ba),u(Ke,Rt),u(_t,Ya),u(_t,Ht),$(s,fa,d),$(s,Me,d),u(Me,dt),u(dt,mt),u(mt,Pt),u(mt,Ua),D(Ot,mt,null),u(dt,Ja),D(ft,dt,null),u(Me,Xa),u(Me,ht),u(ht,gt),u(gt,zt),u(gt,Wa),D(Nt,gt,null),u(ht,Ga),D(bt,ht,null),u(Me,Qa),u(Me,vt),u(vt,pt),u(pt,Bt),u(pt,Ka),D(Yt,pt,null),u(vt,Za),D(yt,vt,null),u(Me,en),u(Me,wt),u(wt,xt),u(xt,Ut),u(xt,tn),D(Jt,xt,null),u(wt,an),D($t,wt,null),_a=!0,nn||(Sn=[ln(N,"click",i[42]),ln(re,"click",i[43]),ln(le,"click",i[44])],nn=!0)},p(s,d){typeof F<"u"&&F.title&&F.hide_title!==!0&&Ze.p(s,d),ca.p(s,d),typeof F=="object"&&et.p(s,d),s[0]?W?(W.p(s,d),d[0]&1&&p(W,1)):(W=zn(s),W.c(),p(W,1),W.m(g.parentNode,g)):W&&(nt(),w(W,1,1,()=>{W=null}),at()),s[1]?G?(G.p(s,d),d[0]&2&&p(G,1)):(G=Nn(s),G.c(),p(G,1),G.m(r.parentNode,r)):G&&(nt(),w(G,1,1,()=>{G=null}),at()),s[2]?Q?(Q.p(s,d),d[0]&4&&p(Q,1)):(Q=Bn(s),Q.c(),p(Q,1),Q.m(k.parentNode,k)):Q&&(nt(),w(Q,1,1,()=>{Q=null}),at()),s[3]?K?(K.p(s,d),d[0]&8&&p(K,1)):(K=Yn(s),K.c(),p(K,1),K.m(M.parentNode,M)):K&&(nt(),w(K,1,1,()=>{K=null}),at()),s[4]?Z?(Z.p(s,d),d[0]&16&&p(Z,1)):(Z=Un(s),Z.c(),p(Z,1),Z.m(e.parentNode,e)):Z&&(nt(),w(Z,1,1,()=>{Z=null}),at()),s[5]?ee?(ee.p(s,d),d[0]&32&&p(ee,1)):(ee=Jn(s),ee.c(),p(ee,1),ee.m(q.parentNode,q)):ee&&(nt(),w(ee,1,1,()=>{ee=null}),at()),s[6]?te?(te.p(s,d),d[0]&64&&p(te,1)):(te=Xn(s),te.c(),p(te,1),te.m(C.parentNode,C)):te&&(nt(),w(te,1,1,()=>{te=null}),at()),(!_a||d[0]&128)&&ts(Ne,s[7]);const ke={};d[0]&1&&(ke.data=s[0]),ne.$set(ke);const Le={};d[0]&2&&(Le.data=s[1]),de.$set(Le);let We=X;X=Tn(s),X===We?kt[X].p(s,d):(nt(),w(kt[We],1,1,()=>{kt[We]=null}),at(),Y=kt[X],Y?Y.p(s,d):(Y=kt[X]=Dn[X](s),Y.c()),p(Y,1),Y.m(B,Te));let St=U;U=qn(s),U===St?Ct[U].p(s,d):(nt(),w(Ct[St],1,1,()=>{Ct[St]=null}),at(),z=Ct[U],z?z.p(s,d):(z=Ct[U]=En[U](s),z.c()),p(z,1),z.m(B,null));const Xt={};d[0]&4&&(Xt.data=s[2]),A.$set(Xt);const Wt={};d[0]&4&&(Wt.data=s[2]),V.$set(Wt);const Gt={};d[0]&4&&(Gt.data=s[2]),rt.$set(Gt);const da={};d[0]&4&&(da.data=s[2]),lt.$set(da);const Qt={};d[0]&4&&(Qt.data=s[2]),ut.$set(Qt);const Kt={};d[0]&4&&(Kt.data=s[2]),ct.$set(Kt);const Ve={};d[0]&8&&(Ve.data=s[3]),d[0]&8&&(Ve.echartsOptions={grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},series:[{stack:"group_billed"},{stack:"group_costs"}],xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:s[45]}}]}),d[2]&4&&(Ve.$$scope={dirty:d,ctx:s}),ft.$set(Ve);const tt={};d[0]&16&&(tt.data=s[4]),d[0]&16&&(tt.echartsOptions={grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:s[46]}}]}),d[2]&4&&(tt.$$scope={dirty:d,ctx:s}),bt.$set(tt);const Ue={};d[0]&32&&(Ue.data=s[5]),d[0]&32&&(Ue.echartsOptions={tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:s[47]}}]}),d[2]&4&&(Ue.$$scope={dirty:d,ctx:s}),yt.$set(Ue);const ma={};d[0]&64&&(ma.data=s[6]),$t.$set(ma)},i(s){_a||(p(W),p(G),p(Q),p(K),p(Z),p(ee),p(te),p(ae.$$.fragment,s),p(ne.$$.fragment,s),p(de.$$.fragment,s),p(Y),p(z),p(A.$$.fragment,s),p(V.$$.fragment,s),p(rt.$$.fragment,s),p(lt.$$.fragment,s),p(ut.$$.fragment,s),p(ct.$$.fragment,s),p(Ot.$$.fragment,s),p(ft.$$.fragment,s),p(Nt.$$.fragment,s),p(bt.$$.fragment,s),p(Yt.$$.fragment,s),p(yt.$$.fragment,s),p(Jt.$$.fragment,s),p($t.$$.fragment,s),_a=!0)},o(s){w(W),w(G),w(Q),w(K),w(Z),w(ee),w(te),w(ae.$$.fragment,s),w(ne.$$.fragment,s),w(de.$$.fragment,s),w(Y),w(z),w(A.$$.fragment,s),w(V.$$.fragment,s),w(rt.$$.fragment,s),w(lt.$$.fragment,s),w(ut.$$.fragment,s),w(ct.$$.fragment,s),w(Ot.$$.fragment,s),w(ft.$$.fragment,s),w(Nt.$$.fragment,s),w(bt.$$.fragment,s),w(Yt.$$.fragment,s),w(yt.$$.fragment,s),w(Jt.$$.fragment,s),w($t.$$.fragment,s),_a=!1},d(s){s&&(c(a),c(l),c(g),c(r),c(k),c(M),c(e),c(q),c(C),c(O),c(Pe),c(ge),c(Xe),c(se),c(fa),c(Me)),Ze&&Ze.d(s),ca.d(s),c(t),c(n),et&&et.d(s),c(o),W&&W.d(s),G&&G.d(s),Q&&Q.d(s),K&&K.d(s),Z&&Z.d(s),ee&&ee.d(s),te&&te.d(s),S(ae),S(ne),S(de),kt[X].d(),Ct[U].d(),S(A),S(V),S(rt),S(lt),S(ut),S(ct),S(Ot),S(ft),S(Nt),S(bt),S(Yt),S(yt),S(Jt),S($t),nn=!1,es(Sn)}}}const F={title:"Executive Cockpit Dashboard"},Hs="2026-06-15";function Ta(i){const a=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${i.getDate()} ${a[i.getMonth()]} ${i.getFullYear()}`}function Ps(i,a){const t=new Date(a+"T00:00:00"),n=Ta(t);if(i==="mtd"){const o=new Date(t.getFullYear(),t.getMonth(),1);return`${Ta(o)} - ${n}`}if(i==="qtd"){const o=Math.floor(t.getMonth()/3)*3,l=new Date(t.getFullYear(),o,1);return`${Ta(l)} - ${n}`}if(i==="ytd"){const o=new Date(t.getFullYear(),0,1);return`${Ta(o)} - ${n}`}return`All Time - ${n}`}function Os(i,a,t){let n,o,l;cn(i,xs,y=>t(41,o=y)),cn(i,On,y=>t(53,l=y));let{data:g}=a,{data:r={},customFormattingSettings:k,__db:M,inputs:e}=g;ss(On,l="0545e563276d3ac6e3218cfecf67a14b",l);let q=vs(bs(e));is(q.subscribe(y=>t(11,e=y))),rs(ws,{getCustomFormats:()=>k.customFormats||[]});const C=(y,A)=>$s(M.query,y,{query_name:A});ps(C),o.params,Rn(()=>!0);let O={initialData:void 0,initialError:void 0},N=qe`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`,je=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`;r.bu_list_data&&(r.bu_list_data instanceof Error?O.initialError=r.bu_list_data:O.initialData=r.bu_list_data,r.bu_list_columns&&(O.knownColumns=r.bu_list_columns));let Re,re=!1;const Je=Zt.createReactive({callback:y=>{t(0,Re=y)},execFn:C},{id:"bu_list",...O});Je(je,{noResolve:N,...O}),globalThis[Symbol.for("bu_list")]={get value(){return Re}};let he={initialData:void 0,initialError:void 0},le=qe`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`,He=`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`;r.region_list_data&&(r.region_list_data instanceof Error?he.initialError=r.region_list_data:he.initialData=r.region_list_data,r.region_list_columns&&(he.knownColumns=r.region_list_columns));let Pe,ge=!1;const I=Zt.createReactive({callback:y=>{t(1,Pe=y)},execFn:C},{id:"region_list",...he});I(He,{noResolve:le,...he}),globalThis[Symbol.for("region_list")]={get value(){return Pe}};let oe={initialData:void 0,initialError:void 0},Ce=qe`select
    coalesce(sum(total_billed_revenue), 0) as total_billed_revenue,
    coalesce(sum(billed_revenue_target), 0) as billed_revenue_target,
    coalesce(sum(total_actual_job_costs), 0) as total_actual_job_costs,
    coalesce(sum(gross_profit_amount), 0) as gross_profit_amount,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as gross_profit_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then coalesce(avg(sold_margin_pct), 0.45) - ((sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue))
        else 0.0
    end as margin_fade_pct,
    coalesce(sum(wip_value), 0) as wip_value,
    coalesce(sum(total_ar_overdue), 0) as total_ar_overdue,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,Oe=`select
    coalesce(sum(total_billed_revenue), 0) as total_billed_revenue,
    coalesce(sum(billed_revenue_target), 0) as billed_revenue_target,
    coalesce(sum(total_actual_job_costs), 0) as total_actual_job_costs,
    coalesce(sum(gross_profit_amount), 0) as gross_profit_amount,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as gross_profit_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then coalesce(avg(sold_margin_pct), 0.45) - ((sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue))
        else 0.0
    end as margin_fade_pct,
    coalesce(sum(wip_value), 0) as wip_value,
    coalesce(sum(total_ar_overdue), 0) as total_ar_overdue,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;r.cockpit_summary_data&&(r.cockpit_summary_data instanceof Error?oe.initialError=r.cockpit_summary_data:oe.initialData=r.cockpit_summary_data,r.cockpit_summary_columns&&(oe.knownColumns=r.cockpit_summary_columns));let P,Se=!1;const ae=Zt.createReactive({callback:y=>{t(2,P=y)},execFn:C},{id:"cockpit_summary",...oe});ae(Oe,{noResolve:Ce,...oe}),globalThis[Symbol.for("cockpit_summary")]={get value(){return P}};let Fe={initialData:void 0,initialError:void 0},L=qe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(total_booked_pipeline) as booked_contracts
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`,be=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(total_booked_pipeline) as booked_contracts
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`;r.monthly_cash_flow_data&&(r.monthly_cash_flow_data instanceof Error?Fe.initialError=r.monthly_cash_flow_data:Fe.initialData=r.monthly_cash_flow_data,r.monthly_cash_flow_columns&&(Fe.knownColumns=r.monthly_cash_flow_columns));let ze,Ie=!1;const Ne=Zt.createReactive({callback:y=>{t(3,ze=y)},execFn:C},{id:"monthly_cash_flow",...Fe});Ne(be,{noResolve:L,...Fe}),globalThis[Symbol.for("monthly_cash_flow")]={get value(){return ze}};let ve={initialData:void 0,initialError:void 0},J=qe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as actual_margin_pct
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`,ne=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as actual_margin_pct
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`;r.margin_fade_trend_data&&(r.margin_fade_trend_data instanceof Error?ve.initialError=r.margin_fade_trend_data:ve.initialData=r.margin_fade_trend_data,r.margin_fade_trend_columns&&(ve.knownColumns=r.margin_fade_trend_columns));let pe,de=!1;const Be=Zt.createReactive({callback:y=>{t(4,pe=y)},execFn:C},{id:"margin_fade_trend",...ve});Be(ne,{noResolve:J,...ve}),globalThis[Symbol.for("margin_fade_trend")]={get value(){return pe}};let j={initialData:void 0,initialError:void 0},De=qe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from postgres.fct_executive_cockpit
where month_date >= '2026-06-01'::date
and date_trunc('month', month_date) <= '2026-12-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`,me=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from postgres.fct_executive_cockpit
where month_date >= '2026-06-01'::date
and date_trunc('month', month_date) <= '2026-12-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`;r.revenue_forecast_chart_data&&(r.revenue_forecast_chart_data instanceof Error?j.initialError=r.revenue_forecast_chart_data:j.initialData=r.revenue_forecast_chart_data,r.revenue_forecast_chart_columns&&(j.knownColumns=r.revenue_forecast_chart_columns));let ye,_e=!1;const fe=Zt.createReactive({callback:y=>{t(5,ye=y)},execFn:C},{id:"revenue_forecast_chart",...j});fe(me,{noResolve:De,...j}),globalThis[Symbol.for("revenue_forecast_chart")]={get value(){return ye}};let we={initialData:void 0,initialError:void 0},xe=qe`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`,B=`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`;r.lead_to_cash_chart_data&&(r.lead_to_cash_chart_data instanceof Error?we.initialError=r.lead_to_cash_chart_data:we.initialData=r.lead_to_cash_chart_data,r.lead_to_cash_chart_columns&&(we.knownColumns=r.lead_to_cash_chart_columns));let X,Y=!1;const Te=Zt.createReactive({callback:y=>{t(6,X=y)},execFn:C},{id:"lead_to_cash_chart",...we});Te(B,{noResolve:xe,...we}),globalThis[Symbol.for("lead_to_cash_chart")]={get value(){return X}};let U="ytd";function z(y){const R=new URLSearchParams(window.location.search).toString().replace(/%2C/g,","),ue=R?`?${R}`:"";return(typeof Fa=="function"?Fa(y):y)+ue}Rn(()=>{localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),document.addEventListener("click",y=>{const A=y.target.closest("canvas");if(!A)return;const R=A.closest("div");if(!R)return;const $e=(R.parentElement||R).querySelectorAll('div[style*="position"][style*="pointer-events"]');for(const ie of $e){const V=(ie.innerText||ie.textContent||"").trim();if(V&&ie.offsetWidth>0){navigator.clipboard.writeText(V).then(()=>{ie.style.transition="opacity 0.15s",ie.style.opacity="0.4",setTimeout(()=>{ie.style.opacity="1"},350)});break}}})});const Xe=()=>_n(z("/overview")),se=()=>_n(z("/sales")),Ee=()=>_n(z("/operations")),Ae=(y,A)=>{const R=ze.length;let ue=y;if(R>6&&typeof y=="string"){const ie={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"},V=y.split(" ");V.length===2&&ie[V[0]]&&(ue=ie[V[0]]+"-"+V[1].slice(-2))}const $e=R>24?5:R>12?3:R>=6?2:1;return A%$e===0?ue:""},Ye=(y,A)=>{const R=pe.length;let ue=y;if(R>6&&typeof y=="string"){const ie={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"},V=y.split(" ");V.length===2&&ie[V[0]]&&(ue=ie[V[0]]+"-"+V[1].slice(-2))}const $e=R>24?5:R>12?3:R>=6?2:1;return A%$e===0?ue:""},ta=(y,A)=>{const R=ye.length;let ue=y;if(R>6&&typeof y=="string"){const ie={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"},V=y.split(" ");V.length===2&&ie[V[0]]&&(ue=ie[V[0]]+"-"+V[1].slice(-2))}const $e=R>24?5:R>12?3:R>=6?2:1;return A%$e===0?ue:""},_=y=>{const A=String(y||"");return A.length>28?"{xsmall|"+A+"}":A.length>20?"{small|"+A+"}":A.length>14?"{medium|"+A+"}":A};return i.$$set=y=>{"data"in y&&t(9,g=y.data)},i.$$.update=()=>{i.$$.dirty[0]&512&&t(10,{data:r={},customFormattingSettings:k,__db:M}=g,r),i.$$.dirty[0]&1024&&ys.set(Object.keys(r).length>0),i.$$.dirty[1]&1024&&o.params,i.$$.dirty[0]&2048&&t(13,N=qe`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&2048&&t(14,je=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from postgres.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&61440&&(N||!re?N||(Je(je,{noResolve:N,...O}),t(15,re=!0)):Je(je,{noResolve:N})),i.$$.dirty[0]&2048&&t(17,le=qe`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&2048&&t(18,He=`select distinct
    cast(region_id as text) as region_id,
    region
from postgres.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&983040&&(le||!ge?le||(I(He,{noResolve:le,...he}),t(19,ge=!0)):I(He,{noResolve:le})),i.$$.dirty[0]&2048&&t(21,Ce=qe`select
    coalesce(sum(total_billed_revenue), 0) as total_billed_revenue,
    coalesce(sum(billed_revenue_target), 0) as billed_revenue_target,
    coalesce(sum(total_actual_job_costs), 0) as total_actual_job_costs,
    coalesce(sum(gross_profit_amount), 0) as gross_profit_amount,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as gross_profit_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then coalesce(avg(sold_margin_pct), 0.45) - ((sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue))
        else 0.0
    end as margin_fade_pct,
    coalesce(sum(wip_value), 0) as wip_value,
    coalesce(sum(total_ar_overdue), 0) as total_ar_overdue,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&2048&&t(22,Oe=`select
    coalesce(sum(total_billed_revenue), 0) as total_billed_revenue,
    coalesce(sum(billed_revenue_target), 0) as billed_revenue_target,
    coalesce(sum(total_actual_job_costs), 0) as total_actual_job_costs,
    coalesce(sum(gross_profit_amount), 0) as gross_profit_amount,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as gross_profit_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then coalesce(avg(sold_margin_pct), 0.45) - ((sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue))
        else 0.0
    end as margin_fade_pct,
    coalesce(sum(wip_value), 0) as wip_value,
    coalesce(sum(total_ar_overdue), 0) as total_ar_overdue,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&15728640&&(Ce||!Se?Ce||(ae(Oe,{noResolve:Ce,...oe}),t(23,Se=!0)):ae(Oe,{noResolve:Ce})),i.$$.dirty[0]&2048&&t(25,L=qe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(total_booked_pipeline) as booked_contracts
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[0]&2048&&t(26,be=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(total_booked_pipeline) as booked_contracts
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[0]&251658240&&(L||!Ie?L||(Ne(be,{noResolve:L,...Fe}),t(27,Ie=!0)):Ne(be,{noResolve:L})),i.$$.dirty[0]&2048&&t(29,J=qe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as actual_margin_pct
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[0]&2048&&t(30,ne=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else 0.0
    end as actual_margin_pct
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and date_trunc('month', month_date) <= '2026-06-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[0]&1879048192|i.$$.dirty[1]&1&&(J||!de?J||(Be(ne,{noResolve:J,...ve}),t(31,de=!0)):Be(ne,{noResolve:J})),i.$$.dirty[0]&2048&&t(33,De=qe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from postgres.fct_executive_cockpit
where month_date >= '2026-06-01'::date
and date_trunc('month', month_date) <= '2026-12-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[0]&2048&&t(34,me=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from postgres.fct_executive_cockpit
where month_date >= '2026-06-01'::date
and date_trunc('month', month_date) <= '2026-12-01'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[1]&30&&(De||!_e?De||(fe(me,{noResolve:De,...j}),t(35,_e=!0)):fe(me,{noResolve:De})),i.$$.dirty[0]&2048&&t(37,xe=qe`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`),i.$$.dirty[0]&2048&&t(38,B=`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from postgres.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`),i.$$.dirty[1]&480&&(xe||!Y?xe||(Te(B,{noResolve:xe,...we}),t(39,Y=!0)):Te(B,{noResolve:xe})),i.$$.dirty[0]&2048&&t(40,U=(e==null?void 0:e.time_filter)||"ytd"),i.$$.dirty[1]&512&&t(7,n=Ps(U,Hs))},[Re,Pe,P,ze,pe,ye,X,n,z,g,r,e,O,N,je,re,he,le,He,ge,oe,Ce,Oe,Se,Fe,L,be,Ie,ve,J,ne,de,j,De,me,_e,we,xe,B,Y,U,o,Xe,se,Ee,Ae,Ye,ta,_]}class Ks extends Gn{constructor(a){super(),Qn(this,a,Os,Rs,Wn,{data:9},null,[-1,-1,-1])}}export{Ks as component};
