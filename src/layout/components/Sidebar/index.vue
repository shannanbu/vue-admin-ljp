<script setup lang="ts">
import { computed } from 'vue'
import { usePremissionStore } from '@/stores/premission'
import { useAppStore } from '@/stores/app'
import sidebarItem from './SidebarItem.vue'
import { useRoute } from 'vue-router'

const premissionStore = usePremissionStore()
const appStore = useAppStore()
const route = useRoute()

const isCollapse = computed(() => {
  return !appStore.sidebar.opened
})

const activeMenu = computed(() => {
  return route.path
})
</script>

<template>
  <div>
    <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" :collapse="isCollapse">
      <sidebar-item v-for="route in premissionStore.routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </div>
</template>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
