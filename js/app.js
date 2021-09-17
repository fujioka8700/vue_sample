var app = new Vue({
    el: '#app',
    data: {
        messages: {
            count: 3
        },
        user: {
            gender: 'male'
        },
        current: 3,
        frameworks: [
            { name: '田中太郎', age: 19, profession: '大学生' },
            { name: '山田花子', age: 29, profession: 'OL' },
            { name: '一堂令', age: 16, profession: '高校生' }
        ],
        gifId: 52
    }
});
