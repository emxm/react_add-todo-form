(this["webpackJsonpreact_add-todo-form"]=this["webpackJsonpreact_add-todo-form"]||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(7),i=a.n(n),r=a(9),s=a(2),c=a(6),o=(a(14),a(1)),l=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],u=a(8),d=a.n(u),m=a(0),j=function(e){var t=e.user,a=t.name,n=t.email;return Object(m.jsx)("a",{className:"UserInfo",href:"mailto:".concat(n),children:a})},b=function(e){var t=e.todo,a=t.id,n=t.title,i=t.completed,r=t.user;return Object(m.jsxs)("article",{className:d()("TodoInfo",{"TodoInfo--completed":i}),"data-id":a,children:[Object(m.jsx)("h2",{className:"TodoInfo__title",children:n}),r&&Object(m.jsx)(j,{user:r})]})},h=function(e){var t=e.todos;return Object(m.jsx)("section",{className:"TodoList",children:t.map((function(e){return Object(m.jsx)(b,{todo:e},e.id)}))})};function O(e){return l.find((function(t){return t.id===e}))||null}var f=[{id:1,title:"delectus aut autem",completed:!0,userId:1},{id:15,title:"some other todo",completed:!1,userId:1},{id:2,title:"quis ut nam facilis et officia qui",completed:!1,userId:4}].map((function(e){var t=O(e.userId);return Object(c.a)(Object(c.a)({},e),{},{user:t||null})})),p=function(){var e=Object(o.useState)(f),t=Object(s.a)(e,2),a=t[0],n=t[1],i=Object(o.useState)(""),c=Object(s.a)(i,2),u=c[0],d=c[1],j=Object(o.useState)(0),b=Object(s.a)(j,2),p=b[0],x=b[1],v=Object(o.useState)(!1),y=Object(s.a)(v,2),S=y[0],N=y[1],I=Object(o.useState)(!1),g=Object(s.a)(I,2),C=g[0],_=g[1];return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"Add todo form"}),Object(m.jsxs)("form",{action:"/api/users",method:"POST",onSubmit:function(e){e.preventDefault(),u&&p&&(!function(e,t){var a={id:Date.now(),title:e,userId:t,completed:!1,user:O(p)};n((function(e){return[].concat(Object(r.a)(e),[a])}))}(u,p),d(""),x(0)),N(!u),_(!p)},children:[Object(m.jsxs)("div",{className:"field",children:[Object(m.jsx)("input",{type:"text",placeholder:"Enter a title","data-cy":"titleInput",value:u,onChange:function(e){return d(e.target.value)}}),S&&Object(m.jsx)("span",{className:"error",children:"Please enter a title"})]}),Object(m.jsxs)("div",{className:"field",children:[Object(m.jsxs)("select",{"data-cy":"userSelect",value:p,onChange:function(e){return x(+e.target.value)},children:[Object(m.jsx)("option",{value:"0",disabled:!0,children:"Choose a user"}),l.map((function(e){return Object(m.jsx)("option",{value:e.id,children:e.name},e.id)}))]}),C&&Object(m.jsx)("span",{className:"error",children:"Please choose a user"})]}),Object(m.jsx)("button",{type:"submit","data-cy":"submitButton",children:"Add"})]}),Object(m.jsx)(h,{todos:a})]})};i.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.cb169c88.chunk.js.map