(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/user/registration"],{"29be":function(n,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return i})),e.d(t,"a",(function(){}));var o=function(){var n=this.$createElement;this._self._c},i=[]},"3ed4":function(n,t,e){},aabd:function(n,t,e){"use strict";var o=e("3ed4"),i=e.n(o);i.a},d72e:function(n,t,e){"use strict";e.r(t);var o=e("f28d"),i=e.n(o);for(var u in o)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return o[n]}))}(u);t["default"]=i.a},ec79:function(n,t,e){"use strict";(function(n,t){var o=e("4ea4");e("a41a");o(e("66fd"));var i=o(e("ff72"));n.__webpack_require_UNI_MP_PLUGIN__=e,t(i.default)}).call(this,e("bc2e")["default"],e("543d")["createPage"])},f28d:function(n,t,e){"use strict";(function(n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var e={data:function(){return{info:{}}},onLoad:function(){},methods:{gotoLogin:function(){n.navigateTo({url:"login"})},gotoRegistration:function(){this.$post("/1.1/users",this.info).then((function(t){console.log(t);t.objctId;var e=t.code,o=202===e?"账号已被注册":"注册成功";setTimeout((function(){n.showToast({title:o,icon:"none"},1e3)})),"注册成功"==o&&n.navigateTo({url:"/pages/user/login"})}))}}};t.default=e}).call(this,e("543d")["default"])},ff72:function(n,t,e){"use strict";e.r(t);var o=e("29be"),i=e("d72e");for(var u in i)["default"].indexOf(u)<0&&function(n){e.d(t,n,(function(){return i[n]}))}(u);e("aabd");var a=e("f0c5"),c=Object(a["a"])(i["default"],o["b"],o["c"],!1,null,null,null,!1,o["a"],void 0);t["default"]=c.exports}},[["ec79","common/runtime","common/vendor"]]]);