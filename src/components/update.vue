<template>
  <Header></Header>
  <h1>Hello ,welcom to update food page</h1>
  <form class="add">
    <input type="text" name="name" placeholder="enter name" v-model="food.name"/>
    <input type="text" name="rate" placeholder="enter rate" v-model="food.rate"/>
    <input type="text" name="price" placeholder="enter price" v-model="food.price"/>
    <button type="button" v-on:click="addfood">update Food</button>
  </form>
</template>

<script>
import Header from "./Header";

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