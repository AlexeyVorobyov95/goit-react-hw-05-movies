"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[46],{4377:function(e,n,t){t.d(n,{a:function(){return o}});var a=t(5861),r=t(4687),c=t.n(r),i=t(1243);function o(e){return u.apply(this,arguments)}function u(){return u=(0,a.Z)(c().mark((function e(n){var t,a,r,o,u=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t="https://api.themoviedb.org/3/",r={trending:"trending/all/day?api_key=".concat(a="54c688c0cf0b4dc9e7803df7038eeea9"),movie:"movie/".concat(u.length<=1?void 0:u[1],"?api_key=").concat(a,"&language=en-US"),credits:"movie/".concat(u.length<=1?void 0:u[1],"/credits?api_key=").concat(a,"&language=en-US"),reviews:"movie/".concat(u.length<=1?void 0:u[1],"/reviews?api_key=").concat(a,"&language=en-US&page=1"),search:"search/movie?api_key=".concat(a,"&language=en-US&query=").concat(u.length<=1?void 0:u[1],"&page=1&include_adult=false")},e.prev=3,e.next=6,i.Z.get("".concat(t).concat(r[n]));case 6:return o=e.sent,e.abrupt("return",o);case 10:e.prev=10,e.t0=e.catch(3),console.error(e.t0);case 13:case"end":return e.stop()}}),e,null,[[3,10]])}))),u.apply(this,arguments)}},46:function(e,n,t){t.r(n),t.d(n,{default:function(){return g}});var a,r,c=t(3433),i=t(9439),o=t(4377),u=t(2791),s=t(7689),l=t(168),p=t(9549),d=p.Z.span(a||(a=(0,l.Z)(["\n  font-weight: 700;\n"]))),h=p.Z.li(r||(r=(0,l.Z)(["\n  &:not(:last-of-type) {\n    margin-bottom: 20px;\n  }\n  border: 2px solid;\n  border-radius: 30px;\n  padding: 10px;\n"]))),f=t(184),g=function(){var e=(0,u.useState)([]),n=(0,i.Z)(e,2),t=n[0],a=n[1],r=(0,s.UO)().movieId;return(0,u.useEffect)((function(){(0,o.a)("reviews",r).then((function(e){a((function(){return(0,c.Z)(e.data.results)}))}))}),[r]),(0,f.jsx)("ul",{children:t.map((function(e){var n=e.id,t=e.author,a=e.content;return(0,f.jsxs)(h,{children:[(0,f.jsxs)("p",{children:[(0,f.jsx)(d,{children:"Nickname:"})," ",t]}),(0,f.jsxs)("p",{children:[(0,f.jsx)(d,{children:"Massage: "}),a]})]},n)}))})}}}]);
//# sourceMappingURL=46.2a5ae143.chunk.js.map