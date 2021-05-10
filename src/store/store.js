// import Vue from "vue"
import { createStore } from "vuex"
import axios from "axios"
// import router from "../router"

import api_test from "./modules/api_test"

// Vue.use(Vuex)
axios.defaults.baseURL = "https://cv-hub-api-zvz66.ondigitalocean.app/api"

export default createStore({
  modules: {
    api_test,
  },
  // router: {
  //
  // }
})
