// console.log('ok')
import Vue from 'vue'
import login from './login.vue'
// import Vue from '../node_modules/vue/dist/vue.js'

// var login = {
//     template: '<h1>这是login组建，是使用网页中形式创建出来的组件</h1>'
// }

var vm = new Vue({
    el: '#app',
    data: {
        msg: '123',

    },
    // components: {
    //     login
    // },
    render: c => c(login) // 在 webpack 中，如果想要通过 vue， 把一个组件放到页面中去展示，vm 实例中的 render 函数可以实现


})
import m1, { title, content } from './test.js'
console.log(m1)
console.log(content + '=========' + title)