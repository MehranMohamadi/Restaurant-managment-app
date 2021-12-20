<template>
  <Header></Header>
  <h1 class="title">یک غذا به لیست اضافه کنید</h1>
  <form class="add">
    <input type="text" name="name" placeholder="نام غذا را وارد کنید" v-model="food.name"/>
    <input type="text" name="rate" placeholder="نمره را وارد کنید" v-model="food.rate"/>
    <input type="text" name="price" placeholder="قیمت را وارد کنید" v-model="food.price"/>
    <button style="font-size: 20px; color: #080f38" type="button" v-on:click="addfood">اضافه کردن غذا</button>
  </form>
</template>

<script>
import Header from "./Header";
import axios from "axios";

export default {
  name: "Add",
  components: {
    Header
  },
  data() {
    return {
      food: {
        name: '',
        rate: '',
        price: ''
      }
    }
  },
  methods: {
    async addfood() {

      const result = await axios.post("http://localhost:3000/food", {
        name: this.food.name,
        price: this.food.price,
        rate: this.food.rate,
      });
      if (result.status == 201) {
        this.$router.push({name: 'Home'})
      }
      console.warn('result', result)


    }
  },
  mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'Signup'})
    }
  }
}
</script>

<style scoped>

</style>