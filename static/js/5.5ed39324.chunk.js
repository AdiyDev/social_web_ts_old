(this.webpackJsonpreact_social_ts=this.webpackJsonpreact_social_ts||[]).push([[5],{405:function(e,s,a){e.exports={dialogs:"Dialogs_dialogs__1AGpa",dialogsItems:"Dialogs_dialogsItems__n06Ep",dialog:"Dialogs_dialog__V9Cw-",active:"Dialogs_active__16Diu",messages:"Dialogs_messages__EXsar",message:"Dialogs_message__3wSeo",buttonBlue:"Dialogs_buttonBlue__3arLj",buttonBlueEffect:"Dialogs_buttonBlueEffect__3y8X3",buttonBlueRotate:"Dialogs_buttonBlueRotate__DayCW"}},417:function(e,s,a){"use strict";a.r(s);var t=a(7),c=(a(0),a(405)),i=a.n(c),n=a(1),o=function(e){return Object(n.jsxs)("li",{className:i.a.message,children:[Object(n.jsx)("img",{src:"http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg",alt:""}),Object(n.jsx)("p",{children:e.message})]})},l=a(25),u=function(e){var s="/dialogs/"+e.id;return Object(n.jsxs)("li",{className:i.a.dialog,children:[Object(n.jsx)("img",{src:"http://www.petplan.com.au/blog/wp-content/uploads/2016/12/pet-insurance-dog-cat-8.jpg",alt:e.name}),Object(n.jsx)(l.c,{to:s,activeClassName:i.a.active,children:e.name})]})},g=a(191),r=a(54),d=a(86),j=Object(d.a)(30),b=Object(g.a)({form:"dialog-add-message-form"})((function(e){return Object(n.jsx)("form",{onSubmit:e.handleSubmit,children:Object(n.jsxs)("div",{children:[Object(r.c)("Enter your message","newMessageBody",[d.b,j],r.b),Object(n.jsx)("button",{children:"add message"})]})})})),m=function(e){var s=e.dialogsPage.dialogs.map((function(e){return Object(n.jsx)(u,{name:e.name,id:e.id},e.id)})),a=e.dialogsPage.messages.map((function(e){return Object(n.jsx)(o,{message:e.message},e.id)}));return Object(n.jsxs)("div",{className:i.a.dialogs,children:[Object(n.jsx)("ul",{className:i.a.dialogsItems,children:s}),Object(n.jsxs)("ul",{className:i.a.messages,children:[a,Object(n.jsx)(b,{onSubmit:function(s){e.sendMessage(s.newMessageBody)}})]})]})},_=a(190),O=a(15),p=a(144),f=a(22),h=["isAuth"],x=function(e){return{isAuth:e.auth.isAuth}};var w=a(21);s.default=Object(w.d)(Object(O.b)((function(e){return{dialogsPage:e.dialogsPage}}),Object(t.a)({},_.a)),(function(e){return Object(O.b)(x,{})((function(s){var a=s.isAuth,c=Object(p.a)(s,h);return a?Object(n.jsx)(e,Object(t.a)({},c)):Object(n.jsx)(f.a,{to:"/login"})}))}))(m)}}]);
//# sourceMappingURL=5.5ed39324.chunk.js.map