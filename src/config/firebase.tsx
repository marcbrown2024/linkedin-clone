// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDCDezOjWtr804y5C1vNY5EQbaNC4L7W0o",
  authDomain: "linkedin-clone-4a1bc.firebaseapp.com",
  projectId: "linkedin-clone-4a1bc",
  storageBucket: "linkedin-clone-4a1bc.appspot.com",
  messagingSenderId: "348072787416",
  appId: "1:348072787416:web:d5fadd78e4afd4ff7cc6ad",
  measurementId: "G-QB160E7NNP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
