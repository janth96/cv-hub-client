<template lang="html">
  <div class="component-wrapper">
    <h1>Testing the API connection...</h1>
    <p>{{ recievedData }}</p>
  </div>
</template>

<script>
import {mapGetters} from "vuex"

export default {
  computed: {
    ...mapGetters(['recievedData'])
  },
  mounted() {
    this.$store.dispatch("recieveData")
  }
}
</script>

<style lang="css">
</style>
