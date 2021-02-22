<template>
  <form @submit.prevent class="flex flex-col justify-items-center">
    <select
      v-model="size"
      class="rounded-lg font-light text-sm m-auto w-full"
      @change="handleChange"
    >
      <option selected disabled value="">Select your pizza size...</option>
      <option>Small</option>
      <option>Medium</option>
      <option>Large</option>
      <option>Extra Large</option>
    </select>

    <button
      class="m-auto w-full py-2 px-4 bg-blue-400 hover:bg-blue-500 transition duration-500 ease rounded-lg text-white font-light text-sm mt-4 focus:outline-none active:outline-rounded-lg disabled:opacity-25"
      @click="handleAddToCart"
      :disabled="!size"
    >
      Add to cart
    </button>
  </form>
</template>

<script>
export default {
  props: ["data", "finalPrice"],
  data() {
    return {
      size: ""
    };
  },
  methods: {
    handleAddToCart() {
      // emit to parent to close modal
      this.$emit("addedToCart");

      this.$store.dispatch("addToCart", {
        pizza: this.data,
        size: this.size,
        price: this.finalPrice
      });
      localStorage.setItem("cart", JSON.stringify(this.$store.state.cart));
    },
    handleChange() {
      this.$emit("sizeChanged", this.size);
    }
  }
};
</script>

<style scoped></style>
