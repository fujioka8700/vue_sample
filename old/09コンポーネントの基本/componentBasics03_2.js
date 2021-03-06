// 単一のルート要素
Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <div v-html="post.content"></div>
    </div>
    `
})

var blogpost = new Vue({
    el: '#blog-post-demo',
    data: {
        posts: [
            { id: 1, title:'ブログ', content:'良い天気です' },
            { id: 2, title:'日記', content:'曇りです' },
            { id: 3, title:'雑記', content:'雨です' }
        ]
    }
})
