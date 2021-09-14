<template>
    <Header></Header>
    <h1>Hello {{name}} welcom to home page</h1>
    <table border="1">
        <tr>
            <td>id</td><td>name</td><td>price</td><td>rate</td>
        </tr>
        <tr v-for="item in food" :key="item.id">
            <td>{{item.id}}</td>
            <td>{{item.name}}</td>
            <td>{{item.price}}</td>
            <td>{{item.rate}}</td>

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
        async mounted() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({name: 'Signup'})
            }
            let result = await axios.get("http://localhost:3000/food");
            console.warn(result)
            this.food = result.data;
        }
    }
</script>

<style scoped>
td{
    width: 160px;
    height: 40px;
}
</style>