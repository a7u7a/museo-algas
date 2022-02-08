<template>
  <div
    class="
      fixed
      opacity-0
      flex flex-row
      items-center
      pl-8
      md:pl-12
      mt-16
      h-14
      bg-mdla-bg
      w-full
      border-b border-gray-400
    "
    :class="{ 'opacity-100 md:opacity-0': showSideHeader }"
  >
    <div class="text-xl">{{ especie }}</div>
  </div>
</template>

<script>
export default {
    props:["especie", "showSideHeader"]
};
</script>

<style lang="scss" scoped>
</style>