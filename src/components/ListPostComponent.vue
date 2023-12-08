<template>
  <div class="listPost">
    <PostComponent
      v-for="messageData in messageDataList"
      :key="messageData.messageId"
      :messageData="messageData"
      @like-clicked="handleLikeClicked"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import PostComponent from './PostComponent.vue';

export default {
  computed: {
    ...mapState('posts', ['messageDataList']),
  },
  components: {
    PostComponent,
  },
  created() {
    // Call the action to fetch data from the store
    this.fetchMessageData();
  },
  methods: {
    ...mapActions('posts', ['fetchMessageData']),
    handleLikeClicked(messageId) {
      // Logic to handle the "like" button click
      console.log(`Like clicked for message with ID: ${messageId}`);
    },
  },
};
</script>
