var app = new Vue({
    el: '#app',
    data: {
        username: '',
        error: {}
    },
    watch: {
        username: function (value) {
            if (value ==='') {
                this.error.username = 'ユーザー名は必須です。';
            } else if (!/[a-zA-Z0-9]+/.test(value)) {
                this.error.username = 'ユーザー名は半角英数のみです。';
            } else {
                this.error.username = '';
            }
        }
    }
})