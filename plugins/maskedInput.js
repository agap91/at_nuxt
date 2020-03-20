import Vue from 'vue'
import VueTheMask from 'vue-the-mask'

if (process.client) {
  Vue.use(VueTheMask)
  // Vue.component('masked-input', MaskedInput)
}
