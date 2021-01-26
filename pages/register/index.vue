<template>
  <div class="flex justify-center">
    <div class=" w-10/12 sm:w-6/12 my-5">
      <h1 class="text-3xl font-semibold">Register</h1>
      <form @submit.prevent class="mt-4">
        <label for="email">email:</label>
        <input
          type="email"
          class="px-4 py-2 border border-blue-400 rounded-lg w-full my-3 bg-gray-100"
          placeholder="joebloggs@mail.com"
        />
        <label for="password">password:</label>
        <input
          type="password"
          class="px-4 py-2 border border-blue-400 rounded-lg w-full my-3 bg-gray-100"
          placeholder="********"
        />
        <label for="confirm-password">confirm password:</label>
        <input
          type="password"
          class="px-4 py-2 border border-blue-400 rounded-lg w-full my-3 bg-gray-100"
          placeholder="********"
        />
        <div class="flex items-center">
          <input type="checkbox" class="mr-2 border rounded-lg" />
          <label for="remember">Accept terms & conditions</label>
        </div>
        <div class="flex items-center">
          <input type="checkbox" class="mr-2 border rounded-lg" />
          <label for="remember">Send me deals</label>
        </div>
        <button
          class="transition duration-500 ease-in-out bg-blue-400 hover:bg-blue-500 rounded-lg px-4 py-2 mt-4 text-white font-light w-full"
        >
          Register
        </button>
      </form>
      <small
        >Already have an account?
        <NuxtLink to="/login" class="text-blue-400">Login</NuxtLink></small
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
