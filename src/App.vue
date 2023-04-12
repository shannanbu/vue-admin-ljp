<script setup lang="ts">
//ElConfigProvider提供全局配置，此处引入zhCn，绑定locale为zhCn
import zhCn from 'element-plus/lib/locale/lang/zh-cn'
import { setTheme } from './hook/useTheme'

setTheme('default')
</script>

<template>
  <ElConfigProvider :locale="zhCn">
    <RouterView></RouterView>
  </ElConfigProvider>
</template>

<style scoped></style>
