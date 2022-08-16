<template>
  <div>mineList</div>
  <div class="box"></div>
</template>

<script setup lang='ts'>

</script>

<style lang='less' scoped>
.box {
  top: 50px;
  left: 50px;
  transform: translate(-50%,-50%);
  width: 100px;
  height: 50px;
  // border: 1px solid black;
  position: relative;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 4px;
}

.box::after {
  width: 200px;
  height: 200px;
  background-color: aqua;
  content: 'a';
  display: block;
  position: absolute;
  top: 50%;
  z-index: -1;
  left: 50%;
  animation: fadenum 5s infinite;
  transform-origin: left top;
  animation-timing-function:linear;
  // border-radius: 50%;
}

@keyframes fadenum {

  100% {
    transform: rotate(360deg);
  }
}

.box::before {

  width: 96px;
  height: 46px;
  background-color: white;
  content: 'cecewang';
  line-height: 48px;
  text-align: center;
  display: block;
  // border: 1px solid black;
  z-index: 100;
  position: absolute;
  top: 2px;
  border-radius: 4px;
  left: 2px;
  // display: none;
}
</style>
