import Vue from 'vue'
import { createPinia, PiniaVuePlugin } from 'pinia'
import VueRouter from 'vue-router'
import router from '@/router'
import App from './App.vue'

Vue.use(PiniaVuePlugin)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router,
  pinia: createPinia()
}).$mount('#app')
