import { Url } from "next/dist/shared/lib/router/router";

export interface DesktopNavigation {
    children: String, 
    path: Url, 
    hasIcon?: Boolean
}