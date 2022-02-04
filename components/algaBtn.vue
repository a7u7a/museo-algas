<template>
  <div class="mt-2 mb-2 ml-2 mr-2">
    <div
      class="flex flex-col p-6 w-56 items-center rounded-lg hover:bg-gray-300"
    >
      <div>
        <img class="object-contain w-40 h-40" :src="thumbPath" alt="" />
      </div>
      <div class="text-center">
        <p class="mt-6">
          <a class="font-serif italic">{{ especie }}</a>
          <a class="font-serif">{{ abreviatura }}</a>
        </p>
        <p class="mt-2 font-serif">
          {{ nombres }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["nombresArr", "thumbPath", "especie", "abreviatura"],
  data: function () {
    return {
      nombres: null,
    };
  },
  mounted: function () {
    var nombres = "";
    for (let i = 0; i < this.nombresArr.length; i++) {
      nombres += this.nombresArr[i];
      if (i != this.nombresArr.length - 1) {
        nombres += ", ";
      }
    }
    this.nombres = nombres;
  },
};
</script>

<style lang="scss" scoped>
</style>