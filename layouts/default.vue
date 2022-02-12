<template>
  <div class="text-base">
    <navBar />
    <!-- <catalogo /> -->
    <Nuxt />
    <foot />
  </div>
</template>

<script>
import foot from "../components/foot.vue";
export default {
  components: { foot },
};
</script>

<style scoped>
</style>