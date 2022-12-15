<script setup>
import { ref } from "vue";
import Modal from "./components/Modal.vue";
import ModalDark from "./components/ModalDark.vue";

const darkMode = ref(false);
</script>

<template>
  <div>
    <h2>App</h2>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </ul>
  </div>
  <!-- Keep alive -->
  <router-view v-slot="{ Component }">
    <KeepAlive>
      <component :is="Component" />
    </KeepAlive>
  </router-view>

  <div class="wrapper">
    <label for="darkmode">Darkmode?</label>
    <input type="checkbox" v-model="darkMode" />
    <!-- <p>{{ darkMode }}</p> -->
    <!-- <component :is="ModalDark"></component> -->
    <component :is="darkMode ? ModalDark : Modal"></component>
  </div>

  <!-- <HelloWorld /> -->
</template>

<style scoped>
a {
  padding: 10px;
}
.wrapper {
  position: relative;
  padding: 20px;
  border: 1px solid black;
}
</style>
