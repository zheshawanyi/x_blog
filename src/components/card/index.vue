<template>
  <div>
    <div>
      <div>主标题</div>
      <div>副标题</div>
    </div>
    <div v-if="content">
      {{content}}
    </div>
  </div>
</template>

<script setup lang='ts'>

type Props={
  content?:string
}

defineProps<Props>()


</script>

<style lang='less' scoped>
</style>
