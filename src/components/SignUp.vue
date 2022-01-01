<template>
  <img class="logo" src="../assets/saavi.png" alt="n">
  <h1 class="title">ثبت نام</h1>
  <div class="register">

      <input type="text" v-model="name" placeholder="نام خود را وارد کنید " >
      <input type="text" v-model="email" placeholder="ایمیل خود را وارد کنید " >
      <input type="password" v-model="password" placeholder="پسورد خود را وارد کنید" >
      <input type="text" v-model="address" placeholder="آدرس خود را وارد کنید" >
      <button v-on:click="signUp">ثبت نام</button>
      <P>
        <router-link to="/login" id="Login-button">قبلا ثبت نام کرده ام</router-link>
      </P>

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
      password: '',
      address: '',
      role: ''
    }
  },
  methods: {
    async signUp() {
      let result = await axios.post("http://localhost:3000/user", {
        email: this.email,
        password: this.password,
        name: this.name,
        address: this.address,
        role: 'User'

      })
      if (result.status == 201) {

        localStorage.setItem("user-info", JSON.stringify(result.data));
        this.$router.push({name: 'Home2'});

      }

    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {
      this.$router.push({name: 'Home2'})
    }
  }
}
</script>

<style scoped>
#Login-button {
  color: #dddddd;
  background-color: rgba(15, 26, 47, 0.66);
  margin: 0;
  border: 2px solid #96ff56;
  text-decoration: none;
  padding: 4px 100px 4px 100px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>