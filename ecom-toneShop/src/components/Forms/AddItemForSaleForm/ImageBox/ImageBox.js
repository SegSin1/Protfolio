import React, { useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import classes from "./ImageBox.module.css";
import ProgressBar from "./ProgressBar/ProgressBar";

const ImageBox = ({ imgSrc, alt, imgName }) => {
  const [file, setFile] = useState(null);
  const [isError, setisError] = useState(null);
  const [imgURL, setImgURL] = useState(null);

  const types = ["image/png", "image/jpeg", "image/jpg"];
  const imageAddedHandler = (e) => {
    let selected = e.target.files[0];
    if (selected && types.includes(selected.type)) {
      setFile(selected);
      setisError("");
    } else {
      setFile(null);
      setisError("Please select an image file (png or jpg)");
    }
  };
  return (
    <>
      <div className={classes["img-box-container"]}>
        <div
          className={
            !isError
              ? classes["img-box"]
              : [classes["img-box"], classes["img-box-error"]].join(" ")
          }
        >
          {imgURL && <img src={imgURL} alt={alt} style={{maxHeight:'100%',maxWidth:'100%'}}/>}
          {imgURL && <div>{imgName}</div>}
          <label>
            <input
              onChange={imageAddedHandler}
              type="file"
              max="4"
              multiple="multiple"
              accept=".jpg,.png,.jpeg"
              style={{ opacity: 0, height: 0, width: 0 }}
            />
            {!imgURL && <BsPlusCircleDotted className={classes.svg}/>}
          </label>
        {file && <ProgressBar file={file} setFile={setFile} setImgURL={setImgURL}/>}
        </div>
        {isError && <div className={classes.error}>{isError}</div>}
      </div>
    </>
  );
};

export default ImageBox;
