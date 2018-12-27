const state = {
  detail: {
    idx: '',
    name: ''
  }
}

const mutations = {
  CHANGE_DETAILS_MUTATIONS (state, val) {
    state.detail = val
  }
}

const actions = {
  CHANGE_DETAILS_ACTIONS ({ commit }, val) {
    // do something async
    commit('CHANGE_DETAILS_MUTATIONS', val)
  }
}

export default {
  state,
  mutations,
  actions
}
