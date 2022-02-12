<template>
  <div
    class="
      fixed
      z-50
      flex flex-row
      h-16
      pl-8
      md:pl-12
      w-full
      items-center
      justify-between
      border-b border-gray-400
      font-serif
      bg-mdla-bg
    "
  >
    <NuxtLink class="text-lg font-bold" to="/">Museo de las Algas</NuxtLink>
    <div class="pr-8 md:pr-12">
      <button
        class="font-sans bg-gray-200 rounded pr-2 pl-2 hover:bg-gray-300"
        v-on:click="showCatalog"
      >
        Catálogo
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    showCatalog: function (event) {
      console.log("catalog", this.$store.getters.getAlgaByPath("carola"));
    },
  },
};
</script>

<style scoped>
</style>