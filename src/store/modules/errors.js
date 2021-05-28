export default {
  state: {
    errors: {},
  },
  getters: {
    errors: state => state.errors,
  },
  mutations: {
    // Adds errors to list.
    SET_ERRORS (state, errors) {
      state.errors = errors
    },

    // Deletes all errors
    RESET_ERRORS (state) {
      state.errors = {}
    },

    // Deletes one error from object. Accepts field name
    DELETE_ERROR (state, field) {
      delete state.errors[field]
    },
  },
}
