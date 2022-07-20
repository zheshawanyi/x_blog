<template>
  <div>{{boxArr}}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';



type O ={
  list:number[]
}
let boxArr = reactive<O>({
  list:[]
})

 setTimeout(()=>{
  //  let arr = [1,2,3]
  //  boxArr.push(...arr)

  boxArr.list = [1,2,3,4,56,4]
 },1000)

</script>