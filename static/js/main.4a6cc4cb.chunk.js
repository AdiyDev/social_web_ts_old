(this.webpackJsonpreact_social_ts=this.webpackJsonpreact_social_ts||[]).push([[0],{108:function(e,t,n){"use strict";n(0);var r=n.p+"static/media/preloader.6fa5554b.svg",c=n(1);t.a=function(){return Object(c.jsx)("img",{src:r,alt:"preloader"})}},124:function(e,t,n){e.exports={paginator:"Paginator_paginator__20KnD",pageNumber:"Paginator_pageNumber__9JUN6",selectedPage:"Paginator_selectedPage__1KtyX"}},150:function(e,t,n){e.exports={sideBarFriends:"Friends_sideBarFriends__1RaVb",ul:"Friends_ul__1QmKm"}},151:function(e,t,n){e.exports={item:"Friend_item__Rpkd8",active:"Friend_active__3pHSh"}},155:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"d",(function(){return h})),n.d(t,"c",(function(){return m})),n.d(t,"g",(function(){return g})),n.d(t,"e",(function(){return v})),n.d(t,"f",(function(){return x}));var r=n(11),c=n.n(r),a=n(20),s=n(53),i=n(7),u=n(64),o=n(16),l=function(e){return o.c.get("profile/"+e).then((function(e){return e.data}))},d=function(e){return o.c.get("profile/status/"+e).then((function(e){return e.data}))},j=function(e){return o.c.put("profile/status",{status:e}).then((function(e){return e.data}))},f=function(e){var t=new FormData;return t.append("image",e),o.c.put("profile/photo",t,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){return e.data}))},b=function(e){return o.c.put("profile",e).then((function(e){return e.data}))},O={posts:[{id:1,message:"test_message_profile ",likesCount:15},{id:2,message:"test_message_profile ",likesCount:10},{id:3,message:"test_message_profile ",likesCount:7},{id:4,message:"test_message_profile ",likesCount:1}],profile:null,status:"",newPostText:""},p={addPostActionCreator:function(e){return{type:"SN/PROFILE/ADD-POST",newPostText:e}},setUserProfile:function(e){return{type:"SN/PROFILE/SET_USER_PROFILE",profile:e}},setStatus:function(e){return{type:"SN/PROFILE/SET_STATUS",status:e}},deletePost:function(e){return{type:"SN/PROFILE/DELETE_POST",postId:e}},savePhotoSuccess:function(e){return{type:"SN/PROFILE/SAVE_PHOTO_SUCCESS",photos:e}}},h=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,l(e);case 2:r=t.sent,n(p.setUserProfile(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},m=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d(e);case 2:r=t.sent,n(p.setStatus(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j(e);case 3:t.sent.resultCode===o.a.Success&&n(p.setStatus(e)),t.next=9;break;case 7:t.prev=7,t.t0=t.catch(0);case 9:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}()},v=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){var r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,f(e);case 2:(r=t.sent).resultCode===o.a.Success&&n(p.savePhotoSuccess(r.data.photos));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},x=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n,r){var a,s;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=r().auth.userId,t.next=3,b(e);case 3:if((s=t.sent).resultCode!==o.a.Success){t.next=12;break}if(null===a){t.next=9;break}n(h(a)),t.next=10;break;case 9:throw new Error("userId can't be null");case 10:t.next=14;break;case 12:return n(Object(u.a)("edit-profile",{_error:s.messages[0]})),t.abrupt("return",Promise.reject(s.messages[0]));case 14:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/PROFILE/ADD-POST":var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n])});case"SN/PROFILE/SET_STATUS":return Object(i.a)(Object(i.a)({},e),{},{status:t.status});case"SN/PROFILE/SET_USER_PROFILE":return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case"SN/PROFILE/DELETE_POST":return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case"SN/PROFILE/SAVE_PHOTO_SUCCESS":return Object(i.a)(Object(i.a)({},e),{},{profile:Object(i.a)(Object(i.a)({},e.profile),{},{photos:t.photos})});default:return e}}},16:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return c}));var r,c,a=n(202),s=n.n(a).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"2561349e-c031-4f3f-acb6-8feb671f338e"}});!function(e){e[e.Success=0]="Success",e[e.Error=1]="Error"}(r||(r={})),function(e){e[e.CaptchaIsRequired=10]="CaptchaIsRequired"}(c||(c={}))},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(53),c=n(7),a={dialogs:[{id:1,name:"user1"},{id:2,name:"user2"},{id:3,name:"user3"},{id:4,name:"user4"},{id:5,name:"user5"},{id:6,name:"user6"}],messages:[{id:1,message:"test_message_dialogs"},{id:2,message:"test_message_dialogs"},{id:3,message:"test_message_dialogs"},{id:4,message:"test_message_dialogs"},{id:5,message:"test_message_dialogs"},{id:6,message:"test_message_dialogs"}]},s={sendMessage:function(e){return{type:"SN/DIALOGS/SEND-MESSAGE",payload:e}}};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;return"SN/DIALOGS/SEND-MESSAGE"===t.type?Object(c.a)(Object(c.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:7,message:null===t||void 0===t?void 0:t.payload}])}):e}},196:function(e,t,n){"use strict";n.d(t,"c",(function(){return N})),n.d(t,"d",(function(){return T})),n.d(t,"b",(function(){return U}));var r=n(11),c=n.n(r),a=n(20),s=n(53),i=n(7),u={"messages-received":[],"status-changed":[]},o=null,l=function(){O("pending"),setTimeout(p,3e3)},d=function(e){var t=JSON.parse(null===e||void 0===e?void 0:e.data);u["messages-received"].forEach((function(e){return e(t)}))},j=function(){O("ready")},f=function(){O("error"),console.error("RESTART PAGE")},b=function(){var e,t,n,r;null===(e=o)||void 0===e||e.removeEventListener("close",l),null===(t=o)||void 0===t||t.removeEventListener("message",d),null===(n=o)||void 0===n||n.addEventListener("open",j),null===(r=o)||void 0===r||r.addEventListener("error",f)},O=function(e){u["status-changed"].forEach((function(t){return t(e)}))};function p(){var e;b(),null===(e=o)||void 0===e||e.close(),o=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),O("pending"),o.addEventListener("close",l),o.addEventListener("message",d),o.addEventListener("open",j),o.addEventListener("error",f)}var h=function(){p()},m=function(){var e;u["messages-received"]=[],u["status-changed"]=[],b(),null===(e=o)||void 0===e||e.close()},g=function(e,t){return u[e].push(t),function(){u[e]=u[e].filter((function(e){return e!==t}))}},v=function(e,t){u[e]=u[e].filter((function(e){return e!==t}))},x=function(e){var t;null===(t=o)||void 0===t||t.send(e)},S=n(398),E={messages:[],status:"pending"},_=function(e){return{type:"SN/CHAT/MESSAGES_RECEIVIED",payload:{messages:e}}},w=function(e){return{type:"SN/CHAT/STATUS_CHANGED",payload:{status:e}}},y=null,P=function(e){return null===y&&(y=function(t){e(_(t))}),y},C=null,I=function(e){return null===C&&(C=function(t){e(w(t))}),C},N=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:h(),g("messages-received",P(t)),g("status-changed",I(t));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},T=function(){return function(){var e=Object(a.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:v("messages-received",P(t)),v("status-changed",I(t)),m();case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},U=function(e){return function(){var t=Object(a.a)(c.a.mark((function t(n){return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:x(e);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SN/CHAT/MESSAGES_RECEIVIED":return Object(i.a)(Object(i.a)({},t),{},{messages:[].concat(Object(s.a)(t.messages),Object(s.a)(null===n||void 0===n?void 0:n.payload.messages.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{id:Object(S.a)()})})))).filter((function(e,t,n){return n.length-100}))});case"SN/CHAT/STATUS_CHANGED":return Object(i.a)(Object(i.a)({},t),{},{status:null===n||void 0===n||null===(e=n.payload)||void 0===e?void 0:e.status});default:return t}}},197:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__1i2xw"}},204:function(e,t,n){e.exports={header:"Header_header__1t8Eb",loginBlock:"Header_loginBlock__1efFz"}},252:function(e,t,n){},253:function(e,t,n){},391:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(34),s=n.n(a),i=(n(252),n(156)),u=n(157),o=n(195),l=n(192),d=(n(253),n(254),n(1)),j=function(e){return Object(d.jsx)("div",{children:"News"})},f=function(e){return Object(d.jsx)("div",{children:"Music"})},b=n(7),O=n(109),p=n(154),h=n(124),m=n.n(h),g=n(3),v=n.n(g),x=function(e){for(var t=e.totalItemsCount,n=e.pageSize,c=e.currentPage,a=e.onPageChanged,s=e.portionSize,i=void 0===s?10:s,u=Math.ceil(t/n),o=[],l=1;l<=u;l++)o.push(l);var j=Math.ceil(u/i),f=Object(r.useState)(1),b=Object(p.a)(f,2),h=b[0],g=b[1],x=(h-1)*i+1,S=h*i;return Object(d.jsxs)("div",{className:v()(m.a.paginator),children:[h>1&&Object(d.jsx)("button",{onClick:function(){g(h-1)},children:"PREV"}),o.filter((function(e){return e>=x&&e<=S})).map((function(e){return Object(d.jsx)("span",{className:v()(Object(O.a)({},m.a.selectedPage,c===e),m.a.pageNumber),onClick:function(t){a(e)},children:e},e)})),j>h&&Object(d.jsx)("button",{onClick:function(){g(h+1)},children:"NEXT"})]})},S=n(197),E=n.n(S),_=n.p+"static/media/user.94b78e6a.png",w=n(25),y=function(e){var t,n,r,c,a=e.user,s=e.followingInProgress,i=e.unfollow,u=e.follow;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:Object(d.jsx)(w.c,{to:"/profile/"+a.id,children:Object(d.jsx)("img",{src:null!==a.photos.small?a.photos.small:_,alt:"",className:E.a.usersPhoto})})}),Object(d.jsx)("div",{children:a.followed?Object(d.jsx)("button",{disabled:s.some((function(e){return e===a.id})),onClick:function(){u(a.id)},children:"Unfollow"}):Object(d.jsx)("button",{disabled:s.some((function(e){return e===a.id})),onClick:function(){i(a.id)},children:"Follow"})})]}),Object(d.jsxs)("span",{children:[Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:a.name}),Object(d.jsx)("div",{children:a.status})]}),Object(d.jsxs)("span",{children:[Object(d.jsx)("div",{children:null!==(t=null===a||void 0===a||null===(n=a.location)||void 0===n?void 0:n.country)&&void 0!==t?t:"\u0421\u0442\u0440\u0430\u043d\u0430 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0435\u043d\u0430"}),Object(d.jsx)("div",{children:null!==(r=null===a||void 0===a||null===(c=a.location)||void 0===c?void 0:c.city)&&void 0!==r?r:"\u0413\u043e\u0440\u043e\u0434 \u043d\u0435 \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0451\u043d"})]})]})]})},P=n(95),C=n(15),I=n(201),N=Object(I.a)((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),T=function(e){return e.usersPage.pageSize},U=function(e){return e.usersPage.totalUsersCount},R=function(e){return e.usersPage.currentPage},A=function(e){return e.usersPage.isFetching},L=function(e){return e.usersPage.followingInProgress},k=function(e){return e.usersPage.filter},F=function(e){return{}},G=c.a.memo((function(e){var t=Object(C.d)(k);return Object(d.jsx)("div",{children:Object(d.jsx)(P.c,{enableReinitialize:!0,initialValues:{term:t.term,friend:String(t.friend)},validate:F,onSubmit:function(t,n){var r=n.setSubmitting,c={term:t.term,friend:"null"===t.friend?null:"true"===t.friend};e.onFilterChanged(c),r(!1)},children:function(e){var t=e.isSubmitting;return Object(d.jsxs)(P.b,{children:[Object(d.jsx)(P.a,{type:"text",name:"term"}),Object(d.jsxs)(P.a,{name:"friend",as:"select",children:[Object(d.jsx)("option",{value:"null",children:"All"}),Object(d.jsx)("option",{value:"true",children:"Only followed"}),Object(d.jsx)("option",{value:"false",children:"Only unfollowed"})]}),Object(d.jsx)("button",{type:"submit",disabled:t,children:"Find"})]})}})})})),H=n(11),D=n.n(H),M=n(20),z=n(53),B=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(b.a)(Object(b.a)({},e),r):e}))},W=n(16),V={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return W.c.get("users?page=".concat(e,"&count=").concat(t,"&term=").concat(n)+(null===r?"":"&friend=".concat(r))).then((function(e){return e.data}))},follow:function(e){return W.c.post("follow/".concat(e)).then((function(e){return e.data}))},unfollow:function(e){return W.c.delete("follow/".concat(e)).then((function(e){return e.data}))}},q={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[],filter:{term:"",friend:null}},J=function(e){return{type:"SN/USERS/FOLLOW",userId:e}},X=function(e){return{type:"SN/USERS/UNFOLLOW",userId:e}},K=function(e){return{type:"SN/USERS/SET_USERS",users:e}},Q=function(e){return{type:"SN/USERS/SET_CURRENT_PAGE",currentPage:e}},Z=function(e){return{type:"SN/USERS/SET_TOTAL_USERS_COUNT",count:e}},Y=function(e){return{type:"SN/USERS/SET_FILTER",payload:e}},$=function(e){return{type:"SN/USERS/TOGGLE_IS_FETCHING",isFetching:e}},ee=function(e,t){return{type:"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS",isFetching:e,userId:t}},te=function(e,t,n){return function(){var r=Object(M.a)(D.a.mark((function r(c,a){var s;return D.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,c($(!0)),c(Q(e)),c(Y(n)),r.next=6,V.getUsers(e,t,n.term,n.friend);case 6:s=r.sent,c(K(null===s||void 0===s?void 0:s.items)),c(Z(null===s||void 0===s?void 0:s.totalCount)),r.next=13;break;case 11:r.prev=11,r.t0=r.catch(0);case 13:return r.prev=13,c($(!1)),r.finish(13);case 16:case"end":return r.stop()}}),r,null,[[0,11,13,16]])})));return function(e,t){return r.apply(this,arguments)}}()},ne=function(){var e=Object(M.a)(D.a.mark((function e(t,n,r,c){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(ee(!0,n)),e.next=3,r(n);case 3:e.sent.resultCode===W.a.Success&&t(c(n)),t(ee(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,c){return e.apply(this,arguments)}}(),re=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/USERS/FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!0})});case"SN/USERS/UNFOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:B(e.users,t.userId,"id",{followed:!1})});case"SN/USERS/SET_USERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case"SN/USERS/SET_CURRENT_PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"SN/USERS/SET_TOTAL_USERS_COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalUsersCount:t.count});case"SN/USERS/SET_FILTER":return Object(b.a)(Object(b.a)({},e),{},{filter:t.payload});case"SN/USERS/TOGGLE_IS_FETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"SN/USERS/TOGGLE_IS_FOLLOWING_PROGRESS":return Object(b.a)(Object(b.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(z.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}},ce=n(22),ae=n(147),se=function(){var e=Object(C.d)(N),t=Object(C.d)(U),n=Object(C.d)(R),c=Object(C.d)(T),a=Object(C.d)(k),s=Object(C.d)(L),i=Object(C.c)(),u=Object(ce.g)();Object(r.useEffect)((function(){var e=ae.parse(u.location.search.substr(1)),t=n,r=a;switch(e.page&&(t=Number(e.page)),e.term&&(r=Object(b.a)(Object(b.a)({},r),{},{term:e.term})),e.friend){case"null":r=Object(b.a)(Object(b.a)({},r),{},{friend:null});break;case"true":r=Object(b.a)(Object(b.a)({},r),{},{friend:!0});break;case"false":r=Object(b.a)(Object(b.a)({},r),{},{friend:!1})}i(te(t,c,r))}),[]),Object(r.useEffect)((function(){var e={};a.term&&(e.term=a.term),null!==a.friend&&(e.friend=String(a.friend)),1!==n&&(e.page=String(n)),u.push({pathname:"/users",search:ae.stringify(e)})}),[a,n,s]);var o=function(e){i(function(e){return function(){var t=Object(M.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(n,e,V.follow.bind(V),J);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))},l=function(e){i(function(e){return function(){var t=Object(M.a)(D.a.mark((function t(n){return D.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ne(n,e,V.unfollow.bind(V),X);case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e))};return Object(d.jsxs)("div",{children:[Object(d.jsx)(G,{onFilterChanged:function(e){i(te(1,c,e))}}),Object(d.jsx)(x,{currentPage:n,onPageChanged:function(e){i(te(e,c,a))},totalItemsCount:t,pageSize:c}),Object(d.jsx)("div",{children:e.map((function(e){return Object(d.jsx)(y,{user:e,followingInProgress:s,unfollow:o,follow:l},e.id)}))})]})},ie=n(108),ue=function(e){var t=Object(C.d)(A);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{children:e.pageTitle}),t?Object(d.jsx)(ie.a,{}):null,Object(d.jsx)(se,{})]})},oe=function(e){return Object(d.jsx)("div",{children:"Settings"})},le=n(191),de=n(54),je=n(86),fe=n(64),be=function(){return W.c.get("auth/me").then((function(e){return e.data}))},Oe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;return W.c.post("auth/login",{email:e,password:t,rememberMe:n,captcha:r}).then((function(e){return e.data}))},pe=function(){return W.c.delete("auth/login")},he=function(){return W.c.get("security/get-captcha-url").then((function(e){return e.data}))},me={userId:null,email:null,login:null,isAuth:!1,captchaUrl:null},ge=function(e,t,n,r){return{type:"SN/AUTH/SET_USER_DATA",payload:{userId:e,email:t,login:n,isAuth:r}}},ve=function(e){return{type:"SN/AUTH/GET_CAPTCHA_URL_SUCCESS",payload:{captchaUrl:e}}},xe=function(){return function(){var e=Object(M.a)(D.a.mark((function e(t){var n,r,c,a,s;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,be();case 2:(n=e.sent).resultCode===W.a.Success&&(r=null===n||void 0===n?void 0:n.data,c=r.id,a=r.email,s=r.login,t(ge(c,a,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Se=function(){return function(){var e=Object(M.a)(D.a.mark((function e(t){var n,r;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,he();case 2:n=e.sent,r=n.url,t(ve(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SN/AUTH/SET_USER_DATA":case"SN/AUTH/GET_CAPTCHA_URL_SUCCESS":return Object(b.a)(Object(b.a)({},e),null===t||void 0===t?void 0:t.payload);default:return e}},_e=n(85),we=n.n(_e),ye=Object(je.a)(30),Pe=Object(le.a)({form:"login"})((function(e){var t=e.handleSubmit,n=e.error,r=e.captchaUrl;return Object(d.jsxs)("form",{onSubmit:t,children:[Object(de.c)("Email","email",[je.b,ye],de.a),Object(de.c)("Password","password",[je.b,ye],de.a,{type:"password"}),Object(de.c)(void 0,"rememberMe",[],de.a,{type:"checkbox"},"remember me"),r&&Object(d.jsx)("img",{src:r,alt:""}),r&&Object(de.c)("Symbols from image","captcha",[je.b],de.a,{}),n&&Object(d.jsx)("div",{className:we.a.formSummaryError,children:n}),Object(d.jsx)("div",{children:Object(d.jsx)("button",{children:"Login"})})]})})),Ce=function(){var e=Object(C.d)((function(e){return e.auth.captchaUrl})),t=Object(C.d)((function(e){return e.auth.isAuth})),n=Object(C.c)();return t?Object(d.jsx)(ce.a,{to:"/profile"}):Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Login"}),Object(d.jsx)(Pe,{onSubmit:function(e){var t,r,c,a;n((t=e.email,r=e.password,c=e.rememberMe,a=e.captcha,function(){var e=Object(M.a)(D.a.mark((function e(n){var s,i;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Oe(t,r,c,a);case 2:(s=e.sent).resultCode===W.a.Success?n(xe()):(s.resultCode===W.b.CaptchaIsRequired&&n(Se()),i=s.messages.length>0?s.messages[0]:"Some error",n(Object(fe.a)("login",{_error:i})));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))},captchaUrl:e})]})},Ie=n(150),Ne=n.n(Ie),Te=n(151),Ue=n.n(Te),Re=function(e){var t="/"+e.id;return Object(d.jsx)("li",{className:Ue.a.item,children:Object(d.jsxs)(w.c,{to:t,activeClassName:Ue.a.active,children:[Object(d.jsx)("img",{src:"http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg",alt:"".concat(e.name," ").concat(e.id)}),Object(d.jsx)("p",{children:e.name})]})})},Ae=function(e){var t=e.navbar.map((function(e){return Object(d.jsx)(Re,{id:e.id,name:e.name},e.id)}));return Object(d.jsxs)("div",{className:Ne.a.sideBarFriends,children:[Object(d.jsx)("h3",{children:"Friends"}),Object(d.jsx)("ul",{className:Ne.a.ul,children:t})]})},Le=Object(C.b)((function(e){return{navbar:e.navbar.friends}}))(Ae),ke=n(204),Fe=n.n(ke),Ge=n(394),He=n(399),De=n(400),Me=n(397),ze=n(126),Be=n(401),We=function(){var e=Ge.a.Header,t=Object(C.d)((function(e){return e.auth})),n=t.isAuth,r=t.login,c=Object(C.c)();return Object(d.jsx)(e,{className:"header",children:Object(d.jsxs)(He.a,{children:[Object(d.jsxs)(De.a,{span:20,children:[Object(d.jsx)("div",{className:"logo"}),Object(d.jsx)("img",{style:{width:80,height:60},src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjPcCvhIcUpVMqNdX31gJU90TGEO2YZBxWPuvuiSMIwJaJ8LyHJqwL7wW32hX_2_H9kCU&usqp=CAU",alt:""})]}),Object(d.jsx)(De.a,{span:4,children:Object(d.jsx)("div",{className:Fe.a.loginBlock,children:n?Object(d.jsxs)("div",{children:[Object(d.jsx)(Me.a,{style:{backgroundColor:"#87d068"},icon:Object(d.jsx)(Be.a,{})}),Object(d.jsx)("span",{style:{color:"white",marginRight:10,marginLeft:10},children:r}),Object(d.jsx)(ze.a,{onClick:function(){c(function(){var e=Object(M.a)(D.a.mark((function e(t){return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,pe();case 2:e.sent.data.resultCode===W.a.Success&&t(ge(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"Log out"})]}):Object(d.jsx)(w.b,{to:"/login",children:"Login"})})})]})})},Ve={initialized:!1},qe=function(){return{type:"SN/APP/INITIALIZED_SUCCESS"}},Je=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ve,t=arguments.length>1?arguments[1]:void 0;return"SN/APP/INITIALIZED_SUCCESS"===t.type?Object(b.a)(Object(b.a)({},e),{},{initialized:!0}):e},Xe=n(21),Ke=n(155),Qe=n(190),Ze={friends:[{id:1,name:"user1"},{id:2,name:"user2"},{id:3,name:"user3"}]},Ye=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ze;return e},$e=n(196),et=n(194),tt=n(214),nt=Object(Xe.c)({profilePage:Ke.b,dialogsPage:Qe.b,navbar:Ye,usersPage:re,auth:Ee,form:et.a,app:Je,chat:$e.a}),rt=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||Xe.d,ct=Object(Xe.e)(nt,rt(Object(Xe.a)(tt.a))),at=n(153),st=n(396),it=n(395),ut=n(402),ot=n(403),lt=n(404),dt=at.a.SubMenu,jt=Ge.a.Content,ft=Ge.a.Footer,bt=Ge.a.Sider;console.log();var Ot=c.a.lazy((function(){return n.e(5).then(n.bind(null,417))})),pt=c.a.lazy((function(){return Promise.all([n.e(4),n.e(3)]).then(n.bind(null,416))})),ht=c.a.lazy((function(){return n.e(6).then(n.bind(null,414)).then((function(e){return{default:e.ChatPage}}))})),mt=function(e){Object(o.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).catchAllUnhandledErrors=function(e){alert("Some error occured")},e}return Object(u.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp(),window.addEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("unhandledrejection",this.catchAllUnhandledErrors)}},{key:"render",value:function(){return Object(d.jsxs)(Ge.a,{children:[Object(d.jsx)(We,{}),Object(d.jsxs)(jt,{style:{padding:"0 50px"},children:[Object(d.jsxs)(st.a,{style:{margin:"16px 0"},children:[Object(d.jsx)(st.a.Item,{children:"Home"}),Object(d.jsx)(st.a.Item,{children:"List"}),Object(d.jsx)(st.a.Item,{children:"App"})]}),Object(d.jsxs)(Ge.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(d.jsx)(bt,{className:"site-layout-background",width:200,children:Object(d.jsxs)(at.a,{mode:"inline",style:{height:"100%"},children:[Object(d.jsxs)(dt,{icon:Object(d.jsx)(Be.a,{}),title:"My profile",children:[Object(d.jsx)(at.a.Item,{children:Object(d.jsx)(w.b,{to:"/profile",children:"Profile"})},"1"),Object(d.jsx)(at.a.Item,{children:Object(d.jsx)(w.b,{to:"/dialogs",children:"Dialogs"})},"2"),Object(d.jsx)(at.a.Item,{children:"option3"},"3"),Object(d.jsx)(at.a.Item,{children:"option4"},"4")]},"sub1"),Object(d.jsxs)(dt,{icon:Object(d.jsx)(ut.a,{}),title:"Developers",children:[Object(d.jsx)(at.a.Item,{children:Object(d.jsx)(w.b,{to:"/users",children:"Users"})},"5"),Object(d.jsx)(at.a.Item,{children:"option6"},"6"),Object(d.jsx)(at.a.Item,{children:"option7"},"7"),Object(d.jsx)(at.a.Item,{children:"option8"},"8")]},"sub2"),Object(d.jsxs)(dt,{icon:Object(d.jsx)(ot.a,{}),title:"subnav 3",children:[Object(d.jsx)(at.a.Item,{children:Object(d.jsx)(w.b,{to:"/music",children:"Music"})},"9"),Object(d.jsx)(at.a.Item,{children:Object(d.jsx)(w.b,{to:"/news",children:"News"})},"10"),Object(d.jsx)(at.a.Item,{children:Object(d.jsx)(w.b,{to:"/settings",children:"Settings"})},"11"),Object(d.jsx)(at.a.Item,{children:Object(d.jsx)(w.b,{to:"/chat",children:"Chat"})},"12")]},"sub3"),Object(d.jsx)(dt,{icon:Object(d.jsx)(lt.a,{}),title:"Best Friend",children:Object(d.jsx)(Le,{})},"sub4")]})}),Object(d.jsx)(jt,{style:{padding:"0 24px",minHeight:280},children:Object(d.jsx)(r.Suspense,{fallback:Object(d.jsxs)("div",{children:[Object(d.jsx)(ie.a,{}),"\u0417\u0430\u0433\u0440\u0443\u0436\u0430\u044e\u0441\u044c......."]}),children:Object(d.jsxs)(ce.d,{children:[Object(d.jsx)(ce.b,{exact:!0,path:"/",render:function(){return Object(d.jsx)(ce.a,{to:"/profile"})}}),Object(d.jsx)(ce.b,{path:"/profile/:userId?",render:function(){return Object(d.jsx)(pt,{})}}),Object(d.jsx)(ce.b,{path:"/dialogs",render:function(){return Object(d.jsx)(Ot,{})}}),Object(d.jsx)(ce.b,{path:"/news",render:function(){return Object(d.jsx)(j,{})}}),Object(d.jsx)(ce.b,{path:"/music",render:function(){return Object(d.jsx)(f,{})}}),Object(d.jsx)(ce.b,{path:"/users",render:function(){return Object(d.jsx)(ue,{pageTitle:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a \u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b"})}}),Object(d.jsx)(ce.b,{path:"/settings",render:function(){return Object(d.jsx)(oe,{})}}),Object(d.jsx)(ce.b,{path:"/login",render:function(){return Object(d.jsx)(Ce,{})}}),Object(d.jsx)(ce.b,{path:"/chat",render:function(){return Object(d.jsx)(ht,{})}}),Object(d.jsx)(ce.b,{path:"*",render:function(){return Object(d.jsx)(it.a,{status:"404",title:"404",subTitle:"\u0421\u0442\u0440\u0430\u043d\u0438\u0446\u044b \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442, \u0432\u043e\u0437\u043c\u043e\u0436\u043d\u043e \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f \u043f\u043e\u0437\u0436\u0435",extra:Object(d.jsx)(w.b,{to:"/",children:Object(d.jsx)(ze.a,{type:"primary",children:"Back Home"})})})}})]})})})]})]}),Object(d.jsx)(ft,{style:{textAlign:"center"},children:"See on top"})]})}}]),n}(r.Component),gt=Object(Xe.d)(ce.h,Object(C.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(){var e=Object(M.a)(D.a.mark((function e(t){var n;return D.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t(xe());case 2:n=e.sent,Promise.all([n]).then((function(){t(qe())}));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}}))(mt),vt=function(){return Object(d.jsx)(w.a,{basename:"/social_web_ts_old",children:Object(d.jsx)(C.a,{store:ct,children:Object(d.jsx)(gt,{})})})};s.a.render(Object(d.jsx)(vt,{}),document.getElementById("root"))},54:function(e,t,n){"use strict";n.d(t,"b",(function(){return j})),n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return b}));var r=n(7),c=n(144),a=(n(0),n(85)),s=n.n(a),i=n(143),u=n(1),o=["input","meta"],l=["input","meta"],d=function(e){var t=e.meta,n=t.touched,r=t.error,c=e.children,a=n&&r;return Object(u.jsxs)("div",{className:s.a.formControl+" "+(a?s.a.error:""),children:[Object(u.jsx)("div",{children:c}),a&&Object(u.jsx)("span",{children:r})]})},j=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,o));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("textarea",Object(r.a)(Object(r.a)({},t),n))}))},f=function(e){var t=e.input,n=(e.meta,Object(c.a)(e,l));return Object(u.jsx)(d,Object(r.a)(Object(r.a)({},e),{},{children:Object(u.jsx)("input",Object(r.a)(Object(r.a)({},t),n))}))};function b(e,t,n,c){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return Object(u.jsxs)("div",{children:[Object(u.jsx)(i.a,Object(r.a)({placeholder:e,name:t,validate:n,component:c},a)),s]})}},85:function(e,t,n){e.exports={formControl:"FormsControls_formControl__rQ4kA",error:"FormsControls_error__32_90",formSummaryError:"FormsControls_formSummaryError__1ug83"}},86:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return c}));var r=function(e){if(!e)return"Field required"},c=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}}},[[391,1,2]]]);
//# sourceMappingURL=main.4a6cc4cb.chunk.js.map