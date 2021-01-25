<template>
  <form @submit.prevent class="flex flex-col justify-items-center">
    <select
      v-model="pizza.size"
      class="rounded-lg font-light text-sm m-auto w-full"
    >
      <option selected disabled value="">Select your pizza size...</option>
      <option>Small</option>
      <option>Medium</option>
      <option>Large</option>
      <option>Extra Large</option>
    </select>

    <button
      class="m-auto w-full py-2 px-4 bg-blue-400 hover:bg-blue-500 transition duration-500 ease rounded-lg text-white font-light text-sm mt-4 focus:outline-none active:outline-rounded-lg"
      @click="handleAddToCart"
    >
      Add to cart
    </button>
  </form>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      pizza: {
        size: "",
        finalPrice: this.data.price
      }
    };
  },
  methods: {
    handleAddToCart() {
      console.log(this.name, this.pizza, this.finalPrice);
    }
  }
};
</script>

<style scoped></style>
