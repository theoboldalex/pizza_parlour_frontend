<template>
  <div>
    <Navbar />
    <main>
      <Nuxt />
    </main>
  </div>
</template>

<script>
import Navbar from "../components/layout/Navbar";
export default {
  components: {
    Navbar
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bangers&display=swap");
</style>
