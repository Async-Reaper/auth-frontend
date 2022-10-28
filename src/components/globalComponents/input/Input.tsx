import React, { FC } from "react";
import { IInputProps } from "./Input.types";
import cl from "./Input.module.scss";

const Input: FC<IInputProps> = ({ type, value, placeholder, onChange }) => {
  return (
    <input
      className={cl.Input}
      value={value}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
