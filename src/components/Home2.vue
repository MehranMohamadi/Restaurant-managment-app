<template>
  <Header2></Header2>
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
        <button class="order" v-on:click="order(this.name,item.name,this.id,this.address)">سفارش</button>
      </td>

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
    async order(user,food,userid,address) {

      const result = await axios.post("http://localhost:3000/order", {
        user: user,
        food:food,
        userid:userid,
        address:address,

      });
      if (result.status == 201) {
        this.$swal({
          position: 'top',
          icon: 'success',
          title: 'سفارش ثبت شد',
          showConfirmButton: false,
          timer: 1500
        });
        console.log(food)


      }

    },
    async loadData() {
      let user = localStorage.getItem('user-info');
      this.name = JSON.parse(user).name;
      this.id=JSON.parse(user).id;
      this.address=JSON.parse(user).address;
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
table {
  border-collapse: collapse;
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

.order {
  background-color: rgba(163, 238, 123, 0.76);
  color: #080f38;
}

.order:hover {
  background-color: #a6e87c;
}
</style>