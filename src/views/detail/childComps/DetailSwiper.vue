<template>
  <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
    <van-swipe-item v-for="item in topImages">
      <img :src="item" alt="" />
    </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
  name: "DetailSwiper",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style scoped>
.van-swipe-item {
  height: 522px;
}
.van-swipe-item img {
  width: 100%;
  height: 100%;
}
</style>
