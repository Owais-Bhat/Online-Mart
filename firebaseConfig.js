// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDTC04BNaOe6utslZ6KLpqrhZ6dfmxA1q8",
  authDomain: "online-mart-1e716.firebaseapp.com",
  projectId: "online-mart-1e716",
  storageBucket: "online-mart-1e716.appspot.com",
  messagingSenderId: "171161143307",
  appId: "1:171161143307:web:bef7dc164c1be626909f0e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
