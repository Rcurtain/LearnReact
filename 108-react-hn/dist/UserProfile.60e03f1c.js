webpackJsonp([2,5,6],{"4B7v":function(e,t,r){"use strict";var a=r("uMu9"),l=r("ZZqC"),n=r("z3IR").default,s=r("VIGu"),i=r("OieW"),u=r("SIDF"),d=a.createClass({displayName:"UserProfile",mixins:[l],getInitialState:function(){return{user:{}}},componentWillMount:function(){this.bindAsObject(s.userRef(this.props.params.id),"user")},componentWillUpdate:function(e,t){this.state.user.id!==t.user.id&&u("Profile: "+t.user.id)},componentWillReceiveProps:function(e){this.props.params.id!==e.params.id&&(this.unbind("user"),this.bindAsObject(s.userRef(e.params.id),"user"))},render:function(){var e=this.state.user;if(!e.id)return a.createElement("div",{className:"UserProfile UserProfile--loading"},a.createElement("h4",null,this.props.params.id),a.createElement(i,{size:"20"}));var t=new Date(1e3*e.created);return a.createElement("div",{className:"UserProfile"},a.createElement("h4",null,e.id),a.createElement("dl",null,a.createElement("dt",null,"Created"),a.createElement("dd",null,a.createElement(n,{date:t})," (",t.toDateString(),")"),a.createElement("dt",null,"Karma"),a.createElement("dd",null,e.karma),a.createElement("dt",null,"Delay"),a.createElement("dd",null,e.delay),e.about&&a.createElement("dt",null,"About"),e.about&&a.createElement("dd",null,a.createElement("div",{className:"UserProfile__about",dangerouslySetInnerHTML:{__html:e.about}}))))}});e.exports=d}});
//# sourceMappingURL=UserProfile.60e03f1c.js.map