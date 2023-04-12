import { createApp } from 'vue'
import App from './App.vue'
//pinia
import { createPinia } from 'pinia'
//router
import router from '@/router'
//引入element-plus插件
import ElementPlus from 'element-plus'
//引入element-plus的css
import 'element-plus/dist/index.css'
//导入element-plus中所有图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
//css
import "@/assets/index.scss"

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.mount('#app')
