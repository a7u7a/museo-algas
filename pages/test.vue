<template>
  <div>
    <imgModal2 ref="foo" />

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
      v-on:click="toto"
    >
      Outer btn
    </button>
  </div>
</template>

<script>
export default {
  layout: "none",
  methods: {
    toto() {
      this.$refs.foo.show();
    },
  },
};
</script>

<style lang="scss" scoped>
</style>