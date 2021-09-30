<template>
    <div>
        <h1>数字当てゲーム</h1>
        <button @click="onClick">start</button>
        <div>
            <input v-if="answer > 0"
                type="number"
                min="0"
                max="100"
                v-model.number="num"
                @keyup="guess"
            >
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                tryCountLeft: 10,
                answer: 0,
                num: 0
            }
        },
        methods: {
            onClick() {
                this.answer = 10
                this.$emit('start', this.tryCountLeft)
            },
            guess() {
                // 当たり！
                if (this.num === this.answer) {
                    this.$emit('collect')
                }

                // もっと大きいです
                if (this.num < this.answer) {
                    this.$emit('higher')
                }

                // もっと小さいです
                if (this.num > this.answer) {
                    this.$emit('lower')
                }
            }
        }
    }
</script>

<style scoped>

</style>