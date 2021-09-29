<template>
    <div>
        <button @click="emitEventOne">Event1</button>
        <button @click="emitEventTwo">Event2</button>
        <button @click="emitEventThree">Event3</button>
    </div>
</template>

<script>
export default {
    methods: {
        emitEventOne() {
            this.$emit('event-one')
        },
        emitEventTwo() {
            this.$emit('event-two', 'This is an argument')
        },
        emitEventThree() {
            this.$emit('event-three', 123, { name: 'three'})
        }
    }
}
</script>

<style scoped>

</style>