import { mdiArrowLeft } from '@mdi/js';

const homeNavigation = [
  {
    name: 'Notes',
    path: '/notes',
  },
  {
    name: 'Escritos',
    path: '/blog',
  },
  {
    name: 'Portfólio',
    path: '/portfolio',
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
    name: 'Notes',
    path: '/notes',
  },
  {
    name: 'Portfólio',
    path: '/portfolio',
  },
  {
    name: 'Sobre Mim',
    path: '/about',
  }
];

const notesNavigation = [
  {
    name: 'Início',
    path: '/',
    icon: mdiArrowLeft
  },
  {
    name: 'Escritos',
    path: '/blog',
  },
  {
    name: 'Portfólio',
    path: '/portfolio',
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
    name: 'Notes',
    path: '/notes',
  },
  {
    name: 'Escritos',
    path: '/blog',
  },
  {
    name: 'Portfólio',
    path: '/portfolio',
  }

];

const portfolioNavigation = [
  {
    name: 'Início',
    path: '/',
    icon: mdiArrowLeft
  },
  {
    name: 'Notes',
    path: '/notes',
  },
  {
    name: 'Escritos',
    path: '/blog',
  },
  {
    name: 'Sobre Mim',
    path: '/about',
  }
];

const postNavigation = [
  {
    name: 'Escritos',
    path: '/blog',
    icon: mdiArrowLeft
  },
  {
    name: 'Início',
    path: '/',
  },
  {
    name: 'Notes',
    path: '/notes',
  },
  {
    name: 'Portfólio',
    path: '/portfolio',
  },
  {
    name: 'Sobre Mim',
    path: '/about',
  }
];

const pageTitle = {
  home: 'Thiago Campos',
  notes: 'Notes | Thiago Campos',
  blog: 'Escritos | Thiago Campos',
  portfolio: 'Porfólio | Thiago Campos',
  about: 'Sobre mim | Thiago Campos'
};

export {
  homeNavigation,
  blogNavigation,
  notesNavigation,
  aboutNavigation,
  postNavigation,
  portfolioNavigation,
  pageTitle
};