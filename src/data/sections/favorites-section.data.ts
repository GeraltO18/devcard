import type { FavoritesSection } from '@/types/sections/favorites-section.types';
import type { ReadonlyDeep } from 'type-fest';

const favoritesSectionData = {
  config: {
    title: 'My favorites',
    slug: 'favorites',
    icon: 'fa6-solid:star',
    visible: true,
  },
  books: {
    title: 'Books I read',
    data: [
      {
        image: import('@/assets/favorites/books/book-1.jpeg'),
        title: 'The Pragmatic Programmer: From Journeyman to Master',
        author: 'Andy Hunt, Dave Thomas',
        url: 'https://www.goodreads.com/book/show/4099.The_Pragmatic_Programmer',
      },
      {
        image: import('@/assets/favorites/books/book-2.jpg'),
        title: 'Domain-Driven Design: Tackling Complexity in the Heart of Software',
        author: 'Eric Evans',
        url: 'https://www.goodreads.com/book/show/179133.Domain_Driven_Design',
      },
      {
        image: import('@/assets/favorites/books/book-3.jpeg'),
        title: 'Clean Code: A Handbook of Agile Software Craftsmanship',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/3735293-clean-code',
      },
      {
        image: import('@/assets/favorites/books/book-4.jpeg'),
        title: 'The Clean Coder: A Code of Conduct for Professional Programmers',
        author: 'Robert C. Martin',
        url: 'https://www.goodreads.com/book/show/10284614-the-clean-coder',
      },
    ],
  },
} as const satisfies ReadonlyDeep<FavoritesSection>;

export default favoritesSectionData;
