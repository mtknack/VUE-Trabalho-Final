<template>
  <div class="message-container">
    <div class="message-info">
      <p>{{ formattedDateTime }} - {{ messageId }}</p>
    </div>
    <div class="message-content">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>
    </div>
    <div class="message-interactions">
      <button @click="toggleLike">
        {{ isLiked ? 'Unlike' : 'Like' }} {{ likeCount }}
      </button>
      <span>{{ commentCount }} Comments</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    formattedDateTime: {
      type: String,
      required: true,
    },
    messageId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
    isLiked: {
      type: Boolean,
      required: true,
    },
    likeCount: {
      type: Number,
      required: true,
    },
    commentCount: {
      type: Number,
      required: true,
    },
  },
  methods: {
    toggleLike() {
      // Emitir um evento para informar que o botão "like" foi clicado
      this.$emit('like-clicked', this.messageId);
    },
  },
};
</script>

<style scoped>
/* Adicione estilos conforme necessário */
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  color: #333;
}

button {
  background-color: #3498db;
  color: #fff;
  padding: 5px 10px;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
  