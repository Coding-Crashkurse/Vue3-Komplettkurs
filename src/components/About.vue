<template>
  <div>
    <h1>About</h1>
    <button v-on:click="myval++">Add in about</button>
    <p>{{ myval }}</p>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUnmount,
  onUnmounted,
  onUpdated,
  onBeforeUpdate,
  ref,
} from "vue";
const myval = ref(5);

onBeforeMount(() => {
  console.log("onBeforeMount");
});
onMounted(() => {
  console.log("onMounted");
});
onBeforeUnmount(() => {
  console.log("onBeforeUnmount");
});
onUnmounted(() => {
  console.log("onUnmounted");
});
onBeforeUpdate(() => {
  console.log("onBeforeUpdate");
});
onUpdated(() => {
  console.log("onUpdated");
});
</script>
