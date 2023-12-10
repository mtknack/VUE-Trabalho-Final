<template>
  <div id="app">
    <div class="content">
      <ListPostComponent :messages="messageDataList" />
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

import ListPostComponent from '../components/ListPostComponent.vue';

export default {
  name: 'HomeView',
  computed: {
    ...mapState({
      messageDataList: 'posts.messageDataList', 
    }),
  },
  methods: {
    ...mapActions({
      fetchMessages: 'fetchMessages',
    }),
  },
  components: {
    ListPostComponent,
  },
  created() {
    const messages = [
      {
        id: 2,
        formattedDateTime: '2023-01-02 15:45',
        title: 'Second Message',
        message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        userId: 2,
        isLiked: true,
        likeCount: 25,
        comments: [
          {
            id: 6,
            name: 'Joana Silva',
            comment: `Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
            likeCount: 12,
          },
          {
            id: 7,
            name: 'Carlos Oliveira',
            comment: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            likeCount: 8,
          },
          {
            id: 8,
            name: 'Mariana Souza',
            comment: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
            likeCount: 5,
          },
        ],
      },
      {
        id: 3,
        formattedDateTime: '2023-01-03 08:15',
        title: 'Third Message',
        message: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
        userId: 3,
        isLiked: false,
        likeCount: 30,
        comments: [
          {
            id: 9,
            name: 'André Rodrigues',
            comment: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.',
            likeCount: 10,
          },
          {
            id: 10,
            name: 'Carla Pereira',
            comment: 'Ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
            likeCount: 15,
          },
        ],
      },
      {
        id: 4,
        formattedDateTime: '2023-01-04 20:30',
        title: 'Fourth Message',
        message: 'Cupidatat proident culpa mollit sint adipisicing. Ex proident minim nisi ea consequat.',
        userId: 4,
        isLiked: true,
        likeCount: 22,
        comments: [
          {
            id: 11,
            name: 'Fernanda Lima',
            comment: 'Cupidatat proident culpa mollit sint adipisicing. Ex proident minim nisi ea consequat.',
            likeCount: 8,
          },
          {
            id: 12,
            name: 'Ricardo Santos',
            comment: 'Dolor tempor adipisicing eiusmod velit elit enim sunt.',
            likeCount: 14,
          },
        ],
      }
    ];

    this.fetchMessages(messages);
  },
};
</script>

<style>
#app {
  display: flex;
}

.content {
  width: 100%;
}
</style>
