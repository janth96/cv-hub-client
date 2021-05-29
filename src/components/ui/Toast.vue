<template>
  <transition name="toast">
    <div class="toast" v-if="toast.heading" :class="toast.type">
      <b>{{ toast.heading}}</b>
      <span>{{ toast.content }}</span>
      <router-link v-if="toast.to" :to="{ name: toast.to.name, params: toast.to.params }"> Go to {{ toast.to.name }} page</router-link>
    </div>
  </transition>
</template>
<script>
import {mapGetters} from 'vuex'

export default {
  computed: {
    ...mapGetters(['toast'])
  },
}
</script>

<style lang="scss">

</style>
