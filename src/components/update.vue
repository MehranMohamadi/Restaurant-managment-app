<template>
  <Header></Header>
  <h1 class="title">صفحه بروزرسانی</h1>
  <form class="add">
    <input type="text" name="name" placeholder="enter name" v-model="food.name"/>
    <input type="text" name="rate" placeholder="enter rate" v-model="food.rate"/>
    <input type="text" name="price" placeholder="enter price" v-model="food.price"/>
    <button style="font-size: 20px; color: #080f38" class="title" type="button" v-on:click="updatefood">بروزرسانی
    </button>
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

    this.food = result.data
  }
}
</script>

<style scoped>

</style>