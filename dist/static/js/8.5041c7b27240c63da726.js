webpackJsonp([8],{Ih17:function(e,t){},YDhy:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),s=n.n(r),a=n("NYxO"),o={data:function(){return{username:"",password:""}},methods:s()({},Object(a.b)(["register"]),{onRegister:function(){var e=this;this.register({username:this.username,password:this.password}).then(function(){e.$router.push({path:"/"})})}})},i={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"login"}},[n("h4",[e._v("用户名")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],attrs:{placeholder:"用户名",type:"text"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}}),e._v(" "),n("h4",[e._v("密码")]),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{type:"password",placeholder:"密码"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onRegister.apply(null,arguments)},input:function(t){t.target.composing||(e.password=t.target.value)}}}),e._v(" "),n("el-button",{attrs:{size:"medium"},on:{click:e.onRegister}},[e._v("立即注册")]),e._v(" "),n("p",{staticClass:"notice"},[e._v("已有账号？"),n("router-link",{attrs:{to:"/login"}},[e._v("立即登录")])],1)],1)},staticRenderFns:[]};var u=n("VU/8")(o,i,!1,function(e){n("Ih17")},"data-v-2652ccd2",null);t.default=u.exports}});
//# sourceMappingURL=8.5041c7b27240c63da726.js.map