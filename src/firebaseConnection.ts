import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIOpn8lZDpJFZSUFHi6AtDEVBf9eqDgPU",
  authDomain: "cakesnira.firebaseapp.com",
  projectId: "cakesnira",
  storageBucket: "cakesnira.appspot.com",
  messagingSenderId: "630241428660",
  appId: "1:630241428660:web:ef4cfb3816be362ef043e1",
  measurementId: "G-HEPMV74KXL",
};

const firebaseApp = initializeApp(firebaseConfig);
const database = getFirestore(firebaseApp);

export { database };
