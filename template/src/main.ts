import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./router"
import ElementPlus from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import "element-plus/dist/index.css"
import VXETable from "./assets/config/vxetable-config"
import { createPinia } from "pinia"
import { EDialog } from "ehl-ui"
import "ehl-ui/dist/style.css"

const app = createApp(App)
app.use(ElementPlus, {
  locale: zhCn
})
app.use(VXETable).use(router).use(createPinia())
app.component("EDialog", EDialog)
app.mount('#app')
