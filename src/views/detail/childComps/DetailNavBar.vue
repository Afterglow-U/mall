<template>
  <div class="detail-nav">
    <nav-bar>
      <div slot="left" class="back">
        <img src="~assets/img/common/back.svg" @click="backClick" />
      </div>
      <ul slot="center" class="center">
        <li
          v-for="(item, index) in titles"
          @click="itemClick(index)"
          :class="{ active: index === currentIndex }"
        >
          {{ item }}
        </li>
      </ul>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评价", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
    },
    backClick() {
      this.$router.back();
    },
  },
};
</script>

<style scoped>
.center {
  display: flex;
}
.center li {
  flex: 1;
}
.active {
  color: red;
}
.back img {
  margin-top: 15px;
  width: 15px;
  height: 15px;
}
</style>
