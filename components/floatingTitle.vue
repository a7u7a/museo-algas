<template>
  <div
    class="
      fixed
      opacity-0
      flex flex-row
      items-center
      pl-6
      md:pl-12
      mt-16
      h-14
      bg-mdla-bg
      w-full
      border-b border-gray-400
      font-sans
    "
    :class="{ 'opacity-100 md:opacity-0': showSideHeader }"
  >
    <div class="text-lg">
      <a class="italic"> {{ especie }} </a>
      <a>{{ abreviatura }}</a>
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