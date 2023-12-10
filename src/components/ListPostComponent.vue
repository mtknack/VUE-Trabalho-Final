<template>
  <div class="listPost">
    <div class="message-header">
      <p>Mensagens: {{ messageDataList.length }}</p>
    </div>
    <PostComponent
      v-for="messageData in messageDataList"
      :key="messageData.messageId"
      :messageData="messageData"
    />
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

.listPost{
  padding: 10px 40px;
} 

.message-header {
  display: flex;
  justify-content: end;
  margin-bottom: 10px;
}

.message-header p {
  color: #333;
}
</style>
