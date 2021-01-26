<template>
  <div
    class="fixed inset-0 bg-black bg-opacity-50 z-20 flex justify-center items-center"
  >
    <div
      class="md:flex bg-gray-200 shadow-lg rounded-xl z-50 md:mx-20 w-10/12 md:w-8/12 overflow-hidden"
    >
      <div class="md:w-4/12 overflow-hidden">
        <img
          :src="require(`~/static/${data.imageUrl}`)"
          :alt="data.description"
          class="object-cover md:h-full md:rounded-l-xl md:rounded-t-none rounded-t-xl transform hover:scale-110 transition duration-1000 ease"
        />
      </div>
      <button
        class="fas fa-times opacity-50 closeModal"
        @click="closeModal"
      ></button>
      <div class="md:w-8/12 p-6 flex flex-col justify-center items-center">
        <h1 class="text-5xl bangers text-center">{{ data.name }}</h1>
        <p class="font-light text-sm text-center">{{ data.description }}</p>
        <ul class="flex justify-center">
          <li
            v-for="(item, index) in data.toppings"
            :key="index"
            class="text-sm font-light opacity-50 p-2"
          >
            {{ capitalise(item) }}
          </li>
        </ul>
        <Scores :data="data" class="flex justify-center text-2xl" />
        <p class="text-2xl font-semibold text-center py-2">£{{ finalPrice }}</p>
        <CustomiseForm
          :data="data"
          class="w-full"
          @sizeChanged="sizeChanged"
          @addedToCart="closeModal"
          :finalPrice="finalPrice"
        />
      </div>
    </div>
  </div>
</template>

<script>
import CustomiseForm from "./CustomiseForm.vue";
export default {
  components: { CustomiseForm },
  props: ["data"],
  data() {
    return {
      finalPrice: this.data.price
    };
  },
  methods: {
    capitalise(str) {
      return str[0].toUpperCase() + str.slice(1);
    },
    sizeChanged(size) {
      this.calculatePrice(size);
    },
    calculatePrice(pizza) {
      switch (pizza) {
        case "Small":
          return (this.finalPrice = this.data.price - 1.0);
        case "Medium":
          return (this.finalPrice = this.data.price);
        case "Large":
          return (this.finalPrice = this.data.price + 1.0);
        case "Extra Large":
          return (this.finalPrice = this.data.price + 2.0);
        default:
          break;
      }
    },
    closeModal() {
      this.$emit("closeModal");
    }
  }
};
</script>

<style scoped>
.closeModal {
  position: fixed;
  margin: 10px;
}
</style>
