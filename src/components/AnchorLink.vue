<template>
    <span class="anchor" @click="onClick">
        {{ text }}
    </span>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        },
        newTab: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        onClick() {
            if (this.newTab === true) {
                window.open(this.href, '_blank')
            } else {
                window.location.href = this.href
            }
        }
    }
}
</script>

<style scoped>
.anchor {
    cursor: pointer;
    color: blue;
    text-decoration: underline;
}
</style>