var app = new Vue({
    el: '#app',
    data: {
        file: ''
    }
});

function handleFileSelect(event) {
    var files = event.target.files

    console.log(files);
}

var elem = document.getElementById('upload');
elem.addEventListener('change', handleFileSelect, false)