import React, { FC } from "react";
import cl from "./ContentWrapper.module.scss";
import { IContentWrapper } from "./ContentWrapper.types";

const ContentWrapper: FC<IContentWrapper> = ({ children }) => {
  return <div className={cl.ContentWrapper}>{children}</div>;
};

export default ContentWrapper;
