import { createStore } from 'vuex'
import ModuleUser from './user'
import MoudlePk from './pk'
import MoudleRecord from './record'
import MoudleRouter from './router'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: ModuleUser,
    pk: MoudlePk,
    record: MoudleRecord,
    router: MoudleRouter,
  }
})
