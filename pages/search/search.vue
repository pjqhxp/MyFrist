<template>
	<view class="">
		<view class="flex flex-wrap">
			<view class="back padding cuIcon-back text-gray" @click="back">
			</view>
			<u-search class="search-form" bgColor="#f7f7f7" :showAction="true" actionText="搜索" :animation="true"
				placeholder="请输入关键词" @custom="handleSearch(keyword)" v-model="keyword"></u-search>
		</view>
		<line-line></line-line>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">最近搜索</view>
				<view class="cuIcon-delete" @tap="clearHistory(searchData)"></view>
			</view>
			<view class="f-color" v-if="searchData.length > 0">
				<view @tap="toSearchList(item.keyword)" class="search-name" v-for="(item,index) in searchData" :key="index">
					{{item.keyword}}
				</view>
			</view>
			<view v-else class="search-end f-color">
				暂无搜索记录
			</view>
		</view>
		<view class="search-item">
			<view class="search-title">
				<view class="f-color">热门搜索</view>
			</view>
			<view class="f-color">
				<view @click="daixi('黛西的旅行')" class="search-name">黛西的旅行</view>
				<view @click="tila('提拉米苏')" class="search-name">提拉米苏</view>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		$http,
		$delete
	} from '../../utils/request.js'
	export default {
		data() {
			return {
				keyword: '',
				searchData: []
			}
		},
		onLoad() {
			this.Data()
		},
		methods: {
			Data(){
				this.$get('/1.1/classes/searchData?order=-createdAt').then(res => {
					this.searchData = res.results
				})
			},
			// 判断关键词是否为空和跳转页面
			handleSearch(keyword) {
				if (this.keyword === '') {
					uni.showToast({
						title: "关键词不能为空",
						icon: 'none'
					})
				} else {
					uni.navigateTo({
						url: "/pages/search/search-list?keyword=" + keyword
					});
					this.addSearch();
				}
			},
			// 记录最近搜索词
			addSearch() {
				let batch = {
					"requests": []
				}
				batch.requests.push({
					"method": "POST",
					"path": "/1.1/classes/searchData",
					"body": {
						keyword: this.keyword
					}
				})
				this.$post('/1.1/batch', batch).then(res => {})
			},
			back() {
				uni.navigateBack({
					delta: 1
				});
			},
			// 清除搜索记录
			clearHistory(searchData) {
				uni.showModal({
					title: "重要提示",
					content: "是否要清除搜索记录?",
					cancelText: "取消",
					confirmText: "确定",
					success: (res) => {
						if (res.confirm) {
							this.searchData = [];
							let obj = {
								"requests": []
							}
							let len = searchData.length
							for (let i = 0; i < len; i++) {
								obj.requests.push({
									"method": "DELETE",
									"path": `/1.1/classes/searchData/${searchData[i].objectId}`,
								})
								this.$post('/1.1/batch', obj).then(res => {

								})
							}
						}
					}
				})
			},
			toSearchList(keyword) {
				uni.navigateTo({
					url: "/pages/search/search-list?keyword=" + keyword
				})
			},
			daixi(res){
				uni.navigateTo({
					url: "/pages/search/search-list?keyword=" + res
				})
			},
			tila(res){
				uni.navigateTo({
					url: "/pages/search/search-list?keyword=" + res
				})
			}
		}
	}
</script>
<style>
	page {
		background-color: #ffffff;
	}

	.back {
		font-size: 40upx;
	}

	.search-item {
		padding: 20rpx;
	}

	.search-title {
		display: flex;
		justify-content: space-between;
	}

	.search-name {
		padding: 4rpx 24rpx;
		background-color: #E1E1E1;
		display: inline-block;
		border-radius: 26rpx;
		margin: 10rpx;
	}

	.search-end {
		text-align: center;
	}
</style>
