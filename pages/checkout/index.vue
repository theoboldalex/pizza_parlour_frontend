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
        <h1 class="font-semibold text-2xl">Order Summary</h1>
        <hr class="my-4" />

        <!-- loop through cart items -->
        <div class="" v-for="(pizza, index) in cart" :key="index">
          <h5 class="font-semibold">{{ pizza.pizza.name }}</h5>
          <p class="font-light">{{ pizza.size }}</p>
          <p class="text-gray-600">£{{ pizza.price }}</p>
          <hr class="my-4" />
        </div>
        <h3 class="font-semibold text-2xl">
          Total:
          <span class="text-gray-600 font-normal"
            >£{{ formatPrice(calculateTotal) }}</span
          >
        </h3>
      </aside>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  computed: {
    ...mapState(["cart"]),
    ...mapActions(["setCart"]),
    calculateTotal() {
      if (this.$store.state.cart.length) {
        let temp = [];
        this.$store.state.cart.map(pizza => {
          temp.push(pizza.price * 100);
        });
        return temp.reduce((a, b) => a + b);
      }
      return 0.0;
    }
  },
  mounted() {
    this.$store.dispatch("setCart", JSON.parse(localStorage.getItem("cart")));
  },
  methods: {
    formatPrice(value) {
      let val = (value / 100).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  }
};
</script>

<style scoped></style>
