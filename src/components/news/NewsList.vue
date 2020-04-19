<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media">
        <a href="javascript:;">
          <img
            class="mui-media-object mui-pull-left"
            src="https://aecpm.alicdn.com/simba/img/TB1PnoCJFXXXXamXVXXSutbFXXX.jpg"
          />
          <div class="mui-media-body">
            <h1>幸福</h1>
            <p class="mui-ellipsis">
              <span>发表时间：2012-12-12 12:12:12</span>
              <span>点击：0次</span>
            </p>
          </div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media" v-for="item in newslist" :key="item.commentId">
        <router-link :to="'/home/newsinfo/'+item.commentId">
          <img class="mui-media-object mui-pull-left" :src="item.user.avatarUrl" />
          <!-- "https://aecpm.alicdn.com/simba/img/TB1PnoCJFXXXXamXVXXSutbFXXX.jpg"  -->

          <div class="mui-media-body">
            <!-- <h1>{{item.id}}==={{item.name}}</h1> -->
            <h1>{{item.content}}</h1>
            <p class="mui-ellipsis">
              <span>发表时间：{{item.time|dataFormat}}</span>
              <span>点击：0次</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";
export default {
  data() {
    return {
      newslist: []
    };
  },
  created() {
    this.getNewsList();
  },
  methods: {
    getNewsList() {
      this.$http.get("comment/hot?type=0&id=386538").then(result => {
        //   "search?keywords='五月天'"  console.log(result.data.result.songs);
        //   https://autumnfish.cn/comment/hot?type=0&id=386538
        console.log(result.status);
        // console.log(result.data.result.songs);
        console.log(result.data.hotComments);
        if (result.status == 200) {
          this.newslist = result.data.hotComments;
          //   result.data.result.songs;
        } else {
          Toast("获取新闻列表失败！");
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
.mui-table-view {
  li {
    h1 {
      font-size: 14px;
    }
    .mui-ellipsis {
      font-size: 10px;
      color: #226aff;
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>