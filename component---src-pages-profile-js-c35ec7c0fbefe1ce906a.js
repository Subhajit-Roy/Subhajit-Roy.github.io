"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[486],{4320:function(e,n,t){t.d(n,{ZP:function(){return Z}});var a=t(4942),r=t(3366),i=t(7462),o=t(7294),c=t(5505),l=t(2692),s=t(8297),u=t(9408),d=t(8348),m=t(2371);var p=o.createContext(),f=t(2982),g=t(240);function v(e){return(0,g.Z)("MuiGrid",e)}var w=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],h=(0,t(2194).Z)("MuiGrid",["root","container","item","zeroMinWidth"].concat((0,f.Z)([0,1,2,3,4,5,6,7,8,9,10].map((function(e){return"spacing-xs-".concat(e)}))),(0,f.Z)(["column-reverse","column","row-reverse","row"].map((function(e){return"direction-xs-".concat(e)}))),(0,f.Z)(["nowrap","wrap-reverse","wrap"].map((function(e){return"wrap-xs-".concat(e)}))),(0,f.Z)(w.map((function(e){return"grid-xs-".concat(e)}))),(0,f.Z)(w.map((function(e){return"grid-sm-".concat(e)}))),(0,f.Z)(w.map((function(e){return"grid-md-".concat(e)}))),(0,f.Z)(w.map((function(e){return"grid-lg-".concat(e)}))),(0,f.Z)(w.map((function(e){return"grid-xl-".concat(e)}))))),x=t(5893),S=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function b(e){var n=parseFloat(e);return"".concat(n).concat(String(e).replace(String(n),"")||"px")}var k=(0,d.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:function(e,n){var t=e.ownerState,a=t.container,r=t.direction,i=t.item,o=t.lg,c=t.md,l=t.sm,s=t.spacing,u=t.wrap,d=t.xl,m=t.xs,p=t.zeroMinWidth;return[n.root,a&&n.container,i&&n.item,p&&n.zeroMinWidth,a&&0!==s&&n["spacing-xs-".concat(String(s))],"row"!==r&&n["direction-xs-".concat(String(r))],"wrap"!==u&&n["wrap-xs-".concat(String(u))],!1!==m&&n["grid-xs-".concat(String(m))],!1!==l&&n["grid-sm-".concat(String(l))],!1!==c&&n["grid-md-".concat(String(c))],!1!==o&&n["grid-lg-".concat(String(o))],!1!==d&&n["grid-xl-".concat(String(d))]]}})((function(e){var n=e.ownerState;return(0,i.Z)({boxSizing:"border-box"},n.container&&{display:"flex",flexWrap:"wrap",width:"100%"},n.item&&{margin:0},n.zeroMinWidth&&{minWidth:0},"nowrap"===n.wrap&&{flexWrap:"nowrap"},"reverse"===n.wrap&&{flexWrap:"wrap-reverse"})}),(function(e){var n=e.theme,t=e.ownerState,a=(0,l.P$)({values:t.direction,breakpoints:n.breakpoints.values});return(0,l.k9)({theme:n},a,(function(e){var n={flexDirection:e};return 0===e.indexOf("column")&&(n["& > .".concat(h.item)]={maxWidth:"none"}),n}))}),(function(e){var n=e.theme,t=e.ownerState,r=t.container,i=t.rowSpacing,o={};if(r&&0!==i){var c=(0,l.P$)({values:i,breakpoints:n.breakpoints.values});o=(0,l.k9)({theme:n},c,(function(e){var t=n.spacing(e);return"0px"!==t?(0,a.Z)({marginTop:"-".concat(b(t))},"& > .".concat(h.item),{paddingTop:b(t)}):{}}))}return o}),(function(e){var n=e.theme,t=e.ownerState,r=t.container,i=t.columnSpacing,o={};if(r&&0!==i){var c=(0,l.P$)({values:i,breakpoints:n.breakpoints.values});o=(0,l.k9)({theme:n},c,(function(e){var t=n.spacing(e);return"0px"!==t?(0,a.Z)({width:"calc(100% + ".concat(b(t),")"),marginLeft:"-".concat(b(t))},"& > .".concat(h.item),{paddingLeft:b(t)}):{}}))}return o}),(function(e){var n=e.theme,t=e.ownerState;return n.breakpoints.keys.reduce((function(e,a){return function(e,n,t,a){var r=a[t];if(r){var o={};if(!0===r)o={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)o={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{var c=(0,l.P$)({values:a.columns,breakpoints:n.breakpoints.values}),s="object"==typeof c?c[t]:c,u="".concat(Math.round(r/s*1e8)/1e6,"%"),d={};if(a.container&&a.item&&0!==a.columnSpacing){var m=n.spacing(a.columnSpacing);if("0px"!==m){var p="calc(".concat(u," + ").concat(b(m),")");d={flexBasis:p,maxWidth:p}}}o=(0,i.Z)({flexBasis:u,flexGrow:0,maxWidth:u},d)}0===n.breakpoints.values[t]?Object.assign(e,o):e[n.breakpoints.up(t)]=o}}(e,n,a,t),e}),{})})),Z=o.forwardRef((function(e,n){var t,a=(0,m.Z)({props:e,name:"MuiGrid"}),l=(0,s.Z)(a),d=l.className,f=l.columns,g=l.columnSpacing,w=l.component,h=void 0===w?"div":w,b=l.container,Z=void 0!==b&&b,E=l.direction,y=void 0===E?"row":E,P=l.item,W=void 0!==P&&P,M=l.lg,z=void 0!==M&&M,L=l.md,N=void 0!==L&&L,j=l.rowSpacing,C=l.sm,G=void 0!==C&&C,B=l.spacing,A=void 0===B?0:B,R=l.wrap,T=void 0===R?"wrap":R,I=l.xl,O=void 0!==I&&I,U=l.xs,_=void 0!==U&&U,D=l.zeroMinWidth,F=void 0!==D&&D,H=(0,r.Z)(l,S),$=j||A,V=g||A,J=o.useContext(p),K=f||J||12,q=(0,i.Z)({},l,{columns:K,container:Z,direction:y,item:W,lg:z,md:N,sm:G,rowSpacing:$,columnSpacing:V,wrap:T,xl:O,xs:_,zeroMinWidth:F}),X=function(e){var n=e.classes,t=e.container,a=e.direction,r=e.item,i=e.lg,o=e.md,c=e.sm,l=e.spacing,s=e.wrap,d=e.xl,m=e.xs,p={root:["root",t&&"container",r&&"item",e.zeroMinWidth&&"zeroMinWidth",t&&0!==l&&"spacing-xs-".concat(String(l)),"row"!==a&&"direction-xs-".concat(String(a)),"wrap"!==s&&"wrap-xs-".concat(String(s)),!1!==m&&"grid-xs-".concat(String(m)),!1!==c&&"grid-sm-".concat(String(c)),!1!==o&&"grid-md-".concat(String(o)),!1!==i&&"grid-lg-".concat(String(i)),!1!==d&&"grid-xl-".concat(String(d))]};return(0,u.Z)(p,v,n)}(q);return t=(0,x.jsx)(k,(0,i.Z)({ownerState:q,className:(0,c.Z)(X.root,d),as:h,ref:n},H)),12!==K?(0,x.jsx)(p.Provider,{value:K,children:t}):t}))},5826:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a=t(7294),r=t(5414),i=t(5444),o=t(4320),c=t(6968),l=t(4584),s=t(3575),u=t(3381),d=t(1072),m=t(6633),p=t.n(m),f=t(7160);function g(){var e=(0,a.useState)(""),n=e[0],t=e[1],m=(0,a.useState)(""),g=m[0],v=m[1],w=(0,a.useState)(!1),h=w[0],x=w[1],S=(0,a.useState)("");S[0],S[1];return(0,a.useEffect)((function(){if("undefined"!=typeof window){var e=(0,s.initializeApp)(l.Z),n=(0,u.v0)(e);(0,u.Aj)(n,(function(e){e?(console.log(e.email),t(e.displayName),v(e.photoURL),e.emailVerified&&x(!0)):(0,i.navigate)("/auth")}))}})),a.createElement(f.Z,null,a.createElement(r.q,null,a.createElement("title",null,"PLAS: Profile")),a.createElement("div",{id:"main",className:"wrapper style1"},a.createElement("div",{className:"container"},a.createElement("header",{className:"major"},a.createElement("h2",null,n),a.createElement("h5",null,g)),a.createElement("section",null,a.createElement(o.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",direction:"column"},a.createElement(o.ZP,{item:!0},!h&&a.createElement("h3",{color:"red"},"Please verify your email first and then refresh the page to gain access to the data and other features.")),h&&a.createElement(a.Fragment,null,a.createElement(o.ZP,{item:!0},"Please download all the data as a csv file by clicking ",a.createElement(c.Z,{onClick:function(){!function(){if("undefined"!=typeof window){var e=(0,d.cF)();(0,d.Jt)((0,d.iH)(e,"PLAS-5k/database/5000_final.csv")).then((function(e){console.log(e),p()({url:e,method:"GET",responseType:"blob"}).then((function(e){var n=window.URL.createObjectURL(new Blob([e.data])),t=document.createElement("a");t.href=n,t.setAttribute("download","5000_final.csv"),document.body.appendChild(t),t.click()}))}))}}()}},"here"),"."),a.createElement(o.ZP,{item:!0},"To download all the initial structures in pdb format click ",a.createElement(c.Z,{onClick:function(){!function(){if("undefined"!=typeof window){var e=(0,d.cF)();(0,d.Jt)((0,d.iH)(e,"PLAS-5k/database/allPDB.zip")).then((function(e){console.log(e),p()({url:e,method:"GET",responseType:"blob"}).then((function(e){var n=window.URL.createObjectURL(new Blob([e.data])),t=document.createElement("a");t.href=n,t.setAttribute("download","allPDB.zip"),document.body.appendChild(t),t.click()}))}))}}()}},"here"),"."),a.createElement(o.ZP,null,"Wish to view the structure click ",a.createElement(i.Link,{to:"/viewer"},"here."))),a.createElement(o.ZP,{item:!0},a.createElement(c.Z,{variant:"contained",onClick:function(){var e;e=(0,u.v0)(),(0,u.w7)(e).then((function(){(0,i.navigate)("/auth"),alert("Sign Out success")})).catch((function(e){alert("Error message: ",e.message)}))}},"Sign Out")))))))}},4584:function(e,n){n.Z={apiKey:"AIzaSyDbbvMpHagiUbg2pLkKTeth-nty3V8NlNY",authDomain:"plas-5k.firebaseapp.com",projectId:"plas-5k",storageBucket:"plas-5k.appspot.com",messagingSenderId:"782699338239",appId:"1:782699338239:web:f4b6d7df3d420edbab6fca",measurementId:"G-S2H6N0NXZV"}}}]);
//# sourceMappingURL=component---src-pages-profile-js-c35ec7c0fbefe1ce906a.js.map