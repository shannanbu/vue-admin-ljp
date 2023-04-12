<template>
  <template v-if="!item.meta?.hidden">
    <template v-if="theOnlyOneChild">
      <sidebar-item-link :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <el-icon v-if="theOnlyOneChild.meta && theOnlyOneChild.meta.icon">
            <component :is="theOnlyOneChild.meta?.icon"></component>
          </el-icon>
          <template #title>
            <span>{{ theOnlyOneChild?.meta?.title }}</span>
          </template>
        </el-menu-item>
      </sidebar-item-link>
    </template>
    <el-sub-menu v-else :index="resolvePath(item.path)">
      <template #title>
        <el-icon v-if="item.meta && item.meta.icon">
          <component :is="item.meta.icon"></component>
        </el-icon>
        <span>{{ item.meta?.title }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item v-for="route in item.children" :key="route.path" :item="route" :base-path="resolvePath(route.path)"></sidebar-item>
      </template>
    </el-sub-menu>
  </template>
</template>
<script setup lang="ts">
import { computed, type PropType } from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import SidebarItemLink from './SidebarItemLink.vue'
//导入path-browserify包
import path from 'path-browserify'

const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  basePath: {
    type: String,
    default: ''
  }
})

/**
 * 返回二级路由中有children且不隐藏的数量，若无则返回0
 * @ return number
 */
const showingChildNumber = computed(() => {
  if (props.item.children) {
    const showingChildren = props.item.children.filter(item => {
      return !(item.meta && item.meta.hidden)
    })
    return showingChildren.length
  }
  return 0
})

const theOnlyOneChild = computed(() => {
  //若item有children且数量大于1
  if (showingChildNumber.value > 1) {
    return null
  }
  //若item有children且数量等于1
  if (props.item.children) {
    for (const child of props.item.children) {
      if (!child.meta || !child.meta.hidden) {
        return child
      }
    }
  }
  //若item无children
  return { ...props.item, path: '' }
})

const resolvePath = (routePath: string) => {
  return path.resolve(props.basePath, routePath)
}
</script>
<style scoped lang="scss"></style>
