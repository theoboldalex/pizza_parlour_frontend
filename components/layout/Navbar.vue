<template>
  <header>
    <nav class="py-4 shadow flex items-center justify-between">
      <div class="ml-4 md:ml-20">
        <NuxtLink to="/">
          <img
            src="~/static/img/pizza_parlour_logo.png"
            alt="Company logo"
            width="100"
          />
        </NuxtLink>
      </div>

      <div class="block flex mr-4 md:mr-20">
        <NuxtLink to="/menu" class="mr-8"
          ><i class="fas fa-pizza-slice fa-2x transition duration-500 ease"></i
        ></NuxtLink>

        <NuxtLink to="/cart">
          <i
            class="fas fa-shopping-cart fa-2x transition duration-500 ease"
            :class="cart.length && 'cart'"
            :data-cartCount="cart.length"
          ></i>
        </NuxtLink>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["cart"])
  }
};
</script>

<style scoped>
.cart {
  display: grid;
  place-items: center;
}

.cart::after {
  content: attr(data-cartCount);
  display: grid;
  place-content: center;
  color: #fff;
  font-size: 0.9rem;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: red;
  position: absolute;
  margin: -5px -5px;
}
</style>
