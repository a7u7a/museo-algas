<template>
  <div>
    <!--Overlay Effect-->
    <div
      class="
        fixed
        z-50
        flex-col
        items-center
        justify-center
        hidden
        inset-0
        bg-gray-600 bg-opacity-50
        overflow-y-auto
        h-full
        w-full
      "
      id="my-modal"
    >
      <!--modal content-->

      <img id="herb" class="m-12 mx-auto object-scale-down w-5/6 h-5/6" :src="img" />

      <!-- <div
        class="
          relative
          top-20
          mx-auto
          w-5/6
          shadow-lg
        "
      >


        <div class="mt-3 text-center">
          <div class="mt-2 px-7 py-3">
            <img :src="img" />
            <p class="text-sm text-gray-500">
              {{ date }}
            </p>
          </div>
          <div class="items-center px-4 py-3">
            <button
              id="ok-btn"
              class="
                px-4
                py-2
                bg-gray-500 
                text-white text-base
                font-medium
                rounded-md
                w-full
                shadow-sm
                hover:bg-gray-600
                focus:outline-none focus:ring-2 focus:ring-gray-300
              "
            >
              OK
            </button>
          </div>
        </div> 
      </div> -->
    </div>
    <div class="mt-3 text-center"></div>
  </div>
</template>

<script>
export default {
  layout: "none",
  data() {
    return {
      img: null,
      date: null,
    };
  },
  mounted() {
    let modal = document.getElementById("my-modal");

    let button = document.getElementById("herb");

    button.onclick = () => {
      this.hide();
    };
    window.onclick = (event) => {
      if (event.target == modal) {
        this.hide();
      }
    };
  },
  methods: {
    show(img, date) {
      this.img = img;
      this.date = date;
      let modal = document.getElementById("my-modal");
      modal.style.display = "flex";
    },
    hide() {
      let modal = document.getElementById("my-modal");
      modal.style.display = "none";
    },
  },
};
</script>

<style lang="scss" scoped>
</style>