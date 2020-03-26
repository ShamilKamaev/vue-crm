import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugun from './utils/message.plugun'
import dateFilter from '@/filters/date.filter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

Vue.use(Vuelidate)
Vue.use(messagePlugun)

Vue.config.productionTip = false

Vue.filter('date', dateFilter)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
