import Vue from "vue"
import Router from "vue-router";

import Login from './view/Login.vue';
import Home from './view/Home.vue';
import UserPosts from './view/UserPosts.vue';
import NewPost from './view/NewPost.vue';
import Post from './view/Post.vue';
import Cadastrar from './view/Cadastrar.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Login,
            name: 'login'
        },
        {
            path: '/cadastro',
            component: Cadastrar,
            name: 'cadastro',
        },
        {
            path: '/home',
            component: Home,
            name: 'home'
        },
        {
            path: '/myposts',
            component: UserPosts,
            name: 'myposts'
        },
        {
            path: '/new-post',
            component: NewPost,
            name: 'newPost'
        },
        {
            path: '/post/:id',
            component: Post,
            name: 'post',
            props: true
        },
    ]
})