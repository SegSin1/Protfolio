import { uploadBytesResumable } from "firebase/storage";
import { useState, useEffect } from "react";
import {
  appStorage,
  ref,
  appFirestore,
  timestamp,
  getDownloadURL,
} from "../firebase/config";

const useFirebaseStorage = (file,setImgURL) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState([]);

  useEffect(() => {
    if (file) {
      const storageRef = ref(appStorage, file.name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_change",
        (snapshot) => {
          let precentage =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(precentage);
        },
        (err) => {
          setError(err);
        },
        async () => {
          const url = await getDownloadURL(uploadTask.snapshot.ref);
          //   const createdAt = timestamp();
          //   await collectionRef.add({ url, createdAt });
          setUrl((prevState) => [...prevState, url]);
          setImgURL(url)
        }
      );
    }
  }, [file]);

  return { progress, url, error };
};

export default useFirebaseStorage;
