<template>
  <div class="lg:m-6 pl-6 pr-6 pt-6 pb-6 border mb-4 lg:mb-0 lg:float-right text-base font-serif">
    <div class="mb-4 text-md">
      {{ tabla.titulo }}
    </div>
    <div class="flex flex-row">
      <div class="flex flex-col">
        <div v-for="(data, i) in tabla.data" :key="i">
          {{ data.nombre }}:
        </div>
      </div>
      <div class="flex flex-col pl-14 italic">
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