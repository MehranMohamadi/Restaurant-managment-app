<template>
    <img class="logo" src="../assets/canva-yellow-healthy-restaurant-logo-__6luq53u1w.jpg" alt="n">
    <h1>lOGIN</h1>
    <div class="login">

        <input type="text" v-model="email" placeholder="enter email">
        <input type="password" v-model="password" placeholder="enter password">
        <button v-on:click="login">Login</button>
        <P>
            <router-link to="/sign-up">SIGN UP</router-link>
        </P>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                email: '',
                password: ''
            }
        }
        ,
        methods: {
            login() {
                console.log(this.email, this.password)
            }
        }
    }
</script>

<style>

</style>