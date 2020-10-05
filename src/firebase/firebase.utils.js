import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAKVjVrOXDa-Rz5c87fznJsYVfasUiPdQs",
  authDomain: "crow-db-ae96a.firebaseapp.com",
  databaseURL: "https://crow-db-ae96a.firebaseio.com",
  projectId: "crow-db-ae96a",
  storageBucket: "crow-db-ae96a.appspot.com",
  messagingSenderId: "952423528412",
  appId: "1:952423528412:web:f28b92149587495b864119",
  measurementId: "G-X780QGV5N5",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
