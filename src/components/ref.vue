<!--  -->
<template>
    <button @click="changeMsg">change</button>
   <div>{{message}}</div>
</template>

<script setup lang="ts">
import {ref,Ref,isRef,shallowRef} from 'vue'
let message:Ref<string> = ref('册册王')
//value后面不具有响应式的
let a = shallowRef({
  name:'yuanqiu'
})

const changeMsg = ()=>{
  message.value = '航，看尽人间繁华'
  console.log(isRef(message));
  
  
}

</script>
<style  scoped>

</style>