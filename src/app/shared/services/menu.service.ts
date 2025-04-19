import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  menu: Menu[] = [
    {
      routerLink: '/summary',
      name: 'Summary',
      icon: 'summary.svg',
    },
    {
      routerLink: '/add-task',
      name: 'Add Task',
      icon: 'addTask.svg',
    },
    {
      routerLink: '/board',
      name: 'Board',
      icon: 'board.svg',
    },

    {
      routerLink: '/contacts',
      name: 'Contacts',
      icon: 'contacts.svg',
    },
  ];

  imprint: Menu = {
    routerLink: '/imprint',
    name: 'Imprint',
    icon: '',
  };

  privacyPolicy: Menu = {
    routerLink: '/privacy-policy',
    name: 'Privacy Policy',
    icon: '',
  };

  userHelp: Menu = {
    routerLink: '/user-help',
    name: 'Help',
    icon: '',
  };
}
