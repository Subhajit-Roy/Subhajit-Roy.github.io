(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{miCL:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return c}));var a=n("9Hrx"),i=n("q1tI"),s=n.n(i),r=n("9WST"),o=n("Bl7J"),u=n("vrFN"),l=(n("yuHc"),n("5+5L"));r.c.GlobalWorkerOptions.workerSrc="//cdnjs.cloudflare.com/ajax/libs/pdf.js/"+r.c.version+"/pdf.worker.js";var c=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={width:800,height:182,pageNumber:1,maxPage:30,pdf:""},n}Object(a.a)(t,e);var i=t.prototype;return i.updateDimensions=function(){if("undefined"!=typeof window)if(window.innerWidth<500)this.setState({width:450,height:102});else{var e=window.innerWidth-100,t=Math.round(e/4.4);this.setState({width:e,height:t})}},i.componentDidMount=function(){this.updateDimensions(),"undefined"!=typeof window&&window.addEventListener("resize",this.updateDimensions.bind(this))},i.componentWillUnmount=function(){"undefined"!=typeof window&&window.removeEventListener("resize",this.updateDimensions.bind(this))},i.nextPage=function(){this.state.pageNumber!==this.state.maxPage&&this.setState({pageNumber:this.state.pageNumber+1})},i.prevPage=function(){1!==this.state.pageNumber&&this.setState({pageNumber:this.state.pageNumber-1})},i.onPDFLoad=function(e){this.setState({maxPage:e})},i.render=function(){var e=this,t=this.props.url;return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{style:{margin:"0 auto",marginTop:"4em"}},s.a.createElement(o.a,null,s.a.createElement(u.a,{title:"GATE Biotechnology 2020"}),s.a.createElement("div",{className:"button",style:{display:"flex"}},s.a.createElement(l.a,{onClick:function(){return e.prevPage()},className:"prevButton mr-3"},"Previous  ",this.state.pageNumber-1),s.a.createElement("h3",null,this.state.pageNumber," of ",this.state.maxPage),s.a.createElement(l.a,{onClick:function(){return e.nextPage()},className:"nextButton ml-3"},"Next   ",this.state.pageNumber+1)),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(r.a,{file:n("0POe"),onContextMenu:function(e){return e.preventDefault()},className:"pdf-document",onLoadSuccess:function(t){return e.onPDFLoad(t.numPages)},renderMode:"canvas`"},s.a.createElement(r.b,{pageNumber:this.state.pageNumber,width:this.state.width}))),s.a.createElement("div",{style:{display:"flex"}},s.a.createElement(l.a,{onClick:function(){return e.nextPage()},className:"buttonLast"}," ",s.a.createElement("h2",null,"Next")),s.a.createElement("p",null,"Url is ",t)))))},t}(i.Component)},yuHc:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-pdf-1-js-af717f4e7d1256cee10c.js.map