<template>
    <div class="shopping">
        <div class="center" v-if="flag">
            <p>你的购物车中没有商品哦！</p>
            <div class="gohome" @click="gohome">
                去首页逛逛吧
            </div>
        </div>
        <div class="carInfo_list" v-if="!flag">
            
            <div class="carBox" v-for="(item, index) in carList" :key="index">
                 <!-- <i-cell title="基本用法">
                    <i-switch :value="item.switch1" @change="onChange(index)" slot="footer"></i-switch>
                </i-cell> -->
                <i-checkbox :checked="item.checked" @change="handleAnimalChange($event,index)"/>
                <div class="carinfos">
                    <img :src="item.img_url">
                    <div class="carText">
                        <h3>{{item.text}}</h3>
                        <p>价格：￥{{item.price}}/米</p>
                    </div>
                </div>
            </div>
            <div class="footer">
                 <div class="left">
                    <i-checkbox :checked="check" @change="allcheck">
                    </i-checkbox>
                    <i-icon type="trash" size="28" color="#80848f" @click="deleteGood" />
                 </div>
                 <div class="right">
                     <p>合计：￥82</p>
                     <i-button bind:click="handleClick" type="error">结算</i-button>
                 </div>
            </div>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
var deletearr = wx.getStorageSync('arr') || []
export default {
    data() {
        return {
            flag:true,
            carList:[],
            arr:deletearr,
            check:false
        }
    },
    beforeMount() {
        // console.log("car"+this.car.length)
        // 打开小程序首次进入car页面时进行判断，然后点击加入购物车之后应该在次进行判断 用mapstate不合适
        if(this.car.length){
            this.flag = false
        }else{
            this.flag = true
        }
        console.log(this.car)
        if(!this.flag){
            this.carList = this.car
        }
        
    },
    methods: {
        gohome(){
            wx.switchTab({
                url:'../index/main',
                success:()=>{
                    console.log('成功跳转')
                }
            })
        },
        // onChange(index){//数据绑定到state中 每次改变都将修改state中对应的数据
        //     this.$store.dispatch('updateCar',{index})
        //     // this.carList.forEach((item,i) => {
        //     //     if(index == i ){
        //     //         !item.switch1
        //     //         // console.log(item.switch1)
        //     //         // console.log(this.carList)
        //     //     }
        //     // });
        // },
        claer(){
            wx.clearStorage()
        },
        handleAnimalChange(e,index){
            if(e.mp.detail.current){
                this.arr.push(index)
                wx.setStorage({
                    key:"arr",
                    data:this.arr
                })
            }else{
                
            }
            this.$store.dispatch('updateCar',{index})
        },
        deleteGood(){
            console.log(this.arr)
            let arr = this.arr
            this.$store.dispatch('deletegoods',{arr})
            this.arr = []
             wx.setStorage({
                    key:"arr",
                    data:this.arr
            })
            if(this.arr.length==0){
                this.flag = true;
                console.log('购物车已清空')
            }
        },
        allcheck(e){
            this.check = e.mp.detail.current
            console.log(this.check)
            if(e.mp.detail.current){
                this.carList.forEach(item => {
                    item.checked = true;
                });
                let checked = e.mp.detail.current
                this.$store.dispatch('updatedCheck',{checked})
                //点击全选之后数据还要需要传递给删除的数组
            }
            

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
            car:'getCarInfo',
            carCount:'getCarCount'
        })
    },
    watch: {
       car:function(newv,oldv){
        // 监听数据改变同时监听数据长度
           if(newv){
               this.flag = false
               this.carList = newv
           }else{
               this.flag = true
           }
            console.log("car监听到的数据"+newv.length)
        }
    },  
}
</script>
<style>
.shopping{
    position: relative;
    height: 1110rpx;
    width: 100%;
    background: #eeeeee;
    
}
.center{
    position: absolute;
    height: 160rpx;
    width: 400rpx;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
}
.center p{
    color: #cccccc;
    font-size: 32rpx;
}
.gohome{
    border: 4rpx solid red;
    border-radius: 30rpx;
    width: 200rpx;
    text-align: center;
    font-size: 32rpx;
    color: red;
    line-height: 60rpx;
    padding: 4rpx 10rpx;
}
.carInfo_list{
    width: 100%;
    padding: 10rpx 10rpx 0 10rpx;
}
.carBox{
    width: 92%;
    padding:10rpx;
    height: 170rpx;
    background: white;
    border: 6rpx solid skyblue;
    border-radius: 10rpx;
    box-shadow: yellow 2rpx 2rpx 20rpx;
    display: flex;
    align-items: center;
    justify-content: space-around;
}
.carinfos{
    display: flex;
    justify-content: space-around;
    width: 80%;
    height: 170rpx;
}
.carinfos img{
    width: 160rpx;
    height: 160rpx;
}
.carText{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 60%;
}
.carText h3{
     letter-spacing: 2rpx;
    line-height: 36rpx;
    font-size: 30rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.footer{
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    bottom: 0;
    width: 100%;
    border-top:2rpx solid #000;
    background: white;
}
.left,.right{
    display: flex;
    align-items: center;
}
</style>