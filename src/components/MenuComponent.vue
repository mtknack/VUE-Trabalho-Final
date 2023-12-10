<template>
  <div class="vertical-menu">
    <div class="menu-item" @click="navigateTo('home')">
      <span>Home</span>
    </div>
    <div class="menu-item" @click="navigateTo('login')">
      <span>Seus Posts</span>
    </div>
    <div v-if="usuarioLogado" class="menu-item" @click="navigateTo('newPost')">
      <span>Novo Post</span>
    </div>
    <div class="menu-item" @click="navigateTo('login')">
      <span>{{ usuarioLogado ? "Sair" : "Logar" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  methods: {
    navigateTo(route) {
      // Use Vue Router to navigate to the specified route
      this.$router.push({ name: route });
    },
    usuarioLogado(){
      // fazer a teoria de puxar do local storage se o usuario está logado
      return true
    }
  },
};
</script>

<style scoped>
.vertical-menu {
  width: 200px;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  position: relative;
}

.menu-item {
  margin-bottom: 10px;
  cursor: pointer;
}

.menu-item span {
  text-decoration: none;
  color: #333;
  font-size: 16px;
  padding: 8px;
  border-radius: 3px;
  display: block;
  transition: background-color 0.3s;
  text-align: center;
}

.menu-item:hover span {
  background-color: #3498db;
  color: #fff;
}
</style>
