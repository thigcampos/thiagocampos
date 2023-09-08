import { ButtonHTMLAttributes, ImgHTMLAttributes, MouseEventHandler, ReactNode } from "react";

export interface Button extends ButtonHTMLAttributes<HTMLButtonElement> {
    hasIcon?: Boolean
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined, 
}