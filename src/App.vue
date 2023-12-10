<template>
  <div id="app">
     <div v-if="!isLoginRoute" class="vertical-menu">
      <MenuComponentVue />
    </div>
    <div class="scroll">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import MenuComponentVue from './components/MenuComponent.vue';

export default {
  name: 'App',
  computed: {
    isLoginRoute() {
      return this.$route.name === 'login' || this.$route.name  === 'cadastro';
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

.scroll{
  overflow-y: scroll;
  width: 100%;
  height: 100vh;
  padding: 10px 40px;
}
</style>
