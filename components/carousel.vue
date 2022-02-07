<template>
  <div class="">
    <div
      class="
        flex flex-row
        justify-start
        w-screen
        md:justify-center
        overflow-x-auto
      "
    >
      <algaBtn
        v-for="(alga, i) in algas"
        :key="i"
        :nombresArr="alga.ficha.nombres"
        :especie="alga.ficha.especie"
        :thumb="alga.thumb"
        :abreviatura="alga.abreviatura"
        :to="alga.path"
      />
    </div>
  </div>
</template>

<script>
import algas from "../utils/algas";
export default {
  props: ["tipo"],
  data: function () {
    return {
      algas: null,
    };
  },
  mounted: function () {
    this.algas = this.$store.getters.getAlgaByType(this.tipo)
  },
};
</script>

<style lang="scss" scoped>
</style>