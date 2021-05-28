<template>
  <section class="">
    <h1>Your account</h1>
    <p v-if="user == null">Loading...</p>
    <ul v-else>
      <li>Name: {{ user.name }}</li>
      <li>Email: {{ user.email }}</li>
    </ul>
  </section>
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
