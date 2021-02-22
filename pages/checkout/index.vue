<template>
  <section class="mx-4 md:mx-20">
    <h1 class="hero-text text-red-500 text-shadow-lg page-heading text-center">
      Check<span class="hero-text text-blue-400 text-shadow-lg page-heading"
        >out</span
      >
    </h1>

    <div class="flex flex-col md:flex-row my-6">
      <article class="w-8/12">
        <h1 class="font-semibold text-3xl">Payment Details</h1>

        <!-- payment form -->
      </article>
      <aside class="w-3/12 border-l p-6">
        <h1 class="font-semibold">Order Summary</h1>

        <!-- loop through cart items -->
      </aside>
    </div>
  </section>
</template>

<script>
export default {
  mounted() {
    this.$store.state.cart = JSON.parse(localStorage.getItem("cart"));
  }
};
</script>

<style scoped></style>
