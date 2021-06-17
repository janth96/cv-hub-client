import { createStore } from "vuex"
import axios from "axios"

import auth from "./modules/auth"
import errors from "./modules/errors"
import toast from "./modules/toast"
import user from "./modules/user"

// axios.defaults.baseURL = "http://localhost:8000/api"
// axios.defaults.baseURL = "https://cv-hub-api-zvz66.ondigitalocean.app/api"
if (process.env.NODE_ENV === 'development') {
    console.log('In Dev Mode');
    axios.defaults.baseURL = "http://localhost:8000/api"
 } else {
   console.log('In production mode');
   axios.defaults.baseURL = "https://cv-hub-api-zvz66.ondigitalocean.app/api"
 }

export default createStore({
  modules: {
    auth,
    errors,
    toast,
    user,
  },
})
