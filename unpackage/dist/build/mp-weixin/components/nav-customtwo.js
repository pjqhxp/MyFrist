(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["components/nav-customtwo"],{"153b":function(n,e,u){"use strict";u.d(e,"b",(function(){return o})),u.d(e,"c",(function(){return i})),u.d(e,"a",(function(){return t}));var t={uLine:function(){return Promise.all([u.e("common/vendor"),u.e("uni_modules/uview-ui/components/u-line/u-line")]).then(u.bind(null,"5911"))},uPopup:function(){return Promise.all([u.e("common/vendor"),u.e("uni_modules/uview-ui/components/u-popup/u-popup")]).then(u.bind(null,"574c"))},uGrid:function(){return Promise.all([u.e("common/vendor"),u.e("uni_modules/uview-ui/components/u-grid/u-grid")]).then(u.bind(null,"cf84"))},uGridItem:function(){return Promise.all([u.e("common/vendor"),u.e("uni_modules/uview-ui/components/u-grid-item/u-grid-item")]).then(u.bind(null,"b886"))},uIcon:function(){return Promise.all([u.e("common/vendor"),u.e("uni_modules/uview-ui/components/u-icon/u-icon")]).then(u.bind(null,"fb95"))}},o=function(){var n=this,e=n.$createElement,u=(n._self._c,n.__map(n.baseList,(function(e,u){var t=n.__get_orig(e);return{$orig:t,a0:{paddingTop:"20rpx"}}})));n.$mp.data=Object.assign({},{$root:{l0:u}})},i=[]},a025:function(n,e,u){"use strict";u.r(e);var t=u("153b"),o=u("ab6c");for(var i in o)["default"].indexOf(i)<0&&function(n){u.d(e,n,(function(){return o[n]}))}(i);u("dcef");var a=u("f0c5"),r=Object(a["a"])(o["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);e["default"]=r.exports},ab6c:function(n,e,u){"use strict";u.r(e);var t=u("af1b"),o=u.n(t);for(var i in t)["default"].indexOf(i)<0&&function(n){u.d(e,n,(function(){return t[n]}))}(i);e["default"]=o.a},af1b:function(n,e,u){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u={name:"nav-custom",data:function(){return{show:!1,baseList:[{name:"gift",title:"最新活动"},{name:"car",title:"我的订单"},{name:"kefu-ermai",title:"关于我们"},{name:"map",title:"我的地址"}]}},methods:{back:function(){n.switchTab({url:"/pages/shouye/shouye"})},gouwuche:function(){n.switchTab({url:"/pages/gouwuche/gouwuche"})},fenlei:function(){this.show=!0},close:function(){this.show=!1},click:function(e){0==e&&n.showToast({title:"暂无最新活动",icon:"loading"}),1==e&&n.navigateTo({url:"/pages/order/my-order"}),2==e&&n.navigateTo({url:"/pages/activity/activity"}),3==e&&n.navigateTo({url:"/pages/address/address"})}}};e.default=u}).call(this,u("543d")["default"])},dcef:function(n,e,u){"use strict";var t=u("f135"),o=u.n(t);o.a},f135:function(n,e,u){}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'components/nav-customtwo-create-component',
    {
        'components/nav-customtwo-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("a025"))
        })
    },
    [['components/nav-customtwo-create-component']]
]);
