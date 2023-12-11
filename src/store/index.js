import Vue from 'vue';
import Vuex from 'vuex';
import posts from './posts';
import likes from './likes';
import * as getters from './getters'

Vue.use(Vuex);

export default new Vuex.Store({
    getters,
    modules: {
        posts,
        likes
    },
})
