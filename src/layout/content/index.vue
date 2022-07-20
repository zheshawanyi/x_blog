<template>
  <div class="content">
    <router-view #default="{route,Component}">
      <transition :enter-active-class="`animate__animated ${$route.meta.transition}`">
            <component :is="Component"></component>
        </transition>
    </router-view>
  </div>
</template>

<script setup lang='ts'>
</script>

<style lang='less' scoped>
.content{
  flex: 1;
  margin: 20px;
  overflow: auto;
  &-item{
    padding: 10px;
  }
}
</style>
