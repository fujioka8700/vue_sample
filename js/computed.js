var app = new Vue({
    el: '#app',
    data: {
        left: 0,
        right: 0,
        searchText: '',
        link: '#',
        comment: ''
    },
    computed: {
        total: function () {
            return this.left + this.right;
        }
    }
})