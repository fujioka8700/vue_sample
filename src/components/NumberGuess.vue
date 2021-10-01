<template>
    <div class="bg-white">
        <h1 class="mb-6 text-blue-600 text-2xl">数字当てゲーム</h1>
        <div class="flex flex-col flex-wrap content-center">
            <button
                @click="onClick"
                class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >start</button>
            <input
                class="mt-4 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                v-if="answer > 0"
                type="number"
                min="0"
                max="100"
                v-model.number="num"
                @keyup.enter="guess"
            >
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tryCountLeft: 0,
                answer: 0,
                num: 0
            }
        },
        methods: {
            onClick() {
                this.answer = Math.floor(Math.random() * (100 - 1) + 1)
                this.tryCountLeft = 10
                this.num = 0
                this.$emit('start', this.tryCountLeft)
            },
            guess() {
                // 当たり！
                if (this.num === this.answer && this.tryCountLeft > 0) {
                    this.$emit('collect')
                    return
                }

                // 残り回数が0より大きいなら、カウントを1減らす
                if (this.tryCountLeft > 0) {
                    this.tryCountLeft--
                }

                // ゲームオーバー
                if (this.tryCountLeft === 0) {
                    this.$emit('lose', this.tryCountLeft)
                    return
                }

                // もっと大きいです
                else if (this.num < this.answer) {
                    this.$emit('higher', this.tryCountLeft)
                }

                // もっと小さいです
                else if (this.num > this.answer) {
                    this.$emit('lower', this.tryCountLeft)
                }
            }
        }
    }
</script>

<style scoped>

</style>