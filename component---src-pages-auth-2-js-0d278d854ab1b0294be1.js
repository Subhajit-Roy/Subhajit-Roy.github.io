"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[942],{110:function(e,n,t){t.r(n),t.d(n,{default:function(){return E},onSubmit:function(){return C}});var r=t(3381),o=t(4942),a=t(3366),i=t(7462),c=t(7294),u=t(2692),l=t(5332),s=t(8297),d=t(6486),p=t(8348),f=t(2371),v=t(5893),m=["component","direction","spacing","divider","children"];function g(e,n){var t=c.Children.toArray(e).filter(Boolean);return t.reduce((function(e,r,o){return e.push(r),o<t.length-1&&e.push(c.cloneElement(n,{key:"separator-".concat(o)})),e}),[])}var b=(0,p.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(e,n){return[n.root]}})((function(e){var n=e.ownerState,t=e.theme,r=(0,i.Z)({display:"flex"},(0,u.k9)({theme:t},(0,u.P$)({values:n.direction,breakpoints:t.breakpoints.values}),(function(e){return{flexDirection:e}})));if(n.spacing){var a=(0,l.hB)(t),c=Object.keys(t.breakpoints.values).reduce((function(e,t){return null==n.spacing[t]&&null==n.direction[t]||(e[t]=!0),e}),{}),s=(0,u.P$)({values:n.direction,base:c}),p=(0,u.P$)({values:n.spacing,base:c});r=(0,d.Z)(r,(0,u.k9)({theme:t},p,(function(e,t){return{"& > :not(style) + :not(style)":(0,o.Z)({margin:0},"margin".concat((r=t?s[t]:n.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[r])),(0,l.NA)(a,e))};var r})))}return r})),h=c.forwardRef((function(e,n){var t=(0,f.Z)({props:e,name:"MuiStack"}),r=(0,s.Z)(t),o=r.component,c=void 0===o?"div":o,u=r.direction,l=void 0===u?"column":u,d=r.spacing,p=void 0===d?0:d,h=r.divider,k=r.children,w=(0,a.Z)(r,m),y={direction:l,spacing:p};return(0,v.jsx)(b,(0,i.Z)({as:c,ownerState:y,ref:n},w,{children:h?g(k,h):k}))})),k=h,w=t(6081),y=t(6968),Z=t(3575);"undefined"!=typeof window&&Z.initializeApp({apiKey:"AIzaSyDbbvMpHagiUbg2pLkKTeth-nty3V8NlNY",authDomain:"plas-5k.firebaseapp.com",projectId:"plas-5k",storageBucket:"plas-5k.appspot.com",messagingSenderId:"782699338239",appId:"1:782699338239:web:f4b6d7df3d420edbab6fca",measurementId:"G-S2H6N0NXZV"});var S=Z;function C(e,n){console.log(e),console.log(n)}function E(){var e=(0,c.useState)(""),n=e[0],t=e[1],o=(0,c.useState)(""),a=o[0],i=o[1],u=function(){return(0,r.v0)(S)}.currentUser;return u?console.log(u.uid):console.log("Logged Out"),c.createElement("div",{className:"contain"},c.createElement(k,{spacing:2,direction:"column"},c.createElement(w.Z,{id:"email",label:"Email",variant:"standard",style:{color:"white",backgroundColor:"white"},onChange:function(e){t(e.target.value)}}),c.createElement(w.Z,{id:"pass",label:"Password",type:"password",autoComplete:"current-password",variant:"filled",style:{color:"white",backgroundColor:"white"},onChange:function(e){i(e.target.value)}}),c.createElement(y.Z,{variant:"contained",onClick:function(){C(n,a)}},"Submit")))}},3366:function(e,n,t){function r(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}t.d(n,{Z:function(){return r}})}}]);
//# sourceMappingURL=component---src-pages-auth-2-js-0d278d854ab1b0294be1.js.map