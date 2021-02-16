(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports={logs:[{id:0,author:"Luigi Toscano",message:{content:["Added to reviewer: "],reviewer:"Alfredo Garcia"},data:{date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:1,author:"Luigi Toscano",message:{content:["Uploaded patch set 1."]},data:{type:"Patchset 1",date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:2,author:"Zuul",message:{content:["Added to reviewer: "],reviewer:"Zuul"},data:{date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:"3",author:"Zuul",scores:[{name:"Verified",value:1}],message:{content:["Build succeeded (check pipeline).","- openstack-tox-molecule","https://zuul.opendev.org/t/openstack/build/b218ec9b40b442a5874fc571e5d3b5e5",": SUCCESS in 3m 29s","- openstack-tox-linters","https://zuul.opendev.org/t/openstack/build/1533443fa79543c7bd8480f9952b09aa"," : SUCCESS in 6m 47s","- tripleo-tox-molecule","https://zuul.opendev.org/t/openstack/build/89dd9757afac45de86ac26bb64bff03b"," : SUCCESS in 4m 47s","- tripleo-upgrade-centos-8-molecule ","https://zuul.opendev.org/t/openstack/build/2da7b8f6b542438b8209c903c3f3cfdb",": SUCCESS in 10m 29s"]},data:{type:"Patchset 1",date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:"4",author:"Sergii Golovatiuk",message:{content:["Added to reviewer: "],reviewer:"Sergii Golovatiuk"},data:{date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:5,author:"Sergii Golovatiuk",message:{content:[""]},scores:[{name:"Code-Review",value:2},{name:"Workflow",value:1}],data:{type:"Patchset 1",date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:6,author:"Zuul",message:{content:["Starting gate jobs "]},scores:[{name:"Verified Removed",value:0}],data:{type:"Patchset 1",date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:"7",author:"Zuul",scores:[{name:"Verified",value:2}],message:{content:["Build succeeded (check pipeline).","- openstack-tox-molecule","https://zuul.opendev.org/t/openstack/build/b218ec9b40b442a5874fc571e5d3b5e5",": SUCCESS in 3m 29s","- openstack-tox-linters","https://zuul.opendev.org/t/openstack/build/1533443fa79543c7bd8480f9952b09aa"," : SUCCESS in 6m 47s","- tripleo-tox-molecule","https://zuul.opendev.org/t/openstack/build/89dd9757afac45de86ac26bb64bff03b"," : SUCCESS in 4m 47s","- tripleo-upgrade-centos-8-molecule ","https://zuul.opendev.org/t/openstack/build/2da7b8f6b542438b8209c903c3f3cfdb",": SUCCESS in 10m 29s"]},data:{type:"Patchset 1",date:"Nov 30, 2020, 18:40:12 UTC-05:00"}},{id:8,author:"Zuul",message:{content:["Change has been successfully merged by Zuul"]},data:{type:"Patchset 1",date:"Nov 30, 2020, 18:40:12 UTC-05:00"}}]}},19:function(e,t,a){e.exports=a(33)},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(6),l=a.n(c),r=a(18),s=a(4),u=a(3),i=a(14),d=a.n(i),m=Object(u.b)(null,{})(function(e){var t=e.log,a=e.onToggle,c=e.isOpened,l=t.author,r=t.scores,u=t.message,i=u.content,m=u.reviewer,p=t.data,g=p.date,b=p.type,f=Object(n.useState)(null),v=Object(s.a)(f,2),E=v[0],h=v[1];return Object(n.useEffect)(function(){if(i){var e="";i.forEach(function(t){h(e+=t+"\n")})}},[]),o.a.createElement("li",{className:"contentContainer",style:{backgroundColor:c?t.id%2===0?"#F9F9F9":"#F4F4F4":"white"},onClick:function(){a(t.id)}},o.a.createElement("span",{className:"author"},o.a.createElement("strong",null,l)),o.a.createElement("div",{className:"messageContainer"},r&&o.a.createElement("span",{className:"scoresContainer"},r.map(function(e){return o.a.createElement("span",{className:"badge "+"badge-".concat(e.value>0?e.value:null)},e.name+" "+(e.value>0?"+"+e.value:""))})),!c&&i&&o.a.createElement(n.Fragment,null,o.a.createElement("span",null,E),m&&o.a.createElement("span",{className:"badge badge-reviewer"},m))),o.a.createElement("span",{className:"dataContainer"},b&&o.a.createElement("span",{className:"type"},b),o.a.createElement("span",null,o.a.createElement(d.a,{format:"MMM DD HH:mm"},g)),o.a.createElement("div",{className:"icon ".concat(c?"icon-flip":"")})),c&&o.a.createElement("div",{className:"messageContainer-expanded"},i&&E.includes("http")?i.map(function(e){return e.includes("http")?o.a.createElement("a",{href:e},e):o.a.createElement("p",null,e)}):i.map(function(e){return o.a.createElement("span",null,e)}),m&&o.a.createElement("span",{className:"badge badge-reviewer"},m)))}),p=(a(30),function(){return o.a.createElement("div",{className:""},o.a.createElement("div",{className:"loader__element"}))}),g=a(15),b=function(){return{type:"SET_LOADING"}},f=(a(31),Object(u.b)(function(e){return{log:e.log}},{getLogs:function(){return function(e){try{b(),e({type:"GET_LOGS",payload:g.json()})}catch(t){e({type:"LOGS_ERROR",payload:t.response.statusText})}}}})(function(e){var t=e.log,a=t.logs,c=t.loading,l=e.getLogs,u=Object(n.useState)([]),i=Object(s.a)(u,2),d=i[0],g=i[1],b=Object(n.useState)(!1),f=Object(s.a)(b,2),v=f[0],E=f[1];if(Object(n.useEffect)(function(){l()},[]),Object(n.useEffect)(function(){0===d.length&&a&&g(new Array(a.length).fill(!1))},[a]),c||null===a)return o.a.createElement(p,null);var h=function(e){var t=Object(r.a)(d);t[e]=!t[e],g(t)};return o.a.createElement("ul",{className:"collection"},o.a.createElement("li",{className:"header"},o.a.createElement("button",{onClick:function(){g(new Array(d.length).fill(!v)),E(!v)}},v?"COLLAPSE ALL":"EXPAND ALL")),c||0!==a.length?a.map(function(e){return o.a.createElement(m,{log:e,key:e.id,isOpened:d[e.id],onToggle:h})}):o.a.createElement("p",{className:"center"},"No logs to show..."))})),v=a(1),E=a(16),h=a(17),S=a(7),C={logs:null,current:null,loading:!1,error:null},N=Object(v.combineReducers)({log:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_LOGS":return Object(S.a)({},e,{logs:t.payload,loading:!1});case"SET_LOADING":return Object(S.a)({},e,{loading:!0});case"LOGS_ERROR":return console.error(t.payload),Object(S.a)({},e,{error:t.payload});default:return e}}}),O=[h.a],y=Object(v.createStore)(N,{},Object(E.composeWithDevTools)(v.applyMiddleware.apply(void 0,O))),k=(a(32),function(){return o.a.createElement(u.a,{store:y},o.a.createElement(n.Fragment,null,o.a.createElement("div",{className:"container"},o.a.createElement(f,null))))});l.a.render(o.a.createElement(k,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.55f26c5b.chunk.js.map