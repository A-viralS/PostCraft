// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-96bcb.firebaseapp.com",
  projectId: "blog-96bcb",
  storageBucket: "blog-96bcb.appspot.com",
  messagingSenderId: "466727443119",
  appId: "1:466727443119:web:59ea0cbcef1cd97dc4d25a",
  measurementId: "G-KF7KKL6RWP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
