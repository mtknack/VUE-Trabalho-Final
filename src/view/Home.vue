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
import {firebaseApp} from '../config/firebase'
import { getFirestore, collection, getDocs } from 'firebase/firestore'

const db = getFirestore(firebaseApp)
const postsRef = collection(db, 'posts')

export default {
  name: 'HomeView',
  async created() {
    const { docs } = await getDocs(postsRef)
    const posts = docs.map(post => post.data())
    this.$store.commit('setMessages', posts);
  },
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
