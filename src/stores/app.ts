import { getSidebarStatus, setSidebarStatus } from "@/utils/cache/localStorage"
import { defineStore } from "pinia"
import { ref } from "vue"

interface ISidebar {
  opened: Boolean
}

export const useAppStore = defineStore("app", () => {
  const sidebar = ref<ISidebar>({
    opened: getSidebarStatus() !== "closed"
  })

  const toggleSidebar = () => {
    sidebar.value.opened = !sidebar.value.opened
    if (sidebar.value.opened) {
      setSidebarStatus("opened")
    } else {
      setSidebarStatus("closed")
    }
  }

  const closeSidebar = () => {
    sidebar.value.opened = false
    setSidebarStatus("closed")
  }

  return {
    sidebar,
    toggleSidebar,
    closeSidebar
  }
})