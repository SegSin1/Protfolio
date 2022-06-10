// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import {
  getFirestore,
  serverTimestamp,
  doc,
  setDoc,
  addDoc,
  collection,
} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4iBEZ4exNvILzTm9H33QP0NFLMqpd9hg",
  authDomain: "segev-ecom-react-demo.firebaseapp.com",
  projectId: "segev-ecom-react-demo",
  storageBucket: "segev-ecom-react-demo.appspot.com",
  messagingSenderId: "83473561386",
  appId: "1:83473561386:web:c85162389bb0a31a975053",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//project db
const appStorage = getStorage();
//firestore
const appFirestoreDB = getFirestore(app);
const timestamp = serverTimestamp();
export {
  appStorage,
  appFirestoreDB,
  timestamp,
  ref,
  getDownloadURL,
  collection,
  doc,
  setDoc,
  addDoc,
};
