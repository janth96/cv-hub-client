<template lang="html">
  <div class="modal">
    <form action="#" @submit.prevent="login" method="post">
      <label for="email">Email:</label>
      <input type="email" name="email" v-model="email">
      <label for="password">Password:</label>
      <input type="password" name="password" v-model="password">
      <button type="submit" name="button">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log('New component mounted.')
  },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods: {
    login() {
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$router.push({ name: "home" })
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="css">
</style>
