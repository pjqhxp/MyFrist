<template>
	<view class="padding flex justify-between align-center">
		<view class="flex align-center">
			<text class="iconfont icon-canju"></text>
			<view class="fs-28 margin-left">{{title}}
				<view class="fs-14">{{entitle}}</view>
			</view>
		</view>
		<view class="">{{righttitle}}</view>
	</view>
</template>

<script>
	export default {
		name: "shouye-title",
		props:['title','entitle','righttitle'],
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss">
	.icon-canju {
		font-size: 60upx;
	}
</style>
