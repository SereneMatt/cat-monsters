(this["webpackJsonpcat-monsters"]=this["webpackJsonpcat-monsters"]||[]).push([[0],{11:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),a=n(2),c=n.n(a),u=(n(11),n(1)),i=n(5),l=(n(12),n(13),Object(i.a)((function(e){return{filter:"",pokemon:[],setFilter:function(t){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},{filter:t})}))},setPokemon:function(t){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},{pokemon:t})}))}}})));var f=function(){var e=l((function(e){return e.filter})),t=l((function(e){return e.setFilter}));return o.a.createElement("input",{value:e,onChange:function(e){return t(e.target.value)}})},s=function(){var e=l((function(e){return e.pokemon})),t=l((function(e){return e.filter}));return o.a.createElement("table",{width:"100%"},o.a.createElement("tbody",null,e.filter((function(e){return e.name.english.toLowerCase().includes(t.toLowerCase())})).map((function(e){var t=e.id,n=e.name.english,r=e.type;return o.a.createElement("tr",{key:t},o.a.createElement("td",null,n),o.a.createElement("td",null,r.join(", ")))}))))};fetch("https://gist.githubusercontent.com/jherr/23ae3f96cf5ac341c98cd9aa164d2fe3/raw/f8d792f5b2cf97eaaf9f0c2119918f333e348823/pokemon.json").then((function(e){return e.json()})).then((function(e){return l.setState((function(t){return Object(u.a)(Object(u.a)({},t),{},{pokemon:e})}))}));var m=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("div",null,o.a.createElement(f,null)),o.a.createElement("h1",null,"List of Pokemon"),o.a.createElement(s,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,n){e.exports=n(15)}},[[6,1,2]]]);
//# sourceMappingURL=main.608421e2.chunk.js.map