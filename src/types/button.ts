import { MouseEventHandler } from "react";

export interface Button {
    children: String,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined, 
    hasIcon?: Boolean
}