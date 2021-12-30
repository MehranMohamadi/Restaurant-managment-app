<template>
  <Header></Header>
  <h1 class="title">سفارشات</h1>
  <table border="1" class="table">
    <tr>
      <td>userid</td>
      <td>سفارش دهنده</td>
      <td>سفارش</td>
      <td>آدرس تحویل</td>



    </tr>
    <tr v-for="item in order" :key="item.user">
      <td>{{item.userid}}</td>
      <td>{{ item.user }}</td>
      <td>{{ item.food }}</td>
      <td>{{item.address}}</td>

    </tr>
  </table>
</template>

<script>
import axios from "axios"
import Header from "./Header";

export default {
  name: "order",
  data() {
    return {
      name: '',
      order: []

    }
  },
  components: {
    Header,

  },
  methods: {
    async loadData() {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      if (!user) {
        this.$router.push({name: 'Signup'})
      }
      let result = await axios.get("http://localhost:3000/order");

      this.order = result.data;
    }
  },
  async mounted() {
    await this.loadData();
  }
}
</script>

<style scoped>
table {
  border-collapse: collapse;
  width: 100%;

}

tr:hover {
  background-color: #2c3e50;
  color: wheat;
}

td {
  width: 160px;
  height: 40px;
  padding: 0;
  direction: rtl;
}


</style>