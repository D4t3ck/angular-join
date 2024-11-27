import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UiService } from '../../services/ui.service';
import { MenuService } from '../../services/menu.service';
import { slideInOut } from '../../animations';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  animations: [slideInOut],
})
export class HeaderComponent {
  router = inject(Router);
  authService = inject(AuthService);
  uiService = inject(UiService);
  menuService = inject(MenuService);

  constructor() {}

  logout() {
    this.uiService.toggleHeaderMenu();
    this.router.navigate(['/login']);
  }
}
