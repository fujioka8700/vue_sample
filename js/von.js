var app = new Vue({
    el: '#app',
    data: {
        yobirin: false,
        selectedTabNumber: 1,
        submitted: false,
        previewUrl: ''
    },
    methods: {
        yobirinFunc: function () {
            this.yobirin = true;
            let dispYobirin = this;

            setTimeout(() => {
                dispYobirin.yobirin = false;
            }, 2000);
        },
        pushTabNumber: function (number) {
            this.selectedTabNumber = number;
        },
        onSubmit: function () {
            this.submitted = true
        },
        onClear: function () {
            this.submitted = false
        },
        onFileChange: function (event) {
            const file = event.target.files[0]
            if (!file) {
                return false
            }
            if (!file.type.match('image.*')) {
                return false
            }
            const reader = new FileReader()
            const that = this
            reader.onload = function (event) {
                that.previewUrl = event.target.result
            }
            reader.readAsDataURL(file)
        }
    },
})