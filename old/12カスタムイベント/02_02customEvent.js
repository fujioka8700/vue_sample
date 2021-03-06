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

// コンポーネントにネイティブイベントをバインディング
Vue.component('base-input', {
    inheritAttrs: false,
    props: ['label', 'value'],
    computed: {
        inputListeners: function () {
            var vm = this
            return Object.assign({},
                this.$listeners,
                {
                    input: function(event) {
                        vm.$emit('input', $event.target.value)
                    }
                }
            )
        }
    },
    template:`
    <div>
        <label>
            {{ label }}
        <input
            v-bind="$attrs"
            :value="value"
            v-on="inputListeners"
        >
        </label>
    </div>
    `
})

var app = new Vue({
    el: '#app',
    data: {
        value: '',
        lovinVue: false
    },
    methods: {
        onFocus: function() {
            alert('hello')
            // console.log('test');
        }
    },
})