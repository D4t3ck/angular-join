import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      state('hidden', style({
        right: '-200px',
        display: 'none'
      })),
      state('visible', style({
        right: '0.5rem',
        display: 'flex'
      })),
      transition('hidden => visible', [
        style({ display: 'flex' }),
        animate('300ms ease-in')
      ]),
      transition('visible => hidden', [
        animate('300ms ease-out', style({ right: '-200px' })),
        style({ display: 'none' })
      ])
    ])
  ]
})
export class HeaderComponent {
  navbarVisible = false; 

  
  toggleNavbarMenu() {
    this.navbarVisible = !this.navbarVisible;
  }
}
