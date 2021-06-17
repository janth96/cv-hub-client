<template>
  <section class="">
    <h1>Your account</h1>
    <p v-if="user == null">Loading...</p>
    <p v-else-if="user == false">Something went wrong...</p>
    <ul v-else>
      <li>Name: {{ user.name }}</li>
      <li>Email: {{ user.email }}</li>
      <li>Job title: {{ user.job_title }}</li>
      <li>Phone number: {{ user.phone_number }}</li>
      <li>LinkedIn url: {{ user.linkedin_url }}</li>
      <li>GitHub url: {{ user.github_url }}</li>
      <li>Personal Website url: {{ user.website_url }}</li>
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
    updateUser() {
      this.$store.dispatch('updateUser')
    }
  }
}
</script>
