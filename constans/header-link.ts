import { nanoid } from 'nanoid';

export const LINKS = [
  {
    id: nanoid(),
    name: 'Главная',
    href: '/',
  },
  {
    id: nanoid(),
    name: 'О Компании',
    href: '/about',
  },
  {
    id: nanoid(),
    name: 'Проекты',
    href: '/projects',
  },
  {
    id: nanoid(),
    name: 'Новости',
    href: '/news',
  },
  {
    id: nanoid(),
    name: 'Отзывы и сертификаты',
    href: '/reviews',
  },
  {
    id: nanoid(),
    name: 'Контакты',
    href: '/contacts',
  },
];
