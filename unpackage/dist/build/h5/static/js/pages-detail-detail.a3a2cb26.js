(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-detail-detail"],{"0f29":function(t,a,n){var d=n("24fb");a=d(!1),a.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 图片 */\r\n/* CDN 服务仅供平台体验和调试使用，平台不承诺服务的稳定性，企业客户需下载字体包自行发布使用并做好备份。 */@font-face{font-family:iconfont;  /* Project id 3822323 */src:url(//at.alicdn.com/t/c/font_3822323_jph5d9d4ka.woff2?t=1673152620734) format("woff2"),url(//at.alicdn.com/t/c/font_3822323_jph5d9d4ka.woff?t=1673152620734) format("woff"),url(//at.alicdn.com/t/c/font_3822323_jph5d9d4ka.ttf?t=1673152620734) format("truetype")}.iconfont[data-v-2b0ad6dd]{font-family:iconfont!important;font-size:16px;font-style:normal;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.icon-tucenggouxuan[data-v-2b0ad6dd]:before{content:"\\e6a2"}.icon-huiyishiqueren_huabanfuben[data-v-2b0ad6dd]:before{content:"\\e61a"}.icon-gouxuan-xuanzhong-fangkuang[data-v-2b0ad6dd]:before{content:"\\e77a"}.icon-bianjishuru[data-v-2b0ad6dd]:before{content:"\\e8cc"}.icon-gouxuankuang-yigouxuan[data-v-2b0ad6dd]:before{content:"\\e613"}.icon-shouye1[data-v-2b0ad6dd]:before{content:"\\e61b"}.icon-canju[data-v-2b0ad6dd]:before{content:"\\e620"}.icon-daishouhuo[data-v-2b0ad6dd]:before{content:"\\e612"}.icon-daifukuan[data-v-2b0ad6dd]:before{content:"\\e76f"}.icon-daipingjia[data-v-2b0ad6dd]:before{content:"\\e772"}.icon-dingdandingdanchaxun[data-v-2b0ad6dd]:before{content:"\\e791"}.icon-dangao[data-v-2b0ad6dd]:before{content:"\\e618"}.icon-mianbao[data-v-2b0ad6dd]:before{content:"\\e619"}.icon-lingshi[data-v-2b0ad6dd]:before{content:"\\e7f3"}.icon-gouwuche-copy[data-v-2b0ad6dd]:before{content:"\\e62d"}.icon-dizhi[data-v-2b0ad6dd]:before{content:"\\e602"}.icon-dingdanjihe[data-v-2b0ad6dd]:before{content:"\\e897"}.icon-shouye[data-v-2b0ad6dd]:before{content:"\\e660"}.icon-gerenzhongxin[data-v-2b0ad6dd]:before{content:"\\e6a4"}\r\n/* 全局css */\r\n/* 默认字体颜色 */.f-color[data-v-2b0ad6dd]{color:#636263}\r\n/* 选中字体颜色 */.f-active-color[data-v-2b0ad6dd]{color:#40bdfb}\r\n/* 背景色 */.bg-color[data-v-2b0ad6dd]{background-color:#42b7fb}\r\n/* 页面默认背景色 */.bg-active-color[data-v-2b0ad6dd]{background-color:#f7f7f7}\r\n/* 隐藏滑块 */[data-v-2b0ad6dd]::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}\r\n/* 文字颜色变量 */.color-111[data-v-2b0ad6dd]{color:#111!important}.color-9292[data-v-2b0ad6dd]{color:#929292!important}.color-9898[data-v-2b0ad6dd]{color:#989898!important}.color-fff[data-v-2b0ad6dd]{color:#fff!important}.color-yellow[data-v-2b0ad6dd]{color:#ff0!important}\r\n/* 控制背景色 */.bg-fff[data-v-2b0ad6dd]{background-color:#fff!important}.bg-yellow[data-v-2b0ad6dd]{background-color:#ff0!important}\r\n/* 文字变量 */.fs-14[data-v-2b0ad6dd]{font-size:%?14?%!important}.fs-16[data-v-2b0ad6dd]{font-size:%?16?%!important}.fs-18[data-v-2b0ad6dd]{font-size:%?18?%!important}.fs-20[data-v-2b0ad6dd]{font-size:%?20?%!important}.fs-22[data-v-2b0ad6dd]{font-size:%?22?%!important}.fs-24[data-v-2b0ad6dd]{font-size:%?24?%!important}.fs-26[data-v-2b0ad6dd]{font-size:%?26?%!important}.fs-28[data-v-2b0ad6dd]{font-size:%?28?%!important}.fs-30[data-v-2b0ad6dd]{font-size:%?30?%!important}.fs-32[data-v-2b0ad6dd]{font-size:%?32?%!important}.fs-54[data-v-2b0ad6dd]{font-size:%?54?%!important}\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */uni-page-body[data-v-2b0ad6dd]{padding-bottom:%?210?%;margin-top:%?-60?%}.banner[data-v-2b0ad6dd]{height:%?600?%}.tab[data-v-2b0ad6dd]{float:left;width:25%}.tab.active[data-v-2b0ad6dd]{background:#ffe32a}.price[data-v-2b0ad6dd]{font-size:%?40?%}.cu-btn.lg[data-v-2b0ad6dd]{width:46%}.title[data-v-2b0ad6dd]{text-align:center}.name[data-v-2b0ad6dd]{font-size:%?40?%}.box[data-v-2b0ad6dd]{position:fixed;display:flex;bottom:0;width:100%;z-index:30000;background-color:#f1f1f1}',""]),t.exports=a},"13e9":function(t,a,n){"use strict";n("7a82");var d=n("4ea4").default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e=d(n("5530")),i=n("26cb"),o=d(n("e143")),r={data:function(){return{tabIdx:0,detail:null}},computed:(0,e.default)({},(0,i.mapState)({userInfo:function(t){return t.user.userInfo}})),onLoad:function(){var t=this;uni.getStorage({key:"detail",success:function(a){t.detail=a.data}})},methods:(0,e.default)((0,e.default)({},(0,i.mapMutations)({handleAdd:"cart/cartAddMut"})),{},{handleOrder:function(t){if(this.userInfo){var a=t.idx,n=t.id,d=t.fname,e=t.sname,i=t.french,r=t.bcname,c=t.chineseBrief,s=t.img,f=t.list,u=t.name,l=t.spec,b=t.price,v=this.userInfo.objectId,p={id:n,french:i,bcname:r,chineseBrief:c,img:s,list:f,name:u,price:b,sname:e,userid:v,spec:l,idx:a,fname:d};return o.default.set(p,"ischeck",!0),o.default.set(p,"num",1),this.$store.dispatch("cart/cartAddAct",p),uni.showToast({title:"订购成功",icon:"none"}),void setTimeout((function(){uni.switchTab({url:"../gouwuche/gouwuche"})}),1e3)}},handleAdd:function(t){if(this.userInfo){var a=t.idx,n=t.id,d=t.fname,e=t.sname,i=t.french,r=t.bcname,c=t.chineseBrief,s=t.img,f=t.list,u=t.name,l=t.spec,b=t.price,v=this.userInfo.objectId,p={id:n,french:i,bcname:r,chineseBrief:c,img:s,list:f,name:u,price:b,sname:e,userid:v,spec:l,idx:a,fname:d};return o.default.set(p,"ischeck",!0),o.default.set(p,"num",1),this.$store.dispatch("cart/cartAddAct",p),void uni.showToast({title:"加入购物车成功",icon:"none"})}uni.showModal({title:"温馨提示",content:"您需要先注册登录才能进行您的操作",cancelText:"马上注册",confirmText:"立即登录",success:function(t){var a=t.cancel;a?uni.navigateTo({url:"../user/registration"}):uni.navigateTo({url:"../user/login"})}})}})};a.default=r},7889:function(t,a,n){var d=n("0f29");d.__esModule&&(d=d.default),"string"===typeof d&&(d=[[t.i,d,""]]),d.locals&&(t.exports=d.locals);var e=n("4f06").default;e("3d0e5823",d,!0,{sourceMap:!1,shadowMode:!1})},c40c:function(t,a,n){"use strict";n.r(a);var d=n("cc8a"),e=n("ceac");for(var i in e)["default"].indexOf(i)<0&&function(t){n.d(a,t,(function(){return e[t]}))}(i);n("f6fa");var o=n("f0c5"),r=Object(o["a"])(e["default"],d["b"],d["c"],!1,null,"2b0ad6dd",null,!1,d["a"],void 0);a["default"]=r.exports},cc8a:function(t,a,n){"use strict";n.d(a,"b",(function(){return d})),n.d(a,"c",(function(){return e})),n.d(a,"a",(function(){}));var d=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("v-uni-view",[n("nav-customthree"),n("v-uni-swiper",{staticClass:"banner",attrs:{"indicator-dots":!0,"indicator-active-color":"#ffe32a",autoplay:!0,interval:3e3,duration:1e3}},[n("v-uni-swiper-item",[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{attrs:{src:t.detail.img,mode:"widthFix"}})],1)],1)],1),n("v-uni-view",{staticClass:"title padding"},[n("v-uni-view",{staticClass:"name"},[t._v(t._s(t.detail.name)),n("v-uni-view",{staticClass:"french padding-top-sm"},[t._v(t._s(t.detail.french))])],1)],1),n("v-uni-view",{staticClass:"flex justify-around"},t._l(t.detail.list,(function(a,d){return n("v-uni-view",{key:d,class:["text-center padding-xm tab",{active:t.tabIdx==d}],on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.tabIdx=d}}},[n("v-uni-view",{},[t._v(t._s(a.spec))]),n("v-uni-view",{},[t._v(t._s(a.weight))]),n("v-uni-view",{},[t._v(t._s(a.edible))])],1)})),1),n("v-uni-view",{staticClass:"price padding u-border-bottom"},[t._v("￥"+t._s(t.detail.list[t.tabIdx].price))]),n("v-uni-view",{staticClass:"padding fs-28 u-border-bottom"},[t._v(t._s(t.detail.list[t.tabIdx].ahead)),n("v-uni-text",{staticClass:"margin-lr"},[t._v(t._s(t.detail.list[t.tabIdx].size))]),t._v(t._s(t.detail.list[t.tabIdx].edible))],1),n("v-uni-view",{staticClass:"padding fs-28 u-border-bottom"},[t._v(t._s(t.detail.list[t.tabIdx].fittings))]),n("v-uni-view",{staticClass:"box"},[n("v-uni-view",{staticClass:"box justify-around padding-tb-sm"},[n("v-uni-button",{staticClass:"cu-btn bg-brown lg",staticStyle:{"background-color":"#857a72",color:"#fff"},attrs:{type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleAdd(Object.assign({},t.detail,{idx:t.tabIdx}))}}},[t._v("加入购物车")]),n("v-uni-button",{staticClass:"cu-btn bg-yellow lg",staticStyle:{"background-color":"#ffe32a"},attrs:{type:"default"},on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.handleOrder(Object.assign({},t.detail,{idx:t.tabIdx}))}}},[t._v("立即订购")])],1)],1)],1)},e=[]},ceac:function(t,a,n){"use strict";n.r(a);var d=n("13e9"),e=n.n(d);for(var i in d)["default"].indexOf(i)<0&&function(t){n.d(a,t,(function(){return d[t]}))}(i);a["default"]=e.a},f6fa:function(t,a,n){"use strict";var d=n("7889"),e=n.n(d);e.a}}]);