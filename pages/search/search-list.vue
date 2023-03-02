<template>
	<view>
		<view class="flex flex-wrap">
			<view class="back padding cuIcon-back text-gray" @click="back">
			</view>
			<u-search class="search-form" bgColor="#f7f7f7" :showAction="true" actionText="搜索" :animation="true"
				placeholder="请输入关键词" @custom="handleSearch(keyword)" v-model="keyword"></u-search>
		</view>
		<line-line></line-line>
		<view class="cake-item flex flex-wrap justify-between">
			<view class="shouye" v-for="(item,index) in gdata" :key="index">
				<view @click="handleDetail(gdata[index])">
					<image class="poster" :src="item.img" mode=""></image>
				</view>
				<view class="info-cont margin-left-sm">
					<view class="info flex align-center justify-between ">
						<view class="">
							<view class="fs-28">
								{{item.name}}
							</view>
							<view class="fs-14">
								{{item.french}}
							</view>
						</view>
						<view class="cart-bth margin-right-xs">
							<text class="iconfont icon-shouye1"></text>
						</view>
					</view>
					<view class="fs-20 padding-top-xs padding-bottom-xs">
						<text>￥</text>
						{{item.price}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		$http
	} from '../../utils/request.js'
	export default {
		data() {
			return {
				keyword:'',
				gdata:[],
			}
		},
		onLoad(e) {
			this.keyword = e.keyword
			this.Data()
		},
		methods: {
			handleSearch(){
				this.Data()
			},
			Data(){
				let url = `/1.1/classes/foods?where={"name":{"$regex":"^${this.keyword}.*","$options":"sixm"}}}`
				this.$get(url).then(res=>{
					this.gdata = res.results
				})
			},
			handleDetail(item){
				uni.setStorage({
					key:"seardetail",
					data:item,
					success() {
						uni.navigateTo({
							url:'/pages/detail/seardetail'
						})
					}
				})
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
				setTimeout(function() {
					window.location.reload();
				}, 100);
			},
		}
	}
</script>

<style lang="scss">
	page {
		background-color: #ffffff;
	}

	.back {
		font-size: 40upx;
	}
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
