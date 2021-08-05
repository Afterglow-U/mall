<template>
  <div id="home">
    <!-- 导航栏 -->
    <nav-bar class="home-bar">
      <div slot="center">购物车</div>
    </nav-bar>
    <!-- 滚动插件 -->
    <scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <!-- 轮播图 -->
      <home-swiper :banners="banners"></home-swiper>
      <!-- 推荐 -->
      <recommend-view :recommends="recommends"> </recommend-view>
      <!-- 流行 -->
      <feature-view></feature-view>
      <!-- 商品切换栏 -->
      <tab-contral @tabClick="TabClick"></tab-contral>
      <!-- 商品数据 -->
      <goods-list :goods="showGoods"></goods-list>
    </scroll>
    <!-- 回到顶部 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
import HomeSwiper from "views/home/childComps/HomeSwiper.vue";
import RecommendView from "views/home/childComps/RecommendView.vue";

import FeatureView from "views/home/childComps/FeatureView.vue";
import TabContral from "components/content/tabContral/TabContral";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { debounce } from "common/utils";
import { getHomeMultidata, getHomeGoods } from "network/home.js";
export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabContral,
    GoodsList,
    Scroll,
    BackTop,
    debounce,
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",

      isShowBackTop: false,
      saveY: 0,
    };
  },
  created() {
    // 请求多个数据
    // getHomeMultidata().then((res) => console.log(res));
    this.getHomeMultidata();
    // getHomeGoods("pop", 1).then((res) => console.log(res));
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {
    // 监听item中图片加载完成  非父子组件的通信 $bus.$emit/$on
    const refresh = debounce(this.$refs.scroll.refresh);
    this.$bus.$on("itemImageLoad", () => {
      refresh();
      //     function (...args) {
      //   if (timer) clearTimeout(timer);
      //   timer = setTimeout(() => {
      //     func.apply(this, args);  func = this.$refs.scroll.refresh
      //   }, delay);
      // };
    });
  },
  destroyed() {},
  activated() {
    this.$refs.scroll.scrollTo(0, this.saveY, 0);
    this.$refs.scroll.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroll.getScrollY();
  },

  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    // BScroll的配置方法
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    // 判断BackTop是否显示
    contentScroll(position) {
      this.isShowBackTop = -position.y > 670;
    },

    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },

    // 切换商品数据
    TabClick(active) {
      switch (active) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    // 网络请求的相关方法
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-bar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 66;
  color: #fff;
  background-color: #ff8198;
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
