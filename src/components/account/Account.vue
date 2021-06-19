<template>
  <section class="">
    <h1>Your account</h1>
    <p>Breadcrumbs...</p>
    <div class="stack">
      <div class="card">
        <div class="card__content" :class="{ shrink: this.showUserDetailsForm }">
          <p v-if="user == null">Loading...</p>
          <p v-else-if="user == false">Something went wrong...</p>
          <table v-else class="account__details">
            <tr>
              <td>Name</td>
              <td>{{ user.name }}</td>
            </tr>
            <tr>
              <td>Email</td>
              <td>{{ user.email }}</td>
            </tr>
            <tr>
              <td>Job title</td>
              <td>{{ user.job_title }}</td>
            </tr>
            <tr>
              <td>Phone number</td>
              <td>{{ user.phone_number }}</td>
            </tr>
            <tr>
              <td>LinkedIn url</td>
              <td><a v-if="user.linkedin_url" :href="user.linkedin_url" target="_blank">
                {{ user.linkedin_url }}
                <img src="@/assets/img/open-link-in-new-tab-blue7.svg" alt="Open website in new tab">
              </a></td>
            </tr>
            <tr>
              <td>GitHub url</td>
              <td><a v-if="user.github_url" :href="user.github_url" target="_blank">
                {{ user.github_url }}
                <img src="@/assets/img/open-link-in-new-tab-blue7.svg" alt="Open website in new tab">
              </a></td>
            </tr>
            <tr>
              <td>Personal Website url</td>
              <td><a v-if="user.website_url" :href="user.website_url" target="_blank">
                {{ user.website_url }}
                <img src="@/assets/img/open-link-in-new-tab-blue7.svg" alt="Open website in new tab">
              </a></td>
            </tr>
          </table>

          <ul class="form__actions">
            <li><button type="button" @click="clickShowUserDetailsFormButton">Edit</button></li>
          </ul>
        </div>

        <transition name="card-form-slide-in-from-right">
          <UserDetailsForm
          :key="user.id"
          :userDetails="user"
          @close-user-details-form="closeUserDetailsForm"
          v-if="this.showUserDetailsForm"
          >
          </UserDetailsForm>

        </transition>
      </div>
    </div>
  </section>
</template>

<script>
import UserDetailsForm from './UserDetailsForm'
import {mapGetters} from 'vuex'

export default {
  created() {
    this.$store.dispatch('getUser')
  },
  components: {
    UserDetailsForm,
  },
  data() {
    return {
      showUserDetailsForm: false,
    }
  },
  computed: {
    ...mapGetters(['user'])
  },
  methods: {
    clickShowUserDetailsFormButton() {
      this.showUserDetailsForm = true
    },
    closeUserDetailsForm() {
      this.showUserDetailsForm = false
    },
    updateUser() {
      this.$store.dispatch('updateUser')
    }
  }
}
</script>
