<template>
  <section></section>
</template>
<script>
export default {
  created() {
    // Wait for logout to finish
    this.$store.dispatch("logout")
    .then(() => {
      // Then redirect user to home page
      this.$router.push({ name: "login" })
    })
  }
}
</script>
