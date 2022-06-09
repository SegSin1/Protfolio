import React from "react";
import { useFirebaseStorage } from "../../../hooks/useFirebaseStorage";
import classes from "./ProgressBar.module.css";

const ProgressBar = () => {
  return <div className={classes["progress-bar"]}></div>;
};

export default ProgressBar;
