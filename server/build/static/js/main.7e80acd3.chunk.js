(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{60:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),r=a.n(n),o=a(30),i=a.n(o),c=a(10),l=a(11),u=a(3),h=a(14),b=a(13),d=(a(37),a(12)),j=a(2),m=a(6),p=a.n(m),g=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onLogout=s.onLogout.bind(Object(u.a)(s)),s}return Object(l.a)(a,[{key:"onLogout",value:function(e){var t=this;e.preventDefault(),p.a.get("http://localhost:5000/logout",{withCredentials:!0}).then((function(e){console.log(e),200===e.status&&t.props.setUser({isAuthenticated:!1,username:null})}))}},{key:"render",value:function(){return Object(s.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(s.jsx)(d.b,{to:"/",className:"navbar-brand",children:"Assassins"}),Object(s.jsx)("div",{className:"collpase navbar-collapse",children:Object(s.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(s.jsx)("li",{className:"navbar-item",children:this.props.isAuthenticated?Object(s.jsx)(d.b,{to:"/",className:"nav-link",onClick:this.onLogout,children:"Logout"}):Object(s.jsx)(d.b,{to:"/login",className:"nav-link",children:"Login"})}),Object(s.jsx)("li",{className:"navbar-item",children:Object(s.jsx)(d.b,{to:"/register",className:"nav-link",children:"Register"})})]})})]})}}]),a}(n.Component),O=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onChangeUsername=s.onChangeUsername.bind(Object(u.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s.state={username:"",password:""},s}return Object(l.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password};console.log(a),p.a.post("http://localhost:5000/login",a,{withCredentials:!0}).then((function(e){console.log(e),200===e.status&&(t.props.setUser({isAuthenticated:!0,username:e.data.username}),t.setState({redirectTo:"/"}))}))}},{key:"render",value:function(){return this.state.redirectTo?Object(s.jsx)(j.a,{to:{pathname:this.state.redirectTo}}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Login"}),Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Username: "}),Object(s.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password: "}),Object(s.jsx)("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.onChangePassword})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Login",className:"btn btn-primary"})})]})]})}}]),a}(n.Component),v=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onChangeUsername=s.onChangeUsername.bind(Object(u.a)(s)),s.onChangePassword=s.onChangePassword.bind(Object(u.a)(s)),s.onChangeConfirmPassword=s.onChangeConfirmPassword.bind(Object(u.a)(s)),s.canSubmit=s.canSubmit.bind(Object(u.a)(s)),s.onSubmit=s.onSubmit.bind(Object(u.a)(s)),s.state={username:"",password:"",confirmPassword:""},s}return Object(l.a)(a,[{key:"onChangeUsername",value:function(e){this.setState({username:e.target.value})}},{key:"onChangePassword",value:function(e){this.setState({password:e.target.value})}},{key:"onChangeConfirmPassword",value:function(e){this.setState({confirmPassword:e.target.value})}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,password:this.state.password};console.log(a),p.a.post("http://localhost:5000/register",a,{withCredentials:!0}).then((function(e){200===e.status&&t.setState({redirectTo:"/login"})}))}},{key:"canSubmit",value:function(){return this.state.username.length>0&&this.state.password.length>0&&this.state.password===this.state.confirmPassword}},{key:"render",value:function(){return this.state.redirectTo?Object(s.jsx)(j.a,{to:{pathname:this.state.redirectTo}}):Object(s.jsxs)("div",{children:[Object(s.jsx)("h3",{children:"Register"}),Object(s.jsxs)("form",{onSubmit:this.onSubmit,children:[Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Username: "}),Object(s.jsx)("input",{type:"text",required:!0,className:"form-control",value:this.state.username,onChange:this.onChangeUsername})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Password: "}),Object(s.jsx)("input",{type:"password",className:"form-control",value:this.state.password,onChange:this.onChangePassword})]}),Object(s.jsxs)("div",{className:"form-group",children:[Object(s.jsx)("label",{children:"Confirm Password: "}),Object(s.jsx)("input",{type:"password",className:"form-control",value:this.state.confirmPassword,onChange:this.onChangeConfirmPassword})]}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Register",disabled:!this.canSubmit,className:"btn btn-primary"})})]})]})}}]),a}(n.Component),f=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).onChangePartyCode=s.onChangePartyCode.bind(Object(u.a)(s)),s.onJoinParty=s.onJoinParty.bind(Object(u.a)(s)),s.onCreateParty=s.onCreateParty.bind(Object(u.a)(s)),s.state={partyCode:""},s}return Object(l.a)(a,[{key:"onJoinParty",value:function(e){e.preventDefault();var t={partyCode:this.state.partyCode};console.log(t),p.a.post("http://localhost:5000/join",t,{withCredentials:!0}).then((function(e){return console.log(e.data)}))}},{key:"onChangePartyCode",value:function(e){this.setState({partyCode:e.target.value})}},{key:"onCreateParty",value:function(e){var t=this;e.preventDefault(),p.a.get("http://localhost:5000/create",{withCredentials:!0}).then((function(e){console.log(e.data),200===e.status||401===e.status&&t.setState({redirectTo:"/login"})}))}},{key:"render",value:function(){return this.state.redirectTo?Object(s.jsx)(j.a,{to:{pathname:this.state.redirectTo}}):Object(s.jsxs)("div",{className:"text-center",children:[Object(s.jsxs)("form",{className:"form-inline justify-content-center mb-3",onSubmit:this.onJoinParty,children:[Object(s.jsx)("div",{className:"form-group mx-sm-3",children:Object(s.jsx)("input",{type:"text",className:"form-control",value:this.state.partyCode,onChange:this.onChangePartyCode,id:"partyCode",placeholder:"Party Code"})}),Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Join Party",className:"btn btn-primary"})})]}),Object(s.jsx)("form",{onSubmit:this.onCreateParty,children:Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("input",{type:"submit",value:"Create Party",className:"btn btn-primary"})})}),Object(s.jsx)("br",{})]})}}]),a}(n.Component),C=function(e){Object(h.a)(a,e);var t=Object(b.a)(a);function a(e){var s;return Object(c.a)(this,a),(s=t.call(this,e)).state={isAuthenticated:!1,username:null},s.getUser=s.getUser.bind(Object(u.a)(s)),s.setUser=s.setUser.bind(Object(u.a)(s)),s}return Object(l.a)(a,[{key:"getUser",value:function(){var e=this;p.a.get("http://localhost:5000/login",{withCredentials:!0}).then((function(t){console.log(t.data),200===t.status&&e.setState({isAuthenticated:!0,username:t.data.username})}))}},{key:"setUser",value:function(e){this.setState(e)}},{key:"componentDidMount",value:function(){this.getUser()}},{key:"render",value:function(){var e=this;return Object(s.jsx)(d.a,{children:Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)(g,{isAuthenticated:this.state.isAuthenticated,setUser:this.setUser}),Object(s.jsx)("br",{}),Object(s.jsx)(j.b,{path:"/",exact:!0,component:f}),Object(s.jsx)(j.b,{path:"/login",render:function(){return Object(s.jsx)(O,{setUser:e.setUser})}}),Object(s.jsx)(j.b,{path:"/register",component:v})]})})}}]),a}(n.Component),x=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,61)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,o=t.getTTFB;a(e),s(e),n(e),r(e),o(e)}))};p.a.interceptors.response.use((function(e){return e}),(function(e){return e.response.status,Promise.reject(e)})),i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(C,{})}),document.getElementById("root")),x()}},[[60,1,2]]]);
//# sourceMappingURL=main.7e80acd3.chunk.js.map