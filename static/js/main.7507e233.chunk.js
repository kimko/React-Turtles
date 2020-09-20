(this["webpackJsonpreact-turtles"]=this["webpackJsonpreact-turtles"]||[]).push([[0],{233:function(e,a,t){e.exports=t(366)},238:function(e,a,t){},366:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),l=t(17),c=t.n(l),o=(t(238),t(24)),i=t(117),s=t(18),u=t(411),m=t(412),d=t(413),p=t(405),E=t(128),b=t(417),h=t(414),g=t(415),f=t(114),v=t(74),x=t(399),S=Object(x.a)((function(e){return{root:{display:"flex"},toolbar:{paddingRight:24},toolbarIcon:Object(v.a)({display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 8px"},e.mixins.toolbar),appBar:{zIndex:e.zIndex.drawer+1,transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{marginLeft:240,width:"calc(100% - ".concat(240,"px)"),transition:e.transitions.create(["width","margin"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:36},menuButtonHidden:{display:"none"},title:{flexGrow:1},drawerPaper:{position:"relative",whiteSpace:"nowrap",width:240,transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.enteringScreen})},drawerPaperClose:Object(f.a)({overflowX:"hidden",transition:e.transitions.create("width",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),width:e.spacing(7)},e.breakpoints.up("sm"),{width:e.spacing(6)}),appBarSpacer:e.mixins.toolbar,content:{backgroundColor:"light"===e.palette.type?e.palette.grey[100]:e.palette.grey[900],flexGrow:1,height:"100vh",overflow:"auto"},container:{paddingTop:e.spacing(1),paddingBottom:e.spacing(1)},paper:{padding:e.spacing(2),display:"flex",overflow:"auto",flexDirection:"column"},fixedHeight:{height:480}}})),j=t(7),w=t(427),O=t(423),y=t(403),C=t(404),k=t(95),N=function(e){return n.createElement(w.a,{button:!0,selected:e.selectedIndex===e.itemNo,onClick:function(a){return t=e.itemNo,void e.setSelectedIndex(t);var t},component:i.b,to:e.to},n.createElement(O.a,{title:e.label,placement:"left-start"},n.createElement(y.a,null,n.createElement(k.a,{icon:e.icon}))),n.createElement(C.a,{primary:e.label}))},B=t(406),I=t(410),T=t(78),V=t.n(T),R=t(221),P=t(119),H=t(120),L=t.n(H),Y=t(418),z=t(421),D=t(425),W=t(422),q=t(430),A=t(432),G=t(420),J=t(367),M=t(407);var X=function(e){return n.createElement(E.a,{component:"h2",variant:"h6",color:"primary",gutterBottom:!0},e.children)},$=function(e){var a=Object(n.useState)(r.a.createElement(Y.a,null)),t=Object(o.a)(a,2),l=t[0],c=t[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),u=s[0],m=s[1],d=Object(n.useState)([]),p=Object(o.a)(d,2),E=p[0],b=p[1],h=Object(n.useState)(!0),g=Object(o.a)(h,2),f=g[0],v=g[1];Object(n.useEffect)((function(){Object(P.a)(V.a.mark((function e(){var a,t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://bmd-micro.herokuapp.com/sumYearSeasonVictory");case 3:a=e.sent,t=a.data.data.turtles,console.log(t),n=Object.keys(t).map((function(e,a){return b((function(a){return[].concat(Object(R.a)(a),[{name:e}])})),r.a.createElement(Y.a,{data:t[e],x:"Period",y:"Count",key:"bar"+e})})),c(n),v(!1),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0.message),m(e.t0.message);case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}),[]);var x=S();return r.a.createElement("div",null,r.a.createElement("div",{className:x.appBarSpacer}),""!==u&&r.a.createElement(G.a,{severity:"error"},u),r.a.createElement(B.a,{className:x.container},r.a.createElement(J.a,null,r.a.createElement(X,null,"Count per Season"),f&&r.a.createElement(M.a,null),!f&&r.a.createElement(z.a,{domainPadding:{x:100},theme:D.a.material,width:800,hight:"100%"},r.a.createElement(W.a,{data:E,orientation:"horizontal",colorScale:"qualitative"}),r.a.createElement(q.a,{dependentAxis:!0}),r.a.createElement(q.a,null),r.a.createElement(A.a,{offset:10,colorScale:"qualitative",categories:{x:["Early","Late","Total"]}},l)))))},F=t(214),K=t(217),Q=t(426),U=t(433),Z=t(428),_=Object(x.a)({root:{width:"100%"}}),ee=function(e){var a=_();return r.a.createElement("div",{className:a.root},r.a.createElement(E.a,{id:"discrete-slider",gutterBottom:!0},e.title),r.a.createElement(Z.a,{defaultValue:e.defaultValue,"aria-labelledby":"discrete-slider-small-steps",valueLabelDisplay:"on",marks:!0,min:e.minValue,max:e.maxValue,onChange:e.onChange}))};function ae(){var e=Object(F.a)(["\n  padding: 16px 25px 10px;\n\n  // when rendered in the gallery preview\n  a & {\n    padding: 12px 36px 0px;\n  }\n"]);return ae=function(){return e},e}var te={axis:{stroke:"transparent"},tickLabels:{fontSize:14},axisLabel:{padding:36,fontSize:15,fontStyle:"italic"}},ne=function(){var e=Object(n.useState)(!0),a=Object(o.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)(""),i=Object(o.a)(c,2),s=i[0],u=i[1],m=Object(n.useState)(100),d=Object(o.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)(),h=Object(o.a)(b,2),g=h[0],f=h[1],x=r.a.useState(2013),j=Object(o.a)(x,2),w=j[0],O=j[1],y=r.a.useState(2020),C=Object(o.a)(y,2),k=C[0],N=C[1],I=r.a.useState([2020]),T=Object(o.a)(I,2),R=T[0],H=T[1],W=S();return Object(n.useEffect)((function(){Object(P.a)(V.a.mark((function e(){var a,t,n;return V.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("https://bmd-micro.herokuapp.com/sumYearSeasonVictory");case 3:a=e.sent,t=a.data.data.turtles,f(t),n=0,H(Object.keys(t).map((function(e){var a=parseInt(e,10);return t[a][2].Count>n&&(n=t[a][2].Count),a}))),l(!1),E(n),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.message),u(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}),[]),r.a.createElement("div",null,r.a.createElement("div",{className:W.appBarSpacer}),""!==s&&r.a.createElement(G.a,{severity:"error"},s),r.a.createElement(B.a,{className:W.container},r.a.createElement(J.a,null,r.a.createElement(X,null,"Season Histogram"),t&&r.a.createElement(M.a,null),!t&&r.a.createElement(z.a,{containerComponent:r.a.createElement(Q.a,{labels:function(e){return e.datum.Count},voronoiDimension:"x",labelComponent:r.a.createElement(U.a,{dy:-7,constrainToVisibleArea:!0})}),domainPadding:{x:100},theme:D.a.material,width:400,height:250},r.a.createElement(q.a,{style:Object(v.a)({},te,{grid:{pointerEvents:"painted",strokeWidth:.5}}),label:"# Turtle Counts",dependentAxis:!0,domain:{y:[0,p+10]}}),r.a.createElement(q.a,{style:Object(v.a)({},te,{axisLabel:Object(v.a)({},te.axisLabel,{padding:35})}),label:"Season"}),r.a.createElement(A.a,{offset:20,colorScale:"qualitative",categories:{x:["Early","Late","Total"]}},r.a.createElement(Y.a,{animate:{duration:100},data:g[w],x:"Period",y:"Count"}),r.a.createElement(Y.a,{animate:{duration:100},data:g[k],x:"Period",y:"Count"}))),!t&&r.a.createElement(le,{year:w,setYear:O,years:R,title:"Compare Years",defaultValue:2014}),!t&&r.a.createElement(le,{year:k,setYear:N,years:R,defaultValue:2018}))))},re=K.a.div(ae()),le=function(e){var a=e.year,t=e.setYear,n=e.years,l=e.title,c=e.defaultValue,i=r.a.useState(0),s=Object(o.a)(i,2),u=s[0],m=s[1],d=n[0],p=n[n.length-1],E=p-d;return r.a.createElement(re,null,r.a.createElement(ee,{onChange:function(e,n){m(n),a!==n&&t(n)},defaultValue:c,value:u,maxValue:p,minValue:d,steps:E,title:l}))},ce=function(){var e=S();return n.createElement("div",null,n.createElement("div",{className:e.appBarSpacer}),n.createElement(B.a,{maxWidth:"lg",className:e.container},n.createElement(I.a,{container:!0,spacing:1},n.createElement(I.a,{item:!0,md:6},n.createElement($,null)),n.createElement(I.a,{item:!0,md:6},n.createElement(ne,null)))))},oe=t(96),ie=t(81);oe.b.add(ie.d,ie.b,ie.e,ie.a,ie.c);var se=function(){var e=S(),a=r.a.useState(!1),t=Object(o.a)(a,2),l=t[0],c=t[1];return r.a.createElement("div",{className:e.root},r.a.createElement(i.a,null,r.a.createElement(u.a,null),r.a.createElement(m.a,{position:"absolute",className:Object(j.a)(e.appBar,l&&e.appBarShift)},r.a.createElement(d.a,{className:e.toolbar},r.a.createElement(p.a,{edge:"start",color:"inherit","aria-label":"open drawer",onClick:function(){c(!0)},className:Object(j.a)(e.menuButton,l&&e.menuButtonHidden)},r.a.createElement(k.a,{icon:"bars"})),r.a.createElement(E.a,{component:"h1",variant:"h6",color:"inherit",noWrap:!0,className:e.title},"Dashboard"))),r.a.createElement(b.a,{variant:"permanent",classes:{paper:Object(j.a)(e.drawerPaper,!l&&e.drawerPaperClose)},open:l},r.a.createElement("div",{className:e.toolbarIcon},r.a.createElement(p.a,{onClick:function(){c(!1)}},r.a.createElement(k.a,{icon:"chevron-left"}))),r.a.createElement(h.a,null),r.a.createElement(g.a,null,function(){var e=n.useState({"/React-Turtles":0,"/React-Turtles/":0,"/React-Turtles/SeasonCount":1,"/React-Turtles/SeasonHistogram":2}[window.location.pathname]),a=Object(o.a)(e,2),t=a[0],r=a[1];return n.createElement("div",null,n.createElement(N,{itemNo:0,selectedIndex:t,setSelectedIndex:r,to:"/React-Turtles/",label:"Dashboard",icon:"columns"}),n.createElement(N,{itemNo:1,selectedIndex:t,setSelectedIndex:r,to:"/React-Turtles/SeasonCount",label:"Season Count",icon:"chart-bar"}),n.createElement(N,{itemNo:2,selectedIndex:t,setSelectedIndex:r,to:"/React-Turtles/SeasonHistogram",label:"Season Histogram",icon:"sliders-h"}))}()),r.a.createElement(h.a,null)),r.a.createElement("main",{className:e.content},r.a.createElement(s.a,{exact:!0,path:"/React-Turtles/"},r.a.createElement(ce,null)),r.a.createElement(s.a,{path:"/React-Turtles/SeasonCount"},r.a.createElement($,null)),r.a.createElement(s.a,{path:"/React-Turtles/SeasonHistogram"},r.a.createElement(ne,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(se,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[233,1,2]]]);
//# sourceMappingURL=main.7507e233.chunk.js.map