import React, { useEffect } from "react";
import  useFirebaseStorage  from "../../../hooks/useFirebaseStorage";
import classes from "./ProgressBar.module.css";

const ProgressBar = ({ file, setFile }) => {
  const { progress, url } = useFirebaseStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return (
    <div
      className={classes["progress-bar"]}
      style={{ width: `${progress}px` }}
    ></div>
  );
};

export default ProgressBar;
