import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCwDhMWta_jlRw3GwqHU6MLcTzrvKff2Sk",
  authDomain: "replica-3c544.firebaseapp.com",
  databaseURL: "https://replica-3c544.firebaseio.com",
  projectId: "replica-3c544",
  storageBucket: "replica-3c544.appspot.com",
  messagingSenderId: "897702238870",
  appId: "1:897702238870:web:1bee9cff8f45b6b8e900b7"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
