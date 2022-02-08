<template>
<div>
            <div class="text-3xl mt-4 italic">{{ especie }}</div>
            <div class="flex flex-row flex-wrap mt-4 underline text-gray-400">
              <a class="mr-4" href="#1">Características</a>
              <a class="mr-4" href="#1">Representación</a>
              <a class="mr-4" href="#1">Herborización</a>
              <a href="#1">Mapa</a>
            </div>
          </div>
</template>

<script>
    export default {
        props:["especie"]
    }
</script>

<style lang="scss" scoped>

</style>