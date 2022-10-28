import React, { FC } from "react";
import { IFormWrapper } from "./FormWrapper.types";
import cl from "./FormWrapper.module.scss";

const FormWrapper: FC<IFormWrapper> = ({ children, onSubmit }) => {
  return (
    <div className={cl.FormWrapper}>
      <form className={cl.Form} onSubmit={onSubmit}>
        {children}
      </form>
      ;
    </div>
  );
};

export default FormWrapper;
