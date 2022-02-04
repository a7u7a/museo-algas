<template>
  <div>
    <div class="pt-16"><banner /></div>
    <about />
    <div class="flex flex-col items-center overflow-x-hidden">
      <div class="m-12">
        <p class="font-serif font-bold text-2xl">Algas</p>
      </div>
      <div class="flex flex-col space-y-6 md:items-center">
        <p class="ml-12 font-serif font-bold text-xl md:ml-0">Algas Pardas</p>

        <carousel tipo="parda" />

        <p class="ml-12 font-serif font-bold text-xl md:ml-0">Algas Rojas</p>

        <carousel tipo="roja" />

        <p class="ml-12 font-serif font-bold text-xl md:ml-0">Algas Verdes</p>

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