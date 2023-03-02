<script>
	export default {
		onLaunch: function() {
			console.log('App Launch')
			//提取本地存储用户信息
			try {
				const value = uni.getStorageSync('userInfo');
				if (value) {
					this.$store.commit('user/initInfo',value)
					this.$store.dispatch('cart/cartListAct',value.objectId)
					this.$store.dispatch('address/addressListAct',value.objectId)
				}
			} catch (e) {
				console.log("提取用户信息失败");
			}
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style lang="scss">
	/* 样式 */
	@import "@/uni_modules/uview-ui/index.scss";
	@import 'colorui/icon.css';
	@import 'colorui/main.css';
	@import 'static/css/iconfont.css';
</style>
