(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{SGRb:function(t,e,n){},h5Py:function(t,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return l}));var a=n("9Hrx"),o=n("q1tI"),c=n.n(o),r=n("Wbzz"),i=n("Bl7J"),u=n("vrFN"),l=(n("SGRb"),function(t){function e(){var e;return(e=t.call(this)||this).state={data:""},e}Object(a.a)(e,t);var n=e.prototype;return n.componentDidMount=function(){var t=this;fetch("https://us-central1-edusite-cc257.cloudfunctions.net/app").then((function(t){return t.json()})).then((function(e){return t.setState({data:e})})).catch((function(t){console.log(t)}))},n.render=function(){return c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",marginTop:"4em"}},c.a.createElement(i.a,null,c.a.createElement(u.a,{title:"Test Page"}),c.a.createElement("h1",null,"Hi from the second page"),c.a.createElement("p",null,"Welcome to page 2"),c.a.createElement("p",null,this.state.data),console.log(this.state.data),c.a.createElement(r.Link,{to:"/"},"Go back to the homepage")))},e}(o.Component))}}]);
//# sourceMappingURL=component---src-pages-test-js-81ba47adf7586f99b00d.js.map