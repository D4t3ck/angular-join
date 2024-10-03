import { Component, inject } from '@angular/core';
import { MenuService } from '../../services/menu.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  menuService = inject(MenuService);

  constructor(private router: Router) {}
}
