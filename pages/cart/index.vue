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
        <button @click="deletePizza">
          <i class="fas fa-trash-alt opacity-50"></i>
        </button>
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cart"])
  },
  methods: {
    deletePizza() {}
  }
};
</script>

<style scoped></style>
