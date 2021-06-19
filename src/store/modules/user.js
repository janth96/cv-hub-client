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
    getUser({ commit }) {

      // Reset store
      commit("SET_USER", null)

      return new Promise((resolve, reject) => {
        axios.get('/user')
        .then(response => {
          commit("SET_USER", response.data.user)
          resolve()
        }).catch(() => {
          commit("SET_USER", false)
          reject()
        })
      })
    },
    updateUserDetails({ commit }, userDetails) {

      console.log(userDetails);
      // commit("SET_USER", null)

      return new Promise((resolve, reject) => {
        axios.patch('/user', userDetails)
        .then(response => {
          commit("SET_USER", response.data.user)
          resolve()
        }).catch(error => {
          commit("SET_ERRORS", error.response.data.errors)
          reject()
        })
      })
    },
  }
}
