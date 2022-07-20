<template>
    <div class="wraps">
        <div ref="bar" class="bar"></div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
let speed = ref<number>(1);
let timer = ref<number>(0);
let bar = ref<HTMLElement>();

const startLoading = () => {
    let dom = bar.value as HTMLElement;
    speed.value = 1;
    timer.value = window.requestAnimationFrame(function fn() {
        if (speed.value <= 90) {
            speed.value += 2;
            dom.style.width = speed.value + "%";
            timer.value = window.requestAnimationFrame(fn);
        } else {
            speed.value = 1;
            window.cancelAnimationFrame(timer.value);
        }
    });
};
const endLoading = () => {
    let dom = bar.value as HTMLElement;
    setTimeout(() => {
        window.requestAnimationFrame(() => {
          speed.value =100;
          dom.style.width = speed.value + "%";
           dom.style.height = '0.5px'
        });
    }, 1000);
};

defineExpose({
    startLoading,
    endLoading,
});
</script>

<style lang="less" scoped>
.wraps {
    position: fixed;
    top: 0;
    width: 100%;
    height: 2px;
    .bar {
        height: inherit;
        width: 0;
        background: greenyellow;
    }
}
</style>
