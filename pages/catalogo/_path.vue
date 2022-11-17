<template>
  <div>
    <!-- top sticky title -->
    <floatingTitle
      :especie="alga.ficha.especie"
      :showSideHeader="showSideHeader"
      :abreviatura="alga.ficha.abreviatura"
    />

<!-- side sticky title -->
      <sideTitle class="pt-24"
        :especie="alga.ficha.especie"
        :showSideHeader="showSideHeader"
        :abreviatura="alga.ficha.abreviatura"
      />

    <div class="flex flex-row justify-center pt-24">
      <!-- main content -->
      <div class="flex flex-col w-screen sm:w-3/5 md:max-w-4xl font-sans">
        <div class="pl-6 md:pl-0 pr-6">
          <!-- main title -->
          <mainTitle
            :especie="alga.ficha.especie"
            :abreviatura="alga.ficha.abreviatura"
          />

          <three :model="alga.model"/>

          <!-- contenido alga -->
          <div class="text-lg font-bold pt-16 mb-4" id="1">Características</div>

          <classTable  :tabla="alga.ficha.tabla" />

          <div class="text-justify text-base">
            <div class="mb-4">
              <a class="font-bold">Nombre común:</a>
              <a>{{ nombres }}</a>
            </div>
            <div class="mb-4" v-for="(info, i) in alga.ficha.info" :key="i">
              <a class="font-bold">{{ info.nombre }}:</a>
              <a>{{ info.data }}</a>
            </div>
          </div>
          <mapa id="2" :herbos="alga.herbos" />
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
      nombres: null,
    };
  },
  mounted: function () {
    window.addEventListener("scroll", this.scrollSensor);

    var nombres = "";
    for (let i = 0; i < this.alga.ficha.nombres.length; i++) {
      nombres += this.alga.ficha.nombres[i];
      if (i != this.alga.ficha.nombres.length - 1) {
        nombres += ", ";
      }
    }
    this.nombres = nombres;
    console.log("nombres", nombres);
  },
  methods: {
    scrollSensor: function () {
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