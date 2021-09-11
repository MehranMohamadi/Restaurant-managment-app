<template>
    <h1>Hello ,welcom to home page</h1>
</template>

<script>
    export default {
         name: "Home",
        mounted() {
            let user=localStorage.getItem('user-info');
            if (!user){
                this.$router.push({name:'Signup'})
            }
        }
    }
</script>

<style scoped>

</style>