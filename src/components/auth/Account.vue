<template>
  <section class="">
    <h1>Your account</h1>
    <p>Breadcrumbs...</p>
    <div class="stack">
      <div class="card">
        <p v-if="user == null">Loading...</p>
        <p v-else-if="user == false">Something went wrong...</p>
        <ul v-else>
          <li>Name: {{ user.name }}</li>
          <li>Email: {{ user.email }}</li>
          <li>Job title: {{ user.job_title }}</li>
          <li>Phone number: {{ user.phone_number }}</li>
          <li>LinkedIn url: {{ user.linkedin_url }}</li>
          <li>GitHub url: {{ user.github_url }}</li>
          <li>Personal Website url: {{ user.website_url }}</li>
        </ul>

        <ul class="form__actions">
          <li><button type="button" @click="clickShowUserDetailsFormButton">Show form...</button></li>
        </ul>

        <transition name="card-form-slide-in-from-right">
          <!-- TODO If 'edit button is clicked, attach data as prop so that the form component knows it's an edit form. Otherwise it knows that it is a create form' -->
          <!-- <UserDetailsForm
          :data="some dataaa"
          v-if="this.showUserDetailsForm"
          @newId="newUserCreated" > only for when form can be a 'create' form
          >

          </UserDetailsForm> -->
          <div class="card__form" v-if="this.showUserDetailsForm">
            <form action="#">
              <div class="form__content">
                some form content
              </div>
              <ul class="form__actions">
                <li><button type="button" @click="cancelUserDetailsForm">Cancel</button></li>
              </ul>
              <!-- <button type="submit" @click="submitUserDetailsForm">Submit</button> -->
            </form>
          </div>
        </transition>
      </div>
      <!-- <transition name="slide-right-to-left">
        <div class="component__nested__level__content"
          v-if="this.showEditForm">
          <p>some next level component</p>
          <button type="button" @click="closeNestedLevelContent">Close</button>
        </div>
      </transition> -->
    </div>



    <!-- <button type="button" name="button" @click="clickShowEditFormButton">update details</button> -->
  </section>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
  created() {
    this.$store.dispatch('getUser')
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
    cancelUserDetailsForm() {
      this.showUserDetailsForm = false
    },
    updateUser() {
      this.$store.dispatch('updateUser')
    }
  }
}
</script>
