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
import { collection, getDocs, getDoc, doc } from 'firebase/firestore'


export default {
    name: 'HomeView',
    async created() {
        const postsRef = collection(fireStoreDB, 'posts')
        const userDocRef = doc(fireStoreDB, 'users', localStorage.getItem('userID'))
        const userDoc = await getDoc(userDocRef)
        const { docs } = await getDocs(postsRef)
        const posts = docs.map(post => ({
            id: post.id,
            isLiked: userDoc.data().likes.includes(post.id),
            ...post.data()
        }))
        // console.log(posts);
        this.$store.commit('setMessages', posts);
        this.$store.commit('setLikes', userDoc.data().likes);
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
