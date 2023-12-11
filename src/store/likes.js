export default {
    state: {
        likes: [],
    },
    mutations: {
        setLikes(state, likes) {
            state.likes = likes;
        },
        addLike(state, postID) {
            if(state.likes.includes(postID)) return
            state.likes.push(postID)
        },
        removeLike(state, postID) {
            state.likes = state.likes.filter(id => id != postID)
        }
    },
    getters: {
        getLikes(state) {
            return state.likes
        }
    }
};
