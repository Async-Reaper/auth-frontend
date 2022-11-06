import { ReactNode } from "react";

export interface IFormWrapper {
    onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    children: ReactNode;
    dataTestId?: string
}