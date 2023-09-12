import { Url } from "next/dist/shared/lib/router/router";

export interface AnchorAttributes {
    path: Url, 
    icon?: string,
    children: String, 
}

export interface ModalAttributes {
    modalVisible: boolean, 
    toggleModal: () => void,
    navGroup: Array<NavigationGroup>
}

export interface NavigationGroup {
    name: String,
    path: Url,
    icon?: string
}