import { mdiArrowLeft } from '@mdi/js';

const homeNavigation = [
  {
    name: 'Blog',
    path: '/blog',
  },
  {
    name: 'About Me',
    path: '/about',
  }
];

const blogNavigation = [
  {
    name: 'Home',
    path: '/',
    icon: mdiArrowLeft
  },
  {
    name: 'About Me',
    path: '/about',
  }
];

const aboutNavigation = [
  {
    name: 'Home',
    path: '/',
    icon: mdiArrowLeft
  },
  {
    name: 'Blog',
    path: '/blog',
  }
];

const postNavigation = [
  {
    name: 'Blog',
    path: '/blog',
    icon: mdiArrowLeft
  },
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About Me',
    path: '/about',
  }
];

export {
  homeNavigation,
  blogNavigation,
  aboutNavigation,
  postNavigation
};