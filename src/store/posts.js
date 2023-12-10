export default {
    state: {
      messageDataList: [],
    },
    mutations: {
      setMessages(state, messages) {
        state.messageDataList = messages;
      },
    },
    actions: {
      fetchMessages(context, messages) {
        // Aqui você pode realizar lógica assíncrona, se necessário

        setTimeout(() => {
          context.commit('setMessages', messages);
        }, 1000);
      },
    },
    getters: {
      getMessages(state){
        return state.messageDataList
      },
      getMessagesFilter: (state) => (id) => {
        return state.messageDataList.filter(mensagem => mensagem.id === id);
      }
    } 
  };
  