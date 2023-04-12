<template>
  <div class="setting" @click="() => (show = !show)">
    <el-icon :size="30">
      <Setting></Setting>
    </el-icon>
  </div>
  <el-drawer v-model="show" title="I am the title" :with-header="false">
    <slot></slot>
  </el-drawer>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const show = ref(false)
</script>
<style scoped lang="scss">
.setting {
  position: absolute;
  right: 0;
  top: 50%;
  background-color: #eee;
  display: flex;
}
</style>
