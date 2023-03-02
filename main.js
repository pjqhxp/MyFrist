import App from './App'
import store from 'store/index.js'
/* 导入colorui */
import cuCustom from 'colorui/components/cu-custom.vue'
Vue.config.productionTip = false

// #ifndef VUE3
import Vue from 'vue'
/*引入uview组件库  */
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)

/* 挂载全局组件 */
import NavCustom from 'components/nav-custom.vue'
Vue.component('nav-custom',NavCustom)
import ShouyeTitle from 'components/shouye-title.vue'
Vue.component('shouye-title',ShouyeTitle)
import FoodItem from 'components/food-item.vue'
Vue.component('food-item',FoodItem)
import NavCustomTwo from 'components/nav-customtwo.vue'
Vue.component('nav-customtwo',NavCustomTwo)
import NavCustomThree from 'components/nav-customthree.vue'
Vue.component('nav-customthree',NavCustomThree)
import LineLine from 'components/line-line.vue'
Vue.component('line-line',LineLine)
import OrderList from 'components/orderList.vue'
Vue.component('orderList',OrderList)

//挂载全局请求方法
import * as request from "utils/request.js"
for(let key in request){
	Vue.prototype[key] = request[key]
}

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
	...App,
	store//注入状态机
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
