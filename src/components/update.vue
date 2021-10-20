<template>
  <Header></Header>
  <h1>Hello ,welcom to update food page</h1>
  <form class="add">
    <input type="text" name="name" placeholder="enter name" v-model="food.name"/>
    <input type="text" name="rate" placeholder="enter rate" v-model="food.rate"/>
    <input type="text" name="price" placeholder="enter price" v-model="food.price"/>
    <button type="button" v-on:click="updatefood">update Food</button>
  </form>
</template>

<script>
import Header from "./Header";
import axios from "axios";

export default {
  name: "update",
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
    async updatefood() {
      const result = await axios.put("http://localhost:3000/food/" + this.$route.params.id, {
        name: this.food.name,
        price: this.food.price,
        rate: this.food.rate,
      });
      if (result.status == 200) {
        this.$router.push({name: 'Home'})
      }
    }
  },
  async mounted() {
    let user = localStorage.getItem('user-info');
    if (!user) {
      this.$router.push({name: 'Signup'})
    }
    const result = await axios.get('http://localhost:3000/food/' + this.$route.params.id)
    console.warn(result.data)
    this.food = result.data
  }
}
</script>

<style scoped>

</style>