import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCygtBKc703cbjulL8PlmtWwTFOarfSFQY",
  authDomain: "finance-tracker-96e70.firebaseapp.com",
  projectId: "finance-tracker-96e70",
  storageBucket: "finance-tracker-96e70.appspot.com",
  messagingSenderId: "769668008432",
  appId: "1:769668008432:web:ea347ab325545e59673535",
  measurementId: "G-9KX46NFT57"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//init service
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//timestamp

const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }