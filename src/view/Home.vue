<template>
  <div id="home">
    <ListPostComponent :messages="messageDataList" />
  </div>
</template>

<script>
import ListPostComponent from '@/components/ListPostComponent.vue';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      messageDataList: 'posts.messageDataList', 
    }),
  },
  methods: {
    ...mapActions({
      fetchMessages: 'posts/fetchMessages',
    }),
  },
  components: {
    ListPostComponent,
  },
  created() {
    // Mock data (replace with your API call or any other data source)
    const messages = [
      {
        formattedDateTime: '2023-01-01 12:34',
        messageId: '1',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 0,
        commentCount: 0,
      },
      {
        formattedDateTime: '2023-01-01 12:34',
        messageId: '1',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 0,
        commentCount: 0,
      },
      {
        formattedDateTime: '2023-01-01 12:34',
        messageId: '1',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 0,
        commentCount: 0,
      },
      {
        formattedDateTime: '2023-01-01 12:34',
        messageId: '1',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 0,
        commentCount: 0,
      }
    ];

    this.fetchMessages(messages);
  },
};
</script>
