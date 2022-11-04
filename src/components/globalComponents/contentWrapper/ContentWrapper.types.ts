import { ReactNode } from "react";

export interface IContentWrapper {
    children: ReactNode;
    dataTestId?: string
}