<template>
	<view>
		<line-line></line-line>
		<view class="padding bai text-center">
			需支付
			<view class="money fs-54">
				￥{{money}}
			</view>
		</view>
		<view class="hei padding-sm">
			请选择付款方式：
		</view>
		<view class="pay align-center ">
			<radio-group class="radio flex-direction flex" name="">
				<label class="radio1 padding">
					<radio value="" checked="true" color="#ff3333" /><text></text>
				</label>
				<label class="radio2 padding">
					<radio value="" color="#ff3333" /><text></text>
				</label>
			</radio-group>
			<view class="flex padding">
				<image class="phone" src="../../static/zfb.png" mode=""></image>
				<view class="">
					支付宝支付
					<view class="fs-18">支付宝余额及花呗支付,有卡就能支付</view>
				</view>
			</view>
			<view class="padding-left padding-right">
				<line-line></line-line>
			</view>
			<view class="flex padding">
				<image class="phone" src="../../static/wx.png" mode=""></image>
				<view class="">
					微信支付
					<view class="fs-18">需要安装微信客户端才可以微信支付</view>
				</view>
			</view>
			<view class="padding-left padding-right">
				<line-line></line-line>
			</view>
		</view>
		<button @click="handlepay" type="primary"
			style="background-color: #ff3333;margin-top: 40upx;width: 93%;border-radius: 0.6em;">立即支付</button>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import Vue from 'vue'
	export default {
		data() {
			return {
				money: '',
				orderList: null
			}
		},
		onBackPress() {
			this.back();
			return true;
		},
		onLoad(e) {
			this.money = e.money
			uni.getStorage({
				key: 'orderList',
				success: (res) => {
					this.orderList = res.data
				}
			})
		},
		methods: {
			back() {
				setTimeout(function() {
					uni.navigateTo({
						url:'/pages/order/my-order'
					})
				}, 500);
				uni.showToast({
					title: "用户取消支付",
					icon:'none'
				});
				let status = '待付款'
				this.orderList = {
					...this.orderList,
					status
				}
				this.$store.commit('order/orderOrderMut', this.orderList)
			},
			handlepay() {
				let status = '待发货'
				this.orderList = {
					...this.orderList,
					status
				}
				this.$store.commit('order/orderListMut', this.orderList)
				uni.navigateTo({
					url: '../order/my-order'
				})
			}
		}
	}
</script>

<style>
	page {
		background-color: #ffffff;
	}

	.bai {
		height: 160upx;
		width: 100%;

	}

	.hei {
		background-color: #eff3f4;
	}

	.money {
		color: #d01f26;
	}

	.pay {
		position: relative;
	}

	.phone {
		width: 80upx;
		height: 80upx;
		margin-right: 20upx;
	}

	.radio {
		position: absolute;
		margin-left: 85%;
		margin-top: 20upx;
	}

	.radio2 {
		margin-top: 20upx;
	}
</style>
