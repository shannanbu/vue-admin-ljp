<template>
  <el-dropdown trigger="click">
    <span class="el-dropdown-link">
      <el-tooltip content="主题模式" class="el-dropdown-link">
        <el-icon><MagicStick /></el-icon>
      </el-tooltip>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <template v-for="item in themeList" :key="item.themeName">
          <el-dropdown-item @click="setTheme(item.themeName)">{{ item.title }}</el-dropdown-item>
        </template>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
import { themeList, setTheme } from '@/hook/useTheme'
</script>
<style scoped lang="scss">
.el-dropdown {
  height: 100%;
  align-items: center;
}
</style>
