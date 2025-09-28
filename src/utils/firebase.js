// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6YmWCRxTgtabEAcbw3iVdwpHzDzoGaK8",
  authDomain: "netflixgpt-a87f7.firebaseapp.com",
  projectId: "netflixgpt-a87f7",
  storageBucket: "netflixgpt-a87f7.firebasestorage.app",
  messagingSenderId: "260724170915",
  appId: "1:260724170915:web:885167f5d7a475278a1f16",
  measurementId: "G-99KD29M7GG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();