<template>
    <div class="post-detail-container">
        <h1>{{ mensagem.title }}</h1>
        <div class="post-info">
            <p>{{ formatDateTime(mensagem.data) }}</p>
        </div>
        <div class="post-content">
            <p>{{ mensagem.message }}</p>
        </div>
        <div class="post-interactions">
            <button @click="toggleLike" class="like-button">
                Like {{ mensagem.likes?.length || 0 }}
            </button>
            <span class="comment-count">{{ mensagem.comments?.length || 0 }} comentários</span>
        </div>
        <div class="comments-section">
            <h3>Comments</h3>
            <ul class="comments-list">
                <li v-for="comment in mensagem.comments" :key="comment.id" class="comment-item">
                    <div class="comment-header">
                        <h2><strong>{{ comment.name }}</strong></h2>
                    </div>
                    <div class="comment-content">
                        {{ comment.comment }}
                    </div>
                    <!-- <div class="comment-actions">
                        <button @click="toggleCommentLike(comment)" class="like-button">
                            {{ comment.isLiked ? 'Unlike' : 'Like' }} {{ comment.likeCount }}
                        </button>
                    </div> -->
                </li>
            </ul>
            <div class="add-comment-section">
                <h3>Add a Comment</h3>
                <form @enviar.prevent="commentForm">
                    <input type="text" id="username" v-model="name" required placeholder="Digite seu nome">
                    <textarea v-model="newCommentText" placeholder="Escreva seu comentario" required></textarea>
                    <button @click="addComment" class="comment-button">Comment</button>
                </form>

            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
import { fireStoreDB } from '@/config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

export default {
    name: 'PostView',
    props: ['id'],
    data() {
        return {
            mensagem: {},
            name: '',
            newCommentText: '',
        };
    },
    computed: {
        ...mapActions('post', ['getMessagesFilter', 'addCommentToMessage']),
    },
    async mounted() {
        try {
            const post = await this.$store.dispatch('getMessagesFilter', this.$route.params.id);
            this.mensagem = post[0]
        } catch (error) {
            console.error('Erro ao obter mensagem:', error);
        }
    },
    methods: {
        formatDateTime(dateTime) {
            const formattedDate = new Date(dateTime).toLocaleString('pt-BR');
            return formattedDate;
        },
        toggleLike() {
            const post = doc(fireStoreDB, 'posts', this.mensagem.id)
            const user = localStorage.getItem('userID')
            // Emit an event to inform that the "like" button was clicked
            if (this.mensagem.likes.includes(user)) {
                updateDoc(post, {
                    ...this.mensagem,
                    likes: this.mensagem.likes.filter(id => id != user)
                }).catch(error => console.log(error))
                this.$store.commit('removeLike', {
                    index: this.$route.params.index,
                    userID: user
                })
            } else {
                updateDoc(post, {
                    ...this.mensagem,
                    likes: [...this.mensagem.likes, user]
                }).catch(error => console.log(error))
                this.$store.commit('addLike', {
                    index: this.$route.params.index,
                    userID: user
                })
            }
        },
        toggleCommentLike(comment) {
            this.$store.dispatch('toggleLikeComment', {
                messageId: this.mensagem.messageId,
                commentId: comment.id,
            });

            // colocar pra subir o comentario no firebase
        },
        addComment() {
            if (this.newCommentText.trim() !== '' && this.name.trim() !== '') {
                const newComment = {
                    messageId: this.mensagem.id,
                    name: this.name,
                    comment: this.newCommentText
                }
                const post = doc(fireStoreDB, 'posts', this.mensagem.id)
                updateDoc(post, {
                    ...this.mensagem,
                    comments: [...this.comments, newComment]
                }).catch(error => console.log(error))
                this.$store.dispatch('addCommentToMessage', newComment);
                // Limpar o texto do novo comentário
                this.newCommentText = '';
                this.name = '';
            }
        },
    },
};
</script>

<style scoped>
h1,
h2 {
    margin: 0px 0px 4px 0px;
}

.post-detail-container {
    margin-bottom: 20px;
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

.comments-list {
    list-style: none;
    padding: 0;
}

.comment-item {
    border: 1px solid #ccc;
    margin-bottom: 10px;
    padding: 10px;
}

.comment-header {
    font-weight: bold;
}

.comment-content {
    margin-top: 5px;
}

.comment-actions {
    margin-top: 10px;
}

.add-comment-section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
}

.add-comment-section input {
    width: 40%;
    padding: 6px;
    margin-bottom: 10px;
}

.add-comment-section textarea {
    width: 98%;
    padding: 8px;
    margin-bottom: 10px;
    resize: vertical;
}

.add-comment-section .comment-button {
    background-color: #27ae60;
    color: #fff;
    width: 100px;
    padding: 5px 10px;
    border: none;
    cursor: pointer;
}

.add-comment-section .comment-button:hover {
    background-color: #219d52;
}
</style>
