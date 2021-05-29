<template lang="html">
  <section>
    <transition name="slide-in-from-bottom" mode="out-in">
      <form action="#" @submit.prevent="login" method="post" class="auth__form" v-if="this.show">
        <ul class="form__fields">
          <li>
            <label for="email">Email:</label>
            <input
            type="email"
            id="email"
            v-model="email"
            ref="email"
            :class="{ error: errors.email }"
            @blur="$store.commit('DELETE_ERROR', 'email')"
            required>
            <span class="validation__error" v-if="errors.email">{{ errors.email }}</span>
          </li>
          <li>
            <label for="password">Password:</label>
            <input type="password" id="password" v-model="password"  required>
          </li>
        </ul>
        <ul class="form__actions">
          <li>
            <button type="submit" name="button" :disabled="this.loginButtonStatus">Login</button>
          </li>
        </ul>
      </form>
    </transition>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      show: false,
      email: "e@e.e",
      password: "1234567890",
      loginButtonStatus: false,
    }
  },
  mounted() {
    this.show = true;
    window.setTimeout(() => {
      this.$refs.email.focus()
    }, 50)
  },
  computed: {
    ...mapGetters(['errors']),
  },
  methods: {
    login() {
      this.loginButtonStatus = true
      this.$store.dispatch("login", {
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$router.push({ name: "account" })
      }).catch(() => {
        this.loginButtonStatus = false
        this.$refs.email.focus()
        this.password = ""
      })
    }
  }
}
</script>
