export default {
  state: {
    toast: {
      heading: "",
      content: "",
      type: "",
    },
  },
  getters: {
    toast: state => state.toast
  },
  mutations: {
    SET_TOAST(state, toast) {
      state.toast = toast
    },
    SET_TOAST_CONTENT(state, content) {
      state.toast.content = content
    },
    TOAST_SUCCESS(state, heading) {
      state.toast.heading = heading
      state.toast.type = "success"

      // Reset toast
      window.setTimeout(() => {
        state.toast = {
          heading: "",
          content: "",
          type: "",
        }
      }, 2000)
    },
    RESET_TOAST(state) {
      state.toast = {
        heading: "",
        content: "",
        type: "",
      }
    }
  },
}
