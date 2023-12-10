<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @enviar.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="username" required>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <button @click="login()">Login</button>
        </form>
        <div class="menu-item" @click="convidado()">
            <span>Entrar como convidado</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'LoginView',
    data() {
        return {
            username: '',
            password: ''
        };
    },
    methods: {
        login() {
            // Implement your login logic here
            console.log('Login clicked. Username:', this.username, 'Password:', this.password);
            localStorage.setItem('user', 'guest')
            this.$router.push({ name: 'home' });
        },
        convidado() {
            console.log('Login clicked. Username:', this.username, 'Password:', this.password);
            localStorage.setItem('user', 'guest')
            this.$router.push({ name: 'home' });
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
    margin-top: 20vh;
    margin-left: 80vh;
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
