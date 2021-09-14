<template>
    <Header></Header>
    <h1>Hello {{name}} welcom to home page</h1>

</template>

<script>
    import Header from "./Header";

    export default {
        name: "Home",
        data() {
            return {
                name: ''
            }
        },
        components: {
            Header
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            this.name = JSON.parse(user).name;
            if (!user) {
                this.$router.push({name: 'Signup'})
            }
        }
    }
</script>

<style scoped>

</style>