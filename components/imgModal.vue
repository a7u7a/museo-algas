<template>
  <div>
      <button
        class="
          bg-green-500
          text-white
          rounded-md
          px-8
          py-2
          text-base
          font-medium
          hover:bg-green-600
          focus:outline-none focus:ring-2 focus:ring-green-300
        "
        id="open-btn"
      >
        Open Modal
      </button>
    

    <!--Overlay Effect-->
    <div
      class="
        fixed
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
      <div
        class="
          relative
          top-20
          mx-auto
          p-5
          border
          w-96
          shadow-lg
          rounded-md
          bg-white
        "
      >
        <div class="mt-3 text-center">
          <div
            class="
              mx-auto
              flex
              items-center
              justify-center
              h-12
              w-12
              rounded-full
              bg-green-100
            "
          >
            <svg
              class="h-6 w-6 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          </div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">
            Successful!
          </h3>
          <div class="mt-2 px-7 py-3">
            <p class="text-sm text-gray-500">
              Account has been successfully registered!
            </p>
          </div>
          <div class="items-center px-4 py-3">
            <button
              id="ok-btn"
              class="
                px-4
                py-2
                bg-green-500
                text-white text-base
                font-medium
                rounded-md
                w-full
                shadow-sm
                hover:bg-green-600
                focus:outline-none focus:ring-2 focus:ring-green-300
              "
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-3 text-center"></div>
  </div>
</template>

<script>
export default {
  layout: "none",
  mounted() {
    this.test();
  },
  methods: {
    test() {
      // Grabs all the Elements by their IDs which we had given them
      let modal = document.getElementById("my-modal");
      let btn = document.getElementById("open-btn");
      let button = document.getElementById("ok-btn");

      // We want the modal to open when the Open button is clicked
      btn.onclick = function () {
        modal.style.display = "block";
      };
      // We want the modal to close when the OK button is clicked
      button.onclick = function () {
        modal.style.display = "none";
      };
      // The modal will close when the user clicks anywhere outside the modal
      window.onclick = function (event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      };
    },
  },
};
</script>

<style lang="scss" scoped>
</style>