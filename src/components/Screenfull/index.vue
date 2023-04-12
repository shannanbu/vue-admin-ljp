<template>
  <div @click="click" class="screenfull">
    <el-tooltip :content="isScreenfull ? '取消全屏' : '全屏'">
      <el-icon><FullScreen /></el-icon>
    </el-tooltip>
  </div>
</template>
<script setup lang="ts">
import screenfull from 'screenfull'
import { ref } from 'vue'
const isScreenfull = ref<Boolean>(false)
const click = () => {
  const dom = document.querySelector('html') || undefined
  if (screenfull.isEnabled) {
    screenfull.toggle(dom)
    isScreenfull.value = !isScreenfull.value
  }
}
</script>
<style scoped lang="scss">
.screenfull {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>
