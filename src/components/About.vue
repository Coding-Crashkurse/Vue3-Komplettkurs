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
import { nameStore } from "../../stores/stores";
import Child from "./Child.vue";
import { provide } from "vue";

const store = nameStore();

console.log(store.age);

const myval = ref(5);
let propvalue = ref("Unser Prop");

const changeIt = () => {
  console.log(propvalue.value);
  propvalue.value = "Test";
};

provide("propvalue", propvalue);

// onBeforeMount(() => {
//   console.log("onBeforeMount");
// });
// onMounted(() => {
//   console.log("onMounted");
// });
// onBeforeUnmount(() => {
//   console.log("onBeforeUnmount");
// });
// onUnmounted(() => {
//   console.log("onUnmounted");
// });
// onBeforeUpdate(() => {
//   console.log("onBeforeUpdate");
// });
// onUpdated(() => {
//   console.log("onUpdated");
// });
</script>

<template>
  <div>
    <h1>About</h1>
    <button v-on:click="store.increaseAge">Add in about</button>
    <p>{{ myval }}</p>
    <p>{{ store.age }}</p>
    <p>{{ store.tooOld }}</p>
    <!-- <Child name="Unser prop" /> -->
    <!-- <Child :name="propvalue" @changeString="changeIt" /> -->
    <Child @changeString="changeIt" />
  </div>
</template>
