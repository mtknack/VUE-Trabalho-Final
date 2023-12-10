<template>
  <div class="message-container">
    <div class="message-info">
      <p>{{ formatDateTime(messageData.formattedDateTime) }}</p>
    </div>
    <div class="message-content">
      <h3>{{ messageData.title }}</h3>
      <p>{{ messageData.message }}</p>
    </div>
    <div class="message-interactions">
      <button @click="toggleLike" class="like-button">
        {{ messageData.isLiked ? 'Unlikes' : 'Likes' }} {{ messageData.likeCount }}
      </button>
      <button @click="navigateTo(`/post/${messageData.id}`);" class="comment-button">
        Comments {{ contadorDeComentarios(messageData.comments) }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PostComponent',
  props: {
    messageData: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      commentText: '',
    };
  },
  methods: {
    navigateTo(route) {
      // Use Vue Router to navigate to the specified route
      this.$router.push({ path: route });
    },
    formatDateTime(dateTime) {
      // Função para formatar a data no formato desejado
      const options = { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' };
      const formattedDate = new Date(dateTime).toLocaleString('en-US', options);
      return formattedDate;
    },
    contadorDeComentarios(comentarios) {
      // Função para formatar a data no formato desejado
      return comentarios.length;
    },
    toggleLike() {
      // Emit an event to inform that the "like" button was clicked
      this.$emit('like-clicked', this.messageData.messageId);
    },
    addComment() {
      // Emit an event to inform that the "comment" button was clicked
      this.$emit('comment-clicked', {
        messageId: this.messageData.messageId,
        commentText: this.commentText,
      });

      // Optionally, you can clear the textarea after adding a comment
      this.commentText = '';
    },
  },
};
</script>

<style scoped>
.message-container {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}

.message-info {
  font-size: 12px;
  color: #888;
}

.message-content {
  margin: 10px 0;
}

.message-interactions {
  align-items: center;
  font-size: 14px;
  color: #333;
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

.comment-section {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
}

textarea {
  width: 90%;
  padding: 8px;
  margin-bottom: 10px;
  resize: vertical; /* Allow vertical resizing */
}

.comment-button {
  background-color: #27ae60;
  color: #fff;
  width: 100px;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

.comment-button:hover {
  background-color: #219d52;
}
</style>
