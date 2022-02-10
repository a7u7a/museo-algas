<template>
  <div class="font-serif">
    <div class="mt-8 text-lg">
      {{ tabla.titulo }}
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <div v-for="(data, i) in tabla.data" :key="i">
          {{ data.nombre }}:
        </div>
      </div>
      <div class="flex flex-col pl-16 italic">
          <div v-for="(data, i) in tabla.data" :key="i">
          {{data.data}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["tabla"],
};
</script>

<style lang="scss" scoped>
</style>