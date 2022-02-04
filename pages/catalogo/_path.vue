<template>
  <div>
    {{ alga }}
  </div>
</template>

<script>
export default {
  computed: {
    alga() {
        console.log(this.$route.params.path)
        //console.log(this.$store.getters.getAlgaByPath(this.$route.params.slug))
      return this.$store.getters.getAlgaByPath(this.$route.params.path);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>