<template>
    <div class="member">
        <!-- 顶部红色背景区域 -->
        <div class="header">
            <div class="header_box">
                <div class="yu_e">
                    <p class="y_e">余额</p>
                    <p class="number">0.00</p>
                    <div class="cz">
                        充值
                    </div>
                </div>
                <div class="uInfo">
                    <img :src="userInfo.avatarUrl">
                    <p class="uName">{{userInfo.nickName}}___{{userInfo.gender==1?"♂":"♀"}}</p>
                    <p class="jibie">普通会员</p>
                </div>
                <div class="jifen">
                    <p class="jf">积分</p>
                    <p class="number">0.00</p>
                </div>
            </div>
        </div>
        <!-- 我的订单 -->
        <div class="order_form">
        <!--用盒子将图标 包起来 还是不平 下次修改采用定位 -->
            <div class="order_one">
                <div class="icon_one">
                    <i-icon type="activity" size="20" />
                </div>
                <p>我的订单</p>
            </div>
            <div class="order_two">
                <p>查看全部订单</p>
                <div class="icon_two">
                     <i-icon type="enter" size="20" />
                </div>
            </div>
        </div>
        <!-- ul列表 -->
        <div class="list">
            <ul>
                <li>
                    <div class="letf">
                        <i-icon type="label" size="18"/>
                        <p>砍价首页</p>
                    </div>
                    <i-icon type="enter" size="18" />
                </li>
                <li>
                    <div class="letf">
                        <i-icon type="redpacket" size="18" />
                        <p>领取优惠券</p>
                    </div>
                    <i-icon type="enter" size="18" />
                </li>
                <li>
                    <div class="letf">
                        <i-icon type="redpacket" size="18" />
                        <p>我的优惠券</p>
                    </div>
                    <i-icon type="enter" size="18" />
                </li>
                <li>
                    <div class="letf">
                        <i-icon type="like" size="18" />
                        <p>我的关注</p>
                    </div>
                    <i-icon type="enter" size="18" />
                </li>
                <li>
                    <div class="letf">
                        <i-icon type="coordinates" size="18" />
                        <p>收货地址管理</p>
                    </div>
                    <i-icon type="enter" size="18" />
                </li>
                <li>
                    <div class="letf">
                        <i-icon type="setup" size="18" />
                        <p>会员资料设置</p>
                    </div>
                    <i-icon type="enter" size="18" />
                </li>
            </ul>
        </div>

        <!-- 授权提示 -->
        <button v-if="canIUse" open-type="getUserInfo" @getuserinfo="bindGetUserInfo">授权登录</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            falg:false,
            canIUse: wx.canIUse("button.open-type.getUserInfo"),
            userInfo:{}

        }
    },
    beforeMount() {
        // wx.getSetting({
        //     success (res) {
        //         console.log(res.authSetting)
        //     },
        //     fail(){
        //         console.log("失败")
        //     }
        // })
    },
    methods: {
        bindGetUserInfo(e){
            console.log(e.mp.detail)
            this.userInfo = e.mp.detail.userInfo
        }
    },
}
</script>
<style>
.member{
    font-size: 34rpx;
}
.header{
    width: 100%;
    overflow: hidden;
}
.header_box{
    position: relative;
    padding-top: 60rpx;
    box-sizing: border-box;
    width:100%;
    height:400rpx;
    display: flex;
    justify-content: space-around;
}
.header_box:after {
    width: 140%;
    height: 400rpx;
    position: absolute;
    left: -20%;
    top:0;
    z-index: -1;
    content: '';
    border-radius: 0 0 46% 46%;
    background-color:#ff1744;
}
.number{
    color: #ffc400;
    font-size: 34rpx;
}
.yu_e{
    text-align: center;
    color: white;
}
.cz{
    width: 100rpx;
    height: 40rpx;
    border: 1px solid white;
    border-radius: 35rpx;
    font-size:28rpx;
    color: white;
    text-align: center;
    line-height: 36rpx; 
}
.uInfo {
    text-align: center;
    color: white;
    font-size: 30rpx;
}
.uInfo img{
    width: 110rpx;
    height: 110rpx;
    border: 6rpx solid white;
    border-radius: 50%;
}
.jifen{
    color: white;
}
.order_form{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20rpx;
    height: 80rpx;
    border-bottom: 2px solid #ddd;
}
.order_one,.order_two{
    display: flex;
    align-items: flex-start;
}
.order_two{
    color: #aaa6a6;
}
.order_form p{
    padding: 0 10rpx;
    font-size: 32rpx;
    line-height: 50rpx;
}
.list{
    border-top: 10rpx solid #dddddd;
    
}
.list li{
    padding: 0 10rpx;
    display: flex;
    justify-content: space-between;
    height: 90rpx;
    align-items: center;
    border-bottom: 6rpx solid #dddddd;
    width: 98%;
    color: #aaa6a6;
}
.letf{
    display: flex;
    color: #000;
}
.letf p{
    padding-left: 10rpx;
}
</style>