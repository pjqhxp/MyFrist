<template>
    <view class="payment-success">
        <view class="f-active-color">
            恭喜您支付成功
        </view>
        <view class="return-index" @click="goshouye">
            返回首页
        </view>
    </view>
</template>

<script>
    export default {
        data() {
            return {
                
            };
        },
        methods:{
            goshouye(){
                uni.switchTab({
                    url:'../shouye/shouye'
                })
            }
        }
    }
</script>

<style lang="scss">
.payment-success{
    position: absolute;
    left: 0;
    right: 0;
    bottom: 600upx;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.return-index{
    margin: 20rpx;
    color: #49bdfb;
    padding: 10rpx 60rpx;
    border: 2px solid #49bdfb;
    border-radius: 40rpx;
}
.f-active-color{
    font-size: 45rpx;
}
</style>

