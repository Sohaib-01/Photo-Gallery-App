(this["webpackJsonpphoto-gallery"]=this["webpackJsonpphoto-gallery"]||[]).push([[0],{43:function(e,t,a){e.exports=a(74)},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(18),c=a.n(o),s=a(13),l=a(16),u=a(11),i=function(){return r.a.createElement("header",null,r.a.createElement("h1",null,"Photo Gallery App"),r.a.createElement("div",{className:"links"},r.a.createElement(l.b,{to:"/",className:"link"},"Home"),r.a.createElement(l.b,{to:"/gallery",className:"link"},"Gallery")))},p=a(14),m=a(75),d=a(77),f=a(17),h=a.n(f),E=a(25),b=a(26),v=a.n(b),O=function(e){return{type:"GET_ERRORS",errors:e}},g=function(e){return{type:"LOAD_PHOTOS",photos:e}},y=Object(s.b)((function(e){return{photos:e.photos||[],errors:e.errors||{}}}))((function(e){var t=e.errors,a=e.dispatch,o=Object(n.useState)(null),c=Object(p.a)(o,2),s=c[0],l=c[1],u=Object(n.useState)(!1),i=Object(p.a)(u,2),f=i[0],b=i[1],g=Object(n.useState)(null),y=Object(p.a)(g,2),j=y[0],_=y[1];Object(n.useEffect)((function(){_(t)}),[t]),Object(n.useEffect)((function(){_("")}),[]);return r.a.createElement(r.a.Fragment,null,j&&j.upload_error?r.a.createElement("p",{className:"errorMsg centered-message"},j.upload_error):f&&r.a.createElement("p",{className:"successMsg centered-message"},"Photo uploaded successfully."),r.a.createElement(m.a,{onSubmit:function(e){e.preventDefault(),s&&(_(""),a(function(e){return function(){var t=Object(E.a)(h.a.mark((function t(a){var n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,(n=new FormData).append("photo",e),t.next=5,v.a.post("".concat("","/photos"),n,{headers:{"Content-Type":"multipart/form-data"}});case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),t.t0.response&&a(O(t.t0.response.data));case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()}(s)),b(!0))},method:"post",encType:"multipart/form-data",className:"upload-form"},r.a.createElement(m.a.Group,null,r.a.createElement(m.a.Label,null,"Choose photo to upload"),r.a.createElement(m.a.Control,{type:"file",name:"photo",onChange:function(e){var t=e.target.files[0];l(t)}})),r.a.createElement(d.a,{variant:"primary",type:"submit",className:"".concat(s?"submit-btn":"disabled submit-btn"),disabled:!s},"Upload")))})),j=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement(y,null))},_=a(76),N=function(e){var t=e.id;return r.a.createElement(_.a,{className:"photo"},r.a.createElement(_.a.Img,{variant:"top",src:"http://localhost:3300/photos/".concat(t),alt:"Photo"}))},S=Object(s.b)((function(e){return{photos:e.photos||[],errors:e.errors||{}}}))((function(e){var t=e.errors,a=e.photos,o=e.dispatch,c=Object(n.useState)(!1),s=Object(p.a)(c,2),l=s[0],u=s[1];return Object(n.useEffect)((function(){u(!0),o(function(){var e=Object(E.a)(h.a.mark((function e(t){var a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("".concat("","/photos"));case 3:a=e.sent,t(g(a.data)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),e.t0.response&&t(O(e.t0.response.data));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}())}),[]),Object(n.useEffect)((function(){a.length>0&&u(!1)}),[a]),r.a.createElement("div",{className:"photos-list"},t&&t.get_error&&r.a.createElement("p",{className:"errorMsg centered-message"},t.get_error),l?r.a.createElement("div",{className:"loading-msg centered-message"},"Loading..."):a.map((function(e){return r.a.createElement(N,{key:e._id,id:e._id})})))})),w=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Page not found"))},k=function(){return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement(i,null),r.a.createElement("div",{className:"main-content"},r.a.createElement(u.c,null,r.a.createElement(u.a,{component:j,path:"/",exact:!0}),r.a.createElement(u.a,{component:S,path:"/gallery"}),r.a.createElement(u.a,{component:w})))))},x=a(12),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOAD_PHOTOS":return t.photos;default:return e}},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.errors;default:return e}},R=a(41),D=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||x.d,C=Object(x.e)(Object(x.c)({photos:T,errors:P}),D(Object(x.a)(R.a)));C.subscribe((function(){console.log(C.getState())}));var G=C;a(72),a(73);c.a.render(r.a.createElement(s.a,{store:G},r.a.createElement(k,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.de3eb8ad.chunk.js.map