<template>
  <div class="new-message-container">
    <h2>New Message</h2>
    <form @submit.prevent="createMessage">
      <label for="title">Title:</label>
      <input type="text" id="title" v-model="title" required>

      <label for="body">Body:</label>
      <textarea id="body" v-model="body" required></textarea>

      <button type="submit">Create Message</button>
    </form>
  </div>
</template>

<script>
export default {
    name: 'NewPost',
  data() {
    return {
      title: '',
      body: '',
    };
  },
  methods: {
    createMessage() {
      if (this.title && this.body) {
        const newMessage = {
          title: this.title,
          body: this.body,
        };
        // Emitir um evento para informar que uma nova mensagem foi criada
        this.$emit('message-created', newMessage);

        // Limpar os campos após a criação da mensagem
        this.title = '';
        this.body = '';
      } else {
        alert('Por favor, preencha todos os campos.');
      }
    },
  },
};
</script>

<style scoped>
.new-message-container {
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
}

input,
textarea {
  padding: 8px;
  margin-bottom: 16px;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
