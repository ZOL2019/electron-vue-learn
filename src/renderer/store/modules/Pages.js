const state = {
  currentPage: 'index'
}

const mutations = {
  CHANGE_INDEX_PAGE (state, key) {
    state.currentPage = key
  }
}

const actions = {
  CHANGE_INDEX_PAGE ({ commit }, key) {
    // do something async
    commit('CHANGE_INDEX_PAGE', key)
  }
}

export default {
  state,
  mutations,
  actions
}
