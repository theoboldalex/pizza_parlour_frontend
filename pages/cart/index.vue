<template>
  <section>
    <h1 class="hero-text text-red-500 text-shadow-lg page-heading text-center">
      Your<span class="ml-4 hero-text text-blue-400 text-shadow-lg page-heading"
        >Cart</span
      >
    </h1>
    <div v-if="!cart.length" class="py-4 ml-4 md:ml-20">
      You have no items in your cart...
    </div>

    <div
      v-for="(pizza, index) in cart"
      :key="index"
      class="border rounded-xl shadow-lg mx-4 md:mx-20 my-6 flex"
    >
      <img
        :src="require(`~/static/${pizza.pizza.imageUrl}`)"
        :alt="pizza.pizza.description"
        class="rounded-l-xl w-3/12"
      />
      <div class="w-8/12 flex flex-col justify-center items-center">
        <h1 class="bangers sm:text-3xl">{{ pizza.pizza.name }}</h1>
        <h1 class="sm:text-2xl opacity-50">£{{ pizza.price }}</h1>
        <h1 class="sm:text-2xl">Size: {{ pizza.size }}</h1>
      </div>
      <div class="w-1/12 flex justify-center items-center">
        <button @click="deletePizza(index)">
          <i class="fas fa-trash-alt opacity-50"></i>
        </button>
      </div>
    </div>

    <hr class="mx-4 md:mx-20 my-6" />

    <div class="mx-4 md:mx-20 my-6" v-if="cart.length">
      <h1 class="font-semibold text-3xl">
        Total:<span class="ml-2 font-light text-gray-600"
          >£{{ formatPrice(calculateTotal) }}</span
        >
      </h1>
      <NuxtLink to="/checkout">
        <button
          class="m-auto w-full md:w-1/4 py-2 px-4 bg-blue-400 hover:bg-blue-500 transition duration-500 ease rounded-lg text-white font-light text-sm mt-4 focus:outline-none active:outline-rounded-lg disabled:opacity-25"
        >
          Checkout
        </button>
      </NuxtLink>
    </div>
  </section>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["cart"]),
    calculateTotal() {
      return 399;
    }
  },
  methods: {
    ...mapActions(["removeFromCart"]),
    deletePizza(index) {
      this.$store.dispatch("removeFromCart", index);
    },
    formatPrice(value) {
      let val = (value / 100).toFixed(2);
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    }
  },
  mounted() {
    this.$store.state.cart = JSON.parse(localStorage.getItem("cart"));
  }
};
</script>

<style scoped></style>
