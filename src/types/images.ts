import { StaticImport } from "next/dist/shared/lib/get-img-props";

export interface Images {
    url: string | StaticImport,
    alt: string
}