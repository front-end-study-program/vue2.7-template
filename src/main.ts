import Vue from 'vue'
import { createPinia, PiniaVuePlugin  } from 'pinia'
import App from './App.vue'

Vue.use(PiniaVuePlugin)

new Vue({
  render: (h) => h(App),
  pinia: createPinia()
}).$mount("#app");