// 子コンポーネントのイベントを購読する
Vue.component('blog-post', {
    props: ['post'],
    template: `
    <div class="blog-post">
        <h3>{{ post.title }}</h3>
        <button @click="$emit('enlarge-text')">
            Enlarge text
        </button>
        <div v-html="post.content"></div>
    </div>
    `
})

var blogpost = new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [
            { id: 1, title:'ブログ', content:'良い天気です' },
            { id: 2, title:'日記', content:'曇りです' },
            { id: 3, title:'雑記', content:'雨です' }
        ],
        postFontSize: 1
    }
})
