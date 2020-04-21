<template>
  <div>
      <!-- 顶部滑动条区域 -->

      <div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted" data-scroll="1">
					<div class="mui-scroll" style="transform: translate3d(0px, 0px, 0px) translateZ(0px);">
						<a class="mui-control-item mui-active" href="#item1mobile" data-wid="tab-top-subpage-1.html">
							推荐
						</a>
						<a class="mui-control-item" href="#item2mobile" data-wid="tab-top-subpage-2.html">
							热点
						</a>
						<a class="mui-control-item" href="#item3mobile" data-wid="tab-top-subpage-3.html">
							北京
						</a>
						<a class="mui-control-item" href="#item4mobile" data-wid="tab-top-subpage-4.html">
							社会
						</a>
						<a class="mui-control-item" href="#item5mobile" data-wid="tab-top-subpage-5.html">
							娱乐
						</a>
						<a class="mui-control-item" href="#item6mobile" data-wid="tab-top-subpage-6.html">
							科技
						</a>
					</div>
				</div>
				<!-- 图片列表区域 -->
				<ul class="photo-list">
					<router-link v-for="item in list"  :key="item.commentId" :to="'/home/photoinfo/'+item.user.userId" tag="li">  
					<!-- item.user.avatarUrl -->
						<img v-lazy="item.user.avatarUrl">
						<div class="info">
							<h1 class="info-title">{{ item.user.nickname }}</h1>
							<div class="info-body">{{ item.content }}</div>
						</div>
					</router-link>
				</ul>

			</div>
  </div>
</template>
<script>
// 1、导入 mui 的js文件
import mui from '../../lib/mui/js/mui.min.js'
// 2、初始化滑动控件
// mui('.mui-scroll-wrapper').scroll({
// 	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
// });

export default {
    data(){
        return {
			cates:[],//所有分类的列表数组
			list:[]//图片列表的数组
		}
	},
	created(){
		this.getAllCategory();
		this.getPhotoListByCateId();
	},
	mounted(){//当组件中的DOM结构被渲染好并放到页面中后，会执行构造函数
	  mui('.mui-scroll-wrapper').scroll({
		deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
		});

	},
    methods:{
		getAllCategory(){
			//获取所有的图片分类
			this.$http.get("comment/hot?type=0&id=386538").then(result=>{
				console.log(result.status);
				console.log(result.data.hotComments);
				            		if (result.status == 200) {
            	//成功了
					// this.lunbotuList = result.data.hotComments;
					// result.data.hotComments.unshift(title:"全部",id:0);
					// this.cates=result.data.hotComments;
            		Toast("加载轮播图ok...");
          		} else {
            	//失败的
            		Toast("加载轮播图失败...");
				}

			});
		},
		getPhotoListByCateId(){
			//获取图片列表
			
			this.$http.get("comment/hot?type=0&id=386538").then(result=>{
				// console.log(result.status);
				console.log("photoList.vue")
				console.log(result.data.hotComments);
				if (result.status == 200) {
            	//成功了
					this.list=result.data.hotComments;
            		Toast("加载轮播图ok...");
          		} else {
            	//失败的
            		Toast("加载轮播图失败...");
				}

			});
			
		}

	}
}
</script>
<style lang='scss' scoped>
	* {
		touch-action:  pan-y;
	// none;	
	}
.photo-list{
	list-style: none;
	margin: 0;
	padding: 10px;	
	padding-bottom: 0px;	

	li {
		background-color: #ccc;
		text-align: center;
		margin-bottom: 10px;
		box-shadow: 0 0 6px #999;
		position: relative;

		img {
			width: 100%;
			vertical-align: middle;
		}
		img[lazy=loading] {
		width: 40px;
		height: 300px;
		margin: auto;
		}
		.info{
			color:white;
			text-align: left;
			position: absolute;
			bottom: 0;
			background-color: #rgba(0,0,0,0.4);
			max-height: 84px;
			.info-title{
				font-size:15px;
			}
			.info-body{
				font-size: 13px;
			}
		}
	}
}


</style>