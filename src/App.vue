<script setup></script>

<template>
  <div>
    <h2>App</h2>
    <ul>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
    </ul>
  </div>
  <router-view></router-view>
  <!-- <HelloWorld /> -->
</template>

<style scoped>
a {
  padding: 10px;
}
</style>
