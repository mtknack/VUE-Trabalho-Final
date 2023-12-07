<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @enviar.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>

        <button type="enviar">Login</button>

        </form>
        <div>
            <a @click="convidado">entrar como convidado</a>
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
        },
        convidado(){
            console.log('Login clicked. Username:', this.username, 'Password:', this.password);
        }
        
    }
};
</script>

<style scoped>
.login-container {
max-width: 300px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 8px;
box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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

a{
    cursor: pointer;
}
</style>
