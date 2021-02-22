<template>
  <div>
    <i
      class="fas fa-leaf"
      :class="data.isVegetarian ? 'text-green-500' : 'text-black opacity-25'"
    ></i>
    <div class="flex">
      <i
        class="fas fa-pepper-hot"
        :class="data.heatScore > 0 ? 'text-red-500' : 'text-black opacity-25'"
      ></i>
      <i
        class="fas fa-pepper-hot"
        :class="data.heatScore > 1 ? 'text-red-500' : 'text-black opacity-25'"
      ></i>
      <i
        class="fas fa-pepper-hot"
        :class="data.heatScore > 2 ? 'text-red-500' : 'text-black opacity-25'"
      ></i>
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"]
};
</script>
