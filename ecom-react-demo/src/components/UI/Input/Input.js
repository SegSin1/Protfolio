import React from "react";
import classes from "./Input.module.css";
import { useState } from "react";
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
  minValue,
  maxValue,
  step,
  multiple,
}) => {
  const [isInputFocuse, setIsInputFocus] = useState(false);
  const [inputVal, setInputVal] = useState("");

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const inputBlurHandler = (e)=>{
    if(e.target.value.trim().length===0)
      setIsInputFocus(false)
  }

  return (
    <div className={classes["input-container"]}>
      {(leftIconType || leftBtnText) && (
        <InputButton
          className={"left-icon-btn"}
          iconType={leftIconType}
          onClick={leftBtnClickHandler}
        />
      )}
      <div
        style={{ position: "relative" }}
        onFocus={() => setIsInputFocus(true)}
        onBlur={inputBlurHandler}
      >
        {label && (
          <label
            className={[
              classes["label"],
              isInputFocuse ? classes["label-focus"] : "",
            ].join(" ")}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
          //className={classes[`input-${type}`] + ` ${className}`}
          className={[classes[`input-${type}`], classes[`${className}`]].join(
            " "
          )}
          placeholder={placeholder}
          min={minValue}
          max={maxValue}
          step={step}
          multiple={multiple}
          value={inputVal}
          onChange={inputChangeHandler}
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
