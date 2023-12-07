export default {
    state: {
      messageDataList: [ ],
    },
    mutations: {
      setMessages(state, messages) {
        state.messageDataList.push(messages);
      },
    },
    actions: {
      fetchMessages(context, messages) {
        // Aqui você pode realizar lógica assíncrona, se necessário
        context.commit('setMessages', messages);
      },
    },
    getters: {
      getMessages(state){
        return state.messageDataList
      },
    } 
  };
  