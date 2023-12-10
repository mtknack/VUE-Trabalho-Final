export default {
    state: {
      messageDataList: [],
      message: {}
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
      getMessagesFilter({state}, id){

        console.log(id, state)
        return state.messageDataList.filter(mensagem => mensagem.id == id); 
      }
    },
    getters: {
      getMessages(state){
        return state.messageDataList
      }
    } 
  };
  