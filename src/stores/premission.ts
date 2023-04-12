import { defineStore } from 'pinia'
import {ref} from 'vue'
import type { RouteRecordRaw } from 'vue-router'
import {constRoutes} from '@/router'

export const usePremissionStore = defineStore('premission', () => {
  const routes = ref<RouteRecordRaw[]>([])
  routes.value = constRoutes.concat()
  return {
    routes
  }
})
