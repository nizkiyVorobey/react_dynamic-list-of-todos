(this["webpackJsonpreact_dynamic-list-of-todos"]=this["webpackJsonpreact_dynamic-list-of-todos"]||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(4),o=a.n(c),l=a(5),s=a(1);var u=a(2),m=function(e){var t=e.todo;return r.a.createElement("tr",{key:t.id,className:"user-item"},r.a.createElement("td",{className:"user-item",style:{backgroundColor:"darkorange"}},t.user.name),r.a.createElement("td",{className:"user-item",style:{backgroundColor:"aquamarine"}},t.title),r.a.createElement("td",{className:t.completed?"succes-load user-item":"faild-load user-item"},t.completed.toString()))},i=function(e){var t=e.prepearedTodoList,a=Object(n.useState)(Object(u.a)(t)),c=Object(s.a)(a,2),o=c[0],l=c[1];function i(e){switch(e){case"name":l(Object(u.a)(t).sort((function(t,a){return t.user[e].localeCompare(a.user[e])})));break;case"title":l(Object(u.a)(t).sort((function(t,a){return t[e].localeCompare(a[e])})));break;case"completed":l(Object(u.a)(t).sort((function(e,t){return Number(t.completed)-Number(e.completed)})))}}return r.a.createElement("table",{className:"user-list"},r.a.createElement("thead",{className:"user-list-title"},r.a.createElement("tr",{className:"user-list-title-item-row"},r.a.createElement("th",{className:"user-list-title-item-column"},r.a.createElement("button",{className:"sorted-btn",type:"button",onClick:function(){return i("name")}},"Name")),r.a.createElement("th",{className:"user-list-title-item-column"},r.a.createElement("button",{className:"sorted-btn",type:"button",onClick:function(){return i("title")}},"Title")),r.a.createElement("th",{className:"user-list-title-item-column"},r.a.createElement("button",{className:"sorted-btn",type:"button",onClick:function(){return i("completed")}},"Completed")))),r.a.createElement("tbody",null,o.map((function(e){return r.a.createElement(m,{key:e.id,todo:e})}))))},d=(a(11),function(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!1),u=Object(s.a)(o,2),m=u[0],d=u[1];return r.a.createElement(r.a.Fragment,null,0===a.length?r.a.createElement("button",{type:"button",onClick:function(){d(!0),Promise.all([fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})),fetch("https://jsonplaceholder.typicode.com/todos").then((function(e){return e.json()}))]).then((function(e){var t=Object(s.a)(e,2),a=t[0],n=t[1].map((function(e){return Object(l.a)({},e,{user:a.find((function(t){return t.id===e.userId}))})}));d(!1),c(n)}))},disabled:m,className:"load-btn"},"Load"):r.a.createElement(i,{prepearedTodoList:a}),m&&r.a.createElement("p",{className:"loading-text"},"Loading ..."))});o.a.render(r.a.createElement(d,null),document.getElementById("root"))},6:function(e,t,a){e.exports=a(12)}},[[6,1,2]]]);
//# sourceMappingURL=main.792bdeb5.chunk.js.map