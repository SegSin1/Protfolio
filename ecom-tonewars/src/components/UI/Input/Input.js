import React from "react";
import classes from "./Input.module.css";
import { useState, useRef } from "react";
import InputButton from "./InputButton/InputButton";

const Input = ({
  type,
  className,
  id,
  label,
  animateLabel,
  text,
  name,
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
  accept,
  required,
  showError,
  errorMsg,
  onClick,
}) => {
  const [isInputFocuse, setIsInputFocus] = useState(false);
  const [inputVal, setInputVal] = useState("");
  const inputRef = useRef();

  const inputChangeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const inputBlurHandler = (e) => {
    if (e.target.value.trim().length === 0) setIsInputFocus(false);
  };

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
            onClick={() => inputRef.current.focus()}
            className={[
              classes["label"],
              isInputFocuse && animateLabel !== false
                ? classes["label-focus"]
                : "",
            ].join(" ")}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          id={id}
          type={type}
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
          accept={accept}
          required={required}
          onClick={onClick}
          ref={inputRef}
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
