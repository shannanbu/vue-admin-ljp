<template>
  <el-scrollbar>
    <div class="tag-view">
      <router-link v-for="tag in tagViewStore.visitedView" :key="tag.path" :to="{ path: tag.path, query: tag.query }">
        <el-dropdown trigger="contextmenu" :disabled="isAffix(tag) === true">
          <p :class="isActive(tag) ? 'active' : ''" class="tag-view-item">
            {{ tag.name }}
            <el-icon size="15px" v-if="!isAffix(tag)" @click.prevent.stop="delTag(tag)"><Close /></el-icon>
          </p>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="delTag(tag)">关闭</el-dropdown-item>
              <el-dropdown-item @click="delOtherTag(tag)">关闭其它</el-dropdown-item>
              <el-dropdown-item @click="delAllTag()">关闭所有</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </router-link>
    </div>
  </el-scrollbar>
</template>
<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useRoute, useRouter, type RouteRecordRaw } from 'vue-router'
import { type ITagView, useTagViewStore } from '@/stores/tagView'
import { usePremissionStore } from '@/stores/premission'
import path from 'path-browserify'
const route = useRoute()
const router = useRouter()
const tagViewStore = useTagViewStore()
const premission = usePremissionStore()
premission.routes

const isActive = (tag: ITagView): boolean => {
  return route.path === tag.path
}

const isAffix = (tag: ITagView) => {
  return tag.meta?.affix
}

const initTag = (routes: RouteRecordRaw[], basePath = '/') => {
  if (routes) {
    routes.forEach(item => {
      if (item.meta?.affix) {
        let tempTag: ITagView = { ...item, path: path.resolve(basePath, item.path) }
        tagViewStore.addVisitedView(tempTag)
      }
      if (item.children) {
        initTag(item.children, item.path)
      }
    })
  }
  return
}

//将当前route添加进visitedView
const addTag = () => {
  // 存在name的路由保存，不存在name不需要记录，replace跳转不希望记录
  if (route.name) {
    tagViewStore.addVisitedView(route)
  }
}

//在visitedView中删除传来的tag项
const delTag = (tag: ITagView) => {
  tagViewStore.delVisitedView(tag)
  toLastTag()
}

const toLastTag = () => {
  const latestView = tagViewStore.visitedView.slice(-1)[0]
  if (latestView !== undefined && latestView.fullPath !== undefined) {
    router.push(latestView.fullPath)
  } else {
    router.push('/')
  }
}

//在visitedView中删除非传来的tag项
const delOtherTag = (tag: ITagView) => {
  tagViewStore.delOtherVisitedView(tag)
}

const delAllTag = () => {
  tagViewStore.delAllVisitedView()
}

watch(
  route,
  () => {
    addTag()
  },
  {
    deep: true
  }
)

onMounted(() => {
  addTag(), initTag(premission.routes)
})
</script>
<style scoped lang="scss">
.tag-view {
  max-width: 1px;
  display: flex;
  padding: 10px;

  .tag-view-item {
    display: flex;
    width: 100px;
    justify-content: space-between;
    align-items: center;
    padding: 5px 10px;
    margin: 0 5px;
    border-radius: 4px;
    box-shadow: 2px 2px 2px #ccc;
    font-size: 8px;
    cursor: pointer;
  }

  .active {
    background-color: skyblue;
    color: white;
  }
}
</style>
