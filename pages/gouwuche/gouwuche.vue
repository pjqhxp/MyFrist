<template>
	<view>
		<template v-if="cartList.length>0">
			<u-navbar height="100upx" title="购物车" :rightText="isNav? '完成' : '编辑'" @rightClick="isNav=!isNav"
				:safeAreaInsetTop="false">
				<view class="u-nav-slot" slot="left">
					<view class="action">
						<text class="cuIcon-people text-gray" @click="geren"></text>
					</view>
				</view>
			</u-navbar>
			<view class="flex padding" v-for="(item,index) in cartList" :key="item.id">
				<view class="flex align-center">
					<text class="iconfont icon-tucenggouxuan margin-right" style="color: #bfbfbf;"
						:class="item.ischeck?'color-yellow':''" @click="handleCheck(index)"></text>
					<image class="poster margin-right" :src="item.img" mode=""></image>
				</view>
				<view class="flex justify-between info">
					<view class="">
						{{item.name}}
						<view class="margin-tb-xs">{{item.french}}</view>
						￥{{item.list[item.idx].price}}
					</view>
					<view class="flex flex-direction padding-top-sm align-end">
						<view @click="handleEdit(index)" class="bianji margin-bottom-xs">
							<text class="iconfont icon-bianjishuru" style="color: #666666;"></text>
						</view>
						<view class="wenzi">
							{{item.list[item.idx].spec}}
							X
							{{item.num}}
						</view>
					</view>
				</view>
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
									<view hover-class="hover" v-for="(item,index) in cartList[cartIdx].list"
										:key="index" class="padding-sm" @click="handleDropList(index)">
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
			<template v-if="!isNav">
				<view class="cont fixed bg-fff flex">
					<view class="flex flex-sub padding align-center">
						<text class="iconfont icon-tucenggouxuan margin-right-xs" style="color: #bfbfbf;"
							:class="allInfo.allCheck?'color-yellow':''"
							@click="handleAllCheck(allInfo.allCheck)"></text>全选
						<view class="margin-left">
							共计:￥{{allInfo.allPrice}}.00
						</view>
					</view>
					<view @click="handleOrder" class="bg-yellow padding text-center color-fff">
						立即结算
					</view>
				</view>
			</template>
			<template v-else>
				<view class="cont fixed bg-fff flex">
					<view class="flex flex-sub padding align-center">
						<text class="iconfont icon-tucenggouxuan margin-right-xs" style="color: #bfbfbf;"
							:class="allInfo.allCheck?'color-yellow':''"
							@click="handleAllCheck(allInfo.allCheck)"></text>全选
					</view>
					<view @click="delcartList(cartList)" class="padding text-center color-fff"
						style="width: 22%;background-color: #000000;">
						删除
					</view>
				</view>
			</template>
		</template>
		<template v-else>
			<u-navbar height="100upx" title="购物车" :rightText="isNav? '完成' : '编辑'" @rightClick="isNav=!isNav"
				:safeAreaInsetTop="false">
				<view class="u-nav-slot" slot="left">
					<view class="action">
						<text class="cuIcon-people text-gray" @click="geren"></text>
					</view>
				</view>
			</u-navbar>
			<view class="cart-else flex">
				<text class="color-fff">囧~ 购物车还是空的~</text>
				<view class="empty-button" @click="goshopping">去选购</view>
			</view>
		</template>
	</view>
</template>
<script>
	import {
		mapState,
		mapMutations,
		mapGetters,
		mapActions
	} from 'vuex'
	import {
		$post,
		$delete,
		$put
	} from '../../utils/request.js'
	export default {
		data() {
			return {
				show: false,
				dropShow: false,
				cartIdx: 0, //主商品序号
				dropIdx: 0, //子商品序号
				num: 1, //当前弹窗商品数量
				isNav: false,
			}
		},
		computed: {
			...mapState({
				cartList: state => state.cart.cartList,
				userInfo: state => state.user.userInfo
			}),
			...mapGetters({
				allInfo: 'cart/allInfo'
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
			delcartList(res) {
				let obj = {
					"requests": []
				}
				let len = res.length
				let arr = []
				for (let i = 0; i < len; i++) {
					if (res[i].ischeck === true) {
						obj.requests.push({
							"method": "DELETE",
							"path": `/1.1/classes/cart/${res[i].objectId}`,
						})
						this.$post('/1.1/batch', obj).then(res => { //批量操作在线数据
						})
					} else {
						arr.push(res[i])
					}
				}
				this.$store.commit('cart/cartDelMut', arr)
			},
			...mapMutations({
				handleAllCheck: 'cart/cartAllCheckMut',
			}),
			handleCheck(idx) {
				let a = this.cartList[idx].ischeck
				let b = !a
				let obj = {
					"requests": []
				}
				let objectId = this.cartList[idx].objectId
				obj.requests.push({
					"method": "PUT",
					"path": `/1.1/classes/cart/${objectId}`,
					"body": {
						"ischeck": b
					}
				})
				$post('/1.1/batch', obj).then(res => { //批量操作在线数据
					this.$store.commit('cart/cartCheckMut', idx)
				})
			},
			handleEdit(idx) { //弹窗
				this.cartIdx = idx
				this.dropIdx = this.cartList[idx].idx //解决子商品数量不同，导致的弹窗渲染问题
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
			handleOrder() {
				uni.navigateTo({
					url: '../order/order'
				})
			},
			goshopping() {
				uni.switchTab({
					url: '/pages/shouye/shouye'
				})
			},
			geren() {
				uni.navigateTo({
					url: '/pages/my/my'
				})
			}
		},
		onLoad() {
			if (this.userInfo) {
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
</script>


<style lang="scss">
	page {
		padding: 120upx 0 120upx 0;
		background-color: #efefef;
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

	.cu-btn {
		margin-top: -20upx;
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
		bottom: 100upx;
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

	.cart-else {
		position: absolute;
		top: 50%;
		left: 0;
		width: 100%;
		transform: translateY(-50%);
		border-radius: 10upx;
		text-align: center;
		height: 100vh;
		background: url(../../static/bg.jpg);
		background-size: cover;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.empty-button {
		width: 300rpx;
		height: 90rpx;
		color: orange;
		border: 1rpx solid orange;
		text-align: center;
		line-height: 90rpx;
		border-radius: 48rpx;
		margin-top: 20upx;
	}

	.action {
		font-size: 37upx;
	}
</style>
