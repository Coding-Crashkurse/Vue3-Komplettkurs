<script setup>
import {
  ref,
  reactive,
  computed,
  watch,
  onBeforeMount,
  onMounted,
  onUnmounted,
  onBeforeUnmount,
} from "vue";

const count = ref(0);
const stringInput = ref("hallo");
const state = reactive({
  count: 0,
  name: "Max",
});
// const increase = () => {
//   count.value++;
// };
const increase = () => {
  state.count++;
};
const decrease = (value) => {
  count.value -= value;
};

const largerThan = computed(() => {
  if (state.count > 5) {
    return "Larger";
  } else {
    return "Smaller";
  }
});

watch(
  () => state.count,
  (newval, oldval) => {
    console.log(newval, oldval);
  }
);
</script>

<template>
  <button v-on:click="decrease(2)">Update --</button>
  {{ count }}
  <button v-on:click="increase">Update ++</button>
  <div>
    {{ stringInput }}
    <input v-model="stringInput" type="text" />
  </div>
  <div>
    {{ state.count }}
    {{ state.name }}
  </div>
  <div>
    {{ largerThan }}
  </div>
</template>

<style scoped></style>
