import Vue from "vue"
import Vuex from 'vuex'
import user from './user.js'
import cart from './cart.js'
import address from './address.js'
import order from './order.js'
Vue.use(Vuex)
const store = new Vuex.Store({
	modules:{
		user,
		cart,
		address,
		order
	}
})
export default store