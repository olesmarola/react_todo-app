(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,o){e.exports=o(18)},16:function(e,t,o){},17:function(e,t,o){},18:function(e,t,o){"use strict";o.r(t);var n=o(0),a=o.n(n),l=o(9),r=o.n(l),c=(o(16),o(17),o(7)),i=o(10),s=o(2),d=o(3),u=o(5),p=o(4),h=o(6),f=o(1),m=o.n(f),T=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={editValue:o.props.todo.title},o.handleInputChange=function(e){o.setState({editValue:e.target.value})},o.handleKeyPress=function(e){var t=o.props.selectToEdit;"Enter"===e.key&&o.editTodo(),"Escape"===e.key&&(t(null),o.setState({editValue:o.props.todo.title}))},o.editTodo=function(){var e=o.props,t=e.todo,n=e.deleteTodo,a=e.editTodoTitle,l=e.selectToEdit;0===o.state.editValue.trim().length&&n(t.id),a(t.id,o.state.editValue),l(null)},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todo,o=e.deleteTodo,n=e.checkTodo,l=e.selectToEdit,r=e.canEdit;return a.a.createElement("li",{className:m()({completed:t.completed},{editing:r})},a.a.createElement("div",{className:m()("view")},a.a.createElement("input",{checked:t.completed,onChange:function(){return n(t.id)},type:"checkbox",className:m()("toggle"),id:t.id}),a.a.createElement("label",{onDoubleClick:function(){return l(t.id)}},t.title),a.a.createElement("button",{onClick:function(){return o(t.id)},type:"button",className:m()("destroy")})),r&&a.a.createElement("input",{autoFocus:!0,onChange:this.handleInputChange,onKeyUp:this.handleKeyPress,onBlur:this.editTodo,value:this.state.editValue,type:"text",className:"edit"}))}}]),t}(a.a.Component),g=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={selectToEditId:null},o.selectToEdit=function(e){o.setState({selectToEditId:e})},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this,t=this.props,o=t.todos,n=t.deleteTodo,l=t.checkTodo,r=t.editTodoTitle;return a.a.createElement("ul",{className:m()("todo-list")},o.map(function(t){return a.a.createElement(T,{key:t.id,todo:t,deleteTodo:n,checkTodo:l,editTodoTitle:r,selectToEdit:e.selectToEdit,canEdit:e.state.selectToEditId===t.id})}))}}]),t}(a.a.Component),b=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={inputValue:""},o.handleInputChange=function(e){o.setState({inputValue:e.target.value})},o.validateInput=function(e){if(e.preventDefault(),o.state.inputValue.trim().length>0){var t={id:+new Date,title:o.state.inputValue,completed:!1};o.props.addTodo(t),o.setState({inputValue:""})}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props,t=e.todosLength,o=e.isAllChecked,n=e.toggleAllTodos;return a.a.createElement("form",{onSubmit:this.validateInput,className:m()("header")},a.a.createElement("input",{autoFocus:!0,onBlur:this.validateInput,onChange:this.handleInputChange,value:this.state.inputValue,type:"text",className:"new-todo",placeholder:"What needs to be done?"}),t>0&&a.a.createElement(a.a.Fragment,null,a.a.createElement("input",{checked:o,onChange:n,type:"checkbox",id:"toggle-all",className:m()("toggle-all")}),a.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete")))}}]),t}(a.a.Component),E=function(e){var t=e.filter,o=e.setFilter,n=e.isFilterSelect;return a.a.createElement("li",null,a.a.createElement("a",{onClick:function(){return o(t)},href:"#/",className:m()({selected:n})},t))},v=function(e){var t=e.todosLeft,o=e.todos,n=e.clearCompletedTodos,l=e.setFilter,r=e.currentFilter;return a.a.createElement("footer",{className:m()("footer"),style:{display:"block"}},a.a.createElement("span",{className:m()("todo-count")},t," ","items left"),a.a.createElement("ul",{className:m()("filters")},Object.values(y).map(function(e){return a.a.createElement(E,{key:e,filter:e,setFilter:l,isFilterSelect:e===r})})),a.a.createElement("button",{onClick:n,type:"button",className:m()("clear-completed"),style:{display:"block"}},o.some(function(e){return e.completed})&&"Clear Completed"))},y={all:"All",completed:"Completed",active:"Active"},k=function(){var e=[];return Object.keys(localStorage).forEach(function(t){return e.push(JSON.parse(localStorage[t]))}),e},O=function(e){function t(){var e,o;Object(s.a)(this,t);for(var n=arguments.length,a=new Array(n),l=0;l<n;l++)a[l]=arguments[l];return(o=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(a)))).state={currentFilter:y.all,todos:k()},o.addTodo=function(e){o.setState(function(t){return{todos:[].concat(Object(i.a)(t.todos),[e]),currentFilter:y.all}})},o.checkTodo=function(e){o.setState(function(t){return{todos:t.todos.map(function(t){return t.id!==e?t:Object(c.a)({},t,{completed:!t.completed})})}})},o.editTodoTitle=function(e,t){o.setState(function(o){return{todos:o.todos.map(function(o){return e!==o.id||o.title===t?o:Object(c.a)({},o,{title:t})})}})},o.deleteTodo=function(e){o.setState(function(t){return{todos:t.todos.filter(function(t){return t.id!==e})}})},o.clearCompletedTodos=function(){o.setState(function(e){return{todos:e.todos.filter(function(e){return!e.completed})}})},o.toggleAllTodos=function(){o.setState(function(e){return{todos:e.todos.map(function(e){return Object(c.a)({},e,{completed:!o.isAllChecked()})})}})},o.isAllChecked=function(){return o.state.todos.every(function(e){return e.completed})},o.setFilter=function(e){o.setState({currentFilter:e})},o.filterArray=function(){switch(o.state.currentFilter){case y.completed:return o.state.todos.filter(function(e){return e.completed});case y.active:return o.state.todos.filter(function(e){return!e.completed});case y.all:default:return o.state.todos.filter(function(e){return e})}},o}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidUpdate",value:function(){this.state.todos.length||localStorage.clear(),Object.values(this.state.todos).forEach(function(e){return localStorage.setItem(e.id.toString(),JSON.stringify(e))})}},{key:"render",value:function(){var e=this.state,t=e.todos,o=e.currentFilter,n=this.filterArray(),l=this.isAllChecked(),r=t.length;return a.a.createElement("section",{className:m()("todoapp")},a.a.createElement("h1",null,"todos"),a.a.createElement(b,{addTodo:this.addTodo,toggleAllTodos:this.toggleAllTodos,isAllChecked:l,todosLength:r}),a.a.createElement("section",{className:m()("main"),style:{display:"block"}},a.a.createElement(g,{todos:n,deleteTodo:this.deleteTodo,checkTodo:this.checkTodo,editTodoTitle:this.editTodoTitle})),this.state.todos.length>0&&a.a.createElement(v,{currentFilter:o,setFilter:this.setFilter,todosLeft:t.filter(function(e){return!e.completed}).length,clearCompletedTodos:this.clearCompletedTodos,todos:n}))}}]),t}(a.a.Component);r.a.render(a.a.createElement(O,null),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.f9fc751d.chunk.js.map