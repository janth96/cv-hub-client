<template>
  <div></div>
</template>
<script>
export default {
  created() {
    // Wait for logout to finish
    this.$store.dispatch("logout")
    .then(() => {
      // then redirect user to home page
      this.$router.push({ name: "home" })
    })
  }
}
</script>
