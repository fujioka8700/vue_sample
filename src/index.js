import Vue from 'vue'
import Hello from './components/Hello.vue'
import AnchorLink from './components/AnchorLink.vue'
import EventButtons from './components/EventButtons.vue'
import NumberGuess from './components/NumberGuess.vue'
import MarkdownPanel from './components/MarkdownPanel.vue'
import Card from './components/Card.vue'
import './style.scss'
import './style.css'

// let app4 = new Vue({
//   el: '#app4',
//   components: {
//     Card
//   },
//   methods: {
//     onClick() {
//       alert('Clicked !')
//     }
//   }
// })

let app3 = new Vue({
  el: '#app3',
  components: {
    MarkdownPanel
  },
})

// let app2 = new Vue({
//   el: '#app2',
//   data: {
//     message: 'スタートボタンを押してください',
//     tryCountLeft: 0
//   },
//   components: {
//     NumberGuess
//   },
//   methods: {
//     onStart(tryCountLeft) {
//       this.tryCountLeft = tryCountLeft
//       this.message = 'スタート！ 🚀'
//     },
//     onCollect() {
//       this.message = '当たり！ 🎉'
//     },
//     onHigher(tryCountLeft) {
//       this.message = 'もっと大きいです ️👆'
//       this.tryCountLeft = tryCountLeft
//     },
//     onLower(tryCountLeft) {
//       this.message = 'もっと小さいです 👇'
//       this.tryCountLeft = tryCountLeft
//     },
//     onLose(tryCountLeft) {
//       this.message = 'ゲームオーバー'
//       this.tryCountLeft = tryCountLeft
//     }
//   }
// })

// let app = new Vue({
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
