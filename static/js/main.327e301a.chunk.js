(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(17)},16:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),l=a.n(c),u=a(6),i=a(1),o=a(2),m=a(4),h=a(3),s=a(5),b=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.props,t=e.characterData,a=e.removeCharacter;return r.a.createElement("table",null,r.a.createElement(function(){return r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"\u0418\u043c\u044f"),r.a.createElement("th",null,"\u0420\u0430\u0431\u043e\u0442\u0430"),r.a.createElement("th",null)))},null),r.a.createElement(function(e){var t=e.characterData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,t.name),r.a.createElement("td",null,t.job),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){return e.removeCharacter(a)}},"\u0421\u0442\u0435\u0440\u0435\u0442\u044c")))});return r.a.createElement("tbody",null,t)},{characterData:t,removeCharacter:a}))}}]),t}(n.Component),f=a(9),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(m.a)(this,Object(h.a)(t).call(this,e))).handleSubmit=function(e){a.setState({characters:[].concat(Object(u.a)(a.state.characters),[e])})},a.handleChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(f.a)({},n,r))},a.submitForm=function(){a.props.handleSubmit(a.state),a.setState(a.initialState)},a.initialState={name:"",job:""},a.state=a.initialState,a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.name,a=e.job;return r.a.createElement("form",null,r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"name",value:t,onChange:this.handleChange}),r.a.createElement("label",null,"Job"),r.a.createElement("input",{type:"text",name:"job",value:a,onChange:this.handleChange}),r.a.createElement("input",{type:"button",value:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",onClick:this.submitForm}))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={characters:[]},a.removeCharacter=function(e){var t=a.state.characters;a.setState({characters:t.filter(function(t,a){return a!==e})})},a.handleSubmit=function(e){a.setState({characters:[].concat(Object(u.a)(a.state.characters),[e])})},a}return Object(s.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.characters;return r.a.createElement("div",{className:"container"},r.a.createElement(b,{characterData:e,removeCharacter:this.removeCharacter}),r.a.createElement(E,{handleSubmit:this.handleSubmit}))}}]),t}(n.Component);a(16);l.a.render(r.a.createElement(p,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.327e301a.chunk.js.map