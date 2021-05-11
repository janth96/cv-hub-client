import { createApp } from 'vue'
import App from './components/ui/App.vue'
import store from "./store/store"
import router from "./router"
import "./assets/sass/app.scss"

const app = createApp(App)
app.config.productionTip = false
app.use(store)
app.use(router)
app.mount('#app')
