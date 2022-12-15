import { onMounted, reactive } from "vue";

export const useData = () => {
  const data = reactive({
    name: "Max",
    age: 30,
  });

  const setName = () => {
    data.name = "Johannes";
  };

  onMounted(() => {
    console.log(data.name);
  });

  return {
    data,
    onMounted,
    setName,
  };
};
