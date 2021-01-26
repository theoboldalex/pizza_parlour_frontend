<template>
  <div class="py-4 ml-4 md:ml-20">
    You have no items in your cart...
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["cart"])
  }
};
</script>

<style scoped></style>
