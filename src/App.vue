<template>
  <router-view>

  </router-view>

</template>

<script>


export default {
  name: 'App',

}
</script>

<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

.logo {
  width: 200px;
  height: 200px;
  padding: 0;
  margin: 0;
}

body {
  margin: 0;
  padding: 0;
  background-color: #1f2530;

}

.register input, .login input, .add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-right: auto;
  margin-left: auto;
  border: 2.7px solid #6b90e5;
  background: none;
  border-radius: 10px;
  color: #dddddd;
  font-weight: bold;
  font-family: "2  Baran",serif;
  font-size: 20px;
  direction: rtl;

}


.add button {
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  background-color: skyblue;
  color: #afff;
  cursor: pointer;
}

.add input:hover {
  background-color: #6b90e5;
}

.register input:hover {
  background-color: #6b90e5;
}

.login input:hover {
  background-color: #6b90e5;
}

.register button ,.login button {
  color: #1f2530;
  background-color: #a3ee7b;
  margin: 10px;
  border: 2px solid #96ff56;
  text-decoration: none;
  padding: 4px 100px 4px 100px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
}
.table{

  background-color: #777777;
  cursor: pointer;
  color: #1f2530;
  font-size: 23px;
  font-weight: bolder;
  font-family: "2  Nazanin",sans-serif;
  width: 100%;
  border-collapse: collapse;
}
.table button{
  color: #e8d5d5;

  background-color: #5c7598;
  border: 4px solid #080f38;
  font-size: 20px;
  border-radius: 20px;
  cursor: pointer;
  font-weight: bolder;
  font-family: "2  Nazanin",sans-serif;

}
.table button:hover{
  background-color: red;
}
</style>
