<template>
    <div v-if="mensagem.length > 0" class="post-detail-container">
        <h2>{{ mensagem[0].title }}</h2>
        <div class="post-info">
            <p>{{ formatDateTime(mensagem[0].formattedDateTime) }}</p>
        </div>
        <div class="post-content">
            <p>{{ mensagem[0].message }}</p>
        </div>
        <div class="post-interactions">
            <button @click="toggleLike" class="like-button">
                {{ mensagem[0].isLiked ? 'Unlike' : 'Like' }} {{ mensagem[0].likeCount }}
            </button>
            <span class="comment-count">{{ mensagem[0].comments.length }} comentários</span>
        </div>
        <div class="comments-section">
            <h3>Comments</h3>
            <ul class="comments-list">
                <li v-for="comment in mensagem[0].comments" :key="comment.id" class="comment-item">
                    <div class="comment-header">
                        <strong>{{ comment.name }}</strong> - {{ comment.formattedDateTime }}
                    </div>
                    <div class="comment-content">
                        {{ comment.comment }}
                    </div>
                    <div class="comment-actions">
                        <button @click="toggleCommentLike(comment)" class="like-button">
                            {{ comment.isLiked ? 'Unlike' : 'Like' }} {{ comment.likeCount }}
                        </button>
                    </div>
                </li>
            </ul>
            <div class="add-comment-section">
                <h3>Add a Comment</h3>
                <form @enviar.prevent="commentForm">
                    <!-- Mano, pode tirar isso aqui? Pq o usuario ja está salvo no localstorage, n precisa se identificar -->
                    <!-- so se for convidado talvez, n lembro o que o giu falou -->
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
            this.mensagem = await this.$store.dispatch('getMessagesFilter', this.$route.params.id);
        } catch (error) {
            console.error('Erro ao obter mensagem:', error);
        }
    },
    methods: {
        formatDateTime(dateTime) {
            const NAN0_SECONDS = dateTime * 1000 // O new Date() trabalha com nanosegundos, mas a data vem em segundos do firebase
            const formattedDate = new Date(NAN0_SECONDS).toLocaleString('pt-BR');
            return formattedDate;
        },
        toggleLike() {
            this.$store.dispatch('toggleLikeMessage', this.mensagem[0].id);

        },
        toggleCommentLike(comment) {
            this.$store.dispatch('toggleLikeComment', {
                messageId: this.mensagem[0].messageId,
                commentId: comment.id,
            });
        },
        addComment() {
            if (this.newCommentText.trim() !== '' && this.name.trim() !== '') {
                
                this.$store.dispatch('addCommentToMessage', {
                    messageId: this.mensagem[0].id,
                    name: this.name,
                    comment: this.newCommentText,
                });
                // Limpar o texto do novo comentário
                this.newCommentText = '';
            }
        },
    },
};
</script>

<style scoped>
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
