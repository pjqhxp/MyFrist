<template>
	<view>
		<nav-custom></nav-custom>
		<view style="color: #fff; font-weight:bold;text-align: center;" class="fs-54 padding">
			产品介绍
		</view>
		<view style="color: #fff; text-indent: 2em; white-space: normal;" class="fs-32">
			<text class="">该产品源于湖南XX学院一名学生的毕业设计。做的不是很好，希望见谅！</text>
		</view>
		<view style="color: #fff; text-indent: 2em; white-space: normal;" class="fs-32 padding-top-sm">
			<text>联系电话：131XXXXXXXX</text>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style>
	page {
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
		
		justify-content: center;
		align-items: center;
	}
</style>
