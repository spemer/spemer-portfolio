import firebase from 'firebase'
import firestore from 'firebase/firestore'


// Initialize Firebase
let config = {
  apiKey: "AIzaSyBUIsTut6BHWOa_5pVxPBix7Ed2dgEP9NI",
  authDomain: "spemer-portfolio-vue.firebaseapp.com",
  databaseURL: "https://spemer-portfolio-vue.firebaseio.com",
  projectId: "spemer-portfolio-vue",
  storageBucket: "",
  messagingSenderId: "842763617813"
}

const firebaseApp = firebase.initializeApp(config)
firebaseApp.firestore().settings({ timestampsInSnapshots: true })


// let database = firebase.database()


export default firebaseApp.firestore()
