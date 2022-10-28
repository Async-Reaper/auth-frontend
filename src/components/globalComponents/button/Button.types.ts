import { ReactNode } from "react";

export interface IButton {
    type: 'button' | 'submit';
    children: ReactNode;
    onClick?: () => void;
}