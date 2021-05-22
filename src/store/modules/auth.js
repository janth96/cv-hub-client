import axios from 'axios'
// import router from '../../router'

export default {
  state: {
    token: localStorage.getItem('token') || null,
    user: null,
  },
  getters: {
    token: state => state.token,
    user: state => state.user,
  },
  mutations: {
    SET_TOKEN (state, token) {
      localStorage.setItem('token', token)
      state.token = token
    },
    DESTROY_TOKEN (state) {
      localStorage.removeItem('token')
      state.token = null
    },
    SET_USER (state, user) {
      state.user = user
    },
  },
  actions: {
    register(context, credentials) {
      return new Promise ((resolve, reject) => {
        axios.post('/register', {
          "name": credentials.name,
          "email": credentials.email,
          "password": credentials.password,
        }).then(response => {
          // dispatch("login", {
          //   "email": credentials.email,
          //   "password": credentials.password,
          // }).catch(error => {
          //   reject(error)
          // })
          resolve(response)
        }).catch(error => {
          reject(error)
        })
      })
    },
    login({ commit }, credentials) {
      return new Promise ((resolve, reject) => {
        axios.post('/login', {
          "email": credentials.email,
          "password": credentials.password,
        }).then(response => {
          console.log(response.data);
          commit('SET_TOKEN', response.data)
          resolve(response)
        }).catch(error => {
          console.log(error.response.data.message);
          reject(error)
        })
      })
    },
    logout({ commit }) {
      return new Promise((resolve) => {
        commit("DESTROY_TOKEN")
        setTimeout(() => {
            resolve()
        }, 50)
      })
    },
    getUser({ state, commit }) {
      commit("SET_USER", null)
      axios.defaults.headers.common["Authorization"] = "Bearer " + state.token

      return new Promise((resolve, reject) => {
        axios.get('/me')
        .then(response => {
          console.log(response.data);
          commit("SET_USER", response.data)
          resolve()
        }).catch(error => {
          reject(error)
        })
      })
    }
  }
}
