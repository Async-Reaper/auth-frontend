import React, { FC } from "react";
import { IErrorText } from "./ErrorText.types";
import cl from "./ErrorText.module.scss";

const ErrorText: FC<IErrorText> = ({ children }) => {
  return <p className={cl.ErrorText}>* {children}</p>;
};

export default ErrorText;
