import { Url } from "next/dist/shared/lib/router/router";

export interface ProjectCardAttributes {
    title: string,
    description: string,
    accessDescription: string,
    accessPath?: string,
    image: string
}