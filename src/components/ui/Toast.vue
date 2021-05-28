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
.toast {
  position: fixed;
  bottom: 10px;
  opacity: 1;
  padding: 10px;
  width: 90vw;
  max-width: 1000px;
  transform: translateX(-50%);
  left: 50%;
  z-index: 100;
  border-radius: 5px;

  &.loading {
    background-color: brown;
    color: white;
  }

  b {
    margin-right: 10px;
  }
}

// Animations
.toast-enter-active,
.toast-leave-active {
  transition: all .2s ease;
}

.toast-enter-to,
.toast-leave-from {
  bottom: 10px;
  opacity: 1;
}

.toast-leave-to,
.toast-enter-from {
  bottom: -50px;
  opacity: 0;
}
</style>
