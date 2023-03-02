<template>
	<view>
		<nav-customtwo></nav-customtwo>
		<view class="cont">
			<view class="margin bg-fff">
				<view v-if="username!='尚未登录'" class="text-center" >
					<image class="touxiang" src="../../static/bg.jpg" mode=""></image>
				</view>
				<view v-else class="text-center">
					<image class="touxiang" src="../../static/logo.png" mode=""></image>
				</view>
				<view @click="handUser" class="text-center">
					{{username}}
					<view v-if="username!='尚未登录'" class="">
						退出登录
					</view>
				</view>
				<view class="flex grid justify-around">
					<view @click="handleMyorder" v-for="(item,index) in grid" class="flex flex-direction align-center padding ">
						<text :class="['iconfont margin-botto',item.icon]"></text>
						{{item.name}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				grid: [
					{
						icon: "icon-dingdanjihe",
						name: "全部订单"
					},{
						icon: "icon-daifukuan",
						name: "代付款"
					},
					{
						icon: "icon-daishouhuo",
						name: "待收货"
					},
					{
						icon: "icon-daipingjia",
						name: "评价"
					}
				]
			}
		},
		computed: {
			username() {
				let {userInfo} = this.$store.state.user
				let name = userInfo ? userInfo.username : '尚未登录'
				return name
			}
		},
		methods: {
			handUser() {
				uni.navigateTo({
					url: '../user/login'
				})
			},
			handleMyorder(){
				uni.navigateTo({
					url:'/pages/order/my-order'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #f6f6f6;
	}

	.grid .iconfont {
		font-size: 60upx;
		color: #888;
	}

	.touxiang {
		width: 170upx;
		height: 170upx;
		border-radius: 50%;
	}

	.cont {
		margin-top: 300upx;

	}

	.touxiang {
		margin-top: -100upx;
	}
</style>
