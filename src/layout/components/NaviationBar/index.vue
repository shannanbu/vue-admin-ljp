<template>
  <div class="naviation-bar">
    <div class="humburger">
      <Hamburger @toggle-click="toggleSidebar" :is-active="!isActive"></Hamburger>
    </div>
    <div class="breadcrumb">
      <Breadcrumb></Breadcrumb>
    </div>
    <div class="right-menu">
      <div v-if="settings.showScreenfull">
        <Screenfull></Screenfull>
      </div>
      <div v-if="settings.showThemeSwitch">
        <ThemeSwitch></ThemeSwitch>
      </div>
      <div v-if="settings.showNotify">
        <Notify></Notify>
      </div>
      <div>admin</div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Hamburger, Breadcrumb } from '@/layout/components'
import { Screenfull, ThemeSwitch, Notify } from '@/components'
import { useAppStore } from '@/stores/app'
import { computed } from 'vue'
import { useSettinsStore } from '@/stores/settings'
const settings = useSettinsStore()
const appStore = useAppStore()
const isActive = computed(() => {
  return !appStore.sidebar.opened
})
const toggleSidebar = () => {
  appStore.toggleSidebar()
}
</script>
<style scoped lang="scss">
.naviation-bar {
  display: flex;
  align-items: center;
  padding: 10px;

  .humburger {
    padding-right: 10px;
  }

  .breadcrumb {
    flex: 1;
  }

  .right-menu {
    display: flex;

    & > div {
      margin-right: 10px;
    }
  }
}
</style>
