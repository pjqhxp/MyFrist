<template>
	<scroll-view :scroll-into-view="topItem" scroll-with-animation class="scroll-cont" scroll-y="true"
		@scroll="headlescroll">
		<view>
			<nav-custom id="top"></nav-custom>
			<swiper class="banner" :indicator-dots="true" indicator-active-color="#ffe32a" :autoplay="true"
				:interval="3000" :duration="1000">
				<swiper-item v-for="(item,index) in banner" :key="item.objectId" @click="Banner(item.link)">
					<view class="swiper-item">
						<image :src="item.img" mode="widthFix"></image>
					</view>
				</swiper-item>
			</swiper>
			<shouye-title title="店长推荐" entitle="Manager Recommended" righttitle="Manager"></shouye-title>

			<scroll-view scroll-x="true">
				<view class="scroll-inner">
					<image src="../../static/6.jpeg" style="height: 300upx;" mode="heightFix"></image>
					<image src="../../static/4.jpeg" style="height: 300upx;" mode="heightFix"></image>
					<image src="../../static/2.jpeg" style="height: 300upx;" mode="heightFix"></image>
				</view>
			</scroll-view>

			<shouye-title title="本店热销" entitle="Sell Like Hot Cakes" righttitle="Hot Sell"></shouye-title>

			<image src="../../static/5.jpeg" style="height: 300upx;width: 100%;" mode="widthFix"></image>

			<view class="flex flex-wrap justify-between">
				<food-item v-for="(item,index) in glist" :gdata="item"></food-item>
			</view>
			<view class="back-top" @click="backtop" v-if="isShow">
				<text class="cuIcon-top"></text>
			</view>
		</view>
	</scroll-view>
</template>

<script>
	import {
		$http
	} from '../../utils/request.js'
	export default {
		data() {
			return {
				isShow: false,
				topItem: '', //返回顶部的标记点
				banner: [],
				glist: [],
				list: '',
			}
		},
		onLoad() {
			this.$get('/1.1/classes/banner').then(res => {
				this.banner = res.results
			})
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
				let url = `/1.1/classes/foods?where={"bcid":1}&limit=8&skip=${skip}`
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
				})
			},
			headlescroll(e) {
				let {
					scrollTop
				} = e.detail
				this.isShow = scrollTop > 400
				this.topItem = ''
			},
			backtop() {
				this.topItem = "top"
			},
		}
	}
</script>

<style lang="scss">
	page {
		padding: 55upx 0 0 0;
		background-color: #fff;
	}

	.poster {
		height: 350upx;
		background-color: #f5f5f5;
	}

	.cont {
		display: flex;
		flex-wrap: wrap;
		padding: 15upx;
		justify-content: space-between;
	}

	.fs-28 {
		margin-top: 20upx;
	}

	.fs-14 {
		margin-top: 2upx;
	}

	.fs-20 {
		margin: 12upx 0;
	}

	.banner {
		height: 800upx;
	}

	.scroll-inner {
		white-space: nowrap;
	}

	.back-top {
		height: 60upx;
		width: 60upx;
		background-color: #b2b2b2;
		border-radius: 50%;
		box-shadow: 0 0 20upx 1upx rgba(0, 0, 0, 0.3);
		position: fixed;
		bottom: 250upx;
		right: 30upx;
		text-align: center;
		line-height: 70upx;
	}

	.scroll-cont {
		height: 100vh;
	}
</style>
