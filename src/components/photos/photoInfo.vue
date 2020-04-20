<template>
  <div>
      <h3>图片详情页面</h3>
      <p class="subtitle">
          <span>发表时间：2020-04-20 12:12:12</span>
          <span>点击:0次</span>
      </p>
      <hr>


      <!-- 缩略图区域 -->



      <!-- 图片内容区域 -->
      <div class="content"></div>

      <!-- 评论子组件 -->

  </div>
</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            photoinfo:{}
        };
    },
    methods:{
        getPhotoInfo(){

            this.$http.get("comment/hot?type=0&id=386538").then(result=>{
				console.log(result.status);
				console.log(result.data.hotComments);
				if (result.status == 200) {
            	//成功了
					this.photoinfo=result.data.hotComments.user[0];
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
<style lang='scss' scoped>
</style>