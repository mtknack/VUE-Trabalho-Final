<template>
    <div class="listPost">
        <div class="message-header">
            <p>Mensagens: {{ messageDataList.length }}</p>
        </div>
        <div class="listPost">
            <PostComponent v-for="(messageData, index) in messageDataList" :key="messageData.messageId"
                :messageData="messageData" :index="index" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostComponent from './PostComponent.vue';

export default {
    computed: {
        ...mapGetters({
            messageDataList: 'getMessages'
        })
    },
    components: {
        PostComponent,
    },
};
</script>

<style scoped>
.message-header {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
}

.message-header p {
    color: #333;
}
</style>
