import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import messagePlugin from './utils/message.plugin'
import dateFilter from '@/filters/date.filter'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.use(Vuelidate)
Vue.use(messagePlugin)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyCYtMZ2cDbz88Sc5IZlcSWsVv9aLiNGxfg",
  authDomain: "vue-crm-cc648.firebaseapp.com",
  databaseURL: "https://vue-crm-cc648.firebaseio.com",
  projectId: "vue-crm-cc648",
  storageBucket: "vue-crm-cc648.appspot.com",
  messagingSenderId: "679877254461",
  appId: "1:679877254461:web:643030441e659fe85fb954"
})

Vue.config.productionTip = false

let app

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
      router,
      store,
      render: h => h(App)
    }).$mount('#app')
  }
})
