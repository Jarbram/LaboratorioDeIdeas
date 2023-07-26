// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeeLTPnPYiMXvzPvMJbuZAYQvYsdZv-LI",
  authDomain: "ideas-lab-82ada.firebaseapp.com",
  projectId: "ideas-lab-82ada",
  storageBucket: "ideas-lab-82ada.appspot.com",
  messagingSenderId: "91528902139",
  appId: "1:91528902139:web:5be14f70ae28837b57c75e",
  measurementId: "G-0EZ7CDMF9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };