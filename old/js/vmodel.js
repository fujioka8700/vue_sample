var app = new Vue({
    el: '#app',
    data: {
        username: '',
        textArea: '',
        language: 'ja',
        pc: {
            mac: true,
            windows: false,
            linux: false
        },
        lang: 'html',
        filePath: '',
        birthday: '1980-09-18',
        range: 3
    }
})

const config = {
    // enableTime: true,
    dateFormat: "Y-m-d H:i",
  }
  flatpickr('.flatpickr', config);