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
import { fireStoreDB } from '../config/firebase'
import { collection, getDocs } from 'firebase/firestore'

const postsRef = collection(fireStoreDB, 'posts')

export default {
    name: 'HomeView',
    async created() {
        const { docs } = await getDocs(postsRef)
        const posts = docs.map(post => ({
            id: post.id,
            ...post.data()
        })).filter(post => post.userID === localStorage.getItem('userID'))
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
    width: 100%;
}
</style>
