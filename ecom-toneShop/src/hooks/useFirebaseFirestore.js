import { useState, useEffect,useReducer } from "react";
import {
  appFirestoreDB,
  ref,
  getDownloadURL,
  collection,
  doc,
  setDoc,
  addDoc,
} from "../firebase/config";

const useFirebaseFirestore = (collection) => {


  const [docs, setDocs] = useState([]);

  useEffect(() => {
    const unsub = appFirestoreDB
      .collection(collection)
      .orderBy("createdAt", "desc")
      .onSnapshot((snap) => {
        let documents = [];
        snap.forEach((doc) => {
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      });

    return () => unsub();
    // this is a cleanup function that react will run when
    // a component using the hook unmounts
  }, [collection]);

  return { docs };
};

export default useFirebaseFirestore;
