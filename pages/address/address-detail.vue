<template>
	<view>
		<map class="map"></map>
		<form @submit="handleSubmit">
			<view class="cu-form-group margin-top">
				<view class="title">
					<text class="cuIcon-friendfill"></text>
				</view>
				<input name="username" value="谭磊" v-model="address.username" class="text-right"
					placeholder="请输入姓名"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-mobilefill"></text>
				</view>
				<input name="phone" value="123456789" v-model="address.phone" class="text-right"
					placeholder="请输入电话"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-locationfill"></text>
				</view>
				<picker :range="regionArr" @change="handleRegion">
					<view class="picker">
						{{regionIdx==-1?'请选择区域':regionArr[regionIdx]}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">
					<text class="cuIcon-locationfill"></text>
				</view>
				<input name="detail" value="湖南开放大学" v-model="address.detail" class="text-right"
					placeholder="请输入详细地址"></input>
			</view>
			<view class="padding">
				<button form-type="submit" class="cu-btn bg-brown block">
					确定
				</button>
			</view>
		</form>
	</view>
</template>

<script>
	import {
		mapState
	} from 'vuex'
	import address from '../../store/address';
	export default {
		data() {
			return {
				address: [],
				list: [],
				regionArr: [
					'雨花区',
					'天心区',
					'岳麓区',
					'望城区',
					'芙蓉区',
					'开福区'
				],
				idx: 0,
				regionIdx: -1
			}
		},
		computed: {
			...mapState({
				userInfo: state => state.user.userInfo,
			})
		},
		onLoad(e) {
			if (e.data) {
				uni.setNavigationBarTitle({
					title: "修改地址"
				})
				let results = JSON.parse(e.data)
				this.address = results.item
				this.idx = results.index
			}
		},
		methods: {
			handleRegion(ev) {
				let {
					value
				} = ev.detail
				this.regionIdx = value
			},
			handleSubmit(ev) {
				let objectId = this.address.objectId
				if (!objectId) {
					let {
						value
					} = ev.detail
					let {
						regionArr,
						regionIdx
					} = this
					value.city = '长沙市'
					value.region = regionArr[regionIdx]
					value.isicon = false
					value.userid = this.userInfo.objectId
					this.$store.dispatch('address/addressAddAct', value)
				} else {
					let idx = this.idx
					let city = '长沙市'
					let isicon = this.address.isicon
					let username = this.address.username
					let phone = this.address.phone
					let regionIdx = this.regionIdx
					let region = this.regionArr[regionIdx]
					let detail = this.address.detail
					let objectId = this.address.objectId
					let address = {idx,city,isicon,username,phone,region,detail,objectId}
					this.$store.dispatch('address/addressPutAct',address)
				};
			}
		}
	}
</script>

<style lang="scss">
	.map {
		height: 400upx;
		width: 100%;
	}
</style>
