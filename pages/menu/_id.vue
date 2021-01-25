<template>
  <div>
    {{ pizza }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      pizza: null
    };
  },
  computed: {
    ...mapGetters(["getPizzaById"])
  },
  mounted() {
    this.pizza = this.$store.getters.getPizzaById(this.$route.params.id);
  }
};
</script>

<style scoped></style>
