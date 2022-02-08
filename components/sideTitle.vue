<template>
    <div class="hidden flex-col pl-16 pr-8 w-80 items-end md:flex">
        <div class="fixed opacity-0" :class="{ 'opacity-100': showSideHeader }">
          <div class="text-3xl italic text-right">{{ especie }}</div>
          <div class="flex flex-col mt-6 space-y-2 text-right underline text-gray-400">
            <a href="#1">Características</a>
            <a href="#2">Representación</a>
            <a href="#3">Herborización</a>
            <a href="#3">Mapa</a>
          </div>
        </div>
      </div>
</template>

<script>
    export default {
        props:["especie", "showSideHeader"]
    }
</script>

<style lang="scss" scoped>

</style>