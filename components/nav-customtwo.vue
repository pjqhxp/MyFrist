<template>
	<view class="">
		<view class="cu-bar bg-white">
			<view class="action">
				<text class="cuIcon-back text-gray" @click="back"></text>
			</view>
			<view class="content text-bold">
				Tiramisu
			</view>
			<view class="action text-grey">
				<text class="cuIcon-cart" @click="gouwuche"></text>
				<u-line direction="col" length="15" margin="20upx" color="#000000"></u-line>
				<text class="cuIcon-sort" @click="fenlei"></text>
			</view>
		</view>
		<u-popup :show="show" mode="top" @close="close">
			<view class="popup">
				<u-grid col="4">
					<u-grid-item class="border" @click="click(baseListIndex)" v-for="(baseListItem,baseListIndex) in baseList" :key="baseListIndex">
						<u-icon :customStyle="{paddingTop:20+'rpx'}" :name="baseListItem.name" :size="32"></u-icon>
						<text class="grid-text">{{baseListItem.title}}</text>
					</u-grid-item>
				</u-grid>
			</view>
		</u-popup>
	</view>

</template>

<script>
	export default {
		name: "nav-custom",
		data() {
			return {
				show: false,
				baseList: [{
					name: 'gift',
					title: '最新活动'
				}, {
					name: 'car',
					title: '我的订单'
				}, {
					name: 'kefu-ermai',
					title: '关于我们'
				}, {
					name: 'map',
					title: '我的地址'
				},]
			};
		},
		methods: {
			back(){
				uni.switchTab({
					url:'/pages/shouye/shouye'
				})
			},
			gouwuche(){
				uni.switchTab({
					url:'/pages/gouwuche/gouwuche'
				})
			},
			fenlei() {
				this.show = true
			},
			close() {
				this.show = false
			},
			click(res){
				if(res==0){
					uni.showToast({
						title:"暂无最新活动",
						icon: 'loading'
					})
				}
				if(res==1){
					uni.navigateTo({
						url:'/pages/order/my-order'
					})
				}
				if(res==2){
					uni.navigateTo({
						url:'/pages/activity/activity'
					})
				}
				if(res==3){
					uni.navigateTo({
						url:'/pages/address/address'
					})
				}
			}
		}
	}
</script>

<style lang="scss">
	.cu-bar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 30000;
	}

	.popup {
		width: 100%;
		margin-top: 100upx;
	}
	.border{
		border: 0.1px solid #eeeeee;
	}
	 .grid-text {
	        font-size: 16px;
	        color: #8d8d8d;
	        padding: 10rpx 0 20rpx 0rpx;
	        box-sizing: border-box;
	    }
</style>
