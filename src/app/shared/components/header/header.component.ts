import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [
    trigger('slideInOut', [
      state(
        'hidden',
        style({
          right: '-200px',
          display: 'none',
        })
      ),
      state(
        'visible',
        style({
          right: '0.5rem',
          display: 'flex',
        })
      ),
      transition('hidden <=> visible', [animate('300ms ease-in')]),
    ]),
  ],
})
export class HeaderComponent {
  navbarVisible = false;

  constructor(private router: Router) {}

  toggleNavbarMenu() {
    this.navbarVisible = !this.navbarVisible;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
