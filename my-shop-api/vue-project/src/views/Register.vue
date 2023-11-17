<template>
    <section>
        <search_comp/>
        <Register_comp/>
    </section>
</template>
    
<script>
    import Register_comp from '../components/Register_comp.vue'
    import search_comp from '../components/search_comp.vue'
    export default {
    components: {
        Register_comp,
        search_comp,
        } 
    }
</script>

<style>
</style>
