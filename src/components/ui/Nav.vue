<template lang="html">
  <nav class="top__bar">
    <!-- TODO logo -->
    <!-- Some flashy logo... -->
    <p class="logo"><router-link :to="{ name: 'home' }">Some flashy logo</router-link></p>
    <transition name="slide-bottom-to-top" mode="out-in">
      <div class="auth__nav" v-if="token != null">
        <router-link :to="{ name: 'account' }">Account</router-link>
        <router-link :to="{ name: 'logout' }">Logout</router-link>
      </div>
      <div class="auth__nav" v-else>
        <router-link :to="{ name: 'register' }">Register</router-link>
        <router-link :to="{ name: 'login' }">Login</router-link>
      </div>
    </transition>
  </nav>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['token']),
  },
  methods: {
  }
}
</script>
