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

      <div class="block mr-4 md:mr-20">
        <button @click="menuIsOpen = !menuIsOpen" class="focus:outline-none">
          <i v-if="menuIsOpen" class="fas fa-times fa-2x text-black mr-1"></i>
          <i v-if="!menuIsOpen" class="fas fa-bars fa-2x text-black"></i>
        </button>
      </div>
    </nav>
    <transition name="fade">
      <div
        v-if="menuIsOpen"
        class="py-4 px-2 absolute bg-white w-full shadow md:px-20 z-50"
      >
        <ul>
          <li class="font-semibold px-4 py-2 my-2 hover:bg-gray-200 rounded-lg">
            <NuxtLink
              @click.native="menuIsOpen = !menuIsOpen"
              to="/login"
              class="block"
            >
              Login
            </NuxtLink>
          </li>
          <li class="font-semibold px-4 py-2 my-2 hover:bg-gray-200 rounded-lg">
            <NuxtLink
              @click.native="menuIsOpen = !menuIsOpen"
              to="/menu"
              class="block"
            >
              Pizzas
            </NuxtLink>
          </li>
          <li class="font-semibold px-4 py-2 my-2 hover:bg-gray-200 rounded-lg">
            <NuxtLink
              @click.native="menuIsOpen = !menuIsOpen"
              to="/cart"
              class="block"
            >
              Cart
            </NuxtLink>
          </li>
        </ul>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuIsOpen: false
    };
  }
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
