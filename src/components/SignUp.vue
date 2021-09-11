<template>
    <img class="logo" src="../assets/canva-yellow-healthy-restaurant-logo-__6luq53u1w.jpg" alt="n">
    <h1>signup</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="enter name">
        <input type="text" v-model="email" placeholder="enter email">
        <input type="password" v-model="password" placeholder="enter password">
        <button v-on:click="signUp">Sign up</button>
    </div>
</template>

<script>
    import axios from 'axios'

    export default {
        name: "SignUp",
        data() {
            return {
                name: '',
                email: '',
                password: ''
            }
        },
        methods: {
            async signUp() {
                let result = await axios.post("http://localhost:3000/user", {
                    email: this.email,
                    password: this.password,
                    name: this.name
                })
                console.warn(result);
                if (result.status == 201)
                {
                    alert("sign-up done")
                }
            }
        }

    }
</script>

<style scoped>
    .logo {
        width: 100px;
    }

    .register input {
        width: 300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border: 1px solid skyblue;

    }

    .register button {
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background-color: skyblue;
        color: #afff;
        cursor: pointer;
    }
</style>