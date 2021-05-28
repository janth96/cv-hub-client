import { createStore } from "vuex"
import axios from "axios"

import auth from "./modules/auth"
import errors from "./modules/errors"
import toast from "./modules/toast"

axios.defaults.baseURL = "http://localhost:8000/api"
// axios.defaults.baseURL = "https://cv-hub-api-zvz66.ondigitalocean.app/api"

export default createStore({
  modules: {
    auth,
    errors,
    toast,
  },
})
