var app = new Vue({
    el: '#app',
    data: {
        rating: 3,
        comment: '',
        error: '',
        submitted: false
    },
    methods: {
        onSubmit: function () {

            this.error = '';
            if (this.comment === '') {
                this.error = 'コメントは必須です。';
                return false;
            }

            this.submitted = true;
        },
        clearForm: function () {
            this.rating = 3;
            this.comment = '';
            this.submitted = false;
        }
    },
});