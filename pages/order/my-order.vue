<template>
	<view class="my-order bg-active-color">
		<line-line></line-line>
		<view class="order-header">
			<u-subsection @change="sectionChange" :list="orderList" :current="curNow"></u-subsection>
		</view>
		<template v-if="curNow==0" class="order-main" :style="'height:'+clentHeight+'px;'">
			<view class="" v-if="orderList[0].list!=0">
				<view class="order-goods" v-for="(a,b) in orderList" :key="b" v-if="a.name=='全部'">
					<view class="" v-for="(c,d) in a.list">
						<view style="vertical-align:middle;" class="goods-status f-active-color " >
							{{c.status}}
						</view>
						<view class="goods-item" v-for="(item,index) in c.cartList">
							<orderList :item='item' :index='index'></orderList>
						</view>
						<line-line></line-line>
						<view class="flex justify-between total-price align-center">
							配送时间: <text class="">{{c.cartList.date}}  {{c.cartList.time}}</text>
						</view>
						<view class="total-price flex justify-between align-center">
							订单金额: <text style="text-align: right;" class="">￥{{c.money}}(包含运费￥0.09)</text>
						</view>
						<view class="flex justify-between total-price align-center">
							订单留言: <text class="">{{c.cartList.message==''?"未选择留言":c.cartList.message}}</text>
						</view>
						<view class="payment" v-if="c.status=='待付款'">
							<view class="payment-text f-active-color">
								支付
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else class="no-order" :style="'height:'+clentHeight+'px;'">
				<view class="no-order-text">
					您还没有相关订单
				</view>
				<view class="no-order-home">
					去首页逛逛
				</view>
			</view>
		</template>
		<template v-if="curNow==1" class="order-main" :style="'height:'+clentHeight+'px;'">
			<view class="" v-if="orderList[1].list!=0">
				<view class="order-goods" v-for="(a,b) in orderList" :key="b" v-if="a.name=='待付款'">
					<view class="" v-for="(c,d) in a.list">
						<view class="goods-status f-active-color" >
							{{c.status}}
						</view>
						<view class="goods-item" v-for="(item,index) in c.cartList">
							<orderList :item='item' :index='index'></orderList>
						</view>
						<view class="flex justify-between total-price align-center">
							配送时间: <text class="">{{c.cartList.date}}  {{c.cartList.time}}</text>
						</view>
						<view class="total-price flex justify-between align-center">
							订单金额: <text style="text-align: right;" class="">￥{{c.cartList.money}}(包含运费￥0.09)</text>
						</view>
						<view class="flex justify-between total-price align-center">
							订单留言: <text class="">{{c.cartList.message==''?"未选择留言":c.cartList.message}}</text>
						</view>
						<view class="payment" v-if="c.status=='待付款'">
							<view class="payment-text f-active-color">
								支付
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else class="no-order" :style="'height:'+clentHeight+'px;'">
				<view class="no-order-text">
					您还没有相关订单
				</view>
				<view class="no-order-home">
					去首页逛逛
				</view>
			</view>
		</template>
		<template v-if="curNow==2" class="order-main" :style="'height:'+clentHeight+'px;'">
			<view class="" v-if="orderList[2].list!=0">
				<view class="order-goods" v-for="(a,b) in orderList" :key="b" v-if="a.name=='待发货'">
					<view class="" v-for="(c,d) in a.list">
						<view class="goods-status f-active-color" >
							{{c.status}}
						</view>
						<view class="goods-item" v-for="(item,index) in c.cartList">
							<orderList :item='item' :index='index'></orderList>
						</view>
						<line-line></line-line>
						<view class="flex justify-between total-price align-center">
							配送时间: <text class="">{{c.cartList.date}}  {{c.cartList.time}}</text>
						</view>
						<view class="total-price flex justify-between align-center">
							订单金额: <text style="text-align: right;" class="">￥{{c.cartList.money}}(包含运费￥0.09)</text>
						</view>
						<view class="flex justify-between total-price align-center">
							订单留言: <text class="">{{c.cartList.message==''?"未选择留言":c.cartList.message}}</text>
						</view>
						<view class="payment" v-if="c.status=='待付款'">
							<view class="payment-text f-active-color">
								支付
							</view>
						</view>
					</view>
				</view>
			</view>
			<view v-else class="no-order" :style="'height:'+clentHeight+'px;'">
				<view class="no-order-text">
					您还没有相关订单
				</view>
				<view class="no-order-home">
					去首页逛逛
				</view>
			</view>
		</template>
		<template v-if="curNow==3" class="order-main" :style="'height:'+clentHeight+'px;'">
			<view class="no-order" :style="'height:'+clentHeight+'px;'">
				<view class="no-order-text">
					您还没有相关订单
				</view>
				<view class="no-order-home">
					去首页逛逛
				</view>
			</view>
		</template>
		<template v-if="curNow==4" class="order-main" :style="'height:'+clentHeight+'px;'">
			<view class="no-order" :style="'height:'+clentHeight+'px;'">
				<view class="no-order-text">
					您还没有相关订单
				</view>
				<view class="no-order-home">
					去首页逛逛
				</view>
			</view>
		</template>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				clentHeight: 0,
				tabIndex: 0,
				curNow: 0,
			}
		},
		computed: {
			...mapState({
				orderList: state => state.order.orderList
			})
		},
		methods: {
			sectionChange(index) {
				this.curNow = index;
			},
			getClientHeight() {
				const res = uni.getSystemInfoSync();
				const system = res.platform;
				if (system === 'iso') {
					return 44 + res.statusBarHeight;
				} else if (system === 'android') {
					return 48 + res.statusBarHeight;
				} else {
					return 0;
				}
			},
		},
		onReady() {
			uni.getSystemInfo({
				success: (res) => {
					this.clentHeight = res.windowHeight - uni.upx2px(80) - this.getClientHeight();
				}
			})
		},
	}
</script>

<style lang="scss">
	.order-header {
		background-color: #fff;
		display: flex;
		justify-content: center;
		align-items: center;
		border-bottom: 2rpx solid #f7f7f7;
	}

	.header-item {
		text-align: center;
		flex: 1;
		line-height: 120rpx;
	}

	.active {
		border-bottom: 5rpx solid #49bdfb;
	}

	.goods-status {
		text-align: right;
		background-color: #fff;
		padding: 20rpx;
	}

	.goods-content {
		padding: 10rpx 20rpx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.goods-text {
		width: 360rpx;
		padding: 0 10rpx;
		font-size: 26rpx;
	}

	.goods-img {
		width: 160rpx;
		height: 160rpx;
	}

	.goods-size {
		font-size: 24rpx;
	}

	.total-price {
		align-items: center;
		font-weight:bold;
		background-color: #fff;
		padding: 10upx;
	}

	.payment {
		display: flex;
		justify-content: flex-end;
		background-color: #fff;
		padding: 20rpx;
	}

	.payment-text {
		border: 2rpx solid #49bdfb;
		line-height: 40rpx;
		padding: 6rpx 40rpx;
		border-radius: 30rpx;
	}

	.no-order {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.no-order-home {
		padding: 6rpx 60rpx;
		border: 2rpx solid #49bdfb;
		color: #49bdfb;
		border-radius: 40rpx;
	}

	.no-order-text {
		padding: 50rpx;
		;
	}
	.text{
		display: flex;
		justify-content: flex-end;
	}
</style>
