<template>
  <div class="settings">
    <ul>
      <li>
        <span>显示标签栏</span>
        <el-switch v-model="settings.showTagView"></el-switch>
      </li>
      <li>
        <span>显示消息通知</span>
        <el-switch v-model="settings.showNotify"></el-switch>
      </li>
      <li>
        <span>显示主题按钮</span>
        <el-switch v-model="settings.showThemeSwitch"></el-switch>
      </li>
      <li>
        <span>显示全屏按钮</span>
        <el-switch v-model="settings.showScreenfull"></el-switch>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts">
import { useSettinsStore } from '@/stores/settings'
const settings = useSettinsStore()
</script>
<style scoped lang="scss">
.settings {
  display: flex;
  justify-content: center;

  ul {
    width: 50%;

    li {
      list-style: none;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
}
</style>
