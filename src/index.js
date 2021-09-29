import Vue from 'vue'
import Hello from './components/Hello.vue'
import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'
import "./style.scss"

new Vue({
  el: '#app',
  data: {
    arguments: []
  },
  components: {
    hello: Hello,
    AnchorLink,
    EventButtons
  },
  methods: {
    onEventOne() {
      alert('Event 1')
    },
    onEventTwo(argument) {
      this.arguments = []
      this.arguments.push(argument)
    },
    onEventTree(arg1, arg2) {
      this.arguments = []
      this.arguments.push(arg1)
      this.arguments.push(arg2)
    }
  }
})
