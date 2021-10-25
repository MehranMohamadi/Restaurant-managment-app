<template>
  <Header2></Header2>
  <h1>خوش امدید {{ name }} سلام</h1>
  <table border="1" class="table">
    <tr>
      <td>id</td>
      <td>name</td>
      <td>price</td>
      <td>rate</td>
    </tr>
    <tr v-for="item in food" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.rate }}</td>

    </tr>
  </table>
</template>

<script>
import axios from "axios"
import Header2 from "./Header2";

export default {
  name: "Home",
  data() {
    return {
      name: '',
      food: []

    }
  },
  components: {
    Header2
  },
  methods: {

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
table{
  border-collapse: collapse;
}
tr:hover{
  background-color: #2c3e50;
  color: wheat;
}

td {
  width: 160px;
  height: 40px;
}
</style>