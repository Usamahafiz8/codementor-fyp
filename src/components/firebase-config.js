// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdLVFNOWHLwnwXKJElHYLwF4NGpbp1oa0",
  authDomain: "code-mentor-5ac96.firebaseapp.com",
  projectId: "code-mentor-5ac96",
  storageBucket: "code-mentor-5ac96.appspot.com",
  messagingSenderId: "222694177964",
  appId: "1:222694177964:web:941e9ad35a1d894cadb309"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore(app);

export { db };