<template>
	<view>
		<nav-customthree></nav-customthree>
		<swiper class="banner" :indicator-dots="true" indicator-active-color="#ffe32a" :autoplay="true" :interval="3000"
			:duration="1000">
			<swiper-item>
				<view class="swiper-item">
					<image :src="detail.img" mode="widthFix"></image>
				</view>
			</swiper-item>
		</swiper>
		<view class="title padding">
			<view class="name">
				{{detail.name}}
				<view class="french padding-top-sm">
					{{detail.french}}
				</view>
			</view>
		</view>
		<view class="flex justify-around">
			<view v-for="(item,index) in detail.list" :key="index"
				:class="['text-center padding-xm tab',{active:tabIdx==index}]" @click="tabIdx=index">
				<view class="">{{item.spec}}</view>
				<view class="">{{item.weight}}</view>
				<view class="">{{item.edible}}</view>
			</view>
		</view>
		<view class="price padding u-border-bottom">
			￥{{detail.list[tabIdx].price}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].ahead}}
			<text class="margin-lr">{{detail.list[tabIdx].size}}</text>
			{{detail.list[tabIdx].edible}}
		</view>
		<view class="padding fs-28 u-border-bottom">
			{{detail.list[tabIdx].fittings}}
		</view>
		<view class="box">
			<view class="box justify-around padding-tb-sm">
				<button @click="handleAdd(detail)" class="cu-btn bg-brown lg"
					style="background-color: #857a72; color: #fff;" type="default">加入购物车</button>
				<button @click="handleOrder(detail)" class="cu-btn bg-yellow lg"
					style="background-color: #ffe32a;" type="default">立即订购</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		mapMutations,
		mapActions,
		mapState
	} from 'vuex'
	import Vue from 'vue'
	export default {
		data() {
			return {
				tabIdx: 0, //标志用户切换选中的子商品序号
				detail: null
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo
			}),
		},
		onLoad() {
			uni.getStorage({
				key: 'seardetail',
				success: (res) => {
					this.detail = res.data
				}
			})
		},
		methods: {
			handleOrder(res) {
				if (this.userInfo) {
					let idx = this.tabIdx
					let id = res.id
					let fname = res.fname
					let sname = res.sname
					let french = res.french
					let bcname = res.bcname
					let chineseBrief = res.chineseBrief
					let img = res.img
					let list = res.list
					let name = res.name
					let spec = res.spec
					let price = res.price
					let userid = this.userInfo.objectId
					let cartList = {
						id,
						french,
						bcname,
						chineseBrief,
						img,
						list,
						name,
						price,
						sname,
						userid,
						spec,
						idx,
						fname,
					}
					Vue.set(cartList, 'ischeck', true)
					Vue.set(cartList, 'num', 1)
					this.$store.dispatch('cart/cartAddAct', cartList)
					uni.showToast({
						title: "订购成功",
						icon:'none'
					});
					setTimeout(function() {
						uni.switchTab({
							url: '../gouwuche/gouwuche'
						})
					}, 1000);
					return
				}
			},
			...mapMutations({
				'handleAdd': 'cart/cartAddMut'
			}),
			handleAdd(res) {
				if (this.userInfo) {
					let idx = this.tabIdx
					let id = res.id
					let fname = res.fname
					let sname = res.sname
					let french = res.french
					let bcname = res.bcname
					let chineseBrief = res.chineseBrief
					let img = res.img
					let list = res.list
					let name = res.name
					let spec = res.spec
					let price = res.price
					let userid = this.userInfo.objectId
					let cartList = {
						id,
						french,
						bcname,
						chineseBrief,
						img,
						list,
						name,
						price,
						sname,
						userid,
						spec,
						idx,
						fname,
					}
					Vue.set(cartList, 'ischeck', true)
					Vue.set(cartList, 'num', 1)
					this.$store.dispatch('cart/cartAddAct', cartList)
					uni.showToast({
						title: "加入购物车成功",
						icon: 'none'
					})
					return
				}
				uni.showModal({
					title: '温馨提示',
					content: '您需要先注册登录才能进行您的操作',
					cancelText: '马上注册',
					confirmText: '立即登录',
					success: ({
						cancel
					}) => {
						if (cancel) {
							uni.navigateTo({
								url: '../user/registration'
							})
							return
						}
						uni.navigateTo({
							url: '../user/login'
						})
					}
				})

			}
		}
	}
</script>

<style lang="scss">
	page {
		padding: 70upx 0 0 0;
		background-color: #fff;
		padding-bottom: 210upx;
		margin-top: -60upx;
	}

	.banner {
		height: 600upx;
	}

	.tab {
		float: left;
		width: 25%;

		&.active {
			background: #ffe32a;
		}
	}

	.price {
		font-size: 40upx;
	}

	.cu-btn.lg {
		width: 46%;
	}

	.title {
		text-align: center;
	}

	.name {
		font-size: 40upx;
	}

	.box {
		position: fixed;
		display: flex;
		bottom: 0;
		width: 100%;
		z-index: 30000;
		background-color: #f1f1f1;
	}
</style>
