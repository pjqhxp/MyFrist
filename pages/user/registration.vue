<template>
	<view class="box">
		<text class="fs-54">Registration</text>
		<view class="input-box">
			<text class="fs-26">用户名</text>
			<input v-model="info.username" class="input" type="text" name="" placeholder="请输入用户名" />
		</view>
		<view class="input-box">
			<text class="fs-26">密码</text>
			<input v-model="info.password" class="input" type="password" name="" placeholder="请输入密码" />
		</view>
		<view class="btn-box">
			<view class="button">
				<button class="button1" @click="gotoRegistration" type="primary">注册</button>
			</view>
		</view>
		<view class="links">已有账号？<view class="link-highlight" @click="gotoLogin">点此登陆</view>
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
			gotoLogin: function() {
				uni.navigateTo({
					url: 'login'
				});
			},
			gotoRegistration() {
				this.$post('/1.1/users', this.info).then(res => {
					console.log(res);
					let {
						objctId,
						code
					} = res
					let title = code === 202 ? '账号已被注册' : '注册成功'
					setTimeout(function(){
						uni.showToast({
							title,
							icon:'none'
						},1000)
					})
					if(title=="注册成功"){
						uni.navigateTo({
							url:'/pages/user/login'
						})
					}
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
		width: 100%;
		color: rgba(255, 255, 255, 0.9);
		border: 1px solid rgba(192, 119, 91, 0.7);
		background: rgba(192, 119, 91, 0.5);
		margin-left: -3upx;
		line-height: 70upx;
		align-items: center;
	}

	.links {
		text-align: center;
		margin-top: 40upx;
		font-size: 26upx;
		color: rgba(255, 255, 255, 0.9);

		view {
			display: inline-block;
			vertical-align: top;
			margin: 0 10upx;
		}

		.link-highlight {
			color: rgba(255, 255, 0, 1.0);
		}
	}
</style>
