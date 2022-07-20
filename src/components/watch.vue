<template>
    <input v-model="message1" type="text" />
    <input v-model="message2" type="text" />
    <input v-model="obj.name" type="text" />
    <input v-model="obj.sex" type="text" />
</template>

<script setup lang="ts">
import { watch, ref, reactive } from "vue";
let message1 = ref<string>("");
let message2 = ref<string>("");
let obj = reactive({
  name:'cece',
  sex:'nan'
})
watch([message1,message2], (newVal, oldVal) => {
  console.log(newVal);
  console.log(oldVal);
  
},{
  deep:true,
  immediate:true
});
</script>
