<template>
	<view class="goods-content">
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
				<view class="wenzi padding">
					{{item.list[item.idx].spec}}
					X
					{{item.num}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: Object,
			index: Number
		},
		name: "orderList",
		data() {
			return {

			};
		}
	}
</script>

<style lang="less">
	.conts {
		margin-top: 100upx;
	}

	.poster {
		width: 180upx;
		height: 180upx;
		background-color: #d8d8d8;
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
		border: 0.1px solid #eeeeee;
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
</style>
