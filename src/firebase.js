// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"


const firebaseConfig = {
  apiKey: "AIzaSyB4ktcrJT7sQMJds116xij0yoOYMzvERLE",
  authDomain: "clone-9c008.firebaseapp.com",
  projectId: "clone-9c008",
  storageBucket: "clone-9c008.appspot.com",
  messagingSenderId: "947289263836",
  appId: "1:947289263836:web:15775239e2c68952936e19",
  measurementId: "G-6SZC8YXGD7"
};

const db = firebase.initializeApp(firebaseConfig).firestore();
const auth = firebase.auth();

export { db, auth };