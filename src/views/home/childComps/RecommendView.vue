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
  display: flex;
  height: 150px;
  border-bottom: 10px solid #eee;
}
.recommend-item {
  flex: 1;
  margin: 8px 0 0 4px;
}
.recommend-item img {
  width: 86px;
  height: 86px;
  margin-bottom: 2px;
}
.recommend-item span {
  font-size: 14px;
  margin-left: 14px;
}
</style>
