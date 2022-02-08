<template>
  <div class="font-serif">
          <!-- floating title for smaller screens. appears when title is invisible -->

      <div class="fixed opacity-0 flex flex-row items-center pl-8 md:pl-12 mt-16 h-14 bg-mdla-bg w-full border-b border-gray-400" :class="{ 'opacity-100 md:opacity-0': showSideHeader }">
          <div class="text-xl"> {{ alga.ficha.especie }}</div>
          </div>

    <div class="flex flex-row pt-24">
      <!-- side title -->
      <div class="hidden flex-col pl-16 pr-8 w-80 items-end md:flex">
        <div class="fixed opacity-0" :class="{ 'opacity-100': showSideHeader }">
          <div class="text-3xl italic text-right">{{ alga.ficha.especie }}</div>
          <div class="flex flex-col mt-6 space-y-2 text-right underline text-gray-400">
            <a href="#1">Características</a>
            <a href="#2">Representación</a>
            <a href="#3">Herborización</a>
            <a href="#3">Mapa</a>
          </div>
        </div>
      </div>

  

      <!-- main content -->
      <div class="flex flex-col w-screen sm:w-2/4 md:max-w-4xl">
        <div class="pl-8 md:pl-0 pr-8">
          <div>
            <div class="text-3xl mt-4 italic">{{ alga.ficha.especie }}</div>
            <div class="flex flex-row flex-wrap mt-4 underline text-gray-400">
              <a class="mr-4" href="#1">Características</a>
              <a class="mr-4" href="#1">Representación</a>
              <a class="mr-4" href="#1">Herborización</a>
              <a href="#1">Mapa</a>
            </div>
          </div>

          <div class="text-xl font-bold mt-8" id="1">Características</div>
          <classTable :tabla="alga.ficha.tabla" />

          <div class="mt-8 text-justify md:text-left">
            <div class="mb-4" v-for="(info, i) in alga.ficha.info" :key="i">
              <a class="font-bold">{{ info.nombre }}:</a>
              <a>{{ info.data }}</a>
            </div>
          </div>

          <webGLViewport id="2" />
          <mapa id="3" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      showSideHeader: false,
      headerThres: 115,
    };
  },
  mounted: function () {
    window.addEventListener("scroll", this.test);
  },
  methods: {
    test: function () {
      console.log(window.scrollY, this.showSideHeader);
      if (window.scrollY > this.headerThres) {
        this.showSideHeader = true;
      } else {
        this.showSideHeader = false;
      }
    },
  },
  computed: {
    alga() {
      return this.$store.getters.getAlgaByPath(this.$route.params.path);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>