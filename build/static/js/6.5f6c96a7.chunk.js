(this.webpackJsonpreact_social_ts=this.webpackJsonpreact_social_ts||[]).push([[6],{414:function(e,t,c){"use strict";c.r(t),c.d(t,"ChatPage",(function(){return u}));var n=c(154),r=c(0),s=c.n(r),i=c(15),j=c(196),o=c(1),u=function(){return Object(o.jsx)("div",{children:Object(o.jsx)(a,{})})},a=function(){var e=Object(i.c)(),t=Object(i.d)((function(e){var t;return null===(t=e.chat)||void 0===t?void 0:t.status}));return Object(r.useEffect)((function(){return e(Object(j.c)()),function(){e(Object(j.d)())}}),[]),Object(o.jsxs)("div",{children:["error"===t&&Object(o.jsx)("div",{children:"Some error occured. Please refresh the page"}),Object(o.jsx)(l,{}),Object(o.jsx)(d,{})]})},l=function(){var e=Object(i.d)((function(e){return e.chat.messages})),t=Object(r.useRef)(null),c=Object(r.useState)(!0),s=Object(n.a)(c,2),j=s[0],u=s[1];return Object(r.useEffect)((function(){var e;j&&(null===(e=t.current)||void 0===e||e.scrollIntoView({behavior:"smooth"}))}),[e]),Object(o.jsxs)("div",{style:{height:"400px",overflowY:"auto"},onScroll:function(e){var t=e.currentTarget;Math.abs(t.scrollHeight-t.scrollTop-t.clientHeight)<300?!j&&u(!0):j&&u(!1)},children:[e.map((function(e){return Object(o.jsx)(b,{message:e},e.id)})),Object(o.jsx)("div",{ref:t})]})},b=s.a.memo((function(e){var t=e.message;return Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{style:{width:"30px",height:30},src:null===t||void 0===t?void 0:t.photo,alt:""}),Object(o.jsx)("br",{}),Object(o.jsx)("b",{children:null===t||void 0===t?void 0:t.userName}),Object(o.jsx)("sup",{children:null===t||void 0===t?void 0:t.userId}),Object(o.jsx)("br",{}),null===t||void 0===t?void 0:t.message,Object(o.jsx)("hr",{})]})})),d=function(){var e=Object(r.useState)(""),t=Object(n.a)(e,2),c=t[0],s=t[1],u=Object(i.d)((function(e){var t;return null===(t=e.chat)||void 0===t?void 0:t.status})),a=Object(i.c)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("div",{children:Object(o.jsx)("textarea",{value:c,onChange:function(e){return s(e.target.value)}})}),Object(o.jsx)("div",{children:Object(o.jsx)("button",{disabled:"ready"!==u,onClick:function(){c&&(a(Object(j.b)(c)),s(""))},children:"Send"})})]})}}}]);
//# sourceMappingURL=6.5f6c96a7.chunk.js.map