<template>
  <transition name="toast">
    <div class="toast" v-if="toast.heading" :class="toast.type">
      <b>{{ toast.heading}}</b>
      <span>{{ toast.content }}</span>
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
