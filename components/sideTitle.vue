<template>
  <div class="fixed hidden flex-col pl-6 items-end pr-6 w-1/5 md:flex font-serif">
    <div class="opacity-0" :class="{ 'opacity-100': showSideHeader }">
      <div class="text-lg text-right">
        <a class="italic">{{ especie }}</a>
        <a>{{ abreviatura }}</a>
      </div>
      <div
        class="flex flex-col mt-4 space-y-2 items-end font-sans text-gray-400"
      >
        <a class="bg-gray-200 rounded pr-2 pl-2 hover:bg-gray-300" href="#1">Características</a>
        <a class="bg-gray-200 rounded pr-2 pl-2 hover:bg-gray-300" href="#2">Colección</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["especie", "showSideHeader", "abreviatura"],
};
</script>

<style lang="scss" scoped>
</style>