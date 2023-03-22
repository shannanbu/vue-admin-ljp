import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'

//引入element-plus插件
import ElementPlus from 'element-plus'
//引入element-plus的css
import 'element-plus/dist/index.css'
//css
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)

app.mount('#app')
