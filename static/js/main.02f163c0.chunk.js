(this.webpackJsonptemplate=this.webpackJsonptemplate||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},20:function(e,n,t){"use strict";t.r(n);var a=t(1),c=t.n(a),o=t(8),s=t.n(o),i=(t(13),t(14),t(2)),r=t(3),l=t(5),h=t(4),u=t(0),b=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=n.call.apply(n,[this].concat(c))).handleIncreament=function(){e.props.onIncrement(e.props.habit)},e.handleDecreament=function(){e.props.onDecrement(e.props.habit)},e.handelDelete=function(){e.props.onDelete(e.props.habit)},e}return Object(r.a)(t,[{key:"render",value:function(){console.log(this.props);this.props.habit.name;var e=this.props.habit,n=e.name,t=e.count;return Object(u.jsxs)("li",{className:"habit",children:[Object(u.jsx)("span",{className:"habit-name",children:n}),Object(u.jsx)("span",{className:"habit-count",children:t}),Object(u.jsx)("button",{className:"habit-button habit-increas",onClick:this.handleIncreament,children:Object(u.jsx)("i",{className:"fas fa-plus-square"})}),Object(u.jsx)("button",{className:"habit-button habit-decrease",onClick:this.handleDecreament,children:Object(u.jsx)("i",{className:"fas fa-minus-square"})}),Object(u.jsx)("button",{className:"habit-button habit-delete",onClick:this.handelDelete,children:Object(u.jsx)("i",{className:"fas fa-trash"})})]})}}]),t}(a.Component),d=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(){var e;Object(i.a)(this,t);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=n.call.apply(n,[this].concat(c))).state={habits:[{id:1,name:"Reading",count:0},{id:2,name:"Running",count:0},{id:3,name:"Coding",count:0}],changed:0},e.handleIncreament=function(n){console.log("handleIncrement ".concat(n.name)),console.log(n.count),n.count++,e.setState({changed:e.changed++})},e.handleDecrement=function(n){console.log("handleDecrement ".concat(n.name)),console.log(n.count),n.count>0&&n.count--,e.setState({changed:e.changed++})},e.handleDelete=function(e){console.log("handleDelete ".concat(e.name))},e}return Object(r.a)(t,[{key:"render",value:function(){var e=this;return Object(u.jsx)("ul",{children:this.state.habits.map((function(n){return Object(u.jsx)(b,{habit:n,onIncrement:e.handleIncreament,onDecrement:e.handleDecrement,onDelete:e.handleDelete},n.id)}))})}}]),t}(a.Component);var m=function(){return Object(u.jsx)(d,{})},j=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,21)).then((function(n){var t=n.getCLS,a=n.getFID,c=n.getFCP,o=n.getLCP,s=n.getTTFB;t(e),a(e),c(e),o(e),s(e)}))};t(16);s.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),j()}},[[20,1,2]]]);
//# sourceMappingURL=main.02f163c0.chunk.js.map