<template>
    <div>
        <div class="allGoods">
            <ul class="side">
                <li v-for="item in all_data" :key="item.id"
                :class="[item.id==n?'active':'']"
                @click="tabs(item.id)">
                    {{item.title}}
                </li>
            </ul>
            <ul class="shopping">
                <li v-for="(item,index) in goods" :key="index"
                @click="goDetails(item.number)">
                    <img :src="item.img_url" >
                    <div class="info">
                        <p class="text_over">{{item.title}}</p>
                        <p class="red">￥{{item.price}}</p>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
import all_data from '../../../static/data/AllData'
import {mapGetters} from 'vuex'
export default {
    data() {
        return {
            all_data,
            goods:[],
            n:1
        }
    },
    beforeMount() {
        this.tabs(this.n)
    },
    methods: {
       tabs(id){
           //active最好做个动画效果 那样更好看
           all_data.forEach(item => {
               if(item.id == id){
                   console.log(item.message)
                   this.goods = item.message
                   this.n = id
                   return
               }
           });
       },
       goDetails(n){
        //    这里应该还要加上ID的但是只是测试写就没加ID
           wx.navigateTo({
               url: '../details/main?number='+n,
           })
       }
    },
    onShow(){
        if(this.carCount>0){
            wx.setTabBarBadge({
                index: 1,
                // text: count.toString()
                text:this.carCount.toString()
            })
        }  
    },
    computed: {
        ...mapGetters({
            carCount:'getCarCount'
        })
    },
}
</script>
<style>
.active{
    background: rgb(229, 255, 0);
}
.red{
    color: red;
}
img{
    vertical-align: bottom;
}
.allGoods{
    display: flex;
    position: relative;
}
.side{
   flex: 1;
   background: #eeeeee;
   height: 1110rpx;
}
.side li {
    line-height: 60rpx;
    position: relative;
    padding: 12rpx;
}
li.active::before {
    display: flex;
    content: '';
    height: 100%;
    background: red;
    width: 10rpx;
    position: absolute;
    left: 0;
    top: 0;
}
.shopping{
    background: white;
    height: 100%;
    flex: 3;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 16rpx;
}
.shopping li{
    width: 256rpx;
    height: 440rpx;
    border: 4rpx solid #dddddd;
    border-radius: 10rpx;
    margin-bottom: 10rpx;
}
.shopping img{
    width: 256rpx;
    height: 300rpx;
    border-radius: 10rpx 10rpx 0 0;
}
.info{
    font-size: 30rpx;
    padding: 6rpx 10rpx;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 130rpx;
}
.text_over{
    letter-spacing: 2rpx;
    line-height: 36rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
</style>