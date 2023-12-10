<template>
  <div id="app">
     <div v-if="!isLoginRoute" class="vertical-menu">
      <MenuComponentVue />
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import MenuComponentVue from './components/MenuComponent.vue';

export default {
  name: 'App',
  computed: {
    isLoginRoute() {
      return this.$route.name === 'login';
    },
  },
  components:{
    MenuComponentVue
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  width: 100%;
}
.vertical-menu{
  height: 100vh;
}
</style>
