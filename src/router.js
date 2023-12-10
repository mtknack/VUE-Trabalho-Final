import Vue from "vue"
import Router  from "vue-router";

import Login from './view/Login.vue';
import Home from './view/Home.vue';
import NewPost from './view/NewPost.vue';
import Post from './view/Post.vue';

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes:[
      {
        path: '/',
        component: Login,
        name: 'login'
      },
      {
        path: '/home',
        component: Home,
        name: 'home'
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
      }
    ]
})