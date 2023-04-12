import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RouteLocationNormalized } from 'vue-router'

export type ITagView = Partial<RouteLocationNormalized>

export const useTagViewStore = defineStore('tagView', () => {
  const visitedView = ref<ITagView[]>([])
  // const cachedView = ref<string[]>([])

  /**
   * some遍历visitedView
   *    比较path和fullPath
   *    path相同fullPath相同，return true
   *    path相同fullPath不同，修改fullPath，return true
   * some为true，return
   * some为false，push
   * @param view 
   */
  const addVisitedView = (view: ITagView) => {
    if (visitedView.value.some((v, index) => {
      if (v.path === view.path) {
        if (v.fullPath !== view.fullPath) {
          visitedView.value[index] = Object.assign({}, view)
        }
        return true
      }
    })) {
      return
    }
    visitedView.value.push(Object.assign({}, view))
  }

  const delVisitedView = (view: ITagView) => {
    visitedView.value.splice(visitedView.value.indexOf(view), 1)
  }

  // 不会失去响应式
  const delOtherVisitedView = (view: ITagView) => {
    visitedView.value = visitedView.value.filter(item => {
      return item.meta?.affix || item.path === view.path
    })
  }

  const delAllVisitedView = () => {
    console.log();

  }

  return {
    visitedView,
    addVisitedView,
    delVisitedView,
    delOtherVisitedView,
    delAllVisitedView
  }
})