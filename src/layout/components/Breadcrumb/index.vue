<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="item.path">
      <span v-if="index === breadcrumb.length - 1">
        {{ item.meta.title }}
      </span>
      <a v-else @click.prevent="handlerLink(item)">
        {{ item.meta.title }}
      </a>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup lang="ts">
/**
 * RouteLocationMatched继承RouteLocationNormalizedLoaded
 * 前者具有redirect
 * to和from总是RouteLocationNormalizedLoaded类型
 */
import { useRoute, useRouter, type RouteLocationMatched } from 'vue-router'
import { ref, watch } from 'vue'
//useRoute得到当前路由地址
const route = useRoute()
const router = useRouter()
const breadcrumb = ref<RouteLocationMatched[]>([])
/**
 * route.mathced得到与路由地址匹配的理由记录数组
 *
 * 以/table/vxe-table为例
 * [0] path: /table             redirect:/table/element-plus
 * [1] path: /table/vxe-table   redirect: undefined
 */
const getBreadcrumb = () => {
  breadcrumb.value = route.matched.filter(item => {
    return item.meta && item.meta.title
  })
}

const handlerLink = (item: RouteLocationMatched) => {
  const { redirect, path } = item
  //如果路由表某项的redirect存在则跳转至redirect所指
  if (redirect) {
    router.push(redirect as string)
    return
  }
  //否则跳转到path
  router.push(path)
}

//监听当前路由地址变化，变化则重新获取
watch(
  () => route.path,
  path => {
    if (path.startsWith('/redirect/')) {
      return
    }
    getBreadcrumb()
  }
)
getBreadcrumb()
</script>
<style scoped lang="scss"></style>
