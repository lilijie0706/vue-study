<template>
  <div>
      <h3>图片详情页面</h3>
      <p class="subtitle">
          <span>发表时间：2020-04-20 12:12:12</span>
          <span>点击:0次</span>
      </p>
      <hr>


      <!-- 缩略图区域 -->
      <!-- <img class="preview-img" v-for="(item,index) in musicList" :src="item.user.avatarUrl"
      height="100" @click="$preview.open(index,list)" :key="item.index"> -->

         <span><img :src="photoUrl" alt=""></span>


      <!-- 图片内容区域 -->
      <div class="content" >     

            <li v-for="item in musicList" :key="item.id">  
                <!-- @click="getPhotoUrl(item.id)              -->
                <a href="wweee#" ></a>
                <b>{{item.name}}</b>
                <span>{{item.id}}</span>
                
                <!-- <span v-if="item.mvid!=0" @click="playMV(item.mvid)"><i></i></span> -->
            </li>

            <!-- <dl v-for="item in musicList" :key="item.id">
                <dt><img :src="item.user.avatarUrl" alt=""></dt>
                <dd class="name">{{item.name}}</dd>
                <dd class="detail">
                    {{item.id}}=="getPhotoUrl(item.id)"
                </dd>
           </dl> -->
      </div>

      <!-- 评论子组件 -->

  </div>
</template>
<script>
export default {
    data(){
        return {
            id:this.$route.params.id,
            musicList:[],
            photoUrl:null,
            photoinfo:{}
        };
    },
    created(){
        this.getPhotoInfo();
        this.getPhotoUrl();

    },
    methods:{
        getPhotoInfo(){

            this.$http.get("search?keywords="+"五月天").then(result=>{
                // console.log(result.status);
                console.log("这个是详情页面photoInfo.vue")
				
				if (result.status == 200) {
            	//成功了
                    // this.photoinfo=result.data.hotComments.user;
                    console.log("成功进入图片详情页面")
                    // console.log(result.data.result.songs);
                    this.musicList = result.data.result.songs;                    
                    
            		Toast("加载轮播图ok...");
          		} else {
            	//失败的data.data[0]
            		Toast("加载轮播图失败...");
				}

            });           

        },
        getPhotoUrl(musicId){
            this.$http.get("song/detail?ids="+385965).then(result=>{
                console.log("歌曲封面获得")
                if(result.status==200){
                    console.log(result.data.songs[0].al.picUrl);
                    //循环每个图片数据，补全图片的W、h
                    // result.data.songs[0].al.picUrl.forEach(item=>{
                    //     item.w=600;
                    //     item.h=400;
                    // });
                    this.photoUrl=result.data.songs[0].al.picUrl;

                }else{
                    Toast("加载图片封面ok...");
                }                   
                
            })
        }
    }
};

</script>
<style lang='scss' scoped>
</style>