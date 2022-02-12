<template>
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
</template>

<script>
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