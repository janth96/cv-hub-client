export default {
  state: {
    errors: [],
  },
  getters: {
    errors: state => state.errors,
  },
  mutations: {
    // Adds errors to list. Accepts array only
    ADD_ERRORS (state, errors) {
      state.errors.push(errors)
    },

    // Deletes all errors
    RESET_ERRORS (state) {
      state.errors.splice(0, state.errors.length)
    },

    // Deletes one error from array. Accepts field name
    DELETE_ERROR (state, error) {
      state.errors.splice(state.errors.findIndex(item => item.fieldName == error), 1)
    },
  },
}
