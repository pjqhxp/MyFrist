import {
	$get,
	$post,
	$delete,
	$put
} from '../utils/request.js'
export default {
	namespaced: true,
	state() {
		return {
			checkIdx: -1,
			addressList: []
		}
	},
	getters: {
		orderAddress(state) {
			let {
				checkIdx,
				addressList
			} = state
			if (checkIdx != -1) {
				return addressList[checkIdx]
			}
			let len = addressList.length
			for (let i = 0; i < len; i++) {
				if (addressList[i].isicon) {
					return addressList[i]
				}
			}
		}
	},
	mutations: {
		addressDelMut(state, idx) {
			uni.showModal({
				title: '提示',
				content: '确定要删除吗？',
				success: ({
					cancel
				}) => {
					if (cancel) {
						uni.showToast({
							title: "删除失败",
							icon: 'none'
						})
						return
					}
					let url = `/1.1/classes/address/${state.addressList[idx].objectId}`
					$delete(url).then(res => {})
					state.addressList.splice(idx, 1)
					uni.showToast({
						title: "删除成功",
						icon: 'none'
					})
				}
			})
		},
		addressIconMut(state, index) { //设为默认
			state.addressList.forEach((item, idx) => {
				if (idx == index) {
					item.isicon = true
				} else {
					item.isicon = false
				}
			})
		},
		addressCheckMut(state, idx) { //选取新地址
			state.checkIdx = idx
			uni.navigateBack({
				delta: 1
			})
		},
		addressAddMut(state, addressObj) { //新增地址
			state.addressList.push(addressObj)
		},
		addressListMut(state, addressArr) { //初始化数据
			state.addressList = addressArr
		},
		addressPutMut(state,address) {//修改数据
			for (let key in address) {
				state.addressList[address.idx][key] = address[key];
			}
		}
	},
	actions: {
		addressAddAct(context, addressObj) {
			$post('/1.1/classes/address', addressObj).then(({
				objectId
			}) => {
				context.commit('addressAddMut', {
					...addressObj,
					objectId
				})
				uni.navigateBack({
					delta: 1
				})
			})
		},
		addressListAct(context, userid) {
			let url = `/1.1/classes/address?where={"userid":"${userid}"}`
			$get(url).then(({
				results
			}) => {
				context.commit('addressListMut', results)
			})
		},
		addressPutAct(context,address) {
			let obj = {
				"requests": []
			}
			obj.requests.push({
				"method": "PUT",
				"path": `/1.1/classes/address/${address.objectId}`,
				"body": {
					"detail": address.detail,
					"phone": address.phone,
					"region": address.region,
					"username": address.username
				}
			})
			$post('/1.1/batch', obj).then(res => { //批量操作在线数据
				context.commit('addressPutMut',address)
				uni.navigateBack({
					delta: 1
				})
			})
		}
	}
}
