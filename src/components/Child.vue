<template>
  <h2>{{ name }}</h2>
  <!-- <h2>{{ props.name }}</h2> -->
  <button @click="$emit('changeString')">Send String</button>
  <button @click="handleClick">Send String</button>
</template>

<script setup>
// const props = defineProps(["name"]);
// const props = defineProps({
//   name: {
//     type: String,
//     default: "Kein Prop angegeben",
//   },
// });
import { inject } from "vue";

const name = inject("propvalue");

const emit = defineEmits(["changeString"]);

const handleClick = () => {
  emit("changeString");
};
</script>
