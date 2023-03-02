<template>
	<view>
		<view class="margin-sm u-border padding-sm" v-for="(item,index) in addressList" :key="item.objectId"
			:class="{'icon':item.isicon}">
			<view class="icon-cont">
				默
			</view>
			<view class="flex justify-between padding-right-sm">
				<view class="flex align-center">
					<text @click="handleCheckAddress(index)" :class="checkIdx==index?'color-yellow':''"
						class="iconfont icon-tucenggouxuan margin-right" style="color: #bfbfbf;"></text>
					<view class="">
						{{item.username}}，{{item.phone}}
						<view class="">
							{{item.city}} {{item.region}} {{item.detail}}
						</view>
					</view>
				</view>
				<view @click="handlePut(index)" class="bianji margin-bottom">
					<text class="iconfont icon-bianjishuru" style="color: #666666;"></text>
				</view>
			</view>
			<view class="flex justify-around align-center margin-top-sm">
				<view class="" @click="handleIcon(index)">
					{{item.isicon?"默认地址":"设为默认"}}
				</view>
				<u-line length="17" color="#000000" direction="col"></u-line>
				<view @click="handledel({objectId:item.objectId,idx:index})" class="cuIcon-delete">
					删除地址
				</view>
			</view>
		</view>
		<view class="text-center">
			<button @click="handleAddaddress" class="cu-btn bg-brown">新增地址</button>
		</view>
	</view>
</template>

<script>
	import {
		mapState,
		mapMutations
	} from 'vuex'
	import address from '../../store/address.js'
	import {
		$delete,$get
	} from '../../utils/request.js'
	export default {
		data() {
			return {

			}
		},
		computed: {
			...mapState({
				addressList: state => state.address.addressList,
				checkIdx: state => state.address.checkIdx
			})
		},
		methods: {
			handlePut(index) {
				let address = JSON.stringify({
					index: index,
					item: this.addressList[index]
				});
				uni.navigateTo({
					url: 'address-detail?data=' + address
				})
			},
			handledel(res) {
				this.$store.commit('address/addressDelMut', res.idx)
			},
			handleIcon(idx) {
				let obj = {
					"requests": []
				}
				this.addressList.forEach((item, i) => {
					let bool = i === idx
					obj.requests.push({
						"method": "PUT",
						"path": `/1.1/classes/address/${item.objectId}`,
						"body": {
							"isicon": bool
						}
					})
					this.$post('/1.1/batch', obj).then(res => { //批量操作在线数据
						this.$store.commit('address/addressIconMut', idx)
					})
				})
			},
			...mapMutations({
				'handleCheckAddress': 'address/addressCheckMut'
			}),
			handleAddaddress() {
				uni.navigateTo({
					url: './address-detail'
				})
			},
		}
	}
</script>

<style lang="scss">
	.bianji {
		width: 60upx;
		height: 60upx;
		text-align: center;
		line-height: 60upx;
		background-color: #e6e6e6;
		border-radius: 50%;
	}

	.icon-cont {
		display: none;
	}

	.icon {
		position: relative;
		overflow: hidden;

		.icon-cont {
			padding: 40upx 0 0 0;
			width: 100upx;
			background-color: #fae456;
			position: absolute;
			text-align: center;
			top: -35upx;
			right: -50upx;
			transform: rotate(45deg);
			font-size: 12upx;
			display: block;
		}
	}
</style>
