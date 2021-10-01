<template>
    <div class="panel">
        <div class="panel-header">
            <figure class="avatar avatar-lg">
                <img src="http://i.pravatar.cc/320" alt="">
            </figure>
            <div class="panel-title">User Name</div>
        </div>
        <div class="panel-nav">
            <ul class="tab">
                <li class="tab-item" :class="{ active: activeTab === 1 }">
                    <a href="#" @click.prevent="activeTab = 1">Write</a>
                </li>
                <li class="tab-item" :class="{ active: activeTab === 2 }">
                    <a href="#" @click.prevent="activeTab = 2">Preview</a>
                </li>
            </ul>
        </div>
        <div class="panel-body" v-show="activeTab === 1">
            <p>hello</p>
        </div>
        <div class="panel-body" v-show="activeTab === 2">
            <p>bye</p>
        </div>
        <div class="panel-footer">
            <div class="text-right">
                <button class="btn btn-primary">Submit</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                activeTab: 1
            }
        }
    }
</script>

<style scoped>

</style>