<template>
    <div class="index">
        <!-- 顶部的喇叭区域 -->
        <i-notice-bar icon="systemprompt" loop>
            2018年世界杯,将于6月14日至7月15日举行;2018年世界杯,将于6月14日至7月15日举行;
        </i-notice-bar>
        <!-- 轮播图区域，根据图片点击次数选取前5张图片进行播放 -->
        <swiper indicator-dots="true" autoplay="true">
            <swiper-item>
                <image src="/static/images/qb/01.png" />
            </swiper-item>
            <swiper-item>
                <image src="/static/images/qb/02.jpg" />
            </swiper-item>
            <swiper-item>
                <image src="/static/images/qb/03.jpg" />
            </swiper-item>
            <swiper-item>
                <image src="/static/images/qb/04.jpg" />
            </swiper-item>
            <swiper-item>
                <image src="/static/images/qb/05.jpeg" />
            </swiper-item>
        </swiper>
        <!-- 六宫格区域
        <i-grid>
            <i-grid-item>
                <i-grid-icon>
                    <image src="/static/images/grid/menu1.png" />
                </i-grid-icon>
                <i-grid-label>新闻</i-grid-label>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <image src="/static/images/grid/menu2.png" />
                </i-grid-icon>
                <i-grid-label>图片分享</i-grid-label>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <image src="/static/images/grid/menu3.png" />
                </i-grid-icon>
                <i-grid-label>商品购买</i-grid-label>
            </i-grid-item>
        </i-grid>
        <i-grid>
            <i-grid-item>
                <i-grid-icon>
                    <image src="/static/images/grid/menu4.png" />
                </i-grid-icon>
                <i-grid-label>留言反馈</i-grid-label>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <image src="/static/images/grid/menu5.png" />
                </i-grid-icon>
                <i-grid-label>视频专区</i-grid-label>
            </i-grid-item>
            <i-grid-item>
                <i-grid-icon>
                    <image src="/static/images/grid/menu6.png" />
                </i-grid-icon>
                <i-grid-label>联系我们</i-grid-label>
            </i-grid-item>
        </i-grid> -->
        <!-- 没有路由跳转页面很丑，是否使用tabbar考虑下 原生的wxtabbar功能太少 -->
        <!-- 经典案例 -->
       <div class="case">
           <div class="case_top">

               <div class="case_hot">
                   <p>HOT</p>
               </div>
               <div class="case_line_text">
                       <p>CLASSIA CASE</p>
                    <div class="line"></div>
               </div>
               <p class="case_botom">经典案例</p>
           </div>
           <ul class="case_img_list">
               <li>
                   <img src="/static/images/qb/01.png">
                   <div class="info">
                       <h4>某某山庄复古全屋</h4>
                       <p>高端大气上档次</p>
                   </div>
               </li>
               <li>
                   <img src="/static/images/qb/01.png">
                   <div class="info">
                       <h4>某某山庄复古全屋</h4>
                       <p>高端大气上档次</p>
                   </div>
               </li>
               <li>
                   <img src="/static/images/qb/01.png">
                   <div class="info">
                       <h4>某某山庄复古全屋</h4>
                       <p>高端大气上档次</p>
                   </div>
               </li>
           </ul>
       </div>
       <!-- 现代简欧 -->
       <div class="jianou">
           <div class="joTop">
               <img src="/static/images/qb/title_one.jpg">
               <div class="title_text">
                   <h3>MODERN EURPOPEAN</h3>
                    <p>现代简欧</p>
                    <div class="title_box">
                        <span>简洁大气 优雅质感</span>
                    </div>
               </div>
           </div>
           <div class="jo_list">
                <ul>
                    <li v-for="item in qbinfo" :key="item.number">
                        <img :src="item.img_url" />
                        <div class="imginfo">
                            <p class="text_over">{{item.text}}</p>
                            <div class="qbinfo">
                                <p>销量：<span>{{item.sales_qty}}</span></p>
                                <div class="qbinfo_bot">
                                    <p class="price">￥{{item.price}}</p>
                                    <div class="icon_box" @click="addToCar(item.number)">
                                        <i-icon type="publishgoods_fill" size="20" color="#fff" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
       </div>
       <!-- 刺绣 -->
       <div class="jianou">
           <div class="joTop">
               <img src="/static/images/qb/title_two.jpg">
               <div class="title_text">
                   <h3>EMBROIDERY&FLOCKING</h3>
                    <p>刺绣植绒墙布</p>
                    <div class="title_box">
                        <span>刺绣无纺 立体绣花</span>
                    </div>
               </div>
           </div>
           <div class="jo_list">
                <ul>
                    <li v-for="item in qbinfo" :key="item.number">
                        <img :src="item.img_url" />
                        <div class="imginfo">
                            <p class="text_over">{{item.text}}</p>
                            <div class="qbinfo">
                                <p>销量：<span>{{item.sales_qty}}</span></p>
                                <div class="qbinfo_bot">
                                    <p class="price">￥{{item.price}}</p>
                                    <div class="icon_box" @click="addToCar(item.number)">
                                        <i-icon type="publishgoods_fill" size="20" color="#fff" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
       </div>
    </div>
</template>
<script>
import {mapState,mapGetters} from 'vuex'
export default {
    data() {
        return {

        }
    },
    beforeMount() {
        this.$store.dispatch('addData')
        
    },
    methods: {
        addToCar(id){
            // console.log(id)
            this.$store.dispatch('addToCar',{id})
            // 小程序加载完毕就该获取本地存储，下次修改
            // const count = this.$store.getters.getCarCount
            // console.log(count)
            wx.setTabBarBadge({
                index: 1,
                // text: count.toString()
                text:this.carCount.toString()
            })
        }
       
    },
    computed: {
        ...mapState(['qbinfo']),
        ...mapGetters({
            carCount:'getCarCount'
        })
    },
    watch: {
        carCount:function(newVa){
            console.log(newVa)
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
    }

}
</script>
<style>
swiper{
    width: 100%;
    height: 480rpx;
}
swiper image{
    width: 100%;
    height: 480rpx;
}
.case{
    margin-top: 20rpx;
}
.case_top{
    width: 100%;
    height: 200rpx;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
.case_hot p{
    font-size: 30rpx;
    height: 72rpx;
    width: 72rpx;
    border-radius: 50%;
    background-color: chocolate;
    color: white;
    line-height: 72rpx;
    text-align: center;
}
.case_line_text{
    width: 100%;
    position: relative;
}
.case_line_text p{
    width: 186rpx;
    background: #ffffff;
    color: chocolate;
    font-size: 26rpx;
    margin: 0 auto;
}
.line{
    width: 66%;
    height: 4rpx;
    background-color: chocolate;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    z-index: -1;
}
.case_botom{
    width: 100%;
    text-align: center;
    color: chocolate;
    font-weight: bold;
}
.case_img_list{
    display: flex;
    height: 520rpx;
    padding: 0 20rpx;
    overflow: auto;
}
.case_img_list li{
    height: 100%;
    margin-right: 10rpx;
}
.case_img_list img{
    width: 600rpx;
    height: 400rpx;
    border-radius: 10rpx;
}
.case_img_list h4{
    font-size: 30rpx;
}
.case_img_list p{
    font-size: 26rpx;
    color: #a39f9f;

}

.jianou{
    border-top:10rpx solid #dddddd;
}
.joTop{
    position: relative;
}
.joTop img{
    height: 200rpx;
    width: 100%;
}
.title_text{
    top: 0;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    height: 200rpx;
    width: 100%;
    color: white;
    position: absolute;
}
.joTop h3{
    font-weight: bold;
}
.jo_list{
    width: 100%;
}
.jo_list ul{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 12rpx;
    width: 97%;

}
.jo_list li{
    width: 49%;
    margin-bottom: 20rpx;
    background: white;
    border-radius: 12rpx;
    background: #eeeeee;
}
.jo_list img {
    width: 100%;
    height: 400rpx;
    border-radius: 12rpx 12rpx 0 0;
}
.imginfo{
    font-size: 28rpx;
}
.text_over{
    letter-spacing: 2rpx;
    line-height: 36rpx;
    font-size: 25rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
}
.title_box{
    height: 30rpx;
    font-size: 26rpx;
    width: 300rpx;
    border: 4rpx solid white;
    border-radius: 30rpx;
    text-align: center;
    line-height: 30rpx;
}
.qbinfo{
    width: 100%;
    height: 120rpx;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
}
.qbinfo p{
    color:#f44336;
    font-size: 26rpx;
}
.qbinfo_bot{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.price{
    color: #f44336;
    font-weight: bold;
    font-size: 36rpx;
}
.icon_box{
    width: 50rpx;
    height:50rpx;
    background: #f44336;
}
</style>