<template>
  <div>
    <div class="hero-wrapper flex justify-center items-center">
      <div class="flex-col text-center">
        <h1 class="hero-text huge-text text-red-500 text-shadow-lg">Pizza</h1>
        <h1 class="hero-text huge-text text-blue-400 text-shadow-lg">
          Parlour
        </h1>
        <NuxtLink to="/menu">
          <button
            class="transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 rounded-lg px-4 py-2 my-8 shadow-lg text-white font-light border-2 focus:outline-none"
          >
            Place an order
          </button>
        </NuxtLink>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Footer from "../components/layout/Footer.vue";
import { mapActions } from "vuex";
export default {
  components: { Footer },
  computed: {
    ...mapActions(["setCart"])
  },
  mounted() {
    this.$store.dispatch("setCart", JSON.parse(localStorage.getItem("cart")));
  }
};
</script>

<style>
.hero-wrapper {
  height: 90vh;
  background-image: url("~static/img/hero-image.jpg");
  background-size: cover;
}

.hero-text {
  font-family: "Bangers", cursive;
  text-shadow: 3px 3px #222;
}

.huge-text {
  font-size: 8rem;
  line-height: 0.8;
}

.page-heading {
  font-size: 4rem;
}

.bangers {
  font-family: "Bangers", cursive;
}

@media (max-width: 600px) {
  .hero-text {
    font-size: 5rem;
  }
}
</style>
