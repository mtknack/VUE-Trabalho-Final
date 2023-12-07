<template>
  <div class="listPost">
    <!-- <PostComponent v-for="messageData in messageDataList" :key="messageData.messageId" :data="messageData" /> -->
    aaaaaaaaaa
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PostComponent from './PostComponent.vue';

export default {
  computed: {
    ...mapState('posts', ['messageDataList']),
  },
  components: {
    PostComponent,
  },
};
</script>
