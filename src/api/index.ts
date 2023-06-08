// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDFxC4UxNAhh6QNfBEsev54M8RMTEUeGpM",
  authDomain: "finance-tracker-386719.firebaseapp.com",
  projectId: "finance-tracker-386719",
  storageBucket: "finance-tracker-386719.appspot.com",
  messagingSenderId: "144742137745",
  appId: "1:144742137745:web:375755d2e2d4d154ea2430",
  measurementId: "G-EXKCTV7HK5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);