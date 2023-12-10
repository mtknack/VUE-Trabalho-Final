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
        id: 1,
        formattedDateTime: '2023-01-01 12:34',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 40,
        comments: [
          {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          },
           {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          }
          ,
           {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          }
          ,
           {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          }
          ,
           {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          }
        ],
      },
      {
        id: 2,
        formattedDateTime: '2023-01-01 12:34',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 12,
        comments: [
          {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          },
           {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          },
           {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          }
        ],
      },
      {
        id: 3,
        formattedDateTime: '2023-01-01 12:34',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 54,
         comments: [
          {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          },
           {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          }
        ],
      },
      {
        id: 4,
        formattedDateTime: '2023-01-01 12:34',
        title: 'First Message',
        message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        isLiked: false,
        likeCount: 76,
         comments: [
          {
            id: 1,
            name: 'Marcelo aaa',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
            likeCount: 6
          }
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
  overflow-y: scroll; /* Permite que o conteúdo role verticalmente se necessário */
  height: 100vh;
  width: 100%;
}
</style>
