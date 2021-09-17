var app = new Vue({
    el: '#app',
    data: {
        something: false,
        name: '田中太郎',
        currentTab: 1
    },
    methods: {
        someFunc: function () {
            this.something = true;
            this.hello();
        },
        hello: function () {
            console.log('Hello');
        },
        toggle: function (tab) {
            this.currentTab = tab;
        }
    },
});
