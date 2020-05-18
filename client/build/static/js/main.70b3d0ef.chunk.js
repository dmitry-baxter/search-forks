(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{281:function(e,t,a){e.exports=a(488)},488:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),l=a(39),c=a.n(l),o=a(60),i=a(166),s=a.n(i),u=(a(286),a(74)),m=a(21),p=a(255),f=a(59),E=a(505),d=a(18),b=a(497),g=a(47),h=a(498),v=a(64),y=a(168),O=a.n(y),j=a(256),k=function(e){return new Promise((function(t){fetch("/api/get-forks?".concat(e),{method:"GET",headers:{Accept:"application/json"}}).then((function(e){return e.json()})).then((function(e){t(e)}))}))},w=function(e){return function(t){t({type:"SET_SEARCH",payload:e})}},S=function(e,t){return function(a,r,n){e&&t&&n().set("/users/".concat(e,"/favorites/").concat(t),null)}},x=a(75),C=a.n(x),R=a(63);function I(e){var t=e.favorites,a=Object(d.g)(),l=Object(d.h)(),c=C.a.parse(l.search,{sort:!1}),o=Object(m.c)((function(e){return e.app.search})),i=Object(r.useState)(null),s=Object(g.a)(i,2),u=s[0],p=s[1],E=Object(r.useState)(null),y=Object(g.a)(E,2),S=y[0],x=y[1],I=Object(r.useState)("center"),T=Object(g.a)(I,2),A=T[0],H=T[1],N=c.page,_=Object(r.useState)(void 0),z=Object(g.a)(_,2),F=z[0],D=z[1],P=Object(m.b)();Object(r.useEffect)((function(){var e=c.owner,t=c.repository;P(w(e&&t?e+"/"+t:e||""))}),[]),Object(r.useEffect)((function(){if(null!==o){H(""===o?"center":"top"),D(N);var e={owner:"",repository:"",page:F!==N?N:void 0},t=o.split("/",2);e.owner=t[0]||void 0,e.repository=t[0]&&t[1]||void 0,p(e)}}),[o,c.page]),Object(r.useEffect)((function(){if(null!==u){var e=C.a.stringify(u,{sort:!1});a.replace("/search?"+e),S||B(e)}}),[u]);var B=Object(r.useRef)(Object(R.throttle)((function(e){return P(function(e){return function(){var t=Object(j.a)(O.a.mark((function t(a){var r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!e){t.next=6;break}return a({type:"SET_LOADING"}),t.next=4,k(e);case 4:"success"===(r=t.sent).status?a({type:"SET_FORKS",payload:r}):a({type:"SET_ERROR",payload:r.message});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))}),1300,{leading:!1,trailing:!0})).current,U={display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"center"===A?"100vh":"160px",transition:"0.5s"};return n.a.createElement("div",{style:U},n.a.createElement(b.a,{textAlign:"center",style:{position:"relative"}},n.a.createElement("p",{style:{visibility:S?"visible":"hidden",color:"#DA7477"}},"Invalid format"),n.a.createElement(h.a,{error:S,icon:"github",size:"big",iconPosition:"left",placeholder:"Search forks",style:{width:"30%",marginBottom:".3rem",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 9px 0px"},value:o||"",onChange:function(e){var t=e.target.value;P(w(t.replace(/\s/g,"")));var a=t.split("/",3);0===a[0].length&&2===a.length||3===a.length?x(!0):x(!1)}}),n.a.createElement("p",null,"Please use format: ",n.a.createElement("strong",null,"owner/repositoryName")),n.a.createElement("div",{style:{position:"absolute",right:"13%",top:"50%",transform:"translateY(-50%)",cursor:Object(R.isEmpty)(t)?"auto":"pointer"}},Object(R.isEmpty)(t)?n.a.createElement(v.a,{size:"big",name:"star outline",color:"yellow"}):n.a.createElement(f.b,{to:"/favorites"},n.a.createElement(v.a,{size:"big",name:"star",color:"yellow"})))))}var T=a(48),A=a(502),H=a(503),N=a(499);function _(e){var t=e.search,a=e.loading,l=e.forks,c=e.error,o=e.favorites,i=Object(m.b)(),s=Object(d.g)(),u=Object(d.h)(),p=C.a.parse(u.search,{sort:!1}),f=p.page?parseInt(p.page):null,E=Object(m.c)((function(e){return e.app})).userId;Object(r.useEffect)((function(){a||(l.list.length?(isNaN(f)||f&&(f>l.pages||f<1))&&g(1):g(void 0))}),[f,l]);var g=function(e){s.replace("/search?"+C.a.stringify(Object(T.a)({},p,{page:e}),{sort:!1}))};return n.a.createElement(b.a,{textAlign:"center",style:{marginTop:"3rem",width:"80%"}},a?t&&n.a.createElement(N.a,{active:!0,inline:"centered",size:"large",style:{marginTop:"10rem"}}):l.list.length?n.a.createElement(A.a,{celled:!0,selectable:!0,textAlign:"center",style:{margin:"0 auto 6rem",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 18px 0px"}},n.a.createElement(A.a.Header,null,n.a.createElement(A.a.Row,null,n.a.createElement(A.a.HeaderCell,null,"Repository Name"),n.a.createElement(A.a.HeaderCell,null,"Owner"),n.a.createElement(A.a.HeaderCell,null,"Stars"),n.a.createElement(A.a.HeaderCell,null,"Link"),n.a.createElement(A.a.HeaderCell,null,"Favorite"))),n.a.createElement(A.a.Body,null,l.list.map((function(e){return n.a.createElement(A.a.Row,{key:e.id},n.a.createElement(A.a.Cell,null,e.repositoryName),n.a.createElement(A.a.Cell,null,e.owner),n.a.createElement(A.a.Cell,null,n.a.createElement(v.a,{name:"star",color:"yellow"}),e.stars),n.a.createElement(A.a.Cell,null,n.a.createElement("a",{href:e.link,target:"_blank"},e.link)),n.a.createElement(A.a.Cell,null,n.a.createElement(v.a,{name:o[e.id]?"star":"star outline",size:"large",color:"yellow",style:{cursor:"pointer"},onClick:function(){return o[e.id]?(t=e.id,i(S(E,t))):i(function(e,t){return function(a,r,n){e&&t&&n().set("/users/".concat(e,"/favorites/").concat(t.id),t)}}(E,e));var t}})))}))),l.pages>1&&n.a.createElement(A.a.Footer,null,n.a.createElement(A.a.Row,null,n.a.createElement(A.a.HeaderCell,{colSpan:"5"},n.a.createElement(H.a,{totalPages:l.pages,pointing:!0,secondary:!0,firstItem:null,lastItem:null,activePage:f||1,onPageChange:function(e,t){g(t.activePage)}}))))):t&&n.a.createElement("h2",{style:{marginTop:"10rem"}},c||"Nothing found"))}function z(e){return n.a.createElement(b.a,{style:{height:"100%"}},n.a.createElement(I,{favorites:e.favorites}),n.a.createElement(_,e))}var F=a(506),D=a(500),P=a(489);function B(e){var t=e.favorites,a=Object(m.b)(),l=Object(m.c)((function(e){return e.app})).userId,c=Object(r.useState)(!1),o=Object(g.a)(c,2),i=o[0],s=o[1],u=Object(r.useState)(""),p=Object(g.a)(u,2),f=p[0],E=p[1],d=function(e){s(e)};return n.a.createElement(b.a,{textAlign:"center",style:{marginTop:"3rem",width:"80%"}},Object(R.values)(t).length?n.a.createElement(A.a,{celled:!0,selectable:!0,textAlign:"center",style:{margin:"0 auto 6rem",boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 18px 0px"}},n.a.createElement(A.a.Header,null,n.a.createElement(A.a.Row,null,n.a.createElement(A.a.HeaderCell,null,"Repository Name"),n.a.createElement(A.a.HeaderCell,null,"Owner"),n.a.createElement(A.a.HeaderCell,null,"Stars"),n.a.createElement(A.a.HeaderCell,null,"Link"),n.a.createElement(A.a.HeaderCell,null,"Unfavorite"))),n.a.createElement(A.a.Body,null,Object(R.values)(t).sort((function(e,t){return t.stars-e.stars})).map((function(e){return n.a.createElement(A.a.Row,{key:e.id},n.a.createElement(A.a.Cell,null,e.repositoryName),n.a.createElement(A.a.Cell,null,e.owner),n.a.createElement(A.a.Cell,null,n.a.createElement(v.a,{name:"star",color:"yellow"}),e.stars),n.a.createElement(A.a.Cell,null,n.a.createElement("a",{href:e.link,target:"_blank"},e.link)),n.a.createElement(A.a.Cell,null,n.a.createElement(v.a,{name:t[e.id]?"star":"star outline",size:"large",color:"yellow",style:{cursor:"pointer"},onClick:function(){E(e.id),d(!0)}})))})))):n.a.createElement("h2",{style:{marginTop:"10rem"}},"No favorites"),n.a.createElement(D.a,{basic:!0,size:"small",open:i},n.a.createElement(F.a,{icon:"star outline",content:"Unfavorite"}),n.a.createElement(D.a.Content,null,n.a.createElement("p",null,"Are you sure you want to remove this fork from your favorites list?",n.a.createElement("br",null),"The author of this fork will be very sad :(")),n.a.createElement(D.a.Actions,null,n.a.createElement(P.a,{basic:!0,color:"red",inverted:!0,onClick:function(){return d(!1)}},n.a.createElement(v.a,{name:"remove"})," No"),n.a.createElement(P.a,{color:"green",inverted:!0,onClick:function(){return e=f,d(!1),void a(S(l,e));var e}},n.a.createElement(v.a,{name:"checkmark"})," Yes"))))}function U(e){Object(m.b)();var t=Object(d.g)();return n.a.createElement(b.a,{style:{height:"100%"}},n.a.createElement("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"160px"}},n.a.createElement(b.a,{textAlign:"center"},n.a.createElement(F.a,{as:"h3",onClick:function(){return t.goBack()},style:{cursor:"pointer"}},n.a.createElement(v.a,{name:"arrow left",style:{fontSize:"1em",lineHeight:"0.7em"}}),"Search"))),n.a.createElement(B,e))}function G(){var e=Object(m.b)(),t=localStorage.getItem("userId");Object(u.useFirebaseConnect)("users/".concat(t,"/favorites"));var a=Object(m.c)((function(e){return e.firebase})).data,l=Object(m.c)((function(e){return e.app})),c=l.search,o=l.loading,i=l.forks,s=l.error,p=a.users&&a.users[t].favorites||{};return Object(r.useEffect)((function(){var a,r=Object(E.a)();t||localStorage.setItem("userId",r),e((a=t||r,function(e){e({type:"SET_USER_ID",payload:a})}))}),[]),n.a.createElement("div",null,n.a.createElement(b.a,null,n.a.createElement(d.d,null,n.a.createElement(d.b,{path:"/search"},n.a.createElement(z,{search:c,loading:o,forks:i,error:s,favorites:p})),n.a.createElement(d.b,{path:"/favorites"},n.a.createElement(U,{favorites:p})),n.a.createElement(d.a,{from:"*",to:"/search"}))))}var L={userId:null,search:null,loading:!0,forks:{list:[],pages:0},error:""};a(487);s.a.initializeApp({apiKey:"AIzaSyBIol2omNU3GQQxOxGFO1FTpF-uiuEbnNY",authDomain:"search-forks.firebaseapp.com",databaseURL:"https://search-forks.firebaseio.com",projectId:"search-forks",storageBucket:"search-forks.appspot.com",messagingSenderId:"868379333449",appId:"1:868379333449:web:907733210322b051610098"});var K=Object(o.createStore)(Object(o.combineReducers)({app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_ID":return Object(T.a)({},e,{userId:t.payload});case"SET_SEARCH":return Object(T.a)({},e,{search:t.payload});case"SET_LOADING":return Object(T.a)({},e,{loading:!0,error:""});case"SET_FORKS":return Object(T.a)({},e,{forks:{list:t.payload.data,pages:t.payload.pages},loading:!1});case"SET_ERROR":return Object(T.a)({},e,{loading:!1,forks:L.forks,error:t.payload});default:return e}},firebase:u.firebaseReducer}),Object(o.applyMiddleware)(p.a.withExtraArgument(u.getFirebase)));c.a.render(n.a.createElement(m.a,{store:K},n.a.createElement(u.ReactReduxFirebaseProvider,{firebase:s.a,config:{},dispatch:K.dispatch},n.a.createElement(f.a,null,n.a.createElement(G,null)))),document.getElementById("root"))}},[[281,1,2]]]);
//# sourceMappingURL=main.70b3d0ef.chunk.js.map