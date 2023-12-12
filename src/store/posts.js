export default {
    state: {
        messageDataList: [],
        message: {}
    },
    mutations: {
        setMessages(state, messages) {
            state.messageDataList = messages;
        },
        addCommentToMessage(state, { messageId, name, comment }) {
            const postIndex = state.messageDataList.findIndex(post => post.id === messageId);
            if (postIndex !== -1) {
                state.messageDataList[postIndex].comments.push({
                    id: state.messageDataList[postIndex].comments.length + 1,
                    name,
                    comment,
                    likes: [],
                });
            }
        },
        addLike(state, {index, userID}) {
            state.messageDataList[index].likes.push(userID)
        },
        removeLike(state, {index, userID}) {
            state.messageDataList[index].likes.splice(userID, 1)
        }
    },
    actions: {
        fetchMessages(context, messages) {
            // Aqui você pode realizar lógica assíncrona, se necessário
            context.commit('setMessages', messages);
        },
        getMessagesFilter({ state }, id) {
            return state.messageDataList.filter(mensagem => mensagem.id == id);
        },
        addCommentToMessage({ commit }, { messageId, name, comment }) {
            commit('addCommentToMessage', { messageId, name, comment });
        },
    },
    getters: {
        getMessages(state) {
            return state.messageDataList
        }
    }
};
