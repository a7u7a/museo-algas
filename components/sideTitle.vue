<template>
  <div class="hidden flex-col pl-16 pr-8 w-80 items-end md:flex font-serif">
    <div class="fixed opacity-0" :class="{ 'opacity-100': showSideHeader }">
      <div class="text-lg text-right">
        <a class="italic">{{ especie }}</a>
        <a>{{ abreviatura }}</a>
      </div>
      <div
        class="flex flex-col mt-4 space-y-2 text-right underline text-gray-400"
      >
        <a href="#1">Características</a>
        <a href="#2">Colección</a>
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