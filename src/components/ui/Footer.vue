<template>
  <footer>
    <div class="container">
      <p class="copyright">&#169; {{ currentYear }} Jan ten Haaf </p>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  computed: {
    currentYear () {
      return new Date().getFullYear();
    }
  }
}
</script>
