var app = new Vue({
    el: '#app',
    data: {
        messages: [
            { text: 'メッセージ', error: false },
            { text: 'ERRORメッセージ', error: true }
        ],
        progress: 30
    }
});