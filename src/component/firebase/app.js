import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyA5kQhOQ2Mwk7K9XetG_BnvYbkdPJq80_E",

  authDomain: "fireauth-e060a.firebaseapp.com",

  projectId: "fireauth-e060a",

  storageBucket: "fireauth-e060a.appspot.com",

  messagingSenderId: "611508895789",

  appId: "1:611508895789:web:410e6e058325cf8bfa78a4"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };