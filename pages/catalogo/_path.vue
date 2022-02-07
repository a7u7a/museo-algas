<template>
  <div>
    <div class="fixed pt-24 w-72 pl-24 font-serif">
        <div class="text-3xl italic text-right"> {{alga.ficha.especie}}</div>
        <div class="flex flex-col mt-2 space-y-2 text-right">
            <p>Características</p>
            <p>Representación</p>
            <p>Herborización</p>
        </div>
    </div>
    <div class="flex flex-col w-screen items-center font-serif">
      <div class="pt-24 w-7/12">
        <div>
          <div class="text-3xl italic">{{ alga.ficha.especie }}</div>
          <div class="flex mt-4 flex-row space-x-4">
            <p>Características</p>
            <p>Representación</p>
            <p>Herborización</p>
          </div>
        </div>

        <div class="text-xl mt-8">Características</div>
        <classTable :tabla="alga.ficha.tabla" />

        <div class="mt-8">
          <div class="mb-4" v-for="(info, i) in alga.ficha.info" :key="i">
            <a class="font-bold">{{ info.nombre }}:</a>
            <a>{{ info.data }}</a>
          </div>
        </div>

        <webGLViewport />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  mounted: function () {
    window.addEventListener("scroll", function () {
      console.log(window.scrollY);
    });
  },
  // methods:{
  //     test: function(){
  //         console.log(window.scrollY)
  //     }
  // },
  computed: {
    alga() {
      return this.$store.getters.getAlgaByPath(this.$route.params.path);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>