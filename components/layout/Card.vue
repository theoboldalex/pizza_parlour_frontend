<template>
  <div class="border rounded-lg shadow-sm">
    <div class="overflow-hidden rounded-t-lg">
      <img
        :src="require(`@/static/${data.imageUrl}`)"
        :alt="data.description"
        class="rounded-t-lg shadow transform hover:scale-110 transition duration-1000 ease"
      />
    </div>
    <div class="p-4">
      <h4 class="text-3xl bangers">{{ data.name }}</h4>
      <h4 class="text-sm text-black opacity-50 font-light">
        £{{ data.price }}
      </h4>
      <Scores :data="data" />
      <button
        class="w-full transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg text-white font-light mt-4 text-sm focus:outline-none"
        @click="customisePizza"
      >
        Customise Pizza
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["data"],
  methods: {
    ...mapActions(["showModal"]),
    customisePizza() {
      this.$store.dispatch("showModal", true);
    }
  }
};
</script>

<style scoped></style>
