#这是我第一次学习VUE，是第一次做项目,第一次使用git和Github存储程序
##希望通过这个项目，能够用心去感受，如何实现一些功能
###希望能够在程序员的道路上继续走下去
####开源协议之间有何异同
  https://www.zhihu.com/question/19568896


 ###将已经存在的项目，进行修改后，如何提交到服务器
1 git add .
2 git commit -m "提交信息"
3 git push

##制作首页App组件
1、完成 Header 区域，使用的是 Mint-UI 中的Header 组件
2、制作底部的 Tabbar 区域，使用的是 MUI 的 Tabbar.html
+制作 购物车 小图标操作如下：扩展图标的 css 样式拷贝到项目中，扩展字体 ttf 文件到项目中 
+为购物车小图标添加如下样式：<span class="mui-icon mui-icon-extra mui-icon-extra-cart">
3、要在 中间区域放置一个 router-view 来展示路由匹配到的组件

##改造 tabbar 为 router-link 

##设置路由高亮

##点击 tabbar 中的路由链接，展示对应的路由组件


##加载首页轮播图数据
1、获取数据，如何获取呢，使用vue-resource
2、使用 vue-resource 的 this.$http.get 获取数据
3、获取到的数据，要保存到 data 身上
4、使用 v-for 循环渲染 每个 item 项