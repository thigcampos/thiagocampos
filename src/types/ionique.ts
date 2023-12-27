import { Url } from 'next/dist/shared/lib/router/router';
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from 'react';

export interface ButtonAttributes extends ButtonHTMLAttributes<HTMLButtonElement> {
    icon?: string,
    mode?: string,
    children: ReactNode,
    onClick: MouseEventHandler<HTMLButtonElement> | undefined, 
}

export interface SelectAttributes {
    type: string,
    isActive: boolean,
    callback: (tag: string, status: boolean) => void,
}

export interface ShowcaseAttributes {
    title: string,
    description: string,
    image: string
    icon: string,
    path: Url,
}

export interface LanguageAttribute {
    language: string
}