import {
	$post,
	$get
} from '../utils/request.js'
import Vue from 'vue'
export default {
	namespaced: true,
	state() {
		return {
			cartList: []
		}
	},
	getters: {
		allInfo(state) { //统计信息
			let allCheck = true
			let allPrice = 0 //总价
			state.cartList.forEach(item => {
				if (!item.ischeck) {
					allCheck = false
				}
				if (item.ischeck) {
					allPrice += item.list[item.idx].price * item.num
				}
			})
			return {
				allCheck,
				allPrice
			}
		}
	},
	mutations: {
		cartDelMut(state, arr) {
			state.cartList = arr
		},
		cartCheckMut(state, idx) { //单选
			state.cartList[idx].ischeck = !state.cartList[idx].ischeck
		},
		cartAllCheckMut(state, bool) { //全选，bool为原本的全选状态
			state.cartList.forEach(item => {
				item.ischeck = !bool
			})
		},
		cartListCheckMut(state, {
			cartIdx,
			dropIdx,
			num
		}) { //子商品下拉确认处理
			state.cartList[cartIdx].idx = dropIdx
			state.cartList[cartIdx].num = num
		},
		cartAddMut(state, goodsList) { //新增商品
			let {
				cartList
			} = state
			let len = cartList.length
			for (let i = 0; i < len; i++) {
				let {
					id,
					idx
				} = goodsList
				if (cartList[i].id == id && cartList[i].idx == idx) { //购物车已经有相同商品
					state.cartList[i].num++
					return
				}
			}
			state.cartList.push(goodsList) //新增新商品
		},
		cartListMut(state, cartList) {
			state.cartList = cartList
		}
	},
	actions: {
		cartAddAct(context, goodsList) {
			$post('/1.1/classes/cart', goodsList).then(({
				objctId
			}) => {
				context.commit('cartAddMut', {
					...goodsList,
					objctId
				})
			})
		},
		cartListAct(context, userid) {
			let url = `/1.1/classes/cart?where={"userid":"${userid}"}`
			$get(url).then(({
				results
			}) => {
				context.commit('cartListMut', results)
			})
		}
	}
}
