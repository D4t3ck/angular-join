import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';

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
        })
      ),
      state(
        'visible',
        style({
          right: '0.5rem',
        })
      ),
      transition('hidden <=> visible', [animate('300ms ease-in')]),
    ]),
  ],
})
export class HeaderComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);

  navbarVisible = false;

  constructor() {}

  toggleNavbarMenu() {
    this.navbarVisible = !this.navbarVisible;
  }

  linkToHelp() {
    this.uiService.navigate('user-help', true);
    this.navbarVisible = false;
  }

  linkToImprint() {
    this.uiService.navigate('imprint', true);
    this.navbarVisible = false;
  }

  linkToPrivacyPolicy() {
    this.uiService.navigate('privacy-policy', true);
    this.navbarVisible = false;
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
