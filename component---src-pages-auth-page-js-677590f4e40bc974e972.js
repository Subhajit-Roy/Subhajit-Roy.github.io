(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"shp/":function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return d}));var a=n("uRdJ"),l=n("9Hrx"),r=n("q1tI"),c=n.n(r),i=n("Bl7J"),o=n("4KHY"),s=n("cWnB"),u=function(e){function t(){var t;return(t=e.call(this)||this).handleChange=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t.state={username:"",password:""},t}Object(l.a)(t,e);var n=t.prototype;return n.onHandleClick=function(e){Object(o.c)(this.state.email,this.state.password),console.log("working"),this.props.action()},n.render=function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("p",null,"Email"),c.a.createElement("input",{name:"email",type:"text",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("p",null,"Password"),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement(s.a,{onClick:function(t){return e.onHandleClick(t)}},"Login")))},t}(r.Component),m=n("5Wao"),h=function(e){function t(){var t;return(t=e.call(this)||this).handleChange=function(e){var n;t.setState(((n={})[e.target.name]=e.target.value,n))},t.state={email:"",password:""},t}Object(l.a)(t,e);var n=t.prototype;return n.fireSignUp=function(e,t){m.a.auth().createUserWithEmailAndPassword(e,t).then(console.log("User registered Successfully")).catch((function(e){console.log("Error code"+e.code),console.log("Error Message"+e.message)}))},n.render=function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",null,c.a.createElement("p",null,"Email"),c.a.createElement("input",{name:"email",type:"text",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement("p",null,"Password"),c.a.createElement("input",{name:"password",type:"password",onChange:this.handleChange})),c.a.createElement("div",null,c.a.createElement(s.a,{onClick:function(){return e.fireSignUp(e.state.email,e.state.password)}},"This is button")," "))},t}(r.Component),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={check:0},n.handlerLogin=n.handlerLogin.bind(Object(a.a)(n)),n}Object(l.a)(t,e);var n=t.prototype;return n.onSignOut=function(){Object(o.b)(),this.setState({check:1})},n.handlerLogin=function(){this.setState({check:2})},n.checkFire=function(){!0===Object(o.a)()?console.log("True"):console.log("False")},n.render=function(){var e=this;return c.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0 1.0875rem 1.45rem",marginTop:"4em"}},c.a.createElement(i.a,null,c.a.createElement("h1",null,"This is working"),c.a.createElement(h,null),c.a.createElement("p",null),c.a.createElement("p",null),c.a.createElement("br",null),c.a.createElement(u,{action:this.handlerLogin}),c.a.createElement("p",null),c.a.createElement("p",null),c.a.createElement(s.a,{onClick:function(){return e.onSignOut()}},"Sign Out"),c.a.createElement(s.a,{onClick:function(){return e.checkFire()}}," Check "),c.a.createElement("p",null,1===this.state.check?c.a.createElement(c.a.Fragment,null,"Successfully Loged out"):2===this.state.check?c.a.createElement(c.a.Fragment,null,"Successfully Loged in"):null)))},t}(r.Component)}}]);
//# sourceMappingURL=component---src-pages-auth-page-js-677590f4e40bc974e972.js.map