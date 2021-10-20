<template>
  <Header></Header>
  <h1>Hello {{ name }} welcom to home page</h1>
  <table border="1">
    <tr>
      <td>id</td>
      <td>name</td>
      <td>price</td>
      <td>rate</td>
      <td>Actions</td>
    </tr>
    <tr v-for="item in food" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.rate }}</td>
      <td>
        <router-link :to="'/update/'+item.id">Update</router-link>
        <button v-on:click="deletefood(item.id)">Delete</button>
      </td>

    </tr>
  </table>
</template>

<script>
import axios from "axios"
import Header from "./Header";

export default {
  name: "Home",
  data() {
    return {
      name: '',
      food: []

    }
  },
  components: {
    Header
  },
  methods: {
    async deletefood(id) {
      let result = await axios.delete("http://localhost:3000/food/" + id);
      console.warn(result)
      if (result.status == 200) {
        this.loadData()
      }
    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({name: 'Signup'})
      }
      let result = await axios.get("http://localhost:3000/food");

      this.food = result.data;
    }
  },
  async mounted() {
    await this.loadData();
  }
}
</script>

<style scoped>
td {
  width: 160px;
  height: 40px;
}
</style>