<template>
  <img class="logo" src="../assets/saavi.png" alt="n">
  <h1 class="title">ورود</h1>
  <div class="login">
    <input type="text" v-model="email" placeholder="ایمیل خود را وارد کنید">
    <input type="password" v-model="password" placeholder="پسورد خود را وارد کنید">
    <button v-on:click="login">ورود</button>
    <P>
      <router-link to="/sign-up" style="text-decoration: none"><span id="signup-button">ثبت نام</span></router-link>
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

      if (result.status == 200 && result.data.length > 0 && result.data[0].role === 'User') {
        console.warn(result.data.role)
        localStorage.setItem("user-info", JSON.stringify((result.data[0])))
        this.$router.push({name: 'Home2'})
      } else if (result.status == 200 && result.data.length > 0 && result.data[0].role === 'admin') {
        console.warn(result.data.role)
        localStorage.setItem("user-info", JSON.stringify((result.data[0])))
        this.$router.push({name: 'Home'})
      }
      console.warn(result)
    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (user) {

      this.$router.push({name: 'Home'})
    }
    console.warn(user)
  }

}
</script>

<style>


#signup-button {
  color: #dddddd;

  margin: 0;
  border: 2px solid #96ff56;
  text-decoration: none;
  padding: 4px 100px 4px 100px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
}
</style>