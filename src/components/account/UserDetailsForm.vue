<template lang="html">
  <div class="card__form">
    <form @submit.prevent="">
      <div class="form__content">

        <ul class="form__fields">
          <li>
            <label for="name">Name:</label>
            <input type="text" v-model="form.name" id="name"
            :class="{ error: errors.name }"
            @blur="[$store.commit('DELETE_ERROR', 'name')]">
            <div class="validation__error" v-if="errors.name">{{ errors.name[0] }}</div>
            <!-- <span class="unit">t/ha</span> -->
          </li>
          <li>
            <label for="job_title">Job title:</label>
            <input type="text" v-model="form.job_title" id="job_title"
            :class="{ error: errors.job_title }"
            @blur="[$store.commit('DELETE_ERROR', 'job_title')]">
            <div class="validation__error" v-if="errors.job_title">{{ errors.job_title[0] }}</div>
          </li>
          <li>
            <label for="phone_number">Phone number:</label>
            <input type="text" v-model="form.phone_number" id="phone_number"
            :class="{ error: errors.phone_number }"
            @blur="[$store.commit('DELETE_ERROR', 'phone_number')]">
            <div class="validation__error" v-if="errors.phone_number">{{ errors.phone_number[0] }}</div>
          </li>
          <li>
            <label for="linkedin_url">LinkedIn url:</label>
            <input type="text" v-model="form.linkedin_url" id="linkedin_url"
            :class="{ error: errors.linkedin_url }"
            @blur="[$store.commit('DELETE_ERROR', 'linkedin_url')]">
            <div class="validation__error" v-if="errors.linkedin_url">{{ errors.linkedin_url[0] }}</div>
          </li>
          <li>
            <label for="github_url">GitHub url:</label>
            <input type="text" v-model="form.github_url" id="github_url"
            :class="{ error: errors.github_url }"
            @blur="[$store.commit('DELETE_ERROR', 'github_url')]">
            <div class="validation__error" v-if="errors.github_url">{{ errors.github_url[0] }}</div>
          </li>
          <li>
            <label for="website_url">Personal website url:</label>
            <input type="text" v-model="form.website_url" id="website_url"
            :class="{ error: errors.website_url }"
            @blur="[$store.commit('DELETE_ERROR', 'website_url')]">
            <div class="validation__error" v-if="errors.website_url">{{ errors.website_url[0] }}</div>
          </li>
        </ul>

        <!-- {{ userDetails }} -->
      </div>
      <ul class="form__actions">
        <li><button type="button" @click="cancelUserDetailsForm">Cancel</button></li>
        <li><button type="submit" @click="submitUserDetailsForm">Submit</button></li>
      </ul>
    </form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  created() {
    // TODO empty errors

    // fill form with data
    if(this.userDetails != undefined) {
      this.form.name = this.userDetails.name
      this.form.job_title = this.userDetails.job_title
      this.form.phone_number = this.userDetails.phone_number
      this.form.linkedin_url = this.userDetails.linkedin_url
      this.form.github_url = this.userDetails.github_url
      this.form.website_url = this.userDetails.website_url
    }
  },
  props: {
    userDetails: {
      type: Object,
      default: function() {
        return {}
      },
    },
  },
  data () {
    return {
      form: {
        name: null,
        job_title: null,
        phone_number: null,
        linkedin_url: null,
        github_url: null,
        website_url: null,
      }
    }
  },
  computed: {
    ...mapGetters(['errors'])
  },
  methods: {
    cancelUserDetailsForm () {
      this.$emit('closeUserDetailsForm')
    },
    submitUserDetailsForm() {
      this.$store.dispatch('updateUserDetails', this.form)
      .then(() => {
        this.cancelUserDetailsForm()
      }).catch(() => {
        console.log('something went wrong');
      })
    }
  }
}
</script>
