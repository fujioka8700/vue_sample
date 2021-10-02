<template>
    <div>
        <span class="anchor" @click="onClick">
            <slot></slot>
        </span>
    </div>
</template>

<script>
export default {
    props: {
        href: {
            type: String,
            required: true
        }
    },
    methods: {
        onClick() {
            window.location.href = this.href
        }
    }
}
</script>

<style scoped>
.anchor {
    cursor: pointer;
    color: orange;
    text-decoration: underline;
}
</style>