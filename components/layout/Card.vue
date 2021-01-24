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
      <div class="flex-col">
        <i class="fas fa-leaf text-green-500"></i>
        <div class="flex">
          <i class="fas fa-pepper-hot text-red-500"></i>
          <i class="fas fa-pepper-hot text-red-500"></i>
          <i class="fas fa-pepper-hot text-black opacity-25"></i>
        </div>
      </div>
      <button
        class="w-full transition duration-500 ease-in-out bg-red-500 hover:bg-red-600 py-2 px-4 rounded-lg text-white font-light mt-4 text-sm focus:outline-none"
      >
        Customise Pizza
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>

<style lang="scss" scoped></style>
