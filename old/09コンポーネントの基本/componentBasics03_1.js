// コンポーネントの基本
Vue.component('button-counter', {
    data: function() {
        return{
            count: 0
        }
    },
    template: '<button @click="count++">{{ count }}</button>'
})

// グローバルに登録
Vue.component('my-component-name', {

})

// プロパティを使用した親コンポーネントから、
// 子コンポーネントへのデータの受け渡し
Vue.component('blog-post', {
    props: ['title'],
    template: '<h3>{{ title }}</h3>'
})

var app = new Vue({
    el: "#app"
});