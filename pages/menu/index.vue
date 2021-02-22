<template>
  <div class="wrapper">
    <h1 class="hero-text text-red-500 text-shadow-lg page-heading text-center">
      Pizza<span
        class="ml-4 hero-text text-blue-400 text-shadow-lg page-heading"
        >Menu</span
      >
    </h1>
    <div class="text-xl p-4 grid sm:grid-cols-3 gap-4 md:mx-20 md:py-4 md:px-0">
      <div v-for="(pizza, index) in data" :key="index">
        <Card :data="pizza" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["data"])
  },
  mounted() {
    this.$store.state.cart = JSON.parse(localStorage.getItem("cart"));
  }
};
</script>

<style scoped>
.wrapper {
  min-height: 90vh;
  display: grid;
  place-items: center;
}
</style>
