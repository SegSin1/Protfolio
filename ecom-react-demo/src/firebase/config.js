// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
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
initializeApp(firebaseConfig);
//project db
const appStorage = getStorage();
//firestore
const appFirestore = getFirestore();

export { appStorage, appFirestore };
