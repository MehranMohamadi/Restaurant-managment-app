<template>
    <Header></Header>
    <h1>Hello ,welcom to home page</h1>

</template>

<script>
    import Header from "./Header";

    export default {
        name: "Home",
        components: {
            Header
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if (!user) {
                this.$router.push({name: 'Signup'})
            }
        }
    }
</script>

<style scoped>

</style>