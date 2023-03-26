// This file will contain the configuration of the firebase which we can export to different components
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtAv8mkgYnhGCcSbv7z8es8RzCBV3a7OQ",
  authDomain: "pawm-adhv.firebaseapp.com",
  projectId: "pawm-adhv",
  storageBucket: "pawm-adhv.appspot.com",
  messagingSenderId: "1047473657489",
  appId: "1:1047473657489:web:d8865fb0b232dfa8f0d130",
  measurementId: "G-TPG09CGG0N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// exporting config variable so that it is available to the different components
export const db = getFirestore(app);