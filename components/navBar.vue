<template>
  <div class="fixed flex h-16 pl-12 w-full flex-row items-center space-x-12 border-b border-gray-400 font-serif bg-mdla-bg">
    <NuxtLink class="text-lg font-bold" to="/">Museo de las Algas</NuxtLink>
    <button class="underline" v-on:click="showCatalog">Catálogo</button>
  </div>
</template>

<script>
export default {
    methods:{
        showCatalog: function(event){
            console.log("catalog")
        }
    }
};
</script>

<style scoped>
</style>