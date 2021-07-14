<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <span>{{ item.title }}</span>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.recommend {
  width: 100%;
  display: flex;
  height: 150px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  margin: 10px 0 0 7px;
}
.recommend-item img {
  width: 80px;
  height: 80px;
  margin-bottom: 2px;
}
.recommend-item span {
  font-size: 14px;
  margin-left: 11px;
}
</style>
