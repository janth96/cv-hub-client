<template>
  <Toast/>
  <Nav/>
  <!-- <transition :name="transitionName" mode="out-in"> -->
    <!-- <router-view/> -->
  <!-- </transition> -->
  <router-view v-slot="{ Component }">
    <transition :name="transitionName" mode="out-in">
      <component :is="Component" />
    </transition>
  </router-view>
  <Footer/>
</template>

<script>
import Toast from "./Toast"
import Nav from "./Nav"
import Footer from "./Footer"

export default {
  name: 'App',
  data() {
    return {
      transitionName: "",
    }
  },
  components: {
    Toast,
    Nav,
    Footer,
  },
  watch: {

    // Dynamically pick transition for component entry/leave,
    // depending on where user navigates from/to
    '$route' (to, from) {
      if(to.name == "logout") {
        this.transitionName = "logout"
        return
      }
      // When user logs in, use login transition
      if(from.name == "login" && to.meta.requiresAuth == true) {
        this.transitionName = "login"
        return
      }
      this.transitionName = ""
    },
  }
}
</script>
