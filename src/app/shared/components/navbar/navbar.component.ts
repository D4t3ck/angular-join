import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
menuService = inject(MenuService)

constructor(private router: Router) {}

  linkToImprint() {
    this.router.navigate(['imprint-blank']);
  }

  linkToPrivacyPolicy() {
    this.router.navigate(['privacy-policy-blank']);
  }
}
