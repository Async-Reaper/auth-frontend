import React, { FC } from "react";
import { IErrorText } from "./ErrorText.types";
import cl from "./ErrorText.module.scss";

const ErrorText: FC<IErrorText> = ({ children, dataTestId }) => {
  return (
    <p className={cl.ErrorText} data-testid={dataTestId}>
      * {children}
    </p>
  );
};

export default ErrorText;
