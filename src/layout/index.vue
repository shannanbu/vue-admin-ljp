<script setup lang="ts">
import { Sidebar, NaviationBar, TagsView, RightPanel, Settings } from './components'
import { useSettinsStore } from '@/stores/settings'
const settings = useSettinsStore()
</script>

<template>
  <div class="layout">
    <div class="siderbar-container">
      <Sidebar></Sidebar>
    </div>
    <div class="layout-right">
      <div class="naviation-bar-container">
        <NaviationBar></NaviationBar>
      </div>
      <div class="tagview-container" v-if="settings.showTagView">
        <TagsView></TagsView>
      </div>
      <div>
        <RouterView></RouterView>
      </div>
    </div>
    <div class="right-panel">
      <RightPanel>
        <Settings></Settings>
      </RightPanel>
    </div>
  </div>
</template>
<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;

  .layout-right {
    flex: 1;
  }

  .right-panel {
    position: relative;
  }
}
</style>
