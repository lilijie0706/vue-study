import Vue from 'vue'
//1.1 导入路由的包
import VueRouter from 'vue-router'
//1.2 安装路由
Vue.use(VueRouter)

//导入moment时间插件
import moment from 'moment'
//定义全局的过滤器
Vue.filter('dataFormat', function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss") {
    return moment(dataStr).format(pattern)

})

//2.1导入vue-resource 

import VueResource from 'vue-resource'

//2.2安装 vue-resource  
Vue.use(VueResource)
    //2.2.1设置请求的根路径
Vue.http.options.root = 'https://autumnfish.cn'; //https://autumnfish.cn/
//增加全局设置 post 时候表单数据格式 组织参数JSON  emulate/ˈemjuleɪt/ application/x-www-form-urlencoded
Vue.http.options.emulateJSON = true;

// //导入MUI 的样式   
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
//按需导入 Mint-UI 中的组件
// import { Header, Swipe, SwipeItem, Lazyload } from 'mint-ui'
// Vue.component(Header.name, Header)
// Vue.component(Swipe.name, Swipe)
// Vue.component(SwipeItem.name, SwipeItem)
// Vue.use(Lazyload);
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//安装 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

//1.3 导入自己的router.js 路由模块
import router from './router.js'

//导入App 根组件
import app from './App.vue'

var vm = new Vue({
    el: '#app',
    data: {},
    render: c => c(app),
    router //1.4挂载 路由对象 到VM 实例上
})