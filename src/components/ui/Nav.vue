<template lang="html">
  <nav class="top__bar">
    <ul v-if="token != null">
      <li><router-link :to="{ name: 'account' }">Account</router-link></li>
      <li><router-link :to="{ name: 'home' }">Home</router-link></li>
      <li><router-link :to="{ name: 'logout' }">Logout</router-link></li>
    </ul>
    <ul v-else>
      <li><router-link :to="{ name: 'register' }">Register</router-link></li>
      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
    </ul>
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
