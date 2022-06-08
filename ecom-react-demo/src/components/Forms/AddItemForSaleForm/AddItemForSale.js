import React from "react";
import Input from "../../UI/Input/Input";
import classes from "./AddItemForSale.module.css";

const addItemHandler = (e) => {
  e.preventDefault();
};

const AddItemForSale = () => {
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
      <Input type="file" multiple="multiple" />
      <button type="submit">Add New Item</button>
    </form>
  );
};

export default AddItemForSale;
