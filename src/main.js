import Vue from 'vue'
import App from './App.vue'
import router from './router'

import firebase from 'firebase'

var config = {
  apiKey: "AIzaSyAB0JuGXxMEGPqPbUXzXvtMUGYxHCP5rN8",
  authDomain: "spemer-bad39.firebaseapp.com",
  databaseURL: "https://spemer-bad39.firebaseio.com",
  projectId: "spemer-bad39",
  storageBucket: "spemer-bad39.appspot.com",
  messagingSenderId: "966829305796"
}
firebase.initializeApp(config)

let database = firebase.database()

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
