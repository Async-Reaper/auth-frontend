import React, { FC } from "react";
import { IInputProps } from "./Input.types";
import cl from "./Input.module.scss";

const Input: FC<IInputProps> = ({ type, placeholder, onChange }) => {
  return (
    <input
      className={cl.Input}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
