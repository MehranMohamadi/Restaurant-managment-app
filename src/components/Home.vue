<template>
  <Header></Header>
  <h1 class="title">سلام {{ name }} خوش اومدی</h1>
  <table border="1" class="table">
    <tr>
      <td>id</td>
      <td>نام</td>
      <td>قیمت</td>
      <td>درصد محبوبیت</td>
      <td>عملیات</td>
    </tr>
    <tr v-for="item in food" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.price }}</td>
      <td>{{ item.rate }}</td>
      <td>
        <router-link :to="'/update/'+item.id" style="text-decoration:none "><span id="update-button">بروزرسانی</span>
        </router-link>
        <button v-on:click="deletefood(item.id)">حذف</button>
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
    Header,

  },
  methods: {
    async deletefood(id) {
      let result = await axios.delete("http://localhost:3000/food/" + id);
      if (result.status == 200) {
        this.loadData();
        this.$swal({
          position: 'top',
          icon: 'success',
          title: 'حذف شد',
          showConfirmButton: false,
          timer: 1500
        });
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

tr:hover {
  background-color: #2c3e50;
  color: wheat;

}

td {
  width: 160px;
  height: 40px;
  direction: rtl;

  padding: 0;
}

#update-button {
  color: #e8d5d5;
  padding: 0 10px 0 10px;
  margin: 3px;
  background-color: #5c7598;
  border: 4px solid #080f38;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bolder;
  font-family: "2  Nazanin", sans-serif;
}

#update-button:hover {
  background-color: red;

}
</style>