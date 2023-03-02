<template>
	<view>
		<nav-custom></nav-custom>
		<view class="flex flex-wrap justify-between">
			<food-item v-for="item in glist" :gdata="item"></food-item>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				glist: [],
				list: '',
				show: false
			}
		},
		onLoad() {
			this.Data()
		},
		onReachBottom() {
			this.Data()
		},
		onPullDownRefresh() {
			this.glist = [],
				this.list = '',
				this.Data()

		},
		methods: {
			Data() {
				let skip = this.list * 8
				let url = `/1.1/classes/foods?where={"bcid":6}&limit=8&skip=${skip}`
				this.$get(url).then(res => {
					uni.stopPullDownRefresh();
					let {
						results
					} = res
					if (results.length) {
						this.list++
						this.glist = [
							...this.glist,
							...res.results
						]
						return
					}
					uni.showToast({
						title: '这回真没了!',
						icon: 'loading'
					})
				})
			},
			close() {
				this.show = false
			}
		}
	}
</script>

<style lang="scss">
	page {
		padding: 80upx 0 0 0;
		background-color: #fff;
	}
</style>
