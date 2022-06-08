import React from "react";
import classes from "./Input.module.css";

import InputButton from "./InputButton/InputButton";

const Input = ({
  type,
  className,
  id,
  label,
  placeholder,
  leftBtnText,
  rightBtnText,
  leftBtnClickHandler,
  rightBtnClickHandler,
  leftIconType,
  rightIconType,
}) => {
  return (
    <div className={classes["input-container"] + `${className}`}>
      {(leftIconType || leftBtnText) && (
        <InputButton
          className={"left-icon-btn"}
          iconType={leftIconType}
          onClick={leftBtnClickHandler}
        />
      )}
      <div>
        {label && <label htmlFor={id}>{label}</label>}
        <input
          id={id}
          type={type}
          className={classes[`input-${type}`]}
          placeholder={placeholder}
        />
      </div>
      {(rightBtnText || rightBtnText) && (
        <InputButton
          className={"right-icon-btn"}
          iconType={rightIconType}
          onClick={rightBtnClickHandler}
        />
      )}
    </div>
  );
};

export default Input;
