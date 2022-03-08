<template>
  <div class="text-base">
      <div class="text-lg font-bold pt-16 mb-6" id="2">Colección</div>
      <div class="mb-6">A continuación se muestran los lugares donde fueron recolectados los especímenes herborizados de Callophyllis variegata con los que cuenta nuestro museo.</div>
    <imgModal2 ref="foo" />
    <div id="map" class="w-full h-96 mb-24"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";

export default {
  props: ["herbos"],
  data() {
    return {
      access_token: this.$config.mapboxToken,
      mapStyle: this.$config.mapboxStyle,
      map: null,
    };
  },
  mounted() {
document.addEventListener('keydown', (event)=>{
	if(event.key === "Escape"){
		this.$refs.foo.hide();
	}
});
    this.createMap();
    this.mapBounds();
  },
  methods: {
    mapBounds() {
      // given two or more points, find bounding box
      console.log("this.herbos", this.herbos.features);
      var lonArr = [];
      var latArr = [];
      const m = 0.01; // margin
      for (let i = 0; i < this.herbos.features.length; i++) {
        const element = this.herbos.features[i].geometry.coordinates;
        if (element) {
          lonArr.push(element[0]);
          latArr.push(element[1]);
        }
      }
      const bottomLeft = [Math.min(...lonArr) - m, Math.min(...latArr) - m]; // min lon, min lat
      const topRight = [Math.max(...lonArr) + m, Math.max(...latArr) + m]; // max lon, max lat
      return [bottomLeft, topRight];
    },
    createMap() {


      mapboxgl.accessToken = this.access_token;
      this.map = new mapboxgl.Map({
        container: "map",
        width: "100vw", //or px
        height: "100vh",
        style: this.mapStyle,
        bounds: this.mapBounds(),
      });
      this.map.on("load", () => {
        this.map.addSource("places", {
          type: "geojson",
          data: this.herbos,
        });

        this.map.addLayer({
          id: "places",
          type: "circle",
          source: "places",
          paint: {
            "circle-color": "#4264fb",
            "circle-radius": 6,
            "circle-stroke-width": 2,
            "circle-stroke-color": "#ffffff",
          },
        });

        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });

        this.map.on("click", "places", (e) => {
          // call show modal
          const img = e.features[0].properties.img;
          const date = e.features[0].properties.date;
          this.$refs.foo.show(img, date);
        });

        function myFunction(x) {
          if (x.matches) {
            // If media query matches
            document.body.style.backgroundColor = "yellow";
          } else {
            document.body.style.backgroundColor = "pink";
          }
        }

        this.map.on("mouseenter", "places", (e) => {
          this.map.getCanvas().style.cursor = "pointer";
          const coordinates = e.features[0].geometry.coordinates.slice();
          const date = e.features[0].properties.date;
          const img = e.features[0].properties.img;
          const description = `<strong>Fecha de recolección:</strong><p>${date}</p> <img src="${img}" style="height:15vh;"/>`;

          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }
          popup.setLngLat(coordinates).setHTML(description).addTo(this.map);
        });

        this.map.on("mouseleave", "places", () => {
          this.map.getCanvas().style.cursor = "";
          popup.remove();
        });
      });
    },
  },
};
</script>

<style scoped>
</style>