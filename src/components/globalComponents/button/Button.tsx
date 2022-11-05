import React, { FC } from "react";
import { IButton } from "./Button.types";
import cl from "./Button.module.scss";

const Button: FC<IButton> = ({ type, children, onClick, dataTestId }) => {
  return (
    <button
      className={cl.Button}
      type={type}
      onClick={onClick}
      data-testid={dataTestId}
    >
      {children}
    </button>
  );
};

export default Button;
