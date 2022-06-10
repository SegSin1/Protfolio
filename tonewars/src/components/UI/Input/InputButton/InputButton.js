import React from "react";
import classes from "./InputButton.module.css";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { GoSearch } from "react-icons/go";

const InputButton = ({ text, icon, onClick, className, isActive, iconType }) => {
  return (
    <button
      disabled={!isActive}
      className={classes["input-btn"] + ` ${className}`}
    >
      {icon}
      {text}
    </button>
  );
};

export default InputButton;
