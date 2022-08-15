import Vue from 'vue'
import Vuex from 'vuex'
import hehe from 'vuex-persistedstate'
import { unread } from '../assets/tabs.json'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    unread: unread,
    Read: [],
    recycle: []
  },
  mutations: {
    // 标为已读
    yidu(state, msg) {
      state.Read.push(msg)
      const idx = state.unread.findIndex(item => item.id === msg.id)
      console.log(idx);
      state.unread.splice(idx, 1)
    },
    //全部标为已读
    quan(state) {
      state.unread.forEach(item => {
        state.Read.push(item)
      })
      state.unread = []
    },
    //删除已读
    del(state, msg) {
      state.recycle.push(msg)
      const idx = state.Read.findIndex(item => item.id === msg.id)
      state.Read.splice(idx, 1)
    },
    // 删除全部
    delAll(state) {
      state.Read.forEach(item => {
        state.recycle.push(item)
      })
      state.Read = []
    },
    //还原未读
    hywd(state, msg) {
      state.unread.push(msg)
      const idx = state.Read.findIndex(item => item.id === msg.id)
      state.Read.splice(idx, 1)
    },
    // 还原
    huan(state,msg){
      state.Read.push(msg)
      const idx = state.recycle.findIndex(item => item.id === msg.id)
      state.recycle.splice(idx, 1)
    },
    // 清空
    qk(state){
      state.recycle=[]
    }
  },
  actions: {
  },
  modules: {
  },
  plugins: [
    hehe({
      storage: sessionStorage
    })
  ]
})
