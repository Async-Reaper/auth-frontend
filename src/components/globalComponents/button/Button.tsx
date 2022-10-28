import React, { FC } from "react";
import { IButton } from "./Button.types";
import cl from "./Button.module.scss";

const Button: FC<IButton> = ({ type, children, onClick }) => {
  return (
    <button className={cl.Button} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
