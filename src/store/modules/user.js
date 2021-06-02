import axios from 'axios'
// import router from '../../router'

export default {
  state: {
    user: null,
  },
  getters: {
    user: state => state.user,
  },
  mutations: {
    SET_USER (state, user) {
      state.user = user
    },
  },
  actions: {
    getUser({ state, commit }) {

      // Reset store
      commit("SET_USER", null)
      axios.defaults.headers.common["Authorization"] = "Bearer " + state.token

      return new Promise((resolve, reject) => {
        axios.get('/me')
        .then(response => {
          commit("SET_USER", response.data)
          resolve()
        }).catch(() => {
          commit("SET_USER", false)
          reject()
        })
      })
    },
    updateUser () {

    }
  }
}
