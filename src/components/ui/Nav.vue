<template lang="html">
  <router-link to="/">Home</router-link>
  <router-link to="/api_test">Test API connection</router-link>
</template>

<script>
export default {
  mounted() {
    console.log("component mounted");
  }
}
</script>

<style lang="css">
</style>
