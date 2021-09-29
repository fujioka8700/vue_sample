<template>
    <div>
        <p>Hello, {{ message }}</p>
    </div>
</template>

<script>
    export default {
        props: ['name'],
        data() {
            return {
                message: this.name
            }
        }
    }
</script>

<style scoped>
    p {
        color: teal;
    }
</style>