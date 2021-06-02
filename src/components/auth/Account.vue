<template>
  <section class="">
    <h1>Your account</h1>
    <p v-if="user == null">Loading...</p>
    <p v-else-if="user == false">Something went wrong...</p>
    <ul v-else>
      <li>Name: {{ user.name }}</li>
      <li>Email: {{ user.email }}</li>
    </ul>

    <button type="button" name="button" @click="updateUser">update details</button>
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
  },
  methods: {
    updateAccount() {
      this.$store.dispatch('updateUser')
    }
  }
}
</script>
