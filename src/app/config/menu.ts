import { NavbarItem } from '../interfaces';

export const navigations: NavbarItem[] = [
  {
    key: '1',
    title: 'Menu 1',
    url: '/',
    isEdit: false,
    children: [
      {
        key: '1-1',
        title: 'Menu 1-1',
        url: '/',
        isEdit: false,
        parent: '1',
        children: [
          {
            key: '1-1-1',
            title: 'Menu 1-1-1',
            url: '/',
            parent: '1-1',
            isEdit: false,
          },
          {
            key: '1-1-2',
            title: 'Menu 1-1-2',
            url: '/',
            parent: '1-1',
            isEdit: false,
          },
        ]
      }
    ]
  },
  {
    key: '2',
    title: 'Menu 2',
    url: '/',
    isEdit: false,
  },
];
