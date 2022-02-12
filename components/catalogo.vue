<template>
  <div
    class="
      fixed
      flex flex-col
      pl-6
      md:pl-12
      mt-16
      
      bg-mdla-bg
      w-full
      border-b border-gray-400
      font-serif
    "
  >
    <div class="text-md mt-4">
      <a>Catálogo</a>
    </div>
    <div>
      <div
        class="
          flex flex-row
          justify-start
          w-screen
          mds:justify-center
          overflow-x-auto
        "
      >
        <algaBtn
          v-for="(alga, i) in algas"
          :key="i"
          :nombresArr="alga.ficha.nombres"
          :especie="alga.ficha.especie"
          :thumb="alga.thumb"
          :abreviatura="alga.ficha.abreviatura"
          :to="alga.path"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      algas: null,
    };
  },
  mounted: function () {
    this.algas = this.$store.getters.getAll();
    console.log("algas", this.algas)
  },
};
</script>

<style lang="scss" scoped>
</style>