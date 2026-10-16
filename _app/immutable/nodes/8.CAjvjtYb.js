import{s as Os,P as Ts,l as ts,Q as Us,n as Ye,G as As,d as m,E as Js,D as Xs,i as D,a as l,z as Qn,b as f,J as Gs,c as g,h as Ws,e as c,f as sn,r as x,g as I,t as We,j as v,k as d,u as Qe,m as Qs,o as Ks,p as Zs,q as Es}from"../chunks/scheduler.Cpit_XQ7.js";import{S as zs,i as Bs,d as $,t as w,a as p,c as ba,m as k,b as C,e as S,g as pa}from"../chunks/index.JnElEpLO.js";import{b as Fs,c as ei,d as ti,G as ai,a as Is,V as He,C as Kn,B as ni,g as si,Q as wa,e as ln}from"../chunks/GlobalSingleSelect.7OEfDSip.js";import{p as ii,m as li,g as ri,n as Zn,t as tn,q as oi,r as ui,e as an}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.EWtVL-N-.js";import{w as _i,g as es}from"../chunks/entry.7wbm-QHT.js";import{e as ci,s as di,Q as ya,p as mi,a as rn,r as Ms,C as fi}from"../chunks/inferColumnTypes.486Kav3X.js";import{h as pe}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as hi}from"../chunks/stores.CFL-9qXL.js";import{p as gi}from"../chunks/profile.BW8tN6E9.js";function vi(i,n,t){let a,u,o,b,r,E,ie,e,ye,W,V,j,De,qe,Z,Ue,_e=Ye,ee=()=>(_e(),_e=As(a,_=>t(44,Ue=_)),a),Te,Ae=Ye,ce=()=>(Ae(),Ae=As(u,_=>t(45,Te=_)),u),F;i.$$.on_destroy.push(()=>_e()),i.$$.on_destroy.push(()=>Ae());let te=Ts(ii);ts(i,te,_=>t(46,F=_));let ge=Ts(li);const{resolveColor:Ee}=ri();let{y:R=void 0}=n;const ve=!!R;let{y2:Q=void 0}=n;const we=!!Q;let{series:P=void 0}=n;const de=!!P;let{options:Fe=void 0}=n,{name:xe=void 0}=n,{lineColor:Ie=void 0}=n,{lineWidth:me=2}=n,{lineType:H="solid"}=n,{lineOpacity:K=void 0}=n,{markers:fe=!1}=n,{markerShape:le="circle"}=n,{markerSize:Ne=8}=n,{labels:q=!1}=n,{labelSize:ae=11}=n,{labelPosition:he="top"}=n,{labelColor:Me=void 0}=n,{labelFmt:re=void 0}=n,Oe;re&&(Oe=Zn(re));let{yLabelFmt:oe=void 0}=n,ne;oe&&(ne=Zn(oe));let{y2LabelFmt:$e=void 0}=n,ze;$e&&(ze=Zn($e));let{y2SeriesType:ue=void 0}=n,{showAllLabels:Le=!1}=n,{handleMissing:Pe="gap"}=n,{step:se=!1}=n,{stepPosition:Ke="end"}=n,{seriesOrder:be=void 0}=n,{seriesLabelFmt:Ze=void 0}=n;const Je={above:"top",below:"bottom",middle:"inside"},Re={above:"right",below:"left",middle:"inside"};let Be=r?"right":"top";return Us(()=>{ge.update(_=>{if(r)_.yAxis={..._.yAxis,...Z.xAxis},_.xAxis={..._.xAxis,...Z.yAxis};else if(_.yAxis[0]={..._.yAxis[0],...Z.yAxis},_.xAxis={..._.xAxis,...Z.xAxis},Q&&(_.yAxis[1]={..._.yAxis[1],show:!0},["line","bar","scatter"].includes(ue)))for(let y=0;y<ye;y++)_.series[e+y].type=ue;return q&&(_.axisPointer={triggerEmphasis:!1}),_})}),i.$$set=_=>{"y"in _&&t(3,R=_.y),"y2"in _&&t(4,Q=_.y2),"series"in _&&t(5,P=_.series),"options"in _&&t(12,Fe=_.options),"name"in _&&t(6,xe=_.name),"lineColor"in _&&t(13,Ie=_.lineColor),"lineWidth"in _&&t(14,me=_.lineWidth),"lineType"in _&&t(15,H=_.lineType),"lineOpacity"in _&&t(16,K=_.lineOpacity),"markers"in _&&t(7,fe=_.markers),"markerShape"in _&&t(17,le=_.markerShape),"markerSize"in _&&t(18,Ne=_.markerSize),"labels"in _&&t(8,q=_.labels),"labelSize"in _&&t(19,ae=_.labelSize),"labelPosition"in _&&t(9,he=_.labelPosition),"labelColor"in _&&t(20,Me=_.labelColor),"labelFmt"in _&&t(21,re=_.labelFmt),"yLabelFmt"in _&&t(22,oe=_.yLabelFmt),"y2LabelFmt"in _&&t(23,$e=_.y2LabelFmt),"y2SeriesType"in _&&t(24,ue=_.y2SeriesType),"showAllLabels"in _&&t(10,Le=_.showAllLabels),"handleMissing"in _&&t(25,Pe=_.handleMissing),"step"in _&&t(11,se=_.step),"stepPosition"in _&&t(26,Ke=_.stepPosition),"seriesOrder"in _&&t(27,be=_.seriesOrder),"seriesLabelFmt"in _&&t(28,Ze=_.seriesLabelFmt)},i.$$.update=()=>{if(i.$$.dirty[0]&8192&&ee(t(1,a=Ee(Ie))),i.$$.dirty[0]&128&&t(7,fe=tn(fe)),i.$$.dirty[0]&256&&t(8,q=tn(q)),i.$$.dirty[0]&1048576&&ce(t(0,u=Ee(Me))),i.$$.dirty[0]&1024&&t(10,Le=tn(Le)),i.$$.dirty[0]&2048&&t(11,se=tn(se)),i.$$.dirty[1]&32768&&t(41,o=F.data),i.$$.dirty[1]&32768&&t(40,b=F.x),i.$$.dirty[0]&8|i.$$.dirty[1]&32768&&t(3,R=ve?R:F.y),i.$$.dirty[0]&16|i.$$.dirty[1]&32768&&t(4,Q=we?Q:F.y2),i.$$.dirty[1]&32768&&t(34,r=F.swapXY),i.$$.dirty[1]&32768&&t(43,E=F.yFormat),i.$$.dirty[1]&32768&&t(42,ie=F.y2Format),i.$$.dirty[1]&32768&&t(32,e=F.yCount),i.$$.dirty[1]&32768&&t(33,ye=F.y2Count),i.$$.dirty[1]&32768&&t(35,W=F.xType),i.$$.dirty[1]&32768&&t(38,V=F.xMismatch),i.$$.dirty[1]&32768&&t(37,j=F.columnSummary),i.$$.dirty[0]&32|i.$$.dirty[1]&32768&&t(5,P=de?P:F.series),i.$$.dirty[0]&104|i.$$.dirty[1]&1600)if(!P&&typeof R!="object")t(6,xe=xe??oi(R,j[R].title));else try{t(41,o=Fs(o,b,R,P))}catch(_){console.warn("Failed to complete data",{e:_}),t(41,o=[])}if(i.$$.dirty[0]&33554472|i.$$.dirty[1]&1536&&Pe==="zero")try{t(41,o=Fs(o,b,R,P,!0))}catch(_){console.warn("Failed to complete data",{e:_}),t(41,o=[])}i.$$.dirty[0]&512|i.$$.dirty[1]&8&&t(9,he=(r?Re[he]:Je[he])??Be),i.$$.dirty[0]&1712312192|i.$$.dirty[1]&30735&&t(39,De={type:"line",label:{show:q,formatter(_){return _.value[r?0:1]===0?"":ui(_.value[r?0:1],[ne??Oe??E,ze??Oe??ie][ei(_.componentIndex,e,ye)])},fontSize:ae,color:Te,position:he,padding:3},labelLayout:{hideOverlap:!Le},connectNulls:Pe==="connect",emphasis:{focus:"series",endLabel:{show:!1},lineStyle:{opacity:1,width:3}},lineStyle:{width:parseInt(me),type:H,opacity:K},itemStyle:{color:Ue,opacity:K},showSymbol:q||fe,symbol:le,symbolSize:q&&!fe?0:Ne,step:se?Ke:!1}),i.$$.dirty[0]&402653304|i.$$.dirty[1]&1992&&t(36,qe=ti(o,b,R,P,r,De,xe,V,j,be,void 0,void 0,Q,Ze)),i.$$.dirty[1]&32&&ge.update(_=>(_.series.push(...qe),_.legend.data.push(...qe.map(y=>y.name.toString())),_)),i.$$.dirty[0]&4096&&Fe&&ge.update(_=>({..._,...Fe})),i.$$.dirty[1]&16&&(Z={yAxis:{boundaryGap:["0%","1%"]},xAxis:{boundaryGap:[W==="time"?"2%":"0%","2%"]}})},[u,a,te,R,Q,P,xe,fe,q,he,Le,se,Fe,Ie,me,H,K,le,Ne,ae,Me,re,oe,$e,ue,Pe,Ke,be,Ze,Oe,ne,ze,e,ye,r,W,qe,j,V,De,b,o,ie,E,Ue,Te,F]}class as extends zs{constructor(n){super(),Bs(this,n,vi,null,Os,{y:3,y2:4,series:5,options:12,name:6,lineColor:13,lineWidth:14,lineType:15,lineOpacity:16,markers:7,markerShape:17,markerSize:18,labels:8,labelSize:19,labelPosition:9,labelColor:20,labelFmt:21,yLabelFmt:22,y2LabelFmt:23,y2SeriesType:24,showAllLabels:10,handleMissing:25,step:11,stepPosition:26,seriesOrder:27,seriesLabelFmt:28},null,[-1,-1])}}const{document:ct}=si;function bi(i){let n,t=A.title+"",a;return{c(){n=d("h1"),a=Qe(t),this.h()},l(u){n=c(u,"H1",{class:!0});var o=x(n);a=We(o,t),o.forEach(m),this.h()},h(){f(n,"class","title")},m(u,o){D(u,n,o),l(n,a)},p:Ye,d(u){u&&m(n)}}}function pi(i){return{c(){this.h()},l(n){this.h()},h(){ct.title="Evidence"},m:Ye,p:Ye,d:Ye}}function yi(i){let n,t,a,u,o;return ct.title=n=A.title,{c(){t=v(),a=d("meta"),u=v(),o=d("meta"),this.h()},l(b){t=g(b),a=c(b,"META",{property:!0,content:!0}),u=g(b),o=c(b,"META",{name:!0,content:!0}),this.h()},h(){var b,r;f(a,"property","og:title"),f(a,"content",((b=A.og)==null?void 0:b.title)??A.title),f(o,"name","twitter:title"),f(o,"content",((r=A.og)==null?void 0:r.title)??A.title)},m(b,r){D(b,t,r),D(b,a,r),D(b,u,r),D(b,o,r)},p(b,r){r&0&&n!==(n=A.title)&&(ct.title=n)},d(b){b&&(m(t),m(a),m(u),m(o))}}}function wi(i){var o,b;let n,t,a=(A.description||((o=A.og)==null?void 0:o.description))&&xi(),u=((b=A.og)==null?void 0:b.image)&&$i();return{c(){a&&a.c(),n=v(),u&&u.c(),t=sn()},l(r){a&&a.l(r),n=g(r),u&&u.l(r),t=sn()},m(r,E){a&&a.m(r,E),D(r,n,E),u&&u.m(r,E),D(r,t,E)},p(r,E){var ie,e;(A.description||(ie=A.og)!=null&&ie.description)&&a.p(r,E),(e=A.og)!=null&&e.image&&u.p(r,E)},d(r){r&&(m(n),m(t)),a&&a.d(r),u&&u.d(r)}}}function xi(i){let n,t,a,u,o;return{c(){n=d("meta"),t=v(),a=d("meta"),u=v(),o=d("meta"),this.h()},l(b){n=c(b,"META",{name:!0,content:!0}),t=g(b),a=c(b,"META",{property:!0,content:!0}),u=g(b),o=c(b,"META",{name:!0,content:!0}),this.h()},h(){var b,r,E;f(n,"name","description"),f(n,"content",A.description??((b=A.og)==null?void 0:b.description)),f(a,"property","og:description"),f(a,"content",((r=A.og)==null?void 0:r.description)??A.description),f(o,"name","twitter:description"),f(o,"content",((E=A.og)==null?void 0:E.description)??A.description)},m(b,r){D(b,n,r),D(b,t,r),D(b,a,r),D(b,u,r),D(b,o,r)},p:Ye,d(b){b&&(m(n),m(t),m(a),m(u),m(o))}}}function $i(i){let n,t,a;return{c(){n=d("meta"),t=v(),a=d("meta"),this.h()},l(u){n=c(u,"META",{property:!0,content:!0}),t=g(u),a=c(u,"META",{name:!0,content:!0}),this.h()},h(){var u,o;f(n,"property","og:image"),f(n,"content",rn((u=A.og)==null?void 0:u.image)),f(a,"name","twitter:image"),f(a,"content",rn((o=A.og)==null?void 0:o.image))},m(u,o){D(u,n,o),D(u,t,o),D(u,a,o)},p:Ye,d(u){u&&(m(n),m(t),m(a))}}}function Ls(i){let n,t;return n=new wa({props:{queryID:"bu_list",queryResult:i[0]}}),{c(){S(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,u){k(n,a,u),t=!0},p(a,u){const o={};u[0]&1&&(o.queryResult=a[0]),n.$set(o)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){w(n.$$.fragment,a),t=!1},d(a){$(n,a)}}}function Ps(i){let n,t;return n=new wa({props:{queryID:"region_list",queryResult:i[1]}}),{c(){S(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,u){k(n,a,u),t=!0},p(a,u){const o={};u[0]&2&&(o.queryResult=a[1]),n.$set(o)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){w(n.$$.fragment,a),t=!1},d(a){$(n,a)}}}function Rs(i){let n,t;return n=new wa({props:{queryID:"cockpit_summary",queryResult:i[2]}}),{c(){S(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,u){k(n,a,u),t=!0},p(a,u){const o={};u[0]&4&&(o.queryResult=a[2]),n.$set(o)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){w(n.$$.fragment,a),t=!1},d(a){$(n,a)}}}function Vs(i){let n,t;return n=new wa({props:{queryID:"monthly_cash_flow",queryResult:i[3]}}),{c(){S(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,u){k(n,a,u),t=!0},p(a,u){const o={};u[0]&8&&(o.queryResult=a[3]),n.$set(o)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){w(n.$$.fragment,a),t=!1},d(a){$(n,a)}}}function js(i){let n,t;return n=new wa({props:{queryID:"margin_fade_trend",queryResult:i[4]}}),{c(){S(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,u){k(n,a,u),t=!0},p(a,u){const o={};u[0]&16&&(o.queryResult=a[4]),n.$set(o)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){w(n.$$.fragment,a),t=!1},d(a){$(n,a)}}}function Hs(i){let n,t;return n=new wa({props:{queryID:"revenue_forecast_chart",queryResult:i[5]}}),{c(){S(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,u){k(n,a,u),t=!0},p(a,u){const o={};u[0]&32&&(o.queryResult=a[5]),n.$set(o)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){w(n.$$.fragment,a),t=!1},d(a){$(n,a)}}}function Ns(i){let n,t;return n=new wa({props:{queryID:"lead_to_cash_chart",queryResult:i[6]}}),{c(){S(n.$$.fragment)},l(a){C(n.$$.fragment,a)},m(a,u){k(n,a,u),t=!0},p(a,u){const o={};u[0]&64&&(o.queryResult=a[6]),n.$set(o)},i(a){t||(p(n.$$.fragment,a),t=!0)},o(a){w(n.$$.fragment,a),t=!1},d(a){$(n,a)}}}function ki(i){let n,t,a,u,o,b;return n=new ln({props:{y:"billed_revenue",name:"Billed Revenue (Xero)"}}),a=new ln({props:{y:"job_costs",name:"Job Costs (Procore)"}}),o=new as({props:{y:"gross_profit",name:"Gross Profit (Realized)"}}),{c(){S(n.$$.fragment),t=v(),S(a.$$.fragment),u=v(),S(o.$$.fragment)},l(r){C(n.$$.fragment,r),t=g(r),C(a.$$.fragment,r),u=g(r),C(o.$$.fragment,r)},m(r,E){k(n,r,E),D(r,t,E),k(a,r,E),D(r,u,E),k(o,r,E),b=!0},p:Ye,i(r){b||(p(n.$$.fragment,r),p(a.$$.fragment,r),p(o.$$.fragment,r),b=!0)},o(r){w(n.$$.fragment,r),w(a.$$.fragment,r),w(o.$$.fragment,r),b=!1},d(r){r&&(m(t),m(u)),$(n,r),$(a,r),$(o,r)}}}function Ci(i){let n,t,a,u;return n=new as({props:{y:"sold_margin_pct",name:"Sold Margin Target"}}),a=new as({props:{y:"actual_margin_pct",name:"Actual Gross Margin %"}}),{c(){S(n.$$.fragment),t=v(),S(a.$$.fragment)},l(o){C(n.$$.fragment,o),t=g(o),C(a.$$.fragment,o)},m(o,b){k(n,o,b),D(o,t,b),k(a,o,b),u=!0},p:Ye,i(o){u||(p(n.$$.fragment,o),p(a.$$.fragment,o),u=!0)},o(o){w(n.$$.fragment,o),w(a.$$.fragment,o),u=!1},d(o){o&&m(t),$(n,o),$(a,o)}}}function Si(i){let n,t,a,u;return n=new ln({props:{y:"weighted_pipeline",name:"Weighted Pipeline (HubSpot)",stack:"forecast"}}),a=new ln({props:{y:"wip_billing_schedule",name:"WIP Billing Schedule (Procore)",stack:"forecast"}}),{c(){S(n.$$.fragment),t=v(),S(a.$$.fragment)},l(o){C(n.$$.fragment,o),t=g(o),C(a.$$.fragment,o)},m(o,b){k(n,o,b),D(o,t,b),k(a,o,b),u=!0},p:Ye,i(o){u||(p(n.$$.fragment,o),p(a.$$.fragment,o),u=!0)},o(o){w(n.$$.fragment,o),w(a.$$.fragment,o),u=!1},d(o){o&&m(t),$(n,o),$(a,o)}}}function Di(i){let n,t,a,u,o,b,r,E,ie,e,ye,W,V,j,De="Overview Cockpit",qe,Z,Ue="Sales & Win-Loss",_e,ee,Te="Operations & Vendors",Ae,ce,F,te,ge="Executive Cockpit Dashboard",Ee,R,ve,Q,we,P,de,Fe="📅",xe,Ie,me,H,K,fe,le,Ne,q,ae,he="Snapshot: June 2026",Me,re,Oe="|",oe,ne,$e="Live APIs: HubSpot, Xero, Procore, Shopify",ze,ue,Le="|",Pe,se,Ke,be,Ze,Je,Re,Be,_='<span class="flex items-center gap-1"><span>🛡️</span> Cross-System Diagnostic Flags</span> <span class="text-[8px] text-[#0d9488] font-bold">3 Signals Active</span>',y,T,M,N,Ve="⚠️",O,L,xa,ns="Xero Overdue AR:",on,dt,un,mt,_n,cn,ft,Yt,ss="⚠️",dn,Xe,$a,is="HubSpot Stalled Deals:",mn,ht,fn,gt,hn,gn,vt,Ut,ls="📋",vn,bt,ka,rs="Procore Delivery Backlog:",bn,pt,pn,Na,ke,yt,et,Jt,os='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total Billed Revenue</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#1D5F60]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',yn,Ca,wt,wn,Sa,Da,xn,xt,$n,Xt,us='<span>Actual invoices billed (Xero)</span> <span class="font-extrabold text-[#1D5F60] bg-[#1D5F60]/10 px-1.5 py-0.5 rounded">Xero Finance</span>',kn,$t,tt,Gt,_s='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Gross Profit Margin</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#264773]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>',Cn,qa,kt,Sn,Ta,Aa,Dn,Ct,qn,Wt,cs='<span>Billed (Xero) minus Job Costs (Procore)</span> <span class="font-extrabold text-[#264773] bg-[#264773]/10 px-1.5 py-0.5 rounded">Cross-SaaS</span>',Tn,St,at,Qt,ds='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">WIP Value (Unbilled)</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#7B8DA6]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>',An,Ea,Dt,En,Kt,ms="<span>Work completed pending billing</span>",Fn,Zt,fs='<span>Completion % (Procore) &amp; Contract (HubSpot)</span> <span class="font-extrabold text-gray-600 bg-gray-100 px-1.5 py-0.5 rounded">Procore/HubSpot</span>',In,qt,nt,ea,hs='<span class="text-[9px] font-bold text-gray-400 uppercase tracking-wider">Total AR Aging</span> <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-[#B45309]" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',Mn,Fa,Tt,Ln,ta,gs="<span>Overdue Accounts Receivable</span>",Pn,aa,vs='<span>Overdue invoice balance in Xero</span> <span class="font-extrabold text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded">Xero AR</span>',Oa,Ce,At,Et,na,bs="Monthly Cash Flow (Billed vs. Costs vs. Gross Profit)",Rn,sa,Vn,Ft,jn,It,Mt,ia,ps="Margin Fade (Sold vs. Actual Margin)",Hn,la,Nn,Lt,On,Pt,Rt,ra,ys="Forward Demand & Backlog (Pipeline vs. WIP Schedule)",zn,oa,Bn,Vt,Yn,jt,Ht,ua,ws="Lead to Cash Cycle Time (Days)",Un,_a,Jn,Nt,Va,Xn,xs,st=typeof A<"u"&&A.title&&A.hide_title!==!0&&bi();function Ys(s,h){return typeof A<"u"&&A.title?yi:pi}let ja=Ys()(i),it=typeof A=="object"&&wi(),z=i[0]&&Ls(i),B=i[1]&&Ps(i),Y=i[2]&&Rs(i),U=i[3]&&Vs(i),J=i[4]&&js(i),X=i[5]&&Hs(i),G=i[6]&&Ns(i);return Q=new ai({props:{name:"time_filter",defaultValue:"ytd"}}),K=new Is({props:{name:"business_unit",title:"Business Unit",data:i[0],valueColumn:"business_unit_id",labelColumn:"business_unit"}}),le=new Is({props:{name:"region",title:"Region",data:i[1],valueColumn:"region_id",labelColumn:"region"}}),be=new He({props:{data:i[2],column:"backfill_share_pct",fmt:"pct1"}}),dt=new He({props:{data:i[2],column:"overdue_invoices_count"}}),mt=new He({props:{data:i[2],column:"total_ar_overdue",fmt:"usd"}}),ht=new He({props:{data:i[2],column:"stalled_deals_count"}}),gt=new He({props:{data:i[2],column:"stalled_deals_amount",fmt:"usd"}}),pt=new He({props:{data:i[2],column:"wip_value",fmt:"usd"}}),wt=new He({props:{data:i[2],column:"total_billed_revenue",fmt:"usd"}}),xt=new He({props:{data:i[2],column:"billed_revenue_target",fmt:"usd0"}}),kt=new He({props:{data:i[2],column:"gross_profit_margin_pct",fmt:"pct1"}}),Ct=new He({props:{data:i[2],column:"gross_profit_amount",fmt:"usd0"}}),Dt=new He({props:{data:i[2],column:"wip_value",fmt:"usd"}}),Tt=new He({props:{data:i[2],column:"total_ar_overdue",fmt:"usd"}}),sa=new an({props:{description:"Compares actual invoices billed (Xero), job costs (Procore), and resulting gross profit."}}),Ft=new Kn({props:{data:i[3],x:"month_date",sort:"false",xType:"category",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",colorPalette:["#1D5F60","#B45309","#0d9488"],height:185,legend:"true",echartsOptions:{grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},series:[{stack:"group_billed"},{stack:"group_costs"}],xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:i[45]}}]},$$slots:{default:[ki]},$$scope:{ctx:i}}}),la=new an({props:{description:"Measures sold contract margin % (HubSpot) vs actual realized margin % (Procore & Xero)."}}),Lt=new Kn({props:{data:i[4],x:"month_date",sort:"false",xType:"category",yFmt:"pct1",colorPalette:["#7B8DA6","#0d9488"],height:185,legend:"true",echartsOptions:{grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},yAxis:{scale:!0},series:[{lineStyle:{type:"dashed",width:2}},{lineStyle:{type:"solid",width:2.5}}],xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:i[46]}}]},$$slots:{default:[Ci]},$$scope:{ctx:i}}}),oa=new an({props:{description:"Compares HubSpot open pipeline demand against Procore active unbilled delivery backlog."}}),Vt=new Kn({props:{data:i[5],x:"month_date",sort:"false",xType:"category",yFmt:"[>=1000000]$#,##0.0,,\\M;[>=1000]$#,##0,\\K;$#,##0",colorPalette:["#1D5F60","#7B8DA6"],height:185,legend:"true",echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:i[47]}}]},$$slots:{default:[Si]},$$scope:{ctx:i}}}),_a=new an({props:{description:"Average days elapsed from HubSpot lead creation to final Xero invoice payment."}}),Nt=new ni({props:{data:i[6],x:"business_unit",y:"avg_days",swapXY:"true",fillOpacity:"0.9",labels:!0,labelFmt:"num0",labelColor:"#383D40",labelPosition:"outside",colorPalette:["#264773"],height:185,echartsOptions:{tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{left:40,right:35,top:15,bottom:25,containLabel:!0},yAxis:{axisLabel:{interval:0,formatter:i[48],rich:{xsmall:{fontSize:7,color:"#4b5563"},small:{fontSize:9,color:"#4b5563"},medium:{fontSize:9.5,color:"#4b5563"}}}}}}}),{c(){st&&st.c(),n=v(),ja.c(),t=d("meta"),a=d("meta"),it&&it.c(),u=sn(),o=v(),z&&z.c(),b=v(),B&&B.c(),r=v(),Y&&Y.c(),E=v(),U&&U.c(),ie=v(),J&&J.c(),e=v(),X&&X.c(),ye=v(),G&&G.c(),W=v(),V=d("div"),j=d("button"),j.textContent=De,qe=v(),Z=d("button"),Z.textContent=Ue,_e=v(),ee=d("button"),ee.textContent=Te,Ae=v(),ce=d("div"),F=d("div"),te=d("div"),te.textContent=ge,Ee=v(),R=d("div"),ve=d("div"),S(Q.$$.fragment),we=v(),P=d("div"),de=d("span"),de.textContent=Fe,xe=v(),Ie=Qe(i[7]),me=v(),H=d("div"),S(K.$$.fragment),fe=v(),S(le.$$.fragment),Ne=v(),q=d("div"),ae=d("span"),ae.textContent=he,Me=v(),re=d("span"),re.textContent=Oe,oe=v(),ne=d("span"),ne.textContent=$e,ze=v(),ue=d("span"),ue.textContent=Le,Pe=v(),se=d("span"),Ke=Qe("Backfill share: "),S(be.$$.fragment),Ze=v(),Je=d("div"),Re=d("div"),Be=d("div"),Be.innerHTML=_,y=v(),T=d("div"),M=d("div"),N=d("span"),N.textContent=Ve,O=v(),L=d("span"),xa=d("strong"),xa.textContent=ns,on=v(),S(dt.$$.fragment),un=Qe(" invoice ("),S(mt.$$.fragment),_n=Qe(") pending collection."),cn=v(),ft=d("div"),Yt=d("span"),Yt.textContent=ss,dn=v(),Xe=d("span"),$a=d("strong"),$a.textContent=is,mn=v(),S(ht.$$.fragment),fn=Qe(" deals ("),S(gt.$$.fragment),hn=Qe(") stalled past close date."),gn=v(),vt=d("div"),Ut=d("span"),Ut.textContent=ls,vn=v(),bt=d("span"),ka=d("strong"),ka.textContent=rs,bn=v(),S(pt.$$.fragment),pn=Qe(" active unbilled contract work."),Na=v(),ke=d("div"),yt=d("div"),et=d("div"),Jt=d("div"),Jt.innerHTML=os,yn=v(),Ca=d("h2"),S(wt.$$.fragment),wn=v(),Sa=d("div"),Da=d("span"),xn=Qe("🎯 Target: "),S(xt.$$.fragment),$n=v(),Xt=d("div"),Xt.innerHTML=us,kn=v(),$t=d("div"),tt=d("div"),Gt=d("div"),Gt.innerHTML=_s,Cn=v(),qa=d("h2"),S(kt.$$.fragment),Sn=v(),Ta=d("div"),Aa=d("span"),Dn=Qe("Profit: "),S(Ct.$$.fragment),qn=v(),Wt=d("div"),Wt.innerHTML=cs,Tn=v(),St=d("div"),at=d("div"),Qt=d("div"),Qt.innerHTML=ds,An=v(),Ea=d("h2"),S(Dt.$$.fragment),En=v(),Kt=d("div"),Kt.innerHTML=ms,Fn=v(),Zt=d("div"),Zt.innerHTML=fs,In=v(),qt=d("div"),nt=d("div"),ea=d("div"),ea.innerHTML=hs,Mn=v(),Fa=d("h2"),S(Tt.$$.fragment),Ln=v(),ta=d("div"),ta.innerHTML=gs,Pn=v(),aa=d("div"),aa.innerHTML=vs,Oa=v(),Ce=d("div"),At=d("div"),Et=d("div"),na=d("span"),na.textContent=bs,Rn=v(),S(sa.$$.fragment),Vn=v(),S(Ft.$$.fragment),jn=v(),It=d("div"),Mt=d("div"),ia=d("span"),ia.textContent=ps,Hn=v(),S(la.$$.fragment),Nn=v(),S(Lt.$$.fragment),On=v(),Pt=d("div"),Rt=d("div"),ra=d("span"),ra.textContent=ys,zn=v(),S(oa.$$.fragment),Bn=v(),S(Vt.$$.fragment),Yn=v(),jt=d("div"),Ht=d("div"),ua=d("span"),ua.textContent=ws,Un=v(),S(_a.$$.fragment),Jn=v(),S(Nt.$$.fragment),this.h()},l(s){st&&st.l(s),n=g(s);const h=Ws("svelte-2igo1p",ct.head);ja.l(h),t=c(h,"META",{name:!0,content:!0}),a=c(h,"META",{name:!0,content:!0}),it&&it.l(h),u=sn(),h.forEach(m),o=g(s),z&&z.l(s),b=g(s),B&&B.l(s),r=g(s),Y&&Y.l(s),E=g(s),U&&U.l(s),ie=g(s),J&&J.l(s),e=g(s),X&&X.l(s),ye=g(s),G&&G.l(s),W=g(s),V=c(s,"DIV",{class:!0});var lt=x(V);j=c(lt,"BUTTON",{class:!0,"data-svelte-h":!0}),I(j)!=="svelte-3qv0i5"&&(j.textContent=De),qe=g(lt),Z=c(lt,"BUTTON",{class:!0,"data-svelte-h":!0}),I(Z)!=="svelte-1cvqxla"&&(Z.textContent=Ue),_e=g(lt),ee=c(lt,"BUTTON",{class:!0,"data-svelte-h":!0}),I(ee)!=="svelte-1kxcs33"&&(ee.textContent=Te),lt.forEach(m),Ae=g(s),ce=c(s,"DIV",{class:!0});var ca=x(ce);F=c(ca,"DIV",{class:!0});var rt=x(F);te=c(rt,"DIV",{class:!0,"data-svelte-h":!0}),I(te)!=="svelte-1m8ib2g"&&(te.textContent=ge),Ee=g(rt),R=c(rt,"DIV",{class:!0});var da=x(R);ve=c(da,"DIV",{class:!0});var ma=x(ve);C(Q.$$.fragment,ma),we=g(ma),P=c(ma,"DIV",{class:!0});var fa=x(P);de=c(fa,"SPAN",{class:!0,"data-svelte-h":!0}),I(de)!=="svelte-n1bzfj"&&(de.textContent=Fe),xe=g(fa),Ie=We(fa,i[7]),fa.forEach(m),ma.forEach(m),me=g(da),H=c(da,"DIV",{class:!0});var ha=x(H);C(K.$$.fragment,ha),fe=g(ha),C(le.$$.fragment,ha),ha.forEach(m),da.forEach(m),Ne=g(rt),q=c(rt,"DIV",{style:!0,class:!0});var Se=x(q);ae=c(Se,"SPAN",{"data-svelte-h":!0}),I(ae)!=="svelte-wdvofe"&&(ae.textContent=he),Me=g(Se),re=c(Se,"SPAN",{class:!0,"data-svelte-h":!0}),I(re)!=="svelte-1069k89"&&(re.textContent=Oe),oe=g(Se),ne=c(Se,"SPAN",{"data-svelte-h":!0}),I(ne)!=="svelte-1hd3tz4"&&(ne.textContent=$e),ze=g(Se),ue=c(Se,"SPAN",{class:!0,"data-svelte-h":!0}),I(ue)!=="svelte-1069k89"&&(ue.textContent=Le),Pe=g(Se),se=c(Se,"SPAN",{});var Ia=x(se);Ke=We(Ia,"Backfill share: "),C(be.$$.fragment,Ia),Ia.forEach(m),Se.forEach(m),rt.forEach(m),Ze=g(ca),Je=c(ca,"DIV",{class:!0});var Ha=x(Je);Re=c(Ha,"DIV",{class:!0});var ga=x(Re);Be=c(ga,"DIV",{class:!0,"data-svelte-h":!0}),I(Be)!=="svelte-1cxyhxu"&&(Be.innerHTML=_),y=g(ga),T=c(ga,"DIV",{class:!0});var ot=x(T);M=c(ot,"DIV",{class:!0});var va=x(M);N=c(va,"SPAN",{class:!0,"data-svelte-h":!0}),I(N)!=="svelte-vnqsfp"&&(N.textContent=Ve),O=g(va),L=c(va,"SPAN",{});var Ge=x(L);xa=c(Ge,"STRONG",{"data-svelte-h":!0}),I(xa)!=="svelte-11p92ib"&&(xa.textContent=ns),on=g(Ge),C(dt.$$.fragment,Ge),un=We(Ge," invoice ("),C(mt.$$.fragment,Ge),_n=We(Ge,") pending collection."),Ge.forEach(m),va.forEach(m),cn=g(ot),ft=c(ot,"DIV",{class:!0});var ut=x(ft);Yt=c(ut,"SPAN",{class:!0,"data-svelte-h":!0}),I(Yt)!=="svelte-vnqsfp"&&(Yt.textContent=ss),dn=g(ut),Xe=c(ut,"SPAN",{});var je=x(Xe);$a=c(je,"STRONG",{"data-svelte-h":!0}),I($a)!=="svelte-bmzsg3"&&($a.textContent=is),mn=g(je),C(ht.$$.fragment,je),fn=We(je," deals ("),C(gt.$$.fragment,je),hn=We(je,") stalled past close date."),je.forEach(m),ut.forEach(m),gn=g(ot),vt=c(ot,"DIV",{class:!0});var _t=x(vt);Ut=c(_t,"SPAN",{class:!0,"data-svelte-h":!0}),I(Ut)!=="svelte-13tjqo6"&&(Ut.textContent=ls),vn=g(_t),bt=c(_t,"SPAN",{});var Ot=x(bt);ka=c(Ot,"STRONG",{"data-svelte-h":!0}),I(ka)!=="svelte-13uma37"&&(ka.textContent=rs),bn=g(Ot),C(pt.$$.fragment,Ot),pn=We(Ot," active unbilled contract work."),Ot.forEach(m),_t.forEach(m),ot.forEach(m),ga.forEach(m),Ha.forEach(m),ca.forEach(m),Na=g(s),ke=c(s,"DIV",{class:!0});var zt=x(ke);yt=c(zt,"DIV",{class:!0});var za=x(yt);et=c(za,"DIV",{});var Ma=x(et);Jt=c(Ma,"DIV",{class:!0,"data-svelte-h":!0}),I(Jt)!=="svelte-unlelm"&&(Jt.innerHTML=os),yn=g(Ma),Ca=c(Ma,"H2",{class:!0});var $s=x(Ca);C(wt.$$.fragment,$s),$s.forEach(m),wn=g(Ma),Sa=c(Ma,"DIV",{class:!0});var ks=x(Sa);Da=c(ks,"SPAN",{});var Gn=x(Da);xn=We(Gn,"🎯 Target: "),C(xt.$$.fragment,Gn),Gn.forEach(m),ks.forEach(m),Ma.forEach(m),$n=g(za),Xt=c(za,"DIV",{class:!0,"data-svelte-h":!0}),I(Xt)!=="svelte-1wfro46"&&(Xt.innerHTML=us),za.forEach(m),kn=g(zt),$t=c(zt,"DIV",{class:!0});var Ba=x($t);tt=c(Ba,"DIV",{});var La=x(tt);Gt=c(La,"DIV",{class:!0,"data-svelte-h":!0}),I(Gt)!=="svelte-aioxhf"&&(Gt.innerHTML=_s),Cn=g(La),qa=c(La,"H2",{class:!0});var Cs=x(qa);C(kt.$$.fragment,Cs),Cs.forEach(m),Sn=g(La),Ta=c(La,"DIV",{class:!0});var Ss=x(Ta);Aa=c(Ss,"SPAN",{});var Wn=x(Aa);Dn=We(Wn,"Profit: "),C(Ct.$$.fragment,Wn),Wn.forEach(m),Ss.forEach(m),La.forEach(m),qn=g(Ba),Wt=c(Ba,"DIV",{class:!0,"data-svelte-h":!0}),I(Wt)!=="svelte-1nwzd3z"&&(Wt.innerHTML=cs),Ba.forEach(m),Tn=g(zt),St=c(zt,"DIV",{class:!0});var Ya=x(St);at=c(Ya,"DIV",{});var Pa=x(at);Qt=c(Pa,"DIV",{class:!0,"data-svelte-h":!0}),I(Qt)!=="svelte-13kcd51"&&(Qt.innerHTML=ds),An=g(Pa),Ea=c(Pa,"H2",{class:!0});var Ds=x(Ea);C(Dt.$$.fragment,Ds),Ds.forEach(m),En=g(Pa),Kt=c(Pa,"DIV",{class:!0,"data-svelte-h":!0}),I(Kt)!=="svelte-qygvh8"&&(Kt.innerHTML=ms),Pa.forEach(m),Fn=g(Ya),Zt=c(Ya,"DIV",{class:!0,"data-svelte-h":!0}),I(Zt)!=="svelte-5z2ugu"&&(Zt.innerHTML=fs),Ya.forEach(m),In=g(zt),qt=c(zt,"DIV",{class:!0});var Ua=x(qt);nt=c(Ua,"DIV",{});var Ra=x(nt);ea=c(Ra,"DIV",{class:!0,"data-svelte-h":!0}),I(ea)!=="svelte-l89xv3"&&(ea.innerHTML=hs),Mn=g(Ra),Fa=c(Ra,"H2",{class:!0});var qs=x(Fa);C(Tt.$$.fragment,qs),qs.forEach(m),Ln=g(Ra),ta=c(Ra,"DIV",{class:!0,"data-svelte-h":!0}),I(ta)!=="svelte-1uqgglq"&&(ta.innerHTML=gs),Ra.forEach(m),Pn=g(Ua),aa=c(Ua,"DIV",{class:!0,"data-svelte-h":!0}),I(aa)!=="svelte-1xmssyr"&&(aa.innerHTML=vs),Ua.forEach(m),zt.forEach(m),Oa=g(s),Ce=c(s,"DIV",{class:!0});var Bt=x(Ce);At=c(Bt,"DIV",{class:!0});var Ja=x(At);Et=c(Ja,"DIV",{class:!0});var Xa=x(Et);na=c(Xa,"SPAN",{class:!0,"data-svelte-h":!0}),I(na)!=="svelte-1drsovx"&&(na.textContent=bs),Rn=g(Xa),C(sa.$$.fragment,Xa),Xa.forEach(m),Vn=g(Ja),C(Ft.$$.fragment,Ja),Ja.forEach(m),jn=g(Bt),It=c(Bt,"DIV",{class:!0});var Ga=x(It);Mt=c(Ga,"DIV",{class:!0});var Wa=x(Mt);ia=c(Wa,"SPAN",{class:!0,"data-svelte-h":!0}),I(ia)!=="svelte-s5hyxk"&&(ia.textContent=ps),Hn=g(Wa),C(la.$$.fragment,Wa),Wa.forEach(m),Nn=g(Ga),C(Lt.$$.fragment,Ga),Ga.forEach(m),On=g(Bt),Pt=c(Bt,"DIV",{class:!0});var Qa=x(Pt);Rt=c(Qa,"DIV",{class:!0});var Ka=x(Rt);ra=c(Ka,"SPAN",{class:!0,"data-svelte-h":!0}),I(ra)!=="svelte-de2hs8"&&(ra.textContent=ys),zn=g(Ka),C(oa.$$.fragment,Ka),Ka.forEach(m),Bn=g(Qa),C(Vt.$$.fragment,Qa),Qa.forEach(m),Yn=g(Bt),jt=c(Bt,"DIV",{class:!0});var Za=x(jt);Ht=c(Za,"DIV",{class:!0});var en=x(Ht);ua=c(en,"SPAN",{class:!0,"data-svelte-h":!0}),I(ua)!=="svelte-szc77p"&&(ua.textContent=ws),Un=g(en),C(_a.$$.fragment,en),en.forEach(m),Jn=g(Za),C(Nt.$$.fragment,Za),Za.forEach(m),Bt.forEach(m),this.h()},h(){f(t,"name","twitter:card"),f(t,"content","summary_large_image"),f(a,"name","twitter:site"),f(a,"content","@evidence_dev"),f(j,"class","px-3 py-1 rounded bg-[#0d9488] text-white text-[10px] font-bold shadow-sm transition-all cursor-pointer"),f(Z,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),f(ee,"class","px-3 py-1 rounded bg-white text-gray-500 hover:text-gray-800 border border-gray-200 text-[10px] font-bold shadow-sm transition-all cursor-pointer"),f(V,"class","flex gap-1.5 border-b border-gray-200 pb-1.5 mb-2.5 mt-0.5"),f(te,"class","text-base font-extrabold text-[#0d9488]"),f(de,"class","text-gray-400"),f(P,"class","text-[9px] text-gray-500 font-semibold bg-white shadow-sm border border-gray-200 px-2 py-0.5 rounded flex items-center gap-1.5 w-max"),f(ve,"class","flex flex-col gap-1"),f(H,"class","flex items-center gap-2"),f(R,"class","flex flex-wrap items-start gap-3"),f(re,"class","text-white/40"),f(ue,"class","text-white/40"),Gs(q,"color","#ffffff"),f(q,"class","text-[8px] font-semibold bg-white/10 border border-white/20 px-2.5 py-1 rounded self-start flex items-center gap-1.5 flex-wrap"),f(F,"class","flex flex-col gap-2"),f(Be,"class","font-bold uppercase tracking-wider text-gray-500 text-[8px] flex items-center justify-between"),f(N,"class","text-amber-600 font-bold"),f(M,"class","flex items-start gap-1"),f(Yt,"class","text-amber-600 font-bold"),f(ft,"class","flex items-start gap-1"),f(Ut,"class","text-[#264773] font-bold"),f(vt,"class","flex items-start gap-1"),f(T,"class","flex flex-col gap-1 text-gray-600 leading-tight mt-1"),f(Re,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] px-3.5 py-2 w-full md:w-[360px] min-h-[80px] flex flex-col justify-between text-[9px]"),f(Je,"class","flex flex-col items-end self-stretch md:self-auto"),f(ce,"class","flex flex-col md:flex-row justify-between items-start gap-4 mb-3.5"),f(Jt,"class","flex justify-between items-center"),f(Ca,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(Sa,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500"),f(Xt,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f(yt,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#1D5F60] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(Gt,"class","flex justify-between items-center"),f(qa,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(Ta,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-[#264773]"),f(Wt,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f($t,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#264773] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(Qt,"class","flex justify-between items-center"),f(Ea,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(Kt,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-gray-500"),f(Zt,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f(St,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#7B8DA6] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(ea,"class","flex justify-between items-center"),f(Fa,"class","text-xl font-extrabold mt-0.5 text-gray-800"),f(ta,"class","flex items-center flex-wrap gap-1.5 mt-0.5 text-[9px] font-semibold text-amber-700"),f(aa,"class","flex justify-between items-center text-[9px] text-gray-400 mt-0.5 border-t border-gray-100 pt-1"),f(qt,"class","bg-white rounded-xl shadow-sm border-t-4 border-[#B45309] py-3 px-3.5 flex flex-col justify-between h-[120px]"),f(ke,"class","grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3.5 mb-3.5"),f(na,"class","font-bold text-gray-700 text-xs"),f(Et,"class","flex items-center gap-1.5 mb-1"),f(At,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),f(ia,"class","font-bold text-gray-700 text-xs"),f(Mt,"class","flex items-center gap-1.5 mb-1"),f(It,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),f(ra,"class","font-bold text-gray-700 text-xs"),f(Rt,"class","flex items-center gap-1.5 mb-1"),f(Pt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),f(ua,"class","font-bold text-gray-700 text-xs"),f(Ht,"class","flex items-center gap-1.5 mb-1"),f(jt,"class","bg-white p-3.5 rounded-xl shadow-sm h-[260px] overflow-hidden"),f(Ce,"class","grid grid-cols-1 md:grid-cols-2 gap-3.5 mb-3.5")},m(s,h){st&&st.m(s,h),D(s,n,h),ja.m(ct.head,null),l(ct.head,t),l(ct.head,a),it&&it.m(ct.head,null),l(ct.head,u),D(s,o,h),z&&z.m(s,h),D(s,b,h),B&&B.m(s,h),D(s,r,h),Y&&Y.m(s,h),D(s,E,h),U&&U.m(s,h),D(s,ie,h),J&&J.m(s,h),D(s,e,h),X&&X.m(s,h),D(s,ye,h),G&&G.m(s,h),D(s,W,h),D(s,V,h),l(V,j),l(V,qe),l(V,Z),l(V,_e),l(V,ee),D(s,Ae,h),D(s,ce,h),l(ce,F),l(F,te),l(F,Ee),l(F,R),l(R,ve),k(Q,ve,null),l(ve,we),l(ve,P),l(P,de),l(P,xe),l(P,Ie),l(R,me),l(R,H),k(K,H,null),l(H,fe),k(le,H,null),l(F,Ne),l(F,q),l(q,ae),l(q,Me),l(q,re),l(q,oe),l(q,ne),l(q,ze),l(q,ue),l(q,Pe),l(q,se),l(se,Ke),k(be,se,null),l(ce,Ze),l(ce,Je),l(Je,Re),l(Re,Be),l(Re,y),l(Re,T),l(T,M),l(M,N),l(M,O),l(M,L),l(L,xa),l(L,on),k(dt,L,null),l(L,un),k(mt,L,null),l(L,_n),l(T,cn),l(T,ft),l(ft,Yt),l(ft,dn),l(ft,Xe),l(Xe,$a),l(Xe,mn),k(ht,Xe,null),l(Xe,fn),k(gt,Xe,null),l(Xe,hn),l(T,gn),l(T,vt),l(vt,Ut),l(vt,vn),l(vt,bt),l(bt,ka),l(bt,bn),k(pt,bt,null),l(bt,pn),D(s,Na,h),D(s,ke,h),l(ke,yt),l(yt,et),l(et,Jt),l(et,yn),l(et,Ca),k(wt,Ca,null),l(et,wn),l(et,Sa),l(Sa,Da),l(Da,xn),k(xt,Da,null),l(yt,$n),l(yt,Xt),l(ke,kn),l(ke,$t),l($t,tt),l(tt,Gt),l(tt,Cn),l(tt,qa),k(kt,qa,null),l(tt,Sn),l(tt,Ta),l(Ta,Aa),l(Aa,Dn),k(Ct,Aa,null),l($t,qn),l($t,Wt),l(ke,Tn),l(ke,St),l(St,at),l(at,Qt),l(at,An),l(at,Ea),k(Dt,Ea,null),l(at,En),l(at,Kt),l(St,Fn),l(St,Zt),l(ke,In),l(ke,qt),l(qt,nt),l(nt,ea),l(nt,Mn),l(nt,Fa),k(Tt,Fa,null),l(nt,Ln),l(nt,ta),l(qt,Pn),l(qt,aa),D(s,Oa,h),D(s,Ce,h),l(Ce,At),l(At,Et),l(Et,na),l(Et,Rn),k(sa,Et,null),l(At,Vn),k(Ft,At,null),l(Ce,jn),l(Ce,It),l(It,Mt),l(Mt,ia),l(Mt,Hn),k(la,Mt,null),l(It,Nn),k(Lt,It,null),l(Ce,On),l(Ce,Pt),l(Pt,Rt),l(Rt,ra),l(Rt,zn),k(oa,Rt,null),l(Pt,Bn),k(Vt,Pt,null),l(Ce,Yn),l(Ce,jt),l(jt,Ht),l(Ht,ua),l(Ht,Un),k(_a,Ht,null),l(jt,Jn),k(Nt,jt,null),Va=!0,Xn||(xs=[Qn(j,"click",i[42]),Qn(Z,"click",i[43]),Qn(ee,"click",i[44])],Xn=!0)},p(s,h){typeof A<"u"&&A.title&&A.hide_title!==!0&&st.p(s,h),ja.p(s,h),typeof A=="object"&&it.p(s,h),s[0]?z?(z.p(s,h),h[0]&1&&p(z,1)):(z=Ls(s),z.c(),p(z,1),z.m(b.parentNode,b)):z&&(pa(),w(z,1,1,()=>{z=null}),ba()),s[1]?B?(B.p(s,h),h[0]&2&&p(B,1)):(B=Ps(s),B.c(),p(B,1),B.m(r.parentNode,r)):B&&(pa(),w(B,1,1,()=>{B=null}),ba()),s[2]?Y?(Y.p(s,h),h[0]&4&&p(Y,1)):(Y=Rs(s),Y.c(),p(Y,1),Y.m(E.parentNode,E)):Y&&(pa(),w(Y,1,1,()=>{Y=null}),ba()),s[3]?U?(U.p(s,h),h[0]&8&&p(U,1)):(U=Vs(s),U.c(),p(U,1),U.m(ie.parentNode,ie)):U&&(pa(),w(U,1,1,()=>{U=null}),ba()),s[4]?J?(J.p(s,h),h[0]&16&&p(J,1)):(J=js(s),J.c(),p(J,1),J.m(e.parentNode,e)):J&&(pa(),w(J,1,1,()=>{J=null}),ba()),s[5]?X?(X.p(s,h),h[0]&32&&p(X,1)):(X=Hs(s),X.c(),p(X,1),X.m(ye.parentNode,ye)):X&&(pa(),w(X,1,1,()=>{X=null}),ba()),s[6]?G?(G.p(s,h),h[0]&64&&p(G,1)):(G=Ns(s),G.c(),p(G,1),G.m(W.parentNode,W)):G&&(pa(),w(G,1,1,()=>{G=null}),ba()),(!Va||h[0]&128)&&Xs(Ie,s[7]);const lt={};h[0]&1&&(lt.data=s[0]),K.$set(lt);const ca={};h[0]&2&&(ca.data=s[1]),le.$set(ca);const rt={};h[0]&4&&(rt.data=s[2]),be.$set(rt);const da={};h[0]&4&&(da.data=s[2]),dt.$set(da);const ma={};h[0]&4&&(ma.data=s[2]),mt.$set(ma);const fa={};h[0]&4&&(fa.data=s[2]),ht.$set(fa);const ha={};h[0]&4&&(ha.data=s[2]),gt.$set(ha);const Se={};h[0]&4&&(Se.data=s[2]),pt.$set(Se);const Ia={};h[0]&4&&(Ia.data=s[2]),wt.$set(Ia);const Ha={};h[0]&4&&(Ha.data=s[2]),xt.$set(Ha);const ga={};h[0]&4&&(ga.data=s[2]),kt.$set(ga);const ot={};h[0]&4&&(ot.data=s[2]),Ct.$set(ot);const va={};h[0]&4&&(va.data=s[2]),Dt.$set(va);const Ge={};h[0]&4&&(Ge.data=s[2]),Tt.$set(Ge);const ut={};h[0]&8&&(ut.data=s[3]),h[0]&8&&(ut.echartsOptions={grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},series:[{stack:"group_billed"},{stack:"group_costs"}],xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:s[45]}}]}),h[2]&4&&(ut.$$scope={dirty:h,ctx:s}),Ft.$set(ut);const je={};h[0]&16&&(je.data=s[4]),h[0]&16&&(je.echartsOptions={grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},yAxis:{scale:!0},series:[{lineStyle:{type:"dashed",width:2}},{lineStyle:{type:"solid",width:2.5}}],xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:s[46]}}]}),h[2]&4&&(je.$$scope={dirty:h,ctx:s}),Lt.$set(je);const _t={};h[0]&32&&(_t.data=s[5]),h[0]&32&&(_t.echartsOptions={tooltip:{enterable:!0,extraCssText:"cursor: copy;"},grid:{left:40,right:20,top:25,bottom:25,containLabel:!0},xAxis:[{axisLabel:{fontSize:9,width:200,overflow:"none",formatter:s[47]}}]}),h[2]&4&&(_t.$$scope={dirty:h,ctx:s}),Vt.$set(_t);const Ot={};h[0]&64&&(Ot.data=s[6]),Nt.$set(Ot)},i(s){Va||(p(z),p(B),p(Y),p(U),p(J),p(X),p(G),p(Q.$$.fragment,s),p(K.$$.fragment,s),p(le.$$.fragment,s),p(be.$$.fragment,s),p(dt.$$.fragment,s),p(mt.$$.fragment,s),p(ht.$$.fragment,s),p(gt.$$.fragment,s),p(pt.$$.fragment,s),p(wt.$$.fragment,s),p(xt.$$.fragment,s),p(kt.$$.fragment,s),p(Ct.$$.fragment,s),p(Dt.$$.fragment,s),p(Tt.$$.fragment,s),p(sa.$$.fragment,s),p(Ft.$$.fragment,s),p(la.$$.fragment,s),p(Lt.$$.fragment,s),p(oa.$$.fragment,s),p(Vt.$$.fragment,s),p(_a.$$.fragment,s),p(Nt.$$.fragment,s),Va=!0)},o(s){w(z),w(B),w(Y),w(U),w(J),w(X),w(G),w(Q.$$.fragment,s),w(K.$$.fragment,s),w(le.$$.fragment,s),w(be.$$.fragment,s),w(dt.$$.fragment,s),w(mt.$$.fragment,s),w(ht.$$.fragment,s),w(gt.$$.fragment,s),w(pt.$$.fragment,s),w(wt.$$.fragment,s),w(xt.$$.fragment,s),w(kt.$$.fragment,s),w(Ct.$$.fragment,s),w(Dt.$$.fragment,s),w(Tt.$$.fragment,s),w(sa.$$.fragment,s),w(Ft.$$.fragment,s),w(la.$$.fragment,s),w(Lt.$$.fragment,s),w(oa.$$.fragment,s),w(Vt.$$.fragment,s),w(_a.$$.fragment,s),w(Nt.$$.fragment,s),Va=!1},d(s){s&&(m(n),m(o),m(b),m(r),m(E),m(ie),m(e),m(ye),m(W),m(V),m(Ae),m(ce),m(Na),m(ke),m(Oa),m(Ce)),st&&st.d(s),ja.d(s),m(t),m(a),it&&it.d(s),m(u),z&&z.d(s),B&&B.d(s),Y&&Y.d(s),U&&U.d(s),J&&J.d(s),X&&X.d(s),G&&G.d(s),$(Q),$(K),$(le),$(be),$(dt),$(mt),$(ht),$(gt),$(pt),$(wt),$(xt),$(kt),$(Ct),$(Dt),$(Tt),$(sa),$(Ft),$(la),$(Lt),$(oa),$(Vt),$(_a),$(Nt),Xn=!1,Js(xs)}}}const A={title:"Executive Cockpit Dashboard"},qi="2026-06-15";function nn(i){const n=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];return`${i.getDate()} ${n[i.getMonth()]} ${i.getFullYear()}`}function Ti(i,n){const t=new Date(n+"T00:00:00"),a=nn(t);if(i==="mtd"){const u=new Date(t.getFullYear(),t.getMonth(),1);return`${nn(u)} - ${a}`}if(i==="qtd"){const u=Math.floor(t.getMonth()/3)*3,o=new Date(t.getFullYear(),u,1);return`${nn(o)} - ${a}`}if(i==="ytd"){const u=new Date(t.getFullYear(),0,1);return`${nn(u)} - ${a}`}return`All Time - ${a}`}function Ai(i,n,t){let a,u,o;ts(i,hi,y=>t(41,u=y)),ts(i,Ms,y=>t(53,o=y));let{data:b}=n,{data:r={},customFormattingSettings:E,__db:ie,inputs:e}=b;Qs(Ms,o="0545e563276d3ac6e3218cfecf67a14b",o);let ye=ci(_i(e));Ks(ye.subscribe(y=>t(11,e=y))),Zs(fi,{getCustomFormats:()=>E.customFormats||[]});const W=(y,T)=>gi(ie.query,y,{query_name:T});di(W),u.params,Es(()=>!0);let V={initialData:void 0,initialError:void 0},j=pe`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`,De=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`;r.bu_list_data&&(r.bu_list_data instanceof Error?V.initialError=r.bu_list_data:V.initialData=r.bu_list_data,r.bu_list_columns&&(V.knownColumns=r.bu_list_columns));let qe,Z=!1;const Ue=ya.createReactive({callback:y=>{t(0,qe=y)},execFn:W},{id:"bu_list",...V});Ue(De,{noResolve:j,...V}),globalThis[Symbol.for("bu_list")]={get value(){return qe}};let _e={initialData:void 0,initialError:void 0},ee=pe`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`,Te=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`;r.region_list_data&&(r.region_list_data instanceof Error?_e.initialError=r.region_list_data:_e.initialData=r.region_list_data,r.region_list_columns&&(_e.knownColumns=r.region_list_columns));let Ae,ce=!1;const F=ya.createReactive({callback:y=>{t(1,Ae=y)},execFn:W},{id:"region_list",..._e});F(Te,{noResolve:ee,..._e}),globalThis[Symbol.for("region_list")]={get value(){return Ae}};let te={initialData:void 0,initialError:void 0},ge=pe`select
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
    coalesce(sum(case when month_date = '2026-06-01' then total_ar_overdue else 0 end), 0) as total_ar_overdue,
    coalesce(sum(case when month_date = '2026-06-01' then overdue_invoices_count else 0 end), 0) as overdue_invoices_count,
    coalesce(sum(stalled_deals_count), 0) as stalled_deals_count,
    coalesce(sum(stalled_deals_amount), 0) as stalled_deals_amount,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days,
    case 
        when sum(total_billed_revenue) > 0 
        then sum(case when data_origin_share_backfill is not null then total_billed_revenue * data_origin_share_backfill else 0 end) / sum(total_billed_revenue)
        else 0.0
    end as backfill_share_pct
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`,Ee=`select
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
    coalesce(sum(case when month_date = '2026-06-01' then total_ar_overdue else 0 end), 0) as total_ar_overdue,
    coalesce(sum(case when month_date = '2026-06-01' then overdue_invoices_count else 0 end), 0) as overdue_invoices_count,
    coalesce(sum(stalled_deals_count), 0) as stalled_deals_count,
    coalesce(sum(stalled_deals_amount), 0) as stalled_deals_amount,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days,
    case 
        when sum(total_billed_revenue) > 0 
        then sum(case when data_origin_share_backfill is not null then total_billed_revenue * data_origin_share_backfill else 0 end) / sum(total_billed_revenue)
        else 0.0
    end as backfill_share_pct
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`;r.cockpit_summary_data&&(r.cockpit_summary_data instanceof Error?te.initialError=r.cockpit_summary_data:te.initialData=r.cockpit_summary_data,r.cockpit_summary_columns&&(te.knownColumns=r.cockpit_summary_columns));let R,ve=!1;const Q=ya.createReactive({callback:y=>{t(2,R=y)},execFn:W},{id:"cockpit_summary",...te});Q(Ee,{noResolve:ge,...te}),globalThis[Symbol.for("cockpit_summary")]={get value(){return R}};let we={initialData:void 0,initialError:void 0},P=pe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(gross_profit_amount) as gross_profit
from analytics.fct_executive_cockpit
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
order by raw_date asc`,de=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(gross_profit_amount) as gross_profit
from analytics.fct_executive_cockpit
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
order by raw_date asc`;r.monthly_cash_flow_data&&(r.monthly_cash_flow_data instanceof Error?we.initialError=r.monthly_cash_flow_data:we.initialData=r.monthly_cash_flow_data,r.monthly_cash_flow_columns&&(we.knownColumns=r.monthly_cash_flow_columns));let Fe,xe=!1;const Ie=ya.createReactive({callback:y=>{t(3,Fe=y)},execFn:W},{id:"monthly_cash_flow",...we});Ie(de,{noResolve:P,...we}),globalThis[Symbol.for("monthly_cash_flow")]={get value(){return Fe}};let me={initialData:void 0,initialError:void 0},H=pe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else null
    end as actual_margin_pct
from analytics.fct_executive_cockpit
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
order by raw_date asc`,K=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else null
    end as actual_margin_pct
from analytics.fct_executive_cockpit
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
order by raw_date asc`;r.margin_fade_trend_data&&(r.margin_fade_trend_data instanceof Error?me.initialError=r.margin_fade_trend_data:me.initialData=r.margin_fade_trend_data,r.margin_fade_trend_columns&&(me.knownColumns=r.margin_fade_trend_columns));let fe,le=!1;const Ne=ya.createReactive({callback:y=>{t(4,fe=y)},execFn:W},{id:"margin_fade_trend",...me});Ne(K,{noResolve:H,...me}),globalThis[Symbol.for("margin_fade_trend")]={get value(){return fe}};let q={initialData:void 0,initialError:void 0},ae=pe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= case
    when '${e.time_filter}' in ('mtd', 'qtd') then '2026-06-30'::date
    when '${e.time_filter}' = 'ytd' then '2026-12-31'::date
    else '2026-12-31'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`,he=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= case
    when '${e.time_filter}' in ('mtd', 'qtd') then '2026-06-30'::date
    when '${e.time_filter}' = 'ytd' then '2026-12-31'::date
    else '2026-12-31'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`;r.revenue_forecast_chart_data&&(r.revenue_forecast_chart_data instanceof Error?q.initialError=r.revenue_forecast_chart_data:q.initialData=r.revenue_forecast_chart_data,r.revenue_forecast_chart_columns&&(q.knownColumns=r.revenue_forecast_chart_columns));let Me,re=!1;const Oe=ya.createReactive({callback:y=>{t(5,Me=y)},execFn:W},{id:"revenue_forecast_chart",...q});Oe(he,{noResolve:ae,...q}),globalThis[Symbol.for("revenue_forecast_chart")]={get value(){return Me}};let oe={initialData:void 0,initialError:void 0},ne=pe`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`,$e=`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`;r.lead_to_cash_chart_data&&(r.lead_to_cash_chart_data instanceof Error?oe.initialError=r.lead_to_cash_chart_data:oe.initialData=r.lead_to_cash_chart_data,r.lead_to_cash_chart_columns&&(oe.knownColumns=r.lead_to_cash_chart_columns));let ze,ue=!1;const Le=ya.createReactive({callback:y=>{t(6,ze=y)},execFn:W},{id:"lead_to_cash_chart",...oe});Le($e,{noResolve:ne,...oe}),globalThis[Symbol.for("lead_to_cash_chart")]={get value(){return ze}};let Pe="ytd";function se(y){const T=y.endsWith("/")?y:y+"/",N=new URLSearchParams(window.location.search).toString().replace(/%2C/g,","),Ve=N?`?${N}`:"";return(typeof rn=="function"?rn(T):T)+Ve}Es(()=>{localStorage.setItem("evidence-theme","light"),document.documentElement.setAttribute("data-theme","light"),document.addEventListener("click",y=>{const T=y.target.closest("canvas");if(!T)return;const M=T.closest("div");if(!M)return;const Ve=(M.parentElement||M).querySelectorAll('div[style*="position"][style*="pointer-events"]');for(const O of Ve){const L=(O.innerText||O.textContent||"").trim();if(L&&O.offsetWidth>0){navigator.clipboard.writeText(L).then(()=>{O.style.transition="opacity 0.15s",O.style.opacity="0.4",setTimeout(()=>{O.style.opacity="1"},350)});break}}})});const Ke=()=>es(se("/overview")),be=()=>es(se("/sales")),Ze=()=>es(se("/operations")),Je=(y,T)=>{const M=Fe.length;let N=y;if(M>6&&typeof y=="string"){const O={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"},L=y.split(" ");L.length===2&&O[L[0]]&&(N=O[L[0]]+"-"+L[1].slice(-2))}const Ve=M>24?5:M>12?3:M>=6?2:1;return T%Ve===0?N:""},Re=(y,T)=>{const M=fe.length;let N=y;if(M>6&&typeof y=="string"){const O={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"},L=y.split(" ");L.length===2&&O[L[0]]&&(N=O[L[0]]+"-"+L[1].slice(-2))}const Ve=M>24?5:M>12?3:M>=6?2:1;return T%Ve===0?N:""},Be=(y,T)=>{const M=Me.length;let N=y;if(M>6&&typeof y=="string"){const O={Jan:"1",Feb:"2",Mar:"3",Apr:"4",May:"5",Jun:"6",Jul:"7",Aug:"8",Sep:"9",Oct:"10",Nov:"11",Dec:"12"},L=y.split(" ");L.length===2&&O[L[0]]&&(N=O[L[0]]+"-"+L[1].slice(-2))}const Ve=M>24?5:M>12?3:M>=6?2:1;return T%Ve===0?N:""},_=y=>{const T=String(y||"");return T.length>28?"{xsmall|"+T+"}":T.length>20?"{small|"+T+"}":T.length>14?"{medium|"+T+"}":T};return i.$$set=y=>{"data"in y&&t(9,b=y.data)},i.$$.update=()=>{i.$$.dirty[0]&512&&t(10,{data:r={},customFormattingSettings:E,__db:ie}=b,r),i.$$.dirty[0]&1024&&mi.set(Object.keys(r).length>0),i.$$.dirty[1]&1024&&u.params,i.$$.dirty[0]&2048&&t(13,j=pe`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&2048&&t(14,De=`select distinct
    cast(business_unit_id as text) as business_unit_id,
    business_unit
from analytics.fct_executive_cockpit
where ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
order by cast(business_unit_id as int)`),i.$$.dirty[0]&61440&&(j||!Z?j||(Ue(De,{noResolve:j,...V}),t(15,Z=!0)):Ue(De,{noResolve:j})),i.$$.dirty[0]&2048&&t(17,ee=pe`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&2048&&t(18,Te=`select distinct
    cast(region_id as text) as region_id,
    region
from analytics.fct_executive_cockpit
where ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
order by cast(region_id as int)`),i.$$.dirty[0]&983040&&(ee||!ce?ee||(F(Te,{noResolve:ee,..._e}),t(19,ce=!0)):F(Te,{noResolve:ee})),i.$$.dirty[0]&2048&&t(21,ge=pe`select
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
    coalesce(sum(case when month_date = '2026-06-01' then total_ar_overdue else 0 end), 0) as total_ar_overdue,
    coalesce(sum(case when month_date = '2026-06-01' then overdue_invoices_count else 0 end), 0) as overdue_invoices_count,
    coalesce(sum(stalled_deals_count), 0) as stalled_deals_count,
    coalesce(sum(stalled_deals_amount), 0) as stalled_deals_amount,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days,
    case 
        when sum(total_billed_revenue) > 0 
        then sum(case when data_origin_share_backfill is not null then total_billed_revenue * data_origin_share_backfill else 0 end) / sum(total_billed_revenue)
        else 0.0
    end as backfill_share_pct
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&2048&&t(22,Ee=`select
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
    coalesce(sum(case when month_date = '2026-06-01' then total_ar_overdue else 0 end), 0) as total_ar_overdue,
    coalesce(sum(case when month_date = '2026-06-01' then overdue_invoices_count else 0 end), 0) as overdue_invoices_count,
    coalesce(sum(stalled_deals_count), 0) as stalled_deals_count,
    coalesce(sum(stalled_deals_amount), 0) as stalled_deals_amount,
    coalesce(sum(total_booked_pipeline), 0) as total_booked_pipeline,
    coalesce(sum(total_weighted_open_pipeline), 0) as total_weighted_open_pipeline,
    coalesce(sum(total_revenue_forecast), 0) as total_revenue_forecast,
    coalesce(avg(lead_to_cash_days), 29.0) as lead_to_cash_days,
    case 
        when sum(total_billed_revenue) > 0 
        then sum(case when data_origin_share_backfill is not null then total_billed_revenue * data_origin_share_backfill else 0 end) / sum(total_billed_revenue)
        else 0.0
    end as backfill_share_pct
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= '2026-06-15'::date
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})`),i.$$.dirty[0]&15728640&&(ge||!ve?ge||(Q(Ee,{noResolve:ge,...te}),t(23,ve=!0)):Q(Ee,{noResolve:ge})),i.$$.dirty[0]&2048&&t(25,P=pe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(gross_profit_amount) as gross_profit
from analytics.fct_executive_cockpit
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
order by raw_date asc`),i.$$.dirty[0]&2048&&t(26,de=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_billed_revenue) as billed_revenue,
    sum(total_actual_job_costs) as job_costs,
    sum(gross_profit_amount) as gross_profit
from analytics.fct_executive_cockpit
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
order by raw_date asc`),i.$$.dirty[0]&251658240&&(P||!xe?P||(Ie(de,{noResolve:P,...we}),t(27,xe=!0)):Ie(de,{noResolve:P})),i.$$.dirty[0]&2048&&t(29,H=pe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else null
    end as actual_margin_pct
from analytics.fct_executive_cockpit
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
order by raw_date asc`),i.$$.dirty[0]&2048&&t(30,K=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    avg(sold_margin_pct) as sold_margin_pct,
    case 
        when sum(total_billed_revenue) > 0 
        then (sum(total_billed_revenue) - sum(total_actual_job_costs)) / sum(total_billed_revenue)
        else null
    end as actual_margin_pct
from analytics.fct_executive_cockpit
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
order by raw_date asc`),i.$$.dirty[0]&1879048192|i.$$.dirty[1]&1&&(H||!le?H||(Ne(K,{noResolve:H,...me}),t(31,le=!0)):Ne(K,{noResolve:H})),i.$$.dirty[0]&2048&&t(33,ae=pe`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= case
    when '${e.time_filter}' in ('mtd', 'qtd') then '2026-06-30'::date
    when '${e.time_filter}' = 'ytd' then '2026-12-31'::date
    else '2026-12-31'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[0]&2048&&t(34,he=`select
    min(cast(month_date as date)) as raw_date,
    strftime(month_date, '%b %Y') as month_date,
    sum(total_weighted_open_pipeline) as weighted_pipeline,
    sum(wip_billing_schedule) as wip_billing_schedule
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and month_date <= case
    when '${e.time_filter}' in ('mtd', 'qtd') then '2026-06-30'::date
    when '${e.time_filter}' = 'ytd' then '2026-12-31'::date
    else '2026-12-31'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by 2
order by raw_date asc`),i.$$.dirty[1]&30&&(ae||!re?ae||(Oe(he,{noResolve:ae,...q}),t(35,re=!0)):Oe(he,{noResolve:ae})),i.$$.dirty[0]&2048&&t(37,ne=pe`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`),i.$$.dirty[0]&2048&&t(38,$e=`select
    business_unit,
    round(avg(lead_to_cash_days), 1) as avg_days
from analytics.fct_executive_cockpit
where month_date >= case
    when '${e.time_filter}' = 'mtd' then date_trunc('month', '2026-06-15'::date)
    when '${e.time_filter}' = 'qtd' then date_trunc('quarter', '2026-06-15'::date)
    when '${e.time_filter}' = 'ytd' then date_trunc('year', '2026-06-15'::date)
    else '1970-01-01'::date
end
and ('%' in ${e.business_unit.value} or (select null where 0) in ${e.business_unit.value} or cast(business_unit_id as text) in ${e.business_unit.value})
and ('%' in ${e.region.value} or (select null where 0) in ${e.region.value} or cast(region_id as text) in ${e.region.value})
group by business_unit
order by avg_days desc`),i.$$.dirty[1]&480&&(ne||!ue?ne||(Le($e,{noResolve:ne,...oe}),t(39,ue=!0)):Le($e,{noResolve:ne})),i.$$.dirty[0]&2048&&t(40,Pe=(e==null?void 0:e.time_filter)||"ytd"),i.$$.dirty[1]&512&&t(7,a=Ti(Pe,qi))},[qe,Ae,R,Fe,fe,Me,ze,a,se,b,r,e,V,j,De,Z,_e,ee,Te,ce,te,ge,Ee,ve,we,P,de,xe,me,H,K,le,q,ae,he,re,oe,ne,$e,ue,Pe,u,Ke,be,Ze,Je,Re,Be,_]}class Ni extends zs{constructor(n){super(),Bs(this,n,Ai,Di,Os,{data:9},null,[-1,-1,-1])}}export{Ni as component};
