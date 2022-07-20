<template>
  <div>
    
    <input v-model="fristName" type="text">
    <input v-model="lastName" type="text">
    <div>{{fristName}}--{{lastName}}</div>
    <div>
      {{name}}
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed,ref } from 'vue';
let fristName = ref('')
let lastName = ref('')

const name = computed(()=>{
  return fristName.value + '*-----*' + lastName.value
})

</script>