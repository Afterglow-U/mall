<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 轮播图 -->
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" />
        </a>
      </van-swipe-item>
    </van-swipe>
    <!-- 推荐 -->
    <recommend-view :recommends="recommends"> </recommend-view>
    <!-- 流行 -->
    <feature-view></feature-view>
  </div>
</template>e

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import RecommendView from "views/home/childComps/RecommendView.vue";
import FeatureView from "views/home/childComps/FeatureView.vue";

import { getHomeMultidata } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    RecommendView,
    FeatureView,
  },
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  created() {
    // 请求多个数据
    // getHomeMultidata().then((res) => console.log(res));
    this.getHomeMultidata();
  },
  methods: {
    // 网络请求的相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
}
.home-bar {
  color: #fff;
  background-color: #ff8198;
}
.van-swipe-item img {
  width: 100%;
  height: 200px;
}
</style>
