<template>
    <div>
        <span class="anchor" @click="onClick">
            {{ text }}
        </span>
        <AnchorLink2 href="https://www.google.com/">Google</AnchorLink2>
        <MyArticle>
            <span slot="title">スロットによるコンテンツ配信</span>
            <div slot="content">
                <p>HTML 要素と同様に、コンポーネントにコンテンツに渡すことが可能</p>
            </div>
        </MyArticle>
    </div>
</template>

<script>
import AnchorLink2 from './AnchorLink2.vue'
import MyArticle from './MyArticle.vue'

export default {
    components: {
        AnchorLink2,
        MyArticle
    },
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