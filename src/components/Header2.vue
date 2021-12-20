<template>
  <div class="nav">
    <a href="#" v-on:click="logout">خروج</a>
  </div>
</template>

<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({name: "Login"})
    }
  }
}
</script>

<style scoped>
.nav {
  background-color: rgba(124, 158, 232, 0.58);
  overflow: hidden;

}

.nav a {
  float: left;
  color: #f2f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
  text-decoration: none;
  margin-right: 5px;
}

.nav a:hover {
  background-color: #dddddd;
  color: #333333;
}
</style>