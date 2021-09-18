var app = new Vue({
    el: '#app',
    data: {
        message: 'おはよう',
        messages: [
            { text: 'セーフだよ', error: false },
            { text: 'アウトだよ', error: true }
        ],
        progress: 50,
        url: 'https://www.yahoo.co.jp/'
    }
})