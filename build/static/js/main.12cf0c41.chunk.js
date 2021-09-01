(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{37:function(e,t,a){},39:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var r=a(1),n=a.n(r),s=a(30),c=a.n(s),i=(a(37),a(8)),o=a.n(i),u=a(32),l=a(14),d=a(9),h=a(10),b=a(12),j=a(11),m=(a(39),Object(r.createContext)({serverTweets:[],error:"",currentUser:"",onAddTweet:function(){}})),v=a(0),f=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={value:"",id:"",tweetText:"",date:"",userName:"",charactersLeft:0,maxTweetLengthWarning:!1,maxTweetLengthReached:!1,arrayOfTweets:[],loading:!1},r.item={},r}return Object(h.a)(a,[{key:"handleChange",value:function(e){this.setState({tweetText:e.target.value});var t=e.target.value;this.setState({charactersLeft:-1*(t.length-140),maxTweetLengthWarning:t.length>99,maxTweetLengthReached:t.length>140})}},{key:"handleSubmit",value:function(e,t,a){var r=this;e.preventDefault(),this.setState({loading:!0}),setTimeout((function(){if(r.state.tweetText){var e={id:Date.now(),content:r.state.tweetText,userName:t,date:(new Date).toISOString()};a(e),r.setState({value:"",id:"",tweetText:"",date:"",maxTweetLengthWarning:!1}),r.afterSubmit()}}),1e3)}},{key:"afterSubmit",value:function(){this.setState({loading:!1})}},{key:"render",value:function(){var e=this;return Object(v.jsx)(m.Consumer,{children:function(t){var a=t.error,r=t.currentUser,n=t.onAddTweet;return Object(v.jsxs)("div",{className:"tweetForm",children:[Object(v.jsxs)("form",{className:"card",onSubmit:function(t){return e.handleSubmit(t,r,n)},children:[Object(v.jsx)("div",{className:"card-body",children:Object(v.jsx)("textarea",{className:"form-control",name:"text",rows:"3",placeholder:"What you have in mind...",value:e.state.tweetText,onChange:function(t){return e.handleChange(t)}})}),Object(v.jsxs)("div",{className:"card-body form-footer",children:[e.state.maxTweetLengthWarning&&!e.state.maxTweetLengthReached&&Object(v.jsxs)("div",{className:"float-start",children:[e.state.charactersLeft," characters left."]}),Object(v.jsxs)("div",{className:"float-end",children:[!e.state.tweetText&&Object(v.jsx)("button",{className:"btn btn-primary disabled",children:"Tweet"}),e.state.tweetText&&e.state.maxTweetLengthReached&&!e.state.loading&&Object(v.jsx)("button",{className:"btn btn-primary disabled",children:"Tweet"}),e.state.tweetText&&!e.state.maxTweetLengthReached&&!e.state.loading&&Object(v.jsx)("button",{className:"btn btn-primary",children:"Tweet"}),e.state.tweetText&&e.state.loading&&Object(v.jsxs)("button",{className:"btn btn-primary disabled",children:[Object(v.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"})," Loading ..."]})]})]})]}),e.state.maxTweetLengthReached&&Object(v.jsx)("div",{className:"alert alert-danger",role:"alert",children:"The tweet can't contain more than 140 chars."}),a&&Object(v.jsx)("div",{className:"alert alert-danger",role:"alert",children:a}),"Anonymous user"===r&&Object(v.jsxs)("div",{className:"alert alert-warning",role:"alert",children:["You are currently logged in as 'Anonymous user'. Please change your user name in the ",Object(v.jsx)("a",{href:"/profile",children:"profile"})," section."]})]})}})}}]),a}(n.a.Component),p=function(e){var t=e.item;return Object(v.jsxs)("div",{className:"card tweet",children:[Object(v.jsxs)("div",{className:"card-body tweet-header",children:[Object(v.jsx)("div",{className:"float-start",children:t.userName}),Object(v.jsx)("div",{className:"float-end",children:t.date})]}),Object(v.jsx)("div",{className:"card-body tweet-body",children:Object(v.jsx)("p",{className:"card-text tweet-text",children:t.content})})]})},x=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={tweets:[],loading:!1},r}return Object(h.a)(a,[{key:"render",value:function(){return Object(v.jsx)(m.Consumer,{children:function(e){var t=e.serverTweets;return Object(v.jsx)("div",{className:"container",children:t.map((function(e){return Object(v.jsx)(p,{item:e},e.date)}))})}})}}]),a}(n.a.Component),O=a(19),w=a.n(O),g="https://micro-blogging-dot-full-stack-course-services.ew.r.appspot.com/tweet";function N(){return y.apply(this,arguments)}function y(){return(y=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,w.a.get("".concat(g));case 2:return t=e.sent,e.abrupt("return",t.data.tweets);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function T(e){return S.apply(this,arguments)}function S(){return(S=Object(l.a)(o.a.mark((function e(t){var a,r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.a.post("".concat(g),t);case 3:return a=e.sent,e.abrupt("return",a.data);case 7:return e.prev=7,e.t0=e.catch(0),r="Oops! Something went wrong. ".concat(JSON.stringify(e.t0.response.text)),e.abrupt("return",String(r));case 11:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}var U=a(16),k=a(2),C=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={value:"",currentUserName:"",updatedUserName:"",redirect:null},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(t){return{currentUserName:e.props.currentUser,updatedUserName:e.props.currentUser,value:e.props.currentUser,redirect:null}}))}},{key:"handleChange",value:function(e){this.setState({value:e.target.value,updatedUserName:e.target.value})}},{key:"handleSubmit",value:function(e){e.preventDefault();var t=this.state.updatedUserName;this.props.onChangeUser(t),alert("The user name has been succesfully changed to "+t),this.setState((function(e){return{value:t,redirect:"/"}}))}},{key:"render",value:function(){var e=this;return this.state.redirect?Object(v.jsx)(k.a,{to:this.state.redirect}):Object(v.jsxs)("div",{className:"container text-white profile",children:[Object(v.jsx)("h2",{children:"Profile"}),Object(v.jsx)("h3",{children:"User Name"}),Object(v.jsxs)("form",{className:"card-profile",onSubmit:function(t){return e.handleSubmit(t)},children:[Object(v.jsx)("div",{className:"card-body-profile",children:Object(v.jsx)("input",{className:"form-control",name:"text",type:"text",rows:"1",value:this.state.value,onChange:function(t){return e.handleChange(t)}})}),Object(v.jsx)("div",{className:"card-body tweet-header",children:Object(v.jsxs)("div",{className:"float-end",children:[this.state.updatedUserName!==this.state.currentUserName&&Object(v.jsx)("button",{className:"btn btn-primary",children:"Save"}),this.state.updatedUserName===this.state.currentUserName&&Object(v.jsx)("button",{className:"btn btn-primary disabled",children:"Save"})]})})]})]})}}]),a}(n.a.Component),L=function(){return Object(v.jsx)("nav",{className:"container navbar navbar-expand fixed-top",children:Object(v.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(v.jsxs)("div",{className:"navbar-nav",children:[Object(v.jsx)(U.b,{className:"nav-link",exact:!0,activeClassName:"selected",to:"/",children:"Home"}),Object(v.jsx)(U.b,{className:"nav-link",activeClassName:"selected",to:"/profile",children:"Profile"})]})})})},I=function(e){Object(b.a)(a,e);var t=Object(j.a)(a);function a(e){var r;return Object(d.a)(this,a),(r=t.call(this,e)).state={serverTweets:[],error:"",loading:!1,currentUser:localStorage.getItem("currentUser")||"Anonymous user",onAddTweet:function(e){return r.addNewTweet(e)}},r}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this;this.setState((function(e){return{error:""}})),this.loadServerTweets(),this.interval=setInterval((function(){return e.loadServerTweets()}),15e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"addNewTweet",value:function(){var e=Object(l.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(t);case 2:"string"===typeof(a=e.sent)?a.includes("Oops! Something went wrong.")&&this.setState((function(e){return{error:a}})):this.setState((function(e){return{serverTweets:[t].concat(Object(u.a)(e.serverTweets))}}));case 4:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"setUserName",value:function(e){localStorage.removeItem("currentUser"),localStorage.setItem("currentUser",e),this.setState((function(t){return{currentUser:e}}))}},{key:"loadServerTweets",value:function(){var e=Object(l.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N();case 2:(t=e.sent).sort((function(e,t){return t.date>e.date?1:-1})),this.setState((function(e){return{serverTweets:[]}})),this.setState((function(e){return{loading:!1,serverTweets:t}}));case 6:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;return Object(v.jsx)(m.Provider,{value:this.state,children:Object(v.jsxs)(U.a,{children:[Object(v.jsx)(L,{}),Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)(k.d,{children:[Object(v.jsxs)(k.b,{exact:!0,path:"/",children:[Object(v.jsx)(f,{}),this.state.serverTweets.length&&Object(v.jsx)(x,{})]}),Object(v.jsx)(k.b,{path:"/profile",children:Object(v.jsx)(C,{currentUser:this.state.currentUser,onChangeUser:function(t){return e.setUserName(t)}})})]})})]})})}}]),a}(n.a.Component),A=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,68)).then((function(t){var a=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,c=t.getTTFB;a(e),r(e),n(e),s(e),c(e)}))};c.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(I,{})}),document.getElementById("root")),A()}},[[67,1,2]]]);
//# sourceMappingURL=main.12cf0c41.chunk.js.map