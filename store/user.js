import {
	$post
} from '../utils/request.js'
export default {
	namespaced: true,
	state() {
		return {
			userInfo: null
		}
	},
	mutations: {
		initInfo(state, info) {
			state.userInfo = info
		}
	},
	actions: {
		userLoginAct(context, info) {
			$post('/1.1/login', info).then(res => {
				let {
					code
				} = res
				if (code) {
					let title = code === 210 ? '密码错误' : '账号不存在'
					uni.showToast({
						title,
						icon: 'none'
					})
					return
				}
				context.commit('initInfo', res)
				uni.setStorage({
					key: 'userInfo',
					data: res
				})
				uni.navigateTo({
					url:'/pages/my/my'
				})
				setTimeout(function() {
					window.location.reload();
				}, 100);
			})
		}
	}
}
