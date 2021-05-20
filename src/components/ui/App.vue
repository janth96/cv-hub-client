<template>
  <Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Nav from "./Nav"
import Footer from "./Footer"

export default {
  name: 'App',
  components: {
    Nav,
    Footer,
  },
  mounted () {
    console.log('app mounted');
  }
}
</script>
