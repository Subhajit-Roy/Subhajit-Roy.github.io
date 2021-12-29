"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[112],{1109:function(e,t,n){n.r(t),n.d(t,{default:function(){return q}});var a=n(7294),r=n(7160),l=n(5444),o=n(4584),i=n(9499),c=n(3575),s=n(3366),m=n(3381),u=["component","location"];function d(e){var t=e.component,n=e.location,r=(0,s.Z)(e,u);if("undefined"!=typeof window){var l=(0,c.initializeApp)(o.Z);return(0,m.v0)(l).currentUser||"/app/auth"===n.pathname?a.createElement(t,r):((0,i.navigate)("/app/auth"),null)}}var p=n(9308),f=n(8348),E=n(6081),g=n(4320),h=n(8970),Z=n(5935),y=n(6968),v=n(4544),b=n(1348),w=n(5468),P=n(5414),C=["children","value","index"];function S(e){var t=e.children,n=e.value,r=e.index,l=(0,s.Z)(e,C);return a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==r,id:"simple-tabpanel-"+r,"aria-labelledby":"simple-tab-"+r},l),n===r&&a.createElement(w.Z,{sx:{p:3}},a.createElement(p.Z,null,t)))}"undefined"!=typeof window&&(0,c.initializeApp)(o.Z);var x=(0,f.ZP)((function(e){return a.createElement(E.Z,Object.assign({InputProps:{disableUnderline:!0}},e))}))((function(e){e.theme;return{"& .MuiInputBase-root":{color:"white",borderColor:"#1C1D26",border:1,justifyContent:"center"},"& .MuiInput-root":{border:1,color:"white",borderColor:"#1C1D26"},"& MuiInputBase-input":{border:1,color:"white",borderColor:"#1C1D26"},"& .MuiInputLabel-root":{color:"white",borderColor:"#1C1D26"},"& ..MuiFormControl-root":{borderColor:"#1C1D26"}}}));function I(e){return{id:"simple-tab-"+e,"aria-controls":"simple-tabpanel-"+e}}function k(e){var t=a.useState(0),n=t[0],i=t[1],s=(0,a.useState)(""),u=s[0],d=s[1],p=(0,a.useState)(""),f=p[0],E=p[1],C=(0,a.useState)(""),k=C[0],j=C[1],L=(0,a.useState)(""),A=L[0],N=L[1];return(0,a.useEffect)((function(){if("undefined"!=typeof window){var e=(0,c.initializeApp)(o.Z),t=(0,m.v0)(e);(0,m.Aj)(t,(function(e){e?(0,l.navigate)("/app/profile"):console.log("Scope to login In")}))}})),a.createElement(r.Z,null,a.createElement(P.q,null,a.createElement("title",null,"PLAS: Authentication"),a.createElement("meta",{name:"description",content:"Elements Page"})),a.createElement("div",{id:"main",className:"wrapper style1"},a.createElement("div",{className:"container"},a.createElement("header",{className:"major"},a.createElement("h2",null,"Log In / Sign Up")),a.createElement("section",null,a.createElement("div",{className:"Auth Tab"},a.createElement(g.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center"},a.createElement(g.ZP,{item:!0,xs:"auto"},a.createElement(w.Z,{sx:{width:"auto",bgcolor:"background.paper"}},a.createElement(h.Z,{centered:!0,value:n,onChange:function(e,t){i(t)},textColor:"white"},a.createElement(Z.Z,Object.assign({label:"Sign In"},I(0))),a.createElement(Z.Z,Object.assign({label:"Sign Up"},I(1)))),a.createElement(S,{value:n,index:0},a.createElement(g.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",direction:"column"},a.createElement(g.ZP,{item:!0,xs:"auto"},a.createElement("h3",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bolder"}},"Log In")),a.createElement(g.ZP,{item:!0},a.createElement(x,{className:"Email",variant:"standard",label:"E-mail",onChange:function(e){d(e.target.value)},noborder:!0,style:{fontDisplay:"white",display:"flex",justifyContent:"center"},color:"secondary"})),a.createElement(g.ZP,{item:!0},a.createElement(x,{className:"Password",type:"password",label:"Password",variant:"standard",onChange:function(e){E(e.target.value)},noborder:!0,style:{fontDisplay:"white",display:"flex",justifyContent:"center"},color:"secondary"})),a.createElement(g.ZP,{item:!0},a.createElement(g.ZP,{container:!0},a.createElement(g.ZP,{item:!0,spacing:2},a.createElement(y.Z,{variant:"contained",endIcon:a.createElement(v.Z,null,"login"),onClick:function(){!function(e,t){if("undefined"!=typeof window){var n=(0,m.v0)();(0,m.e5)(n,e,t).then((function(e){var t=e.user;console.log(t),(0,l.navigate)("/app/profile")})).catch((function(e){var t=e.message;alert("Error:",t)}))}}(u,f)}},"Sign IN")),a.createElement(g.ZP,{item:!0,spacing:2},a.createElement(y.Z,{varient:"Outlined",color:"secondary",startIcon:a.createElement(v.Z,{color:"primary"},"delet_forever")},"Reset")))),a.createElement(g.ZP,{item:!0},a.createElement("h4",{style:{paddingTop:"3rem"}},"Third Party Authentication")),a.createElement(g.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",direction:"row",alignContent:"center"},a.createElement(g.ZP,{item:!0,xs:"auto"},a.createElement(v.Z,{fontSize:"large"},"facebook_rounded"))))),a.createElement(S,{value:n,index:1},a.createElement(g.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",direction:"column"},a.createElement(g.ZP,{item:!0,xs:"auto"},a.createElement("h3",{style:{display:"flex",justifyContent:"center",alignItems:"center",fontWeight:"bolder"}},"Sign Up")),a.createElement(g.ZP,{item:!0},a.createElement(x,{className:"Name",variant:"standard",label:"Name",onChange:function(e){j(e.target.value)},noborder:!0,style:{fontDisplay:"white",display:"flex",justifyContent:"center"},color:"secondary"})),a.createElement(g.ZP,{item:!0},a.createElement(x,{className:"University",variant:"standard",label:"University",onChange:function(e){N(e.target.value)},noborder:!0,style:{fontDisplay:"white",display:"flex",justifyContent:"center"},color:"secondary"})),a.createElement(g.ZP,{item:!0},a.createElement(x,{className:"Email",variant:"standard",label:"E-mail",onChange:function(e){d(e.target.value)},noborder:!0,style:{fontDisplay:"white",display:"flex",justifyContent:"center"},color:"secondary"})),a.createElement(g.ZP,{item:!0},a.createElement(x,{className:"Password",type:"password",label:"Password",onChange:function(e){E(e.target.value)},style:{fontDisplay:"white",display:"flex",justifyContent:"center"},color:"secondary",variant:"standard"})),a.createElement(g.ZP,{item:!0},a.createElement(b.Z,{defaultChecked:!0,disabled:!0,sx:{"&.MuiButtonBase-root":{color:"#E44C65"}}})," I agree to the ",a.createElement(l.Link,{to:"/tc"},"terms and condition"),"."),a.createElement(g.ZP,{item:!0},a.createElement(b.Z,{defaultChecked:!0,disabled:!0,sx:{"&.MuiButtonBase-root":{color:"#E44C65"}}})," I agree to the ",a.createElement(l.Link,{to:"/license"},"liscence agreement.")),a.createElement(g.ZP,{item:!0},a.createElement(g.ZP,{container:!0},a.createElement(g.ZP,{item:!0,spacing:2},a.createElement(y.Z,{variant:"contained",endIcon:a.createElement(v.Z,null,"login"),onClick:function(){!function(e,t,n,a){if("undefined"!=typeof window){var r=(0,m.v0)();(0,m.Xb)(r,e,t).then((function(o){console.log(o.user),(0,m.ck)(r.currentUser,{displayName:n,photoURL:a}),(0,m.e5)(r,e,t).then((function(e){console.log("Signed In after sign Up"),(0,m.w$)(r.currentUser).then((function(){console.log("Verification mail sent."),alert("Verification Email sent"),(0,l.navigate)("/app/profile")}))}))})).catch((function(e){console.log("Error Code:",e.code),console.log("Error Message:",e.message)}))}}(u,f,k,A)}},"Sign UP")),a.createElement(g.ZP,{item:!0,spacing:2},a.createElement(y.Z,{varient:"Outlined",color:"secondary",startIcon:a.createElement(v.Z,{color:"primary"},"delet_forever")},"Reset")))),a.createElement(g.ZP,{item:!0},a.createElement("h4",{style:{paddingTop:"3rem"}},"Third Party Authentication")),a.createElement(g.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",direction:"row",alignContent:"center"},a.createElement(g.ZP,{item:!0,xs:"auto"},a.createElement(v.Z,{fontSize:"large"},"facebook_rounded")))))))))))))}var j=n(6179),L=n(5686),A=n(931),N=n(5319),F=n(8953),U=n(2664),D=n(7708),M=n(943),_=n(7783),B=n(3182),O=n(1072);function R(){(0,a.useEffect)((function(){if("undefined"!=typeof window){var e=(0,c.initializeApp)(o.Z),t=(0,m.v0)(e);(0,m.Aj)(t,(function(e){e?function(){if("undefined"!=typeof window){var e=(0,O.cF)();(0,O.Jt)((0,O.iH)(e,"PLAS-5k/database/plas5k.json")).then((function(e){fetch(e).then((function(e){return e.json()})).then((function(e){k(e)}))})).catch((function(e){alert("Error in obtainint JSON")}))}}():(0,l.navigate)("/auth")}))}}));var e=a.useMemo((function(){return{"ball+stick":[{type:"ball+stick",param:{color:"bfactor"}}],cartoon:[{type:"cartoon",param:{color:"atomindex"}}],"ribbon and line":[{type:"ribbon",param:{color:"atomindex"}},{type:"line",param:{color:"element"}}],spacefill:[{type:"spacefill",param:{color:"element"}}],surface:[{type:"surface",param:{color:"element"}}]}}),[]),t=a.useMemo((function(){return{Reset:{}}}),[]),n=a.useState(""),r=n[0],i=n[1],s=a.useState(""),u=s[0],d=s[1],p=a.useState(!0),f=p[0],h=p[1],Z=a.useState(!0),y=Z[0],v=Z[1],w=a.useState(""),C=w[0],S=w[1],x=a.useState([]),I=x[0],k=x[1];return a.createElement(a.Fragment,null,a.createElement(j.Z,{title:"Home"}),a.createElement(P.q,null),a.createElement("div",{style:{}},a.createElement(A.Z,{style:{paddingTop:"2rem"},freeSolo:!0,id:"pdbid",options:I.map((function(e){return e.pdbid})),sx:{width:300},renderInput:function(e){return a.createElement(E.Z,Object.assign({},e,{label:"PDB ID",sx:{"& .MuiInputBase-root":{color:"white",borderColor:"#1C1D26",justifyContent:"center"},"& .MuiInput-root":{border:1,color:"white",borderColor:"#1C1D26"},"& MuiInputBase-input":{color:"white"},"& .MuiInputLabel-root":{color:"white"}}}))},onChange:function(e,t){return function(e){null!==e.length&&4===e.length&&(S("/input/"+e+".pdb"),i(e),d(I.findIndex((function(t){return t.pdbid===e}))),console.log(u))}(t)}})),""!==r?a.createElement("div",{id:"main",className:"wrapper style1"},a.createElement(g.ZP,{container:!0,spacing:4,direction:"row"},a.createElement(g.ZP,{item:!0},a.createElement(L.Stage,{width:"600px",height:"600px",cameraState:t},a.createElement(L.StructureComponent,{path:C,reprList:e["ball+stick"],selection:y?"Ligand":"not all"}),a.createElement(L.StructureComponent,{path:C,reprList:e.cartoon,selection:f?"protein":"not all"}))),a.createElement(g.ZP,{item:!0},a.createElement(g.ZP,{container:!0,direction:"column"},a.createElement(g.ZP,{item:!0},a.createElement("h5",null,"Receptor ",a.createElement(b.Z,{defaultChecked:!0,onChange:function(){h(!f)}}))),a.createElement(g.ZP,{item:!0},a.createElement("h5",null,"Ligand ",a.createElement(b.Z,{defaultChecked:!0,onChange:function(){v(!y)}}))))),a.createElement(g.ZP,{item:!0},a.createElement(N.Z,{component:F.Z},a.createElement(U.Z,null,a.createElement(D.Z,null,a.createElement(M.Z,{align:"left"},parseFloat(I[u].pdbid).toFixed(2)),a.createElement(M.Z,{align:"right"},"Energy components(kcal/mol)")),a.createElement(_.Z,null,a.createElement(B.Z,null,a.createElement(M.Z,{align:"left"},"Binding Affinity"),a.createElement(M.Z,{align:"right"},parseFloat(I[u].binding_affinity).toFixed(2)," ")),a.createElement(B.Z,null,a.createElement(M.Z,{align:"left"},"van der Walls Interaction"),a.createElement(M.Z,{align:"right"},parseFloat(I[u].vdW).toFixed(2))),a.createElement(B.Z,null,a.createElement(M.Z,{align:"left"},"Electrostatic Interaction Energy"),a.createElement(M.Z,{align:"right"},parseFloat(I[u].electrostatic).toFixed(2))),a.createElement(B.Z,null,a.createElement(M.Z,{align:"left"},"Polar Solvational Energy"),a.createElement(M.Z,{align:"right"},parseFloat(I[u].polar_solvation).toFixed(2)," ")),a.createElement(B.Z,null,a.createElement(M.Z,{align:"left"},"Non-Polar Solvational Energy"),a.createElement(M.Z,{align:"right"},parseFloat(I[u].non_polar_solvation).toFixed(2)," ")))))))):a.createElement("p",null))}var T=n(6633),z=n.n(T);function W(){var e=(0,a.useState)(""),t=e[0],n=e[1],i=(0,a.useState)(""),s=i[0],u=i[1],d=(0,a.useState)(!1),p=d[0],f=d[1],E=(0,a.useState)("");E[0],E[1];return(0,a.useEffect)((function(){if("undefined"!=typeof window){var e=(0,c.initializeApp)(o.Z),t=(0,m.v0)(e);(0,m.Aj)(t,(function(e){e?(console.log(e.email),n(e.displayName),u(e.photoURL),e.emailVerified&&f(!0)):(0,l.navigate)("/app/auth")}))}})),a.createElement(r.Z,null,a.createElement(P.q,null,a.createElement("title",null,"PLAS: Profile")),a.createElement("div",{id:"main",className:"wrapper style1"},a.createElement("div",{className:"container"},a.createElement("header",{className:"major"},a.createElement("h2",null,t),a.createElement("h5",null,s)),a.createElement("section",null,a.createElement(g.ZP,{container:!0,spacing:2,justifyContent:"center",alignItems:"center",direction:"column"},a.createElement(g.ZP,{item:!0},!p&&a.createElement("h3",{color:"red"},"Please verify your email first and then refresh the page to gain access to the data and other features.")),p&&a.createElement(a.Fragment,null,a.createElement(g.ZP,{item:!0},"Please download all the data as a csv file by clicking ",a.createElement(y.Z,{onClick:function(){!function(){if("undefined"!=typeof window){var e=(0,O.cF)();(0,O.Jt)((0,O.iH)(e,"PLAS-5k/database/5000_final.csv")).then((function(e){console.log(e),z()({url:e,method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","5000_final.csv"),document.body.appendChild(n),n.click()}))}))}}()}},"here"),"."),a.createElement(g.ZP,{item:!0},"To download all the initial structures in pdb format click ",a.createElement(y.Z,{onClick:function(){!function(){if("undefined"!=typeof window){var e=(0,O.cF)();(0,O.Jt)((0,O.iH)(e,"PLAS-5k/database/input.7z")).then((function(e){console.log(e),z()({url:e,method:"GET",responseType:"blob"}).then((function(e){var t=window.URL.createObjectURL(new Blob([e.data])),n=document.createElement("a");n.href=t,n.setAttribute("download","allPDB.zip"),document.body.appendChild(n),n.click()}))}))}}()}},"here"),"."),a.createElement(g.ZP,null,"Wish to view the structure click ",a.createElement(l.Link,{to:"/app/viewer"},"here."))),a.createElement(g.ZP,{item:!0},a.createElement(y.Z,{variant:"contained",onClick:function(){var e;e=(0,m.v0)(),(0,m.w7)(e).then((function(){(0,l.navigate)("/app/auth"),alert("Sign Out success")})).catch((function(e){alert("Error message: ",e.message)}))}},"Sign Out")))))))}var H=["component","location"];function J(e){var t=e.component,n=(e.location,(0,s.Z)(e,H));if("undefined"!=typeof window){var r=(0,c.initializeApp)(o.Z);return(0,m.v0)(r).currentUser?a.createElement(t,n):((0,i.navigate)("/app/auth"),null)}}function q(){return a.createElement(r.Z,null,a.createElement(i.Router,null,a.createElement(d,{path:"/app/profile",component:W}),a.createElement(J,{path:"/app/viewer",component:R}),a.createElement(k,{path:"/app/auth"})))}}}]);
//# sourceMappingURL=component---src-pages-app-js-508bdf202240c1e469c0.js.map