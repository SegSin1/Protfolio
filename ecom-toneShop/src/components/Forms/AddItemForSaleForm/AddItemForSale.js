import React, { useState } from "react";
import Input from "../../UI/Input/Input";
import ImageBox from "./ImageBox/ImageBox";
import classes from "./AddItemForSale.module.css";
import {
  getStorage,
  ref,
  unploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import { appStorage } from "../../../firebase/config";

const addItemHandler = (e) => {
  e.preventDefault();
};

const AddItemForSale = () => {
  const [imageFile, setImageFile] = useState(null);
  const [images, setImages] = useState([]);

  return (
    <form onSubmit={addItemHandler} className={classes["form-container"]}>
      <Input className={"form-control"} type="text" label={"Title"} />
      <Input className={"form-control"} type="text" label={"Main Category"} />
      <Input
        className={"form-control"}
        type="text"
        label={"Secondary Category"}
      />
      <Input className={"form-control"} type="text" label={"Brand"} />
      <Input className={"form-control"} type="text" label={"Model"} />
      <Input className={"form-control"} type="text" label={"Description"} />
      <Input className={"form-control"} type="text" label={"Color"} />
      <Input
        className={"form-control"}
        type="number"
        minValue={0}
        step={0.01}
        label={"Price"}
      />
      <Input className={"form-control"} type="text" label={"Currency"} />
      <Input
        className={"form-control"}
        type="number"
        minValue={1}
        label={"Avaliable Quantity"}
      />
      {/* <Input className={"form-control"} type="checkbox" label={"Accept Bids"} animateLabel={false}/> */}
      {/* <Input className={"form-control"} type="checkbox" label={"Accept Offers"}  animateLabel={false}/> */}
      {/* <Input className={"form-control"} type="text" label={"Reserve Price"} /> */}
      {/* @TODO : limit files type and qty in state */}
      <div className={classes["image-gallery"]}>
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
        <ImageBox />
      </div>
      <button className={"btn"} type="submit">Add Item</button>
    </form>
  );
};

export default AddItemForSale;
