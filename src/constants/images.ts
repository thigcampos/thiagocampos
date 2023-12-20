import { Images } from '@/types';
import Riviera from '../../public/about/Riviera@2.webp';
import Lazio from '../../public/about/Lazio@2.webp';
import Serra from '../../public/about/Serra@2.webp';
import Sampa from '../../public/about/Sampa@2.webp';

const aboutImages: Array<Images> = [
  {
    url: Riviera,
    alt: 'Foto de um prédio aleatório tirada na Riviera Francesa na minha viagem de verão pela Europa em 2022'
  },
  {
    url: Lazio,
    alt: 'Foto do Coliseu em Roma tirada na minha viagem de verão pela Europa em 2022'
  },
  {
    url: Serra,
    alt: 'Foto minha e da minha conjugê em Serra Negra'
  },
  {
    url: Sampa,
    alt: 'Foto da Estação da Luz em São Paulo'
  },
];

export default aboutImages;