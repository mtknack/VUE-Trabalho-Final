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
                    likeCount: 0,
                });
            }
        },
    },
    actions: {
        fetchMessages(context, messages) {
            // Aqui você pode realizar lógica assíncrona, se necessário

            setTimeout(() => {
                context.commit('setMessages', messages);
            }, 1000);
        },
        getMessagesFilter({ state }, id) {

            console.log(id, state)
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
