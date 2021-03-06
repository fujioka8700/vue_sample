// カスタムイベント v-modelを使ったコンポーネントのカスタマイズ
Vue.component('base-checkbox', {
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        checked: Boolean
    },
    template: `
        <input
            type="checkbox"
            :checked="checked"
            @change="$emit('change', $event.target.checked)"
        >
    `
})

var app = new Vue({
    el: '#app',
    data: {
        lovinVue: false
    }
})