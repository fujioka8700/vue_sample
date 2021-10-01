<template>
    <div class="form-group">
        <textarea
            class="form-input"
            rows="5"
            @input="onInput"
        ></textarea>
    </div>
</template>

<script>
export default {
    props: {
        value: {
            type: String,
            required: true
        }
    },
    data() {
        return {
            text: this.value
        }
    },
    methods: {
        onInput($event) {
            this.text = $event.target.value
            this.$emit('input', this.text)
        }
    }
}
</script>

<style scoped>

</style>