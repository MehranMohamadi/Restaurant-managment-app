<template>
    <img class="logo" src="../assets/canva-yellow-healthy-restaurant-logo-__6luq53u1w.jpg" alt="n">
    <h1>signup</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="enter name">
        <input type="text" v-model="email" placeholder="enter email">
        <input type="password" v-model="password" placeholder="enter password">
        <button v-on:click="signUp">Sign up</button>
        <P><router-link to="/login">Login</router-link></P>
    </div>
</template>

<script>
    export default {
        name: "Login"
    }
</script>

<style scoped>

</style>