<template>
  <div class="message-container">
    <div class="message-info">
      <p>{{ messageData.formattedDateTime }} - {{ messageData.messageId }}</p>
    </div>
    <div class="message-content">
      <h3>{{ messageData.title }}</h3>
      <p>{{ messageData.message }}</p>
    </div>
    <div class="message-interactions">
      <button @click="toggleLike">
        {{ messageData.isLiked ? 'Unlike' : 'Like' }} {{ messageData.likeCount }}
      </button>
      <span>{{ messageData.commentCount }} Comments</span>
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
  methods: {
    toggleLike() {
      // Emit an event to inform that the "like" button was clicked
      this.$emit('like-clicked', this.messageData.messageId);
    },
  },
};
</script>

<style scoped>
/* Add your styles here */
</style>
