import { mdiArrowLeft } from '@mdi/js';

const homeNavigation = [
  {
    name: 'Blogue',
    path: '/blog',
  },
  {
    name: 'Sobre Mim',
    path: '/about',
  }
];

const blogNavigation = [
  {
    name: 'Início',
    path: '/',
    icon: mdiArrowLeft
  },
  {
    name: 'Sobre Mim',
    path: '/about',
  }
];

const aboutNavigation = [
  {
    name: 'Início',
    path: '/',
    icon: mdiArrowLeft
  },
  {
    name: 'Blogue',
    path: '/blog',
  }
];

const postNavigation = [
  {
    name: 'Blogue',
    path: '/blog',
    icon: mdiArrowLeft
  },
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Sobre Mim',
    path: '/about',
  }
];

export {
  homeNavigation,
  blogNavigation,
  aboutNavigation,
  postNavigation
};