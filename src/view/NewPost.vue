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
import { fireStoreDB } from '@/config/firebase';
import { collection, addDoc } from 'firebase/firestore';

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
      if (!this.title || !this.body) {
        return alert('Por favor, preencha todos os campos.');
      }
      
      const newMessage = {
        title: this.title,
        message: this.body,
        userID: localStorage.getItem('userID'),
        data: Date.now(),
        comments: []
      };

      const collectionRef = collection(fireStoreDB, 'posts')
      addDoc(collectionRef, newMessage)

      this.$emit('message-created', newMessage);
      this.$router.push({ name: 'home' });
    },
  },
};
</script>

<style scoped>
.new-message-container {
  height: 80vh;
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

textarea {
  height: 100px;
}

button {
  padding: 10px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  width: 200px;
  cursor: pointer;
}

button:hover {
  background-color: #2980b9;
}
</style>
