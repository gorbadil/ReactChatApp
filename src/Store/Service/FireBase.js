import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNf-Dn45Oahpkq-BfJgdNnt0kpcCuuHVM",
  authDomain: "chatapp-9fcdd.firebaseapp.com",
  projectId: "chatapp-9fcdd",
  storageBucket: "chatapp-9fcdd.appspot.com",
  messagingSenderId: "347331705838",
  appId: "1:347331705838:web:ccff923710b35dcd80ecff",
  measurementId: "G-1MX210LF8L",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
