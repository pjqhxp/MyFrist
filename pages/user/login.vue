<template>
	<view class="box">
		<text class="fs-54">Login</text>
		<view class="input-box">
			<text class="fs-26">用户名</text>
			<input v-model="info.username" class="input" type="text" name="" placeholder="请输入用户名" />
		</view>
		<view class="input-box">
			<text class="fs-26">密码</text>
			<input v-model="info.password" class="input" type="password" name="" placeholder="请输入密码" />
		</view>
		<view class="btn-box">
			<view @click="back" class="">
				返回主页
			</view>
			<view class="button">
				<button class="button1" type="primary" @click="handlogin">登录</button>
				<button class="button2" @click="gotoRegistration" type="primary">注册</button>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				info: {
				}
			}
		},
		onLoad() {

		},
		methods: {
			gotoRegistration: function() {
				uni.navigateTo({
					url: 'registration'
				});
			},
			handlogin() {
				this.$store.dispatch('user/userLoginAct',this.info)
			},
			back(){
				uni.switchTab({
					url:'/pages/shouye/shouye'
				})
			}
		}
	}
</script>

<style lang="scss">
	page {
		height: 100vh;
		background: url(../../static/bg.jpg);
		background-size: cover;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.box {
		width: 350px;
		height: 350px;
		border-top: 1px solid rgba(255, 255, 255, 0.5);
		border-left: 1px solid rgba(255, 255, 255, 0.5);
		border-bottom: 1px solid rgba(255, 255, 255, 0.3);
		border-right: 1px solid rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(10px);
		background: rgba(50, 50, 50, 0.2);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border-radius: 10px;
	}

	.fs-54 {
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 30px;
	}

	.input-box {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		margin-bottom: 10px;
	}

	.fs-26 {
		font-size: 13px;
		color: rgba(255, 255, 255, 0.9);
		margin-bottom: 5px;
	}

	.input {
		letter-spacing: 1px;
		font-size: 14px;
		box-sizing: border-box;
		width: 250px;
		height: 35px;
		border-radius: 5px;
		border: 1px solid rgba(255, 255, 255, 0.5);
		background: rgba(255, 255, 255, 0.2);
		outline: none;
		padding: 0 12px;
		color: rgba(255, 255, 255, 0.9);
		transition: 0.2s;
	}

	.btn-box {
		outline: none;
		display: block;
		width: 250px;
		text-align: end;
		text-decoration: none;
		font-size: 13px;
		color: rgba(255, 255, 255, 0.9);
	}

	.button {
		outline: none;
		margin-top: 10px;
		display: flex;
		font-size: 14px;
		border-radius: 5px;
		transition: 0.2s;
	}

	.button1 {
		width: 120px;
		height: 35px;
		color: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(192, 119, 91, 0.7);
		background: rgba(192, 119, 91, 0.5);
		line-height: 70upx;
		align-items: center;
	}

	.button2 {
		width: 120px;
		height: 35px;
		color: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(192, 119, 91, 0.7);
		background: rgba(192, 119, 91, 0.5);
		line-height: 70upx;
		align-content: center;
	}
</style>
