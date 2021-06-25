// .sync 修飾子
Vue.component('text-document', {
    props:['title'],
    template: `<h1>{{ title }}</h1>`
})

var app = new Vue({
    el: '#app',
    data: {
        doc: {
            title: 'タイトル'
        }
    },
})