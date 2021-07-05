import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyAW9VpZYurCGOsYK7MJyrE6Nf9o1_sQhCQ",
  authDomain: "crwn-db-7011f.firebaseapp.com",
  projectId: "crwn-db-7011f",
  storageBucket: "crwn-db-7011f.appspot.com",
  messagingSenderId: "997623673968",
  appId: "1:997623673968:web:1fb7d98fd2f2a65838f0b5",
  measurementId: "G-R8NLTX4NN1",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
