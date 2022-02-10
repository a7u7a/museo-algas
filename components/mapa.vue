<template>
  <div>
    <div id="map" class="w-full h-96 mb-6"></div>
  </div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
export default {
  props: ["herbos"],
  data() {
    return {
      access_token:
        "pk.eyJ1Ijoic2FtcGFvbGl0byIsImEiOiJja3c1Z2g1anowZ3Y1MnRwOGtieWRkdjNkIn0.wkW06MEvxRmyL3jfZYBTWA",
      map: null,
      mapStyle: "mapbox://styles/sampaolito/ckzfxr506000s14mmgvpszi0z",
    };
  },
  mounted() {
    this.createMap();
    this.mapBounds();
  },
  methods: {
    mapBounds() {
      // given two or more points, find bounding box
      console.log("this.herbos", this.herbos.features);
      var lonArr = [];
      var latArr = [];
      for (let i = 0; i < this.herbos.features.length; i++) {
        const element = this.herbos.features[i].geometry.coordinates;
        if (element) {
          lonArr.push(element[0]);
          latArr.push(element[1]);
        }
      }

      const m = 0.01; // margin
      const bottomLeft = [Math.min(...lonArr) - m, Math.min(...latArr) - m]; // min lon, min lat
      const topRight = [Math.max(...lonArr) + m, Math.max(...latArr) + m]; // max lon, max lat
      return [bottomLeft, topRight];
    },
    createMap() {
      mapboxgl.accessToken = this.access_token;
      this.map = new mapboxgl.Map({
        container: "map",
        style: this.mapStyle,
        bounds: this.mapBounds(),
      });
      this.map.on("load", () => {
        this.map.addSource("places", {
          type: "geojson",
          data: this.herbos
        });
        // Add a layer showing the places.
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

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
        });

        /* Go to specific alga (not implemented yet) */
        // this.map.on("click", "places", (e) => {
        //     window.location="#1"
        // });

        this.map.on("mouseenter", "places", (e) => {
          // Change the cursor style as a UI indicator.
          this.map.getCanvas().style.cursor = "pointer";

          // Copy coordinates array.
          const coordinates = e.features[0].geometry.coordinates.slice();
          const description = e.features[0].properties.description;

          // Ensure that if the map is zoomed out such that multiple
          // copies of the feature are visible, the popup appears
          // over the copy being pointed to.
          while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
          }

          // Populate the popup and set its coordinates
          // based on the feature found.
          popup.setLngLat(coordinates).setHTML(description).addTo(this.map);
        });

        this.map.on("mouseleave", "places", () => {
          this.map.getCanvas().style.cursor = "";
          popup.remove();
        });
      });

      //   this.map.on("load", () => {
      //     // Add an image to use as a custom marker
      //     this.map.loadImage(
      //       "https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png",
      //       (error, image) => {
      //         if (error) throw error;
      //         this.map.addImage("custom-marker", image);
      //         this.map.addSource("points", {
      //           type: "geojson",
      //           data: {
      //             type: "FeatureCollection",
      //             features: [
      //               {
      //                 type: "Feature",
      //                 geometry: {
      //                   type: "Point",
      //                   coordinates: [-70.637602, -33.465361],
      //                 },
      //                 properties: {
      //                   title: "Mapbox DC",
      //                 },
      //               },
      //             ],
      //           },
      //         });

      //         // Add a symbol layer
      //         this.map.addLayer({
      //           id: "points",
      //           type: "symbol",
      //           source: "points",
      //           layout: {
      //             "icon-image": "custom-marker",
      //             // get the title name from the source's "title" property
      //             "text-field": ["get", "title"],
      //             "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
      //             "text-offset": [0, 1.25],
      //             "text-anchor": "top",
      //           },
      //         });
      //       }
      //     );
      //   });
    },
  },
};
</script>

<style scoped>
</style>