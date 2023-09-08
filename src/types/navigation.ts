import { Url } from "next/dist/shared/lib/router/router";

export interface DesktopNavigation {
    children: String, 
    path: Url, 
    hasIcon?: Boolean
}

export interface MobileNavigation {
    modalVisible: boolean, 
    toggleModal: () => void,
    navGroup: Array<NavigationGroup>
}

export interface NavigationGroup {
    name: String,
    path: Url,
    hasIcon: boolean
}