<template>
  <div>
    <!-- 轮播图区域 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunbotuList" :key="item.commentId">
        <img :src="item.user.avatarUrl" />
      </mt-swipe-item>
      <!-- <mt-swipe-item>1</mt-swipe-item>
      <mt-swipe-item>2</mt-swipe-item>
      <mt-swipe-item>3</mt-swipe-item>-->
    </mt-swipe>
    <!-- 九宫格 到 6宫格的改造工程样式 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newslist">
          <img src="../../images/menu1.png" />
          <div class="mui-media-body">新闻咨询</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/photolist">
          <img src="../../images/menu2.png" />
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/goodslist">
          <img src="../../images/menu3.png" />
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu4.png" />
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu5.png" />
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/menu6.png" />
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
    <h3>HomeContainer</h3>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      lunbotuList: [] //保存轮播图的
    };
  },
  created() {
    this.getLunbotu();
  },
  methods: {
    getLunbotu() {
      //获取轮播图数据的方法
      this.$http
        .get("https://autumnfish.cn/comment/hot?type=0&id=386538")
        .then(result => {
          // console.log(result.status);
          // console.log(result.data.hotComments);

          if (result.status == 200) {
            //成功了
            this.lunbotuList = result.data.hotComments;
            Toast("加载轮播图ok...");
          } else {
            //失败的
            Toast("加载轮播图失败...");
          }
        });
    }
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;

  .mint-swipe-item {
    &:nth-child(1) {
      background-color: red;
    }

    &:nth-child(2) {
      background-color: blue;
    }

    &:nth-child(3) {
      background-color: cyan;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  border: none;
  img {
    width: 60px;
    height: 60px;
  }
  .mui-media-body {
    font-size: 13px;
  }
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}
</style>