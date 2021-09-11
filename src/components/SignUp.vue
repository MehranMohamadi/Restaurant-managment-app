<template>
    <img class="logo" src="../assets/canva-yellow-healthy-restaurant-logo-__6luq53u1w.jpg" alt="n">
    <h1>signup</h1>
    <div class="register">
        <input type="text" placeholder="enter name">
        <input type="text" placeholder="enter email">
        <input type="password" placeholder="enter password">
        <button>Sign up</button>
    </div>
</template>

<script>
    export default {
        name: "SignUp"
    }
</script>

<style scoped>
.logo{
    width: 100px;
}
   .register input{
       width: 300px;
       height: 40px;
       padding-left: 20px;
       display: block;
       margin-bottom: 30px;
       margin-right: auto;
       margin-left: auto;
       border: 1px solid skyblue;

   }
</style>