(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(5),u=n.n(c),i=(n(12),n(2)),l=n(1),o=function(e){var t=e.setCategories,n=Object(a.useState)(""),c=Object(l.a)(n,2),u=c[0],o=c[1];return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u.trim().length>2&&(t(function(e){return[u].concat(Object(i.a)(e))}),o(""))}},r.a.createElement("input",{type:"text",value:u,onChange:function(e){o(e.target.value)}}))},m=function(e){return r.a.createElement("div",{className:"card animate__animated animate__fadeInDown animate__delay-2s"},r.a.createElement("img",{src:e.url,alt:e.title}),r.a.createElement("p",null,e.title))},s=n(3),d=n.n(s),f=n(6),p=function(){var e=Object(f.a)(d.a.mark(function e(t){var n,a,r,c,u;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="https://api.giphy.com/v1/gifs/search?q=".concat(encodeURI(t),"&limit=10&api_key=y7ntDgszl4omChPM3Y1ZGVx21JXBndPC"),e.next=3,fetch(n);case 3:return a=e.sent,e.next=6,a.json();case 6:return r=e.sent,c=r.data,u=c.map(function(e){return{id:e.id,title:e.title,url:e.images.downsized_medium.url}}),e.abrupt("return",u);case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),g=function(e){var t=e.category;console.log("Category--\x3e",t);var n=function(e){var t=Object(a.useState)({data:[],loading:!0}),n=Object(l.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)(function(){p(e).then(function(e){c({data:e,loading:!1})})},[e]),r}(t),c=n.data,u=n.loading;return r.a.createElement(r.a.Fragment,null,r.a.createElement("h3",null,t),u&&r.a.createElement("p",null,"Loading"),r.a.createElement("div",{className:"card-grid"},c.map(function(e){return r.a.createElement(m,Object.assign({key:e.id},e))})))},E=function(){var e=Object(a.useState)(["One Punch Man"]),t=Object(l.a)(e,2),n=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("h2",null,"GifExpertApp"),r.a.createElement(o,{setCategories:c}),r.a.createElement("hr",null),r.a.createElement("ol",null,n.map(function(e){return r.a.createElement(g,{key:e,category:e})})))};u.a.render(r.a.createElement(E,null),document.getElementById("root"))},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.15af6915.chunk.js.map