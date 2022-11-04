import React, { FC } from "react";
import cl from "./ContentWrapper.module.scss";
import { IContentWrapper } from "./ContentWrapper.types";

const ContentWrapper: FC<IContentWrapper> = ({ children, dataTestId }) => {
  return (
    <div className={cl.ContentWrapper} data-testid={dataTestId}>
      {children}
    </div>
  );
};

export default React.memo(ContentWrapper);
