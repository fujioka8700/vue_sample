var app = new Vue({
    el: '#app',
    data: {
        birthday: '1970-03-15',
        isComputedCalled: false
    },
    methods: {
        setMessage: function () {
            this.isComputedCalled = true;
            const that = this;
            setTimeout(() => {
                that.isComputedCalled = false;
            }, 2000);
        }
    },
    computed: {
        age: function () {
            this.setMessage();

            if (!this.birthday) {
                return -1;
            }

            moment.locale('ja');
            return moment().diff(this.birthday, 'years');
        }
    }
});

var birthday = document.getElementById('birthday');
var fp = flatpickr(birthday, {
    dateFormat: 'Y-n-j'
});