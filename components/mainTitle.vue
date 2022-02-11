<template>
  <div class="font-serif">
    <div class="text-xl mt-4">
      <a class="italic">{{ especie }}</a>
      <a>{{ abreviatura }}</a>
    </div>
    <div class="flex flex-row flex-wrap font-sans mt-4 text-gray-400 space-x-4">
      <a class="bg-gray-200 rounded pr-2 pl-2 hover:bg-gray-300" href="#1">Características</a>
      <a class="bg-gray-200 rounded pr-2 pl-2 hover:bg-gray-300" href="#2">Colección</a>
    </div>
  </div>
</template>

<script>
export default {
  props: ["especie", "abreviatura"],
};
</script>

<style lang="scss" scoped>
</style>