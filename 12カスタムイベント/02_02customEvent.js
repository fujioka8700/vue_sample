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

Vue.component('base-input', {
    template:`
        <p>Hello</p>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        lovinVue: false
    }
})