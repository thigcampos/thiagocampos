import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string,
    mode?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined, 
}

export interface SelectAttributes {
    type: string,
    callback: (tag: string, status: boolean) => void,
}