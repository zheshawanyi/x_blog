<template>
  <div>{{state}}</div>
  <button @click="change">1</button>
</template>

<script setup lang="ts">
import { toRef } from 'vue';

const obj = {
  foo:1,
  bar:1
}

const state = toRef(obj,"foo")

const change = () =>{
  state.value++
}

</script>