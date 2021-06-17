import firebase from "firebase/app";
import "firebase/app";
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDGxJ-Pv15rByz-Z2iDACXYADbzBIP1AjI",
  authDomain: "vue-todo-e64fa.firebaseapp.com",
  projectId: "vue-todo-e64fa",
  storageBucket: "vue-todo-e64fa.appspot.com",
  messagingSenderId: "549370197134",
  appId: "1:549370197134:web:b6b8e62cb8f4ea819ec5df",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

db.settings({timestampsInSnapshots : true});

export default db;