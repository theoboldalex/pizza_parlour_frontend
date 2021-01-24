<template>
  <div class="border p-6">
    Hello!
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions(["showModal"]),
    closeModal() {
      this.$store.dispatch("showModal", false);
    }
  }
};
</script>

<style scoped></style>
