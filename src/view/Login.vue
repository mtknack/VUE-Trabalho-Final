<template>
    <div class="login-container">
        <h2>Login</h2>
        <form @enviar.prevent="login">
            <label for="username">Username:</label>
            <input type="text" id="username" v-model="userlogin" required>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password" required>
            <button @click="event => login(event)">Login</button>
        </form>
        <div class="menu-item" @click="navigateTo('cadastro')">
            <span>Cadastrar</span>
        </div>
        <div class="menu-item" @click="resetLocalStorage()">
            <span>Entrar como convidado</span>
        </div>
    </div>
</template>

<script>
import { auth } from '../config/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
    name: 'LoginView',
    data() {
        return {
            userlogin: '',
            password: ''
        };
    },
    methods: {
        login(e) {
            e.preventDefault()

            if (!this.userlogin || !this.password){
                return alert('Preencha todos os campos')
            }

            signInWithEmailAndPassword(auth, this.userlogin, this.password)
                .then(userCredential => {
                    localStorage.setItem('userID', userCredential.user.uid)
                    this.navigateTo('home');
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        convidado() {
            console.log('Login clicked. Username:', this.username, 'Password:', this.password);
            localStorage.setItem('user', 'guest')
            this.$router.push({ name: 'home' });
        },
        navigateTo(route) {
            this.$router.push({ name: route });
        },
        resetLocalStorage(){
            localStorage.clear();
            this.navigateTo('home')
        }
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
    margin-top: 10px;
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
