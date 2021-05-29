import { createApp } from 'vue'
import App from './components/ui/App.vue'
import store from "./store/store"
import router from "./router"
import "./assets/sass/app.scss"

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    if (!store.getters.token) {
      // Client needs to log in
      next({
        name: "login"
      })
    } else if (to.name === "logout") {
      next()
    } else if (to.name === "login" || to.name === "register"){
      next({ name: "home"})
    } else {
      next()
    }
  } else {
    // User doesn't need to be authorized
    next()
  }
})

const app = createApp(App)
app.config.productionTip = false
app.use(store)
app.use(router)
app.mount('#app')
