<template>
  <h1>Hello world!</h1>
  <Nav/>
  <router-view/>
</template>

<script>
import Nav from "./Nav"

export default {
  name: 'App',
  components: {
    Nav,
  },
  mounted () {
    console.log('app mounted');
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
