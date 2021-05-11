import { createWebHistory, createRouter } from "vue-router"
import GetData from "@/components/api_test/GetData.vue"
import HelloWorld from "@/components/HelloWorld.vue"

const routes = [
  {
    path: "/api_test",
    name: "api_test",
    component: GetData,
  },
  {
    path: "/",
    name: "home",
    component: HelloWorld,
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
