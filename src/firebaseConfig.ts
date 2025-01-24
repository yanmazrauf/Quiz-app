// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWp8W-SwsOuCf0WhPh5XJGjjW6sDKnejo",
  authDomain: "quiz-app-backend-6bb98.firebaseapp.com",
  databaseURL: "https://quiz-app-backend-6bb98-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "quiz-app-backend-6bb98",
  storageBucket: "quiz-app-backend-6bb98.firebasestorage.app",
  messagingSenderId: "539367768419",
  appId: "1:539367768419:web:f443551ccd308b4fe01356"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firestore referansı

export const db = getFirestore(app);