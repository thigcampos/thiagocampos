import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string,
    mode?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined, 
}