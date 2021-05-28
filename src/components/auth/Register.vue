<template lang="html">
  <section>
    <transition name="slide-in-from-bottom" mode="out-in">
      <form action="#" @submit.prevent="register" method="post" class="auth__form" v-if="this.show">
        <ul class="form__fields">
          <li>
            <label for="name">Name:</label>
            <input
            type="name"
            id="name"
            v-model="name"
            ref="name"
            :class="{ error: errors.name }"
            @blur="$store.commit('DELETE_ERROR', 'name')"
            required>
            <span class="validation__error" v-if="errors.name">{{ errors.name[0] }}</span>
          </li>
          <li>
            <label for="email">Email:</label>
            <input
            type="email"
            id="email"
            v-model="email"
            :class="{ error: errors.email }"
            @blur="[$store.commit('DELETE_ERROR', 'email'), $store.commit('RESET_TOAST')]"
            required>
            <span class="validation__error" v-if="errors.email">{{ errors.email[0] }}</span>
          </li>
          <li>
            <label for="password">Password:</label>
            <input
            type="password"
            id="password"
            v-model="password"
            :class="{ error: errors.password }"
            ref="password"
            @blur="$store.commit('DELETE_ERROR', 'password')"
            required>
            <span class="validation__error" v-if="errors.password">{{ errors.password[0] }}</span>
          </li>
          <li>
            <label for="confirmPassword">Re-enter password:</label>
            <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            :class="{ error: errors.password }"
            @blur="$store.commit('DELETE_ERROR', 'password')"
            required>
          </li>
        </ul>
        <ul class="form__actions">
          <li>
            <button type="submit" name="button">Register</button>
          </li>
        </ul>
      </form>
    </transition>
  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  data() {
    return {
      show: false,
      name: "test",
      email: "e@e.e",
      password: "asdf",
      confirmPassword: "asdf",
    }
  },
  mounted() {
    this.show = true;
    window.setTimeout(() => {
      this.$refs.name.focus()
    }, 50)
  },
  computed: {
    ...mapGetters(["errors"]),
  },
  methods: {
    register() {
      // Check if password is the same
      if(this.password != this.confirmPassword) {
        console.log(false);
        this.$store.commit("SET_ERRORS", {password: "Please make sure that the passwords match"})
        this.$refs.password.focus()
        return
      }
      console.log(true);
      this.$store.dispatch("register", {
        name: this.name,
        email: this.email,
        password: this.password,
      }).then(() => {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        }).then (() => {
          this.$router.push({ name: "home" })
        }).catch(error => {
          console.error(error);
        })
      }).catch(error => {
        // In case email has already been taken, notify user with link to login
        if(error.response.data.errors.email == "The email has already been taken.") {
          // TODO link to login page when clicked
          this.$store.commit("SET_TOAST", { heading: "Account already exists", type: "loading", content: "Go to login?"})
        }

        // Else, show errors
        console.log(error.response.data.errors);
        this.$store.commit("SET_ERRORS", error.response.data.errors)

      })
    }
  }
}
</script>
