<template>
  <div class="post-detail-container">
    <h2>{{ mensagem.title }}</h2>
    <!-- <div class="post-info">
      <p>{{ mensagem.formattedDateTime }} - {{ mensagem.messageId }}</p>
    </div>
    <div class="post-content">
      <p>{{ mensagem.message }}</p>
    </div>
    <div class="post-interactions">
      <button @click="toggleLike" class="like-button">
        {{ mensagem.isLiked ? 'Unlike' : 'Like' }} {{ mensagem.likeCount }}
      </button>
      <span class="comment-count">{{ mensagem.comments.length }} Comments</span>
    </div>
    
    <div class="comments-section">
      <h3>Comments</h3>
      <ul>
        <li v-for="comment in mensagem.comments" :key="comment.id">
          <strong>{{ comment.name }}</strong>: {{ comment.comment }}
          <span class="like-count">Likes: {{ comment.likeCount }}</span>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
   name: 'PostView',
  props: ['id'],
  data() {
    return {
      mensagem: {},
    };
  },
  computed: {
    ...mapGetters({
      getMessagesFilter: 'getMessagesFilter',
    }),
  },
  created() {
    // Chame o getter passando o ID da mensagem
    const filteredMessages = this.getMessagesFilter(this.$route.params.id);

    // Verifique se a mensagem foi encontrada
    if (filteredMessages.length > 0) {
      this.mensagem = filteredMessages[0];
    } else {
      // Lidere com o caso em que a mensagem não foi encontrada
      console.error('Mensagem não encontrada');
    }
  },
  methods: {
    toggleLike() {
      // Emitir um evento para informar que o botão "like" foi clicado
      this.$emit('like-clicked', this.mensagem.messageId);
    },
  },
};
</script>

<style scoped>
.post-detail-container {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

.post-info {
  font-size: 12px;
  color: #888;
}

.post-content {
  margin: 10px 0;
}

.post-interactions {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
  margin-bottom: 10px;
}

.like-button {
  background-color: #3498db;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.like-button:hover {
  background-color: #2980b9;
}

.comment-count {
  margin-left: 10px;
}

.comments-section {
  margin-top: 20px;
}

.comments-section h3 {
  font-size: 16px;
  margin-bottom: 10px;
}

.comments-section ul {
  list-style: none;
  padding: 0;
}

.comments-section li {
  margin-bottom: 8px;
  padding-bottom: 8px;
  border-bottom: 1px solid #ccc;
}

.like-count {
  margin-left: 10px;
  color: #888;
}
</style>
