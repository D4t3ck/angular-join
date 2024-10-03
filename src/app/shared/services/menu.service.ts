import { Injectable } from '@angular/core';
import { Menu } from '../interfaces/menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constructor() {}

  menu: Menu[] = [
    {
      name: 'Summary',
      icon: 'summary.png',
    },
    {
      name: 'Add Task',
      icon: 'addTask.png',
    },
    {
      name: 'Board',
      icon: 'board.png',
    },

    {
      name: 'Contacts',
      icon: 'contacts.png',
    },
  ];
}
