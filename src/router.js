import Vue from "vue"
import Router  from "vue-router";
import LoginComponent from './components/LoginComponent.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes:[
    {
      path: '/login',
      components: LoginComponent,
      name: "LoginComponent"
    },
      // {
      //     path: '/usuario',
      //     // component: Usuario, 
      //     components:{
      //         default: Usuario,
      //         menu: MenuAlt,
      //         menuInferior: MenuInferior
      //     },
      //     props: true,
      //     children:[
      //         {
      //             path: '',
      //             component: UsuarioLista,       
      //         },
      //         {
      //             path: ':id',
      //             component: UsuarioDetalhe, 
      //             props: true
      //         },
      //         {
      //             path: ':id/editar',
      //             component: UsuarioEditar, 
      //             props: true,
      //             name: "editarUsuario"
      //         }
      //     ]
      // },
      // {
      //     path: '*',
      //     redirect: '/'
      // }
  ]
})