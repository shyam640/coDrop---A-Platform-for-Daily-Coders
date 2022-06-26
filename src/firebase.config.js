// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1K4yjIZbSiRgrDG8sNqSzwCj2jMhfII0",
  authDomain: "codrop-its-shyam640.firebaseapp.com",
  databaseURL: "https://codrop-its-shyam640-default-rtdb.firebaseio.com",
  projectId: "codrop-its-shyam640",
  storageBucket: "codrop-its-shyam640.appspot.com",
  messagingSenderId: "838611720159",
  appId: "1:838611720159:web:b2b73a63b1c11a1040166a",
  measurementId: "G-TC584V7Q1B"
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);

const firestore = getFirestore(app);
const storage = getStorage(app);

export { app , firestore , storage };