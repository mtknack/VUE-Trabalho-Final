<template>
    <div class="login-container">
        <h2>Cadastro</h2>
        <form @enviar.prevent="login">
        <label for="username">User Name:</label>
        <input type="text" id="username" v-model="username" required>

        <label for="userlogin">User Login:</label>
        <input type="text" id="userlogin" v-model="userlogin" required>

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>

        <button @click="cadastrar">Cadastrar</button>

        </form>
        <div class="menu-item" @click="navigateTo('home')">
            <span>Entrar como convidado</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CadastroView',
    data() {
        return {
            username: '',
            password: '',
            userlogin: ''
        };
    },
    methods: {
        cadastrar() {
            console.log('Username:', this.username, 'UserLOGIN:', this.userlogin, 'Password:', this.password);
            if(this.username && this.userlogin && this.password){
                this.navigateTo('login')
            }
        },
        navigateTo(route) {
            this.$router.push({ name: route });
        },
    }
};
</script>

<style scoped>
.login-container {
    position: absolute;
    max-width: 500px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    margin-top: 10vh;
    margin-left: 75vh;
}

form {
display: flex;
flex-direction: column;
}

label {
margin-bottom: 8px;
}

input {
padding: 8px;
width: 250px;
margin-bottom: 16px;
}

button {
padding: 10px;
background-color: #3498db;
color: #fff;
border: none;
border-radius: 4px;
cursor: pointer;
}

button:hover {
background-color: #2980b9;
}

.menu-item {
margin-top: 20px;
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
