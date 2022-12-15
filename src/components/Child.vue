<template>
  <h2>{{ name }}</h2>
  <slot name="slot1"></slot>
  <!-- <p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia doloribus,
    dolorem saepe eius fuga adipisci mollitia iste consequuntur hic minima?
  </p> -->
  <!-- <h2>{{ props.name }}</h2> -->
  <button @click="$emit('changeString')">Send String</button>
  <button @click="handleClick">Send String</button>
  <slot name="slot2"></slot>
  <p>{{ data }}</p>
  <button @click="setName">Composible Klick</button>
</template>

<script setup>
import { useData } from "../../use/useComposible";
import { inject } from "vue";

const { data, setName } = useData();

// const props = defineProps(["name"]);
// const props = defineProps({
//   name: {
//     type: String,
//     default: "Kein Prop angegeben",
//   },
// });

const name = inject("propvalue");

const emit = defineEmits(["changeString"]);

const handleClick = () => {
  emit("changeString");
};
</script>
