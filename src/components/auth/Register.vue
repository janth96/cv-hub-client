<template lang="html">
  <div class="modal">
    <form action="#" @submit.prevent="register" method="post">
      <label for="name">Name:</label>
      <input type="name" name="name" v-model="name">
        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email">
      <label for="password">Password:</label>
      <input type="password" name="password" v-model="password">
      <label for="password_check">Re-enter password:</label>
      <input type="password_check" name="password_check" v-model="password_check">
      <button type="submit" name="button">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  mounted() {
    // console.log('New component mounted.')
  },
  data() {
    return {
      name: "",
      email: "",
      password: "",
      password_check: "",
    }
  },
  methods: {
    register() {
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        }).then (() => {
          this.$router.push({ name: "home" })
        }).catch(error => {
          console.error(error);
        })
      }).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style lang="css">
</style>
