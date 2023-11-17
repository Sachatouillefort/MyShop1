<template>
    <section>
        <search_comp/>
        <Login_comp/>
</section>
</template>

<script>    
    import search_comp from '../components/search_comp.vue'
    import Login_comp from '../components/Login_comp.vue'

    export default {
        components: {
            search_comp,
            Login_comp,
        } 
    }

</script>



<style>
</style>
