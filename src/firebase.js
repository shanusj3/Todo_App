import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAoSzqzDPfISRKBFdBmsNA1jHbb-OPv6z0",
  authDomain: "todo-crud-5bace.firebaseapp.com",
  projectId: "todo-crud-5bace",
  storageBucket: "todo-crud-5bace.appspot.com",
  messagingSenderId: "304020950118",
  appId: "1:304020950118:web:4e4dae7a545ecc5085b1a7"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};