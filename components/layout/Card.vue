<template>
  <div class="border rounded-lg shadow-sm">
    <div class="overflow-hidden rounded-t-lg">
      <img
        :src="require(`~/static/${data.imageUrl}`)"
        :alt="data.description"
        class="rounded-t-lg shadow transform hover:scale-110 transition duration-1000 ease"
      />
    </div>
    <div class="p-4">
      <h4 class="text-3xl bangers">{{ data.name }}</h4>
      <h4 class="text-sm text-black opacity-50 font-light">
        £{{ data.price }}
      </h4>
      <Scores :data="data" class="flex-col" />
      <button
        @click="modalIsHidden = !modalIsHidden"
        class="w-full transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 py-2 px-4 rounded-lg text-white font-light mt-4 text-sm focus:outline-none"
      >
        Customise Pizza
      </button>

      <Modal
        v-if="!modalIsHidden"
        :data="data"
        @closeModal="modalIsHidden = !modalIsHidden"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
  data() {
    return {
      modalIsHidden: true
    };
  },
  watch: {
    modalIsHidden: function() {
      if (!this.modalIsHidden) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "scroll";
      }
    }
  }
};
</script>

<style scoped></style>
