// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getStorage} from 'firebase/storage'
import { getAuth, GoogleAuthProvider } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBz7wyJVkYMqATrPDLuVmf4Kugfpvxee6g",
  // storageBucket:"gs://english-27893.appspot.com",
  authDomain: "english-27893.firebaseapp.com",
  projectId: "english-27893",
  storageBucket: "english-27893.appspot.com",
  messagingSenderId: "583780830399",
  appId: "1:583780830399:web:22c3fdf9950968d36aca0a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()

export const db = getFirestore(app)