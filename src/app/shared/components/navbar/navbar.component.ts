import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuService = inject(MenuService);
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);

  constructor() {}
}
