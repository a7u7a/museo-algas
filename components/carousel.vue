<template>
  <div class="">
    <div
      class="
        flex flex-row
        justify-start
        w-screen
        overflow-auto
        md:justify-center
      "
    >
      <algaBtn
        v-for="(alga, i) in algas"
        :key="i"
        :nombresArr="alga.nombres"
        :especie="alga.especie"
        :thumbPath="alga.thumbPath"
        :abreviatura="alga.abreviatura"
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
    const filtered = algas.filter((alga) => {
      return alga.tipo == this.tipo;
    });
    this.algas = filtered;
  },
};
</script>

<style lang="scss" scoped>
</style>