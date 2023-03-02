<template>
	<view>
		<view class="hei">
		</view>
		<view @click="handleAddress" class="bai conts padding flex align-center justify-between">
			<view class="" v-if="orderAddress">
				<view class="fs-30">
					{{orderAddress.username}}
					<view class="cuIcon-phone fs-28">
						{{orderAddress.phone}}
					</view>
				</view>

				<view class="">
					{{orderAddress.city}} {{orderAddress.region}} {{orderAddress.detail}}
				</view>
			</view>
			<view class="" v-else>
				请选择地址
			</view>
			<text class="cuIcon-right"></text>
		</view>
		<view class="hei">

		</view>
		<u-picker :show="timeshow" title="请选择配送时间" @close="timeshow = false" @cancel="timeshow = false"
			@confirm="timeconfirm" :closeOnClickOverlay=true :columns="columns"></u-picker>
		<u-calendar showLunar :formatter="formatter" :show="dateshow" @close="dateshow = false" @confirm="dateconfirm">
		</u-calendar>
		<view class="bai align-center">
			<view class="flex justify-between padding">
				<view class="fs-32">
					配送时间:
				</view>
				<view class="peisong justify-between align-center flex">
					<view class="date padding-right align-center" @click="dateshow=true">
						{{date==''?'请选择配送日期':date}}
						<text class="text1" :class="date==''?'cuIcon-unfold':''"></text>
					</view>
					<view class="time align-center" @click="timeshow=true">
						{{time==''?'请选择配送时间':time}}
						<text class="text2" :class="time==''?'cuIcon-unfold':''"></text>
					</view>
				</view>
			</view>
		</view>
		<view class="hei">

		</view>
		<view class="bai flex align-center padding">
			<view class="padding-right">
				订单留言(选填):
			</view><u--input class="padding" placeholder="请输入内容" border="surround" v-model="value" @change="change"></u--input>
		</view>
		<view class="hei">
			
		</view>
		<view class="flex bai padding" v-for="(item,index) in cartList" v-if="item.ischeck==true" :key="index">
			<view class="flex align-center">
				<image class="poster margin-right" :src="item.img" mode=""></image>
			</view>
			<view class="flex justify-between info">
				<view class="">
					{{item.name}}
					<view class="margin-tb-xs">{{item.french}}</view>
					￥{{item.list[item.idx].price}}
				</view>
				<view class="flex flex-direction padding-top-sm align-end">
					<view class="bianji margin-bottom-xs">
						<text @click="handleEdit(index)" class="iconfont icon-bianjishuru"
							style="color: #666666;"></text>
					</view>
					<view class="wenzi">
						{{item.list[item.idx].spec}}
						X
						{{item.num}}
					</view>
				</view>
			</view>
		</view>
		<view class="hei">

		</view>
		<view class="foot flex padding justify-between bg-fff align-center">
			<view class="">
				总计:￥{{allInfo.allPrice}}
			</view>
			<button @click="handleorder" class="cu-btn bg-brown">提交订单</button>
		</view>
		<!-- 弹窗 -->
		<u-overlay :show="show" @click="show = false">
			<view class="bg-fff margin cover-cont" @click.stop>
				<view class="padding">
					<view class="flex  iofo">
						<image class="poster margin-right" :src="cartList[cartIdx].img" mode=""></image>
						<view class="">
							{{cartList[cartIdx].name}}
							<view class="margin-tb-xs">{{cartList[cartIdx].french}}</view>
							￥{{checkedCartInfo.price}}
						</view>
					</view>
					<view class="flex justify-between padding-tb u-border-bottom">
						<view class="">
							规格选择
						</view>
						<view class="drop">
							<view @click="dropShow=true">
								{{checkedCartInfo.spec}}
								-
								{{checkedCartInfo.edible}}
								<text class="cuIcon-unfold"></text>
							</view>
							<view class="drop-list bg-fff" v-if="dropShow">
								<view hover-class="hover" v-for="(item,index) in cartList[cartIdx].list" :key="index"
									class="padding-sm" @click="handleDropList(index)">
									{{item.spec}} - {{item.edible}}
								</view>
							</view>
						</view>
					</view>
					<view class="flex justify-between align-center padding-tb-sm u-border-bottom">
						<view class="">
							数量选择
						</view>
						<u-number-box v-model="cartList[cartIdx].num" button-size="26" @change="handleNum">
						</u-number-box>
					</view>
				</view>
				<view class="flex">
					<button @click="show=false" type="default" class="cu-btn lg "
						style="background-color: #857a72; color: #fff;">取消</button>
					<button @click="handleOk" type="default" class="cu-btn lg bg-yellow">确认</button>
				</view>
			</view>
		</u-overlay>
	</view>
</template>

<script>
	import {
		mapGetters,
		mapState
	} from 'vuex'
	export default {
		data() {
			return {
				value: '',
				dateshow: false,
				timeshow: false,
				mode: 'date',
				show: false,
				dropShow: false,
				cartIdx: 0, //主商品序号
				dropIdx: 0, //子商品序号
				num: 1, //当前弹窗商品数量
				isNav: false,
				date: '',
				time: '',
				columns: [
					['10:00-12:00', '13:00-15:00', '16:00-18:00']
				],
			}
		},
		computed: {
			...mapGetters({
				'orderAddress': 'address/orderAddress',
				'allInfo': 'cart/allInfo'
			}),
			...mapState({
				cartList: state => state.cart.cartList,
			}),
			checkedCartInfo(res) { //过滤下拉选中的商品对象
				let {
					cartIdx,
					cartList,
					dropIdx
				} = this
				return cartList[cartIdx].list[dropIdx]
				
			}
		},
		methods: {
			change(e) {
				this.message = e
			},
			formatter(day) {
				const d = new Date()
				let month = d.getMonth() + 1
				const date = d.getDate()
				if (day.month == month && day.day == date + 3) {
					day.bottomInfo = '有优惠'
					day.dot = true
				}
				return day
			},
			handleAddress() {
				uni.navigateTo({
					url: '../address/address',
				});
			},
			handleEdit(idx) { //弹窗
				this.cartIdx = idx
				this.show = true
			},
			handleDropList(dropIdx) { //子商品下拉列表
				this.dropShow = false
				this.dropIdx = dropIdx
			},
			handleOk() { //弹窗确定
				this.show = false
				let {
					cartIdx,
					dropIdx,
					num
				} = this
				this.$store.commit('cart/cartListCheckMut', {
					cartIdx,
					dropIdx,
					num
				})
			},
			handleNum({
				value
			}) {
				this.num = value
			},
			dateconfirm(e) {
				this.date = e[0]
				this.dateshow = false
			},
			timeconfirm(e) {
				this.time = e.value[0]
				this.timeshow = false
			},
			handleorder() {
				let date = this.date
				let time = this.time
				let orderAddress = this.orderAddress
				let cartList = this.cartList
				let money = this.allInfo.allPrice
				let message = this.message
				// if(orderAddress==null){
				// 	uni.showToast({
				// 		title: '您还未选择配送地址',
				// 		icon:'none'
				// 	});
				// 	return
				// }
				// if(date==''||time==''){
				// 	uni.showToast({
				// 		title: '您还未选择配送日期或配送时间',
				// 		icon:'none'
				// 	});
				// 	return
				// }else{
					let orderList = {date,message,time,orderAddress,cartList,money}
					// this.$store.dispatch('order/orderList',orderList)
					uni.setStorage({
						key:'orderList',
						data:orderList
					})
					uni.navigateTo({
						url: '../pay/pay?money='+money
					})
				// }
			},
		}
	}
</script>

<style>
	page {
		background-color: #ffffff;
		padding-bottom: 150upx;
	}

	.hei {
		width: 100%;
		height: 20upx;
		background-color: #e6e6e6;
	}

	.bai {
		width: 100%;
		background-color: #ffffff;
	}

	.poster {
		width: 180upx;
		height: 180upx;
		background-color: #ffffff;
	}

	.info {
		width: 60%;
	}

	.cu-btn.lg {
		width: 50%;
		border-radius: 0%;
	}

	.foot {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 3;
		border: 1px solid #e6e6e6;
		background-color: #;
	}

	.bianji {
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		background-color: #e6e6e6;
		border-radius: 50%;
	}

	.cont {
		position: fixed;
		bottom: 90upx;
		left: 0;
		width: 100%;
		z-index: 3;
		border: 0.1px solid #eeeeee;
	}

	.cover-cont {
		position: absolute;
		top: 50%;
		left: 6%;
		width: 80%;
		transform: translateY(-50%);
		border-radius: 10upx;
	}

	.drop {
		position: relative;
	}

	.drop-list {
		width: 300upx;
		top: 60upx;
		right: 0;
		position: absolute;
		box-shadow: 0 0 10upx 2upx rgba(0, 0, 0, 0.2);
		z-index: 300;
	}

	.hover:hover {
		background-color: #4ccfff;
	}

	.wenzi {
		white-space: nowrap;
	}
	.peisong{
		position: absolute;
		margin-left: 220upx;
		margin-top: 5upx;
	}
	.date{
		margin-right: 50upx;
	}
</style>
