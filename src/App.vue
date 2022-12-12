<script setup>
import Modal from "./components/Modal.vue";
</script>

<template>
  <div>
    <h2>App</h2>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </ul>
  </div>
  <router-view></router-view>
  <div class="wrapper">
    <Modal />
  </div>

  <!-- <HelloWorld /> -->
</template>

<style scoped>
a {
  padding: 10px;
}
.wrapper {
  position: relative;
}
</style>
