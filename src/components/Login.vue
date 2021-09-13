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
import axios from 'axios'

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
            async login() {
                let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`)

                if (result.status==200 && result.data.length>0){
                    localStorage.setItem("user-info",JSON.stringify((result.data[0])))
                    this.$router.push({name:'Home'})
                }
                console.warn(result)
            }
        }

    }
</script>

<style>

</style>