import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () =>
  new Vuex.Store({
    state: {
      showPopup: false
    },
    mutations: {
      popup (state) {
        state.showPopup=!state.showPopup;
      }
    }
  })

export default store
