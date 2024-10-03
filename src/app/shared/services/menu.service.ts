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
}
