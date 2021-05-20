<template lang="html">
  <nav class="top__bar">
    <!-- <div class="nav__blue">
      <button type="button" name="button" @click="clickBlueButton">Testing hover</button>
    </div>
    <div class="nav__orange">
      <div class="orange__content" v-if="showOrange">
        <div class="menu__item">
          <h1>Menu Item</h1>
        </div>
        <div class="menu__item">
          <h1>Menu Item</h1>
        </div>
        <div class="menu__item">
          <h1>Menu Item</h1>
        </div>
        <div class="menu__item">
          <h1>Menu Item</h1>
        </div>
      </div>
    </div>
    <div class="nav__yellow">

    </div> -->



    <ul v-if="token != null">
      <li><router-link :to="{ name: 'account' }">Account</router-link></li>
      <li><router-link :to="{ name: 'logout' }">Logout</router-link></li>
    </ul>
    <ul v-else>
      <li><router-link :to="{ name: 'register' }">Register</router-link></li>
      <li><router-link :to="{ name: 'login' }">Login</router-link></li>
    </ul>
  </nav>
  <!-- <router-link to="/">Home</router-link>
  <router-link to="/api_test">Test API connection</router-link> -->
</template>

<script>
import {mapGetters} from "vuex"

export default {
  data () {
    return {
      // orangeHeight: "75px"
      showOrange: false,
    }
  },
  computed: {
    ...mapGetters(['token']),
  },
  mounted() {
    console.log(this.token);
  },

  methods: {
    clickBlueButton () {
      // this.orangeHeight = "200px"
      this.showOrange = !this.showOrange;
    }
  }
}
</script>
