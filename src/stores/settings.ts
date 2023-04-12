import { defineStore } from "pinia";
import LayoutSettings from "@/config/layout"
import { ref } from 'vue'

export const useSettinsStore = defineStore("settings", () => {
  const showTagView = ref<boolean>(LayoutSettings.showTagview)
  const showNotify = ref<boolean>(LayoutSettings.showNotify)
  const showThemeSwitch = ref<boolean>(LayoutSettings.showThemeSwitch)
  const showScreenfull = ref<boolean>(LayoutSettings.showScreenfull)

  return {
    showNotify,
    showScreenfull,
    showTagView,
    showThemeSwitch
  }
})