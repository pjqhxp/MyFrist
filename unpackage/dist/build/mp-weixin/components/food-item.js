(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/food-item"],{1871:function(t,n,e){"use strict";var a=e("253a"),u=e.n(a);u.a},"253a":function(t,n,e){},"47fd":function(t,n,e){"use strict";e.r(n);var a=e("6c99"),u=e("c502");for(var c in u)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return u[t]}))}(c);e("1871");var i=e("f0c5"),o=Object(i["a"])(u["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],void 0);n["default"]=o.exports},"6c99":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return u})),e.d(n,"a",(function(){}));var a=function(){var t=this.$createElement;this._self._c},u=[]},c0e7:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={name:"food-item",props:["gdata"],data:function(){return{}},methods:{handleDetail:function(){t.setStorage({key:"detail",data:this.gdata,success:function(n){t.navigateTo({url:"/pages/detail/detail"})}})}}};n.default=e}).call(this,e("543d")["default"])},c502:function(t,n,e){"use strict";e.r(n);var a=e("c0e7"),u=e.n(a);for(var c in a)["default"].indexOf(c)<0&&function(t){e.d(n,t,(function(){return a[t]}))}(c);n["default"]=u.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/food-item-create-component',
    {
        'components/food-item-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("47fd"))
        })
    },
    [['components/food-item-create-component']]
]);
