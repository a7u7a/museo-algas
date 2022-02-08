<template>
  <div class="font-serif">
    <!-- top sticky title -->
    <floatingTitle
      :especie="alga.ficha.especie"
      :showSideHeader="showSideHeader"
    />

    <div class="flex flex-row pt-24">
      <!-- side sticky title -->
      <sideTitle
        :especie="alga.ficha.especie"
        :showSideHeader="showSideHeader"
      />

      <!-- main content -->
      <div class="flex flex-col w-screen sm:w-2/4 md:max-w-4xl">
        <div class="pl-8 md:pl-0 pr-8">
          <!-- main title -->
          <mainTitle :especie="alga.ficha.especie" />

          <!-- contenido alga -->
          <div class="text-xl font-bold mt-8" id="1">Características</div>
          <classTable :tabla="alga.ficha.tabla" />

          <div class="mt-8 text-justify md:text-left">
            <div class="mb-4" v-for="(info, i) in alga.ficha.info" :key="i">
              <a class="font-bold">{{ info.nombre }}:</a>
              <a>{{ info.data }}</a>
            </div>
          </div>

          <three :model="alga.model" id="2" />
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