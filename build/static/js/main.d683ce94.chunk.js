(this["webpackJsonptest-setup"]=this["webpackJsonptest-setup"]||[]).push([[0],{14:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(8),r=t.n(c),i=(t(14),t(1)),s=t(2),o=t(4),u=t(3),m=t(6),d=t(5);var p=function(){return l.a.createElement("div",{className:"ui active dimmer loaderBg"},l.a.createElement("div",{className:"ui large text loader"},"Loading"))},h=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).searchValEvent=function(e){return t.setState({value:e.target.value})},t.handleSubmit=function(e){e.preventDefault(),t.props.callBack(t.state.value),t.setState({value:""})},t.state={value:""},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("form",{className:"sixteen wide column",onSubmit:this.handleSubmit},l.a.createElement("div",{className:"ui fluid action input paddingTop"},l.a.createElement("input",{id:"search-input",name:"searchInput",type:"text",placeholder:"Type here to Search...",value:this.state.value,onChange:this.searchValEvent}),l.a.createElement("button",{id:"submit-button",name:"submitButton",className:"ui button teal",type:"submit",title:"Submit"},l.a.createElement("i",{className:"search icon"}))))}}]),a}(l.a.Component),v=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).state={showDetailClass:!0},t.onSubmitTitle=function(e){e.preventDefault(),t.props.callBack(!0,t.props.data)},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data,a=e.label,t=e.calories,n=e.image,c=e.ingredients;return c=c.length,l.a.createElement("div",{className:"four wide column"},l.a.createElement("div",{className:"ui card"},l.a.createElement("div",{className:"image"},l.a.createElement("img",{src:n,alt:a})),l.a.createElement("div",{className:"content"},l.a.createElement("p",{className:"header ellipsis"},a),l.a.createElement("div",{className:"meta"},l.a.createElement("span",{className:"right floated"},"calories: ",Math.floor(t)),l.a.createElement("span",null,"Ingredients: ",c," "))),l.a.createElement("div",{id:"viewDetail",className:"extra content viewDetail",onClick:this.onSubmitTitle},l.a.createElement("span",null,"View Details"))))}}]),a}(l.a.Component),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(t=Object(o.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(l)))).closePopupValue=function(e){return t.props.onClosePopup(!1)},t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data,a=e.label,t=e.image,n=e.calories,c=e.cautions,r=e.ingredients,i=e.source,s=e.url;return n=Math.floor(n),l.a.createElement("div",{className:"showBox"},l.a.createElement("div",{id:"modal",className:"ui dimmer loaderBg modals page transition active"},l.a.createElement("div",{className:"ui standard test modal transition visible active block"},l.a.createElement("i",{id:"closeIcon",className:"close icon",onClick:this.closePopupValue}),l.a.createElement("div",{className:"header teal"},a),l.a.createElement("div",{className:"scrolling image content"},l.a.createElement("div",{className:"ui medium image"},l.a.createElement("img",{src:t,alt:a}),l.a.createElement("div",{className:"additionalBox"},l.a.createElement("span",null,"Calories"),l.a.createElement("span",{className:"floatRight"},n)),l.a.createElement("div",{className:"additionalBox"},l.a.createElement("p",null,"Cautions"),l.a.createElement("p",null,c.map((function(e){return l.a.createElement("span",{key:Math.random(),className:"tag"},e)}))))),l.a.createElement("div",{className:"description"},l.a.createElement("div",{className:"ui header"},"Ingredients"),r.map((function(e){return l.a.createElement("p",{key:Math.random()},e.text)})),l.a.createElement("p",{className:"floatRight"},l.a.createElement("i",null,"Source: ",l.a.createElement("span",null,l.a.createElement("a",{href:s,target:"_blank",rel:"noopener noreferrer"}," ",i," ")," "))))),l.a.createElement("div",{className:"actions"},l.a.createElement("button",{className:"ui deny button",onClick:this.closePopupValue},"Close")))))}}]),a}(l.a.Component),f="https://api.edamam.com/search?app_id=".concat("d100a428","&app_key=").concat("ce491a16c576e944e820d344c062f9a7","&from=0&to=8&calories=591-722&health=alcohol-free"),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).onSubmitForm=function(e){t.setState({loader:!0}),t.getData(e)},t.onShowPopup=function(e,a){t.setState({showDetailClass:e,detailData:a})},t.state={data:[],detailData:{},error:"",showDetailClass:!1,loader:!1},t.onShowPopup=t.onShowPopup.bind(Object(m.a)(t)),t}return Object(d.a)(a,e),Object(s.a)(a,[{key:"getData",value:function(e){var a=this,t=f+"&q=".concat(e);fetch(t).then((function(e){a.setState({loader:!1}),e.json().then((function(e){return a.setState({data:e.hits})})).catch((function(e){return a.setState({error:e})}))}))}},{key:"componentDidMount",value:function(){this.onSubmitForm("chicken")}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,this.state.loader?l.a.createElement(p,null):"",l.a.createElement("div",{className:"App ui grid container"},l.a.createElement(h,{callBack:this.onSubmitForm}),this.state.data.map((function(a){return l.a.createElement(v,{key:Math.random(),callBack:e.onShowPopup,data:a.recipe})}))),this.state.showDetailClass?l.a.createElement(E,{key:Math.random(),onClosePopup:this.onShowPopup,data:this.state.detailData}):"")}}]),a}(l.a.Component);r.a.render(l.a.createElement(b,null),document.getElementById("root"))},9:function(e,a,t){e.exports=t(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.d683ce94.chunk.js.map