<template>
  <div>
    <div class="pt-16"><banner /></div>
    <about />
    <div class="flex flex-col overflow-x-hidden mds:items-center">
      <div class="m-12">
        <p class="font-serif font-bold text-2xl">Algas</p>
      </div>
      <div class="flex flex-col space-y-6 mds:items-center">
        <p class="ml-12 font-serif font-bold text-lg mds:ml-0">Algas Pardas</p>

        <carousel tipo="parda" />

        <p class="ml-12 font-serif font-bold text-lg mds:ml-0">Algas Rojas</p>

        <carousel tipo="roja" />

        <p class="ml-12 font-serif font-bold text-lg mds:ml-0">Algas Verdes</p>

        <carousel tipo="verde" />
      </div>
    </div>
  </div>
</template>

<script>
import carousel from "../components/carousel.vue";
export default {
  components: { carousel },
};
</script>