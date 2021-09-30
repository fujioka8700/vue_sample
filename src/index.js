import Vue from 'vue'
import Hello from './components/Hello.vue'
import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'
import NumberGuess from './components/NumberGuess.vue'
import "./style.scss"

// new Vue({
//   el: '#app',
//   data: {
//     arguments: []
//   },
//   components: {
//     hello: Hello,
//     AnchorLink,
//     EventButtons
//   },
//   methods: {
//     onEventOne() {
//       alert('Event 1')
//     },
//     onEventTwo(argument) {
//       this.arguments = []
//       this.arguments.push(argument)
//     },
//     onEventTree(arg1, arg2) {
//       this.arguments = []
//       this.arguments.push(arg1)
//       this.arguments.push(arg2)
//     }
//   }
// })

new Vue({
  el: '#app2',
  data: {
    message: 'スタートボタンを押してください',
    tryCountLeft: 0
  },
  components: {
    NumberGuess
  },
  methods: {
    onStart(tryCountLeft) {
      this.tryCountLeft = tryCountLeft
      this.message = 'スタート！ 🚀'
    },
    onCollect() {
      this.message = '当たり！ 🎉'
    },
    onHigher() {
      this.message = 'もっと大きいです ️👆'
    },
    onLower() {
      this.message = 'もっと小さいです 👇'
    }
  }
})