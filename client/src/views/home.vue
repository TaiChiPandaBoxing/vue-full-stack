<template>
  <div class="container">
    <div class="search-bar">
      <van-row gutter="5">
          <van-col span="3">
            <img :src="locationIcon" class="location-icon"/>
          </van-col>
          <van-col span="16">
            <input type="text" v-model.lazy="keyWords" class="search-input"/>
            <span>{{keyWords}}</span>
          </van-col>
          <van-col span="5">
            <van-button size="mini" class="search-btn" @click="searchHandle">查找</van-button>
          </van-col>
      </van-row>
    </div>
    <div class="swiper-area">
      <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(banne, index) in bannerPicArray" :key="index">
          <img v-lazy="banne.image" width="100%" alt="banner">
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="type-bar">
      <div  v-for="(cate, index) in category" :key="index" >
        <img v-lazy="cate.image"/>
        <span>{{cate.mallCategoryName}}</span>
      </div>
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
      <div class="recommend-title">
        商品推荐
      </div>
      <div class="recommend-body">
        <!--swiper-->
        <swiper :options="swiperOption">
          <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
            <div class="recommend-item">
              <img :src="item.image" width="80%" />
              <!-- <div>{{item.goodsName}}</div> -->
              <div class="new-price">￥{{item.price | toMoney}}</div>
              <div class="old-price">(￥{{item.mallPrice | toMoney}})</div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
    <!--floor one area-->
    <div class="floor">
      <div class="floor-anomaly">
        <div class="floor-one">
          <img :src="floorData0.image" width="100%" />
        </div>
        <div>
          <div class="floor-two">
            <img :src="floorData1.image" width="100%" />
          </div>
          <div>
            <img :src="floorData2.image" width="100%" />
          </div>
        </div>
      </div>
      <div class="floor-rule">
        <div v-for="(item ,index) in floor1.slice(3)" :key="index">
          <img :src="item.image" width="100%" />
        </div>
      </div>
    </div>
    <!--Hot Area-->
    <div class="hot-area">
      <div class="hot-title">热卖商品</div>
      <div class="hot-goods">
        <!--这里需要一个list组件-->
        <van-list>
          <van-row gutter="20">
            <van-col span="12" v-for="( item, index) in hotGoods" :key="index">
              <div class="goods-info">
                <div class="goods-image">
                  <img v-lazy="item.image" width="90%" />
                </div>
                <div class="goods-name">{{item.name}}</div>
                <div class="goods-price">￥{{item.price | toMoney }}</div>
              </div>
            </van-col>
          </van-row>
        </van-list>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import { getShop } from '@/api/shop'
export default {
  data () {
    return {
      keyWords: '',
      locationIcon: require('../assets/images/location.png'),
      bannerPicArray: [],
      category: [],
      recommendGoods: [],
      floor1: [],
      hotGoods: [], // 热卖商品
      floorData0: {},
      floorData1: {},
      floorData2: {},
      swiperOption: {
        slidesPerView: 3,
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  created () {
    getShop().then(res => {
      if (res.status === 200) {
        this.bannerPicArray = res.data.data.slides
        this.category = res.data.data.category
        this.recommendGoods = res.data.data.recommend
        this.floor1 = res.data.data.floor1 // 楼层1数据
        this.floorData0 = this.floor1[0]
        this.floorData1 = this.floor1[1]
        this.floorData2 = this.floor1[2]
        this.hotGoods = res.data.data.hotGoods // 热卖商品
      }
    }).catch(err => {
      throw err
    })
  },
  methods: {
    searchHandle () {
      console.log(this.keyWords)
    }
  }
}
</script>

<style scoped lang='less'>
.search-bar{
  height: 100px;
  background-color: #e5017d;
  line-height: 100px;

}
.search-input{
  width:100%;
  height: 80px;
  border-top:0px;
  border-left:0px;
  border-right:0px;
  border-bottom: 1px solid white !important;
  background-color: #e5017d;
  color:#fff;
}
.location-icon{
  padding-top: 10px;
  padding-left: 16px;
  vertical-align: middle;
  box-sizing: border-box;
}
.search-btn {
  vertical-align: middle;
}
.swiper-area {
  width: 100%;
  height: 340px;
  clear: both;
  img {
    height: 340px;
    vertical-align: middle;
  }
}
.type-bar{
  background-color: #fff;
  margin: 8px;
  border-radius: 10px;
  font-size: 14px;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  div {
    padding: 14px;
    font-size: 12px;
    text-align: center;
    img {
      width: 90px;
    }
  }
}
.recommend-area{
  background-color: #fff;
  margin-top: 10px;
}
.recommend-title{
  padding: 8px;
  border-bottom: thin solid #eee;
  font-size: 14px;
  color: #e5017d;
}
.recommend-body{
  border-bottom: thin solid #eee;
}

.recommend-item{
  width: 99%;
  border-right: 1px solid #eee;
  font-size: 12px;
  text-align: center;
}
.new-price {
  font-size: 32px;
}
.old-price {
  text-decoration: line-through;
  color: #bbb;
  font-size: 16px;
}
.floor-anomaly {
  display: flex;
  flex-direction: row;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
}
.floor-anomaly div {
  width: 375px;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
.floor-one {
  border-right: 1px solid #ddd;
}
.floor-two {
  border-bottom: 1px solid #ddd;
}
.floor-rule {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fff;
}
.floor-rule div {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 375px;
  border-bottom: 1px solid #ddd;
}
.floor-rule div:nth-child(odd) {
  border-right: 1px solid #ddd;
}
.hot-area{
  text-align: center;
  font-size:14px;
  height: 1.8rem;
  line-height:1.8rem;
}
.goods-name{
  padding: 0 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
