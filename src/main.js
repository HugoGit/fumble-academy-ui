import Vue from 'vue'
import Vuesax from 'vuesax'
import App from './App.vue'
import router from './router'
import VueX from 'vuex'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import auth from './router/middleware/auth'
import 'vuesax/dist/vuesax.css'
import './assets/global.scss'

Vue.config.productionTip = false
Vue.use(Vuesax)

router.beforeEach((to, from, next) => auth({ next, to }))

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

Vue.use(VueX, VueAxios, axios)
