import { useState, useEffect } from "react";
import { appStorage } from "../firebase/config";

const useFirebaseStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = appStorage.ref(file.name);
    storageRef.put(file).on(
      "state_change",
      (snap) => {
        let precentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(precentage);
      },
      (err) => {
        setError(err);
      },
      async () => {
        const imgDownloadURL = await storageRef.getDownloadURL();
        setUrl(imgDownloadURL);
      }
    );
  }, [file]);

  return { progress, url, error };
};


export default useFirebaseStorage