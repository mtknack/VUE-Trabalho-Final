<template>
    <div class="message-container" :class="{'message-container-like' :messageData.likes.includes(this.userID)}">
        <div class="message-info">
            <p>{{ formatDateTime(messageData.data) }}</p>
            <button v-if="messageData.userID === userID" class="delete-button" @click="deletarPost">Deletar</button>
        </div>
        <div class="message-content">
            <h3>{{ messageData.title }}</h3>
            <p>{{ messageData.message }}</p>
        </div>
        <div class="message-interactions">
            <button @click="toggleLike" class="like-button">
                Like {{ messageData.likes.length }}
            </button>
            <button @click="navigateTo(`/post/${messageData.id}/${index}`);" class="comment-button">
                {{ messageData.comments.length }} comentários
            </button>
        </div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { fireStoreDB } from '@/config/firebase';
import { deleteDoc, doc, updateDoc } from 'firebase/firestore';

export default {
    name: 'PostComponent',
    props: {
        messageData: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        }
    },
    data() {
        return {
            commentText: '',
            userID: localStorage.getItem('userID')
        };
    },
    computed: {
        ...mapGetters({
            likes: 'getLikes'
        })
    },
    methods: {
        navigateTo(route) {
            // Use Vue Router to navigate to the specified route
            this.$router.push({ path: route });
        },
        formatDateTime(dateTime) {
            const formattedDate = new Date(dateTime).toLocaleString('pt-BR');
            return formattedDate;
        },
        toggleLike() {
            const post = doc(fireStoreDB, 'posts', this.messageData.id)

            // Emit an event to inform that the "like" button was clicked
            if (this.messageData.likes.includes(this.userID)) {
                updateDoc(post, {
                    ...this.messageData,
                    likes: this.messageData.likes.filter(id => id != this.userID)
                }).catch(error => console.log(error))
                this.$store.commit('removeLike', {
                    index: this.index,
                    userID: this.userID
                })
            } else {
                updateDoc(post, {
                    ...this.messageData,
                    likes: [...this.messageData.likes, this.userID]
                })
                this.$store.commit('addLike', {
                    index: this.index,
                    userID: this.userID
                })
            }


        },
        addComment() {
            // Emit an event to inform that the "comment" button was clicked
            this.$emit('comment-clicked', {
                messageId: this.messageData.messageId,
                commentText: this.commentText,
            });

            this.commentText = '';
        },
        deletarPost() {
            const docRef = doc(fireStoreDB, 'posts', this.$props.messageData.id)
            deleteDoc(docRef)
            window.location.reload()
        }
    },
};
</script>

<style scoped>
p {
    margin: 0;
}

.message-container {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px 0;
}

.message-container-like {
    border: 1px solid #3498db;
    background-color: #3498db28;
}

.message-info {
    font-size: 12px;
    color: #888;
    display: flex;
    justify-content: space-between;
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
    resize: vertical;
    /* Allow vertical resizing */
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

.delete-button {
    background-color: #e74c3c;
    color: #fff;
    width: 100px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
}

.delete-button:hover {
    background-color: #c0392b;
}
</style>
