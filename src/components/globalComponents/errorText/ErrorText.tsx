import React, { FC } from "react";
import { IErrorText } from "./ErrorText.types";

const ErrorText: FC<IErrorText> = ({ children }) => {
  return <p>{children}</p>;
};

export default ErrorText;
