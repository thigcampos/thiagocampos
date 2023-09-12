import { Images } from "@/types";
import Riviera from "../../public/about/Riviera@2.webp";
import Lazio from "../../public/about/Lazio@2.webp";
import Serra from "../../public/about/Serra@2.webp";
import Sampa from "../../public/about/Sampa@2.webp";

const aboutImages: Array<Images> = [
    {
        url: Riviera,
        alt: "Photo of a random building in French Riviera in my Summer Euro trip in 2022"
    },
    {
        url: Lazio,
        alt: "Photo of the Coliseo in Rome in my Summer Euro trip in 2022"
    },
    {
        url: Serra,
        alt: "Photo of me and my girlfriend in Serra Negra"
    },
    {
        url: Sampa,
        alt: "Photo of Estação da Luz in São Paulo"
    },
];

export default aboutImages;