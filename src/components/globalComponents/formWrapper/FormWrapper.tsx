import React, { FC } from "react";
import { IFormWrapper } from "./FormWrapper.types";
import cl from "./FormWrapper.module.scss";

const FormWrapper: FC<IFormWrapper> = ({ children, onSubmit, dataTestId }) => {
  return (
    <div className={cl.FormWrapper} data-testid={dataTestId}>
      <form className={cl.Form} onSubmit={onSubmit}>
        {children}
      </form>
    </div>
  );
};

export default FormWrapper;
