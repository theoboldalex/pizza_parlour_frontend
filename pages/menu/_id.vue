<template>
  <div class="sm:flex justify-around items-center sm:mx-20 my-4 mx-4 sm:my-20">
    <div class="sm:w-6/12">
      <img
        :src="require(`~/static/${pizza.imageUrl}`)"
        :alt="pizza.description"
        class="w-full rounded-xl shadow-lg"
      />
    </div>
    <div class="sm:w-6/12 flex-col">
      <h1 class="text-4xl bangers text-center py-4">{{ pizza.name }}</h1>
      <p class="text-xl font-light text-center">{{ pizza.description }}</p>

      <h1 class="text-2xl font-bold text-center py-2">£{{ pizza.price }}</h1>
      <CustomiseForm />
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["data"]),
    pizza() {
      return this.data.find(el => el._id === this.$route.params.id);
    }
  }
};
</script>

<style scoped></style>
