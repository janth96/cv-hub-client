import { createWebHistory, createRouter } from "vue-router"
import GetData from "@/components/api_test/GetData.vue"
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
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/account",
    name: "account",
    component: Account,
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout,
  },
  {
    path: "/api_test",
    name: "api_test",
    component: GetData,
  },
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
