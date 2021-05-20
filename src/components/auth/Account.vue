<template>
  <div class="">
    <h1>This is the account page</h1>
    <p v-if="user == null">Loading...</p>
    <p v-else>{{ user }}</p>
  </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  created() {
    this.$store.dispatch('getUser')
  },
  computed: {
    ...mapGetters(['user'])
  }
}
</script>
