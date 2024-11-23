import { Injectable } from '@angular/core';
import { Menu, UserInf } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  menu: Menu[] = [
    {
      routerLink: '/summary',
      name: 'Summary',
      icon: 'summary.png',
    },
    {
      routerLink: '/add-task',
      name: 'Add Task',
      icon: 'addTask.png',
    },
    {
      routerLink: '/board',
      name: 'Board',
      icon: 'board.png',
    },

    {
      routerLink: '/contacts',
      name: 'Contacts',
      icon: 'contacts.png',
    },
  ];

  imprint: UserInf = {
    routerLink: '/imprint',
    name: 'Imprint',
    icon: '',
  };

  privacyPolicy: UserInf = {
    routerLink: '/privacy-policy',
    name: 'Privacy Policy',
    icon: '',
  };

  userHelp: UserInf = {
    routerLink: '/user-help',
    name: 'Help',
    icon: 'help.png',
  };
}
