<template>
  <Teleport to="body">
    <div class="modal" v-if="showModal">
      <h1>Modal</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque soluta
        quibusdam dolore, dolorem nulla quae voluptatum in cupiditate architecto
        molestias nemo autem saepe pariatur tempore illo eius, odio esse eum!
        Voluptatibus, accusamus asperiores? Qui, ad quas veniam architecto,
        atque at quis tempora magni expedita tempore sapiente blanditiis minus
        praesentium fugit.
      </p>
      <button @click="toggleModal">Toggle Modal</button>
    </div>
  </Teleport>

  <button @click="toggleModal">Toggle Modal</button>
</template>

<script setup>
import { ref } from "vue";

let showModal = ref(false);
const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>

<style scoped>
.modal {
  background: lightgray;
  height: 100%;
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
