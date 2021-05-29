import { createWebHistory, createRouter } from "vue-router"
import store from "../store/store"
import HelloWorld from "@/components/HelloWorld.vue"
import Register from "@/components/auth/Register.vue"
import Login from "@/components/auth/Login.vue"
import Account from "@/components/auth/Account.vue"
import Logout from "@/components/auth/Logout.vue"

const routes = [
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      requiresAuth: false
    },
  },
  {
    path: "/account",
    name: "account",
    component: Account,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/",
    name: "home",
    component: HelloWorld,
    meta: {
      requiresAuth: false
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(() => {
  // Remove all errors and toasts
  store.commit("RESET_TOAST")
  store.commit("RESET_ERRORS")
})

export default router
