<template>
    <div>
        <!-- 顶部轮播图区域 应该把轮播图封装成子组件的 -->
        <swiper indicator-dots="true" autoplay="true">
            <swiper-item v-for="(item, index) in LuBoTu" :key="index">
                <image :src="item.img_url" />
            </swiper-item>
        </swiper>
        <div class="info">
            <h4>湖蓝色墙布</h4>
            <p class="gray">湖蓝色墙布</p>
            <p class="red">￥26.20</p>
        </div>
        <p>图文详情</p>
        <ul class="show_list">
            <li v-for="(item, index) in LuBoTu" :key="index" @click="dakai(item.img_url)">
                <img :src="item.img_url">
            </li>
        </ul>
        <!-- 固定在底部 -->
        <div class="footer">
            <div class="side">
                <i-icon type="homepage" size="28" @click="goHome"/>
                <i-icon type="customerservice" size="28" @click="kefu"/>
                <i-icon type="publishgoods_fill" size="28" @click="goCar" />
            </div>
            <div class="butt">
                <p class="r" @click="addCar">加入购物车</p>
                <p class="y">立即订购</p>
            </div>
        </div>
    </div>
</template>
<script>
import all_data from '../../../static/data/AllData'
import {mapGetters} from 'vuex'
const { $Toast } = require('../../../static/iview-weapp/base/index');
export default {
    data() {
        return {
            LuBoTu:[],
            message:[]
        }
    },
    beforeMount() {
        console.log(this.$mp.query.number)
        this.getLuBoTu();
    },
    methods: {
        getLuBoTu(){
            console.log(1)
            all_data.forEach(items => {
                console.log(items.message)
                items.message.forEach(item =>{
                    if(item.number == this.$mp.query.number){
                        this.message = item
                        this.LuBoTu = item.lunbotu
                        return
                    }
                })
            });
        },
        dakai(url){
            // 本地图片无法全屏
            // wx.previewImage({
            //      urls: []
            // })
        },
        addCar(){
            this.$store.dispatch('addToCar',{id:null,message:this.message})
        },
        goHome(){
            wx.switchTab({
            url: '../index/main'
            })
        },
        goCar(){
            wx.switchTab({
            url: '../shoppingCar/main'
            })
        },
        kefu(){
            $Toast({
                content: '暂未添加客服'
            });
        }
    },
    computed: {
        ...mapGetters({
             carCount:'getCarCount'
        })
    }
}
</script>
<style>
.gray{
    font-size: 24rpx;
    color:#eee;
}
.red{
    color:red;
}
.footer{
    height: 80rpx;
    width: 100%;
    background: #eeeeee;
    position: fixed;
    bottom: 0;
    display: flex;
    justify-content: space-around;
    align-items: center;
}
.side{
    flex: 1;
    display:flex;
    justify-content: space-around;
}
.butt{
    flex: 2;
    color:white;
    display: flex;
    justify-content: space-between;
    height: 100%;
    
}
.butt p{
    width:50%;
    height: 100%;
    text-align: center;
    line-height: 80rpx;
}
.r{
    background: red;
}
.y{
    background: yellow;
}
</style>