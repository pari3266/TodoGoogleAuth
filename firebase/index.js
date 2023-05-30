// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRsNhYBEq1oWGvVpgjm_DgHb7uE5MSKi4",
  authDomain: "todo-next-7ffb6.firebaseapp.com",
  projectId: "todo-next-7ffb6",
  storageBucket: "todo-next-7ffb6.appspot.com",
  messagingSenderId: "512590388238",
  appId: "1:512590388238:web:0465fcce8fa59e6cb4f05f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db};