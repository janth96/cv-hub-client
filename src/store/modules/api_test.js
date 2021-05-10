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
    SET_RECIEVED_DATA(state, data) {
      state.recievedData = data
    },
  },
  actions: {
    recieveData({ commit }) {
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
