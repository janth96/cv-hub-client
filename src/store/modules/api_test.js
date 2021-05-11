import axios from "axios/index"
// import Vue from "vue"

export default {
  state: {
    recievedData: "loading...",
  },
  getters: {
    recievedData: state => state.recievedData,
  },
  mutations: {
    SET_RECIEVED_DATA(state, payload) {
      state.recievedData = payload
    },
  },
  actions: {
    recieveData({ commit }) {
      commit("SET_RECIEVED_DATA", "loading...")
      return new Promise((resolve, reject) => {
        axios
          .get("/resumes").then(response => {
            commit("SET_RECIEVED_DATA", response.data)
            resolve(response)
          }).catch(error => {
            reject(error)
          })
      })
    }
  }
}
