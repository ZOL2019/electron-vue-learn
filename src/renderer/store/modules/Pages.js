const state = {
  currentPage: 'MainPage'
}

const mutations = {
  CHANGE_INDEX_PAGE_MUTATIONS (state, val) {
    state.currentPage = val
  }
}

const actions = {
  CHANGE_INDEX_PAGE_ACTIONS ({ commit }, val) {
    // do something async
    commit('CHANGE_INDEX_PAGE_MUTATIONS', val)
  }
}

export default {
  state,
  mutations,
  actions
}
