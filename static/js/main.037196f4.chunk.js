(this["webpackJsonptatl-test"]=this["webpackJsonptatl-test"]||[]).push([[0],[,,,,,,,,function(t,e,a){t.exports=a(16)},,,,,function(t,e,a){},function(t,e,a){},function(t,e,a){},function(t,e,a){"use strict";a.r(e);var n=a(0),o=a.n(n),s=a(7),l=a.n(s),c=(a(13),a(2)),i=a(3),r=a(1),h=a(4),u=a(5),d=(a(14),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={data:n.props.data},n.handleChange=n.handleChange.bind(Object(r.a)(n)),n.handleClose=n.handleClose.bind(Object(r.a)(n)),n}return Object(i.a)(a,[{key:"handleChange",value:function(t){this.setState({data:t.target.value})}},{key:"handleClose",value:function(){this.props.handleClose(this.state.data)}},{key:"render",value:function(){return console.log(this.state.data),o.a.createElement("div",{className:"Popup"},"input"===this.props.mode?o.a.createElement("input",{type:"text",onChange:this.handleChange,value:this.state.data}):o.a.createElement("p",null,this.state.data),o.a.createElement("button",{onClick:this.handleClose,type:"button"},"ok"))}}]),a}(n.Component)),p=(a(15),function(t){Object(u.a)(a,t);var e=Object(h.a)(a);function a(t){var n;return Object(c.a)(this,a),(n=e.call(this,t)).state={mode:"closed",data:""},n.showPrompt=n.showPrompt.bind(Object(r.a)(n)),n.showData=n.showData.bind(Object(r.a)(n)),n.handleClose=n.handleClose.bind(Object(r.a)(n)),n}return Object(i.a)(a,[{key:"showPrompt",value:function(){this.setState({mode:"input"})}},{key:"showData",value:function(){this.setState({mode:"output"})}},{key:"handleClose",value:function(t){this.setState({mode:"closed",data:t})}},{key:"render",value:function(){var t=this.state,e=t.mode,a=t.data;return o.a.createElement("div",{className:"App"},o.a.createElement("button",{onClick:this.showPrompt,type:"button"},"Input Data"),o.a.createElement("button",{onClick:this.showData,type:"button"},"Output Data"),"closed"!==e?o.a.createElement(d,{data:a,mode:e,handleClose:this.handleClose}):null)}}]),a}(o.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(p,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.037196f4.chunk.js.map