import Vue from 'vue'
import Vuex from 'vuex'

// 暂时去除 vuex-persistedstate 使状态 保持持久化
// import { createPersistedState, createSharedMutations } from 'vuex-electron'

import modules from './modules'

Vue.use(Vuex)

export default new Vuex.Store({
  modules,
  // plugins: [
  //   createPersistedState(),
  //   createSharedMutations()
  // ],
  strict: process.env.NODE_ENV !== 'production'
})
