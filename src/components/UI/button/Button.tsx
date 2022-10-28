import React, { FC } from "react";
import { IButton } from "./Button.types";
import cl from "./Button.module.scss";

const Button: FC<IButton> = ({ children, type }) => {
  return (
    <button className={cl.Button} type={type}>
      {children}
    </button>
  );
};

export default Button;
