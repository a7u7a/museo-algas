<template>
  <div>
    <navBar />
    <div class="pt-16"><banner /></div>
    <about />
    <div class="flex flex-col items-center overflow-auto">
      <div class="m-12">
        <p class="font-serif font-bold text-2xl">Algas</p>
      </div>
      <div class="flex flex-col space-y-6 md:items-center">
        <div>
          <p class="ml-12 font-serif font-bold text-xl md:ml-0">Algas Pardas</p>
        </div>
        <carousel tipo="parda" />
        <div>
          <p class="ml-12 font-serif font-bold text-xl md:ml-0">Algas Rojas</p>
        </div>
        <carousel tipo="roja" />
        <div>
          <p class="ml-12 font-serif font-bold text-xl md:ml-0">Algas Verdes</p>
        </div>
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