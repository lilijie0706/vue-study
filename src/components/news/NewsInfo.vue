// NewsInfo.vue

<template>
  <div class="newsinfo-container">
    <h3 class="title">评论详情</h3>
    <p class="subtitle">
      <span>发表时间：</span>
      <span>点击：0次</span>
    </p>

    <hr />

    <div class="content"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsinfo: {}
    };
  },
  created() {
    this.getNewsInfo();
  },
  methods: {
    getNewsInfo() {
      //+ this.id
      this.$http.get("comment/hot?type=0&id=386538" + this.id).then(result => {
        console.log(result.status);
        console.log(result.comment);
        console.log(result.content);
        if (result.status == 200) {
          this.newsinfo = result.content;
        } else {
          Toast("获取新闻失败!");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.newsinfo-container {
  padding: 0 4px;
  .title {
    font-size: 12px;
    text-align: center;
    margin: 14px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
  .content {
  }
}
</style>