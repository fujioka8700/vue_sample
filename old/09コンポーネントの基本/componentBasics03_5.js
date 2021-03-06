// コンポーネントで v-model を使う
Vue.component('custom-input', {
    props: ['value'],
    template: `
    <input
        :value="value"
        @input="$emit('input', $event.target.value)"
    >
    `
})

var vm = new Vue({
    el: '#custom-event',
    data: {
        searchText: ''
    }
})
