<template>
	<view>
		<view class="cake-item" @click="handleDetail">
			<view class="shouye">
				<view>
					<image class="poster" :src="gdata.img" mode=""></image>
				</view>
				<view class="info-cont margin-left-sm">
					<view class="info flex align-center justify-between ">
						<view class="">
							<view class="fs-28">
								{{gdata.name}}
							</view>
							<view class="fs-14">
								{{gdata.french}}
							</view>
						</view>
						<view class="cart-bth margin-right-xs">
							<text class="iconfont icon-shouye1"></text>
						</view>
					</view>
					<view class="fs-20 padding-top-xs padding-bottom-xs">
						<text>￥</text>
						{{gdata.price}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: "food-item",
		props:['gdata'],
		data() {
			return {

			};
		},
		methods:{
			handleDetail(){
				uni.setStorage({
					key:"detail",
					data:this.gdata,
					success(res) {
						uni.navigateTo({
							url:'/pages/detail/detail'
						})
					}
				})
			}
		}
	}
</script>

<style lang="scss">
	.shouye {
		width: 360upx;
	}

	.poster {
		height: 360upx;
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

	.cart-bth {
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		background-color: #ffe32a;
		text-align: center;
		line-height: 60upx;
		margin-top: 10upx
	}
</style>
