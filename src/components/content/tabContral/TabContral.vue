<template>
  <van-tabs v-model="active" @click="itemClick">
    <van-tab title="流行"></van-tab>
    <van-tab title="新款"></van-tab>
    <van-tab title="精选"></van-tab>
  </van-tabs>
</template>

<script>
export default {
  name: "TabContral",
  data() {
    return {
      active: 0,
    };
  },
  methods: {
    itemClick() {
      this.$emit("tabClick", this.active);
    },
  },
};
</script>

<style scoped>
/* .van-tabs {
  position: sticky;
  top: 43px;
  left: 0;
  right: 0;
  z-index: 9;
} */
</style>
